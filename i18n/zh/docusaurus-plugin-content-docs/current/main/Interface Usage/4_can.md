---
sidebar_label: "4. CAN 使用"
sidebar_position: 4
---

# 4. CAN 使用
## 4.1 CAN 简介

CAN 协议是在 1980 年代由 Bosch 公司开发的，旨在满足汽车工业的需求，但随着时间的推移，它逐渐应用于其他领域。CAN 是一种基于消息的通信协议，允许多台设备通过总线进行通信。每个设备（节点）可以向总线上发送消息，所有设备都可以接收这些消息。

主要特点：
- 多主机：CAN是一个多主机总线系统，所有节点都可以发起通信。
- 实时性：CAN协议具有实时性，适合于时效性要求高的应用。
- 容错性：CAN协议具有强大的错误检测与容错能力，可以在恶劣的环境下可靠工作。
- 优先级：消息优先级由消息ID确定，ID越小，优先级越高。

## 4.2 CAN 使用实例

### 4.2.1 CAN 引脚

以ArmSoM-Sige7为实例，CAN在40PIN中的位置: 

[Sige7 40PIN定义](/interface-usage/40pin#16-armsom-sige7)

| I2C    | 引脚       | 功能 | 
| -------- | ----------- | ----------- |
| CAN1_TX_M1 | 3            | can1_m1 数据传输引脚|
| CAN1_RX_M1 | 5            | can1_m1 数据接收引脚|
| CAN1_RX_M0 | 12           | can1_m0 数据传输引脚|
| CAN1_TX_M0 | 35           | can1_m0 数据接收引脚|

### 4.2.2 硬件连接
CAN模块之间接线：CAN_TX接CAN_TX，CAN_RX接CAN_RX。

![can-real](/img/general-tutorial/interface-usage/can-real.png)

### 4.2.3 内核配置
- rockchip_linux_defconfig配置：

```bash
CONFIG_CAN=y

CONFIG_CAN_DEV=y

CONFIG_CAN_ROCKCHIP=y

CONFIG_CANFD_ROCKCHIP=y
```
- 内核配置：
```bash
cd kernel

make ARCH=arm64 menuconfig

make savedefconfig
```
- 选择：Networking support ---> CAN bus subsystem support (*)--->CAN Device Drivers(*) ---> Platform CAN drivers with Netlink support(*)

![can-config](/img/general-tutorial/interface-usage/can-config.png)

### 4.2.4 DTS 节点配置

**主要参数:**

- interrupts
转换完成，产生中断信号。

- clock
时钟属性，用于驱动开关clk，reset属性，用于每次复位总线。

- pinctrl
配置CAN相关的引脚信息，功能复用

```bash
/* can1 */
&can1 {
		compatible = "rockchip,can-2.0";
	    reg = <0x0 0xfea60000 0x0 0x1000>;
		interrupts = <GIC_SPI 342 IRQ_TYPE_LEVEL_HIGH>;
		clocks = <&cru CLK_CAN1>, <&cru PCLK_CAN1>;
		clock-names = "baudclk", "apb_pclk";
		resets = <&cru SRST_CAN1>, <&cru SRST_P_CAN1>;
		reset-names = "can", "can-apb";
		tx-fifo-depth = <1>;
		rx-fifo-depth = <6>;
		status = "okay";
		assigned-clocks = <&cru CLK_CAN1>;
		assigned-clock-rates = <200000000>;
		pinctrl-names = "default";
		pinctrl-0 = <&can1m0_pins>;      #根据原理图进行配置
};
```

- compatible = “rockchip,can-1.0” ，rockchip,can-1.0用来匹配can控制器驱动。

- compatible = “rockchip,can-2.0” ，rockchip,can-2.0用来匹配canfd控制器驱动。

- assigned-clock-rates用来配置can的始终频率，如果CAN的比特率低于等于3M建议修改CAN时钟到100M，信号更稳定。高于3M比特率的，时钟设置200M就可以。

- pinctrl配置：根据实际板卡连接情况配置can_h和can_l的iomux作为can功能使用。

### 4.2.5 使能 CAN 通信接口

CAN接口在默认情况是关闭状态的，需要使能才能使用

在 ubuntu/debain 操作系统中，/boot/uEnv/uEnv.txt 文件用于配置系统启动时的参数和设备树插件。你可以通过编辑该文件来启用或禁用 CAN 设备树插件，确保 CAN 总线可以在启动时正确加载。

如果你希望检查或启用 CAN 相关设备树插件，可以按照以下步骤操作：

 **查看设备树插件配置**

打开文件： 通过终端打开 /boot/uEnv/uEnv.txt 文件，使用文本编辑器如 nano 或 vim，例如：

```bash
root@armsom:/boot# vi /uEnv/uEnv.txt
```

这里以激活 can-m1 为例，将 rk3588-can1-m1 打开如下:

```
dtoverlay=/dtb/overlay/rk3588-armsom-can1-m1.dtbo
#dtoverlay=/dtb/overlay/rk3588-armsom-i2c0-m1.dtbo
```

将dtoverlay前的`#`去掉，编辑完成后，保存文件并退出编辑器 重启系统使配置生效：

```
// 先执行sync
root@armsom:/home/armsom# sync
root@armsom:/home/armsom# sudo reboot
```

:::tip
- Q: 如果直接拔掉电源进行重启，是否可能导致文件未修改或 overlay 系统启动失败？
- A: 当直接拔掉电源或强制关机时，可能会出现文件未能及时从内存（RAM）同步到存储设备（如硬盘、SSD）的情况。这是因为操作系统通常会将数据暂存于内存中，并定期将这些数据写入磁盘。为避免此问题，建议在关机前执行 “sync” 命令，确保所有数据已写入磁盘，再拔掉电源或关机。
:::

## 4.3 CAN 通信测试

- 查询当前⽹络设备:

```bash
ifconfig -a
```

- CAN启动
```bash
ip link set can0 down   //关闭CAN

ip link set can0 type can bitrate 500000   #设置⽐特率500KHz

ip -details -statistics link show can0    #打印can0信息
	
ip link set can0 up     //启动CAN
```
- CAN发送

```bash
cansend can0 123#DEADBEEF            #发送（标准帧,数据帧,ID:123,date:DEADBEEF）

cansend can0 123#R                   #发送（标准帧,远程帧,ID:123）
	
cansend can0 00000123#12345678       #发送（扩展帧,数据帧,ID:00000123,date:DEADBEEF）

cansend can0 00000123#R              #发送（扩展帧,远程帧,ID:00000123）
```
- CAN接收

```bash
candump can0       //candump can0
```