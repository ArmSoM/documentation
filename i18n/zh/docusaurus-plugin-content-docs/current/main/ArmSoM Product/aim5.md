---
title: "ArmSoM AIM5｜RK3576 核心板文档"
description: ArmSoM-AIM5
keywords: [armsom, armsom-aim5, RK3576核心板, rockchip]
sidebar_label: "AIM5"
sidebar_position: 3
slug: /armsom-aim5
image: /img/aim/aim5.jpg
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# AIM5 产品简介

<nav className="armsom-doc-shortcuts" aria-label="章节快捷导航"><a href="#doc-section-1">简介</a><a href="#doc-section-2">使用手册</a><a href="#doc-section-3">硬件信息</a><a href="#doc-section-4">开发资料</a><a href="#doc-section-5">产品证书</a><a href="#doc-section-6">供货声明</a></nav>

<span id="doc-section-1" className="armsom-section-anchor" />

## 简介
ArmSoM-AIM5 采用Rockchip RK3576第二代8nm高性能AIOT平台处理器,集成了 4 个 Cortex-A72 和 4 个 Cortex-A53 及独立
的 NEON 协处理器；内置了多种功能强大的嵌入式硬件引擎，为高端应用提供了优异的性能，支持 4K@120fps 的H.265、VP9、AVS2 和 AV1 解码器，支持 4k@60fps 的 H.264 解码器；还支持 4K@60fps 的 H.264 和 H.265编码器，内置 3D GPU，能够完全兼容 OpenGL ES1.1/2.0/3.2、OpenCL 2.0 和 Vulkan 1.1

适用于 ARM PC、边缘计算、个人移动互联网设备及其它多媒体产品。
![ArmSoM-AIM5](/img/aim/aim5.jpg)

<div className="armsom-image-caption">ArmSoM-AIM5</div>


### 关键参数

- SOC：瑞芯微 RK3576
- CPU：集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器。
- GPU：ARM Mali G52 MC3 GPU。
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算。
- VPU/编解码：
  - 硬解码：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps,高质量JPEG解码器最高4K@60fps。
  - 硬编码：支持H.264和H.265，JPEG最高4K@60fps。
- RAM：8/16GB 32bit LPDDR5，RK3576 最大支持16GB。
- Flash：32/64/128GB eMMC。
- 工作电压：具有宽范围的输入电压，从 5V到23V（电压误差±5%）
- 工作温度：0℃ ~ 80℃
- 操作系统：
  - Rockchip官方支持：Android 14，Debian12，Buildroot
  - 第三方支持：Armbian
- 大小：69.6 mm x 45 mm

<span id="doc-section-2" className="armsom-section-anchor" />

## 使用手册 {#getting-started}
<a href="#aim-io-使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>AIM5 使用手册</h2>
            <p>如何开始使用你的AIM-IO</p>
        </div>
    </div>
</a>

<span id="doc-section-3" className="armsom-section-anchor" />

## 硬件信息

### 硬件接口

![ArmSoM-AIM7-front & back](/img/aim/armsom-aim5-front&back.png)

<div className="armsom-image-caption">ArmSoM-AIM7-front &amp; back</div>


:::tip
AIM5所有引脚均与 NVIDIA Jetson TX2 &  NVIDIA Jetson Nano兼容，尺寸相同
:::

### 产品框图


**USB 拓扑：** 模块连接器表中的 USBHUB_HOST1–4 是模块 Hub 的下行端口，不能计作四个独立 SoC 控制器。AIM-IO V1.1 另有 RTS5411S Hub，载板 USB-A 接口共享上行带宽。USB3、PCIe 和 SATA 的并行组合还取决于模块高速 PHY 复用和镜像配置。

### 硬件规格
<details>
    <summary>
        AIM5 硬件规格
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
            <th><li>1x DP interface</li><li>1x HDMI/eDP combo interface</li> <li>2-lane MIPI DSI 接口 </li></th>
        </tr>
        <tr>
            <th>摄像头</th>
            <th><li>1x 4-lane + 4x 2-lane MIPI CSI 接口，每线最高 2.5Gbps</li></th>
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
            <th><li>2 组可选 PCIe 2.1 ×1，每组最高 5 Gbps；不是一条 ×2 链路。同组 PCIe/SATA/USB3 复用功能择一使用。</li></th>
        </tr>
         <tr>
            <th>USB</th>
            <th><li>1x USB 3.0 (Gen1)</li><li>3x USB 2.0</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1, UART+flow control x2</li><li>SPI x2</li><li>I2C 1.8V x1，I2C 3.3V x3</li><li>can x1</li><li>I2S x2</li><li>SD 4.0, SDHOST 4.0, and SDIO 3.0</li><li>PWM x4, 多个 GPIO</li></th>
        </tr>
    </tbody>
</table>

</details>

### 竞品规格参数对比

<details>
    <summary>
        AIM5 硬件规格
    </summary>

| 规格                                 |  ArmSoM-AIM5              | Jetson Nano (NVIDIA)                |
|--------------------------------------|-----------------------------------|--------------------------------|
| CPU   |<div className='armsom-color'> 四核Cortex-A72+四核Cortex-A53</div> | 四核 ARM® Cortex®A57 MPCore 处理器    | 
| GPU    | ARM Mali G52 MC3 GPU                 |128核Maxwell架构GPU   | 
| NPU | 6TOPs（INT8） | - |
| 内存容量   |8/16GB 32bit LPDDR4x, 2112Mhz  | 4GB 64位 LPDDR4, 1600MHz   | 
| 存储支持  |  microSD卡、32/64/128GB eMMC 5.1 闪存   | microSD卡、16GB eMMC 5.1闪存  |
| 视频编码  |  <div className='armsom-color'>支持H.264和H.265，JPEG最高4K@60fps</div>  | 250 MP/sec，1x 4K@30 (HEVC)，2x 1080p@60 (HEVC)，4x 1080p@30 (HEVC)  |
| 视频解码  |  <div className='armsom-color'>8K@30fps或4K@120fps：H.264、H.265、VP9、AV1和AVS2，JPEG解码器最高4K@60fps</div> | 500 MP/s，1x 4K@60 (HEVC)，2x 4K@30 (HEVC)，4x 1080p@60 (HEVC)，8x 1080p@30 (HEVC)   |
| USB端口  | 1 个 USB 3.0、3 个 USB 2.0  | 1 个 USB 3.0、3 个 USB 2.0  |
| 以太网接口    | 1 个 10/100/1000 BASE-T 以太网   |1 个 10/100/1000 BASE-T 以太网 | 
| CSI接口 | 1x 4-lane + 4x 2-lane MIPI CSI 接口，每线最高 2.5Gbps 每线最高 2.5Gbps      |12 通道（3x4 或 4x2）MIPI CSI-2 D-PHY 1.1 (18 Gbps)     | 
| I/O        | 3 个 UART、2 个 SPI、2 个 I2S、4 个 I2C、多个 GPIO   | 3 个 UART、2 个 SPI、2 个 I2S、4 个 I2C、多个 GPIO        |
| PCIE    |<div className='armsom-color'> 2 × PCIe 2.1 ×1 (mux)</div>   | 1 个 1/2/4lan PCIE2.0  |
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
       40-PIN 座子
    </summary>
AIM5 使用与 AIM7 相同的 AIM-IO 载板。下表对应 AIM-IO V1.1 的 J41，GPIO 名称/编号属于 AIM5 的 RK3576，不能套用 AIM7 的 RK3588 编号。编号按 bank × 32 + group × 8 + offset 计算；复用功能需由设备树选择，经过电平转换器的信号还受载板电路约束。

<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|  | +3.3V | <div className='red'>1</div> | <div className='red'>2</div> | +5.0V |  |
| 23 | SAI0_LRCK_M1/I2C3_SDA_M1/SPI0_CLK_M0/GPIO0_C7_d | <div className='green'>3</div> | <div className='red'>4</div> | +5.0V |  |
| 22 | SAI0_SCLK_M1/I2C3_SCL_M1/SPI0_CSN0_M0/GPIO0_C6_d | <div className='green'>5</div> | <div className='black'>6</div> | GND |  |
| 60 | UART10_RTSN_M1/I2C5_SCL_M1/GPIO1_D4_d | <div className='green'>7</div> | <div className='green'>8</div> | UART5_TX_M0/SPI3_MISO_M1/I2C3_SDA_M2/GPIO3_D5_d | 125 |
|  | GND | <div className='black'>9</div> | <div className='green'>10</div> | UART5_RX_M0/SPI3_CLK_M1/I2C3_SCL_M2/GPIO3_D4_d | 124 |
| 127 | UART5_RTSN_M0/SPI3_CSN1_M1/PWM2_CH7_M3/GPIO3_D7_d | <div className='green'>11</div> | <div className='green'>12</div> | SAI2_SCLK_M0/UART10_RX_M1/I3C0_SDA_PU_M1/GPIO1_D1_d | 57 |
| 75 | UART1_RTSN_M1/SPI4_CLK_M3/GPIO2_B3_d | <div className='green'>13</div> | <div className='black'>14</div> | GND |  |
| 49 | SAI3_MCLK_M1/UART3_RX_M2/GPIO1_C1_d | <div className='green'>15</div> | <div className='green'>16</div> | UART8_TX_M1/SPI4_CSN1_M3/I2C4_SCL_M2/GPIO2_A6_d | 70 |
|  | +3.3V | <div className='red'>17</div> | <div className='green'>18</div> | UART1_CTSN_M1/SPI4_CSN0_M3/GPIO2_B2_d | 74 |
| 82 | UART11_CTSN_M1/SPI1_MOSI_M1/PWM1_CH2_M2/GPIO2_C2_d | <div className='green'>19</div> | <div className='black'>20</div> | GND |  |
| 83 | UART11_RTSN_M1/SPI1_MISO_M1/PWM0_CH0_M2/GPIO2_C3_d | <div className='green'>21</div> | <div className='green'>22</div> | UART7_RTSN_M0/SPI4_MISO_M3/GPIO2_B5_d | 77 |
| 85 | UART11_RX_M1/SPI1_CLK_M1/PWM1_CH4_M2/GPIO2_C5_d | <div className='green'>23</div> | <div className='green'>24</div> | UART11_TX_M1/SPI1_CSN0_M1/PWM1_CH3_M2/GPIO2_C4_d | 84 |
|  | GND | <div className='black'>25</div> | <div className='green'>26</div> | UART9_TX_M0/SPI1_CSN1_M1/PWM1_CH1_M2/GPIO2_C1_d | 81 |
| 16 | I2C2_SDA_M0/UART1_RX_M0/PWM1_CH3_M0/GPIO0_C0_d | <div className='green'>27</div> | <div className='green'>28</div> | I2C2_SCL_M0/UART1_TX_M0/PWM1_CH4_M0/GPIO0_B7_d | 15 |
| 98 | UART3_CTSN_M0/SPI3_MISO_M0/CAN1_TX_M3/GPIO3_A2_d | <div className='green'>29</div> | <div className='black'>30</div> | GND |  |
| 0 | GPIO0_A0_d | <div className='green'>31</div> | <div className='green'>32</div> | UART6_RX_M1/I3C1_SDA_M0/PWM2_CH3_M2/GPIO2_D3_d | 91 |
| 95 | UART9_CTSN_M0/SPI3_CSN1_M0/PWM2_CH7_M2/GPIO2_D7_d | <div className='green'>33</div> | <div className='black'>34</div> | GND |  |
| 58 | SAI2_LRCK_M0/I3C0_SCL_M1/PWM1_CH3_M1/GPIO1_D2_d | <div className='green'>35</div> | <div className='green'>36</div> | UART5_CTSN_M0/SPI3_MOSI_M1/PWM2_CH6_M3/GPIO3_D6_d | 126 |
| 76 | UART7_CTSN_M0/SPI4_MOSI_M3/GPIO2_B4_d | <div className='green'>37</div> | <div className='green'>38</div> | SAI2_SDI_M0/I3C0_SDA_M1/PWM1_CH4_M1/GPIO1_D3_d | 59 |
|  | GND | <div className='black'>39</div> | <div className='green'>40</div> | SAI2_SDO_M0/UART10_TX_M1/GPIO1_D0_d | 56 |
</div>
</details>

<details>
    <summary>
        引脚定义
    </summary>

:::caution
AIM5 V1.0 原理图中 41/47/53/59 脚的 DP 网络名与连接器功能名存在正负极命名冲突。下表保留原网络标记供追溯；这些 DP 名称不能作为 PCB 布线依据，设计前需核对原始 CAD 网表。该问题不等同于 AIM-IO 载板型号不匹配。
:::

|ArmSoM-AIM5 function |	Pin number	|Pin number|	ArmSoM-AIM5 function|
|------------------|-------------------------|-------------------------|-------------------------|
|GND_1|	1|	2|	GND_2|
|MIPI_DPHY_CSI3_RX_D0N|	3|	4|	MIPI_DPHY_CSI1_RX_D0N|
|MIPI_DPHY_CSI3_RX_D0P|	5|	6|	MIPI_DPHY_CSI1_RX_D0P|
|GND_3|	7|	8|	GND_4|
|MIPI_DPHY_CSI3_RX_CLKN|	9|	10|	MIPI_DPHY_CSI1_RX_CLKN|
|MIPI_DPHY_CSI3_RX_CLKP|	11|	12|	MIPI_DPHY_CSI1_RX_CLKP|
|GND_5|	13|	14|	GND_6|
|MIPI_DPHY_CSI3_RX_D1N|	15|	16|	MIPI_DPHY_CSI1_RX_D1N|
|MIPI_DPHY_CSI3_RX_D1P|	17|	18|	MIPI_DPHY_CSI1_RX_D1P|
|GND_7|	19|	20|	GND_8|
|MIPI_DPHY_CSI3_RX_D2N|	21|	22|	MIPI_DPHY_CSI1_RX_D2N|
|MIPI_DPHY_CSI3_RX_D2P|	23|	24|	MIPI_DPHY_CSI1_RX_D2P|
|GND_9|	25|	26|	GND_10|
|MIPI_DPHY_CSI4_RX_CLKN|	27|	28|	MIPI_DPHY_CSI2_RX_CLKN|
|MIPI_DPHY_CSI4_RX_CLKP|	29|	30|	MIPI_DPHY_CSI2_RX_CLKP|
|GND_11|	31|	32|	GND_12|
|MIPI_DPHY_CSI3_RX_D3N|	33|	34|	MIPI_DPHY_CSI1_RX_D3N|
|MIPI_DPHY_CSI3_RX_D3P|	35|	36|	MIPI_DPHY_CSI1_RX_D3P|
|GND_13|	37|	38|	GND_14|
|DP_TX_D0N/USB3_OTG0_SSRX1N|	39|	40|	MIPI_DPHY_CSI1_RX_D2N|
|DP_TX_D0N/USB3_OTG0_SSRX1P|	41|	42|	MIPI_DPHY_CSI1_RX_D2P|
|GND_15|	43|	44|	GND_16|
|DP_TX_D1N/USB3_OTG0_SSTX1N|	45|	46|	MIPI_DPHY_CSI1_RX_D0N|
|DP_TX_D1N/USB3_OTG0_SSTX1P|	47|	48|	MIPI_DPHY_CSI1_RX_D0P|
|GND_17|	49|	50|	GND_18|
|DP_TX_D2N/USB3_OTG0_SSRX2N|	51|	52|	MIPI_DPHY_CSI0_RX_CLKN|
|DP_TX_D2N/USB3_OTG0_SSRX2P|	53|	54|	MIPI_DPHY_CSI0_RX_CLKP|
|GND_19|	55|	56|	GND_20|
|DP_TX_D3N/USB3_OTG0_SSTX2N|	57|	58|	MIPI_DPHY_CSI0_RX_D1N|
|DP_TX_D3N/USB3_OTG0_SSTX2P|	59|	60|	MIPI_DPHY_CSI0_RX_D1P|
|GND_21|61|	62|	GND_22|
|HDMI_TX_D2N/EDP_TX_D2N|	63|	64|	MIPI_DPHY_CSI0_RX_D3N|
|HDMI_TX_D2P/EDP_TX_D2P|	65|	66|	MIPI_DPHY_CSI0_RX_D3P|
|GND_23|	67|	68|	GND_24|
|HDMI_TX_D1N/EDP_TX_D1N|	69|	70|	DSI_D0_N|
|HDMI_TX_D1P/EDP_TX_D1P|	71|	72|	DSI_D0_P|
|GND_25|	73|	74|	GND_26|
|HDMI_TX_D0N/EDP_TX_D0N|	75|	76|	DSI_CLK_N|
|HDMI_TX_D0P/EDP_TX_D0P|	77|	78|	DSI_CLK_P|
|GND_27|	79|	80|	GND_28|
|HDMI_TX_D3N/EDP_TX_D3N|	81|	82|	DSI_D1_N|
|HDMI_TX_D3P/EDP_TX_D3P|	83|	84|	DSI_D1_P|
|GND_29|	85|	86|	GND_30|
|GPIO2_B0|	87|	88|	DP_HPDIN_M0|
|SPI1_MOSI_M1|	89|	90|	DP_TX_AUXN|
|SPI1_CLK_M1|	91|	92|	DP_TX_AUXP|
|SPI1_MISO_M1|	93|	94|	HDMI_TX_CEC_M0|
|SPI1_CSN0_M1|	95|	96|	HDMI_TX_HPDIN_M0|
|SPI1_CSN1_M1|	97|	98|	CON98|
|UART3_TX_M1|	99|	100|	CON100|
|UART3_RX_M1|	101|	102|	GND_31|
|UART3_RTSN_M1|	103|	104|	SPI4_MOSI_M3|
|UART3_CTSN_M1|	105|	106|	SPI4_CLK_M3|
|GND_32|	107|	108|	SPI4_MISO_M3|
|USB0_DM|	109|	110|	SPI4_CSN0_M3|
|USB0_DP|	111|	112|	SPI4_CSN1_M3|
|GND_33|	113|	114|	MIPI_DCPHY_CSI_CAM0_PDN_H|
|USBHUB_HOST1_DM|	115|	116|	MIPI_DCPHY_CSI_CAM0_CLKOUT|
|USBHUB_HOST1_DP|	117|	118|	GPIO3_A2/VI_CIF_CLKO|
|GND_34|	119|	120|	MIPI_DPHY_CSI_CAM1_PDN_H|
|USBHUB_HOST2_DM|	121|	122|	MIPI_DPHY_CSI_CAM1_CLKOUT|
|USBHUB_HOST2_DP|	123|	124|	GPIO4_A3/PCIE1_WAKEn_M2|
|GND_35|	125|	126|	GPIO0_A7/SDMMC0_DET_L|
|GPIO2_B1|	127|	128|	GPIO2_B6|
|GND_36|	129|	130|	GPIO2_B7|
|PCIE0_RXN/SATA0_RXN|	131|	132|	GND_37|
|PCIE0_RXP/SATA0_RXP|	133|	134|	PCIE0_TXN/SATA0_TXN|
|GND_38|	135|	136|	PCIE0_TXP/SATA0_TXP|
|USBHUB_HOST3_DM|	137|	138|	GND_39|
|USBHUB_HOST3_DP|	139|	140|	USBHUB_HOST4_DM|
|GND_40|	141|	142|	USBHUB_HOST4_DP|
|CAN1_RX_M1|	143|	144|	GND_41|
|CAN1_TX_M1|	145|	146|	GND_42|
|GND_43|	147|	148|	UART4_CTSN_M0|
|UART4_TX_M0|	149|	150|	UART4_RTSN_M0|
|UART4_RX_M0|	151|	152|	GND_44|
|GND_45|	153|	154|	UART8_CTSN_M0|
|UART8_TX_M0|	155|	156|	UART8_RTSN_M0|
|UART8_RX_M0|	157|	158|	GND_46|
|GND_47|	159|	160|	PCIE0_REFCLKN|
|USB3_HOST1_SSRXN|	161|	162|	PCIE0_REFCLKP|
|USB3_HOST1_SSRXP|	163|	164|	GND_48|
|GND_49|	165|	166|	USB3_HOST1_SSTXN|
|PCIE1_RXN|	167|	168|	USB3_HOST1_SSTXP|
|PCIE1_RXP|	169|	170|	GND_50|
|GND_51|	171|	172|	PCIE1_TXN|
|PCIE1_REFCLKN|	173|	174|	PCIE1_TXP|
|PCIE1_REFCLKP|	175|	176|	GND_52|
|GND_53|	177|	178|	MOD_SLEEP|
|PCIE0_WAKEn_M2|	179|	180|	PCIE0_CLKREQn_M2|
|PCIE0_PERSTn|	181|	182|	PCIE1_CLKREQn_M2|
|PCIE1_PERSTn|	183|	184|	PHY0_MDI0-|
|I2C2_SCL_M0_CC_RTC|	185|	186|	PHY0_MDI0+|
|I2C2_SDA_M0_CC_RTC|	187|	188|	PHY0_LED2/CFG_LDO1|
|I2C3_SCL_M1|	189|	190|	PHY0_MDI1-|
|I2C3_SDA_M1|	191|	192|	PHY0_MDI1+|
|SAI2_SDO_M0|	193|	194|	PHY0_LED0/CFG_EXT|
|SAI2_SDI_M0|	195|	196|	PHY0_MDI2-|
|SAI2_LRCK_M0|	197|	198|	PHY0_MDI2+|
|SAI2_SCLK_M0|	199|	200|	GND_54|
|GND_55|	201|	202|	PHY0_MDI3-|
|UART5_TX_M0|	203|	204|	PHY0_MDI3+|
|UART5_RX_M0|	205|	206|	GPIO2_D3/PWM2_CH3_M2|
|UART5_RTSN_M0|	207|	208|	GPIO2_D4/PWM2_CH4_M2|
|UART5_CTSN_M0|	209|	210|	CLK1_32K_OUT|
|GPIO1_D4/SAI2_MCLK_M0| 211| 212|  GPIO2_C0|
|I2C4_SCL_M1|	213|	214|	RECOVERY_KEY|
|I2C4_SDA_M1|	215|	216|	GPIO0_A0/REF_CLK0_OUT|
|GND_56|	217|	218|	GPIO1_C1/SAI3_MCLK_M1|
|SDMMC_DAT0|	219|	220|	SAI3_SDO_M1|
|SDMMC_DAT1|	221|	222|	SAI3_SDI_M1|
|SDMMC_DAT2|	223|	224|	SAI3_LRCK_M1|
|SDMMC_DAT3|	225|	226|	SAI3_SCLK_M1|
|SDMMC_CMD|	227|	228|	GPIO2_D7/CAM2_CLKOUT|
|SDMMC_CLK|	229|	230|	GPIO2_D5/PWM2_CH5_M2|
|GND_57|	231|	232|	I2C0_SCL_M0|
|SHUTDOWN_REQ|	233|234|	I2C0_SDA_M0|
|PMIC_BBAT|	235|	236|	UART0_TX_M0_DEBUG|
|POWER_EN|	237|	238|	UART0_RX_M0_DEBUG|
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
            <h2>AIM5 kernel</h2>
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
            <h2>AIM5 uboot</h2>
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
| ![Debian 12](/img/sige/debian12-1.png) | **适用于 AIM5 的 Debian 12：** <br/>Debian 12（Bookworm）系统镜像。请在网盘中选择对应产品文件夹，镜像版本及桌面类型以实际文件为准。 | [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F) |
|![Android](/img/sige/android.png) | **Android14 for AIM5 :** <br/>最新的操作系统升级，让您的设备更加个性化、更安全、更易访问。照片质量提升、新主题和 AI 生成的壁纸。隐私更新，保护您的健康、安全和数据。并扩展了无障碍功能。 |   |

### 第三方镜像

| 标识 | 介绍 | 固件下载 |
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | **适用于 AIM5 的 Armbian：** <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。 | [Armbian 固件下载](https://armbian.com/boards?vendor=armsom)     |

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
                <i>📦</i>
            </div>
            <div class="content">
                <h2>AIM5 Schematics</h2>
            </div>
        </div>
    </a>

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>AIM5 2D</h2>
        </div>
    </div>
</a>

</div>

<span id="aim-io-doc-section-2" className="armsom-section-anchor" />

## AIM5 使用手册 {#aim-io-使用手册}

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


按住 AIM5 上的 Maskrom 按键进入maskrom模式

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

下方日志以 AIM7 官方 Debian 12 / Linux 6.1 镜像为例；设备名称、GPIO 编号及 overlay 按所用核心板和镜像确认。

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

<a href="/zh/advanced-manual/armsom-camera" className="card-link">
  <div className="card">
    <div className="icon" aria-hidden="true"><i>📷</i></div>
    <div className="content">
      <h2>ArmSoM 相机应用</h2>
      <p>用 Cheese 或 guvcview 选择摄像头、切换分辨率、预览、拍照和录像。桌面和 Server 镜像也可通过 armsom-camera 命令选择摄像头、分辨率和帧率。</p>
    </div>
  </div>
</a>

下文介绍接线、启用 overlay，以及使用原始命令抓图和预览。这些命令沿用驱动默认的传感器采集分辨率。

##### 摄像头接口与 overlay {#aim-io-摄像头接口与-overlay}


连接排线前先断电，并确认方向。

| 接口 | 底板位号 | 摄像头 | overlay 文件名 |
| --- | --- | --- | --- |
| CAM0 | J13 | IMX219 | `rk3576-armsom-aim5-camera-imx219-cs0-overlay.dtbo` |
| CAM1 | J49 | IMX219 | `rk3576-armsom-aim5-camera-imx219-cs1-overlay.dtbo` |
| CAM2 | J12 | OV13850 | `rk3576-armsom-aim5-camera-ov13850-cs2-overlay.dtbo` |
| CAM3 | J24 | OV13850 | `rk3576-armsom-aim5-camera-ov13850-cs3-overlay.dtbo` |

编辑 AIM5 的启动配置：

```bash
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim5-io.txt
```

按实际连接的摄像头启用对应行，以下为四路全部启用时的配置：

```ini
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-camera-imx219-cs0-overlay.dtbo
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-camera-imx219-cs1-overlay.dtbo
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-camera-ov13850-cs2-overlay.dtbo
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-camera-ov13850-cs3-overlay.dtbo
```

:::tip
取消行首 `#` 即为启用。建议首次接线时每次只启用一路，确认后再按需组合；旧镜像若缺少上述文件，应先更新对应核心板的内核包。
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

**抓图（JPEG）**

```bash
# AIM7 CAM2 示例，请替换为当前 ISP 主输出节点。
# 连续采集 45 帧以便曝光稳定，固定文件名保留最后一张。
gst-launch-1.0 -q v4l2src device=/dev/video71 num-buffers=45 ! \
  video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! \
  videoconvert ! jpegenc ! multifilesink location=ov13850.jpg
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
# AIM7 CAM0 示例，请替换为当前 ISP 主输出节点。
# 连续采集 45 帧以便曝光稳定，固定文件名保留最后一张。
GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 -q v4l2src device=/dev/video53 num-buffers=45 io-mode=4 ! \
  video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! \
  videoconvert ! jpegenc ! multifilesink location=imx219.jpg
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

AIM7 已实测两路 IMX219 和两路 OV13850 同时预览。先在 `/boot/uEnv/uEnvarmsom-aim5-io.txt` 中启用上述四个摄像头 overlay 并重启；确认 IMX219 模组名称匹配 `imx219_rpi-camera-v2_default.json`，且 3A 服务正常运行。

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

使用与面板匹配的 AIM5 显示屏 overlay。以下以 800 × 1280 面板为例。

```bash
armsom@armsom:~$ ls /boot/dtb/overlay/rk3576-armsom-aim5-display-*.dtbo
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim5-io.txt
```

启用对应行：

```ini
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-display-800x1280-8hd-overlay.dtbo
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

AIM-IO 的 40PIN 提供 GPIO、I2C、SPI、UART、PWM 等复用信号。**[AIM-IO 引脚表](./armsom-aim7#aim-io-引脚定义)及下表占用关系以 AIM7 为例**；AIM5 应按其核心板资料确认 GPIO 映射。实际可用功能取决于设备树及其它外设的占用情况。

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


<span id="doc-section-5" className="armsom-section-anchor" />

## 产品证书

### CE / FCC / RoHS

<span id="doc-section-6" className="armsom-section-anchor" />

## 供货声明

ArmSoM-AIM5 将至少生产到 2034 年 8 月。

## 样品购买

CrowdSupply : [https://www.crowdsupply.com/armsom/rk3588-ai-module7](https://www.crowdsupply.com/armsom/rk3588-ai-module7)

ArmSoM 独立站: [https://www.armsom.org/product-page/aim7](https://www.armsom.org/product-page/aim7)

ArmSoM 速卖通官方店: 

ArmSoM 淘宝官方店: 

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
