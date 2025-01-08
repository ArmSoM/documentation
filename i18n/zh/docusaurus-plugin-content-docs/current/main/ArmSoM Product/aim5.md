---
description: ArmSoM-AIM5
keywords: [armsom, armsom-aim5, RK3576核心板, rockchip]
sidebar_label: "AIM5"
sidebar_position: 3
slug: /armsom-aim5
image: /img/aim/aim5.jpg
---

# AIM5 产品简介

## 简介
ArmSoM-AIM5 采用Rockchip RK3576第二代8nm高性能AIOT平台处理器,集成了 4 个 Cortex-A72 和 4 个 Cortex-A53 及独立
的 NEON 协处理器；内置了多种功能强大的嵌入式硬件引擎，为高端应用提供了优异的性能，支持 4K@120fps 的H.265、VP9、AVS2 和 AV1 解码器，支持 4k@60fps 的 H.264 解码器；还支持 4K@60fps 的 H.264 和 H.265编码器，内置 3D GPU，能够完全兼容 OpenGL ES1.1/2.0/3.2、OpenCL 2.0 和 Vulkan 1.1

适用于 ARM PC、边缘计算、个人移动互联网设备及其它多媒体产品。
![ArmSoM-AIM5](/img/aim/aim5.jpg)

### 关键参数

- SOC：瑞芯微 RK3576
- CPU：集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器。
- GPU：ARM Mali G52 MC3 GPU。
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算。
- VPU/编解码：
  - 硬解码：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps,高质量JPEG解码器最高4K@60fps。
  - 硬编码：支持H.264和H.265，JPEG最高4K@60fps。
- RAM：8/16GB 32bit LPDDR5，默认8GB，RK3576 最大支持16GB。
- Flash：32/64/128GB eMMC，默认eMMC 64GB。
- 工作电压：具有宽范围的输入电压，从4.5V到23V（电压误差±5%）
- 工作温度：0℃ ~ 80℃
- 操作系统：
  - Rockchip官方支持：Android 14，Debian12，Buildroot
  - 第三方支持：Armbian
- 大小：69.6 mm x 45 mm

## Getting started
<a href="./armsom-aimio#使用手册" class="card-link">
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

## 硬件信息

### 硬件接口

![ArmSoM-AIM7-front & back](/img/aim/armsom-aim5-front&back.png)

:::tip
AIM5所有引脚均与 NVIDIA Jetson TX2 &  NVIDIA Jetson Nano兼容，尺寸相同
:::

### 产品框图


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
            <th><li>PCIe 2.0 x2: 每 PCIe2.1 接口支持 1lane，最高支持 5Gbps 数据速率</li></th>
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
| PCIE    |<div className='armsom-color'> 2 个 2lan PCIE2.0</div>   | 1 个 1/2/4lan PCIE2.0  | 
| HDMI输出      |  <div className='armsom-color'>1 个 HDMI OUT2.1  / 1 个 eDP 1.4</div>   |1 个 HDMI 2.0  |
| DP接口    | 1 个 DP1.4a | 1 个 DP1.2  |
| eDP/DP接口    | <div className='armsom-color'>1 个 eDP 1.4/ 1 个 HDMI OUT2.1</div>  | 1 个 eDP 1.4/1 个 DP接口  | 
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
<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     139     | SAI0_LRCK_M1/I2C3_SDA_M1/SPI0_CLK_M0/GPIO0_C7_d| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     138     | SAI0_SCLK_M1/I2C3_SCL_M1/SPI0_CSN0_M0/GPIO0_C6_d  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     115     | /UART10_RTSN_M1/I2C5_SCL_M1/GPIO1_D4_d  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  UART5_TX_M0/SPI3_MISO_M1/I2C3_SDA_M2/GPIO3_D5_d
|     13      |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  UART5_RX_M0/SPI3_CLK_M1/I2C3_SCL_M2/GPIO3_D4_d|     14      |
|     113     |  UART5_RTSN_M0/SPI3_CSN1_M1/PWM2_CH7_M3/GPIO3_D7_d  | <div className='green'>11</div>  | <div className='green'>12</div> |  SAI2_SCLK_M0/UART10_RX_M1/I3C0_SDA_PU_M1/GPIO1_D1_d |     109     |
|     111     |  UART1_RTSN_M1/SPI4_CLK_M3/GPIO2_B3_d| <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|     112     |   SAI3_MCLK_M1/UART3_RX_M2/GPIO1_C1_d  | <div className='green'>15</div>  | <div className='green'>16</div> |  UART8_TX_M1/SPI4_CSN1_M3/I2C4_SCL_M2/GPIO2_A6_d   |     100     |
|             |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> |  UART1_CTSN_M1/SPI4_CSN0_M3/GPIO2_B2_d |    148     |
|     42      | UART11_CTSN_M1/SPI1_MOSI_M1/PWM1_CH2_M2/GPIO2_C2_d  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |             |
|     41      | UART11_RTSN_M1/SPI1_MISO_M1/PWM0_CH0_M2/GPIO2_C3_d  | <div className='green'>21</div>  | <div className='green'>22</div> | UART7_RTSN_M0/SPI4_MISO_M3/GPIO2_B5_d          |             |
|     43      | UART11_RX_M1/SPI1_CLK_M1/PWM1_CH4_M2/GPIO2_C5_d  | <div className='green'>23</div>  | <div className='green'>24</div> |  UART11_TX_M1/SPI1_CSN0_M1/PWM1_CH3_M2/GPIO2_C4_d |     44      |
|             |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |  UART9_TX_M0/SPI1_CSN1_M1/PWM1_CH1_M2/GPIO2_C1_d |     45      |
|     150     | I2C2_SDA_M0/UART1_RX_M0/PWM1_CH3_M0/GPIO0_C0_d  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  I2C2_SCL_M0/UART1_TX_M0/PWM1_CH4_M0/GPIO0_B7_d /
|     63      | UART3_CTSN_M0/SPI3_MISO_M0/CAN1_TX_M3/GPIO3_A2_d  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|     47      | GPIO0_A0_d  | <div className='green'>31</div>  | <div className='green'>32</div> |  UART6_RX_M1/I3C1_SDA_M0/PWM2_CH3_M2/GPIO2_D3_d  |    114     |
|     103     | UART9_CTSN_M0/SPI3_CSN1_M0/PWM2_CH7_M2/GPIO2_D7_d  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |             |
|     110     | I3C0_SCL_M1/PWM1_CH3_M1/GPIO1_D2_d  | <div className='green'>35</div>  | <div className='green'>36</div> |  UART5_CTSN_M0/SPI3_MOSI_M1/PWM2_CH6_M3/GPIO3_D6_d |     105     |
|      0      | UART7_CTSN_M0/SPI4_MOSI_M3/GPIO2_B4_d	    | <div className='green'>37</div>  | <div className='green'>38</div> |  I3C0_SDA_M1/PWM1_CH4_M1/GPIO1_D3_d   |     106     |
|             |   GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  UART10_TX_M1/GPIO1_D0_d   |     107     |

</div>
</details>

<details>
    <summary>
        引脚定义
    </summary>

|ArmSoM-AIM7 function |	Pin number	|Pin number|	ArmSoM-AIM7 function|
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
|HDMI_TX_D2N/EDP_TX_D2P|	65|	66|	MIPI_DPHY_CSI0_RX_D3P|
|GND_23|	67|	68|	GND_24|
|HDMI_TX_D1N/EDP_TX_D1N|	69|	70|	DSI_D0_N|
|HDMI_TX_D1N/EDP_TX_D1P|	71|	72|	DSI_D0_P|
|GND_25|	73|	74|	GND_26|
|HDMI_TX_D0N/EDP_TX_D0N|	75|	76|	DSI_CLK_N|
|HDMI_TX_D0N/EDP_TX_D0P|	77|	78|	DSI_CLK_P|
|GND_27|	79|	80|	GND_28|
|HDMI_TX_D3N/EDP_TX_D3N|	81|	82|	DSI_D1_N|
|HDMI_TX_D3N/EDP_TX_D3P|	83|	84|	DSI_D1_P|
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

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
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

<a href="https://github.com/rockchip-linux/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>AIM5 uboot</h2>
            <p>rockchip-linux/u-boot</p>
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

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for AIM5 :  <br/>   Debian 12，代号为"bookworm"，最初在2023年6月10日发布的。Debian是一个以自由软件为基础的操作系统，以稳定性、安全性和开放性著称。| [百度网盘](https://pan.baidu.com/s/1d91E_Xv0huhvdhWVhN0JFA?pwd=arms)  |
|![Android](/img/sige/android.png) | Android14 for AIM5 :    <br/>最新的操作系统升级，让您的设备更加个性化、更安全、更易访问。照片质量提升、新主题和 AI 生成的壁纸。隐私更新，保护您的健康、安全和数据。并扩展了无障碍功能。|   |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for AIM5 :    <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  | [armbian image](https://github.com/armbian/community/releases)     |

### 硬件资料

获取开发套件原理图、PCB、DXF等硬件资料，快速投入开发

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>

<br/>

<div class="cards">
    <a href="https://pan.baidu.com/s/1-DEu3MmXodcU8BqK9ksW8Q?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>AIM5 Schematics</h2>
            </div>
        </div>
    </a>

<a href="https://pan.baidu.com/s/1p-ajkk5ebjpczLOyTWnKKA?pwd=arms" class="card-link">
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

## 产品证书

### CE / FC / RoHS

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