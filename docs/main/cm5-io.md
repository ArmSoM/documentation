---
description: ArmSoM-CM5-IO
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "CM5-IO"
sidebar_position: 6
slug: /armsom-cm5-io
---

# CM5-IO Product Introduction

The CM5-IO is the IO board for the ArmSoM CM5, with dimensions of 100x80x29 mm. It is a miniature AI computer designed specifically for makers, learners, and developers, enabling the rapid application of AI technology to various smart devices.

## Hardware Information

### Hardware Specifications

The CM5-IO board is an expansion board specifically designed for the CM5 computing module, aimed at assisting in system and embedded board development.

- 1x HDMI output, 1x DP output
- 4x USB 3.0 Type-A
- Gigabit Ethernet
- Firmware flashing and device mode via USB Type-C
- GPIO: 40-pin header
- POE: 5V Power Over Ethernet
- Power connector: DC Barrel jack for 12V power input
- Expansion: M.2 (M-key, supports PCIe), microSD
- MIPI DSI: 1x 4-lane MIPI DSI, supports up to 4K@60fps (x4)
- MIPI CSI0: 1x 4-lane MIPI CSI, each lane up to 2.5Gbps
- MIPI CSI1: 1x 2-lane MIPI CSI, each lane up to 2.5Gbps
- Others: HPOUT, FAN, VRTC
- Dimensions: 100 x 80 x 29 mm (3.94 x 3.15 x 1.14 inches)
- Weight:

### Hardware Interfaces

![ArmSoM-CM5-IO](/img/cm/cm5-io-layout.png)

:::tip
The CM5-IO board uses a 12V DC power supply.
:::

### Pin Definition

<details>
    <summary>
        40-pin header
    </summary>
<div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
| |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |      |  
|140| CAN1_RX_M2 / I2C3_SDA_M0 / UART2_RX_M1 / GPIO4_B4_d   | <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |      |
|141| CAN1_TX_M2 / I2C3_SCL_M0 / UART2_TX_M1 / GPIO4_B5_d   |  <div className='green'>5</div>  | <div className='black'>6</div>  |GND | -           |
|20| PWM0_CH0_M0 / GPIO0_C4_d  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  <div className='orange-txt'>UART0_TX_M0</div> / GPIO0_D4_u |28|
|  - |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  <div className='orange-txt'>UART0_RX_M0</div> / GPIO0_D5_u |     29      |
| - |  -   | <div className='green'>11</div>  | <div className='green'>12</div> | -    |     -     |
|-|- | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
| - | - | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO2_D1_d /  UART4_RX_M0 / I2C6_SDA_M2 / PWM2_CH1_M2  | 89 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |   GPIO2_D0_d / UART4_TX_M0 / I2C6_SCL_M2 / PWM2_CH0_M2  |88|
| 97 |  I2C7_SDA_M1 / SPI3_MOSI_M0 / UART3_RX_M0 / GPIO3_A1_d | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |  - |
| 98 |  CAN1_TX_M3 / SPI3_MISO_M0 / SPDIF_RX1_M1 / UART3_CTSN_M0 / SPDIF_RX1_M1/  GPIO3_A2_d  | <div className='green'>21</div>  | <div className='green'>22</div> | SARADC_VIN4 |  - |
| 96 |  I2C7_SCL_M1 / SPI3_CLK_M0 / UART3_TX_M0 / GPIO3_A0_d  | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO3_A3_d / CAN1_RX_M3 / SPI3_CSN0_M0  / UART3_RTSN_M0 / SPDIF_TX1_M1 | 99|
|- |  GND | <div className='black'>25</div>  | <div className='green'>26</div> | - | - |
|  111 |  I2C4_SDA_M3 / UART2_RX_M2 / GPIO3_B7_d |  <div className='green'>27</div>  | <div className='green'>28</div> | GPIO2_D6_d / PWM10_M0 / GPIO3_B5_d  | 109 |
|112| I2C4_SCL_M3 / UART2_TX_M2 / GPIO3_C0_d  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |      -     |
|126|   SPI3_MOSI_M1 / PWM2_CH6_M3 / GPIO3_D6_d| <div className='green'>31</div>  | <div className='green'>32</div> | -  | -  |
| -  | - | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |  -    |
| -  | -   | <div className='green'>35</div>  | <div className='green'>36</div> |  - |   - |
| - | - | <div className='green'>37</div> | <div className='green'>38</div> |  -    |   -   |
| -|  GND | <div className='black'>39</div>  | <div className='green'>40</div> | -   |     -     |

</div>
</details>

<details>
    <summary>
        FAN
    </summary>
0.8mm connector(CN32)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | GND |
|3    | PWM | PWM control |
</details>

<details>
    <summary>
        HPOUT
    </summary>
0.8mm connector(CN3)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | AOR         | right channel      |
|2          | AOL         | left channel      |
|3          | GND         | GND          |
</details>

<details>
    <summary>
        VRTC
    </summary>

0.8mm connector(J27)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | Positive pole      |
|2          | -         | Negative pole    |
</details>

<details>
    <summary>
        PoE In(J5)
    </summary>

| Pin  | Assignment | Description |
| :--: | :--------: | :---------: |
|  1   |    VC1     |     TX1     |
|  2   |    VC2     |     RX1     |
|  3   |    VC3     |     TX2     |
|  4   |    VC4     |     RX2     |

</details>

## Resources

<div class="cards">
<a href="https://github.com/armbian/build" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>Armbian源码</h2>
            <p>适用于 ARM 开发板的 Linux</p>
        </div>
    </div>
</a>

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>CM5-IO kernel</h2>
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
            <h2>CM5-IO uboot</h2>
            <p>rockchip-linux/u-boot</p>
        </div>
    </div>
</a>
</div>

### Official Images

The ArmSoM team provides an official operating system based on Debian Bullseye.

The following systems have been tested and verified by ArmSoM:

- **Baidu Drive Link**: [Baidu Netdisk](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms)

| Logo | Description | Download |
|:----:|:-----------:|:--------:|
| ![debian-bullseye](/img/sige/debian12.png) | **Debian 12 for CM5:** <br/> Debian 12 introduces thousands of new and updated packages, supporting various desktop environments and processor architectures (including 32-bit and 64-bit PCs, ARM, MIPS, and PowerPC). One of the biggest changes is the upgrade of the Linux kernel from version 5.10 to 6.1 LTS. | [Baidu Netdisk](https://pan.baidu.com/s/1jMlQQxMsChx7wVuT5_koSQ?pwd=arms) |
| ![Android](/img/sige/android.png) | **Android 14 for CM5:** <br/> The latest OS upgrade makes your device more personalized, secure, and accessible. It offers improved photo quality, new themes, and AI-generated wallpapers. Privacy updates protect your health, safety, and data while expanding accessibility features. | [Baidu Netdisk](https://pan.baidu.com/s/1nQt_MNnEWcYrWB6vT2fxbQ?pwd=arms) |

### Third-Party Images

| Logo | Description | Download |
|:----:|:-----------:|:--------:|
| ![armbian-logo](/img/armbian-logo.webp) | **Armbian for CM5:** <br/> Armbian is a build framework that allows users to create ready-to-use images with a working kernel based on various user-space configurations for single-board computers. It provides a variety of pre-built images for some supported SBCs, typically based on Debian or Ubuntu. | [Armbian Image](https://github.com/armbian/community/releases) |
| ![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4) | **Ubuntu-Rockchip for CM5:** <br/> This project aims to provide the default Ubuntu experience for Rockchip RK3588 devices. Get started right away by choosing the appropriate Ubuntu server or desktop image, and enjoy a familiar environment. | [Ubuntu-Rockchip Image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases) |

### Hardware Documentation

Get schematics, PCB, DXF, and other hardware documentation for the CM5-IO development kit to quickly start your development.

*Coming Soon. Please contact sales@armsom.org for more information.*