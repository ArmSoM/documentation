---
description: ArmSoM-Sige1 采用Rockchip RK3528 新一代的智能机顶盒和多媒体应用芯片，可应用于IPTV/OTT盒子、云终端、融合类产品，是高性能低功耗的4K播放器，解码能力最高支持到8K，同时也支持了AVS2和HDR VIVID标准。
keywords: [armsom, armsom-sige1, maker kit, rockchip, rk3528产品介绍]
sidebar_label: "Sige1"
sidebar_position: 2
slug: /armsom-sige1
---

# Sige1 产品简介

让我们在 5 分钟内了解 Sige1。

## 简介

ArmSoM-Sige1 采用Rockchip RK3528 新一代的智能机顶盒和多媒体应用芯片，可应用于IPTV/OTT盒子、云终端、融合类产品，是高性能低功耗的4K播放器，解码能力最高支持到8K，同时也支持了AVS2和HDR VIVID标准。

![ArmSoM-sige1](/img/sige/sige1.png)

### 关键参数

- SOC：瑞芯微 RK3528
- CPU：RK3528 四核Cortex-A53
- GPU：ARM Mali-450 GPU
- VPU/编解码：
  - 硬解码：支持以60fps播放4K超高清视频，支持高达10位像素，支持H.265、H.264、AVS2等视频标准。
  - 硬编码：支持以60fps捕捉1080p高清视频，支持H.265和H.264编码。
- RAM：1GB / 2GB / 4GB 32bit LPDDR4x，默认2GB
- Flash：0GB / 8GB / 16GB / 32GB / 64GB eMMC，默认eMMC 8GB
- 工作电压：具有宽范围的输入电压，从4.5V到18V（电压误差±5%）
- 工作温度：0℃ ~ 80℃
- 操作系统：
  - Rockchip官方支持：Android 9.0_box，Debian11，Buildroot
  - 第三方支持：Armbian
- PCB： 6 层 PCB 板设计
- 重量：38.9g
- 大小：92mm × 62mm x 14.6mm

## 使用手册

<a href="./sige-family-started" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>Sige使用手册</h2>
            <p>如何开始使用你的Sige</p>
        </div>
    </div>
</a>

## 硬件信息

### 硬件接口

![ArmSoM-Sige1 front & back](/img/sige/sige1-layout.jpg)
:::tip
Sige1上有两个长得一样的Type-C接口，其中Type-C(DC IN)才是电源接口。
:::

### 硬件规格

<details>
    <summary>
        Sige1 硬件规格
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
            <th><li>RockChip RK3528</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3528 四核Cortex-A53</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali-450 GPU</li><li>支持 OpenGL ES 1.1/2.0、OpenVG。</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：支持以60fps播放4K超高清视频，支持高达10位像素，支持H.265、H.264、AVS2等视频标准。</li><li>硬编码：支持以60fps捕捉1080p高清视频，支持H.265和H.264编码。</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>4GB 32bit LPDDR4x，默认4GB，最大支持4GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB eMMC，默认eMMC 32GB</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>1x 2.5G网口</li><li>1x 千兆网口</li><li>板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 和 BT5.3 (<a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a>)</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>1x HDMI OUT2.0b，支持 4K@60fps</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1x HDMI音频输出</li><li>1x HP-OUT 音频输出</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>2x USB2.0，支持高速（480Mbps）、全速（12Mbps）和低速（1.5Mbps）模式</li>
            <li>1x USB Type-C 2.0，支持OTG，支持高速（480Mbps）、全速（12Mbps）和低速（1.5Mbps）模式</li></th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th><li>和树莓派40pin兼容部分引脚功能，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>1x 5V风扇接口</li><li>1x 电池输入连接器用于低功耗RTC芯片HYM8563TS的供电</li><li>2x LED灯，系统正常时绿色灯开始闪烁，红色灯由用户控制</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>支持USB Type-C, 9V/2A, 12V/2A, 15V/2A</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x Reset键，支持重启</li><li>1x Maskrom键，支持进入maskrom烧录模式</li></th>
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
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>
</details>

### RK3528框图

<details>
    <summary>
        RK3528 框图
    </summary>
    <img
  src="./img/sige/rk3528.png"
  alt="rk3528 block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

<details>
    <summary>
        40-pin 座子
    </summary>
<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     130     |   I2C1_SDA_M0 / UART3_RTSN / I2S1_SDI3 / GPIO4_A2_d /| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     131     | I2C1_SCL_M0 / UART3_CTSN / I2S1_SDI2 /  GPIO4_A3_d  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     1     | REF_CLK_OUT_M0 /GPIO0_A1  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  <div className='orange-txt'>UART0_TX_M0</div> / JTAG_MCU_TCK_M1 / JTAG_CPU_TCK_M1  / GPIO4_D0_d |     152      |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  GPIO0_B6  / <div className='orange-txt'>UART0_RX_M0</div> / JTAG_MCU_TMS_M1 / JTAG_CPU_TMS_M1 /   GPIO4_C7_u  |     151      |
|     0     |  GPIO0_A0  | <div className='green'>11</div>  | <div className='green'>12</div> |  I2S1_SCLK  / UART1_RTSN / GPIO4_A5_d   |     133     |
|  | | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|  | | <div className='green'>15</div>  | <div className='green'>16</div> |   |          |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |    |         |
| 138 | SPI0_MOSI / PDM_SDI0 / I2S1_SDO3 / GPIO4_B2_d  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |   |
| 41 | SPI0_MISO / PDM_SDI2 /  I2S1_SDI1 / GPIO4_B3_d  | <div className='green'>21</div>  | <div className='green'>22</div> | |   |
| 43 | SPI0_CLK / I2S1_SDI0 /  GPIO4_B4_d  | <div className='green'>23</div>  | <div className='green'>24</div> |  SPI0_CSN0 / PWR_CTRL1  /SPI0_CS0_M2 | 44 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |  PWM6_M0 / SPI0_CSN1 / PDM_SDI3 / GPIO4_C1_d |     145      |
|  150 | I2C0_SDA_M0 / PWM0_M0 / GPU_AVS / GPIO4_C3_d |  <div className='green'>27</div>  | <div className='green'>28</div> | ARM_AVS / PWM1_M0 / I2C0_SCL_M0 / GPIO4_C4_d  | 148 |
|  |   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |           |
| |  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO4_C0/PWM5_M0 / FEPHY_LED_LINK_M0 / UART3_TX_M1  |    144     |
| 103  | GPIO4_B7 / PWM4_M0 /  FEPHY_LED_SPD_M0 / UART3_RX_M1  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |      |
| 134  | UART1_TX_M0 / I2S1_LRCK / GPIO4_A6_d   | <div className='green'>35</div>  | <div className='green'>36</div> |   |          |
| | | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO3_B2 / SPI0_CLK / I2S1_SDI0    |     106     |
| |  GND | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO4_A7_d /  UART1_RX_M0 / I2S1_SDO0   |     107     |

</div>
</details>

<details>
    <summary>
        FAN
    </summary>
0.8mm 连接器(CON3102)

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
0.8mm 连接器(CON3101)

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

0.8mm connector(CON2200)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | 正极  |
|2          | -         | 负极  |
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
            <h2>Sige1 kernel</h2>
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
            <h2>Sige1 uboot</h2>
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
<br/>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11.png) | debian11 for Sige1 :  <br/> Debian 11（代号为"Bullseye"）是Debian项目的最新稳定版本，它于2021年8月14日发布。Debian是一个以自由软件为基础的操作系统，以稳定性、安全性和开放性著称。|[百度网盘](https://pan.baidu.com/s/1ETLbE47Q-j3qFPmIR_Wz0w?pwd=arms)  |
|![Android9-box](/img/sige/Android9-box.png) | Android9 Box for Sige1 :    <br/>Android 9 Box版本是专为电视盒子（TV Box）设计的Android操作系统版本。它基于Android 9 Pie版本，专注于优化在大屏幕设备上的用户体验和性能表现。| [百度网盘](https://pan.baidu.com/s/1sZUN_VAXjSPyo3376lDGrQ?pwd=arms)     |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.webp) | Armbian for Sige1 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       | [armbian固件下载](https://github.com/armbian/community/releases)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige1 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment.  | [ubuntu-rockchip固件下载](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### 硬件资料

获取 Sige1 原理图、DXF等硬件资料

<div class="cards">
<a href="https://pan.baidu.com/s/1XWl4ybT9nXCxRil8Avztxg?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige1 SCH</h2>
            </div>
        </div>
</a>
<a href="https://pan.baidu.com/s/1Vwrg71j_VEb_RWB0z71Xvg?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige1 2D</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/1-EvAD7jWs2L3Qc4XYXPFWQ?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige1 位号图</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/1O_pDcWoXn8_L4GD_ZHMnxA?pwd=arms " class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
</div>

## 产品证书

### CE / FC / RoHS


## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/Sige1](https://www.armsom.org/product-page/Sige1)
 
ArmSoM 速卖通官方店: [https://www.aliexpress.com/store/1102800175](https://www.aliexpress.com/store/1102800175) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=757023687970](https://item.taobao.com/item.htm?id=757023687970)

OEM&ODM,  请联系: sales@armsom.org


