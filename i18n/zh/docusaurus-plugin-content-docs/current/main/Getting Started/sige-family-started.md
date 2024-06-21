--- 
keywords: [armsom, armsom-sige, SBC, maker kit, Rockchip]
sidebar_label: "Sige Family Getting Started"
sidebar_position: 3
slug: /sige-family-started
---

# Sige 系列使用手册

Sige系列使用手册，帮助用户了解Sige系列的基本使用和需要的准备工作，我们会尽可能详细地向您介绍产品的信息。

## Comparison of Sige7/5/1 Specifications

|        | Sige7  | Sige5 | Sige1 |
| --------- | ----- | --- | --- | 
| SoC Process | 8nm | 8nm |  28nm |  
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3528 <br/> Cortex-A53 x4 @1.5GHz | 
| GPU | ARM Mali-G610 MP4  | ARM Mali G52 MC3 GPU | ARM Mali-450 GPU |
| NPU | 6TOPS@INT8(3 NPU core)  | 6TOPS@INT8(2 NPU core) | - |
| RAM | 4GB/8GB/16GB/32GB 64-bit LPDDR4x | 4/8/16GB 32-bit LPDDR4x |  2/4GB 32-bit LPDDR4x|
| eMMC| 64GB/128GB eMMC | 32/128GB eMMC| 16/32GB eMMC |
| TF Card | Molex Slot, Spec Version 2.x/3.x/4.x(SDSC/SDHC/SDXC)| Yes|  Yes|
| Output | 1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 4K@60fps <br/> 1x DP 1.4 up to 8K@30fps | 1x HDMI 2.1, supports 4K@120fps <br/> 1x MIPI DSI, up to 2K@60fps <br/>  1x DP1.4, up to 4K@120fps |  1x HDMI OUT2.0b, supports 4K@60fps|
| Decoder |  8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|  H.264, H.265, VP9, AV1 and AVS2 etc. up to 8K@30fps or4K@120fps| H.265, H.264, AVS2 4K@60fps|
| Encoder | 8K@30fps H.265 / H.264| H.264 and H.265 up to 4K@60fps| H.264 and H.265 up to1080@60fps|
| Wi-Fi | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB |  SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs|
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | - |  - |
| Ethernet | 2x 2.5G Ethernet | 2x Gigabit Ethernet| Gigabit Ethernet & 2.5G Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 2× USB 3.0 (capable of simultaneous full throughput) <br/> 2× USB 2.0 | 2x USB 2.0|
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG）| 1x USB-C Power jack & 1x USB2.0 OTG|
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI |  -|
| 40-Pin Header| yes | yes | yes |
| LEDs | 2x LEDs | 2x LEDs | 2x LEDs|
|Board Dimensions| 92mm × 62mm | 92mm × 62mm | 92mm × 62mm|

## 入门准备

在开始使用 ArmSoM-Sige 系列之前，请准备好以下物品

### 工具准备
* 电源
* 系统安装（二选一）
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在Sige系列上写入镜像，您需要Type-C数据线连接 Sige系列和 PC。

您可以将 Sige 设置为带有桌面的交互式计算机，也可以将其设置为仅可通过网络访问的无头计算机。要将 Sige 设置为Headless计算机，您在初次安装操作系统时配置主机名、用户帐户、网络连接和 SSH 。如果您想直接使用 Sige，则需要以下附加配件：

**可选选项**
* 键盘 & 鼠标
* HDMI显示器和HDMI线
* Ethernet 线（网线）
* 摄像头模块
  * 推荐使用 [camera-module1](./armsom-camera-module1) 模组。
* LCD显示屏
  * 推荐使用 [Display 10 HD](./armsom-display-10-hd)。
* 音频线, 0.8mm立式插座。
* RTC 电池, 0.8mm立式插座。
* 风扇，0.8mm立式插座。

### 电源

下表显示了为ArmSoM-Sige系列型号供电所需的电源规格。您可以使用任何提供正确电源模式的高质量电源。

| 型号       | 推荐电源（电压/电流）  | 供电模式
| --------- | ----- | --- |
| Sige7 | 5V/3A, 9V/2A, 12V/2A, 15V/2A |  USB-PD |
| Sige5 | 5V/3A, 9V/2A, 12V/2A, 15V/2A |  USB-PD |
| Sige1 | 5V/2.5A，12V/2A | Non-PD |

将电源插入标有“DCIN”的端口, 请确保使用正确端口！

### 烧录方式选择

[系统镜像烧录](./general-tutorial/flash-img)
### 接口设置

如果您是首次使用 ArmSoM-Sige 产品，请先熟悉下各产品硬件接口，以便于您更好的理解后续的内容。

| 硬件接口  | [Sige7](./armsom-sige7#硬件接口) | [Sige5](./armsom-sige5#硬件接口) | [Sige1](./armsom-sige1#硬件接口) |
| --------------- | ----- | ------ | ------ | 

#### 调试串口

如下所示连接 USB 转 TTL 串口线：

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)

| Sige7/5/1       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | <---> | GND |
| **TX** (pin 8)  | <---> | RX |
| **RX** (pin 10) | <---> | TX |


#### 以太网口

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-SigeX 上的 RJ45 端口插入，系统桌面就会弹出有线连接。

- 通过命令 ifconfig 检查以太网是否正常，它会显示网卡 enPX 或 ethX 以及以太网 IP 地址。 此外，使用工具 ping 判断是否连通网络。

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
armsom@armsom-sige7:/# nmcli r wifi on
# 2. Scan WIFI
armsom@armsom-sige7:/# nmcli dev wifi
# 3. Connect to WIFI network
armsom@armsom-sige7:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

#### BT

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

#### HDMI

ArmSoM-Sige7 有HDMI 输出端口，支持 CEC 和 HDMI 2.1，分辨率最高支持 8Kp60。

#### USB接口

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

![armsom-sige7-gst](/img/sige/armsom-sige7-gst.png)

#### 音频

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

播放音乐

```bash
armsom@armsom-sige7:/# aplay -D plughw:1,0 ./usr/share/sounds/alsa/Front_Right.wav
```

#### 风扇

Sige7 配备一个 5V 的风扇，使用 0.8mm 的连接器

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
armsom@armsom-sige7:/# cat /sys/class/hwmon/hwmon9/pwm1
```

#### Type-C

Sige7 配备全功能 USB Type‑C™ 3.0 端口，支持高达 8K@30fps 的 DP 显示

#### 40Pin

Sige7 提供了一个40pin针脚的GPIO座子，兼容于市面上大部分传感器的应用。

#### RGB LED

Sige7 具有两个用户灯 LED 绿灯和红灯。

- 用户绿灯
  默认情况下，其常亮表示系统运行正常。

- 用户红灯
  默认情况下不亮，可由用户自行操控。

用户可通过命令控制

```
armsom@armsom-sige7:/# sudo su
armsom@armsom-sige7:/# echo timer > /sys/class/leds/red/trigger
armsom@armsom-sige7:/# echo activity > /sys/class/leds/red/trigger
```

#### RTC

- Sige7配备了一颗RTC IC **LK8563S**。
- 首先，使用2pin的排针接口，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc LK8563S 设备已创建

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

#### M.2接口

ArmSoM-Sige7 提供 M.2 连接器：

- 产品的背面有一个带有四通道 PCIe 3.0 接口的 M.2 M Key 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

```
armsom@armsom-sige7:/# mkdir temp
armsom@armsom-sige7:/# mount /dev/nvme0n1 temp
```

#### 摄像头

##### MIPI-CSI

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
![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg)


#### MIPI DSI

ArmSoM-Sige7 分辨率最高分辨率可达 4K@60Hz