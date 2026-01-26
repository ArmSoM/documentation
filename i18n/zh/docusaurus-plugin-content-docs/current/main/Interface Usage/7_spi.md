---
sidebar_label: "7. SPI 使用"
slug: /interface-usage/spi
sidebar_position: 7
---

# 7. SPI 使用

SPI（Serial Peripheral Interface） 是一种常见的同步串行通信协议，用于微控制器（MCU）与外部设备之间的数据交换。它由 Motorola 在 1980 年代初期提出，并广泛应用于各种嵌入式系统中，如传感器、显示器、存储设备等。

## 7.1 SPI 通讯的工作原理

SPI 协议使用主从架构（Master-Slave），由一个主设备控制一个或多个从设备进行数据交换。它的工作原理主要包括四个信号线和时序控制：

1. 信号线
- MOSI (Master Out Slave In): 主设备发送数据到从设备的数据线。
- MISO (Master In Slave Out): 从设备发送数据到主设备的数据线。
- SCK (Serial Clock): 由主设备生成的时钟信号，用于同步数据传输。
- SS/CS (Slave Select/Chip Select): 主设备选择要通信的从设备。当 SS 线低电平时，表示选择了一个从设备进行通信。
2. 数据传输
- 同步传输：数据在时钟信号的控制下同步传输。每次时钟脉冲传输一个比特，数据通过 MOSI 或 MISO 线传输。
- 全双工通信：SPI 是全双工通信协议，意味着主设备和从设备可以同时进行数据发送和接收。
3. 时钟极性与相位
- 时钟极性（CPOL）：时钟线的电平状态（高或低）决定了数据传输的时机。
- 时钟相位（CPHA）：数据的采样时机，通常是时钟脉冲的上升沿或下降沿。
- SPI 协议支持四种不同的时钟配置（CPOL 和 CPHA 的组合），这使得它能与不同的外设兼容。

## 7.2 SPI 使用实例

### 7.2.1 spi引脚

ArmSoM系列板子40pin上都有SPI外设，以下以 Sige7 为例子，[Sige7 40PIN定义](https://docs.armsom.org/zh/armsom-sige7#%E5%BC%95%E8%84%9A%E5%AE%9A%E4%B9%89)

| SPI    | 引脚       | 功能 | 
| -------- | ----------- | ----------- |
| SPI0_MOSI_M2 | 19            | 用于主设备（Master）向从设备（Slave）发送数据。|
| SPI0_MISO_M2 | 21            | 用于从设备向主设备发送数据|
| SPI0_CLK_M2  | 23            | 由主设备生成的时钟信号，用于同步数据传输|
| SPI0_CS0_M2 | 24            | 用于选择特定的从设备进行通信|
| SPI0_CS1_M2 | 26            | 用于选择特定的从设备进行通信|

### 7.2.2 使能SPI通信接口

SPI接口在默认情况是关闭状态的，需要使能才能使用

在 ubuntu/debain 操作系统中，/boot/uEnv/uEnv.txt 文件用于配置系统启动时的参数和设备树插件。你可以通过编辑该文件来启用或禁用 SPI 设备树插件，确保 SPI 总线可以在启动时正确加载。

如果你希望检查或启用 SPI 相关设备树插件，可以按照以下步骤操作：

- **查看设备树插件配置**

打开文件： 通过终端打开 /boot/uEnv/uEnv.txt 文件，例如：

```bash
root@armsom:/home/armsom# sudo vi /boot/uEnv/uEnvarmsom-sige7.txt
```

这里以激活 spi0，spi1 为例，将 rk3588-armsom-spi1-m1-cs0-spidev 打开如下:

```
dtoverlay=/dtb/overlay/rk3588-armsom-spi0-m2-cs0-cs1-spidev.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-spi1-m1-cs0-spidev.dtbo
#dtoverlay=/dtb/overlay/rk3588-armsom-uart2-m0.dtbo
```

将dtoverlay前的`#`去掉，编辑完成后，保存文件并退出编辑器 重启系统使配置生效：

```
// 先执行sync
armsom@armsom:/boot# sync
armsom@armsom:/boot# sudo reboot
```

:::tip
- Q: 如果直接拔掉电源进行重启，是否可能导致文件未修改或 overlay 系统启动失败？
- A: 当直接拔掉电源或强制关机时，可能会出现文件未能及时从内存（RAM）同步到存储设备（如硬盘、SSD）的情况。这是因为操作系统通常会将数据暂存于内存中，并定期将这些数据写入磁盘。为避免此问题，建议在关机前执行 “sync” 命令，确保所有数据已写入磁盘，再拔掉电源或关机。
:::

- **验证 SPI 是否启用**

使能spi设备树插件之后重新启动板卡，通过SPI设备文件来判断spi驱动是否加载成功。

```
armsom@armsom:~$ ls /dev/spi*
/dev/spidev0.0  /dev/spidev0.1  /dev/spidev1.0
```
SPI_0对应的设备文件是spidev0.0和spidev0.1，spidev0.0和spidev0.1的区别在于片选信号的不同，spidev0.0使用CS0 , spidev0.1使用CS1，spi1的节点是/dev/spidev1.0。

## 7.3 回环测试

根据 ioctl 相关参数，可以编写 SPI 测试程序。为了简单起见，本示例仅进行 SPI 回环测试。在进行测试时，只需将板卡上SPI的 MISO 和 MOSI 引脚（板卡上的 `19` 号和 `21` 号引脚）通过跳线帽进行短接即可实现回环测试。

通过这种方式，发送的数据可以直接回传，方便验证 SPI 功能是否正常。

测试代码：

```
#include <sys/ioctl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
#include <linux/spi/spidev.h>

#define SPI_DEV_PATH "/dev/spidev0.0"

/* SPI 接收、发送缓冲区 */
unsigned char tx_buffer[100] = "hello the world ! ArmSoM is awesome!";
unsigned char rx_buffer[100];

int fd;                  					// SPI 控制引脚的设备文件描述符
static unsigned  mode = SPI_MODE_2;         // 用于保存 SPI 工作模式
static uint8_t bits = 8;        			// 接收、发送数据位数
static uint32_t speed = 10000000; 			// 发送速度
static uint16_t delay = 0;          			// 保存延时时间

// SPI 数据传输函数
void transfer(int fd, uint8_t const *tx, uint8_t const *rx, size_t len)
{
  	int ret;
  	struct spi_ioc_transfer tr = {
      	.tx_buf = (unsigned long)tx,
      	.rx_buf = (unsigned long)rx,
      	.len = len,
      	.delay_usecs = delay,
      	.speed_hz = speed,
      	.bits_per_word = bits,
      	.tx_nbits = 1,
      	.rx_nbits = 1
  	};

  	// 执行 SPI 传输
  	ret = ioctl(fd, SPI_IOC_MESSAGE(1), &tr);
  	if (ret < 1)
  	  	perror("SPI transfer failed");
}

// SPI 初始化函数
void spi_init(int fd)
{
  	int ret;

	// 设置 SPI 工作模式
  	ret = ioctl(fd, SPI_IOC_WR_MODE32, &mode);
  	if (ret == -1)
  	  	perror("Can't set SPI mode");

	// 设置每个字节的位数
  	ret = ioctl(fd, SPI_IOC_WR_BITS_PER_WORD, &bits);
  	if (ret == -1)
    	perror("Can't set bits per word");

	// 设置最大速度
  	ret = ioctl(fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed);
  	if (ret == -1)
    	perror("Can't set max speed");

	// 打印配置
   	printf("SPI Mode: 0x%x\n", mode);
    printf("Bits per word: %d\n", bits);
    printf("Max speed: %d Hz (%d KHz)\n", speed, speed / 1000);
}

int main(int argc, char *argv[])
{
	if (argc < 2) {
    	fprintf(stderr, "Usage: %s [device_path]\n", argv[0]);
    	return -1;
	}

	// 打开 SPI 设备
	fd = open(argv[1], O_RDWR); // 打开文件并启用读写
    if (fd < 0) {
        perror("Can't open SPI device");
        return -1;
    }

	// 初始化 SPI 配置
	spi_init(fd);

	// 清空接收缓冲区
	memset(rx_buffer, 0, sizeof(rx_buffer));

	// 执行数据发送和接收
	transfer(fd, tx_buffer, rx_buffer, sizeof(tx_buffer));

	// 打印发送和接收的缓冲区内容
	printf("TX Buffer: %s\n", tx_buffer);
	printf("RX Buffer: %s\n", rx_buffer);

	// 关闭设备
	close(fd);

	return 0;
}
```

### 7.3.1  编译运行

```
#编译
armsom@armsom:~$ gcc spi_selftest.c -o spi_selftest
#运行
armsom@armsom:~$ sudo ./spi_selftest /dev/spidev0.0 // 短接
SPI Mode: 0x2
Bits per word: 8
Max speed: 10000000 Hz (10000 KHz)
TX Buffer: hello the world !  ArmSoM is awesome!
RX Buffer: hello the world !  ArmSoM is awesome!
armsom@armsom:~$ sudo ./spi_selftest /dev/spidev0.0 //未短接
SPI Mode: 0x2
Bits per word: 8
Max speed: 10000000 Hz (10000 KHz)
TX Buffer: hello the world !  ArmSoM is awesome!
RX Buffer: ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
```

## 7.4 常见问题
### 7.4.1 SPI ⽆信号

- 调试前确认驱动有跑起来
- 确保 SPI 4 个引脚的 IOMUX 配置⽆误
- 确认 TX 送时，TX 引脚有正常的波形，CLK 有正常的 CLOCK 信号，CS 信号有拉低
- 如果 clk 频率较⾼，可以考虑提⾼驱动强度来改善信号
- 如何简单判断 SPI DMA 是否使能，串口打印如⽆以下关键字则 DMA 使能成功

```
[ 0.457137] Failed to request TX DMA channel
[ 0.457237] Failed to request RX DMA channel
```

### 7.4.2 延迟采样时钟配置⽅案

对于 SPI io 速率较⾼的情形，正常 SPI mode 可能依旧⽆法匹配外接器件输出延时，RK SPI master read 可能⽆法采到有效数据，需要启⽤ SPI rsd 逻辑来延迟采样时钟。RK SPI rsd（read sample delay）控制逻辑有以下特性：
- 可配值为 0，1，2，3
- 延时单位为 1 spi_clk cycle，即控制器⼯作时钟，详⻅ "SPI 设备配置章节“

rx-sample-delay 实际延时为 dts 设定值最接近的 rsd 有效值为准，以 spi_clk 200MHz，周期 5ns 为例：
rsd 实际可配延迟为 0，5ns，10ns，15ns，rx-sample-delay 设定 12ns，接近有效值 10ns，所以最终为 10ns延时。

### 7.4.3 SPI 传输速率及 CPU 占⽤率⾼优化⽅向


通常 SPI 传输速率慢、IO ⾼负载下 CPU 占⽤率⾼的原因是因为：SPI 传输粒度小，且传输次数多，频繁发起传输从而涉及较多的调度，例如：
- SPI 线程调度
- 中断调度，参考 “SPI 传输⽅式说明” 章节先确认是否使⽤到中断传输
- CPU idle 调度

建议优化⽅向：
1. 开启 auto runtime，延时设置为 500ms，具体值以实测为准，修改点为 dts 节点添加rockchip,autosuspend-delay-ms 属性

2. 降低 CPU 负载：改⽤ IRQ 传输，相对 DMA 可能会有优势，补丁参考 “改为 IRQ 传输” 小节

3. 降低 CPU 负载：如为 DMA 传输，可修改 TX DMA ⽔线来降低 CPU 在 DMA 回调函数中等待 fifo 传输完成的时间