---
description: ArmSoM-P2pro 采用Rockchip RK3308B-S，它配备了64位四核ARM Cortex-A35处理器，USB、以太网、蓝牙、无线连接和语音检测引擎，并具有丰富的音频接口（如MIC/PDM/SPDIF/I2S），使其非常适合物联网和语音应用程序
keywords: [armsom, armsom-p2pro, maker kit, rockchip, rk3308语音应用]
sidebar_label: "P2pro"
sidebar_position: 11
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
- 重量：42g
- 大小：52.5mm × 65mm

## 硬件信息

### 硬件接口
![armsom-p2pro-layout](/img/link/armsom-p2pro-layout.png)

:::tip
P2pro的POE模块和eMMC模块为选配，默认没有
:::


### rk3308b-s 框图
<details>
    <summary>
      rk3308b-s 框图
    </summary>
    <img
  src="./img/sige/rk3308b-s.png"
  alt="rk3308b-s block diagram"
  className="session-details-live-video"/>
</details>


### 硬件规格
<details>
    <summary>
      P2pro 硬件规格
    </summary>

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

</details>

### 引脚定义

<details>
    <summary>
        40 PIN GPIO
    </summary>
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
</details>

<details>
    <summary>
        12 PIN GPIO
    </summary>
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
</details>


## 开发资料
### SDK源码

<div class="cards">
    <a href="https://github.com/ArmSoM/armsom-p2pro-bsp" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📚</i>
            </div>
            <div class="content">
                <h2>P2pro源码</h2>
                <p>适用于 ARM 开发板的 Linux</p>
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
|![debian-bullseye](/img/sige/debian11.png) | debian11 for P2pro :  <br/> Debian 11（代号为"Bullseye"）是Debian项目的最新稳定版本，它于2021年8月14日发布。Debian是一个以自由软件为基础的操作系统，以稳定性、安全性和开放性著称。|[百度网盘](https://pan.baidu.com/s/1P1qoG5AKONyQAcoR90JOSw?pwd=arms)  |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
| Openwrt | Openwrt for P2pro :    <br/>Openwrt是一个高度模块化、高度自动化的嵌入式Linux系统，拥有强大的网络组件和扩展性。|[百度网盘](https://pan.baidu.com/s/1aJgNfJLOLmYV_C1UrVy5dA?pwd=arms)  |

### 硬件资料

获取 P2pro 原理图、DXF等硬件资料

<a href="https://pan.baidu.com/s/1mTLGhr7PGItn50keQynYRw?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

<div class="cards">
    <a href="https://pan.baidu.com/s/1mTLGhr7PGItn50keQynYRw?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>P2pro SCH</h2>
            </div>
        </div>
</a>

<a href="https://pan.baidu.com/s/1mTLGhr7PGItn50keQynYRw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>P2pro 2D</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1mTLGhr7PGItn50keQynYRw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>P2pro SMD</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1mTLGhr7PGItn50keQynYRw?pwd=arms" class="card-link">
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
<br/>

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

[系统镜像烧录](/general-tutorial/flash-img)


#### 接口设置

如果你是首次使用 ArmSoM-P2pro，请先熟悉下 [外设接口](#硬件接口)，以便于你更好的理解后续的内容。

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

#### 调试串口
调试串口的位置在12pin-head的 9，11脚

| P2pro       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 8) | ---> | GND |
| **TX** (pin 9)  | ---> | RX |
| **RX** (pin 11) | ---> | TX |

![armsom-p2pro-debug](/img/link/armsom-p2pro-debug.png)

#### WIFI
```
# 1. Open the WIFI
root@linaro-alip:/# nmcli r wifi on
# 2. Scan WIFI
root@linaro-alip:/# nmcli dev wifi
# 3. Connect to WIFI network
root@linaro-alip:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

| p2pro wifi       | 2.4G  | 5G |
| --------------- | ----- | ------ |
| debian | Tx 25 Mbps Rx 46 Mbps | Tx 130 Mbps Rx 132 Mbps  |
| istoreos  | Tx 131 Mbps Rx 130 Mbps | Tx 194 Mbps Rx 193 Mbps|

#### BT

```
# 1. 激活蓝牙
root@linaro-alip:/# service bluetooth start
# 2. 进入bluetoothctl
root@linaro-alip:/# bluetoothctl
# 3. 输入以下命令即可连接
root@linaro-alip:/# power on
root@linaro-alip:/# agent on
root@linaro-alip:/# default-agent
root@linaro-alip:/# scan on
root@linaro-alip:/# pair yourDeviceMAC
```


#### 音频

查看系统中的声卡

```bash
root@linaro-alip:~# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiprk3308a [rockchip,rk3308-acodec], device 0: dailink-multicodecs ff560000.acodec-0 [dailink-multicodecs ff560000.acodec-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 7: Loopback [Loopback], device 0: Loopback PCM [Loopback PCM]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 7: Loopback [Loopback], device 1: Loopback PCM [Loopback PCM]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
```

播放音乐

```
root@linaro-alip:/# aplay -D plughw:0,0  ./usr/share/sounds/alsa/Rear_Right.wav
```

#### USB接口
ArmSoM-P2pro 提供一个 USB 2.0 端口。

#### mic接口

![armsom-p2pro-8mic](/img/link/armsom-p2pro-8mic.jpg)

**查看内置Codec增益所有状态**

```
amixer contents
```

耳机输出声音太小

查看codec当前左右声道输出增益：
```
amixer cget name='DAC HPOUT Left Volume'
amixer cget name='DAC HPOUT Right Volume'
```

根据所需调节基础增益：
```
amixer cset name='DAC HPOUT Left Volume' 18
amixer cset name='DAC HPOUT Right Volume' 18
```

调节音量(百分比)：

```
amixer cset name='Master Playback Volume' 40
```

**录音**

内置codec的mic增益调整

- Group 0: mic1/mic2; Group 1: mic3/mic4; Group 2: mic5/mic6; Group 3: mic7/mic8

- “ADC MIC”前缀表示调节前级MIC PGA线性放大增益

- “ADC ALC”前缀表示调节后级ALC线性放大增益

```
amixer cset name='ADC MIC Group 0 Right Gain'  3
amixer cset name='ADC MIC Group 0 Left Gain'  3
amixer cset name='ADC ALC Group 0 Left Volume'  31
amixer cset name='ADC ALC Group 0 Right Volume'  31

amixer cset name='ADC MIC Group 1 Right Gain'  3
amixer cset name='ADC MIC Group 1 Left Gain'  3
amixer cset name='ADC ALC Group 1 Left Volume'  31
amixer cset name='ADC ALC Group 1 Right Volume'  31

amixer cset name='ADC MIC Group 2 Right Gain'  3
amixer cset name='ADC MIC Group 2 Left Gain'  3
amixer cset name='ADC ALC Group 2 Left Volume'  31
amixer cset name='ADC ALC Group 2 Right Volume'  31

amixer cset name='ADC MIC Group 3 Right Gain'  3
amixer cset name='ADC MIC Group 3 Left Gain'  3
amixer cset name='ADC ALC Group 3 Left Volume'  31
amixer cset name='ADC ALC Group 3 Right Volume'  31

export ALSA_LIB_ADD_GAIN=3

// 采集数据 采样率大于16000hz时，录音命令要加上--period-size=1024 --buffer-size=4096参数
arecord -D hw:0,0 -c 8 -r 44100 -f S16_LE --period-size=1024 --buffer-size=4096 test.wav

```

## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/p2pro](https://www.armsom.org/product-page/p2pro)
 
ArmSoM 速卖通官方店: [https://www.aliexpress.com/item/3256805779421715.html](https://www.aliexpress.com/item/3256805779421715.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=735000017740](https://item.taobao.com/item.htm?id=735000017740)

OEM&ODM,  请联系: sales@armsom.org