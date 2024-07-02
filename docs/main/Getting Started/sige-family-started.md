--- 
keywords: [armsom, armsom-sige, SBC, maker kit, Rockchip]
sidebar_label: "Sige Family Getting Started"
sidebar_position: 3
slug: /sige-family-started
---
# Sige Family User Manual 

The Sige Family user manual helps users understand the basic usage and preparation work needed for Sige Family. 

This article gives an overview of the product information to you in as much detail as possible.

## Comparison of Sige7/5/1 Specifications

|        | Sige7  | Sige5 | Sige1 |
| --------- | ----- | --- | --- | 
| SoC Process | 8nm | 8nm |  28nm |  
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3528 <br/> Cortex-A53 x4 @1.5GHz | 
| GPU | ARM Mali-G610 MP4  | ARM Mali G52 MC3 GPU | ARM Mali-450 GPU |
| NPU | 6TOPS@INT8(3 NPU core)  | 6TOPS@INT8(2 NPU core) | - |
| RAM | 4GB/8GB/16GB/32GB 64-bit LPDDR4x | 4/8/16GB 32-bit LPDDR4x |  2/4GB 32-bit LPDDR4x|
| eMMC| 64GB/128GB eMMC | 32/128GB eMMC| 16/32GB eMMC |
| TF Card | Molex Slot, Spec Version 2.x/3.x/4.x(SDSC/SDHC/SDXC)| Yes|  Yes|
| Output | 1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 4K@60fps <br/> 1x DP 1.4 up to 8K@30fps | 1x HDMI 2.1, supports 4K@120fps <br/> 1x MIPI DSI, up to 2K@60fps <br/>  1x DP1.4, up to 4K@120fps |  1x HDMI OUT2.0b, supports 4K@60fps|
| Decoder |  8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|  H.264, H.265, VP9, AV1 and AVS2 etc. up to 8K@30fps or4K@120fps| H.265, H.264, AVS2 4K@60fps|
| Encoder | 8K@30fps H.265 / H.264| H.264 and H.265 up to 4K@60fps| H.264 and H.265 up to1080@60fps|
| Wi-Fi | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB |  SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs|
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | - |  - |
| Ethernet | 2x 2.5G Ethernet | 2x Gigabit Ethernet| Gigabit Ethernet & 2.5G Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 2× USB 3.0 (capable of simultaneous full throughput) <br/> 2× USB 2.0 | 2x USB 2.0|
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG）| 1x USB-C Power jack & 1x USB2.0 OTG|
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI |  -|
| 40-Pin Header| yes | yes | yes |
| LEDs | 2x LEDs | 2x LEDs | 2x LEDs|
|Board Dimensions| 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm |

<!-- ## Comparison of Sige7/5 and RPI5 Specifications
|        | Sige7  | Sige5 | Raspberry Pi5 |
| --------- | ----- | --- |--- | 
| SoC Process | 8nm | 8nm | 16nm |
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | BCM2712 Cortex-A76x4 @2.4GHz |
| GPU | ARM Mali-G610 MP4  | ARM Mali G52 MC3 GPU |VideoCore VII GPU @ 800 MHz| 
| NPU | 6TOPS@INT8(3 NPU core)  | 6TOPS@INT8(2 NPU core) | - |
| RAM | 4GB/8GB/16GB/32GB 64-bit LPDDR4x | 4/8/16GB 32-bit LPDDR4x | 1/2/4/8 GB LPDDR4X-4267 SDRAM |
| eMMC| 64GB/128GB eMMC | 32/128GB eMMC | - | 
| TF Card | Molex Slot, Spec Version 2.x/3.x/4.x(SDSC/SDHC/SDXC)| Yes| Yes|
| Output | 1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 4K@60fps <br/> 1x DP 1.4 up to 8K@30fps | 1x HDMI 2.1, supports 4K@120fps <br/> 1x MIPI DSI, up to 2K@60fps <br/>  1x DP1.4, up to 4K@120fps | Dual 4kp60 HDMI display output|
| Decoder |  8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|  H.264, H.265, VP9, AV1 and AVS2 etc. up to 8K@30fps or4K@120fps| 4kp60 HEVC decoder|
| Encoder | 8K@30fps H.265 / H.264| H.264 and H.265 up to 4K@60fps| - |
| Wi-Fi | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | Dual-band 802.11ac Wi-Fi 5|
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | - | 
| Ethernet | 2x 2.5G Ethernet | 2x Gigabit Ethernet| Gigabit Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 2× USB 3.0 (capable of simultaneous full throughput) <br/> 2× USB 2.0 |
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack | 
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | Dual 4-lane MIPI CSI/DSI transceivers |
| 40-Pin Header| yes | yes | yes | 
| LEDs | 2x LEDs | 2x LEDs | - | 2x LEDs|
|Board Dimensions| 92mm × 62mm | 92mm × 62mm | 85.0 x 56.0 mm |  -->




### Tool Preparation

Before starting to use the ArmSoM-Sige7, please prepare the following items:
* Sige7 main board
* Power supply: USB Type-C PD
  * Support 9V/2A, 12V/2A, 15V/2A
* System installation (choose one)
  * MicroSD /TF card boot
    * MicroSD card/TF, Class 10 or above, at least 8GB SDHC and a card reader
    * High speed TF cards tested by the ArmSoM team:  
      * SanDisk 32GB TF (MicroSD) (developer recommended)
      * SanDisk 32GB TF (MicroSD) Dashcam & Security Camera Storage Card (recommended for long-term operation)  
      * Sandisk TF 8G Class10 microSD 
      * Sandisk TF 128G Class10 microSD XC TF 128G 48MB/S：
  * Onboard eMMC boot  
    * USB Type-C data cable to write image from Type-C port on Sige7 to eMMC. You need to connect Sige7 to a PC using the Type-C cable.  

### Optional Accessories 
* USB keyboard and mouse
* HDMI display and HDMI cable
  * Sige7 features a full-sized HDMI port, and supports up to 8K@60 display
  * HDMI EDID is used to determine optimum display resolution. 1080p (or 4K/8K) will be selected on displays and TVs that support it. If 1080p is not supported, EDID will find the next available resolution.
* Ethernet cable 
  * Sige7 supports 2.5Gb Ethernet
  * The network cable is used to connect Sige7 to a local network and the Internet
* Camera module
  * Sige7 supports camera function
  * We recommend using the imx415 module, available through the ArmSoM Taobao store or AliExpress or email to sales@armsom.org
* LCD display
  * Sige7 supports LCD display
  * We recommend the ArmSoM Display 10.1 HD, available through the ArmSoM Taobao store or AliExpress or email to sales@armsom.org
* Audio cable
  * Available for 0.8mm vertical socket
* USB-A to USB-C data cable

### Power Supply

The table below shows the power specifications required for powering the ArmSoM-Sige series. You can use any high-quality power supply that provides the correct power mode.

| Model    | Recommended Power (Voltage/Current) | Power Mode |
| -------- | ---------------------------------- | ---------- |
| Sige7    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige5    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige1    | 5V/2.5A, 12V/2A                    | Non-PD     |

Insert the power supply into the port labeled "DCIN". Please make sure to use the correct port!

## Image Flashing

[Flash System Image](../general-tutorial/flash-img)

## Interface Setup 

If this is your first time using the ArmSoM-Sige7, please familiarize yourself with the [Peripheral Interfaces](#Hardware Interface) to better understand the content below.

### Debug Serial Port

Connect the USB to TTL serial cable as follows:

![armsom-sige5-debug](/img/sige/armsom-sige7-debug.png)

| sige5          | Connect | Serial Module |
| -------------- | ------- | ------------ |
| **GND** (pin 6)| --->   | GND          |
| **TX** (pin 8) | --->   | RX           |
| **RX** (pin 10)| --->   | TX           |

### 2.5G Ethernet

If using wired Ethernet, insert the network cable into the RJ45 port on the ArmSoM-Sige7 and the wired connection will pop up on the desktop.  

- Use the `ifconfig` command to check if Ethernet is working normally - it will display the NIC enP2p33s0 or enP4p65s0 and Ethernet IP address. Also use the `ping` tool to test network connectivity.

```bash
ifconfig
ping mi.com
```

- If unable to ping,please try: 

```bash 
$ sudo dhclient enP2p33s0
or  
$ sudo dhclient enP4p65s0
```

### HDMI

The ArmSoM-Sige7 has an HDMI output port which supports CEC and HDMI 2.1, maximum resolution up to 8Kp60.

### USB

The ArmSoM-Sige7 provides one USB 2.0 and one USB 3.0 port.  

**USB3.0 Camera**

After connecting a USB 3.0 camera, you can download cheese and use the camera with the following commands:

```bash
armsom@armsom-sige7: sudo apt update
armsom@armsom-sige7: sudo apt install cheese
```

You can also preview the camera in the terminal:
```bash  
gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;
```

Take Photo:
```bash
gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=/home/armsom/test.jpg; 
```

Record video: 
```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/armsom/test.mp4
```

![armsom-sige7-gst](/img/sige/armsom-sige7-gst.png)

### Audio

View sound cards in the system:  

```bash 
armsom@armsom-sige7:/# aplay -l  
**** List of PLAYBACK Hardware Devices ****  
card 0: rockchipdp0 [rockchip,dp0], device 0: rockchip,dp0 spdif-hifi-0 [rockchip,dp0 spdif-hifi-0]  
 Subdevices: 1/1  
 Subdevice #0: subdevice #0  
card 1: rockchipes8316 [rockchip-es8316], device 0: fe470000.i2s-ES8316 HiFi es8316.7-0011-0 [fe470000.i2s-ES8316 HiFi es8316.7-0011-0]  
  Subdevices: 1/1  
  Subdevice #0: subdevice #0  
card 2: rockchiphdmi0 [rockchip-hdmi0], device 0: rockchip-hdmi0 i2s-hifi-0 [rockchip-hdmi0 i2s-hifi-0]  
  Subdevices: 1/1  
  Subdevice #0: subdevice #0
```

### FAN  

The Sige7 features a 5V fan using a 0.8mm connector  

```  
armsom@armsom-sige7:/# echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon8/pwm1  
```

### Type-C  

The Sige7 features a full-featured USB Type‐C 3.0 port which supports up to 8K@30fps DP display.

### 40Pin  

The Sige7 provides a 40-pin GPIO header, compatible with most sensors on the market.   

### RGB LED  

The Sige7 has two user LEDs - green and red.  

- User Green LED  
  Constantly indicates running kernel by default.   

- User Red LED
  Off by default, can be controlled by user.  

Users can control with commands:   

```  
armsom@armsom-sige7:/# sudo su  
armsom@armsom-sige7:/# echo timer > /sys/class/leds/red/trigger  
armsom@armsom-sige7:/# echo activity > /sys/class/leds/red/trigger
```

### RTC  

- The Sige7 features an **hym8563** RTC chip.  
- First, insert the RTC battery using the 2-pin header to supply power to the RTC IC.
- Note that we should keep the RTC battery in the RTC connector and confirm the rtc hym8563 device which has been created. 

```bash 
armsom@armsom-sige7:/# dmesg | grep rtc  
[ 6.407133] rtc-hym8563 6-0051: rtc information is valid  
[ 6.412731] rtc-hym8563 6-0051: registered as rtc0  
[ 6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)  
```

- Find rtc0, then use the following commands to set system time and sync to rtc0:  

```bash
armsom@armsom-sige7:/# hwclock -r  
2023-11-03 10:32:40.461910+00:00  
armsom@armsom-sige7:/# date  
Fri 3rd Nov 10:33:12 UTC 2023
armsom@armsom-sige7:/# hwclock -w  
armsom@armsom-sige7:/# hwclock -r  
armsom@armsom-sige7:/# poweroff  
```

- Turn off the RTC battery for 10+ minutes, insert the battery again and boot Sige7, and check if RTC synced with system clock:   

```bash
armsom@armsom-sige7:/# hwclock -r  
2023-11-03 10:35:40.461910+00:00  
armsom@armsom-sige7:/# date
Fri 3rd Nov 10:36:01 UTC 2023
```

### M.2

The ArmSoM-Sige7 provides an M.2 connector:  

- There is an M.2 M Key connector on the back with a 4-lane PCIe 3.0 interface. The board has a standard M.2 2280 mounting hole to deploy M.2 2280 NVMe SSDs.  
  **<font color='red'>Note: This M.2 interface does NOT support M.2 SATA SSDs.</font>**  

```  
armsom@armsom-sige7:/# mkdir temp  
armsom@armsom-sige7:/# mount /dev/nvme0n1 temp
```

### Camera  

#### MIPI-CSI

Use the IMX415 module for the camera. After connecting and powering on the camera module you can view the boot log:  

```bash  
armsom@armsom-sige7:/# dmesg | grep imx415  
[ 2.547754] imx415 3-001a: driver version: 00.01.08  
[ 2.547767] imx415 3-001a: Get hdr mode failed! no hdr default  
[ 2.547819] imx415 3-001a: Failed to get power-gpios
[ 2.547826] imx415 3-001a: could not get default pinstate
[ 2.547831] imx415 3-001a: could not get sleep pinstate
[ 2.547850] imx415 3-001a: supply dvdd not found, using dummy regulator  
[ 2.547918] imx415 3-001a: supply dovdd not found, using dummy regulator  
[ 2.547945] imx415 3-001a: supply avdd not found, using dummy regulator  
[ 2.613843] imx415 3-001a: Detected imx415 id 0000e0  
[ 2.613890] rockchip-csi2-dphy csi2-dphy0: dphy0 matches m00_b_imx415 3-001a:bus type 5  
[ 18.386174] imx415 3-001a: set fmt: cur_mode: 3864x2192, hdr: 0  
[ 18.389067] imx415 3-001a: set exposure(shr0) 2047 = cur_vts(2250) - val(203) 
```

  Use v4l2-ctl for image capture:  
```  
// MIPI-CSI1  
armsom@armsom-sige7:/# v4l2-ctl -d /dev/video31 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll  

// MIPI-CSI2
armsom@armsom-sige7:/# v4l2-ctl -d /dev/video22 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll
```

Record video directly with gst-launch-1.0:  
```  
// MIPI-CSI1  
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink  

// MIPI-CSI2
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
```
![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg)
 
### MIPI DSI  

The ArmSoM-Sige7 supports up to 4K@60Hz resolution over MIPI DSI
