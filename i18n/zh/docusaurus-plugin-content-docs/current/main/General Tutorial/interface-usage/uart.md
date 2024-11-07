---
sidebar_label: "UART 使用"
slug: /general-tutorial/interface-usage/uart
sidebar_position: 11
---
# UART 使用
## 1. UART 简介

Rockchip UART (Universal Asynchronous Receiver/Transmitter) 基于16550A串口标准，完整模块支持以下功能：
- 支持5、6、7、8 bits数据位。
- 支持1、1.5、2 bits停止位。
- 支持奇校验和偶校验，不支持mark校验和space校验。
- 支持接收FIFO和发送FIFO，一般为32字节或者64字节。
- 支持最高4M波特率，实际支持波特率需要芯片时钟分频策略配合。
- 支持中断传输模式和DMA传输模式。
- 支持硬件自动流控，RTS+CTS。


## 2. 普通串口
- 在ArmSoM-Sige7中，普通UART集成在40PIN中，可供用户复用为UART功能。
- 在40PIN中可供复用的UART有:uart2-m2，uart3-m1，uart4-m2，uart7-m1，uart7-m2，uart8-m0
  
### 2.1 如何使用40PIN中的UART ？
用户只需参考 [overlay](../overlay) 设置，在overlay属性中添加上UART的overlay文件：

例如：
- 使用UART3：	

```bash
overlays=rk3588-uart3-m1
```

- 使用uart4

```bash
overlays=rk3588-uart4-m2
```
- 使用uart7
```bash
overlays=rk3588-uart7-m1
```
- 使用uart8
```bash
overlays=rk3588-uart8-m0
```
### 2.2 内核menuconfig配置
Device Drivers(*)   ---> Character devices(*)  ---> Serial drivers 

![uart-config](/img/general-tutorial/interface-usage/uart-config.jpg)

### 2.3 dts配置
#### 2.3.1 芯片级公共配置 

kernel/arch/arm64/boot/dts/rockchip/rk3588s.dtsi

```bash
uart2: serial@feb50000 {
		compatible = "rockchip,rk3588-uart", "snps,dw-apb-uart";
		reg = <0x0 0xfeb50000 0x0 0x100>;
		interrupts = <GIC_SPI 333 IRQ_TYPE_LEVEL_HIGH>;
		clocks = <&cru SCLK_UART2>, <&cru PCLK_UART2>;
		clock-names = "baudclk", "apb_pclk";
		reg-shift = <2>;
		reg-io-width = <4>;
		dmas = <&dmac0 10>, <&dmac0 11>;
		pinctrl-names = "default";
		pinctrl-0 = <&uart2m1_xfer>;
		status = "disabled";
	};
```
#### 2.3.2 板级配置 

kernel/arch/arm64/boot/dts/rockchip/rk3588-armsom-sige7.dts

UART的板级dts配置只有以下参数允许修改：
-  dma-names：
	- "tx" 打开tx dma
	- "rx" 打开rx dma
	- "!tx" 关闭tx dma
	- "!rx" 关闭rx dma
- pinctrl-0：
	- &uart1m0_xfer 配置tx和rx引脚为iomux group 0
	- &uart1m1_xfer 配置tx和rx引脚为iomux group 1
	- &uart1m0_ctsn和&uart1m0_rtsn 配置硬件自动流控cts和rts引脚为iomux group 0
	- &uart1m1_ctsn和&uart1m1_rtsn 配置硬件自动流控cts和rts引脚为iomux group 1
-  status：
	- "okay" 打开
    - "disabled" 关闭

 例如，将40PIN中的第36和第38编号引脚复用为uart2：
```bash
&uart2 {
	status = "okay";
	pinctrl-names = "default";
	pinctrl-0 = <&uart2m2_xfer>;
}
```
### 2.4 UART设备节点
配置好串口后，硬件接口对应软件上的节点分别为：

```bash
UART3:   /dev/ttyS3
UART4:   /dev/ttyS4
...
```

### 2.5 使用串口唤醒系统
串口唤醒系统功能是在系统待机时串口保持打开，并且把串口中断设置为唤醒源。使用时需要在dts中增
加以下参数：

```bash
&uart1 {
	wakeup-source;
}；
```

## 3. 控制台串口
- 在ArmSoM-Sige7中，UART2是作为控制台串口使用，可供用户查看开机启动的信息以及日常调试使用。
### 3.1 驱动

```bash
kernel/drivers/soc/rockchip/fiq_debugger/rk_fiq_debugger.c
```

### 3.2 dts配置
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

## 4. 测试
UART调试提供一个官方测试程序：ts_uart.uart(存放在网盘：1. 开发工具->测试工具)、两个测试用文件send_0x55和send_00_ff，该程序可以联系ArmSoM客服获取。
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
### 4.1 测试发送
测试发送的命令如下，send_0x55和send_00_ff为发送的文件：

```bash
./data/ts_uart.uart s ./data/send_0x55 1500000 0 0 0 /dev/ttyS3
./data/ts_uart.uart s ./data/send_00_ff 1500000 0 0 0 /dev/ttyS3
```

发送成功可以通过USB转UART小板连接PC端，使用PC端串口调`在这里插入代码片`试工具验证。

### 4.2 测试接收
测试接收的命令如下，receive_0x55为接收的文件：

```bash
./data/ts_uart.uart r ./data/receive_0x55 1500000 0 0 0 /dev/ttyS1
```

可以使用PC端串口调试工具发送数据，测试程序将自动检测，检测到U（0x55）接收正确，检测到其它
字符将打印16进制ASCII码值，可以对照查询接收是否正确。

### 4.3 测试内部自发自收
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