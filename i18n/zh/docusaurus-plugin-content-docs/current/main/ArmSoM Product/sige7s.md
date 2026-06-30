---
description: ArmSoM-Sige7s采用Rockchip RK3588s新一代旗舰级八核64位处理器具有丰富的硬件接口，涵盖嵌入式行业常用通信总线，如I2C、SPI、UART、CAN等。在多媒体音视频方面，micro HDMI最高支持8K60帧视频输出。8核芯CPU最高2.4Ghz能够满足日常多任务需求，如服务器、网关等应用场景。内置NPU具有6T算力，极大增强各类模型算法实现。
keywords: [armsom, armsom-sige7s, rk3588s maker kit, rockchip, rk3588s产品介绍]
sidebar_label: "Sige7s"
sidebar_position: 3
slug: /armsom-sige7s
image: /img/sige/sige7s-bananer.png
---

# Sige7s 产品简介

让我们在 5 分钟内了解 Sige7s。

## 简介

ArmSoM-Sige7S 采用 Rockchip RK3588S 新一代高性能八核64位处理器，主频高达2.4GHz，集成6 TOPS算力NPU，最大可配32GB大内存。支持8K视频解码与4K编码，拥有丰富接口，支持千兆以太网、WiFi6 & BT5和多种视频输出。支持多种操作系统，可适用于ARM PC、边缘计算、云服务器、人工智能、智能NVR等领域。

![ArmSoM-sige7s](/img/sige/sige7s-bananer.png)

### 关键参数

- **SOC**：瑞芯微 RK3588S
- **CPU**：RK3588S 四核 Cortex-A76 @ 2.4GHz + 四核 Cortex-A55 @ 1.8GHz，8nm 制程
- **GPU**：ARM Mali-G610 MP4
- **NPU**：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算
- **VPU/编解码**：
  - **硬解码**：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8
  - **硬编码**：8K@30fps H.265 / H.264
- **RAM**：2GB/4GB/8GB/16GB/32GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x
- **Flash**：32GB/64GB/128GB eMMC Module
- **WIFI/BT**: 板载IEEE 802.11a/b/g/n/ac/ax WIFI6 和 BT5
- **工作电压**：具有宽范围的输入电压，从5V到23V（电压误差±5%）
- **工作温度**：0℃ ~ 80℃
- **操作系统**：
  - **官方支持**：Debian12，Ubuntu 22.04, Ubuntu 24.04
  - **第三方支持**：Armbian, Arch Linux, openSUSE
- **PCB**：12 层 PCB 板设计
- **重量**：46.6g
- **大小**：85 mm × 56 mm × 17 mm

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

![ArmSoM-Sige7s front & back](/img/sige/armsom-sige7s-layout.jpg)

### 硬件规格
<details>
    <summary>
        Sige7s 硬件规格
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
            <th><li>RockChip RK3588s</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3588s 四核Cortex-A76@ 2.4GHz+四核Cortex-A55@ 1.8GHz，8纳米制程</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>GPU Mali-G610 MP4 (4x256KB L2 Cache)</li><li>支持 OpenGL ES3.2/OpenCL2.2/Vulkan1.1</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8(3 NPU core)</li><li>支持 INT4/INT8/INT16 混合运算</li><li>支持深度学习框架：TensorFlow/MXNet/PyTorch/Caffe/Tflite/Onnx NN/Android NN 等</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8</li><li>硬编码：8K@30fps H.265 / H.264</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>集成48MP ISP with HDR&3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>8GB/16GB/32GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>16GB/32GB/64GB/128GB eMMC</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>Wifi6+BT5.0 (AIC8800)</li><li>Gigabit Ethernet port with POE function (POE module needs to be added)</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>1x DP1.4-2LINE support 4KP60</li><li>1x HDMI2.1 support 8KP60</li><li>1x DSI-2LINE support max 1280*800 display</li></th>
        </tr>
        <tr>
            <th>视频输入</th>
            <th><li>1x CSI-2LNE support 500W cammera input resolution</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1x HDMI音频输出</li><li>1x HP-OUT 音频输出</li><li>1x USB Type-C 3.0 (DP1.4)音频输出</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>2x USB3.0（支持USB3.1 Gen1），高达5Gbps数据速率</li><li>2x USB2.0，支持高速（480Mbps）、全速（12Mbps）和低速（1.5Mbps）模式</li></th>
        </tr>
        <tr>
            <th>40-PIN</th>
            <th><li>和树莓派40pin可完全兼容，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/ADC/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>1x 电池输入连接器用于低功耗RTC芯片 LK8563S 的供电</li><li>2x LED灯，系统正常时绿色灯亮</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>宽范围的输入电压 5V-23V </li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x PWRON键，支持休眠唤醒</li><li>1x Maskrom键，支持进入maskrom烧录模式</li></th>
        </tr>
        <tr>
            <th>系统</th>
            <th><li>官方支持：Debian12，ubuntu22.04，ubuntu24.04</li><li>第三方支持：Armbian</li></th>
        </tr>
        <tr>
            <th>尺寸</th>
            <th><li>85 mm × 56 mm × 17 mm</li></th>
        </tr>
        <tr>
            <th>工作温度</th>
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>
</details>

### RK3588s框图
<details>
    <summary>
      RK3588s框图
    </summary>
        <img
  src="./img/sige/rk3588s.png"
  alt="rk3588s block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义
<details>
    <summary>
        40-PIN header
    </summary>
   
<div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
| :-----------: | :-------------: | :--------: | :--------: | :--------: |:--------: |
| | +3.3V | <div className='red'>1</div> | <div className='red'>2</div> | +5.0V | |
| /dev/i2c1 sda | I2C1_SDA \ GPIO0_D5 | <div className='green'>3</div> | <div className='red'>4</div> | +5.0V | |
| /dev/i2c1 scl | I2C1_SCL \ GPIO0_D4 | <div className='green'>5</div> | <div className='black'>6</div> | GND | |
| 47 | GPIO1_B7 \ PWM3_M3 | <div className='green'>7</div> | <div className='green'>8</div> | <div className='orange-txt'>UART2_TX_M0</div> | |
| | GND | <div className='black'>9</div> | <div className='green'>10</div> | <div className='orange-txt'>UART2_RX_M0</div>  | |
| 128 | GPIO4_A0 | <div className='green'>11</div> | <div className='green'>12</div> | GPIO1_A7 | 39 |
| 129 | GPIO4_A1 | <div className='green'>13</div> | <div className='black'>14</div> | GND | |
| 130 | GPIO4_A2 | <div className='green'>15</div> | <div className='green'>16</div> | UART6_TX_M1 \ GPIO1_A1 | /dev/ttyS2 uart txd |
| | +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |UART6_RX_M1 \| GPIO1_A0 |  /dev/ttyS2 uart rxd |
| spi mosi | SPI0_MOSI_M2 | <div className='green'>19</div> | <div className='black'>20</div> | GND | |
| spi miso  | SPI0_MISO_M2 | <div className='green'>21</div> | <div className='green'>22</div> | GPIO1_B0|  40 |
| spi clk| SPI0_CLK_M2 | <div className='green'>23</div> | <div className='green'>24</div> | spi cs 0 | SPI0_CS0_M2 |
| | GND | <div className='black'>25</div> | <div className='green'>26</div> | spi cs 1 | SPI0_CS1_M2 |
| /dev/i2c6 sda| I2C6_SDA_M3 | <div className='green'>27</div> | <div className='green'>28</div> | I2C6_SCL_M3 |  /dev/i2c6 scl |
| 131 | GPIO4_A3 \ UART0_TXD_M2 | <div className='green'>29</div> | <div className='black'>30</div> | GND | |
| 132 | GPIO4_A4 \ UART0_RXD_M2 | <div className='green'>31</div> | <div className='green'>32</div> | PWM2 | 105 |
| 133 | GPIO4_A5 \ UART3_TXD_M2 | <div className='green'>33</div> | <div className='black'>34</div> | GND | |
| 134 | GPIO4_A6 \ UART3_RXD_M2 | <div className='green'>35</div> | <div className='green'>36</div> | GPIO4_B2 \ CAN1_RXD_M1 | 138 |
| 135 | GPIO4_A7 | <div className='green'>37</div> | <div className='green'>38</div> | GPIO4_B3 \ CAN1_TXD_M1 | 139 |
| | GND | <div className='black'>39</div> | <div className='green'>40</div> | GPIO3_C3 | 115 |

</div>
</details>

<details>
    <summary>
        MIPI CSI
    </summary>
    
0.5mm FPC connector(J10)

| PIN | Name |
| :---: | :--- |
| 1 | VCC_CAM(3.3v) |
| 2 | I2C8_SDA_M2 |
| 3 | I2C8_SCL_M2 |
| 4 | CIF_CLKOUT |
| 5 | PWDN_GPIO1_A6 |
| 6 | GND |
| 7 | MIPI_CSI_RX_CLK0P |
| 8 | MIPI_CSI_RX_CLK0N |
| 9 | GND |
| 10 | MIPI_CSI_RX_D1P |
| 11 | MIPI_CSI_RX_D1N |
| 12 | GND |
| 13 | MIPI_CSI_RX_D0P |
| 14 | MIPI_CSI_RX_D0N |
| 15 | GND |
</details>

<details>
    <summary>
        MIPI DSI
    </summary>

0.5mm FPC connector (J11)

| PIN | Name |
| :---: | :--- |
| 1 | VCC_MIPI |
| 2 | VCC_MIPI |
| 3 | GND |
| 4 | I2C4_SDA_M3 |
| 5 | I2C4_SCL_M3 |
| 6 | GND |
| 7 | MIPI_DSI_TX1_D0P |
| 8 | MIPI_DSI_TX1_D0N |
| 9 | GND |
| 10 | MIPI_DSI_TX1_CLKP |
| 11 | MIPI_DSI_TX1_CLKN |
| 12 | GND |
| 13 | MIPI_DSI_TX1_D1P |
| 14 | MIPI_DSI_TX1_D1N |
| 15 | GND |
</details>

<details>
    <summary>
        VRTC
    </summary>

0.8mm connector(J18)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | Positive pole      |
|2          | -         | Negative pole    |
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
            <h2>Sige7s kernel</h2>
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
            <h2>Sige7s uboot</h2>
            <p>ArmSoM/u-boot</p>
        </div>
    </div>
</a>

<a href="https://github.com/torvalds/linux/blob/master/arch/arm64/boot/dts/rockchip/rk3588-armsom-sige7s.dts" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>Sige7s mainline linux</h2>
            <p>torvalds linux</p>
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

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

:::tip
1、ArmSoM-sige7s进入烧录模式需要按如下图方式短接，若要进入Maskrom模式则将Maskrom引脚与GND引脚短接，若要进入Recovery模式则将Recovery引脚与GND引脚短接。
2、ArmSoM-sige7s烧录使用USB双工线，一端接板载USB3.0接口，另一端接电脑端，同时接USB Type-C线给开发板供电。
:::
![armsom-sige7s-burn_image](/img/sige/armsom-sige7s-burn-image.png)

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11-1.png) | debian12 for Sige7 :  <br/>   Debian 12 带来了数千个新的和更新的软件包，支持多种桌面环境和处理器架构（包括 32 位和 64 位 PC、ARM、MIPS 和 PowerPC）。但是最大的变化之一是 Linux 内核从 5.10 版本升级到 6.1 LTS 版本。| [百度网盘](https://pan.baidu.com/s/1sUHv1pAhkLts3c7fziU4lw?pwd=arms)   |
|![Android](/img/sige/android.png) | Android12 for Sige7 :    <br/>安卓（Android）是一个基于Linux内核的开放源代码操作系统，主要用于移动设备、平板电脑和智能手表等智能设备。| [百度网盘](https://pan.baidu.com/s/1btSeFT_-qs-0bz1wUcLZ6A?pwd=arms)  |
|![ubuntu](/img/sige/ubuntu.png) | ubuntu22.04 for Sige7 :    <br/>Ubuntu 22.04，代号“Jammy Jellyfish”，是Canonical于2022年4月21日正式发布的版本.| [百度网盘](https://pan.baidu.com/s/1muULzMrL8cmEMszuv1cIhw?pwd=arms)  |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for Sige7(bpi-m7) :    <br/> Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  | [armbian固件下载](https://github.com/armbian/community/releases/)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige7 :    <br/>  该项目旨在为Rockchip RK3588设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。 | [ubuntu-rockchip固件下载](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |
|Arch Linux | Arch Linux Installer By kwankiu :    <br/>Arch Linux 是一个独立开发的通用 GNU/Linux 发行版，致力于通过滚动发布模式提供大多数软件的最新稳定版本。默认安装是一个最小的基础系统，由用户配置为仅添加所需的内容。| 只需刷新图像并按照安装程序提示的说明进行操作即可。<br/>注意：此安装程序需要互联网连接。（以太网驱动程序可能需要一些时间来加载，安装程序将重试多次，这是正常的。）  [download](https://github.com/kwankiu/archlinux-installer/releases) |
| ![openSUSE](https://static.opensuse.org/favicon.svg) | 桌面用户、开发者以及系统管理员的匠之所选。| [download](https://download.opensuse.org/ports/aarch64/tumbleweed/appliances/) |
| [lede](https://github.com/coolsnowwolf/lede) | lede for Sige7 :    <br/>lede是一个高度模块化、高度自动化的嵌入式Linux系统，拥有强大的网络组件和扩展性。| [coolsnowwolf](https://github.com/coolsnowwolf/lede)  |
| [LibreELEC](https://github.com/coolsnowwolf/lede) | LibreELEC.tv for Sige7 :    <br/>LibreELEC 是一个极简主义的“刚好够用的操作系统”Linux 发行版，用于运行Kodi。| [LibreELEC.tv](https://github.com/ShigeakiAsai/LibreELEC.tv/releases)  |

### 硬件资料

获取 Sige7 原理图、DXF等硬件资料

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

<div class="cards">
    <a href="https://pan.baidu.com/s/18EjA6vzhfCRcO5CQ9oYhag?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige7 SCH</h2>
            </div>
        </div>
</a>

<a href="https://pan.baidu.com/s/1rqpumvtvASduXpq9Qi-B1Q?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige7 2D</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1isHPcVGh5fHimA-sJXJICQ?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige7 SMD</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1VgiOJkzp7ISTrkUWqlgb_A?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/1na-F11TOIeGO8QHrZRBHJw?pwd=arms" class="card-link">
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

## 产品证书

### CE / FCC / RoHS

![sige7-sige7-ce-fc-rohs](/img/sige/sige7-ce-fc-rohs.jpeg)

## 供货声明

ArmSoM-Sige7s 将至少生产到 2034 年 1 月。

## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/sige7](https://www.armsom.org/product-page/sige7)
 
ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256806184323776.html](https://aliexpress.com/item/3256806184323776.html) 

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