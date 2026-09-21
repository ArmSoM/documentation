---
description: The ArmSoM-CM7s uses the Rockchip RK3588S 8-core 64-bit processor, with 4 Cortex-A76 cores running at 2.4GHz and 4 Cortex-A55 cores at 1.8GHz. It has a 6 TOPS NPU and can support up to 32GB of memory. It supports 4K video encoding and decoding, comes with plenty of interfaces, and works with various operating systems.
keywords: [armsom, armsom-CM7s, RK3588s  Development Boards, RK3588s Core borad, rockchip]
sidebar_label: "CM7s"
sidebar_position: 5
slug: /armsom-cm7s
image: /img/cm/armsom-cm7s.jpg
---

# ArmSoM-CM7s Product Introduction

Let's get to know the ArmSoM-CM7s and ArmSoM-CM7s-IO in 5 minutes

## CM7s Introduction

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

## CM7s Hardware Info

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

## CM7s-IO Introduction
The CM7s-IO is the IO board for the ArmSoM CM7s, measuring 100x79x41 mm. It's great for quickly evaluating the features of the ArmSoM CM7s platform, debugging peripheral drivers, and developing system prototypes. It can also serve as a reference hardware design for products like industrial gateways, edge AI inference terminals, and multimedia interactive devices, helping users smoothly transition from prototyping to mass deployment.

## CM7s-IO Hardware Info

### Hardware Specs

The CM7s-IO board is an expansion board designed specifically for the CM7s computing module, aimed at helping with system and embedded board development.

- 1x HDMI output, 1x Type-C (DP) output
- 4x USB 3.0 Type-A
- Supports Gigabit Ethernet RJ45
- Firmware flashing and device mode via USB Type-C
- GPIO: 40-pin header
- Power connector: DC barrel jack for 12V power input
- Expansion: M.2 (M key, supports PCIe), microSD
- MIPI DSI: 1x 4-lane MIPI DSI, supports up to 4K@60fps (x4)
- MIPI CSI0: 1x 4-lane MIPI CSI, up to 2.5Gbps per lane
- MIPI CSI1: 1x 2-lane MIPI CSI, up to 2.5Gbps per lane
- Others: HPOUT, FAN, VRTC
- Dimensions: 100 x 79 x 41 mm (3.94 x 3.11 x 1.6 inches)
- Weight: 65.2g

### Hardware interface

<!-- ![ArmSoM-CM7s-IO](/img/cm/cm5-io-layout.png) -->

:::tip
The CM7s-IO Board uses 12V DC power.
:::
### Pin Definition

<details>
    <summary>
       40-PIN Socket
    </summary>
<div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
| |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |      |  
|63| GPIO1_D7 / PWM15_IR_M3 / UART1_CTSN_M1 / I2C8_SDA_M2   | <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |      |
|62| GPIO1_D6 / PWM14_M2 / UART1_RTSN_M1 / I2C8_SCL_M2   |  <div className='green'>5</div>  | <div className='black'>6</div>  |GND | -           |
|39| GPIO1_A7 / PWM3_IR_M3 / SPI2_CS0_M0 / PDM1_SDI0_M1 |  <div className='green'>7</div>  | <div className='green'>8</div>  |  <div className='orange-txt'> UART2_TX_M0</div> / GPIO0_B5 / I2S1_MCLK_M1 / I2C1_SCL_M0  |13|
|  - |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  <div className='orange-txt'>UART2_RX_M0</div> / GPIO0_B6 / I2S1_SCLK_M1 / I2C1_SDA_M0  |     14      |
| 130 |  GPIO4_A2 / I2S1_LRCK_M0  / SPI0_CLK_M1   | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO3_B2 / UART2_RX_M2 / I2S2_SDI_M1 / PWM3_IR_M1   |     106    |
| 13 | GPIO4_A3 / UART0_TX_M2 | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
| 18 | GPIO0_C2 | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO1_A0 / UART6_RX_M1 / SPI4_MISO_M2 / I2C2_SDA_M4 | 32 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |   GPIO1_A1 / UART6_TX_M1 / SPI4_MOSI_M2 / I2C2_SCL_M4  | 33 |
| 42 |  GPIO1_B2 / UART4_RX_M2 / SPI0_MOSI_M2 / PDM1_SDI3_M1 | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |  - |
| 41 |  GPIO1_B1 / SPI0_MISO_M2 / PDM1_SDI2_M1  | <div className='green'>21</div>  | <div className='green'>22</div> | GPIO1_B0 / SPI2_CS1_M0 / PDM1_SDI1_M1 |  40 |
| 43 |  GPIO1_B3 / UART4_TX_M2 / SPI0_CLK_M2 / PDM1_CLK1_M1  | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO1_B4 / UART7_RX_M2 / SPI0_CS0_M2 / PDM1_CLK0_M1 | 44 |
|- |  GND | <div className='black'>25</div>  | <div className='green'>26</div> | GPIO1_B5 / UART7_TX_M2 / SPI0_CS1_M2 | 45 |
|  57 |  GPIO1_D1 / SPI1_MOSI_M2 / UART6_RX_M2 / I2C7_SDA_M0 / PDM0_SDI1_M0 / I2S0_SDO2 / I2S0_SDI3 |  <div className='green'>27</div>  | <div className='green'>28</div> | GPIO1_D0 / SPI1_MISO_M2 / UART6_TX_M2 / I2C7_SCL_M0 / I2S0_SDO1 | 56 |
| 58 | GPIO1_D2 / SPI1_CLK_M2 / UART4_TX_M0 / PWM0_M1 / I2C1_SCL_M4 / PDM0_SDI2_M0 / I2S0_SDO3 / I2S0_SDI2  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |      -     |
| 59 |   GPIO1_D3 / SPI1_CS0_M2 / UART4_RX_M0 / PWM1_M1 / I2C1_SDA_M4 / PDM0_SDI3_M0 / I2S0_SDI1 | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO4_B2 / CAN1_RX_M1 / PWM14_M1 / I2S1_SDO1_M0 / UART8_RTSN_M0 / SPI0_CS0_M1 / I2C7_SCL_M3 | 138  |
| 139  | GPIO4_B3 / CAN1_TX_M1 / PWM15_IR_M1 / I2S1_SDO2_M0 / UART8_CTSN_M0 / I2C7_SDA_M3 | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |  -    |
| 52  | GPIO1_C4 / SPI4_CS1_M0 / PWM11_IR_M2 / I2C2_SDA_M3 / PDM0_CLK1_M0 | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO1_D5 / SPI1_CS1_M2 / PDM0_SDI0_M0 |  61 |
| 54 | GPIO1_C6 / PWM15_IR_M2 / I2C4_SDA_M4 / PDM0_CLK0_M0 | <div className='green'>37</div> | <div className='green'>38</div> | GPIO0_C4 / I2C4_SDA_M2 / PDM0_CLK1_M1 / UART0_RX_M0 / PWM2_M0  |  20  |
| -|  GND | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO0_C5 / I2S1_SDI0_M1 / I2C4_SCL_M2 / PWM4_M0 / UART0_TX_M0  |  21 |

</div>
</details>

<details>
    <summary>
        FAN
    </summary>
0.8mm connector (CN4)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | GND | 
|3    | PWM | PWM Control |
</details>

<details>
    <summary>
        HPOUT
    </summary>
0.8mm connector (CN3)

|Pin        | Assignment  | Description|
|:--------: | :---------: | :--------:  | 
|1          | AOR         | Right channel      |
|2          | AOL         | Left channel      |
|3          | GND         | GND      |
</details>

<details>
    <summary>
        VRTC
    </summary>

0.8mm connector(J27)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | Positive electrode  |
|2          | -         | negative electrode  |
</details>

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


### Hardware info

Get CM7s schematics, DXF, and other hardware materials
<a href="https://drive.google.com/drive/folders/1uaEyDY_oIhGFOExQVPXuocX27bSgTcPI" class="btn">
  <span>Google Drive link</span>
</a>

<br/>
<div class="cards">
    <a href="https://drive.google.com/drive/folders/1uaEyDY_oIhGFOExQVPXuocX27bSgTcPI" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>CM7s SCH</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/1uaEyDY_oIhGFOExQVPXuocX27bSgTcPI" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM7s 2D</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/1uaEyDY_oIhGFOExQVPXuocX27bSgTcPI" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>CM7s SMD</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/1uaEyDY_oIhGFOExQVPXuocX27bSgTcPI" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/1uaEyDY_oIhGFOExQVPXuocX27bSgTcPI" class="card-link">
    <div class="card">
        <div class="icon">
            <i>💡</i>
        </div>
        <div class="content">
            <h2>Case 3D</h2>
        </div>
    </div>
</a>
</div>
<br/>

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

ArmSoM Official Website: [https://www.armsom.org/product-page/cm7s](https://www.armsom.org/product-page/cm7s)

ArmSoM Official AliExpress Store: [https://aliexpress.ru/item/1005013244630755.html?gatewayAdapt=glo2rus&sku_id=12000060657514869](https://aliexpress.ru/item/1005013244630755.html?gatewayAdapt=glo2rus&sku_id=12000060657514869) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=1074292029401](https://item.taobao.com/item.htm?id=1074292029401)

For OEM & ODM, please contact: sales@armsom.org

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