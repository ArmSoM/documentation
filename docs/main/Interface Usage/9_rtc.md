---
sidebar_label: "9. RTC Interface"
slug: /interface-usage/rtc
sidebar_position: 9
---
## 9. RTC Interface

### 9.1 RTC Introduction

RTC (Real-Time Clock) is a timekeeping device that keeps track of the current date and time.

The **HYM8563** is a low-power real-time clock (RTC) chip that provides accurate time and date information. It includes a programmable clock output, an interrupt output, and a power-down detector. All addresses and data are transferred serially via the I2C bus interface. The maximum bus speed is 400Kbits/s, and after each read or write operation, the embedded address register automatically increments.

Here are the main features and functions of the **HYM8563** chip:

- **Clock and Calendar Function**: The HYM8563 provides accurate time and date information, supporting the display and timing of year, month, day, weekday, hour, minute, and second.
- **Battery-Powered**: The chip is equipped with a battery-powered circuit, which ensures continuous operation even when the main power supply is turned off.
- **Alarm Function**: The chip integrates an alarm feature, allowing you to set an alarm time that triggers an alert when the specified time is reached.
- **Timer Function**: It also includes a timer function, allowing you to set start times and durations, triggering events when the timer expires.
- **Temperature Compensation**: The chip has temperature compensation, which automatically adjusts the clock frequency based on ambient temperature to maintain time accuracy.
- **Communication Interface**: The HYM8563 communicates with the main controller or microprocessor via the I2C (Inter-Integrated Circuit) interface. This simple and easy-to-use interface is widely used in many embedded systems.

### 9.2 RTC Usage Example

#### 9.2.1 Schematic Diagram
![rtc-sch](/img/general-tutorial/interface-usage/rtc-sch.jpg)

:::tip
- The ArmSoM product already includes the clock chip, just connect the RTC power supply.
- The RTC battery uses a 0.8mm 1x2P through-hole connector; the detailed specification can be found in the network disk connector datasheet.
:::

#### 9.2.2 RTC Pinout

| RTC Power | Pin  | Function |
| --------- | ---- | -------- |
| +         | 1    | Positive |
| -         | 2    | Negative |

#### 9.2.3 Kernel Configuration

- **rockchip_linux_defconfig** configuration:

```bash
CONFIG_RTC_HCTOSYS=y                # Enable RTC time setting to system time
CONFIG_RTC_HCTOSYS_DEVICE="rtc0"    # Default RTC device for time synchronization
CONFIG_RTC_SYSTOHC=y                # Enable system time setting to RTC
CONFIG_RTC_SYSTOHC_DEVICE="rtc0"    # Default RTC device for system time synchronization
```

#### 9.2.4 Device Tree Configuration

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

#### 9.2.5 RTC Debugging

- Check if the RTC is mounted on the I2C bus:

```bash
root@armsom-sige5:/home/armsom# sudo i2cdetect -y 2
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:                         -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- UU -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- UU -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```

You can see that an I2C device (RTC) is mounted on the `/dev/i2c-6` bus with address `0x51`.

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
