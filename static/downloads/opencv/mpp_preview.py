#!/usr/bin/env python3
"""Preview local H.264/H.265 MP4 video via Rockchip MPP and OpenCV."""
import argparse
import json
import os
from pathlib import Path
import subprocess
import time

os.environ.setdefault("DISPLAY", ":0")
os.environ.setdefault("QT_XCB_GL_INTEGRATION", "none")

import cv2
import numpy as np


def preview(path):
    probe = subprocess.check_output([
        "ffprobe", "-v", "error", "-select_streams", "v:0",
        "-show_entries", "stream=codec_name,width,height,avg_frame_rate",
        "-of", "json", str(path)
    ])
    stream = json.loads(probe)["streams"][0]
    parser = {"h264": "h264parse", "hevc": "h265parse"}.get(stream["codec_name"])
    if parser is None:
        raise ValueError("Expected H.264 or H.265 video in an MP4/MOV container")
    w, h = stream["width"], stream["height"]
    num, den = map(int, stream["avg_frame_rate"].split("/"))
    delay = max(1, round(1000 * den / num)) if num and den else 33
    stride = (w + 3) & ~3
    cmd = [
        "gst-launch-1.0", "-q", "filesrc", f"location={path}", "!",
        "qtdemux", "!", parser, "!", "mppvideodec", "!", "videoconvert",
        "!", f"video/x-raw,format=GRAY8,width={w},height={h}",
        "!", "fdsink", "fd=1", "sync=false"
    ]
    title = "RK3576 MPP - grayscale"
    frames = 0
    start = time.monotonic()
    stopped = False
    with subprocess.Popen(cmd, stdout=subprocess.PIPE) as decoder:
        try:
            while True:
                raw = decoder.stdout.read(stride * h)
                if not raw:
                    break
                if len(raw) != stride * h:
                    raise RuntimeError("Incomplete grayscale frame")
                gray = np.frombuffer(raw, np.uint8).reshape(h, stride)[:, :w]
                cv2.imshow(title, gray)
                frames += 1
                if cv2.waitKey(delay) & 255 in (27, ord("q")):
                    stopped = True
                    break
            if not stopped and decoder.wait(timeout=5):
                raise RuntimeError("MPP pipeline failed")
        finally:
            if decoder.poll() is None:
                decoder.kill()
            cv2.destroyAllWindows()
    if not frames:
        raise RuntimeError("MPP produced no video frames")
    elapsed = time.monotonic() - start
    print(f"elapsed={elapsed:.3f}s preview_fps={frames / elapsed:.2f}")
    print(f"OpenCV {cv2.__version__} | mppvideodec | {w}x{h} | frames={frames}")


if __name__ == "__main__":
    args = argparse.ArgumentParser(description=__doc__)
    args.add_argument("video", type=Path, help="Local H.264/H.265 MP4 or MOV path")
    path = args.parse_args().video.resolve()
    if not path.is_file():
        args.error(f"File not found: {path}")
    try:
        preview(path)
    except (OSError, ValueError, IndexError, RuntimeError, subprocess.SubprocessError, cv2.error) as exc:
        args.exit(1, f"Preview failed: {exc}\n")
