---
description: ArmSoM-Sige3 采用的Rockchip RK3568B2 是一款高性能低功耗四核应用处理器，专为个人移动互联网设备和 AloT 设备而设计。Sige3 最高支持 4K@60 的 HDMI、MIPI DSI、MIPI CSI、USB 端口、千兆以太网、2.5G网口、PCIe 3.0、40 pin GPIO 扩展座、RTC
keywords: [armsom-sige3, RK3568 Development Boards, rk3568 SBC]
sidebar_label: "Sige3"
sidebar_position: 2
slug: /armsom-sige3
image: /img/sige/sige3-bananer.jpg
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Sige3 产品简介

让我们在 5 分钟内了解 Sige3。

<nav className="armsom-doc-shortcuts" aria-label="章节快捷导航"><a href="#doc-section-1">简介</a><a href="#doc-section-2">使用手册</a><a href="#doc-section-3">硬件信息</a><a href="#doc-section-4">开发资料</a><a href="#doc-section-5">产品证书</a><a href="#doc-section-6">供货声明</a></nav>

<span id="doc-section-1" className="armsom-section-anchor" />

## 简介

ArmSoM-Sige3 采用的Rockchip RK3568B2 是一款高性能低功耗四核应用处理器，专为个人移动互联网设备和 AloT 设备而设计。
Sige3 最高支持 4K@60 的 HDMI、MIPI DSI、MIPI CSI、USB 端口、千兆以太网、2.5G网口、PCIe 3.0、40 pin GPIO 扩展座、RTC。 

![ArmSoM-Sige3](/img/sige/sige3-bananer.jpg)

<div className="armsom-image-caption">ArmSoM-Sige3</div>


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

<span id="doc-section-2" className="armsom-section-anchor" />

## 使用手册

<a href="#sige-manual" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>Sige3 使用手册</h2>
            <p>如何开始使用你的Sige</p>
        </div>
    </div>
</a>





<span id="doc-section-3" className="armsom-section-anchor" />

## 硬件信息

### 硬件接口

![ArmSoM-Sige3 front & back](/img/sige/sige3-layout.jpg)

<div className="armsom-image-caption">ArmSoM-Sige3 front &amp; back</div>

![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)

<div className="armsom-image-caption">ArmSoM-sige7-Metal-shell</div>


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
  src="/img/sige/rk3568b2.png"
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

<span id="doc-section-4" className="armsom-section-anchor" />

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

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

| 标识 | 系统镜像 | 下载入口 |
|:--------: | :---------: | :--------:  | 
| ![Debian 11](/img/sige/debian11-1.png) | **适用于 Sige3 的 Debian 11：** <br/>Debian 11（Bullseye）系统镜像。请在网盘中选择对应产品文件夹，镜像版本及桌面类型以实际文件为准。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) |
|![Android9-box](/img/sige/Android9-box-1.png) | **Android9 Box for Sige3 :** <br/>Android 9 Box版本是专为电视盒子（TV Box）设计的Android操作系统版本。它基于Android 9 Pie版本，专注于优化在大屏幕设备上的用户体验和性能表现。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)     |

### 第三方镜像

| 标识 | 介绍 | 固件下载 |
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | **适用于 Sige3 的 Armbian：** <br/>  Armbian 是一个面向单板计算机的 Linux 系统构建框架，可根据不同的用户空间配置生成包含可用内核的系统镜像，并为部分受支持的开发板提供基于 Debian 或 Ubuntu 的预构建镜像。 | [Armbian 固件下载](https://armbian.com/boards/armsom-sige3)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | **适用于 Sige3 的 ubuntu-rockchip：** <br/> 该项目旨在为 Rockchip RK3588 设备提供原生的 Ubuntu 使用体验。可选择 Ubuntu 服务器或桌面镜像，使用熟悉的 Ubuntu 环境。 | [Ubuntu-Rockchip 固件下载](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |
| [lede](https://github.com/coolsnowwolf/lede) | **适用于 Sige3 的 lede：** <br/>lede是一个高度模块化、高度自动化的嵌入式Linux系统，拥有强大的网络组件和扩展性。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)  |

### 硬件资料

获取 Sige3 原理图、DXF等硬件资料

<div class="cards">
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige3 SCH</h2>
            </div>
        </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige3 2D</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige3 位号图</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
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

<span id="doc-section-5" className="armsom-section-anchor" />

## 产品证书

### CE / FCC / RoHS

<span id="doc-section-6" className="armsom-section-anchor" />

## 供货声明

ArmSoM-Sige3 将至少生产到 2034 年 9 月。

## 配件

我们为 ArmSoM-Sige 设计的官方配件旨在帮助您从计算机获得最佳性能。

<div class="cards">
<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="/img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
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
        <img src="/img/accessories/armsom-display-10hd.png" alt="Card Image"/>
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
        <img src="/img/accessories/sige-diy-case.png" alt="Card Image"/>
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
        <img src="/img/accessories/sige-active-cooling-fan-real.png" alt="Card Image"/>
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

<!-- SIGE_MANUAL_START -->
<span id="sige-manual" />

:::note
以下为 Sige 系列完整使用手册。各型号接口配置不同，请结合本页硬件规格选择对应章节；原手册中的型号标注和示例保持不变。
:::

## Sige3 使用手册 {#sige-manual-sige-使用手册}

Sige使用手册，帮助用户了解Sige产品的基本使用和需要的准备工作，开始使用你的ArmSoM-Sige🚀

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

<nav className="armsom-doc-shortcuts" aria-label="章节快捷导航"><a href="#sige-manual-doc-section-1">入门准备</a><a href="#sige-manual-doc-section-2">烧录方式选择</a><a href="#sige-manual-doc-section-3">接口使用</a><a href="#sige-manual-doc-section-4">CPU/GPU/NPU/DDR</a></nav>

<span id="sige-manual-doc-section-1" className="armsom-section-anchor" />

### 入门准备 {#sige-manual-入门准备}

在开始使用 ArmSoM-Sige 产品之前，请准备好以下物品

#### 工具准备 {#sige-manual-工具准备}
* 电源
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在Sige系列上写入镜像，您需要Type-C数据线连接 Sige系列和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：

您可以将 Sige 设置为带有桌面的交互式计算机，也可以将其设置为仅可通过网络访问的无头计算机。要将 Sige 设置为Headless计算机，您在初次安装操作系统时配置主机名、用户帐户、网络连接和 SSH 。如果您想直接使用 Sige，则需要以下附加配件：

**可选选项**
* 键盘 & 鼠标
* HDMI显示器和HDMI线
* Ethernet 线（网线）
* 摄像头模块
  * 推荐使用 [camera-module1](./armsom-camera-module1) 模组。
* LCD显示屏
  * 推荐使用 [Display 10 HD](./armsom-display-10-hd)。
* 音频线, 0.8mm立式插座。
* RTC 电池, 0.8mm立式插座。
* 风扇，0.8mm立式插座。

#### 电源 {#sige-manual-电源}

下表显示了为ArmSoM-Sige系列型号供电所需的电源规格。您可以使用任何提供正确电源模式的高质量电源。

| 型号       | 推荐电源（电压/电流）  | 供电模式
| --------- | ----- | --- |
| Sige7 | 5V/3A, 9V/2A, 12V/2A, 15V/2A |  USB-PD |
| Sige5 | 5V/3A, 9V/2A, 12V/2A, 15V/2A |  USB-PD |
| Sige3    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige1 | 5V/2.5A，12V/2A | Non-PD |

将电源插入标有“DCIN”的端口, 请确保使用正确端口！

<span id="sige-manual-doc-section-2" className="armsom-section-anchor" />

### 烧录方式选择 {#sige-manual-烧录方式选择}
<div class="cards">
    <a href="./getting-start/flash-img" class="card-link">
        <div class="card">
            <div class="icon">
                <i>🎇</i>
            </div>
            <div class="content">
                <h2>系统镜像烧录</h2>
            </div>
        </div>
    </a>
</div>

<span id="sige-manual-doc-section-3" className="armsom-section-anchor" />

### 接口使用 {#sige-manual-接口使用}

如果您是首次使用 ArmSoM-Sige 产品，请先熟悉下各产品硬件接口，以便于您更好的理解后续的内容。

| 硬件接口  | [Sige7](./armsom-sige7#硬件接口) | [Sige5](./armsom-sige5#硬件接口) |[Sige3](./armsom-sige3#硬件接口) | [Sige1](./armsom-sige1#硬件接口) |
| --------------- | ----- | ------ | ------ |  ------ | 

#### 调试串口 {#sige-manual-调试串口}

如下所示连接 USB 转 TTL 串口线：

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)

<div className="armsom-image-caption">armsom-sige7-debug</div>


| Sige7/5/3/1       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |


#### 以太网口 {#sige-manual-以太网口}

1. 首先将网线的一端插入 ArmSoM-SigeX 的以太网接口，网线的另一端接入路由器，并确保
网络是畅通的
2. 系统启动后会通过 DHCP 自动给以太网卡分配 IP 地址，不需要其他任何配置
3. 在ArmSoM-SigeX 的 Linux 系统中查看 IP 地址的命令如下所示

```bash
armsom@armsom-sige7:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: enP4p65s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether c6:9c:b0:7e:2b:1f brd ff:ff:ff:ff:ff:ff permaddr aa:a6:84:1b:0d:21
    inet 192.168.10.54/24 brd 192.168.10.255 scope global dynamic noprefixroute enP4p65s0
       valid_lft 86221sec preferred_lft 86221sec
    inet6 fe80::5bb0:d96f:926d:b334/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
3: enP2p33s0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether be:ed:22:01:47:d9 brd ff:ff:ff:ff:ff:ff permaddr a2:fb:fa:79:de:fb
4: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state DORMANT group default qlen 1000
    link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
```
ArmSoM-SigeX 启动后查看 IP 地址有三种方法：

- 接 HDMI 显示器，然后登录系统使用终端输入 ip a 命令查看 IP 地址
- 接[调试串口](#sige-manual-调试串口)终端输入 ip a 命令来查看 IP 地址
- 如果没有调试串口，也没有 HDMI 显示器，还可以通过路由器的管理界面来查看ArmSoM-SigeX 网口的 IP 地址。不过这种方法经常有人会无法正常看到ArmSoM-SigeX 的 IP 地址。如果看不到，调试方法如下所示：
    - 首先检查 Linux 系统是否已经正常启动，如果ArmSoM-SigeX的绿灯常亮，一般是正常启动了，如果只亮红灯，说明系统都没正常启动。
    - 检查网线有没有插紧，或者换根网线试下。
    - 换个路由器试下，路由器的问题有遇到过很多，比如路由器无法正常分配IP 地址，或者已正常分配 IP 地址但在路由器中看不到。
    - 如果没有路由器可换就只能连接 HDMI 显示器或者使用调试串口来查看 IP地址。

:::tip
另外需要注意的是ArmSoM-SigeX  DHCP 自动分配 IP 地址是不需要任何设置的。
:::


4. 使用工具 ping 判断是否连通网络。

测试网络连通性的命令如下，ping 命令可以通过 Ctrl+C 快捷键来中断运行
```bash
armsom@armsom-sige7:~$ ping www.baidu.com
PING www.a.shifen.com (183.2.172.185): 56 data bytes
64 bytes from 183.2.172.185: icmp_seq=0 ttl=53 time=8.370 ms
64 bytes from 183.2.172.185: icmp_seq=1 ttl=53 time=8.917 ms
64 bytes from 183.2.172.185: icmp_seq=2 ttl=53 time=8.511 ms
64 bytes from 183.2.172.185: icmp_seq=3 ttl=53 time=8.673 ms
^C
--- www.a.shifen.com ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max/stddev = 8.370/8.618/8.917/0.203 ms
```

#### WIFI {#sige-manual-wifi}

ArmSoM-Sige 系列产品都是onboard WIFI模块，不需要外接网口设备，使用[标准4代天线](https://www.armsom.org/product-page/sige7-metal-shell)

**服务器版镜像通过命令连接 WIFI**

1. 先登录 linux 系统，有下面三种方式
 - 如果ArmSoM-SigeX 连接了网线，可以通过 ssh 远程登录 linux 系统
 - 如果ArmSoM-SigeX 连接好了调试串口，可以使用串口终端登录 linux 系统
 - 如果连接了ArmSoM-SigeX 到HDMI显示器，可以通过HDMI显示的终端登录到linux
系统

2. 使用 nmcli dev wifi 命令扫描周围的 WIFI 热点

```
# 1. Open the WIFI
armsom@armsom-sige:/# nmcli r wifi on
# 2. Scan WIFI
armsom@armsom-sige:/# nmcli dev wifi
# 3. Connect to WIFI network
armsom@armsom-sige:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

![wifi-nmcli-scan](/img/general-tutorial/wifi-nmcli-scan.png)

<div className="armsom-image-caption">wifi-nmcli-scan</div>


3. 使用 nmcli 命令连接扫描到的 WIFI

 - wifi_name 换成需要连接的 WIFI 热点的名字
 - wifi_passwd 换成需要连接的 WIFI 热点的密码

```
armsom@armsom-sige7:~$ nmcli dev wifi connect "wifi_name" password "wifi_passwd"
Device 'wlan0' successfully activated with "wlan0b6d10bba-e1d5-4b6d-a17f-7d5ab44bbb6f"。
```

4. 通过 ip addr show wlan0 命令可以查看 wifi 的 IP 地址

```
armsom@armsom-sige7:~$ ip addr show wlan0
4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
    inet 192.168.10.9/24 brd 192.168.10.255 scope global dynamic noprefixroute wlan0
       valid_lft 86321sec preferred_lft 86321sec
    inet6 fe80::850d:3119:e0:afa3/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

5. 使用 ping 命令可以测试 wifi 网络的连通性，ping 命令可以通过 Ctrl+C 快捷键来中断运行

```
armsom@armsom-sige7:~$ ping www.baidu.com
PING www.a.shifen.com (183.2.172.185): 56 data bytes
64 bytes from 183.2.172.185: icmp_seq=0 ttl=53 time=8.370 ms
64 bytes from 183.2.172.185: icmp_seq=1 ttl=53 time=8.917 ms
64 bytes from 183.2.172.185: icmp_seq=2 ttl=53 time=8.511 ms
64 bytes from 183.2.172.185: icmp_seq=3 ttl=53 time=8.673 ms
^C
--- www.a.shifen.com ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max/stddev = 8.370/8.618/8.917/0.203 ms
```

**服务器版镜像通过图形化方式连接 WIFI**

1. 登录 linux 系统，有下面三种方式
- 如果开发板连接了网线，可以通过 ssh 远程登录 linux 系统
- 如果开发板连接好了调试串口，可以使用串口终端登录 linux 系统（串口软件请使用 MobaXterm，使用 minicom 无法显示图形界面）
- 如果连接了开发板到HDMI显示器，可以通过HDMI显示的终端登录到linux系统

2. 在命令行中输入 nmtui 命令打开 wifi 连接的界面

![wifi-nmcli](/img/general-tutorial/wifi-nmcli.png)

<div className="armsom-image-caption">wifi-nmcli</div>


```
armsom@armsom-sige7:~$ nmtui
```

3. 选择 Activate a connect 后回车

![wifi-nmcli-connect](/img/general-tutorial/wifi-nmcli-connect.png)

<div className="armsom-image-caption">wifi-nmcli-connect</div>


4. 选择想要连接的 WIFI 热点，输入密码。WIFI 连接成功后会在已连接的 WIFI 名称前显示一个“*”

![wifi-nmcli-success](/img/general-tutorial/wifi-nmcli-success.png)

<div className="armsom-image-caption">wifi-nmcli-success</div>


5. 通过 ip addr show wlan0 命令可以查看 wifi 的 IP 地址

```
armsom@armsom-sige7:~$ ip addr show wlan0
4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
    inet 192.168.10.9/24 brd 192.168.10.255 scope global dynamic noprefixroute wlan0
       valid_lft 86316sec preferred_lft 86316sec
    inet6 fe80::a422:3494:3147:92d/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

6. 使用 ping 命令可以测试 wifi 网络的连通性，ping 命令可以通过 Ctrl+C 快捷键来中断运行

```bash
armsom@armsom-sige7:~$ ping www.baidu.com
PING www.a.shifen.com (183.2.172.185): 56 data bytes
64 bytes from 183.2.172.185: icmp_seq=0 ttl=53 time=8.370 ms
64 bytes from 183.2.172.185: icmp_seq=1 ttl=53 time=8.917 ms
64 bytes from 183.2.172.185: icmp_seq=2 ttl=53 time=8.511 ms
64 bytes from 183.2.172.185: icmp_seq=3 ttl=53 time=8.673 ms
^C
--- www.a.shifen.com ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max/stddev = 8.370/8.618/8.917/0.203 ms
```

**桌面版镜像的测试方法**

1. 点击桌面上的网络配置图标（测试 WIFI 时请不要连接网线）
2. 连接好 WIFI 后，可以打开浏览器查看是否能上网

![wifi-desktop-set](/img/general-tutorial/wifi-desktop-set.png)

<div className="armsom-image-caption">wifi-desktop-set</div>


**网络设置**
<div class="cards">
<a href="./getting-start/startup/#3-登录方式" class="card-link">
    <div class="card">
        <div class="icon">
            <i>🎾</i>
        </div>
        <div class="content">
            <h2>登录方式</h2>
            <p>串口访问，ssh访问</p>
        </div>
    </div>
</a>
<a href="./getting-start/startup-network#56-静态网络配置" class="card-link">
    <div class="card">
        <div class="icon">
            <i>🌐</i>
        </div>
        <div class="content">
            <h2>设置静态IP地址</h2>
        </div>
    </div>
</a>
<a href="./getting-start/startup-network#57-创建wifi热点" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>WIFI 热点</h2>
        </div>
    </div>
</a>
</div>


#### BT {#sige-manual-bt}

```
# 1. 激活蓝牙
armsom@armsom-sige:/# service bluetooth start
# 2. 进入bluetoothctl
armsom@armsom-sige:/# bluetoothctl
# 3. 输入以下命令即可连接
armsom@armsom-sige:/# power on
armsom@armsom-sige:/# agent on
armsom@armsom-sige:/# default-agent
armsom@armsom-sige:/# scan on
armsom@armsom-sige:/# pair yourDeviceMAC
```

#### HDMI {#sige-manual-hdmi}

| 型号 |Sige7 | Sige5  | Sige3 | Sige1 |
| ----- |  ----- | ------ |----- | ----- |
| 分辨率  | 8Kp60 | 4Kp120 |4Kp60|4Kp60|

1. 使用 HDMI 线连接 ArmSoM-Sige 和 HDMI 显示器
2. 启动 linux 系统后如果 HDMI 显示器有图像输出说明 HDMI 接口使用正常

:::tip
注意，很多笔记本电脑虽然带有 HDMI 接口，但是笔记本的 HDMI 接口一般只有输出功能，并没有 HDMI in 的功能，也就是说并不能将其他设备的 HDMI 输出显示到笔记本的屏幕上。
当想把开发板的 HDMI 接到笔记本电脑 HDMI 接口时，请先确认清楚您的笔记本是支持 HDMI in 的功能。
当 HDMI 没有显示的时候，请先检查使用的系统是否是带桌面的版本，如果是服务器版本只能看到终端
:::

##### HDMI 转 VGA 显示测试 {#sige-manual-hdmi-转-vga-显示测试}
1. 需要准备下面的配件
- HDMI 转 VGA 转换器
- 一根 VGA 线，支持 VGA 接口的显示器

2. HDMI 转 VGA 显示测试如下所示

![sige-hdmi-vga](/img/general-tutorial/sige-hdmi-vga.jpg)

<div className="armsom-image-caption">sige-hdmi-vga</div>


:::tip
使用 HDMI 转 VGA 显示时，ArmSoM-Sige产品和Linux系统是不需要做任何设置的，只需要开发板 HDMI 接口能正常显示就可以了。所以如果测试有问题，请检查 HDMI 转 VGA 转换器、VGA 线以及显示器是否有问题。
:::

#### USB {#sige-manual-usb}

|  型号  |Sige7 | Sige5  | Sige3 | Sige1 |
| ----- |  ----- | ------ |----- | ----- | 
| USB   | 1* Type-C 3.0, 1x USB3.0, 1x USB2.0 | 1* Type-C 3.0, 1x USB3.0, 1x USB2.0 | 1* Type-C 3.0, 1x USB3.0, 1x USB2.0 |2x USB2.0|

:::info
USB 接口是可以接 USB hub 来扩展 USB 接口的数量的。
:::

##### 连接 USB 鼠标或键盘测试 {#sige-manual-连接-usb-鼠标或键盘测试}
1. 将 USB 接口的键盘插入ArmSoM-Sige产品的 USB 接口中
2. 连接ArmSoM-Sige产品到 HDMI 显示器
3. 如果鼠标或键盘能正常操作系统说明 USB 接口使用正常（鼠标只有在桌面版的系统中才能使用）

##### 连接 USB 存储设备测试 {#sige-manual-连接-usb-存储设备测试}
1. 首先将 U 盘或者 USB 移动硬盘插入 ArmSoM-Sige产品的 USB 接口中
2. 执行下面的命令如果能看到 sdX 的输出说明 U 盘识别成功
```
armsom@armsom-sige7:/# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0  122880000 sda
```
3. 使用 mount 命令可以将 U 盘挂载到/mnt 中，然后就能查看 U 盘中的文件了

```
armsom@armsom-sige7:/# sudo mount /dev/sda1 /test/
```

4. 挂载完后通过 df -h 命令就能查看 U 盘的容量使用情况和挂载点

```
armsom@armsom-sige7:/test# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /test
```

##### USB 摄像头 {#sige-manual-usb-摄像头}

1. 准备一个支持 UVC 协议的 USB 摄像头，然后将USB 摄像头插入到 ArmSoM-Sige产品的 USB 接口中

2. 通过 v4l2-ctl 命令可以看到 USB 摄像头的设备节点信息为/dev/video0

```
armsom@armsom-sige7:/# v4l2-ctl --list-devices
罗技高清网络摄像机 C93 (usb-xhci-hcd.5.auto-1):
        /dev/video40
        /dev/video41
        /dev/media4
```

3. 在桌面系统中可以使用 Cheese/V4L2 test bench 直接打开 USB 摄像头

![sige-usb-cam](/img/general-tutorial/sige-usb-cam.jpg)

<div className="armsom-image-caption">sige-usb-cam</div>



同时，您也可以使用终端命令打开相机预览:
```bash
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;
```

命令拍照:
```bash
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=/home/armsom/test.jpg;
```

命令拍摄视频:
```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/armsom/test.mp4
```

![armsom-sige7-gst](/img/sige/armsom-sige7-gst.png)

<div className="armsom-image-caption">armsom-sige7-gst</div>


#### M.2 Key M {#sige-manual-m2-key-m}

ArmSoM-Sige7/5/3 提供 M.2 Key M 连接器：

- 产品的背面有一个带有M.2 Key M 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

```
armsom@armsom-sige:/# mkdir temp
armsom@armsom-sige:/# mount /dev/nvme0n1 temp
```

#### 音频 {#sige-manual-音频}

查看系统中的声卡。

```bash
armsom@armsom-sige7:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipdp0 [rockchip,dp0], device 0: rockchip,dp0 spdif-hifi-0 [rockchip,dp0 spdif-hifi-0]
 Subdevices: 1/1
 Subdevice #0: subdevice #0
card 1: rockchipes8316 [rockchip-es8316], device 0: fe470000.i2s-ES8316 HiFi es8316.7-0011-0 [fe470000.i2s-ES8316 HiFi es8316.7-0011-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchiphdmi0 [rockchip-hdmi0], device 0: rockchip-hdmi0 i2s-hifi-0 [rockchip-hdmi0 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

播放音乐

```bash
armsom@armsom-sige7:/# aplay -D plughw:1,0 ./usr/share/sounds/alsa/Front_Right.wav
```

#### FAN {#sige-manual-fan}

Sige 产品 配备一个 5V 的风扇，使用 0.8mm 的连接器

目前风扇默认五个状态

| 温度       | 状态  | PWM转速 |
| --------------- | ----- | ------ |
| 小于50° | 0 | 0 |
| 50°-55°  | 1 | 50 |
| 55°-60° | 2 | 100 |
| 60°-65° | 3 | 150 |
| 65°-70° | 4 | 200 |
| 70°以上 | 5 | 250 |

```
// 查看当前转速 
armsom@armsom-sige:/# cat /sys/class/hwmon/hwmon9/pwm1
```

#### 40 PIN {#sige-manual-40-pin}

Sige 提供了一个40pin针脚的GPIO座子，兼容于市面上大部分传感器的应用。

##### wiring-armbian 的方法 {#sige-manual-wiring-armbian-的方法}

下载 wiringOP 的代码 [wiring-armbian](https://github.com/ArmSoM/wiring-armbian)

- 测试 gpio readall 命令的输出如下

```
 +------+-----+----------+--------+---+  ArmSoM-Sige7(BPI-M7) +---+--------+----------+-----+------+
 | GPIO | wPi |   Name   |  Mode  | V | Physical | V |  Mode  | Name     | wPi | GPIO |
 +------+-----+----------+--------+---+----++----+---+--------+----------+-----+------+
 |      |     |     3.3V |        |   |  1 || 2  |   |        | 5V       |     |      |
 |  139 |   0 |    SDA.7 |     IN | 1 |  3 || 4  |   |        | 5V       |     |      |
 |  138 |   1 |    SCL.7 |     IN | 1 |  5 || 6  |   |        | GND      |     |      |
 |  115 |   2 |    PWM15 |    OUT | 0 |  7 || 8  | 1 | ALT10  | GPIO0_B5 | 3   | 13   |
 |      |     |      GND |        |   |  9 || 10 | 1 | ALT10  | GPIO0_B6 | 4   | 14   |
 |  113 |   5 | GPIO3_C1 |     IN | 0 | 11 || 12 | 1 | IN     | GPIO3_B5 | 6   | 109  |
 |  111 |   7 | GPIO3_B7 |     IN | 0 | 13 || 14 |   |        | GND      |     |      |
 |  112 |   8 | GPIO3_C0 |     IN | 0 | 15 || 16 | 0 | IN     | GPIO3_A4 | 9   | 100  |
 |      |     |     3.3V |        |   | 17 || 18 | 1 | IN     | GPIO4_C4 | 10  | 148  |
 |   42 |  11 | SPI0_TXD |     IN | 1 | 19 || 20 |   |        | GND      |     |      |
 |   41 |  12 | SPI0_RXD |     IN | 1 | 21 || 22 |   |        | SARADC_IN4 |     |      |
 |   43 |  14 | SPI0_CLK |     IN | 1 | 23 || 24 | 1 | IN     | SPI0_CS0 | 15  | 44   |
 |      |     |      GND |        |   | 25 || 26 | 1 | IN     | SPI0_CS1 | 16  | 45   |
 |  150 |  17 | GPIO4_C6 |     IN | 1 | 27 || 28 | 0 | OUT    | GPIO4_C5 | 18  | 149  |
 |   63 |  19 | GPIO1_D7 |     IN | 1 | 29 || 30 |   |        | GND      |     |      |
 |   47 |  20 | GPIO1_B7 |     IN | 1 | 31 || 32 | 0 | IN     | GPIO3_C2 | 21  | 114  |
 |  103 |  22 | GPIO3_A7 |     IN | 1 | 33 || 34 |   |        | GND      |     |      |
 |  110 |  23 | GPIO3_B6 |     IN | 0 | 35 || 36 | 0 | IN     | GPIO3_B1 | 24  | 105  |
 |    0 |  25 | GPIO0_A0 |     IN | 1 | 37 || 38 | 0 | IN     | GPIO3_B2 | 26  | 106  |
 |      |     |      GND |        |   | 39 || 40 | 1 | IN     | GPIO3_B3 | 27  | 107  |
 +------+-----+----------+--------+---+----++----+---+--------+----------+-----+------+
 | GPIO | wPi |   Name   |  Mode  | V | Physical | V |  Mode  | Name     | wPi | GPIO |
 +------+-----+----------+--------+---+  ArmSoM-Sige7(BPI-M7) +---+--------+----------+-----+------+
```

- 设置 GPIO 口为输出模式，其中第三个参数需要输入引脚对应的 wPi 的序号

```
root@armsom-sige7:~/wiring-armbian# gpio mode 2 out
```

- 设置 GPIO 口输出低电平，设置完后可以使用万用表测量引脚的电压的数值，如果为 0v，说明设置低电平成功

```
root@armsom-sige7:~/wiring-armbian# gpio write 2 0
```

- 设置 GPIO 口输出高电平，设置完后可以使用万用表测量引脚的电压的数值，如果为 3.3v，说明设置高电平成功

```
root@armsom-sige7:~/wiring-armbian# gpio write 2 1
```
- 其他引脚的设置方法类似，只需修改 wPi 的序号为引脚对应的序号即可

#### RGB LED {#sige-manual-rgb-led}

Sige 具有两个用户灯 LED 绿灯和红灯。

- 用户绿灯
  默认情况下，其常亮表示系统运行正常。

- 用户红灯
  默认情况下不亮，可由用户自行操控。

用户可通过命令控制

```
armsom@armsom-sige:/# sudo su
armsom@armsom-sige:/# echo timer > /sys/class/leds/red/trigger
armsom@armsom-sige:/# echo activity > /sys/class/leds/red/trigger
```

#### RTC {#sige-manual-rtc}

- Sige配备了一颗RTC IC **LK8563S**。
- 首先，使用2pin的排针接口，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc LK8563S 设备已创建

```bash
armsom@armsom-sige:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
armsom@armsom-sige:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
armsom@armsom-sige:/# date
2023年 11月 03日 星期五 10:33:12 UTC
armsom@armsom-sige:/# hwclock -w
armsom@armsom-sige:/# hwclock -r
armsom@armsom-sige:/# poweroff
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并启动Sige7，检查RTC是否与系统时钟同步

```bash
armsom@armsom-sige:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
armsom@armsom-sige:/# date
2023年 11月 03日 星期五 10:36:01 UTC
```

#### MIPI-CSI {#sige-manual-mipi-csi}

##### 使用 ArmSoM camera-module1 {#sige-manual-使用-armsom-camera-module1}

摄像头采用[camera-module1](./armsom-camera-module1)模组，摄像头模组连接并上电后可以查看启动日志。

```bash
root@armsom-sige7:/# dmesg | grep ov13850
[    2.302905] ov13850 5-0010: driver version: 00.01.05
[    2.302944] ov13850 5-0010: Failed to get power-gpios, maybe no use
[    2.303067] ov13850 5-0010: supply avdd not found, using dummy regulator
[    2.303153] ov13850 5-0010: supply dovdd not found, using dummy regulator
[    2.303186] ov13850 5-0010: supply dvdd not found, using dummy regulator
[    2.303213] ov13850 5-0010: could not get default pinstate
[    2.303220] ov13850 5-0010: could not get sleep pinstate
[    2.308532] ov13850 5-0010: Detected OV00d850 sensor, REVISION 0xb2
[    2.332058] ov13850 5-0010: Consider updating driver ov13850 to match on endpoints
[    2.332084] rockchip-csi2-dphy csi2-dphy0: dphy0 matches m00_b_ov13850 5-0010:bus type 5
```

使用v4l2-ctl进行抓图
```
// MIPI-CSI1
root@armsom-sige7:/# v4l2-ctl -d /dev/video31 --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=/nv12.bin --stream-count=1 --stream-poll 
// MIPI-CSI0
root@armsom-sige7:/# v4l2-ctl -d /dev/video22 --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=/nv12.bin --stream-count=1 --stream-poll
```

使用gst-launch-1.0可直接录像
```
// MIPI-CSI1
root@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
// MIPI-CSI0
root@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
```
![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg)

<div className="armsom-image-caption">armsom-w3-imx415-camera</div>


[ArmSoM camera-module1](./armsom-camera-module1)

#### MIPI DSI {#sige-manual-mipi-dsi}

ArmSoM-Sige7/5/3 分辨率最高分辨率可达 4K@60Hz

1. 按照下图将连接好排线

![sige7-display-10-hd](/img/general-tutorial/display-10-hd.png)

<div className="armsom-image-caption">sige7-display-10-hd</div>


2. 打开 10.1 寸 MIPI LCD 屏幕配置的方法

- linux 镜像默认是没有打开 mipi lcd 屏幕的配置的，如果需要使用 mipi lcd 屏幕，需要手动打开才行。

- 使用nano 打开/boot/armbianEnv.txt文件：

```bash
sudo nano /boot/armbianEnv.txt
```

- 在该文件中找到或者添加 "overlays=" 这个关键词。

```bash
// 根据您手上的产品选择
overlays=armsom-sige7-display-10hd // Sige7
overlays=armsom-sige5-display-10hd // Sige5
overlays=armsom-sige3-display-10hd // Sige3
```

快捷键：Ctrl + S保存    Ctrl + X退出

编辑好之后重启设备来更改Overlays设置以支持Display 10 HD。

<span id="sige-manual-doc-section-4" className="armsom-section-anchor" />

### CPU/GPU/NPU/DDR {#sige-manual-cpugpunpuddr}

以下以Sige7为例，CPU GPU NPU DDR定频和性能模式设置方法

#### 定频 {#sige-manual-定频}
##### CPU 定频 {#sige-manual-cpu-定频}
ArmSoM-Sige7 的cpu是4个A55+4个A76，分为3组单独管理，节点分别是：

```
/sys/devices/system/cpu/cpufreq/policy0:（对应4个A55：CPU0-3）
affected_cpus     cpuinfo_max_freq  cpuinfo_transition_latency  scaling_available_frequencies  scaling_cur_freq  scaling_governor  scaling_min_freq  stats
cpuinfo_cur_freq  cpuinfo_min_freq  related_cpus                scaling_available_governors    scaling_driver    scaling_max_freq  scaling_setspeed

/sys/devices/system/cpu/cpufreq/policy4:(对应2个A76：CPU4-5)
affected_cpus     cpuinfo_max_freq  cpuinfo_transition_latency  scaling_available_frequencies  scaling_cur_freq  scaling_governor  scaling_min_freq  stats
cpuinfo_cur_freq  cpuinfo_min_freq  related_cpus                scaling_available_governors    scaling_driver    scaling_max_freq  scaling_setspeed

/sys/devices/system/cpu/cpufreq/policy6:(对应2个A76：CPU6-7)
affected_cpus     cpuinfo_max_freq  cpuinfo_transition_latency  scaling_available_frequencies  scaling_cur_freq  scaling_governor  scaling_min_freq  stats
cpuinfo_cur_freq  cpuinfo_min_freq  related_cpus                scaling_available_governors    scaling_driver    scaling_max_freq  scaling_setspeed

root@armsom-sige7:/ # cat /sys/devices/system/cpu/cpufreq/policy6/scaling_available_frequencies // 获取当前CPU支持的频点
408000 600000 816000 1008000 1200000 1416000 1608000 1800000 2016000 2208000 2400000 
root@armsom-sige7:/ # cat /sys/devices/system/cpu/cpufreq/policy6/scaling_available_governors // 获取cpu运行的模式
conservative ondemand userspace powersave performance schedutil 
```

默认是自动变频模式：schedutil（恢复的话设置为该模式即可）

###### 设置手动定频 {#sige-manual-设置手动定频}
```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo userspace > /sys/devices/system/cpu/cpufreq/policy6/scaling_governor // 手动定频模式：userspace
root@armsom-sige7:/ # echo 2016000 > /sys/devices/system/cpu/cpufreq/policy6/scaling_setspeed // 设置频率为2016000
root@armsom-sige7:/ # cat /sys/devices/system/cpu/cpufreq/policy6/cpuinfo_cur_freq // 确认是否设置成功
2016000
```
其他两组CPU也是类似的方式进行设置，操作对应的节点即可。

##### GPU定频 {#sige-manual-gpu定频}
###### GPU的节点路径 {#sige-manual-gpu的节点路径}
```
root@armsom-sige7:/ # ls /sys/class/devfreq/fb000000.gpu/    
available_frequencies  cur_freq  governor  max_freq  name              power      target_freq  trans_stat
available_governors    device    load      min_freq  polling_interval  subsystem  timer        uevent
root@armsom-sige7:/ # cat /sys/class/devfreq/fb000000.gpu/available_frequencies  // 获取GPU支持的频点                                                                        1000000000 900000000 800000000 700000000 600000000 500000000 400000000 300000000 200000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fb000000.gpu/available_governors // 获取GPU运行的模式
dmc_ondemand userspace powersave performance simple_ondemand
```
默认是自动变频模式：simple_ondemand（恢复的话设置为该模式即可）

###### 设置手动定频 {#sige-manual-设置手动定频-1}
```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo userspace > /sys/class/devfreq/fb000000.gpu/governor // 手动定频模式：userspace
root@armsom-sige7:/ # echo 1000000000 > /sys/class/devfreq/fb000000.gpu/userspace/set_freq // 设置频率为1000000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fb000000.gpu/cur_freq  // 确认是否设置成功
1000000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fb000000.gpu/load   // 查看GPU的负载
28@300000000Hz
```

##### DDR定频 {#sige-manual-ddr定频}
###### DDR的节点路径 {#sige-manual-ddr的节点路径}
```
root@armsom-sige7:/ # ls /sys/class/devfreq/dmc/  
available_frequencies  cur_freq  downdifferential  load      min_freq  polling_interval  subsystem      target_freq  trans_stat  upthreshold
available_governors    device    governor          max_freq  name      power             system_status  timer        uevent
root@armsom-sige7:/ # cat /sys/class/devfreq/dmc/available_frequencies // 获取DDR支持的频点
528000000 1068000000 1560000000 2112000000
root@armsom-sige7:/ # cat /sys/class/devfreq/dmc/available_governors // 获取DDR运行的模式
dmc_ondemand userspace powersave performance simple_ondemand
```
默认是自动变频模式：dmc_ondemand（恢复的话设置为该模式即可）

###### 设置手动定频 {#sige-manual-设置手动定频-2}
```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo userspace > /sys/class/devfreq/dmc/governor // 手动定频模式：userspace
root@armsom-sige7:/ # echo 2112000000 > /sys/class/devfreq/dmc/userspace/set_freq  // 设置频率为2112000000
root@armsom-sige7:/ # cat /sys/class/devfreq/dmc/cur_freq   // 确认是否设置成功
2112000000
root@armsom-sige7_evb7:/ # cat /sys/class/devfreq/dmc/load  // 查看DDR的负载
7@528000000Hz
```

##### NPU定频 {#sige-manual-npu定频}
###### NPU的节点路径 {#sige-manual-npu的节点路径}
```
root@armsom-sige7:/ # ls /sys/class/devfreq/fdab0000.npu/
available_frequencies  cur_freq  governor  max_freq  name              power      target_freq  trans_stat  userspace
available_governors    device    load      min_freq  polling_interval  subsystem  timer        uevent
root@armsom-sige7:/ # cat /sys/class/devfreq/fdab0000.npu/available_frequencies     // 获取NPU支持的频点       
200000000 300000000 400000000 500000000 600000000 700000000 800000000 900000000 1000000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fdab0000.npu/// 获取NPU运行的模式available_governors 
dmc_ondemand userspace powersave performance simple_ondemand
```
默认是自动变频模式：simple_ondemand（恢复的话设置为该模式即可）

###### 设置手动定频 {#sige-manual-设置手动定频-3}
```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo userspace > /sys/class/devfreq/fdab0000.npu/governor // 手动定频模式：userspace
root@armsom-sige7:/ # echo 1000000000 > /sys/class/devfreq/fdab0000.npu/userspace/set_freq // 设置频率为1000000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fdab0000.npu/cur_freq  // 确认是否设置成功
1000000000
root@armsom-sige7_evb7:/ # cat /sys/kernel/debug/rknpu/load // 查看NPU的负载
NPU load:  Core0:  0%, Core1:  0%, Core2:  0%,
```

#### 性能模式 {#sige-manual-性能模式}

```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo performance > /sys/devices/system/cpu/cpufreq/policy6/scaling_governor
root@armsom-sige7:/ # echo performance > sys/class/devfreq/fb000000.gpu/governor
root@armsom-sige7:/ # echo performance > /sys/class/devfreq/dmc/governor
root@armsom-sige7:/ # echo performance > /sys/class/devfreq/fdab0000.npu/governor
```

<!-- SIGE_MANUAL_END -->
