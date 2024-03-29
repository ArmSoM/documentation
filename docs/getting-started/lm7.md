---
description: The ArmSoM-LM7 adopts Rockchip's latest flagship RK3588 which is eight-core 64-bit processor with a maximum frequency of up to 2.4GHz and a 6 TOPS NPU. It supports up to 32GB of large memory.
keywords: [armsom, armsom-LM7,armsom-w3, LGA, maker kit, rockchip, rk3588]
sidebar_label: "LM7"
sidebar_position: 4
---

# Product Introduction:LM7

Let's get to know LM7 in 5 minutes.

## Overview

The ArmSoM-LM7 adopts Rockchip's latest flagship RK3588 which is eight-core 64-bit processor with a maximum frequency of up to 2.4GHz and a 6 TOPS NPU. It supports up to 32GB of large memory.

Supports 8K video encoding and decoding,with LGA packaging for stronger transmission capability and stability. 

With rich interfaces, supports multiple hard drives, Gigabit Ethernet, WiFi 6, 5G/4G expansion, and various video input and output. 

It supports multiple operating systems.

We can provide baseboard reference design materials for users to customize in-depth independently. 

It can be applied to diversified fields such as ARM PCs, edge computing, cloud servers, artificial intelligence, cloud computing, virtual/augmented reality, blockchain, smart NVRs, etc.

## Key Parameters 

- SOC: Rockchip RK3588
- CPU: RK3588 quad-core Cortex-A76 @ 2.4GHz + quad-core Cortex-A55 @ 1.8GHz, 8nm process  
- GPU: ARM Mali-G610 MP4
- NPU: Computing power up to 6 TOPS (INT8), supports INT4/INT8/INT16 mixed computing
- VPU/Codec:  
  - Hardware decoding: 8K@60fps H.265/VP9/AVS2, 8K@30fps H.264 AVC/MVC, 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8  
  - Hardware encoding: 8K@30fps H.265 / H.264
- RAM: 4GB/8GB/16GB (max 32GB) 64bit LPDDR4/LPDDR4x, default LPDDR4x 8GB
- Flash: 16GB/32GB/64GB/128GB eMMC, default eMMC 32GB
- Operating voltage: 4V (±5% voltage variation)  
- Operating temperature: 0°C ~ 70°C
- Interface type: LGA package, 506 pins in total
- Operating systems: 
  - Officially supported by Rockchip: Android 12.0, Debian 11, Buildroot
  - Supported by the Third party : Armbian, Ubuntu 20.04, Ubuntu 22.04, Kylin OS
- PCB: 12-layer PCB design
- Weight: About 13.4g  
- Size: 45mm × 50mm × 4.5mm (top: 2.2mm + PCB: 1.2mm + bottom: 1.1mm)

## Real Pictures  

:::info  

The ArmSoM-LM7 has an extremely small size, about half the size of a credit card.  

:::

![ArmSoM-LM7 front & back](/img/lm/armsom-rk3588_lga_core_board_front_back.png)
![ArmSoM-LM7 & Credit-Card-Size.webp](/img/lm/Credit-Card-Size.webp)

## Hardware Specification

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Function</th>
            <th>Quantity</th>
            <th colspan="2">Parameters</th>
      </tr>
    </thead>
    <tbody align="left">
        <tr >
            <th rowspan="4">Video input interface</th>
            <th>MIPI DC(DPHY/CPHY) combo PHY</th>
            <th>2</th>
            <th><li>Support DPHY or CPHY</li><li>Support 4-channel MIPI DPHY V2.0，with up to 4.5Gbps per lane </li><li>Support 3-channel MIPI CPHY V1.1，with up to 2.5Gbps per lane </li></th>
            <th  rowspan="2">Supported MIPI camera combinations：<li>2 MIPI DCPHY + 4 MIPI CSI DPHY(2 lanes)</li><li>2 MIPI DCPHY + 1 MIPI CSI DPHY(4 lanes) + 2 MIPI CSI DPHY(2 lanes)</li><li>2 MIPI DCPHY + 2 MIPI CSI DPHY(4 lanes)</li></th>
        </tr>
        <tr>
            <th>MIPI CSI DPHY</th>
            <th>4</th>
            <th><li>2-channel MIPI DPHY V1.2, with up to 2.5Gbps per lane </li><li>Dual 2 lanes DPHY can be combined into single 4lanes DPHY</li></th>
        </tr>
        <tr>
            <th>DVP</th>
            <th>≤1</th>
            <th colspan="2"><li>Standard 8/10/12/16-bit DVP interface, up to 150MHz data input</li><li>Support BT.601/BT.656 and BT.1120 VI interface</li></th>
        </tr>
        <tr>
            <th>HDMI RX</th>
            <th>1</th>
            <th colspan="2"><li>Support 3.4Gbps~6Gbps HDMI 2.0</li><li>Support 250Mbps~3.4Gbps HDMI 1.4b</li><li>Support HDCP2.3 and HDCP1.4</li></th>
        </tr>
        <tr>
            <th rowspan="4">Display output interface</th>
            <th>HDMI/eDP TX interface</th>
            <th>≤2</th>
            <th colspan="2"><li>Support dual HDMI/eDP TX multiplex interface（HDMI and eDP cannot work together simultaneously
）</li><li>HDMI supports 7680×4320@60Hz resolution and 3,6,8,10,12Gbps bandwidth，HDCP2.3 </li><li>eDP supports 4K@60Hz resolution，Each interface supports x1,x2,x4 configurations，supports 1.62Gbps,2.7Gbps and 5.4Gbps bandwidth and HDCP1.3</li></th>
        </tr>
        <tr>
            <th>DP TX</th>
            <th>2</th>
            <th colspan="2"><li>Support 2 lanes DP TX 1.4a interface，connecting with USB3.1 Gen1，support 1/2/4lanes</li><li>Resolution up to 8192x4320@30Hz</li><li>Support HDCP2.3, HDCP 1.3</li></th>
        </tr>
        <tr>
            <th>MIPI DSI</th>
            <th>2</th>
            <th colspan="2"><li>Support dual MIPI DPHY 2.0 or CPHY 1.1，Resolution up to 4K@60Hz</li><li>Support dual MIPI display in left-right mode, support RGB/YUV formats (up to 10bit)</li></th>
        </tr>
        <tr>
            <th>BT.1120 video output</th>
            <th>≤1</th>
            <th colspan="2"><li>Support RGB format (up to 8bit), data rate up to 150MHz,
                 </li><li>Maximum resolution up to 1920x1080@60Hz</li></th>
        </tr>
        <tr>
            <th rowspan="3">Audio interface</th>
            <th>I2S</th>
            <th>≤4</th>
            <th colspan="2"><li>8 lanes I2S0/I2S1：Support TX and RX，Audio resolution 16~32 bit, sampling rate up to 192KHz</li><li>2 lanes I2S2/I2S3：Support TX and RX，Audio resolution 16~32 bit, sampling rate up to 192KHz </li></th>
        </tr>
        <tr>
            <th>SPDIF</th>
            <th>≤2</th>
            <th colspan="2"><li>Support 2x 16bit audio data storage</li><li>Support biphase stereo output</li></th>
        </tr>
        <tr>
            <th>PDM</th>
            <th>≤2</th>
            <th colspan="2"><li>Up to 8 channels, audio resolution 16~24 bit, sampling rate up to 192KHz</li><li>Support PDM master receive mode</li></th>
        </tr>
        <tr>
            <th>Network port</th>
            <th>GMAC</th>
            <th>≤2</th>
            <th colspan="2"><li>2 GMACs, provide RGMII / RMII interface</li><li>Support 10/100/1000Mbps data transfer rate</li></th>
        </tr>
        <tr>
            <th rowspan="10">Communication Interfaces</th>
            <th>SDIO</th>
            <th>≤1</th>
            <th colspan="2"><li>Support SDIO3.0</li></th>
        </tr>
        <tr>
            <th>USB 2.0 Host</th>
            <th>2</th>
            <th colspan="2"><li>Support dual lanes USB2.0 Host</li></th>
        </tr>
        <tr>
            <th>SATA</th>
            <th>≤3</th>
            <th><li> 3 SATA3.0 controllers, multiplexed with PCIe2.0 and USB_HOST2 controllers via PIPE PHY0/1/2</li><li> Support eSATA, up to 6Gbps data rate</li></th>
            <th rowspan="3"><li>Combo PIPE PHY0 support：SATA/PCIe2.1</li><li>Combo PIPE PHY1 support：SATA/PCIe2.1</li><li>Combo PIPE PHY2 support：SATA/PCIe2.1/USB3.1 Gen1</li></th>
        </tr>
        <tr>
            <th>USB3.1 Gen1</th>
            <th>≤3</th>
            <th><li>USB3.1 Gen1 data rates up to 5Gbps</li><li>Dual lanes USB3.1 OTG， multiplexed with  DP TX (USB3OTG_0 and USB3OTG_1)，USB3OTG_0 and USB3OTG_1 support USB Type-C and DP Alt</li><li>Single lane USB3.1 Host multiplexed with PIPE PHY2 (USB3OTG_2)</li></th>
        </tr>
        <tr>
            <th>PCIe2.1</th>
            <th>≤3</th>
            <th><li>Each PCIe2.1 interface supports 1 lane, up to 5Gbps data rate</li></th>
        </tr>
        <tr>
            <th>PCIe3.0</th>
            <th>≤4</th>
            <th colspan="2" ><li>Support RC and EP</li><li> Support up to 8Gbps data rate per lane</li><li>Support 4 combination modes: 1 x4 lane, 2 x2 lanes, 4 x1 lanes, 1 x2 lane + 2 x1 lanes</li></th>
        </tr>
        <tr>
            <th>SPI</th>
            <th>≤5</th>
            <th colspan="2"><li>Each controller supports two chip select outputs</li><li>Support serial master, serial slave modes, software configurable</li></th>
        </tr>
        <tr>
            <th>I2C</th>
            <th>≤9</th>
            <th colspan="2"><li>Support 7-bit and 10-bit address modes</li><li>Standard mode data rate up to 100k bits/s, up to 400k bits/s in fast mode</li></th>
        </tr>
        <tr>
            <th>UART</th>
            <th>≤10</th>
            <th colspan="2"><li>Built-in 2 64bit FIFOs, can be used for TX and RX separately</li><li>Support 5-bit, 6-bit, 7-bit, 8-bit serial data transmit and receive, baud rate up to 4Mbps</li><li>10 UARTs support automatic flow control mode</li></th>
        </tr>
        <tr>
            <th>CAN</th>
            <th>≤3</th>
            <th colspan="2"><li>Support 3 CAN 2.0B channels</li><li>Support CAN standard and extended frames transmit and receive</li></th>
        </tr>
        <tr>
            <th rowspan="3">Others interface</th>
            <th>GPIO</th>
            <th>GPIOs</th>
            <th colspan="2"><li>All GPIOs can be used to generate interrupts</li><li>Support level triggered and edge triggered interrupts</li><li>Support configurable pull-up direction (weak pull-up and weak pull-down)</li></th>
        </tr>
        <tr>
            <th>ADC</th>
            <th>≤7</th>
            <th colspan="2"><li>Support 7 12bit single-ended input SAR-ADCs, sampling rate up to 1MS/s</li></th>
        </tr>
        <tr>
            <th>PWM</th>
            <th>≤16</th>
            <th colspan="2"><li>Up to 16 on-chip PWMs, support capture mode</li><li>PWM3, PWM7, PWM11, PWM15 are optimized for IR applications</li></th>
        </tr>
    </tbody>
</table>



:::info   

The interface quantities in the table are the maximum theoretical values for the hardware design or CPU. 

Most function pins have multiplexed relationships. For easy configuration, please refer to the **[Pin Function Table](#pin-function-table)** for the LM7.  

:::

## ArmSoM-LM7 Development Kit (ArmSoM-W3) 

### Real Pictures RK3588M

![ArmSoM-LM7-M development kit](/img/lm/armsom-lm7-m-development-kit.jpg)

### Real Pictures RK3588

![ArmSoM-LM7 development kit](/img/lm/armsom-lm7-development-kit.jpg)

### Hardware Specifications

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Function parameter</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3588</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3588 Quad core Cortex-A76@ 2.4GHz+Quad core Cortex-A55@ 1.8GHz，8nm process</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>GPU Mali-G610 MP4 (4x256KB L2 Cache)</li><li>Support OpenGL ES3.2/OpenCL2.2/Vulkan1.1</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8(3 NPU core)</li><li>Support INT4/INT8/INT16 hybrid operation
</li><li>Support deep learning frameworks：TensorFlow/MXNet/PyTorch/Caffe/Tflite/Onnx NN/Android NN etc</li></th>
        </tr>
         <tr>
            <th>VPU/codec</th>
            <th><li>Hardware decoding：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8</li><li>Hardware decoding：8K@30fps H.265 / H.264</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>Integrated 48MP ISP with HDR&3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>4GB/8GB/16GB（max 32GB ）64bit LPDDR4/LPDDR4x，default LPDDR4x 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>16GB/32GB/64GB/128GB/256GB eMMC，default eMMC 32GB</li><li>Support MicroSD card expansion</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key E interface (PCIe 2.1 1-lane)，support PCIe/SATA/USB/SDIO/UART connecting with Bluetooth/WIFI modules </li><li>1x M.2 Key M interface (PCIe 3.0 4-lanes), can expand SSD:Type 2280/2260/2242/2230，currently defaults to 2280</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th><li>1x 2.5G Ethernet port </li></th>
        </tr>
        <tr>
            <th>Video output</th>
            <th><li>2x HDMI OUT2.1，one support 8K@60fps or 4K@120fps,another support 4K@60fps</li><li>1x MIPI DSI resolution up to 4K@60Hz</li><li>1x DP1.4 resolution up to 8192x4320@30Hz</li></th>
        </tr>
        <tr>
            <th>Video input</th>
            <th><li>1x HDMI IN2.0，support 3.4Gbps~6Gbps</li><li>1x 4Lanes MIPI CSI / 2x 2Lanes MIPI CSI，Maximum 2.5Gbps per lane </li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th><li>2x HDMI audio output</li><li>1x Audio Jack 3.5mm（ES8316）audio output</li><li>1x Type-C 3.1 (DP1.4)audio output</li></th>
        </tr>
        <tr>
            <th>USB interface</th>
            <th><li>2x USB3.0（USB3.1 Gen1），support USB3.1 Gen1, equivalent to USB3.2 Gen1 and USB3.0, up to 5Gbps data rate  </li><li>2x USB2.0， support high speed (480Mbps), full speed (12Mbps) and low speed (1.5Mbps) modes </li><li>1x USB Type-C 3.1（DP1.4/OTG/PD Fast charger）</li></th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th><li>Fully compatible with Raspberry Pi 40pin, connect to a variety of accessory peripherals</li><li>Support UART/SPI/I2C/I2S/PWM/ADC/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>Others</th>
            <th><li>1x 5V fan interface </li><li>1x battery input connector for powering the low power RTC chip HYM8563TS </li><li>1x RGB light, green light on for power on, blue light flashes for system normal, red light user-controlled </li><li> 1x Debug serial port uart, 3-Pin 2.54mm header, 3.3V level, 1500000bps</li></th>
        </tr>
        <tr>
            <th>Power supply</th>
            <th><li>Support DC 12V/2.5A Aperture 2.5mm</li><li>Support USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A</li><li>Support 12V PoE</li></th>
        </tr>
        <tr>
            <th>Keys</th>
            <th><li>1x PWRON key, support sleep wake</li><li>1x Reset key, support reboot</li><li>1x Recovery key, support entering loader burn mode</li><li>1x Maskrom key, support entering maskrom burn mode </li></th>
        </tr>
        <tr>
            <th>Operation system</th>
            <th><li>Officially supported by Rockchip：Android 12.0，Debian11，Buildroot</li><li>Supported by the third party：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS</li></th>
        </tr>
        <tr>
            <th>Size</th>
            <th><li>148 mm x 100.5mm</li></th>
        </tr>
        <tr>
            <th>Operating temperature</th>
            <th><li>0℃ ~ 70℃</li></th>
        </tr>
    </tbody>
</table>


## User Manual

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

### Image Flashing Options  

[Flashing System Images](../general-tutorial/flash-img)

### Interface Settings  

For the first time using the ArmSoM-W3 development kit, please first get familiar with the [Peripheral Interfaces](#armsom-LM7-development-kit-armsom-w3) to better understand the subsequent content.

#### 2.5G Ethernet  

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

#### Audio  

View the sound cards in the system.  

```bash
armsom@armsom-w3:/# aplay -l
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

The ArmSoM-W3 provides two USB 2.0 and two USB 3.0 ports.   

#### Type-C  

The ArmSoM-W3 is equipped with a full function USB Type‐CTM 3.1 port, supporting DP displays up to 4Kp60.  

#### HDMI  

The ArmSoM-W3 has two HDMI output ports, both supporting CEC and HDMI 2.1, with maximum resolutions of 8Kp60 and 4Kp60 respectively.  

:::caution  
Note: Please confirm the interface specifications of the HDMI cable before use.
:::

#### HDMI IN  

The ArmSoM-W3 uses the native rk3588 hdmi rx interface.The hdmi in interface can be tested using v4l2 commands.  

**View all video nodes**  

```  
ls /dev/video* 
```

**Find rk hdmirx device**  

Execute command v4l2-ctl -d  to specify video node. Execute command -D to view node info. Check for rk_hdmirx device using driver name.
```  
armsom@armsom-w3:/# v4l2-ctl -d /dev/video0 -D
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
armsom@armsom-w3:/# v4l2-ctl -d /dev/video17 --get-fmt-video
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

The ArmSoM-W3 has a power LED and user LED.  

- Power Indicator LED   
  The power LED is green. On the ArmSoM-W3 it is solid on by default when powered.

- User Indicator LED   
  The user LED is blue. By default its blinking state shows a running kernel.  

The user can control via commands:

```  
armsom@armsom-w3:/# sudo su
root@armsom-w3:/# echo timer > /sys/class/leds/blue:status/trigger
root@armsom-w3:/# echo activity > /sys/clas
```

#### RTC  

- The ArmSoM-W3 is equipped with an RTC IC **hym8563**.  
- First, insert the RTC battery to power the RTC IC.
- Note that we should keep the RTC battery in the RTC connector and confirm the rtc hym8563 device has been created

```bash 
armsom@armsom-w3:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- Locating rtc0, then use the following commands to set system time and sync to rtc0.  

```bash
armsom@armsom-w3:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
armsom@armsom-w3:/# date
11/03/2023 Friday 10:33:12 UTC
armsom@armsom-w3:/# hwclock -w
armsom@armsom-w3:/# hwclock -r
armsom@armsom-w3:/# poweroff
```

- Removing RTC battery, after 10mins or longer insert battery and boot ArmSoM-W3, check if RTC is in sync with system clock  

```bash 
armsom@armsom-w3:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
armsom@armsom-w3:/# date
11/03/2023 Friday 10:36:01 UTC
```

#### Fan  

The ArmSoM-W3 is equipped with a 5V fan, using a 1.25mm connector  

```
armsom@armsom-w3:/# echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/export
armsom@armsom-w3:/# echo 10000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/period
armsom@armsom-w3:/# echo 5000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/duty_cycle
armsom@armsom-w3:/# echo inversed  > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/polarity
armsom@armsom-w3:/# echo 1 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable
armsom@armsom-w3:/# echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable
```

#### M.2 Interface  

The ArmSoM-W3 provides two M.2 connectors:  

- There is an M.2 E Key connector on the front of the board with a 2230 mounting hole, providing PCIe 2.1 single-channel, USB, SATA, SDIO, PCM and UART signals, supporting standard industrial M.2 WiFi 6 modules.   
  ArmSoM recommends using RTL8852BE, AP6256. Installed in the ArmSoM-W3 M.2 E slot and then it can get online after wifi setup.  

```
# Load driver  
armsom@armsom-w3:/# insmod system/lib/modules/rtkm.ko
armsom@armsom-w3:/# insmod system/lib/modules/rtkm.ko
armsom@armsom-w3:/# insmod /usr/lib/modules/rtk_btusb.ko
armsom@armsom-w3:/# lsmod
Module                  Size  Used by
8852be               4030464  0
rtkm                   16384  1 8852be
rtk_btusb              57344  0
```

#### WIFI
```  
# 1. Switch to super user mode
armsom@armsom-w3:/# sudo su
# 2. Open the WIFI
root@armsom-w3:/# nmcli r wifi on
# 3. Scan WIFI
root@armsom-w3:/# nmcli dev wifi
# 4. Connect to WIFI network
root@armsom-w3:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

#### BT  

```
# 1. Activate bluetooth  
armsom@armsom-w3:/# service bluetooth start
# 2. Enter to bluetoothctl
armsom@armsom-w3:/# bluetoothctl
# 3. Input the below commands to connect
armsom@armsom-w3:/# power on
armsom@armsom-w3:/# agent on
armsom@armsom-w3:/# default-agent
armsom@armsom-w3:/# scan on
armsom@armsom-w3:/# pair yourDeviceMAC
```

- There is an M.2 M Key connector on the back of the ArmSom-W3 with a quad-channel PCIe 3.0 interface. There is a standard M.2 2280 mounting hole on board that can deploy M.2 2280 NVMe SSDs.
**<font color='red'>Note: This M.2 interface does not support M.2 SATA SSDs.</font>**  

```
armsom@armsom-w3:/# mkdir temp  
armsom@armsom-w3:/# mount /dev/nvme0n1 temp
```

#### MIC Recording  

```bash
armsom@armsom-w3:~# arecord -D hw:1,0 -f S16_LE -t wav -c2 -r 16000 -d 3 t.wav
Recording WAVE 't.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
armsom@armsom-w3:~# aplay t.wav
Playing WAVE 't.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
```

#### Camera  

##### MIPI-CSI   

  The camera uses the IMX415 module. After connecting and powering on the camera module you can view the boot logs.  

```bash
armsom@armsom-w3:/# dmesg | grep imx415
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
armsom@armsom-w3:/# v4l2-ctl -d /dev/video11 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll
```

  Use gst-launch-1.0 for direct video recording  
```
armsom@armsom-w3:/# gst-launch-1.0 v4l2src device=/dev/video11 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
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

The ArmSoM-W3 has a maximum resolution up to 4K@60Hz

## System Image

Based on Debian bullseye works as official operating system by the ArmSom team.

### Official Images  

The following systems have been tested and verified by ArmSoM officially:  

Download link: [Google Drive link](https://drive.google.com/drive/folders/1aCoC6-5zoMaNBGwwgr_pYIs219aFijFM)

**Debian bullseye**  

Image location: 3. Linux Images/debian/ArmSoM-LM7(Development Kit ArmSoM-W3)  

**Ubuntu**  

Image location: 3. Linux Images/ubuntu/ArmSoM-LM7(Development Kit ArmSoM-W3)  

**Android 12**

Image location: 4. Android Images/ArmSoM-LM7(Development Kit ArmSoM-W3)

#### Release Information

View the initial official release announcement for ArmSoM-W3 here:  
[System Release Notice for ArmSoM-W3](http://forum.armsom.org/t/231115-system-release-notice-for-armsom-w3/139)

### Third Party Systems  

#### armbian
![armbian-logo](/img/armbian-logo.webp)  

[Armbian_23.11.0-trunk_Armsom-w3_bookworm_legacy_5.10.160.img](https://pan.baidu.com/s/1URvyxKoox207rWwsMJmCyQ?pwd=arms)  

[Armbian_23.11.0-trunk_Armsom-w3_bookworm_legacy_5.10.160_cinnamon_desktop.img](https://pan.baidu.com/s/1w7v7b1BJ1ubJYrIlFchqUw?pwd=arms)  

[Armbian_23.11.0-trunk_Armsom-w3_jammy_legacy_5.10.160.img](https://pan.baidu.com/s/1-6qgLxC7CbiNObRmJdFTDQ?pwd=arms)  

[Armbian_23.11.0-trunk_Armsom-w3_jammy_legacy_5.10.160_xfce_desktop.img](https://pan.baidu.com/s/1Pr0IJNrffxx7aLJ-eZLUUA?pwd=arms )

#### Joshua-Riek/ubuntu-rockchip

[ubuntu-rockchip](https://joshua-riek.github.io/ubuntu-rockchip-download/boards/armsom-w3.html)

## Source Code

[ArmSoM-W3 BSP](https://github.com/ArmSoM/armsom-w3-bsp)

[ArmSoM-W3 kernel](https://github.com/ArmSoM/ubuntu-linux-rockchip)

[ArmSoM-W3 uboot](https://github.com/ArmSoM/u-boot)


## Hardware Resources

You can obtain the schematics, PCB, DXF and other hardware resources of the development kit for quick development.

### LM7 Hardware Resources 

#### Pin Function Table

[ArmSoM-LM7 Pin Function Table](https://pan.baidu.com/s/1E8Jb8mRqKdrFxWH5tXMYTg?pwd=arms) - Download pin function table

#### Package 

[ArmSoM-LM7 Package](https://pan.baidu.com/s/1wIp67X337sZ5VEN-HnN-wA?pwd=arms) - Download package info

### LM7 Development Kit (ArmSoM-W3) Hardware Resources

#### Schematics

[ArmSoM-W3_1V1 Schematics pdf, orcad source](https://pan.baidu.com/s/1DV2GP11qEcxgJsmts5LtuA?pwd=arms) - Download schematics pdf and source files (orcad)

#### PCB

[ArmSoM-W3_1V1 PCB PADS](https://pan.baidu.com/s/1H45A34d7bLm00fh1Oj0ynA?pwd=arms) - Download PCB source files (PADS) 

#### 2D CAD Drawings

[ArmSoM-W3 Top, Bottom](https://pan.baidu.com/s/1KKVkZcszuTWFLTrPl4541g?pwd=arms) - Download 2D CAD files

#### SMD

[ArmSoM-W3_1V1 Assembly Drawing](https://pan.baidu.com/s/1zZ59b95ROjsHF3TlcG-cNA?pwd=arms) - Download components Position Reference of W3 V1.1

#### Hardware Pin Definitions

##### 40-pin Socket

<div className='gpio_style'>


| GPIO number |                           Function                           |               Pin                |               Pin               |                           Function                           | GPIO number |
| :---------: | :----------------------------------------------------------: | :------------------------------: | :-----------------------------: | :----------------------------------------------------------: | :---------: |
|             |                            +3.3V                             | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |                            +5.0V                             |             |
|     139     | I2S1_SDO2_M0 / I2C7_SDA_M3 / UART8_CTSN_M0 / PWM15_IR_M1 / CAN1_TX_M1 / GPIO4_B3 / |  <div className='green'>3</div>  |  <div className='red'>4</div>   |                            +5.0V                             |             |
|     138     | I2S1_SDO1_M0 / I2C7_SCL_M3 / UART8_RTSN_M0 /  PWM14_M1   / CAN1_RX_M1 / GPIO4_B2 |  <div className='green'>5</div>  | <div className='black'>6</div>  |                             GND                              |             |
|     115     | SPI1_CS1_M1 / I2C8_SDA_M4 / UART7_CTSN_M1 / PWM15_IR_M0 / GPIO3_C3 |  <div className='green'>7</div>  | <div className='green'>8</div>  | GPIO0_B5 / <div className='orange-txt'>UART2_TX_M0</div> / I2C1_SCL_M0 / I2S1_MCLK_M1 / JTAG_TCK_M2|     13      |
|             |                             GND                              |  <div className='black'>9</div>  | <div className='green'>10</div> | GPIO0_B6  / <div className='orange-txt'>UART2_RX_M0</div> / I2C1_SDA_M0 / I2S1_SCLK_M1 / JTAG_TMS_M2 |     14      |
|     113     |             SPI1_CLK_M1 / UART7_RX_M1 / GPIO3_C1             | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO3_B5  / CAN1_RX_M0 / PWM12_M0  /UART3_TX_M1 / I2S2_SCLK_M1 |     109     |
|     111     |            SPI1_MOSI_M1 / I2C3_SCL_M1 / GPIO3_B7             | <div className='green'>13</div>  | <div className='black'>14</div> |                             GND                              |             |
|     112     |     SPI1_MISO_M1 / I2C3_SDA_M1 / UART7_TX_M1  / GPIO3_C0     | <div className='green'>15</div>  | <div className='green'>16</div> |                           GPIO3_A4                           |     100     |
|             |                            +3.3V                             | <div className='yellow'>17</div> | <div className='green'>18</div> |              GPIO4_C4 / PWM5_M2 / SPI3_MISO_M0               |     148     |
|     42      |            SPI0_MOSI_M2 / UART4_RX_M2 / GPIO1_B2             | <div className='green'>19</div>  | <div className='black'>20</div> |                             GND                              |             |
|     41      |                   SPI0_MISO_M2 / GPIO1_B1                    | <div className='green'>21</div>  | <div className='green'>22</div> |                          SARADC_IN4                          |             |
|     43      |             SPI0_CLK_M2 / UART4_TX_M2 / GPIO1_B3             | <div className='green'>23</div>  | <div className='green'>24</div> |             GPIO1_B4 / UART7_RX_M2  /SPI0_CS0_M2             |     44      |
|             |                             GND                              | <div className='black'>25</div>  | <div className='green'>26</div> |            GPIO1_B5  / UART7_TX_M2 / SPI0_CS1_M2             |     45      |
|     150     |      SPI3_CLK_M0 / I2C0_SDA_M1 / PWM7_IR_M3 / GPIO4_C6       |  <div className='blue'>27</div>  | <div className='blue'>28</div>  |              GPIO4_C5 / PWM6_M2 / I2C0_SCL_M1 /              |             |
|     63      |            UART1_CTSN_M1 / PWM15_IR_M3 / GPIO1_D7            | <div className='green'>29</div>  | <div className='black'>30</div> |                             GND                              |             |
|     47      |       SPDIF_TX_M0 / UART1_RX_M1 / PWM13_M2 / GPIO1_B7        | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO3_C2 / PWM14_M0 / UART7_RTSN_M1 / I2C8_SCL_M4 / SPI1_CS0_M1 |     114     |
|     103     |                      PWM8_M0 / GPIO3_A7                      | <div className='green'>33</div>  | <div className='black'>34</div> |                             GND                              |             |
|     110     | I2S2_LRCK_M1 / UART3_RX_M1 / PWM13_M0 / CAN1_TX_M0 / GPIO3_B6 | <div className='green'>35</div>  | <div className='green'>36</div> |               GPIO3_B1 / PWM2_M1 / UART2_TX_M2               |     105     |
|      0      |                    REFCLK_OUT / GPIO0_A0                     | <div className='green'>37</div>  | <div className='green'>38</div> |       GPIO3_B2 /PWM3_IR_M1 / UART2_RX_M2 / I2S2_SDI_M1       |     106     |
|             |                             GND                              | <div className='black'>39</div>  | <div className='green'>40</div> |             GPIO3_B3 /  UART2_RTSN / I2S2_SDO_M1             |     107     |

</div>

##### MIPI CSI

0.5mm FPC connector

|                  Pin                   |          MIPI-CSI          |                    Description                     |
| :------------------------------------: | :------------------------: | :------------------------------------------------: |
| 1,4,7,10,13,16,19,21,24,25,26,27,32,33 |            GND             |           Power Ground &  Signal Ground            |
|                   2                    |      MIPI_CSI0_RX_D3N      |               MIPI RX Lane3 iuput N                |
|                   3                    |      MIPI_CSI0_RX_D3P      |               MIPI RX Lane3 iuput P                |
|                   5                    |      MIPI_CSI0_RX_D2N      |               MIPI RX Lane2 iuput N                |
|                   6                    |      MIPI_CSI0_RX_D2P      |               MIPI RX Lane2 iuput P                |
|                   8                    |     MIPI_CSI0_RX_CLK1N     |               MIPI RX Clock iuput N                |
|                   9                    |     MIPI_CSI0_RX_CLK1P     |               MIPI RX Clock iuput P                |
|                   11                   |      MIPI_CSI0_RX_D1N      |               MIPI RX Lane1 iuput N                |
|                   12                   |      MIPI_CSI0_RX_D1P      |               MIPI RX Lane1 iuput P                |
|                   14                   |      MIPI_CSI0_RX_D0N      |               MIPI RX Lane0 iuput N                |
|                   15                   |      MIPI_CSI0_RX_D0P      |               MIPI RX Lane0 iuput P                |
|                   17                   |     MIPI_CSI0_RX_CLK0N     |               MIPI RX Clock iuput N                |
|                   18                   |     MIPI_CSI0_RX_CLK0P     |               MIPI RX Clock iuput P                |
|                   20                   |      MIPI_CAM3_CLKOUT      |            1.8V, CLock ouput for Sensor            |
|                   22                   |      MIPI_CAM1_CLKOUT      |            1.8V, CLock ouput for Sensor            |
|                   23                   | MIPI_CSI0_PDN0_H(GPIO1_B0) |                     1.8V, GPIO                     |
|                   24                   |      I2C3_SCL_M0_MIPI      | 1.8V, I2C Clock, pulled up to 1.8V with 2.2K on w3 |
|                   25                   |      I2C3_SDA_M0_MIPI      | 1.8V, I2C Clock, pulled up to 1.8V with 2.2K on w3 |
|                   26                   | MIPI_CSI0_PDN1_H(GPIO1_A7) |                     1.8V, GPIO                     |
|                   27                   |     CM_RST_L(GPIO4_A0)     |                     3.3V, GPIO                     |
|                 28,29                  |           VCC_RX           |                  3.3V Power ouput                  |
|                 30,31                  |          VCC_5V0           |                   5V Power ouput                   |

##### MIPI DSI

0.5mm FPC connector (J23)

|           Pin           |          MIPI-DSI          |                    Description                     |
| :---------------------: | :------------------------: | :------------------------------------------------: |
| 1,4,7,10,13,16,27,33,34 |            GND             |              Power and Signal Ground               |
|            2            |     MIPI_DPHY1_TX_D0N      |               MIPI1 TX Lane0 ouput N               |
|            3            |     MIPI_DPHY1_TX_D0P      |               MIPI1 TX Lane0 ouput P               |
|            5            |     MIPI_DPHY1_TX_D1N      |               MIPI1 TX Lane1 ouput N               |
|            6            |     MIPI_DPHY1_TX_D1P      |               MIPI1 TX Lane1 ouput P               |
|            8            |     MIPI_DPHY1_TX_CLKN     |               MIPI1 TX Clock ouput N               |
|            9            |     MIPI_DPHY1_TX_CLKP     |               MIPI1 TX Clock ouput P               |
|           11            |     MIPI_DPHY1_TX_D2N      |               MIPI1 TX Lane2 ouput N               |
|           12            |     MIPI_DPHY1_TX_D2P      |               MIPI1 TX Lane2 ouput P               |
|           14            |     MIPI_DPHY1_TX_D3N      |               MIPI1 TX Lane3 ouput N               |
|           15            |     MIPI_DPHY1_TX_D3P      |               MIPI1 TX Lane3 ouput P               |
|           17            | LCD_PWM (PWM2_M2/GPIO4_C2) |                   1.8V, GPIO/PWM                   |
|          18,19          |         VCC3V3_LCD         |                  3.3V Power ouput                  |
|           20            |    LCD_RESET (GPIO2_C1)    |                     1.8V, GPIO                     |
|           21            |            /NC             |                   No Connection                    |
|           22            |    LCD_BL_EN (GPIO3_A1)    |                     3.3V, GPIO                     |
|           23            |        I2C6_SCL_M0         | 1.8V, I2C Clock, pulled up to 1.8V with 2.2K on w3 |
|           24            |        I2C6_SDA_M0         | 1.8V, I2C Data, pulled up to 1.8V with 2.2K on w3  |
|           25            |     TP_INT (GPIO0_D3)      |                     1.8V, GPIO                     |
|           26            |     TP_RST (GPIO0_C6)      |                     1.8V, GPIO                     |
|          28,29          |         VCC5V0_LCD         |                   5V Power ouput                   |
|          31,32          |          VCC_1V8           |                  1.8V Power ouput                  |

##### Debug UART

3.3V level signals, 1500000bps

| Pin  | Assignment  | Description |
| :--: | :---------: | :---------: |
|  1   | UART2_RX_M0 |   intput    |
|  2   | UART2_TX_M0 |   output    |
|  3   |     GND     |     0V      |

##### PoE In

1.25mm connector

| Pin  | Assignment | Description |
| :--: | :--------: | :---------: |
|  1   |    VC1     |     TX1     |
|  2   |    VC2     |     RX1     |
|  3   |    VC3     |     TX2     |
|  4   |    VC4     |     RX2     |

##### PoE Out

2.0mm connector

| Pin  | Assignment |   Description   |
| :--: | :--------: | :-------------: |
|  1   |  VDD_POE   | 12V Power ouput |
|  2   |  VDD_POE   | 12V Power ouput |
|  3   |    GND     |       GND       |
|  4   |    GND     |       GND       |


### Note  

:::tip
It is not recommended to use the LM7 for 8K display,because the HDMI output 8K places very high layout routing requirements that are basically unachievable with a core board + base board design approach.  

Here are some tips for your design reference:

1. A one-piece board design must be adopted.Please pay attention that there is no layer change across the entire HDMI signal path.  

2. Strictly follow the hardware reference design guidelines for impedance control, trace length matching, etc.  

3. The HDMI connector is required to support HDMI 2.1 protocol ,8K compatible.

:::