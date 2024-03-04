---
sidebar_label: "Display 使用"
sidebar_position: 6
---

# Display 使用
## 1. Display简介

 RK3588 的VOP (video output process)分为4个Port:
| port | 分辨率 |
| ---- | ------ |
| VP0  | 4K     |
| VP1  | 4K     |
| VP2  | 4K     |
| VP3  | 1080P  |

RK3588 VP 和各显⽰接口的连接关系：
![display-rk3588-vp](/img/general-tutorial/interface-usage/display-rk3588-vp.png)
需要注意的是，RK3588 的 HDMI 和 DP ⽀持 8K 输出，但是在 8K 输出模式下，⼀个显⽰接口需要同时占⽤ VP0 和 VP1 。所以如果产
品上需要⽀持 8K 显⽰输出，VP1 上要注意不要连接其他显⽰接口。

### 1.2 RK3588支持的显示接口
- 2个DP
- 2个HDMI/eDP 共用接口
- 2个MIPI DSI
- BT656/BT1120
## 2. ArmSoM-W3显示接口

ArmSoM-W3有着丰富的显示接口。最多支持四路显示输出：两路HDMI,一路MIPI-DSI,外加一路DP接口。可以做到多屏同显/异显。
![dispaly-armsom-w3](/img/general-tutorial/interface-usage/dispaly-armsom-w3.jpg)

下面对各个显示输出接口的配置和使用作基本的介绍
## 3. HDMI
- ArmSoM-W3硬件上有两个 HDMI 显示输出接口：2x HDMI OUT2.1
- 其中一个HDMI OUT 支持 8K@60fps 或者 4K@120fps另一个HDMI OUT 支持 4K@60fps
## 3.1 HDMI相关的DTS配置
- kernel\arch\arm64\boot\dts\rockchip\rk3588-armsom-w3.dts

```bash
//打开 HDMI0 功能
&hdmi0 {
		status = "okay";
};

//打开 HDMI0 的 硬件 phy
&hdptxphy_hdmi0 {
		status = "okay";
};

//配置HDMI0到VP0上面
&hdmi0_in_vp0 {
		status = "okay";
};

//打开 HDMI0 音频输出
&hdmi0_sound {
		status = "okay";
};

//配置HDMI0上面显示开机logo
&route_hdmi0 {
		status = "okay";
};

//打开 hdmi1 功能
&hdmi1 {
		status = "okay";
};

//打开 hdmi1 的 硬件 phy
&hdptxphy_hdmi1 {
	status = "okay";
};

//配置HDMI1到VP1上面
&hdmi1_in_vp1 {
		status = "okay";
};

//打开 HDMI1 音频输出
&hdmi1_sound {
		status = "okay";
};

//配置HDMI1上面显示开机logo
&route_hdmi1 {
		status = "okay";
};
```

## 4. DP
ArmSoM-W3硬件上有一个 Type-C 接口输出的DP，分辨率可达 8192x4320@30Hz， PHY 链路速率可以达到 8.1Gbps/lane。
### 4.1 DTS配置
####  4.1.1 DP 控制器的配置如下：

```bash
&dp0 {
status = "okay";
};
&dp0_in_vp2 {
status = "okay";
};
```
###  4.1.2 PHY 配置如下:

```bash
&usbdp_phy0 {
	status = "okay";
	orientation-switch;
	svid = <0xff01>;
	sbu1-dc-gpios = <&gpio4 RK_PA6 GPIO_ACTIVE_HIGH>;
	sbu2-dc-gpios = <&gpio4 RK_PA7 GPIO_ACTIVE_HIGH>;

	port {
		#address-cells = <1>;
		#size-cells = <0>;
		usbdp_phy0_orientation_switch: endpoint@0 {
			reg = <0>;
			remote-endpoint = <&usbc0_orien_sw>;
		};

		usbdp_phy0_dp_altmode_mux: endpoint@1 {
			reg = <1>;
			remote-endpoint = <&dp_altmode_mux>;
		};
	};
};
```
####  4.1.3 Type-C 接口配置PD 芯片
Type-C 接口需要通过 Type-C 的 CC 检测和 PD 协商来配置 lane 和 HPD 的状态， 所以还需要配置 PD 芯
⽚(当前⽀持的 PD 芯⽚有 fusb302, husb311)：
```bash
&i2c4 {
	status = "okay";
	pinctrl-names = "default";
	pinctrl-0 = <&i2c4m1_xfer>;

	usbc0: fusb302@22 {
		compatible = "fcs,fusb302";
		reg = <0x22>;
		interrupt-parent = <&gpio3>;
		interrupts = <RK_PB4 IRQ_TYPE_LEVEL_LOW>;
		int-n-gpios = <&gpio3 RK_PB4 GPIO_ACTIVE_LOW>;
		pinctrl-names = "default";
		pinctrl-0 = <&usbc0_int>;
		//vbus-supply = <&vcc12v_dcin>;
		vbus-supply = <&vbus5v0_typec>;
		status = "okay";

		ports {
			#address-cells = <1>;
			#size-cells = <0>;

			port@0 {
				reg = <0>;
				usbc0_role_sw: endpoint@0 {
					remote-endpoint = <&dwc3_0_role_switch>;
				};
			};
		};

		usb_con: connector {
			compatible = "usb-c-connector";
			label = "USB-C";
			data-role = "dual";
			power-role = "dual";
			try-power-role = "sink";
			op-sink-microwatt = <1000000>;
			sink-pdos =
				<PDO_FIXED(5000, 3000, PDO_FIXED_USB_COMM)
				 PDO_FIXED(9000, 3000, PDO_FIXED_USB_COMM)
				 PDO_FIXED(12000, 3000, PDO_FIXED_USB_COMM)>;
			source-pdos =
				<PDO_FIXED(5000, 3000, PDO_FIXED_USB_COMM)>;

			altmodes {
				#address-cells = <1>;
				#size-cells = <0>;

				altmode@0 {
					reg = <0>;
					svid = <0xff01>;
					vdo = <0xffffffff>;
				};
			};

			ports {
				#address-cells = <1>;
				#size-cells = <0>;

				port@0 {
					reg = <0>;
					usbc0_orien_sw: endpoint {
						remote-endpoint = <&usbdp_phy0_orientation_switch>;
					};
				};

				port@1 {
					reg = <1>;
					dp_altmode_mux: endpoint {
						remote-endpoint = <&usbdp_phy0_dp_altmode_mux>;
					};
				};
			};
		};
	};
};
```

####  4.1.4  配置DP开机 logo

```bash
 &route_dp0 {
	status = "okay";
	connect = <&vp2_out_dp0>;
};
```

需要注意的是，这⾥的 connect 属性配置 DP 在 U-Boot 阶段绑定 VOP Port2, 所以 dtsi 中的配置要允许 DP绑定 VOP Port2：

```bash
&dp0_in_vp2 {
	status = "okay";
};
```


<font color="red" size="3">Note: ⽬前不⽀持 Type-C 接口的 DP 开机 logo!</font>
## 4.2 调试
### 4.2.1 查看 connector 状态：
在 /sys/class/drm ⽬录下可以看到驱动注册的各个 card，其中 card0-DP-1 是 DP 显⽰设备

```bash
armsom@armsom:~$ ls /sys/class/drm/
card0  card0-DP-1  card0-HDMI-A-1  card0-Writeback-1  card1  renderD128  renderD129  version
```

以 card0-DP-1 为例，其⽬录下有如下内容：

```bash
armsom@armsom:~$ ls /sys/class/drm/card0-DP-1/
device  dpms  edid  enabled  modes  power  status  subsystem  uevent
```

enable 查看使能状态：

```bash
armsom@armsom:~$ cat /sys/class/drm/card0-DP-1/enabled
disabled
```

status 查看连接状态：

```bash
armsom@armsom:~$ cat /sys/class/drm/card0-DP-1/status
disconnected
```

#### 4.2.2 强制使能/禁⽤ DP

```bash
#强制禁⽤ DP
rk3588_s:/ # echo off > /sys/class/drm/card0-DP-1/status
#强制使能 DP
rk3588_s:/ # echo on > /sys/class/drm/card0-DP-1/status
#恢复热插拔检测
rk3588_s:/ # echo detect > /sys/class/drm/card0-DP-1/status
```

## 5. MIPI DSI
ArmSoM-W3硬件上有一个 MIPI-DSI 显示输出接口，支持 DPHY2.0 和 4 Lane 的数据输出，分辨率可达 4K@60Hz

### 5.1 原理图
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/6726bca27e1c41449adc14764512d4aa.png)



### 5.2 屏幕显示时序图
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/384b3575436b49b2b9e740194ced7205.png)

### 5.3 MIPI DSI相关的DTS配置
#### 5.3.1背光配置

```bash
dsi1_backlight: dsi1-backlight {
		status = "okay";
		compatible = "pwm-backlight";
		pwms = <&pwm2 0 25000 0>;
		brightness-levels = <
			  0  20  20  21  21  22  22  23
			 23  24  24  25  25  26  26  27
			 27  28  28  29  29  30  30  31
			 31  32  32  33  33  34  34  35
			 35  36  36  37  37  38  38  39
			 40  41  42  43  44  45  46  47
			 48  49  50  51  52  53  54  55
			 56  57  58  59  60  61  62  63
			 64  65  66  67  68  69  70  71
			 72  73  74  75  76  77  78  79
			 80  81  82  83  84  85  86  87
			 88  89  90  91  92  93  94  95
			 96  97  98  99 100 101 102 103
			104 105 106 107 108 109 110 111
			112 113 114 115 116 117 118 119
			120 121 122 123 124 125 126 127
			128 129 130 131 132 133 134 135
			136 137 138 139 140 141 142 143
			144 145 146 147 148 149 150 151
			152 153 154 155 156 157 158 159
			160 161 162 163 164 165 166 167
			168 169 170 171 172 173 174 175
			176 177 178 179 180 181 182 183
			184 185 186 187 188 189 190 191
			192 193 194 195 196 197 198 199
			200 201 202 203 204 205 206 207
			208 209 210 211 212 213 214 215
			216 217 218 219 220 221 222 223
			224 225 226 227 228 229 230 231
			232 233 234 235 236 237 238 239
			240 241 242 243 244 245 246 247
			248 249 250 251 252 253 254 255
		>;
		default-brightness-level = <200>;
		enable-gpios = <&gpio2 RK_PC2 GPIO_ACTIVE_HIGH>;
		pinctrl-names = "default";
		pinctrl-0 = <&dsi1_backlight_en>;
	};
```
#### 5.3.2 屏幕上电时序以及参数配置

```bash
&dsi1 {
	status = "okay";
	dsi1_panel: panel@0 {
		status = "okay";
		compatible = "simple-panel-dsi";
		reg = <0>;
		power-supply = <&vcc_lcd_mipi1>;  //使用gpio模拟regulator
		reset-gpios = <&gpio2 RK_PC1 GPIO_ACTIVE_LOW>;
		backlight = <&dsi1_backlight>;
		pinctrl-names = "default";
		pinctrl-0 = <&dsi1_lcd_rst_gpio>;
		reset-delay-ms = <10>;
		enable-delay-ms = <10>;
		prepare-delay-ms = <10>;
		unprepare-delay-ms = <10>;
		disable-delay-ms = <10>;
		dsi,flags = <(MIPI_DSI_MODE_VIDEO | MIPI_DSI_MODE_VIDEO_BURST |
			MIPI_DSI_MODE_LPM | MIPI_DSI_MODE_EOT_PACKET)>;
		dsi,format = <MIPI_DSI_FMT_RGB888>;
		dsi,lanes  = <4>;
		panel-init-sequence = [
			15 00 02 B0 01
			15 00 02 C0 26
			15 00 02 C1 10
			15 00 02 C2 0E
			15 00 02 C3 00
			15 00 02 C4 00
			15 00 02 C5 23
			15 00 02 C6 11
			15 00 02 C7 22
			15 00 02 C8 20
			15 00 02 C9 1E
			15 00 02 CA 1C
			15 00 02 CB 0C
			15 00 02 CC 0A
			15 00 02 CD 08
			15 00 02 CE 06
			15 00 02 CF 18
			15 00 02 D0 02
			15 00 02 D1 00
			15 00 02 D2 00
			15 00 02 D3 00
			15 00 02 D4 26
			15 00 02 D5 0F
			15 00 02 D6 0D
			15 00 02 D7 00
			15 00 02 D8 00
			15 00 02 D9 23
			15 00 02 DA 11
			15 00 02 DB 21
			15 00 02 DC 1F
			15 00 02 DD 1D
			15 00 02 DE 1B
			15 00 02 DF 0B
			15 00 02 E0 09
			15 00 02 E1 07
			15 00 02 E2 05
			15 00 02 E3 17
			15 00 02 E4 01
			15 00 02 E5 00
			15 00 02 E6 00
			15 00 02 E7 00
			15 00 02 B0 03
			15 00 02 BE 04
			15 00 02 B9 40
			15 00 02 CC 88
			15 00 02 C8 0C
			15 00 02 C9 07
			15 00 02 CD 01
			15 00 02 CA 40
			15 00 02 CE 1A
			15 00 02 CF 60
			15 00 02 D2 08
			15 00 02 D3 08
			15 00 02 DB 01
			15 00 02 D9 06
			15 00 02 D4 00
			15 00 02 D5 01
			15 00 02 D6 04
			15 00 02 D7 03
			15 00 02 C2 00
			15 00 02 C3 0E
			15 00 02 C4 00
			15 00 02 C5 0E
			15 00 02 DD 00
			15 00 02 DE 0E
			15 00 02 E6 00
			15 00 02 E7 0E
			15 00 02 C2 00
			15 00 02 C3 0E
			15 00 02 C4 00
			15 00 02 C5 0E
			15 00 02 DD 00
			15 00 02 DE 0E
			15 00 02 E6 00
			15 00 02 E7 0E
			15 00 02 B0 06
			15 00 02 C0 A5
			15 00 02 D5 1C
			15 00 02 C0 00
			15 00 02 B0 00
			15 00 02 BD 30

			15 00 02 F9 5C
			15 00 02 C2 14
			15 00 02 C4 14
			15 00 02 BF 15
			15 00 02 C0 0C


			15 00 02 B0 00
			15 00 02 B1 79
			15 00 02 BA 8F

			05 78 01 11
			05 78 01 29
		];

		panel-exit-sequence = [
			05 32 01 28
			05 78 01 10
		];

		disp_timings1: display-timings {
			native-mode = <&dsi1_timing0>;
			dsi1_timing0: timing0 {
				clock-frequency = <160000000>;
				hactive = <1200>;
				vactive = <1920>;
				hfront-porch = <80>;
				hsync-len = <1>;
				hback-porch = <60>;
				vfront-porch = <35>;
				vsync-len = <1>;
				vback-porch = <25>;
				hsync-active = <0>;
				vsync-active = <0>;
				de-active = <0>;
				pixelclk-active = <1>;
			};
		};
		ports {
			#address-cells = <1>;
			#size-cells = <0>;

			port@0 {
				reg = <0>;
				panel_in_dsi1: endpoint {
					remote-endpoint = <&dsi1_out_panel>;
				};
			};
		};
	};
	ports {
		#address-cells = <1>;
		#size-cells = <0>;

		port@1 {
			reg = <1>;
			dsi1_out_panel: endpoint {
				remote-endpoint = <&panel_in_dsi1>;
			};
		};
	};
};
```
#### 5.3.3 打开对应的dsi节点，开机logo


```bash
//打开背光的pwm节点
	&pwm2 {
	    status = "okay";
	    pinctrl-names = "active";
	    pinctrl-0 = <&pwm2m2_pins>;
	};
	
	//在dsi1上接了一个mipi屏，这个配置开启dsi1
	 &dsi1 {
	    status = "okay";
	};
	
	&mipi_dcphy1 {
	    status = "okay";
	};
	
	//默认dsi配置vp2和vp3上面，这里配置为dsi使用vp3，可以根据屏的分辨率来确认使用vp2还是vp3，vp2支持4K，vp3只支持 2048x1536
	&dsi1_in_vp2 {
	    status = "disabled";
	};
	
	&dsi1_in_vp3 {
	    status = "okay";
	};
	
	//配置dsi1显示开机logo
	&route_dsi1 {
	    status = "okay";
	    connect = <&vp3_out_dsi1>;
	};
```
### 5.4. 调试

通过如下指令即可查询 VOP 的状态：

```bash
cat /sys/kernel/debug/dri/0/summary
```
获取的 VOP 状态如下图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/70b2fc849f38416880d52423a7b03218.png)
- Video Portx: 表⽰当前的 Video Port 的状态
- Connector: Video Port 当前连接的输出接口
- Display mode: Video Port 当前输出时序
- Clusterx-winx(Esmartx-winx): 图层信息


### 5.5 MIPI-DSI 预览
![在这里插入图片描述](https://img-blog.csdnimg.cn/f263955ed6864757b36ae5beeeb6ebcd.jpeg#pic_left =600x)