---
sidebar_label: "GPIO 使用"
sidebar_position: 7
---

# GPIO 使用
## 1. GPIO简介
GPIO，全称 General-Purpose Input/Output（通用输入输出），是一种在计算机和嵌入式系统中常见的数字输入输出接口。它允许软件控制硬件的数字输入和输出，例如开关、传感器、LED灯等。GPIO通常由一个芯片或处理器上的引脚提供支持，通过编程可以配置这些引脚为输入或输出，并且可以通过相应的软件命令来读取输入状态或控制输出状态。

## 2. GPIO引脚编号计算方法
RK3588共 有 5 组 GPIO bank：GPIO0~GPIO4，每组又以 A0~A7, B0~B7, C0~C7, D0~D7 作为编号区分，常用以下公式计算引脚：

```bash
 GPIO pin脚计算公式：pin = bank * 32 + number

 GPIO 小组编号计算公式：number = group * 8 + X
```

例如: GPIO3_B5的计算方式 : 32 * 3 + 1 * 8 + 5 = 109    ---> 也就是说，GPIO3_B5对应的是GPIO的编号是gpio-109。

## 3. 复用
GPIO口除了通用输入输出功能外，还可能有其它复用功能

![rockchip-gpio](/img/general-tutorial/interface-usage/gpio.png)

从原理图中看出：以GPIO1_C0为例，就有如下几个功能：

| func0    | func1       | func2       | func3        |
| -------- | ----------- | ----------- | ------------ |
| GPIO1_C0 | I2C3_SDA_M0 | UART3_RX_M0 | SPI4_MISO_M0 |

在系统DTS配置中GPIO1_C0默认是I2C3_SDA_M0功能。如果我们想将GPIO1_C0复用为UART3_RX_M0功能，该怎么做呢？
1. 首先打开uart3 节点，将pinctrl配置为uart3m0_xfer。pinctrl配置是GPIO复用的最关键的配置，在这里就是将GPIO1_C0复用做了uart3功能。
```bash
&uart3 {
	pinctrl-names = "default";
	pinctrl-0 = <&uart3m0_xfer>;
	status = "okay";
};

&pinctrl {
	uart3 {
		/omit-if-no-ref/
		uart3m0_xfer: uart3m0-xfer {
			rockchip,pins =
				/* uart3_rx_m0 */
				<1 RK_PC0 10 &pcfg_pull_up>,   # 将GPIO1_C0复用为uart3_rx_m0 
				/* uart3_tx_m0 */
				<1 RK_PC1 10 &pcfg_pull_up>;   # 将GPIO1_C1复用为uart3_rx_m0 
		};
	};
};

```
2. 如果发现GPIO1_C0被复用为I2c3，则在dts中关闭它。
```bash
&i2c3 {
	status = "disabled";
};
```
这样，我们就将GPIO1_C0复用为了UART3_RX_M0功能


## 4. GPIO调试方法
### 4.1 读取GPIO状态信息
Debugfs 文件系统目的是为开发人员提供更多内核数据，方便调试。 这里 GPIO 的调试也可以用 Debugfs 文件系统，获得更多的内核信息。GPIO 在 Debugfs 文件系统中的接口为 /sys/kernel/debug/gpio，可以这样读取该接口的信息：

```bash
armsom@armsom:~$ sudo cat /sys/kernel/debug/gpio
gpiochip0: GPIOs 0-31, parent: platform/fd8a0000.gpio, gpio0:
 gpio-15  (                    |led_rgb_b           ) out lo
 gpio-20  (                    |reset               ) out lo ACTIVE LOW
 gpio-21  (                    |bt_default_wake_host) in  hi

gpiochip1: GPIOs 32-63, parent: platform/fec20000.gpio, gpio1:
 gpio-34  (                    |bt_default_rts      ) in  hi
 gpio-36  (                    |vcc3v3-pcie30       ) out lo
 gpio-40  (                    |camera-pwdn-gpio    ) out hi
 gpio-54  (                    |hdmirx-det          ) in  lo ACTIVE LOW
 gpio-58  (                    |vcc3v3-pcie2x1l0    ) out hi
 gpio-61  (                    |headset_gpio        ) in  hi

gpiochip2: GPIOs 64-95, parent: platform/fec30000.gpio, gpio2:
 gpio-78  (                    |vbus5v0-typec       ) out lo

gpiochip3: GPIOs 96-127, parent: platform/fec40000.gpio, gpio3:
 gpio-101 (                    |vcc-5v0-gpio-regulat) out hi
 gpio-102 (                    |bt_default_reset    ) out lo
 gpio-104 (                    |reset               ) out hi
 gpio-125 (                    |bt-wake-gpio-regulat) out hi

gpiochip4: GPIOs 128-159, parent: platform/fec50000.gpio, gpio4:
 gpio-130 (                    |wifi-diable-gpio-reg) out hi
 gpio-134 (                    |sbu1-dc             ) out lo
 gpio-135 (                    |sbu2-dc             ) out lo
 gpio-136 (                    |vcc5v0-host-regulato) out hi
 gpio-149 (                    |led_rgb_r           ) out lo

gpiochip5: GPIOs 509-511, parent: platform/rk806-pinctrl.9.auto, rk806-gpio, can sleep:
```
从读取到的信息中可以知道，内核把 GPIO 当前的状态都列出来了，以 GPIO0组为例，gpio-15(GPIO0_B7) 对应的dts节点是led_rgb_b，输出低电平 (out lo)。
### 4.2 查看 pinmux-pins

```bash
armsom@armsom:~$ sudo cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins
Pinmux settings per pin
Format: pin (name): mux_owner gpio_owner hog?
pin 0 (gpio0-0): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 1 (gpio0-1): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 2 (gpio0-2): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 3 (gpio0-3): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 4 (gpio0-4): fe2c0000.mmc (GPIO UNCLAIMED) function sdmmc group sdmmc-det
pin 5 (gpio0-5): feb20000.spi (GPIO UNCLAIMED) function spi2 group spi2m2-pins
pin 6 (gpio0-6): feb20000.spi (GPIO UNCLAIMED) function spi2 group spi2m2-pins
pin 7 (gpio0-7): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 8 (gpio0-8): 6-0051 (GPIO UNCLAIMED) function hym8563 group rtc-int
pin 9 (gpio0-9): feb20000.spi (GPIO UNCLAIMED) function spi2 group spi2m2-cs0
pin 10 (gpio0-10): wireless-wlan (GPIO UNCLAIMED) function wireless-wlan group wifi-host-wake-irq
pin 11 (gpio0-11): feb20000.spi (GPIO UNCLAIMED) function spi2 group spi2m2-pins
pin 12 (gpio0-12): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 13 (gpio0-13): fiq-debugger (GPIO UNCLAIMED) function uart2 group uart2m0-xfer
pin 14 (gpio0-14): fiq-debugger (GPIO UNCLAIMED) function uart2 group uart2m0-xfer
pin 15 (gpio0-15): leds gpio0:15 function leds group led-rgb-b
pin 16 (gpio0-16): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 17 (gpio0-17): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 18 (gpio0-18): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 19 (gpio0-19): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 20 (gpio0-20): sdio-pwrseq gpio0:20 function sdio-pwrseq group wifi-enable-h
pin 21 (gpio0-21): (MUX UNCLAIMED) gpio0:21
...
```
我们以pin 13 (gpio0-13): fiq-debugger (GPIO UNCLAIMED) function uart2 group uart2m0-xfer作为解析：

gpio0-13对应的节点名是 fiq-debugger，此节点使用pinctrl配置复用为debug串口功能，pinctrl的值是uart2m0-xfer。

## 5. GPIO控制
这里介绍一下在用户空间基于sysfs控制gpio的方式：
sysfs控制gpio的方式主要是基于内核提供的gpio控制接口文件。也就是通过读写/sys/class/gpio目录下的文件来控制对应的gpio接口。

```bash
echo 109 > /sys/class/gpio/export                  # 申请导出相应的gpio
echo out > /sys/class/gpio/gpio109/direction       # 设置相应gpio为输出方向
echo 1 > /sys/class/gpio/gpio109/value             # 设置输出高电平
cat /sys/class/gpio/gpio109/value                  # 获取gpio当前状态值，是高电平还是低电平
echo 109 > /sys/class/gpio/unexport                # 释放申请的gpio
```
注意：只有当GPIO3_B5脚没有被其它外设复用时, 我们才可以通过export导出该引脚去使用