---
description: The ArmSoM-LM7 adopts Rockchip's latest flagship RK3588 which is eight-core 64-bit processor with a maximum frequency of up to 2.4GHz and a 6 TOPS NPU. It supports up to 32GB of large memory.
keywords: [armsom, armsom-LM7,armsom-w3, LGA, maker kit, rockchip, rk3588]
sidebar_label: "LM7"
sidebar_position: 4
slug: /armsom-lm7
---

# Product Introduction:LM7

Let's get to know LM7 in 5 minutes.

## Overview

The ArmSoM-LM7 adopts Rockchip's latest flagship RK3588 which is eight-core 64-bit processor with a maximum frequency of up to 2.4GHz and a 6 TOPS NPU. It supports up to 32GB of large memory.

Supports 8K video encoding and decoding,with LGA packaging for stronger transmission capability and stability. 

![ArmSoM-lm7](/img/lm/lm7.png)

We can provide baseboard reference design materials for users to customize in-depth independently. 

It can be applied to diversified fields such as ARM PCs, edge computing, cloud servers, artificial intelligence, cloud computing, virtual/augmented reality, blockchain, smart NVRs, etc.

:::tip Rockchip RK3588
- [ArmSoM-Sige7](./armsom-sige7) AI SBC;
- [ArmSoM-AIM7](./armsom-aim7) AIM7 core board， [ArmSoM-AIM-IO](./armsom-aimio)  AIM Companion IO Board;
- [ArmSoM-LM7](./armsom-lm7) LGA core board, [ArmSoM-W3](./armsom-w3) LGA core board maker kit;

With the powerful ecosystem and variety of extension modules, ArmSoM can help users easily go from ideas to prototype to mass production, making it an ideal creative platform for makers, dreamers and hobbyists.
:::

### Key Parameters 

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

## Getting started

<a href="./armsom-w3#user-manual" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>LM7 Development Kit User Manual</h2>
            <p>How to Get Started with Your Development Kit</p>
        </div>
    </div>
</a>

## Hardware

### Hardware Interface

:::info  

The ArmSoM-LM7 has an extremely small size, about half the size of a credit card.  

:::

![ArmSoM-LM7 front & back](/img/lm/armsom-rk3588_lga_core_board_front_back.png)
![ArmSoM-LM7 & Credit-Card-Size.webp](/img/lm/Credit-Card-Size.webp)

### Hardware Spec
<details>
    <summary>
        LM7 Hardware Spec
    </summary>
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
            <th colspan="2"><li>Support 3.4Gbps-6Gbps HDMI 2.0</li><li>Support 250Mbps-3.4Gbps HDMI 1.4b</li><li>Support HDCP2.3 and HDCP1.4</li></th>
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
            <th colspan="2"><li>8 lanes I2S0/I2S1：Support TX and RX，Audio resolution 16-32 bit, sampling rate up to 192KHz</li><li>2 lanes I2S2/I2S3：Support TX and RX，Audio resolution 16-32 bit, sampling rate up to 192KHz </li></th>
        </tr>
        <tr>
            <th>SPDIF</th>
            <th>≤2</th>
            <th colspan="2"><li>Support 2x 16bit audio data storage</li><li>Support biphase stereo output</li></th>
        </tr>
        <tr>
            <th>PDM</th>
            <th>≤2</th>
            <th colspan="2"><li>Up to 8 channels, audio resolution 16-24 bit, sampling rate up to 192KHz</li><li>Support PDM master receive mode</li></th>
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
</details>

:::info   

The interface quantities in the table are the maximum theoretical values for the hardware design or CPU. 

Most function pins have multiplexed relationships. For easy configuration, please refer to the **[Pin Function Table](./)** for the LM7.  

:::

### Development Kit (W3) 

[ArmSoM-LM7 Development Kit (ArmSoM-W3)](./armsom-w3)

### Hardware Interface (W3)
<details>
    <summary>
        Hardware Interface (W3)
    </summary>
    <img
  src="/img/lm/armsom-lm7-development-kit.jpg"
  alt="W3 Hardware Interface"
  className="session-details-live-video"/>
</details>


## Resources

### Source Code
<div class="cards">
<a href="https://github.com/armbian/build" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>Armbian </h2>
            <p>Armbian Linux build framework</p>
        </div>
    </div>
</a>

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>W3 kernel</h2>
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
            <h2>W3 uboot</h2>
            <p>rockchip-linux/u-boot</p>
        </div>
    </div>
</a>
<a href="/general-tutorial/rknn-llm" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📕</i>
        </div>
        <div class="content">
            <h2>RKNN-LLM</h2>
            <p>AI models to Rockchip chips</p>
        </div>
    </div>
</a>
</div>

### Official Images  

Based on Debian bullseye works as official operating system by the ArmSom team.

The following systems have been tested and verified by ArmSoM officially:  

Download link:
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56?usp=drive_link" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11.png) | debian11 for LM7 :  <br/>   Debian 11, codenamed "Bullseye," is the latest stable release of the Debian project, released on August 14, 2021. Debian is an operating system based on free software known for its stability, security, and openness.| [Google Drive link](https://drive.google.com/drive/folders/1wz2BPS8s1iXNWlOUGyPmnBSDG32arWdT?usp=drive_link)    |
|![Android](/img/sige/android.png) | Android12 for LM7 :    <br/>Android is an open-source operating system based on the Linux kernel, primarily used for mobile devices, tablets, and smartwatches, among other smart devices.|[Google Drive link](https://drive.google.com/drive/folders/1vMC1qNUY-fHiyqqK_xYNom2goQ52gVNA?usp=drive_link)  |

#### Release Information

View the initial official release announcement for ArmSoM-W3 here:  [System Release Notice for ArmSoM-W3](http://forum.armsom.org/t/231115-system-release-notice-for-armsom-w3/139)

### Third Party Systems  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.webp) | Armbian for LM7 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored. | [armbian image](https://github.com/armbian/community/releases) |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for LM7 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment. | [ubuntu-rockchip](https://github.com/Joshua-Riek/ubuntu-rockchip/releases) |


### LM7 Hardware Resources 

<a href="https://drive.google.com/drive/folders/1RE9zdHrXYvkfIilVn0lBXsq9PvaCmE_I" class="btn">
  <span>LM7 Hardware Resources</span>
</a>

<br/>

<div class="cards">
    <a href="https://docs.google.com/spreadsheets/d/1hcwwZbGElfGMAEaGHhuznplZgvGaaYRy/edit?usp=drive_link&ouid=116290908759287485424&rtpof=true&sd=true" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>LM7 Pin Function Table</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/1RE9zdHrXYvkfIilVn0lBXsq9PvaCmE_I?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>LM7 Package</h2>
        </div>
    </div>
</a>
</div>
<br/>

#### Development Kit (W3) Resources

<div class="cards">
    <a href="https://drive.google.com/drive/folders/1RE9zdHrXYvkfIilVn0lBXsq9PvaCmE_I?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>Schematics</h2>
                <p>source files (orcad)</p>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/1RE9zdHrXYvkfIilVn0lBXsq9PvaCmE_I?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>PCB PADS</h2>
            <p>PCB source files (PADS) </p>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/1RE9zdHrXYvkfIilVn0lBXsq9PvaCmE_I?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>2D</h2>
            <p>2D CAD files </p>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/1RE9zdHrXYvkfIilVn0lBXsq9PvaCmE_I?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>SMD</h2>
            <p>components Position Reference of W3</p>
        </div>
    </div>
</a>
</div>

### Note  

:::tip
It is not recommended to use the LM7 for 8K display,because the HDMI output 8K places very high layout routing requirements that are basically unachievable with a core board + base board design approach.  

Here are some tips for your design reference:

1. A one-piece board design must be adopted.Please pay attention that there is no layer change across the entire HDMI signal path.  

2. Strictly follow the hardware reference design guidelines for impedance control, trace length matching, etc.  

3. The HDMI connector is required to support HDMI 2.1 protocol ,8K compatible.

:::

## Easy to buy sample
ArmSoM online shop: [https://www.armsom.org/product-page/lm7-development-kit](https://www.armsom.org/product-page/lm7-development-kit)
 
ArmSoM Aliexpress online shop: [https://www.aliexpress.com/item/3256805435700769.html](https://www.aliexpress.com/item/3256805435700769.html) 

ArmSoM Taobao shop: [https://item.taobao.com/item.htm?id=714003739668](https://item.taobao.com/item.htm?id=714003739668)

OEM&ODM, please contact: sales@armsom.org