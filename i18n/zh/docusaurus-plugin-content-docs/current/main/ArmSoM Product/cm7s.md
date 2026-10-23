---
description: ArmSoM-CM7s 采用瑞芯微 RK3588S 8核64位处理器，4个Cortex-A76（主频2.4GHz）和4个Cortex-A55（主频1.8GHz）。6 TOPS算力NPU，最大可配32GB大内存。支持4K视频编解码，拥有丰富的接口，支持多种操作系统。
keywords: [armsom, armsom-CM7s, RK3588s  Development Boards, RK3588s Core borad, rockchip]
sidebar_label: "CM7s"
sidebar_position: 5
slug: /armsom-cm7s
image: /img/cm/armsom-cm7s.jpg
---

# ArmSoM-CM7s 产品简介

让我们在 5 分钟内了解 ArmSoM-CM7s 和 ArmSoM-CM7s-IO

## CM7s 简介

**ArmSoM-CM7s 核心板：尺寸小巧，性能强悍，专为深度嵌入式场景打造。**
板载瑞芯微 RK3588S 8核 64位旗舰处理器（4×Cortex-A76 @ 2.4GHz + 4×Cortex-A55 @ 1.8GHz），采用 8nm 先进工艺，兼具出色算力与优秀功耗比。集成 ARM Mali-G610 高性能 GPU，全面兼容 OpenGL ES 3.2、OpenCL 2.2 及 Vulkan 1.2 图形 API；内置 6 TOPS 强劲 NPU，支持 INT4/INT8/INT16 混合精度运算，轻松胜任端侧 AI 推理。

模块提供丰富的总线与扩展接口，支持多种容量 eMMC 闪存，可广泛赋能工业物联网、边缘计算及智能终端领域。

![ArmSoM-CM7s](/img/cm/armsom-cm7s.jpg)

:::tip Rockchip RK3588s
依托强大的生态系统以及各式各样的扩展配件，ArmSoM 可以帮助用户轻松实现从创意到原型再到批量生产的交付，是创客、梦想家、业余爱好者的理想创意平台。
:::

:::tip
armsom-cm7sv1.1 CN2 第2pin和第4pin不工作，将在下个v1.2 版本修复
:::

### 关键参数

* **SOC**：Rockchip RK3588S（8nm LP制程）
* **CPU**：8核64位（4×Cortex-A76@2.4GHz + 4×Cortex-A55@1.8GHz）
* **GPU**：ARM Mali-G610 3D GPU，支持 OpenGL ES3.2 / OpenCL 2.2 / Vulkan 1.2
* **NPU**：6TOPS 算力，支持 INT4/INT8/INT16 混合运算
* **RAM**：2/4/8/16/32GB LPDDR4/4X
* **eMMC**：32/64/128/256GB eMMC
* **接口**：板载 3×100pin 连接器（DF40C-100DP-04V），支持 Type-C/DP1.4、HDMI 2.1/eDP1.3、MIPI DPHY/CSI、USB3.0/2.0、SATA III/PCIe2.0、SDIO3.0/RGMII、SDMMC 及 I2C/I2S/UART/SPI/CAN/PWM/GPIO 等复用总线与控制引脚
* **电源**：输入 DC 5V (MAX 2500mA)；输出 DC 3.3V/1.8V (MAX 600mA)
* **尺寸**：55 x 40 x 1.6 毫米
* **输入**：DC 5V MAX 2500mA
* **输出**：DC 3.3V MAX 600mA 和 DC 1.8V MAX 600mA
* **PCB尺寸**：55 x 40 x 1.6 毫米（长 x 宽 x 厚）
## CM7s 硬件信息

### 硬件接口

![ArmSoM-CM5-front & back](/img/cm/cm7s-interface.jpg)

:::tip
- 设计为板对板连接器
:::

### ArmSoM CM7s vs 树莓派 CM5
以下是 ArmSoM CM7s 和 树莓派 CM5 的规格对比表格：

| 规格                   | ArmSoM CM7s                             | 树莓派 CM5                     |
|------------------------|-----------------------------------------|--------------------------------|
| **处理器**             | **RK3588S SoC**                         | Broadcom BCM2712               |
| **CPU架构**            | **四核 ARM Cortex-A76 & 四核Cortex-A55** | 四核 ARM Cortex-A76            |
| **GPU**                | **ARM Mali-G610 MP4**                   | VideoCore VII                |
| **NPU**                | **6TOPS 算力，支持 INT4/INT8/INT16 混合运算** | 无内置NPU                |
| **内存**               | **最高支持 32GB LPDDR4X**                 | 2GB、4GB、8GB、16GB LPDDR4       |
| **存储**               | eMMC 存储（可选容量）                     | eMMC 存储（可选容量）        |
| **显示输出**           | 1x HDMI 2.1, 1x DP 1.4                   | 2x HDMI 2.0                    |
| **视频分辨率**         | **支持8K@60fps**                         | 支持4K@60fps                   |
| **网络接口**           | 1x 千兆以太网接口                         | 1x 千兆以太网接口               |
| **USB接口**            | **1x USB3.0，3x USB2.0**                 | 2xUSB3.0，1xUSB2.0       |
| **GPIO**               | 40针 GPIO                                | 40针 GPIO                      |
| **扩展性**             | **2x PCIE2.1/SATA3**                     | 1x PCIe 2.0         |
| **相机接口**           | 1x 4通道 MIPI CSI, 2x 2通道 MIPI CSI      | 2x 4通道 MIPI CSI     |
| **显示接口**           | 1x 4通道 MIPI DSI                        | 2x 4通道 MIPI DSI                    |
| **电源输入**           | 5V                                       | 5V                          |
| **尺寸**               | 55mm x 40mm                               | 55mm x 40mm                    |
| **操作系统支持**       | Debian, Android, Ubuntu, Armbian等         | Raspberry Pi OS, Ubuntu, 其他  |
| **主要用途**          | 高端平板、边缘计算、人工智能、云计算、AR/VR、智能安防、智能家居等  | 嵌入式系统、工业控制、AI/机器学习、数字标牌、物联网、边缘计算       |

### 产品框图

![ArmSoM-CM7s-product](/img/cm/cm7s-product.png)

### 硬件规格
<table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能</th>
      </tr>
    </thead>
    <tbody align="left">
    <tr>
            <th>SOC</th>
            <th><li>RockChip RK3588S</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3588S 四核 Cortex-A76@ 2.4GHz 和四核 Cortex-A55@ 1.8GHz，8纳米制程</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali-G610 MP4 GPU</li><li>ARM Mali-G610 MP4四核GPU，支持OpenGL ES 1.1/2.0/3.2、OpenCL 2.2、Vulkan 1.1/1.2，算力450 GFLOPS</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8</li><li>支持 INT4，INT8，INT16，FP16 混合运算</li><li>支持深度学习框架：TensorFlow、PyTorch、Caffe等。</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：支持8K@60fps (H.265/VP9/AVS2)、8K@30fps (H.264)、4K@60fps (AV1)。</li><li>硬编码：8K@30fps (H.265/H.264)，支持同编同解</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>集成4800万像素ISP，支持HDR和3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>4GB/8GB/16GB 32GB LPDDR4/LPDDR4x/LPDDR5，默认LPDDR5 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB/64GB/128GB eMMC，默认eMMC 64GB</li><li>支持MicroSD卡扩展</li><li>M.2 M-KEY Socket：PCIe2.1 NVMe SSD</li></th>
        </tr>
        <tr>
            <th>显示</th>
            <th><li>1x HDMI OUT2.1，支持 8K@60Hz或4K@120Hz</li><li>2x MIPI DSI 分辨率最高可达 4K@60Hz</li><li>1x DP1.4 分辨率最高可达 8K@30Hz</li></th>
        </tr>
        <tr>
            <th>摄像头</th>
            <th><li>2x 4Lanes MIPI CSI，每线最高 2.5Gbps</li><li>支持最多三个MIPI摄像头输入</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th>
              <li>1x GMAC，提供 RGMII / RMII 接口引出</li>
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
            <th>音频</th>
            <th><li>SPDIF_Tx x2</li><li>I2S x4</li><li>PDM x2</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1</li><li>FAN x1</li><li>RTC x1</li></th>
        </tr>
    </tbody>
</table>

### RK3588S框图
<details>
    <summary>
        RK3588S 框图
    </summary>
    <img
  src="./img/sige/rk3588s.png"
  alt="rk3588S block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

![ArmSoM-cm7s-pinlist](/img/cm/cm7s-pinlist.png)

<a href="https://pan.baidu.com/s/1PowkJyvHJOHGgC-BnVT98g?pwd=arms" class="btn">
  <span>ArmSoM-CM7s_Pinout</span>
</a>
<br/>

### 硬件资料

获取 CM7s 原理图、DXF等硬件资料

<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

<div class="cards">
    <a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>CM7s SCH</h2>
            </div>
        </div>
</a>

<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM7s 2D</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>CM7s SMD</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
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

## CM7s-IO 简介
CM7s-IO是 ArmSoM CM7s的 IO 板，尺寸为 100x79x41 毫米，适用于需要快速进行 ArmSoM CM7s 平台功能评估、外设驱动调试和系统原型的开发阶段，也可作为工业网关、边缘 AI 推理终端、多媒体交互设备等产品的硬件底板参考设计，帮助用户从原型验证平滑过渡到批量部署。

## CM7s-IO 硬件信息

### 硬件规格

CM7s-IO板是专为CM7s计算模块设计的扩展板，旨在帮助完成系统和嵌入式板开发。

- 1x HDMI输出, 1x Typec(DP)输出
- 4x USB 3.0 Type-A
- 支持千兆以太网 RJ45
- 通过USB Type-C进行固件闪存和设备模式
- GPIO：40针扩展头
- 电源连接器：DC Barrel插孔，用于12V电源输入
- 扩展：M.2（M键，支持PCIe）、microSD
- MIPI DSI：1x 4通道MIPI DSI，支持最高4K@60fps（x4）
- MIPI CSI0：1x 4通道MIPI CSI，每条通道最高2.5Gbps
- MIPI CSI1：1x 2通道MIPI CSI，每条通道最高2.5Gbps
- 其他：HPOUT,FAN,VRTC
- 尺寸：100 x 79 x 1.6 毫米 (3.94 × 3.11 × 0.06 英寸)
- 重量:  60g

### 硬件接口

![ArmSoM-CM7s-IO](/img/cm/cm7s-io-layout.png)

:::tip
CM7s-IO Board 使用12V DC供电。
:::
### 引脚定义

<details>
    <summary>
       40-PIN 座子
    </summary>
<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
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
0.8mm 连接器(CN4)

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
0.8mm 连接器(CN3)

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

0.8mm 连接器(J27)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | 正极  |
|2          | -         | 负极  |
</details>

## Getting started

<a href="./armsom-cm7s#使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>CM7s-IO 使用手册</h2>
            <p>如何开始使用你的CM7s-IO套件</p>
        </div>
    </div>
</a>

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

### 网盘链接
百度网盘总链接，包括软件资料、硬件资料：
<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤📤

以下系统已由ArmSoM官方测试验证：

| logo  | Description | Cloud drive path |
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for **CM7s-IO** :  <br/>  Debian 12 带来了数千个新的和更新的软件包，支持多种桌面环境和处理器架构（包括 32 位和 64 位 PC、ARM、MIPS 和 PowerPC）。但是最大的变化之一是 Linux 内核从 5.10 版本升级到 6.1 LTS 版本。| `ArmSoM->ArmSoM-CM7s->软件资料` |
|![ubuntu](/img/sige/ubuntu.png) | ubuntu22.04 for **CM7s-IO** :    <br/>Ubuntu 22.04，代号“Jammy Jellyfish”，是Canonical于2022年4月21日正式发布的版本.| `ArmSoM->ArmSoM-CM7s->软件资料`  |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for **CM7s-IO**:    <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  |   |

## 使用手册
### 1. 入门准备

在开始使用 ArmSoM-CM7s-IO 产品之前，请准备好以下物品

#### 工具准备
* 电源
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-c线烧录，12V 电源适配器给底板供电；从 CM7s-IO 的 Type-C 端口向 CM7s 写入镜像，您需要使用 USB Type-C 连接 CM7s-IO 和 PC，同时使用 12V 电源适配器连接 CM7s-IO 的 DC 口供电。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：

您可以将 CM7s 设置为带有桌面的交互式计算机，也可以将其设置为仅可通过网络访问的无头计算机。要将 CM7s 设置为Headless计算机，您在初次安装操作系统时配置主机名、用户帐户、网络连接和 SSH 。如果您想直接使用 CM7s，则需要以下附加配件：

**可选配件**
* 键盘 & 鼠标
* HDMI显示器、 HDMI线
* Ethernet 线（网线）
* 摄像头模块
  * 4lan 摄像头推荐使用 [camera-module1](./armsom-camera-module1) 模组（OV13850）。
  * 2lan 摄像头使用树莓派 [camera-module-v2](https://www.raspberrypi.com/products/camera-module-v2/) 模组（IMX219）。
* LCD显示屏
  * 推荐使用 [Display 10 HD](./armsom-display-10-hd)。
* 3.5mm带麦克风功能有线耳机。

#### 电源

* 支持 DC 12V适配器，2.5mm

#### 登录系统所需账号
| 用户名 | 密码
| :----: | :----: |
| root | root | 
| armsom | armsom | 

### 2. 烧录方式选择
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

### 3. 接口使用

如果您是首次使用 CM7s Kit，请先熟悉下各产品 [CM7s硬件接口](./armsom-cm7s#硬件接口) 和 [CM7s-IO硬件接口](./armsom-cm7s#硬件接口-1)，以便于您更好的理解后续的内容。

### 3.1 调试串口

使用USB转串口芯片（CH340）连接 TTL 串口线到 CM7s-IO 上 40pin ：

| CM7s   | 连接  | 串口模块 |
| -------- | ----- | ------ |
| **GND(Pin6)** | ---> | GND |
| **TX(Pin8)**  | ---> | RX |
| **RX(Pin10)** | ---> | TX |

:::tip
串口通讯参数
 - 波特率：1500000
 - 数据位：8
 - 停止位：1
 - 校验位：无
 - 流控：无
:::

### 3.2 以太网口

1. 首先将网线的一端插入 ArmSoM-CM7s-IO 的以太网接口，网线的另一端接入路由器，并确保
网络是畅通的
2. 系统启动后会通过 DHCP 自动给以太网卡分配 IP 地址，不需要其他任何配置
3. 在 ArmSoM-CM7s 的 Linux 系统中查看 IP 地址的命令如下所示，其中end1就是以太网卡设备名称

```bash
armsom@armsom:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: dummy0: <BROADCAST,NOARP> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 46:fc:71:98:e2:45 brd ff:ff:ff:ff:ff:ff
3: end1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether d6:3c:08:0f:a4:05 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.156/24 brd 192.168.1.255 scope global dynamic noprefixroute end1
       valid_lft 43188sec preferred_lft 43188sec
    inet6 fd45:d3b4:e549::8a2/128 scope global dynamic noprefixroute
       valid_lft 43186sec preferred_lft 43186sec
    inet6 fd45:d3b4:e549:0:54c0:d3b4:6f75:62be/64 scope global dynamic noprefixroute
       valid_lft 5386sec preferred_lft 2686sec
    inet6 fe80::aeef:d7f3:1189:902b/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```
ArmSoM-CM7s 启动后查看 IP 地址有三种方法：

- 接 HDMI 显示器，然后登录系统使用终端输入 ip a 命令查看 IP 地址
- 接[调试串口](#31-调试串口)进入终端输入 ip a 命令来查看 IP 地址
- 如果没有调试串口，也没有 HDMI 显示器，还可以通过路由器的管理界面来查看ArmSoM-CM7s 网口的 IP 地址。不过这种方法经常有人会无法正常看到 ArmSoM-CM7s 的 IP 地址。如果看不到，调试方法如下所示：
    - 首先检查 Linux 系统是否已经正常启动，如果ArmSoM-CM7s的绿灯常亮，一般是正常启动了，如果只亮红灯，说明系统都没正常启动。
    - 检查网线有没有插紧，或者换根网线试下。
    - 换个路由器试下，路由器的问题有遇到过很多，比如路由器无法正常分配IP 地址，或者已正常分配 IP 地址但在路由器中看不到。
    - 如果没有路由器可换就只能连接 HDMI 显示器或者使用调试串口来查看 IP地址。

:::tip
另外需要注意的是ArmSoM-CM7s DHCP 自动分配 IP 地址是不需要任何设置的。
:::


4. 使用工具 ping 判断是否连通网络。

测试网络连通性的命令如下，ping 命令可以通过 Ctrl+C 快捷键来中断运行
```bash
armsom@armsom:~$ sudo ping -I end1 www.baidu.com
PING www.wshifen.com (103.235.46.96) from 192.168.1.156 end1: 56(84) bytes of data.
64 bytes from 103.235.46.96 (103.235.46.96): icmp_seq=1 ttl=44 time=311 ms
64 bytes from 103.235.46.96 (103.235.46.96): icmp_seq=2 ttl=44 time=311 ms
64 bytes from 103.235.46.96 (103.235.46.96): icmp_seq=3 ttl=44 time=312 ms
64 bytes from 103.235.46.96 (103.235.46.96): icmp_seq=5 ttl=44 time=312 ms
64 bytes from 103.235.46.96 (103.235.46.96): icmp_seq=6 ttl=44 time=311 ms
^C
--- www.wshifen.com ping statistics ---
6 packets transmitted, 5 received, 16.6667% packet loss, time 5021ms
rtt min/avg/max/mdev = 311.040/311.447/311.866/0.296 ms
```
:::tip
只有普通用户需要使用sudo，root用户不需要
:::

### 3.3 HDMI

CM7s-IO 最高支持hdmi 8Kp60

1. 使用 HDMI 线连接 CM7s-IO 和 HDMI 显示器
2. 启动 linux 系统后如果 HDMI 显示器有图像输出说明 HDMI 接口使用正常

:::tip
注意，很多笔记本电脑虽然带有 HDMI 接口，但是笔记本的 HDMI 接口一般只有输出功能，并没有 HDMI in 的功能，也就是说并不能将其他设备的 HDMI 输出显示到笔记本的屏幕上。
当想把开发板的 HDMI 接到笔记本电脑 HDMI 接口时，请先确认清楚您的笔记本是支持 HDMI in 的功能。
当 HDMI 没有显示的时候，请先检查使用的系统是否是带桌面的版本，如果是服务器版本只能看到终端
:::

#### HDMI 转 VGA 显示测试
1. 需要准备下面的配件
- HDMI 转 VGA 转换器
- 一根 VGA 线，支持 VGA 接口的显示器

2. HDMI 转 VGA 显示测试如下所示

![sige-hdmi-vga](/img/general-tutorial/sige-hdmi-vga.jpg)

:::tip
使用 HDMI 转 VGA 显示时，CM5 Kit 和Linux系统是不需要做任何设置的，只需要开发板 HDMI 接口能正常显示就可以了。所以如果测试有问题，请检查 HDMI 转 VGA 转换器、VGA 线以及显示器是否有问题。
:::

### 3.4 USB

#### 连接 USB 鼠标或键盘测试
1. 将 USB 接口的键盘插入CM7s的 USB 接口中
2. 连接CM7s到 HDMI显示器
3. 如果鼠标或键盘能正常操作系统说明 USB 接口使用正常（鼠标只有在桌面版的系统中才能使用）

#### 连接 USB 存储设备测试
1. 首先将 U 盘或者 USB 移动硬盘插入 ArmSoM-CM7s 的 USB 接口中
2. 执行下面的命令如果能看到 sdX 的输出说明 U 盘识别成功
```bash
armsom@armsom:~$ cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0   30720000 sda
   8        1   30718976 sda1
```
3. 使用 mount 命令可以将 U 盘挂载到/mnt 中，然后就能查看 U 盘中的文件了

```bash
armsom@armsom:~$ mkdir -p /test
armsom@armsom:~$ sudo mount /dev/sda1 /test/
mount: /test: /dev/sda1 already mounted on /test.
```

4. 挂载完后通过 df -h 命令就能查看 U 盘的容量使用情况和挂载点

```bash
armsom@armsom:/$ df -h | grep "sd"
/dev/sda1        30G   64K   30G   1% /test
```

### 3.5 M.2 Key M

CM7s-IO 提供 M.2 Key M 连接器：

- 产品的背面有一个带有M.2 Key M 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

接好 NVMe 设备后，尝试挂载到新建目录，挂载成功即可
```
root@armsom:/# mkdir temp
root@armsom:/# mount /dev/nvme0n1 temp
```

### 3.6 Micro SD card slot

CM7s-IO 板载标准的 microSD 卡槽,主要用作系统启动盘或扩展存储空间。

1. 当我们使用SD卡用作系统启动盘时，只需在上电前将制作好的SD启动卡插入到 Micro SD card slot，然后再上电，
CM7s 将优先从SD卡启动。

2. 当我们使用SD卡用于拓展存储空间时，可以按如下方式操作，首先查看SD卡插入时日志：
```bash
armsom@armsom:~$ [  293.228591] mmc_host mmc1: Bus speed (slot 0) = 148500000Hz (slot req 150000000Hz, actual 148500000HZ div = 0)
[  293.309039] dwmmc_rockchip fe2c0000.mmc: Successfully tuned phase to 155
[  293.309114] mmc1: new ultra high speed SDR104 SDHC card at address 0001
[  293.310505] mmcblk1: mmc1:0001 ASTC 7.44 GiB
[  293.326321]  mmcblk1: p1 p2
```
根据输出信息可以看出，系统已经识别到插入的 SD 卡（mmcblk1，容量7.44 GiB，分区p1和p2），然后我们确认 SD 卡设备信息

```bash
armsom@armsom:~$ sudo fdisk -l /dev/mmcblk1
Disk /dev/mmcblk1: 7.44 GiB, 7990149120 bytes, 15605760 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: BDFDC9CF-2FC3-46BB-AF10-C9DF254BB1E2

Device           Start      End  Sectors  Size Type
/dev/mmcblk1p1   32768  1081343  1048576  512M Linux extended boot
/dev/mmcblk1p2 1081344 15605726 14524383  6.9G Linux filesystem
```
可以看到，文件系统分区为/dev/mmcblk1p2，接着我们按如下方式，挂载我们的 SD 卡

```bash
armsom@armsom:~$ sudo mkdir -p /mnt/sdcard
armsom@armsom:~$ sudo mount /dev/mmcblk1p2 /mnt/sdcard
[  491.938107] EXT4-fs (mmcblk1p2): recovery complete
[  491.939897] EXT4-fs (mmcblk1p2): mounted filesystem with ordered data mode. Quota mode: disabled.
mount: (hint) your fstab has been modified, but systemd still uses
       the old version; use 'systemctl daemon-reload' to reload.
armsom@armsom:~$ df -h /mnt/sdcard
Filesystem      Size  Used Avail Use% Mounted on
/dev/mmcblk1p2  6.8G  6.6G     0 100% /mnt/sdcard
armsom@armsom:~$ cd /mnt/sdcard/
armsom@armsom:/mnt/sdcard$ ls
bin   dev  home  lost+found  mnt  proc  run   snap  swapfile  tmp  var
boot  etc  lib   media       opt  root  sbin  srv   sys       usr
```

### 3.7 音频

#### 1. 查看系统中的声卡。

```bash
root@armsom:~# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipdp0 [rockchip-dp0], device 0: rockchip-dp0 spdif-hifi-0 [rockchip-dp0 spdif-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: rockchiphdmi0 [rockchip-hdmi0], device 0: rockchip-hdmi0 i2s-hifi-0 [rockchip-hdmi0 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchipes8388 [rockchip,es8388], device 0: dailink-multicodecs ES8323 HiFi-0 [dailink-multicodecs ES8323 HiFi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```
列出的声卡信息中， `card 2: rockchipes8388` 为 CM7s-IO 板载的 es8388 音频编解码器，用于板载 MIC 麦克风（录制音频）和板载 HPOUT 3.5mm 耳机座子（耳机播放音频）。

#### 2. 配置音频相关控件
在测试录音和播放之前，我们先执行下面命令，配置音频
- 配置板载麦克风
```bash
armsom@armsom:~$ amixer -c 2 cset numid=45 1    # Left PGA Mux = Line 2L    
armsom@armsom:~$ amixer -c 2 cset numid=46 1    # Right PGA Mux = Line 2R   
armsom@armsom:~$ amixer -c 2 cset numid=27 8    # 左通道增益 （范围 0~8，默认是0）
armsom@armsom:~$ amixer -c 2 cset numid=28 8    # 右通道增益  （范围 0~8，默认是0）
```
- 配置耳机听筒
```bash
armsom@armsom:~$ amixer -c 2 cset numid=34 30,30    # OUT1 模拟音量（左右两个值，范围 0~33）
armsom@armsom:~$ amixer -c 2 cset numid=55 on       # 打开 OUT1 输出通道 （默认关闭）
```

#### 3. 录制音频
通过板载MIC麦克风录音，使用 arecord 命令录制音频。
```bash
armsom@armsom:~$ arecord -D hw:2,0 -f S16_LE -r 44100 -c 2 -d 5 /tmp/record.wav
Recording WAVE '/tmp/record.wav' : Signed 16 bit Little Endian, Rate 44100 Hz, Stereo
```
#### 4. 播放音频
接入3.5mm 耳机座子,连接3.5mm圆孔耳机，使用 aply 命令播放音频
```bash
armsom@armsom:~$ aplay -D hw:2,0 /tmp/record.wav
Playing WAVE '/tmp/record.wav' : Signed 16 bit Little Endian, Rate 44100 Hz, Stereo
```

### 3.8 40 PIN

CM7s 提供了一个40pin针脚的GPIO座子，兼容于市面上大部分传感器的应用。

#### wiring-armbian 的方法

下载 wiringOP 的代码到开发板 [wiring-armbian](https://github.com/ArmSoM/wiring-armbian)

- 下载好 wiringOP 代码后，先编译安装，执行如下命令：
```bash
root@armsom:~# cd wiring-armbian/
root@armsom:/wiring-armbian# chmod +x build
root@armsom:/wiring-armbian# ./build 
```

- 编译完成后，更改 /etc/armbian-release 文件内容里版型名称，改为 'armsom-cm7s'后保存退出即可
```bash
root@armsom:~# vi /etc/armbian-release
BOARD=armsom-cm7s
```

- 测试 gpio readall 命令的输出如下
```bash
 root@armsom:/wiring-armbian# gpio readall
 +------+-----+----------+--------+---+  ArmSoM-CM7s +---+--------+----------+-----+------+
 | GPIO | wPi |   Name   |  Mode  | V | Physical | V |  Mode  | Name     | wPi | GPIO |
 +------+-----+----------+--------+---+----++----+---+--------+----------+-----+------+
 |      |     |     3.3V |        |   |  1 || 2  |   |        | 5V       |     |      |
 |   63 |   0 | I2C8_SDA | (null) | 0 |  3 || 4  |   |        | 5V       |     |      |
 |   62 |   1 | I2C8_SCL | (null) | 0 |  5 || 6  |   |        | GND      |     |      |
 |   39 |   2 | GPIO1_A7 |     IN | 1 |  7 || 8  | 1 | ALT10  | UART2_TX | 3   | 13   |
 |      |     |      GND |        |   |  9 || 10 | 1 | ALT10  | UART2_RX | 4   | 14   |
 |  130 |   5 | GPIO4_A2 |     IN | 0 | 11 || 12 | 1 | IN     | GPIO3_B2 | 6   | 106  |
 |   13 |   7 | GPIO4_A3 |  ALT10 | 1 | 13 || 14 |   |        | GND      |     |      |
 |   18 |   8 | GPIO0_C2 |     IN | 1 | 15 || 16 | 0 | IN     | UART6_RX | 9   | 32   |
 |      |     |     3.3V |        |   | 17 || 18 | 0 | IN     | UART6_TX | 10  | 33   |
 |   42 |  11 | SPI_MOSI |     IN | 0 | 19 || 20 |   |        | GND      |     |      |
 |   41 |  12 | SPI_MISO |     IN | 0 | 21 || 22 | 1 | IN     | GPIO1_B0 | 13  | 40   |
 |   43 |  14 | SPI_SCLK |     IN | 0 | 23 || 24 | 1 | IN     | SPI0_CS0 | 15  | 44   |
 |      |     |      GND |        |   | 25 || 26 | 1 | IN     | SPI0_CS1 | 16  | 45   |
 |   57 |  17 | I2C7_SDA | (null) | 0 | 27 || 28 | 0 | (null) | I2C7_SCL | 18  | 56   |
 |   58 |  19 | UART4_TX | (null) | 0 | 29 || 30 |   |        | GND      |     |      |
 |   59 |  20 | UART4_RX | (null) | 0 | 31 || 32 | 1 | IN     | PWM14_M1 | 21  | 138  |
 |  139 |  22 |  CAN1_TX |     IN | 1 | 33 || 34 |   |        | GND      |     |      |
 |   52 |  23 | GPIO1_C4 |  ALT11 | 1 | 35 || 36 | 0 | (null) | GPIO1_D5 | 24  | 61   |
 |   54 |  25 | GPIO1_C6 |     IN | 1 | 37 || 38 | 1 | IN     | UART0_RX | 26  | 20   |
 |      |     |      GND |        |   | 39 || 40 | 1 | IN     | UART0_TX | 27  | 21   |
 +------+-----+----------+--------+---+----++----+---+--------+----------+-----+------+
 | GPIO | wPi |   Name   |  Mode  | V | Physical | V |  Mode  | Name     | wPi | GPIO |
 +------+-----+----------+--------+---+  ArmSoM-CM7s +---+--------+----------+-----+------+
```

- 设置 GPIO 口为输出模式，其中第三个参数需要输入引脚对应的 wPi 的序号

```bash
root@armsom:/wiring-armbian# gpio mode 5 out
```

- 读取对应引脚当前的电平状态
```bash
root@armsom:/wiring-armbian# gpio read 5
0
```

- 设置 GPIO 口输出高电平，设置完后可以使用万用表测量引脚的电压的数值，如果为 3.3v，说明设置高电平成功

```bash
root@armsom:/wiring-armbian# gpio write 5 1
root@armsom:/wiring-armbian# gpio read 5
1
```

- 设置 GPIO 口输出低电平，设置完后可以使用万用表测量引脚的电压的数值，如果为 0v，说明设置低电平成功
```bash
root@armsom:/wiring-armbian# gpio write 5 0
root@armsom:/wiring-armbian# gpio read 5
0
```

- 其他引脚的设置方法类似，只需修改 wPi 的序号为引脚对应的序号即可

### 3.9 RGB LED

CM7s 有一个用户（绿灯）和一个电源指示灯（红灯）。

- 用户灯
  默认情况下为心跳灯，可由用户自行操控。

- 电源指示灯
  默认情况下，其常亮表示系统运行正常。

用户灯可通过命令控制用户灯

```bash
armsom@armsom:~$ echo 0 > /sys/class/leds/led-green-usr/brightness （关闭）
armsom@armsom:~$ echo 1 > /sys/class/leds/led-green-usr/brightness （常亮）
armsom@armsom:~$ echo heartbeat > /sys/class/leds/led-green-usr/trigger （恢复为心跳灯）
```

### 3.10 RTC

- CM7s 板内集成一颗RTC时钟芯片 **LK8563S**，同时 CM7s-IO 上板载了一个VRTC座子，用于接RTC电池。

```bash
root@armsom:~# dmesg | grep -w rtc
[    2.024480] rtc-hym8563 6-0051: rtc information is invalid
[    2.032951] rtc-hym8563 6-0051: registered as rtc0
[    2.033959] rtc-hym8563 6-0051: setting system clock to 2021-01-01T12:00:00 UTC (1609502400)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
//读取RTC芯片当前时间
root@armsom:~# hwclock -r -f /dev/rtc0
2026-04-28 07:26:02.198445+08:00

//查看系统当前时间
root@armsom:~# date
Tue Apr 28 07:26:38 AM CST 2026

//设置系统时间
root@armsom:~# date -s "2026-10-12 10:30:00"
Mon Oct 12 10:30:00 AM CST 2026

//将系统当前时间写入 RTC
root@armsom:~# hwclock -w -f /dev/rtc0

//然后读取 RTC 芯片当前时间
root@armsom:~# hwclock -r -f /dev/rtc0
2026-10-12 10:30:45.494092+08:00
```

- 如果我们接了RTC电池，那么关闭电源后，重新启动CM7s，查看rtc时间,执行下述命令可以发现RTC时间会延续上面设置的时间（相当于RTC没有掉电）。
- 如果我们没有接RTC电池，那么执行下述命令会发现时间又重置了（RTC掉电丢失数据）。

```bash
root@armsom:~# sudo hwclock -r -f /dev/rtc0
2026-04-28 07:26:02.198445+08:00
```

### 3.11 MIPI-CSI
#### 开启摄像头配置
要使用摄像头之前，需要先开启摄像头设备树overlay，分别找到如下两行：
```bash
root@armsom:~# nano /boot/uEnv/uEnvarmsom-cm7s-io.txt
#dtoverlay=/dtb/overlay/rk3588s-armsom-cm7s-io-camera-imx219-cs0-overlay.dtbo
#dtoverlay=/dtb/overlay/rk3588s-armsom-cm7s-io-camera-ov13850-cs1-overlay.dtbo
```
需要使用哪个摄像头，解除注释后保存退出，然后重启即可

#### 基础命令使用
- 我们需要先确认每款摄像头在不同情况下，被注册为的节点名：                      
1. 若同时打开两款摄像头时，一般imx219摄像头为video22，ov13850摄像头为video31。                 
2. 若分别单独打开某款摄像头时，一般都为video11。

- 查看拓扑，同时打开两个摄像头时，一般imx219摄像头为media0，ov13850摄像头为media1

```bash
root@armsom:/# media-ctl -d /dev/media1 -p
```

查看video节点支持的视频格式
```bash
root@armsom:~# v4l2-ctl -d /dev/video31 --get-fmt-video
Format Video Capture Multiplanar:
        Width/Height      : 2112/1568
        Pixel Format      : 'NV12' (Y/UV 4:2:0)
        Field             : None
        Number of planes  : 1
        Flags             :
        Colorspace        : sRGB
        Transfer Function : Rec. 709
        YCbCr/HSV Encoding: Rec. 709
        Quantization      : Full Range
        Plane 0           :
           Bytes per Line : 2112
           Size Image     : 4967424
```

#### 安装 gst-launch-1.0
- 检查系统是否集成 gst-launch-1.0，如果没有，需要先安装
```bash
root@armsom:/# apt-get update
root@armsom:/# apt-get install gstreamer1.0*
```

#### 使用 ArmSoM camera-module1

摄像头采用[camera-module1](./armsom-camera-module1)模组，摄像头模组连接并上电后可以查看启动日志。

```bash
root@armsom:/# dmesg | grep ov13850
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
下述命令中的 /dev/video31 要根据实际注册的video节点来替换
- 使用v4l2-ctl进行抓图
```bash
// video31 或 video11
root@armsom:/# systemctl restart rkaiq_3A.service
root@armsom:/# v4l2-ctl -d /dev/video31 --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=/nv12.bin --stream-count=1 --stream-poll
```

- 预览（需接显示器实时预览）
```bash
// video31 或 video11
root@armsom:/# gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
```
![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg)


#### 使用 Raspberry Pi Camera Module 2

摄像头采用[Raspberry Pi Camera Module 2](https://www.raspberrypi.com/products/camera-module-v2/)模组，摄像头模组连接并上电后可以查看启动日志。

```bash
root@armsom:/# dmesg | grep imx219
[    4.049680] imx219 4-0010: driver version: 00.01.02
[    4.074430] imx219 4-0010: Model ID 0x0219, Lot ID 0x258b89, Chip ID 0x056c
[    4.074460] imx219 4-0010: Consider updating driver imx219 to match on endpoints
[    4.074477] rockchip-csi2-dphy csi2-dphy4: dphy4 matches m01_b_imx219 4-0010:bus type 5
```
确认驱动已加载后，运行以下命令拍照或录像，并实时预览。

- 拍照
```bash
// video22 或 video11
root@armsom:~# GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/video22 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=3280,height=2464 ! jpegenc ! multifilesink location=photo.jpg
```         

- 拍摄视频
```bash
// video22 或 video11
root@armsom:~# GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video22 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=3280, height=2464, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/tmp/video.mp4
```  

- 预览（需接显示器实时预览）
```bash
// video22 或 video11
root@armsom:~# GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=3280,height=2464, framerate=30/1 ! xvimagesink
``` 

:::tip
由于镜像版本差异，某些版本镜像需手动安装 gstreamer1.0，这类情况如果使用上述命令抓图报错，可以去掉 GST_V4L2SRC_MAX_RESOLUTION=3280x2464 前缀，直接抓图即可
:::

### 3.12 MIPI DSI

CM7s MIPI-DSI 分辨率最高分辨率可达 2K@60Hz

1. 按照下图将连接好排线

![cm5-io-display-10-hd](/img/cm/cm5-io-display-10-hd.png)

2. linux 镜像默认是没有打开 mipi lcd 屏幕的配置的，如果需要使用 mipi lcd 屏幕，需要手动打开

```bash
root@armsom:~# nano /boot/uEnv/uEnvarmsom-cm7s-io.txt
#dtoverlay=/dtb/overlay/rk3588s-armsom-cm7s-io-display-1200x1900-10.1hd-overlay.dtbo
```
将此行注释解除后保存退出，随后重启，能看到lcd屏幕点亮即可

## 产品证书

### CE / FCC / RoHS

## 供货声明

ArmSoM-CM7s 将至少生产到 2034 年 8 月。

## 配件

我们为 ArmSoM-CM7s-IO 设计的官方配件旨在帮助您从计算机获得最佳性能。

<div class="cards">
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

<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Camera-module1</h2>
        <p>camera-module1适用OV13850，是低功耗相机模块</p>
    </div>
</div>
</a>
</div>

## 样品购买

ArmSoM 独立站: [https://www.armsom.org/product-page/cm7s](https://www.armsom.org/product-page/cm7s)

ArmSoM 速卖通官方店: [https://aliexpress.ru/item/1005013244630755.html?gatewayAdapt=glo2rus&sku_id=12000060657514869](https://aliexpress.ru/item/1005013244630755.html?gatewayAdapt=glo2rus&sku_id=12000060657514869) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=1074292029401](https://item.taobao.com/item.htm?id=1074292029401)

OEM&ODM,  请联系: sales@armsom.org

## 专家视角

<!-- - [itsfoss ArmSoM-CM5](https://itsfoss.com/armsom-cm5)：ArmSoM CM7s Powerful Replacement for Raspberry Pi CM4
- [Technically Unsure](https://www.youtube.com/watch?v=pfsBDO3XehA&list=PLtGrcSFVfrfRbFqx8nbtYvVVwbHp_Nza4)：ArmSoM CM5 | 能否超越树莓派 CM5？
- [Platima Tinkers](https://www.youtube.com/watch?v=p55ehXBBLPE)：ArmSoM CM5 评测：RK3576 计算模块，真正兼容 CM4
- [sbc compare](https://sbc.compare/83-armsom-cm5-8gb): CM5  Benchmark Comparison on sbc.compare -->

## 用户案例

<!-- - [edge machine learning](https://www.armsom.org/post/accelerating-conservation-science-with-armsom-cm5-som): edge machine learning -->


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