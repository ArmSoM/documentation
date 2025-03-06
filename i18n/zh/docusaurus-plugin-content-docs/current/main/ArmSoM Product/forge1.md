---
description: ArmSoM-forge1 采用Rockchip RK3528 新一代的智能机顶盒和多媒体应用芯片，可应用于IPTV/OTT盒子、云终端、融合类产品，是高性能低功耗的4K播放器，解码能力最高支持到8K，同时也支持了AVS2和HDR VIVID标准。
keywords: [armsom, armsom-forge1, maker kit, rockchip, rk3506产品介绍]
sidebar_label: "Forge1"
sidebar_position: 2
slug: /armsom-forge1
image: /img/forge/forge1-bananer.png
---

## 1. 概述
ArmSom-Forge1采用Rockchip RK3506新一代高性能工业级嵌入式芯片，采用三核Cortex-A7 + 单核Cortex-M0的多核异构设计，主频分别为1.5GHz和200MHz。该芯片以其高集成度、低功耗、高实时性和丰富的接口资源，广泛应用于工业控制、工业通信、人机交互等领域。


---

## 硬件信息

### 硬件接口


### 硬件规格

<details>
    <summary>
        ArmSom-Forge1 硬件规格
    </summary>
    <table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能参数</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3506j</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3506 三核Cortex-A7 处理器</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>2D Graphic Engine</li><li>内嵌高性能2D 加速硬件</li></th>
        </tr>
        <tr >
            <th>内存</th>
            <th><li>256MB/512MB/1GB  DDR3/DDR3L 16bit</li></th>
        </tr>
        <tr >
            <th>存储</th>
            <th><li>256MB/512MB NAND</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>12 × 百兆以太网（100 M bps）</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>1 x RGB (1280×1280@60fps)</li><li>1 x MIPI_DSI_TX(2Lane 1.5Gbps)</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1 × Speaker 1 × MIC </li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>1 × USB2.0 OTG（Type C）</li>
            <li>1 × USB2.0 HOST</li></th>
        </tr>
        <tr>
            <th>40-PIN</th>
            <th><li>和树莓派40pin兼容部分引脚功能，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>12V/2A</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x Maskrom键，支持进入maskrom烧录模式</li></th>
        </tr>
        <tr>
            <th>系统</th>
            <th><li>Rockchip官方支持：Android 9.0_box，Debian11</li><li>第三方支持：Armbian，Istoreos</li></th>
        </tr>
        <tr>
            <th>尺寸</th>
            <th><li>92 mm x 62mm</li></th>
        </tr>
        <tr>
            <th>工作温度</th>
            <th><li>-40℃ ~ 85℃</li></th>
        </tr>
    </tbody>
</table>
</details>

### RK3506框图

### 引脚定义

<details>
    <summary>
        40-PIN 座子
    </summary>
<div className='gpio_style'>

| GPIO Number |  功能 |   Pin    |  Pin     |  功能  | GPIO Number |
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


## 开发资料

### SDK源码


### 官方镜像

ArmSoM团队以 buildroot bullseye 为基础作为官方操作系统。

以下系统已由ArmSoM官方测试验证：

### 硬件资料

获取 forge1 原理图、DXF等硬件资料

## 产品证书

### CE / FC / RoHS

## 供货声明

ArmSoM-Sige1 将至少生产到 2034 年 8 月。

## 配件

## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/Sige1](https://www.armsom.org/product-page/Sige1)
 
ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256807356692995.html](https://aliexpress.com/item/3256807356692995.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=824590173298](https://item.taobao.com/item.htm?id=824590173298)

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