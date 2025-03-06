---
description: ArmSom-Forge1 adopts the Rockchip RK3506 next-generation high-performance industrial-grade embedded chip, featuring a multi-core heterogeneous design with three Cortex-A7 cores and one Cortex-M0 core, with main frequencies of 1.5GHz and 200MHz respectively. This chip is widely used in industrial control, industrial communication, human-machine interaction, and other fields due to its high integration, low power consumption, high real-time performance, and rich interface resources.
keywords: [armsom, armsom-forge1, maker kit, rockchip, rk3506 product introduction]
sidebar_label: "Forge1"
sidebar_position: 2
slug: /armsom-forge1
image: /img/forge/forge1-bananer.png
---

## 1. Overview
ArmSom-Forge1 adopts the Rockchip RK3506 next-generation high-performance industrial-grade embedded chip, featuring a multi-core heterogeneous design with three Cortex-A7 cores and one Cortex-M0 core, with main frequencies of 1.5GHz and 200MHz respectively. This chip is widely used in industrial control, industrial communication, human-machine interaction, and other fields due to its high integration, low power consumption, high real-time performance, and rich interface resources.


---

## Hardware Information

### Hardware Interfaces


### Hardware Specifications

<details>
    <summary>
        ArmSom-Forge1 Hardware Specifications
    </summary>
    <table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Functional Parameters</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3506j</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>Three-core Cortex-A7 processor RK3506</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>2D Graphic Engine</li><li>Embedded high-performance 2D acceleration hardware</li></th>
        </tr>
        <tr >
            <th>Memory</th>
            <th><li>256MB/512MB/1GB  DDR3/DDR3L 16bit</li></th>
        </tr>
        <tr >
            <th>Storage</th>
            <th><li>256MB/512MB NAND</li><li>Supports MicroSD card expansion</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th><li>2 × Gigabit Ethernet M bps）</li></th>
        </tr>
        <tr>
            <th>Video Output</th>
            <th><li>1 x RGB (1280×1280@60fps)</li><li>1 x MIPI_DSI_TX(2Lane 1.5Gbps)</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th><li>1 × Speaker 1 × MIC </li></th>
        </tr>
        <tr>
            <th>USB Interface</th>
            <th><li>1 × USB2.0 OTG（Type C）</li>
            <li>1 × USB2.0 HOST</li></th>
        </tr>
        <tr>
            <th>40-PIN</th>
            <th><li>Partially compatible with Raspberry Pi 40-pin, allowing connection to a variety of accessory peripherals</li><li>Supports UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>Power</th>
            <th><li>12V/2A</li></th>
        </tr>
        <tr>
            <th>Buttons</th>
            <th><li>1x Maskrom key, supports entering maskrom burn-in mode</li></th>
        </tr>
        <tr>
            <th>System</th>
            <th><li>Officially supported by yocto buildroot</li></th>
        </tr>
        <tr>
            <th>Size</th>
            <th><li>92 mm x 62mm</li></th>
        </tr>
        <tr>
            <th>Operating Temperature</th>
            <th><li>-40℃ ~ 85℃</li></th>
        </tr>
    </tbody>
</table>
</details>

### RK3506 Block Diagram

### Pin Definitions

<details>
    <summary>
        40-PIN Socket
    </summary>
<div className='gpio_style'>

| GPIO Number |  Function |   Pin    |  Pin     |  Function  | GPIO Number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     130     |   I2C1_SDA_M0 / UART3_RTSN / I2S1_SDI3 / GPIO4_A2_d /| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     131     | I2C1_SCL_M0 / UART3_CTSN / I2S1_SDI2 /  GPIO4_A3_d  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     1     | REF_CLK_OUT_M0 /GPIO0_A1  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  <div className='orange-txt'>UART0_TX_M0</div> / JTAG_MCU_TCK_M1 / JTAG_CPU_TCK_M1  / GPIO4_D0_d |     152      |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  <div className='orange-txt'>UART0_RX_M0</div> / JTAG_MCU_TMS_M1 / JTAG_CPU_TMS_M1 /   GPIO4_C7_u  |     151      |
|     0     |  GPIO0_A0  | <div className='green'>11</div>  | <div className='green'>12</div> |  I2S1_SCLK  / UART1_RTSN / GPIO4_A5_d   |     133     |
|  | | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|  | | <div className='green'>15</div>  | <div className='green'>16</div> |   |          |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |    |         |
| 138 | SPI0_MOSI / PDM_SDI0 / I2S1_SDO3 / GPIO4_B2_d  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |   |
| 139 | SPI0_MISO / PDM_SDI2 /  I2S1_SDI1 / GPIO4_B3_d  | <div className='green'>21</div>  | <div className='green'>22</div> | |   |
| 140 | SPI0_CLK / I2S1_SDI0 /  GPIO4_B4_d  | <div className='green'>23</div>  | <div className='green'>24</div> |  SPI0_CSN0 / PWR_CTRL1  / GPIO4_B6_u | 142 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |  PWM6_M0 / SPI0_CSN1 / PDM_SDI3 / GPIO4_C1_d |     145      |
|  147 | I2C0_SDA_M0 / PWM0_M0 / GPU_AVS / GPIO4_C3_d |  <div className='green'>27</div>  | <div className='green'>28</div> | ARM_AVS / PWM1_M0 / I2C0_SCL_M0 / GPIO4_C4_d  | 148 |
|  |   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |           |
| |  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO4_C0/PWM5_M0 / FEPHY_LED_LINK_M0 / UART3_TX_M1  |    144     |
| 143  | GPIO4_B7 / PWM4_M0 /  FEPHY_LED_SPD_M0 / UART3_RX_M1  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |      |
| 134  | UART1_TX_M0 / I2S1_LRCK / GPIO4_A6_d   | <div className='green'>35</div>  | <div className='green'>36</div> |   |          |
| | | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO3_B2 / SPI0_CLK / I2S1_SDI0    |     106     |
| |  GND | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO4_A7_d /  UART1_RX_M0 / I2S1_SDO0   |     135     |

</div>
</details>


## Development Materials

### SDK Source Code


### Official Images

The ArmSoM team uses buildroot bullseye as the official operating system.

The following systems have been tested and verified by ArmSoM officially:

### Hardware Documentation

Obtain the schematic diagrams, DXF, and other hardware documentation for forge1.

## Product Certificates

## Supply Statement

The ArmSoM-Sige1 will be produced at least until August 2034.

## Accessories

The official accessories designed for the ArmSoM-Sige are intended to help you achieve optimal performance from your computer.



[0.8mm 连接器](https://item.taobao.com/item.htm?id=742624228081)

## Purchase Samples
ArmSoM Official Website: [https://www.armsom.org/product-page/Sige1](https://www.armsom.org/product-page/Sige1)

ArmSoM Official AliExpress Store: [https://aliexpress.com/item/3256807356692995.html](https://aliexpress.com/item/3256807356692995.html) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=824590173298](https://item.taobao.com/item.htm?id=824590173298)

For OEM & ODM, please contact: sales@armsom.org

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