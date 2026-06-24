---
description: ArmSoM-Sige3 采用的Rockchip RK3568B2 是一款高性能低功耗四核应用处理器，专为个人移动互联网设备和 AloT 设备而设计。Sige3 最高支持 4K@60 的 HDMI、MIPI DSI、MIPI CSI、USB 端口、千兆以太网、2.5G网口、PCIe 3.0、40 pin GPIO 扩展座、RTC
keywords: [armsom-sige3, RK3568 Development Boards, rk3568 SBC]
sidebar_label: "Sige3"
sidebar_position: 2
slug: /armsom-sige3
image: /img/sige/sige3-bananer.jpg
---

# Sige3 产品简介

让我们在 5 分钟内了解 Sige3。

## 简介

ArmSoM-Sige3 采用的Rockchip RK3568B2 是一款高性能低功耗四核应用处理器，专为个人移动互联网设备和 AloT 设备而设计。
Sige3 最高支持 4K@60 的 HDMI、MIPI DSI、MIPI CSI、USB 端口、千兆以太网、2.5G网口、PCIe 3.0、40 pin GPIO 扩展座、RTC。 

![ArmSoM-Sige3](/img/sige/sige3-bananer.jpg)

### 关键参数

- **SOC**：瑞芯微 RK3568B2
- **CPU**: 四核Cortex-A55 @ 2GHz
- **GPU**：ARM Mali G52
- **VPU/编解码**：
  - **硬解码**：H.265/VP9 (HEVC) 硬件解码（最高 4Kp60）
  - **硬编码**：H.264 硬件解码（最高 1080p60）
- **RAM**：2/4/8 GB 32bit LPDDR4x，默认4GB
- **Flash**：8/16/32/64 GB eMMC，默认eMMC 32GB
- **WIFI/BT**:  板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 [syn43752](https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo)
- **工作电压**：具有宽范围的输入电压，从4.5V到18V（电压误差±5%）
- **工作温度**：0℃ ~ 80℃
- **操作系统**：
  - **Rockchip官方支持**：Debian11，Buildroot
  - **第三方支持**：Armbian
- **PCB**： 8 层 PCB 板设计
- **重量**：42.3g
- **大小**：92mm × 62mm x 14.6mm

## 使用手册

<a href="./sige-family-started" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>Sige使用手册</h2>
            <p>如何开始使用你的Sige</p>
        </div>
    </div>
</a>

## 硬件信息

### 硬件接口

![ArmSoM-Sige3 front & back](/img/sige/sige3-layout.jpg)
![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)

:::tip
Sige3上有两个长得一样的Type-C接口，其中Type-C(DC IN)才是电源接口。
:::

### 硬件规格

<details>
    <summary>
        Sige3 硬件规格
    </summary>
    <table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能参数</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3568B2</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3568B2 四核Cortex-A55</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali G52</li><li>支持 OpenGL ES3.2/2.0/1.1，Vulkan1.1</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：H.265/VP9 (HEVC) 硬件解码（最高 4Kp60）</li><li>硬编码：支持H.264 硬件解码（最高 1080p60）</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>2/4/8 GB 32bit LPDDR4x，默认4GB </li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>8/16/32/64 GB eMMC，默认eMMC 32GB</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M 接口(PCIe 3.0 1- lanes)，可拓展 SSD：Type 2280/2260/2242/2230，目前默认使用2280</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>1x 2.5G网口</li><li>1x 千兆网口</li><li>板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 和 BT5.3 (<a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a>)</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>1x HDMI OUT2.0b，支持 4K@60fps</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1x HDMI音频输出</li><li>1x HP-OUT 音频输出</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>2x USB2.0，支持高速（480Mbps）、全速（12Mbps）和低速（1.5Mbps）模式</li>
            <li>1x USB Type-C 3.0</li></th>
        </tr>
        <tr>
            <th>40-PIN</th>
            <th><li>和树莓派40pin兼容部分引脚功能，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>1x 5V风扇接口</li><li>1x 电池输入连接器用于低功耗RTC芯片HYM8563TS的供电</li><li>2x LED灯，系统正常时绿色灯开始闪烁，红色灯由用户控制</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>支持USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x Reset键，支持重启</li><li>1x Maskrom键，支持进入maskrom烧录模式</li><li>1x PWRON键，支持休眠唤醒</li></th>
        </tr>
        <tr>
            <th>系统</th>
            <th><li>Rockchip官方支持：Debian11, buildroot</li><li>第三方支持：Armbian</li></th>
        </tr>
        <tr>
            <th>尺寸</th>
            <th><li>92 mm x 62mm</li></th>
        </tr>
        <tr>
            <th>工作温度</th>
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>
</details>

<details>
    <summary>
        Sige7/5/3/1规格比较
    </summary>

|        | Sige7  | Sige5 | Sige3 |Sige1 |
| --------- | ----- | --- |--- | --- | 
| SoC Process | 8nm | 8nm | 22nm | 28nm |  
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3568B2 <br/> Cortex-A55 x4 up to 2.0GHz | Rockchip RK3528 <br/> Cortex-A53 x4 up to 2.0GHz | 
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

### RK3568b2框图

<details>
    <summary>
        RK3568B2 框图
    </summary>
    <img
  src="./img/sige/rk3568b2.png"
  alt="RK3568B2 block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

<details>
    <summary>
        40-PIN 座子
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
0.8mm 连接器(CON3400)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | 地 | 
|3    | PWM | PWM控制 |
</details>

<details>
    <summary>
        HPOUT
    </summary>
0.8mm 连接器(CON3200)

|Pin        | Assignment  | Description|
|:--------: | :---------: | :--------:  | 
|1          | AOR         | 右声道      |
|2          | AOL         | 左声道      |
|3          | GND         | 地          |
</details>

<details>
    <summary>
        VRTC
    </summary>

0.8mm connector(CON2200)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | 正极  |
|2          | -         | 负极  |
</details>

## 开发资料

### SDK源码

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
                <h2>Armbian源码</h2>
                <p>适用于 ARM 开发板的 Linux</p>
            </div>
        </div>
    </a>

<a href="https://github.com/ArmSoM/rockchip-kernel" class="card-link">
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

<a href="https://github.com/ArmSoM/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>Sige3 uboot</h2>
            <p>ArmSoM/u-boot</p>
        </div>
    </div>
</a>
</div>

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

以下系统已由ArmSoM官方测试验证：

网盘地址：

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11-1.png) | debian11 for Sige3 :  <br/> Debian 11（代号为"Bullseye"）是Debian项目的最新稳定版本，它于2021年8月14日发布。Debian是一个以自由软件为基础的操作系统，以稳定性、安全性和开放性著称。|[百度网盘](https://pan.baidu.com/share/init?surl=26rLsrCHPJeRtyX_Tkoe6w&pwd=arms)  |
|![Android9-box](/img/sige/Android9-box-1.png) | Android9 Box for Sige3 :    <br/>Android 9 Box版本是专为电视盒子（TV Box）设计的Android操作系统版本。它基于Android 9 Pie版本，专注于优化在大屏幕设备上的用户体验和性能表现。| [百度网盘](https://pan.baidu.com/share/init?surl=26rLsrCHPJeRtyX_Tkoe6w&pwd=arms)     |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for Sige3 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       | [armbian固件下载](https://github.com/armbian/community/releases)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige3 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment.  | [ubuntu-rockchip固件下载](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |
| [lede](https://github.com/coolsnowwolf/lede) | lede for Sige3 :    <br/>lede是一个高度模块化、高度自动化的嵌入式Linux系统，拥有强大的网络组件和扩展性。| [coolsnowwolf](https://pan.baidu.com/s/18ow9WzC6impvhAqBUJfUvg?pwd=ka8u)  |

### 硬件资料

获取 Sige3 原理图、DXF等硬件资料

<div class="cards">
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige3 SCH</h2>
            </div>
        </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige3 2D</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige3 位号图</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
<a href="https://www.printables.com/model/1234582-armsom-sige7-case" class="card-link">
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

## 产品证书

### CE / FCC / RoHS

## 供货声明

ArmSoM-Sige3 将至少生产到 2034 年 9 月。

## 配件

我们为 ArmSoM-Sige 设计的官方配件旨在帮助您从计算机获得最佳性能。

<div class="cards">
<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Camera-module1</h2>
        <p>camera-module1使用OV13850，是低功耗相机模块</p>
    </div>
</div>
</a>
<a href="./armsom-display-10-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-display-10hd.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Display-10-hd</h2>
        <p>10.1 英寸触摸屏显示器，可用于娱乐系统和信息仪表板等交互式项目。</p>
    </div>
</div>
</a>
<a href="./sige-diy-case1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/sige-diy-case.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Sige Diy Case 1</h2>
        <p>将高品质结构与简洁、简约的设计相结合，金属外壳使其更高端。</p>
    </div>
</div>
</a>
<a href="./sige-active-cooling-kit" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/sige-active-cooling-fan-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Sige 主动散热套件</h2>
        <p>主动散热套件可确保Sige在最繁忙的工作中平稳运行。</p>
    </div>
</div>
</a>
</div>

## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/Sige3](https://www.armsom.org/product-page/Sige3)
 
ArmSoM 速卖通官方店: [https://www.aliexpress.com/store/1102800175](https://www.aliexpress.com/store/1102800175) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=757023687970](https://item.taobao.com/item.htm?id=757023687970)

OEM&ODM,  请联系: sales@armsom.org

## 注意事项

:::caution [静电保护]
1. 在接触设备之前，请务必佩戴静电手环或采取静电释放措施，以避免静电对开发板造成损害。
2. 进行组装时，应在静电消除环境中进行，避免在干燥和低湿度的条件下操作。
3. 不使用时，请将设备放置在静电袋内，并存储于温度适宜、低湿度的环境中，以防止静电产生。
4. 在处理设备时，请避免摩擦或碰撞，以防产生静电并造成损坏。
5. 握持设备时，尽量避免直接接触主板上的芯片，以免静电损坏芯片。
6. 使用设备时，请勿在运行过程中插拔电线或其他设备，以避免电流冲击导致的损害。
7. 在插拔扩展GPIO/MIPI接口时，请先关闭电源并断开电源线，以避免电流对设备造成损害。
:::

:::danger [注意散热]

在未采取有效散热措施的情况下，主芯片的表面温度可能超过 60 度。在处理设备时，请避免直接接触 SoC 及其周围的电源电感，以免造成烫伤。使用设备时，请确保环境通风良好，以防止局部热量聚集导致过热。同时，请勿将单板机放置在阳光直射的区域。建议根据具体使用情况，选择官方 [散热器风扇](./sige-active-cooling-kit)或[散热外壳](./sige-diy-case1)，或者第三方散热套件，以确保设备的良好散热性能。

:::