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

![ArmSoM-sige1](/img/sige/sige1-b.png)

### Key Parameter

- SoC: Rockchip RK3528
- CPU: RK3528 Quad-core Cortex-A53 up to 2.0GHz
- GPU: ARM Mali-450 GPU
- VPU/Decoding:
  - Hardware Decoding: Supports 60fps playback of 4K ultra-high-definition video with up to 10-bit pixels. Supports video standards including H.265, H.264, AVS2, etc.
  - Hardware Encoding: Supports 60fps capture of 1080p high-definition video. Supports H.265 and H.264 encoding.
- RAM: 1GB / 2GB / 4GB 32-bit LPDDR4x, default 2GB 
- Flash: 0GB / 8GB / 16GB / 32GB / 64GB eMMC, default eMMC 8GB
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

![ArmSoM-Sige1 front & back](/img/sige/sige1-layout.jpg)
![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)

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
                <li>Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 <a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a></li>
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
            <th>40-PIN</th>
            <th>
                <li>Compatible with Raspberry Pi 40-PIN GPIO, supports various accessory peripherals</li>
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

<details>
    <summary>
       Comparison of Specifications for Sige7/5/3/1
    </summary>

|        | Sige7  | Sige5 | Sige3 |Sige1 |
| --------- | ----- | --- |--- | --- | 
| SoC Process | 8nm | 8nm | 22nm | 28nm |  
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3568B2 <br/> Cortex-A55 x4 @2GHz | Rockchip RK3528 <br/> Cortex-A53 x4 @2GHz | 
| GPU | ARM Mali-G610 MP4  | ARM Mali G52 MC3 GPU | Arm Mali‑G52‑2EE | ARM Mali-450 GPU |
| NPU | 6TOPS@INT8(3 NPU core)  | 6TOPS@INT8(2 NPU core) | 1TOP@INT8 | - |
| RAM | 4GB/8GB/16GB/32GB 64-bit LPDDR4x | 4/8/16GB 32-bit LPDDR4x | 2/4GB 32-bit LPDDR4x |  2/4GB 32-bit LPDDR4x|
| eMMC| 64GB/128GB eMMC | 32/128GB eMMC| 32GB eMMC | 8 eMMC |
| TF Card | Molex Slot, Spec Version 2.x/3.x/4.x(SDSC/SDHC/SDXC)| Yes| Yes |   Yes|
| Output | 1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 4K@60fps <br/> 1x DP 1.4 up to 8K@30fps | 1x HDMI 2.1, supports 4K@120fps <br/> 1x MIPI DSI, up to 2K@60fps <br/>  1x DP1.4, up to 4K@120fps | 1x MIPI DSI up to 2K@60fps <br/> 1x HDMI OUT2.0, supports 4K@60fps |  1x HDMI OUT2.0b, supports 4K@60fps|
| Decoder |  8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|  H.264, H.265, VP9, AV1 and AVS2 etc. up to 8K@30fps or4K@120fps| 4KP60 H.265/H.264/VP9  |  H.265, H.264, AVS2 4K@60fps|
| Encoder | 8K@30fps H.265 / H.264| H.264 and H.265 up to 4K@60fps| 1080P60 H.264/H.265 | H.264 and H.265 up to1080@60fps|
| Wi-Fi | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB |   SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs|
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 1-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported |  - |
| Ethernet | 2x 2.5G Ethernet |   2x Gigabit Ethernet| Gigabit Ethernet & 2.5G Ethernet| Gigabit Ethernet & 2.5G Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 1x USB 3.0 & 1x USB 2.0  | 2x USB 2.0|
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG）| 1x USB-C Power jack & 1x USB3.0 OTG |  1x USB-C Power jack & 1x USB2.0 OTG|
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI  |   -|
| 40-PIN Header| yes | yes | yes | yes |
| LEDs | 2x LEDs | 2x LEDs |2x LEDs |  2x LEDs|
|Board Dimensions| 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm |

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
        40-PIN header
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
| 139 | SPI0_MISO / PDM_SDI2 /  I2S1_SDI1 / GPIO4_B3_d  | <div className='green'>21</div>  | <div className='green'>22</div> | |   |
| 140 | SPI0_CLK / I2S1_SDI0 /  GPIO4_B4_d  | <div className='green'>23</div>  | <div className='green'>24</div> |  SPI0_CSN0 / PWR_CTRL1  /SPI0_CS0_M2  / GPIO4_B6_u  | 142 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |  PWM6_M0 / SPI0_CSN1 / PDM_SDI3 / GPIO4_C1_d |     145      |
|  147 | I2C0_SDA_M0 / PWM0_M0 / GPU_AVS / GPIO4_C3_d |  <div className='green'>27</div>  | <div className='green'>28</div> | ARM_AVS / PWM1_M0 / I2C0_SCL_M0 / GPIO4_C4_d  | 148 |
|  |   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |           |
| |  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO4_C0/PWM5_M0 / FEPHY_LED_LINK_M0 / UART3_TX_M1  |    144     |
| 143  | GPIO4_B7 / PWM4_M0 /  FEPHY_LED_SPD_M0 / UART3_RX_M1  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |      |
| 134  | UART1_TX_M0 / I2S1_LRCK / GPIO4_A6_d   | <div className='green'>35</div>  | <div className='green'>36</div> |   |          |
| | | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO3_B2 / SPI0_CLK / I2S1_SDI0    |     106     |
| |  GND | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO4_A7_d /  UART1_RX_M0 / I2S1_SDO0   |     135     |

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

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11-1.png) | debian11 for Sige1 :  <br/>  Debian 11 continues to uphold Debian's tradition by offering a stable and reliable operating system environment. It has undergone rigorous testing and stability assurances, making it suitable for servers, desktops, and embedded devices alike.| [Google Drive link](https://drive.google.com/drive/folders/1UsUqiYN2mzTEx_H2eBlRiNChdmZge0EO?usp=drive_link)  |
|![Android9-box](/img/sige/Android9-box-1.png) | Android9 Box for Sige1 :    <br/>The Android 9 Box version is an Android operating system specifically designed for TV boxes. It is based on Android 9 Pie, focusing on optimizing user experience and performance for large-screen devices. | [Google Drive link](https://drive.google.com/drive/folders/1ZDfZGnfNyN2fsciE2lMQwuXcvaoRZofP?usp=drive_link)      |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for Sige1 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       | [armbian image](https://www.armbian.com/armsom-sige1)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige1 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment.  | [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### Hardware Resources 

<div class="cards">
    <a href="https://drive.google.com/drive/folders/15uvc2lcOAKP0enXezASUhVFLuzkq3IEX?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige1 SCH</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/15uvc2lcOAKP0enXezASUhVFLuzkq3IEX?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige1 2D</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/15uvc2lcOAKP0enXezASUhVFLuzkq3IEX?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige1 SMD</h2>
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

## Supply Statement

The ArmSoM-Sige1 will be produced at least until August 2034.

## Accessories

The official accessories designed for the ArmSoM-Sige are intended to help you achieve optimal performance from your computer.

<div class="cards">
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
<a href="./sige-diy-case1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/sige-diy-case.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Sige DIY Case 1</h2>
        <p>Combining high-quality construction with a clean, minimalist design, the metal casing adds a premium touch.</p>
    </div>
</div>
</a>
<a href="./sige-active-cooling-kit" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/sige-active-cooling-fan-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Active Cooling Kit</h2>
        <p>The active cooling kit ensures Sige runs smoothly even during the most demanding tasks.</p>
    </div>
</div>
</a>
</div>

[0.8mm 连接器](https://item.taobao.com/item.htm?id=742624228081)

## Purchase Samples
ArmSoM Official Website: [https://www.armsom.org/product-page/Sige1](https://www.armsom.org/product-page/Sige1)

ArmSoM Official AliExpress Store: [https://www.aliexpress.com/store/1102800175](https://www.aliexpress.com/store/1102800175) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=757023687970](https://item.taobao.com/item.htm?id=757023687970)

For OEM & ODM, please contact: sales@armsom.org

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

