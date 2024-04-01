---
description: ArmSoM-P2pro 采用Rockchip RK3308B-S，它配备了64位四核ARM Cortex-A35处理器，USB、以太网、蓝牙、无线连接和语音检测引擎，并具有丰富的音频接口（如MIC/PDM/SPDIF/I2S），使其非常适合物联网和语音应用程序
keywords: [armsom, armsom-p2pro, maker kit, rockchip, rk3308语音应用]
sidebar_label: "P2pro"
sidebar_position: 6
slug: /armsom-p2pro
---

# P2pro 产品简介
让我们在 5 分钟内了解 P2pro。

### 简介
ArmSoM-P2pro 采用Rockchip RK3308B-S，它配备了64位四核ARM Cortex-A35处理器，USB、以太网、蓝牙、无线连接和语音检测引擎，并具有丰富的音频接口（如MIC/PDM/SPDIF/I2S），使其非常适合物联网和语音应用程序。ArmSoM-p2pro 采用 1 个 RAM 大小 512MB DDR3，并使用 eMMC（选配） 或 SD 卡作为操作系统的存储。

![ArmSoM-P2pro](/img/link/p2pro.jpg)

### 关键参数

- SOC：瑞芯微 RK3308
- CPU：四核ARM Cortex-A35@ 1.2GHz，28纳米制程
- RAM：512MB DDR3
- Flash：8GB eMMC，选配
- WiFi&蓝牙：802.11 a/b/g/n/ac & BT5.0 (AP6256)
- 工作电压：具有宽范围的输入电压，5V（电压误差±5%）
- 工作温度：0℃ ~ 70℃
- 操作系统：
  - Rockchip官方支持：Debian11，Buildroot
  - 第三方支持：istoreos(openwrt)
- 重量：
- 大小：52.5mm × 65mm

## 硬件信息

### 硬件接口
![armsom-p2pro-layout](/img/link/armsom-p2pro-layout.png)

:::tip
P2pro的POE模块和eMMC模块为选配，默认没有
:::

### 硬件规格

|Model|ArmSoM-p2 pro|
| :--------: | :----------:|
|SOC	|RockChip RK3308B-S |
|CPU	|Quad-core ARM Cortex-A35@1.3GHz |
|RAM	|256MB/512MB, DDR3|
|FLash|8GB, eMMC选配。支持MicroSD卡扩展|
|网络	|1x 100Mbit/s Ethernet（支持选配PoE），802.11 a/b/g/n/ac & BT5.0 (AP6256)|
|USB|1x USB 2.0，1x USB Type-C|
|Audio输入|8x MIC(40PIN Header)，1x PDM/I2S(40PIN Header)|
|Audio输出|2x Line out(40PIN Header)，1x SPDIF out(40PIN Header)，1x Audio Jack|
|其他|1x SPI/UART(12PIN Header)，1x I2S(40PIN Header;8channel,SDI=4CH,SDO=4CH)，1x I2C(12PIN Header)，1x UART(12PIN Header)，2x PWM(12PIN Header)，1x ADC(40PIN Header)|
|按键 |1x Reset Button，1x Recovery Button |
|LED	|1x LED(RGB三色灯)|
|电源 |USB Type-C(5V/2A）|
|操作系统 |Debian11, Buildroot，istoreos|
|大小 |65mm x 52.5mm|
|重量 |30g|
|工作温度	| 0℃ ~ 70℃|

### 引脚定义

#### 40-pin 座子

<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|          | ADC_KEY_IN1 | <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     69   | GPIO2_A5 / I2S0_SCLK_TX  |  <div className='green'>5</div>  | <div className='black'>6</div>  | SPDIF_TX / GPIO0_C1    |    17      |
|     70     | I2S0_SCLK_RX / GPIO2_A6 / PDM_CLK   |  <div className='green'>7</div>  | <div className='green'>8</div>  |  I2S0_LRCK_TX / GPIO2_A7 |     71      |
|      68   |   I2S0_8CH_MCLK / GPIO2_A4  / I2S0_MCLK  |  <div className='black'>9</div>  | <div className='green'>10</div> |  I2S0_LRCK_RX  / GPIO2_B0  |     72      |
|     73 |  GPIO2_B1 / I2S0_SDO0 | <div className='green'>11</div>  | <div className='green'>12</div> |  PDM_SDI0  / GPIO2_B5 / I2S0_SDI0 |     77     |
|     74     |     GPIO2_B2 / I2S0_SDO1 | <div className='green'>13</div>  | <div className='black'>14</div> |  PDM_SDI1 / GPIO2_B6 /I2S0_SDI1  |   78  |
| 75  | GPIO2_B3 / I2S0_SDO2  | <div className='green'>15</div>  | <div className='green'>16</div> |  PDM_SDI2 / GPIO2_B7 / I2S0_SDI2  |     79     |
|   76  |  GPIO2_B4 / I2S0_SDO3  | <div className='green'>17</div> | <div className='green'>18</div> |  GPIO2_C0 / PDM_SDI3 / I2S0_SDI3 |  80  |
|           | GND  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |             |
|          | LINEOUT_L | <div className='green'>21</div>  | <div className='green'>22</div> | LINEOUT_R          |             |
|           | MICBIAS1  | <div className='green'>23</div>  | <div className='green'>24</div> |  MICBIAS2 |           |
|             |   MICP1    | <div className='green'>25</div>  | <div className='green'>26</div> |  MICN1 |          |
|         | MICP2  |  <div className='green'>27</div>  | <div className='green'>28</div>  |     MICN2     |       |
|         | MICP3  | <div className='green'>29</div>  | <div className='green'>30</div> |    MICN3     |       |
|          | MICP4 | <div className='green'>31</div>  | <div className='green'>32</div> |  MICN4  |         |
|          | MICP5  | <div className='green'>33</div>  | <div className='green'>34</div> |    MICN5     |             |
|      | MICP6  | <div className='green'>35</div>  | <div className='green'>36</div> |  MICN6  |     |
|      |    MICP7	| <div className='green'>37</div>  | <div className='green'>38</div> |  MICN7  |     |
|      |    MICP8   | <div className='green'>39</div>  | <div className='green'>40</div> |  MICN8  |     |

</div>

#### 12 PIN GPIO

<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|65|   UART0_TX / GPIO2_A1 / SPI0_TX   | <div className='green'>1</div>  |  <div className='green'>2</div>   |  I2C1_SDA / GPIO0_B3  |      11   |
|64| UART0_RX / GPIO2_A0 / SPI0_RX | <div className='green'>3</div>  |  <div className='green'>4</div>   |   I2C1_SCL / GPIO0_B4    |    12      |
|56 | SPI2_CS / I2C0_SCL / GPIO1_D1 / UART1_TX  |  <div className='green'>5</div>  | <div className='red'>6</div>  | VCC_IO +3.3V    |    17  |
|     57     | SPI2_CLK / I2C0_SDA / GPIO1_D0 / UART1_TX   |  <div className='green'>7</div>  | <div className='black'>8</div>  |  GND  |     |
|      55   |   JTAG_TMS / <div className='orange-txt'>UART2_TX_M0</div>  / GPIO1_C7 / SPI2_TX  |  <div className='green'>9</div>  | <div className='green'>10</div> |  PWM2  / GPIO0_B7 / I2C3_SDA  |     15      |
|     54 |  JTAG_TCK / <div className='orange-txt'>UART2_RX_M0</div> / GPIO1_C6 / SPI2_RX | <div className='green'>11</div>  | <div className='green'>12</div> |  PWM3  / GPIO0_C0 / IR_RX |     16   |
</div>



## 开发资料

### SDK源码

[ArmSoM-P2pro BSP](https://github.com/ArmSoM/armsom-p2pro-bsp)

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。

以下系统已由ArmSoM官方测试验证：

网盘地址：[百度网盘链接](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

**debain bullseye**

固件位置：3. Linux镜像/debian/ArmSoM-P2pro

**istoreos**

固件位置：3. Linux镜像/openwrt/ArmSoM-P2pro  

<!-- #### 发布信息

ArmSoM-P2pro 的首次官方发布通告请在以下链接查看：
[ArmSoM-P2pro 系统发布通知](http://forum.armsom.org/t/231115-system-release-notice-for-armsom-w3/139) -->

### 第三方系统

#### armbian
![armbian-logo](/img/armbian-logo.webp)

<!-- [Armbian_23.11.0-trunk_Armsom-w3_bookworm_legacy_5.10.160.img](https://pan.baidu.com/s/1URvyxKoox207rWwsMJmCyQ?pwd=arms)

[Armbian_23.11.0-trunk_Armsom-w3_bookworm_legacy_5.10.160_cinnamon_desktop.img](https://pan.baidu.com/s/1w7v7b1BJ1ubJYrIlFchqUw?pwd=arms)

[Armbian_23.11.0-trunk_Armsom-w3_jammy_legacy_5.10.160.img](https://pan.baidu.com/s/1-6qgLxC7CbiNObRmJdFTDQ?pwd=arms)

[Armbian_23.11.0-trunk_Armsom-w3_jammy_legacy_5.10.160_xfce_desktop.img](https://pan.baidu.com/s/1Pr0IJNrffxx7aLJ-eZLUUA?pwd=arms ) -->

社区适配中~


### 硬件资料

[ArmSoM-p2pro v1.1 原理图pdf](https://pan.baidu.com/s/1OGoqm8hKBFHANQ6FymMmaA?pwd=arms)

[ArmSoM-p2pro v1.1 底部&顶部](https://pan.baidu.com/s/1OGoqm8hKBFHANQ6FymMmaA?pwd=arms) 

[ArmSoM-p2pro v1.1 位号图](https://pan.baidu.com/s/1OGoqm8hKBFHANQ6FymMmaA?pwd=arms)

[ArmSoM-p2pro v1.1 datasheet](https://pan.baidu.com/s/1GBr2kwJ_-Xor_3thJ0iu5A?pwd=arms)  

:::tip 版本更改记录
v1.0 为内部版本暂不公布
:::


## 使用手册

P2pro 使用手册，帮助用户了解P2pro的基本使用和需要的准备工作。 

当您拿到产品的时候，您需要知道它的型号以及硬件版本，这些信息都可以在板子上的丝印找到，我们会尽可能详细地向您介绍产品的信息。

### 入门准备
在开始使用 ArmSoM-P2pro 之前，请准备好以下物品

**工具准备**
* P2pro 主板
* 电源: USB Type-C
  * 支持 5V/2A
* 系统安装（二选一）
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：
  * 板载eMMC启动
    * USB Type-C数据线，P2pro typec端口连接电脑，写入镜像。

**可选选项**
* Ethernet 线（网线）
  * P2pro 支持以太网上网，最高支持100M。
  * 网线用于将 P2pro 连接到本地网络和互联网。
* 无线WIFI
  * P2pro 支持无线上网功能，支持802.11 a/b/g/n/ac & BT5.0 (AP6256)
* 音频线
   * 可以使用标准 3.5 毫米插孔通过扬声器或耳机播放音频。
* USB-A型转USB-C型数据线

### 烧录方式选择

[系统镜像烧录](../general-tutorial/flash-img)


#### 接口设置

如果你是首次使用 ArmSoM-P2pro，请先熟悉下 [外设接口](#实物图)，以便于你更好的理解后续的内容。

**100M 以太网口**

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-P2pro 上的 RJ45 端口插入，网口灯闪烁确认硬件正常连接。

手动配置以太网
- 切换root用户

```bash
sudo su
```

- 通过命令 ifconfig 检查以太网是否正常，它会显示网卡 eth0 以及以太网 IP 地址。 此外，使用工具 ping 判断是否连通网络。

```bash
ifconfig
ping www.baidu.com
```

- 如果无法ping通，尝试

```bash
$ sudo dhclient eth0
```

**调试串口**
调试串口的位置在12pin-head的 9，11脚

| P2pro       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 8) | <---> | GND |
| **TX** (pin 9)  | <---> | RX |
| **RX** (pin 11) | <---> | TX |

![armsom-p2pro-debug](/img/link/armsom-p2pro-debug.png)

**USB接口**
ArmSoM-P2pro 提供一个 USB 2.0 端口。


## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/p2pro](https://www.armsom.org/product-page/p2pro)
 
ArmSoM 速卖通官方店: [https://www.aliexpress.com/item/3256805779421715.html](https://www.aliexpress.com/item/3256805779421715.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=735000017740](https://item.taobao.com/item.htm?id=735000017740)

OEM&ODM,  请联系: sales@armsom.org