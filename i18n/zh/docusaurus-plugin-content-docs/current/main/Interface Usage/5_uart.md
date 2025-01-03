---
sidebar_label: "5. UART 使用"
slug: /interface-usage/uart
sidebar_position: 7
---
# 5. UART 使用
## 5.1 UART 简介

Rockchip UART (Universal Asynchronous Receiver/Transmitter) 基于16550A串口标准，完整模块支持以下功能：
- 支持5、6、7、8 bits数据位。
- 支持1、1.5、2 bits停止位。
- 支持奇校验和偶校验，不支持mark校验和space校验。
- 支持接收FIFO和发送FIFO，一般为32字节或者64字节。
- 支持最高4M波特率，实际支持波特率需要芯片时钟分频策略配合。
- 支持中断传输模式和DMA传输模式。
- 支持硬件自动流控，RTS+CTS。

## 5.2 UART 使用实例
### 5.2.1 UART 引脚
- 以ArmSoM-Sige7为例，普通UART集成在40PIN中，可供用户复用为UART功能。
- 在40PIN中可供复用的UART有: [Sige7 40PIN定义](/interface-usage/40pin#16-armsom-sige7)

| UART    | 引脚       | UART    | 引脚       | 功能 | 
| -------- | ----------- | ----------- |----------- | ----------- |
| UART2_TX_M0 | 8           | UART3_TX_M1 | 12            | 发送引脚|
| UART2_RX_M0 | 10          | UART3_RX_M1 | 35            | 接收引脚|
| UART7_TX_M1 | 15         | UART4_TX_M2 | 23       |  发送引脚|
| UART7_RX_M1 | 11        | UART4_RX_M2 | 19     |  接收引脚|
| UART7_TX_M2 | 26           | ----------- | ----------- | 发送引脚|
| UART7_RX_M2 | 24           | ----------- | ----------- | 接收引脚|
  
### 5.2.2 使能 UART 通信接口

UART 接口在默认情况是关闭状态的，需要使能才能使用

:::tip
调试串口默认已打开，默认在40pin 的 8/10
:::

在 Armbian 操作系统中，/boot/armbianEnv.txt 文件用于配置系统启动时的参数和设备树插件。你可以通过编辑该文件来启用或禁用 UART 设备树插件，确保 UART 总线可以在启动时正确加载。

如果你希望检查或启用 UART 相关设备树插件，可以按照以下步骤操作：

- **查看设备树插件配置**

打开文件： 通过终端打开 /boot/armbianEnv.txt 文件，使用文本编辑器如 nano 或 vim，例如：

```bash
root@armsom-sige7:/home/armsom# sudo nano /boot/armbianEnv.txt
```

这里以激活 uart3-m1 为例，将rk3588-uart3-m1打开 如下图:

```
overlays=rk3588-uart3-m1
```

编辑完成后，保存文件并退出编辑器 重启系统使配置生效：

```
// 先执行sync
root@armsom-sige7:/home/armsom# sync
root@armsom-sige7:/home/armsom# sudo reboot
```

- **验证 UART 是否启用**

重启后，你可以通过以下命令检查 UART 是否正常工作：

```
root@armsom-sige7:/home/armsom# ls /dev/tty*  # 执行命令查看终端设备
// 配置好串口后，硬件接口对应软件上的节点分别为：
UART3:   /dev/ttyS3
UART4:   /dev/ttyS4
```

### 5.2.3 使用串口唤醒系统
串口唤醒系统功能是在系统待机时串口保持打开，并且把串口中断设置为唤醒源。使用时需要在dts中增
加以下参数：

```bash
&uart1 {
	wakeup-source;
}；
```

## 5.3 控制台串口
- 在ArmSoM-Sige7中，UART2是作为控制台串口使用，可供用户查看开机启动的信息以及日常调试使用。
### 5.3.1 驱动

```bash
kernel/drivers/soc/rockchip/fiq_debugger/rk_fiq_debugger.c
```

### 5.3.2 dts配置
由于fiq_debugger和普通串口互斥，在使能fiq_debugger节点后必须禁用对应的普通串口uart节点

```bash
fiq_debugger: fiq-debugger {
		compatible = "rockchip,fiq-debugger";
		rockchip,serial-id = <2>;
		rockchip,wake-irq = <0>;
		/* If enable uart uses irq instead of fiq */
		rockchip,irq-mode-enable = <1>;
		rockchip,baudrate = <1500000>;  /* Only 115200 and 1500000 */
		interrupts = <GIC_SPI 423 IRQ_TYPE_LEVEL_LOW>;
		pinctrl-names = "default";
		pinctrl-0 = <&uart2m0_xfer>;
		status = "okay";
	};
	
&uart2 {
	status = "disabled";
};
```
以下对几个参数进行说明：
- rockchip,serial-id：使用的UART编号。修改serial-id到不同UART，fiq_debugger设备也会注册成ttyFIQ0设备。
- rockchip,irq-mode-enable：配置为1使用irq中断，配置为0使用fiq中断。
- interrupts：配置的辅助中断，保持默认即可。

### 5.3.3 测试
UART调试提供一个官方测试程序：ts_uart.uart(存放在网盘：1. 开发工具->测试工具)、两个测试用文件send_0x55和send_00_ff。
通过adb工具将测试程序放在开发板上一个可执行的路径下，以下放在data路径：

```bash
adb root
adb remount
adb push ts_uart.uart /data
adb push send_0x55 /data
adb push send_00_ff /data
```
在开发板上修改测试程序权限：

```bash
sudo chmod +x /data/ts_uart.uart
```
使用以下命令可以获取程序帮助：

```bash
console:/ # ./data/ts_uart.uart
Use the following format to run the HS-UART TEST PROGRAM
ts_uart v1.1
For sending data:
./ts_uart <tx_rx(s/r)> <file_name> <baudrate> <flow_control(0/1)> <max_delay(0-
100)> <random_size(0/1)>
tx_rx : send data from file (s) or receive data (r) to put in file
file_name : file name to send data from or place data in
baudrate : baud rate used for TX/RX
flow_control : enables (1) or disables (0) Hardware flow control using RTS/CTS
lines
max_delay : defines delay in seconds between each data burst when sending.
Choose 0 for continuous stream.
random_size : enables (1) or disables (0) random size data bursts when sending.
Choose 0 for max size.
max_delay and random_size are useful for sleep/wakeup over UART testing. ONLY
meaningful when sending data
Examples:
Sending data (no delays)
ts_uart s init.rc 1500000 0 0 0 /dev/ttyS0
loop back mode:
ts_uart m init.rc 1500000 0 0 0 /dev/ttyS0
receive, data must be 0x55
ts_uart r init.rc 1500000 0 0 0 /dev/ttyS0
```
#### 5.3.3.1 测试发送
测试发送的命令如下，send_0x55和send_00_ff为发送的文件：

```bash
./data/ts_uart.uart s ./data/send_0x55 1500000 0 0 0 /dev/ttyS3
./data/ts_uart.uart s ./data/send_00_ff 1500000 0 0 0 /dev/ttyS3
```

发送成功可以通过USB转UART小板连接PC端，使用PC端串口调`在这里插入代码片`试工具验证。

#### 5.3.3.2 测试接收
测试接收的命令如下，receive_0x55为接收的文件：

```bash
./data/ts_uart.uart r ./data/receive_0x55 1500000 0 0 0 /dev/ttyS1
```

可以使用PC端串口调试工具发送数据，测试程序将自动检测，检测到U（0x55）接收正确，检测到其它
字符将打印16进制ASCII码值，可以对照查询接收是否正确。

#### 5.3.3.3 测试内部自发自收
测试内部自发自收的命令如下：

```bash
./data/ts_uart.uart m ./data/send_00_ff 1500000 0 0 0 /dev/ttyS3
```
按下Ctrl+C停止测试，可以观察到结束log如下。比较发送和接收的数据是否一致：

```bash
Sending data from file to port...
send:1172, receive:1172 total:1172 # 收发数据一致，测试成功
send:3441, receive:3537 total:3441 # 收发数据不一致，测试失败
```

如果测试失败，说明当前串口存在问题或者有其他程序也在使用同一个串口。可以使用以下命令查看哪
些程序打开了这个串口：

```bash
lsof | grep ttyS3
```

## 5.4 波特率配置

UART波特率 = 工作时钟源 / 内部分频系数 / 16。当工作时钟源由24M晶振直接提供时，UART将使用内部分频系数得到需要的波特率。当工作时钟源由CRU模块通过PLL分频提供时，UART波特率一般为工作时钟源的1/16。UART实际允许配置的波特率和此波特率下数据传输的稳定性在软件上主要由UART工作时钟分频策略决定。
目前，UART驱动会根据配置的波特率大小自动去获取需要的工作时钟频率，可以通过以下命令查询到
UART工作时钟频率：

```bash
cat /sys/kernel/debug/clk/clk_summary | grep uart
```

Rockchip UART对常用的波特率，如115200、460800、921600、1500000、3000000、4000000等确保稳定支持。对于一些特殊的波特率，可能需要修改工作时钟分频策略才能支持。

## 5.5 使用DMA

UART使用DMA传输模式只有在数据量很大时才会产生较为明显的减轻CPU负载的效果。一般情况下，和使用中断传输模式相比，UART使用DMA传输模式并不一定能提高数据传输速度。一方面，现在CPU
性能都很高，传输瓶颈在外设。另一方面，启动DMA需要消耗额外的资源，并且由于UART数据存在长度不确定的特性，会使DMA传输效率下降。
因此，建议一般情况下使用默认中断传输模式，会有以下打印:

```bash
failed to request DMA, use interrupt mode
```

在DMA通道资源紧张的使用场景下，可以考虑关掉TX的DMA传输，会有以下打印：

```bash
got rx dma channels only
```

## 5.6 使用硬件自动流控

UART使用硬件自动流控时，需要确保UART驱动使能硬件自动流控功能，且在dts中已经切换cts和rts流控引脚的iomux。建议在高波特率（1.5M波特率及以上）、大数据量的场景下都使用硬件自动流控，即使用四线UART。