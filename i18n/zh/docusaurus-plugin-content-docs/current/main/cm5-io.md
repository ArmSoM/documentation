---
description: ArmSoM-CM5-IO
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "CM5-IO"
sidebar_position: 6
slug: /armsom-CM5-IO
---

# CM5-IO 产品简介

CM5-IO是 ArmSoM CM5的 IO 板，尺寸为 100x80x29 毫米，它是一款专为创客、学习者和开发者设计的微型 AI 计算机，能够快速将 AI 技术应用于各种智能设备。

## 硬件信息

### 硬件规格

CM5-IO板是专为CM5计算模块设计的扩展板，旨在帮助完成系统和嵌入式板开发。

- 1x HDMI输出, 1x DP输出
- 4x USB 3.0 Type-A
- 千兆以太网
- 通过USB Type-C进行固件闪存和设备模式
- GPIO：40针扩展头
- POE：5V Power Over Ethernet
- 电源连接器：DC Barrel插孔，用于12V电源输入
- 扩展：M.2（M键，支持PCIe）、microSD
- MIPI DSI：1x 4通道MIPI DSI，支持最高4K@60fps（x4）
- MIPI CSI0：1x 4通道MIPI CSI，每条通道最高2.5Gbps
- MIPI CSI1：1x 2通道MIPI CSI，每条通道最高2.5Gbps
- 其他：HPOUT,FAN,VRTC
- 尺寸：100 x 80 x 29 毫米 (3.94 x 3.15 x 1.14 英寸)
- 重量:  

### 硬件接口

![ArmSoM-CM5-IO](/img/cm/CM5-IO-layout.png)

:::tip
CM5-IO Board 使用12V DC供电。
:::
### 引脚定义

<details>
    <summary>
        40-pin 座子
    </summary>
<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
| |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |      |  
|140| CAN1_RX_M2 / I2C3_SDA_M0 / UART2_RX_M1 / GPIO4_B4_d   | <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |      |
|141| CAN1_TX_M2 / I2C3_SCL_M0 / UART2_TX_M1 / GPIO4_B5_d   |  <div className='green'>5</div>  | <div className='black'>6</div>  |GND | -           |
|20| PWM0_CH0_M0 / GPIO0_C4_d  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  <div className='orange-txt'>UART0_TX_M0</div> / GPIO0_D4_u |28|
|  - |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  <div className='orange-txt'>UART0_RX_M0</div> / GPIO0_D5_u |     29      |
| - |  -   | <div className='green'>11</div>  | <div className='green'>12</div> | -    |     -     |
|-|- | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
| - | - | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO2_D1_d /  UART4_RX_M0 / I2C6_SDA_M2 / PWM2_CH1_M2  | 89 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |   GPIO2_D0_d / UART4_TX_M0 / I2C6_SCL_M2 / PWM2_CH0_M2  |88|
| 97 |  I2C7_SDA_M1 / SPI3_MOSI_M0 / UART3_RX_M0 / GPIO3_A1_d | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |  - |
| 98 |  CAN1_TX_M3 / SPI3_MISO_M0 / SPDIF_RX1_M1 / UART3_CTSN_M0 / SPDIF_RX1_M1/  GPIO3_A2_d  | <div className='green'>21</div>  | <div className='green'>22</div> | SARADC_VIN4 |  - |
| 96 |  I2C7_SCL_M1 / SPI3_CLK_M0 / UART3_TX_M0 / GPIO3_A0_d  | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO3_A3_d / CAN1_RX_M3 / SPI3_CSN0_M0  / UART3_RTSN_M0 / SPDIF_TX1_M1 | 99|
|- |  GND | <div className='black'>25</div>  | <div className='green'>26</div> | - | - |
|  111 |  I2C4_SDA_M3 / UART2_RX_M2 / GPIO3_B7_d |  <div className='green'>27</div>  | <div className='green'>28</div> | GPIO2_D6_d / PWM10_M0 / GPIO3_B5_d  | 109 |
|112| I2C4_SCL_M3 / UART2_TX_M2 / GPIO3_C0_d  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |      -     |
|126|   SPI3_MOSI_M1 / PWM2_CH6_M3 / GPIO3_D6_d| <div className='green'>31</div>  | <div className='green'>32</div> | -  | -  |
| -  | - | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |  -    |
| -  | -   | <div className='green'>35</div>  | <div className='green'>36</div> |  - |   - |
| - | - | <div className='green'>37</div> | <div className='green'>38</div> |  -    |   -   |
| -|  GND | <div className='black'>39</div>  | <div className='green'>40</div> | -   |     -     |

</div>
</details>

<details>
    <summary>
        FAN
    </summary>
0.8mm 连接器(CN32)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | 地 | 
|3    | PWM | PWM控制 |
</details>

<details>
    <summary>
        HPOUT
    </summary>
0.8mm 连接器(CN3)

|Pin        | Assignment  | Description|
|:--------: | :---------: | :--------:  | 
|1          | AOR         | 右声道      |
|2          | AOL         | 左声道      |
|3          | GND         | 地          |
</details>

<details>
    <summary>
        VRTC
    </summary>

0.8mm connector(J27)

|Pin        | Assignment  | Description|

 :--------: | :---------: | :--------: | 
|1          | +         | 正极  |
|2          | -         | 负极  |
</details>

<details>
    <summary>
        PoE In(J5)
    </summary>

| Pin  | Assignment | Description |
| :--: | :--------: | :---------: |
|  1   |    VC1     |     TX1     |
|  2   |    VC2     |     RX1     |
|  3   |    VC3     |     TX2     |
|  4   |    VC4     |     RX2     |

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
            <h2>Armbian源码</h2>
            <p>适用于 ARM 开发板的 Linux</p>
        </div>
    </div>
</a>

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>CM5-IO kernel</h2>
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
            <h2>CM5-IO uboot</h2>
            <p>rockchip-linux/u-boot</p>
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
|![debian-bullseye](/img/sige/debian12.png) | debian12 for cm5 :  <br/>  Debian 12 带来了数千个新的和更新的软件包，支持多种桌面环境和处理器架构（包括 32 位和 64 位 PC、ARM、MIPS 和 PowerPC）。但是最大的变化之一是 Linux 内核从 5.10 版本升级到 6.1 LTS 版本。| [百度网盘](https://pan.baidu.com/s/1jMlQQxMsChx7wVuT5_koSQ?pwd=arms)  |
|![Android](/img/sige/android.png) | Android14 for cm5 :    <br/>最新的操作系统升级，让您的设备更加个性化、更安全、更易访问。照片质量提升、新主题和 AI 生成的壁纸。隐私更新，保护您的健康、安全和数据。并扩展了无障碍功能。| [百度网盘](https://pan.baidu.com/s/1nQt_MNnEWcYrWB6vT2fxbQ?pwd=arms)  |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.webp) | Armbian for cm5 :    <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  | [armbian image](https://github.com/armbian/community/releases)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for cm5 :    <br/> 该项目旨在为Rockchip RK3588设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。| [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### 硬件资料

获取CM5-IO开发套件原理图、PCB、DXF等硬件资料，快速投入开发

待开放,请联系 sales@armsom.org

<!-- <div class="cards">
    <a href="https://pan.baidu.com/s/14Q2V7cpsuSdQslvESCSbwg?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>CM5-IO Schematics</h2>
                <p>source files (orcad)</p>
            </div>
        </div>
</a>

<a href="https://pan.baidu.com/s/1yDK_N6rX1hzJPMUGxGBDug?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM5-IO PCB</h2>
            <p>PCB source files (PADS) </p>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1e0YIAYYj4hwJQxsiJEKkcw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM5-IO 2D</h2>
            <p>2D CAD files </p>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1voD9aF5iUpnYs4saAi6ITQ?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM5-IO SMD</h2>
            <p>components Position Reference of CM5-IO</p>
        </div>
    </div>
</a>
</div> -->

## 使用手册

在开始使用 CM5-IO 之前，请准备好以下物品

#### 工具准备
* CM5-IO, CM5 主板
* 电源（三选一）
  * 支持 9V/2A、12V/2A、15V/2A 和 20V/2A 的 USB Type-C PD 2.0
  * 支持 DC 12V适配器，2.5mm
  * 支持 PoE 12V
* 系统安装（二选一）
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器，
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：
  * 板载eMMC启动
    * USB A型转 C型数据线，从 typec 端口在 CM5-IO 上写入镜像或使用 fastboot/adb 命令，您需要 USB A转type C数据线连接 CM5-IO 和 PC。