---
description: ArmSoM-Sige7采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，拥有丰富的接口，支持双2.5G网口、WiFi6 & BT5和多种视频输出。
keywords: [armsom, armsom-sige7, maker kit, rockchip, rk3588操作系统, rk3588源码]
sidebar_position: 3
---

# 使用手册

Sige7 使用手册，帮助用户了解Sige7的基本使用和需要的准备工作。 当您拿到产品的时候，您需要知道它的型号以及硬件版本，这些信息都可以在板子上的丝印找到。我们会尽可能详细地向您介绍产品的信息。

## 入门准备
在开始使用 ArmSoM-Sige7 之前，请准备好以下物品

### 工具准备
* Sige7 主板
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
    * USB Type-C数据线，从 typec 端口在 Sige7 上写入镜像，您需要 Type-C 数据线连接 Sige7 和 PC。

### 可选选项
* USB 键盘鼠标
* HDMI显示器和HDMI线
  * Sige7配备了全尺寸 HDMI 接口，最高支持 8K@60 显示。
  * HDMI EDID用于确定最佳显示分辨率。 在支持 1080p（或 4K/8K）的显示器和电视上，将选择此分辨率。 如果不支持 1080p，EDID会找到的下一个可用分辨率。
* Ethernet 线（网线）
  * Sige7 支持以太网上网，最高支持2.5Gb。
  * 网线用于将 Sige7 连接到本地网络和互联网。
* 摄像头模块
  * Sige7 支持拍照功能。
  * 推荐使用imx415模组，可找ArmSoM官方店淘宝客服购买。
* LCD显示屏
  * Sige7 支持LCD显示功能。
  * 推荐使用 ArmSoM Display 10.1 HD，可找ArmSoM官方店淘宝客服购买。
* 音频线
  * 可以使用0.8mm立式插座。
* USB-A型转USB-C型数据线

## 烧录方式选择

[系统镜像烧录](../../../general-tutorial/flash-img)
## 接口设置

如果您是首次使用 ArmSoM-Sige7，请先熟悉下 [外设接口](./introduction)，以便于您更好的理解后续的内容。

### 2.5G 以太网口

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-Sige7 上的 RJ45 端口插入，系统桌面就会弹出有线连接。

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

### WIFI
```
# 1. Open the WIFI
armsom@armsom-sige7:/# nmcli r wifi on
# 2. Scan WIFI
armsom@armsom-sige7:/# nmcli dev wifi
# 3. Connect to WIFI network
armsom@armsom-sige7:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```


### BT

```
# 1. 激活蓝牙
armsom@armsom-sige7:/# service bluetooth start
# 2. 进入bluetoothctl
armsom@armsom-sige7:/# bluetoothctl
# 3. 输入以下命令即可连接
armsom@armsom-sige7:/# power on
armsom@armsom-sige7:/# agent on
armsom@armsom-sige7:/# default-agent
armsom@armsom-sige7:/# scan on
armsom@armsom-sige7:/# pair yourDeviceMAC
```


### HDMI

ArmSoM-Sige7 有HDMI 输出端口，支持 CEC 和 HDMI 2.1，分辨率最高支持 8Kp60。

### USB接口

ArmSoM-Sige7 提供一个 USB 2.0 和一个 USB 3.0 端口。

**USB3.0 Camera**

连接usb3.0摄像头后，您可以下载 cheese 然后使用以下命令使用摄像机:

```bash
armsom@armsom-sige7: sudo apt update
armsom@armsom-sige7: sudo apt install cheese
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

![armsom-sige7-gst](/img/sige/sige7/armsom-sige7-gst.png)

### 音频

查看系统中的声卡。

```bash
armsom@armsom-sige7:/# aplay -l
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

### 风扇

Sige7 配备一个 5V 的风扇，使用 0.8mm 的连接器

```
armsom@armsom-sige7:/# echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon8/pwm1
```

### Type-C

Sige7 配备全功能 USB Type‑C™ 3.1 端口，支持高达 4Kp60 的 DP 显示

### 40Pin

Sige7 提供了一个40pin针脚的GPIO座子，兼容于市面上大部分传感器的应用。

### RGB LED

Sige7 具有两个用户灯 LED 绿灯和红灯。

- 用户绿灯
  默认情况下，其常量显示正在运行的内核。

- 用户红灯
  默认情况下不亮，可由用户自行操控。

用户可通过命令控制

```
armsom@armsom-sige7:/# sudo su
armsom@armsom-sige7:/# echo timer > /sys/class/leds/red/trigger
armsom@armsom-sige7:/# echo activity > /sys/class/leds/red/trigger
```

### RTC

- Sige7配备了一颗RTC IC **hym8563**。
- 首先，使用2pin的排针接口，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc hym8563 设备已创建

```bash
armsom@armsom-sige7:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
armsom@armsom-sige7:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
armsom@armsom-sige7:/# date
2023年 11月 03日 星期五 10:33:12 UTC
armsom@armsom-sige7:/# hwclock -w
armsom@armsom-sige7:/# hwclock -r
armsom@armsom-sige7:/# poweroff
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并启动Sige7，检查RTC是否与系统时钟同步

```bash
armsom@armsom-sige7:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
armsom@armsom-sige7:/# date
2023年 11月 03日 星期五 10:36:01 UTC
```

### M.2接口

ArmSoM-Sige7 提供 M.2 连接器：

- 产品的背面有一个带有四通道 PCIe 3.0 接口的 M.2 M Key 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

```
armsom@armsom-sige7:/# mkdir temp
armsom@armsom-sige7:/# mount /dev/nvme0n1 temp
```

### 摄像头

#### MIPI-CSI

  摄像头采用IMX415模组，摄像头模组连接并上电后可以查看启动日志。

```bash
armsom@armsom-sige7:/# dmesg | grep imx415
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
armsom@armsom-sige7:/# v4l2-ctl -d /dev/video31 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll

// MIPI-CSI2
armsom@armsom-sige7:/# v4l2-ctl -d /dev/video22 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll
```

使用gst-launch-1.0可直接录像
```
// MIPI-CSI1
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink

// MIPI-CSI2
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
```
![armsom-w3-imx415-camera](/img/lm/lm7/armsom-w3-imx415-camera.jpeg)


### MIPI DSI

ArmSoM-Sige7 分辨率最高分辨率可达 4K@60Hz
