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
- RAM：4GB 32bit LPDDR4x，默认4GB，RK3528 最大支持4GB
- Flash：32GB eMMC，默认eMMC 32GB
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
            <i>📝</i>
        </div>
        <div class="content">
            <h2>Sige使用手册</h2>
            <p>如何开始使用你的Sige</p>
        </div>
    </div>
</a>


## 硬件信息

### 硬件接口

![ArmSoM-Sige1 front & back](/img/sige/armsom-sige1-layout.jpg)
:::tip
Sige1上有两个长得一样的Type-C接口，其中Type-C(DC IN)才是电源接口。
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
            <th><li>1x 2.5G网口</li><li>1x 千兆网口</li><li>板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 和 BT5 (rtl8852bs)</li></th>
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
            <th><li>Rockchip官方支持：Android 9.0_box，Debian11，Buildroot</li><li>第三方支持：Armbian，Istoreos</li></th>
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

### RK3528框图

![RK3528](/img/sige/rk3528.png)

### 引脚定义

#### 40-pin 座子

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

#### Fan
0.8mm 连接器(CON3102)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | 地 |
|3    | PWM | PWM控制 |

#### EARPHONE
0.8mm 连接器(CON3101)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | AOR         | 右声道      |
|2          | AOL         | 左声道      |
|3          | GND         | 地          |

## 开发资料

### SDK源码

ArmSoM github source code : [https://github.com/ArmSoM/armsom-build](https://github.com/ArmSoM/armsom-build)

ArmSoM-Sige1 kernel: 

ArmSoM-Sige1 uboot: 

openwrt(istoreos): [https://github.com/istoreos/istoreos](https://github.com/istoreos/istoreos)

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。

以下系统已由ArmSoM官方测试验证：

网盘地址：[百度网盘链接/general-tutorial/cloud-disk)

**debain bullseye**

固件位置：3. Linux镜像/debian/ArmSoM-Sige1 - 

**安卓14**

固件位置：4. 安卓镜像/ArmSoM-Sige1 - 

**openwrt**

固件位置：3. Linux镜像/openwrt/ArmSoM-Sige1- [百度网盘](https://pan.baidu.com/s/1nvlyxaDbpAlKoZYknDSe4g?pwd=arms )

### 第三方镜像

**armbian**

![armbian-logo](/img/armbian-logo.webp)

固件位置：3. Linux镜像/armbian/ArmSoM-Sige1 - 

[armbian/community/releases](https://github.com/armbian/community/releases) 

**Ubuntu**  

固件位置: 3. Linux Images/ubuntu/ArmSoM-Sige1 - 


### 硬件资料

获取 Sige1 原理图、DXF等硬件资料

点击进入链接: [百度网盘链接](/general-tutorial/cloud-disk)

<!-- * [ArmSoM-Sige1_1V0 原理图pdf]() - 原理图pdf

* [ArmSoM-Sige1_1V1 底部，顶部]() - 2D CAD 文件下载

* [ArmSoM-Sige1_1V1 位号图]() -  位号图下载

* [ArmSoM-Sige1 元件datasheet]() -  datasheet下载 -->


## 使用手册

Sige1 使用手册，帮助用户了解Sige1的基本使用和需要的准备工作。 当您拿到产品的时候，您需要知道它的型号以及硬件版本，这些信息都可以在板子上的丝印找到。我们会尽可能详细地向您介绍产品的信息。

### 入门准备
在开始使用 ArmSoM-Sige1 之前，请准备好以下物品

#### 工具准备
* Sige1 主板
* 电源: USB Type-C
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
    * USB Type-C数据线，从 typec 端口在 Sige1 上写入镜像，您需要 Type-C 数据线连接 Sige1 和 PC。

#### 可选选项
* USB 键盘鼠标
* HDMI显示器和HDMI线
  * Sige1配备了全尺寸 HDMI 接口，最高支持 8K@60 显示。
  * HDMI EDID用于确定最佳显示分辨率。 在支持 1080p（或 4K/8K）的显示器和电视上，将选择此分辨率。 如果不支持 1080p，EDID会找到的下一个可用分辨率。
* Ethernet 线（网线）
  * Sige1 支持以太网上网，最高支持2.5Gb。
  * 网线用于将 Sige1 连接到本地网络和互联网。
* 音频线
  * 可以使用0.8mm立式插座。
* USB-A型转USB-C型数据线

### 烧录方式选择

[系统镜像烧录](/general-tutorial/flash-img)
### 接口设置

如果您是首次使用 ArmSoM-Sige1，请先熟悉下 [外设接口](#硬件接口)，以便于您更好的理解后续的内容。

#### 调试串口

如下所示连接 USB 转 TTL 串口线：

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)

| Sige1       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |


#### 千兆/2.5G 以太网口

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-Sige1 上的 RJ45 端口插入，系统桌面就会弹出有线连接。

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
armsom@armsom-sige1:/# nmcli r wifi on
# 2. Scan WIFI
armsom@armsom-sige1:/# nmcli dev wifi
# 3. Connect to WIFI network
armsom@armsom-sige1:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

#### BT

```
# 1. 激活蓝牙
armsom@armsom-sige1:/# service bluetooth start
# 2. 进入bluetoothctl
armsom@armsom-sige1:/# bluetoothctl
# 3. 输入以下命令即可连接
armsom@armsom-sige1:/# power on
armsom@armsom-sige1:/# agent on
armsom@armsom-sige1:/# default-agent
armsom@armsom-sige1:/# scan on
armsom@armsom-sige1:/# pair yourDeviceMAC
```

#### HDMI

ArmSoM-Sige1 有HDMI 输出端口，支持 CEC 和 HDMI 2.1，分辨率最高支持 8Kp60。

#### USB接口

ArmSoM-Sige1 提供两个 USB 2.0 端口。


#### 音频

查看系统中的声卡。

```bash
armsom@armsom-sige1:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiphdmi [rockchip,hdmi], device 0: rockchip,hdmi i2s-hifi-0 [rockchip,hdmi i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: rk3528acodec [rk3528-acodec], device 0: ffb90000.sai-rk3528-hifi ffe10000.acodec-0 [ffb90000.sai-rk3528-hifi ffe10000.acodec-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```


播放音乐

```bash
armsom@armsom-sige1:/# aplay -D plughw:1,0 ./usr/share/sounds/alsa/Front_Right.wav
```


#### 风扇

Sige1 配备一个 5V 的风扇，使用 0.8mm 的连接器

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
armsom@armsom-Sige1:/# cat /sys/class/hwmon/hwmon1/pwm1
```

#### Type-C

Sige1 配备 USB Type‑C™ 2.0 端口，支持OTG

#### 40Pin

Sige1 提供了一个40pin针脚的GPIO座子，兼容于市面上大部分传感器的应用。

#### RGB LED

Sige1 具有两个用户灯 LED 绿灯和红灯。

- 用户绿灯
  默认情况下，其常亮表示系统运行正常。

- 用户红灯
  默认情况下不亮，可由用户自行操控。

用户可通过命令控制

```
armsom@armsom-sige1:/# sudo su
armsom@armsom-sige1:/# echo timer > /sys/class/leds/red\:status/trigger
armsom@armsom-sige1:/# echo activity > /sys/class/leds/red\:status/trigger
```

#### RTC

- Sige1配备了一颗RTC IC **hym8563**。
- 首先，使用2pin的排针接口，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc hym8563 设备已创建

```bash
armsom@armsom-Sige1:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
armsom@armsom-sige1:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
armsom@armsom-sige1:/# date
2023年 11月 03日 星期五 10:33:12 UTC
armsom@armsom-sige1:/# hwclock -w
armsom@armsom-sige1:/# hwclock -r
armsom@armsom-sige1:/# poweroff
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并启动Sige7，检查RTC是否与系统时钟同步

```bash
armsom@armsom-sige1:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
armsom@armsom-sige1:/# date
2023年 11月 03日 星期五 10:36:01 UTC
```

## 产品证书

### CE / FC / RoHS



## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/Sige1](https://www.armsom.org/product-page/Sige1)
 
ArmSoM 速卖通官方店: [https://www.aliexpress.com/store/1102800175](https://www.aliexpress.com/store/1102800175) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=757023687970](https://item.taobao.com/item.htm?id=757023687970)

OEM&ODM,  请联系: sales@armsom.org


