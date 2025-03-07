--- 
keywords: [armsom, armsom-sige, SBC, maker kit, Rockchip]
sidebar_label: "Forge系列使用手册"
sidebar_position: 14
slug: /forge-family-started
---

# forge 使用手册

forge使用手册，帮助用户了解forge产品的基本使用和需要的准备工作，开始使用你的ArmSoM-forge🚀

## 入门准备

在开始使用 ArmSoM-Forge 产品之前，请准备好以下物品

### 工具准备
* 电源（12V/2A）
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在Forge系列上写入镜像，您需要Type-C数据线连接 Forge系列和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器

您可以将 Sige 设置为带有桌面的交互式计算机，也可以将其设置为仅可通过网络访问的无头计算机。要将 Sige 设置为Headless计算机，您在初次安装操作系统时配置主机名、用户帐户、网络连接和 SSH 。如果您想直接使用 Sige，则需要以下附加配件：

**可选选项**
* 调试串口
* 键盘 & 鼠标
* Ethernet 线（网线）
* 音频线, 0.8mm立式插座。
* RTC 电池, 0.8mm立式插座。
* 风扇，0.8mm立式插座。

## 烧录方式选择
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

如果您是首次使用 ArmSoM-Forge 产品，请先熟悉下各产品硬件接口，以便于您更好的理解后续的内容。

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
3. 在ArmSoM-SigeX 的 Linux 系统中查看 IP 地址的命令如下所示

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

|  型号  | Sige1 |
| ----- |  ----- |
| USB   | 1* Type-C 3.0, 1x USB2.0 |

#### 连接 USB 存储设备测试
1. 首先将 U 盘或者 USB 移动硬盘插入 ArmSoM-Sige产品的 USB 接口中
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

- Sige配备了一颗RTC IC **LK8563S**。
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

1. 按照下图将连接好排线


### CAN