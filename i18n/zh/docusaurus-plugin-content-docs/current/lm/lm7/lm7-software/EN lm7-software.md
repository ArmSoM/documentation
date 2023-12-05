# User Manual

The user manual for the LM7 development kit (ArmSoM-W3) to help software engineers master the use of the development board.

## Getting Started
Before starting to use the ArmSoM-W3, please prepare the following items:

### Tool Preparation
* ArmSoM-W3 main board
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
    * USB A to C data cable, to write images to the ArmSoM-W3 eMMC or use fastboot/adb commands over the type C port. You need a USB A to type C data cable connecting the ArmSoM-W3 and PC.  

### Optional Accessories 
* USB keyboard & mouse
* HDMI display and HDMI cable
  * The ArmSoM-W3 is equipped with a full-size HDMI port, with maximum support for 8K@60 display.
  * HDMI EDID is used to determine the best display resolution. This resolution will be selected on displays and TVs that support 1080p (or 4K/8K). If not for 1080p, EDID will find the next available resolution.
* Ethernet cable
  * The ArmSoM-W3 supports ethernet internet access, up to 2.5G.
  * The network cable is used to connect the ArmSoM-W3 to the local network and internet.  
* Camera module 
  * The ArmSoM-W3 supports camera capabilities.
  * It is recommended to use the imx415 module, available through the ArmSoM Official Taobao store.
* LCD display
  * The ArmSoM-W3 supports LCD display capabilities.
  * It is recommended to use the ArmSoM Display 10.1 HD, available through the ArmSoM Official Taobao store. 
* Audio cable
  * Standard 3.5mm jack can be used to play audio via speakers or headphones.
* WiFi/Bluetooth card
  * ArmSoM supports common wireless modules on the market, please check the Wireless section of the supported list.
  * It is recommended to use RTL8852be, AP6256
* USB-A to USB-C data cable

## Image Flashing Options  

[Flashing System Images](../../general-tutorial/flash-img)

## Interface Settings  

For the first time using the ArmSoM-W3 development kit, please first get familiar with the [Peripheral Interfaces](./LM7-introduction##armsom-LM7-development-kit-armsom-w3) to better understand the subsequent content.

### 2.5G Ethernet  

If you are using wired ethernet internet, please insert the network cable into the RJ45 port on the ArmSoM-W3, and then the wired connection prompt will pop up on the system desktop.  

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

### Audio  

View the sound cards in the system.  

```bash
root@linaro-alip:/# aplay -l
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

### USB Interface  

The ArmSoM-W3 provides two USB 2.0 and two USB 3.0 ports.   

### Type-C  

The ArmSoM-W3 is equipped with a full function USB Type‐CTM 3.1 port, supporting DP displays up to 4Kp60.  

### HDMI  

The ArmSoM-W3 has two HDMI output ports, both supporting CEC and HDMI 2.1, with maximum resolutions of 8Kp60 and 4Kp60 respectively.  

:::caution  
Note: Please confirm the interface specifications of the HDMI cable before use.
:::

### HDMI IN  

The ArmSoM-W3 uses the native rk3588 hdmi rx interface.The hdmi in interface can be tested using v4l2 commands.  

**View all video nodes**  

```  
ls /dev/video* 
```

**Find rk hdmirx device**  

Execute command v4l2-ctl -d  to specify video node. Execute command -D to view node info. Check for rk_hdmirx device using driver name.
```  
root@linaro-alip:/# v4l2-ctl -d /dev/video0 -D
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
root@linaro-alip:/# v4l2-ctl -d /dev/video17 --get-fmt-video
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

### RGB LED  

The ArmSoM-W3 has a power LED and user LED.  

- Power Indicator LED   
  The power LED is green. On the ArmSoM-W3 it is solid on by default when powered.

- User Indicator LED   
  The user LED is blue. By default its blinking state shows a running kernel.  

The user can control via commands:

```  
linaro@linaro-alip:/# sudo su
root@linaro-alip:/# echo timer > /sys/class/leds/blue:status/trigger
root@linaro-alip:/# echo activity > /sys/clas
```

### RTC  

- The ArmSoM-W3 is equipped with an RTC IC **hym8563**.  
- First, insert the RTC battery to power the RTC IC.
- Note that we should keep the RTC battery in the RTC connector and confirm the rtc hym8563 device has been created

```bash 
root@linaro-alip:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- Locating rtc0, then use the following commands to set system time and sync to rtc0.  

```bash
root@linaro-alip:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
root@linaro-alip:/# date
11/03/2023 Friday 10:33:12 UTC
root@linaro-alip:/# hwclock -w
root@linaro-alip:/# hwclock -r
root@linaro-alip:/# poweroff
```

- Removing RTC battery, after 10mins or longer insert battery and boot ArmSoM-W3, check if RTC is in sync with system clock  

```bash 
root@linaro-alip:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
root@linaro-alip:/# date
11/03/2023 Friday 10:36:01 UTC
```

### Fan  

The ArmSoM-W3 is equipped with a 5V fan, using a 1.25mm connector  

```
root@linaro-alip:/# echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/export
root@linaro-alip:/# echo 10000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/period
root@linaro-alip:/# echo 5000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/duty_cycle
root@linaro-alip:/# echo inversed  > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/polarity
root@linaro-alip:/# echo 1 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable
root@linaro-alip:/# echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable
```

### M.2 Interface  

The ArmSoM-W3 provides two M.2 connectors:  

- There is an M.2 E Key connector on the front of the board with a 2230 mounting hole, providing PCIe 2.1 single-channel, USB, SATA, SDIO, PCM and UART signals, supporting standard industrial M.2 WiFi 6 modules.   
  ArmSoM recommends using RTL8852BE, AP6256. Installed in the ArmSoM-W3 M.2 E slot and then it can get online after wifi setup.  

```
# Load driver  
root@linaro-alip:/# insmod system/lib/modules/rtkm.ko
root@linaro-alip:/# insmod system/lib/modules/rtkm.ko
root@linaro-alip:/# insmod /usr/lib/modules/rtk_btusb.ko
root@linaro-alip:/# lsmod
Module                  Size  Used by
8852be               4030464  0
rtkm                   16384  1 8852be
rtk_btusb              57344  0
```

#### WIFI
```  
# 1. Switch to super user mode
root@linaro-alip:/# sudo su
# 2. Open the WIFI
root@linaro-alip:/# nmcli r wifi on
# 3. Scan WIFI
root@linaro-alip:/# nmcli dev wifi
# 4. Connect to WIFI network
root@linaro-alip:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

#### BT  

```
# 1. Activate bluetooth  
root@linaro-alip:/# service bluetooth start
# 2. Enter to bluetoothctl
root@linaro-alip:/# bluetoothctl
# 3. Input the below commands to connect
root@linaro-alip:/# power on
root@linaro-alip:/# agent on
root@linaro-alip:/# default-agent
root@linaro-alip:/# scan on
root@linaro-alip:/# pair yourDeviceMAC
```

- There is an M.2 M Key connector on the back of the ArmSom-W3 with a quad-channel PCIe 3.0 interface. There is a standard M.2 2280 mounting hole on board that can deploy M.2 2280 NVMe SSDs.
  **<font color='red'>Note: This M.2 interface does not support M.2 SATA SSDs.</font>**  

```
root@linaro-alip:/# mkdir temp  
root@linaro-alip:/# mount /dev/nvme0n1 temp
```

### MIC Recording  

```bash
root@linaro-alip:/root# arecord -D hw:1,0 -f S16_LE -t wav -c2 -r 16000 -d 3 t.wav
Recording WAVE 't.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
root@linaro-alip:/root# aplay t.wav
Playing WAVE 't.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
```

### Camera  

#### MIPI-CSI   

  The camera uses the IMX415 module. After connecting and powering on the camera module you can view the boot logs.  

```bash
root@linaro-alip:/# dmesg | grep imx415
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
root@linaro-alip:/# v4l2-ctl -d /dev/video11 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll
```

  Use gst-launch-1.0 for direct video recording  
```
root@linaro-alip:/# gst-launch-1.0 v4l2src device=/dev/video11 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
```
![armsom-w3-imx415-camera](/img/lm/lm7/armsom-w3-imx415-camera.jpeg)  

#### USB3.0 Camera  

After connecting the usb3.0 camera, open the Qt V4L2 test Utility app for testing  

![armsom-w3-usb-camera-qtv4l2](/img/lm/lm7/armsom-w3-usb-camera-qtv4l2.png)  

Open video node: video21  

![armsom-w3-usb-camera-qtv4l2-select-video](/img/lm/lm7/armsom-w3-usb-camera-qtv4l2-select-video.png)  

Click the camera button and you will see the camera screen  

![armsom-w3-usb-camera-qtv4l2-play](/img/lm/lm7/armsom-w3-usb-camera-qtv4l2-play.png)

### MIPI DSI  

The ArmSoM-W3 has a maximum resolution up to 4K@60Hz