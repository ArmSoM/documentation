---
description: The ArmSoM-Sige3 features the Rockchip RK3568B2, a high-performance and low-power quad-core application processor designed for personal mobile internet devices and AloT devices. The Sige3 supports up to 4K@60 HDMI, MIPI DSI, MIPI CSI, USB ports, Gigabit Ethernet, 2.5G network port, PCIe 3.0, 40-PIN GPIO expansion header, and RTC.
keywords: [armsom-sige3, RK3568B2 Development Boards, rk3568 SBC]
sidebar_label: "Sige3"
sidebar_position: 2
slug: /armsom-sige3
image: /img/sige/sige3-bananer.jpg
---

# Product Introduction: Sige3

Let's get to know Sige3 in 5 minutes.

## Overview

The ArmSoM-Sige3 features the Rockchip RK3568B2, a high-performance and low-power quad-core application processor designed for personal mobile internet devices and AloT devices. The Sige3 supports up to 4K@60 HDMI, MIPI DSI, MIPI CSI, USB ports, Gigabit Ethernet, 2.5G network port, PCIe 3.0, 40-PIN GPIO expansion header, and RTC.

![ArmSoM-Sige3](/img/sige/sige3-bananer.jpg)

### Key Specifications

- **SOC**: Rockchip RK3568B2
- **CPU**: Quad-core Cortex-A55 @ 2GHz
- **GPU**: ARM Mali G52
- **VPU/Codec**:
  - **Hardware Decoding**: H.265/VP9 (HEVC) hardware decoding (up to 4Kp60)
  - **Hardware Encoding**: H.264 hardware encoding (up to 1080p60)
- **RAM**: 2/4/8 GB 32-bit LPDDR4x, default 4GB
- **Flash**: 8/16/32/64 GB eMMC, default eMMC 32GB
- **WIFI/BT**:  Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 [syn43752](https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo)
- **Operating Voltage**: Wide input voltage range from 4.5V to 18V (voltage tolerance ±5%)
- **Operating Temperature**: 0℃ ~ 80℃
- **Operating System**:
  - **Rockchip official support**: Debian11, Buildroot
  - **Third-party support**: Armbian
- **PCB**: 8-layer PCB design
- **Weight**: 42.3g
- **Dimensions**: 92mm × 62mm x 14.6mm

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

![ArmSoM-Sige3 front & back](/img/sige/sige3-layout.jpg)
![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)

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
            <th>40-PIN</th>
            <th><li>Compatible with Raspberry Pi 40-PIN, supports various peripherals</li><li>Supports UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></th>
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
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 2.1 1-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported |  - |
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

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
| |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|108|   I2C5_SDA_M0 / PDM_SDI1_M2 / GPIO3_B4_d | <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |   |      |
|107| I2C5_SCL_M0 / PDM_SDI0_M2 / GPIO3_B3_d   |  <div className='green'>5</div>  | <div className='black'>6</div>  |GND ||             |
|91| I2S1_SDI0_M2 / GPIO2_D3  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  <div className='orange-txt'>UART2_TX_M0</div> / GPIO0_D1_u |25|
|   |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  <div className='orange-txt'>UART2_RX_M0</div> / GPIO0_D0_u |     24      |
| 97 |  SPI1_CS0_M1 / GPIO3_A1  | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO4_A5_d / I2S3_SCLK_M0  / UART1_RTSN    |     133     |
|99|I2S3_SCLK_M0 / GPIO3_A3 | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
| 103 | GPIO3_A7 | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO3_B0_d  | 104 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |  GPIO3_B1_d / PWM8_M0 / UART4_RX_M1  |105|
| 83 | UART9_RTSn_M0 / SPI2_MOSI / GPIO2_C3_d | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |   |
| 82 | SPI2_MISO / GPIO2_C2_d  | <div className='green'>21</div>  | <div className='green'>22</div> | GPIO3_B2_d / PWM9_M0 / UART4_TX_M1 |  106 |
| 81 | SPI2_CLK / GPIO2_C1_d  | <div className='green'>23</div>  | <div className='green'>24</div> |  SPI2_CS0 / GPIO2_C4_d  /UART9_CTSn_M0 | 84 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |  GPIO2_C5_d / SPI2_CS1_M0 / UART8_TX_M0  |     85      |
|  110 | I2C3_SDA_M1 / PWM11_M0 / GPIO3_B6_d |  <div className='green'>27</div>  | <div className='green'>28</div> | I2C3_SCL_M1 / PWM10_M0 / GPIO3_B5_d  | 109 |
|111|PWM12_M0 / UART3_TX_M1 / GPIO3_B7  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |           |
|112|   UART3_RX_M1 / PWM13_M0 / GPIO3_C0| <div className='green'>31</div>  | <div className='green'>32</div> | GPIO3_C4_d / PWM14_M0 / UART7_TX_M1  | 116    |
| 117  | PWM15_M0 / UART7_RX_M1 / GPIO3_C5_d | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |      |
| 134  | I2S3_LRCK_M0 / I2S1_LRCK / GPIO4_A6_d   | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO3_C2_d / UART5_TX_M1 |   114 |
| 115 | SPI1_CLK_M1 / UART5_RX_M1 / GPIO3_C3_d| <div className='green'>37</div> | <div className='green'>38</div> |  GPIO3_A6_d / I2S3_SDI_M0    |   102   |
| |  GND | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO3_A5_d / I2S3_SDO_M0   |     101     |

</div>
</details>

<details>
    <summary>
        FAN
    </summary>

0.8mm connector(CON3400)

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

0.8mm connector(CON3200)

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
<a href="/getting-start/cloud-disk" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11-1.png) | debian11 for Sige3 :  <br/>  Debian 11 continues to uphold Debian's tradition by offering a stable and reliable operating system environment. It has undergone rigorous testing and stability assurances, making it suitable for servers, desktops, and embedded devices alike.| [Google Drive link](https://drive.google.com/drive/folders/1UsUqiYN2mzTEx_H2eBlRiNChdmZge0EO?usp=drive_link)  |
|![Android9-box](/img/sige/Android9-box-1.png) | Android9 Box for Sige3 :    <br/>The Android 9 Box version is an Android operating system specifically designed for TV boxes. It is based on Android 9 Pie, focusing on optimizing user experience and performance for large-screen devices. | [Google Drive link](https://drive.google.com/drive/folders/1ZDfZGnfNyN2fsciE2lMQwuXcvaoRZofP?usp=drive_link)      |
|[lede](https://github.com/coolsnowwolf/lede) | lede for Sige3 :    <br/>lede is a highly modular and automated embedded Linux system with powerful network components and scalability.|[Google Drive link](https://drive.google.com/drive/folders/1e8Qgji9e1sh9MMnIzC8v4YtvseNEf5mP)  |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for Sige3 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       | [armbian image](https://github.com/armbian/community/releases)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige3 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment.  | [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### Hardware Resources 

<div class="cards">
    <a href="https://drive.google.com/drive/folders/17cbR2sYVi0YsmPM2CjSWvhM4smqztXgU" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige3 SCH</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/17cbR2sYVi0YsmPM2CjSWvhM4smqztXgU" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige3 2D</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/17cbR2sYVi0YsmPM2CjSWvhM4smqztXgU" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige3 SMD</h2>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/17cbR2sYVi0YsmPM2CjSWvhM4smqztXgU" class="card-link">
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

## Supply Statement

The ArmSoM-Sige3 will be produced at least until September 2034.

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

## Purchase Samples
ArmSoM Official Website: [https://www.armsom.org/product-page/Sige3](https://www.armsom.org/product-page/Sige3)

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