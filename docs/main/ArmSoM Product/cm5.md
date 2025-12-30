---
description: The ArmSoM-CM5 is a compute module powered by the Rockchip RK3576 second-generation 8nm high-performance AIOT platform.
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "CM5"
sidebar_position: 5
slug: /armsom-cm5
image: /img/cm/cm5.png
---

# Product Introduction: ArmSoM-CM5

## Overview

The ArmSoM-CM5 is a compute module powered by the Rockchip RK3576 second-generation 8nm high-performance AIOT platform. It integrates a quad-core Cortex-A72 @ 2.2GHz and a quad-core Cortex-A53 @ 1.8GHz, along with a dedicated NEON co-processor, a 6 TOPS NPU, and supports up to 16GB of large memory. It supports 4K video encoding and decoding, features a rich set of interfaces, and supports various operating systems.

![ArmSoM-CM5](/img/cm/cm5.png)

:::tip Rockchip RK3576
- [ArmSoM-Sige5](./armsom-sige5) Single Board Computer;
- [ArmSoM-CM5](./armsom-cm5) RK3576 CM5 Compute Module, [ArmSoM-CM5-IO](./armsom-cm5-io) CM5 companion IO board;

Leveraging a robust ecosystem and a variety of expansion accessories, ArmSoM helps users easily transition from concept to prototype to mass production, making it an ideal creative platform for makers, dreamers, and hobbyists.
:::

:::tip
Pin 21 of armsom-cm5v1.2 is not working and will be fixed in the next v1.3 version.
:::

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
- **WIFI/BT**:  Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 [syn43752](https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo)
- **Operating Voltage:** Wide input voltage range from 4.5V to 5.5V (voltage tolerance ±5%).
- **Operating Temperature:** 0℃ ~ 80℃
- **Weight:** 12g
- **Dimensions:**
    - CM5: 55 x 40 mm x 4.9mm
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
![ArmSoM-CM5-rpi-cm4-io](/img/cm/cm5-rpi-cm4-io.png)

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
| **GPIO**                | 40-PIN GPIO                       | 40-PIN GPIO                    |
| **Expandability**       | **2x PCIe/SATA/USB 3.0**     | 1x PCIe 2.0                    |
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
               <li>Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 <a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a></li>
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

### Hardware Pin Definitions

![ArmSoM-cm5-pinlist-1](/img/cm/cm5-pinlist-1.png)
![ArmSoM-cm5-pinlist-2](/img/cm/cm5-pinlist-2.png)

## Resources

<div class="cards">
<a href="https://github.com/ArmSoM/manifests" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>ArmSom-bsp </h2>
            <p>Building a Linux System</p>
        </div>
    </div>
</a>
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

<a href="/advanced-manual/rknn-llm" class="card-link">
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

ArmSoM team uses Debian bullseye as the official operating system.[How to Flash Image](https://docs.armsom.org/getting-start/flash-img)📤

#### Download

The following systems have been tested and verified by ArmSoM official:

Network disk address: 
<a href="/getting-start/cloud-disk" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for CM5 :  <br/>  Debian 12 brings thousands of new and updated software packages, supports multiple desktop environments, and processor architectures including 32-bit and 64-bit PC, ARM, MIPS, and PowerPC. However, one of the biggest changes is the upgrade of the Linux kernel from version 5.10 to 6.1 LTS. |  **CM5-IO**:[Google Drive link](https://drive.google.com/drive/folders/10OtqLU1c1MZ9IJR-aLSrevwY4NlzJNG0)    <br/>  **CM5-RPI-CM4-IO**:[Google Drive link](https://drive.google.com/drive/folders/10OtqLU1c1MZ9IJR-aLSrevwY4NlzJNG0)   |
|![Android](/img/sige/android.png) | Android14 for CM5 :    <br/>Make your device more personal, protected and accessible with the newest OS upgrade. Improved photo quality, new themes and AI generated wallpapers. Privacy updates for your health, safety and data. And expanded accessibility features.|[Google Drive link](https://drive.google.com/drive/folders/10OtqLU1c1MZ9IJR-aLSrevwY4NlzJNG0) |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for CM5 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       |**CM5-IO**:[armbian image](https://github.com/armbian/community/releases)   <br/>  **CM5-RPI-CM4-IO**:[armbian image](https://github.com/armbian/community/releases)   |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for CM5 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment.  | [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### Hardware Resources 

<a href="https://drive.google.com/drive/folders/1u1ayZzNv0wlE5TpJhuqHYWU6YCiGeC-G" class="btn">
  <span>CM5 Hardware Resources</span>
</a>
<br/>

[ArmSoM-CM5 pin table](https://docs.google.com/spreadsheets/d/1TFBTV2u73eYIFKA2MqlkeFjA-SvN_Uhu/edit?usp=drive_link&ouid=116290908759287485424&rtpof=true&sd=true) - pin table

<div class="cards">
    <a href="https://drive.google.com/drive/folders/1wbW_VyTEyQRrsDF8cvCp1zK1SsZ819un?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>CM5</h2>
                <p>SCH,2D</p>
            </div>
        </div>
    </a>
    <a href="https://drive.google.com/drive/folders/10bCEK2t1BuOJRAULnoEAem338c2W71xT?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📗</i>
            </div>
            <div class="content">
                <h2>CM5-IO</h2>
                <p>SCH,PCB,2D,SMD</p>
            </div>
        </div>
</a>
<a href="https://drive.google.com/drive/folders/1FXvNMlOzZeEF601KSCylwkihR7lqFTtw?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
            <p>ic,connector datasheet</p>
        </div>
    </div>
</a>
</div>

## Supply Declaration 

ArmSoM-CM5 will remain in production until at least August 2034.

## Accessories

The official accessories designed for the ArmSoM-CM5-IO are intended to help you achieve optimal performance from your computer.

<div class="cards">

<a href="./armsom-display-10-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-display-10hd.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Display-10-HD</h2>
        <p>A 10.1-inch touchscreen display, ideal for interactive projects like entertainment systems and information dashboards.</p>
    </div>
</div>
</a>

<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Camera Module 1</h2>
        <p>The camera module 1, compatible with the OV13850 sensor, is a low-power camera module.</p>
    </div>
</div>
</a>
</div>

## Purchase Samples

ArmSoM Official Website: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM Official AliExpress Store: [https://aliexpress.com/item/3256807679122184.html](https://aliexpress.com/item/3256807679122184.html) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=842137173767](https://item.taobao.com/item.htm?id=842137173767)

For OEM & ODM, please contact: sales@armsom.org

## What do others say about the CM5?

- [itsfoss ArmSoM-CM5](https://itsfoss.com/armsom-cm5)：ArmSoM CM5 Powerful Replacement for Raspberry Pi CM4
- [Technically Unsure](https://www.youtube.com/watch?v=pfsBDO3XehA&list=PLtGrcSFVfrfRbFqx8nbtYvVVwbHp_Nza4): ArmSoM CM5 | Can it Beat the Raspberry Pi CM5?
- [Platima Tinkers](https://www.youtube.com/watch?v=p55ehXBBLPE): ArmSoM CM5 Review: RK3576 Compute Module with REAL CM4 Compatibility

## Notes

:::caution [Electrostatic Protection]
1. Before handling the device, please ensure you wear an anti-static wrist strap or take electrostatic discharge measures to prevent damage to the development board.
2. Assembly should be performed in an electrostatic-safe environment, avoiding operations in dry and low-humidity conditions.
3. When not in use, store the device in an anti-static bag and keep it in a suitably temperature-controlled, low-humidity environment to prevent static electricity buildup.
4. When handling the device, avoid friction or collisions to prevent the generation of static electricity that could cause damage.
5. When holding the device, try to avoid direct contact with the chips on the mainboard to prevent static damage.
6. Do not plug or unplug wires or other devices while the device is operating to avoid damage from electrical surges.
7. When connecting or disconnecting the GPIO/MIPI expansion interfaces, make sure to turn off the power and disconnect the power cable to prevent damage from electrical current.

:::

:::danger [Heat Management]

Without effective cooling measures, the surface temperature of the main chip may exceed 60 degrees. When handling the device, please avoid direct contact with the SoC and surrounding power inductors to prevent burns. Ensure that the environment is well-ventilated during operation to prevent localized heat buildup, which could lead to overheating. Additionally, do not place the device in direct sunlight. It is recommended to choose between the official [cooling fan](./sige-active-cooling-kit), [heat sink](./sige-diy-case1), or third-party cooling kits based on specific usage conditions to ensure optimal cooling performance.

:::