---
sidebar_label: "2. GPIO 使用"
slug: /interface-usage/gpio
sidebar_position: 2
---

# 2. GPIO 使用
## 2.1 GPIO简介
GPIO，全称 General-Purpose Input/Output（通用输入输出），是一种在计算机和嵌入式系统中常见的数字输入输出接口。它允许软件控制硬件的数字输入和输出，例如开关、传感器、LED灯等。GPIO通常由一个芯片或处理器上的引脚提供支持，通过编程可以配置这些引脚为输入或输出，并且可以通过相应的软件命令来读取输入状态或控制输出状态。

## 2.2 GPIO引脚编号计算方法
RK3588/RK3576/RK3568/RK3528/RK3506 共 有 5 组 GPIO bank：GPIO0~GPIO4，每组又以 A0~A7, B0~B7, C0~C7, D0~D7 作为编号区分，常用以下公式计算引脚：

```bash
 GPIO pin脚计算公式：pin = bank * 32 + number

 GPIO 小组编号计算公式：number = group * 8 + X
```

例如: GPIO3_B5的计算方式 : 32 * 3 + 1 * 8 + 5 = 109    ---> 也就是说，GPIO3_B5对应的是GPIO的编号是gpio-109。

:::tip
::: 

## 2.3 复用
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
				<1 RK_PC1 10 &pcfg_pull_up>;   # 将GPIO1_C1复用为uart3_tx_m0 
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


## 2.4 GPIO调试方法
### 2.4.1 读取GPIO状态信息
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
### 2.4.2 查看 pinmux-pins

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

## 2.5 GPIO控制

### 2.5.1 GPIO系统接口

基于sysfs的用户空间GPIO控制：
sysfs控制gpio的方式主要是基于内核提供的gpio控制接口文件。也就是通过读写/sys/class/gpio目录下的文件来控制对应的gpio接口。

```bash
echo 109 > /sys/class/gpio/export                  # 申请导出相应的gpio
echo out > /sys/class/gpio/gpio109/direction       # 设置相应gpio为输出方向
echo 1 > /sys/class/gpio/gpio109/value             # 设置输出高电平
cat /sys/class/gpio/gpio109/value                  # 获取gpio当前状态值，是高电平还是低电平
echo 109 > /sys/class/gpio/unexport                # 释放申请的gpio
```
注意：只有当GPIO3_B5脚没有被其它外设复用时, 我们才可以通过export导出该引脚去使用

### 2.5.2 GPIOD使用

libgpiod是一种字符设备接口，GPIO访问控制是通过操作字符设备文件（比如 /dev/gpiodchip0 ）实现的， 并通过libgpiod提供一些命令工具、c库以及python封装。

使用libgpiod之前需要在板卡上安装libgpiod库：
```bash
#安装gpiod命令行工具
sudo apt install gpiod
```

gpiod工具的使用方法与sysfs接口的不同，gpiod是以控制器为单位，然后再详细到端口号和索引号，即gpiod使用两个数据确定引脚

| 引脚    | 控制器       | 端口号       | 索引号        | gpiod的使用结果    |
| -------- | ----------- | ----------- | ------------ | ------------ |
| GPIO3_C1 | 3           | C           | 1            | 3 17(2x8+1)  |
| GPIO3_B7 | 3           | B           | 7            | 3 15(1X8+7)  |
| GPIO1_B2 | 1           | B           | 2            | 1 10(1x8+1)  |

以GPO3_C3为例，常用的命令行如下：
```bash
gpiodetct#列出所有GPIO控制器
gpioinfo 3#列出第一组控制器引脚组
gpioset 3 19=0#将第一组控制器编号的引脚3设置为低电平
gpioget 3 19#获取第一组中3号控制器的引脚状态
gpiomon 3 19#监控第一组中3号控制器的引脚状态
```

`Rockchip Pin的ID按照 控制器(bank)+端口(port)+索引序号(pin) 组成,其中端口号和索引号会合并成一个数值传入到gpiod里去,并不是所有的引脚都能够使用libgpiod控制，例如led之类的一些已经被使用的引脚。`

## 2.6 wiring-armbian 的方法

下载 wiringOP 的代码 [wiring-armbian](https://github.com/ArmSoM/wiring-armbian)

- 测试 gpio readall 命令的输出如下

```
 +------+-----+----------+--------+---+  ArmSoM-Sige7(BPI-M7) +---+--------+----------+-----+------+
 | GPIO | wPi |   Name   |  Mode  | V | Physical | V |  Mode  | Name     | wPi | GPIO |
 +------+-----+----------+--------+---+----++----+---+--------+----------+-----+------+
 |      |     |     3.3V |        |   |  1 || 2  |   |        | 5V       |     |      |
 |  139 |   0 |    SDA.7 |     IN | 1 |  3 || 4  |   |        | 5V       |     |      |
 |  138 |   1 |    SCL.7 |     IN | 1 |  5 || 6  |   |        | GND      |     |      |
 |  115 |   2 |    PWM15 |    OUT | 0 |  7 || 8  | 1 | ALT10  | GPIO0_B5 | 3   | 13   |
 |      |     |      GND |        |   |  9 || 10 | 1 | ALT10  | GPIO0_B6 | 4   | 14   |
 |  113 |   5 | GPIO3_C1 |     IN | 0 | 11 || 12 | 1 | IN     | GPIO3_B5 | 6   | 109  |
 |  111 |   7 | GPIO3_B7 |     IN | 0 | 13 || 14 |   |        | GND      |     |      |
 |  112 |   8 | GPIO3_C0 |     IN | 0 | 15 || 16 | 0 | IN     | GPIO3_A4 | 9   | 100  |
 |      |     |     3.3V |        |   | 17 || 18 | 1 | IN     | GPIO4_C4 | 10  | 148  |
 |   42 |  11 | SPI0_TXD |     IN | 1 | 19 || 20 |   |        | GND      |     |      |
 |   41 |  12 | SPI0_RXD |     IN | 1 | 21 || 22 |   |        | SARADC_IN4 |     |      |
 |   43 |  14 | SPI0_CLK |     IN | 1 | 23 || 24 | 1 | IN     | SPI0_CS0 | 15  | 44   |
 |      |     |      GND |        |   | 25 || 26 | 1 | IN     | SPI0_CS1 | 16  | 45   |
 |  150 |  17 | GPIO4_C6 |     IN | 1 | 27 || 28 | 0 | OUT    | GPIO4_C5 | 18  | 149  |
 |   63 |  19 | GPIO1_D7 |     IN | 1 | 29 || 30 |   |        | GND      |     |      |
 |   47 |  20 | GPIO1_B7 |     IN | 1 | 31 || 32 | 0 | IN     | GPIO3_C2 | 21  | 114  |
 |  103 |  22 | GPIO3_A7 |     IN | 1 | 33 || 34 |   |        | GND      |     |      |
 |  110 |  23 | GPIO3_B6 |     IN | 0 | 35 || 36 | 0 | IN     | GPIO3_B1 | 24  | 105  |
 |    0 |  25 | GPIO0_A0 |     IN | 1 | 37 || 38 | 0 | IN     | GPIO3_B2 | 26  | 106  |
 |      |     |      GND |        |   | 39 || 40 | 1 | IN     | GPIO3_B3 | 27  | 107  |
 +------+-----+----------+--------+---+----++----+---+--------+----------+-----+------+
 | GPIO | wPi |   Name   |  Mode  | V | Physical | V |  Mode  | Name     | wPi | GPIO |
 +------+-----+----------+--------+---+  ArmSoM-Sige7(BPI-M7) +---+--------+----------+-----+------+
```

- 设置 GPIO 口为输出模式，其中第三个参数需要输入引脚对应的 wPi 的序号

```
root@armsom-sige7:~/wiring-armbian# gpio mode 2 out
```

- 设置 GPIO 口输出低电平，设置完后可以使用万用表测量引脚的电压的数值，如果为 0v，说明设置低电平成功

```
root@armsom-sige7:~/wiring-armbian# gpio write 2 0
```

- 设置 GPIO 口输出高电平，设置完后可以使用万用表测量引脚的电压的数值，如果为 3.3v，说明设置高电平成功

```
root@armsom-sige7:~/wiring-armbian# gpio write 2 1
```
- 其他引脚的设置方法类似，只需修改 wPi 的序号为引脚对应的序号即可

## 2.7 FAQs
Q1：当使用 GPIO 时出现 gpioset: error setting the GPIO line values: Device or resource busy 或者 -bash: echo: 写错误: 设备或资源忙 错误，如何解决？
- A1：该错误通常表示 GPIO 引脚已经被其他进程或功能占用。可能的原因是设备树中已将该引脚配置为 GPIO 或其他复用功能，因此无法再次访问。

Q2: 如果测量到 PIN 脚的电压不正确，应该如何排查？
- A2: 当测量到 PIN 脚的电压不符合预期时，如果排除了外部干扰，可以检查该 PIN 脚所连接的 IO 电压源是否正常，以及该 PIN 所在的 IO 域配置是否正确。