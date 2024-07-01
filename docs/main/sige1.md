---
description: The ArmSoM-Sige1 utilizes the Rockchip RK3528, a new-generation intelligent set-top box and multimedia application chip. It is applicable to IPTV/OTT boxes, cloud terminals, and integrated products. It is a high-performance, low-power 4K player with decoding capability supporting up to 8K. Additionally, it also supports the AVS2 and HDR VIVID standards.
keywords: [armsom, armsom-sige1, maker kit, rockchip, rk3528产品介绍]
sidebar_label: "Sige1"
sidebar_position: 2
slug: /armsom-sige1
---

# Product Introduction:Sige1

Let's get to know Sige1 in 5 minutes.

## Overview

The ArmSoM-Sige1 utilizes the Rockchip RK3528, a new-generation intelligent set-top box and multimedia application chip. It is applicable to IPTV/OTT boxes, cloud terminals, and integrated products. It is a high-performance, low-power 4K player with decoding capability supporting up to 8K. Additionally, it also supports the AVS2 and HDR VIVID standards.

![ArmSoM-sige1](/img/sige/sige1.png)

### Key Parameter

- SoC: Rockchip RK3528
- CPU: RK3528 Quad-core Cortex-A53
- GPU: ARM Mali-450 GPU
- VPU/Decoding:
  - Hardware Decoding: Supports 60fps playback of 4K ultra-high-definition video with up to 10-bit pixels. Supports video standards including H.265, H.264, AVS2, etc.
  - Hardware Encoding: Supports 60fps capture of 1080p high-definition video. Supports H.265 and H.264 encoding.
- RAM: 4GB 32-bit LPDDR4x, default 4GB (RK3528 supports maximum 4GB)
- Flash: 32GB eMMC, default eMMC 32GB
- Operating Voltage: Wide range input voltage, from 4.5V to 18V (voltage error ±5%)
- Operating Temperature: 0°C to 80°C
- Operating System:
  - Officially Supported by Rockchip: Android 9.0_box, Debian11, Buildroot
  - Third-party Support: Armbian
- PCB: 6-layer PCB board design
- Weight: 38.9g
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

![ArmSoM-Sige1 front & back](/img/sige/armsom-sige1-layout.jpg)
:::tip
On the Sige1, there are two Type-C interfaces that look identical, but only one of them (Type-C DC IN) serves as the power input interface.
:::

### Hardware Spec

<details>
    <summary>
        Sige1 Hardware Spec
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
            <th>SOC</th>
            <th><li>RockChip RK3528</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3528 Quad-core Cortex-A53</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali-450 GPU</li><li>Supports OpenGL ES 1.1/2.0 and OpenVG.</li></th>
        </tr>
         <tr>
            <th>VPU/Codec</th>
            <th><li>video decoder：supports 60fps playback of 4K ultra-high-definition video with up to 10-bit pixels. It supports H.265, H.264, AVS2, etc. video standards.</li><li>video encoder：supports 60fps capture of 1080p high-definition video. It supports H.265 and H.264 encoding.</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>4GB 32-bit LPDDR4x, default 4GB, maximum supported 4GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB eMMC, default eMMC 32GB</li><li> supports MicroSD card expansion</li></th>
        </tr>
         <tr>
            <th>Network</th>
            <th>
                <li>1x 2.5G Ethernet port</li>
                <li>1x Gigabit Ethernet port</li>
                <li>Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5 (rtl8852bs)</li>
            </th>
        </tr>
        <tr>
            <th>Video Output</th>
            <th>
                <li>1x HDMI OUT2.0b, supports 4K@60fps</li>
            </th>
        </tr>
        <tr>
            <th>Audio</th>
            <th>
                <li>1x HDMI audio output</li>
                <li>1x HP-OUT audio output</li>
            </th>
        </tr>
        <tr>
            <th>USB Ports</th>
            <th>
                <li>2x USB2.0, supports High-Speed (480Mbps), Full-Speed (12Mbps), and Low-Speed (1.5Mbps) modes</li>
                <li>1x USB Type-C 2.0, supports OTG, supports high-speed (480Mbps), full-speed (12Mbps) and low-speed (1.5Mbps) modes</li>
            </th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th>
                <li>Compatible with Raspberry Pi 40-pin GPIO, supports various accessory peripherals</li>
                <li>Supports UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li>
            </th>
        </tr>
        <tr>
            <th>Others</th>
            <th>
                <li>1x 5V fan interface</li>
                <li>1x battery input connector for low-power RTC chip HYM8563TS</li>
                <li>2x LED lights, green light starts blinking when system is normal, red light controlled by user</li>
            </th>
        </tr>
        <tr>
            <th>Power</th>
            <th>
                <li>Supports USB Type-C, 9V/2A, 12V/2A, 15V/2A</li>
            </th>
        </tr>
        <tr>
            <th>Buttons</th>
            <th>
                <li>1x Reset button, supports reboot</li>
                <li>1x Maskrom button, supports entering maskrom burning mode</li>
            </th>
        </tr>
        <tr>
            <th>System</th>
            <th>
                <li>Officially Supported by Rockchip: Android 9.0_box, Debian11, Buildroot</li>
                <li>Third-party Support: Armbian, Istoreos</li>
            </th>
        </tr>
        <tr>
            <th>Dimensions</th>
            <th>
                <li>92 mm x 62mm</li>
            </th>
        </tr>
        <tr>
            <th>Operating Temperature</th>
            <th>
                <li>0℃ ~ 80℃</li>
            </th>
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
  src="/img/sige/rk3528.png"
  alt="chat-sdk"
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
|     0     |  GPIO0_A0  | <div className='green'>11</div>  | <div className='green'>12</div> |  I2S1_SCLK  / UART1_RTSN / GPIO4_A5_d   |     133     |
|  | | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|  | | <div className='green'>15</div>  | <div className='green'>16</div> |   |          |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |    |         |
| 138 | SPI0_MOSI / PDM_SDI0 / I2S1_SDO3 / GPIO4_B2_d  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |   |
| 41 | SPI0_MISO / PDM_SDI2 /  I2S1_SDI1 / GPIO4_B3_d  | <div className='green'>21</div>  | <div className='green'>22</div> | |   |
| 43 | SPI0_CLK / I2S1_SDI0 /  GPIO4_B4_d  | <div className='green'>23</div>  | <div className='green'>24</div> |  SPI0_CSN0 / PWR_CTRL1  /SPI0_CS0_M2 | 44 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |  PWM6_M0 / SPI0_CSN1 / PDM_SDI3 / GPIO4_C1_d |     145      |
|  150 | I2C0_SDA_M0 / PWM0_M0 / GPU_AVS / GPIO4_C3_d |  <div className='green'>27</div>  | <div className='green'>28</div> | ARM_AVS / PWM1_M0 / I2C0_SCL_M0 / GPIO4_C4_d  | 148 |
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
        Fan
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
        EARPHONE
    </summary>

0.8mm connector(CON3101)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | AOR         | right channel      |
|2          | AOL         | left channel      |
|3          | GND         | GND          |
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
            <h2>Sige1 kernel</h2>
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
            <h2>Sige1 uboot</h2>
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

**debain bullseye**  

Firmware location: 3. Linux image/debian/ArmSoM-Sige1 - [Google Drive link](https://drive.google.com/file/d/1AuSBQweaRfcMlGBoiq0Hy8mOIMUEZPrn/view?usp=drive_link)

**Android9 BOX**

Image location: 4. Android Images/ArmSoM-Sige1 - [Google Drive link](https://drive.google.com/file/d/1SX3IO14Kdy-3wIOqLpmG9oSfuj1XAOzT/view?usp=drive_link)


### Third Party System  

|        |   | Description|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.webp) | Armbian for Sige7(bpi-m7) :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       | [armbian image](https://www.armbian.com/bananapi-m7/ )     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige7(bpi-m7) :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment.  | [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### Hardware Resources 


<div class="cards">
    <a href="https://github.com/armbian/build" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige1 SCH</h2>
            </div>
        </div>
</a>

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige1 2D</h2>
        </div>
    </div>
</a>

<a href="https://github.com/rockchip-linux/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige1 SMD</h2>
        </div>
    </div>
</a>
<a href="https://github.com/rockchip-linux/u-boot" class="card-link">
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
ArmSoM Official Website: [https://www.armsom.org/product-page/Sige1](https://www.armsom.org/product-page/Sige1)

ArmSoM Official AliExpress Store: [https://www.aliexpress.com/store/1102800175](https://www.aliexpress.com/store/1102800175) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=757023687970](https://item.taobao.com/item.htm?id=757023687970)

For OEM & ODM, please contact: sales@armsom.org


