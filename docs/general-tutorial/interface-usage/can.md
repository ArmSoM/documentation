---
sidebar_label: "CAN 使用"
sidebar_position: 6
---

# 1. CAN简介

- CAN (controller Area Network)：控制器局域网络总线，是一种有效支持分布式控制或实时控制的串行通信网络。

- 目前世界上绝大多数汽车制造厂商都采用CAN总线来实现汽车内部控制系统之间的数据通信。

- RK3568/RK3588的CAN驱动文件：drivers/net/can/rockchip/rockchip_canfd.c

- 在ArmSoM-Sige7中，CAN集成在40PIN中，可供用户复用为CAN相关引脚。

# 2. 原理图
CAN在40PIN中的位置: CAN_TX对应40PIN中的第35编号，CAN_RX对应40PIN中的第12编号
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/4718d0b1ce814b36aecf2928484ab6ed.png)

# 3. 硬件连接
CAN模块之间接线：CAN_TX接CAN_TX，CAN_RX接CAN_RX。
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/28ef052b9ae740249ae37be5eb5a40ab.png)


# 4. 内核配置
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

![image-20240227150050577](C:\Users\zhouxp\AppData\Roaming\Typora\typora-user-images\image-20240227150050577.png)

# 5. DTS 节点配置
## 5.1 主要参数:

- interrupts = <GIC_SPI 1 IRQ_TYPE_LEVEL_HIGH>;
转换完成，产生中断信号。

- clock
时钟属性，用于驱动开关clk，reset属性，用于每次复位总线。

- pinctrl
配置CAN相关的引脚信息，功能复用
## 5.2 芯片级公共配置 kernel-5.10/arch/arm64/boot/dts/rockchip/rk3588s.dtsi


```bash
can0: can@fea50000 {
	            compatible = "rockchip,can-2.0";
	            reg = <0x0 0xfea50000 0x0 0x1000>;
	            interrupts = <GIC_SPI 341 IRQ_TYPE_LEVEL_HIGH>;
	            clocks = <&cru CLK_CAN0>, <&cru PCLK_CAN0>;
	            clock-names = "baudclk", "apb_pclk";
	            resets = <&cru SRST_CAN0>, <&cru SRST_P_CAN0>;
	            reset-names = "can", "can-apb";
	            pinctrl-names = "default";
	            pinctrl-0 = <&can0m0_pins>;
	            tx-fifo-depth = <1>;
	            rx-fifo-depth = <6>;
	            status = "disabled";
	    };
	
can1: can@fea60000 {
	            compatible = "rockchip,can-2.0";
	            reg = <0x0 0xfea60000 0x0 0x1000>;
	            interrupts = <GIC_SPI 342 IRQ_TYPE_LEVEL_HIGH>;
	            clocks = <&cru CLK_CAN1>, <&cru PCLK_CAN1>;
	            clock-names = "baudclk", "apb_pclk";
	            resets = <&cru SRST_CAN1>, <&cru SRST_P_CAN1>;
	            reset-names = "can", "can-apb";
	            pinctrl-names = "default";
	            pinctrl-0 = <&can1m0_pins>;
	            tx-fifo-depth = <1>;
	            rx-fifo-depth = <6>;
	            status = "disabled";
	    };
	
can2: can@fea70000 {
	            compatible = "rockchip,can-2.0";
	            reg = <0x0 0xfea70000 0x0 0x1000>;
	            interrupts = <GIC_SPI 343 IRQ_TYPE_LEVEL_HIGH>;
	            clocks = <&cru CLK_CAN2>, <&cru PCLK_CAN2>;
	            clock-names = "baudclk", "apb_pclk";
	            resets = <&cru SRST_CAN2>, <&cru SRST_P_CAN2>;
	            reset-names = "can", "can-apb";
	            pinctrl-names = "default";
	            pinctrl-0 = <&can2m0_pins>;
	            tx-fifo-depth = <1>;
	            rx-fifo-depth = <6>;
	            status = "disabled";
	    };
```

- compatible = “rockchip,can-1.0” ，rockchip,can-1.0用来匹配can控制器驱动。

- compatible = “rockchip,can-2.0” ，rockchip,can-2.0用来匹配canfd控制器驱动。

- assigned-clock-rates用来配置can的始终频率，如果CAN的比特率低于等于3M建议修改CAN时钟到100M，信号更稳定。高于3M比特率的，时钟设置200M就可以。

- pinctrl配置：根据实际板卡连接情况配置can_h和can_l的iomux作为can功能使用。

## 5.3 板级配置 kernel-5.10/arch/arm64/boot/dts/rockchip/rk3588-armsom-w3.dts

```bash
/* can1 */
	&can1 {
	        status = "okay";
	        assigned-clocks = <&cru CLK_CAN1>;
	        assigned-clock-rates = <200000000>;
	        pinctrl-names = "default";
	        pinctrl-0 = <&can1m1_pins>;      #根据原理图进行配置
	};
```

- 由于系统根据上述dts节点创建的CAN设备只有一个，而第一个创建的设备为CAN0

# 6. CAN通信测试
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