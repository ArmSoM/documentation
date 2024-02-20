---
description: The ArmSoM-P2pro is powered by the Rockchip RK3308B-S, which comes with a 64-bit quad-core ARM Cortex-A35 processor, USB, Ethernet, Bluetooth, wireless connectivity and a voice detection engine.With rich audio interfaces (such as MIC/PDM/SPDIF/I2S),RK3308 is ideal product for IoT and voice applications. 
keywords: [armsom, armsom-p2pro, rockchip, open source router，open source hardware]
sidebar_position: 4
---

# Hardware Data  

### Schematic

[ArmSoM-p2pro v1.1 Schematic pdf](https://drive.google.com/drive/folders/1-PiEzL9dguSznAxjfnkexjCKf08A07Sc)

### 2D CAD Drawing 

[ArmSoM-p2pro v1.1 Bottom&Top](https://drive.google.com/drive/folders/1rdJszKp6YXAMPEHMod3zUpfXJPYdX7yp)

### Component diagram

[ArmSoM-p2pro v1.1 Component diagram](https://drive.google.com/drive/folders/1dFL5A4Y_AIQvg8WBvP8Y9yPGmMEp9eRJ) 

### datasheet

[ArmSoM-p2pro v1.1 datasheet](https://drive.google.com/drive/folders/1tykssd5rnPnps8AoJ0eVFfM6lm8U7qCe)  

:::tip Version Change History
v1.0 is an internal version (fail to disclose now)  
:::

### Hardware Pin Definition   

#### 40-pin Socket   

<div className='gpio_style'>   


| GPIO number |               Function               |               Pin               |               Pin               |            Function             | GPIO number |
| :---------: | :----------------------------------: | :-----------------------------: | :-----------------------------: | :-----------------------------: | :---------: |
|             |                +3.3V                 |  <div className='red'>1</div>   |  <div className='red'>2</div>   |              +5.0V              |             |
|             |             ADC_KEY_IN1              | <div className='green'>3</div>  |  <div className='red'>4</div>   |              +5.0V              |             |
|     69      |       GPIO2_A5 / I2S0_SCLK_TX        | <div className='green'>5</div>  | <div className='black'>6</div>  |       SPDIF_TX / GPIO0_C1       |     17      |
|     70      |  I2S0_SCLK_RX / GPIO2_A6 / PDM_CLK   | <div className='green'>7</div>  | <div className='green'>8</div>  |     I2S0_LRCK_TX / GPIO2_A7     |     71      |
|     68      | I2S0_8CH_MCLK / GPIO2_A4 / I2S0_MCLK | <div className='black'>9</div>  | <div className='green'>10</div> |     I2S0_LRCK_RX / GPIO2_B0     |     72      |
|     73      |         GPIO2_B1 / I2S0_SDO0         | <div className='green'>11</div> | <div className='green'>12</div> | PDM_SDI0 / GPIO2_B5 / I2S0_SDI0 |     77      |
|     74      |         GPIO2_B2 / I2S0_SDO1         | <div className='green'>13</div> | <div className='black'>14</div> | PDM_SDI1 / GPIO2_B6 /I2S0_SDI1  |     78      |
|     75      |         GPIO2_B3 / I2S0_SDO2         | <div className='green'>15</div> | <div className='green'>16</div> | PDM_SDI2 / GPIO2_B7 / I2S0_SDI2 |     79      |
|     76      |         GPIO2_B4 / I2S0_SDO3         | <div className='green'>17</div> | <div className='green'>18</div> | GPIO2_C0 / PDM_SDI3 / I2S0_SDI3 |     80      |
|             |                 GND                  | <div className='green'>19</div> | <div className='black'>20</div> |               GND               |             |
|             |              LINEOUT_L               | <div className='green'>21</div> | <div className='green'>22</div> |            LINEOUT_R            |             |
|             |               MICBIAS1               | <div className='green'>23</div> | <div className='green'>24</div> |            MICBIAS2             |             |
|             |                MICP1                 | <div className='green'>25</div> | <div className='green'>26</div> |              MICN1              |             |
|             |                MICP2                 | <div className='green'>27</div> | <div className='green'>28</div> |              MICN2              |             |
|             |                MICP3                 | <div className='green'>29</div> | <div className='green'>30</div> |              MICN3              |             |
|             |                MICP4                 | <div className='green'>31</div> | <div className='green'>32</div> |              MICN4              |             |
|             |                MICP5                 | <div className='green'>33</div> | <div className='green'>34</div> |              MICN5              |             |
|             |                MICP6                 | <div className='green'>35</div> | <div className='green'>36</div> |              MICN6              |             |
|             |                MICP7                 | <div className='green'>37</div> | <div className='green'>38</div> |              MICN7              |             |
|             |                MICP8                 | <div className='green'>39</div> | <div className='green'>40</div> |              MICN8              |             |

</div>  

#### 12 PIN GPIO   

<div className='gpio_style'>   


| GPIO number |                           Function                           |               Pin               |               Pin               |          Function          | GPIO number |
| :---------: | :----------------------------------------------------------: | :-----------------------------: | :-----------------------------: | :------------------------: | :---------: |
|     65      |                UART0_TX / GPIO2_A1 / SPI0_TX                 | <div className='green'>1</div>  | <div className='green'>2</div>  |    I2C1_SDA / GPIO0_B3     |     11      |
|     64      |                UART0_RX / GPIO2_A0 / SPI0_RX                 | <div className='green'>3</div>  | <div className='green'>4</div>  |    I2C1_SCL / GPIO0_B4     |     12      |
|     56      |           SPI2_CS / I2C0_SCL / GPIO1_D1 / UART1_TX           | <div className='green'>5</div>  |  <div className='red'>6</div>   |        VCC_IO +3.3V        |     17      |
|     57      |          SPI2_CLK / I2C0_SDA / GPIO1_D0 / UART1_TX           | <div className='green'>7</div>  | <div className='black'>8</div>  |            GND             |             |
|     55      | JTAG_TMS / <div className='orange-txt'>UART2_TX_M0</div> / GPIO1_C7 / SPI2_TX | <div className='green'>9</div>  | <div className='green'>10</div> | PWM2 / GPIO0_B7 / I2C3_SDA |     15      |
|     54      | JTAG_TCK / <div className='orange-txt'>UART2_RX_M0</div> / GPIO1_C6 / SPI2_RX | <div className='green'>11</div> | <div className='green'>12</div> |  PWM3 / GPIO0_C0 / IR_RX   |     16      |
</div>   