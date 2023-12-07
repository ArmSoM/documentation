---
sidebar_position: 2
---

# Product Introduction 

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

## ArmSoM-LM7

### Real Pictures  

:::info  

The ArmSoM-LM7 has an extremely small size, about half the size of a credit card.  

:::

![ArmSoM-LM7 front & back](/img/lm/lm7/armsom-rk3588_lga_core_board_front_back.png)
![ArmSoM-LM7 & Credit-Card-Size.webp](/img/lm/lm7/Credit-Card-Size.webp)

### Hardware Specification

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

Most function pins have multiplexed relationships. For easy configuration, please refer to the **[Pin Function Table](/docs/lm/LM7/LM7-hardware#pin-function-table)** for the LM7.  

:::

## ArmSoM-LM7 Development Kit (ArmSoM-W3) 

### Real Pictures RK3588M

![ArmSoM-LM7-M development kit](/img/lm/lm7/armsom-lm7-m-development-kit.jpg)

### Real Pictures RK3588

![ArmSoM-LM7 development kit](/img/lm/lm7/armsom-lm7-development-kit.jpg)

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
