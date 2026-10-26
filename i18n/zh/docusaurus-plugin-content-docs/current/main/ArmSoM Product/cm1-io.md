---
description: CM1-IO是 ArmSoM CM1的 IO 板，尺寸为 100x80x29 毫米
keywords: [armsom, armsom-CM1, RK3506  Development Boards, RK3506 Core borad, rockchip]
sidebar_label: "CM1-IO"
sidebar_position: 6
slug: /armsom-cm1-io
image: /img/cm/cm1-io-layout.png
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# CM1-IO 产品简介

CM1-IO是 ArmSoM CM1的 IO 板，尺寸为 100x70x19 毫米，底板板载USB接口/WIFI/蓝牙/音频/百兆网络x2，它是一款专为创客、学习者和开发者设计的最小系统板。

## 使用手册

在开始使用 CM1-IO 之前，请准备好以下物品。

:::tip
下文用 CM1 Kit 表示 CM1 + CM1-IO
:::

### 工具准备
* 电源
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在CM1 kit上写入镜像，您需要Type-C数据线连接 CM1 kit和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：


**可选选项**
* USB 转串口
* Ethernet 线（网线）
* LCD显示屏
* 音频线, 0.8mm立式插座。
    3.5mm 耳机

### 电源

* 支持 DC 12V适配器，2.5mm

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

如果您是首次使用 CM1 Kit，请先熟悉下各产品[硬件接口](./armsom-cm1#硬件接口)，以便于您更好的理解后续的内容。

### 调试口

如下所示连接 USB 转 TTL 串口线：

![cm1io-debug](/img/cm/armsom-cm1-debug.png)

如下所示连接 USB 转 TTL 串口线：

| CM1-IO       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |

PC端也可以连接Type-C接口进行adb调试

### 以太网口

1. 首先将网线的一端插入 CM1 Kit 的以太网接口，网线的另一端接入路由器，并确保
网络是畅通的
2. 系统启动后会通过 DHCP 自动给以太网卡分配 IP 地址，不需要其他任何配置
3. 在CM1 Kit的 Linux 系统中查看 IP 地址的命令如下所示

```bash
root@armsom:/# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: can0: <NOARP,ECHO> mtu 16 qdisc noop state DOWN group default qlen 10
    link/can
3: eth0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 16:b1:42:f4:f6:69 brd ff:ff:ff:ff:ff:ff
4: eth1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 32:81:2f:73:98:c8 brd ff:ff:ff:ff:ff:ff
5: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether cc:64:1a:61:e9:b5 brd ff:ff:ff:ff:ff:ff
```

CM1 Kit 启动后查看 IP 地址有三种方法：

- 接[调试串口](#调试串口)终端输入 ip a 命令来查看 IP 地址
- window下PC端接Type-C，终端输入adb shell连接板端，ip a 命令来查看 IP 地址
- 通过路由器的管理界面来查看 CM1 Kit 网口的 IP 地址。不过这种方法经常有人会无法正常看到CM1 Kit 的 IP 地址。如果看不到，调试方法如下所示：
    - 首先检查 Linux 系统是否已经正常启动，如果CM1 Kit的绿灯常亮，一般是正常启动了。
    - 检查网线有没有插紧，或者换根网线试下。
    - 换个路由器试下，路由器的问题有遇到过很多，比如路由器无法正常分配IP 地址，或者已正常分配 IP 地址但在路由器中看不到。
    - 如果没有路由器可换就只能连接 HDMI 显示器或者使用调试串口来查看 IP地址。

:::tip
另外需要注意的是CM1 Kit  DHCP 自动分配 IP 地址是不需要任何设置的。
:::

4. 使用工具 ping 判断是否连通网络。

测试网络连通性的命令如下，ping 命令可以通过 Ctrl+C 快捷键来中断运行
```bash
root@armsom:~$ ping www.baidu.com
PING www.a.shifen.com (183.2.172.185): 56 data bytes
64 bytes from 183.2.172.185: icmp_seq=0 ttl=53 time=8.370 ms
64 bytes from 183.2.172.185: icmp_seq=1 ttl=53 time=8.917 ms
64 bytes from 183.2.172.185: icmp_seq=2 ttl=53 time=8.511 ms
64 bytes from 183.2.172.185: icmp_seq=3 ttl=53 time=8.673 ms
^C
--- www.a.shifen.com ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max/stddev = 8.370/8.618/8.917/0.203 ms
```

### WIFI

#### WIFI Station

WiFi 的 Station 模式是一种工作模式，它使 WiFi 设备能够连接到一个 WiFi 网络并与其他设备进行通信。

```bash
root@armsom:/# ifconfig wlan0 up #打开 wlan0
root@armsom:/# ifconfig -a 
root@rk3506-buildroot:/# ifconfig -a
can0      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:45

eth0      Link encap:Ethernet  HWaddr 9E:3C:0C:CC:4D:1D
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:54 Base address:0x2000

eth1      Link encap:Ethernet  HWaddr A2:3C:0C:CC:4D:1D
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:56 Base address:0x2000

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:578 errors:0 dropped:0 overruns:0 frame:0
          TX packets:578 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:28940 (28.2 KiB)  TX bytes:28940 (28.2 KiB)

wlan0     Link encap:Ethernet  HWaddr CC:64:1A:61:E8:19
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
root@armsom:/# connmanctl #进入 WIFI 操作终端
connmanctl> enable wifi #使能 WIFI，默认已经使能
connmanctl> agent on #开启代理
connmanctl> scan wifi #开启 WIFI 扫描，可以多次扫描
connmanctl> services #列出扫描到的 WIFI 列表
connmanctl> services
    TP-Link_210A         wifi_cc641a61e819_54502d4c696e6b5f32313041_managed_psk
    lulu                 wifi_cc641a61e819_6c756c75_managed_psk
    Triductor_5GAp       wifi_cc641a61e819_547269647563746f725f35474170_managed_none
    OrayBox-2.4G-FD5C    wifi_cc641a61e819_4f726179426f782d322e34472d46443543_managed_none
    R4R-2G               wifi_cc641a61e819_5234522d3247_managed_psk
                         wifi_cc641a61e819_hidden_managed_psk
    R3mini_Router2G      wifi_cc641a61e819_52336d696e695f526f757465723247_managed_psk
    R4R-5G               wifi_cc641a61e819_5234522d3547_managed_psk
    lulu_5G              wifi_cc641a61e819_6c756c755f3547_managed_psk
    OrayBox-5G-FD5C      wifi_cc641a61e819_4f726179426f782d35472d46443543_managed_none
    ydtx                 wifi_cc641a61e819_79647478_managed_psk
    Tri_Mesh_FH_         wifi_cc641a61e819_5472695f4d6573685f46485f_managed_psk
    Triductor_2GAp       wifi_cc641a61e819_547269647563746f725f32474170_managed_none
    R3mini_Router5G      wifi_cc641a61e819_52336d696e695f526f757465723547_managed_psk
    DIRECT-a4-HP M227f LaserJet wifi_cc641a61e819_4449524543542d61342d4850204d32323766204c617365724a6574_managed_psk
    CFG_2G               wifi_cc641a61e819_4346475f3247_managed_psk
                         wifi_cc641a61e819_hidden_managed_none
    Kingstar-Lo          wifi_cc641a61e819_4b696e67737461722d4c6f_managed_psk
    jachunfree_5         wifi_cc641a61e819_6a616368756e667265655f35_managed_psk
    ChinaNet-mbCu-5G     wifi_cc641a61e819_4368696e614e65742d6d6243752d3547_managed_psk
    HH-V-1               wifi_cc641a61e819_48482d562d31_managed_psk
    ChinaNet-2MNZ        wifi_cc641a61e819_4368696e614e65742d324d4e5a_managed_psk
    ChinaNet-AtTi        wifi_cc641a61e819_4368696e614e65742d41745469_managed_psk
    ChinaNet-mbCu        wifi_cc641a61e819_4368696e614e65742d6d624375_managed_psk
    recynova             wifi_cc641a61e819_726563796e6f7661_managed_psk
    DIRECT-sk-HUAWEI PixLab X1 wifi_cc641a61e819_4449524543542d736b2d485541574549205069784c6162205831_managed_psk
    ChinaNet-AtTi-5G     wifi_cc641a61e819_4368696e614e65742d417454692d3547_managed_psk
    recynova-5G          wifi_cc641a61e819_726563796e6f76612d3547_managed_psk
    Eureka-office        wifi_cc641a61e819_457572656b612d6f6666696365_managed_psk
    BTWIFI6-042426       wifi_cc641a61e819_425457494649362d303432343236_managed_psk
    Eureka-guest         wifi_cc641a61e819_457572656b612d6775657374_managed_psk
    ACCO-TEST            wifi_cc641a61e819_4143434f2d54455354_managed_psk
    Kingstar-Lo-5G       wifi_cc641a61e819_4b696e67737461722d4c6f2d3547_managed_psk
    jachun_link5g        wifi_cc641a61e819_6a616368756e5f6c696e6b3567_managed_psk
    ChinaNet-Ns24        wifi_cc641a61e819_4368696e614e65742d4e733234_managed_psk
    CMCC-YM6M            wifi_cc641a61e819_434d43432d594d364d_managed_none
```
从扫描到 WIFI 列表中，使用 connect XXXX 进行连接

```bash
connmanctl> connect wifi_cc641a61e819_79647478_managed_psk
connmanctl> exit #退出终端
```
连接成功后，可以使用 ifconfig 指令来查看 wlan0 所获取的 IP 地址。

```bash
root@armsom:/# ping www.baidu.com
```


### BT

**1. 查看蓝牙**

```bash
root@armsom:/# hciconfig -a
hci0:   Type: Primary  Bus: USB
        BD Address: CC:64:1A:61:E9:B6  ACL MTU: 1021:6  SCO MTU: 255:12
        UP RUNNING
        RX bytes:824 acl:0 sco:0 events:63 errors:0
        TX bytes:2289 acl:0 sco:0 commands:63 errors:0
        Features: 0xff 0xff 0xff 0xfa 0xdb 0xbf 0x7b 0x87
        Packet type: DM1 DM3 DM5 DH1 DH3 DH5 HV1 HV2 HV3
        Link policy: RSWITCH HOLD SNIFF PARK
        Link mode: PERIPHERAL ACCEPT
        Name: 'BlueZ 5.77'
        Class: 0x000414
        Service Classes: Unspecified
        Device Class: Audio/Video, Loudspeaker
        HCI Version: 5.2 (0xb)  Revision: 0xddc8
        LMP Version: 5.2 (0xb)  Subversion: 0x1141
        Manufacturer: Realtek Semiconductor Corporation (93)
```
**进入bluetoothctl**
```bash
root@armsom:/# bluetoothctl
```
**输入以下命令即可连接**
```bash
root@armsom:/# power on
root@armsom:/# agent on
root@armsom:/# default-agent
root@armsom:/# scan on
root@armsom:/# pair yourDeviceMAC
```

### USB

**连接 USB 存储设备测试**
1. 首先将 U 盘或者 USB 移动硬盘插入 CM1 Kit的 USB 接口中
2. 执行下面的命令如果能看到 sdX 的输出说明 U 盘识别成功
```
root@armsom:/# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0  122880000 sda
```
3. 使用 mount 命令可以将 U 盘挂载到/mnt 中，然后就能查看 U 盘中的文件了

```
root@armsom:/# sudo mount /dev/sda1 /mnt
```

4. 挂载完后通过 df -h 命令就能查看 U 盘的容量使用情况和挂载点

```
root@armsom:/mnt# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /mnt
```

### 音频

![cm1io-sound](/img/cm/armsom-cm1-sound.png)
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
arecord -D hw:0,0 -f S16_LE -t wav -c2 -r 16000 -d 5 /userdata/t.wav
```


## 样品购买

ArmSoM 独立站: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256807679122184.html](https://aliexpress.com/item/3256807679122184.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=842137173767](https://item.taobao.com/item.htm?id=842137173767)

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