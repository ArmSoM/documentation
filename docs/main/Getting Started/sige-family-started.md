--- 
keywords: [armsom, armsom-sige, SBC, maker kit, Rockchip]
sidebar_label: "Sige Family Getting Started"
sidebar_position: 2
slug: /sige-family-started
---
# Sige Family User Manual 

The Sige user manual helps users understand the basic usage of Sige products and the necessary preparations to start using your ArmSoM-Sige🚀

<details>
    <summary>
       Comparison of Specifications for Sige7/5/3/1
    </summary>

|        | Sige7  | Sige5 | Sige3 |Sige1 |
| --------- | ----- | --- |--- | --- | 
| SoC Process | 8nm | 8nm | 22nm | 28nm |  
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3568B2 <br/> Cortex-A55 x4 @2GHz | Rockchip RK3528 <br/> Cortex-A53 x4 @2GHz | 
| GPU | ARM Mali-G610 MP4  | ARM Mali G52 MC3 GPU | Arm Mali‑G52‑2EE | ARM Mali-450 GPU |
| NPU | 6TOPS@INT8(3 NPU core)  | 6TOPS@INT8(2 NPU core) | 1TOP@INT8 | - |
| RAM | 4GB/8GB/16GB/32GB 64-bit LPDDR4x | 4/8/16GB 32-bit LPDDR4x | 2/4GB 32-bit LPDDR4x |  2/4GB 32-bit LPDDR4x|
| eMMC| 64GB/128GB eMMC | 32/128GB eMMC| 32GB eMMC | 8 eMMC |
| TF Card | Molex Slot, Spec Version 2.x/3.x/4.x(SDSC/SDHC/SDXC)| Yes| Yes |   Yes|
| Output | 1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 4K@60fps <br/> 1x DP 1.4 up to 8K@30fps | 1x HDMI 2.1, supports 4K@120fps <br/> 1x MIPI DSI, up to 2K@60fps <br/>  1x DP1.4, up to 4K@120fps | 1x MIPI DSI up to 2K@60fps <br/> 1x HDMI OUT2.0, supports 4K@60fps |  1x HDMI OUT2.0b, supports 4K@60fps|
| Decoder |  8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|  H.264, H.265, VP9, AV1 and AVS2 etc. up to 8K@30fps or4K@120fps| 4KP60 H.265/H.264/VP9  |  H.265, H.264, AVS2 4K@60fps|
| Encoder | 8K@30fps H.265 / H.264| H.264 and H.265 up to 4K@60fps| 1080P60 H.264/H.265 | H.264 and H.265 up to1080@60fps|
| Wi-Fi | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB |   SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs|
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 1-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported |  - |
| Ethernet | 2x 2.5G Ethernet |   2x Gigabit Ethernet| Gigabit Ethernet & 2.5G Ethernet| Gigabit Ethernet & 2.5G Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 1x USB 3.0 & 1x USB 2.0  | 2x USB 2.0|
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG）| 1x USB-C Power jack & 1x USB3.0 OTG |  1x USB-C Power jack & 1x USB2.0 OTG|
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI  |   -|
| 40-Pin Header| yes | yes | yes | yes |
| LEDs | 2x LEDs | 2x LEDs |2x LEDs |  2x LEDs|
|Board Dimensions| 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm |

</details>

<!-- ## Comparison of Sige7/5 and RPI5 Specifications
|        | Sige7  | Sige5 | Raspberry Pi5 |
| --------- | ----- | --- |--- | 
| SoC Process | 8nm | 8nm | 16nm |
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | BCM2712 Cortex-A76x4 @2.4GHz |
| GPU | ARM Mali-G610 MP4  | ARM Mali G52 MC3 GPU |VideoCore VII GPU @ 800 MHz| 
| NPU | 6TOPS@INT8(3 NPU core)  | 6TOPS@INT8(2 NPU core) | - |
| RAM | 4GB/8GB/16GB/32GB 64-bit LPDDR4x | 4/8/16GB 32-bit LPDDR4x | 1/2/4/8 GB LPDDR4X-4267 SDRAM |
| eMMC| 64GB/128GB eMMC | 32/128GB eMMC | - | 
| TF Card | Molex Slot, Spec Version 2.x/3.x/4.x(SDSC/SDHC/SDXC)| Yes| Yes|
| Output | 1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 4K@60fps <br/> 1x DP 1.4 up to 8K@30fps | 1x HDMI 2.1, supports 4K@120fps <br/> 1x MIPI DSI, up to 2K@60fps <br/>  1x DP1.4, up to 4K@120fps | Dual 4kp60 HDMI display output|
| Decoder |  8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|  H.264, H.265, VP9, AV1 and AVS2 etc. up to 8K@30fps or4K@120fps| 4kp60 HEVC decoder|
| Encoder | 8K@30fps H.265 / H.264| H.264 and H.265 up to 4K@60fps| - |
| Wi-Fi | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | Dual-band 802.11ac Wi-Fi 5|
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | - | 
| Ethernet | 2x 2.5G Ethernet | 2x Gigabit Ethernet| Gigabit Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 2× USB 3.0 (capable of simultaneous full throughput) <br/> 2× USB 2.0 |
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack | 
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | Dual 4-lane MIPI CSI/DSI transceivers |
| 40-Pin Header| yes | yes | yes | 
| LEDs | 2x LEDs | 2x LEDs | - | 2x LEDs|
|Board Dimensions| 92mm × 62mm | 92mm × 62mm | 85.0 x 56.0 mm |  -->

## Getting Started

Before starting to use the ArmSoM-Sige product, please prepare the following items:

### Tools Required
* Power supply
* System installation (choose one):
  * Onboard eMMC boot
    * USB Type-C cable for writing images to the Sige series from the typec port, you need a Type-C data cable to connect the Sige series and PC.
  * MicroSD card/TF card boot
    * MicroSD card/TF card, Class 10 or higher, with at least 8GB SDHC and a card reader
    * The following high-speed TF cards have been tested and verified by the ArmSoM team:
      * SanDisk 32GB TF (MicroSD) (recommended for developers)
      * SanDisk 32GB TF (MicroSD) for dashcams & security monitoring dedicated storage card (recommended for long-term operation)
      * SanDisk TF 8G Class 10 microSD
      * SanDisk TF 128G Class 10 microSD XC TF 128G 48MB/S

You can configure Sige as an interactive computer with a desktop or as a headless computer accessible only via network. To set up Sige as a headless computer, configure the hostname, user account, network connection, and SSH during the initial OS installation. If you want to use Sige directly, you will need the following additional accessories:

**Optional Accessories**
* Keyboard & Mouse
* HDMI Monitor and HDMI Cable
* Ethernet Cable
* Camera Module
  * Recommended: [camera-module1](./armsom-camera-module1) module.
* LCD Display
  * Recommended: [Display 10 HD](./armsom-display-10-hd).
* Audio Cable, 0.8mm vertical socket.
* RTC Battery, 0.8mm vertical socket.
* Fan, 0.8mm vertical socket.

### Power Supply

The table below shows the power specifications required for powering the ArmSoM-Sige series. You can use any high-quality power supply that provides the correct power mode.

| Model    | Recommended Power (Voltage/Current) | Power Mode |
| -------- | ---------------------------------- | ---------- |
| Sige7    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige5    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige3    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige1    | 5V/2.5A, 12V/2A                    | Non-PD     |

Insert the power supply into the port labeled "DCIN". Please make sure to use the correct port!

## Image Flashing

<div class="cards">
    <a href="./general-tutorial/flash-img" class="card-link">
        <div class="card">
            <div class="icon">
                <i>🎇</i>
            </div>
            <div class="content">
                <h2>Flash System Image</h2>
            </div>
        </div>
    </a>
</div>

## Interface Usage

If you are using ArmSoM-Sige products for the first time, please familiarize yourself with the hardware interfaces of each product to better understand the following content.

| Hardware Interface | [Sige7](./armsom-sige7#hardware-interface) | [Sige5](./armsom-sige5#hardware-interface) | [Sige1](./armsom-sige1#hardware-interface) |
| ------------------ | ------------------------------------------ | ----------------------------------------- | ----------------------------------------- |

### Debug Serial Port

Connect the USB to TTL serial cable as follows:

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)

| Sige7/5/3/1       | Connection | Serial Module |
| ----------------- | ---------- | ------------- |
| **GND** (pin 6)   | --->       | GND           |
| **TX** (pin 8)    | --->       | RX            |
| **RX** (pin 10)   | --->       | TX            |

### Ethernet Port

1. First, plug one end of the network cable into the Ethernet port of the ArmSoM-SigeX, and connect the other end to a router. Ensure that the network is functional.
2. After the system boots, it will automatically assign an IP address to the Ethernet port via DHCP without any additional configuration.
3. To check the IP address in the ArmSoM-SigeX Linux system, use the following command:

```bash
armsom@armsom-sige7:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: enP4p65s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether c6:9c:b0:7e:2b:1f brd ff:ff:ff:ff:ff:ff permaddr aa:a6:84:1b:0d:21
    inet 192.168.10.54/24 brd 192.168.10.255 scope global dynamic noprefixroute enP4p65s0
       valid_lft 86221sec preferred_lft 86221sec
    inet6 fe80::5bb0:d96f:926d:b334/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
3: enP2p33s0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether be:ed:22:01:47:d9 brd ff:ff:ff:ff:ff:ff permaddr a2:fb:fa:79:de:fb
4: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state DORMANT group default qlen 1000
    link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
```

There are three ways to check the IP address of ArmSoM-SigeX after it starts:

- Connect an HDMI monitor, log into the system, and use the terminal command `ip a` to view the IP address.
- Use the [debug serial port](#debug-serial-port) terminal and enter the `ip a` command to check the IP address.
- If neither the debug serial port nor HDMI monitor is available, you can check the IP address of the ArmSoM-SigeX Ethernet port through the router’s management interface. However, this method may sometimes fail to display the ArmSoM-SigeX IP address. If you cannot see it, try the following troubleshooting steps:
  - Check if the Linux system has started properly. If the green light on the ArmSoM-SigeX is steady, it generally means the system has booted correctly; if only the red light is on, the system has not booted properly.
  - Ensure the network cable is securely connected, or try a different cable.
  - Try using a different router. Common issues with routers include inability to assign IP addresses or assigning them correctly but not showing them in the router's interface.
  - If no alternative router is available, use an HDMI monitor or the debug serial port to check the IP address.

:::tip
Note that DHCP automatically assigning an IP address to the ArmSoM-SigeX requires no additional configuration.
:::

4. Use the `ping` tool to check network connectivity.

The command to test network connectivity is shown below. You can stop the `ping` command with the Ctrl+C shortcut.

```bash
armsom@armsom-sige7:~$ ping www.baidu.com
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

### WIFI

The ArmSoM-Sige series products come with an onboard WIFI module, so there's no need for external network devices. They use a [standard 4th-generation antenna](https://www.armsom.org/product-page/sige7-metal-shell).

**Connecting to WIFI via Command Line on Server Image**

1. First, log in to the Linux system using one of the following methods:
   - If the ArmSoM-SigeX is connected to a network cable, you can log in remotely via SSH.
   - If the ArmSoM-SigeX is connected via a debug serial port, use a serial terminal to log in to the Linux system.
   - If the ArmSoM-SigeX is connected to an HDMI monitor, you can log in to the Linux system via the HDMI display.

2. Use the `nmcli dev wifi` command to scan for available WIFI hotspots:

   ```bash
   # 1. Enable WIFI
   armsom@armsom-sige:/# nmcli r wifi on
   # 2. Scan for WIFI
   armsom@armsom-sige:/# nmcli dev wifi
   # 3. Connect to a WIFI network
   armsom@armsom-sige:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
   ```

   ![wifi-nmcli-scan](/img/general-tutorial/wifi-nmcli-scan.png)

3. Use the `nmcli` command to connect to the scanned WIFI:

   - Replace `wifi_name` with the name of the WIFI hotspot you want to connect to.
   - Replace `wifi_password` with the password for the WIFI hotspot.

   ```bash
   armsom@armsom-sige7:~$ nmcli dev wifi connect "ydtx_5G" password "ydtx123456"
   Device 'wlan0' successfully activated with "wlan0b6d10bba-e1d5-4b6d-a17f-7d5ab44bbb6f".
   ```

4. Use the `ip addr show wlan0` command to view the WIFI IP address:

   ```bash
   armsom@armsom-sige7:~$ ip addr show wlan0
   4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
       link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
       inet 192.168.10.9/24 brd 192.168.10.255 scope global dynamic noprefixroute wlan0
          valid_lft 86321sec preferred_lft 86321sec
       inet6 fe80::850d:3119:e0:afa3/64 scope link noprefixroute
          valid_lft forever preferred_lft forever
   ```

5. Use the `ping` command to test the WIFI network connectivity. You can interrupt the `ping` command with the Ctrl+C shortcut:

   ```bash
   armsom@armsom-sige7:~$ ping www.baidu.com
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

**Connecting to WIFI via GUI on Server Image**

1. Log in to the Linux system using one of the following methods:
   - If the development board is connected to a network cable, you can log in remotely via SSH.
   - If the development board is connected via a debug serial port, use a serial terminal to log in to the Linux system (use MobaXterm for serial software, as minicom cannot display the graphical interface).
   - If the development board is connected to an HDMI monitor, log in to the Linux system via the HDMI display.

2. Enter the `nmtui` command in the terminal to open the WIFI connection interface:

   ![wifi-nmcli](/img/general-tutorial/wifi-nmcli.png)

   ```bash
   armsom@armsom-sige7:~$ nmtui
   ```

3. Select "Activate a connection" and press Enter:

   ![wifi-nmcli-connect](/img/general-tutorial/wifi-nmcli-connect.png)

4. Choose the WIFI hotspot you want to connect to and enter the password. After a successful connection, an asterisk “*” will appear next to the connected WIFI name:

   ![wifi-nmcli-success](/img/general-tutorial/wifi-nmcli-success.png)

5. Use the `ip addr show wlan0` command to view the WIFI IP address:

   ```bash
   armsom@armsom-sige7:~$ ip addr show wlan0
   4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
       link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
       inet 192.168.10.9/24 brd 192.168.10.255 scope global dynamic noprefixroute wlan0
          valid_lft 86316sec preferred_lft 86316sec
       inet6 fe80::a422:3494:3147:92d/64 scope link noprefixroute
          valid_lft forever preferred_lft forever
   ```

6. Use the `ping` command to test the WIFI network connectivity. You can interrupt the `ping` command with the Ctrl+C shortcut:

   ```bash
   armsom@armsom-sige7:~$ ping www.baidu.com
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

**Testing Method for Desktop Image**

1. Click the network configuration icon on the desktop (ensure not to connect a network cable while testing WIFI).
2. After connecting to WIFI, open a browser to check if you can access the internet:

   ![wifi-desktop-set](/img/general-tutorial/wifi-desktop-set.png)

**Network Settings**
<div class="cards">
<a href="./general-tutorial/product-startup/#3-login-method" class="card-link">
    <div class="card">
        <div class="icon">
            <i>🎾</i>
        </div>
        <div class="content">
            <h2>Login Methods</h2>
            <p>Serial port access, SSH access</p>
        </div>
    </div>
</a>
<a href="./general-tutorial/network-set/#6-static-network-configuration" class="card-link">
    <div class="card">
        <div class="icon">
            <i>🌐</i>
        </div>
        <div class="content">
            <h2>Set Static IP Address</h2>
        </div>
    </div>
</a>
<a href="./general-tutorial/network-set/#7-create-wifi-hotspot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>WIFI Hotspot</h2>
        </div>
    </div>
</a>
</div>

### BT  

```
# 1. Activate bluetooth  
armsom@armsom-sige7:/# service bluetooth start
# 2. Enter to bluetoothctl
armsom@armsom-sige7:/# bluetoothctl
# 3. Input the below commands to connect
armsom@armsom-sige7:/# power on
armsom@armsom-sige7:/# agent on
armsom@armsom-sige7:/# default-agent
armsom@armsom-sige7:/# scan on
armsom@armsom-sige7:/# pair yourDeviceMAC
```
### HDMI

| Model | Sige7 | Sige5 | Sige3 | Sige1 |
| ----- | ----- | ----- | ----- | ----- |
| Resolution | 8Kp60 | 4Kp120 | 4Kp60 | 4Kp60 |

1. Connect the ArmSoM-Sige to an HDMI display using an HDMI cable.
2. After booting the Linux system, if the HDMI display shows an image, the HDMI interface is functioning correctly.

:::tip
Note that many laptops, while having HDMI ports, typically have HDMI output only and do not support HDMI in. This means you cannot display the HDMI output from another device on the laptop's screen. Before connecting the development board's HDMI to a laptop's HDMI port, ensure your laptop supports HDMI in functionality. If there is no display, first check if your system is a desktop version; server versions might only show a terminal.
:::

#### HDMI to VGA Display Test
1. Required accessories:
- HDMI to VGA converter
- A VGA cable and a display with a VGA port

2. The HDMI to VGA display test is shown below:

![sige-hdmi-vga](/img/general-tutorial/sige-hdmi-vga.jpg)

:::tip
When using HDMI to VGA conversion, no additional configuration is needed for the ArmSoM-Sige products or the Linux system. If you encounter issues, check the HDMI to VGA converter, VGA cable, and display for problems.
:::
### USB

| Model | Sige7 | Sige5 | Sige3 | Sige1 |
| ----- | ----- | ----- | ----- | ----- |
| USB | 1x Type-C 3.0, 1x USB3.0, 1x USB2.0 | 1x Type-C 3.0, 1x USB3.0, 1x USB2.0 | 1x Type-C 3.0, 1x USB3.0, 1x USB2.0 | 2x USB2.0 |

:::info
USB interfaces can be expanded by using a USB hub.
:::

#### Testing USB Mouse or Keyboard
1. Insert a USB keyboard into the ArmSoM-Sige product's USB port.
2. Connect the ArmSoM-Sige product to an HDMI display.
3. If the mouse or keyboard operates the system normally, the USB interface is working correctly (the mouse will only work in desktop versions of the system).

#### Testing USB Storage Device
1. Insert a USB flash drive or USB external hard drive into the ArmSoM-Sige product's USB port.
2. Run the following command; if you see `sdX` output, the USB drive is recognized successfully:
```
armsom@armsom-sige7:/# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0  122880000 sda
```
3. Use the `mount` command to mount the USB drive to `/mnt` and view the files on the USB drive:
```
armsom@armsom-sige7:/# sudo mount /dev/sda1 /test/
```
4. After mounting, use the `df -h` command to check the USB drive's capacity usage and mount point:
```
armsom@armsom-sige7:/test# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /test
```

#### USB Camera

1. Prepare a USB camera that supports the UVC protocol and connect it to the ArmSoM-Sige product's USB port.

2. Use the `v4l2-ctl` command to view the USB camera's device node information, which should be `/dev/video0`:
```
armsom@armsom-sige7:/# v4l2-ctl --list-devices
Logitech HD Webcam C93 (usb-xhci-hcd.5.auto-1):
        /dev/video40
        /dev/video41
        /dev/media4
```

3. On a desktop system, you can use Cheese/V4L2 test bench to open the USB camera directly.

![sige-usb-cam](/img/general-tutorial/sige-usb-cam.jpg)

You can also use terminal commands to preview the camera:
```bash
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;
```

To capture a photo:
```bash
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=/home/armsom/test.jpg;
```

To record a video:
```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/armsom/test.mp4
```

![armsom-sige7-gst](/img/sige/armsom-sige7-gst.png)

### M.2 Key M

The ArmSoM-Sige7/5/3 provides an M.2 Key M connector:

- The product features an M.2 Key M connector on the back. The board includes a standard M.2 2280 mounting hole for deploying an M.2 2280 NVMe SSD.  
  **<font color='red'>Note: This M.2 interface does not support M.2 SATA SSDs.</font>**

```
armsom@armsom-sige:/# mkdir temp
armsom@armsom-sige:/# mount /dev/nvme0n1 temp
```

### Audio

View sound cards in the system:  

```bash 
armsom@armsom-sige:/# aplay -l  
**** List of PLAYBACK Hardware Devices ****  
card 0: rockchipdp0 [rockchip,dp0], device 0: rockchip,dp0 spdif-hifi-0 [rockchip,dp0 spdif-hifi-0]  
 Subdevices: 1/1  
 Subdevice #0: subdevice #0  
card 1: rockchipes8316 [rockchip-es8316], device 0: fe470000.i2s-ES8316 HiFi es8316.7-0011-0 [fe470000.i2s-ES8316 HiFi es8316.7-0011-0]  
  Subdevices: 1/1  
  Subdevice #0: subdevice #0  
card 2: rockchiphdmi0 [rockchip-hdmi0], device 0: rockchip-hdmi0 i2s-hifi-0 [rockchip-hdmi0 i2s-hifi-0]  
  Subdevices: 1/1  
  Subdevice #0: subdevice #0
```

### FAN

Sige products are equipped with a 5V fan using a 0.8mm connector.

The fan currently operates in five default states:

| Temperature Range | State | PWM Speed |
| ----------------- | ----- | --------- |
| Less than 50°C    | 0     | 0         |
| 50°C - 55°C       | 1     | 50        |
| 55°C - 60°C       | 2     | 100       |
| 60°C - 65°C       | 3     | 150       |
| 65°C - 70°C       | 4     | 200       |
| Above 70°C        | 5     | 250       |

```
// Check current fan speed
armsom@armsom-sige:/# cat /sys/class/hwmon/hwmon9/pwm1
```

### 40 PIN  

Sige products  provides a 40-pin GPIO header, compatible with most sensors on the market.   

#### Wiring-armbian Instructions

Download the wiringOP code from [wiring-armbian](https://github.com/ArmSoM/wiring-armbian).

- Test the output of the `gpio readall` command as shown below:

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

- Set the GPIO pin to output mode. The third parameter requires the wPi number corresponding to the pin.

```
root@armsom-sige7:~/wiring-armbian# gpio mode 2 out
```

- Set the GPIO pin to output a low level. After setting, you can measure the voltage on the pin with a multimeter; if it reads 0V, the low level is set successfully.

```
root@armsom-sige7:~/wiring-armbian# gpio write 2 0
```

- Set the GPIO pin to output a high level. After setting, you can measure the voltage on the pin with a multimeter; if it reads 3.3V, the high level is set successfully.

```
root@armsom-sige7:~/wiring-armbian# gpio write 2 1
```

- The setup method for other pins is similar; just change the wPi number to the corresponding pin's number.

### RGB LED

Sige features two user indicator LEDs: a green LED and a red LED. 

- User Green LED  
  Constantly indicates running kernel by default.   

- User Red LED
  Off by default, can be controlled by user.  

Users can control with commands:   

```  
armsom@armsom-sige:/# sudo su  
armsom@armsom-sige:/# echo timer > /sys/class/leds/red/trigger  
armsom@armsom-sige:/# echo activity > /sys/class/leds/red/trigger
```

### RTC  

- The sige features an **hym8563** RTC chip.  
- First, insert the RTC battery using the 2-pin header to supply power to the RTC IC.
- Note that we should keep the RTC battery in the RTC connector and confirm the rtc hym8563 device which has been created. 

```bash 
armsom@armsom-sige:/# dmesg | grep rtc  
[ 6.407133] rtc-hym8563 6-0051: rtc information is valid  
[ 6.412731] rtc-hym8563 6-0051: registered as rtc0  
[ 6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)  
```

- Find rtc0, then use the following commands to set system time and sync to rtc0:  

```bash
armsom@armsom-sige7:/# hwclock -r  
2023-11-03 10:32:40.461910+00:00  
armsom@armsom-sige7:/# date  
Fri 3rd Nov 10:33:12 UTC 2023
armsom@armsom-sige7:/# hwclock -w  
armsom@armsom-sige7:/# hwclock -r  
armsom@armsom-sige7:/# poweroff  
```

- Turn off the RTC battery for 10+ minutes, insert the battery again and boot Sige7, and check if RTC synced with system clock:   

```bash
armsom@armsom-sige7:/# hwclock -r  
2023-11-03 10:35:40.461910+00:00  
armsom@armsom-sige7:/# date
Fri 3rd Nov 10:36:01 UTC 2023
```

### MIPI CSI
#### Using ArmSoM Camera-Module1

The camera uses the [camera-module1](./armsom-camera-module1). After connecting and powering on the camera module, you can view the boot log.

```bash
root@armsom-sige7:/# dmesg | grep ov13850
[    2.302905] ov13850 5-0010: driver version: 00.01.05
[    2.302944] ov13850 5-0010: Failed to get power-gpios, maybe no use
[    2.303067] ov13850 5-0010: supply avdd not found, using dummy regulator
[    2.303153] ov13850 5-0010: supply dovdd not found, using dummy regulator
[    2.303186] ov13850 5-0010: supply dvdd not found, using dummy regulator
[    2.303213] ov13850 5-0010: could not get default pinstate
[    2.303220] ov13850 5-0010: could not get sleep pinstate
[    2.308532] ov13850 5-0010: Detected OV00d850 sensor, REVISION 0xb2
[    2.332058] ov13850 5-0010: Consider updating driver ov13850 to match on endpoints
[    2.332084] rockchip-csi2-dphy csi2-dphy0: dphy0 matches m00_b_ov13850 5-0010:bus type 5
```

#### Capture images using `v4l2-ctl`

```bash
# MIPI-CSI1
root@armsom-sige7:/# v4l2-ctl -d /dev/video31 --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=/nv12.bin --stream-count=1 --stream-poll 
# MIPI-CSI0
root@armsom-sige7:/# v4l2-ctl -d /dev/video22 --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=/nv12.bin --stream-count=1 --stream-poll
```

#### Record video using `gst-launch-1.0`

```bash
# MIPI-CSI1
root@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
# MIPI-CSI0
root@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
root@armsom-sige3:/# gst-launch-1.0 v4l2src device=/dev/video0 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
```

![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg)

[ArmSoM Camera-Module1](./armsom-camera-module1)
 
### MIPI DSI

The ArmSoM-Sige7/5/3 supports a maximum resolution of up to 4K@60Hz.

1. Connect the cables as shown in the image below.

![sige7-display-10-hd](/img/general-tutorial/display-10-hd.jpg)

2. Configuring the 10.1-inch MIPI LCD screen

- By default, the Linux image does not have the MIPI LCD screen configuration enabled. To use the MIPI LCD screen, you need to enable it manually.

- Use `nano` to open the `/boot/armbianEnv.txt` file:

```bash
sudo nano /boot/armbianEnv.txt
```

- In this file, find or add the keyword "overlays=".

```bash
// Choose according to your product
overlays=armsom-sige7-display-10hd // Sige7
overlays=armsom-sige5-display-10hd // Sige5
overlays=armsom-sige3-display-10hd // Sige3
```

Shortcut keys: Ctrl + S to save    Ctrl + X to exit

After editing, restart the device to apply the Overlays settings and support Display 10 HD.