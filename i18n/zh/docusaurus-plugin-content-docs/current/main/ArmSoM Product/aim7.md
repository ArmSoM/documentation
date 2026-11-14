---
title: "ArmSoM AIM7｜RK3588 核心板文档"
description: "ArmSoM AIM7 是一款基于 RK3588 的核心板，面向边缘 AI 与多媒体开发，提供八核 CPU、最高 6 TOPS NPU 算力、内存配置选择及载板扩展能力。"
keywords: [ArmSoM AIM7, RK3588核心板, 边缘AI模块, 嵌入式多媒体, 载板开发]
sidebar_label: "AIM7"
sidebar_position: 3
slug: /armsom-aim7
image: /img/aim/aim7.jpg
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# AIM7 产品简介

<nav className="armsom-doc-shortcuts" aria-label="章节快捷导航"><a href="#aim7-overview">AIM7 简介</a><a href="#doc-section-1">使用手册</a><a href="#doc-section-2">AIM7 硬件信息</a><a href="#aim-io">AIM-IO 简介</a><a href="#aim-io-doc-section-1">AIM-IO 硬件信息</a><a href="#doc-section-3">开发资料</a></nav>

## AIM7 简介 {#aim7-overview}

ArmSoM-AIM7 采用 Rockchip RK3588 新一代旗舰级八核 64 位处理器，主频高达 2.4GHz，6 TOPS 算力 NPU，最大可配 32GB 大内存。接口兼容 Jetson Nano，同时 PCIe 接口升级为 PCIe 3.0 4-lane 和 PCIe 2.1 1-lane。

:::tip
[欢迎阅读 RK3588AI Module7 文档！RK3588AI Module7 目前处于众筹预热阶段。请关注我们的众筹活动，获取最新动态！](https://www.crowdsupply.com/armsom/rk3588-ai-module7)
:::

![ArmSoM-AIM7](/img/aim/aim7.png)

<div className="armsom-image-caption">ArmSoM-AIM7</div>


AIM7 可适用于ARM PC、边缘计算、云服务器、人工智能、云计算、虚拟/增强现实、区块链、智能NVR等领域

:::tip Rockchip RK3588
- [ArmSoM-Sige7](./armsom-sige7) 单板计算机;
- [ArmSoM-AIM-IO](#aim-io) AIM产品配套IO板;
- [ArmSoM-LM7](./armsom-lm7) LGA核心板, [ArmSoM-W3](./armsom-w3) LM7 核心板开发套件;

依托强大的生态系统以及各式各样的扩展配件，ArmSoM 可以帮助用户轻松实现从创意到原型再到批量生产的交付，是创客、梦想家、业余爱好者的理想创意平台。
:::

### 关键参数

- SOC：瑞芯微 RK3588
- CPU：RK3588 四核Cortex-A76@ 2.4GHz+四核Cortex-A55@ 1.8GHz，8纳米制程
- GPU：ARM Mali-G610 MP4
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算
- VPU/编解码：
  - 硬解码：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8
  - 硬编码：8K@30fps H.265 / H.264
- RAM：8GB/16GB/32GB（最高可配 32GB ）64bit LPDDR4x
- Flash：32GB/64GB/128GB eMMC
- 接口类型：260pin SO-DIMM 连接器，兼容 Jetson TX2 NX
- 工作电压：5V DC
- 温度：工作温度：0°C 至 80°C，存储温度：-20°C 至 85°C
- 湿度：相对湿度: 运行：10% 至 90%，存储：5% 至 95%
- 操作系统：
  - ArmSoM 官方镜像：Debian 12、Ubuntu 22.04
  - 第三方支持：Armbian 23.07，Ubuntu 20.04，Ubuntu22.04，Kylin OS
- PCB：12 层 PCB 板设计
- 重量：17.3g
- 大小：69.6 mm x 45 mm



<span id="doc-section-1" className="armsom-section-anchor" />

## 使用手册 {#getting-started}
<a href="#aim-io-使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>AIM-IO使用手册</h2>
            <p>如何开始使用你的AIM-IO</p>
        </div>
    </div>
</a>

<span id="doc-section-2" className="armsom-section-anchor" />

## AIM7 硬件信息 {#硬件信息}

### 硬件接口

![ArmSoM-AIM7-front & back](/img/aim/armsom-aim7-front&back.png)

<div className="armsom-image-caption">ArmSoM-AIM7-front &amp; back</div>


:::tip
AIM7 采用与 NVIDIA Jetson Nano / TX2 NX 相同类型的 260-pin SO-DIMM 外形设计。具体引脚功能、供电要求和底板兼容性请以 AIM7 引脚定义及兼容性测试结果为准。
:::

### 产品框图
![aim7-product](/img/aim/aim7-product.jpg)

<div className="armsom-image-caption">aim7-product</div>


### 引脚定义

![ArmSoM-aim7-pinlist](/img/aim/aim7-pinlist.png)

<div className="armsom-image-caption">ArmSoM-aim7-pinlist</div>


<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>ArmSoM-AIM7 & Jetson AIM Comparison Table</span>
</a>
<br/>

### 硬件规格
<details>
    <summary>
        AIM7 硬件规格
    </summary>

<table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能</th>
      </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>显示</th>
            <th><li>1x DP interface</li><li>1x HDMI/eDP combo interface</li> <li>HDMI 最高 7680 × 4320@60 Hz；DP 最高 7680 × 4320@30 Hz；eDP 最高 3840 × 2160@60 Hz。实际模式取决于载板和系统配置。</li></th>
        </tr>
        <tr>
            <th>摄像头</th>
            <th><li>3x 4-lane or 5x 2-lane MIPI CSI 接口，每线最高 2.5Gbps</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th>
              <li>1路GMAC，提供 RGMII / RMII 接口引出</li>
              <li>支持 10/100/1000Mbps 数据传输速率</li>
            </th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>PCIe 3.0 x4: 每通道最高支持 8Gbps 数据速率, 支持 4 种组合方式：1路 x4、2路 x2、4路 x1、1路 x2+2路 x1，每通道最高支持 8Gbps 数据速率</li><li>PCIe 2.1 x1: 每 PCIe2.1 接口支持 1lane，最高支持 5Gbps 数据速率</li></th>
        </tr>
         <tr>
            <th>USB</th>
            <th><li>1x USB 3.0 (Gen1)</li><li>3x USB 2.0</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1, UART+flow control x2</li><li>SPI x2</li><li>I2C x4</li><li>can x1</li><li>I2S x2</li><li>SD 4.0, SDHOST 4.0, and SDIO 3.0</li><li>PWM x3, 多个 GPIO</li></th>
        </tr>
    </tbody>
</table>

</details>

### 竞品规格参数对比

<details>
    <summary>
        AIM7 硬件规格
    </summary>

| 规格                                 |  ArmSoM-AIM7              | Jetson Nano (NVIDIA)                |
|--------------------------------------|-----------------------------------|--------------------------------|
| CPU   |<div className='armsom-color'>四核ARM® Cortex®A76+四核 ARM® Cortex®A55</div> | 四核 ARM® Cortex®A57 MPCore 处理器    | 
| GPU    | ARM Mali-G610 MP4                 |128核Maxwell架构GPU   | 
| NPU | 6TOPs（INT8） | - |
| 内存容量   |8GB/32GB 64位 LPDDR4x, 2112Mhz  | 4GB 64位 LPDDR4, 1600MHz   | 
| 存储支持  |  microSD卡、32GB/64GB eMMC 5.1 闪存   | microSD卡、16GB eMMC 5.1闪存  |
| 视频编码  |  <div className='armsom-color'>8K@30fps H.265 / H.264</div>  | 250 MP/sec，1x 4K@30 (HEVC)，2x 1080p@60 (HEVC)，4x 1080p@30 (HEVC)  |
| 视频解码  |  <div className='armsom-color'>8K@60fps H.265/VP9/AVS2，8K@30fps H.264 AVC/MVC，4K@60fps AV1，1080P@60fps MPEG-2/-1/VC-1/VP8</div> | 500 MP/s，1x 4K@60 (HEVC)，2x 4K@30 (HEVC)，4x 1080p@60 (HEVC)，8x 1080p@30 (HEVC)   |
| USB端口  | 1 个 USB 3.0、3 个 USB 2.0  | 1 个 USB 3.0、3 个 USB 2.0  |
| 以太网接口    | 1 个 10/100/1000 BASE-T 以太网   |1 个 10/100/1000 BASE-T 以太网 | 
| CSI接口 | 12通道 3x 4-lane or 5x 2-lane MIPI CSI 每线最高 2.5Gbps      |12 通道（3x4 或 4x2）MIPI CSI-2 D-PHY 1.1 (18 Gbps)     | 
| I/O        | 3 个 UART、2 个 SPI、2 个 I2S、4 个 I2C、多个 GPIO   | 3 个 UART、2 个 SPI、2 个 I2S、4 个 I2C、多个 GPIO        |
| PCIE    |<div className='armsom-color'>1 个 1/2/4lan PCIE3.0 & 1 个 1lan PCIE2.0</div>   | 1 个 1/2/4lan PCIE2.0  | 
| HDMI输出      |  <div className='armsom-color'>1 个 HDMI OUT2.1  / 1 个 eDP 1.3</div>   |1 个 HDMI 2.0  |
| DP接口    | 1 个 DP1.4a | 1 个 DP1.2  |
| eDP/DP接口    | <div className='armsom-color'>1 个 eDP 1.3/ 1 个 HDMI OUT2.1</div>  | 1 个 eDP 1.4/1 个 DP接口  |
|  DSI接口    | 1 个 DSI (1 x2)  | 1 个 DSI (1 x2)   | 
| 操作系统支持    |支持Debian，Ubuntu，Armbian    | NVIDIA JetPack软件套件 | 
| 大小   |  69.6 mm x 45 mm |69.6 mm x 45 mm  |
|规格尺寸|260 引脚边缘连接器| 260 引脚边缘连接器| 

</details>

### 功能接口定义

<details>
    <summary>
        Video input interface
    </summary>

**Two  MIPI DC (DPHY/CPHY) combo PHY**
* Support USE DPHY or CPHY
* Each MIPI DPHY V2.0, 4 lanes, 4.5 Gbps per lane
* Each MIPI CPHY V1.1, 3 lanes, 2.5 Gbps per lane
  
**Four MIPI CSI DPHY**
* Each MIPI DPHY V1.2, 2 lanes, 2.5 Gbps per lane
* Support combine 2 DPHY together to one 4-lan

Table 1. CSI0 pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|2|	GND|	Ground  |	|	|
|4|	CSI0_D0_N|	Camera, CSI 0 Data 0–|	Input|	MIPI D-PHY
|6|	CSI0_D0_P|	Camera, CSI 0 Data 0|+	Input|	MIPI D-PHY
|8|	GND|	Ground  |	|	|
|10|	CSI0_CLK_N|	Camera, CSI 0 Clock–|	Input|	MIPI D-PHY|
|12|	CSI0_CLK_P|	Camera, CSI 0 Clock+|	Input|	MIPI D-PHY|
|14|GND|	Ground  |	|	|
|16| CSI0_D1_N|	Camera, CSI 0 Data 1–|	Input|	MIPI D-PHY|
|18| CSI0_D1_P|	Camera, CSI 0 Data 1+|	Input	|MIPI D-PHY|
|114| CAM0_PWDN|	Camera, CSI 0 Data 1–|	Input|	MIPI D-PHY|
|116| CAM0_MCLK|	Camera, CSI 0 Data 1+|	Input	|MIPI D-PHY|

Table 2. CSI1 pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|1|GND|	Ground  |	|	|
|3|	MIPI_CSI0_RX_D2N|	Camera, CSI 1 Data 0–|	Input	|MIPI D-PHY
|5|	MIPI_CSI0_RX_D2P|	Camera, CSI 1 Data 0+|	Input|	MIPI D-PHY
|7|GND|	Ground  |	|	|
|9|	CSI1_CLK_N|	Camera, CSI 1 Clock–	|Input|	MIPI D-PHY
|11| CSI1_CLK_P|	Camera, CSI 1 Clock+|	Input	|MIPI D-PHY|
|15| CSI1_D1_N|	Camera, CSI 1 Data 1–|	Input|	MIPI D-PHY|
|17| CSI1_D1_P|	Camera, CSI 1 Data 1+|	Input	|MIPI D-PHY|
|118| CAM1_PWDN|	Camera, CSI 0 Data 1–|	Input|	MIPI D-PHY|
|126| CAM1_MCLK|	Camera, CSI 0 Data 1+|	Input	|MIPI D-PHY|

Table 3. CSI2 pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|20|GND|	Ground  |	|	|
|22| CSI2_D0_N|	Camera, CSI 2 Data 0–|	Input|	MIPI D-PHY|
|24| CSI2_D0_P|	Camera, CSI 2 Data 0+	|Input	|MIPI D-PHY|
|26|GND|	Ground  |	|	|
|28| CSI2_CLK_N|	Camera, CSI 2 Clock–|	Input|	MIPI D-PHY|
|30| CSI2_CLK_P|	Camera, CSI 2 Clock+|	Input|	MIPI D-PHY|
|32|GND|	Ground  |	|	|
|34| CSI2_D1_N|	Camera, CSI 2 Data 1–|	Input|	MIPI D-PHY|
|36| CSI2_D1_P|	Camera, CSI 2 Data 1+|	Input	|MIPI D-PHY|
|120| CAM2_MCLK|	Camera, CSI 2 Data 1–|	Input|	MIPI D-PHY|
|122| CAM2_PWDN|	Camera, CSI 2 Data 1+|	Input	|MIPI D-PHY|

Table 3. CSI3 pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|19|GND|	Ground  |	|	|
|21| CSI3_D0_N|	Camera, CSI 3 Data 0–|	Input|	MIPI D-PHY|
|23| CSI3_D0_P|	Camera, CSI 3 Data 0+	|Input	|MIPI D-PHY|
|25|GND|	Ground  |	|	|
|27| CSI3_CLK_N|	Camera, CSI 3 Clock–|	Input|	MIPI D-PHY|
|29| CSI3_CLK_P|	Camera, CSI 3 Clock+|	Input	|MIPI D-PHY|
|31|GND|	Ground  |	|	|
|33|	CSI3_D1_N|	Camera, CSI 3 Data 1–|	Input|	MIPI D-PHY|
|35|	CSI3_D1_P|	Camera, CSI 3 Data 1+|	Input|	MIPI D-PHY|
|216| CAM3_MCLK|	Camera, CSI 3 Data 1–|	Input|	MIPI D-PHY|
|218| CAM3_PWDN|	Camera, CSI 3 Data 1+|	Input	|MIPI D-PHY|

Table 4. CSI4 pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|38|GND|	Ground  |	|	|
|40|	CSI4_D2_N|	Camera, CSI 4 Data 2–|	Input|	MIPI D/C-PHY|
|42|	CSI4_D2_P|	Camera, CSI 4 Data 2+|	Input|	MIPI D/C-PHY|
|44|GND|	Ground  |	|	|
|52|	CSI4_CLK_N|	Camera, CSI 4 Clock–|	Input|	MIPI  D/C-PHY|
|54|	CSI4_CLK_P|	Camera, CSI 4 Clock+|	Input	|MIPI  D/C-PHY|
|46|	CSI4_D0_N|	Camera, CSI 4 Data 0–|	Input   |MIPI  D/C-PHY|
|48|	CSI4_D0_P|	Camera, CSI 4 Data 0+|  Input   |MIPI  D/C-PHY|
|58|	CSI4_D1_N|	Camera, CSI 4 Data 1–|	Input|  MIPI D/C-PHY|
|60|	CSI4_D1_P|	Camera, CSI 4 Data 1+|	Input|	MIPI D/C-PHY|
|64|	CSI4_D3_N|	Camera, CSI 4 Data 3–|	Input|	MIPI D/C-PHY|
|66|	CSI4_D3_P|	Camera, CSI 4 Data 3+|  Input|	MIPI D/C-PHY|
|228| CAM4_MCLK|	Camera, CSI 4 Data 1–|	Input|	MIPI D-PHY|
|230| CAM4_PWDN|	Camera, CSI 4 Data 1+|	Input	|MIPI D-PHY|

</details>

<details>
    <summary>
        Video output processor
    </summary>

**HDMI/eDP TX interface**

* Support x1, x2 and x4 configuration for each interface
* Support all the data rates for HDMI FRL: 3, 6, 8, 10 and 12Gbps
* Support 1.62Gbps, 2.7Gbps and 5.4Gbps for eDP
* Support up to 7680x4320@60Hz for HDMI TX, and 4K@60Hz for eDP
* Support RGB/YUV(up to 10bit) format for HDMI TX
* Support RGB, YCbCr 4:4:4, YCbCr 4:2:2 and 8/10 bit per component video format for eDP
* Support DSC 1.2a for HDMI TX
* Support HDCP2.3 for HDMI TX, and HDCP1.3 for eDP
  
**DP TX interface**
* Support 2 DP TX 1.4a interface which combo with USB3.1 Gen1
* Support 1/2/4lanes for each interface
* Support 1.62Gbps, 2.7Gbps, 5.4Gbps and 8.1Gbps Serializer
* Support up to 7680x4320@30Hz
* Support RGB/YUV(up to 10bit) format
* Support Single Stream Transport(SST)
* Support DP Alt mode on USB Type-C
* Support HDCP2.3, HDCP 1.3

**MIPI DSI interface**
* Support 2 MIPI DPHY 2.0 interfaces
* Support 4 data lanes and 4.5 Gbps maximum data rate per lane
* Support max resolution 4K@60 Hz
* Support dual MIPI display: left-right mode
* Support RGB (up to 10 bits) format
* Support DSC 1.1/1.2a

Table 5. DSI pin descriptions

|Pin|	Pin name | Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|68|GND|	Ground  |	|	|
|70|	DSI_D0_N|	DSI Data 0–	|Output|	MIPI D-PHY|
|72|	DSI_D0_P|	DSI Data 0+|	Output|	MIPI D-PHY|
|74|GND|	Ground  |	|	|
|76|	DSI_CLK_N|	DSI Clock–|	Output|	MIPI D-PHY|
|78|	DSI_CLK_P|	DSI Clock+ |Output	|MIPI D-PHY|
|80|GND|	Ground  |	|	|
|82|	DSI_D1_N|	DSI Data 1–	|Output|	MIPI D-PHY|
|84|	DSI_D1_P|	DSI Data 1+	|Output|	MIPI D-PHY|


Table 6. DP / USB3.0 pin descriptions

|Pin|	Pin name	| Signal description	|Direction	|Pin type|
|---------|--------------|-------------------|--------------|--------------|
|37|GND|	Ground  |	|	|
|39|	DP0_TXD0_N|	Display Port 0 Lane 0-	|Output	|DP|
|41|	DP0_TXD0_P|	Display Port 0 Lane 0+	|Output	|DP|
|43|GND|	Ground  |	|	|
|45|	DP0_TXD1_N|	Display Port 0 Lane 1–	|Output	|DP|
|47|	DP0_TXD1_P|	Display Port 0 Lane 1+	|Output	|DP|
|49|GND|	Ground  |	|	|
|51|	DP0_TXD2_N|	Display Port 0 Lane 2–	|Output	|DP|
|53|	DP0_TXD2_P|	Display Port 0 Lane 2+	|Output	|DP|
|55|GND|	Ground  |	|	|
|57|	DP0_TXD3_N|	Display Port 0 Lane 3–	|Output	|DP|
|59|	DP0_TXD3_P|	Display Port 0 Lane 3+	|Output	|DP|
|86|GND|	Ground  |	|	|
|88|	DP0_HPD|	Display Port 0 Hot Plug Detect	|Input	|Open Drain–1.8V|
|90|	DP0_AUX_N|	Display Port 0 Aux–	|Bidir	|DP|
|92|	DP0_AUX_P|	Display Port 0 Aux+	|Bidir	|DP|

Table 7. eDP/HDMI pin descriptions

|Pin|	Pin name	| Signal description	|Direction	|Pin type|
|---------|--------------|-------------------|--------------|--------------|
|61|GND|	Ground  |	|	|
|63|	HDMI_TXD2_N/EDP_TX0_D2N|	HDMI/EDP Lane 2–    |Output|    HDMI/EDP|
|65|	HDMI_TXD2_P/EDP_TX0_D2P|	HDMI/EDP Lane 2+	|Output|	HDMI/EDP|
|67|GND|	Ground  |	|	|
|69|	HDMI_TXD1_N/EDP_TX0_D1N|	HDMI/EDP Lane 1–	|Output|	HDMI/EDP|
|71|	HDMI_TXD1_P/EDP_TX0_D1P|	HDMI/EDP Lane 1+	|Output|	HDMI/EDP|
|73|GND|	Ground  |	|	|
|75|	HDMI_TXD0_N/EDP_TX0_D0N|	HDMI/EDP Lane 0–	|Output|	HDMI/EDP|
|77|	HDMI_TXD0_P/EDP_TX0_D0P|	HDMI/EDP Lane 0+	|Output|	HDMI/EDP|
|79|GND|	Ground  |	|	|
|81|	HDMI_CLK_N/EDP_TX0_D3N|	HDMI/EDP Clk Lane–	|Output|	HDMI/EDP|
|83|	HDMI_CLK_P/EDP_TX0_D3P|	HDMI/EDP Clk Lane+	|Output|	HDMI/EDP|
|98|	HDMI_SDA / EDP_TX0_AUXN |	HDMI/EDP DDC SDA|Bidir	|Open-Drain,3.3V|
|100|	HDMI_SCL / EDP_TX0_AUXP|	HDMI/EDP DDC SCL|	Output|	Open-Drain,3.3V|
|96|	HDMI_HPD|	HDMI/EDP Hot Plug Detect|	Input	|Open Drain–3.3V|
|94|	HDMI_CEC|	HDMI/EDP CEC|	Bidir|	Open Drain–1.8V|
</details>


<details>
    <summary>
        SDIO
    </summary>

* Compatible with SDIO3.0 protocol
* 4-bit data bus width

Table 8. SDIO pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|217|GND|	Ground  |	|	|
|219|	SDMMC_DAT0|	SD Card or SDIO Data 0	|Bidir|	CMOS – 1.8V/3.3V
|221|	SDMMC_DAT1|	SD Card or SDIO Data 1	|Bidir|	CMOS – 1.8V/3.3V
|223|	SDMMC_DAT2|	SD Card or SDIO Data 2	|Bidir|	CMOS – 1.8V/3.3V
|225|	SDMMC_DAT3|	SD Card or SDIO Data 3	|Bidir|	CMOS – 1.8V/3.3V
|227|	SDMMC_CMD|	SD Card or SDIO Command	|Bidir|	CMOS – 1.8V/3.3V
|229|	SDMMC_CLK|	SD Card or SDIO Clock	|Output|	CMOS – 1.8V/3.3V
|126|	SDMMC_DET|	SD Card or SDIO DET	|Output|	CMOS – 1.8V/3.3V
</details>

<details>
    <summary>
        GMAC
    </summary>

Table 9. Gigabit Ethernet pin descriptions

|Pin| 	Pin name	|Signal description	|Direction	|Pin type|
|---------|--------------|-------------------|--------------|--------------|
|184|	GBE_MDI0_N	|GbE Transformer Data 0–	|Bidir	|MDI|
|186|	GBE_MDI0_P	|GbE Transformer Data 0+	|Bidir	|MDI|
|188|	GBE_LED_LINK|Ethernet Link LED (Green)  |Output |	-|
|190|	GBE_MDI1_N	|GbE Transformer Data 1–	|Bidir	|MDI|
|192|	GBE_MDI1_P	|GbE Transformer Data 1+	|Bidir	|MDI|
|194|	GBE_LED_ACT	|Ethernet Activity LED (Yellow)|	Output|	-|
|196|	GBE_MDI2_N	|GbE Transformer Data 2–	|Bidir	|MDI|
|198|	GBE_MDI2_P	|GbE Transformer Data 2+	|Bidir	|MDI|
|200|GND|	Ground  |	|	|
|202|	GBE_MDI3_N	|GbE Transformer Data 3–	|Bidir	|MDI|
|204|	GBE_MDI3_P	|GbE Transformer Data 3+	|Bidir	|MDI|
</details>

<details>
    <summary>
        USB3.0
    </summary>

* Embedded two USB 3.0 OTG interfaces which combo with DP TX (USB3OTG_0 and USB3OTG_1)
* Embedded one USB 3.0 Host interface which combos with Combo PIPE PHY2 (USB3OTG_2)

Table 10. USB 3.0 GEN1 pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|113|GND|	Ground  |	|	|
|161|	PCIE20_2_RXN/SATA30_2_RXN/USBSS_RX_N	|USB SS Receive- (USB 3.0 Ctrl #0)	|Input	|USB SS PHY|
|163|	PCIE20_2_RXP/SATA30_2_RXP/USBSS_RX_P	|USB SS Receive+ (USB 3.0 Ctrl #0)	|Input	|USB SS PHY|
|166|	PCIE20_2_TXN/SATA30_2_TXN/USBSS_TX_N	|USB SS Transmit- (USB 3.0 Ctrl #0)	|Output	|USB SS PHY|
|168|	PCIE20_2_TXP/SATA30_2_TXP/USBSS_TX_P	|USB SS Transmit+ (USB 3.0 Ctrl #0)	|Output	|USB SS PHY|
</details>

<details>
    <summary>
        USB 2.0 Host
    </summary>

* Compatible with USB 2.0 specification
* Support two USB 2.0 Hosts
* Supports high-speed (480 Mbps), full-speed (12 Mbps) and low-speed (1.5 Mbps) mode
* Support Enhanced Host Controller Interface Specification (EHCI), Revision 1.0
* Support Open Host Controller Interface Specification (OHCI), Revision 1.0a

Table 11. USB 2.0 pin descriptions

|Pin| 	Pin name |Signal description	|Direction	|Pin type|
|---|------------|-------------------|--------------|--------------|
|109|	USB0_D_N|	USB2.0 Port 0 Data–	|Bidir	|USB PHY|
|111|	USB0_D_P|	USB2.0 Port 0 Data+	|Bidir	|USB PHY|
|115|	USB1_D_N|	USB 2.0 Port 1 Data–	|Bidir	|USB PHY|
|117|	USB1_D_P|	USB 2.0 Port 1 Data+	|Bidir	|USB PHY|
|121|	USB2_D_N|	USB 2.0 Port 2 Data–	|Bidir	|USB PHY|
|123|	USB2_D_P|	USB 2.0 Port 2 Data+	|Bidir	|USB PHY|
</details>

<details>
    <summary>
        PCIe
    </summary>

**PCIe 2.1 interface**
* Compatible with PCI Express Base Specification Revision 2.1
* Support one lane for each PCIe 2.1 interface
* Support Root Complex (RC) only
* Support 5 Gbps data rate

Table 12. PCIe 2.1 pin descriptions

|Pin| 	Pinname|	Signal description |	Direction	|Pin type|
|---|------------|-------------------|--------------|--------------|
|171|GND|	Ground  |	|	|
|173|	PCIE1_CLK_N|	PCIe #1 Reference Clock– (PCIe Ctrl #2)	|Output|	PCIe PHY|
|175|	PCIE1_CLK_P|	PCIe #1 Reference Clock+ (PCIe Ctrl #2)	|Output|    PCIe PHY|
|165|GND|	Ground  |	|	|
|167|	PCIE1_RX_N/SATA30_0_RXN|	PCIe #1 Receive 0– (PCIe Ctrl #2 Lane 0)	|Input|	PCIe PHY|
|169|	PCIE1_RX_P/SATA30_0_RXP|	PCIe #1 Receive 0+ (PCIe Ctrl #2 Lane 0)	|Input|	PCIe PHY|
|172|	PCIE1_TX_N|	PCIe #1 Transmit 0– (PCIe Ctrl #2 Lane 0)	|Output|	PCIe PHY|
|174|	PCIE1_TX_P|	PCIe #1 Transmit 0+ (PCIe Ctrl #2 Lane 0)	|Output|	PCIe PHY|
|124|	PCIE_20X1_2_WAKE|	PCIe Wake. 47kΩ pull-up to 3.3V on themodule.	|Input|	Open Drain – 3.3V|
|182|	PCIE_20X1_2_CLKREQ|	PCIe #1 Clock Request (PCIe Ctrl #2). 47kΩ pull-up to 3.3V on the module.	|Bidir|	Open Drain – 3.3V|
|183|	PCIE_20X1_2_RST|PCIe #1 Reset (PCIe Ctrl #2). 4.7kΩ pull-up to 3.3V on the module.	|Output|	Open Drain – 3.3V|


**PCIe 3.0 interface**
* Compatible with PCI Express Base Specification Revision 3.0
* Support dual operation modes: Root Complex (RC) and End Point (EP)
* Support data rates: 2.5 Gbps (PCIe 1.1), 5 Gbps (PCIe 2.1), 8 Gbps (PCIe 3.0)
* Support aggregation and bifurcation with 1x 4 lanes, 2x 2 lanes, 4x 1 lanes and 1x 2 lanes + 2x 1 lanes

Table 13. PCIe 3.0 pin descriptions

|Pin 	|Pin name	    |Signal description |Direction|	Pin type|
|---|------------|-------------------|--------------|--------------|
|158|GND|	Ground  |	|	|
|160	|PCIE0_CLK_N	|PCIe #0 Reference Clock–                 |Output|	PCIe PHY|
|162	|PCIE0_CLK_P	|PCIe #0 Reference Clock+                 |Output|	PCIe PHY|
|129|GND|	Ground  |	|	|
|131	|PCIE0_RX0_N	|PCIe #0 Receive 0– (PCIe Ctrl #0 Lane 0)|Input|	PCIe PHY|
|133	|PCIE0_RX0_P	|PCIe #0 Receive 0+ (PCIe Ctrl #0 Lane 0) |Input|	PCIe PHY|
|132|GND|	Ground  |	|	|
|134	|PCIE0_TX0_N	|PCIe #0 Transmit 0– (PCIe Ctrl #0 Lane 0) |Output|	PCIe PHY|
|136	|PCIE0_TX0_P	|PCIe #0 Transmit 0+ (PCIe Ctrl #0 Lane 0) |Output|	PCIe PHY|
|177|GND|	Ground  |	|	|
|179|PCIE_30X4_WAKE    |PCIe Wake. 47kΩ pull-up to 3.3V on themodule.|Input|	Open Drain – 3.3V|
|180	|PCIE_30X4_CLKREQ|PCIe #0 Clock Request (PCIe Ctrl #0). 47kΩpull-up to 3.3V on the module.|Bidir|Open Drain – 3.3V|
|181	|PCIE_30X4_RST    |PCIe #0 Reset (PCIe Ctrl #0). 4.7kΩ pull-up to3.3V on the module.|Bidir|	Open Drain – 3.3V|
|135 |GND|	Ground  |	|	|
|137	|PCIE0_RX1_N	|PCIe #0 Receive 1– (PCIe Ctrl #0 Lane 1)|Input|	PCIe PHY|
|139	|PCIE0_RX1_P	|PCIe #0 Receive 1+ (PCIe Ctrl #0 Lane 1)|Input|	PCIe PHY|
|138 |GND|	Ground  |	|	|
|140	|PCIE0_TX1_N	|PCIe #0 Transmit 1– PCIe Ctrl #0 Lane 1) |Output|	PCIe PHY|
|142	|PCIE0_TX1_P	|PCIe #0 Transmit 1+ (PCIe Ctrl #0 Lane 1) |Output|	PCIe PHY|
|125 |GND|	Ground  |	|	|
|127|PCIE_30X1_0_WAKE    |PCIe Wake. 47kΩ pull-up to 3.3V on themodule.|Input|	Open Drain – 3.3V|
|212	|PCIE_30X1_0_CLKREQ|PCIe #0 Clock Request (PCIe Ctrl #0). 47kΩpull-up to 3.3V on the module.|Bidir|Open Drain – 3.3V|
|195|PCIE_30X1_0_RST |PCIe #0 Reset (PCIe Ctrl #0). 4.7kΩ pull-up to3.3V on the module.|Bidir|	Open Drain – 3.3V|
|147 |GND|	Ground  |	|	|
|149	|PCIE0_RX2_N	|PCIe #0 Receive 2– (PCIe Ctrl #0 Lane 1)|Input|	PCIe PHY|
|151	|PCIE0_RX2_P	|PCIe #0 Receive 2+ (PCIe Ctrl #0 Lane 1)|Input|	PCIe PHY|
|144 |GND|	Ground  |	|	|
|146 |GND|	Ground  |	|	|
|148	|PCIE0_TX2_N	|PCIe #0 Transmit 2– PCIe Ctrl #0 Lane 1) |Output|	PCIe PHY|
|150	|PCIE0_TX2_P	|PCIe #0 Transmit 2+ (PCIe Ctrl #0 Lane 1) |Output|	PCIe PHY|
|130|PCIE_30X2_WAKE    |PCIe Wake. 47kΩ pull-up to 3.3V on themodule.|Input|	Open Drain – 3.3V|
|120	|PCIE_30X2_CLKREQ|PCIe #0 Clock Request (PCIe Ctrl #0). 47kΩpull-up to 3.3V on the module.|Bidir|Open Drain – 3.3V|
|195128|PCIE_30X2_RST |PCIe #0 Reset (PCIe Ctrl #0). 4.7kΩ pull-up to3.3V on the module.|Bidir|	Open Drain – 3.3V|
|153 |GND|	Ground  |	|	|
|155	|PCIE0_RX3_N	|PCIe #0 Receive 3– (PCIe Ctrl #0 Lane 1)|Input|	PCIe PHY|
|157	|PCIE0_RX3_P	|PCIe #0 Receive 3+ (PCIe Ctrl #0 Lane 1)|Input|	PCIe PHY|
|152 |GND|	Ground  |	|	|
|154	|PCIE0_TX3_N	|PCIe #0 Transmit 3– PCIe Ctrl #0 Lane 1) |Output|	PCIe PHY|
|156	|PCIE0_TX3_P	|PCIe #0 Transmit 3+ (PCIe Ctrl #0 Lane 1) |Output|	PCIe PHY|
|199|PCIE_30X1_1_WAKE    |PCIe Wake. 47kΩ pull-up to 3.3V on themodule.|Input|	Open Drain – 3.3V|
|211	|PCIE_30X1_1_CLKREQ|PCIe #0 Clock Request (PCIe Ctrl #0). 47kΩpull-up to 3.3V on the module.|Bidir|Open Drain – 3.3V|
|197|PCIE_30X1_1_RST |PCIe #0 Reset (PCIe Ctrl #0). 4.7kΩ pull-up to3.3V on the module.|Bidir|	Open Drain – 3.3V|
</details>

<details>
    <summary>
        SPI interface
    </summary>

* Support 5 SPI Controllers (SPI0-SPI4)
* Support two chip-select output
* Support serial-master and serial-slave mode, software-configurable
  
Table 14. SPI pin descriptions

|Pin|	Pin name	|Signal description	            |Direction|Pin type|
|---|------------|-------------------|--------------|--------------|
|89|	SPI0_MOSI	|SPI 0 Master Out / Slave In    |Bidir	|CMOS – 1.8|
|91|	SPI0_SCK	|SPI 0 Clock	                |Bidir	|CMOS – 1.8|
|93|	SPI0_MISO_M2	|SPI 0 Master In / Slave Out    |Bidir	|CMOS – 1.8|
|95|	SPI0_CS0	|SPI 0 Chip Select 0	        |Bidir	|CMOS – 1.8|
|97|	SPI0_CS1	|SPI 0 Chip Select 1	        |Bidir	|CMOS – 1.8|
|102 |GND|	Ground  |	|	|
|104|	SPI1_MOSI	|SPI 1 Master Out / Slave In	|Bidir	|CMOS – 1.8|
|106|	SPI1_SCK	|SPI 1 Clock	                |Bidir	|CMOS – 1.8|
|108|	SPI1_MISO	|SPI 1 Master In / Slave Out	|Bidir	|CMOS – 1.8|
|110|	SPI1_CS0	|SPI 1 Chip Select 0	        |Bidir	|CMOS – 1.8|
|112|	SPI1_CS1	|SPI 1 Chip Select 1	        |Bidir	|CMOS – 1.8|
</details>

<details>
    <summary>
        I2C interface
    </summary>
Table 15. I2C pin descriptions

|Pin| 	Pin name	|Signal description|	Direction|Pin type|
|---|------------|-------------------|--------------|--------------|
|185|	I2C0_SCL	|General I2C 0 Clock. 2.2kΩ pull-up to3.3V on module.|	Bidir|	Open Drain – 3.3V
|187|	I2C0_SDA	|General I2C 0 Data. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V
|189|	I2C1_SCL |General I2C 1 Clock. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V
|191|	I2C1_SDA	|General I2C 1 Data. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V
|232|	I2C2_SCL	|General I2C 2 Clock. 2.2kΩ pull-up to1.8V on the module.|	Bidir|	Open Drain – 1.8V
|234|	I2C2_SDA	|General I2C 2 Data. 2.2kΩ pull-up to 1.8V on the module.|	Bidir|	Open Drain – 1.8V
|213|	CAM_I2C_SCL	|Camera I2C Clock. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V
|215|	CAM_I2C_SDA	|Camera I2C Data. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V
</details>

<details>
    <summary>
        UART interface
    </summary>

* Support 10 UART interfaces (UART0-UART9)
* Embedded two 64-byte FIFO for TX and RX operation respectively
* Support transmitting or receiving 5-bit, 6-bit, 7-bit, and 8-bit serial data
* Standard asynchronous communication bits such as start, stop and parity
* Support different input clocks for UART operation to get up to 4 Mbps baud rate
* Support auto flow control mode for all UART interfaces

Table 16. UART pin descriptions

|Pin| 	Pin name	|Signal description	        |Direction|	Pin type
|---|------------|-------------------|--------------|--------------|
|99|	UART0_TXD	|UART #0 Transmit	        |Output|	CMOS – 1.8V
|101|	UART0_RXD	|UART #0 Receive	        |Input|	CMOS – 1.8V
|103|	UART0_RTS	|UART #0 Request to Send	|Output|	CMOS – 1.8V
|105|	UART0_CTS	|UART #0 Clear to Send	    |Input|	CMOS – 1.8V
|201 |GND|	Ground  |	|	|
|203|	UART1_TXD	|UART #1 Transmit	        |Output|	CMOS – 1.8V
|205|	UART1_RXD	|UART #1 Receive	        |Input|	CMOS – 1.8V
|207|	UART1_RTS	|UART #1 Request to Send	|Output|	CMOS – 1.8V
|209|	UART1_CTS	|UART #1 Clear to Send	    |Input|	CMOS – 1.8V
|236|	UART2_TXD	|UART #2 Transmit	        |Output|	CMOS – 1.8V
|238|	UART2_RXD	|UART #2 Receive	        |Input|	CMOS – 1.8V
</details>

<details>
    <summary>
        CAN bus
    </summary>

* Support transmitting or receiving CAN standard frame
* Support transmitting or receiving CAN extended frame
* Support transmitting or receiving data frame, remote frame, overload frame, error frame, and frame interval

Table 14. CAN pin descriptions

|Pin| 	Pin name	        |Signal description|	Direction	Pin type
|---|------------|-------------------|--------------|--------------|
|141 |GND|	Ground  |	|	|
|145|	CAN_TX	 |CAN PHY	    | Output            |	CMOS – 3.3V
|143|	CAN_RX	 |CAN PHY 	|Input              |	CMOS – 3.3V 
</details>

<details>
    <summary>
        I2S interface
    </summary>
Table 16. i2s pin descriptions

|Pin| 	Pin name|	Signal description|	Direction|	Pin type
|---|------------|-------------------|--------------|--------------|
|199|	I2S0_SCLK/PCIE_30X1_1_WAKE	|I2S Audio Port 0 Clock	|Bidir|	CMOS – 1.8V
|197|	I2S0_FS/PCIE_30X1_1_RST	|I2S Audio Port 0 Left/Right Clock	|Bidir|	CMOS – 1.8V
|193|	I2S0_DOUT	|I2S Audio Port 0 Data Out	|Output|	CMOS – 1.8V
|195|	I2S0_DIN/PCIE_30X1_0_RST|	I2S Audio Port 0 Data In	|Input|	CMOS – 1.8V
|226|	I2S1_SCLK	|I2S Audio Port 1 Clock|	Bidir	|CMOS – 1.8V
|224|	I2S1_FS	|I2S Audio Port 1 Left/Right Clock	|Bidir|	CMOS – 1.8V
|220|	I2S1_DOUT|	I2S Audio Port 1 Data Out	|Output|	CMOS – 1.8V
|222|	I2S1_DIN |	I2S Audio Port 1 Data In	|Input	|CMOS – 1.8V
</details>

<details>
    <summary>
        引脚定义
    </summary>

|ArmSoM-AIM7 function |	Pin number	|Pin number|	ArmSoM-AIM7 function|
|------------------|-------------------------|-------------------------|-------------------------|
|GND_1|	1|	2|	GND_2|
|CSI1_D0_N|	3|	4|	CSI0_D0_N|
|CSI1_D0_P|	5|	6|	CSI0_D0_P|
|GND_3|	7|	8|	GND_4|
|CSI1_CLK_N|	9|	10|	CSI0_CLK_N|
|CSI1_CLK_P|	11|	12|	CSI0_CLK_P|
|GND_5|	13|	14|	GND_6|
|CSI1_D1_N|	15|	16|	CSI0_D1_N|
|CSI1_D1_P|	17|	18|	CSI0_D1_P|
|GND_7|	19|	20|	GND_8|
|CSI3_D0_N|	21|	22|	CSI2_D0_N|
|CSI3_D0_P|	23|	24|	CSI2_D0_P|
|GND_9|	25|	26|	GND_10|
|CSI3_CLK_N|	27|	28|	CSI2_CLK_N|
|CSI3_CLK_P|	29|	30|	CSI2_CLK_P|
|GND_11|	31|	32|	GND_12|
|CSI3_D1_N|	33|	34|	CSI2_D1_N|
|CSI3_D1_P|	35|	36|	CSI2_D1_P|
|GND_13|	37|	38|	GND_14|
|TYPEC0_SSRX1N/DP0_TXD0_N|	39|	40|	CSI4_D2_N|
|TYPEC0_SSRX1P/DP0_TXD0_P|	41|	42|	CSI4_D2_P|
|GND_15|	43|	44|	GND_16|
|TYPEC0_SSTX1N/DP0_TXD1_N|	45|	46|	CSI4_D0_N|
|TYPEC0_SSTX1P/DP0_TXD1_P|	47|	48|	CSI4_D0_P|
|GND_17|	49|	50|	GND_18|
|TYPEC0_SSRX2N/DP0_TXD2_N|	51|	52|	CSI4_CLK_N|
|TYPEC0_SSRX2P/DP0_TXD2_P|	53|	54|	CSI4_CLK_P|
|GND_19|	55|	56|	GND_20|
|TYPEC0_SSTX2N/DP0_TXD3_N|	57|	58|	CSI4_D1_N|
|TYPEC0_SSTX2P/DP0_TXD3_P|	59|	60|	CSI4_D1_P|
|GND_21|61|	62|	GND_22|
|HDMI_TXD2_N/EDP_TX0_D2N|	63|	64|	CSI4_D3_N|
|HDMI_TXD2_P/EDP_TX0_D2P|	65|	66|	CSI4_D3_P|
|GND_23|	67|	68|	GND_24|
|HDMI_TXD1_N/EDP_TX0_D1N|	69|	70|	DSI_D0_N|
|HDMI_TXD1_P/EDP_TX0_D1P|	71|	72|	DSI_D0_P|
|GND_25|	73|	74|	GND_26|
|HDMI_TXD0_N/EDP_TX0_D0N|	75|	76|	DSI_CLK_N|
|HDMI_TXD0_P/EDP_TX0_D0P|	77|	78|	DSI_CLK_P|
|GND_27|	79|	80|	GND_28|
|HDMI_CLK_N/EDP_TX0_D3N|	81|	82|	DSI_D1_N|
|HDMI_CLK_P/EDP_TX0_D3P|	83|	84|	DSI_D1_P|
|GND_29|	85|	86|	GND_30|
|GPIO0/GPIO1_C5/VBUS_DET|	87|	88|	DP0_HPD|
|SPI0_MOSI|	89|	90|	DP0_AUX_N|
|SPI0_SCK|	91|	92|	DP0_AUX_P|
|SPI0_MISO_M2|	93|	94|	HDMI_CEC|
|SPI0_CS0|	95|	96|	HDMI_HPD|
|SPI0_CS1|	97|	98|	HDMI_SDA / EDP_TX0_AUXN|
|UART0_TXD|	99|	100|	HDMI_SCL / EDP_TX0_AUXP|
|UART0_RXD|	101|	102|	GND_31|
|UART0_RTS|	103|	104|	SPI1_MOSI|
|UART0_CTS|	105|	106|	SPI1_SCK|
|GND_32|	107|	108|	SPI1_MISO|
|USB0_D_N|	109|	110|	SPI1_CS0|
|USB0_D_P|	111|	112|	SPI1_CS1|
|GND_33|	113|	114|	CAM0_PWDN|
|USB1_D_N|	115|	116|	CAM0_MCLK|
|USB1_D_P|	117|	118|	GPIO01/GPIO3_A7/CAM1_PWDN|
|GND_34|	119|	120|	CAM2_MCLK/PCIE30X2_CLKREQN_M1|
|USB2_D_N|	121|	122|	CAM2_PWDN|
|USB2_D_P|	123|	124|	GPIO02/GPIO3_A3/MIPI_CAM2_PDN|
|GND_35|	125|	126|	GPIO03/GPIO3_D0/PCIE20X1_2_WAKEN_M0|
|GPIO04/GPIO4_A4/PCIE_30X1_0_WAKE|	127|	128|	GPIO05/GPIO4_B0/PCIE30X2_PERSTN_M1|
|GND_36|	129|	130|	GPIO06/GPIO4_A7/PCIE_30X2_WAKE|
|PCIE0_RX0_N|	131|	132|	GND_37|
|PCIE0_RX0_P|	133|	134|	PCIE0_TX0_N|
|GND_38|	135|	136|	PCIE0_TX0_P|
|PCIE0_RX1_N|	137|	138|	GND_39|
|PCIE0_RX1_P|	139|	140|	PCIE0_TX1_N|
|GND_40|	141|	142|	PCIE0_TX1_P|
|CAN_RX|	143|	144|	GND_41|
|CAN_TX|	145|	146|	GND_42|
|GND_43|	147|	148|	PCIE0_TX2_N|
|PCIE0_RX2_N|	149|	150|	PCIE0_TX2_P|
|PCIE0_RX2_P|	151|	152|	GND_44|
|GND_45|	153|	154|	PCIE0_TX3_N|
|PCIE0_RX3_N|	155|	156|	PCIE0_TX3_P|
|PCIE0_RX3_P|	157|	158|	GND_46|
|GND_47|	159|	160|	PCIE0_CLK_N|
|PCIE20_2_RXN/SATA30_2_RXN/USBSS_RX_N|	161|	162|	PCIE30_CLK_P|
|PCIE20_2_RXP/SATA30_2_RXP/USBSS_RX_P|	163|	164|	GND_48|
|GND_49|	165|	166|	PCIE20_2_TXN/SATA30_2_TXN/USBSS_TX_N|
|PCIE1_RX_N/SATA30_0_RXN|	167|	168|	PCIE20_2_TXP/SATA30_2_TXP/USBSS_TX_P|
|PCIE1_RX_P/SATA30_0_RXP|	169|	170|	GND_50|
|GND_51|	171|	172|	PCIE1_TX_N/SATA30_0_TXN|
|PCIE1_CLK_N|	173|	174|	PCIE1_TX_P/SATA30_0_TXP|
|PCIE1_CLK_P|	175|	176|	GND_52|
|GND_53|	177|	178|	MOD_SLEEP|
|PCIE_30X4_WAKE|	179|	180|	PCIE_30X4_CLKREQ|
|PCIE_30X4_RST|	181|	182|	PCIE_20X1_2_CLKREQ|
|PCIE_20X1_2_RST|	183|	184|	GBE_MDI0_N|
|I2C0_SCL|	185|	186|	GBE_MDI0_P|
|I2C0_SDA|	187|	188|	GBE_LED_LINK|
|I2C1_SCL|	189|	190|	GBE_MDI1_N|
|I2C1_SDA|	191|	192|	GBE_MDI1_P|
|I2S0_DOUT|	193|	194|	GBE_LED_ACT|
|I2S1_SDI0_M0/PCIE_30X1_0_RST|	195|	196|	GBE_MDI2_N|
|I2S1_LRCK_M0/PCIE_30X1_1_RST|	197|	198|	GBE_MDI2_P|
|I2S0_SCLK/PCIE_30X1_1_WAKE|	199|	200|	GND_54|
|GND_55|	201|	202|	GBE_MDI3_N|
|UART1_TXD|	203|	204|	GBE_MDI3_P|
|UART1_RXD|	205|	206|	GPIO07/GPIO3_A0/PWM10|
|UART1_RTS|	207|	208|	GPIO08/GPIO1_C6/PWM15_IR|
|UART1_CTS|	209|	210|	32KOUT|
|I2S1_MCLK_M0/PCIE30X1_1_CLKREQN_M1|211|212|GPIO10/GPIO4_A3/PCIE_30X1_0_CLKREQ|
|CAM_I2C_SCL|	213|	214|	RECOVERY_KEY|
|CAM_I2C_SDA|	215|	216|	GPIO11/GPIO3_B0/MIPI_CAM3_CLKOUT|
|GND_56|	217|	218|	GPIO12/I2S2_MCLK_M1/MIPI_CAM3_PDN|
|SDMMC_DAT0|	219|	220|	I2S1_DOUT|
|SDMMC_DAT1|	221|	222|	I2S1_DIN|
|SDMMC_DAT2|	223|	224|	I2S1_FS|
|SDMMC_DAT3|	225|	226|	I2S1_SCLK|
|SDMMC_CMD|	227|	228|	GPIO08|
|SDMMC_CLK|	229|	230|	GPIO14|
|GND_57|	231|	232|	I2C2_SCL|
|SHUTDOWN_REQ|	233|234|	I2C2_SDA|
|PMIC_BBAT|	235|	236|	UART2_TXD|
|POWER_EN|	237|	238|	UART2_RXD|
|SYS_RESET|	239|	240|	SLEEP/WAKE
|GND|	241|	242|	GND|
|GND|	243|	244|	GND|
|GND|	245|	246|	GND|
|GND|	247|	248|	GND|
|GND|	249|	250|	GNDs|
|VDD_IN|	251|	252|	VDD_IN|
|VDD_IN|	253|	254|	VDD_IN|
|VDD_IN|	255|	256|	VDD_IN|
|VDD_IN|	257|	258|	VDD_IN|
|VDD_IN|	259|	260|	VDD_IN  |

</details>

## AIM-IO 产品简介 {#aim-io}

AIM-IO是 ArmSoM AIM 系列的一款 IO 板，尺寸为 100x80x29 毫米，同时兼容当前的 Jetson Nano 核心模块。它是一款专为创客、学习者和开发者设计的微型 AI 计算机，能够快速将 AI 技术应用于各种智能设备。

<span id="aim-io-doc-section-1" className="armsom-section-anchor" />

## AIM-IO 硬件信息 {#aim-io-硬件信息}

### 硬件接口 {#aim-io-硬件接口}

![AIM-IO](/img/aim/aim-io.png)

<div className="armsom-image-caption">AIM-IO</div>


:::tip
AIM-IO Board 使用12V DC供电。
:::

### 硬件规格 {#aim-io-硬件规格}

AIM-IO板是专为AIM模块开发者设计的扩展板，旨在帮助完成系统和嵌入式板开发。与Jetson Nano开发者套件（B01）相比，AIM-IO板尺寸相同，但增加了2个MIPI CSI接口、1个M.2 Key-E接口和1个MIPI DSI接口。

- 1x DisplayPort
- 1x HDMI输出
- 4x USB 3.0 Type-A
- 千兆以太网
- GPIO：40针扩展头
- POE：5V Power Over Ethernet
- 电源连接器：DC Barrel插孔，用于12V电源输入
- 扩展：M.2（E键，支持PCIe/USB/SDIO/UART）、microSD
- MIPI DSI：1x 4通道MIPI DSI，支持最高4K@60fps（x4）
- MIPI CSI0/1：2x 2通道MIPI CSI，每条通道最高2.5Gbps
- MIPI CSI2/3：1x 4通道MIPI CSI，每条通道最高2.5Gbps
- 通过USB Type-C进行固件闪存和设备模式
- 尺寸：100 x 80 x 29 毫米 (3.94 x 3.15 x 1.14 英寸)
- 重量: 78.4g

### 引脚定义 {#aim-io-引脚定义}

<details id="board-40pin">
    <summary>
       AIM7 40-PIN 座子
    </summary>


![ArmSoM AIM7 40Pin](/img/board-pinouts/aim7-40pin.svg)

[打开高清引脚图](/img/board-pinouts/aim7-40pin.svg)

依据 AIM-IO V1.1 原理图核查。图中数字为物理引脚号，NC 为未连接，DNP 为元件默认不装。复用功能需匹配系统配置；GPIO传统编号不是 Linux gpiochip 行号。 第15脚为 GPIO3_B0，第31脚为 GPIO3_B4。

<div className='gpio_style'>

| GPIO 编号（传统） | 功能 | 物理脚 | 物理脚 | 功能 | GPIO 编号（传统） |
| :---: | :--- | :---: | :---: | :--- | :---: |
| — | +3.3V | <div className='red'>1</div> | <div className='red'>2</div> | +5.0V | — |
| 20 | UART0_RX_M0 / I2C4_SDA_M2 / PWM2_M0 / GPIO0_C4 | <div className='green'>3</div> | <div className='red'>4</div> | +5.0V | — |
| 21 | UART0_TX_M0 / I2C4_SCL_M2 / PWM4_M0 / I2S1_SDI0_M1 / GPIO0_C5 | <div className='green'>5</div> | <div className='black'>6</div> | GND | — |
| 128 | SPI0_MISO_M1 / UART9_RTSN_M1 / I2S1_MCLK_M0 / GPIO4_A0 | <div className='green'>7</div> | <div className='green'>8</div> | SPDIF0_TX_M0 / I2C5_SCL_M3 / UART1_TX_M1 / GPIO1_B6 | 46 |
| — | GND | <div className='black'>9</div> | <div className='green'>10</div> | PWM13_M2 / I2C5_SDA_M3 / UART1_RX_M1 / GPIO1_B7 | 47 |
| 62 | PWM14_M2 / I2C8_SCL_M2 / UART1_RTSN_M1 / GPIO1_D6 | <div className='green'>11</div> | <div className='green'>12</div> | SPI0_MOSI_M1 / UART9_CTSN_M1 / I2S1_SCLK_M0 / GPIO4_A1 | 129 |
| 58 | SPI1_CLK_M2 / UART4_TX_M0 / PWM0_M1 / I2C1_SCL_M4 / I2S0_SDO3 / I2S0_SDI2 / GPIO1_D2 | <div className='green'>13</div> | <div className='black'>14</div> | GND | — |
| 104 | GPIO3_B0 / PWM9_M0 / MIPI_CAM3_CLKOUT | <div className='green'>15</div> | <div className='green'>16</div> | GPIO1_D5 / SPI1_CS1_M2 / PDM0_SDI0_M0 | 61 |
| — | +3.3V | <div className='red'>17</div> | <div className='green'>18</div> | SPI1_CS0_M2 / UART4_RX_M0 / PWM1_M1 / I2C1_SDA_M4 / PDM0_SDI3_M0 / I2S0_SDI1 / GPIO1_D3 | 59 |
| 42 | SPI0_MOSI_M2 / PCIE30X4_PERSTN_M3 / UART4_RX_M2 / PDM1_SDI3_M1 / GPIO1_B2 | <div className='green'>19</div> | <div className='black'>20</div> | GND | — |
| 41 | SPI0_MISO_M2 / PCIE30X4_WAKEN_M3 / PDM1_SDI2_M1 / GPIO1_B1 | <div className='green'>21</div> | <div className='green'>22</div> | SPI1_MISO_M2 / UART6_TX_M2 / I2C7_SCL_M0 / I2S0_SDO1 / GPIO1_D0 | 56 |
| 43 | SPI0_CLK_M2 / SATA0_ACT_LED_M1 / PCIE30X1_0_WAKEN_M2 / PDM1_CLK1_M1 / UART4_TX_M2 / GPIO1_B3 | <div className='green'>23</div> | <div className='green'>24</div> | SPI0_CS0_M2 / PCIE30X1_0_PERSTN_M2 / PDM1_CLK0_M1 / UART7_RX_M2 / GPIO1_B4 | 44 |
| — | GND | <div className='black'>25</div> | <div className='green'>26</div> | GPIO1_B5 / UART7_TX_M2 / SPI0_CS1_M2 | 45 |
| 16 | I2C2_SDA_M0 / CAN0_RX_M0 / SPI0_MOSI_M0 / PWM1_M0 / GPIO0_C0 | <div className='green'>27</div> | <div className='green'>28</div> | GPIO0_B7 / CAN0_TX_M0 / SPI0_CS1_M0 / I2C2_SCL_M0 / PWM0_M0 | 15 |
| 103 | PWM8_M0 / GPIO3_A7 | <div className='green'>29</div> | <div className='black'>30</div> | GND | — |
| 108 | GPIO3_B4 / I2S2_MCLK_M1 / MIPI_CAM3_PDN | <div className='green'>31</div> | <div className='green'>32</div> | GPIO3_A0 / PWM10_M0 / SPI4_MISO_M1 / I2C6_SDA_M4 / I2S3_MCLK | 96 |
| 105 | UART2_TX_M2 / PWM2_M1 / GPIO3_B1 | <div className='green'>33</div> | <div className='black'>34</div> | GND | — |
| 130 | I2S1_LRCK_M0 / SPI0_CLK_M1 / GPIO4_A2 | <div className='green'>35</div> | <div className='green'>36</div> | GPIO1_D7 / I2C8_SDA_M2 / UART1_CTSN_M1 | 63 |
| 57 | UART6_RX_M2 / I2C7_SDA_M0 / GPIO1_D1 / SPI1_MOSI_M2 | <div className='green'>37</div> | <div className='green'>38</div> | GPIO4_A5 / UART3_TX_M2 / I2C3_SDA_M2 / I2S1_SDI0_M0 | 133 |
| — | GND | <div className='black'>39</div> | <div className='green'>40</div> | GPIO4_B1 / SPI0_CS1_M1 / UART8_RX_M0 / I2C6_SCL_M3 / I2S1_SDO0_M0 | 137 |

</div>
</details>

<span id="doc-section-3" className="armsom-section-anchor" />

## 开发资料

### SDK源码

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

<a href="https://github.com/ArmSoM/rockchip-kernel" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>AIM7 kernel</h2>
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
            <h2>AIM7 uboot</h2>
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

ArmSoM 提供以下官方系统镜像，请在网盘中按产品型号选择所需版本。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>百度网盘链接</span>
</a>

| 标识 | 系统镜像 | 下载入口 |
|:--------: | :---------: | :--------:  | 
| ![Debian 12](/img/sige/debian12-1.png) | **适用于 AIM7 的 Debian 12：** <br/>Debian 12（Bookworm）系统镜像。请在网盘中选择对应产品文件夹，镜像版本及桌面类型以实际文件为准。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) |
| ![Ubuntu](/img/sige/ubuntu.png) | **适用于 AIM7 的 Ubuntu 22.04 LTS：** <br/>Ubuntu 22.04 LTS（Jammy Jellyfish）系统镜像。请在网盘中按产品型号选择对应镜像。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) |

### 第三方镜像

| 标识 | 介绍 | 固件下载 |
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | **适用于 AIM7 的 Armbian：** <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。 | [Armbian 固件下载](https://armbian.com/boards/armsom-aim7-io)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | **适用于 AIM7 的 ubuntu-rockchip：** <br/> 该项目旨在为Rockchip RK3588设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。 | [Ubuntu-Rockchip 固件下载](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### 硬件资料

获取开发套件原理图、PCB、DXF等硬件资料，快速投入开发

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>百度网盘链接</span>
</a>

<br/>

<div class="cards">
    <a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>AIM7 SCH</h2>
            </div>
        </div>
</a>

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>AIM7 2D</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>AIM7 SMD</h2>
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
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
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

<span id="aim-io-doc-section-2" className="armsom-section-anchor" />

## AIM7 使用手册 {#aim-io-使用手册}

AIM-IO使用手册，帮助用户了解 AIM 产品的基本使用和需要的准备工作，开始使用你的ArmSoM-AIM🚀

<span id="aim-io-doc-section-3" className="armsom-section-anchor" />

### 入门准备 {#aim-io-入门准备}

在开始使用 ArmSoM-AIM 产品之前，请准备好以下物品

#### 工具准备 {#aim-io-工具准备}
* 电源
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在ArmSoM-AIM系列上写入镜像，您需要Type-C数据线连接 ArmSoM-AIM 和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：

您可以将 ArmSoM-AIM 设置为带有桌面的交互式计算机，也可以将其设置为仅可通过网络访问的无头计算机。要将 ArmSoM-AIM 设置为Headless计算机，您在初次安装操作系统时配置主机名、用户帐户、网络连接和 SSH 。如果您想直接使用 ArmSoM-AIM，则需要以下附加配件：

**可选选项**
* 键盘 & 鼠标
* HDMI显示器和HDMI线
* Ethernet 线（网线）
* 摄像头模块
  * 推荐使用 [camera-module1](./armsom-camera-module1) 模组。
* LCD显示屏
  * 推荐使用 [Display 10 HD](./armsom-display-10-hd)。

#### 电源 {#aim-io-电源}

ArmSoM-AIM 系列型号供电所需的电源规格为12V/2-3A。您可以使用任何提供正确电源模式的高质量电源。

将电源插入DC Barrel插孔, 请确保使用正确端口！

<span id="aim-io-doc-section-4" className="armsom-section-anchor" />

### 烧录方式选择 {#aim-io-烧录方式选择}

ArmSoM 系列产品的系统镜像包含了多种根文件系统，我们可以根据自己需求选择相应的镜像下载

:::info
系统镜像包括了linux内核，基本的程序等，是运行ArmSoM系列产品必须项， 所以我们需要在运行产品前为产品安装镜像
:::

#### 获取系统镜像 {#aim-io-获取系统镜像}

访问百度网盘资源介绍页面获取系统镜像: [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)

:::tip
1. 官方镜像的默认账号/密码为armsom/armsom，root/root。
2. Armbian，Openwrt是ArmSoM为开源爱好者提供的更多选择。
:::

#### 烧录Armbian，Openwrt系统 {#aim-io-烧录armbianopenwrt系统}

##### 读卡器烧录到microSD {#aim-io-读卡器烧录到microsd}

**通过 Etcher 刷入操作系统镜像到 microSD**

该方法适用于烧录系统到SD卡， Windows、MacOS、Linux x64 操作系统都可用。

:::tip 准备
    1. 一个 microSD 卡
    2. 一个 SD 卡读卡器
    3. 下载对应产品的 Ubuntu / Armbian / Openwrt系统镜像
    4. 把 SD 卡插入 SD 读卡器, 然后把 SD 读卡器插入电脑的 USB 接口
:::

**通过 Etcher 刷入操作系统镜像到 microSD**

1. 从 [balena 官网](https://etcher.balena.io/) 下载 balenaEtcher ，选择指定主机系统下载，该处Linux的程序格式是 AppImage。

2. 将要烧录的 MicroSD卡插入 MicroSD读卡器

3. 打开 etcher 窗口，首先选择 Flash from file，找到您镜像下载位置，双击选择。

![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-from-file.png)

<div className="armsom-image-caption">balenaEtcher-flash-from-file</div>


4. 然后点击 Select target，选择自己要烧录的 MicroSD卡。
5. 点击 Flash, 烧录等待成功，这里需要一段时间。
6. 烧录成功，会显示如图所示

![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-success.png)

<div className="armsom-image-caption">balenaEtcher-flash-from-file</div>


:::tip 烧录失败
    1. windows烧录镜像需要"以管理员身份运行"，linux某些用户可能需要通过chmod命令修改成_可执行_运行。
    2. 如果刷写操作系统镜像错误, 请再试一次。
:::

**通过 Win32DiskImager 刷入操作系统镜像到 microSD**

1. [下载](https://win32diskimager.org/)刷写工具 Win32DiskImager
2. 打开 Win32DiskImager
3. 点击文件夹图标按钮然后选择要刷写的镜像
4. 完成上述操作后，单击 Write 按钮开始刷写镜像，然后等待写入镜像完成。

##### USB线烧录到eMMC {#aim-io-usb线烧录到emmc}

###### 工具获取和安装 {#aim-io-工具获取和安装}

烧录镜像到eMMC需要使用到 RKDevTool 烧录工具和 RK驱动助手(DriverAssitant)

点击进入链接:[百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)

![baidu-flash-tool](/img/general-tutorial/baidu-flash-tool.jpeg)

<div className="armsom-image-caption">baidu-flash-tool</div>


###### 安装DriverAssitant {#aim-io-安装driverassitant}

解压DriverAssitant软件压缩包，双击 DriverInstall.exe 进入驱动安装界面。

点击 **驱动安装** 即可开始安装驱动。如果不确定以前是否安装过旧版驱动，先点击驱动卸载移除旧版本驱动程序，再点击驱动安装。

![install-driver-assitant](/img/general-tutorial/install-driver-assitant.png)

<div className="armsom-image-caption">install-driver-assitant</div>


###### 安装RKDevTool {#aim-io-安装rkdevtool}

瑞芯微专用USB烧录工具，Windows平台，可以使用USB接口将系统镜像下载到产品中。

解压压缩包后无需安装即可使用，双击 RKDevTool.exe 进入软件界面。

软件主要有三大部分，分别是下载镜像（可根据地址烧录镜像）、升级固件和高级功能

###### MASKROM/Loader模式烧录镜像 {#aim-io-maskromloader模式烧录镜像}

该模式适合产品未烧录系统或烧录的系统损坏无法运行 **（适应一切状况）**

我们打开 RKDevTool 烧录工具，并设置产品进入烧录模式。

```
请参照产品相关说明进行操作，不同产品进入 Maskrom 模式的方式基本相同。

1. 准备Type-C线，用于镜像烧录
2. 将所有有可能给产品供电的接线都断开，如USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口（切勿连接电脑转接HUB），然后打开软件RKDevTool
4. 短接12pin接口上的10和11（如下）进入loader模式，然后使用 DC 给产品供电
5. 等待软件提示 发现一个MASKROM/LOADER设备（如下图所示），即可松开按键
6. 如果不成功，重复2-5步骤。
```

短接 10和11进入loader模式
![aimio-recovery](/img/aim/aimio-recovery.png)

<div className="armsom-image-caption">aimio-recovery</div>


按住aim7上maskrom按键进入maskrom模式

![aimio-maskrom](/img/aim/aimio-maskrom.png)

<div className="armsom-image-caption">aimio-maskrom</div>



开始烧录系统

![rkdevtool-install-emmc](/img/general-tutorial/rkdevtool-install-emmc.png)

<div className="armsom-image-caption">rkdevtool-install-emmc</div>


1. 选择Download Image项
2. 确认板子已经进入Maskrom模式
3. 点击空白单元格选择待使用的 MiniLoaderAll 和 Image 文件，对应的 MiniLoaderAll 和 Image 存放在百度网盘。
4. 在 Storage 选项中选择目标介质EMMC，并选择 强制按地址写 后点击 执行
5. 等待写入完成，随后设备将自动重启，如上图右侧 Download image OK

#### 烧录Debian系统 {#aim-io-烧录debian系统}

##### 读卡器烧录到microSD {#aim-io-读卡器烧录到microsd-1}
###### 安装SDDiskTool {#aim-io-安装sddisktool}

烧录镜像到eMMC需要使用到烧录工具 SDDiskTool_版本号.exe

点击进入链接:[百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)

![baidu-SDDiskTool](/img/general-tutorial/baidu-sd-disk-tool.png)

<div className="armsom-image-caption">baidu-SDDiskTool</div>


解压压缩包后无需安装即可使用，双击 SD_Firmware_Tool.exe 进入软件界面。


###### 烧录镜像 {#aim-io-烧录镜像}

打开烧录SDDiskTool的可执行文件SD_Firmware_Tool.exe并插入SD卡。

首先选择正确的要烧录的SD卡，然后将功能模式选择位 SD Boot ， 再选择要烧录的镜像，最后点击开始创建烧录镜像到SD卡。

![SDDiskTool](/img/general-tutorial/sd-disk-tool.png)

<div className="armsom-image-caption">SDDiskTool</div>


耐心等待SD卡烧录完整，当镜像较大时，烧录的时间会相应变长。

:::tip 提示
1. 点击 Create 会有一定概率报错说无法烧录，可以关闭错误窗口再进行开始创建，如果还不行尝试格式化SD卡。
2. 百度网盘下载的固件需要解压后才能加载，Windows PC需要在管理员权限运行工具才可执行。
:::

##### USB线烧录到eMMC {#aim-io-usb线烧录到emmc-1}

我们打开 RKDevTool 烧录工具，并设置产品进入烧录模式。

```
1. 准备Type-C线，用于镜像烧录
2. 将所有有可能给产品供电的接线都断开，如USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口（切勿连接电脑转接HUB），然后打开软件RKDevTool
4. 按住Recovery或者Maskrom按键，然后使用 DC 给产品供电
5. 等待软件提示 发现一个LOADER设备（如下图所示），即可松开按键
6. 如果不成功，重复2-5步骤。
```

![recovery-flash-tool](/img/general-tutorial/recovery-flash-update.png)

<div className="armsom-image-caption">recovery-flash-tool</div>


![maskroom-flash-tool](/img/general-tutorial/maskroot-flash-update.jpg)

<div className="armsom-image-caption">maskroom-flash-tool</div>


刷写进度显示在右边，完成后它会提示你：
![rkdevtool-success](/img/tools/rkdevtool-success.png)

<div className="armsom-image-caption">rkdevtool-success</div>


:::tip 烧写失败分析
如果烧写过程中出现Download Boot Fail, 或者烧写过程中出错，如下图所示，通常是由于使用的USB线连接不良、劣质线材，或者电脑USB口驱动能力不足导致的，请更换USB线或者电脑USB端口排查。
:::

:::note Maskrom模式烧录 和 Loader模式烧录有什么区别？
* Maskrom：Flash 在未烧录固件时，芯⽚会引导进⼊ Maskrom 模式，可以进⾏初次固件的烧写；
开发调试过程中若遇到 Loader ⽆法正常启动的情况，也可进⼊ Maskrom 模式烧写固件。
* Loader：原理是在uboot启动期间检测到引脚被按下，Loader 模式下，可以进⾏固件的烧写、升级。
可以通过⼯具单独烧写某⼀个分区镜像⽂件，⽅便调试。
:::

<span id="aim-io-doc-section-5" className="armsom-section-anchor" />

### 接口使用 {#aim-io-接口使用}

**AIM5（RK3576）和 AIM7（RK3588）共用 AIM-IO 底板，接口连接和基本使用均可参考本篇。** 下方日志以 AIM7 官方 Debian 12 / Linux 6.1 镜像为例；设备名称、GPIO 编号及 overlay 按所用核心板和镜像确认。

#### 1. 调试串口 {#aim-io-1-调试串口}

使用 USB 转 TTL 串口模块连接底板的调试接口，按下图交叉连接 RX/TX，并连接 GND。

![armsom-aimio-debug](/img/aim/armsom-aimio-debug.png)

<div className="armsom-image-caption">armsom-aimio-debug</div>


| AIM-IO 调试接口 | 串口模块 |
| --- | --- |
| GND（pin 11） | GND |
| RX（pin 3） | TX |
| TX（pin 4） | RX |

以上编号为图中调试接口的引脚编号，不是 40PIN 排针编号。

:::tip 串口通信参数

- 波特率：**1500000**
- 数据位：8
- 停止位：1
- 校验位：无
- 流控：无

:::

配置串口终端后给开发板上电，即可查看启动日志并登录系统。

| 用户名 | 默认密码 |
| --- | --- |
| `root` | `root` |
| `armsom` | `armsom` |

#### 2. 以太网口 {#aim-io-2-以太网口}

1. 首先将网线的一端插入 ArmSoM-AIM 的以太网接口，网线的另一端接入路由器，并确保
网络是畅通的
2. 系统启动后会通过 DHCP 自动给以太网卡分配 IP 地址，不需要其他任何配置
3. 在ArmSoM-AIM 的 Linux 系统中查看 IP 地址的命令如下所示

```bash
root@armsom-aim7:/# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether c2:ed:bc:48:3b:7a brd ff:ff:ff:ff:ff:ff
    inet 192.168.10.106/24 brd 192.168.10.255 scope global dynamic noprefixroute eth0
       valid_lft 86396sec preferred_lft 86396sec
    inet6 fe80::7351:88a9:9b4c:11be/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

ArmSoM-AIM 启动后查看 IP 地址有三种方法：

- 接 HDMI 显示器，然后登录系统使用终端输入 ip a 命令查看 IP 地址
- 接[调试串口](#aim-io-1-调试串口)终端输入 ip a 命令来查看 IP 地址
- 如果没有调试串口，也没有 HDMI 显示器，还可以通过路由器的管理界面来查看ArmSoM-AIM 网口的 IP 地址。不过这种方法经常有人会无法正常看到ArmSoM-AIM 的 IP 地址。如果看不到，调试方法如下所示：
    - 首先检查 Linux 系统是否已经正常启动，如果ArmSoM-AIM的绿灯常亮，一般是正常启动了，如果只亮红灯，说明系统都没正常启动。
    - 检查网线有没有插紧，或者换根网线试下。
    - 换个路由器试下，路由器的问题有遇到过很多，比如路由器无法正常分配IP 地址，或者已正常分配 IP 地址但在路由器中看不到。
    - 如果没有路由器可换就只能连接 HDMI 显示器或者使用调试串口来查看 IP地址。

:::tip
另外需要注意的是ArmSoM-AIM  DHCP 自动分配 IP 地址是不需要任何设置的。
:::


4. 使用工具 ping 判断是否连通网络。

测试网络连通性的命令如下，ping 命令可以通过 Ctrl+C 快捷键来中断运行
```bash
armsom@armsom-aim7:~$ ping www.baidu.com
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

#### 3. M.2 Key E（Wi-Fi / 蓝牙） {#aim-io-3-m2-key-ewi-fi--蓝牙}

AIM-IO 提供 M.2 Key E 接口，以下以已实测的 **Intel AX200** 为例：Wi-Fi 通过 PCIe 连接，蓝牙通过 USB 连接。安装网卡、连接天线后上电。

##### 识别 AX200 {#aim-io-识别-ax200}

```bash
armsom@armsom:~$ lspci -nnk -s 01:00.0
```

实测输出：

```text
01:00.0 Network controller [0280]: Intel Corporation Wi-Fi 6 AX200 [8086:2723] (rev 1a)
        Subsystem: Intel Corporation Wi-Fi 6 AX200NGW [8086:0084]
        Kernel driver in use: iwlwifi
        Kernel modules: iwlwifi
```

PCIe 地址可先用 `lspci -nn` 查询。出现 `Kernel driver in use: iwlwifi` 表示驱动已绑定；如日志提示 `no suitable firmware found`，检查镜像是否包含 `/lib/firmware/iwlwifi-cc-a0-72.ucode`。

##### 使用 Wi-Fi {#aim-io-使用-wi-fi}

1. 启用 NetworkManager 和 Wi-Fi，并确认无线接口名称（以下以 `wlp1s0` 为例）：

```bash
armsom@armsom:~$ sudo systemctl start NetworkManager
armsom@armsom:~$ sudo nmcli radio wifi on
armsom@armsom:~$ nmcli device status
```

2. 扫描并列出附近的 Wi-Fi：

```bash
armsom@armsom:~$ sudo nmcli device wifi list ifname wlp1s0 --rescan yes
```

3. 连接指定 Wi-Fi，按提示输入密码：

```bash
armsom@armsom:~$ sudo nmcli --ask device wifi connect '你的WiFi名称' ifname wlp1s0
```

连接成功后，NetworkManager 会保存连接，后续开机自动连接。查看连接状态：

```bash
armsom@armsom:~$ nmcli -f DEVICE,TYPE,STATE device
```

实测输出节选：

```text
DEVICE          TYPE      STATE
wlp1s0          wifi      connected
```

4. 断开当前 Wi-Fi：

```bash
armsom@armsom:~$ sudo nmcli device disconnect wlp1s0
```

##### 使用蓝牙 {#aim-io-使用蓝牙}

```bash
armsom@armsom:~$ lsusb -d 8087:0029
armsom@armsom:~$ bluetoothctl show
```

实测输出节选：

```text
Bus 004 Device 002: ID 8087:0029 Intel Corp. AX200 Bluetooth
Controller 38:7A:0E:75:1A:15 (public)
        Name: armsom
        Alias: armsom
        Class: 0x007c0000
        Powered: yes
```

将目标设备设为可发现/配对模式，然后在 `bluetoothctl` 中操作；将示例地址替换为扫描到的设备地址：

```text
armsom@armsom:~$ bluetoothctl
[bluetooth]# power on
[bluetooth]# agent on
[bluetooth]# default-agent
[bluetooth]# scan on
[bluetooth]# pair AA:BB:CC:DD:EE:FF
[bluetooth]# trust AA:BB:CC:DD:EE:FF
[bluetooth]# connect AA:BB:CC:DD:EE:FF
[bluetooth]# scan off
[bluetooth]# quit
```

#### 4. HDMI {#aim-io-4-hdmi}

| 型号 | AIM7 | AIM5  |
| ----- |  ----- | ------ |
| 分辨率  | 8Kp60 | 4Kp120 |

1. 使用 HDMI 线连接 ArmSoM-AIM 和 HDMI 显示器
2. 启动 linux 系统后如果 HDMI 显示器有图像输出说明 HDMI 接口使用正常

:::tip
注意，很多笔记本电脑虽然带有 HDMI 接口，但是笔记本的 HDMI 接口一般只有输出功能，并没有 HDMI in 的功能，也就是说并不能将其他设备的 HDMI 输出显示到笔记本的屏幕上。
当想把开发板的 HDMI 接到笔记本电脑 HDMI 接口时，请先确认清楚您的笔记本是支持 HDMI in 的功能。
当 HDMI 没有显示的时候，请先检查使用的系统是否是带桌面的版本，如果是服务器版本只能看到终端
:::

#### 5. DP {#aim-io-5-dp}

| 型号 | AIM7 | AIM5  |
| ----- |  ----- | ------ |
| 分辨率  | 4Kp60 | 4Kp60 |

1. 使用 DP 线连接 ArmSoM-AIM 和 Dp 显示器
2. 启动 linux 系统后如果 Dp 显示器有图像输出说明 HDMI 接口使用正常

#### 6. USB {#aim-io-6-usb}

AIM-IO 提供 4 个 USB 3.0 Type-A 接口，可连接键鼠、U 盘及 UVC 摄像头。

##### 键鼠和 USB 速率 {#aim-io-键鼠和-usb-速率}

连接键鼠后可直接在桌面中操作，也可查看 USB 拓扑：

```bash
armsom@armsom:~$ lsusb -t
```

实测输出节选：

```text
/:  Bus 03.Port 1: Dev 1, Class=root_hub, Driver=xhci-hcd/1p, 5000M
    |__ Port 1: Dev 2, If 0, Class=Hub, Driver=hub/4p, 5000M
        |__ Port 4: Dev 3, If 0, Class=Mass Storage, Driver=usb-storage, 5000M
```

应查看具体设备行的速率：上例 U 盘的 `5000M` 表示协商到 USB 3.0；`480M` 为 USB 2.0。键鼠使用较低速率是正常现象，不能仅根据 root hub 的速率判断外设速率。

##### USB 存储设备 {#aim-io-usb-存储设备}

```bash
armsom@armsom:~$ lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS /dev/sda
```

实测输出：

```text
NAME    SIZE TYPE FSTYPE MOUNTPOINTS
sda    29.3G disk
└─sda1 29.3G part vfat
```

确认实际设备及分区后挂载；以下以 `/dev/sda1` 为例：

```bash
armsom@armsom:~$ sudo mkdir -p /mnt/usb
armsom@armsom:~$ sudo mount /dev/sda1 /mnt/usb
armsom@armsom:~$ ls /mnt/usb
# 使用完成后再拔出
armsom@armsom:~$ sudo umount /mnt/usb
```

##### USB 摄像头 {#aim-io-usb-摄像头}

连接支持 UVC 协议的 USB 摄像头，通过下列命令查找对应节点和支持的格式。不要直接使用 MIPI 摄像头的节点。

```bash
armsom@armsom:~$ v4l2-ctl --list-devices
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --list-formats-ext
```

将 `/dev/videoX` 替换为实际的 UVC 节点。桌面镜像可使用 Cheese 预览，或在本机图形会话中运行：

```bash
armsom@armsom:~$ gst-launch-1.0 v4l2src device=/dev/videoX ! videoconvert ! autovideosink
```

##### USB Type-C 烧录 {#aim-io-usb-type-c-烧录}

底板 Type-C 接口可在 Loader/Maskrom 模式下连接电脑烧录系统，操作见本页[烧录方式选择](#aim-io-烧录方式选择)。板卡仍按前文使用 12V DC 供电。

#### 7. TF 卡 {#aim-io-7-tf-卡}

从 eMMC 启动系统后插入 TF 卡，查看设备和分区。实测 TF 卡为 `/dev/mmcblk1`，eMMC 为 `/dev/mmcblk0`，请勿混淆。

```bash
armsom@armsom:~$ lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS /dev/mmcblk1
armsom@armsom:~$ cat /sys/class/block/mmcblk1/device/type
```

实测输出：

```text
NAME         SIZE TYPE FSTYPE MOUNTPOINTS
mmcblk1     29.1G disk
├─mmcblk1p1    8M part
├─mmcblk1p2  128M part ext2
└─mmcblk1p3   29G part ext4
SD
```

上例使用的是含系统镜像的 TF 卡；普通数据卡的分区可能不同。根据 `lsblk` 结果选择有文件系统的分区挂载，下面只读挂载示例中的第三分区：

```bash
armsom@armsom:~$ sudo mkdir -p /mnt/tfcard
armsom@armsom:~$ sudo mount -o ro /dev/mmcblk1p3 /mnt/tfcard
armsom@armsom:~$ ls /mnt/tfcard
armsom@armsom:~$ sudo umount /mnt/tfcard
```

#### 8. RTC {#aim-io-8-rtc}

AIM7 实测使用 `i2c4` 上的 HYM8563 兼容 RTC。连接 RTC 备用电池后，确认设备注册：

```bash
armsom@armsom:~$ cat /sys/class/rtc/rtc0/name
armsom@armsom:~$ dmesg | grep rtc-hym8563
```

实测输出节选：

```text
rtc-hym8563 4-0051
[    2.149494] rtc-hym8563 4-0051: rtc information is valid
[    2.156470] rtc-hym8563 4-0051: registered as rtc0
```

先确认系统时间正确，再将其写入 RTC：

```bash
armsom@armsom:~$ date
armsom@armsom:~$ sudo hwclock -w -f /dev/rtc0
armsom@armsom:~$ sudo hwclock -r -f /dev/rtc0
armsom@armsom:~$ sudo poweroff
```

保持 RTC 电池连接，只断开主电源。等待几分钟后重新上电，用 `hwclock -r -f /dev/rtc0` 检查时间是否继续前进；不要断开 RTC 电池后再验证断电保持功能。

#### 9. MIPI-CSI {#aim-io-9-mipi-csi}

##### 摄像头接口与 overlay {#aim-io-摄像头接口与-overlay}

AIM5、AIM7 的接口位置和摄像头模组相同。下面的 I2C 地址和完整文件名以 AIM7 为例；AIM5 使用对应前缀和启动配置：

| 核心板 | 启动配置文件 | 摄像头 overlay 前缀 |
| --- | --- | --- |
| AIM5 | `/boot/uEnv/uEnvarmsom-aim5-io.txt` | `rk3576-armsom-aim5-camera-` |
| AIM7 | `/boot/uEnv/uEnvarmsom-aim7-io.txt` | `rk3588-armsom-aim7-camera-` |

连接排线前先断电，并确认方向。

| 接口 | 底板位号 | 摄像头 | I2C 地址 | overlay 文件名 |
| --- | --- | --- | --- | --- |
| CAM0 | J13 | IMX219 | `2-0010` | `rk3588-armsom-aim7-camera-imx219-cs0-overlay.dtbo` |
| CAM1 | J49 | IMX219 | `4-0010` | `rk3588-armsom-aim7-camera-imx219-cs1-overlay.dtbo` |
| CAM2 | J12 | OV13850 | `3-0010` | `rk3588-armsom-aim7-camera-ov13850-cs2-overlay.dtbo` |
| CAM3 | J24 | OV13850 | `6-0010` | `rk3588-armsom-aim7-camera-ov13850-cs3-overlay.dtbo` |

编辑对应核心板的启动配置，以下以 AIM7 为例：

```bash
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim7-io.txt
```

按实际连接的摄像头启用对应行，以下为四路全部启用时的配置：

```ini
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-imx219-cs0-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-imx219-cs1-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-ov13850-cs2-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-ov13850-cs3-overlay.dtbo
```

:::tip
AIM5 将上述文件名的 `rk3588-armsom-aim7-camera-` 替换为 `rk3576-armsom-aim5-camera-`，并编辑 AIM5 对应的 uEnv 文件。取消行首 `#` 即为启用。建议首次接线时每次只启用一路，确认后再按需组合；旧镜像若缺少上述文件，应先更新对应核心板的内核包。
:::

保存后重启；

```bash
armsom@armsom:~$ sudo reboot
```

##### 确认 sensor ID {#aim-io-确认-sensor-id}

```bash
armsom@armsom:~$ dmesg | grep imx219
armsom@armsom:~$ dmesg | grep ov13850
```

此前在本板四路同时启用时保存的实测日志节选：

```text
[    3.019918] ov13850 3-0010: Detected OV00d850 sensor, REVISION 0xb2
[    3.025395] ov13850 6-0010: Detected OV00d850 sensor, REVISION 0xb2
[    3.086742] imx219 2-0010: Detected IMX000219 sensor
[    3.119883] imx219 4-0010: Detected IMX000219 sensor
```

上述 `Detected` 行表示驱动读到了对应传感器 ID。

##### 基础命令与工具 {#aim-io-基础命令与工具}

AIM5、AIM7 使用同一套 ArmSoM SDK，以下采集方法通用。先查找目标摄像头对应的 **ISP 输出节点**，将命令中的 `/dev/videoX` 替换为实际节点。

```bash
armsom@armsom:~$ v4l2-ctl --list-devices
armsom@armsom:~$ media-ctl -d /dev/mediaX -p
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --list-formats-ext
```

部分版本镜像需要手动安装 GStreamer。若 `gst-launch-1.0 --version` 提示命令不存在，执行：

更新索引前，请按[更新 APT 软件源](/getting-start/apt-update#fresh-image-apt)检查系统时间和软件源。

```bash
armsom@armsom:~$ sudo apt-get update
armsom@armsom:~$ sudo apt-get install -y gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-x
```

录像使用 SDK 自带的 Rockchip 硬件编码插件，可用 `gst-inspect-1.0 mpph264enc` 检查；若缺少该插件，需要使用匹配的 SDK 镜像或补装对应插件。

采集前重启镜像自带的 3A 服务：

```bash
armsom@armsom:~$ sudo systemctl restart rkaiq_3A.service
```

以下命令每次只运行一条。预览需在连接显示器，按 `Ctrl+C` 退出；录像带 `-e`，便于结束时写完整 MP4 文件。

##### OV13850 摄像头 {#aim-io-ov13850-摄像头}

以下以 `2112×1568 @ 30fps` 为例，分辨率和帧率以实际节点支持的模式为准。

**抓图（NV12 原始帧，不是 JPEG）：**

```bash
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=ov13850.nv12 --stream-count=1 --stream-poll
```

**录像：**

```bash
armsom@armsom:~$ gst-launch-1.0 -e v4l2src device=/dev/videoX num-buffers=300 ! video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! mpph264enc ! h264parse ! mp4mux ! filesink location=ov13850.mp4
```

**预览：**

```bash
armsom@armsom:~$ gst-launch-1.0 v4l2src device=/dev/videoX ! video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! videoconvert ! autovideosink
```

##### IMX219 摄像头 {#aim-io-imx219-摄像头}

抓图、录像和预览统一使用 `3280×2464`，全分辨率模式支持 15 FPS。

**抓图（JPEG）：**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/videoX num-buffers=1 io-mode=4 ! video/x-raw,format=NV12,width=3280,height=2464 ! videoconvert ! jpegenc ! filesink location=imx219.jpg
```

**录像：**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 -e v4l2src device=/dev/videoX num-buffers=300 io-mode=4 ! video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! mpph264enc ! h264parse ! mp4mux ! filesink location=imx219.mp4
```

**预览：**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/videoX ! video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! videoconvert ! autovideosink
```

`GST_V4L2SRC_MAX_RESOLUTION` 用于部分 SDK 镜像的模式选择；若镜像不支持该扩展，可去掉此前缀，按实际支持的分辨率和帧率运行。

##### 四路摄像头同时预览 {#aim-io-四路摄像头同时预览}

AIM7 已实测两路 IMX219 和两路 OV13850 同时预览。先在 `/boot/uEnv/uEnvarmsom-aim7-io.txt` 中启用上述四个摄像头 overlay 并重启；确认 IMX219 模组名称匹配 `imx219_rpi-camera-v2_default.json`，且 3A 服务正常运行。

下载 [四窗口预览脚本](/files/aim7-four-camera-preview.py) 到开发板，在板端桌面终端进入脚本所在目录执行：

```bash
armsom@armsom:~$ sudo apt-get install -y python3-gi gir1.2-gtk-3.0 gir1.2-gstreamer-1.0 gir1.2-gst-plugins-base-1.0
armsom@armsom:~$ sudo systemctl restart rkaiq_3A.service
armsom@armsom:~$ python3 aim7-four-camera-preview.py
```

脚本按 1920×1080 屏幕排列四个等大窗口，上排为 IMX219，下排为 OV13850，保持画面比例。ISP 输出缩放至 640×480，实测 IMX219 约 15 FPS、OV13850 约 25 FPS。按 `Ctrl+C` 退出。

脚本中的 `/dev/video53`、`/dev/video62`、`/dev/video44`、`/dev/video71` 是本次 AIM7 四路启用后的节点；其它镜像请先用 `v4l2-ctl --list-devices` 和 `media-ctl -p` 确认对应 ISP 输出节点，再修改脚本开头的摄像头列表。此示例尚未在 AIM5 上验证。

实测截图如下（仅将每路画面旋转 180° 调正，标题保持原方向；1920×1080，无损压缩）：

![AIM7 四路摄像头同时预览](/img/aim/aim7-four-camera-preview.webp)

<div className="armsom-image-caption">AIM7 四路摄像头同时预览</div>


#### 10. MIPI DSI {#aim-io-10-mipi-dsi}

AIM5、AIM7 均通过底板 MIPI DSI 接口连接屏幕，使用各自的面板 overlay。AIM5 对应文件为 `rk3576-armsom-aim5-display-800x1280-8hd-overlay.dtbo`，在 `/boot/uEnv/uEnvarmsom-aim5-io.txt` 中启用。下方为 AIM7 的 `rk3588-armsom-aim7-display-800x1280-8hd-overlay.dtbo` 配置，需与实际面板匹配。

```bash
armsom@armsom:~$ ls /boot/dtb/overlay/rk3588-armsom-aim7-display-*.dtbo
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim7-io.txt
```

启用对应行：

```ini
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-display-800x1280-8hd-overlay.dtbo
```

保存并重启后检查显示连接状态及触摸输入设备：

```bash
armsom@armsom:~$ ls /sys/class/drm/
armsom@armsom:~$ cat /sys/class/drm/card*-DSI-*/status
armsom@armsom:~$ cat /proc/bus/input/devices
```

触摸功能需要匹配的面板、触摸控制器和 overlay。

#### 11. FAN {#aim-io-11-fan}

连接底板风扇接口后，官方设备树中的 `pwm-fan` 驱动可按温度调节风扇。hwmon 编号可能变化，可先查找 `pwmfan`：

```bash
armsom@armsom:~$ grep -H '^pwmfan$' /sys/class/hwmon/hwmon*/name
```

实测节点为 `hwmon7`：

```bash
armsom@armsom:~$ cat /sys/class/hwmon/hwmon7/name
armsom@armsom:~$ cat /sys/class/hwmon/hwmon7/pwm1
```

```text
pwmfan
0
```

`pwm1` 为 PWM 控制值，范围为 0～255，不是风扇的 RPM；低温时为 0 属于正常调速状态。

#### 12. 40 PIN {#aim-io-12-40-pin}

AIM-IO 的 40PIN 提供 GPIO、I2C、SPI、UART、PWM 等复用信号。**本页[引脚表](#aim-io-引脚定义)及下表占用关系以 AIM7 为例**；AIM5 应按其核心板资料确认 GPIO 映射。实际可用功能取决于设备树及其它外设的占用情况。

| 已启用功能 | 需要避开的 40PIN 物理引脚 |
| --- | --- |
| I2C4（RTC、CAM1、部分屏幕触摸） | 3、5 |
| CAM0 的 I2C2 | 27、28 |
| OV13850 复位、PWDN 和时钟 | 11、15、31、33、36 |
| 上述 MIPI DSI 屏幕配置 | 7、32 |

不要将摄像头或 RTC 正在使用的引脚切换为 GPIO 输出。使用前可检查当前占用：

```bash
armsom@armsom:~$ sudo cat /sys/kernel/debug/gpio
armsom@armsom:~$ sudo cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins
```

GPIO、UART、SPI 等操作方法可参考[GPIO 使用](<../Interface Usage/2_gpio.md>)、[UART 使用](<../Interface Usage/5_uart.md>)、[SPI 使用](<../Interface Usage/7_spi.md>)和[PWM 使用](<../Interface Usage/6_pwm.md>)，按所用核心板的引脚定义选择对应信号。连接外设前先断电，信号电压按底板引脚定义和原理图确认。


<span id="doc-section-4" className="armsom-section-anchor" />

## 产品证书

### CE / FCC / RoHS

<span id="doc-section-5" className="armsom-section-anchor" />

## 供货声明

ArmSoM-AIM7 将至少生产到 2034 年 8 月。

<span id="doc-section-6" className="armsom-section-anchor" />

## 样品购买

CrowdSupply : [https://www.crowdsupply.com/armsom/rk3588-ai-module7](https://www.crowdsupply.com/armsom/rk3588-ai-module7)

ArmSoM 独立站: [https://www.armsom.org/product-page/aim7](https://www.armsom.org/product-page/aim7)

ArmSoM 速卖通官方店: [https://www.aliexpress.com/item/1005012690621621.html](https://www.aliexpress.com/item/1005012690621621.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=1066393300562](https://item.taobao.com/item.htm?id=1066393300562)

OEM&ODM,  请联系: sales@armsom.org

## 专家视角

- [itsfoss](https://itsfoss.com/armsom-aim7-review/): ArmSoM AIM7: A Promising Upcoming Rockchip Device for AI Development
- [taoofmac](https://taoofmac.com/space/blog/2025/03/12/2000): The ArmSom AI Module 7
- [Technically Unsure](https://www.youtube.com/watch?v=J9VmcyJ_t4g&list=PLtGrcSFVfrfRr9KafWQoh2wvKzP9F2bYs): ArmSoM AIM7 & AIMIO (RK3588): Benchmarks & DeepSeek in Action
- [sbc compare](https://sbc.compare/5-armsom-aim7-8gb): AIM7  Benchmark Comparison  on sbc.compare

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

