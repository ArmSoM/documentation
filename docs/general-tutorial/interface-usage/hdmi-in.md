---
sidebar_label: "HDMI-IN 使用"
sidebar_position: 8
---

## 1. HDMI-IN简介
- HDMI IN功能可以通过桥接芯⽚的⽅式实现，将HDMI信号转换成MIPI信号接收
- RK3588芯⽚平台⾃带HDMI RX模块，可以直接接收HDMI信号，无需通过桥接芯⽚实现。
- 在ArmSoM系列产品中，ArmSoM-W3支持HDMI-IN功能
	**HDMI-IN功能框图**
	![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/64bd8e84c1f042ddb81df4b0f71510e4.png)
	根据应⽤场景需要，HDMI RX可适配TIF框架或是Camera框架，适配TIF框架图像传输延时更低，适配
	Camera框架可以使⽤标准Camera API，更⽅便录像、对接后端算法等应⽤功能开发。
## 2. HDMI-IN驱动代码和dts配置
### 2.1 驱动

```bash
kernel/drivers/media/platform/rockchip/hdmirx/*
```

### 2.2 kernel Config配置

```bash
CONFIG_VIDEO_ROCKCHIP_HDMIRX=y
```

## 2.3 DTS配置

### 2.3.1 HDMI RX控制器配置

```c
/* Should work with at least 128MB cma reserved above. */ 
&hdmirx_ctrler { 
	status = "okay"; 
	
	/* Effective level used to trigger HPD: 0-low, 1-high */ 
	hpd-trigger-level = <1>; 
	hdmirx-det-gpios = <&gpio1 RK_PC6 GPIO_ACTIVE_LOW>; 
	pinctrl-names = "default"; 
	pinctrl-0 = <&hdmim1_rx &hdmirx_det>; 
}; 

&pinctrl {
	hdmirx {
		hdmirx_det: hdmirx-det {
			rockchip,pins = <1 RK_PC6 RK_FUNC_GPIO &pcfg_pull_none>;
		};
	};
}

```
### 2.3.2 预留内存
RK3588 HDMI RX模块只能使用物理连续内存，需要预留至少128MB的CMA内存： 
注：按3840x2160分辨率，RGB888图像格式，4个轮转Buffer计算。 

```c
/* If hdmirx node is disabled, delete the reserved-memory node here. */ 
reserved-memory { 
	#address-cells = <2>; 
	#size-cells = <2>; 
	ranges; 
	
	/* Reserve 128MB memory for hdmirx-controller@fdee0000 */ 
	cma { 
		compatible = "shared-dma-pool"; 
		reusable; 
		reg = <0x0 (256 * 0x100000) 0x0 (128 * 0x100000)>; 
		linux,cma-default; 
	}; 
};
```

## 3. HDMI-IN调试
HDMI-IN 设备在内核中会被注册为 video 设备，生成的节点如：/dev/video20，可以通过 v4l2-ctl 命令来获取设备信息和抓帧。

### 3.1 查看所有video节点

```bash
ls /dev/video* 
```

### 3.2 查找**rk_hdmirx**设备

使⽤v4l2-ctl -d参数指定vidoe节点，-D命令查看节点信息，通过Driver name确认哪个是节点是rk_hdmirx 设备：


```c
v4l2-ctl -d /dev/video* -D      例： v4l2-ctl -d /dev/video20 -D 
```

```bash
armsom@armsom:~$ v4l2-ctl -d /dev/video20 -D
Driver Info:
        Driver name      : rk_hdmirx
        Card type        : rk_hdmirx
        Bus info         : fdee0000.hdmirx-controller
        Driver version   : 5.10.160
        Capabilities     : 0x84201000
                Video Capture Multiplanar
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04201000
                Video Capture Multiplanar
                Streaming
                Extended Pix Format
```



### 3.3  获取外部设备输入的分辨率信息

```bash
armsom@armsom:~$ v4l2-ctl -d /dev/video20  -V
Format Video Capture Multiplanar:
        Width/Height      : 1920/1080
        Pixel Format      : 'NV24' (Y/CbCr 4:4:4)
        Field             : None
        Number of planes  : 1
        Flags             : 0x00000080
        Colorspace        : Rec. 709
        Transfer Function : Default
        YCbCr/HSV Encoding: xvYCC 709
        Quantization      : Default
        Plane 0           :
           Bytes per Line : 1920
           Size Image     : 6220800
```

可以看出此时输入源的像素格式为 ' BGR3' 。分辨率为 1920 * 1080

### 3.4 HDMI-IN音视频捕获

可以使用如下脚本捕获HDMI-IN输入的音频和视频

```bash
#!/bin/bash

trap 'onCtrlC' INT
function onCtrlC () {
	echo 'Ctrl+C is captured'
	killall gst-launch-1.0
	exit 0
}

device_id=$(v4l2-ctl --list-devices | grep -A1 hdmirx | grep -v hdmirx | awk -F ' ' '{print $NF}')
v4l2-ctl -d $device_id --set-dv-bt-timings query 2>&1 > /dev/null
width=$(v4l2-ctl -d $device_id --get-dv-timings | grep "Active width" |awk -F ' ' '{print $NF}')
heigh=$(v4l2-ctl -d $device_id --get-dv-timings | grep "Active heigh" |awk -F ' ' '{print $NF}')

es8388_card=$(aplay -l | grep "es8388" | cut -d ':' -f 1 | cut -d ' ' -f 2)
hdmi0_card=$(aplay -l | grep "hdmi0" | cut -d ':' -f 1 | cut -d ' ' -f 2)
hdmi1_card=$(aplay -l | grep "hdmi1" | cut -d ':' -f 1 | cut -d ' ' -f 2)
hdmiin_card=$(arecord -l | grep "hdmiin" | cut -d ":" -f 1 | cut -d ' ' -f 2)

DISPLAY=:0.0 gst-launch-1.0 v4l2src device=${device_id} io-mode=4 ! videoconvert \
	! video/x-raw,format=NV12,width=${width},height=${heigh} \
	! videoscale ! video/x-raw,width=1280,height=720 \
	! autovideosink sync=false 2>&1 > /dev/null &

gst-launch-1.0 alsasrc device=hw:${hdmiin_card},0 ! audioconvert ! audioresample ! queue \
	! tee name=t ! queue ! alsasink device="hw:${hdmi0_card},0" \
	t. ! queue ! alsasink device="hw:${hdmi1_card},0" &

while true
do
	sleep 10
done
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/cae5a2d7dbc14319ab3a978edd1211db.png)