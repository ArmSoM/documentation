---
sidebar_position: 4
---

# 硬件资料

获取p2pro原理图、DXF等硬件资料

## LM7 硬件资料

点击进入链接: [百度网盘链接](https://pan.baidu.com/s/1YzTRiSsw2eJ0UFLxHJ7B-A?pwd=arms )

### 原理图

[ArmSoM-p2pro_1V1 原理图pdf](https://pan.baidu.com/s/1DV2GP11qEcxgJsmts5LtuA?pwd=arms ) - 原理图pdf

### 2D CAD 图

[ArmSoM-p2pro_1V1 底部，顶部](https://pan.baidu.com/s/1REHKRQTdJgXPO_1bWNB5Wg?pwd=arms) - 2D CAD 文件下载

### 位号图

[ArmSoM-p2pro_1V1 位号图](https://pan.baidu.com/s/1XvIFdjdpIluafuSrsSZUcg?pwd=arms ) -  位号图下载

### 硬件引脚定义

#### 40-PIN 座子

<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   VCC_IO +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |  VCC5V0_SYS  |             |
|          | ADC_KEY_IN1 | <div className='yellow'>3</div>  |  <div className='red'>4</div>   |   VCC5V0_SYS    |             |
|     69     | GPIO2_A5 / I2S0_SCLK_TX |  <div className='yellow'>5</div>  | <div className='green'>6</div>  |    SPDIF_TX / GPIO0_C1    |   17     | 
|     70     | I2S0_SCLK_RX / GPIO2_A6 / PDM_CLK |  <div className='yellow'>7</div>  | <div className='yellow'>8</div>  |  I2S0_LRCK_TX /GPIO2_A7 |     71      |
|     68     |   I2S0_8CH_MCLK / GPIO2_A4 / PDM_8CH_CLK_M_M2 |  <div className='yellow'>9</div>  | <div className='yellow'>10</div> |  I2S0_8CH_LRCK_RX / GPIO2_B0 |    72      |
|     73     |  GPIO2_B1 / I2S0_SDO0  | <div className='yellow'>11</div>  | <div className='yellow'>12</div> | PDM_SDI0 /  GPIO2_B5 / I2S0_SDI0 |     77     |
|     74     |   GPIO2_B2 / I2S0_SDO1 | <div className='yellow'>13</div>  | <div className='yellow'>14</div> |    GND     |             |
|     75     |   GPIO2_B3 / I2S0_SDO2 | <div className='yellow'>15</div>  | <div className='yellow'>16</div> |  PDM_SDI2 / GPIO2_B7 / I2S0_SDI2   |     79     |
|     76     |   GPIO2_B4 / I2S0_SDO3 | <div className='yellow'>17</div> | <div className='yellow'>18</div> |  PDM_SDI3 / GPIO2_C0 / I2S0_SDI3 |    80     |
|            |    GND | <div className='black'>19</div>  | <div className='black'>20</div> |    GND     |             |
|            | LINEOUT_L  | <div className='green'>21</div>  | <div className='green'>22</div> | LINEOUT_R          |             |
|           | MICBIAS1  | <div className='green'>23</div>  | <div className='green'>24</div> |  MICBIAS2 |           |
|             |   MICP1    | <div className='green'>25</div>  | <div className='green'>26</div> |  MICN1 |           |
|          | MICP2  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  MICN2  | |
|          | MICP3 | <div className='green'>29</div>  | <div className='green'>30</div> |    MICN3     |          |
|          | MICP4  | <div className='green'>31</div>  | <div className='green'>32</div> | MICN4  |         |
|          | MICP5  | <div className='green'>33</div>  | <div className='green'>34</div> | MICN5     |             |
|          | MICP6  | <div className='green'>35</div>  | <div className='green'>36</div> | MICN6 |          |
|          | MICP7 | <div className='green'>37</div>  | <div className='green'>38</div> |  MICN7   |          |
|          |   MICP8    | <div className='green'>39</div>  | <div className='green'>40</div> |   MICN8  |          |

</div>

#### 12-PIN 座子

<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|     65   | UART0_TX / GPIO2_A1 / SPI0_TX   | <div className='green'>1</div>  |  <div className='blue'>2</div>   |  I2C1_SDA / GPIO0_B3  |   11      |
|     64   | UART0_RX / GPIO2_A0 / SPI0_RX   | <div className='green'>3</div>  |  <div className='blue'>4</div>   |   I2C1_SCL / GPIO0_B4    |  12  |
|     56   | SPI2_CS / I2C0_SCL / GPIO1_D1 / UART1_TX |  <div className='green'>5</div>  | <div className='red'>6</div>  |   VCC_IO +3.3V   |        | 
|     57   | SPI2_CLK / I2C0_SDA / GPIO1_D0 / UART1_TX |  <div className='green'>7</div>  | <div className='black'>8</div>  |  GND |           |
|     55   | JTAG_TMS / <div className='orange-txt'>UART2_TX_M0</div> / GPIO1_C7 / SPI2_TX |  <div className='yellow'>9</div>  | <div className='yellow'>10</div> |  PWM2 / GPIO0_B7 / I2C3_SDA |    15  |
|     54     |  JTAG_TCK / <div className='orange-txt'>UART2_RX_M0</div> / GPIO1_C6 / SPI2_RX  | <div className='yellow'>11</div>  | <div className='yellow'>12</div> | PWM3 /  GPIO0_C0 / IR_RX |     16     |

</div>

