---
sidebar_label: "使用手册"
sidebar_position: 3
---

# 使用手册

LM7开发套件(ArmSoM-W3)使用手册，帮助软件工程师掌握开发板使用 。


## 入门准备
在开始使用 ArmSoM-W3 之前，请准备好以下物品

### 工具准备
* ArmSoM-W3 主板
* 电源（三选一）
  * 支持 9V/2A、12V/2A、15V/2A 和 20V/2A 的 USB Type-C PD 2.0
  * 支持 DC 12V适配器，2.5mm
  * 支持 PoE 12V
* 系统安装（二选一）
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器，
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：
  * 板载eMMC启动
    * USB A型转 C型数据线，从 typec 端口在 ArmSoM-W3 上写入镜像或使用 fastboot/adb 命令，您需要 USB A转type C数据线连接 ArmSoM-W3 和 PC。

### 可选选项
* USB 键盘鼠标
* HDMI 显示器和 HDMI 线
  * ArmSoM-W3配备了全尺寸 HDMI 接口，最高支持 8K@60 显示。
  * HDMI EDID用于确定最佳显示分辨率。 在支持 1080p（或 4K/8K）的显示器和电视上，将选择此分辨率。 如果不支持 1080p，EDID会找到的下一个可用分辨率。
* Ethernet 线（网线）
  * ArmSoM-W3支持以太网上网，最高支持2.5G。
  * 网线用于将ArmSoM-W3连接到本地网络和互联网。
* 摄像头模块
  * ArmSoM-W3支持拍照功能
  * 推荐使用imx415模组，可找ArmSoM官方店淘宝客服购买。
* LCD显示屏
  * ArmSoM-W3支持LCD显示功能。
  * 推荐使用 ArmSoM Display 10.1 HD，可找ArmSoM官方店淘宝客服购买。
* 音频线
  * 可以使用标准 3.5 毫米插孔通过扬声器或耳机播放音频。
* WiFi/蓝牙卡
  * ArmSoM 支持市面上常见的无线模块，请查看支持列表的 Wireless 列表。
  * 推荐使用 RTL8852be，AP6256
* USB-A型转USB-C型数据线

## 烧录方式选择

[系统镜像烧录](../../general-tutorial/flash-img)

## 接口设置

如果你是首次使用 ArmSoM-LM7 开发套件(ArmSoM-W3)，请先熟悉下 [外设接口](./lm7-introduction#armsom-lm7-开发套件armsom-w3)，以便于你更好的理解后续的内容。

### 2.5G 以太网口

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-W3 上的 RJ45 端口插入，系统桌面就会弹出有线连接。

手动配置以太网
- 切换root用户

```bash
sudo su
```

- 通过命令 ifconfig 检查以太网是否正常，它会显示网卡 eth0 或 enP4p65s0 以及以太网 IP 地址。 此外，使用工具 ping 判断是否连通网络。

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

查看系统中的声卡。

```bash
root@linaro-alip:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipdp0 [rockchip,dp0], device 0: rockchip,dp0 spdif-hifi-0 [rockchip,dp0 spdif-hifi-0]
 Subdevices: 1/1
 Subdevice #0: subdevice #0
card 1: rockchipes8316 [rockchip-es8316], device 0: fe470000.i2s-ES8316 HiFi es8316.7-0011-0 [fe470000.i2s-ES8316 HiFi es8316.7-0011-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 3: rockchiphdmi0 [rockchip-hdmi0], device 0: rockchip-hdmi0 i2s-hifi-0 [rockchip-hdmi0 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 4: rockchiphdmi1 [rockchip-hdmi1], device 0: rockchip-hdmi1 i2s-hifi-0 [rockchip-hdmi1 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

### USB接口

ArmSoM-W3 提供两个 USB 2.0 和两个 USB 3.0 端口。

### Type-C

ArmSoM-W3 配备全功能 USB Type‑C™ 3.1 端口，支持高达 4Kp60 的 DP 显示

### HDMI

ArmSoM-W3 有两个 HDMI 输出端口，均支持 CEC 和 HDMI 2.1，分辨率最高支持分别为 8Kp60 和 4Kp60。

:::caution
注意: 在使用之前，请确认 HDMI 线的接口规格。
:::

### HDMI IN

ArmSoM-W3使用rk3588原生hdmi rx接口，可以使用v4l2命令测试hdmi in接口。

**查看所有视频节点**

```
ls /dev/video*
```

**查找 rk hdmirx 设备**

执行v4l2-ctl -d命令指定vidoe节点。执行-D命令查看节点信息。使用驱动程序名称检查 rk_hdmirx 设备。
```
root@linaro-alip:/# v4l2-ctl -d /dev/video0 -D
Driver Info:
Driver name : rk_hdmirx
Card type : rk_hdmirx
Bus info : fdee0000.hdmirx-controller
Driver version : 5.10.66
Capabilities : 0x84201000
Video Capture Multiplanar
Streaming
Extended Pix Format
Device Capabilities
Device Caps : 0x04201000
Video Capture Multiplanar
Streaming
Extended Pix Format
```

**查询分辨率和图像格式**

查询当前分辨率和图像格式：
```
root@linaro-alip:/# v4l2-ctl -d /dev/video17 --get-fmt-video
Format Video Capture Multiplanar:
Width/Height : 3840/2160
Pixel Format : 'NV16'
Field : None
Number of planes : 1
Flags : premultiplied-alpha, 000000fe
Colorspace : Unknown (1025fcdc)
Transfer Function : Unknown (00000020)
YCbCr Encoding : Unknown (000000ff)
Quantization : Default
Plane 0 :
Bytes per Line : 3840
Size Image : 16588800
```

**抓取图像文件**

将镜像文件保存到设备，通过7yuv等工具查看：

```
v4l2-ctl --verbose -d /dev/video17 \ 
--set-fmt-video=width=3840，height=2160，pixelformat='NV16' \ 
--stream-mmap=4 --stream-skip=3 \ 
--stream-to=/data/4k60_nv16.yuv \ 
--stream-count=5 --stream-poll
```

### RGB LED

ArmSoM-W3 具有电源 LED 和用户 LED。

- 电源指示灯
  电源 LED 为绿色， ArmSoM-W3默认通电时常亮。

- 用户指示灯
  用户 LED 为蓝色， 默认情况下，其闪烁状态显示正在运行的内核。

用户可通过命令控制

```
linaro@linaro-alip:/# sudo su
root@linaro-alip:/# echo timer > /sys/class/leds/blue:status/trigger
root@linaro-alip:/# echo activity > /sys/clas
```

### RTC

- ArmSoM-W3配备了一颗RTC IC **hym8563**。
- 首先，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc hym8563 设备已创建



```bash
root@linaro-alip:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
root@linaro-alip:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
root@linaro-alip:/# date
2023年 11月 03日 星期五 10:33:12 UTC
root@linaro-alip:/# hwclock -w
root@linaro-alip:/# hwclock -r
root@linaro-alip:/# poweroff
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并启动ArmSoM-W3，检查RTC是否与系统时钟同步

```bash
root@linaro-alip:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
root@linaro-alip:/# date
2023年 11月 03日 星期五 10:36:01 UTC
```

### 风扇

ArmSoM-W3 配备一个 5V 的风扇，使用 1.25mm 的连接器

```
root@linaro-alip:/# echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/export
root@linaro-alip:/# echo 10000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/period
root@linaro-alip:/# echo 5000 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/duty_cycle
root@linaro-alip:/# echo inversed  > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/polarity
root@linaro-alip:/# echo 1 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable
root@linaro-alip:/# echo 0 > /sys/devices/platform/fd8b0010.pwm/pwm/pwmchip*/pwm0/enable
```

### M.2接口

ArmSoM-W3 提供两个 M.2 连接器：

- 主板正面有一个带 2230 安装孔的 M.2 E Key 连接器，提供 PCIe 2.1 单通道、USB、SATA、SDIO、PCM 和 UART 信号，支持工业标准 M.2 WiFi 6 模块。  
  ArmSoM 推荐使用 RTL8852BE，AP6256。安装在 ArmSoM-W3 的 M.2 E 口然后设置 wifi 网络就可以上网。

```
# 加载驱动
root@linaro-alip:/# insmod system/lib/modules/rtkm.ko
root@linaro-alip:/# insmod system/lib/modules/rtkm.ko
root@linaro-alip:/# insmod /usr/lib/modules/rtk_btusb.ko
root@linaro-alip:/# lsmod
Module                  Size  Used by
8852be               4030464  0
rtkm                   16384  1 8852be
rtk_btusb              57344  0
```

#### WIFI
```
# 1. Switch to super user mode
root@linaro-alip:/# sudo su
# 2. Open the WIFI
root@linaro-alip:/# nmcli r wifi on
# 3. Scan WIFI
root@linaro-alip:/# nmcli dev wifi
# 4. Connect to WIFI network
root@linaro-alip:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```


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


- 产品的背面有一个带有四通道 PCIe 3.0 接口的 M.2 M Key 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

```
root@linaro-alip:/# mkdir temp
root@linaro-alip:/# mount /dev/nvme0n1 temp
```

### MIC录音

```bash
root@linaro-alip:/root# arecord -D hw:1,0 -f S16_LE -t wav -c2 -r 16000 -d 3 t.wav
Recording WAVE 't.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
root@linaro-alip:/root# aplay t.wav
Playing WAVE 't.wav' : Signed 16 bit Little Endian, Rate 16000 Hz, Stereo
```

### 摄像头

#### MIPI-CSI

  摄像头采用IMX415模组，摄像头模组连接并上电后可以查看启动日志。

```bash
root@linaro-alip:/# dmesg | grep imx415
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
root@linaro-alip:/# v4l2-ctl -d /dev/video11 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll
```

  使用gst-launch-1.0可直接录像
```
root@linaro-alip:/# gst-launch-1.0 v4l2src device=/dev/video11 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
```
![armsom-w3-imx415-camera](/img/lm/lm7/armsom-w3-imx415-camera.jpeg)

####  USB3.0 Camera

连接usb3.0摄像头后，打开Qt V4L2 test Utility应用程序进行测试

![armsom-w3-usb-camera-qtv4l2](/img/lm/lm7/armsom-w3-usb-camera-qtv4l2.png)

打开视频节点：video21

![armsom-w3-usb-camera-qtv4l2-select-video](/img/lm/lm7/armsom-w3-usb-camera-qtv4l2-select-video.png)

点击相机按钮，您将看到相机屏幕

![armsom-w3-usb-camera-qtv4l2-play](/img/lm/lm7/armsom-w3-usb-camera-qtv4l2-play.png)

### MIPI DSI

ArmSoM-W3 分辨率最高分辨率可达 4K@60Hz
