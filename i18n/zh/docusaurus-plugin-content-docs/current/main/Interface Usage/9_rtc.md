---
sidebar_label: "9. RTC 接口"
slug: /interface-usage/rtc
sidebar_position: 9
---
# 9. RTC 接口
## 9.1 RTC 简介
RTC：(Real_Time Clock)：实时时钟

HYM8563是一种低功耗实时时钟（RTC）芯片，用于提供精确的时间和日期信息。它提供一个可编程的时钟输出，一个中断输出和一个掉电检测器，所有的地址和数据都通过I2C总线接口串行传递。最大总线速度为 400Kbits/s,每次读写数据后,内嵌的字地址寄存器会自动递增

以下是HYM8563芯片的主要特点和功能：

 - 时钟和日历功能：HYM8563具有时钟和日历功能，可提供准确的时间和日期信息。它支持年、月、日、星期、小时、分钟和秒的显示和计时。
 - 电池供电：为了保持时间和日期的持久性，HYM8563芯片内置了电池供电电路，即使在主电源断开的情况下也能继续运行。
 - 闹钟功能：芯片内部集成了闹钟功能，可以设置闹钟时间，并在达到指定时间时触发警报。
 - 定时器功能：HYM8563芯片还具有定时器功能，可以设置计时器开始时间和计时时间，并在计时结束时触发相应的事件。
 - 温度补偿：该芯片具有温度补偿功能，可以根据环境温度对时钟频率进行自动修正，以保持时间的准确性。
 - 通信接口：HYM8563通过I2C（Inter-Integrated Circuit）接口与主控芯片或微处理器通信。这种接口简单易用，并且在许多嵌入式系统中得到广泛应用。

## 9.2 RTC 使用实例
### 9.2.1 原理图
![rtc-sch](/img/general-tutorial/interface-usage/rtc-sch.jpg)

:::tip
ArmSoM产品上已经有时钟芯片，接上rtc电源即可，RTC 电池，0.8mm立式插座。
:::

### 9.2.2 rtc 引脚

| rtc电源    | 引脚       | 功能 | 
| -------- | ----------- | ----------- |
| + | 1            | 正极|
| - | 2            | 负极|

### 9.2.3 内核配置

- rockchip_linux_defconfig配置：

```bash
CONFIG_RTC_HCTOSYS=y                # 允许RTC时间设置到系统时间
CONFIG_RTC_HCTOSYS_DEVICE="rtc0"    # 默认同步时间的RTC设备
CONFIG_RTC_SYSTOHC=y                # 允许系统时间设置到RTC
CONFIG_RTC_SYSTOHC_DEVICE="rtc0"    # 默认同步时间的RTC设备
```
### 9.2.4 内核配置

```bash
&i2c6 {
	status = "okay";
	hym8563: hym8563@51 {
		compatible = "haoyu,hym8563";
		reg = <0x51>;
		#clock-cells = <0>;
		clock-frequency = <32768>;
		clock-output-names = "hym8563";
		pinctrl-names = "default";
		pinctrl-0 = <&rtc_int>;
		interrupt-parent = <&gpio0>;
		interrupts = <RK_PB0 IRQ_TYPE_LEVEL_LOW>;
	};
};

&pinctrl {
	hym8563 {
			rtc_int: rtc-int {
				rockchip,pins = <0 RK_PB0 RK_FUNC_GPIO &pcfg_pull_none>;
			};
	};
};
```

### 9.2.5 RTC 调试
- 查看I2C总线是否挂载上RTC：

```bash
root@armsom-sige5:/home/armsom# sudo i2cdetect -y 2
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:                         -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- UU -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- UU -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```

可以看到I2C总线/dev/i2c-6上挂载了一个有效的I2C设备:RTC,其地址为0x51。

## 9.3 RTC Testing

In a Linux system, there are two types of time: system time and RTC time.

- **System Time**: Maintained by the operating system, it represents the current date and time, usually based on the system's boot timestamp.
- **RTC Time**: Maintained by the hardware clock (typically an onboard real-time clock chip), it keeps track of time when the system is powered off. The RTC generally continues to run even without power.

### 9.3.1 Using `hwclock` and `date` Commands

In Linux, the `date` and `time` commands are used to manipulate system time, while the `hwclock` command is used to read and set RTC time.

#### 9.3.2 View RTC Time

To read the current RTC time, use the `hwclock -r` command:

```bash
root@armsom-sige5:/home/armsom# hwclock -r
2025-01-04 15:49:01.391974+08:00
```

This indicates that the RTC time is 2025-01-04 15:49:01, with the timezone information (+08:00 for UTC+8).

#### 9.3.3 View System Time

To view the current system time, use the `date` command:

```bash
root@armsom-sige5:/home/armsom# date
2025年 01月 04日 星期六 15:49:21 CST
```

This indicates that the system time is 2025-01-04 15:49:21, in China Standard Time (CST).

#### 9.3.4 Sync System Time to RTC

If you want to synchronize the current system time to the RTC, use the following command:

```bash
root@armsom-sige5:/home/armsom# sudo hwclock --systohc
```

This command will write the current system time to the RTC.

#### 9.3.5 Sync RTC to System Time

To synchronize the RTC time to the system time, use the following command:

```bash
root@armsom-sige5:/home/armsom# sudo hwclock --hctosys
```

This will set the system time to the RTC time.

#### 9.3.6 Power Off and Reboot

After turning off the device and waiting for 3 minutes, reboot the system and check the system time again:

```bash
root@armsom-sige5:/home/armsom# date   # Sync RTC to system time
2025年 01月 04日 星期六 15:52:31 CST
```

This shows that the system time was successfully updated from the RTC time.