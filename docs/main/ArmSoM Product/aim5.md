---
title: "ArmSoM AIM5 | RK3576 Compute Module Documentation"
description: ArmSoM-AIM5 adopts Rockchip RK3576 second-generation 8nm high-performance AIOT platform processor
keywords: [armsom, armsom-aim5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "AIM5"
sidebar_position: 3
slug: /armsom-aim5
image: /img/aim/aim5.jpg
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Product Introduction: AIM5

<nav className="armsom-doc-shortcuts" aria-label="Section shortcuts"><a href="#doc-section-1">Overview</a><a href="#doc-section-2">Getting started</a><a href="#doc-section-3">Hardware</a><a href="#doc-section-4">Resources</a><a href="#doc-section-5">Product Certifications</a><a href="#doc-section-6">Supply Statement</a></nav>

<span id="doc-section-1" className="armsom-section-anchor" />

## Overview
ArmSoM-AIM5 adopts Rockchip RK3576 second-generation 8nm high-performance AIOT platform processor, integrating 4 Cortex-A72 and 4 Cortex-A53 and independent NEON co processors; Built in multiple powerful embedded hardware engines, providing excellent performance for high-end applications and supporting 4K@120fps H.265, VP9, AVS2, and AV1 decoders, supporting 4k@60fps H.264 decoder; Also supported 4K@60fps H.264 and H.265 encoders, built-in 3D GPU, fully compatible with OpenGL ES1.1/2.0/3.2, OpenCL 2.0, and Vulkan 1.1.

It is applicable to ARM PC, edge computing, personal mobile Internet devices and other multimedia products.
![ArmSoM-AIM5](/img/aim/aim5.jpg)

<div className="armsom-image-caption">ArmSoM-AIM5</div>


### Key Parameters

- SOC: Rockchip RK3576
- CPU: Integrated with quad core Cortex-A72 @ 2.2GHz and quad core Cortex-A53 @ 1.8GHz, as well as a separate NEON coprocessor.
- GPU: ARM Mali G52 MC3 GPU.
- NPU: With a computing power of up to 6TOPs (INT8), it supports mixed operations of INT4/INT8/INT16.
- VPU/codec:
  - Hard decoding: Supports H.264, H.265, VP9, AV1, and AVS2, among others 8K@30fps or 4K@120fps The highest quality JPEG decoder 4K@60fps
  - Hard coded: Supports H.264 and H.265, with JPEG being the highest 4K@60fps .
- RAM: 8/16GB 32-bit LPDDR5, RK3576 supports up to 16GB.
- Flash: 32/64/128GB eMMC.
- Working voltage: With a wide range of input voltages, from 5V to 23V (voltage error ± 5%)
- Working temperature：0℃ ~ 80℃
- Operating System
  - Rockchip official support：Android 14，Debian12，Buildroot
  - Third party support：Armbian
- Size：69.6 mm x 45 mm

<span id="doc-section-2" className="armsom-section-anchor" />

## Getting started

<a href="#aim-io-user-manual" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>AIM5 User Manual</h2>
            <p>How to start using your AI Module</p>
        </div>
    </div>
</a>

<span id="doc-section-3" className="armsom-section-anchor" />

## Hardware

### Hardware Interface

![ArmSoM-AIM5-front & back](/img/aim/armsom-aim5-front&back.png)

<div className="armsom-image-caption">ArmSoM-AIM5-front &amp; back</div>


:::tip
All pins of AIM5 are compatible with NVIDIA Jetson TX2 & NVIDIA Jetson Nano, with the same dimensions
:::

### Product Diagram


**USB topology:** USBHUB_HOST1–4 in the module connector table are downstream ports of the module hub, not four independent SoC controllers. AIM-IO V1.1 also has an RTS5411S hub; its USB-A ports share upstream bandwidth. Concurrent USB3, PCIe and SATA operation depends on module PHY muxing and the system image.

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
            <th><li>2 selectable PCIe 2.1 ×1 interfaces, up to 5 Gbps each; not a single ×2 link. PCIe/SATA/USB3 functions sharing a PHY are mutually exclusive.</li></th>
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

| Specification                        | ArmSoM-AIM5               | Jetson Nano (NVIDIA)                |
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
| PCIE             |<div className='armsom-color'>2 × PCIe 2.1 ×1 (mux)</div>| 1 1/2/4lane PCIE2.0 |
| HDMI Output      |<div className='armsom-color'>1 HDMI OUT2.1 / 1 eDP 1.3 </div>| 1 HDMI 2.0                                                   |
| DP Interface     | 1 DP1.4a | 1 DP1.2                                                      |
| eDP/DP Interface | <div className='armsom-color'>1 eDP 1.3 / 1 HDMI OUT2.1</div>| 1 eDP 1.4 / 1 DP                                             |
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
AIM5 uses the same AIM-IO carrier as AIM7. This table maps J41 on AIM-IO V1.1 to the RK3576 GPIOs on AIM5; do not use AIM7/RK3588 GPIO numbers. Numbers use bank × 32 + group × 8 + offset. Select mux functions in the device tree; signals routed through level shifters are also constrained by the carrier circuit.

<div className='gpio_style'>

| GPIO number | Function | Pin | Pin | Function | GPIO number |
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
        Pin Definition
    </summary>

:::caution
In the AIM5 V1.0 schematic, DP net labels and connector function names disagree on polarity at pins 41/47/53/59. The table retains the original net labels for traceability. Do not use these DP labels as a PCB routing reference without checking the original CAD netlist. This is separate from the confirmed use of the AIM-IO carrier.
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

## Resources

### Source Code

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

### Official Images

ArmSoM provides the following official system images. Select the matching product folder and image version in the shared drive.

The following systems have been tested and verified by ArmSoM officially: 

Google Drive:
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="btn">
  <span>Google Drive</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
| ![Debian 12](/img/sige/debian12-1.png) | **Debian 12 for AIM5:** <br/>Debian 12 (Bookworm) system images. Open the matching product folder in the shared drive; available versions and desktop variants are listed there. | [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56) |

### Third Party Systems

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | **Armbian for AIM5 :** <br/>  Armbian is a computing construction framework that allows users to create ready to use images with a working kernel based on the variable user space configuration of various single board computers. It provides various pre built images for some supported single board computers, typically based on Debian or Ubuntu. | [armbian image](https://armbian.com/boards?vendor=armsom)     |

### Hardware Material

Obtain hardware information such as development kit schematics, PCBs, DXF, etc., and quickly invest in development

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="btn">
  <span>Download link</span>
</a>

<br/>

<div class="cards">
    <a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>AIM5 Schematics</h2>
            </div>
        </div>
    </a>

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
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

## AIM5 User Manual {#aim-io-user-manual}

The AIM-IO User Manual helps users understand the basic usage of AIM products and the preparations needed to get started with your ArmSoM-AIM 🚀.

<span id="aim-io-doc-section-3" className="armsom-section-anchor" />

### Getting Started {#aim-io-getting-started}

Before using the ArmSoM-AIM product, please prepare the following items.

#### Tools Preparation {#aim-io-tools-preparation}
* Power Supply
* System Installation (Choose one)
  * Onboard eMMC Boot
    * USB Type-C data cable to write the image from the Type-C port on the ArmSoM-AIM series. You need to connect the ArmSoM-AIM to your PC using a Type-C data cable.
  * MicroSD/TF Card Boot
    * MicroSD/TF card, Class 10 or above, at least 8GB SDHC, and a card reader.
    * The following high-speed TF cards have been tested and validated by the ArmSoM team:
      * SanDisk 32GB TF (MicroSD) (Developer Recommended)
      * SanDisk 32GB TF (MicroSD) for Dash Cam & Security Monitoring (Recommended for Long-Term Use)
      * SanDisk TF 8GB Class 10 microSD
      * SanDisk TF 128GB Class 10 microSD XC 48MB/S

You can set up the ArmSoM-AIM as an interactive computer with a desktop interface or configure it as a headless computer accessible only via the network. To set up the ArmSoM-AIM as a headless computer, configure the hostname, user account, network connection, and SSH during the initial OS installation. If you want to use the ArmSoM-AIM directly, you will need the following additional accessories:

**Optional Items**
* Keyboard & Mouse
* HDMI Monitor and HDMI Cable
* Ethernet Cable
* Camera Module
  * Recommended: [camera-module1](./armsom-camera-module1).
* LCD Display
  * Recommended: [Display 10 HD](./armsom-display-10-hd).

#### Power Supply {#aim-io-power-supply}

The ArmSoM-AIM series requires a power supply specification of 12V/2-3A. You can use any high-quality power supply that provides the correct power mode.

Plug the power supply into the DC barrel jack, ensuring you use the correct port!

<span id="aim-io-doc-section-4" className="armsom-section-anchor" />

### Image Burning Options {#aim-io-image-burning-options}

The system images for the ArmSoM series include various root file systems, and you can choose the appropriate image for your needs.

:::info
The system image includes the Linux kernel, basic programs, etc., which are essential for running ArmSoM series products. Therefore, we need to install the image before operating the product.
:::

#### Obtaining the System Image {#aim-io-obtaining-the-system-image}

Visit the Google Drive resource introduction page to obtain the system image: [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56)

:::tip
1. The default username/password for the official images is armsom/armsom or root/root.
2. Ubuntu, Armbian, and OpenWrt offer more choices for open-source enthusiasts provided by ArmSoM.
:::

#### Burning Ubuntu, Armbian, or OpenWrt Systems {#aim-io-burning-ubuntu-armbian-or-openwrt-systems}

##### Using a Card Reader to Burn to MicroSD {#aim-io-using-a-card-reader-to-burn-to-microsd}

**Using Etcher to Write the Operating System Image to MicroSD**

This method is suitable for writing the system to an SD card and is available on Windows, macOS, and Linux x64 operating systems.

:::tip Preparation
1. A microSD card
2. An SD card reader
3. Download the corresponding Ubuntu / Armbian / OpenWrt system image
4. Insert the SD card into the SD reader and connect it to your computer’s USB port
:::

**Using Etcher to Write the Operating System Image to MicroSD**

1. Download balenaEtcher from the [balena website](https://etcher.balena.io/), selecting the version for your host operating system. The Linux version is in AppImage format.
2. Insert the MicroSD card into the MicroSD reader.
3. Open the Etcher window, select "Flash from file," and locate your downloaded image. Double-click to select it.

![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-from-file.png)

<div className="armsom-image-caption">balenaEtcher-flash-from-file</div>


4. Click "Select target" to choose the MicroSD card you want to burn to.
5. Click "Flash" and wait for the process to complete; this may take some time.
6. Upon successful burning, you will see a confirmation message.

![balenaEtcher-flash-success](/img/tools/balenaEtcher-flash-success.png)

<div className="armsom-image-caption">balenaEtcher-flash-success</div>


:::tip If Flashing Fails
1. On Windows, the image burning process needs to be "Run as Administrator." Some Linux users may need to use the `chmod` command to make it executable.
2. If the image writing fails, please try again.
:::

**Using Win32DiskImager to Write the Operating System Image to MicroSD**

1. [Download](https://win32diskimager.org/) the Win32DiskImager tool.
2. Open Win32DiskImager.
3. Click the folder icon and select the image you want to write.
4. After completing the previous steps, click the "Write" button to start writing the image and wait for the process to finish.

##### Using USB Cable to Burn to eMMC {#aim-io-using-usb-cable-to-burn-to-emmc}

###### Tool Acquisition and Installation {#aim-io-tool-acquisition-and-installation}

Burning the image to eMMC requires the RKDevTool burning tool and the RK Driver Assistant (Driver Assistant).

Click the link: [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56)

![baidu-flash-tool](/img/general-tutorial/baidu-flash-tool.jpeg)

<div className="armsom-image-caption">baidu-flash-tool</div>


###### Installing Driver Assistant {#aim-io-installing-driver-assistant}

Unzip the Driver Assistant software package and double-click DriverInstall.exe to enter the driver installation interface.

Click "Driver Install" to start the installation. If you're unsure whether an old version of the driver is already installed, first click "Driver Uninstall" to remove it, then click "Driver Install."

![install-driver-assitant](/img/general-tutorial/install-driver-assitant.png)

<div className="armsom-image-caption">install-driver-assitant</div>


###### Installing RKDevTool {#aim-io-installing-rkdevtool}

RKDevTool is a dedicated USB burning tool for Rockchip products on the Windows platform, allowing you to download the system image to the product via USB.

After unzipping the package, it can be used without installation; double-click RKDevTool.exe to access the software interface.

The software has three main sections: download the image (to burn the image according to the address), upgrade the firmware, and advanced functions.

###### MASKROM/Loader Mode for Image Burning {#aim-io-maskromloader-mode-for-image-burning}

This mode is suitable for products that have not had a system burned or where the burned system is corrupted and cannot run **(Applicable to all situations)**.

We open the RKDevTool burning tool and set the product to enter burning mode.

```
Please refer to the product-related instructions for operations; the methods to enter Maskrom mode are generally similar across different products.

1. Prepare a Type-C cable for image burning.
2. Disconnect all possible power connections to the product, such as power cables, USB cables, etc.
3. Connect one end of the Type-C cable to the product's OTG interface and the other end to your computer's USB port, then open the RKDevTool software.
4. Short the 10 and 11 pins on the 12-pin interface (as shown) to enter loader mode, then power the product using DC.
5. Wait for the software to prompt that a MASKROM/LOADER device has been found (as shown below), then you can release the button.
6. If it does not succeed, repeat steps 2-5.
```

Shorting pins 10 and 11 to enter loader mode.
![aimio-recovery](/img/aim/aimio-recovery.png)

<div className="armsom-image-caption">aimio-recovery</div>


Hold down the maskrom button on the AIM5 to enter maskrom mode.

![aimio-maskrom](/img/aim/aimio-maskrom.png)

<div className="armsom-image-caption">aimio-maskrom</div>


Start burning the system.

![rkdevtool-install-emmc](/img/general-tutorial/rkdevtool-install-emmc.png)

<div className="armsom-image-caption">rkdevtool-install-emmc</div>


1. Select the "Download Image" option.
2. Confirm that the board has entered Maskrom mode.
3. Click the blank cell to select the MiniLoaderAll and Image files to use; the corresponding MiniLoaderAll and Image are stored on Google Drive.
4. In the "Storage" option, select the target medium EMMC, and select "Force Write by Address," then click "Execute."
5. Wait for the writing to complete, after which the device will automatically reboot, as shown in the right side of the image with "Download image OK."

#### Burning Debian System {#aim-io-burning-debian-system}

##### Using a Card Reader to Burn to MicroSD {#aim-io-using-a-card-reader-to-burn-to-microsd-1}

###### Installing SDDiskTool {#aim-io-installing-sddisktool}

Burning the image to eMMC requires using the burning tool SDDiskTool_version.exe.

Click the link: [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56)

![baidu-SDDiskTool](/img/general-tutorial/baidu-sd-disk-tool.png)

<div className="armsom-image-caption">baidu-SDDiskTool</div>


After unzipping the package, you can use it without installation; double-click SD_Firmware_Tool.exe to access the software interface.

###### Burning the Image {#aim-io-burning-the-image}

Open the executable file SDDiskTool (SD_Firmware_Tool.exe) and insert the SD card.

First, select the correct SD card to burn, then set the function mode to "SD Boot," select the image to burn, and finally click "Start" to create the burning image on the SD card.

![SDDiskTool](/img/general-tutorial/sd-disk-tool.png)

<div className="armsom-image-caption">SDDiskTool</div>


Be patient while the SD card is being burned. If the image is large, the burning time will increase accordingly.

:::tip Reminder
1. Clicking "Create" may occasionally result in an error stating that it cannot burn; you can close the error window and try to start creating again. If it still doesn’t work, try formatting the SD card.
2. The firmware downloaded from Google Drive needs to be extracted before loading. On Windows PCs, the tool must be run with administrator privileges to execute.
:::

##### Using USB Cable to Burn to eMMC {#aim-io-using-usb-cable-to-burn-to-emmc-1}

We open the RKDevTool burning tool and set the product to enter burning mode.

```
1. Prepare a Type-C cable for image burning.
2. Disconnect all possible power connections to the product, such as power cables, USB cables, etc.
3. Connect one end of the Type-C cable to the product's OTG interface and the other end to your computer's USB port, then open the RKDevTool software.
4. Press and hold the Recovery button, then power the product using DC.
5. Wait for the software to prompt that a LOADER device has been found (as shown below), then you can release the button.
6. If it does not succeed, repeat steps 2-5.
```

![recovery-flash-tool](/img/general-tutorial/recovery-flash-update.png)

<div className="armsom-image-caption">recovery-flash-tool</div>


![maskroom-flash-tool](/img/general-tutorial/maskroot-flash-update.jpg)

<div className="armsom-image-caption">maskroom-flash-tool</div>


The flashing progress will be displayed on the right, and upon completion, it will prompt you:
![rkdevtool-success](/img/tools/rkdevtool-success.png)

<div className="armsom-image-caption">rkdevtool-success</div>


:::tip Analysis of Flashing Failures
If a "Download Boot Fail" error occurs during the flashing process, or if there are errors during the process, as shown in the image, it is usually due to poor connection with the USB cable, low-quality cables, or insufficient power from the computer's USB port. Please change the USB cable or USB port on the computer to troubleshoot.
:::

Sure! Here’s the translation:

---

<span id="aim-io-doc-section-5" className="armsom-section-anchor" />

### Interface Usage {#aim-io-interface-usage}

Output examples use AIM7 with official Debian 12 / Linux 6.1. Confirm device names, GPIO numbers, and overlays for your module and image.

#### 1. Debug Serial Port {#aim-io-1-debug-serial-port}

Connect a USB-to-TTL serial adapter to the carrier board's debug header as shown below. Cross RX/TX and connect GND.

![armsom-aimio-debug](/img/aim/armsom-aimio-debug.png)

<div className="armsom-image-caption">armsom-aimio-debug</div>


| AIM-IO debug header | Serial adapter |
| --- | --- |
| GND (pin 11) | GND |
| RX (pin 3) | TX |
| TX (pin 4) | RX |

These numbers refer to the debug header in the image, not the 40-pin header.

:::tip Serial Port Settings

- Baud rate: **1500000**
- Data bits: 8
- Stop bits: 1
- Parity: None
- Flow control: None

:::

Configure the serial terminal, then power on the board to view boot logs and log in.

| Username | Default password |
| --- | --- |
| `root` | `root` |
| `armsom` | `armsom` |

#### 2. Ethernet Port {#aim-io-2-ethernet-port}

1. First, plug one end of the Ethernet cable into the ArmSoM-AIM’s Ethernet port and connect the other end to a router, ensuring the network is functional.
2. After booting, the system will automatically assign an IP address to the Ethernet card via DHCP without any additional configuration.
3. To check the IP address in the ArmSoM-AIM Linux system, use the following command:

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

After the ArmSoM-AIM boots, there are three ways to check the IP address:

- Connect to an HDMI display, log into the system, and use the terminal to enter the `ip a` command.
- Use the debug serial port terminal to enter the `ip a` command to check the IP address.
- If there is no debug serial port or HDMI display, you can check the ArmSoM-AIM’s IP address through the router’s management interface. However, this method often fails to display the ArmSoM-AIM’s IP address. If not visible, follow these troubleshooting steps:
    - First, check whether the Linux system has booted properly. If the ArmSoM-AIM's green LED is solid, it generally indicates a normal boot. If only the red LED is on, the system hasn't booted correctly.
    - Ensure the Ethernet cable is securely connected, or try a different cable.
    - Test with another router, as many issues arise from routers not assigning IP addresses correctly or assigning them but not displaying them in the management interface.
    - If no alternative router is available, connect an HDMI display or use the debug serial port to check the IP address.

:::tip
It is important to note that the ArmSoM-AIM automatically assigns an IP address via DHCP without any settings required.
:::

4. Use the `ping` command to check network connectivity.

The command to test network connectivity is as follows. You can interrupt the `ping` command by using the Ctrl+C shortcut:
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

#### 3. M.2 Key E (Wi-Fi / Bluetooth) {#aim-io-3-m2-key-e-wi-fi--bluetooth}

AIM-IO provides an M.2 Key E slot. The following example uses the tested **Intel AX200**: Wi-Fi uses PCIe, while Bluetooth uses USB. Install the card and connect its antennas before powering on the board.

##### Identify the AX200 {#aim-io-identify-the-ax200}

```bash
armsom@armsom:~$ lspci -nnk -s 01:00.0
```

Output collected from the board:

```text
01:00.0 Network controller [0280]: Intel Corporation Wi-Fi 6 AX200 [8086:2723] (rev 1a)
        Subsystem: Intel Corporation Wi-Fi 6 AX200NGW [8086:0084]
        Kernel driver in use: iwlwifi
        Kernel modules: iwlwifi
```

Use `lspci -nn` to find the actual PCIe address first. `Kernel driver in use: iwlwifi` confirms that the driver is bound. If the log reports `no suitable firmware found`, check that the image contains `/lib/firmware/iwlwifi-cc-a0-72.ucode`.

##### Use Wi-Fi {#aim-io-use-wi-fi}

1. Start NetworkManager, enable Wi-Fi, and check the wireless interface name (`wlp1s0` in this example):

```bash
armsom@armsom:~$ sudo systemctl start NetworkManager
armsom@armsom:~$ sudo nmcli radio wifi on
armsom@armsom:~$ nmcli device status
```

2. Scan and list nearby Wi-Fi networks:

```bash
armsom@armsom:~$ sudo nmcli device wifi list ifname wlp1s0 --rescan yes
```

3. Connect to a network and enter the password when prompted:

```bash
armsom@armsom:~$ sudo nmcli --ask device wifi connect 'YourWiFiName' ifname wlp1s0
```

NetworkManager saves a successful connection and reconnects on subsequent boots. Check the connection status:

```bash
armsom@armsom:~$ nmcli -f DEVICE,TYPE,STATE device
```

Excerpt from the board:

```text
DEVICE          TYPE      STATE
wlp1s0          wifi      connected
```

4. Disconnect the current Wi-Fi connection:

```bash
armsom@armsom:~$ sudo nmcli device disconnect wlp1s0
```

##### Use Bluetooth {#aim-io-use-bluetooth}

```bash
armsom@armsom:~$ lsusb -d 8087:0029
armsom@armsom:~$ bluetoothctl show
```

Excerpt from the board:

```text
Bus 004 Device 002: ID 8087:0029 Intel Corp. AX200 Bluetooth
Controller 38:7A:0E:75:1A:15 (public)
        Name: armsom
        Alias: armsom
        Class: 0x007c0000
        Powered: yes
```

Put the target device into discovery/pairing mode, then use `bluetoothctl`. Replace the example address with the address found during scanning:

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

| Model | AIM7 | AIM5  |
| ----- | ----- | ------ |
| Resolution | 8Kp60 | 4Kp120 |

1. Use an HDMI cable to connect the ArmSoM-AIM to an HDMI display.
2. If the HDMI display outputs an image after the Linux system boots, the HDMI interface is functioning properly.

:::tip
Note that many laptops have HDMI ports that only support output functionality. This means they cannot display HDMI output from other devices on their screens. When attempting to connect the development board's HDMI to a laptop HDMI port, please confirm whether your laptop supports HDMI input functionality. If no display is shown, first check whether the system version includes a desktop environment, as server versions only show the terminal.
:::

#### 5. DP (DisplayPort) {#aim-io-5-dp-displayport}

| Model | AIM7 | AIM5  |
| ----- | ----- | ------ |
| Resolution | 4Kp60 | 4Kp60 |

1. Use a DP cable to connect the ArmSoM-AIM to a DP display.
2. If the DP display outputs an image after the Linux system boots, the DP interface is functioning properly.

#### 6. USB {#aim-io-6-usb}

AIM-IO provides four USB 3.0 Type-A ports for keyboards, mice, USB drives, and UVC cameras.

##### Keyboard, Mouse, and USB Speed {#aim-io-keyboard-mouse-and-usb-speed}

Connect a keyboard or mouse to use it in the desktop. Inspect the USB topology with:

```bash
armsom@armsom:~$ lsusb -t
```

Excerpt from the board:

```text
/:  Bus 03.Port 1: Dev 1, Class=root_hub, Driver=xhci-hcd/1p, 5000M
    |__ Port 1: Dev 2, If 0, Class=Hub, Driver=hub/4p, 5000M
        |__ Port 4: Dev 3, If 0, Class=Mass Storage, Driver=usb-storage, 5000M
```

Check the speed on the actual device line: `5000M` indicates USB 3.0 for this drive; `480M` indicates USB 2.0. Lower speeds are normal for keyboards and mice. The root hub's speed alone does not establish the peripheral's speed.

##### USB Storage {#aim-io-usb-storage}

```bash
armsom@armsom:~$ lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS /dev/sda
```

Output collected from the board:

```text
NAME    SIZE TYPE FSTYPE MOUNTPOINTS
sda    29.3G disk
└─sda1 29.3G part vfat
```

Confirm the actual device and partition before mounting. This example uses `/dev/sda1`:

```bash
armsom@armsom:~$ sudo mkdir -p /mnt/usb
armsom@armsom:~$ sudo mount /dev/sda1 /mnt/usb
armsom@armsom:~$ ls /mnt/usb
# Unmount before unplugging the drive.
armsom@armsom:~$ sudo umount /mnt/usb
```

##### USB Camera {#aim-io-usb-camera}

Connect a UVC-compatible USB camera and locate its node and supported formats. Do not use a MIPI camera node for this test.

```bash
armsom@armsom:~$ v4l2-ctl --list-devices
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --list-formats-ext
```

Replace `/dev/videoX` with the actual UVC node. Desktop images can preview the camera in Cheese, or run the following command in a local graphical session:

```bash
armsom@armsom:~$ gst-launch-1.0 v4l2src device=/dev/videoX ! videoconvert ! autovideosink
```

##### USB Type-C Flashing {#aim-io-usb-type-c-flashing}

The carrier board's Type-C port connects to a computer for flashing in Loader/Maskrom mode. See [Image Burning Options](#aim-io-image-burning-options) on this page. Power the board through the 12V DC input described above.

#### 7. TF Card {#aim-io-7-tf-card}

Boot from eMMC, insert a TF/microSD card, and inspect its device and partitions. On the tested board, `/dev/mmcblk1` is the TF card and `/dev/mmcblk0` is eMMC; do not confuse them.

```bash
armsom@armsom:~$ lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS /dev/mmcblk1
armsom@armsom:~$ cat /sys/class/block/mmcblk1/device/type
```

Output collected from the board:

```text
NAME         SIZE TYPE FSTYPE MOUNTPOINTS
mmcblk1     29.1G disk
├─mmcblk1p1    8M part
├─mmcblk1p2  128M part ext2
└─mmcblk1p3   29G part ext4
SD
```

This example card contains a system image; a data card may have different partitions. Select a partition with a filesystem from `lsblk`. The following example mounts the third partition read-only:

```bash
armsom@armsom:~$ sudo mkdir -p /mnt/tfcard
armsom@armsom:~$ sudo mount -o ro /dev/mmcblk1p3 /mnt/tfcard
armsom@armsom:~$ ls /mnt/tfcard
armsom@armsom:~$ sudo umount /mnt/tfcard
```

#### 8. RTC {#aim-io-8-rtc}

The tested AIM7 uses an HYM8563-compatible RTC on `i2c4`. Connect the RTC backup battery and confirm device registration:

```bash
armsom@armsom:~$ cat /sys/class/rtc/rtc0/name
armsom@armsom:~$ dmesg | grep rtc-hym8563
```

Excerpt from the board:

```text
rtc-hym8563 4-0051
[    2.149494] rtc-hym8563 4-0051: rtc information is valid
[    2.156470] rtc-hym8563 4-0051: registered as rtc0
```

Verify that the system time is correct before writing it to the RTC:

```bash
armsom@armsom:~$ date
armsom@armsom:~$ sudo hwclock -w -f /dev/rtc0
armsom@armsom:~$ sudo hwclock -r -f /dev/rtc0
armsom@armsom:~$ sudo poweroff
```

Leave the RTC battery connected and disconnect only the main power. Power on again after a few minutes and use `hwclock -r -f /dev/rtc0` to check that time has advanced. Disconnecting the backup battery does not test battery-backed timekeeping.

#### 9. MIPI-CSI {#aim-io-9-mipi-csi}

<a href="/advanced-manual/armsom-camera" className="card-link">
  <div className="card">
    <div className="icon" aria-hidden="true"><i>📷</i></div>
    <div className="content">
      <h2>ArmSoM Camera Applications</h2>
      <p>Use Cheese or guvcview to select a camera, switch resolutions, preview, take photos and record video. On both desktop and Server images, the armsom-camera command also lets you choose the camera, resolution and frame rate.</p>
    </div>
  </div>
</a>

The instructions below cover wiring, enabling the overlay and using the original capture and preview commands. These commands use the sensor resolution selected by the driver by default.

##### Camera Ports and Overlays {#aim-io-camera-ports-and-overlays}


Power off before connecting ribbon cables and check their orientation.

| Port | Carrier reference | Camera | Overlay filename |
| --- | --- | --- | --- |
| CAM0 | J13 | IMX219 | `rk3576-armsom-aim5-camera-imx219-cs0-overlay.dtbo` |
| CAM1 | J49 | IMX219 | `rk3576-armsom-aim5-camera-imx219-cs1-overlay.dtbo` |
| CAM2 | J12 | OV13850 | `rk3576-armsom-aim5-camera-ov13850-cs2-overlay.dtbo` |
| CAM3 | J24 | OV13850 | `rk3576-armsom-aim5-camera-ov13850-cs3-overlay.dtbo` |

Edit the AIM5 boot configuration:

```bash
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim5-io.txt
```

Enable only the lines for connected cameras. The following configuration enables all four:

```ini
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-camera-imx219-cs0-overlay.dtbo
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-camera-imx219-cs1-overlay.dtbo
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-camera-ov13850-cs2-overlay.dtbo
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-camera-ov13850-cs3-overlay.dtbo
```

:::tip
Remove the leading `#` to enable a line. For initial wiring checks, enable one camera at a time before combining ports as needed. If an older image lacks these files, update the kernel package for your module.
:::

Save and reboot:

```bash
armsom@armsom:~$ sudo reboot
```

##### Check Sensor IDs {#aim-io-check-sensor-ids}

```bash
armsom@armsom:~$ dmesg | grep imx219
armsom@armsom:~$ dmesg | grep ov13850
```

Excerpt from an earlier log saved on this board with all four cameras enabled:

```text
[    3.019918] ov13850 3-0010: Detected OV00d850 sensor, REVISION 0xb2
[    3.025395] ov13850 6-0010: Detected OV00d850 sensor, REVISION 0xb2
[    3.086742] imx219 2-0010: Detected IMX000219 sensor
[    3.119883] imx219 4-0010: Detected IMX000219 sensor
```

Each `Detected` line confirms that the driver read the corresponding sensor ID.

##### Basic Commands and Tools {#aim-io-basic-commands-and-tools}

AIM5 and AIM7 use the same ArmSoM SDK, so the capture methods below apply to both. Find the target camera's **ISP output node** and replace `/dev/videoX` accordingly.

```bash
armsom@armsom:~$ v4l2-ctl --list-devices
armsom@armsom:~$ media-ctl -d /dev/mediaX -p
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --list-formats-ext
```

Some image versions require GStreamer to be installed manually. If `gst-launch-1.0 --version` reports that the command is missing, run:

Before refreshing the index, check the system clock and repositories in [Update the APT package source list](/getting-start/apt-update#fresh-image-apt).

```bash
armsom@armsom:~$ sudo apt-get update
armsom@armsom:~$ sudo apt-get install -y gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-x
```

Recording uses the SDK's Rockchip hardware encoder. Check it with `gst-inspect-1.0 mpph264enc`; if missing, use a matching SDK image or install its corresponding plugin.

Restart the image's 3A service before capture:

```bash
armsom@armsom:~$ sudo systemctl restart rkaiq_3A.service
```

Run one capture command at a time. Connect a display for preview and press `Ctrl+C` to stop. Recording commands include `-e` so the MP4 file can be finalized when stopping.

##### OV13850 Camera {#aim-io-ov13850-camera}

These examples use `2112×1568 @ 30fps`. Select a resolution and frame rate supported by your actual node.

**Capture a JPEG photo**

```bash
# AIM7 CAM2 example. Substitute the ISP mainpath node for your camera.
# Capture 45 frames for auto exposure. The fixed filename keeps the last photo.
gst-launch-1.0 -q v4l2src device=/dev/video71 num-buffers=45 ! \
  video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! \
  videoconvert ! jpegenc ! multifilesink location=ov13850.jpg
```

**Record video:**

```bash
armsom@armsom:~$ gst-launch-1.0 -e v4l2src device=/dev/videoX num-buffers=300 ! video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! mpph264enc ! h264parse ! mp4mux ! filesink location=ov13850.mp4
```

**Preview:**

```bash
armsom@armsom:~$ gst-launch-1.0 v4l2src device=/dev/videoX ! video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! videoconvert ! autovideosink
```

##### IMX219 Camera {#aim-io-imx219-camera}

Capture, recording, and preview use `3280×2464`. The full-resolution mode supports 15 FPS.

**Capture a photo (JPEG):**

```bash
# AIM7 CAM0 example. Substitute the ISP mainpath node for your camera.
# Capture 45 frames for auto exposure. The fixed filename keeps the last photo.
GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 -q v4l2src device=/dev/video53 num-buffers=45 io-mode=4 ! \
  video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! \
  videoconvert ! jpegenc ! multifilesink location=imx219.jpg
```

**Record video:**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 -e v4l2src device=/dev/videoX num-buffers=300 io-mode=4 ! video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! mpph264enc ! h264parse ! mp4mux ! filesink location=imx219.mp4
```

**Preview:**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/videoX ! video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! videoconvert ! autovideosink
```

`GST_V4L2SRC_MAX_RESOLUTION` selects camera modes on some SDK images. If your image does not support this extension, omit the prefix and use its supported resolution and frame rate.

##### Preview Four Cameras Simultaneously {#aim-io-preview-four-cameras-simultaneously}

AIM7 has been tested with two IMX219 and two OV13850 cameras running together. Enable all four camera overlays above in `/boot/uEnv/uEnvarmsom-aim5-io.txt` and reboot first. Ensure that the IMX219 module name matches `imx219_rpi-camera-v2_default.json` and that the 3A service is running.

Download the [four-window preview script](/files/aim7-four-camera-preview.py) to the board. In a local desktop terminal, enter its directory and run:

```bash
armsom@armsom:~$ sudo apt-get install -y python3-gi gir1.2-gtk-3.0 gir1.2-gstreamer-1.0 gir1.2-gst-plugins-base-1.0
armsom@armsom:~$ sudo systemctl restart rkaiq_3A.service
armsom@armsom:~$ python3 aim7-four-camera-preview.py
```

The script arranges four equal windows on a 1920×1080 screen, with IMX219 cameras on top and OV13850 cameras below, preserving aspect ratios. ISP output is scaled to 640×480. Measured rates were approximately 15 FPS for IMX219 and 25 FPS for OV13850. Press `Ctrl+C` to exit.

The script uses `/dev/video53`, `/dev/video62`, `/dev/video44`, and `/dev/video71` from this AIM7 four-camera configuration. On other images, identify the corresponding ISP output nodes using `v4l2-ctl --list-devices` and `media-ctl -p`, then update the camera list near the beginning of the script. This example has not been verified on AIM5.

Screenshot from the test (each camera image rotated 180° to correct its orientation, with titles unchanged; 1920×1080, losslessly compressed):

![AIM7 simultaneous four-camera preview](/img/aim/aim7-four-camera-preview.webp)

<div className="armsom-image-caption">AIM7 simultaneous four-camera preview</div>

#### 10. MIPI DSI {#aim-io-10-mipi-dsi}

Use the AIM5 overlay for your panel. The example below uses the 800 × 1280 panel.

```bash
armsom@armsom:~$ ls /boot/dtb/overlay/rk3576-armsom-aim5-display-*.dtbo
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim5-io.txt
```

Enable the corresponding line:

```ini
dtoverlay=/dtb/overlay/rk3576-armsom-aim5-display-800x1280-8hd-overlay.dtbo
```

Save and reboot, then inspect the display connection and touch input devices:

```bash
armsom@armsom:~$ ls /sys/class/drm/
armsom@armsom:~$ cat /sys/class/drm/card*-DSI-*/status
armsom@armsom:~$ cat /proc/bus/input/devices
```

Touch input requires a matching panel, controller, and overlay.

#### 11. FAN {#aim-io-11-fan}

Connect a fan to the carrier board's fan connector. The official device tree's `pwm-fan` driver adjusts it according to temperature. hwmon numbering can change, so locate `pwmfan` first:

```bash
armsom@armsom:~$ grep -H '^pwmfan$' /sys/class/hwmon/hwmon*/name
```

The tested board uses `hwmon7`:

```bash
armsom@armsom:~$ cat /sys/class/hwmon/hwmon7/name
armsom@armsom:~$ cat /sys/class/hwmon/hwmon7/pwm1
```

```text
pwmfan
0
```

`pwm1` is a PWM control value from 0 to 255, not an RPM reading. A value of 0 at low temperature is normal.

#### 12. 40 PIN {#aim-io-12-40-pin}

The AIM-IO 40-pin header exposes multiplexed GPIO, I2C, SPI, UART, and PWM signals. **The [pin table](./armsom-aim7#aim-io-pin-definition) and conflicts below are AIM7 examples**; use the AIM5 module documentation to confirm its GPIO mapping. Available functions depend on the device tree and other connected peripherals.

| Enabled function | Physical header pins to avoid |
| --- | --- |
| I2C4 (RTC, CAM1, and some display touch controllers) | 3, 5 |
| CAM0 I2C2 | 27, 28 |
| OV13850 reset, PWDN, and clocks | 11, 15, 31, 33, 36 |
| The MIPI DSI display configuration above | 7, 32 |

Do not change pins used by a camera or RTC to GPIO outputs. Check current ownership before use:

```bash
armsom@armsom:~$ sudo cat /sys/kernel/debug/gpio
armsom@armsom:~$ sudo cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins
```

See [GPIO Usage](<../Interface Usage/2_gpio.md>), [UART Usage](<../Interface Usage/5_uart.md>), [SPI Usage](<../Interface Usage/7_spi.md>), and [PWM Usage](<../Interface Usage/6_pwm.md>), selecting signals from your module's pin definition. Power off before connecting peripherals and confirm signal voltage against the carrier pin definition and schematic.


<span id="doc-section-5" className="armsom-section-anchor" />

## Product Certifications

### CE / FCC / RoHS

<span id="doc-section-6" className="armsom-section-anchor" />

## Supply Statement

ArmSoM-AIM5 will remain in production through at least August 2034.


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
