---
sidebar_label: "Camera module 1"
slug: /armsom-camera-module1
sidebar_position: 15
---
# ArmSoM  Camera Module 1

## 1. Camera Introduction

ArmSoM uses a high-performance ultra clear 4K camera ov13850.

The OV13850 module has the following characteristics:
* Pixel size: 1.12 millimeters x 1.12 millimeters
* 13 million pixels, 30fps
* Supports image sizes of 13.2MP (4224 x 3136), 10MP (4224 x 2376), 2K (2112 x 1568), EIS1080P (2112 x 1188), EIS 720P (1408 x 792), etc
Dual Wire Serial Bus Control (SCCB)
* Up to 4-channel MIPI serial output
* Working temperature range: 0 ℃~60 ℃, storage temperature range: -30 ℃~80 ℃

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

## 2. Enable Camera Overlay

### 2.1 Ubuntu22.04 image to enable camera overlay

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

### 2.2 Armbian image to enable camera overlay

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

## 3. Use the Camera

You can download cheese and then use the camera with the following commands:

```bash
armsom@armsom: sudo apt update
armsom@armsom: sudo apt install cheese  
armsom@armsom: ./cheese
```

Or you can also preview the camera using terminal commands:

- Preview camera 1:

```bash
gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 ! videoconvert ! autovideosink
```

- Preview camera 2: 

```bash
gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 ! videoconvert ! autovideosink 
```

## Easy to buy sample
ArmSoM online shop: [https://www.armsom.org/product-page/camera-module-1](https://www.armsom.org/product-page/camera-module-1)
 
ArmSoM Aliexpress online shop: [https://ja.aliexpress.com/item/3256806937514891.html](https://ja.aliexpress.com/item/3256806937514891.html) 

ArmSoM Taobao shop: [https://item.taobao.com/item.htm?ft=t&id=802634842391](https://item.taobao.com/item.htm?ft=t&id=802634842391)

OEM&ODM, please contact: sales@armsom.org