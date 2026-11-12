import argparse
import os
import sys
import time
from pathlib import Path
os.environ.setdefault("DISPLAY", ":0")
os.environ.setdefault("QT_XCB_GL_INTEGRATION", "none")
sys.path.append("/usr/lib/python3/dist-packages")
import cv2
import numpy as np
import gi
gi.require_version("Gst", "1.0")
gi.require_version("GstVideo", "1.0")
from gi.repository import Gst, GstVideo
parser = argparse.ArgumentParser(description="Preview NV12 luma from a local H.264 MP4")
parser.add_argument("video", type=Path)
parser.add_argument("--mode", choices=("gray", "edges", "motion"), default="gray")
args = parser.parse_args()
if not args.video.is_file():
    parser.error(f"File not found: {args.video}")
Gst.init(None)
p = Gst.parse_launch("filesrc name=source ! qtdemux ! h264parse ! mppvideodec format=NV12 ! video/x-raw,format=NV12 ! appsink name=preview sync=false max-buffers=2 drop=false")
p.get_by_name("source").set_property("location", str(args.video.resolve()))
sink = p.get_by_name("preview")
frames = 0
previous = None
start = time.monotonic()
p.set_state(Gst.State.PLAYING)
try:
    while True:
        sample = sink.emit("try-pull-sample", 5 * Gst.SECOND)
        if sample is None:
            err = p.get_bus().pop_filtered(Gst.MessageType.ERROR)
            if err:
                raise RuntimeError(str(err.parse_error()))
            if sink.get_property("eos"):
                break
            raise RuntimeError("Timed out waiting for decoded frame")
        info = GstVideo.VideoInfo.new_from_caps(sample.get_caps())
        buf = sample.get_buffer()
        meta = GstVideo.buffer_get_video_meta(buf)
        stride = meta.stride[0] if meta else info.stride[0]
        offset = meta.offset[0] if meta else info.offset[0]
        ok, mapped = buf.map(Gst.MapFlags.READ)
        if not ok:
            raise RuntimeError("Cannot map NV12 frame")
        try:
            gray = np.ndarray((info.height, info.width), np.uint8, buffer=mapped.data, offset=offset, strides=(stride, 1))
            if frames == 0:
                print("NV12 luma", info.width, info.height, "stride", stride, flush=True)
            output = gray
            if args.mode == "edges":
                output = cv2.Canny(cv2.GaussianBlur(gray, (5, 5), 0), 60, 160)
            elif args.mode == "motion":
                smooth = cv2.GaussianBlur(gray, (5, 5), 0)
                if previous is None:
                    output = np.zeros_like(smooth)
                else:
                    diff = cv2.absdiff(smooth, previous)
                    _, output = cv2.threshold(diff, 25, 255, cv2.THRESH_BINARY)
                previous = smooth
            cv2.imshow("RK3576 MPP NV12 - " + args.mode, output)
            frames += 1
            period = info.fps_d / info.fps_n if info.fps_n > 0 else 1 / 30
            remain = start + frames * period - time.monotonic()
            if cv2.waitKey(max(1, round(remain * 1000))) & 255 in (27, ord("q")):
                break
        finally:
            buf.unmap(mapped)
finally:
    p.set_state(Gst.State.NULL)
    cv2.destroyAllWindows()
if not frames:
    raise RuntimeError("MPP produced no video frames")
elapsed = time.monotonic() - start
print(f"frames={frames} elapsed={elapsed:.3f}s fps={frames/elapsed:.2f}")
