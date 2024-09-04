---
description: ArmSoM-cm5-io
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "cm5-io"
sidebar_position: 6
slug: /armsom-cm5-io
---

# cm5-io Product Introduction

The cm5-io is the IO board for the ArmSoM CM5, with dimensions of 100x80x29 mm. It is a miniature AI computer designed specifically for makers, learners, and developers, enabling the rapid application of AI technology to various smart devices.

## Hardware Information

### Hardware Specifications

The cm5-io board is an expansion board specifically designed for the CM5 computing module, aimed at assisting in system and embedded board development.

- 1x HDMI output, 1x DP output
- 4x USB 3.0 Type-A
- Gigabit Ethernet
- Firmware flashing and device mode via USB Type-C
- GPIO: 40-pin header
- POE: 5V Power Over Ethernet
- Power connector: DC Barrel jack for 12V power input
- Expansion: M.2 (M-key, supports PCIe), microSD
- MIPI DSI: 1x 4-lane MIPI DSI, supports up to 4K@60fps (x4)
- MIPI CSI0: 1x 4-lane MIPI CSI, each lane up to 2.5Gbps
- MIPI CSI1: 1x 2-lane MIPI CSI, each lane up to 2.5Gbps
- Others: HPOUT, FAN, VRTC
- Dimensions: 100 x 80 x 29 mm (3.94 x 3.15 x 1.14 inches)
- Weight:

### Hardware Interfaces

![ArmSoM-cm5-io](/img/cm/cm5-io-layout.png)

:::tip
The cm5-io board uses a 12V DC power supply.
:::

### Pin Definition

<details>
    <summary>
        40-pin header
    </summary>
<div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
| |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |      |  
|140| CAN1_RX_M2 / I2C3_SDA_M0 / UART2_RX_M1 / GPIO4_B4_d   | <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |      |
|141| CAN1_TX_M2 / I2C3_SCL_M0 / UART2_TX_M1 / GPIO4_B5_d   |  <div className='green'>5</div>  | <div className='black'>6</div>  |GND | -           |
|20| PWM0_CH0_M0 / GPIO0_C4_d  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  <div className='orange-txt'>UART0_TX_M0</div> / GPIO0_D4_u |28|
|  - |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  <div className='orange-txt'>UART0_RX_M0</div> / GPIO0_D5_u |     29      |
| - |  -   | <div className='green'>11</div>  | <div className='green'>12</div> | -    |     -     |
|-|- | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
| - | - | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO2_D1_d /  UART4_RX_M0 / I2C6_SDA_M2 / PWM2_CH1_M2  | 89 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |   GPIO2_D0_d / UART4_TX_M0 / I2C6_SCL_M2 / PWM2_CH0_M2  |88|
| 97 |  I2C7_SDA_M1 / SPI3_MOSI_M0 / UART3_RX_M0 / GPIO3_A1_d | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |  - |
| 98 |  CAN1_TX_M3 / SPI3_MISO_M0 / SPDIF_RX1_M1 / UART3_CTSN_M0 / SPDIF_RX1_M1/  GPIO3_A2_d  | <div className='green'>21</div>  | <div className='green'>22</div> | SARADC_VIN4 |  - |
| 96 |  I2C7_SCL_M1 / SPI3_CLK_M0 / UART3_TX_M0 / GPIO3_A0_d  | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO3_A3_d / CAN1_RX_M3 / SPI3_CSN0_M0  / UART3_RTSN_M0 / SPDIF_TX1_M1 | 99|
|- |  GND | <div className='black'>25</div>  | <div className='green'>26</div> | - | - |
|  111 |  I2C4_SDA_M3 / UART2_RX_M2 / GPIO3_B7_d |  <div className='green'>27</div>  | <div className='green'>28</div> | GPIO2_D6_d / PWM10_M0 / GPIO3_B5_d  | 109 |
|112| I2C4_SCL_M3 / UART2_TX_M2 / GPIO3_C0_d  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |      -     |
|126|   SPI3_MOSI_M1 / PWM2_CH6_M3 / GPIO3_D6_d| <div className='green'>31</div>  | <div className='green'>32</div> | -  | -  |
| -  | - | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |  -    |
| -  | -   | <div className='green'>35</div>  | <div className='green'>36</div> |  - |   - |
| - | - | <div className='green'>37</div> | <div className='green'>38</div> |  -    |   -   |
| -|  GND | <div className='black'>39</div>  | <div className='green'>40</div> | -   |     -     |

</div>
</details>

<details>
    <summary>
        FAN
    </summary>
0.8mm connector(CN32)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | GND |
|3    | PWM | PWM control |
</details>

<details>
    <summary>
        HPOUT
    </summary>
0.8mm connector(CN3)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | AOR         | right channel      |
|2          | AOL         | left channel      |
|3          | GND         | GND          |
</details>

<details>
    <summary>
        VRTC
    </summary>

0.8mm connector(J27)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | Positive pole      |
|2          | -         | Negative pole    |
</details>

<details>
    <summary>
        PoE In(J5)
    </summary>

| Pin  | Assignment | Description |
| :--: | :--------: | :---------: |
|  1   |    VC1     |     TX1     |
|  2   |    VC2     |     RX1     |
|  3   |    VC3     |     TX2     |
|  4   |    VC4     |     RX2     |

</details>

## Resources

<div class="cards">
<a href="https://github.com/armbian/build" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>Armbian源码</h2>
            <p>适用于 ARM 开发板的 Linux</p>
        </div>
    </div>
</a>

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>cm5-io kernel</h2>
            <p>Improved Rockchip Linux</p>
        </div>
    </div>
</a>

<a href="https://github.com/rockchip-linux/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>cm5-io uboot</h2>
            <p>rockchip-linux/u-boot</p>
        </div>
    </div>
</a>
</div>

### Official Images

The ArmSoM team provides an official operating system based on Debian Bullseye.

The following systems have been tested and verified by ArmSoM:

- **Baidu Drive Link**: [Baidu Netdisk](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms)

| Logo | Description | Download |
|:----:|:-----------:|:--------:|
| ![debian-bullseye](/img/sige/debian12.png) | **Debian 12 for CM5:** <br/> Debian 12 introduces thousands of new and updated packages, supporting various desktop environments and processor architectures (including 32-bit and 64-bit PCs, ARM, MIPS, and PowerPC). One of the biggest changes is the upgrade of the Linux kernel from version 5.10 to 6.1 LTS. | [Google Drive link](https://drive.google.com/drive/folders/10OtqLU1c1MZ9IJR-aLSrevwY4NlzJNG0) |
| ![Android](/img/sige/android.png) | **Android 14 for CM5:** <br/> The latest OS upgrade makes your device more personalized, secure, and accessible. It offers improved photo quality, new themes, and AI-generated wallpapers. Privacy updates protect your health, safety, and data while expanding accessibility features. | [Google Drive link](https://drive.google.com/drive/folders/10OtqLU1c1MZ9IJR-aLSrevwY4NlzJNG0) |

### Third-Party Images

| Logo | Description | Download |
|:----:|:-----------:|:--------:|
| ![armbian-logo](/img/armbian-logo.webp) | **Armbian for CM5:** <br/> Armbian is a build framework that allows users to create ready-to-use images with a working kernel based on various user-space configurations for single-board computers. It provides a variety of pre-built images for some supported SBCs, typically based on Debian or Ubuntu. | [Armbian Image](https://github.com/armbian/community/releases) |
| ![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4) | **Ubuntu-Rockchip for CM5:** <br/> This project aims to provide the default Ubuntu experience for Rockchip RK3588 devices. Get started right away by choosing the appropriate Ubuntu server or desktop image, and enjoy a familiar environment. | [Ubuntu-Rockchip Image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases) |

### Hardware Resources 

Get schematics, PCB, DXF, and other hardware documentation for the cm5-io development kit to quickly start your development.

*Coming Soon. Please contact sales@armsom.org for more information.*

### Getting Started

The user manual for the CM5 development kit  to help software engineers master the use of the development board.

Before starting to use the cm5-io, please prepare the following items:

### Tool Preparation
* cm5-io main board
* Power supply (choose one of three)
  * USB Type-C PD 2.0 supporting 9V/2A, 12V/2A, 15V/2A and 20V/2A
  * DC 12V adapter, 2.5mm
  * PoE 12V
* System installation (choose one of two)
  * MicroSD /TF card boot
    * MicroSD card/TF card, Class 10 or above, at least 8GB SDHC, and card reader
    * Here are some high speed TF cards tested and verified by the ArmSoM team:  
      * SanDisk 32GB TF (MicroSD) (developer recommended)
      * SanDisk 32GB TF (MicroSD) Car Recorder & Security Monitoring Special Storage Card (recommended for long-term operation)  
      * Sandisk TF 8G Class10 microSD
      * Sandisk TF 128G Class10 microSD XC TF 128G 48MB/S
  * Onboard eMMC boot  
    * USB A to C data cable, to write images to the cm5-io eMMC or use fastboot/adb commands over the type C port. You need a USB A to type C data cable connecting the cm5-io and PC.  

### Optional Accessories 
* USB keyboard & mouse
* HDMI display and HDMI cable
  * The cm5-io is equipped with a full-size HDMI port, with maximum support for 8K@60 display.
  * HDMI EDID is used to determine the best display resolution. This resolution will be selected on displays and TVs that support 1080p (or 4K/8K). If not for 1080p, EDID will find the next available resolution.
* Ethernet cable
  * The cm5-io supports ethernet internet access, up to 2.5G.
  * The network cable is used to connect the cm5-io to the local network and internet.  
* Camera module 
  * The cm5-io supports camera capabilities.
  * It is recommended to use the imx415 module, available through the ArmSoM Official Taobao store.
* LCD display
  * The cm5-io supports LCD display capabilities.
  * It is recommended to use the ArmSoM Display 10.1 HD, available through the ArmSoM Official Taobao store. 
* Audio cable
  * Standard 3.5mm jack can be used to play audio via speakers or headphones.
* WiFi/Bluetooth card
  * ArmSoM supports common wireless modules on the market, please check the Wireless section of the supported list.
  * It is recommended to use RTL8852be, AP6256
* USB-A to USB-C data cable

### Image Flashing Options  

<div class="cards">
    <a href="./general-tutorial/flash-img" class="card-link">
        <div class="card">
            <div class="icon">
                <i>🎇</i>
            </div>
            <div class="content">
                <h2>Flash System Image</h2>
            </div>
        </div>
    </a>
</div>

### Interface Settings  

For the first time using the cm5-io development kit, please first get familiar with the [Peripheral Interfaces](#cm5-io) to better understand the subsequent content.

#### 2.5G Ethernet  

If you are using wired ethernet internet, please insert the network cable into the RJ45 port on the cm5-io, and then the wired connection prompt will pop up on the system desktop.  

How to manually configure ethernet?
- Switch to root user  

```bash
sudo su
```

- Use the command -ifconfig to check if ethernet is working properly, then showing the eth0 or enP4p65s0 network card and ethernet IP address. Also use the ping tool to test connectivity to the network.  

```bash 
ifconfig
ping www.baidu.com
```

- If unable to ping, please try:  

```bash
$ sudo dhclient eth0
or 
$ sudo dhclient enP4p65s0
```

#### Audio  

View the sound cards in the system.  

```bash
armsom@cm5-io:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipdp0 [rockchip,dp0], device 0: rockchip,dp0 spdif-hifi-0 [rockchip,dp0 spdif-hifi-0]
 Subdevices: 1/1
 Subdevice #0: subdevice #0
card 1: rockchipes8316 [rockchip-es8316], device 0: fe470000.i2s-ES8316 HiFi es8316.7-0011-0 [fe470000.i2s-ES8316 HiFi es8316.7-0011-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 3: rockchiphdmi0 [rockchip-hdmi0], device 0: rockchip-hdmi0 i2s-hifi-0 [rockchip-hdmi0 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 4: rockchiphdmi1 [rockchip-hdmi1], device 0: rockchip-hdmi1 i2s-hifi-0 [rockchip-hdmi1 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

#### USB Interface  

The cm5-io provides two USB 2.0 and two USB 3.0 ports.   

#### Type-C  

The cm5-io features a full-featured USB Type‐C 3.0 port which supports up to 8K@30fps DP display.

#### HDMI  

The cm5-io has two HDMI output ports, both supporting CEC and HDMI 2.1, with maximum resolutions of 8Kp60 and 4Kp60 respectively.  

:::caution  
Note: Please confirm the interface specifications of the HDMI cable before use.
:::

#### HDMI IN  

The cm5-io uses the native rk3588 hdmi rx interface.The hdmi in interface can be tested using v4l2 commands.  

**View all video nodes**  

```  
ls /dev/video* 
```

**Find rk hdmirx device**  

Execute command v4l2-ctl -d  to specify video node. Execute command -D to view node info. Check for rk_hdmirx device using driver name.
```  
armsom@cm5-io:/# v4l2-ctl -d /dev/video0 -D
Driver Info:
Driver name : rk_hdmirx
Card type : rk_hdmirx
Bus info : fdee0000.hdmirx-controller
Driver version : 5.10.66
Capabilities : 0x84201000
Video Capture Multiplanar
Streaming
Extended Pix Format
Device Capabilities
Device Caps : 0x04201000
Video Capture Multiplanar
Streaming
Extended Pix Format
```

**Query resolution and image formats**  

Query current resolution and image formats:
```
armsom@cm5-io:/# v4l2-ctl -d /dev/video17 --get-fmt-video
Format Video Capture Multiplanar:
Width/Height : 3840/2160
Pixel Format : 'NV16'
Field : None
Number of planes : 1
Flags : premultiplied-alpha, 000000fe
Colorspace : Unknown (1025fcdc)
Transfer Function : Unknown (00000020)
YCbCr Encoding : Unknown (000000ff)
Quantization : Default
Plane 0 :
Bytes per Line : 3840
Size Image : 16588800
```

**Capture image files**  

Save image files to device and view with 7yuv etc:

```
v4l2-ctl --verbose -d /dev/video17 \
--set-fmt-video=width=3840,height=2160,pixelformat='NV16' \  
--stream-mmap=4 --stream-skip=3 \
--stream-to=/data/4k60_nv16.yuv \
--stream-count=5 --stream-poll
```

#### RGB LED  

The cm5-io has a power LED and user LED.  

- Power Indicator LED   
  The power LED is green. On the cm5-io it is solid on by default when powered.

- User Indicator LED   
  The user LED is blue. By default its blinking state shows a running kernel.  

The user can control via commands:

```  
armsom@cm5-io:/# sudo su
root@cm5-io:/# echo timer > /sys/class/leds/blue:status/trigger
root@cm5-io:/# echo activity > /sys/clas
```

#### RTC  

- The cm5-io is equipped with an RTC IC **hym8563**.  
- First, insert the RTC battery to power the RTC IC.
- Note that we should keep the RTC battery in the RTC connector and confirm the rtc hym8563 device has been created

```bash 
armsom@cm5-io:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- Locating rtc0, then use the following commands to set system time and sync to rtc0.  

```bash
armsom@cm5-io:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
armsom@cm5-io:/# date
11/03/2023 Friday 10:33:12 UTC
armsom@cm5-io:/# hwclock -w
armsom@cm5-io:/# hwclock -r
armsom@cm5-io:/# poweroff
```

- Removing RTC battery, after 10mins or longer insert battery and boot cm5-io, check if RTC is in sync with system clock  

```bash 
armsom@cm5-io:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
armsom@cm5-io:/# date
11/03/2023 Friday 10:36:01 UTC
```

#### FAN  

The cm5-io is equipped with a 5V fan, using a 1.25mm connector  

```
armsom@cm5-io:/# echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/export
armsom@cm5-io:/# echo 10000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/period
armsom@cm5-io:/# echo 5000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/duty_cycle
armsom@cm5-io:/# echo inversed  > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/polarity
armsom@cm5-io:/# echo 1 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable
armsom@cm5-io:/# echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable
```

#### M.2 Interface  

The cm5-io provides two M.2 connectors:  

- There is an M.2 E Key connector on the front of the board with a 2230 mounting hole, providing PCIe 2.1 single-channel, USB, SATA, SDIO, PCM and UART signals, supporting standard industrial M.2 WiFi 6 modules.   
  ArmSoM recommends using RTL8852BE, AP6256. Installed in the cm5-io M.2 E slot and then it can get online after wifi setup.  

```
# Load driver  
armsom@cm5-io:/# insmod system/lib/modules/rtkm.ko
armsom@cm5-io:/# insmod system/lib/modules/rtkm.ko
armsom@cm5-io:/# insmod /usr/lib/modules/rtk_btusb.ko
armsom@cm5-io:/# lsmod
Module                  Size  Used by
8852be               4030464  0
rtkm                   16384  1 8852be
rtk_btusb              57344  0
```

- There is an M.2 M Key connector on the back of the cm5-io with a quad-channel PCIe 3.0 interface. There is a standard M.2 2280 mounting hole on board that can deploy M.2 2280 NVMe SSDs.
**<font color='red'>Note: This M.2 interface does not support M.2 SATA SSDs.</font>**  

```
armsom@cm5-io:/# mkdir temp  
armsom@cm5-io:/# mount /dev/nvme0n1 temp
```

#### WIFI
```  
# 1. Switch to super user mode
armsom@cm5-io:/# sudo su
# 2. Open the WIFI
root@cm5-io:/# nmcli r wifi on
# 3. Scan WIFI
root@cm5-io:/# nmcli dev wifi
# 4. Connect to WIFI network
root@cm5-io:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

#### BT  

```
# 1. Activate bluetooth  
armsom@cm5-io:/# service bluetooth start
# 2. Enter to bluetoothctl
armsom@cm5-io:/# bluetoothctl
# 3. Input the below commands to connect
armsom@cm5-io:/# power on
armsom@cm5-io:/# agent on
armsom@cm5-io:/# default-agent
armsom@cm5-io:/# scan on
armsom@cm5-io:/# pair yourDeviceMAC
```

#### MIC Recording  

```bash
armsom@cm5-io:~# arecord -D hw:1,0 -f S16_LE -t wav -c2 -r 16000 -d 3 t.wav
Recording WAVE 't.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
armsom@cm5-io:~# aplay t.wav
Playing WAVE 't.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
```

#### Camera  

##### MIPI-CSI   

  The camera uses the IMX415 module. After connecting and powering on the camera module you can view the boot logs.  

```bash
armsom@cm5-io:/# dmesg | grep imx415
[    2.547754] imx415 3-001a: driver version: 00.01.08
[    2.547767] imx415 3-001a:  Get hdr mode failed! no hdr default
[    2.547819] imx415 3-001a: Failed to get power-gpios
[    2.547826] imx415 3-001a: could not get default pinstate
[    2.547831] imx415 3-001a: could not get sleep pinstate
[    2.547850] imx415 3-001a: supply dvdd not found, using dummy regulator
[    2.547918] imx415 3-001a: supply dovdd not found, using dummy regulator
[    2.547945] imx415 3-001a: supply avdd not found, using dummy regulator
[    2.613843] imx415 3-001a: Detected imx415 id 0000e0
[    2.613890] rockchip-csi2-dphy csi2-dphy0: dphy0 matches m00_b_imx415 3-001a:bus type 5
[   18.386174] imx415 3-001a: set fmt: cur_mode: 3864x2192, hdr: 0
[   18.389067] imx415 3-001a: set exposure(shr0) 2047 = cur_vts(2250) - val(203)
```

  Use v4l2-ctl for image capture  
```
armsom@cm5-io:/# v4l2-ctl -d /dev/video11 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll
```

  Use gst-launch-1.0 for direct video recording  
```
armsom@cm5-io:/# gst-launch-1.0 v4l2src device=/dev/video11 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
```
![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg) 

##### USB3.0 Camera  

After connecting the usb3.0 camera, open the Qt V4L2 test Utility app for testing  

![armsom-w3-usb-camera-qtv4l2](/img/lm/armsom-w3-usb-camera-qtv4l2.png)   

Open video node: video21  

![armsom-w3-usb-camera-qtv4l2-select-video](/img/lm/armsom-w3-usb-camera-qtv4l2-select-video.png)  

Click the camera button and you will see the camera screen  

![armsom-w3-usb-camera-qtv4l2-play](/img/lm/armsom-w3-usb-camera-qtv4l2-play.png)

#### MIPI DSI  

The cm5-io has a maximum resolution up to 4K@60Hz