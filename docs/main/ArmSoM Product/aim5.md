---
description: ArmSoM-AIM5 adopts Rockchip RK3576 second-generation 8nm high-performance AIOT platform processor
keywords: [armsom, armsom-aim5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "AIM5"
sidebar_position: 3
slug: /armsom-aim5
image: /img/aim/aim5.jpg
---

# Product Introduction: AIM5

## Overview
ArmSoM-AIM5 adopts Rockchip RK3576 second-generation 8nm high-performance AIOT platform processor, integrating 4 Cortex-A72 and 4 Cortex-A53 and independent NEON co processors; Built in multiple powerful embedded hardware engines, providing excellent performance for high-end applications and supporting 4K@120fps H.265, VP9, AVS2, and AV1 decoders, supporting 4k@60fps H.264 decoder; Also supported 4K@60fps H.264 and H.265 encoders, built-in 3D GPU, fully compatible with OpenGL ES1.1/2.0/3.2, OpenCL 2.0, and Vulkan 1.1.

It is applicable to ARM PC, edge computing, personal mobile Internet devices and other multimedia products.
![ArmSoM-AIM5](/img/aim/aim5.jpg)

### Key Parameters

- SOC: Rockchip RK3576
- CPU: Integrated with quad core Cortex-A72 @ 2.2GHz and quad core Cortex-A53 @ 1.8GHz, as well as a separate NEON coprocessor.
- GPU：ARM Mali G52 MC3 GPU。
- NPU: With a computing power of up to 6TOPs (INT8), it supports mixed operations of INT4/INT8/INT16.
- VPU/codec:
  - Hard decoding: Supports H.264, H.265, VP9, AV1, and AVS2, among others 8K@30fps or 4K@120fps The highest quality JPEG decoder 4K@60fps
  - Hard coded: Supports H.264 and H.265, with JPEG being the highest 4K@60fps .
- RAM: 8/16GB 32-bit LPDDR5, default 8GB, RK3576 supports up to 16GB.
- Flash: 32/64/128GB eMMC, default eMMC 64GB.
- Working voltage: With a wide range of input voltages, from 5V to 23V (voltage error ± 5%)
- Working temperature：0℃ ~ 80℃
- Operating System
  - Rockchip official support：Android 14，Debian12，Buildroot
  - Third party support：Armbian
- Size：69.6 mm x 45 mm

## Getting started

<a href="./aim-family-started" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>AIM User Manual</h2>
            <p>How to start using your AI Module</p>
        </div>
    </div>
</a>

## Hardware

### Hardware Interface

![ArmSoM-AIM5-front & back](/img/aim/armsom-aim5-front&back.png)

:::tip
All pins of AIM5 are compatible with NVIDIA Jetson TX2 & NVIDIA Jetson Nano, with the same dimensions
:::

### Product Diagram


### Hardware specifications
<details>
    <summary>
        AIM5 Hardware specifications
    </summary>

<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Function</th>
      </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>Display</th>
            <th><li>1x DP interface</li><li>1x HDMI/eDP combo interface</li> <li>2-lane MIPI DSI port </li></th>
        </tr>
        <tr>
            <th>camera</th>
            <th><li>1x 4-lane + 4x 2-lane MIPI CSI interface, up to 2.5Gbps per line</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th>
              <li>1 GMAC, with RGMII / RMII interface</li>
              <li>upports 10/100/1000Mbps data transfer rate</li>
            </th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>PCIe 2.0 x2: Each PCIe 2.1 interface supports 1 lane, with a maximum data rate of 5Gbps</li></th>
        </tr>
         <tr>
            <th>USB</th>
            <th><li>1x USB 3.0 (Gen1)</li><li>3x USB 2.0</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1, UART+flow control x2</li><li>SPI x2</li><li>I2C 1.8V x1，I2C 3.3V x3</li><li>can x1</li><li>I2S x2</li><li>SD 4.0, SDHOST 4.0, and SDIO 3.0</li><li>PWM x4, Multiple GPIO</li></th>
        </tr>
    </tbody>
</table>

</details>

### Competitor Specifications Comparison

<details>
    <summary>
        AIM5 Hardware Spec
    </summary>

| 规格                                 |  ArmSoM-AIM5              | Jetson Nano (NVIDIA)                |
|--------------------------------------|-----------------------------------|--------------------------------|
| CPU  |<div className='armsom-color'>Quad-core ARM®Cortex®-A72 + Quad-core ARM®Cortex®-A53</div> | Quad-core ARM® Cortex®-A57 MPCore processor  | 
| GPU        |  ARM Mali G52 MC3 GPU  |128-core Maxwell GPU  |
| NPU | 6TOPs（INT8） | - |
| Memory           |8/16GB 32bit LPDDR4x, 2112Mhz   | 4GB 64-bit LPDDR4, 1600MHz                                   | 
| Storage          |  microSD card, 32/64/128GB eMMC 5.1 flash storage | microSD card, 16GB eMMC 5.1 flash storage                    |
| Video Encoding   | <div className='armsom-color'>Supports H.264 and H.265, with JPEG being the highest 4K@60fps</div>| 250 MP/sec, 1x 4K@30 (HEVC), 2x 1080p@60 (HEVC), 4x 1080p@30 (HEVC) | 
| Video Decoding   | <div className='armsom-color'>8K@30fps or 4K@120fps H.264, H.265, VP9, AV1 and AVS2, maximum 4K JPEG</div> | 500 MP/s, 1x 4K@60 (HEVC), 2x 4K@30 (HEVC), 4x 1080p@60 (HEVC), 8x 1080p@30 (HEVC) |
| USB Ports        | 1 USB 3.0,  3 USB 2.0       | 1 USB 3.0, 3 USB 2.0                                         | 
| Ethernet         | 1 10/100/1000 BASE-T   | 1 10/100/1000 BASE-T                                         | 
| CSI Interfaces   |1x 4-lane + 4x 2-lane MIPI CSI interface, maximum 2.5Gbps per line, maximum 2.5Gbps per line| 12 channels (3x4 or 4x2) MIPI CSI-2 D-PHY 1.1 (18 Gbps)      |
| I/O               |3 UARTs, 2 SPIs, 2 I2S, 4 I2Cs, multiple GPIOs               | 3 UARTs, 2SPIs, 2 I2S, 4 I2Cs, multiple GPIOs  | 
| PCIE             |<div className='armsom-color'>2 2lan PCIE2.0</div>| 1 1/2/4lane PCIE2.0 | 
| HDMI Output      |<div className='armsom-color'>1 HDMI OUT2.1 / 1 eDP 1.4 </div>| 1 HDMI 2.0                                                   | 
| DP Interface     | 1 DP1.4a | 1 DP1.2                                                      |
| eDP/DP Interface | <div className='armsom-color'>1 eDP 1.4 / 1 HDMI OUT2.1</div>| 1 eDP 1.4 / 1 DP                                             | 
| DSI Interface    | 1 DSI (1 x2) 2 sync|1 DSI (1 x2) 2 sync                                          | 
| OS Support       | <div className='armsom-color'>Support Debian，Ubuntu，Armbian</div>  | NVIDIA JetPack software suite                                | 
| Size             | 69.6 mm x 45 mm  | 69.6 mm x 45 mm                                              | 
| Form Factor      | 260-pin edge connector                                       | 260-pin edge connector     |

</details>

### Function interface definition

<details>
    <summary>
       40-PIN
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
        Pin Definition
    </summary>

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

### Official Images

Based on Debian bullseye works as official operating system by the ArmSom team.

The following systems have been tested and verified by ArmSoM officially: 

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for AIM5 :  <br/>   Debian 12, codenamed 'bookworm', was originally released on June 10, 2023. Debian is an operating system based on free software, known for its stability, security, and openness.| [Download link](https://pan.baidu.com/s/1d91E_Xv0huhvdhWVhN0JFA?pwd=arms)  |

### Third Party Systems

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for AIM5 :    <br/>  Armbian is a computing construction framework that allows users to create ready to use images with a working kernel based on the variable user space configuration of various single board computers. It provides various pre built images for some supported single board computers, typically based on Debian or Ubuntu.  | [armbian image](https://github.com/armbian/community/releases)     |

### Hardware Material

Obtain hardware information such as development kit schematics, PCBs, DXF, etc., and quickly invest in development

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>Download link</span>
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


## Purchase Samples 

CrowdSupply : [https://www.crowdsupply.com/armsom/rk3588-ai-module5](https://www.crowdsupply.com/armsom/rk3588-ai-module7)

ArmSoM online shop: [https://www.armsom.org/product-page/aim5](https://www.armsom.org/product-page/aim7)
 
ArmSoM Aliexpress online shop: [https://www.aliexpress.com/item/3256805434864544.html](https://www.aliexpress.com/item/3256805434864544.html) 

ArmSoM Taobao shop: [https://item.taobao.com/item.htm?id=714794342755](https://item.taobao.com/item.htm?id=714794342755)

OEM&ODM, please contact: sales@armsom.org

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