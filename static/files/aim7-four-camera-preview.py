import gi, signal
gi.require_version('Gtk','3.0')
gi.require_version('Gst','1.0')
gi.require_version('GstVideo','1.0')
gi.require_version('GdkX11','3.0')
from gi.repository import Gtk,Gst,GstVideo,GdkX11,GLib,Gdk
Gst.init(None)
pipelines=[]
windows=[]
def stop(*args):
    for p in pipelines: p.set_state(Gst.State.NULL)
    Gtk.main_quit()
def message(bus,msg,title):
    if msg.type==Gst.MessageType.ERROR:
        error,debug=msg.parse_error()
        print(title,'ERROR',error,debug,flush=True)
    elif msg.type==Gst.MessageType.EOS:
        print(title,'EOS',flush=True)
def report(title,fps,droprate,average):
    print(title,'fps=%.2f drop=%.2f avg=%.2f'%(fps,droprate,average),flush=True)
for i,(title,node,fps) in enumerate([
    ('CAM0 IMX219 (i2c2)',53,15),
    ('CAM1 IMX219 (i2c4)',62,15),
    ('OV13850 (i2c6)',44,30),
    ('OV13850 (i2c3)',71,30),
]):
    win=Gtk.Window(title=title)
    win.set_decorated(False)
    win.set_type_hint(Gdk.WindowTypeHint.DOCK)
    win.set_default_size(960,540)
    win.move((i%2)*960,(i//2)*540)
    win.set_keep_above(True)
    win.connect('destroy',stop)
    box=Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
    label=Gtk.Label(label=title)
    box.pack_start(label,False,False,0)
    area=Gtk.DrawingArea()
    box.pack_start(area,True,True,0)
    win.add(box); win.show_all()
    sink=Gst.ElementFactory.make('ximagesink')
    sink.set_property('sync',False)
    sink.set_property('handle-events',False)
    GstVideo.VideoOverlay.set_window_handle(sink,area.get_window().get_xid())
    p=Gst.parse_launch(f'v4l2src device=/dev/video{node} ! video/x-raw,format=NV12,width=640,height=480,framerate={fps}/1 ! queue max-size-buffers=2 leaky=downstream ! videoconvert ! fpsdisplaysink name=fps text-overlay=false sync=false signal-fps-measurements=true fps-update-interval=5000')
    display=p.get_by_name('fps')
    display.set_property('video-sink',sink)
    display.connect('fps-measurements',lambda obj,f,d,a,t=title:report(t,f,d,a))
    bus=p.get_bus(); bus.add_signal_watch(); bus.connect('message',message,title)
    pipelines.append(p); windows.append(win)
    p.set_state(Gst.State.PLAYING)
signal.signal(signal.SIGTERM,lambda *_:GLib.idle_add(stop))
signal.signal(signal.SIGINT,lambda *_:GLib.idle_add(stop))
Gtk.main()
