---
sidebar_label: "Camera module 1"
slug: /armsom-camera-module1
sidebar_position: 16
---

# ArmSoM Camera module 1

## 1. 摄像头介绍

ArmSoM 使用了高性能的超清晰4K相机 OV13850。

OV13850 模块具有以下特点：
* 像素尺寸：1.12 毫米 x 1.12 毫米
* 1300 万像素，30 帧每秒
* 支持图像尺寸为 13.2MP（4224 x 3136）、10MP（4224 x 2376）、2K（2112 x 1568）、EIS1080P（2112 x 1188）、EIS 720P（1408 x 792）等
* 双线串行总线控制（SCCB）
* 高达 4 通道 MIPI 串行输出
* 工作温度范围：0 ℃～60 ℃，存储温度范围：-30 ℃～80 ℃

![armsom-camera-module1](/img/accessories/armsom-camera-module1.png)

### 1.1 Pinout
|PIN NO| SYMBOL| Description |
| -------- | ----------- | ----------- |
|1| GND| Ground
|2| CSI_RX_D3N| Channel 3 differential negative signal
|3| CSI_RX_D3P| Channel 3 differential positive signal
|4| GND| Ground 
|5| CSI_RX_D2N| Channel 2 differential negative signal
|6| CSI_RX_D2P| Channel 2 differential positive signal
|7| GND |Ground 
|8| CSI_RX_CLK1N| Output clock differential negative signal
|9| CSI_RX_CLK1P| output clock differential negative signal
|10| GND| Ground 
|11| CSI_RX_D1N| Channel 1 differential negative signal
|12| CSI_RX_D1P |Channel 1 differential positive signal
|13| GND| Ground 
|14| CSI_RX_D0N |Channel 0 differential negative signal 
|15| CSI_RX_D0P| Channel 0 differential positive signal
|16| GND| Ground 
|17| CSI_RX_CLK0N|output clock differential negative signal
|18| CSI_RX_CLK1P|output clock differential positive signal
|19| MIPI_VSYNC| Frame synchronization signal
|20| MIPI_CLKOUT |clock signal
|21| MIPI_HSYNC| Line synchronization signal
|22| MIPI_CLKOUT| clock signal
|23| MIPI_CSI_PDN| control signal
|24| I2C_SCL| I2C clock signal
|25| I2C_SDA| I2C data signal 
|26| MIPI_CSI_PDN| control signal 
|27| RESET| Global reset signal
|28-29| VCC_RX2 |VCCIO 
|30-31| VCC_5V0 |VCCIO 
|32| GND| Ground 
|33| GND| Ground


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

## 2. 使用 Camera
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


## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/armsom-display-10-hd](https://www.armsom.org/product-page/armsom-display-10-hd)
 
ArmSoM 速卖通官方店: [https://www.aliexpress.com/item/3256806439494827.html](https://www.aliexpress.com/item/3256806439494827.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=770587380434](https://item.taobao.com/item.htm?id=770587380434)

OEM&ODM,  请联系: sales@armsom.org