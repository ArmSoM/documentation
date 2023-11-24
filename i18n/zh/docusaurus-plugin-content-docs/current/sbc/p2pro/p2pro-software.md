---
sidebar_position: 3
---

# 使用手册

ArmSoM-p2pro使用手册，帮助软件工程师掌握开发板使用 。


## 入门准备
在开始使用 ArmSoM-p2pro 之前，请准备好以下物品

### 工具准备
* ArmSoM-p2pro 主板
* 电源（三选一）
  * 支持 USB Type-C 5V
  * 支持 PoE 5V
* 系统安装（二选一）
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器，
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：
  * 板载eMMC启动
    * USB A型转 C型数据线，从 typec 端口在 USB Type-C 上写入镜像或使用 fastboot/adb 命令，您需要 USB A转type C数据线连接 USB Type-C 和 PC。

### 可选选项
* USB 键盘鼠标
* Ethernet 线（网线）
  * USB Type-C支持以太网上网，最高支持100M。
  * 网线用于将ArmSoM-W3连接到本地网络和互联网。
* 音频线
  * 可以使用标准 3.5 毫米插孔通过扬声器或耳机播放音频。
* USB-A型转USB-C型数据线

## 烧录方式选择
[系统镜像烧录](../../general-tutorial/flash-img)

## 接口设置

如果你是首次使用 ArmSoM-p2pro，请先熟悉下 [外设接口](./p2pro-introduction#实物图)，以便于你更好的理解后续的内容。

### 100M 以太网口

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-p2pro 上的 RJ45 端口插入。

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
or
$ sudo dhclient enP4p65s0
```

### 音频

ArmSoM-p2pro 配备一个耳机 3.5mm 音频输出

查看系统中的声卡。

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

指定播放音频文件的声卡。
```
aplay -D hw:0,0 /mnt/test.wav
```

查看内置Codec增益的所有状态
```
amixer contents
```

#### 耳机
查看编解码器当前左右声道输出增益：
```
amixer cget name='DAC HPOUT Left Volume'
amixer cget name='DAC HPOUT Right Volume'
```

根据需要调整提前增益：
```
amixer cset name='DAC HPMIX Left Volume' 1
amixer cset name='DAC HPMIX Right Volume' 1
```
根据需要调整后级增益：
```
amixer cset name='DAC HPOUT Left Volume' 18
amixer cset name='DAC HPOUT Right Volume' 18
```
调节音量（百分比）：
```
amixer cset name='Master Playback Volume' 40
```

#### 喇叭

查看编解码器当前左右声道输出增益：
```
amixer cget name='DAC LINEOUT Left Volume'
amixer cget name='DAC LINEOUT Right Volume'
```

根据需要调整提前增益：
```
amixer cset name='DAC HPMIX Left Volume' 1
amixer cset name='DAC HPMIX Right Volume' 1
```

根据需要调整后级增益：
```
amixer cset name='DAC LINEOUT Left Volume' 3
amixer cset name='DAC LINEOUT Right Volume' 3
```

调节音量（百分比）：
```
amixer cset name='Master Playback Volume' 40
```
#### 录音
```
root@rk3308_64:/dev# cat /proc/asound/cards
0 [rockchiprk3308a]: rockchip_rk3308 - rockchip,rk3308-acodec
                    rockchip,rk3308-acodec
7 [Loopback       ]: Loopback - Loopback
                    Loopback 1
```
card 0: rk3308b 内置声卡

card 7: aloop生成的虚拟声卡

获取8通道声卡0音频数据：
```
arecord -D hw:0,0 -c 8 -r 16000 -f S16_LE test.wav
```

当采样率大于16000hz时，在录制命令中添加参数--period-size=1024 --buffer-size=4096，例如：
```
arecord -D hw:0,0 -c 8 -r 44100 -f S16_LE --period-size=1024 --buffer-size=4096 test.wav
```

### USB接口

ArmSoM-p2pro 提供1个 USB 2.0

### Type-C

ArmSoM-p2pro 配备 USB Type‑C™ 3.1 端口，支持5V供电

### RGB LED

ArmSoM-p2pro 具有电源 LED 和用户 LED。

- 电源指示灯
  电源 LED 为红灯， ArmSoM-p2pro默认通电时常亮。

- 用户指示灯
  用户 LED 为绿色， 默认情况下，其闪烁状态显示正在运行的内核。

用户可通过命令控制

```
linaro@k3308_64:/# sudo su
root@rk3308_64:/# echo 0 > /sys/class/leds/blue\:user/brightness
root@rk3308_64:/# echo 1 > /sys/class/leds/blue\:user/brightness
```

### WiFi/BT

**要测试WIFI性能，我们需要按照以下步骤进行：**

执行命令查看是否有wlan0节点

```
ifconfig -a
```

如果没有节点执行加载wifi ko文件的命令

```
insmod /system/lib/modules/bcmdhd.ko firmware_path=/system/etc/firmware/ nvram_path=/system/etc/firmware/
```

检查Wi-Fi服务进程是否启动：

```ps``` 检查wpa_supplicant进程是否存在

```
vi /data/cfg/wpa_supplicant.conf
 network={
        ssid="ydtx"
        psk="YDTX123456"
        key_mgmt=WPA-PSK
}
```

如果没有启动，可以手动启动
```
wpa_supplicant -B -i wlan0 -c /data/cfg/wpa_supplicant.conf
```

wpa_cli命令与wpa_supplicant进程通信，因此请确保wpa_supplicant进程正在运行

```
wpa_cli -i wlan0 -p /var/run/wpa_supplicant scan
wpa_cli -i wlan0 -p /var/run/wpa_supplicant scan_results
```

连接路由器
```
wpa_cli -i wlan0 -p /var/run/wpa_supplicant reconfigure
wpa_cli -i wlan0 -p /var/run/wpa_supplicant reconnect
```

重新连接后，可以使用ifconfig查看wifi IP地址

**测试BT性能，我们需要按照以下步骤操作：**

/usr/bin目录包含BT初始化脚本

```bt_init.sh```

执行脚本后，执行：
```
hciconfig hci0 up
hciconfig –a
```

正常情况下，可以看到：
```
root@rk3308_64:/usr/bin# hciconfig -a
BD Address: 57:CB:46:28:B8:2B
```

### 看门狗

watchdog节点在dev目录下

```
open：打开设备节点/dev/watchdog以启用看门狗
ioctl: WDIOC_SETTIMEOUT 设置超时时间
write：喂狗
```

## 其他
### 语音识别开发
:::tip
关于ArmSoM-p2 pro开源主板支持的语音套件，如果客户需要更深入的业务定制合作，需要与我司或对应的语音公司进行沟通。
:::