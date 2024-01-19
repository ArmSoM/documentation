---
description: ArmSoM-AIM7 采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存，接口完全兼容 Jetson Nano。
keywords: [armsom, armsom-AIM7, 创客套件, rockchip, rk3588硬件资料, RK3588原理图]
sidebar_position: 4
---

# 硬件资料

## 引脚功能


### Video input interface
**Two  MIPI DC (DPHY/CPHY) combo PHY**
* Support USE DPHY or CPHY
* Each MIPI DPHY V2.0, 4 lanes, 4.5 Gbps per lane
* Each MIPI CPHY V1.1, 3 lanes, 2.5 Gbps per lane
  
**Four MIPI CSI DPHY**
* Each MIPI DPHY V1.2, 2 lanes, 2.5 Gbps per lane
* Support combine 2 DPHY together to one 4-lan

Table 1. CSI pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|10|	MIPI_CSI0_RX_CLK0N|	Camera, CSI 0 Clock–|	Input|	MIPI D-PHY|
|12|	MIPI_CSI0_RX_CLK0P|	Camera, CSI 0 Clock+|	Input|	MIPI D-PHY|
|4|	MIPI_CSI0_RX_D0N|	Camera, CSI 0 Data 0–|	Input|	MIPI D-PHY
|6|	MIPI_CSI0_RX_D0P|	Camera, CSI 0 Data 0|+	Input|	MIPI D-PHY
|16| MIPI_CSI0_RX_D1N|	Camera, CSI 0 Data 1–|	Input|	MIPI D-PHY|
|18| MIPI_CSI0_RX_D1P|	Camera, CSI 0 Data 1+|	Input	|MIPI D-PHY|
|9|	MIPI_CSI0_RX_CLK1N|	Camera, CSI 1 Clock–	|Input|	MIPI D-PHY
|11| MIPI_CSI0_RX_CLK1P|	Camera, CSI 1 Clock+|	Input	|MIPI D-PHY|
|3|	MIPI_CSI0_RX_D2N|	Camera, CSI 1 Data 0–|	Input	|MIPI D-PHY
|5|	MIPI_CSI0_RX_D2P|	Camera, CSI 1 Data 0+|	Input|	MIPI D-PHY
|15| MIPI_CSI0_RX_D3N|	Camera, CSI 1 Data 1–|	Input|	MIPI D-PHY|
|17| MIPI_CSI0_RX_D3P|	Camera, CSI 1 Data 1+|	Input	|MIPI D-PHY|
|28| MIPI_CSI1_RX_CLK0N|	Camera, CSI 2 Clock–|	Input|	MIPI D-PHY|
|30| MIPI_CSI1_RX_CLK0P|	Camera, CSI 2 Clock+|	Input|	MIPI D-PHY|
|22| MIPI_CSI1_RX_D0N|	Camera, CSI 2 Data 0–|	Input|	MIPI D-PHY|
|24| MIPI_CSI1_RX_D0P|	Camera, CSI 2 Data 0+	|Input	|MIPI D-PHY|
|34| MIPI_CSI1_RX_CLK0N|	Camera, CSI 2 Data 1–|	Input|	MIPI D-PHY|
|36| MIPI_CSI1_RX_CLK0P|	Camera, CSI 2 Data 1+|	Input	|MIPI D-PHY|
|27| MIPI_CSI1_RX_CLK1N|	Camera, CSI 3 Clock–|	Input|	MIPI D-PHY|
|29| MIPI_CSI1_RX_CLK1P|	Camera, CSI 3 Clock+|	Input	|MIPI D-PHY|
|21|	MIPI_CSI1_RX_D2N|	Camera, CSI 3 Data 0–|	Input|	MIPI D-PHY|
|23|	MIPI_CSI1_RX_D2P|	Camera, CSI 3 Data 0+	|Input	|MIPI D-PHY|
|33|	MIPI_CSI1_RX_D3N|	Camera, CSI 3 Data 1–|	Input|	MIPI D-PHY|
|35|	MIPI_CSI1_RX_D3P|	Camera, CSI 3 Data 1+|	Input|	MIPI D-PHY|
|52|	MIPI_DPHY0_RX_CLKN|	Camera, CSI 4 Clock–|	Input|	MIPI  D/C-PHY|
|54|	MIPI_DPHY0_RX_CLKP|	Camera, CSI 4 Clock+|	Input	|MIPI  D/C-PHY|
|46|	MIPI_DPHY0_RX_D0N|	Camera, CSI 4 Data 0–|	Input   |MIPI  D/C-PHY|
|48|	MIPI_DPHY0_RX_D0P|	Camera, CSI 4 Data 0+|  Input   |MIPI  D/C-PHY|
|58|	MIPI_DPHY0_RX_D1N|	Camera, CSI 4 Data 1–|	Input|  MIPI D/C-PHY|
|60|	MIPI_DPHY0_RX_D1P|	Camera, CSI 4 Data 1+|	Input|	MIPI D/C-PHY|
|40|	MIPI_DPHY0_RX_D2N|	Camera, CSI 4 Data 2–|	Input|	MIPI D/C-PHY|
|42|	MIPI_DPHY0_RX_D2P|	Camera, CSI 4 Data 2+|	Input|	MIPI D/C-PHY|
|64|	MIPI_DPHY0_RX_D3N|	Camera, CSI 4 Data 3–|	Input|	MIPI D/C-PHY|
|66|	MIPI_DPHY0_RX_D3P|	Camera, CSI 4 Data 3+|  Input|	MIPI D/C-PHY|

Table 2. Camera control pin descriptions

|Pin|	Pin name |	Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|213|	CAM_I2C_SCL|	Camera I2C Clock. 2.2kΩ pull-up to 3.3 V on the module.	| Bidir |	Open Drain –3.3V|
|116|	CAM0_MCLK|	Camera 0 Reference Clock|	Output	|CMOS – 1.8V|
|114|	CAM0_PWDN|	Camera 0 Powerdown or GPIO|	Output|	CMOS – 1.8V|
|122|	CAM1_MCLK|	Camera 1 Reference Clock|	Output|	CMOS – 1.8V|
|120|	CAM1_PWDN|	Camera 1 Powerdown or GPIO	|Output	|CMOS – 1.8V|

### Video output processor

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

Table 3. DSI pin descriptions

|Pin|	Pin name | Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|76|	MIPI_DPHY1_TX_CLKN|	DSI Clock–|	Output|	MIPI D-PHY|
|78|	MIPI_DPHY1_TX_CLKP|	DSI Clock+ |Output	|MIPI D-PHY|
|70|	MIPI_DPHY1_TX_D0N|	DSI Data 0–	|Output|	MIPI D-PHY|
|72|	MIPI_DPHY1_TX_D0P|	DSI Data 0+|	Output|	MIPI D-PHY|
|82|	MIPI_DPHY1_TX_D1N|	DSI Data 1–	|Output|	MIPI D-PHY|
|84|	MIPI_DPHY1_TX_D1P|	DSI Data 1+	|Output|	MIPI D-PHY|


Table 4. DP & eDP/HDMI pin descriptions

|Pin|	Pin name	| Signal description	|Direction	|Pin type|
|---------|--------------|-------------------|--------------|--------------|
|39|	TYPEC0_SSRX1N/DP0_TX0N|	Display Port 0 Lane 0-	|Output	|DP|
|41|	TYPEC0_SSRX1P/DP0_TX0P|	Display Port 0 Lane 0+	|Output	|DP|
|45|	TYPEC0_SSTX1N/DP0_TX1N|	Display Port 0 Lane 1–	|Output	|DP|
|47|	TYPEC0_SSTX1P/DP0_TX1P|	Display Port 0 Lane 1+	|Output	|DP|
|51|	TYPEC0_SSRX2N/DP0_TX2N|	Display Port 0 Lane 2–	|Output	|DP|
|53|	TYPEC0_SSRX2P/DP0_TX2P|	Display Port 0 Lane 2+	|Output	|DP|
|57|	TYPEC0_SSTX2N/DP0_TX3N|	Display Port 0 Lane 3–	|Output	|DP|
|59|	TYPEC0_SSTX2P/DP0_TX3P|	Display Port 0 Lane 3+	|Output	|DP|
|90|	TYPEC0_SBU2/DP0_AUXN|	Display Port 0 Aux–	|Bidir	|DP|
|92|	TYPEC0_SBU1/DP0_AUXP|	Display Port 0 Aux+	|Bidir	|DP|
|88|	DP0_HPDIN_M2|	Display Port 0 Hot Plug Detect	|Input	|Open Drain–1.8V|
|63|	HDMI_TX0_D2N/EDP_TX0_D2N|	HDMI/EDP Lane 2–|Output	|HDMI/EDP|
|65|	HDMI_TX0_D2P/EDP_TX0_D2P|	HDMI/EDP Lane 2+	|Output|	HDMI/EDP|
|69|	HDMI_TX0_D1N/EDP_TX0_D1N|	HDMI/EDP Lane 1–	|Output|	HDMI/EDP|
|71|	HDMI_TX0_D1P/EDP_TX0_D1P|	HDMI/EDP Lane 1+	|Output|	HDMI/EDP|
|75|	HDMI_TX0_D0N/EDP_TX0_D0N|	HDMI/EDP Lane 0–	|Output|	HDMI/EDP|
|77|	HDMI_TX0_D0P/EDP_TX0_D0P|	HDMI/EDP Lane 0+	|Output|	HDMI/EDP|
|81|	HDMI_TX0_D3N/EDP_TX0_D3N|	HDMI/EDP Clk Lane–	|Output|	HDMI/EDP|
|83|	HDMI_TX0_D3P/EDP_TX0_D3P|	HDMI/EDP Clk Lane+	|Output|	HDMI/EDP|
|98|	HDMI_TX0_SDA_M0 / EDP_TX0_AUXN |	HDMI/EDP DDC SDA|Bidir	|Open-Drain,3.3V|
|100|	HDMI_TX0_SCL_M0 / EDP_TX0_AUXP|	HDMI/EDP DDC SCL|	Output|	Open-Drain,3.3V|
|96|	HDMI_TX0_HPD_M0|	HDMI/EDP Hot Plug Detect|	Input	|Open Drain–1.8V|
|94|	HDMI_TX0_CEC_M0|	HDMI/EDP CEC|	Bidir|	Open Drain–3.3V|

### SDIO
* Compatible with SDIO3.0 protocol
* 4-bit data bus width

Table 5. SDIO pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|229|	SDMMC0_CLK|	SD Card or SDIO Clock	|Output|	CMOS – 1.8V/3.3V
|227|	SDMMC0_CMD|	SD Card or SDIO Command	|Bidir|	CMOS – 1.8V/3.3V
|219|	SDMMC0_D0|	SD Card or SDIO Data 0	|Bidir|	CMOS – 1.8V/3.3V
|221|	SDMMC0_D1|	SD Card or SDIO Data 1	|Bidir|	CMOS – 1.8V/3.3V
|223|	SDMMC0_D2|	SD Card or SDIO Data 2	|Bidir|	CMOS – 1.8V/3.3V
|225|	SDMMC0_D3|	SD Card or SDIO Data 3	|Bidir|	CMOS – 1.8V/3.3V

### GMAC

Table 6. Gigabit Ethernet pin descriptions

|Pin| 	Pin name	|Signal description	|Direction	|Pin type|
|---------|--------------|-------------------|--------------|--------------|
|184|	PHY0_MDI0-	|GbE Transformer Data 0–	|Bidir	|MDI|
|186|	PHY0_MDI0+	|GbE Transformer Data 0+	|Bidir	|MDI|
|190|	PHY0_MDI1-	|GbE Transformer Data 1–	|Bidir	|MDI|
|192|	PHY0_MDI1+	|GbE Transformer Data 1+	|Bidir	|MDI|
|196|	PHY0_MDI2-	|GbE Transformer Data 2–	|Bidir	|MDI|
|198|	PHY0_MDI2+	|GbE Transformer Data 2+	|Bidir	|MDI|
|202|	PHY0_MDI3-	|GbE Transformer Data 3–	|Bidir	|MDI|
|204|	PHY0_MDI3+	|GbE Transformer Data 3+	|Bidir	|MDI|
|188|	PHY0_LED1/CFG_LDO0|	Ethernet Link LED (Green)|	Output|	-|
|194|	PHY0_LED2/CFG_LDO1	|Ethernet Activity LED (Yellow)|	Output|	-|

### USB3.0

* Embedded two USB 3.0 OTG interfaces which combo with DP TX (USB3OTG_0 and USB3OTG_1)
* Embedded one USB 3.0 Host interface which combos with Combo PIPE PHY2 (USB3OTG_2)

Table 7. USB 3.0 GEN1 pin descriptions

|Pin|	Pin name	|Signal description|	Direction|	Pin type|
|---------|--------------|-------------------|--------------|--------------|
|161|	PCIE20_2_RXN/SATA30_2_RXN/USB30_2_SSRXN	|USB SS Receive- (USB 3.0 Ctrl #0)	|Input	|USB SS PHY|
|163|	PCIE20_2_RXP/SATA30_2_RXP/USB30_2_SSRXP	|USB SS Receive+ (USB 3.0 Ctrl #0)	|Input	|USB SS PHY|
|166|	PCIE20_2_TXN/SATA30_2_TXN/USB30_2_SSTXN	|USB SS Transmit- (USB 3.0 Ctrl #0)	|Output	|USB SS PHY|
|168|	PCIE20_2_TXP/SATA30_2_TXP/USB30_2_SSTXP	|USB SS Transmit+ (USB 3.0 Ctrl #0)	|Output	|USB SS PHY|

### USB 2.0 Host

* Compatible with USB 2.0 specification
* Support two USB 2.0 Hosts
* Supports high-speed (480 Mbps), full-speed (12 Mbps) and low-speed (1.5 Mbps) mode
* Support Enhanced Host Controller Interface Specification (EHCI), Revision 1.0
* Support Open Host Controller Interface Specification (OHCI), Revision 1.0a

Table 9. USB 2.0 pin descriptions

|Pin| 	Pin name |Signal description	|Direction	|Pin type|
|---|------------|-------------------|--------------|--------------|
|109|	TYPEC0_USB20_OTG_DM|	USB2.0 Port 0 Data–	|Bidir	|USB PHY|
|111|	TYPEC0_USB20_OTG_DP|	USB2.0 Port 0 Data+	|Bidir	|USB PHY|
|115|	USB20_HOST0_DM|	USB 2.0 Port 1 Data–	|Bidir	|USB PHY|
|117|	USB20_HOST0_DP|	USB 2.0 Port 1 Data+	|Bidir	|USB PHY|
|121|	USB20_HOST1_DM|	USB 2.0 Port 2 Data–	|Bidir	|USB PHY|
|123|	USB20_HOST1_DP|	USB 2.0 Port 2 Data+	|Bidir	|USB PHY|

### PCIe

**PCIe 2.1 interface**
* Compatible with PCI Express Base Specification Revision 2.1
* Support one lane for each PCIe 2.1 interface
* Support Root Complex (RC) only
* Support 5 Gbps data rate

Table 10. PCIe 2.1 pin descriptions

|Pin| 	Pinname|	Signal description |	Direction	|Pin type|
|---|------------|-------------------|--------------|--------------|
|167|	PCIE20_0_RXN/SATA30_0_RXN|	PCIe #1 Receive 0– (PCIe Ctrl #2 Lane 0)	|Input|	PCIe PHY|
|169|	PCIE20_0_RXP/SATA30_0_RXP|	PCIe #1 Receive 0+ (PCIe Ctrl #2 Lane 0)	|Input|	PCIe PHY|
|172|	PCIE1_TX0_N|	PCIe #1 Transmit 0– (PCIe Ctrl #2 Lane 0)	|Output|	PCIe PHY|
|174|	PCIE1_TX0_P|	PCIe #1 Transmit 0+ (PCIe Ctrl #2 Lane 0)	|Output|	PCIe PHY|
|183|	PCIE1_RST*|	PCIe #1 Reset (PCIe Ctrl #2). 4.7kΩ pull-up to 3.3V on the module.	|Output|	Open Drain – 3.3V|
|182|	PCIE20X1_2_CLKREQN_M0*|	PCIe #1 Clock Request (PCIe Ctrl #2). 47kΩ pull-up to 3.3V on the module.	|Bidir|	Open Drain – 3.3V|
|173|	PCIE20_0_REFCLKN|	PCIe #1 Reference Clock– (PCIe Ctrl #2)	|Output|	PCIe PHY|
|175|	PCIE20_0_REFCLKP|	PCIe #1 Reference Clock+ (PCIe Ctrl #2)	|Output|    PCIe PHY|
|179|	PCIE30X4_WAKEn_M0|	PCIe Wake. 47kΩ pull-up to 3.3V on themodule.	|Input|	Open Drain – 3.3V|

**PCIe 3.0 interface**
* Compatible with PCI Express Base Specification Revision 3.0
* Support dual operation modes: Root Complex (RC) and End Point (EP)
* Support data rates: 2.5 Gbps (PCIe 1.1), 5 Gbps (PCIe 2.1), 8 Gbps (PCIe 3.0)
* Support aggregation and bifurcation with 1x 4 lanes, 2x 2 lanes, 4x 1 lanes and 1x 2 lanes + 2x 1 lanes

|Pin 	|Pin name	    |Signal description	                                                        |Direction|	Pin type|
|---|------------|-------------------|--------------|--------------|
|131	|PCIE30_PORT0_RX0N	|PCIe #0 Receive 0– (PCIe Ctrl #0 Lane 0)	                                |Input|	PCIe PHY|
|133	|PCIE30_PORT0_RX0P	|PCIe #0 Receive 0+ (PCIe Ctrl #0 Lane 0)	                                |Input|	PCIe PHY|
|137	|PCIE30_PORT0_RX1N	|PCIe #0 Receive 1– (PCIe Ctrl #0 Lane 1)	                                |Input|	PCIe PHY|
|139	|PCIE30_PORT0_RX1P	|PCIe #0 Receive 1+ (PCIe Ctrl #0 Lane 1)	                                |Input|	PCIe PHY|
|134	|PCIE30_PORT0_TX0N	|PCIe #0 Transmit 0– (PCIe Ctrl #0 Lane 0)	                                |Output|	PCIe PHY|
|136	|PCIE30_PORT0_TX0P	|PCIe #0 Transmit 0+ (PCIe Ctrl #0 Lane 0)	                                |Output|	PCIe PHY|
|140	|PCIE30_PORT0_TX1N	|PCIe #0 Transmit 1– PCIe Ctrl #0 Lane 1)	                                |Output|	PCIe PHY|
|142	|PCIE30_PORT0_TX1P	|PCIe #0 Transmit 1+ (PCIe Ctrl #0 Lane 1)	                                |Output|	PCIe PHY|
|181	|PCIE30X4_PERSTn_M0    |PCIe #0 Reset (PCIe Ctrl #0). 4.7kΩ pull-up to3.3V on the module.	        |Bidir|	Open Drain – 3.3V|
|180	|PCIE30X4_CLKREQn_M0	|PCIe #0 Clock Request (PCIe Ctrl #0). 47kΩpull-up to 3.3V on the module.	|Bidir|	Open Drain – 3.3V|
|179	|PCIE30X4_WAKEn_M0    |PCIe Wake. 47kΩ pull-up to 3.3V on themodule.	                            |Input|	Open Drain – 3.3V|
|160	|PCIE30_CLK_N	|PCIe #0 Reference Clock–	                                                |Output|	PCIe PHY|
|162	|PCIE30_CLK_P	|PCIe #0 Reference Clock+	                                                |Output|	PCIe PHY|

### SPI interface

* Support 5 SPI Controllers (SPI0-SPI4)
* Support two chip-select output
* Support serial-master and serial-slave mode, software-configurable
  
Table 12. SPI pin descriptions

|Pin|	Pin name	|Signal description	            |Direction|Pin type|
|---|------------|-------------------|--------------|--------------|
|91|	SPI0_SCK	|SPI 0 Clock	                |Bidir	|CMOS – 1.8|
|89|	SPI0_MOSI	|SPI 0 Master Out / Slave In    |Bidir	|CMOS – 1.8|
|93|	SPI0_MISO	|SPI 0 Master In / Slave Out    |Bidir	|CMOS – 1.8|
|95|	SPI0_CS0*	|SPI 0 Chip Select 0	        |Bidir	|CMOS – 1.8|
|97|	SPI0_CS1*	|SPI 0 Chip Select 1	        |Bidir	|CMOS – 1.8|
|106|	SPI1_SCK	|SPI 1 Clock	                |Bidir	|CMOS – 1.8|
|104|	SPI1_MOSI	|SPI 1 Master Out / Slave In	|Bidir	|CMOS – 1.8|
|108|	SPI1_MISO	|SPI 1 Master In / Slave Out	|Bidir	|CMOS – 1.8|
|110|	SPI1_CS0*	|SPI 1 Chip Select 0	        |Bidir	|CMOS – 1.8|

### I2C interface

Table 13. I2C pin descriptions

|Pin| 	Pin name	|Signal description|	Direction|Pin type|
|---|------------|-------------------|--------------|--------------|
|185|	I2C2_SCL_M0	|General I2C 0 Clock. 2.2kΩ pull-up to3.3V on module.|	Bidir|	Open Drain – 3.3V
|187|	I2C2_SDA_M0	|General I2C 0 Data. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V
|189|	I2C4_SCL_M2 |General I2C 1 Clock. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V
|191|	I2C4_SDA_M2	|General I2C 1 Data. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V
|232|	I2C6_SCL_M1	|General I2C 2 Clock. 2.2kΩ pull-up to1.8V on the module.|	Bidir|	Open Drain – 1.8V
|234|	I2C6_SDA_M1	|General I2C 2 Data. 2.2kΩ pull-up to 1.8V on the module.|	Bidir|	Open Drain – 1.8V
|213|	I2C3_SCL_M0	|Camera I2C Clock. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V
|215|	I2C3_SDA_M0	|Camera I2C Data. 2.2kΩ pull-up to 3.3V on the module.|	Bidir|	Open Drain – 3.3V

### UART interface

* Support 10 UART interfaces (UART0-UART9)
* Embedded two 64-byte FIFO for TX and RX operation respectively
* Support transmitting or receiving 5-bit, 6-bit, 7-bit, and 8-bit serial data
* Standard asynchronous communication bits such as start, stop and parity
* Support different input clocks for UART operation to get up to 4 Mbps baud rate
* Support auto flow control mode for all UART interfaces

Table 13. UART pin descriptions

|Pin| 	Pin name	|Signal description	        |Direction|	Pin type
|---|------------|-------------------|--------------|--------------|
|99|	UART7_TX_M1	|UART #0 Transmit	        |Output|	CMOS – 1.8V
|101|	UART7_RX_M1	|UART #0 Receive	        |Input|	CMOS – 1.8V
|103|	UART7_RTSN_M1	|UART #0 Request to Send	|Output|	CMOS – 1.8V
|105|	UART7_CTSN_M1	|UART #0 Clear to Send	    |Input|	CMOS – 1.8V
|203|	UART1_TX_M1	|UART #1 Transmit	        |Output|	CMOS – 1.8V
|205|	UART1_RX_M1	|UART #1 Receive	        |Input|	CMOS – 1.8V
|207|	UART1_RTSn_M1	|UART #1 Request to Send	|Output|	CMOS – 1.8V
|209|	UART1_CTSn_M1	|UART #1 Clear to Send	    |Input|	CMOS – 1.8V
|236|	UART2_TX_M0_DEBUG	|UART #2 Transmit	        |Output|	CMOS – 1.8V
|238|	UART2_RX_M0_DEBUG	|UART #2 Receive	        |Input|	CMOS – 1.8V

### CAN bus

* Support transmitting or receiving CAN standard frame
* Support transmitting or receiving CAN extended frame
* Support transmitting or receiving data frame, remote frame, overload frame, error frame, and frame interval

Table 14. CAN pin descriptions

|Pin| 	Pin name	        |Signal description|	Direction	Pin type
|---|------------|-------------------|--------------|--------------|
|145|	CAN_TX	 |CAN PHY	    | Output            |	CMOS – 3.3V
|143|	CAN_RX	 |CAN PHY 	|Input              |	CMOS – 3.3V 

### GPIO

* All GPIOs can be used to generate interrupt
* Support level trigger and edge trigger interrupt
* Support configurable polarity of level trigger interrupt
* Support configurable rising edge, falling edge and both edge trigger interrupt
* Support configurable pull direction (a weak pull-up and a weak pull-down)
* Support configurable drive strength

Table 15. GPIO pin descriptions

|Pin| 	Pin name|	Signal description|	Direction	|Pin type
|---|------------|-------------------|--------------|--------------|
|87|	GPIO1_C5|	GPIO #0 or USB 0 VBUS Enable #0	|Bidir	|CMOS – 1.8V
|118|	GPIO3_A7/MIPI_CAM2_CLKOUT|	GPIO #1 or Generic Clocks|	Bidir|	CMOS – 1.8V
|124|GPIO3_A3/MIPI_CAM2_PDN |	GPIO #2|	Bidir|	CMOS – 1.8V
|126|GPIO3_D0/PCIE20X1_2_WAKEN_M0 |	GPIO #3	|Bidir|	CMOS – 1.8V
|127|GPIO4_A4/PCIE30X1_0_WAKEN_M1 |	GPIO #4	|Bidir|	CMOS – 1.8V
|128|GPIO4_B0/PCIE30X2_PERSTN_M1	 |	GPIO #5	|Bidir|	CMOS – 1.8V
|130|GPIO4_A7/PCIE30X2_WAKEN_M1|	GPIO #6|	Bidir|	CMOS – 1.8V
|206|	GPIO3_A0/PWM10|	GPIO #7 or Pulse Width Modulator	|Bidir|	CMOS – 1.8V
|208|	GPIO1_C6/PWM15_IR|	GPIO #8 or Fan Tach	|Bidir|	CMOS – 1.8V
|211|	GPIO4_A0/I2S1_MCLK_M0/PCIE30X1_1_CLKREQN_M1|	GPIO #9 or Audio Codec Master Clock|	Bidir|	CMOS – 1.8V
|212|	GPIO4_A3/PCIE30X1_0_CLKREQN_M1 |	GPIO #10	|Bidir|	CMOS – 1.8V
|216|	GPIO3_B0/MIPI_CAM3_CLKOUT|	GPIO #11 or Generic Clocks	|Bidir|	CMOS – 1.8V
|218|	GPIO3_B4/I2S2_MCLK_M1/MIPI_CAM3_PDN|	GPIO #12 or Pulse Width Modulator	|Bidir|	CMOS – 1.8V
|228|	GPIO3_B1/PWM2/MIPI_CAM4_CLKOUT|	GPIO #13 or Pulse Width Modulator	|Bidir|	CMOS – 1.8V
|230|	GPIO3_A1/PWM11_IR/MIPI_CAM4_PDN |	GPIO #14 or Pulse Width Modulator	|Bidir|	CMOS – 1.8V


### i2s interface

Table 16. i2s pin descriptions

|Pin| 	Pin name|	Signal description|	Direction|	Pin type
|---|------------|-------------------|--------------|--------------|
|199|	I2S1_SCLK_M0/PCIE30X1_1_WAKEN_M1	|I2S Audio Port 0 Clock	|Bidir|	CMOS – 1.8V
|197|	I2S1_LRCK_M0/PCIE30X1_1_PERSTN_M1	|I2S Audio Port 0 Left/Right Clock	|Bidir|	CMOS – 1.8V
|193|	I2S1_SDO0_M0	|I2S Audio Port 0 Data Out	|Output|	CMOS – 1.8V
|195|	I2S1_SDI0_M0/PCIE30X1_0_PERSTN_M1|	I2S Audio Port 0 Data In	|Input|	CMOS – 1.8V
|226|	I2S2_SCLK_M1	|I2S Audio Port 1 Clock|	Bidir	|CMOS – 1.8V
|224|	I2S2_LRCK_M1	|I2S Audio Port 1 Left/Right Clock	|Bidir|	CMOS – 1.8V
|220|	I2S2_SDO_M1|	I2S Audio Port 1 Data Out	|Output|	CMOS – 1.8V
|222|	I2S2_SDI_M1 |	I2S Audio Port 1 Data In	|Input	|CMOS – 1.8V

## pin define

|ArmSoM-AIM7 function |	Pin number	|Pin number|	ArmSoM-AIM7 function|
|------------------|-------------------------|-------------------------|-------------------------|
|GND_1|	1|	2|	GND_2|
|MIPI_CSI0_RX_D2N|	3|	4|	MIPI_CSI0_RX_D0N|
|MIPI_CSI0_RX_D2P|	5|	6|	MIPI_CSI0_RX_D0P|
|GND_3|	7|	8|	GND_4|
|MIPI_CSI0_RX_CLK1N|	9|	10|	MIPI_CSI0_RX_CLK0N|
|MIPI_CSI0_RX_CLK1P|	11|	12|	MIPI_CSI0_RX_CLK0P|
|GND_5|	13|	14|	GND_6|
|MIPI_CSI0_RX_D3N|	15|	16|	MIPI_CSI0_RX_D1N|
|MIPI_CSI0_RX_D3P|	17|	18|	MIPI_CSI0_RX_D1P|
|GND_7|	19|	20|	GND_8|
|MIPI_CSI1_RX_D2N|	21|	22|	MIPI_CSI1_RX_D0N|
|MIPI_CSI1_RX_D2P|	23|	24|	MIPI_CSI1_RX_D0P|
|GND_9|	25|	26|	GND_10|
|MIPI_CSI1_RX_CLK1N|	27|	28|	MIPI_CSI1_RX_CLK0N|
|MIPI_CSI1_RX_CLK1P|	29|	30|	MIPI_CSI1_RX_CLK0P|
|GND_11|	31|	32|	GND_12|
|MIPI_CSI1_RX_D3N|	33|	34|	MIPI_CSI1_RX_D1N|
|MIPI_CSI1_RX_D3P|	35|	36|	MIPI_CSI1_RX_D1P|
|GND_13|	37|	38|	GND_14|
|TYPEC0_SSRX1N/DP0_TX0N|	39|	40|	MIPI_DPHY0_RX_D2N|
|TYPEC0_SSRX1P/DP0_TX0P|	41|	42|	MIPI_DPHY0_RX_D2P|
|GND_15|	43|	44|	GND_16|
|TYPEC0_SSTX1N/DP0_TX1N|	45|	46|	MIPI_DPHY0_RX_D0N|
|TYPEC0_SSTX1P/DP0_TX1P|	47|	48|	MIPI_DPHY0_RX_D0P|
|GND_17|	49|	50|	GND_18|
|TYPEC0_SSRX2N/DP0_TX2N|	51|	52|	MIPI_DPHY0_RX_CLKN|
|TYPEC0_SSRX2P/DP0_TX2P|	53|	54|	MIPI_DPHY0_RX_CLKP|
|GND_19|	55|	56|	GND_20|
|TYPEC0_SSTX2N/DP0_TX3N|	57|	58|	MIPI_DPHY0_RX_D1N|
|TYPEC0_SSTX2P/DP0_TX3P|	59|	60|	MIPI_DPHY0_RX_D1P|
|GND_21|	61|	62|	GND_22|
|HDMI_TX0_D2N/EDP_TX0_D2N|	63|	64|	MIPI_DPHY0_RX_D3N|
|HDMI_TX0_D2P/EDP_TX0_D2P|	65|	66|	MIPI_DPHY0_RX_D3P|
|GND_23|	67|	68|	GND_24|
|HDMI_TX0_D1N/EDP_TX0_D1N|	69|	70|	MIPI_DPHY1_TX_D0N|
|HDMI_TX0_D1P/EDP_TX0_D1P|	71|	72|	MIPI_DPHY1_TX_D0P|
|GND_25|	73|	74|	GND_26|
|HDMI_TX0_D0N/EDP_TX0_D0N|	75|	76|	MIPI_DPHY1_TX_CLKN|
|HDMI_TX0_D0P/EDP_TX0_D0P|	77|	78|	MIPI_DPHY1_TX_CLKP|
|GND_27|	79|	80|	GND_28|
|HDMI_TX0_D3N/EDP_TX0_D3N|	81|	82|	MIPI_DPHY1_TX_D1N|
|HDMI_TX0_D3P/EDP_TX0_D3P|	83|	84|	MIPI_DPHY1_TX_D1P|
|GND_29|	85|	86|	GND_30|
|GPIO1_C5|	87|	88|	DP0_HPDIN_M2|
|SPI0_MOSI_M2|	89|	90|	TYPEC0_SBU2/DP0_AUXN|
|SPI0_CLK_M2|	91|	92|	TYPEC0_SBU1/DP0_AUXP|
|SPI0_MISO_M2|	93|	94|	HDMI_TX0_CEC_M0|
|SPI0_CS0_M2|	95|	96|	HDMI_TX0_HPD_M0|
|SPI0_CS1_M2|	97|	98|	HDMI_TX0_SDA_M0|
|UART7_TX_M1|	99|	100|	HDMI_TX0_SCL_M0|
|UART7_RX_M1|	101|	102|	GND_31|
|UART7_RTSN_M1|	103|	104|	SPI1_MOSI_M2|
|UART7_CTSN_M1|	105|	106|	SPI1_CLK_M2|
|GND_32|	107|	108|	SPI1_MISO_M2|
|TYPEC0_USB20_OTG_DM|	109|	110|	SPI1_CS0_M2|
|TYPEC0_USB20_OTG_DP|	111|	112|	SPI1_CS1_M2|
|GND_33|	113|	114|	MIPI_CAM0_PDN_L|
|USB20_HOST0_DM|	115|	116|	MIPI_CAM0_CLKOUT|
|USB20_HOST0_DP|	117|	118|	GPIO3_A7/MIPI_CAM2_CLKOUT|
|GND_34|	119|	120|	MIPI_CAM1_PDN/PCIE30X2_CLKREQN_M1|
|USB20_HOST1_DM|	121|	122|	MIPI_CAM1_CLKOUT|
|USB20_HOST1_DP|	123|	124|	GPIO3_A3/MIPI_CAM2_PDN|
|GND_35|	125|	126|	GPIO3_D0/PCIE20X1_2_WAKEN_M0|
|GPIO4_A4/PCIE30X1_0_WAKEN_M1|	127|	128|	GPIO4_B0/PCIE30X2_PERSTN_M1|
|GND_36|	129|	130|	GPIO4_A7/PCIE30X2_WAKEN_M1|
|PCIE30_PORT0_RX0N|	131|	132|	GND_37|
|PCIE30_PORT0_RX0P|	133|	134|	PCIE30_PORT0_TX0N|
|GND_38|	135|	136|	PCIE30_PORT0_TX0P|
|PCIE30_PORT0_RX1N|	137|	138|	GND_39|
|PCIE30_PORT0_RX1P|	139|	140|	PCIE30_PORT0_TX1N|
|GND_40|	141|	142|	PCIE30_PORT0_TX1P|
|BOOT_SARADC_IN0|	143|	144|	GND_41|
|SDMMC_DET_L|	145|	146|	GND_42|
|GND_43|	147|	148|	PCIE30_PORT1_TX2N|
|PCIE30_PORT1_RX2N|	149|	150|	PCIE30_PORT1_TX2P|
|PCIE30_PORT1_RX2P|	151|	152|	GND_44|
|GND_45|	153|	154|	PCIE30_PORT1_TX3N|
|PCIE30_PORT1_RX3N|	155|	156|	PCIE30_PORT1_TX3P|
|PCIE30_PORT1_RX3P|	157|	158|	GND_46|
|GND_47|	159|	160|	PCIE30_CLK_N|
|PCIE20_2_RXN/SATA30_2_RXN/USB30_2_SSRXN|	161|	162|	PCIE30_CLK_P|
|PCIE20_2_RXP/SATA30_2_RXP/USB30_2_SSRXP|	163|	164|	GND_48|
|GND_49|	165|	166|	PCIE20_2_TXN/SATA30_2_TXN/USB30_2_SSTXN|
|PCIE20_0_RXN/SATA30_0_RXN|	167|	168|	PCIE20_2_TXP/SATA30_2_TXP/USB30_2_SSTXP|
|PCIE20_0_RXP/SATA30_0_RXP|	169|	170|	GND_50|
|GND_51|	171|	172|	PCIE20_0_TXN/SATA30_0_TXN|
|PCIE20_0_REFCLKN|	173|	174|	PCIE20_0_TXP/SATA30_0_TXP|
|PCIE20_0_REFCLKP|	175|	176|	GND_52|
|GND_53|	177|	178|	MOD_SLEEP|
|PCIE30X4_WAKEn_M0|	179|	180|	PCIE30X4_CLKREQn_M0|
|PCIE30X4_PERSTn_M0|	181|	182|	PCIE20X1_2_CLKREQN_M0|
|PCIE20X1_2_PERSTN_M0|	183|	184|	PHY0_MDI0-|
|I2C2_SCL_M0|	185|	186|	PHY0_MDI0+|
|I2C2_SDA_M0|	187|	188|	PHY0_LED1/CFG_LDO0|
|I2C4_SCL_M2|	189|	190|	PHY0_MDI1-|
|I2C4_SDA_M2|	191|	192|	PHY0_MDI1+|
|I2S1_SDO0_M0|	193|	194|	PHY0_LED2/CFG_LDO1|
|I2S1_SDI0_M0/PCIE30X1_0_PERSTN_M1|	195|	196|	PHY0_MDI2-|
|I2S1_LRCK_M0/PCIE30X1_1_PERSTN_M1|	197|	198|	PHY0_MDI2+|
|I2S1_SCLK_M0/PCIE30X1_1_WAKEN_M1|	199|	200|	GND_54|
|GND_55|	201|	202|	PHY0_MDI3-|
|UART1_TX_M1|	203|	204|	PHY0_MDI3+|
|UART1_RX_M1|	205|	206|	GPIO3_A0/PWM10|
|UART1_RTSn_M1|	207|	208|	GPIO1_C6/PWM15_IR|
|UART1_CTSn_M1|	209|	210|	32KOUT|
|GPIO4_A0/I2S1_MCLK_M0/PCIE30X1_1_CLKREQN_M1|	211|	212|	GPIO4_A3/PCIE30X1_0_CLKREQN_M1|
|I2C3_SCL_M0|	213|	214|	RECOVERY_KEY|
|I2C3_SDA_M0|	215|	216|	GPIO3_B0/MIPI_CAM3_CLKOUT|
|GND_56|	217|	218|	GPIO3_B4/I2S2_MCLK_M1/MIPI_CAM3_PDN|
|SDMMC0_D0|	219|	220|	I2S2_SDO_M1|
|SDMMC0_D1|	221|	222|	I2S2_SDI_M1|
|SDMMC0_D2|	223|	224|	I2S2_LRCK_M1|
|SDMMC0_D3|	225|	226|	I2S2_SCLK_M1|
|SDMMC0_CMD|	227|	228|	GPIO3_B1/PWM2/MIPI_CAM4_CLKOUT|
|SDMMC0_CLK|	229|	230|	GPIO3_A1/PWM11_IR/MIPI_CAM4_PDN|
|GND_57|	231|	232|	I2C6_SCL_M1|
|SHUTDOWN_REQ|	233|	234|	I2C6_SDA_M1|
|PMIC_BBAT|	235|	236|	UART2_TX_M0_DEBUG|
|POWER_EN|	237|	238|	UART2_RX_M0_DEBUG|
|SYS_RESET|	239|	240|	SLEEP/WAKE
|GND_58|	241|	242|	GND_59|
|GND_60|	243|	244|	GND_61|
|GND_62|	245|	246|	GND_63|
|GND_64|	247|	248|	GND_65|
|GND_66|	249|	250|	GND_67|
|VDD_IN_1|	251|	252|	VDD_IN_2|
|VDD_IN_3|	253|	254|	VDD_IN_4|
|VDD_IN_5|	255|	256|	VDD_IN_6|
|VDD_IN_7|	257|	258|	VDD_IN_8|
|VDD_IN_9|	259|	260|	VDD_IN_10|

