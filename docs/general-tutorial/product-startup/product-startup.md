---
sidebar_label: "Start the system"
sidebar_position: 3
---
# Start the system

There are two steps required when running the product at the beginning: burning the system and starting the system

I have already explained how to burn the system before. Now I will explain to you how to start the system.

* Starting the system requires correctly connecting the storage device and performing operations such as power-on and startup. For details, please refer to this article.

* System login can use serial port login or SSH login. If we have access to the screen, we can directly enter the desktop system through the manager displayed on the display screen.

## 1. How to start the product

ArmSoM series products support multiple boot methods. Our current products mainly use eMMC and SD cards to boot, and some product hardware supports NVME boot.

For products without onboard eMMC, only one boot method is supported: SD card. When the system image is burned into the SD card, it is booted from the SD card.

For products with onboard eMMC and a TF card slot, both eMMC and SD card boot methods are supported.

:::info startup sequence
SD card startup -> eMMC startup -> SD card and eMMC have no images, startup fails
:::

### 2. Startup Precautions

The image of the Linux system is burned into the emmc or SD card, and the product will run automatically when powered on.

The following are the product startup notes:

1. Correctly connect on-board peripherals according to the product interface diagram, especially devices that do not support hot swap (MIPI-CSI display, MIPI-DSI camera, PCIE-WIFI network card, PCIE-4G network card, SSD hard drive, etc.), Unplugging and plugging in while powered on may damage the device and prevent it from working properly.

2. When using the display, please note that the MIPI interface does not support hot swapping. There are two types of HDMI interfaces, one is the standard HDMI interface and the other is micro-HDMI. The two interfaces cannot be directly connected. , you need to use a switching interface for conversion connection. If it is a monitor with a VGA or DP interface, it can also be displayed by using an adapter.

3. The product supports mouse and keyboard, which can be connected through USB interface if necessary.

4. Use the power source to power the product. Note: The power supply specifications marked in the product documentation are the specifications for normal use of the product. If there are many peripherals connected, please use a power supply with the same voltage and higher power.

:::tip Start after first burning
When the image is started for the first time after burning, it will enter Recovery mode to configure the product. It will automatically restart after a minute or two of power-on. After restarting, the system will run normally.
:::

## 3. Login method

### 3.1. Serial terminal access

[Serial port access](./serial)

### 3.2. HDMI monitor and mouse and keyboard

As long as it is a product with a desktop system, plug in the HDMI interface data cable to connect to the screen, plug in the mouse and keyboard, and enter the desktop to operate the serial port, file system, etc.

### 3.3. SSH access

[SSH access](./ssh)


## 4. Login username and password

| User | Username | Password |
| -------- | -------- | -------- |
| superuser | root | root |
| Ordinary user | armsom | armsom |

First enter the username (case sensitive) and then enter the password (there will be no text prompt when entering the password, so you need to pay attention to the Chinese input method and capitalization)

If the username and password are correct, you will enter the terminal.

To change the username, use the usermod command, and to change the password, use the passwd command.