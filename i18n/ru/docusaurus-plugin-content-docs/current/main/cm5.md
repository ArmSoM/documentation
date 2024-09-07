---
description: ArmSoM-CM5
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "CM5"
sidebar_position: 5
slug: /armsom-cm5
---

# Product Introduction:ArmSoM-CM5

## Overview

The ArmSoM-CM5 is a computing module powered by the Rockchip RK3576 second-generation 8nm high-performance AIOT platform. It integrates a quad-core Cortex-A72 @ 2.2GHz and a quad-core Cortex-A53 @ 1.8GHz, along with a dedicated NEON co-processor, a 6 TOPS NPU, and supports up to 16GB of large memory. It supports 4K video encoding and decoding, features a rich set of interfaces, and supports various operating systems.

![ArmSoM-CM5](/img/cm/cm5.png)

### Key Specifications

- **SOC:** Rockchip RK3576
- **CPU:** Integrates quad-core Cortex-A72 @ 2.2GHz, quad-core Cortex-A53 @ 1.8GHz, and a dedicated NEON co-processor.
- **GPU:** ARM Mali G52 MC3 GPU.
- **NPU:** Up to 6 TOPS (INT8) computing power, supporting INT4/INT8/INT16 mixed precision computation.
- **VPU/Video Codec:**
  - **Decoding:** Supports H.264, H.265, VP9, AV1, and AVS2 up to 8K@30fps or 4K@120fps, and high-quality JPEG decoding up to 4K@60fps.
  - **Encoding:** Supports H.264 and H.265，JPEG up to 4K@60fps.
- **RAM:** 8/16GB 32bit LPDDR5, default is 8GB, with RK3576 supporting up to 16GB.
- **Flash:** 32/64/128GB eMMC, default is 64GB eMMC.
- **Operating Voltage:** Wide input voltage range from 4.5V to 23V (voltage tolerance ±5%).
- **Operating Temperature:** 0℃ ~ 80℃
- **Weight:** 12g
- **Dimensions:**
    - CM5: 55 x 40 mm
    - CM5-IO: 100 x 80 x 29 mm (3.94 x 3.15 x 1.14 inches)

## Getting started

<a href="./armsom-cm5-io#getting-started" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>CM5 User Manual</h2>
            <p>How to start using your CM5 Module</p>
        </div>
    </div>
</a>

## Hardware

### Hardware Interface

![ArmSoM-CM5-front & back](/img/cm/armsom-cm5-front&back1.jpg)

:::tip
- Designed as a board-to-board connector.
- Due to the RK3576 chip's PIN limitations, it supports only 1 HDMI and 1 DSI, whereas the Raspberry Pi CM4 supports up to 2 HDMI and 2 DSI.
- AmrSoM-CM5 has an additional PCIe and USB3 compared to the Raspberry Pi CM4.

You can use the Raspberry Pi CM4 baseboard.
:::

### ArmSoM CM5 vs Raspberry Pi CM4

Below is a comparison table between ArmSoM CM5 and Raspberry Pi CM4:

| Specification           | ArmSoM CM5                        | Raspberry Pi CM4               |
|-------------------------|----------------------------------|--------------------------------|
| **Processor**           | **RK3576 SoC**                    | Broadcom BCM2711               |
| **CPU Architecture**    | **Quad-core ARM Cortex-A72 & Quad-core Cortex-A53** | Quad-core ARM Cortex-A72      |
| **GPU**                 | **ARM Mali G52 MC3 GPU**          | VideoCore VI                   |
| **Memory**              | **Up to 16GB LPDDR5**             | 1GB, 2GB, 4GB, 8GB LPDDR4      |
| **Storage**             | eMMC storage (optional capacities) | No built-in storage, supports microSD cards |
| **Display Output**      | 1x HDMI 2.1, 1x DP               | 2x HDMI 2.0                    |
| **Video Resolution**    | **Supports 4K@120fps**            | Supports 4K@30fps              |
| **Network Interface**   | 1x Gigabit Ethernet port          | 1x Gigabit Ethernet port       |
| **USB Ports**           | **1x USB3.0，1x USB2.0**   | 1x USB 2.0                  |
| **GPIO**                | 40-pin GPIO                       | 40-pin GPIO                    |
| **Expandability**       | **2x PCIe/SATA/USB 3.0 SS**     | 1x PCIe 2.0                    |
| **Camera Interface**    | 1x 4-lane MIPI CSI, 1x 2-lane MIPI CSI | 1x 4-lane MIPI CSI, 1x 2-lane MIPI CSI |
| **Display Interface**   | 1x 4-lane MIPI DSI                | 2x 4-lane MIPI DSI             |
| **Power Input**         | 5V                                | 5V                             |
| **Dimensions**          | 55mm x 40mm                       | 55mm x 40mm                    |
| **Operating System Support** | Debian, Android, Ubuntu, etc. | Raspberry Pi OS, Ubuntu, others|
| **Primary Use Cases**   | AI development, embedded systems, industrial control, DIY projects, education, IoT | DIY projects, education, IoT, etc. |

### CM5 Block Diagram

![ArmSoM-CM5-product](/img/cm/cm5-product.png)

### Hardware Spec

<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Function</th>
      </tr>
    </thead>
    <tbody align="left">
    <tr>
            <th>SOC</th>
            <th><li>RockChip RK3576</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3576 Quad-core Cortex-A72@2.2GHz and Quad-core Cortex-A53@1.8GHz, 8nm process</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali G52 MC3 GPU</li><li>Fully compatible with OpenGL ES 1.1, 2.0, and 3.2, OpenCL up to 2.0, and Vulkan 1.1. Dedicated 2D hardware engine with MMU maximizes display performance and provides very smooth operation.</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8</li><li>Supports INT4, INT8, INT16, FP16, BF16, and TF32 mixed precision</li><li>Supports deep learning frameworks: TensorFlow, Caffe, Tflite, Pytorch, Onnx, NNAndroid NN, etc.</li></th>
        </tr>
         <tr>
            <th>VPU/Codec</th>
            <th><li>Hardware decoding: Supports H.264, H.265, VP9, AV1, and AVS2 up to 8K@30fps or 4K@120fps, and high-quality JPEG decoding up to 4K@60fps.</li><li>Hardware encoding: Supports H.264 and H.265，JPEG up to 4K@60fps.</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>ISP, 16MP</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>8GB/16GB (up to 16GB) 32-bit LPDDR5, default LPDDR5 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32/64/128GB eMMC, default eMMC 64GB</li><li>Supports MicroSD card expansion</li></th>
        </tr>
        <tr>
            <th>Display</th>
            <th><li>1x HDMI OUT 2.1, supports 4K@120fps</li><li>1x MIPI DSI resolution up to 2K@60fps</li><li>1x DP 1.4 resolution up to 4K@120fps</li></th>
        </tr>
        <tr>
            <th>Camera</th>
            <th><li>1x 4Lanes MIPI CSI, up to 2.5Gbps per lane</li><li>1x 2Lanes MIPI CSI, up to 2.5Gbps per lane</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th>
              <li>1x GMAC, provides RGMII/RMII interface</li>
              <li>Supports 10/100/1000Mbps data transfer rates</li>
            </th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>2x PCIe 2.0 1-lane</li></th>
        </tr>
         <tr>
            <th>USB</th>
            <th><li>1x USB 3.0</li><li>1x USB 2.0</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th><li>SPDIF_Tx x1</li><li>AUDIO_R/L x1</li><li>i2s x1</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1</li><li>FAN x1</li><li>RTC x1</li></th>
        </tr>
    </tbody>
</table>

### RK3576 Block Diagram
<details>
    <summary>
        RK3576 Block Diagram
    </summary>
    <img
  src="/img/sige/rk3576.png"
  alt="rk3576 block diagram"
  className="session-details-live-video"/>
</details>

## Resources

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
            <h2>CM5 kernel</h2>
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
            <h2>CM5 uboot</h2>
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

### Official Image

ArmSoM team uses Debian bullseye as the official operating system.

#### Download

The following systems have been tested and verified by ArmSoM official:

Network disk address: 
<a href="/general-tutorial/cloud-disk" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12.png) | debian12 for CM5 :  <br/>  Debian 12 brings thousands of new and updated software packages, supports multiple desktop environments, and processor architectures including 32-bit and 64-bit PC, ARM, MIPS, and PowerPC. However, one of the biggest changes is the upgrade of the Linux kernel from version 5.10 to 6.1 LTS. | [Google Drive link](https://drive.google.com/drive/folders/10OtqLU1c1MZ9IJR-aLSrevwY4NlzJNG0)  |
|![Android](/img/sige/android.png) | Android14 for CM5 :    <br/>Make your device more personal, protected and accessible with the newest OS upgrade. Improved photo quality, new themes and AI generated wallpapers. Privacy updates for your health, safety and data. And expanded accessibility features.|[Google Drive link](https://drive.google.com/drive/folders/10OtqLU1c1MZ9IJR-aLSrevwY4NlzJNG0) |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.webp) | Armbian for CM5 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       | [armbian image](https://github.com/armbian/community/releases)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for CM5 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment.  | [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

## Supply Declaration 

ArmSoM-CM5 will remain in production until at least August 2034.