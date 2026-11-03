---
description: ArmSoM-CM5 是一款计算机模块，采用Rockchip RK3576第二代8nm高性能AIOT平台，集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器，6 TOPS算力NPU，最大可配16GB大内存。支持4K视频编解码，拥有丰富的接口，支持多种操作系统。
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "CM5"
sidebar_position: 5
slug: /armsom-cm5
image: /img/cm/cm5.png
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# ArmSoM-CM5 产品简介

让我们在 5 分钟内了解 ArmSoM-CM5

<nav className="armsom-doc-shortcuts" aria-label="章节快捷导航"><a href="#doc-section-1">CM5 简介</a><a href="#doc-section-2">使用手册</a><a href="#doc-section-3">CM5 硬件信息</a><a href="#cm5-io">CM5-IO 简介</a><a href="#cm5-io-doc-section-1">CM5-IO 硬件信息</a><a href="#doc-section-4">开发资料</a></nav>

<span id="doc-section-1" className="armsom-section-anchor" />

## CM5 简介 {#简介}

ArmSoM-CM5 是一款计算机模块，采用Rockchip RK3576第二代8nm高性能AIOT平台，集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器，6 TOPS算力NPU，最大可配16GB大内存。支持4K视频编解码，拥有丰富的接口，支持多种操作系统。

![ArmSoM-CM5](/img/cm/cm5.png)

<div className="armsom-image-caption">ArmSoM-CM5</div>


:::tip Rockchip RK3576
- [ArmSoM-Sige5](./armsom-sige5) 单板计算机;
- [ArmSoM-CM5](./armsom-cm5) RK3576 CM5计算模组, [ArmSoM-CM5-IO](#cm5-io) CM5配套IO板;

依托强大的生态系统以及各式各样的扩展配件，ArmSoM 可以帮助用户轻松实现从创意到原型再到批量生产的交付，是创客、梦想家、业余爱好者的理想创意平台。
:::

:::tip
ArmSoM-CM5 v1.2 的 Pin 21 存在无法正常工作的问题，已在 v1.3 中修复。目前在售及后续发售的板卡均为 v1.3 或更高版本，请放心购买使用。后续我们将推出 CM5 v2.0（LPDDR4X 版本），以适配不同的存储价格情况。
:::

### 关键参数

- **SOC**：瑞芯微 RK3576
- **CPU**：集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器。
- **GPU**：ARM Mali G52 MC3 GPU。
- **NPU**：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算。
- **VPU/编解码**：
  - **硬解码**：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps,高质量JPEG解码器最高4K@60fps。
  - **硬编码**：支持H.264和H.265，JPEG最高4K@60fps。
- **RAM**：2/4/8/16GB 32bit LPDDR5 (V1.3) / LPDDR4X (V2.0)，默认8GB，RK3576 最大支持16GB。
- **Flash**：32/64/128GB eMMC，默认eMMC 64GB。
- **WIFI/BT**:  板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 [syn43752](https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo)
- **工作电压**：4.5V–5.5V
- **工作温度**：0℃ ~ 80℃
- **重量**：12g
- **pcb**: 10层2阶
- **尺寸**：
    - CM5: 55 x 40 x 4.9 毫米
    - CM5-IO: 100 x 80 x 29 毫米 (3.94 x 3.15 x 1.14 英寸)

<span id="doc-section-2" className="armsom-section-anchor" />

## 使用手册

<a href="#cm5-io-使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>CM5使用手册</h2>
            <p>如何开始使用你的CM5</p>
        </div>
    </div>
</a>

<span id="doc-section-3" className="armsom-section-anchor" />

## CM5 硬件信息 {#硬件信息}

### 硬件接口

![ArmSoM-CM5-front & back](/img/cm/armsom-cm5-front&back1.jpg)

<div className="armsom-image-caption">ArmSoM-CM5-front &amp; back</div>

![ArmSoM-CM5-rpi-cm4-io](/img/cm/cm5-rpi-cm4-io.png)

<div className="armsom-image-caption">ArmSoM-CM5-rpi-cm4-io</div>


:::tip
- 设计为板对板连接器
- 由于 RK3576 芯片 PIN 限制，仅支持 1 HDMI 和 1 DSI，Raspberry Pi CM4 多支持 2 HDMI、2 DSI
- AmrSoM-CM5 比 Raspberry Pi CM4 多一组PCIE，USB3

您可以使用 Raspberry Pi CM4 底板。
:::

### ArmSoM CM5 vs 树莓派 CM4
以下是 ArmSoM CM5 和 树莓派 CM4 的规格对比表格：

| 规格                   | ArmSoM CM5                        | 树莓派 CM4                     |
|------------------------|----------------------------------|--------------------------------|
| **处理器**             | **RK3576 SoC**                      | Broadcom BCM2711               |
| **CPU架构**            | **四核 ARM Cortex-A72 & 四核Cortex-A53** | 四核 ARM Cortex-A72            |
| **GPU**                | **ARM Mali G52 MC3 GPU**                        | VideoCore VI                   |
| **内存**               | **最高支持 16GB LPDDR5 (V1.3) / LPDDR4X (V2.0)**             | 1GB、2GB、4GB、8GB LPDDR4       |
| **存储**               | eMMC 存储（可选容量）            | 无内置存储，支持microSD卡       |
| **显示输出**           | 1x HDMI 2.1, 1x DP               | 2x HDMI 2.0                    |
| **视频分辨率**         | **支持4K@120fps**                     | 支持4K@30fps                   |
| **网络接口**           | 1x 千兆以太网接口                 | 1x 千兆以太网接口               |
| **USB接口**            | **1x USB3.0，1x USB2.0**          | 1xUSB2.0       |
| **GPIO**               | 40针 GPIO                        | 40针 GPIO                      |
| **扩展性**             | **2x PCIE/SATA/USB30_SS**           | 1x PCIe 2.0         |
| **相机接口**           | 1x 4通道 MIPI CSI, 1x 2通道 MIPI CSI | 1x 4通道 MIPI CSI, 1x 2通道 MIPI CSI                   |
| **显示接口**           | 1x 4通道 MIPI DSI                | 2x 4通道 MIPI DSI                    |
| **电源输入**           | 5V                | 5V                          |
| **尺寸**               | 55mm x 40mm                      | 55mm x 40mm                    |
| **操作系统支持**       | Debian, Android, Ubuntu, Armbian等         | Raspberry Pi OS, Ubuntu, 其他  |
| **主要用途**           | AI 开发、嵌入式系统、工业控制、DIY 项目、教育、物联网    | DIY 项目、教育、物联网等       |

### 产品框图

![ArmSoM-CM5-product](/img/cm/cm5-product.png)

<div className="armsom-image-caption">ArmSoM-CM5-product</div>


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
            <th><li>RockChip RK3576</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3576 四核 Cortex-A72@ 2.2GHz 和四核 Cortex-A53@ 1.8GHz，8纳米制程</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali G52 MC3 GPU</li><li>完全兼容 OpenGL ES 1.1、2.0 和 3.2、OpenCL 高达 2.0 和 Vulkan 1.1。带有 MMU 的专用 2D 硬件引擎将最大限度地提高显示性能并提供非常流畅的操作。</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8</li><li>支持 INT4,INT8, INT16, FP16, BF16 and TF32 混合运算</li><li>支持深度学习框架：TensorFlow、Caffe、Tflite、Pytorch、Onnx NNAndroid NN等。</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps，高质量JPEG解码器最高4K@60fps。</li><li>硬编码：支持H.264和H.265，JPEG最高4K@60fps</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>ISP，1600万像素</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>2GB/4GB/8GB/16GB（最高可配 16GB ）32bit LPDDR5 (V1.3) / LPDDR4X (V2.0)，默认LPDDR5 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32/64/128GB eMMC，默认eMMC 64GB</li><li>支持MicroSD卡扩展</li><li>M.2 M-KEY Socket：PCIe2.1 NVMe SSD</li></th>
        </tr>
        <tr>
            <th>显示</th>
            <th><li>1x HDMI OUT2.1，支持 4K@120fps</li><li>1x MIPI DSI 分辨率最高可达 2K@60fps</li><li>1x DP1.4 分辨率最高可达 4K@120fps</li></th>
        </tr>
        <tr>
            <th>摄像头</th>
            <th><li>1x 4Lanes MIPI CSI，每线最高 2.5Gbps</li><li>1x 2Lanes MIPI CSI，每线最高 2.5Gbps</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th>
              <li>1x GMAC，提供 RGMII / RMII 接口引出</li>
               <li>板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 <a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a></li>
            </th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>2x PCIe 2.0 1-lans</li></th>
        </tr>
         <tr>
            <th>USB</th>
            <th><li>1x USB 3.0</li><li>1x USB 2.0</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>SPDIF_Tx x1</li><li>AUDIO_R/L x1</li><li>i2s x1</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1</li><li>FAN x1</li><li>RTC x1</li></th>
        </tr>
    </tbody>
</table>

### RK3576框图
<details>
    <summary>
        RK3576 框图
    </summary>
    <img
  src="/img/sige/rk3576.png"
  alt="rk3576 block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

![ArmSoM-cm5-pinlist](/img/cm/cm5-pinlist.png)

<div className="armsom-image-caption">ArmSoM-cm5-pinlist</div>


<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>ArmSoM-CM5(RK3576)&Raspberry-CM4-CM5 Pinlist对比表</span>
</a>
<br/>

### 电气特性
以下是 ArmSoM-CM5 和 ArmSoM-CM5-IO 在不同状态下的功耗记录表：

| 序号 | 产品名称 | 硬件方案 | 输入电压（DC） | 待机功耗（OS 界面） | 关机功耗 | 最大功耗（CPU 压力测试） |
| --- | --- | --- | --- | --- | --- | --- |
| 3 | CM5 | RK3576 | 4.0 V | 350 mA | 0.1 mA | 1040 mA |
| 4 | CM5-IO | RK3576 | 12.0 V | 480 mA | 27 mA | 735 mA |


## CM5-IO 产品简介 {#cm5-io}

CM5-IO是 ArmSoM CM5的 IO 板，尺寸为 100x80x29 毫米，它是一款专为创客、学习者和开发者设计的微型 AI 计算机，能够快速将 AI 技术应用于各种智能设备。

<span id="cm5-io-doc-section-1" className="armsom-section-anchor" />

## CM5-IO 硬件信息 {#cm5-io-硬件信息}

### 硬件规格 {#cm5-io-硬件规格}

CM5-IO板是专为CM5计算模块设计的扩展板，旨在帮助完成系统和嵌入式板开发。

- 1x HDMI输出, 1x Typec(DP)输出
- 4x USB 3.0 Type-A
- 支持 PoE 的千兆以太网 RJ45
- 通过USB Type-C进行固件闪存和设备模式
- GPIO：40针扩展头
- 电源连接器：DC Barrel插孔，用于12V电源输入，外径5.5mm,内径2.0mm,内正外负
- 扩展：M.2（M键，支持PCIe）、microSD
- MIPI DSI：1x 4通道MIPI DSI，支持最高4K@60fps（x4）
- MIPI CSI0：1x 4通道MIPI CSI，每条通道最高2.5Gbps
- MIPI CSI1：1x 2通道MIPI CSI，每条通道最高2.5Gbps
- 其他：HPOUT,FAN,VRTC
- 电压范围：5V-23V
- 尺寸：100 x 80 x 29 毫米 (3.94 x 3.15 x 1.14 英寸)
- 重量:  65.2g

### 硬件接口 {#cm5-io-硬件接口}

![ArmSoM-CM5-IO](/img/cm/cm5-io-layout.png)

<div className="armsom-image-caption">ArmSoM-CM5-IO</div>


:::tip
CM5-IO Board 使用12V DC供电。
:::
### 引脚定义 {#cm5-io-引脚定义}

<details>
    <summary>
       40-PIN 座子
    </summary>
<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
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
| 98 |  CAN1_TX_M3 / SPI3_MISO_M0 / UART3_CTSN_M0 / SPDIF_RX1_M1 /  GPIO3_A2_d  | <div className='green'>21</div>  | <div className='green'>22</div> | SARADC_VIN4 |  - |
| 96 |  I2C7_SCL_M1 / SPI3_CLK_M0 / UART3_TX_M0 / GPIO3_A0_d  | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO3_A3_d / CAN1_RX_M3 / SPI3_CSN0_M0  / UART3_RTSN_M0 / SPDIF_TX1_M1 | 99|
|- |  GND | <div className='black'>25</div>  | <div className='green'>26</div> | - | - |
|  111 |  I2C4_SDA_M3 / UART2_RX_M2 / GPIO3_B7_d |  <div className='green'>27</div>  | <div className='green'>28</div> |GPIO2_D6_d / PWM2_CH6_M2 / SAI3_MCLK_M2  | 94 |
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
0.8mm 连接器(CN32)

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
            <h2>CM5 kernel</h2>
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
            <h2>CM5 uboot</h2>
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

### 官方镜像

ArmSoM 提供以下官方系统镜像，请在网盘中按产品型号选择所需版本。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤📤

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>百度网盘链接</span>
</a>

| 标识 | 系统镜像 | 下载入口 |
|:--------: | :---------: | :--------:  | 
| ![Debian 12](/img/sige/debian12-1.png) | **适用于 CM5 的 Debian 12：** <br/>Debian 12（Bookworm）系统镜像。请在网盘中选择对应产品文件夹，镜像版本及桌面类型以实际文件为准。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) |
|![Android](/img/sige/android.png) | **Android14 for CM5-IO :** <br/>最新的操作系统升级，让您的设备更加个性化、更安全、更易访问。照片质量提升、新主题和 AI 生成的壁纸。隐私更新，保护您的健康、安全和数据。并扩展了无障碍功能。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)  |
| ![Ubuntu](/img/sige/ubuntu.png) | **适用于 CM5 的 Ubuntu 22.04 LTS：** <br/>Ubuntu 22.04 LTS（Jammy Jellyfish）系统镜像。请在网盘中按产品型号选择对应镜像。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) |

### 第三方镜像

| 标识 | 介绍 | 固件下载 |
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | **适用于 CM5 的 Armbian：** <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。 | **CM5-IO**:[Armbian 固件下载](https://armbian.com/boards/armsom-cm5-io)   <br/>  **CM5-RPI-CM4-IO**:[Armbian 固件下载](https://armbian.com/boards/armsom-cm5-rpi-cm4-io) |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | **适用于 CM5 的 ubuntu-rockchip：** <br/> 该项目旨在为Rockchip RK3588设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。 | [Ubuntu-Rockchip 固件下载](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### 硬件资料

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>CM5 硬件资料</span>
</a>
<br/>

[百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) - 引脚功能表格下载

<div class="cards">
    <a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>CM5</h2>
                <p>SCH,2D</p>
            </div>
        </div>
    </a>
    <a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📗</i>
            </div>
            <div class="content">
                <h2>CM5-IO</h2>
                <p>SCH,PCB,2D,SMD</p>
            </div>
        </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
            <p>ic,connector datasheet</p>
        </div>
    </div>
</a>
</div>

<span id="cm5-io-doc-section-2" className="armsom-section-anchor" />

### CM5-IO 开发资料 {#cm5-io-开发资料}

#### SDK源码 {#cm5-io-sdk源码}

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

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>Android14源码</h2>
            <p>Improved Rockchip Android</p>
        </div>
    </div>
</a>

<a href="https://github.com/ArmSoM/rockchip-kernel" class="card-link">
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

<a href="https://github.com/ArmSoM/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>CM5-IO uboot</h2>
            <p>ArmSoM/u-boot</p>
        </div>
    </div>
</a>
</div>

#### 官方镜像 {#cm5-io-官方镜像}

ArmSoM 提供以下官方系统镜像，请在网盘中按产品型号选择所需版本。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>百度网盘链接</span>
</a>

| 标识 | 系统镜像 | 下载入口 |
|:--------: | :---------: | :--------:  | 
| ![Debian 12](/img/sige/debian12-1.png) | **适用于 CM5-IO 的 Debian 12：** <br/>Debian 12（Bookworm）系统镜像。请在网盘中选择对应产品文件夹，镜像版本及桌面类型以实际文件为准。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) |
| ![Ubuntu](/img/sige/ubuntu.png) | **适用于 CM5-IO 的 Ubuntu 22.04 LTS：** <br/>Ubuntu 22.04 LTS（Jammy Jellyfish）系统镜像。请在网盘中按产品型号选择对应镜像。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) |
|![Android](/img/sige/android.png) | **Android14 for cm5 :** <br/>最新的操作系统升级，让您的设备更加个性化、更安全、更易访问。照片质量提升、新主题和 AI 生成的壁纸。隐私更新，保护您的健康、安全和数据。并扩展了无障碍功能。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)  |

#### 第三方镜像 {#cm5-io-第三方镜像}

| 标识 | 介绍 | 固件下载 |
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | **适用于 cm5 的 Armbian：** <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。 | [Armbian 固件下载](https://armbian.com/boards/armsom-cm5-io)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | **适用于 cm5 的 ubuntu-rockchip：** <br/> 该项目旨在为Rockchip RK3588设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。 | [Ubuntu-Rockchip 固件下载](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

#### 硬件资料 {#cm5-io-硬件资料}

获取CM5-IO开发套件原理图、PCB、DXF等硬件资料，快速投入开发

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>CM5 硬件资料</span>
</a>
<br/>

[百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) - 引脚功能表格下载

<div class="cards">
    <a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>CM5</h2>
                <p>SCH,2D</p>
            </div>
        </div>
    </a>
    <a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📗</i>
            </div>
            <div class="content">
                <h2>CM5-IO</h2>
                <p>SCH,PCB,2D,SMD</p>
            </div>
        </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
            <p>ic,connector datasheet</p>
        </div>
    </div>
</a>
</div>

## CM5 使用手册 {#cm5-manual}

<span id="cm5-io-doc-section-3" className="armsom-section-anchor" />

### 入门准备 {#cm5-io-使用手册}

在开始使用 CM5-IO 之前，请准备好以下物品。

:::tip
下文用 CM5 Kit 表示 CM5 + CM5-IO
:::

#### 工具准备 {#cm5-io-工具准备}
* 电源
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在CM5 kit上写入镜像，您需要Type-C数据线连接 CM5 kit和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：

您可以将 CM5 Kit 设置为带有桌面的交互式计算机，也可以将其设置为仅可通过网络访问的无头计算机。要将 CM5 Kit 设置为Headless计算机，您在初次安装操作系统时配置主机名、用户帐户、网络连接和 SSH 。如果您想直接使用 CM5 Kit，则需要以下附加配件：

**可选选项**
* 键盘 & 鼠标
* HDMI显示器和HDMI线
* Ethernet 线（网线）
* 摄像头模块
  * 4lan 摄像头推荐使用 [camera-module1](./armsom-camera-module1) 模组。
  * 2lan 摄像头使用树莓派 [camera-module-v2](https://www.raspberrypi.com/products/camera-module-v2/) 
* LCD显示屏
  * 推荐使用 [Display 10 HD](./armsom-display-10-hd)。
* 音频线, 0.8mm立式插座。
* RTC 电池, 0.8mm立式插座。
* 风扇，0.8mm立式插座。

#### 电源 {#cm5-io-电源}

* 支持 DC 12V适配器，2.5mm

#### 烧录方式选择 {#cm5-io-烧录方式选择}
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


<span id="cm5-io-doc-section-4" className="armsom-section-anchor" />

### 接口使用 {#cm5-io-接口使用}

如果您是首次使用 CM5 Kit，请先熟悉下各产品[硬件接口](#cm5-io-硬件接口)，以便于您更好的理解后续的内容。

#### 调试串口 {#cm5-io-调试串口}

如下所示连接 USB 转 TTL 串口线：

![cm5io-debug](/img/cm/cm5io-debug.png)

<div className="armsom-image-caption">cm5io-debug</div>


| CM5-IO       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |

#### 以太网口 {#cm5-io-以太网口}

1. 首先将网线的一端插入 CM5 Kit 的以太网接口，网线的另一端接入路由器，并确保
网络是畅通的
2. 系统启动后会通过 DHCP 自动给以太网卡分配 IP 地址，不需要其他任何配置
3. 在CM5 Kit的 Linux 系统中查看 IP 地址的命令如下所示

```
root@armsom-cm5:/# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: end0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether c6:9c:b0:7e:2b:1f brd ff:ff:ff:ff:ff:ff permaddr aa:a6:84:1b:0d:21
    inet 192.168.10.78/24 brd 192.168.10.255 scope global dynamic noprefixroute enP4p65s0
       valid_lft 86221sec preferred_lft 86221sec
    inet6 fe80::5bb0:d96f:926d:b334/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
3: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether cc:64:1a:33:b5:40 brd ff:ff:ff:ff:ff:ff
4: wlan1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether ce:64:1a:33:b5:40 brd ff:ff:ff:ff:ff:ff
```

CM5 Kit 启动后查看 IP 地址有三种方法：

- 接 HDMI 显示器，然后登录系统使用终端输入 ip a 命令查看 IP 地址
- 接[调试串口](#cm5-io-调试串口)终端输入 ip a 命令来查看 IP 地址
- 如果没有调试串口，也没有 HDMI 显示器，还可以通过路由器的管理界面来查看 CM5 Kit 网口的 IP 地址。不过这种方法经常有人会无法正常看到CM5 Kit 的 IP 地址。如果看不到，调试方法如下所示：
    - 首先检查 Linux 系统是否已经正常启动，如果CM5 Kit的绿灯常亮，一般是正常启动了。
    - 检查网线有没有插紧，或者换根网线试下。
    - 换个路由器试下，路由器的问题有遇到过很多，比如路由器无法正常分配IP 地址，或者已正常分配 IP 地址但在路由器中看不到。
    - 如果没有路由器可换就只能连接 HDMI 显示器或者使用调试串口来查看 IP地址。

:::tip
另外需要注意的是CM5 Kit  DHCP 自动分配 IP 地址是不需要任何设置的。
:::

4. 使用工具 ping 判断是否连通网络。

测试网络连通性的命令如下，ping 命令可以通过 Ctrl+C 快捷键来中断运行
```bash
root@armsom-cm5:~$ ping www.baidu.com
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

#### WIFI {#cm5-io-wifi}

CM5 Kit是onboard WIFI模块，不需要外接网口设备，使用[标准4代天线](https://www.armsom.org/product-page/sige7-metal-shell)

**服务器版镜像通过命令连接 WIFI**

1. 先登录 linux 系统，有下面三种方式
 - 如果CM5 Kit 连接了网线，可以通过 ssh 远程登录 linux 系统
 - 如果CM5 Kit 连接好了调试串口，可以使用串口终端登录 linux 系统
 - 如果连接了CM5 Kit 到HDMI显示器，可以通过HDMI显示的终端登录到linux
系统

2. 使用 nmcli dev wifi 命令扫描周围的 WIFI 热点

```
# 1. Open the WIFI
root@armsom-cm5:/# nmcli r wifi on
# 2. Scan WIFI
root@armsom-cm5:/# nmcli dev wifi
# 3. Connect to WIFI network
root@armsom-cm5:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

![wifi-nmcli-scan](/img/general-tutorial/wifi-nmcli-scan.png)

<div className="armsom-image-caption">wifi-nmcli-scan</div>


3. 使用 nmcli 命令连接扫描到的 WIFI

 - wifi_name 换成需要连接的 WIFI 热点的名字
 - wifi_passwd 换成需要连接的 WIFI 热点的密码

```
root@armsom-cm5:~$ nmcli dev wifi connect "wifi_name" password "wifi_passwd"
Device 'wlan0' successfully activated with "wlan0b6d10bba-e1d5-4b6d-a17f-7d5ab44bbb6f"。
```

4. 通过 ip addr show wlan0 命令可以查看 wifi 的 IP 地址

```
root@armsom-cm5:~$ ip addr show wlan0
4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
    inet 192.168.10.9/24 brd 192.168.10.255 scope global dynamic noprefixroute wlan0
       valid_lft 86321sec preferred_lft 86321sec
    inet6 fe80::850d:3119:e0:afa3/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

5. 使用 ping 命令可以测试 wifi 网络的连通性，ping 命令可以通过 Ctrl+C 快捷键来中断运行

```
root@armsom-cm5:~$ ping www.baidu.com
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
root@armsom-cm5:~$ nmtui
```

3. 选择 Activate a connect 后回车

![wifi-nmcli-connect](/img/general-tutorial/wifi-nmcli-connect.png)

<div className="armsom-image-caption">wifi-nmcli-connect</div>


4. 选择想要连接的 WIFI 热点，输入密码。WIFI 连接成功后会在已连接的 WIFI 名称前显示一个“*”

![wifi-nmcli-success](/img/general-tutorial/wifi-nmcli-success.png)

<div className="armsom-image-caption">wifi-nmcli-success</div>


5. 通过 ip addr show wlan0 命令可以查看 wifi 的 IP 地址

```
root@armsom-cm5:~$ ip addr show wlan0
4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
    inet 192.168.10.9/24 brd 192.168.10.255 scope global dynamic noprefixroute wlan0
       valid_lft 86316sec preferred_lft 86316sec
    inet6 fe80::a422:3494:3147:92d/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

6. 使用 ping 命令可以测试 wifi 网络的连通性，ping 命令可以通过 Ctrl+C 快捷键来中断运行

```bash
root@armsom-cm5:~$ ping www.baidu.com
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


#### BT {#cm5-io-bt}

```
# 1. 激活蓝牙
root@armsom-cm5:/# service bluetooth start
# 2. 进入bluetoothctl
root@armsom-cm5:/# bluetoothctl
# 3. 输入以下命令即可连接
root@armsom-cm5:/# power on
root@armsom-cm5:/# agent on
root@armsom-cm5:/# default-agent
root@armsom-cm5:/# scan on
root@armsom-cm5:/# pair yourDeviceMAC
```

#### HDMI {#cm5-io-hdmi}

CM5 Kit 最高支持hdmi 4Kp120

1. 使用 HDMI 线连接 CM5 Kit 和 HDMI 显示器
2. 启动 linux 系统后如果 HDMI 显示器有图像输出说明 HDMI 接口使用正常

:::tip
注意，很多笔记本电脑虽然带有 HDMI 接口，但是笔记本的 HDMI 接口一般只有输出功能，并没有 HDMI in 的功能，也就是说并不能将其他设备的 HDMI 输出显示到笔记本的屏幕上。
当想把开发板的 HDMI 接到笔记本电脑 HDMI 接口时，请先确认清楚您的笔记本是支持 HDMI in 的功能。
当 HDMI 没有显示的时候，请先检查使用的系统是否是带桌面的版本，如果是服务器版本只能看到终端
:::

##### HDMI 转 VGA 显示测试 {#cm5-io-hdmi-转-vga-显示测试}
1. 需要准备下面的配件
- HDMI 转 VGA 转换器
- 一根 VGA 线，支持 VGA 接口的显示器

2. HDMI 转 VGA 显示测试如下所示

![sige-hdmi-vga](/img/general-tutorial/sige-hdmi-vga.jpg)

<div className="armsom-image-caption">sige-hdmi-vga</div>


:::tip
使用 HDMI 转 VGA 显示时，CM5 Kit 和Linux系统是不需要做任何设置的，只需要开发板 HDMI 接口能正常显示就可以了。所以如果测试有问题，请检查 HDMI 转 VGA 转换器、VGA 线以及显示器是否有问题。
:::

#### USB {#cm5-io-usb}

##### 连接 USB 鼠标或键盘测试 {#cm5-io-连接-usb-鼠标或键盘测试}
1. 将 USB 接口的键盘插入CM5 Kit的 USB 接口中
2. 连接CM5 Kit到 HDMI 显示器
3. 如果鼠标或键盘能正常操作系统说明 USB 接口使用正常（鼠标只有在桌面版的系统中才能使用）

##### 连接 USB 存储设备测试 {#cm5-io-连接-usb-存储设备测试}
1. 首先将 U 盘或者 USB 移动硬盘插入 CM5 Kit的 USB 接口中
2. 执行下面的命令如果能看到 sdX 的输出说明 U 盘识别成功
```
root@armsom-cm5:/# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0  122880000 sda
```
3. 使用 mount 命令可以将 U 盘挂载到/mnt 中，然后就能查看 U 盘中的文件了

```
root@armsom-cm5:/# sudo mount /dev/sda1 /test/
```

4. 挂载完后通过 df -h 命令就能查看 U 盘的容量使用情况和挂载点

```
root@armsom-cm5:/test# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /test
```

##### USB 摄像头 {#cm5-io-usb-摄像头}

1. 准备一个支持 UVC 协议的 USB 摄像头，然后将USB 摄像头插入到 CM5 Kit产品的 USB 接口中

2. 通过 v4l2-ctl 命令可以看到 USB 摄像头的设备节点信息为/dev/video0

```
root@armsom-cm5:/# v4l2-ctl --list-devices
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
root@armsom-cm5:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;
```

命令拍照:
```bash
root@armsom-cm5:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=/home/armsom/test.jpg;
```

命令拍摄视频:
```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/armsom/test.mp4
```

![armsom-sige7-gst](/img/sige/armsom-sige7-gst.png)

<div className="armsom-image-caption">armsom-sige7-gst</div>


#### M.2 Key M {#cm5-io-m2-key-m}

CM5 Kit 提供 M.2 Key M 连接器：

- 产品的背面有一个带有M.2 Key M 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

```
root@armsom-cm5:/# mkdir temp
root@armsom-cm5:/# mount /dev/nvme0n1 temp
```

#### 音频 {#cm5-io-音频}

查看系统中的声卡。

```bash
root@armsom-cm5:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipes8388c [rockchip,es8388-codec], device 0: 2a610000.sai-ES8323 HiFi ES8323 HiFi-0 [2a610000.sai-ES8323 HiFi ES8323 HiFi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: rockchipdp0 [rockchip-dp0], device 0: rockchip-dp0 spdif-hifi-0 [rockchip-dp0 spdif-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchiphdmi [rockchip-hdmi], device 0: rockchip-hdmi i2s-hifi-0 [rockchip-hdmi i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

播放音频前，需要先将相关音频控件开关打开
```bash
root@armsom-cm5:/# amixer -c 0 cset numid=72 on
root@armsom-cm5:/# amixer -c 0 cset numid=73 on
```

播放音乐

```bash
root@armsom-cm5:/# aplay -D hw:0,0 /usr/share/sounds/alsa/Front_Right.wav
```

#### FAN {#cm5-io-fan}

CM5 Kit 配备一个 5V 的风扇，使用 0.8mm 的连接器

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
root@armsom-cm5:/# cat /sys/class/hwmon/hwmon9/pwm1
```

#### 40 PIN {#cm5-io-40-pin}

CM5 Kit 提供了一个40pin针脚的GPIO座子，兼容于市面上大部分传感器的应用。

#### RGB LED {#cm5-io-rgb-led}

CM5 Kit 具有 LED 绿灯。

- 用户绿灯
  默认情况下，其常亮表示系统运行正常。


#### RTC {#cm5-io-rtc}

- CM5 Kit配备了一颗RTC IC **LK8563S**。
- 首先，使用2pin的排针接口，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc LK8563S 设备已创建

```bash
root@armsom-cm5:/# dmesg | grep rtc
[    3.476710] rtc-hym8563 2-0051: rtc information is valid
[    3.488534] rtc-hym8563 2-0051: registered as rtc0
[    3.490109] rtc-hym8563 2-0051: setting system clock to 2024-06-16T09:45:52 UTC (1718531152)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
root@armsom-cm5:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
root@armsom-cm5:/# date
2023年 11月 03日 星期五 10:33:12 UTC
root@armsom-cm5:/# hwclock -w
root@armsom-cm5:/# hwclock -r
root@armsom-cm5:/# poweroff
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并启动Sige7，检查RTC是否与系统时钟同步

```bash
root@armsom-cm5:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
root@armsom-cm5:/# date
2023年 11月 03日 星期五 10:36:01 UTC
```

#### MIPI-CSI {#cm5-io-mipi-csi}
##### 开启摄像头配置 {#cm5-io-开启摄像头配置}
要使用摄像头之前，需要先开启摄像头设备树overlay，分别找到如下两行：
```bash
root@armsom:~# nano /boot/uEnv/uEnvarmsom-cm5-io.txt
#dtoverlay=/dtb/overlay/rk3576-armsom-cm5-io-camera-imx219-cs0-overlay.dtbo
#dtoverlay=/dtb/overlay/rk3576-armsom-cm5-io-camera-ov13850-cs1-overlay.dtbo
```
需要使用哪个摄像头，解除注释后保存退出，然后重启即可

##### 基础命令使用 {#cm5-io-基础命令使用}
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

##### 安装 gst-launch-1.0 {#cm5-io-安装-gst-launch-10}
- 检查系统是否集成 gst-launch-1.0，如果没有，需要先安装
```bash
root@armsom:/# apt-get update
root@armsom:/# apt-get install gstreamer1.0*
```

##### 使用 ArmSoM camera-module1 {#cm5-io-使用-armsom-camera-module1}

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

<div className="armsom-image-caption">armsom-w3-imx415-camera</div>



##### 使用 Raspberry Pi Camera Module 2 {#cm5-io-使用-raspberry-pi-camera-module-2}

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

#### MIPI DSI {#cm5-io-mipi-dsi}

CM5 Kit 分辨率最高分辨率可达 2K@60Hz

1. 按照下图将连接好排线

![cm5-io-display-10-hd](/img/cm/cm5-io-display-10-hd.png)

<div className="armsom-image-caption">cm5-io-display-10-hd</div>


2. 打开 10.1 寸 MIPI LCD 屏幕配置的方法

- linux 镜像默认是没有打开 mipi lcd 屏幕的配置的，如果需要使用 mipi lcd 屏幕，需要手动打开才行。

- 使用nano 打开/boot/armbianEnv.txt文件：

```bash
sudo nano /boot/armbianEnv.txt
```

- 在该文件中找到或者添加 "overlays=" 这个关键词。

```bash
// 根据您手上的产品选择 二选一
overlays=armsom-cm5-io-display-10hd // cm5-kit
overlays=armsom-cm5-rpi-cm4-io-display // cm5-rpi-cm4-io
```

快捷键：Ctrl + S保存    Ctrl + X退出

```bash
// 重新挂载文件系统
root@armsom-cm5-io:/home/armsom# sudo mount -o remount /
// or
root@armsom-cm5-io:/home/armsom# sync
```

如果您还需要使用触摸需要加载对应的驱动

```bash
// 地址根据实际情况修改
root@armsom-cm5-io:/home/armsom# insmod /usr/lib/modules/6.1.75-vendor-rk35xx/kernel/drivers/input/touchscreen/gt9xx/goodix_gt9xx.ko
```

重启设备来更改Overlays设置以支持Display 10 HD。

<span id="doc-section-5" className="armsom-section-anchor" />

## 产品证书

### CE / FCC / RoHS

<span id="doc-section-6" className="armsom-section-anchor" />

## 供货声明

ArmSoM-CM5 将至少生产到 2034 年 8 月。

## 配件

我们为 ArmSoM-CM5-IO 设计的官方配件旨在帮助您从计算机获得最佳性能。

<div class="cards">
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

<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="/img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Camera-module1</h2>
        <p>camera-module1适用OV13850，是低功耗相机模块</p>
    </div>
</div>
</a>
</div>

## 样品购买

ArmSoM 独立站: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256807679122184.html](https://aliexpress.com/item/3256807679122184.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=842137173767](https://item.taobao.com/item.htm?id=842137173767)

OEM&ODM,  请联系: sales@armsom.org

<span id="cm5-io-doc-section-5" className="armsom-section-anchor" />

### CM5-IO · 样品购买 {#cm5-io-样品购买}

ArmSoM 独立站: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256807679122184.html](https://aliexpress.com/item/3256807679122184.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=842137173767](https://item.taobao.com/item.htm?id=842137173767)

OEM&ODM,  请联系: sales@armsom.org

## 专家视角

- [itsfoss ArmSoM-CM5](https://itsfoss.com/armsom-cm5)：ArmSoM CM5 Powerful Replacement for Raspberry Pi CM4
- [Technically Unsure](https://www.youtube.com/watch?v=pfsBDO3XehA&list=PLtGrcSFVfrfRbFqx8nbtYvVVwbHp_Nza4)：ArmSoM CM5 | 能否超越树莓派 CM5？
- [Platima Tinkers](https://www.youtube.com/watch?v=p55ehXBBLPE)：ArmSoM CM5 评测：RK3576 计算模块，真正兼容 CM4
- [sbc compare](https://sbc.compare/83-armsom-cm5-8gb): CM5  Benchmark Comparison on sbc.compare

<span id="cm5-io-doc-section-6" className="armsom-section-anchor" />

### CM5-IO · 专家视角 {#cm5-io-专家视角}

- [itsfoss ArmSoM-CM5](https://itsfoss.com/armsom-cm5)：ArmSoM CM5 Powerful Replacement for Raspberry Pi CM4

## 用户案例

- [edge machine learning](https://www.armsom.org/post/accelerating-conservation-science-with-armsom-cm5-som): edge machine learning


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

### CM5-IO · 注意事项 {#cm5-io-注意事项}

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

