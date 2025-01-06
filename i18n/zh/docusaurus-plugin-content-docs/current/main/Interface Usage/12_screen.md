---
sidebar_label: "12. 屏幕&触摸 使用"
slug: /interface-usage/screen
sidebar_position: 12
---

# 12. 屏幕&触摸 使用

## 12.1 mipi 屏幕

ArmSoM 产品带MIPI-DSI的都支持适配了 [ArmSoM  Display 10 HD](/armsom-display-10-hd)模组

按照下图将连接好排线

![sige7-display-10-hd](/img/general-tutorial/display-10-hd.png)

:::caution
MIPI-DSI 接口不支持热插拔操作，请勿在系统通电状态下连接或断开显示屏。通电时进行连接或断开可能会导致电路短路，轻则触发板卡的保护机制自动关机，重则可能损坏芯片接口或烧毁芯片。
:::

### 12.1.2 使能 MIPI-DSI 通信接口

MIPI-CSI 接口在默认情况是关闭状态的，需要使能才能使用

在 Armbian 操作系统中，/boot/armbianEnv.txt 文件用于配置系统启动时的参数和设备树插件。

如果你希望检查或启用 MIPI-DSI 相关设备树插件，可以按照以下步骤操作：

- **查看设备树插件配置**

打开文件： 通过终端打开 /boot/armbianEnv.txt 文件，使用文本编辑器如 nano 或 vim，例如：

```bash
root@armsom-sige5:/home/armsom# sudo nano /boot/armbianEnv.txt
```

这里以激活 armsom-sige5-display-10hd 为例，将 armsom-sige5-display-10hd 打开如下:

```bash
// 根据您手上的产品选择
overlays=armsom-sige7-display-10hd // Sige7
overlays=armsom-sige5-display-10hd // Sige5
overlays=armsom-sige3-display-10hd // Sige3
```

其中 overlays 行指定了设备树覆盖（Device Tree Overlay），如果没有这些内容，你可以手动添加。

编辑完成后，保存文件并退出编辑器 重启系统使配置生效：

```
// 先执行sync
root@armsom-sige5:/home/armsom# sync
root@armsom-sige5:/home/armsom# sudo reboot
```

- **验证 ArmSoM  Display 10 HD 是否启用**

使能 armsom-sige5-display-10hd 设备树插件之后重新启动板卡,即可看到mipi dsi屏幕显示系统画面/显示终端日志

:::tip
- Q1: 如果直接拔掉电源进行重启，是否可能导致文件未修改或 overlay 系统启动失败？
- A1: 当直接拔掉电源或强制关机时，可能会出现文件未能及时从内存（RAM）同步到存储设备（如硬盘、SSD）的情况。这是因为操作系统通常会将数据暂存于内存中，并定期将这些数据写入磁盘。为避免此问题，建议在关机前执行 “sync” 命令，确保所有数据已写入磁盘，再拔掉电源或关机。
:::

## 12.2 HDMI

HDMI在默认情况下是打开的

| 型号 |Sige7 | Sige5  | Sige3 | Sige1 | LM7(w3) | CM5  | 
| ----- |  ----- | ------ |----- | ----- |----- |----- |
| 分辨率  | 8Kp60 | 4Kp120 |4Kp60|4Kp60|8Kp60 |4Kp120 |

1. 使用 HDMI 线连接 ArmSoM产品 和 HDMI 显示器
2. 启动 linux 系统后如果 HDMI 显示器有图像输出说明 HDMI 接口使用正常

:::tip
注意，很多笔记本电脑虽然带有 HDMI 接口，但是笔记本的 HDMI 接口一般只有输出功能，并没有 HDMI in 的功能，也就是说并不能将其他设备的 HDMI 输出显示到笔记本的屏幕上。
当想把开发板的 HDMI 接到笔记本电脑 HDMI 接口时，请先确认清楚您的笔记本是支持 HDMI in 的功能。
当 HDMI 没有显示的时候，请先检查使用的系统是否是带桌面的版本，如果是服务器版本只能看到终端
:::

#### 12.2.1 HDMI 转 VGA 显示测试
1. 需要准备下面的配件
- HDMI 转 VGA 转换器
- 一根 VGA 线，支持 VGA 接口的显示器

2. HDMI 转 VGA 显示测试如下所示

![sige-hdmi-vga](/img/general-tutorial/sige-hdmi-vga.jpg)

:::tip
使用 HDMI 转 VGA 显示时，ArmSoM-Sige产品和Linux系统是不需要做任何设置的，只需要开发板 HDMI 接口能正常显示就可以了。所以如果测试有问题，请检查 HDMI 转 VGA 转换器、VGA 线以及显示器是否有问题。
:::

## 12.3 typec(DP显示)

DP在默认情况下是打开的

| 型号 |Sige7 | Sige5  | Sige3 | Sige1 | LM7(w3) | CM5  | 
| ----- |  ----- | ------ |----- | ----- |----- |----- |
| 分辨率  | 8Kp60 | 4Kp120 |4Kp60|4Kp60|8Kp60 |4Kp120 |

1. 使用 typec 线连接 ArmSoM产品 和 typec 显示器
2. 启动 linux 系统后如果 typec 显示器有图像输出说明 typec 接口使用正常

:::tip
注意，ArmSoM产品typec对外输出功能为 5V/2A, 超过此范围的typec显示器建议使用外供电。如果显示设备的 DP 接口需要外供电源，你需要找到合适的电源适配器。
通常，显示设备的说明书会指定所需电源的规格，如电压、电流等参数。确保使用符合要求的电源适配器，以免损坏设备。
:::

## 12.4 屏幕调试方法

### 12.4.1 mipi 屏幕

MIPI 屏幕调试时，一般需要特别关注屏幕的上电初始化序列（`panel-init-sequence`）和下电初始化序列（`panel-exit-sequence`）。

**准备工作**

在获得一块新的 MIPI 屏幕时，屏幕厂商通常会提供两样重要资料：**屏幕规格书**和**屏幕初始化序列**。这些文档是调试和配置屏幕的关键资料。以下以 **ArmSoM Display 10 HD 屏幕** 为例来说明如何使用这些资料。

- **屏幕规格书**：在屏幕规格书中，可以找到有关屏幕的详细参数，例如分辨率、色深、接口类型等。
- **初始化序列**：屏幕厂商会提供一份初始化序列，包含了用于启动屏幕的控制命令和时序。初始化序列中包括 **panel-init-sequence**（上电初始化）和 **panel-exit-sequence**（下电初始化）代码。正确配置这些序列可以确保屏幕在开机和关机时正常工作。

例如，对于 **ArmSoM Display 10 HD** 屏幕，相关的资料文档请查阅 [ArmSoM Display 10 HD](/armsom-display-10-hd)。

![mipi-dsi](/img/general-tutorial/interface-usage/mipi-dsi.png)

#### 12.4.1.1. 调试步骤分析

mipi屏幕的点亮流程以ArmSoM-Sige5 为例，github: [armsom-sige5-display-10hd.dts](https://github.com/armbian/linux-rockchip/blob/rk-6.1-rkr4.1/arch/arm64/boot/dts/rockchip/overlay/armsom-sige5-display-10hd.dts)

1. 步骤一：先点亮屏幕背光

在 ArmSoM 的设备树配置中，需要添加关于背光控制的配置。以下是配置背光的相关步骤。

**背光配置节点**

根据 MIPI 屏幕的接口电路图，得知屏幕背光是由 PWM1 控制的。我们根据 RK 屏幕的背光配置方法，可以得到以下 `backlight` 配置节点：

```dts
backlight: backlight {
    status = "okay";
    compatible = "pwm-backlight";
    pwms = <&pwm1_6ch_1 0 25000 0>;
    brightness-levels = <
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
         95  95  95  95  95  95  95  95
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
};
```

配置解析
```
- `compatible = "pwm-backlight"`：指定该背光控制为 PWM 背光。
- `pwms = <&pwm1_6ch_1 0 25000 0>`：将 PWM 信号与背光控制关联，指定 PWM1、频率 25KHz、占空比为 0。
- `brightness-levels`：定义了背光的亮度级别，其中 95 和 200 代表亮度值，255 表示最大亮度，88 到 255 为有效亮度级别。
- `default-brightness-level = <200>`：定义默认背光亮度为 200。
```

2. **步骤二：根据屏幕规格书和初始化序列配置 MIPI DSI 节点**

在 Linux 系统中，LCD 屏幕通常需要经过初始化和反初始化的过程。因此，必须在 MIPI DSI 驱动中将厂家提供的初始化代码转化为对应的 DCS（Display Command Set）序列。由于厂家没有提供寄存器手册，我们不需要知道具体配置了哪些寄存器，只需将初始化序列代码转化为设备树格式进行配置。

以双字节命令为例，初始化代码可能类似如下：

```
Generic_Short_Write_1P(0xB0,0x01);
```

这段代码表示发送 0x15 命令并附带 2 个字节数据 `0xB0 0x01`，然后延时 5 毫秒。

```
 SET_GENERIC(4);
 W_D(0x21);W_D(0xBF);W_D(0x80);W_D(0x99);
```
我们将其转化成如下配置：
```
 39 00 04 21 BF 80 99
```

通过这种方式，用户可以将厂家提供的初始化代码逐条转化为设备树中的 DCS 配置，确保屏幕正常启动。

将初始化序列代码整理一下就可以得到RK 屏幕的DCS序列，如下

```
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
```

再结合屏幕规格书中的屏幕参数，得到如下配置。
![screen-datasheet](/img/general-tutorial/interface-usage/screen-datasheet.png)

```
disp_timings0: display-timings {
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
```

3. 步骤三：打开对应的dsi节点，开机logo


```bash
    //打开背光的pwm节点
	&pwm1_6ch_1 {
	    status = "okay";
	    pinctrl-names = "active";
	    pinctrl-0 = <&pwm1m0_ch1>;
	};
	
	&mipidcphy0 {
	    status = "okay";
	};
	
	&dsi_in_vp1 {
	    status = "okay";
	};

    &vp1 {
        assigned-clocks = <&cru DCLK_VP1_SRC>;
		assigned-clock-parents = <&cru PLL_VPLL>;
    }
	
	//配置dsi显示开机logo
	&route_dsi {
	    status = "okay";
	};
```

MIPI-DSI 预览
![display-armsom-10-hd](/img/general-tutorial/interface-usage/display-armsom-10-hd.jpeg)

#### 12.4.1.2 调试

通过如下指令即可查询 VOP 的状态：

```bash
cat /sys/kernel/debug/dri/0/summary
```
获取的 VOP 状态如下图：
![display-vop](/img/general-tutorial/interface-usage/display-vop.png)
- Video Portx: 表⽰当前的 Video Port 的状态
- Connector: Video Port 当前连接的输出接口
- Display mode: Video Port 当前输出时序
- Clusterx-winx(Esmartx-winx): 图层信息

### 12.4.2 DP 屏幕
ArmSoM-W3硬件上有一个 Type-C 接口输出的DP，分辨率可达 8192x4320@30Hz， PHY 链路速率可以达到 8.1Gbps/lane。

#### 12.4.2.1 DTS配置

DP 控制器的配置如下：

```bash
&dp0 {
status = "okay";
};
&dp0_in_vp2 {
status = "okay";
};
```

PHY 配置如下:
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

**Type-C 接口配置PD 芯片**

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

**配置DP开机 logo**

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

:::tip
⽬前不⽀持 Type-C 接口的 DP 开机 logo!
:::

#### 12.4.2.2 调试
**查看 connector 状态：**
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

**enable 查看使能状态：**

```bash
armsom@armsom:~$ cat /sys/class/drm/card0-DP-1/enabled
disabled
```

**status 查看连接状态：**

```bash
armsom@armsom:~$ cat /sys/class/drm/card0-DP-1/status
disconnected
```

**强制使能/禁⽤ DP**

```bash
#强制禁⽤ DP
rk3588_s:/ # echo off > /sys/class/drm/card0-DP-1/status
#强制使能 DP
rk3588_s:/ # echo on > /sys/class/drm/card0-DP-1/status
#恢复热插拔检测
rk3588_s:/ # echo detect > /sys/class/drm/card0-DP-1/status
```

### 12.4.3 HDMI 屏幕

**HDMI相关的DTS配置**

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