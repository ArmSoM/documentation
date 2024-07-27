--- 
keywords: [armsom, armsom-sige, SBC, maker kit, Rockchip]
sidebar_label: "Sige Family Getting Started"
sidebar_position: 3
slug: /sige-family-started
---
# Sige Family User Manual 

The Sige user manual helps users understand the basic usage of Sige products and the necessary preparations to start using your ArmSoM-Sige🚀

<details>
    <summary>
        Comparison of Sige7/5/1 Specifications
    </summary>

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

</details>

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

## Getting Started

Before starting to use the ArmSoM-Sige product, please prepare the following items:

### Tools Required
* Power supply
* System installation (choose one):
  * Onboard eMMC boot
    * USB Type-C cable for writing images to the Sige series from the typec port, you need a Type-C data cable to connect the Sige series and PC.
  * MicroSD card/TF card boot
    * MicroSD card/TF card, Class 10 or higher, with at least 8GB SDHC and a card reader
    * The following high-speed TF cards have been tested and verified by the ArmSoM team:
      * SanDisk 32GB TF (MicroSD) (recommended for developers)
      * SanDisk 32GB TF (MicroSD) for dashcams & security monitoring dedicated storage card (recommended for long-term operation)
      * SanDisk TF 8G Class 10 microSD
      * SanDisk TF 128G Class 10 microSD XC TF 128G 48MB/S

You can configure Sige as an interactive computer with a desktop or as a headless computer accessible only via network. To set up Sige as a headless computer, configure the hostname, user account, network connection, and SSH during the initial OS installation. If you want to use Sige directly, you will need the following additional accessories:

**Optional Accessories**
* Keyboard & Mouse
* HDMI Monitor and HDMI Cable
* Ethernet Cable
* Camera Module
  * Recommended: [camera-module1](./armsom-camera-module1) module.
* LCD Display
  * Recommended: [Display 10 HD](./armsom-display-10-hd).
* Audio Cable, 0.8mm vertical socket.
* RTC Battery, 0.8mm vertical socket.
* Fan, 0.8mm vertical socket.

### Power Supply

The table below shows the power specifications required for powering the ArmSoM-Sige series. You can use any high-quality power supply that provides the correct power mode.

| Model    | Recommended Power (Voltage/Current) | Power Mode |
| -------- | ---------------------------------- | ---------- |
| Sige7    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige5    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige1    | 5V/2.5A, 12V/2A                    | Non-PD     |

Insert the power supply into the port labeled "DCIN". Please make sure to use the correct port!

## Image Flashing

<div class="cards">
    <a href="./sige-family-started" class="card-link">
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

## Interface Usage

If you are using ArmSoM-Sige products for the first time, please familiarize yourself with each product's hardware interfaces to better understand the following content.

| Hardware Interface | [Sige7](./armsom-sige7#hardware-interfaces) | [Sige5](./armsom-sige5#hardware-interfaces) | [Sige1](./armsom-sige1#hardware-interfaces) |
| --------------- | ----- | ------ | ------ | 

### Debug Serial Port

Connect the USB to TTL serial cable as follows:

![armsom-sige5-debug](/img/sige/armsom-sige7-debug.png)

| Sige7/5/1          | Connect | Serial Module |
| -------------- | ------- | ------------ |
| **GND** (pin 6)| --->   | GND          |
| **TX** (pin 8) | --->   | RX           |
| **RX** (pin 10)| --->   | TX           |

### Ethernet

If you are using a wired Ethernet connection, align the Ethernet cable with the RJ45 port on the ArmSoM-SigeX, and the system desktop will prompt a wired connection.

- Use the `ifconfig` command to check if Ethernet is functioning correctly. It will display network interfaces such as `enPX` or `ethX` along with the Ethernet IP address. Additionally, use the `ping` tool to verify network connectivity.

```bash
ifconfig
ping mi.com
```

- If ping fails, try the following:

```bash
$ sudo dhclient enP2p33s0
or
$ sudo dhclient enP4p65s0
```

### WIFI
```  
# 1. Switch to super user mode
armsom@armsom-sige7:/# sudo su
# 2. Open the WIFI
root@armsom-sige7:/# nmcli r wifi on
# 3. Scan WIFI
root@armsom-sige7:/# nmcli dev wifi
# 4. Connect to WIFI network
root@armsom-sige7:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

### BT  

```
# 1. Activate bluetooth  
armsom@armsom-sige7:/# service bluetooth start
# 2. Enter to bluetoothctl
armsom@armsom-sige7:/# bluetoothctl
# 3. Input the below commands to connect
armsom@armsom-sige7:/# power on
armsom@armsom-sige7:/# agent on
armsom@armsom-sige7:/# default-agent
armsom@armsom-sige7:/# scan on
armsom@armsom-sige7:/# pair yourDeviceMAC
```

### HDMI

| Model | Sige7 | Sige5 | Sige1 |
| ----- | ----- | ------ | ------ | 
| Resolution | 8Kp60 | 4Kp120 | 4Kp60 |

### USB

The ArmSoM-Sige7 provides one USB 2.0 and one USB 3.0 port.  

**USB3.0 Camera**

|  Model  |Sige7       | Sige5  | Sige1 |
| ----- |  ----- | ------ |- ---- | 
| USB   | 1* Type-C 3.0, 1x USB3.0, 1x USB2.0 | 1* Type-C 3.0, 1x USB3.0, 1x USB2.0 |2x USB2.0|

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

### M.2 Key M

The ArmSoM-Sige7/5 provides an M.2 Key M connector:

- The product features an M.2 Key M connector on the back. The board includes a standard M.2 2280 mounting hole for deploying an M.2 2280 NVMe SSD.  
  **<font color='red'>Note: This M.2 interface does not support M.2 SATA SSDs.</font>**

```
armsom@armsom-sige:/# mkdir temp
armsom@armsom-sige:/# mount /dev/nvme0n1 temp
```

### Audio

View sound cards in the system:  

```bash 
armsom@armsom-sige:/# aplay -l  
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

Sige products are equipped with a 5V fan using a 0.8mm connector.

The fan currently operates in five default states:

| Temperature Range | State | PWM Speed |
| ----------------- | ----- | --------- |
| Less than 50°C    | 0     | 0         |
| 50°C - 55°C       | 1     | 50        |
| 55°C - 60°C       | 2     | 100       |
| 60°C - 65°C       | 3     | 150       |
| 65°C - 70°C       | 4     | 200       |
| Above 70°C        | 5     | 250       |

```
// Check current fan speed
armsom@armsom-sige:/# cat /sys/class/hwmon/hwmon9/pwm1
```

### 40 PPIN  

Sige products  provides a 40-pin GPIO header, compatible with most sensors on the market.   

### RGB LED

Sige features two user indicator LEDs: a green LED and a red LED. 

- User Green LED  
  Constantly indicates running kernel by default.   

- User Red LED
  Off by default, can be controlled by user.  

Users can control with commands:   

```  
armsom@armsom-sige:/# sudo su  
armsom@armsom-sige:/# echo timer > /sys/class/leds/red/trigger  
armsom@armsom-sige:/# echo activity > /sys/class/leds/red/trigger
```

### RTC  

- The sige features an **hym8563** RTC chip.  
- First, insert the RTC battery using the 2-pin header to supply power to the RTC IC.
- Note that we should keep the RTC battery in the RTC connector and confirm the rtc hym8563 device which has been created. 

```bash 
armsom@armsom-sige:/# dmesg | grep rtc  
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

### MIPI-CSI

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

[ArmSoM camera-module1](../Accessories/camera-module1.md)
 
### MIPI DSI  

ArmSoM-Sige7/5 supports up to 4K@60Hz resolution over MIPI DSI

[ArmSoM Display 10 HD](../Accessories/display-10-hd.md)