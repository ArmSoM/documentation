---
description: ArmSoM-forge1 采用Rockchip RK3528 新一代的智能机顶盒和多媒体应用芯片，可应用于IPTV/OTT盒子、云终端、融合类产品，是高性能低功耗的4K播放器，解码能力最高支持到8K，同时也支持了AVS2和HDR VIVID标准。
keywords: [armsom, armsom-forge1, maker kit, rockchip, rk3506产品介绍]
sidebar_label: "Forge1"
sidebar_position: 10
slug: /armsom-forge1
---

# Forge1 产品简介

让我们在 5 分钟内了解 Forge1。

##  概述
RK3506J是一款高性能的三核Cortex-A7应用处理器，专为智能语音交互、音频输入/输出处理、图像输出处理和其他数字多媒体应用而设计。
嵌入式2D硬件引擎和显示输出引擎，用于最小化CPU开销以满足图像显示要求。
嵌入丰富的周边接口，如SAI、PDM、SPDIF、Audio DSM、Audio ADC、USB2 OTG、RMII、CAN等，可以满足不同的应用开发需求，减少硬件开发复杂性和开发成本。

## 硬件信息

### 硬件接口
![armsom-forge1-front-back](/img/forge1/armsom-forge1-layout.jpg)

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
            <th><li>512MB DDR3L</li></th>
        </tr>
        <tr >
            <th>存储</th>
            <th><li>512MB NAND</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>2 × 百兆以太网</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>1 x MIPI DSI (2Lane 1.5Gbps)</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1 × Speaker</li><li> 1 × MIC </li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>1 × Type C（only pd & Programming）</li>
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
            <th><li>Rockchip官方支持：buildroot</li></th>
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

### RK3506j 框图
<details>
    <summary>
      RK3506j 框图
    </summary>
        <img
  src="./img/forge1/rk3506j.png"
  alt="rk3506j block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

####  40-PIN 座子
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


## 开发资料

### SDK源码
<div class="cards">
    <a href="https://github.com/ArmSoM/rk3506-rkr4.2-sdk" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📚</i>
            </div>
            <div class="content">
                <h2>github源码</h2>
                <p>适用于 ARM 开发板的 Linux</p>
            </div>
        </div>
    </a>
</div>

### 官方镜像

ArmSoM团队以 buildroot bullseye 为基础作为官方操作系统。

以下系统已由ArmSoM官方测试验证：

### 硬件资料

获取 forge1 原理图、DXF等硬件资料


## Forge1 使用手册

Forge1 使用手册，帮助用户了解Forge1产品的基本使用和需要的准备工作，开始使用你的Forge1🚀

### 工具准备
* 电源（12V/2A）
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在Forge系列上写入镜像，您需要Type-C数据线连接 Forge系列和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器

**可选选项**
* 调试串口
* Ethernet 线（网线）

### 烧录方式选择
<div class="cards">
    <a href="./getting-start/flash-img" class="card-link">
        <div class="card">
            <div class="icon">
                <i>🎇</i>
            </div>
            <div class="content">
                <h2>系统镜像烧录</h2>
            </div>
        </div>
    </a>
</div>

### 接口使用

如果您是首次使用 ArmSoM-Forge1 产品，请先熟悉下各产品硬件接口，以便于您更好的理解后续的内容。

| 硬件接口  | [Forge1](./armsom-forge1#硬件接口) |
| --------------- | ----- | 

#### 调试串口

如下所示连接 USB 转 TTL 串口线：

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)

| Forge1       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |


#### 以太网口

1. 首先将网线的一端插入 ArmSoM-Forge1 的以太网接口，网线的另一端接入路由器，并确保
网络是畅通的
2. 系统启动后会通过 DHCP 自动给以太网卡分配 IP 地址，不需要其他任何配置
3. 在ArmSoM-Forge1 的 Linux 系统中查看 IP 地址的命令如下所示

```bash
root@armsom:/# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: can0: <NOARP,ECHO> mtu 16 qdisc noop state DOWN group default qlen 10
    link/can
3: eth0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 9e:06:ad:d5:e3:91 brd ff:ff:ff:ff:ff:ff
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 7e:09:de:1d:0c:46 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.150/24 brd 192.168.1.255 scope global dynamic noprefixroute eth1
       valid_lft 43173sec preferred_lft 37773sec

```
4. 使用工具 ping 判断是否连通网络。

测试网络连通性的命令如下，ping 命令可以通过 Ctrl+C 快捷键来中断运行
```bash
root@armsom:/# ping www.baidu.com
PING www.baidu.com (183.2.172.17): 56 data bytes
64 bytes from 183.2.172.17: seq=0 ttl=52 time=10.838 ms
64 bytes from 183.2.172.17: seq=1 ttl=52 time=10.320 ms
64 bytes from 183.2.172.17: seq=2 ttl=52 time=11.193 ms
64 bytes from 183.2.172.17: seq=3 ttl=52 time=10.555 ms
64 bytes from 183.2.172.17: seq=4 ttl=52 time=19.587 ms
64 bytes from 183.2.172.17: seq=5 ttl=52 time=24.736 ms
^C
--- www.baidu.com ping statistics ---
6 packets transmitted, 6 packets received, 0% packet loss
round-trip min/avg/max = 10.320/14.538/24.736 ms
```

#### USB

|  型号  | Forge1 |
| ----- |  ----- |
| USB   | 1* Type-C (PD & Programming), 1* USB 2.0 |

**连接 USB 存储设备测试**
1. 首先将 U 盘或者 USB 移动硬盘插入 Forge1 产品的 USB 接口中
2. 执行下面的命令如果能看到 sdX 的输出说明 U 盘识别成功
```
root@armsom:/# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0  122880000 sda
```
3. 使用 mount 命令可以将 U 盘挂载到/mnt 中，然后就能查看 U 盘中的文件了

```
root@armsom:/# sudo mount /dev/sda1 /test/
```

4. 挂载完后通过 df -h 命令就能查看 U 盘的容量使用情况和挂载点

```
root@armsom:/test# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /test
```

#### 音频

查看系统中的声卡。

```bash
root@armsom:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiprk730 [rockchip-rk730], device 0: dailink-multicodecs HiFi-0 [dailink-multicodecs HiFi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

录音
```bash
arecord -D hw:0,0 -f S16_LE -t wav -c2 -r 16000 -d 3 t.wav
```

播放音乐

```bash
aplay t.wav
```

#### RTC

- Forge1配备了一颗RTC IC **LK8563S**。
- 首先，使用2pin的排针接口，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc LK8563S 设备已创建

```bash
root@armsom:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
root@armsom:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
root@armsom:/# date
2023年 11月 03日 星期五 10:33:12 UTC
root@armsom:/# hwclock -w
root@armsom:/# hwclock -r
root@armsom:/# poweroff
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并启动Forge1，检查RTC是否与系统时钟同步

```bash
root@armsom:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
root@armsom:/# date
2023年 11月 03日 星期五 10:36:01 UTC
```

#### MIPI DSI

ArmSoM-Forge1最大输出分辨率为1280x1280@60fps

#### CAN FD
查询当前⽹络设备:
```bash
root@armsom:/# ifconfig -a
can0      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:45
```
CAN启动：

```bash
关闭CAN:
ip link set can0 down
设置仲裁段1M波特率，数据段3M波特率:
ip link set can0 type can bitrate 1000000 dbitrate 3000000 fd on
打印can0信息:
ip -details link show can0
启动CAN:
ip link set can0 up
```
CAN FD发送:
```bash
发送（标准帧,数据帧,ID:123,date:DEADBEEF）:
cansend can0 123##1DEADBEEF
发送（扩展帧,数据帧,ID:00000123,date:DEADBEEF）:
cansend can0 00000123##1DEADBEEF
```
CAN FD接收:
```bash
开启打印，等待接收:
candump can0 &
```

## 产品证书

### CE / FC / RoHS

## 供货声明

ArmSoM-Forge1 将至少生产到 2035 年 5 月。

## 配件

## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/forge1](https://www.armsom.org/product-page/forge1)
 
ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256807356692995.html](https://aliexpress.com/item/3256807356692995.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=895906881225](https://item.taobao.com/item.htm?id=895906881225)

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