---
description: ArmSoM-AIM-IO
keywords: [armsom, ArmSoM-AIM-IO, maker kit, rockchip]
sidebar_label: "AIM-IO"
sidebar_position: 4
slug: /armsom-aimio
image: /img/aim/aim-io.png
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Product Introduction: AIM-IO

**AIM-IO** is an IO board from the ArmSoM AIM series, with dimensions of 100x80x29 mm, and is also compatible with current Jetson Nano core modules. It is a mini AI computer designed for makers, learners, and developers, capable of quickly implementing AI technology in various smart devices.

## Hardware

### Hardware Interface

![AIM-IO](/img/aim/aim-io.png)

:::tip
The AIM-IO Board is powered by 12V DC.
:::

### Hardware Spec

The AIM-IO Board is a companion board for AIM modules designed to assist developers using AIM modules in completing system and embedded board development. Compared to the Jetson Nano Developer Kit (B01), the AIM-IO Board is of the same size but adds 2 MIPI CSI interfaces, 1 M.2 Key-E interface, and 1 MIPI DSI interface.

* 1x DisplayPort
* 1x HDMI-out
* 4x USB 3.0 Type-A
* Gigabit Ethernet
* GPIO: 40-PIN expansion header
* POE: 5 V Power Over Ethernet
* Power Connector: DC Barrel jack for 12V power input
* Expansion: M.2 (E-key, PCIe/USB/SDIO/UART), microSD
* MIPI DSI: 1x 4 lanes MIPI DSI up to 4K@60fps (x4)
* MIPI CSI0/1: 2x 2 lanes MIPI CSI，Maximum 2.5Gbps per lane.
* MIPI CSI2/3: 1x 4 lanes MIPI CSI，Maximum 2.5Gbps per lane.
* Firmware flashing and device mode via USB Type-C
* Dimensions: 100 x 80 x 29 mm (3.94 x 3.15 x 1.14 in)
* Weight: 78.4g

### Pin Definition 

<details>
    <summary>
       AIM7 40-PIN Connector
    </summary>
<div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     20     | UART0_RX_M0 / I2C4_SDA_M2 / PWM2_M0 /  GPIO0_C4 | <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     21     | UART0_TX_M0 / I2C4_SCL_M2 / PWM4_M0 /  I2S1_SDI0_M1   / GPIO0_C5  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     128     | SPI0_MISO_M1 / UART9_RTSN_M1 / I2S1_MCLK_M0 /  GPIO4_A0  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  SPDIF0_TX_M0 / I2C5_SCL_M3 / UART1_TX_M1 / GPIO1_B6 |     46     |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  PWM13_M2 / I2C5_SDA_M3 / UART1_RX_M1 / GPIO1_B7 |     47      |
|     62     |  PWM14_M2 / I2C8_SCL_M2 / UART1_RTSN_M1 / GPIO1_D6 | <div className='green'>11</div>  | <div className='green'>12</div> | SPI0_MOSI_M1/ UART9_CTSN_M1 / I2S1_SCLK_M0 / GPIO4_A1 |     129     |
|     58     |  SPI1_CLK_M2 / UART4_TX_M0 / PWM0_M1 / I2C1_SCL_M4 / I2S0_SDO3 / I2S0_SDI2 / GPIO1_D2  | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|     108     |   GPIO3_B4 / I2S2_MCLK_M1 / MIPI_CAM3_PDN  | <div className='green'>15</div>  | <div className='green'>16</div> |  GPIO1_D5 / SPI1_CS1_M2 / PDM0_SDI0_M0   |     61     |
|             |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> |  SPI1_CS0_M2 / UART4_RX_M0 /PWM1_M1 / I2C1_SDA_M4 /PDM0_SDI3_M0 / I2S0_SDI1 / GPIO1_D3 |    59     |
|     42      | SPI0_MOSI_M2 / PCIE30X4_PERSTN_M3 / UART4_RX_M2 / PDM1_SDI3_M1 / GPIO1_B2  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |             |
|     41      | SPI0_MISO_M2 / PCIE30X4_WAKEN_M3 / PDM1_SDI2_M1 / GPIO1_B1 | <div className='green'>21</div>  | <div className='green'>22</div> | SPI1_MISO_M2 / UART6_TX_M2 / I2C7_SCL_M0 / I2S0_SDO1 / GPIO1_D0 |      56      |
|     43      | SPI0_CLK_M2 / SATA0_ACT_LED_M1 / PCIE30X1_0_WAKEN_M2 / PDM1_CLK1_M1 / UART4_TX_M2  / GPIO1_B3 | <div className='green'>23</div>  | <div className='green'>24</div> |  SPI0_CS0_M2 / PCIE30X1_0_PERSTN_M2 / PDM1_CLK0_M1 / UART7_RX_M2  / GPIO1_B4 |     44      |
|             |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |  GPIO1_B5  / UART7_TX_M2 / SPI0_CS1_M2 |     45      |
|     16     | I2C2_SDA_M0 / CAN0_RX_M0 / SPI0_MOSI_M0 / PWM1_M0 / GPIO0_C0  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  GPIO0_B7 / CAN0_TX_M0 / SPI0_CS1_M0 / I2C2_SCL_M0 / PWM0_M0  |    15     |
|    103      | PWM8_M0 / GPIO3_A7  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|     104     | PWM9_M0 / GPIO3_B0  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO3_A0 / PWM10_M0 / SPI4_MISO_M1 / I2C6_SDA_M4 / I2S3_MCLK |    96     |
|     105     | UART2_TX_M2 / PWM2_M1 / GPIO3_B1  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |             |
|     130     | I2S1_LRCK_M0 / SPI0_CLK_M1 / I2S1_LRCK_M0 / GPIO4_A2  | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO1_D7 / I2C8_SDA_M2 / UART1_CTSN_M1 |     63     |
|     57      | UART6_RX_M2 / I2C7_SDA_M0 / GPIO1_D1	    | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO4_A5 / UART3_TX_M2 / I2C3_SDA_M2 / I2S1_SDI0_M0   |     133     |
|             |   GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO4_B1 /  SPI0_CS1_M1 / UART8_RX_M0 / I2C6_SCL_M3 / I2S1_SDO0_M0   |     137     |

</div>
</details>

## User Manual

The AIM-IO User Manual helps users understand the basic usage of AIM products and the preparations needed to get started with your ArmSoM-AIM 🚀.

## Getting Started

Before using the ArmSoM-AIM product, please prepare the following items.

### Tools Preparation
* Power Supply
* System Installation (Choose one)
  * Onboard eMMC Boot
    * USB Type-C data cable to write the image from the Type-C port on the ArmSoM-AIM series. You need to connect the ArmSoM-AIM to your PC using a Type-C data cable.
  * MicroSD/TF Card Boot
    * MicroSD/TF card, Class 10 or above, at least 8GB SDHC, and a card reader.
    * The following high-speed TF cards have been tested and validated by the ArmSoM team:
      * SanDisk 32GB TF (MicroSD) (Developer Recommended)
      * SanDisk 32GB TF (MicroSD) for Dash Cam & Security Monitoring (Recommended for Long-Term Use)
      * SanDisk TF 8GB Class 10 microSD 
      * SanDisk TF 128GB Class 10 microSD XC 48MB/S

You can set up the ArmSoM-AIM as an interactive computer with a desktop interface or configure it as a headless computer accessible only via the network. To set up the ArmSoM-AIM as a headless computer, configure the hostname, user account, network connection, and SSH during the initial OS installation. If you want to use the ArmSoM-AIM directly, you will need the following additional accessories:

**Optional Items**
* Keyboard & Mouse
* HDMI Monitor and HDMI Cable
* Ethernet Cable
* Camera Module
  * Recommended: [camera-module1](./armsom-camera-module1).
* LCD Display
  * Recommended: [Display 10 HD](./armsom-display-10-hd).

### Power Supply

The ArmSoM-AIM series requires a power supply specification of 12V/2-3A. You can use any high-quality power supply that provides the correct power mode.

Plug the power supply into the DC barrel jack, ensuring you use the correct port!

## Image Burning Options

The system images for the ArmSoM series include various root file systems, and you can choose the appropriate image for your needs.

:::info
The system image includes the Linux kernel, basic programs, etc., which are essential for running ArmSoM series products. Therefore, we need to install the image before operating the product.
:::

### Obtaining the System Image

Visit the Google Drive resource introduction page to obtain the system image: [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56)

:::tip
1. The default username/password for the official images is armsom/armsom or root/root.
2. Ubuntu, Armbian, and OpenWrt offer more choices for open-source enthusiasts provided by ArmSoM.
:::

### Burning Ubuntu, Armbian, or OpenWrt Systems

#### Using a Card Reader to Burn to MicroSD

**Using Etcher to Write the Operating System Image to MicroSD**

This method is suitable for writing the system to an SD card and is available on Windows, macOS, and Linux x64 operating systems.

:::tip Preparation
1. A microSD card
2. An SD card reader
3. Download the corresponding Ubuntu / Armbian / OpenWrt system image
4. Insert the SD card into the SD reader and connect it to your computer’s USB port
:::

**Using Etcher to Write the Operating System Image to MicroSD**

1. Download balenaEtcher from the [balena website](https://etcher.balena.io/), selecting the version for your host operating system. The Linux version is in AppImage format.
2. Insert the MicroSD card into the MicroSD reader.
3. Open the Etcher window, select "Flash from file," and locate your downloaded image. Double-click to select it.

![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-from-file.png)

4. Click "Select target" to choose the MicroSD card you want to burn to.
5. Click "Flash" and wait for the process to complete; this may take some time.
6. Upon successful burning, you will see a confirmation message.

![balenaEtcher-flash-success](/img/tools/balenaEtcher-flash-success.png)

:::tip If Flashing Fails
1. On Windows, the image burning process needs to be "Run as Administrator." Some Linux users may need to use the `chmod` command to make it executable.
2. If the image writing fails, please try again.
:::

**Using Win32DiskImager to Write the Operating System Image to MicroSD**

1. [Download](https://win32diskimager.org/) the Win32DiskImager tool.
2. Open Win32DiskImager.
3. Click the folder icon and select the image you want to write.
4. After completing the previous steps, click the "Write" button to start writing the image and wait for the process to finish.

#### Using USB Cable to Burn to eMMC

##### Tool Acquisition and Installation

Burning the image to eMMC requires the RKDevTool burning tool and the RK Driver Assistant (Driver Assistant).

Click the link: [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56)

![baidu-flash-tool](/img/general-tutorial/baidu-flash-tool.jpeg)

###### Installing Driver Assistant

Unzip the Driver Assistant software package and double-click DriverInstall.exe to enter the driver installation interface.

Click "Driver Install" to start the installation. If you're unsure whether an old version of the driver is already installed, first click "Driver Uninstall" to remove it, then click "Driver Install."

![install-driver-assitant](/img/general-tutorial/install-driver-assitant.png)

###### Installing RKDevTool

RKDevTool is a dedicated USB burning tool for Rockchip products on the Windows platform, allowing you to download the system image to the product via USB.

After unzipping the package, it can be used without installation; double-click RKDevTool.exe to access the software interface.

The software has three main sections: download the image (to burn the image according to the address), upgrade the firmware, and advanced functions.

##### MASKROM/Loader Mode for Image Burning

This mode is suitable for products that have not had a system burned or where the burned system is corrupted and cannot run **(Applicable to all situations)**.

We open the RKDevTool burning tool and set the product to enter burning mode.

```
Please refer to the product-related instructions for operations; the methods to enter Maskrom mode are generally similar across different products.

1. Prepare a Type-C cable for image burning.
2. Disconnect all possible power connections to the product, such as power cables, USB cables, etc.
3. Connect one end of the Type-C cable to the product's OTG interface and the other end to your computer's USB port, then open the RKDevTool software.
4. Short the 10 and 11 pins on the 12-pin interface (as shown) to enter loader mode, then power the product using DC.
5. Wait for the software to prompt that a MASKROM/LOADER device has been found (as shown below), then you can release the button.
6. If it does not succeed, repeat steps 2-5.
```

Shorting pins 10 and 11 to enter loader mode.
![aimio-recovery](/img/aim/aimio-recovery.png)

Hold down the maskrom button on the aim7 to enter maskrom mode.

![aimio-maskrom](/img/aim/aimio-maskrom.png)

Start burning the system.

![rkdevtool-install-emmc](/img/general-tutorial/rkdevtool-install-emmc.png)

1. Select the "Download Image" option.
2. Confirm that the board has entered Maskrom mode.
3. Click the blank cell to select the MiniLoaderAll and Image files to use; the corresponding MiniLoaderAll and Image are stored on Google Drive.
4. In the "Storage" option, select the target medium EMMC, and select "Force Write by Address," then click "Execute."
5. Wait for the writing to complete, after which the device will automatically reboot, as shown in the right side of the image with "Download image OK."

### Burning Debian System

#### Using a Card Reader to Burn to MicroSD

##### Installing SDDiskTool

Burning the image to eMMC requires using the burning tool SDDiskTool_version.exe.

Click the link: [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56)

![baidu-SDDiskTool](/img/general-tutorial/baidu-sd-disk-tool.png)

After unzipping the package, you can use it without installation; double-click SD_Firmware_Tool.exe to access the software interface.

##### Burning the Image

Open the executable file SDDiskTool (SD_Firmware_Tool.exe) and insert the SD card.

First, select the correct SD card to burn, then set the function mode to "SD Boot," select the image to burn, and finally click "Start" to create the burning image on the SD card.

![SDDiskTool](/img/general-tutorial/sd-disk-tool.png)

Be patient while the SD card is being burned. If the image is large, the burning time will increase accordingly.

:::tip Reminder
1. Clicking "Create" may occasionally result in an error stating that it cannot burn; you can close the error window and try to start creating again. If it still doesn’t work, try formatting the SD card.
2. The firmware downloaded from Google Drive needs to be extracted before loading. On Windows PCs, the tool must be run with administrator privileges to execute.
:::

#### Using USB Cable to Burn to eMMC

We open the RKDevTool burning tool and set the product to enter burning mode.

```
1. Prepare a Type-C cable for image burning.
2. Disconnect all possible power connections to the product, such as power cables, USB cables, etc.
3. Connect one end of the Type-C cable to the product's OTG interface and the other end to your computer's USB port, then open the RKDevTool software.
4. Press and hold the Recovery button, then power the product using DC.
5. Wait for the software to prompt that a LOADER device has been found (as shown below), then you can release the button.
6. If it does not succeed, repeat steps 2-5.
```

![recovery-flash-tool](/img/general-tutorial/recovery-flash-update.png)

![maskroom-flash-tool](/img/general-tutorial/maskroot-flash-update.jpg)

The flashing progress will be displayed on the right, and upon completion, it will prompt you:
![rkdevtool-success](/img/tools/rkdevtool-success.png)

:::tip Analysis of Flashing Failures
If a "Download Boot Fail" error occurs during the flashing process, or if there are errors during the process, as shown in the image, it is usually due to poor connection with the USB cable, low-quality cables, or insufficient power from the computer's USB port. Please change the USB cable or USB port on the computer to troubleshoot.
:::

Sure! Here’s the translation:

---

## Interface Usage

**AIM5 (RK3576) and AIM7 (RK3588) share the AIM-IO carrier board; use this page for interface connections and basic operation on either module.** Output examples use AIM7 with official Debian 12 / Linux 6.1. Confirm device names, GPIO numbers, and overlays for your module and image.

### 1. Debug Serial Port

Connect a USB-to-TTL serial adapter to the carrier board's debug header as shown below. Cross RX/TX and connect GND.

![armsom-aimio-debug](/img/aim/armsom-aimio-debug.png)

| AIM-IO debug header | Serial adapter |
| --- | --- |
| GND (pin 11) | GND |
| RX (pin 3) | TX |
| TX (pin 4) | RX |

These numbers refer to the debug header in the image, not the 40-pin header.

:::tip Serial Port Settings

- Baud rate: **1500000**
- Data bits: 8
- Stop bits: 1
- Parity: None
- Flow control: None

:::

Configure the serial terminal, then power on the board to view boot logs and log in.

| Username | Default password |
| --- | --- |
| `root` | `root` |
| `armsom` | `armsom` |

### 2. Ethernet Port

1. First, plug one end of the Ethernet cable into the ArmSoM-AIM’s Ethernet port and connect the other end to a router, ensuring the network is functional.
2. After booting, the system will automatically assign an IP address to the Ethernet card via DHCP without any additional configuration.
3. To check the IP address in the ArmSoM-AIM Linux system, use the following command:

```bash
root@armsom-aim7:/# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether c2:ed:bc:48:3b:7a brd ff:ff:ff:ff:ff:ff
    inet 192.168.10.106/24 brd 192.168.10.255 scope global dynamic noprefixroute eth0
       valid_lft 86396sec preferred_lft 86396sec
    inet6 fe80::7351:88a9:9b4c:11be/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

After the ArmSoM-AIM boots, there are three ways to check the IP address:

- Connect to an HDMI display, log into the system, and use the terminal to enter the `ip a` command.
- Use the debug serial port terminal to enter the `ip a` command to check the IP address.
- If there is no debug serial port or HDMI display, you can check the ArmSoM-AIM’s IP address through the router’s management interface. However, this method often fails to display the ArmSoM-AIM’s IP address. If not visible, follow these troubleshooting steps:
    - First, check whether the Linux system has booted properly. If the ArmSoM-AIM's green LED is solid, it generally indicates a normal boot. If only the red LED is on, the system hasn't booted correctly.
    - Ensure the Ethernet cable is securely connected, or try a different cable.
    - Test with another router, as many issues arise from routers not assigning IP addresses correctly or assigning them but not displaying them in the management interface.
    - If no alternative router is available, connect an HDMI display or use the debug serial port to check the IP address.

:::tip
It is important to note that the ArmSoM-AIM automatically assigns an IP address via DHCP without any settings required.
:::

4. Use the `ping` command to check network connectivity.

The command to test network connectivity is as follows. You can interrupt the `ping` command by using the Ctrl+C shortcut:
```bash
armsom@armsom-aim7:~$ ping www.baidu.com
PING www.a.shifen.com (183.2.172.185): 56 data bytes
64 bytes from 183.2.172.185: icmp_seq=0 ttl=53 time=8.370 ms
64 bytes from 183.2.172.185: icmp_seq=1 ttl=53 time=8.917 ms
64 bytes from 183.2.172.185: icmp_seq=2 ttl=53 time=8.511 ms
64 bytes from 183.2.172.185: icmp_seq=3 ttl=53 time=8.673 ms
^C
--- www.a.shifen.com ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max/stddev = 8.370/8.618/8.917/0.203 ms
```

### 3. M.2 Key E (Wi-Fi / Bluetooth)

AIM-IO provides an M.2 Key E slot. The following example uses the tested **Intel AX200**: Wi-Fi uses PCIe, while Bluetooth uses USB. Install the card and connect its antennas before powering on the board.

#### Identify the AX200

```bash
armsom@armsom:~$ lspci -nnk -s 01:00.0
```

Output collected from the board:

```text
01:00.0 Network controller [0280]: Intel Corporation Wi-Fi 6 AX200 [8086:2723] (rev 1a)
        Subsystem: Intel Corporation Wi-Fi 6 AX200NGW [8086:0084]
        Kernel driver in use: iwlwifi
        Kernel modules: iwlwifi
```

Use `lspci -nn` to find the actual PCIe address first. `Kernel driver in use: iwlwifi` confirms that the driver is bound. If the log reports `no suitable firmware found`, check that the image contains `/lib/firmware/iwlwifi-cc-a0-72.ucode`.

#### Use Wi-Fi

1. Start NetworkManager, enable Wi-Fi, and check the wireless interface name (`wlp1s0` in this example):

```bash
armsom@armsom:~$ sudo systemctl start NetworkManager
armsom@armsom:~$ sudo nmcli radio wifi on
armsom@armsom:~$ nmcli device status
```

2. Scan and list nearby Wi-Fi networks:

```bash
armsom@armsom:~$ sudo nmcli device wifi list ifname wlp1s0 --rescan yes
```

3. Connect to a network and enter the password when prompted:

```bash
armsom@armsom:~$ sudo nmcli --ask device wifi connect 'YourWiFiName' ifname wlp1s0
```

NetworkManager saves a successful connection and reconnects on subsequent boots. Check the connection status:

```bash
armsom@armsom:~$ nmcli -f DEVICE,TYPE,STATE device
```

Excerpt from the board:

```text
DEVICE          TYPE      STATE
wlp1s0          wifi      connected
```

4. Disconnect the current Wi-Fi connection:

```bash
armsom@armsom:~$ sudo nmcli device disconnect wlp1s0
```

#### Use Bluetooth

```bash
armsom@armsom:~$ lsusb -d 8087:0029
armsom@armsom:~$ bluetoothctl show
```

Excerpt from the board:

```text
Bus 004 Device 002: ID 8087:0029 Intel Corp. AX200 Bluetooth
Controller 38:7A:0E:75:1A:15 (public)
        Name: armsom
        Alias: armsom
        Class: 0x007c0000
        Powered: yes
```

Put the target device into discovery/pairing mode, then use `bluetoothctl`. Replace the example address with the address found during scanning:

```text
armsom@armsom:~$ bluetoothctl
[bluetooth]# power on
[bluetooth]# agent on
[bluetooth]# default-agent
[bluetooth]# scan on
[bluetooth]# pair AA:BB:CC:DD:EE:FF
[bluetooth]# trust AA:BB:CC:DD:EE:FF
[bluetooth]# connect AA:BB:CC:DD:EE:FF
[bluetooth]# scan off
[bluetooth]# quit
```

### 4. HDMI

| Model | AIM7 | AIM5  |
| ----- | ----- | ------ |
| Resolution | 8Kp60 | 4Kp120 |

1. Use an HDMI cable to connect the ArmSoM-AIM to an HDMI display.
2. If the HDMI display outputs an image after the Linux system boots, the HDMI interface is functioning properly.

:::tip
Note that many laptops have HDMI ports that only support output functionality. This means they cannot display HDMI output from other devices on their screens. When attempting to connect the development board's HDMI to a laptop HDMI port, please confirm whether your laptop supports HDMI input functionality. If no display is shown, first check whether the system version includes a desktop environment, as server versions only show the terminal.
:::

### 5. DP (DisplayPort)

| Model | AIM7 | AIM5  |
| ----- | ----- | ------ |
| Resolution | 4Kp60 | 4Kp60 |

1. Use a DP cable to connect the ArmSoM-AIM to a DP display.
2. If the DP display outputs an image after the Linux system boots, the DP interface is functioning properly.

### 6. USB

AIM-IO provides four USB 3.0 Type-A ports for keyboards, mice, USB drives, and UVC cameras.

#### Keyboard, Mouse, and USB Speed

Connect a keyboard or mouse to use it in the desktop. Inspect the USB topology with:

```bash
armsom@armsom:~$ lsusb -t
```

Excerpt from the board:

```text
/:  Bus 03.Port 1: Dev 1, Class=root_hub, Driver=xhci-hcd/1p, 5000M
    |__ Port 1: Dev 2, If 0, Class=Hub, Driver=hub/4p, 5000M
        |__ Port 4: Dev 3, If 0, Class=Mass Storage, Driver=usb-storage, 5000M
```

Check the speed on the actual device line: `5000M` indicates USB 3.0 for this drive; `480M` indicates USB 2.0. Lower speeds are normal for keyboards and mice. The root hub's speed alone does not establish the peripheral's speed.

#### USB Storage

```bash
armsom@armsom:~$ lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS /dev/sda
```

Output collected from the board:

```text
NAME    SIZE TYPE FSTYPE MOUNTPOINTS
sda    29.3G disk
└─sda1 29.3G part vfat
```

Confirm the actual device and partition before mounting. This example uses `/dev/sda1`:

```bash
armsom@armsom:~$ sudo mkdir -p /mnt/usb
armsom@armsom:~$ sudo mount /dev/sda1 /mnt/usb
armsom@armsom:~$ ls /mnt/usb
# Unmount before unplugging the drive.
armsom@armsom:~$ sudo umount /mnt/usb
```

#### USB Camera

Connect a UVC-compatible USB camera and locate its node and supported formats. Do not use a MIPI camera node for this test.

```bash
armsom@armsom:~$ v4l2-ctl --list-devices
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --list-formats-ext
```

Replace `/dev/videoX` with the actual UVC node. Desktop images can preview the camera in Cheese, or run the following command in a local graphical session:

```bash
armsom@armsom:~$ gst-launch-1.0 v4l2src device=/dev/videoX ! videoconvert ! autovideosink
```

#### USB Type-C Flashing

The carrier board's Type-C port connects to a computer for flashing in Loader/Maskrom mode. See [Image Burning Options](#image-burning-options) on this page. Power the board through the 12V DC input described above.

### 7. TF Card

Boot from eMMC, insert a TF/microSD card, and inspect its device and partitions. On the tested board, `/dev/mmcblk1` is the TF card and `/dev/mmcblk0` is eMMC; do not confuse them.

```bash
armsom@armsom:~$ lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS /dev/mmcblk1
armsom@armsom:~$ cat /sys/class/block/mmcblk1/device/type
```

Output collected from the board:

```text
NAME         SIZE TYPE FSTYPE MOUNTPOINTS
mmcblk1     29.1G disk
├─mmcblk1p1    8M part
├─mmcblk1p2  128M part ext2
└─mmcblk1p3   29G part ext4
SD
```

This example card contains a system image; a data card may have different partitions. Select a partition with a filesystem from `lsblk`. The following example mounts the third partition read-only:

```bash
armsom@armsom:~$ sudo mkdir -p /mnt/tfcard
armsom@armsom:~$ sudo mount -o ro /dev/mmcblk1p3 /mnt/tfcard
armsom@armsom:~$ ls /mnt/tfcard
armsom@armsom:~$ sudo umount /mnt/tfcard
```

:::tip
To keep booting from eMMC, remove a bootable TF card before rebooting; otherwise the board may boot from the card. Unmount any partitions in use before removing it.
:::

### 8. RTC

The tested AIM7 uses an HYM8563-compatible RTC on `i2c4`. Connect the RTC backup battery and confirm device registration:

```bash
armsom@armsom:~$ cat /sys/class/rtc/rtc0/name
armsom@armsom:~$ dmesg | grep rtc-hym8563
```

Excerpt from the board:

```text
rtc-hym8563 4-0051
[    2.149494] rtc-hym8563 4-0051: rtc information is valid
[    2.156470] rtc-hym8563 4-0051: registered as rtc0
```

Verify that the system time is correct before writing it to the RTC:

```bash
armsom@armsom:~$ date
armsom@armsom:~$ sudo hwclock -w -f /dev/rtc0
armsom@armsom:~$ sudo hwclock -r -f /dev/rtc0
armsom@armsom:~$ sudo poweroff
```

Leave the RTC battery connected and disconnect only the main power. Power on again after a few minutes and use `hwclock -r -f /dev/rtc0` to check that time has advanced. Disconnecting the backup battery does not test battery-backed timekeeping.

### 9. MIPI-CSI

#### Camera Ports and Overlays

AIM5 and AIM7 use the same physical ports and camera modules. The I2C addresses and full filenames below are AIM7 examples; AIM5 uses its own prefix and boot configuration:

| Module | Boot configuration | Camera overlay prefix |
| --- | --- | --- |
| AIM5 | `/boot/uEnv/uEnvarmsom-aim5-io.txt` | `rk3576-armsom-aim5-camera-` |
| AIM7 | `/boot/uEnv/uEnvarmsom-aim7-io.txt` | `rk3588-armsom-aim7-camera-` |

Power off before connecting ribbon cables and check their orientation.

| Port | Carrier reference | Camera | I2C address | Overlay filename |
| --- | --- | --- | --- | --- |
| CAM0 | J13 | IMX219 | `2-0010` | `rk3588-armsom-aim7-camera-imx219-cs0-overlay.dtbo` |
| CAM1 | J49 | IMX219 | `4-0010` | `rk3588-armsom-aim7-camera-imx219-cs1-overlay.dtbo` |
| CAM2 | J12 | OV13850 | `3-0010` | `rk3588-armsom-aim7-camera-ov13850-cs2-overlay.dtbo` |
| CAM3 | J24 | OV13850 | `6-0010` | `rk3588-armsom-aim7-camera-ov13850-cs3-overlay.dtbo` |

Edit the boot configuration for your module; this example uses AIM7:

```bash
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim7-io.txt
```

Enable only the lines for connected cameras. The following configuration enables all four:

```ini
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-imx219-cs0-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-imx219-cs1-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-ov13850-cs2-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-ov13850-cs3-overlay.dtbo
```

For AIM5, replace `rk3588-armsom-aim7-camera-` in the filenames above with `rk3576-armsom-aim5-camera-` and edit its AIM5 uEnv file. Remove the leading `#` to enable a line. For initial wiring checks, enable one camera at a time before combining ports as needed. If an older image lacks these files, update the kernel package for your module.

Save and reboot. Remove any bootable TF card first if you want to continue booting from eMMC.

```bash
armsom@armsom:~$ sync
armsom@armsom:~$ sudo reboot
```

#### Check Sensor IDs

```bash
armsom@armsom:~$ dmesg | grep imx219
armsom@armsom:~$ dmesg | grep ov13850
```

Excerpt from an earlier log saved on this board with all four cameras enabled:

```text
[    3.019918] ov13850 3-0010: Detected OV00d850 sensor, REVISION 0xb2
[    3.025395] ov13850 6-0010: Detected OV00d850 sensor, REVISION 0xb2
[    3.086742] imx219 2-0010: Detected IMX000219 sensor
[    3.119883] imx219 4-0010: Detected IMX000219 sensor
```

Each `Detected` line confirms that the driver read the corresponding sensor ID.

#### Basic Commands and Tools

AIM5 and AIM7 use the same ArmSoM SDK, so the capture methods below apply to both. Find the target camera's **ISP output node** and replace `/dev/videoX` accordingly; do not copy the CM5-IO video node numbers.

```bash
armsom@armsom:~$ v4l2-ctl --list-devices
armsom@armsom:~$ media-ctl -d /dev/mediaX -p
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --list-formats-ext
```

Some image versions require GStreamer to be installed manually. If `gst-launch-1.0 --version` reports that the command is missing, run:

```bash
armsom@armsom:~$ sudo apt-get update
armsom@armsom:~$ sudo apt-get install -y gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-x
```

Recording uses the SDK's Rockchip hardware encoder. Check it with `gst-inspect-1.0 mpph264enc`; if missing, use a matching SDK image or install its corresponding plugin.

Restart the image's 3A service before capture:

```bash
armsom@armsom:~$ sudo systemctl restart rkaiq_3A.service
```

Run one capture command at a time. Preview requires a local desktop session with a display; press `Ctrl+C` to stop. Recording commands include `-e` so the MP4 file can be finalized when stopping.

#### OV13850 Camera

These examples use `2112×1568 @ 30fps`. Select a resolution and frame rate supported by your actual node.

**Capture a frame (raw NV12, not JPEG):**

```bash
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=ov13850.nv12 --stream-count=1 --stream-poll
```

**Record video:**

```bash
armsom@armsom:~$ gst-launch-1.0 -e v4l2src device=/dev/videoX num-buffers=300 ! video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! mpph264enc ! h264parse ! mp4mux ! filesink location=ov13850.mp4
```

**Preview:**

```bash
armsom@armsom:~$ gst-launch-1.0 v4l2src device=/dev/videoX ! video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! videoconvert ! autovideosink
```

#### IMX219 Camera

Capture, recording, and preview use `3280×2464`. The full-resolution mode supports 15 FPS.

**Capture a photo (JPEG):**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/videoX num-buffers=1 io-mode=4 ! video/x-raw,format=NV12,width=3280,height=2464 ! videoconvert ! jpegenc ! filesink location=imx219.jpg
```

**Record video:**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 -e v4l2src device=/dev/videoX num-buffers=300 io-mode=4 ! video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! mpph264enc ! h264parse ! mp4mux ! filesink location=imx219.mp4
```

**Preview:**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/videoX ! video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! videoconvert ! autovideosink
```

`GST_V4L2SRC_MAX_RESOLUTION` selects camera modes on some SDK images. If your image does not support this extension, omit the prefix and use its supported resolution and frame rate.

#### Preview Four Cameras Simultaneously

AIM7 has been tested with two IMX219 and two OV13850 cameras running together. Enable all four camera overlays above in `/boot/uEnv/uEnvarmsom-aim7-io.txt` and reboot first. Ensure that the IMX219 module name matches `imx219_rpi-camera-v2_default.json` and that the 3A service is running.

Download the [four-window preview script](/files/aim7-four-camera-preview.py) to the board. In a local desktop terminal, enter its directory and run:

```bash
armsom@armsom:~$ sudo apt-get install -y python3-gi gir1.2-gtk-3.0 gir1.2-gstreamer-1.0 gir1.2-gst-plugins-base-1.0
armsom@armsom:~$ sudo systemctl restart rkaiq_3A.service
armsom@armsom:~$ python3 aim7-four-camera-preview.py
```

The script arranges four equal windows on a 1920×1080 screen, with IMX219 cameras on top and OV13850 cameras below, preserving aspect ratios. ISP output is scaled to 640×480. Measured rates were approximately 15 FPS for IMX219 and 25 FPS for OV13850. Press `Ctrl+C` to exit.

The script uses `/dev/video53`, `/dev/video62`, `/dev/video44`, and `/dev/video71` from this AIM7 four-camera configuration. On other images, identify the corresponding ISP output nodes using `v4l2-ctl --list-devices` and `media-ctl -p`, then update the camera list near the beginning of the script. This example has not been verified on AIM5.

Screenshot from the test (each camera image rotated 180° to correct its orientation, with titles unchanged; 1920×1080, losslessly compressed):

![AIM7 simultaneous four-camera preview](/img/aim/aim7-four-camera-preview.webp)

### 10. MIPI DSI

Both modules connect displays through the carrier board MIPI DSI port, using their own panel overlays. AIM5 uses `rk3576-armsom-aim5-display-800x1280-8hd-overlay.dtbo`, enabled in `/boot/uEnv/uEnvarmsom-aim5-io.txt`. The example below uses AIM7 and `rk3588-armsom-aim7-display-800x1280-8hd-overlay.dtbo`; it must match the actual panel.

```bash
armsom@armsom:~$ ls /boot/dtb/overlay/rk3588-armsom-aim7-display-*.dtbo
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim7-io.txt
```

Enable the corresponding line:

```ini
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-display-800x1280-8hd-overlay.dtbo
```

Save and reboot, then inspect the display connection and touch input devices:

```bash
armsom@armsom:~$ ls /sys/class/drm/
armsom@armsom:~$ cat /sys/class/drm/card*-DSI-*/status
armsom@armsom:~$ cat /proc/bus/input/devices
```

Touch input requires a matching panel, controller, and overlay.

### 11. FAN

Connect a fan to the carrier board's fan connector. The official device tree's `pwm-fan` driver adjusts it according to temperature. hwmon numbering can change, so locate `pwmfan` first:

```bash
armsom@armsom:~$ grep -H '^pwmfan$' /sys/class/hwmon/hwmon*/name
```

The tested board uses `hwmon7`:

```bash
armsom@armsom:~$ cat /sys/class/hwmon/hwmon7/name
armsom@armsom:~$ cat /sys/class/hwmon/hwmon7/pwm1
```

```text
pwmfan
0
```

`pwm1` is a PWM control value from 0 to 255, not an RPM reading. A value of 0 at low temperature is normal.

### 12. 40 PIN

The AIM-IO 40-pin header exposes multiplexed GPIO, I2C, SPI, UART, and PWM signals. **The [pin table](#pin-definition) and conflicts below are AIM7 examples**; use the AIM5 module documentation to confirm its GPIO mapping. Available functions depend on the device tree and other connected peripherals.

| Enabled function | Physical header pins to avoid |
| --- | --- |
| I2C4 (RTC, CAM1, and some display touch controllers) | 3, 5 |
| CAM0 I2C2 | 27, 28 |
| OV13850 reset, PWDN, and clocks | 11, 15, 31, 33, 36 |
| The MIPI DSI display configuration above | 7, 32 |

Do not change pins used by a camera or RTC to GPIO outputs. Check current ownership before use:

```bash
armsom@armsom:~$ sudo cat /sys/kernel/debug/gpio
armsom@armsom:~$ sudo cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins
```

See [GPIO Usage](<../Interface Usage/2_gpio.md>), [UART Usage](<../Interface Usage/5_uart.md>), [SPI Usage](<../Interface Usage/7_spi.md>), and [PWM Usage](<../Interface Usage/6_pwm.md>), selecting signals from your module's pin definition. Power off before connecting peripherals and confirm signal voltage against the carrier pin definition and schematic.
