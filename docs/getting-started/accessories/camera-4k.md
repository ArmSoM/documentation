---
sidebar_label: "ArmSoM Camera 4K"
sidebar_position: 1
---
# ArmSoM Camera 4K

# 1. Enable Camera Overlay

## 1.1 Ubuntu22.04 image to enable camera overlay

- Use nano to open the /boot/firmware/ubuntuEnv.txt file:

```bash
sudo nano /boot/firmware/ubuntuEnv.txt
```

- Find the "overlays=" keyword in the file, and add the following: 

```bash
overlays=armsom-sige7-camera-imx415-4k
```

Shortcut keys: Ctrl + S to save, Ctrl + X to exit

After editing and saving, restart the device to change the Overlays settings to support the camera.

## 1.2 Armbian image to enable camera overlay

- Use nano to open the /boot/armbianEnv.txt file:

```bash 
sudo nano /boot/armbianEnv.txt
```

- Find or add the "overlays=" keyword in the file.


```bash
overlays=armsom-sige7-camera-imx415-4k 
```

Shortcut keys: Ctrl + S to save, Ctrl + X to exit  

After editing and saving, restart the device to change the Overlays settings to support the camera.

# II. Use the Camera

## You can download cheese and then use the camera with the following commands:

```bash
armsom@armsom: sudo apt update
armsom@armsom: sudo apt install cheese  
armsom@armsom: ./cheese
```

## Or you can also preview the camera using terminal commands:

- Preview camera 1:

```bash
gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 ! videoconvert ! autovideosink
```

- Preview camera 2: 

```bash
gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 ! videoconvert ! autovideosink 
```

