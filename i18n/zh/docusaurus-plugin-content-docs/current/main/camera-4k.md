---
sidebar_label: "Camera 4K"
slug: /armsom-camera-4k
sidebar_position: 16
---
#  ArmSoM Camera 4K


##  1. 启用Camera的overlay

### 1.1 Ubuntu22.04镜像启用camera的overlay
- 使用nano 打开/boot/firmware/ubuntuEnv.txt文件：

```bash
sudo nano /boot/firmware/ubuntuEnv.txt
```

- 在该文件中找到 "overlays=" 这个关键词，并添加如下内容：

```bash
overlays=armsom-sige7-camera-imx415-4k
```
快捷键：Ctrl + S保存    Ctrl + X退出

编辑并保存好之后重启设备来更改Overlays设置以支持camera。

### 1.2 Armbian镜像启用camera的overlay

- 使用nano 打开/boot/armbianEnv.txt文件：

```bash
sudo nano /boot/armbianEnv.txt
```

- 在该文件中找到或者添加 "overlays=" 这个关键词。


```bash
overlays=armsom-sige7-camera-imx415-4k
```
快捷键：Ctrl + S保存    Ctrl + X退出

编辑并保存好之后重启设备来更改Overlays设置以支持camera。

### 2. 使用 Camera
你可以下载 cheese 然后使用以下命令使用摄像机:

```bash
armsom@armsom: sudo apt update
armsom@armsom: sudo apt install cheese
armsom@armsom: ./cheese
```

或者，你也可以使用终端命令打开相机预览:
- 预览摄像头1：
```bash
gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 ! videoconvert ! autovideosink
```
- 预览摄像头2：
```bash
gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 ! videoconvert ! autovideosink
```