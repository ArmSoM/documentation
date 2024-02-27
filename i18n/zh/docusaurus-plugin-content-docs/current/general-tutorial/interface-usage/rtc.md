---
sidebar_label: "RTC 使用"
sidebar_position: 6
---

# 1. 简介
RTC：(Real_Time Clock)：实时时钟

HYM8563是一种低功耗实时时钟（RTC）芯片，用于提供精确的时间和日期信息。它提供一个可编程的时钟输出，一个中断输出和一个掉电检测器，所有的地址和数据都通过I2C总线接口串行传递。最大总线速度为 400Kbits/s,每次读写数据后,内嵌的字地址寄存器会自动递增

以下是HYM8563芯片的主要特点和功能：

 - 时钟和日历功能：HYM8563具有时钟和日历功能，可提供准确的时间和日期信息。它支持年、月、日、星期、小时、分钟和秒的显示和计时。
 - 电池供电：为了保持时间和日期的持久性，HYM8563芯片内置了电池供电电路，即使在主电源断开的情况下也能继续运行。
 - 闹钟功能：芯片内部集成了闹钟功能，可以设置闹钟时间，并在达到指定时间时触发警报。
 - 定时器功能：HYM8563芯片还具有定时器功能，可以设置计时器开始时间和计时时间，并在计时结束时触发相应的事件。
 - 温度补偿：该芯片具有温度补偿功能，可以根据环境温度对时钟频率进行自动修正，以保持时间的准确性。
 - 通信接口：HYM8563通过I2C（Inter-Integrated Circuit）接口与主控芯片或微处理器通信。这种接口简单易用，并且在许多嵌入式系统中得到广泛应用。

# 2. HYM8563时钟调试
## 2.1. 原理图
![rtc-sch](/img/general-tutorial/interface-usage/rtc-sch.jpg)
## 2.2. 驱动
- kernel/drivers/rtc/rtc-hym8563.c
## 2.3. 内核配置

- rockchip_linux_defconfig配置：

```bash
CONFIG_RTC_HCTOSYS=y                # 允许RTC时间设置到系统时间
CONFIG_RTC_HCTOSYS_DEVICE="rtc0"    # 默认同步时间的RTC设备
CONFIG_RTC_SYSTOHC=y                # 允许系统时间设置到RTC
CONFIG_RTC_SYSTOHC_DEVICE="rtc0"    # 默认同步时间的RTC设备
```
## 2.4. 设备树节点配置

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

## 2.5. 调试
- 查看I2C总线是否挂载上RTC：

```bash
	sudo i2cdetect -y 6
```

```
armsom@armsom:~$ sudo i2cdetect -y 6

		0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:                         -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- 51 -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```
可以看到I2C总线/dev/i2c-6上挂载了一个有效的I2C设备:RTC,其地址为0x51。
# 3. RTC测试
Linux系统下包含两个时间：系统时间和RTC时间。

linux命令中的date和time等命令都是用来设置系统时间的，而hwclock命令是用来设置和读写RTC时间的。

```bash
armsom@armsom:~$ sudo hwclock -r   # 查看硬件时间
2024-02-27 17:16:05.631917+08:00

armsom@armsom:~$ date  # 查看系统时间
2024年 02月 27日 星期二 17:16:22 CST

armsom@armsom:~$ sudo  date -s "2024-02-27 18:45:00"  # 重新设置系统时间
2024年 02月 27日 星期二 18:45:00 CST

armsom@armsom:~$ sudo hwclock -w   # 同步系统时间到rtc上，掉电不丢失时间

```