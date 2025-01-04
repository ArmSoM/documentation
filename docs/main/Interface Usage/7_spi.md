---
sidebar_label: "7. SPI Usage"
slug: /interface-usage/spi
sidebar_position: 7
---

# 7. SPI Usage

SPI (Serial Peripheral Interface) is a common synchronous serial communication protocol used for data exchange between microcontrollers (MCU) and external devices. It was proposed by Motorola in the early 1980s and is widely used in various embedded systems such as sensors, displays, storage devices, and more.

## 7.1 SPI Communication Working Principle

The SPI protocol uses a master-slave architecture, where one master device controls one or more slave devices for data exchange. Its working principle mainly includes four signal lines and timing control:

1. Signal Lines
- **MOSI (Master Out Slave In)**: The data line used for sending data from the master device to the slave device.
- **MISO (Master In Slave Out)**: The data line used for sending data from the slave device to the master device.
- **SCK (Serial Clock)**: The clock signal generated by the master device to synchronize data transmission.
- **SS/CS (Slave Select/Chip Select)**: The line used by the master device to select the slave device for communication. When the SS line is low, it indicates that a specific slave device is selected for communication.

2. Data Transmission
- **Synchronous transmission**: Data is transmitted synchronously under the control of the clock signal. Each clock pulse transmits one bit of data, which is sent through the MOSI or MISO line.
- **Full-duplex communication**: SPI is a full-duplex communication protocol, meaning that both the master and slave devices can send and receive data simultaneously.

3. Clock Polarity and Phase
- **Clock Polarity (CPOL)**: The level of the clock line (high or low) determines the timing of data transmission.
- **Clock Phase (CPHA)**: The data sampling timing, typically at the rising or falling edge of the clock pulse.
- SPI supports four different clock configurations (combinations of CPOL and CPHA), which enables compatibility with different peripherals.

## 7.2 SPI Usage Example

### 7.2.1 SPI Pins

The ArmSoM series boards have SPI peripherals on the 40-pin header. The following example uses the Sige5 board. [Sige5 40PIN Pinout](/interface-usage/40pin#16-armsom-sige5).

| SPI    | Pin         | Function  | 
| -------- | ----------- | ----------- |
| SPI4_MOSI_M0 | 19            | Master-to-Slave data line. |
| SPI4_MISO_M0 | 21            | Slave-to-Master data line. |
| SPI4_CLK_M0  | 23            | Clock signal generated by the master. |
| SPI4_CSN0_M0 | 24            | Used to select the specific slave device. |

### 7.2.2 Enabling SPI Communication Interface

SPI interfaces are disabled by default and need to be enabled for use.

In the Armbian operating system, the `/boot/armbianEnv.txt` file is used to configure system parameters and device tree overlays at startup. You can edit this file to enable or disable SPI device tree overlays, ensuring the SPI bus loads correctly at boot.

To check or enable the SPI device tree overlays, follow these steps:

- **Check Device Tree Overlay Configuration**

Open the file: Open the `/boot/armbianEnv.txt` file through the terminal using a text editor such as nano or vim:

```bash
root@armsom-sige5:/home/armsom# sudo nano /boot/armbianEnv.txt
```

For enabling SPI4-M0, for example, add or modify the following:

```
overlays=rk3576-spi4-m0-cs1-spidev
```

The `overlays` line specifies the device tree overlay. If these lines are not present, you can add them manually.

After editing, save the file and exit the editor, then reboot the system to apply the configuration:

```bash
// Run sync first
root@armsom-sige5:/home/armsom# sync
root@armsom-sige5:/home/armsom# sudo reboot
```

:::tip
- **Q: If the power is turned off abruptly, could files remain unsaved or the overlay system fail to boot?**
- **A:** When the power is abruptly turned off or the system is forcefully shut down, there is a risk that files may not be synchronized from memory (RAM) to storage devices (like hard drives or SSDs). This happens because the operating system typically caches data in memory and periodically writes it to disk. To prevent this issue, it is recommended to run the “sync” command before shutting down to ensure all data is written to disk before powering off.
:::

- **Verify SPI is Enabled**

After enabling the SPI device tree overlay, reboot the board and check the SPI driver status by examining the SPI device file. If the `rk3576-spi3-m0.dtbo` is used, the corresponding device file would be `spidev3.0`:

```bash
armsom@armsom-sige5:~$ ls /dev/spi*
/dev/spidev4.1
```

## 7.3 Loopback Test

Based on the `ioctl` parameters, you can write an SPI test program. For simplicity, this example performs an SPI loopback test. To conduct the test, simply short the MISO and MOSI pins (pins 19 and 21) on the ArmSoM-Sige5 board using jumper caps.

In this way, the data sent can be looped back, making it easy to verify whether the SPI functionality is working properly.

![spi-sige5](/img/general-tutorial/interface-usage/spi-sige5.png)

Test Code:

```c
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

#define SPI_DEV_PATH "/dev/spidev4.1"

/* SPI receive and send buffers */
unsigned char tx_buffer[100] = "hello the world ! ArmSoM is awesome!";
unsigned char rx_buffer[100];

int fd;                  					// SPI device file descriptor
static unsigned  mode = SPI_MODE_2;         // SPI mode
static uint8_t bits = 8;        			// Bits per word for data
static uint32_t speed = 10000000; 			// Transmission speed
static uint16_t delay = 0;          			// Delay between transmissions

// SPI transfer function
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

  	// Perform SPI transfer
  	ret = ioctl(fd, SPI_IOC_MESSAGE(1), &tr);
  	if (ret < 1)
  	  	perror("SPI transfer failed");
}

// SPI initialization function
void spi_init(int fd)
{
  	int ret;

	// Set SPI mode
  	ret = ioctl(fd, SPI_IOC_WR_MODE32, &mode);
  	if (ret == -1)
  	  	perror("Can't set SPI mode");

	// Set bits per word
  	ret = ioctl(fd, SPI_IOC_WR_BITS_PER_WORD, &bits);
  	if (ret == -1)
    	perror("Can't set bits per word");

	// Set maximum speed
  	ret = ioctl(fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed);
  	if (ret == -1)
    	perror("Can't set max speed");

	// Print configuration
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

	// Open SPI device
	fd = open(argv[1], O_RDWR); // Open the file and enable read/write
    if (fd < 0) {
        perror("Can't open SPI device");
        return -1;
    }

	// Initialize SPI configuration
	spi_init(fd);

	// Clear receive buffer
	memset(rx_buffer, 0, sizeof(rx_buffer));

	// Perform data transmission and reception
	transfer(fd, tx_buffer, rx_buffer, sizeof(tx_buffer));

	// Print the contents of send and receive buffers
	printf("TX Buffer: %s\n", tx_buffer);
	printf("RX Buffer: %s\n", rx_buffer);

	// Close the device
	close(fd);

	return 0;
}
```

### 7.3.1 Compile and Run

```
# Compile
armsom@armsom-sige5:~$ gcc spi_selftest.c -o spi_selftest

# Run
armsom@armsom-sige5:~$ sudo ./spi_selftest /dev/spidev4.1 // Shorted
SPI Mode: 0x2
Bits per word: 8
Max speed: 10000000 Hz (10000 KHz)
TX Buffer: hello the world ! ArmSoM is awesome!
RX Buffer: hello the world ! ArmSoM is awesome!

armsom@armsom-sige5:~$ sudo ./spi_selftest /dev/spidev4.1 // Not shorted
SPI Mode: 0x2
Bits per word: 8
Max speed: 10000000 Hz (10000 KHz)
TX Buffer: hello the world ! ArmSoM is awesome!
RX Buffer: ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
```


## 7.4 Common Issues

### 7.4.1 SPI No Signal

Here are a few steps to troubleshoot SPI no signal issues:

1. **Ensure the Driver is Running**: Before debugging, make sure the SPI driver is correctly running and the system is configured to handle SPI operations.
   
2. **Check IOMUX Configuration**: Verify that the IOMUX configuration for the four SPI pins (MOSI, MISO, SCK, CS) is correct and aligned with your hardware setup.

3. **Verify Signal Integrity**: When transmitting data (TX), check the TX pin for a normal waveform. Also, verify that the clock (CLK) signal is present and that the Chip Select (CS) line is pulled low.

4. **Improve Signal Quality**: If the clock frequency is high, you might need to increase the drive strength to improve the signal quality.

5. **Check if DMA is Enabled**: If you want to confirm that DMA is enabled, look for specific messages in the UART logs. The absence of the following messages indicates that DMA is enabled:

```
[ 0.457137] Failed to request TX DMA channel
[ 0.457237] Failed to request RX DMA channel
```

### 7.4.2 Clock Sampling Delay Configuration

For high SPI IO rates, the standard SPI mode may not be able to match the output delay of the external device. This may result in the SPI master failing to capture valid data. In such cases, enabling the SPI Read Sample Delay (rsd) logic is required. The key features of the rsd control logic are:

- The configurable delay values are 0, 1, 2, and 3.
- The delay unit is 1 SPI clock cycle (controller operating clock).

For example, if the SPI clock (spi_clk) is 200MHz (with a 5ns cycle period), the actual delay configuration in terms of effective value would be:

- For a 12ns rx-sample-delay setting, the closest valid delay value is 10ns (since the system supports 0ns, 5ns, 10ns, and 15ns).

Thus, if you set a 12ns delay, it will be rounded to 10ns.

### 7.4.3 SPI Transfer Rate and High CPU Utilization Optimization

When the SPI transfer rate is low, or there is high I/O load, the CPU utilization can be high due to the following reasons:

- **Small Transfer Granularity**: If the SPI transfer size is small, but many transfers are needed, it will trigger frequent scheduling and interrupts.
  - SPI thread scheduling.
  - Interrupt scheduling (if interrupt-driven transfers are used).
  - CPU idle scheduling.

**Optimization Directions**:

1. **Enable Auto Runtime**: Set the runtime autosuspend delay to 500ms (this value may vary based on actual testing). You can modify this by adding the `rockchip,autosuspend-delay-ms` attribute to the device tree (DTS).

2. **Lower CPU Load**: Switch to interrupt-driven (IRQ) transfers instead of direct transfers, which might provide a performance advantage. For a DMA-based transfer, you may need to optimize the interrupt handlers as well.

3. **Reduce CPU Load with DMA**: If using DMA, adjust the TX DMA pipeline to reduce the waiting time in the DMA callback functions and ensure that the CPU spends less time waiting for the FIFO to finish transmitting.