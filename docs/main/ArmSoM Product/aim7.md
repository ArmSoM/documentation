---
description: ArmSoM-AIM7 uses Rockchip RK3588, a new generation flagship eight-core 64-bit processor with a main frequency of up to 2.4GHz, 6 TOPS computing power NPU, and can be equipped with up to 32GB of large memory. While the interface is fully compatible with Jetson Nano
keywords: [armsom, armsom-aim7, jetson nano, nvidia, rockchip]
sidebar_label: "AIM7"
sidebar_position: 3
slug: /armsom-aim7
image: /img/aim/aim7.png
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Product Introduction: AIM7

<nav className="armsom-doc-shortcuts" aria-label="Section shortcuts"><a href="#overview">AIM7 Overview</a><a href="#doc-section-2">User Manual</a><a href="#doc-section-3">AIM7 Hardware</a><a href="#aim-io">AIM-IO Overview</a><a href="#aim-io-doc-section-1">AIM-IO Hardware</a><a href="#doc-section-4">Resources</a></nav>

<span id="doc-section-1" className="armsom-section-anchor" />

## AIM7 Overview {#overview}

ArmSoM-AIM7 uses Rockchip RK3588, a new generation flagship eight-core 64-bit processor with a main frequency of up to 2.4GHz, 6 TOPS computing power NPU, and can be equipped with up to 32GB of large memory. While the interface is fully compatible with Jetson Nano, the PCIe interface has been upgraded to PCIe3.0 4-lane and PCIe2.1 1-lan.

:::tip
[Welcome to the RK3588AI Module7 documentation! The RK3588AI Module7 is currently in the crowdfunding preheating stage. Stay tuned for the latest updates by subscribing to our campaign！](https://www.crowdsupply.com/armsom/rk3588-ai-module7)
:::

![ArmSoM-AIM7](/img/aim/aim7.png)

<div className="armsom-image-caption">ArmSoM-AIM7</div>


AIM7 can be applied to ARM PC, edge computing, cloud server, artificial intelligence, cloud computing, virtual/augmented reality, blockchain, smart NVR and other fields.


:::tip Rockchip RK3588
- [ArmSoM-Sige7](./armsom-sige7) AI SBC;
- [ArmSoM-AIM7](./armsom-aim7) AIM7 core board， [ArmSoM-AIM-IO](#aim-io)  AIM Companion IO Board;
- [ArmSoM-LM7](./armsom-lm7) LGA core board, [ArmSoM-W3](./armsom-w3) LGA core board maker kit;

With the powerful ecosystem and variety of extension modules, ArmSoM can help users easily go from ideas to prototype to mass production, making it an ideal creative platform for makers, dreamers and hobbyists.
:::

### Key Parameters 

- SOC: Rockchip RK3588
- CPU: RK3588 quad-core Cortex-A76 @ 2.4GHz + quad-core Cortex-A55 @ 1.8GHz, 8nm process  
- GPU: ARM Mali-G610 MP4
- NPU: Computing power up to 6 TOPS (INT8), supports INT4/INT8/INT16 mixed computing
- VPU/Codec:  
  - Hardware decoding: 8K@60fps H.265/VP9/AVS2, 8K@30fps H.264 AVC/MVC, 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8  
  - Hardware encoding: 8K@30fps H.265 / H.264
- RAM: 8GB/16GB/32GB (max 32GB) 64bit LPDDR4x
- Flash: 32GB/64GB/128GB eMMC
- Interface type: 260pin SO-DIMM connector, compatible with Jetson TX2 NX
- Working voltage: 5V DC
- Temperature: Operating temperature: 0°C to 80°C, Storage temperature: -20°C to 85°C
- Humidity: Relative humidity: Operation: 10% to 90%, Storage: 5% to 95%
- operating system:
   - ArmSoM official images: Debian 12, Ubuntu 22.04
   - Third-party support: Armbian 23.07, Ubuntu 20.04, Ubuntu22.04, Kylin OS
- PCB: 12-layer PCB board design
- weight: 17.3g
- Size: 69.6 mm x 45 mm

<span id="doc-section-2" className="armsom-section-anchor" />

## Getting started

<a href="#aim-io-user-manual" class="card-link">
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

<span id="doc-section-3" className="armsom-section-anchor" />

## AIM7 Hardware {#hardware}

### Hardware Interface

![ArmSoM-AIM7-front & back](/img/aim/armsom-aim7-front&back.png)

<div className="armsom-image-caption">ArmSoM-AIM7-front &amp; back</div>


:::tip
AIM7 features a 260-pin SO-DIMM form factor designed for compatibility with selected NVIDIA Jetson carrier boards. Pin functions, power requirements, and peripheral compatibility should be verified against the AIM7 pinout and validated carrier board configurations.
:::

### AIM7 Block Diagram
![aim7-product](/img/aim/aim7-product.jpg)

<div className="armsom-image-caption">aim7-product</div>


### Pin Definition

![ArmSoM-aim7-pinlist](/img/aim/aim7-pinlist.png)

<div className="armsom-image-caption">ArmSoM-aim7-pinlist</div>


<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="btn">
  <span>ArmSoM-AIM7 & Jetson AIM Comparison Table</span>
</a>
<br/>

### Hardware Spec
<details>
    <summary>
        AIM7 Hardware Specifications
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
            <th><li>1x DP interface</li><li>1x HDMI/eDP combo interface</li> <li>HDMI up to 7680 × 4320@60 Hz; DP up to 7680 × 4320@30 Hz; eDP up to 3840 × 2160@60 Hz. Actual modes depend on the carrier and system configuration.</li></th>
        </tr>
        <tr>
            <th>Camera</th>
            <th><li>3x 4-lane or 5x 2-lane MIPI CSI interfaces, each lane up to 2.5Gbps</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th>
              <li>1 GMAC, with RGMII / RMII interface</li>
              <li>Supports 10/100/1000Mbps data transfer rate</li>
            </th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>PCIe 3.0 x4: Each channel supports up to 8Gbps data rate, supports 4 configuration modes: 1x4, 2x2, 4x1, 1x2+2x1, each channel supports up to 8Gbps data rate</li><li>PCIe 2.1 x1: Each PCIe 2.1 interface supports 1 lane, up to 5Gbps data rate</li></th>
        </tr>
         <tr>
            <th>USB</th>
            <th><li>1x USB 3.0 (Gen1)</li><li>3x USB 2.0</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1, UART+flow control x2</li><li>SPI x2</li><li>I2C x4</li><li>CAN x1</li><li>I2S x2</li><li>SD 4.0, SDHOST 4.0, and SDIO 3.0</li><li>PWM x3, multiple GPIOs</li></th>
        </tr>
    </tbody>
</table>

</details>

### Competitor Specifications Comparison
<details>
    <summary>
        AIM7 Hardware Spec
    </summary>

<div className='gpio_style'>

| Specifications   |ArmSoM-AIM7(Rockchip)                                       | Jetson Nano (NVIDIA)                                         | 
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CPU  |<div className='armsom-color'>Quad-core ARM®Cortex®-A76 + Quad-core ARM®Cortex®-A55</div> | Quad-core ARM® Cortex®-A57 MPCore processor  | 
| GPU        |  ARM Mali-G610 MP4  |128-core Maxwell GPU  |
| NPU | 6TOPs（INT8） | - |
| Memory           |8GB/32GB 64-bit LPDDR4x, 2112MHz   | 4GB 64-bit LPDDR4, 1600MHz                                   | 
| Storage          |  microSD card, 32GB eMMC 5.1 flash storage | microSD card, 16GB eMMC 5.1 flash storage                    |
| Video Encoding   | <div className='armsom-color'>8K@30fps H.265 / H.264</div>| 250 MP/sec, 1x 4K@30 (HEVC), 2x 1080p@60 (HEVC), 4x 1080p@30 (HEVC) | 
| Video Decoding   | <div className='armsom-color'>8K@60fps H.265/VP9/AVS2, 8K@30fps H.264 AVC/MVC, 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8</div> | 500 MP/s, 1x 4K@60 (HEVC), 2x 4K@30 (HEVC), 4x 1080p@60 (HEVC), 8x 1080p@30 (HEVC) |
| USB Ports        | 1 USB 3.0,  3 USB 2.0       | 1 USB 3.0, 3 USB 2.0                                         | 
| Ethernet         | 1 10/100/1000 BASE-T   | 1 10/100/1000 BASE-T                                         | 
| CSI Interfaces   |  12 channels (4x2) MIPI CSI-2 D-PHY1.1 (18 Gbps)  | 12 channels (3x4 or 4x2) MIPI CSI-2 D-PHY 1.1 (18 Gbps)      |
| I/O               |3 UARTs, 2 SPIs, 2 I2S, 4 I2Cs, multiple GPIOs               | 3 UARTs, 2SPIs, 2 I2S, 4 I2Cs, multiple GPIOs  | 
| PCIE             |<div className='armsom-color'>1 1/2/4lane PCIE3.0 & 1 1lane PCIE2.0</div>| 1 1/2/4lane PCIE2.0 | 
| HDMI Output      |<div className='armsom-color'>1 HDMI OUT2.1 / 1 eDP 1.3 </div>| 1 HDMI 2.0                                                   |
| DP Interface     | 1 DP1.4a | 1 DP1.2                                                      |
| eDP/DP Interface | <div className='armsom-color'>1 eDP 1.3 / 1 HDMI OUT2.1</div>| 1 eDP 1.4 / 1 DP                                             |
| DSI Interface    | 1 DSI (1 x2) 2 sync|1 DSI (1 x2) 2 sync                                          | 
| OS Support       | <div className='armsom-color'>Support Debian，Ubuntu，Armbian</div>  | NVIDIA JetPack software suite                                | 
| Size             | 69.6 mm x 45 mm  | 69.6 mm x 45 mm                                              | 
| Form Factor      | 260-pin edge connector                                       | 260-pin edge connector     |
</div>

</details>

### Hardware Pin Definitions

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
        GPIO
    </summary>

* All GPIOs can be used to generate interrupt
* Support level trigger and edge trigger interrupt
* Support configurable polarity of level trigger interrupt
* Support configurable rising edge, falling edge and both edge trigger interrupt
* Support configurable pull direction (a weak pull-up and a weak pull-down)
* Support configurable drive strength

Table 15. GPIO pin descriptions

|Pin| 	Pin name|	Signal description|	Direction	|Pin type
|---|------------|-------------------|--------------|--------------|
|87|GPIO0/GPIO1_C5/VBUS_DET|	GPIO #0 or USB 0 VBUS Enable #0	|Bidir	|CMOS – 1.8V
|118|GPIO01/GPIO3_A7/CAM1_PWDN|	GPIO #1 or Generic Clocks|	Bidir|	CMOS – 1.8V
|124|GPIO02/GPIO3_A3/MIPI_CAM2_PDN |	GPIO #2|	Bidir|	CMOS – 1.8V
|126|GPIO03/GPIO3_D0/PCIE20X1_2_WAKEN_M0 |	GPIO #3	|Bidir|	CMOS – 1.8V
|127|GPIO04/GPIO4_A4/PCIE_30X1_0_WAKE |	GPIO #4	|Bidir|	CMOS – 1.8V
|128|GPIO05/GPIO4_B0/PCIE30X2_PERSTN_M1	 |	GPIO #5	|Bidir|	CMOS – 1.8V
|130|GPIO06/GPIO4_A7/PCIE_30X2_WAKE|	GPIO #6|	Bidir|	CMOS – 1.8V
|206|GPIO07/GPIO3_A0/PWM10|	GPIO #7 or Pulse Width Modulator	|Bidir|	CMOS – 1.8V
|208|GPIO08/GPIO1_C6/PWM15_IR|	GPIO #8 or Fan Tach	|Bidir|	CMOS – 1.8V
|211|I2S1_MCLK_M0/PCIE30X1_1_CLKREQN_M1|	GPIO #9 or Audio Codec Master Clock|	Bidir|	CMOS – 1.8V
|212|GPIO10/GPIO4_A3/PCIE_30X1_0_CLKREQ |	GPIO #10	|Bidir|	CMOS – 1.8V
|216|GPIO11/GPIO3_B0/MIPI_CAM3_CLKOUT|	GPIO #11 or Generic Clocks	|Bidir|	CMOS – 1.8V
|218|GPIO12/I2S2_MCLK_M1/MIPI_CAM3_PDN|	GPIO #12 or Pulse Width Modulator	|Bidir|	CMOS – 1.8V
|228|GPIO13/GPIO3_B1/PWM2/MIPI_CAM4_CLKOUT|	GPIO #13 or Pulse Width Modulator	|Bidir|	CMOS – 1.8V
|230|GPIO14/GPIO3_A1/PWM11_IR/MIPI_CAM4_PDN | GPIO #14 or Pulse Width Modulator	|Bidir|	CMOS – 1.8V
</details>

<details>
    <summary>
        I2C interface
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
      Pin Definitions
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


## Product Introduction: AIM-IO {#aim-io}

**AIM-IO** is an IO board from the ArmSoM AIM series, with dimensions of 100x80x29 mm, and is also compatible with current Jetson Nano core modules. It is a mini AI computer designed for makers, learners, and developers, capable of quickly implementing AI technology in various smart devices.

<span id="aim-io-doc-section-1" className="armsom-section-anchor" />

## AIM-IO Hardware {#aim-io-hardware}

### Hardware Interface {#aim-io-hardware-interface}

![AIM-IO](/img/aim/aim-io.png)

<div className="armsom-image-caption">AIM-IO</div>


:::tip
The AIM-IO Board is powered by 12V DC.
:::

### Hardware Spec {#aim-io-hardware-spec}

The AIM-IO Board is a companion board for AIM modules designed to assist developers using AIM modules in completing system and embedded board development. Compared to the Jetson Nano Developer Kit (B01), the AIM-IO Board is of the same size but adds 2 MIPI CSI interfaces, 1 M.2 Key-E interface, and 1 MIPI DSI interface.

* 1x DisplayPort
* 1x HDMI-out
* 4x USB 3.0 Type-A
* Gigabit Ethernet
* GPIO: 40-PIN expansion header
* POE: 5 V Power Over Ethernet
* Power Connector: DC Barrel jack for 12V power input
* Expansion: M.2 (E-key, PCIe/USB/SDIO/UART), microSD
* MIPI DSI: 1x 4 lanes MIPI DSI up to 4K@60fps (x4)
* MIPI CSI0/1: 2x 2 lanes MIPI CSI，Maximum 2.5Gbps per lane.
* MIPI CSI2/3: 1x 4 lanes MIPI CSI，Maximum 2.5Gbps per lane.
* Firmware flashing and device mode via USB Type-C
* Dimensions: 100 x 80 x 29 mm (3.94 x 3.15 x 1.14 in)
* Weight: 78.4g

### Pin Definition {#aim-io-pin-definition}

<details id="board-40pin">
    <summary>
       AIM7 40-PIN Connector
    </summary>


![ArmSoM AIM7 40Pin](/img/board-pinouts/aim7-40pin.svg)

[Open full-size pinout](/img/board-pinouts/aim7-40pin.svg)

Checked against the AIM-IO V1.1 schematic. Numbers in the diagram are physical pins. NC means not connected; DNP means not populated. Alternate functions require matching system configuration; legacy GPIO numbers are not Linux gpiochip line offsets. Pin 15 is GPIO3_B0; pin 31 is GPIO3_B4.

<div className='gpio_style'>

| GPIO number (legacy) | Function | Physical pin | Physical pin | Function | GPIO number (legacy) |
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

### Official Images  

ArmSoM provides the following official system images. Select the matching product folder and image version in the shared drive.

The following systems have been tested and verified by ArmSoM officially:  

Download link:
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
| ![Debian 12](/img/sige/debian12-1.png) | **Debian 12 for AIM7:** <br/>Debian 12 (Bookworm) system images. Open the matching product folder in the shared drive; available versions and desktop variants are listed there. | [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56) |
| ![Ubuntu](/img/sige/ubuntu.png) | **Ubuntu 22.04 LTS for AIM7:** <br/>Ubuntu 22.04 LTS (Jammy Jellyfish) system images. Select the matching image in the product folder in the shared drive. | [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56) |

### Third Party Systems  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | **Armbian for AIM7 :** <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored. | [armbian image](https://armbian.com/boards/armsom-aim7-io) |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | **ubuntu-rockchip for AIM7 :** <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment. | [ubuntu-rockchip](https://github.com/Joshua-Riek/ubuntu-rockchip/releases) |

### AIM7 Hardware Resources 

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="btn">
  <span>AIM7 Hardware Resources</span>
</a>

<br/>

<div class="cards">
    <a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>AIM7 SCH</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>AIM7 2D</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>AIM7 SMD</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
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

<span id="aim-io-doc-section-2" className="armsom-section-anchor" />

## AIM7 User Manual {#aim-io-user-manual}

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


Hold down the maskrom button on the aim7 to enter maskrom mode.

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

**AIM5 (RK3576) and AIM7 (RK3588) share the AIM-IO carrier board; use this page for interface connections and basic operation on either module.** Output examples use AIM7 with official Debian 12 / Linux 6.1. Confirm device names, GPIO numbers, and overlays for your module and image.

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

##### Camera Ports and Overlays {#aim-io-camera-ports-and-overlays}

AIM5 and AIM7 use the same physical ports and camera modules. The I2C addresses and full filenames below are AIM7 examples; AIM5 uses its own prefix and boot configuration:

| Module | Boot configuration | Camera overlay prefix |
| --- | --- | --- |
| AIM5 | `/boot/uEnv/uEnvarmsom-aim5-io.txt` | `rk3576-armsom-aim5-camera-` |
| AIM7 | `/boot/uEnv/uEnvarmsom-aim7-io.txt` | `rk3588-armsom-aim7-camera-` |

Power off before connecting ribbon cables and check their orientation.

| Port | Carrier reference | Camera | I2C address | Overlay filename |
| --- | --- | --- | --- | --- |
| CAM0 | J13 | IMX219 | `2-0010` | `rk3588-armsom-aim7-camera-imx219-cs0-overlay.dtbo` |
| CAM1 | J49 | IMX219 | `4-0010` | `rk3588-armsom-aim7-camera-imx219-cs1-overlay.dtbo` |
| CAM2 | J12 | OV13850 | `3-0010` | `rk3588-armsom-aim7-camera-ov13850-cs2-overlay.dtbo` |
| CAM3 | J24 | OV13850 | `6-0010` | `rk3588-armsom-aim7-camera-ov13850-cs3-overlay.dtbo` |

Edit the boot configuration for your module; this example uses AIM7:

```bash
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim7-io.txt
```

Enable only the lines for connected cameras. The following configuration enables all four:

```ini
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-imx219-cs0-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-imx219-cs1-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-ov13850-cs2-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-ov13850-cs3-overlay.dtbo
```

:::tip
For AIM5, replace `rk3588-armsom-aim7-camera-` in the filenames above with `rk3576-armsom-aim5-camera-` and edit its AIM5 uEnv file. Remove the leading `#` to enable a line. For initial wiring checks, enable one camera at a time before combining ports as needed. If an older image lacks these files, update the kernel package for your module.
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

**Capture a frame (raw NV12, not JPEG):**

```bash
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=ov13850.nv12 --stream-count=1 --stream-poll
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
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/videoX num-buffers=1 io-mode=4 ! video/x-raw,format=NV12,width=3280,height=2464 ! videoconvert ! jpegenc ! filesink location=imx219.jpg
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

AIM7 has been tested with two IMX219 and two OV13850 cameras running together. Enable all four camera overlays above in `/boot/uEnv/uEnvarmsom-aim7-io.txt` and reboot first. Ensure that the IMX219 module name matches `imx219_rpi-camera-v2_default.json` and that the 3A service is running.

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

Both modules connect displays through the carrier board MIPI DSI port, using their own panel overlays. AIM5 uses `rk3576-armsom-aim5-display-800x1280-8hd-overlay.dtbo`, enabled in `/boot/uEnv/uEnvarmsom-aim5-io.txt`. The example below uses AIM7 and `rk3588-armsom-aim7-display-800x1280-8hd-overlay.dtbo`; it must match the actual panel.

```bash
armsom@armsom:~$ ls /boot/dtb/overlay/rk3588-armsom-aim7-display-*.dtbo
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim7-io.txt
```

Enable the corresponding line:

```ini
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-display-800x1280-8hd-overlay.dtbo
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

The AIM-IO 40-pin header exposes multiplexed GPIO, I2C, SPI, UART, and PWM signals. **The [pin table](#aim-io-pin-definition) and conflicts below are AIM7 examples**; use the AIM5 module documentation to confirm its GPIO mapping. Available functions depend on the device tree and other connected peripherals.

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

## Product Certificate

### CE / FCC / RoHS

<span id="doc-section-6" className="armsom-section-anchor" />

## Supply Statement

The ArmSoM-AIM7 will be produced at least until August 2034.

## Purchase Samples 

CrowdSupply : [https://www.crowdsupply.com/armsom/rk3588-ai-module7](https://www.crowdsupply.com/armsom/rk3588-ai-module7)

ArmSoM online shop: [https://www.armsom.org/product-page/aim7](https://www.armsom.org/product-page/aim7)
 
ArmSoM Aliexpress online shop: [https://www.aliexpress.com/item/1005012690621621.html](https://www.aliexpress.com/item/1005012690621621.html) 

ArmSoM Taobao shop: [https://item.taobao.com/item.htm?id=1066393300562](https://item.taobao.com/item.htm?id=1066393300562)

OEM&ODM, please contact: sales@armsom.org

## What do others say about the AIM7?

- [itsfoss](https://itsfoss.com/armsom-aim7-review/): ArmSoM AIM7: A Promising Upcoming Rockchip Device for AI Development
- [taoofmac](https://taoofmac.com/space/blog/2025/03/12/2000): The ArmSom AI Module 7
- [Technically Unsure](https://www.youtube.com/watch?v=J9VmcyJ_t4g&list=PLtGrcSFVfrfRr9KafWQoh2wvKzP9F2bYs): ArmSoM AIM7 & AIMIO (RK3588): Benchmarks & DeepSeek in Action
- [sbc compare](https://sbc.compare/5-armsom-aim7-8gb): AIM7  Benchmark Comparison  on sbc.compare

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

