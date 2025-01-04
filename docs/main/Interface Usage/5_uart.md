---
sidebar_label: "5. UART Usage"
slug: /interface-usage/uart
sidebar_position: 5
---
# 5. UART Usage
## 5.1 Introduction to UART

Rockchip UART (Universal Asynchronous Receiver/Transmitter) is based on the 16550A serial port standard and supports the following features:
- Supports 5, 6, 7, 8 data bits.
- Supports 1, 1.5, 2 stop bits.
- Supports odd and even parity (mark and space parity are not supported).
- Supports receive FIFO and transmit FIFO, usually 32 bytes or 64 bytes.
- Supports a maximum baud rate of 4M, but the actual baud rate depends on the chip clock division strategy.
- Supports interrupt-driven transmission mode and DMA transmission mode.
- Supports hardware flow control with RTS+CTS.

## 5.2 UART Usage Example
### 5.2.1 UART Pins
- Taking the ArmSoM-Sige7 as an example, the regular UARTs are integrated into the 40-pin header and can be multiplexed for UART functionality.
- The available UARTs for multiplexing in the 40-pin header: [Sige7 40PIN Definition](/interface-usage/40pin#16-armsom-sige7)

| UART       | Pin    | UART       | Pin    | Function     |
|------------|--------|------------|--------|--------------|
| UART2_TX_M0 | 8      | UART3_TX_M1 | 12     | Transmit Pin |
| UART2_RX_M0 | 10     | UART3_RX_M1 | 35     | Receive Pin  |
| UART7_TX_M1 | 15     | UART4_TX_M2 | 23     | Transmit Pin |
| UART7_RX_M1 | 11     | UART4_RX_M2 | 19     | Receive Pin  |
| UART7_TX_M2 | 26     | ----------- | ------ | Transmit Pin |
| UART7_RX_M2 | 24     | ----------- | ------ | Receive Pin  |

### 5.2.2 Enabling UART Communication Interface

By default, UART interfaces are disabled and need to be enabled for use.

:::tip
The debug serial port is enabled by default, available on pins 8/10 of the 40-pin header.
:::

In the Armbian operating system, the `/boot/armbianEnv.txt` file is used to configure parameters and device tree overlays at boot time. You can edit this file to enable or disable UART device tree overlays to ensure that the UART bus is properly loaded at startup.

To check or enable UART device tree overlays, follow these steps:

- **View Device Tree Overlay Configuration**

Open the file: Use a text editor like nano or vim to open `/boot/armbianEnv.txt` via terminal, for example:

```bash
root@armsom-sige7:/home/armsom# sudo nano /boot/armbianEnv.txt
```

For example, to enable `uart3-m1`, add `rk3588-uart3-m1` to the overlays section like this:

```
overlays=rk3588-uart3-m1
```

After editing, save the file and exit the editor, then reboot the system for the configuration to take effect:

```bash
// First, sync
root@armsom-sige7:/home/armsom# sync
root@armsom-sige7:/home/armsom# sudo reboot
```

:::tip
- Q: If the system is rebooted by directly pulling the power, is it possible that files are not updated or the overlay system fails to start?
- A: When you abruptly disconnect the power or force a shutdown, there is a risk that files may not be properly synchronized from memory (RAM) to the storage device (e.g., hard drive or SSD). This happens because the operating system typically caches data in memory and writes it to the disk periodically. To avoid this issue, it is recommended to run the "sync" command before shutting down, ensuring that all data is written to the disk before pulling the power or shutting down.
:::

- **Verify UART is Enabled**

After reboot, you can check whether the UART is working correctly by running the following command:

```bash
root@armsom-sige7:/home/armsom# ls /dev/tty*  # List terminal devices
// After configuring the serial port, the corresponding software nodes will be:
UART3:   /dev/ttyS3
UART4:   /dev/ttyS4
```

### 5.2.3 Using Serial Port to Wake Up the System
The serial port wake-up feature keeps the serial port open during system standby, and sets the serial port interrupt as a wake-up source. To use this, the following parameters must be added to the device tree source (DTS):

```bash
&uart1 {
    wakeup-source;
};
```

## 5.3 Console Serial Port
- In ArmSoM-Sige7, UART2 is used as the console serial port for users to view boot-up information and for daily debugging.
### 5.3.1 Driver

```bash
kernel/drivers/soc/rockchip/fiq_debugger/rk_fiq_debugger.c
```

### 5.3.2 DTS Configuration
Since the `fiq_debugger` and regular serial ports are mutually exclusive, when the `fiq_debugger` node is enabled, the corresponding regular UART node must be disabled.

```bash
fiq_debugger: fiq-debugger {
    compatible = "rockchip,fiq-debugger";
    rockchip,serial-id = <2>;
    rockchip,wake-irq = <0>;
    /* If enabling uart uses irq instead of fiq */
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
Here’s a brief explanation of some parameters:
- `rockchip,serial-id`: The UART number being used. Changing the serial-id will register the `fiq_debugger` as a different ttyFIQ device.
- `rockchip,irq-mode-enable`: Set to 1 to use IRQ interrupts, 0 to use FIQ interrupts.
- `interrupts`: Configuration for auxiliary interrupts, usually can remain as default.

### 5.3.3 Testing
An official test program is available for UART debugging: `ts_uart.uart` (stored in the network drive under 1. Development Tools -> Testing Tools), along with two test files `send_0x55` and `send_00_ff`. 

Push the test program to a path on the development board:

```bash
adb root
adb remount
adb push ts_uart.uart /data
adb push send_0x55 /data
adb push send_00_ff /data
```

Set the executable permissions for the test program:

```bash
sudo chmod +x /data/ts_uart.uart
```

Use the following command to get help for the program:

```bash
console:/ # ./data/ts_uart.uart
```
**Test Examples:**
- Sending data:
```bash
ts_uart s init.rc 1500000 0 0 0 /dev/ttyS0
```
- Loop-back mode:
```bash
ts_uart m init.rc 1500000 0 0 0 /dev/ttyS0
```

### 5.3.3.1 Testing Send
Send data using the following command, with files `send_0x55` and `send_00_ff` as the data to send:

```bash
./data/ts_uart.uart s ./data/send_0x55 1500000 0 0 0 /dev/ttyS3
./data/ts_uart.uart s ./data/send_00_ff 1500000 0 0 0 /dev/ttyS3
```

You can use a USB-to-UART adapter connected to a PC to validate the transmission using a serial port debug tool.

### 5.3.3.2 Testing Receive
To receive data, use the following command, with `receive_0x55` as the file to save received data:

```bash
./data/ts_uart.uart r ./data/receive_0x55 1500000 0 0 0 /dev/ttyS1
```

Send data using a serial debug tool on the PC side, and the program will automatically verify and print received data in hexadecimal ASCII values.

### 5.3.3.3 Internal Loop-back Test
For an internal loop-back test, use the following command:

```bash
./data/ts_uart.uart m ./data/send_00_ff 1500000 0 0 0 /dev/ttyS3
```

You can stop the test by pressing Ctrl+C and check the log to compare sent and received data for consistency:

```bash
Sending data from file to port...
send:1172, receive:1172 total:1172 # Data matches, test successful
send:3441, receive:3537 total:3441 # Data mismatch, test failed
```

If the test fails, it may indicate an issue with the serial port or another program using the same serial port. You can check which program is using the serial port with the following command:

```bash
lsof | grep ttyS3
```

## 5.4 Baud Rate Configuration

The UART baud rate is calculated as follows: 

```
UART Baud Rate = Clock Source / Internal Divider / 16
```

When the clock source is directly provided by a 24M crystal, the UART will use the internal divider to achieve the desired baud rate. When the clock source comes from the CRU module with PLL division, the UART baud rate is generally 1/16 of the working clock source. The actual baud rate supported and the data transmission stability are primarily determined by the UART clock division strategy.

Rockchip UART ensures stable support for common baud rates such as 115200, 460800, 921600, 1500000, 3000000, and 4000000. For special baud rates, adjustments to the working clock division strategy may be needed.

## 5.5 Using DMA

The DMA transmission mode for UART is more beneficial when transmitting large amounts of data, as it reduces the CPU load. In general, DMA does not significantly improve transmission speed compared to interrupt mode. This is because modern CPUs have high performance, and transmission bottlenecks are more likely at the peripheral level. Additionally, starting DMA requires extra resources, and UART data often has variable lengths, which can reduce DMA transmission efficiency.

Thus, it is generally recommended to use the default interrupt transmission mode. You may see the following log if DMA is not available:

```bash
failed to request DMA, use interrupt mode
```

If DMA channels are limited, you may see the following log:

```bash
got rx dma channels only
```

## 5.6 Using Hardware Flow Control

When using hardware flow control, ensure that the UART driver enables the hardware flow control feature, and the CTS and RTS flow control pins are configured correctly in the DTS. It is recommended to use hardware flow control (four-wire UART) in scenarios with high baud rates (1.5M and above) and large data volumes.