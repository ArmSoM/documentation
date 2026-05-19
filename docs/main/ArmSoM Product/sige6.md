---
description: ArmSoM-Sige6 is powered by the Allwinner A733 octa-core processor, featuring a high-performance architecture with dual-core Arm Cortex-A76 and hexa-core Arm Cortex-A55. Built on a 12nm process with a peak frequency of 2.0GHz, it integrates a 3 TOPS NPU and an Imagination BXM-4-64 MC1 GPU, providing powerful AI and multimedia processing capabilities.
keywords: [armsom, armsom-sige6, maker kit, allwinner, A733 Product Introduction]
sidebar_label: "Sige6"
sidebar_position: 2
slug: /armsom-sige6
image: /img/sige/sige7-bananer.png
---


# Product Introduction: Sige6

Let's get to know Sige6 in 5 minutes.

## Introduction

The **ArmSoM-Sige6** is powered by the **Allwinner A733** octa-core processor, featuring a high-performance architecture with a **dual-core Arm Cortex-A76** and a **hexa-core Arm Cortex-A55** (big.LITTLE configuration). Built on a **12nm process** with a peak frequency of **2.0GHz**, it integrates a **3 TOPS NPU** and an **Imagination BXM-4-64 MC1 GPU** to deliver robust AI and multimedia processing capabilities. 

It is ideal for ARM PCs, edge computing, cloud servers, artificial intelligence, cloud computing, VR/AR, blockchain, and intelligent NVR applications.

![ArmSoM-sige6](/img/sige/sige7-bananer.png)

### Key Specifications

- **SoC**: Allwinner A733-HN3
- **CPU**: Dual-core Cortex-A76 @ 2.0GHz + Hexa-core Cortex-A55 @ 1.8GHz (12nm process)
- **GPU**: Imagination BXM-4-64 MC1; supports OpenGL ES 3.2, Vulkan 1.3, and OpenCL 3.0
- **NPU**: 3 TOPS AI acceleration engine
- **VPU / Codec**:
  - **Hardware Decoding**: H.265/VP9/AVS2 up to 4K@60fps, H.264 up to 4K@30fps
  - **Hardware Encoding**: H.264/H.265 up to 4K@30fps
- **RAM**: 2GB/4GB/6GB/8GB/12GB/16GB LPDDR5 (supports up to 16GB)
- **Flash**: 32GB/64GB/128GB eMMC
- **WIFI/BT**: Onboard Wi-Fi 6 + BT 5.4
- **Operating Voltage**: 5V (±5% voltage tolerance)
- **Operating Temperature**: -25℃ ~ 115℃
- **Operating Systems**:
  - **Official Support**: Debian Linux, Android 13
  - **Third-party Support**: Armbian
- **PCB**: 8-layer through-hole PCB design
- **Weight**: 47.2g
- **Dimensions**: 89mm × 56mm

## Getting started

<!-- <a href="./" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>Sige User Manual</h2>
            <p>How to start using your Sige</p>
        </div>
    </div>
</a> -->


## Hardware

### Hardware Interface

![ArmSoM-Sige6 front & back](/img/sige/armsom-sige6-layout.jpg)

### Hardware Spec
<details>
<summary>
Sige6 Hardware Specifications
</summary>
<table>
<thead>
<tr>
<th>Category</th>
<th>Functional Parameters</th>
</tr>
</thead>
<tbody align="left">
<tr>
<th>SoC</th>
<th><li>Allwinner A733</li></th>
</tr>
<tr>
<th>CPU</th>
<th><li>Dual-core Cortex-A76 @ 2.0GHz + Hexa-core Cortex-A55 @ 1.8GHz; 12nm Process</li></th>
</tr>
<tr>
<th>GPU</th>
<th><li>Imagination BXM-4-64 MC1; Supports OpenGL ES 3.2, Vulkan 1.3, OpenCL 3.0</li></th>
</tr>
<tr>
<th>NPU</th>
<th><li> 3 TOPS AI Acceleration Engine</li></th>
</tr>
<tr>
<th>VPU/Codec</th>
<th><li>Hardware Decoding: H.265/VP9/AVS2 4K@60fps, H.264 4K@30fps</li><li>Hardware Encoding: H.264/H.265 4K@30fps</li></th>
</tr>
<tr >
<th>RAM</th>
<th><li>2GB/4GB/6GB/8GB/12GB/16GB LPDDR5 (Up to 16GB configurable)</li></th>
</tr>
<tr >
<th>Flash</th>
<th><li>32GB/64GB/128GB eMMC</li>SPI Flash: 64Mb (Default), 128Mb, 256Mb (Optional)<li>Supports MicroSD card expansion</li><li>M.2 M-KEY Socket: PCIe 3.0 NVMe SSD</li></th>
</tr>
<tr>
<th>PCIe</th> 
<th><li>1x M.2 Key M Slot (PCIe 3.0 2-lanes), supports SSD expansion: Types 2280/2260/2242/2230 (2280 is currently the default configuration)</li></th>
</tr>
<tr>
<th>Networking</th>
<th><li>1x Gigabit Ethernet Port (supports PoE; requires external PoE HAT)</li><li>Wi-Fi 6, BT 5, External Antenna Connector</li></th>
</tr>
<tr>
<th>Video Output</th>
<th><li>1x HDMI 2.0 OUT, supports 4K@60fps</li><li>1x 4-lane MIPI DSI</li></th>
</tr>
<tr>
<th>Video Input</th>
<th><li>1x 4-lane MIPI CSI, up to 2.0Gbps per lane</li></th>
</tr>
<tr>
<th>Audio</th>
<th><li>1x HP-OUT Audio Output</li><li>1x Audio Jack</li></th>
</tr>
<tr>
<th>USB Ports</th>
<th><li>1x USB 3.1, up to 5Gbps data rate</li><li>1x USB Type-C (OTG / Power)</li><li>1x USB 2.0, supports High-speed (480Mbps), Full-speed (12Mbps), and Low-speed (1.5Mbps) modes</li></th>
</tr>
<tr>
<th>40-PIN Header</th>
<th><li>Supports GPIO / UART / SPI / I2C / PWM / 5V Power / 3.3V Power</li></th>
</tr>
<tr>
<th>Other</th>
<th><li>1x 3-pin Debug Serial Port</li><li>1x 5V Fan Header</li><li>1x Battery Input Connector (for powering the low-power RTC chip, LK8563S)</li><li>2x LEDs: The green LED flashes when the system is operating normally; the red LED is user-controllable</li></th>
</tr>
<tr>
<th>Power Supply</th>
<th><li>Supports 5V power input via USB Type-C</li><li>Supports PoE power supply (requires an external PoE HAT)</li><li>Supports 5V power input via GPIO pins (40-pin header: Pin 2 and 4)</li></th>
</tr>
<tr>
<th>Buttons</th>
<th><li>1x PWRON button (supports wake-from-sleep)</li><li>1x Reset button (supports system restart)</li><li>1x Boot button (supports entering boot/flashing mode)</li></th>
</tr>
<tr>
<th>System</th>
<th><li>Official Rockchip Support: Android 12.0, Debian 11, Buildroot</li><li>Third-party Support: Armbian, Ubuntu 20.04, Ubuntu 22.04, Kylin OS</li></th>
</tr>
<tr>
<th>Dimensions</th>
<th><li>92 mm x 62 mm</li></th>
</tr>
<tr>
<th>Operating Temperature</th>
<th><li>-25°C ~ 115°C</li></th>
</tr>
</tbody>
</table>
</details>

<details>
   <summary>
    Comparison Table of Mainstream Single Board Computers (SBCs) Based on the A733 SoC
    </summary>

| Category | ArmSoM-Sige6 | Orange Pi 4 Pro | Radxa Cubie A7A |
| :--- | :--- | :--- | :--- |
| **SoC** | Allwinner A733 | Allwinner A733 | Allwinner A733 |
| **CPU Architecture** | Dual-core Cortex-A76@2.0GHz + Hexa-core Cortex-A55@1.8GHz | Dual-core Cortex-A76@2.0GHz + Hexa-core Cortex-A55@1.8GHz | Dual-core Cortex-A76@2.0GHz + Hexa-core Cortex-A55@1.8GHz |
| **GPU / NPU** | BXM-4-64 / 3 TOPS | BXM-4-64 / 3 TOPS | BXM-4-64 / 3 TOPS |
| **RAM (LPDDR5)** | 2GB/4GB/6GB/8GB/12GB/16GB (Up to 16GB) | Up to 16GB supported | 2GB / 4GB / 6GB / 8GB / 12GB / 16GB |
| **Storage (eMMC)** | 16GB/32GB/64GB/128GB optional | 16GB/32GB/64GB/128GB optional | 16GB/32GB/64GB/128GB optional |
| **Onboard Flash (SPI)** | 64Mb (Default), 128Mb, 256Mb optional | 128Mb (Default) / 256Mb optional | 8MB SPI NOR Flash |
| **High-speed M.2** | **1x M.2 Key M (PCIe 3.0 2-lanes)** | **1x M.2 Key M (PCIe 3.0 2-lanes)** | 1x M.2 Key M (PCIe 3.0 1-lane) |
| **Ethernet** | 1x Gigabit (PoE supported via external HAT) | 1x Gigabit (PoE supported via external HAT) | 1x Gigabit (PoE supported via external HAT) |
| **Wireless** | Wi-Fi 6, BT 5.0 (External antenna) | Wi-Fi 6 + BT 5.4 (External antenna) | Wi-Fi 6, BT 5.4 (External antenna) |
| **Video Output** | HDMI 2.0 (4K@60fps) | HDMI 2.0 (4K@60fps) | HDMI 2.0 (4K@60fps) |
| **MIPI DSI** | 1x 4-lane MIPI DSI | 1x 4-lane MIPI DSI | 1x 4-lane MIPI DSI |
| **Camera (CSI)** | **1x 2-lane + 1x 4-lane MIPI CSI** | **1x 2-lane + 1x 4-lane MIPI CSI** | 1x 4-lane or 2x 2-lane MIPI CSI |
| **USB Interfaces** | 1x USB 3.1, 1x USB 2.0, 1x Type-C OTG | 1x USB 3.0, 3x USB 2.0 | 1x USB 3.1, 3x USB 2.0, 1x Type-C OTG |
| **Audio** | Audio Jack + HP-OUT | Audio Jack | Audio Jack (Stereo) |
| **Expansion** | 40-Pin Standard Header | 40-Pin Standard Header | 40-Pin Standard Header |
| **Power Input** | USB Type-C 5V / PoE / GPIO 5V | USB Type-C 5V / PoE / GPIO 5V | USB Type-C 5V / PoE / GPIO 5V |
| **Dimensions** | 89mm * 56mm | 89mm * 56mm | 89mm * 56mm |
| **OS Support** | Debian, Android 13 | Ubuntu, Debian, Android 13 | Debian, Android 13 |
</details>

### Allwinner a733 框图
<details>
    <summary>
      Allwinner a733 框图
    </summary>
        <img
  src="./img/sige/a733-block-diagram.png"
  alt="a733 block diagram"
  className="session-details-live-video"/>
</details>

### Hardware Pin Definitions

<details>
    <summary>
        40-PIN header
    </summary>
   
<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     313     | PJ25/PWM1-7/UART4-RX/TWI4-SDA/SPI3-MOS| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     312     | PJ24/PWM1-6/UART4-TX/TWI4-SCK/SPI3-CLK  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     356     | PL4/S-TWI2-SCK/S-PWM0-2 |  <div className='green'>7</div>  | <div className='green'>8</div>  | PL2/S-UART1-TX/S-UART0-TX/S-TWI1-SDA/S-PWM0-0 |     354      |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> | PL3/S-UART1-RX/S-UART0-RX/S-TWI1-SCK/S-IR-RX/S-PWM0-1  |     355      |
|     357     |  PL5/S-TWI2-SDA/S-SPI0-CLK/S-PWM0-3 | <div className='green'>11</div>  | <div className='green'>12</div> |  PK0//UART6-DCD/I2S4-BCLK |     320     |
|     358     |  PL6/S-UART0-TX/S-SPI0-MOSI/S-IR-RX/S-PWM0-4 | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|     359     |  PL7/S-UART0-RX/S-SPI0-MISO/S-PWM0-5  | <div className='green'>15</div>  | <div className='green'>16</div> |  PB0/UART2-TX/UART0-TX/SPI2-CS0  |     32     |
|             |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> |  PB1/UART2-RX/UART0-RX/SPI2-CLK |    33     |
|     108      | PD12/SPI1-MOS  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |             |
|     109      | PD13/SPI1-MISO  | <div className='green'>21</div>  | <div className='green'>22</div> | PK6/TWI2-SCK/UART4-TX/UART2-RTS/SPI3-MOSI        |        326     |
|     107      | PD11/SPI1-CLK  | <div className='green'>23</div>  | <div className='green'>24</div> |  PD10/SPI1-CS0/PWM1-0|     106      |
|             |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |  PD15/SPI1-CS1/UART3-CTS |     111      |
|     315     | PJ27/PWM1-9/UART4-CTS/UART2-RX/TWI5-SDA |  <div className='green'>27</div>  | <div className='green'>28</div>  | PJ26/PWM1-8/UART4-RTS/UART2-TX/TWI5-SCK/SPI3-MISO |     314     | 
|     362      | PL10/S-UART0-TX/S-TWI2-SCK/S-UART1-TX/S-PWM0-8/  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |            |
|     321      | PK1/UART6-DSR/I2S4-MCLK/TWI1-SCK  | <div className='green'>31</div>  | <div className='green'>32</div> |  PL9/S-TWI1-SDA/S-UART1-RX/S-TWI0-SDA/S-TWI2-SDA/S-PWM0-7 |    361     |
|     360     | PL8/S-TWI1-SCK/S-UART1-TX/S-TWI0-SCK/S-TWI2-SCK/S-PWM0-6  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |             |
|     322     | PK2/UART6-DTR/I2S4-LRCK/HDMI-SDA/TWI5-SDA  | <div className='green'>35</div>  | <div className='green'>36</div> |  PD14/LCD0-D20/SPI1-HOLD/UART3-RTS|     110     |
|      325      | PK5/PWM1-8/PWM1-9/SPI3-CLK    | <div className='green'>37</div>  | <div className='green'>38</div> | PK4/I2S4-DOUT0/I2S4-DIN1  |     324     |
|             |   GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  PK3/UART6-RI/I2S4-DIN0/I2S4-DOUT1/TWI5-SCK   |     323     |

</div>
</details>

## Resources

### Source Code

### Official Image

ArmSoM team uses Debian bullseye as the official operating system.[How to Flash Image](https://docs.armsom.org/getting-start/flash-img)📤

#### Download

The following systems have been tested and verified by ArmSoM official:

Network disk address: 
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56?usp=drive_link" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 


### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 


### Hardware Resources 

<a href="/getting-start/cloud-disk" class="btn">
  <span>Google Drive link</span>
</a>
<br/>


## Product Certificate

### CE / FCC / RoHS

## Supply Statement

The ArmSoM-Sige6 will be produced at least until January 2036.

## Accessories


## Purchase Samples 
ArmSoM online shop: 
ArmSoM Aliexpress online shop: 

ArmSoM Taobao shop: 

OEM&ODM, please contact: sales@armsom.org

## What do others say about the Sige6?


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

Without effective cooling measures, the surface temperature of the main chip may exceed 60 degrees. When handling the device, please avoid direct contact with the SoC and surrounding power inductors to prevent burns. Ensure that the environment is well-ventilated during operation to prevent localized heat buildup, which could lead to overheating. Additionally, do not place the device in direct sunlight. 

:::