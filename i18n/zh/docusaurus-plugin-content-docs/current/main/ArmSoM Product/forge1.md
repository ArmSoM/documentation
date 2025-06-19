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
Forge1 是一款工业级产品，采用RK3506J 三核Cortex-A7应用处理器，工作温度可达 -40℃~85℃，专为工业网关、HMI、PLC、手持POS和家电显控应用而设计。

嵌入式2D硬件引擎和显示输出引擎，用于最小化CPU开销以满足图像显示要求。

丰富的周边接口，如RS485、USB2、RMII、CAN、DSMC、Flexbus等，可以满足不同的应用开发需求，减少硬件开发复杂性和开发成本。

![ArmSoM-Forge1](/img/forge/forge1-banner-zh.jpg)

## 硬件信息

### 硬件接口
![armsom-forge1-front-back](/img/forge/armsom-forge1-layout.jpg)

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
            <th><li>DC IN 12V/2A</li><li>Typec 5V/2A</li></th>
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
  src="./img/forge/rk3506j.png"
  alt="rk3506j block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

####  40-PIN 座子
<div className='gpio_style'>

| GPIO Number |  功能 |   Pin    |  Pin     |  功能  | GPIO Number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     4     |   RM_IO4/SAI0_SDI0/GPIO0_A4_d| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     5     | RM_IO5/SAI0_SDI1/GPIO0_A5_d  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|59|RM_IO31/GPIO1_D3_d |  <div className='green'>7</div>  | <div className='green'>8</div>  |<div className='orange-txt'>UART0_TX</div>RM_IO22/JTAG_TCK_M1/GPIO0_C6_u   |     22      |
||GND|  <div className='black'>9</div>  | <div className='green'>10</div> |<div className='orange-txt'>UART0_RX</div>RM_IO23/JTAG_TMS_M1/GPIO0_C7_u  |     23      |
|58|RM_IO30/GPIO1_D2_d| <div className='green'>11</div>  |<div className='green'>12</div>|RM_IO29/GPIO1_D1_d|57|
| 52 |DSMC_SLV_D2/FLEXBUS0_D7/DSMC_D11/VO_LCDC_D7/GPIO1_C4_d | <div className='green'>13</div>  | <div className='green'>14</div> |DSMC_SLV_D3/FLEXBUS0_D6/DSMC_D12/VO_LCDC_D6/GPIO1_C5_d|53|
|51  |RM_IO28/GPIO1_C3_d | <div className='green'>15</div>  | <div className='green'>16</div> |RM_IO27/GPIO1_C2_d| 50 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |GPIO1_C1_d    |  49 |
| 48 |GPIO1_C0_d| <div className='green'>19</div>  | <div className='green'>20</div> |SARADC_IN2/GPIO4_B2_z| 138  |
| 46 |GPIO1_B6_d| <div className='green'>21</div>  | <div className='green'>22</div> |GPIO1_B7_d | 47  |
| 44 |GPIO1_B4_d| <div className='green'>23</div>  | <div className='green'>24</div> |GPIO1_B5_d | 45 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |RM_IO26/GPIO1_B3_d|     43      |
|  41 |RM_IO24/GPIO1_B1_d|  <div className='green'>27</div>  | <div className='green'>28</div> |RM_IO25/GPIO1_B2_d| 42 |
|40  |GPIO1_B0_d| <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |           |
|38 |GPIO1_A6_d| <div className='green'>31</div>  | <div className='green'>32</div> |GPIO1_A7_d|    39     |
| 37  |GPIO1_A5_d| <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |      |
| 35  |GPIO1_A3_d| <div className='green'>35</div>  | <div className='green'>36</div> |GPIO1_A4_d   |    36      |
|33 |GPIO1_A1_d | <div className='green'>37</div>  | <div className='green'>38</div> |GPIO1_A2_d|     34     |
| |  GND | <div className='black'>39</div>  | <div className='green'>40</div> |GPIO1_A0_d|     32     |

</div>

#### 14-PIN Header

| Pin  | Assignment   | Description                  | Pin  | Assignment   | Description                  |
|------|--------------|------------------------------|------|--------------|------------------------------|
| 1    | RS485_A      | RS485 差分信号正极           | 2    | RS485_B      | RS485 差分信号负极           |
| 3    | CAN_L        | CAN 总线差分信号低电平        | 4    | CAN_H        | CAN 总线差分信号高电平        |
| 5    | GND          | 系统接地                     | 6    | GND          | 系统接地（冗余设计）         |
| 7    | MICIN_P      | 麦克风输入正极（差分信号）    | 8    | MICIN_N      | 麦克风输入负极（差分信号）    |
| 9    | MICIN_P      | 麦克风输入正极（备用通道）    | 10   | MICIN_N      | 麦克风输入负极（备用通道）    |
| 11   | GND          | 音频信号接地                 | 12   | VBAT_RTC     | RTC 实时时钟电池供电输入     |
| 13   | SPK_P        | 扬声器输出正极（差分驱动）    | 14   | SPK_N        | 扬声器输出负极（差分驱动）    |


## 开发资料

### SDK源码
<div class="cards">
    <a href="https://github.com/ArmSoM/rk3506-rkr4.2-sdk" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📚</i>
            </div>
            <div class="content">
                <h2>源码</h2>
                <p>适用于 ARM 开发板的 Linux</p>
            </div>
        </div>
    </a>
</div>

### 官方镜像

ArmSoM团队以 buildroot 为基础作为Forge1官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

以下系统已由ArmSoM官方测试验证：

网盘地址：

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|buildroot | buildroot for Forge1 :  <br/> Linux Kernel 6.1, 支持RT-Thread 4.1, <br/>支持裸机程, 序支持多核异构AMP,<br/> Preempt-RT/Xenomai实时补丁, <br/>轻量级UI框架 LVGL。|[百度网盘](https://pan.baidu.com/s/1YRHG5Ki8d6ECrQiyWbzIvw?pwd=arms)  |

### 硬件资料

获取 Forge1 原理图、DXF等硬件资料

<div class="cards">
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Forge1 SCH</h2>
            </div>
        </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Forge1 2D</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Forge1 位号图</h2>
        </div>
    </div>
</a>
</div>


## Forge1 使用手册

Forge1 使用手册，帮助用户了解Forge1产品的基本使用和需要的准备工作，开始使用你的Forge1🚀

### 工具准备
* 电源（二选一）
  * DC IN 12V/1A
  * Typec 5V/2A
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

## 接口使用

如果您是首次使用 ArmSoM-Forge1 产品，请先熟悉下各产品硬件接口，以便于您更好的理解后续的内容。

| 硬件接口  | [Forge1](./armsom-forge1#硬件接口) |
| --------------- | ----- | 

### 调试串口

如下所示连接 USB 转 TTL 串口线：

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)

| Forge1       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |


### 以太网口

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

### USB

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

### 音频

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

### RTC

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

### MIPI DSI

ArmSoM-Forge1最大输出分辨率为1280x1280@60fps

![armsom-forge1-display](/img/forge/armsom-forge1-display.jpg)

### CAN FD
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

### CE / FCC / RoHS

## 供货声明

ArmSoM-Forge1 将至少生产到 2035 年 5 月。

## 配件

我们为 ArmSoM-Sige 设计的官方配件旨在帮助您从计算机获得最佳性能。

<div class="cards">
<a href="./armsom-display-7-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-display-7hd.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Display-7-hd</h2>
        <p>7 英寸触摸屏显示器，可用于娱乐系统和信息仪表板等交互式项目。</p>
    </div>
</div>
</a>
</div>

## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/forge1](https://www.armsom.org/product-page/forge1)
 
ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256807356692995.html](https://aliexpress.com/item/3256807356692995.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=895906881225](https://item.taobao.com/item.htm?id=895906881225)

OEM&ODM,  请联系: sales@armsom.org

## 专家视角

- [CNX](https://www.cnx-software.com/2025/03/26/armsom-forge1-industrial-rockchip-rk3506j-sbc/): $23 ArmSoM Forge1 industrial SBC is powered by Rockchip RK3506J SoC
- [itsfoss](https://news.itsfoss.com/armsom-forge1/): ArmSoM's Forge1 Looks Like A Versatile Solution for Embedded and Multimedia Applications
- [electronics-lab](https://www.electronics-lab.com/armsom-forge1-sbc-features-rockchip-rk3506j-soc-with-cortex-a7-m0-cores-for-industrial-and-audio-applications/)

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