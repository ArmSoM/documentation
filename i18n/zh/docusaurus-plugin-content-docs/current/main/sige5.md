---
description: ArmSoM-Sige5 采用Rockchip RK3576第二代8nm高性能AIOT平台，6 TOPS算力NPU，最大可配16GB大内存。支持8K视频编解码，拥有丰富的接口，支持双千兆网口，WIFI6/BT5。
keywords: [armsom, armsom-sige5, maker kit, rockchip, rk3576产品介绍]
sidebar_label: "Sige5"
sidebar_position: 2
slug: /armsom-sige5
---

# Sige5 产品简介

让我们在 5 分钟内了解 Sige5。

## 简介

ArmSoM-Sige5 采用Rockchip RK3576第二代8nm高性能AIOT平台，6 TOPS算力NPU，最大可配16GB大内存。支持4K视频编解码，拥有丰富的接口，支持双千兆网口，WiFi6 & BT5和多种视频输出。支持多种操作系统，适用于基于ARM的PC和边缘计算设备、个人移动互联网设备和其他数字多媒体应用。

![ArmSoM-sige5](/img/sige/sige5.jpg)

### 关键参数

- SOC：瑞芯微 RK3576
- CPU：集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器。
- GPU：ARM Mali G52 MC3 GPU
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算
- VPU/编解码：
  - 硬解码：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps
  - 硬编码：支持H.264和H.265最高4K@60fps，高质量JPEG编码器/ 解码器最高支持 4k@60fps。
- RAM：8/16GB 32bit LPDDR4x，默认8GB，RK3576 最大支持16GB
- Flash：32/128GB eMMC，默认eMMC 64GB
- 工作电压：具有宽范围的输入电压，从4.5V到23V（电压误差±5%）
- 工作温度：0℃ ~ 80℃
- 操作系统：
  - Rockchip官方支持：Android 14，Debian12，Buildroot
  - 第三方支持：Armbian
- PCB： 8 层 PCB 板设计
- 重量：43g
- 大小：92mm × 62mm

## 硬件信息

### 硬件接口

![ArmSoM-Sige5 front & back](/img/sige/sige5-layout.jpg)
![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)


:::tip
Sige5上有两个长得一样的Type-C接口，其中Type-C(PD Only)才是电源接口。
:::

### 硬件规格


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
            <th><li>RockChip RK3576</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3576 四核 Cortex-A72@ 2.2GHz 和四核 Cortex-A53@ 1.8GHz，8纳米制程</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali G52 MC3 GPU</li><li>完全兼容 OpenGL ES 1.1、2.0 和 3.2、OpenCL 高达 2.0 和 Vulkan 1.1</li><li>带有 MMU 的专用 2D 硬件引擎将最大限度地提高显示性能并提供非常流畅的操作。</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8</li><li>支持 INT4,INT8, INT16, FP16, BF16 and TF32 混合运算</li><li>支持深度学习框架：TensorFlow、Caffe、Tflite、Pytorch、Onnx NNAndroid NN等。</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps</li><li>硬编码：支持H.264和H.265最高4K@60fps，高质量JPEG编码器/ 解码器最高支持 4k@60fps。</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>ISP，1600万像素</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>8GB/16GB（最高可配 16GB ）32bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB/128GB eMMC，默认eMMC 64GB</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M 接口(PCIe 2.0 1- lanes)，可拓展 SSD：Type 2280/2260/2242/2230，目前默认使用2280</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>2x GbE网口</li><li>板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 和 BT5 (rtl8852bs)</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>1x HDMI OUT2.1，支持 4K@120fps</li><li>1x MIPI DSI 分辨率最高可达 2K@60fps</li><li>1x DP1.4 分辨率最高可达 4K@120fps</li></th>
        </tr>
        <tr>
            <th>视频输入</th>
            <th><li>2x 4Lanes MIPI CSI，每线最高 2.5Gbps</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1x HDMI音频输出</li><li>1x HP-OUT 音频输出</li><li>1x USB Type-C 3.0 (DP1.4)音频输出</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>1x USB3.0（支持USB3.1 Gen1），高达5Gbps数据速率</li><li>1x USB Type-C 3.0（DP1.4/OTG）</li><li>1x USB2.0，支持高速（480Mbps）、全速（12Mbps）和低速（1.5Mbps）模式</li></th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th><li>和树莓派40pin兼容部分引脚功能，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/ADC/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>1x 5V风扇接口</li><li>1x 电池输入连接器用于低功耗RTC芯片HYM8563TS的供电</li><li>2x LED灯，系统正常时绿色灯开始闪烁，红色灯由用户控制</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>支持USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x PWRON键，支持休眠唤醒</li><li>1x Reset键，支持重启</li><li>1x Maskrom键，支持进入maskrom烧录模式</li></th>
        </tr>
        <tr>
            <th>系统</th>
            <th><li>Rockchip官方支持：Android 14.0，Debian12，Buildroot</li><li>第三方支持：Armbian</li></th>
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

### RK3576框图

![RK3576](/img/sige/rk3576.png)

### 引脚定义

#### 40-pin 座子

<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |    |
|111|  I2C4_SDA_M3 /UART3_CTSN_M1/UART2_RX_M2/GPIO3_B7_d/| <div className='green'>3</div> | <div className='red'>4</div>   |  +5.0V  |   |  |
| 112 | I2C4_SCL_M3/UART3_RTSN_M1 /UART2_TX_M2/GPIO3_C0_d |  <div className='green'>5</div>  | <div className='black'>6</div>  |  GND    |  |     |
| 100  | PWM1_CH0_M3 / SPI2_CLK_M2 /  UART1_CTSN_M2 / GPIO3_A4_d  |  <div className='green'>7</div>  | <div className='green'>8</div>  |   GPIO0_D4_u / <div className='orange-txt'>UART0_TX_M0_PORT</div> / JTAG_TCK_M1|    28  |
| | GND| <div className='black'>9</div> | <div className='green'>10</div> | GPIO0_B6/<div className='orange-txt'>UART0_RX_M0</div>/JTAG_TMS_M1  |14 |
|  |   | <div className='green'>11</div>  | <div className='green'>12</div> |  SAI0_SCLK_M1  /  SPI0_CSN0_M0 / I2C3_SCL_M1  / GPIO0_C6_d |     22     |
||   | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
||   | <div className='green'>15</div>  | <div className='green'>16</div> |  I2C8_SDA_M2 / UART7_RX_M0  / SAI0_LRCK_M0 /  GPIO2_B7_d |     79     |
| |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> | I2C8_SCL_M2 / UART7_TX_M0 /  GPIO2_B6_d |    78     |
|149| SPI4_MOSI_M0 / PWM2_CH5_M1 /UART6_RX_M3 / I2C3_SDA_M3/GPIO4_C5_d | <div className='green'>19</div>  | <div className='black'>20</div> |    GND |  |
|150| PWM2_CH2_M1/CAN1_TX_M1 /SPI4_MISO_M0/I2C6_SCL_M3 / GPIO4_C6_d| <div className='green'>21</div>| <div className='green'>22</div> | SARADC_VIN4  |   |
|151| PWM2_CH3_M1/CAN1_RX_M1/SPI4_CLK_M0/I2C6_SDA_M3/ GPIO4_C7_d | <div className='green'>23</div>  | <div className='green'>24</div> |  PWM2_CH6_M1 /  UART6_TX_M3  /SPI4_CSN0_M0/ GPIO4_C4_d |     148      |
| |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |   |    |
| 104 | PWM0_CH0_M3 / SPI2_MOSI_M2 / UART10_RX_M0 / GPIO3_B0_d  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  GPIO2_D6_D/PWM2_CH6_M2 / UART9_RTSN_M0  |
|119| GPIO3_C7_D / UART8_RTSN_M0 | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|128| GPIO3_D4_D/ I2C3_SCL_M2 / SPI3_CLK_M1 / UART5_RX_M0 | <div className='green'>31</div>  | <div className='green'>32</div> |  |    |
|95| PWM2_CH7_M2/SPI3_CSN1_M0/UART9_CTSN_M0/SPDIF_TX0_M2/GPIO2_D7_d  | <div className='green'>33</div>  | <div className='black'>34</div> | GND  | |
|20| PWM0_CH0_M0/UART10_TX_M2/PDM0_CLK0_M0/SAI0_MCLK_M1/GPIO0_C4_d| <div className='green'>35</div> | <div className='green'>36</div> |SPI0_CLK_M0/I2C3_SDA_M1/SAI0_LRCK_M1/GPIO0_C7_d|23|
|96|I2C7_SCL_M1/SPI3_CLK_M0/ UART3_TX_M0/ GPIO3_A0_d D | <div className='green'>37</div>  | <div className='green'>38</div> | SPI0_MOSI_M0/PDM0_SDI0_M0/SAI0_SDI0_M1/GPIO0_D0_d | 24|
| | GND | <div className='black'>39</div>  | <div className='green'>40</div> |  I3C0_SDA_PU_M0/UART10_RX_M2/ DP_HPDIN_M1/ SAI0_SDO0_M1 / GPIO0_C5_d | 21|

</div>

#### MIPI CSI0
0.5mm FPC 连接器

|Pin |   MIPI-CSI |   描述   |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_DPHY_CSI1_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_DPHY_CSI1_RX_D3P                  |   MIPI RX Lane3 iuput P |
|5          | MIPI_DPHY_CSI1_RX_D2N |   MIPI RX Lane2 iuput N |
|6          | MIPI_DPHY_CSI1_RX_D2P|   MIPI RX Lane2 iuput P |
|8          | MIPI_DPHY_CSI2_RX_CLKN|   MIPI RX Clock iuput N |
|9         | MIPI_DPHY_CSI2_RX_CLKP |   MIPI RX Clock iuput P |
|11         |  MIPI_DPHY_CSI1_RX_D1N |   MIPI RX Lane1 iuput N |
|12         | MIPI_DPHY_CSI1_RX_D1P |   MIPI RX Lane1 iuput P |
|14         | MIPI_DPHY_CSI1_RX_D0N|    MIPI RX Lane0 iuput N |
|15         | MIPI_DPHY_CSI1_RX_D0P |    MIPI RX Lane0 iuput P |
|17         | MIPI_DPHY_CSI1_RX_CLKN|   MIPI RX Clock iuput N |
|18         | MIPI_DPHY_CSI1_RX_CLKP|  MIPI RX Clock iuput P |
|19         | MIPI_CSI1_RX_XVS        |    |
|20         | MIPI_DPHY_CSI2_CAM_CLKOUT_CON |    1.8V, CLock ouput for Sensor |
|21         | MIPI_CSI1_RX_XHS        |    |
|22         | MIPI_DPHY_CSI1_CAM_CLKOUT |   1.8V, CLock ouput for Sensor |
|23         | MIPI_DPHY_CSI1_PDN_H(GPIO3_D0) |    1.8V, GPIO |
|24         | I2C5_SCL_M3_MIPI_CSI1 |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|25         | I2C5_SDA_M3_MIPI_CSI1 |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|26         | MIPI_DPHY_CSI2_PDN_H(GPIO3_C7)|  1.8V, GPIO |
|27         | MIPI_DPHY_CSI1/2_RST(GPIO3_C6)|   3.3V, GPIO |
|28,29      | VCC_RX|   3.3V Power ouput |
|30,31      | VCC_5V0|   5V Power ouput |

#### MIPI CSI1
0.5mm FPC 连接器

|Pin |   MIPI-CSI |   描述   |
|:--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_DPHY_CSI3_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_DPHY_CSI3_RX_D3P   |   MIPI RX Lane3 iuput P |
|5     | MIPI_DPHY_CSI3_RX_D2N |   MIPI RX Lane2 iuput N |
|6     | MIPI_DPHY_CSI3_RX_D2P|   MIPI RX Lane2 iuput P |
|8     | MIPI_DPHY_CSI4_RX_CLKN|   MIPI RX Clock iuput N |
|9     | MIPI_DPHY_CSI4_RX_CLKP |   MIPI RX Clock iuput P |
|11    | MIPI_DPHY_CSI3_RX_D1N |   MIPI RX Lane1 iuput N |
|12    | MIPI_DPHY_CSI3_RX_D1P |   MIPI RX Lane1 iuput P |
|14    | MIPI_DPHY_CSI3_RX_D0N|    MIPI RX Lane0 iuput N |
|15    | MIPI_DPHY_CSI3_RX_D0P |    MIPI RX Lane0 iuput P |
|17    | MIPI_DPHY_CSI3_RX_CLKN|   MIPI RX Clock iuput N |
|18    | MIPI_DPHY_CSI3_RX_CLKP|  MIPI RX Clock iuput P |
|19    | MIPI_CSI3_RX_XVS        |    |
|20    | MIPI_DPHY_CSI4_CAM_CLKOUT_CON|    1.8V, CLock ouput for Sensor / GPIO |
|21    | MIPI_CSI3_RX_XHS        |    |
|22    | MIPI_DPHY_CSI3_CAM_CLKOUT |   1.8V, CLock ouput for Sensor |
|23    | MIPI_DPHY_CSI3_PDN_H |    1.8V, GPIO |
|24    | I2C4_SCL_M3_MIPI_CSI3 |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|25    | I2C4_SDA_M3_MIPI_CSI3 |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|26    | MIPI_DPHY_CSI4_PDN_H|  1.8V, GPIO |
|27    | MIPI_DPHY_CSI3/4_RST|   3.3V, GPIO |
|28,29 | VCC_RX|   3.3V Power ouput |
|30,31 | VCC_5V0|   5V Power ouput |

#### MIPI DSI
0.5mm FPC 连接器 (J23)

|Pin |   MIPI-DSI  |   描述     |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,27,33,34      | GND                |   Power and Signal Ground | 
|2                            | MIPI_DPHY_DSI_TX_D0N  |  MIPI1 TX Lane0 ouput N | 
|3                            | MIPI_DPHY_DSI_TX_D0P      |   MIPI1 TX Lane0 ouput P |
|5                            | MIPI_DPHY_DSI_TX_D1N        |    MIPI1 TX Lane1 ouput N |
|6                            | MIPI_DPHY_DSI_TX_D1P         |   MIPI1 TX Lane1 ouput P | 
|8                            | MIPI_DPHY_DSI_TX_CLKN   |   MIPI1 TX Clock ouput N | 
|9                            | MIPI_DPHY_DSI_TX_CLKP           |    MIPI1 TX Clock ouput P |
|11                           | MIPI_DPHY_DSI_TX_D2N                |   MIPI1 TX Lane2 ouput N |
|12                           | MIPI_DPHY_DSI_TX_D2P                |   MIPI1 TX Lane2 ouput P |
|14                           | MIPI_DPHY_DSI_TX_D3N |   MIPI1 TX Lane3 ouput N | 
|15                           | MIPI_DPHY_DSI_TX_D3P |   MIPI1 TX Lane3 ouput P | 
|17                           | LCD_BL_PWM1_CH1_M0  |   1.8V, GPIO/PWM |
|18,19                        | VCC3V3_LCD |   3.3V Power ouput | 
|20                           | LCD_RESET|   1.8V, GPIO |
|21                           | /NC |   No Connection | 
|22                           | LCD_BL_EN_H  |   3.3V, GPIO |
|23                           | I2C0_SCL_M1_TP |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|24                           | I2C0_SDA_M1_TP |  1.8V, I2C Data, pulled up to 1.8V with 2.2K on sige5 |
|25                           | TP_INT_L   |    1.8V, GPIO |
|26                           | TP_RST_L  |   1.8V, GPIO |
|28,29                        | VCC5V0_LCD |  5V Power ouput |
|31,32                        | VCC_1V8 |  1.8V Power ouput |

#### Fan
0.8mm 连接器(CN32)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | 地 |
|3    | PWM | PWM控制 |


## 开发资料

### SDK源码

ArmSoM github source code : [https://github.com/ArmSoM/armsom-build](https://github.com/ArmSoM/armsom-build)

ArmSoM-Sige5 kernel: 

ArmSoM-Sige5 uboot: 

openwrt(istoreos): [https://github.com/istoreos/istoreos](https://github.com/istoreos/istoreos)

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。

以下系统已由ArmSoM官方测试验证：

网盘地址：[百度网盘链接](../general-tutorial/cloud-disk)

**debain bullseye**

固件位置：3. Linux镜像/debian/ArmSoM-Sige5 - 

**安卓14**

固件位置：4. 安卓镜像/ArmSoM-Sige5 - 

**openwrt**

固件位置：3. Linux镜像/openwrt/ArmSoM-Sige5 - 

### 第三方镜像

**armbian**

![armbian-logo](/img/armbian-logo.webp)

固件位置：3. Linux镜像/armbian/ArmSoM-Sige5 - 

[armbian/community/releases](https://github.com/armbian/community/releases) 

**Ubuntu**  

固件位置: 3. Linux Images/ubuntu/ArmSoM-Sige5 - 


## 使用手册

sige5 使用手册，帮助用户了解sige5的基本使用和需要的准备工作。 当您拿到产品的时候，您需要知道它的型号以及硬件版本，这些信息都可以在板子上的丝印找到。我们会尽可能详细地向您介绍产品的信息。

### 入门准备
在开始使用 ArmSoM-sige5 之前，请准备好以下物品

#### 工具准备
* sige5 主板
* 电源: USB Type-C PD
  * 支持 9V/2A, 12V/2A, 15V/2A
* 系统安装（二选一）
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在 sige5 上写入镜像，您需要 Type-C 数据线连接 sige5 和 PC。

#### 可选选项
* USB 键盘鼠标
* HDMI显示器和HDMI线
  * sige5配备了全尺寸 HDMI 接口，最高支持 8K@60 显示。
  * HDMI EDID用于确定最佳显示分辨率。 在支持 1080p（或 4K/8K）的显示器和电视上，将选择此分辨率。 如果不支持 1080p，EDID会找到的下一个可用分辨率。
* Ethernet 线（网线）
  * sige5 支持以太网上网，最高支持2.5Gb。
  * 网线用于将 sige5 连接到本地网络和互联网。
* 摄像头模块
  * sige5 支持拍照功能。
  * 推荐使用imx415模组，可找ArmSoM官方店淘宝客服购买。
* LCD显示屏
  * sige5 支持LCD显示功能。
  * 推荐使用 ArmSoM Display 10.1 HD，可找ArmSoM官方店淘宝客服购买。
* 音频线
  * 可以使用0.8mm立式插座。
* USB-A型转USB-C型数据线

### 烧录方式选择

[系统镜像烧录](./general-tutorial/flash-img)
### 接口设置

如果您是首次使用 ArmSoM-sige5，请先熟悉下 [外设接口](#硬件接口)，以便于您更好的理解后续的内容。

#### 调试串口

如下所示连接 USB 转 TTL 串口线：

![armsom-sige5-debug](/img/sige/armsom-sige7-debug.png)

| sige5       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |


#### 千兆以太网口

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-sige5 上的 RJ45 端口插入，系统桌面就会弹出有线连接。

- 通过命令 ifconfig 检查以太网是否正常，它会显示网卡 enP2p33s0 或 enP4p65s0 以及以太网 IP 地址。 此外，使用工具 ping 判断是否连通网络。

```bash
ifconfig
ping mi.com
```

- 如果无法ping通，尝试

```bash
$ sudo dhclient enP2p33s0
or
$ sudo dhclient enP4p65s0
```

#### WIFI
```
# 1. Open the WIFI
armsom@armsom-sige5:/# nmcli r wifi on
# 2. Scan WIFI
armsom@armsom-sige5:/# nmcli dev wifi
# 3. Connect to WIFI network
armsom@armsom-sige5:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

#### BT

```
# 1. 激活蓝牙
armsom@armsom-sige5:/# service bluetooth start
# 2. 进入bluetoothctl
armsom@armsom-sige5:/# bluetoothctl
# 3. 输入以下命令即可连接
armsom@armsom-sige5:/# power on
armsom@armsom-sige5:/# agent on
armsom@armsom-sige5:/# default-agent
armsom@armsom-sige5:/# scan on
armsom@armsom-sige5:/# pair yourDeviceMAC
```

#### HDMI

ArmSoM-sige5 有HDMI 输出端口，支持 CEC 和 HDMI 2.1，分辨率最高支持 4Kp120。

#### USB接口

ArmSoM-sige5 提供一个 USB 2.0 和一个 USB 3.0 端口。

**USB3.0 Camera**

连接usb3.0摄像头后，您可以下载 cheese 然后使用以下命令使用摄像机:

```bash
armsom@armsom-sige5: sudo apt update
armsom@armsom-sige5: sudo apt install cheese
```

同时，您也可以使用终端命令打开相机预览:
```bash
gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;
```

命令拍照:
```bash
gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=/home/armsom/test.jpg;
```

命令拍摄视频:
```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/armsom/test.mp4
```

![armsom-sige5-gst](/img/sige/armsom-sige7-gst.png)

#### 音频

**查看系统中的声卡**

```bash
armsom@armsom-sige5:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipdp0 [rockchip,dp0], device 0: rockchip,dp0 spdif-hifi-0 [rockchip,dp0 spdif-hifi-0]
 Subdevices: 1/1
 Subdevice #0: subdevice #0
card 1: rockchipes8316 [rockchip-es8316], device 0: fe470000.i2s-ES8316 HiFi es8316.7-0011-0 [fe470000.i2s-ES8316 HiFi es8316.7-0011-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchiphdmi0 [rockchip-hdmi0], device 0: rockchip-hdmi0 i2s-hifi-0 [rockchip-hdmi0 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

**播放音乐**

```
armsom@armsom-sige5:/# aplay -D plughw:0,0  ./usr/share/sounds/alsa/Rear_Right.wav
```

#### 风扇

sige5 配备一个 5V 的风扇，使用 0.8mm 的连接器

目前风扇默认五个状态

| 温度       | 状态  | PWM转速 |
| --------------- | ----- | ------ |
| 小于50° | 0 | 0 |
| 50°-55°  | 1 | 50 |
| 55°-60° | 2 | 100 |
| 60°-65° | 3 | 150 |
| 65°-70° | 4 | 200 |
| 70°以上 | 5 | 250 |

```
// 查看当前转速 
armsom@armsom-sige5:/# cat /sys/class/hwmon/hwmon6/pwm1
```

#### Type-C

sige5 配备全功能 USB Type‑C™ 3.0 端口，支持高达 4K@120fps 的 DP 显示

#### 40Pin

sige5 提供了一个40pin针脚的GPIO座子，兼容于市面上大部分传感器的应用。

#### RGB LED

sige5 具有两个用户灯 LED 绿灯和红灯。

- 用户绿灯
  默认情况下，其常亮表示系统运行正常。

- 用户红灯
  默认情况下不亮，可由用户自行操控。

用户可通过命令控制

```
armsom@armsom-sige5:/# sudo su
armsom@armsom-sige5:/# echo timer > /sys/class/leds/red/trigger
armsom@armsom-sige5:/# echo activity > /sys/class/leds/red/trigger
```

#### RTC

- sige5配备了一颗RTC IC **LK8563S**。
- 首先，使用2pin的排针接口，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc LK8563S 设备已创建

```bash
armsom@armsom-sige5:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
armsom@armsom-sige5:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
armsom@armsom-sige5:/# date
2023年 11月 03日 星期五 10:33:12 UTC
armsom@armsom-sige5:/# hwclock -w
armsom@armsom-sige5:/# hwclock -r
armsom@armsom-sige5:/# poweroff
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并启动sige5，检查RTC是否与系统时钟同步

```bash
armsom@armsom-sige5:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
armsom@armsom-sige5:/# date
2023年 11月 03日 星期五 10:36:01 UTC
```

#### M.2接口

ArmSoM-sige5 提供 M.2 连接器：

- 产品的背面有一个带有1通道 PCIe 2.0 接口的 M.2 M Key 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

```
armsom@armsom-sige5:/# mkdir temp
armsom@armsom-sige5:/# mount /dev/nvme0n1 temp
```

#### 摄像头

##### MIPI-CSI

  摄像头采用IMX415模组，摄像头模组连接并上电后可以查看启动日志。

```bash
armsom@armsom-sige5:/# dmesg | grep imx415
[    2.547754] imx415 3-001a: driver version: 00.01.08
[    2.547767] imx415 3-001a:  Get hdr mode failed! no hdr default
[    2.547819] imx415 3-001a: Failed to get power-gpios
[    2.547826] imx415 3-001a: could not get default pinstate
[    2.547831] imx415 3-001a: could not get sleep pinstate
[    2.547850] imx415 3-001a: supply dvdd not found, using dummy regulator
[    2.547918] imx415 3-001a: supply dovdd not found, using dummy regulator
[    2.547945] imx415 3-001a: supply avdd not found, using dummy regulator
[    2.613843] imx415 3-001a: Detected imx415 id 0000e0
[    2.613890] rockchip-csi2-dphy csi2-dphy0: dphy0 matches m00_b_imx415 3-001a:bus type 5
[   18.386174] imx415 3-001a: set fmt: cur_mode: 3864x2192, hdr: 0
[   18.389067] imx415 3-001a: set exposure(shr0) 2047 = cur_vts(2250) - val(203)
```

  使用v4l2-ctl进行抓图
```
// MIPI-CSI1
armsom@armsom-sige5:/# v4l2-ctl -d /dev/video31 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll

// MIPI-CSI2
armsom@armsom-sige5:/# v4l2-ctl -d /dev/video22 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll
```

使用gst-launch-1.0可直接录像
```
// MIPI-CSI1
armsom@armsom-sige5:/# gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink

// MIPI-CSI2
armsom@armsom-sige5:/# gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
```
![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg)


#### MIPI DSI

ArmSoM-sige5 分辨率最高分辨率可达 4K@120Hz

## 产品证书

### CE / FC / RoHS



## 样品购买
ArmSoM 独立站: 
 
ArmSoM 速卖通官方店: 

ArmSoM 淘宝官方店:

OEM&ODM,  请联系: sales@armsom.org