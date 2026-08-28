---
description: The ArmSoM-CM7s uses the Rockchip RK3588S 8-core 64-bit processor, with 4 Cortex-A76 cores running at 2.4GHz and 4 Cortex-A55 cores at 1.8GHz. It has a 6 TOPS NPU and can support up to 32GB of memory. It supports 4K video encoding and decoding, comes with plenty of interfaces, and works with various operating systems.
keywords: [armsom, armsom-CM7s, RK3588s  Development Boards, RK3588s Core borad, rockchip]
sidebar_label: "CM7s"
sidebar_position: 5
slug: /armsom-cm7s
image: /img/cm/armsom-cm7s.jpg
---

# ArmSoM-CM7s Product Introduction

Let's get to know the ArmSoM-CM7s in 5 minutes

## Introduction

**ArmSoM-CM7s Core Board: compact in size, powerful in performance, built specifically for deep embedded scenarios.**
The board comes with the Rockchip RK3588S 8-core 64-bit flagship processor (4×Cortex-A76 @ 2.4GHz + 4×Cortex-A55 @ 1.8GHz), built on an advanced 8nm process, offering great computing power and excellent energy efficiency. It features an ARM Mali-G610 high-performance GPU, fully compatible with OpenGL ES 3.2, OpenCL 2.2, and Vulkan 1.2 graphics APIs. It also has a powerful 6 TOPS NPU, supporting INT4/INT8/INT16 mixed-precision computing, easily handling edge AI inference.

The module offers a variety of bus and expansion interfaces, supports eMMC flash memory of different capacities, and can be widely used in industrial IoT, edge computing, and smart devices.

![ArmSoM-CM7s](/img/cm/armsom-cm7s.jpg)

:::tip Rockchip RK3588s
Relying on a strong ecosystem and a variety of expansion accessories, ArmSoM can help users easily go from ideas to prototypes to mass production, making it an ideal creative platform for makers, dreamers, and hobbyists.
:::

:::tip
armsom-cm7s v1.1 CN2 pins 2 and 4 aren't working, will be fixed in the next v1.2 version
:::

### Key parameters

* **SOC**：Rockchip RK3588S (8nm LP process)
* **CPU**：8-core 64-bit（4×Cortex-A76@2.4GHz + 4×Cortex-A55@1.8GHz）
* **GPU**：ARM Mali-G610 3D GPU，supports OpenGL ES3.2 / OpenCL 2.2 / Vulkan 1.2
* **NPU**：6 TOPS computing power, supports mixed INT4/INT8/INT16 operations
* **RAM**：2/4/8/16/32GB LPDDR4/4X
* **eMMC**：32/64/128/256GB eMMC
* **interface**：On-board 3×100-pin connector (DF40C-100DP-04V), supports multiplexed buses and control pins like Type-C/DP1.4, HDMI 2.1/eDP1.3, MIPI DPHY/CSI, USB 3.0/2.0, SATA III/PCIe 2.0, SDIO 3.0/RGMII, SDMMC, and I2C/I2S/UART/SPI/CAN/PWM/GPIO.
* **Power supply**：Input DC 5V (MAX 2500mA); Output DC 3.3V/1.8V (MAX 600mA)
* **Size**：55 x 40 x 1.6 mm
* **Input**：DC 5V MAX 2500mA
* **Output**：DC 3.3V MAX 600mA 和 DC 1.8V MAX 600mA
* **PCB size**：55 x 40 x 1.6 mm (L x W x H)

## Getting started

<a href="./armsom-cm7s#user-manual" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>CM7s User Manual</h2>
            <p>How to start using your CM7s</p>
        </div>
    </div>
</a>

## Hardware Info

### Hardware interface

![ArmSoM-CM5-front & back](/img/cm/cm7s-interface.jpg)

:::tip
- Designed as a board-to-board connector
:::

### ArmSoM CM7s vs Raspberry Pi CM5
Here's a comparison chart of the specs for the ArmSoM CM7s and the Raspberry Pi CM5:

| Specification                | ArmSoM CM7s                             | Raspberry Pi CM5               |
|------------------------------|-----------------------------------------|--------------------------------|
| **Processor**                | **RK3588S SoC**                         | Broadcom BCM2712               |
| **CPU Architecture**         | **Quad-core ARM Cortex-A76 & Quad-coreCortex-A55** | Quad-core ARM Cortex-A76   |
| **GPU**                      | **ARM Mali-G610 MP4**                   | VideoCore VII                  |
| **NPU**                      | **6 TOPS computing power**              | No built-in NPU                |
| **Memory**                   | **Supports up to 32GB LPDDR5**          | 2GB、4GB、8GB、16GB LPDDR4      |
| **Storage**                  | eMMC storage (optional capacity)        | eMMC storage (optional capacity) |
| **Display Output**           | 1x HDMI 2.1, 1x DP 1.4                  | 2x HDMI 2.0                    |
| **Video Resolution**         | **Supports 8K@60fps**                   | Supports 4K@60fps              |
| **Network Interface**        | 1x Gigabit Ethernet port                | 1x Gigabit Ethernet port       |
| **USB Ports**                | **1x USB3.0，3x USB2.0**                | 2xUSB3.0，1xUSB2.0             |
| **GPIO**                     | 40 pin GPIO                             | 40 pin GPIO                    |
| **Expandability**            | **2x PCIE2.1/SATA3**                    | 1x PCIe 2.0                    |
| **Camera Interface**         | 1x 4-channel MIPI CSI, 2x 2-channel MIPI CSI | 2x 4-channel MIPI CSI     |
| **Display Interface**        | 1x 4-channel MIPI DSI                        | 2x 4-channel MIPI DSI     |
| **Power Input**              | 5V                                        | 5V                          |
| **Dimensions**               | 55mm x 40mm                               | 55mm x 40mm                    |
| **Operating System Support** | Debian, Android, Ubuntu, Armbian, etc.    | Raspberry Pi OS, Ubuntu, etc.  |
| **Primary Use Cases**        | High-end tablets, edge computing, AI, cloud computing, AR/VR, smart security, smart home, and more  | Embedded systems, industrial control, AI/machine learning, digital signage, IoT, edge computing       |

### Product block diagram

![ArmSoM-CM7s-product](/img/cm/cm7s-product.png)

### Hardware Specs
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
            <th><li>RockChip RK3588S</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3588S quad-core Cortex-A76 @ 2.4GHz and quad-core Cortex-A55 @ 1.8GHz, 8nm process</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali-G610 MP4 GPU</li><li>ARM Mali-G610 MP4 quad-core GPU, supports OpenGL ES 1.1/2.0/3.2, OpenCL 2.2, Vulkan 1.1/1.2, with a computing power of 450 GFLOPS</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8</li><li>Supports INT4，INT8，INT16，FP16 Mixed operations</li><li>Supports deep learning frameworks:TensorFlow、PyTorch、Caffe,etc.</li></th>
        </tr>
         <tr>
            <th>VPU/Codec</th>
            <th><li>Hardware decoding:Supports 8K@60fps (H.265/VP9/AVS2)、8K@30fps (H.264)、4K@60fps (AV1)。</li><li>Hard coding:8K@30fps (H.265/H.264)，Supports simultaneous editing and decoding</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>Integrated 48MP ISP, supports HDR and 3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>4GB/8GB/16GB 32GB LPDDR4/LPDDR4x/LPDDR5，default is LPDDR5 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB/64GB/128GB eMMC，default is eMMC 64GB</li><li>Supports MicroSD card expansion</li><li>M.2 M-KEY Socket：PCIe2.1 NVMe SSD</li></th>
        </tr>
        <tr>
            <th>Display</th>
            <th><li>1x HDMI OUT 2.1, supports 8K@60Hz or 4K@120Hz 2x MIPI DSI with a maximum resolution of 4K@60Hz</li><li>1x DP1.4, supports up to 8K@30Hz</li></th>
        </tr>
        <tr>
            <th>Camera</th>
            <th><li>2x 4-lane MIPI CSI, up to 2.5Gbps per lane</li><li>Supports up to three MIPI camera inputs</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th>
              <li>1x GMAC, providing RGMII/RMII interface output</li>
               <li>onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 <a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a></li>
            </th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>2x PCIe 2.0 1-lans</li></th>
        </tr>
         <tr>
            <th>USB</th>
            <th><li>3x USB 3.0</li><li>2x USB 2.0 Host</li><li>1x USB 2.0 OTG</li><li>1× Type-C (USB 3.1)</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th><li>SPDIF_Tx x2</li><li>I2S x4</li><li>PDM x2</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1</li><li>FAN x1</li><li>RTC x1</li></th>
        </tr>
    </tbody>
</table>

### RK3588S Block Diagram
<details>
    <summary>
        RK3588S Block Diagram
    </summary>
    <img
  src="./img/sige/rk3588s.png"
  alt="rk3588S block diagram"
  className="session-details-live-video"/>
</details>

### Pin Definition

<a href="https://drive.google.com/drive/folders/1uaEyDY_oIhGFOExQVPXuocX27bSgTcPI" class="btn">
  <span>ArmSoM-CM7s_Pinout</span>
</a>
<br/>

## Development Materials

### SDK source code

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
<a href="https://github.com/ArmSoM/rockchip-kernel" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>CM7s kernel</h2>
            <p>Improved Rockchip Linux</p>
        </div>
    </div>
</a>

<a href="https://github.com/ArmSoM/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>CM7s uboot</h2>
            <p>ArmSoM/u-boot</p>
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

### Cloud drive link
Google Drive links, including software information and hardware information:
<a href="https://drive.google.com/drive/folders/1uaEyDY_oIhGFOExQVPXuocX27bSgTcPI" class="btn">
  <span>Google Drive link</span>
</a>

### Official mirror

The ArmSoM team uses Debian bullseye as the official operating system.[How do I flash a system image?](https://docs.armsom.org/zh/getting-start/flash-img)📤📤

The following systems have been officially tested and verified by ArmSoM:

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for **CM7s-IO** :  <br/>  Debian 12 brings thousands of new and updated packages, supporting a variety of desktop environments and processor architectures (including 32-bit and 64-bit PCs, ARM, MIPS, and PowerPC). But one of the biggest changes is that the Linux kernel has been upgraded from version 5.10 to 6.1 LTS.|  |
|![Android](/img/sige/android.png) | Android14 for **CM7s-IO** :    <br/>The latest operating system upgrade makes your device more personalized, secure, and accessible. Improved photo quality, new themes, and AI-generated wallpapers. Privacy updates to protect your health, safety, and data. Accessibility features have also been expanded.|  |
|![ubuntu](/img/sige/ubuntu.png) | ubuntu22.04 for CM7s :    <br/>Ubuntu 22.04, code-named 'Jammy Jellyfish', is a version officially released by Canonical on April 21, 2022.|  |

### Third-party mirror

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for CM7s:    <br/>  Armbian is a computing build framework that lets users create ready-to-use images with working kernels based on various single-board computer configurations. It provides a variety of pre-built images for some supported single-board computers, usually based on Debian or Ubuntu.  |  |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for CM5 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started now by choosing the right Ubuntu server or desktop image and enjoy a familiar environment.|      |


## Product Certificate

### CE / FCC / RoHS

## Supply Statement

ArmSoM-CM7s will be produced at least until August 2034.

## Accessory

The official accessories we designed for the ArmSoM-CM7s-IO are meant to help you get the best performance from your computer.

<div class="cards">
<a href="./armsom-display-10-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-display-10hd.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Display-10-hd</h2>
        <p>10.1-inch touchscreen display, can be used for interactive projects like entertainment systems and information dashboards.</p>
    </div>
</div>
</a>

<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Camera-module1</h2>
        <p>The camera-module1 is compatible with the OV13850 and is a low-power camera module.</p>
    </div>
</div>
</a>
</div>

## Purchase Samples

<!-- ArmSoM Official Website: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM Official AliExpress Store: [https://aliexpress.com/item/3256807679122184.html](https://aliexpress.com/item/3256807679122184.html) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=842137173767](https://item.taobao.com/item.htm?id=842137173767)

For OEM & ODM, please contact: sales@armsom.org -->

## Expert Perspective

<!-- - [itsfoss ArmSoM-CM5](https://itsfoss.com/armsom-cm5)：ArmSoM CM7s Powerful Replacement for Raspberry Pi CM4
- [Technically Unsure](https://www.youtube.com/watch?v=pfsBDO3XehA&list=PLtGrcSFVfrfRbFqx8nbtYvVVwbHp_Nza4)：ArmSoM CM5 | 能否超越树莓派 CM5？
- [Platima Tinkers](https://www.youtube.com/watch?v=p55ehXBBLPE)：ArmSoM CM5 评测：RK3576 计算模块，真正兼容 CM4
- [sbc compare](https://sbc.compare/83-armsom-cm5-8gb): CM5  Benchmark Comparison on sbc.compare -->

## User Case

<!-- - [edge machine learning](https://www.armsom.org/post/accelerating-conservation-science-with-armsom-cm5-som): edge machine learning -->


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