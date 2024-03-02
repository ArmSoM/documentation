---
sidebar_label: "Camera 使用"
sidebar_position: 6
---

# Camera 使用

## 1. Camera 简介
- ArmSoM系列产品使用的是mipi-csi接口的摄像头

- ArmSoM-Sige7支持双摄同显：
![rockchip-camera-interface](/img/general-tutorial/interface-usage/camera-interface.png)v

## 2. RK3588硬件通路框图
![rockchip-camera-hardware-phy](/img/general-tutorial/interface-usage/camera-hardware-phy.png)


- rk3588支持2个isp硬件，每个isp设备可虚拟出多个虚拟节点，软件上通过回读的方式，依次从ddr读取每一路的图像数据进isp处理。对于多摄方案，建议将数据流平均分配到两个isp上。

- 回读：指数据经过vicap采集到ddr，应用获取到数据后，将buffer地址推送给isp，isp再从ddr获取图像数据。
## 3. RK3588 的camera通路:

**多sensor支持：**

- 单路硬件isp最多支持4路复用，isp复用情况支持分辨率如下：
- 2路复用：最大分辨率3840x2160，dts对应配置2路rkisp_vir设备。
- 3路或4路复用：最大分辨率2560x1536，dts对应配置3或4路rkisp_vir设备。
- 硬件支持最多采集7路sensor：6mipi + 1dvp，多sensor软件通路如下：

**下图是RK3588 camera连接链路示意图，可以支持7路camera。**
![rockchip-camera-entity](/img/general-tutorial/interface-usage/camera-entity.png)

## 4.  链路解析：
![rockchip-camera-entity-single](/img/general-tutorial/interface-usage/camera-entity-single.png)




- 图中：mipi camera2---> <font color="red" size="3">csi2_dphy1</font> ---> mipi2_csi2 ---> rkcif_mipi_lvds2--->rkcif_mipi_lvds2_sditf --->rkisp0_vir2
	
- 对应节点：imx415 ---> <font color="red" size="3">csi2_dphy0</font> ---> mipi2_csi2 ---> rkcif_mipi_lvds2--->rkcif_mipi_lvds2_sditf --->rkisp0_vir2
	
- 链接关系：sensor---> csi2 dphy---->mipi csi host--->vicap
	
- 实线链路解析： Camera sensor ---> dphy ---> 通过mipi_csi2模块解析mipi协议---> vicap <font color="red" size="3">( rkcif节点代表vicap )</font>
	
- 虚线链路解析：vicap ---> rkcif_mipi_lvds2_sditf --->  isp

	<font color="red" size="3">每个vicap节点与isp的链接关系，通过对应虚拟出的XXX_sditf来指明链接关系。</font>
	
	
	
## 5. ArmSoM-Sige7双路Camera调试

这里以imx415摄像头为例，解析ArmSoM-Sige7双路Camera调试
### 5.1 原理图
#### Camera1：CSI0_MIPI：
![rockchip-camera-sch](/img/general-tutorial/interface-usage/camera-sch.png)

#### Camera2： CS1_MIPI：
![rockchip-camera-sch1](/img/general-tutorial/interface-usage/camera-sch1.png)

### 5.2  双路Camera的dts配置：

- **链路配置1： imx415 —> csi2_dphy0 —> mipi2_csi2 —> rkcif_mipi_lvds2—>rkcif_mipi_lvds2_sditf —>rkisp0_vir2**
- **链路配置2： imx415 —> csi2_dphy3 —> mipi4_csi2 —> rkcif_mipi_lvds4—>rkcif_mipi_lvds4_sditf —>rkisp1_vir1**
	```bash
	&i2c3 {
		status = "okay";
	
		imx415: imx415@1a {
			status = "okay";
			compatible = "sony,imx415";
			reg = <0x1a>;
			clocks = <&cru CLK_MIPI_CAMARAOUT_M3>;
			clock-names = "xvclk";
			pinctrl-names = "default";
			pinctrl-0 = <&mipim0_camera3_clk>;
			power-domains = <&power RK3588_PD_VI>;
			pwdn-gpios = <&gpio1 RK_PB0 GPIO_ACTIVE_HIGH>;
			reset-gpios = <&gpio4 RK_PA0 GPIO_ACTIVE_LOW>;
			rockchip,camera-module-index = <0>;
			rockchip,camera-module-facing = "back";
			rockchip,camera-module-name = "CMK-OT2022-PX1";
			rockchip,camera-module-lens-name = "IR0147-50IRC-8M-F20";
			port {
				imx415_out0: endpoint {
					remote-endpoint = <&mipidphy0_in_ucam0>;
					data-lanes = <1 2 3 4>;
				};
			};
		};
	};
	
	&i2c4 {
		status = "okay";
		pinctrl-names = "default";
		pinctrl-0 = <&i2c4m1_xfer>;
		imx415_1: imx415_1@1a {
			status = "okay";
			compatible = "sony,imx415";
			reg = <0x1a>;
			clocks = <&cru CLK_MIPI_CAMARAOUT_M2>;
			clock-names = "xvclk";
			pinctrl-names = "default";
			pinctrl-0 = <&mipim0_camera2_clk>;
			power-domains = <&power RK3588_PD_VI>;
			pwdn-gpios = <&gpio3 RK_PA2 GPIO_ACTIVE_HIGH>;
			reset-gpios = <&gpio3 RK_PA0 GPIO_ACTIVE_LOW>;
			rockchip,camera-module-index = <1>;
			rockchip,camera-module-facing = "back";
			rockchip,camera-module-name = "CMK-OT2022-PX1";
			rockchip,camera-module-lens-name = "IR0147-50IRC-8M-F20";
			port {
				imx415_out3: endpoint {
					remote-endpoint = <&mipidphy3_in_ucam3>;
					data-lanes = <1 2 3 4>;
				};
			};
		};
	
	};
	
	&csi2_dphy0_hw {
		status = "okay";
	};
	
	&csi2_dphy1_hw {
		status = "okay";
	};
	
	&csi2_dphy0 {
		status = "okay";
	
		ports {
			#address-cells = <1>;
			#size-cells = <0>;
	
			port@0 {
				reg = <0>;
				#address-cells = <1>;
				#size-cells = <0>;
	
				mipidphy0_in_ucam0: endpoint@1 {
					reg = <1>;
					remote-endpoint = <&imx415_out0>;
					data-lanes = <1 2 3 4>;
				};
	
			};
	
			port@1 {
				reg = <1>;
				#address-cells = <1>;
				#size-cells = <0>;
	
				csidphy0_out: endpoint@0 {
					reg = <0>;
					remote-endpoint = <&mipi2_csi2_input>;
				};
			};
		};
	};
	
	&csi2_dphy3 {
		status = "okay";
	
		ports {
			#address-cells = <1>;
			#size-cells = <0>;
	
			port@0 {
				reg = <0>;
				#address-cells = <1>;
				#size-cells = <0>;
	
				mipidphy3_in_ucam3: endpoint@1 {
					reg = <1>;
					remote-endpoint = <&imx415_out3>;
					data-lanes = <1 2 3 4>;
				};
	
			};
	
			port@1 {
				reg = <1>;
				#address-cells = <1>;
				#size-cells = <0>;
	
				csidphy3_out: endpoint@0 {
					reg = <0>;
					remote-endpoint = <&mipi4_csi2_input>;
				};
			};
		};
	};
	
	&mipi2_csi2 {
		status = "okay";
	
		ports {
			#address-cells = <1>;
			#size-cells = <0>;
	
			port@0 {
				reg = <0>;
				#address-cells = <1>;
				#size-cells = <0>;
	
				mipi2_csi2_input: endpoint@1 {
					reg = <1>;
					remote-endpoint = <&csidphy0_out>;
				};
			};
	
			port@1 {
				reg = <1>;
				#address-cells = <1>;
				#size-cells = <0>;
	
				mipi2_csi2_output: endpoint@0 {
					reg = <0>;
					remote-endpoint = <&cif_mipi2_in0>;
				};
			};
		};
	};
	
	&mipi4_csi2 {
		status = "okay";
	
		ports {
			#address-cells = <1>;
			#size-cells = <0>;
	
			port@0 {
				reg = <0>;
				#address-cells = <1>;
				#size-cells = <0>;
	
				mipi4_csi2_input: endpoint@1 {
					reg = <1>;
					remote-endpoint = <&csidphy3_out>;
				};
			};
	
			port@1 {
				reg = <1>;
				#address-cells = <1>;
				#size-cells = <0>;
	
				mipi4_csi2_output: endpoint@0 {
					reg = <0>;
					remote-endpoint = <&cif_mipi_in4>;
				};
			};
		};
	};
	
	&rkcif {
		status = "okay";
	};
	
	&rkcif_mipi_lvds2 {
		status = "okay";
	
		port {
			cif_mipi2_in0: endpoint {
				remote-endpoint = <&mipi2_csi2_output>;
			};
		};
	};
	
	&rkcif_mipi_lvds2_sditf {
		status = "okay";
	
		port {
			mipi_lvds2_sditf: endpoint {
				remote-endpoint = <&isp0_vir2>;
			};
		};
	};
	
	&rkcif_mipi_lvds4 {
		status = "okay";
	
		port {
			cif_mipi_in4: endpoint {
				remote-endpoint = <&mipi4_csi2_output>;
			};
		};
	};
	
	&rkcif_mipi_lvds4_sditf {
		status = "okay";
	
		port {
			mipi4_lvds_sditf: endpoint {
				remote-endpoint = <&isp1_vir1>;
			};
		};
	};
	
	&rkcif_mmu {
		status = "okay";
	};
	
	&rkisp0 {
		status = "okay";
	};
	
	&isp0_mmu {
		status = "okay";
	};
	
	&rkisp0_vir2 {
		status = "okay";
	
		port {
			#address-cells = <1>;
			#size-cells = <0>;
	
			isp0_vir2: endpoint@0 {
				reg = <0>;
				remote-endpoint = <&mipi_lvds2_sditf>;
			};
		};
	};
	
	&rkisp1 {
		status = "okay";
	};
	
	&isp1_mmu {
		status = "okay";
	};
	
	&rkisp1_vir1 {
		status = "okay";
	
		port {
			#address-cells = <1>;
			#size-cells = <0>;
	
			isp1_vir1: endpoint@0 {
				reg = <0>;
				remote-endpoint = <&mipi4_lvds_sditf>;
			};
		};
	};
	
	
	&pinctrl {
		camera {
			cam_pwdn_gpio: cam-pwdn-gpio {
				rockchip,pins = <1 RK_PB0 RK_FUNC_GPIO &pcfg_pull_up>;
			};
		};
	};
	```

## 6. 调试技巧
### 6.1 查看Camera是否挂载到i2c总线下


```bash
i2cdetect -y 3
```
### 6.2 查看拓扑结构

```bash
 media-ctl -d /dev/media0 -p
```

### 6.3 imx415 相关的log信息
```bash
dmesg | grep imx415
```
### 6.4 查看sys文件系统中文件信息
内核会为摄像头在目录/sys/class/video4linux下分配设备信息描述文件

```bash
armsom@armsom:~$  grep imx415 /sys/class/video4linux/v*/name
/sys/class/video4linux/v4l-subdev2/name:m00_b_imx415 3-001a
/sys/class/video4linux/v4l-subdev7/name:m01_b_imx415 4-001a
```
查找Camera对应的vedio节点：
```bash
armsom@armsom:~$ grep "" /sys/class/video4linux/v*/name | grep mainpath
/sys/class/video4linux/video22/name:rkisp_mainpath
/sys/class/video4linux/video31/name:rkisp_mainpath
```
可以看到，在ArmSoM-Sige7中，双Camera的节点对应的是：video22和video31

### 6.5 查找所有摄像头设备

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
### 6.6 查看设备的预览支持格式
如下是video22节点： imx415 摄像头的查询结果：

```bash
armsom@armsom:~$ v4l2-ctl -d /dev/video22 --list-formats-ext
ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture Multiplanar

        [0]: 'UYVY' (UYVY 4:2:2)
                Size: Stepwise 32x32 - 3840x2160 with step 8/8
        [1]: 'NV16' (Y/CbCr 4:2:2)
                Size: Stepwise 32x32 - 3840x2160 with step 8/8
        [2]: 'NV61' (Y/CrCb 4:2:2)
                Size: Stepwise 32x32 - 3840x2160 with step 8/8
        [3]: 'NV21' (Y/CrCb 4:2:0)
                Size: Stepwise 32x32 - 3840x2160 with step 8/8
        [4]: 'NV12' (Y/CbCr 4:2:0)
                Size: Stepwise 32x32 - 3840x2160 with step 8/8
        [5]: 'NM21' (Y/CrCb 4:2:0 (N-C))
                Size: Stepwise 32x32 - 3840x2160 with step 8/8
        [6]: 'NM12' (Y/CbCr 4:2:0 (N-C))
                Size: Stepwise 32x32 - 3840x2160 with step 8/8
```
### 6.7 查看设备的所有信息：

```bash
armsom@armsom:~$ v4l2-ctl --all --device /dev/video22
Driver Info:
        Driver name      : rkisp_v6
        Card type        : rkisp_mainpath
        Bus info         : platform:rkisp0-vir0
        Driver version   : 2.3.0
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
        Driver name      : rkisp0-vir0
        Model            : rkisp0
        Serial           :
        Bus info         :
        Media version    : 5.10.160
        Hardware revision: 0x00000000 (0)
        Driver version   : 5.10.160
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
        Width/Height      : 3840/2160
        Pixel Format      : 'NM12' (Y/CbCr 4:2:0 (N-C))
        Field             : None
        Number of planes  : 2
        Flags             :
        Colorspace        : sRGB
        Transfer Function : Rec. 709
        YCbCr/HSV Encoding: Rec. 709
        Quantization      : Full Range
        Plane 0           :
           Bytes per Line : 3840
           Size Image     : 8294400
        Plane 1           :
           Bytes per Line : 3840
           Size Image     : 4147200
Selection Video Capture: crop, Left 0, Top 0, Width 3840, Height 2160, Flags:
Selection Video Capture: crop_bounds, Left 0, Top 0, Width 3840, Height 2160, Flags:
Selection Video Output: crop, Left 0, Top 0, Width 3840, Height 2160, Flags:
Selection Video Output: crop_bounds, Left 0, Top 0, Width 3840, Height 2160, Flags:

Image Processing Controls

                     pixel_rate 0x009f0902 (int64)  : min=0 max=1000000000 step=1 default=1000000000 value=356800000 flags=read-only, volatile
```

### 6.8 摄像头预览
ArmSoM-Sige7中，双Camera的预览命令：

- 预览摄像头1：

```bash
gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 ! videoconvert ! autovideosink
```

- 预览摄像头2：

```bash
gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 ! videoconvert ! autovideosink
```

![rockchip-camera-gts](/img/general-tutorial/interface-usage/camera-gts.png)

## 7. Camera应用程序开发
客户可以根据自己的需求进行Camera相关的应用程序开发，如下是使用QT开发的双摄同显应用程序：

![rockchip-camera-gts](/img/general-tutorial/interface-usage/camera-gts.png)
