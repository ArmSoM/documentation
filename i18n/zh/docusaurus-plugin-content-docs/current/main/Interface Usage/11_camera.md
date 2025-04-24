---
sidebar_label: "11. Camera 使用"
slug: /interface-usage/camera
sidebar_position: 11
---

# 11. Camera 使用

MIPI-CSI（移动行业处理器接口 - 摄像头串行接口）是一种高速、低功耗的接口标准，用于连接图像传感器和处理器，广泛应用于移动设备、嵌入式系统及其他电子设备中。MIPI-CSI 提供了一种快速且高效的方式，将高分辨率的视频和图像从摄像头模块传输到处理器。

MIPI-CSI 接口主要由以下组件组成：

- 数据线（D0、D1、D2 等）：这些数据线用于将图像数据从摄像头传输到处理器。
- 时钟线（CLK）：时钟线提供同步摄像头和处理器之间的时序信号。
- MIPI-CSI 接收器（CSI-Receiver）：接收器位于处理器上，接收 MIPI 数据和时钟。
- MIPI-CSI 发送器（CSI-Transmitter）：发送器位于摄像头上，向处理器发送图像数据。
- MIPI-CSI 标准支持不同的数据速率，具体取决于具体实现（如 MIPI-CSI2 或 MIPI-CSI3）。

## 11.1 Camera 使用实例

### 11.1.1 Camera 引脚

ArmSoM 产品带MIPI-CSI的都支持适配了 [ArmSoM camera-module1](./armsom-camera-module1)模组

ArmSoM 产品的mipi csi接口的1脚对摄像头模组的1脚

![cm5-camera](/img/general-tutorial/interface-usage/cm5-camera.png)

### 11.1.2 使能 Camera 通信接口

MIPI-CSI 接口在默认情况是关闭状态的，需要使能才能使用

在 Armbian 操作系统中，/boot/armbianEnv.txt 文件用于配置系统启动时的参数和设备树插件。你可以通过编辑该文件来启用或禁用 MIPI-CSI 设备树插件。

如果你希望检查或启用 MIPI-CSI 相关设备树插件，可以按照以下步骤操作：

- **查看设备树插件配置**

打开文件： 通过终端打开 /boot/armbianEnv.txt 文件，使用文本编辑器如 nano 或 vim，例如：

```bash
root@armsom-sige5:/home/armsom# sudo nano /boot/armbianEnv.txt
```

这里以激活 armsom-sige5-camera-ov13850-cs0 为例，将 armsom-sige5-camera-ov13850-cs0 打开如下:

```
overlays=armsom-sige5-camera-ov13850-cs0
```

其中 overlays 行指定了设备树覆盖（Device Tree Overlay），如果没有这些内容，你可以手动添加。

编辑完成后，保存文件并退出编辑器 重启系统使配置生效：

```
// 先执行sync
root@armsom-sige5:/home/armsom# sync
root@armsom-sige5:/home/armsom# sudo reboot
```

:::tip
- Q: 如果直接拔掉电源进行重启，是否可能导致文件未修改或 overlay 系统启动失败？
- A: 当直接拔掉电源或强制关机时，可能会出现文件未能及时从内存（RAM）同步到存储设备（如硬盘、SSD）的情况。这是因为操作系统通常会将数据暂存于内存中，并定期将这些数据写入磁盘。为避免此问题，建议在关机前执行 “sync” 命令，确保所有数据已写入磁盘，再拔掉电源或关机。
:::

- **验证 ArmSoM camera-module1 是否启用**

使能 armsom-camera-module1 设备树插件之后重新启动板卡，摄像头采用[camera-module1](./armsom-camera-module1)模组，摄像头模组连接并上电后可以查看启动日志。s

```
armsom@armsom-sige5:~$ dmesg | grep ov13850
[    3.481341] platform csi2-dphy3: Fixed dependency cycle(s) with /i2c@2ac70000/ov13850_1@10
[    3.482159] platform csi2-dphy0: Fixed dependency cycle(s) with /i2c@2ac80000/ov13850@10
[    3.574146] ov13850 5-0010: driver version: 00.01.05
[    3.574179] ov13850 5-0010: Failed to get power-gpios, maybe no use
[    3.574217] ov13850 5-0010: Looking up avdd-supply from device tree
[    3.574225] ov13850 5-0010: Looking up avdd-supply property in node /i2c@2ac80000/ov13850@10 failed
[    3.574256] ov13850 5-0010: supply avdd not found, using dummy regulator
[    3.574332] ov13850 5-0010: Looking up dovdd-supply from device tree
[    3.574340] ov13850 5-0010: Looking up dovdd-supply property in node /i2c@2ac80000/ov13850@10 failed
[    3.574358] ov13850 5-0010: supply dovdd not found, using dummy regulator
[    3.574383] ov13850 5-0010: Looking up dvdd-supply from device tree
[    3.574390] ov13850 5-0010: Looking up dvdd-supply property in node /i2c@2ac80000/ov13850@10 failed
[    3.574407] ov13850 5-0010: supply dvdd not found, using dummy regulator
[    3.574433] ov13850 5-0010: could not get default pinstate
[    3.574438] ov13850 5-0010: could not get sleep pinstate
[    3.579394] ov13850 5-0010: Detected OV00d850 sensor, REVISION 0xb2
[    3.619842] ov13850 5-0010: Consider updating driver ov13850 to match on endpoints
[    3.619848] rockchip-csi2-dphy csi2-dphy0: dphy0 matches m00_b_ov13850 5-0010:bus type 5
```

## 11.2 RK3588硬件通路框图
![rockchip-camera-hardware-phy](/img/general-tutorial/interface-usage/camera-hardware-phy.png)


- rk3588支持2个isp硬件，每个isp设备可虚拟出多个虚拟节点，软件上通过回读的方式，依次从ddr读取每一路的图像数据进isp处理。对于多摄方案，建议将数据流平均分配到两个isp上。

- 回读：指数据经过vicap采集到ddr，应用获取到数据后，将buffer地址推送给isp，isp再从ddr获取图像数据。
## 11.3 RK3588 的camera通路:

**多sensor支持：**

- 单路硬件isp最多支持4路复用，isp复用情况支持分辨率如下：
- 2路复用：最大分辨率3840x2160，dts对应配置2路rkisp_vir设备。
- 3路或4路复用：最大分辨率2560x1536，dts对应配置3或4路rkisp_vir设备。
- 硬件支持最多采集7路sensor：6mipi + 1dvp，多sensor软件通路如下：

**下图是RK3588 camera连接链路示意图，可以支持7路camera。**
![rockchip-camera-entity](/img/general-tutorial/interface-usage/camera-entity.png)

##  11.4  链路解析
![rockchip-camera-entity-single](/img/general-tutorial/interface-usage/camera-entity-single.png)

- 图中：mipi camera2---> <font color="red" size="3">csi2_dphy1</font> ---> mipi2_csi2 ---> rkcif_mipi_lvds2--->rkcif_mipi_lvds2_sditf --->rkisp0_vir2
	
- 对应节点：imx415 ---> <font color="red" size="3">csi2_dphy0</font> ---> mipi2_csi2 ---> rkcif_mipi_lvds2--->rkcif_mipi_lvds2_sditf --->rkisp0_vir2
	
- 链接关系：sensor---> csi2 dphy---->mipi csi host--->vicap
	
- 实线链路解析： Camera sensor ---> dphy ---> 通过mipi_csi2模块解析mipi协议---> vicap <font color="red" size="3">( rkcif节点代表vicap )</font>
	
- 虚线链路解析：vicap ---> rkcif_mipi_lvds2_sditf --->  isp

:::tip
每个vicap节点与isp的链接关系，通过对应虚拟出的XXX_sditf来指明链接关系。
:::

## 11.5 查看摄像头信息

### 11.5.1 查看Camera是否挂载到i2c总线下

```bash
root@armsom:/# i2cdetect -y 5
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:                         -- -- -- -- -- -- -- --
10: UU -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```
### 11.5.2 查看拓扑结构

```bash
root@armsom-sige5:/home/armsom# media-ctl -d /dev/media0 -p
```

### 11.5.3 查看sys文件系统中文件信息
内核会为摄像头在目录/sys/class/video4linux下分配设备信息描述文件

```bash
armsom@armsom-sige5:~$ grep ov13850 /sys/class/video4linux/v*/name
/sys/class/video4linux/v4l-subdev2/name:m00_b_ov13850 5-0010
```

查找Camera对应的vedio节点：
```bash
armsom@armsom-sige5:~$ grep "" /sys/class/video4linux/v*/name | grep mainpath
/sys/class/video4linux/video22/name:rkisp_mainpath
/sys/class/video4linux/video31/name:rkisp_mainpath
```
可以看到，在ArmSoM-Sige5中，双Camera的节点对应的是：video22和video31

### 11.5.4 查找所有摄像头设备

```bash
armsom@armsom:~$ v4l2-ctl --list-devices
rkisp-statistics (platform: rkisp):
        /dev/video29
        /dev/video30
        /dev/video38
        /dev/video39

rkcif-mipi-lvds2 (platform:rkcif):
        /dev/media0
        /dev/media1

rkcif (platform:rkcif-mipi-lvds2):
        /dev/video0
        /dev/video1
        /dev/video2
        /dev/video3
        /dev/video4
        /dev/video5
        /dev/video6
        /dev/video7
        /dev/video8
        /dev/video9
        /dev/video10

rkcif (platform:rkcif-mipi-lvds4):
        /dev/video11
        /dev/video12
        /dev/video13
        /dev/video14
        /dev/video15
        /dev/video16
        /dev/video17
        /dev/video18
        /dev/video19
        /dev/video20
        /dev/video21

rkisp_mainpath (platform:rkisp0-vir0):
        /dev/video22
        /dev/video23
        /dev/video24
        /dev/video25
        /dev/video26
        /dev/video27
        /dev/video28
        /dev/media2

rkisp_mainpath (platform:rkisp1-vir1):
        /dev/video31
        /dev/video32
        /dev/video33
        /dev/video34
        /dev/video35
        /dev/video36
        /dev/video37
        /dev/media3
```
其中/dev/video22和/dev/video31都是摄像头的设备。

### 11.5.5 查看设备的预览支持格式
如下是video22节点 ov13850 摄像头的查询结果：

```bash
root@armsom:/# v4l2-ctl -d /dev/video22 --list-formats-ext
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture Multiplanar

        [0]: 'UYVY' (UYVY 4:2:2)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [1]: 'NV16' (Y/UV 4:2:2)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [2]: 'NV61' (Y/VU 4:2:2)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [3]: 'NV21' (Y/VU 4:2:0)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [4]: 'NV12' (Y/UV 4:2:0)
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [5]: 'NM21' (Y/VU 4:2:0 (N-C))
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
        [6]: 'NM12' (Y/UV 4:2:0 (N-C))
                Size: Stepwise 32x32 - 2112x1568 with step 8/8
```
### 11.5.6 查看设备的所有信息

```bash
root@armsom:/# v4l2-ctl --all --device /dev/video22
Driver Info:
        Driver name      : rkisp_v10
        Card type        : rkisp_mainpath
        Bus info         : platform:rkisp-vir1
        Driver version   : 2.9.0
        Capabilities     : 0x84201000
                Video Capture Multiplanar
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04201000
                Video Capture Multiplanar
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : rkisp-vir1
        Model            : rkisp0
        Serial           :
        Bus info         : platform:rkisp-vir1
        Media version    : 6.1.99
        Hardware revision: 0x00000000 (0)
        Driver version   : 6.1.99
Interface Info:
        ID               : 0x03000007
        Type             : V4L Video
Entity Info:
        ID               : 0x00000006 (6)
        Name             : rkisp_mainpath
        Function         : V4L2 I/O
        Pad 0x01000009   : 0: Sink
          Link 0x0200000a: from remote pad 0x1000004 of entity 'rkisp-isp-subdev' (Unknown V4L2 Sub-Device): Data, Enabled
Priority: 2
Format Video Capture Multiplanar:
        Width/Height      : 2112/1568
        Pixel Format      : 'NV12' (Y/UV 4:2:0)
        Field             : None
        Number of planes  : 1
        Flags             :
        Colorspace        : Default
        Transfer Function : Default
        YCbCr/HSV Encoding: Default
        Quantization      : Full Range
        Plane 0           :
           Bytes per Line : 2112
           Size Image     : 4967424
Selection Video Capture: crop, Left 0, Top 0, Width 2112, Height 1568, Flags:
Selection Video Capture: crop_bounds, Left 0, Top 0, Width 2112, Height 1568, Flags:
Selection Video Output: crop, Left 0, Top 0, Width 2112, Height 1568, Flags:
Selection Video Output: crop_bounds, Left 0, Top 0, Width 2112, Height 1568, Flags:

Image Processing Controls

                     pixel_rate 0x009f0902 (int64)  : min=0 max=1000000000 step=1 default=1000000000 value=120000000 flags=read-only, volatile
```

### 11.5.7 切换其他分辨率
ov13850支持多个分辨率的输出，默认为2112/1568。现将输出分辨率改为4224x3136。
```
media-ctl -d /dev/media0 --set-v4l2 '"m00_b_ov13850 5-0010":0[fmt:SBGGR10_1X10/4224x3136]'
media-ctl -d /dev/media2 --set-v4l2 '"rkcif-mipi-lvds1":0[fmt:SBGGR10_1X10/4224x3136]'
```
其他分辨率也可以按上面的方式来设置

### 11.5.8 摄像头抓图
ArmSoM-Sige7中，双Camera的预览命令：

- 启动rkaiq 3A服务：

```bash
systemctl restart rkaiq_3A.service
```
- 抓图：
```bash
v4l2-ctl -d /dev/video22 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-skip=30 --stream-to=/mnt/output.yuv --stream-count=1 --stream-poll
```
这样可以拿isp处理好效果的yuv文件

![rockchip-camera-gts](/img/general-tutorial/interface-usage/camera-gts.png)

## 11.6 Camera应用程序开发
客户可以根据自己的需求进行Camera相关的应用程序开发，如下是使用QT开发的双摄同显应用程序：

![rockchip-camera-two](/img/general-tutorial/interface-usage/camera-two.png)

:::tip
目前armbian系统还不支持 3A服务，无法启动isp校正摄像头画面。如有摄像头功能要求的客户可使用debian系统，由rockchip官方支持，如debian未支持的摄像头可联系armsom官方。
:::