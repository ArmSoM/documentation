---
sidebar_position: 4
---

# Hardware Resources


## Sige7 Hardware Resources 

Download link: [Google Drive link](../../general-tutorial/cloud-disk)

### Schematics

* [ArmSoM-Sige7_1V1 Schematics pdf](https://drive.google.com/file/d/1Ii0Ep-616JgdENhtjnCNix_exlq1Ax9Z/view?usp=drive_link) - Schematics pdf


### 2D CAD Drawings

* [ArmSoM-Sige7_1V1 Top, Bottom](https://drive.google.com/drive/folders/1nLe93JpHQ83welST-KUr-j9DrSCuE-JV?usp=drive_link) - Download 2D CAD files

### SMD

* [ArmSoM-Sige7_1V1 SMD](https://drive.google.com/file/d/1CAIkXP9vTAlQEQWiOLY9ytuNbfACrvga/view?usp=drive_link) -  Download components Position Reference of Sige7 V1.1


:::tip Version change history
V1.1 
* VOL_IC: U27/U7/U6301change part pin;
* USB：U15 fr o m TypeC1 change t o TypeC0; CN31 fr o m USB3. 0 change t o USB2. 0;
* 40PIN：add UART Pr ot ect; J 2&CN2&CN32 change t o WF0. 8;
* CAM：DEL R6352, CSI _1 I2C3 change t o I2C4；
* WIFI Module: AP6275S change to AP6275P;
:::

### datasheet

* [ArmSoM-Sige7 元件datasheet](https://pan.baidu.com/s/1SBVyAAxlQHdpzCAu6ZWJXQ?pwd=arms) -  datasheet下载

### Hardware Pin Definitions

#### 40-pin Socket

<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     139     | I2S1_SDO2_M0 / I2C7_SDA_M3 / UART8_CTSN_M0 / PWM15_IR_M1 / CAN1_TX_M1 / GPIO4_B3 /| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     138     | I2S1_SDO1_M0 / I2C7_SCL_M3 / UART8_RTSN_M0 /  PWM14_M1   / CAN1_RX_M1 / GPIO4_B2  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     115     | SPI1_CS1_M1 / I2C8_SDA_M4 / UART7_CTSN_M1 / PWM15_IR_M0 / GPIO3_C3  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  GPIO0_B5 / <div className='orange-txt'>UART2_TX_M0</div> / I2C1_SCL_M0 / I2S1_MCLK_M1  / JTAG_TCK_M2|     13      |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  GPIO0_B6  / <div className='orange-txt'>UART2_RX_M0</div> / I2C1_SDA_M0 / I2S1_SCLK_M1 /  JTAG_TMS_M2  |     14      |
|     113     |  SPI1_CLK_M1 / UART7_RX_M1 / GPIO3_C1  | <div className='green'>11</div>  | <div className='green'>12</div> |  GPIO3_B5  / CAN1_RX_M0 / PWM12_M0  /UART3_TX_M1 / I2S2_SCLK_M1 |     109     |
|     111     |  SPI1_MOSI_M1 / I2C3_SCL_M1 / GPIO3_B7  | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|     112     |   SPI1_MISO_M1 / I2C3_SDA_M1 / UART7_TX_M1  / GPIO3_C0  | <div className='green'>15</div>  | <div className='green'>16</div> |  GPIO3_A4 / SPI4_CS1_M1 / I2S3_SDI / UART8_RTSN_M1  |     100     |
|             |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> |  GPIO4_C4 / PWM5_M2 / SPI3_MISO_M0 |    148     |
|     42      | SPI0_MOSI_M2 / UART4_RX_M2 / GPIO1_B2  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |             |
|     41      | SPI0_MISO_M2 / GPIO1_B1  | <div className='green'>21</div>  | <div className='green'>22</div> | SARADC_IN4          |             |
|     43      | SPI0_CLK_M2 / UART4_TX_M2 / GPIO1_B3  | <div className='green'>23</div>  | <div className='green'>24</div> |  GPIO1_B4 / UART7_RX_M2  /SPI0_CS0_M2 |     44      |
|             |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |  GPIO1_B5  / UART7_TX_M2 / SPI0_CS1_M2 |     45      |
|     150     | SPI3_CLK_M0 / I2C0_SDA_M1 / PWM7_IR_M3 / GPIO4_C6  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  GPIO4_C5 / PWM6_M2 / I2C0_SCL_M1 /
|     63      | UART1_CTSN_M1 / PWM15_IR_M3 / GPIO1_D7  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|     47      | SPDIF_TX_M0 / UART1_RX_M1 / PWM13_M2 / GPIO1_B7  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO3_C2 / PWM14_M0 / UART7_RTSN_M1 / I2C8_SCL_M4 / SPI1_CS0_M1  |    114     |
|     103     | PWM8_M0 / GPIO3_A7  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |             |
|     110     | I2S2_LRCK_M1 / UART3_RX_M1 / PWM13_M0 / CAN1_TX_M0 / GPIO3_B6  | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO3_B1 / PWM2_M1 / UART2_TX_M2 |     105     |
|      0      | REFCLK_OUT / GPIO0_A0	    | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO3_B2 /PWM3_IR_M1 / UART2_RX_M2 / I2S2_SDI_M1   |     106     |
|             |   GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO3_B3 /  UART2_RTSN / I2S2_SDO_M1   |     107     |

</div>

#### MIPI CSI0

0.5mm FPC connector

|Pin |   MIPI-CSI |   描述   |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_CSI0_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_CSI0_RX_D3P                  |   MIPI RX Lane3 iuput P |
|5          | MIPI_CSI0_RX_D2N |   MIPI RX Lane2 iuput N |
|6          | MIPI_CSI0_RX_D2P|   MIPI RX Lane2 iuput P |
|8          | MIPI_CSI0_RX_CLK1N|   MIPI RX Clock iuput N |
|9         | MIPI_CSI0_RX_CLK1P |   MIPI RX Clock iuput P |
|11         |  MIPI_CSI0_RX_D1N |   MIPI RX Lane1 iuput N |
|12         | MIPI_CSI0_RX_D1P |   MIPI RX Lane1 iuput P |
|14         | MIPI_CSI0_RX_D0N|    MIPI RX Lane0 iuput N |
|15         | MIPI_CSI0_RX_D0P |    MIPI RX Lane0 iuput P |
|17         | MIPI_CSI0_RX_CLK0N|   MIPI RX Clock iuput N |
|18         | MIPI_CSI0_RX_CLK0P|  MIPI RX Clock iuput P |
|19         | MIPI_VSYNC        |    |
|20         | MIPI_CAM3_CLKOUT |    1.8V, CLock ouput for Sensor |
|21         | MIPI_HSYNC        |    |
|22         | MIPI_CAM1_CLKOUT |   1.8V, CLock ouput for Sensor |
|23         | MIPI_CSI0_PDN0_H(GPIO1_B0) |    1.8V, GPIO |
|24         | I2C3_SCL_M0_MIPI |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|25         | I2C3_SDA_M0_MIPI |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|26         | MIPI_CSI0_PDN1_H(GPIO1_A7)|  1.8V, GPIO |
|27         | CM_RST_L(GPIO4_A0)|   3.3V, GPIO |
|28,29      | VCC_RX|   3.3V Power ouput |
|30,31      | VCC_5V0|   5V Power ouput |

#### MIPI CSI1

0.5mm FPC connector

|Pin |   MIPI-CSI |   描述   |
|:--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_CSI1_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_CSI1_RX_D3P   |   MIPI RX Lane3 iuput P |
|5     | MIPI_CSI1_RX_D2N |   MIPI RX Lane2 iuput N |
|6     | MIPI_CSI1_RX_D2P|   MIPI RX Lane2 iuput P |
|8     | MIPI_CSI1_RX_CLK1N|   MIPI RX Clock iuput N |
|9     | MIPI_CSI1_RX_CLK1P |   MIPI RX Clock iuput P |
|11    | MIPI_CSI1_RX_D1N |   MIPI RX Lane1 iuput N |
|12    | MIPI_CSI1_RX_D1P |   MIPI RX Lane1 iuput P |
|14    | MIPI_CSI1_RX_D0N|    MIPI RX Lane0 iuput N |
|15    | MIPI_CSI1_RX_D0P |    MIPI RX Lane0 iuput P |
|17    | MIPI_CSI1_RX_CLK0N|   MIPI RX Clock iuput N |
|18    | MIPI_CSI1_RX_CLK0P|  MIPI RX Clock iuput P |
|19    | MIPI_VSYNC        |    |
|20    | MIPI_CAM3_CLKOUT / GPIO1_B7 |    1.8V, CLock ouput for Sensor / GPIO |
|21    | MIPI_HSYNC        |    |
|22    | MIPI_CAM0_CLKOUT |   1.8V, CLock ouput for Sensor |
|23    | MIPI_CSI1_PDN0_H(GPIO1_B0) |    1.8V, GPIO |
|24    | I2C3_SCL_M0_MIPI |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|25    | I2C3_SDA_M0_MIPI |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|26    | MIPI_CSI0_PDN1_H(GPIO1_A7)|  1.8V, GPIO |
|27    | CM2_RST_L(GPIO4_A0)|   3.3V, GPIO |
|28,29 | VCC_RX|   3.3V Power ouput |
|30,31 | VCC_5V0|   5V Power ouput |

#### MIPI DSI
0.5mm FPC connector (J23)

|Pin |   MIPI-DSI  |   描述     |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,27,33,34      | GND                |   Power and Signal Ground | 
|2                            | MIPI_DPHY1_TX_D0N  |  MIPI1 TX Lane0 ouput N | 
|3                            | MIPI_DPHY1_TX_D0P      |   MIPI1 TX Lane0 ouput P |
|5                            | MIPI_DPHY1_TX_D1N        |    MIPI1 TX Lane1 ouput N |
|6                            | MIPI_DPHY1_TX_D1P         |   MIPI1 TX Lane1 ouput P | 
|8                            | MIPI_DPHY1_TX_CLKN   |   MIPI1 TX Clock ouput N | 
|9                            | MIPI_DPHY1_TX_CLKP           |    MIPI1 TX Clock ouput P |
|11                           | MIPI_DPHY1_TX_D2N                |   MIPI1 TX Lane2 ouput N |
|12                           | MIPI_DPHY1_TX_D2P                |   MIPI1 TX Lane2 ouput P |
|14                           | MIPI_DPHY1_TX_D3N |   MIPI1 TX Lane3 ouput N | 
|15                           | MIPI_DPHY1_TX_D3P |   MIPI1 TX Lane3 ouput P | 
|17                           | LCD_PWM (PWM2_M2/GPIO4_C2) |   1.8V, GPIO/PWM |
|18,19                        | VCC3V3_LCD |   3.3V Power ouput | 
|20                           | LCD_RESET (GPIO2_C1) |   1.8V, GPIO |
|21                           | /NC |   No Connection | 
|22                           | LCD_BL_EN (GPIO3_A1) |   3.3V, GPIO |
|23                           | I2C6_SCL_M0 |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|24                           | I2C6_SDA_M0 |  1.8V, I2C Data, pulled up to 1.8V with 2.2K on Sige7 |
|25                           | TP_INT (GPIO0_D3) |    1.8V, GPIO |
|26                           | TP_RST (GPIO0_C6)|   1.8V, GPIO |
|28,29                        | VCC5V0_LCD |  5V Power ouput |
|31,32                        | VCC_1V8 |  1.8V Power ouput |

#### Fan
0.8mm connector(CN32)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | 地 |
|3    | PWM | PWM控制 |