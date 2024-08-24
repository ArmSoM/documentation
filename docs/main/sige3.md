---
description: ArmSoM-Sige3
keywords: [armsom-sige3, RK3568B2 Development Boards, rk3568 SBC]
sidebar_label: "Sige3"
sidebar_position: 2
slug: /armsom-sige3
---

# Product Introduction:Sige3

Let's get to know Sige3 in 5 minutes.

## Overview

The ArmSoM-Sige3 features the Rockchip RK3568B2, a high-performance and low-power quad-core application processor designed for personal mobile internet devices and AloT devices. The Sige3 supports up to 4K@60 HDMI, MIPI DSI, MIPI CSI, USB ports, Gigabit Ethernet, 2.5G network port, PCIe 3.0, 40-pin GPIO expansion header, and RTC.

### Key Specifications

- SOC: Rockchip RK3568B2
- CPU: Quad-core Cortex-A55 @ 2GHz
- GPU: ARM Mali G52
- VPU/Codec:
  - Hardware Decoding: H.265/VP9 (HEVC) hardware decoding (up to 4Kp60)
  - Hardware Encoding: H.264 hardware encoding (up to 1080p60)
- RAM: 2/4/8 GB 32-bit LPDDR4x, default 4GB
- Flash: 8/16/32/64 GB eMMC, default eMMC 32GB
- Operating Voltage: Wide input voltage range from 4.5V to 18V (voltage tolerance ±5%)
- Operating Temperature: 0℃ ~ 80℃
- Operating System:
  - Rockchip official support: Debian11, Buildroot
  - Third-party support: Armbian
- PCB: 8-layer PCB design
- Weight: 42.3g
- Dimensions: 92mm × 62mm x 14.6mm

## Getting started

<a href="./sige-family-started" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>Sige User Manual</h2>
            <p>How to start using your Sige</p>
        </div>
    </div>
</a>

## Hardware

### Hardware Interface

<!-- ![ArmSoM-Sige1 front & back](/img/sige/sige1-layout.jpg) -->
:::tip
On the Sige3, there are two Type-C interfaces that look identical, but only one of them (Type-C DC IN) serves as the power input interface.
:::

### Hardware Spec

<details>
    <summary>
        Sige3 Hardware Specifications
    </summary>
    <table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Specification</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3568B2</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3568B2 Quad-core Cortex-A55</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali G52</li><li>Supports OpenGL ES3.2/2.0/1.1, Vulkan1.1</li></th>
        </tr>
        <tr>
            <th>VPU/Codec</th>
            <th><li>Hardware Decoding: H.265/VP9 (HEVC) hardware decoding (up to 4Kp60)</li><li>Hardware Encoding: H.264 hardware encoding (up to 1080p60)</li></th>
        </tr>
        <tr>
            <th>RAM</th>
            <th><li>2/4/8 GB 32-bit LPDDR4x, default 4GB</li></th>
        </tr>
        <tr>
            <th>Flash</th>
            <th><li>8/16/32/64 GB eMMC, default eMMC 32GB</li><li>Supports MicroSD card expansion</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M slot (PCIe 3.0 1-lane), expandable SSD: Type 2280/2260/2242/2230, default 2280</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th><li>1x 2.5G Ethernet</li><li>1x Gigabit Ethernet</li><li>Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 (<a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a>)</li></th>
        </tr>
        <tr>
            <th>Video Output</th>
            <th><li>1x HDMI OUT2.0b, supports 4K@60fps</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th><li>1x HDMI audio output</li><li>1x HP-OUT audio output</li></th>
        </tr>
        <tr>
            <th>USB Ports</th>
            <th><li>2x USB2.0, supports High Speed (480Mbps), Full Speed (12Mbps), and Low Speed (1.5Mbps)</li><li>1x USB Type-C 3.0</li></th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th><li>Compatible with Raspberry Pi 40-pin, supports various peripherals</li><li>Supports UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>Other</th>
            <th><li>1x 5V fan connector</li><li>1x Battery input connector for low-power RTC chip HYM8563TS</li><li>2x LEDs: Green LED blinks when the system is normal, Red LED controlled by the user</li></th>
        </tr>
        <tr>
            <th>Power</th>
            <th><li>Supports USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A</li></th>
        </tr>
        <tr>
            <th>Buttons</th>
            <th><li>1x Reset button, supports reboot</li><li>1x Maskrom button, supports entering maskrom programming mode</li></th>
        </tr>
        <tr>
            <th>System</th>
            <th><li>Rockchip official support: Debian11, Buildroot</li><li>Third-party support: Armbian</li></th>
        </tr>
        <tr>
            <th>Dimensions</th>
            <th><li>92 mm x 62 mm</li></th>
        </tr>
        <tr>
            <th>Operating Temperature</th>
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>
</details>

### RK3528 Block Diagram

<details>
    <summary>
        RK3528 Block Diagram
    </summary>
    <img
  src="./img/sige/rk3528.png"
  alt="rk3528 block diagram"
  className="session-details-live-video"/>
</details>

### Hardware Pin Definitions

<details>
    <summary>
        40-pin header
    </summary>
<div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     130     |   I2C1_SDA_M0 / UART3_RTSN / I2S1_SDI3 / GPIO4_A2_d /| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     131     | I2C1_SCL_M0 / UART3_CTSN / I2S1_SDI2 /  GPIO4_A3_d  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     1     | REF_CLK_OUT_M0 /GPIO0_A1  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  <div className='orange-txt'>UART0_TX_M0</div> / JTAG_MCU_TCK_M1 / JTAG_CPU_TCK_M1  / GPIO4_D0_d |     152      |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  GPIO0_B6  / <div className='orange-txt'>UART0_RX_M0</div> / JTAG_MCU_TMS_M1 / JTAG_CPU_TMS_M1 /   GPIO4_C7_u  |     151      |
|     0     |  GPIO0_A0  | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO4_A5_d / I2S1_SCLK  / UART1_RTSN   |     133     |
|  | | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|  | | <div className='green'>15</div>  | <div className='green'>16</div> |   |          |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |    |         |
| 138 | SPI0_MOSI / PDM_SDI0 / I2S1_SDO3 / GPIO4_B2_d  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |   |
| 41 | SPI0_MISO / PDM_SDI2 /  I2S1_SDI1 / GPIO4_B3_d  | <div className='green'>21</div>  | <div className='green'>22</div> | |   |
| 43 | SPI0_CLK / I2S1_SDI0 /  GPIO4_B4_d  | <div className='green'>23</div>  | <div className='green'>24</div> |  SPI0_CSN0 / PWR_CTRL1  /SPI0_CS0_M2 | 44 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |  PWM6_M0 / SPI0_CSN1 / PDM_SDI3 / GPIO4_C1_d |     145      |
|150| I2C0_SDA_M0 / PWM0_M0 / GPU_AVS / GPIO4_C3_d |  <div className='green'>27</div>  | <div className='green'>28</div> | ARM_AVS / PWM1_M0 / I2C0_SCL_M0 / GPIO4_C4_d  | 148 |
|  |   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |           |
| |  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO4_C0/PWM5_M0 / FEPHY_LED_LINK_M0 / UART3_TX_M1  |    144     |
| 103  | GPIO4_B7 / PWM4_M0 /  FEPHY_LED_SPD_M0 / UART3_RX_M1  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |      |
| 134  | UART1_TX_M0 / I2S1_LRCK / GPIO4_A6_d   | <div className='green'>35</div>  | <div className='green'>36</div> |   |          |
| | | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO3_B2 / SPI0_CLK / I2S1_SDI0    |     106     |
| |  GND | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO4_A7_d /  UART1_RX_M0 / I2S1_SDO0   |     107     |

</div>
</details>

<details>
    <summary>
        FAN
    </summary>

0.8mm connector(CON3102)

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

0.8mm connector(CON3101)

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

0.8mm connector(CON2200)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | Positive pole      |
|2          | -         | Negative pole    |
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
                <h2>Armbian Source Code</h2>
                <p>Linux for ARM development boards</p>
            </div>
        </div>
    </a>

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>Sige3 kernel</h2>
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
            <h2>Sige3 uboot</h2>
            <p>rockchip-linux/u-boot</p>
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
|![debian-bullseye](/img/sige/debian11.png) | debian11 for Sige3 :  <br/>  Debian 11 continues to uphold Debian's tradition by offering a stable and reliable operating system environment. It has undergone rigorous testing and stability assurances, making it suitable for servers, desktops, and embedded devices alike.| [Google Drive link](https://drive.google.com/drive/folders/1UsUqiYN2mzTEx_H2eBlRiNChdmZge0EO?usp=drive_link)  |
|![Android9-box](/img/sige/Android9-box.png) | Android9 Box for Sige3 :    <br/>The Android 9 Box version is an Android operating system specifically designed for TV boxes. It is based on Android 9 Pie, focusing on optimizing user experience and performance for large-screen devices. | [Google Drive link](https://drive.google.com/drive/folders/1ZDfZGnfNyN2fsciE2lMQwuXcvaoRZofP?usp=drive_link)      |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.webp) | Armbian for Sige3 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       | [armbian image](https://github.com/armbian/community/releases)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige3 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment.  | [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### Hardware Resources 

<div class="cards">
    <a href="https://drive.google.com/drive/folders/15uvc2lcOAKP0enXezASUhVFLuzkq3IEX?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige3 SCH</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/15uvc2lcOAKP0enXezASUhVFLuzkq3IEX?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige3 2D</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/15uvc2lcOAKP0enXezASUhVFLuzkq3IEX?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige3 SMD</h2>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/15uvc2lcOAKP0enXezASUhVFLuzkq3IEX?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
</div>

## Product Certificates

### CE / FCC / RoHS

## Purchase Samples
ArmSoM Official Website: [https://www.armsom.org/product-page/Sige3](https://www.armsom.org/product-page/Sige3)

ArmSoM Official AliExpress Store: [https://www.aliexpress.com/store/1102800175](https://www.aliexpress.com/store/1102800175) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=757023687970](https://item.taobao.com/item.htm?id=757023687970)

For OEM & ODM, please contact: sales@armsom.org


