---
description: ArmSoM-Sige5 uses Rockchip RK3576 second-generation 8nm high-performance AIOT platform, 6 TOPS computing power NPU, and can be equipped with up to 16GB of large memory. Supports 8K video encoding and decoding, has rich interfaces, supports dual Gigabit network ports, WIFI6/BT5.
keywords: [armsom-sige5, RK3576 Development Boards, rk3576 SBC]
sidebar_label: "Sige5"
sidebar_position: 2
slug: /armsom-sige5
image: /img/sige/sige5.png
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Product Introduction: Sige5

Let's get to know Sige5 in 5 minutes.

 ## Overview

ArmSoM-Sige5 adopts the second-generation 8nm high-performance AIOT platform Rockchip RK3576, with a 6 TOPS computing power NPU and support for up to 16GB of large memory. It supports 4K video encoding and decoding, offers rich interfaces including dual gigabit Ethernet ports, WiFi 6 & BT5, and various video outputs. Compatible with multiple operating systems, it is suitable for ARM-based PCs, edge computing devices, personal mobile internet devices, and other digital multimedia applications.

![ArmSoM-sige5](/img/sige/sige5.png)

<div className="armsom-image-caption">ArmSoM-sige5</div>


:::tip Rockchip RK3576
- [ArmSoM-Sige5](./armsom-sige5) Single Board Computer;
- [ArmSoM-CM5](./armsom-cm5) RK3576 CM5 Compute Module, [ArmSoM-CM5-IO](./armsom-cm5-io) CM5 companion IO board;

Leveraging a robust ecosystem and a variety of expansion accessories, ArmSoM helps users easily transition from concept to prototype to mass production, making it an ideal creative platform for makers, dreamers, and hobbyists.
:::

### Key Parameter

- **SoC**: Rockchip RK3576
- **CPU**: Integrated with four Cortex-A72 cores @ 2.2GHz and four Cortex-A53 cores @ 1.8GHz, along with a separate NEON co-processor.
- **GPU**: ARM Mali G52 MC3 GPU
- **NPU**: Up to 6 TOPs computing power (INT8), supports INT4/INT8/INT16 mixed operations.
- **VPU/Codec**:
  - **Hardware Decoding**: Supports H.264, H.265, VP9, AV1, and AVS2 up to 8K@30fps or 4K@120fps, and high-quality JPEG decoding up to 4K@60fps.
  - **Hardware Encoding**: Supports H.264 and H.265，JPEG up to 4K@60fps.
- **RAM**: 8/16GB 32-bit LPDDR4x, default is 8GB. RK3576 supports a maximum of 16GB.
- **Flash**: 32/64/128GB eMMC, default is 64GB eMMC.
- **WIFI/BT**:  Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 [syn43752](https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo)
- **Operating Voltage**: Wide input voltage range, from 5V to 23V (voltage error ±5%).
- **Operating Temperature**: 0°C to 80°C
- **Operating Systems**:
  - **Official Rockchip Support**: Android 14, Debian 12, Buildroot
  - **Third-party Support**: Armbian
- **PCB**: 8-layer PCB board design
- **Weight**: 43g
- **Dimensions**: 92mm × 62mm x 14.6mm


<nav className="armsom-doc-shortcuts" aria-label="Section shortcuts"><a href="#doc-section-1">Getting started</a><a href="#doc-section-2">Hardware</a><a href="#doc-section-3">Resourcess</a><a href="#doc-section-4">Product Certificates</a><a href="#doc-section-5">Supply Statement</a><a href="#doc-section-6">Accessories</a></nav>

<span id="doc-section-1" className="armsom-section-anchor" />

## Getting started

<a href="#sige-manual" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>Sige5 User Manual</h2>
            <p>How to start using your Sige</p>
        </div>
    </div>
</a>

<!-- SIGE_MANUAL_START -->
<span id="sige-manual" />

:::note
The complete Sige family manual is included below. Interfaces vary by model; use the hardware specifications on this page to select the applicable sections. Original model labels and examples are retained.
:::

## Sige5 User Manual {#sige-manual-sige-family-user-manual}

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
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 2.1 1-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported |  - |
| Ethernet | 2x 2.5G Ethernet |   2x Gigabit Ethernet| Gigabit Ethernet & 2.5G Ethernet| Gigabit Ethernet & 2.5G Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 1x USB 3.0 & 1x USB 2.0  | 2x USB 2.0|
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG）| 1x USB-C Power jack & 1x USB3.0 OTG |  1x USB-C Power jack & 1x USB2.0 OTG|
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI  |   -|
| 40-PIN Header| yes | yes | yes | yes |
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
| 40-PIN Header| yes | yes | yes | 
| LEDs | 2x LEDs | 2x LEDs | - | 2x LEDs|
|Board Dimensions| 92mm × 62mm | 92mm × 62mm | 85.0 x 56.0 mm |  -->

<nav className="armsom-doc-shortcuts" aria-label="Section shortcuts"><a href="#sige-manual-doc-section-1">Getting Started</a><a href="#sige-manual-doc-section-2">Image Flashing</a><a href="#sige-manual-doc-section-3">Interface Usage</a><a href="#sige-manual-doc-section-4">CPU/GPU/NPU/DDR</a></nav>

<span id="sige-manual-doc-section-1" className="armsom-section-anchor" />

### Getting Started {#sige-manual-getting-started}

Before starting to use the ArmSoM-Sige product, please prepare the following items:

#### Tools Required {#sige-manual-tools-required}
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

#### Power Supply {#sige-manual-power-supply}

The table below shows the power specifications required for powering the ArmSoM-Sige series. You can use any high-quality power supply that provides the correct power mode.

| Model    | Recommended Power (Voltage/Current) | Power Mode |
| -------- | ---------------------------------- | ---------- |
| Sige7    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige5    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige3    | 5V/3A, 9V/2A, 12V/2A, 15V/2A      | USB-PD     |
| Sige1    | 5V/2.5A, 12V/2A                    | Non-PD     |

Insert the power supply into the port labeled "DCIN". Please make sure to use the correct port!

<span id="sige-manual-doc-section-2" className="armsom-section-anchor" />

### Image Flashing {#sige-manual-image-flashing}

<div class="cards">
    <a href="./getting-start/flash-img" class="card-link">
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

<span id="sige-manual-doc-section-3" className="armsom-section-anchor" />

### Interface Usage {#sige-manual-interface-usage}

If you are using ArmSoM-Sige products for the first time, please familiarize yourself with the hardware interfaces of each product to better understand the following content.

| Hardware Interface | [Sige7](./armsom-sige7#hardware-interface) | [Sige5](./armsom-sige5#hardware-interface) | [Sige1](./armsom-sige1#hardware-interface) |
| ------------------ | ------------------------------------------ | ----------------------------------------- | ----------------------------------------- |

#### Debug Serial Port {#sige-manual-debug-serial-port}

Connect the USB to TTL serial cable as follows:

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)

<div className="armsom-image-caption">armsom-sige7-debug</div>


| Sige7/5/3/1       | Connection | Serial Module |
| ----------------- | ---------- | ------------- |
| **GND** (pin 6)   | --->       | GND           |
| **TX** (pin 8)    | --->       | RX            |
| **RX** (pin 10)   | --->       | TX            |

#### Ethernet Port {#sige-manual-ethernet-port}

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
- Use the [debug serial port](#sige-manual-debug-serial-port) terminal and enter the `ip a` command to check the IP address.
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

#### WIFI {#sige-manual-wifi}

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
<a href="./getting-start/startup/#3-login-method" class="card-link">
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
<a href="./getting-start/startup-network#56-static-network-configuration" class="card-link">
    <div class="card">
        <div class="icon">
            <i>🌐</i>
        </div>
        <div class="content">
            <h2>Set Static IP Address</h2>
        </div>
    </div>
</a>
<a href="./getting-start/startup-network#57-create-wifi-hotspot" class="card-link">
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

#### BT {#sige-manual-bt}

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
#### HDMI {#sige-manual-hdmi}

| Model | Sige7 | Sige5 | Sige3 | Sige1 |
| ----- | ----- | ----- | ----- | ----- |
| Resolution | 8Kp60 | 4Kp120 | 4Kp60 | 4Kp60 |

1. Connect the ArmSoM-Sige to an HDMI display using an HDMI cable.
2. After booting the Linux system, if the HDMI display shows an image, the HDMI interface is functioning correctly.

:::tip
Note that many laptops, while having HDMI ports, typically have HDMI output only and do not support HDMI in. This means you cannot display the HDMI output from another device on the laptop's screen. Before connecting the development board's HDMI to a laptop's HDMI port, ensure your laptop supports HDMI in functionality. If there is no display, first check if your system is a desktop version; server versions might only show a terminal.
:::

##### HDMI to VGA Display Test {#sige-manual-hdmi-to-vga-display-test}
1. Required accessories:
- HDMI to VGA converter
- A VGA cable and a display with a VGA port

2. The HDMI to VGA display test is shown below:

![sige-hdmi-vga](/img/general-tutorial/sige-hdmi-vga.jpg)

<div className="armsom-image-caption">sige-hdmi-vga</div>


:::tip
When using HDMI to VGA conversion, no additional configuration is needed for the ArmSoM-Sige products or the Linux system. If you encounter issues, check the HDMI to VGA converter, VGA cable, and display for problems.
:::
#### USB {#sige-manual-usb}

| Model | Sige7 | Sige5 | Sige3 | Sige1 |
| ----- | ----- | ----- | ----- | ----- |
| USB | 1x Type-C 3.0, 1x USB3.0, 1x USB2.0 | 1x Type-C 3.0, 1x USB3.0, 1x USB2.0 | 1x Type-C 3.0, 1x USB3.0, 1x USB2.0 | 2x USB2.0 |

:::info
USB interfaces can be expanded by using a USB hub.
:::

##### Testing USB Mouse or Keyboard {#sige-manual-testing-usb-mouse-or-keyboard}
1. Insert a USB keyboard into the ArmSoM-Sige product's USB port.
2. Connect the ArmSoM-Sige product to an HDMI display.
3. If the mouse or keyboard operates the system normally, the USB interface is working correctly (the mouse will only work in desktop versions of the system).

##### Testing USB Storage Device {#sige-manual-testing-usb-storage-device}
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

##### USB Camera {#sige-manual-usb-camera}

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

<div className="armsom-image-caption">sige-usb-cam</div>


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

<div className="armsom-image-caption">armsom-sige7-gst</div>


#### M.2 Key M {#sige-manual-m2-key-m}

The ArmSoM-Sige7/5/3 provides an M.2 Key M connector:

- The product features an M.2 Key M connector on the back. The board includes a standard M.2 2280 mounting hole for deploying an M.2 2280 NVMe SSD.  
  **<font color='red'>Note: This M.2 interface does not support M.2 SATA SSDs.</font>**

```
armsom@armsom-sige:/# mkdir temp
armsom@armsom-sige:/# mount /dev/nvme0n1 temp
```

#### Audio {#sige-manual-audio}

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

#### FAN {#sige-manual-fan}

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

#### 40 PIN {#sige-manual-40-pin}

Sige products  provides a 40-PIN GPIO header, compatible with most sensors on the market.   

##### Wiring-armbian Instructions {#sige-manual-wiring-armbian-instructions}

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

#### RGB LED {#sige-manual-rgb-led}

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

#### RTC {#sige-manual-rtc}

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

#### MIPI CSI {#sige-manual-mipi-csi}
##### Using ArmSoM Camera-Module1 {#sige-manual-using-armsom-camera-module1}

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

##### Capture images using `v4l2-ctl` {#sige-manual-capture-images-using-v4l2-ctl}

```bash
# MIPI-CSI1
root@armsom-sige7:/# v4l2-ctl -d /dev/video31 --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=/nv12.bin --stream-count=1 --stream-poll 
# MIPI-CSI0
root@armsom-sige7:/# v4l2-ctl -d /dev/video22 --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=/nv12.bin --stream-count=1 --stream-poll
```

##### Record video using `gst-launch-1.0` {#sige-manual-record-video-using-gst-launch-10}

```bash
# MIPI-CSI1
root@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
# MIPI-CSI0
root@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
root@armsom-sige3:/# gst-launch-1.0 v4l2src device=/dev/video0 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
```

![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg)

<div className="armsom-image-caption">armsom-w3-imx415-camera</div>


[ArmSoM Camera-Module1](./armsom-camera-module1)
 
#### MIPI DSI {#sige-manual-mipi-dsi}

The ArmSoM-Sige7/5/3 supports a maximum resolution of up to 4K@60Hz.

1. Connect the cables as shown in the image below.

![sige7-display-10-hd](/img/general-tutorial/display-10-hd.png)

<div className="armsom-image-caption">sige7-display-10-hd</div>


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

<span id="sige-manual-doc-section-4" className="armsom-section-anchor" />

### CPU/GPU/NPU/DDR {#sige-manual-cpugpunpuddr}

The following example uses Sige7 to illustrate how to set the fixed frequency and performance modes for CPU, GPU, NPU, and DDR.

#### Fixed Frequency Settings {#sige-manual-fixed-frequency-settings}
##### CPU Fixed Frequency {#sige-manual-cpu-fixed-frequency}
The ArmSoM-Sige7 CPU consists of 4 A55 cores and 4 A76 cores, managed in three separate groups. The nodes are as follows:

```
/sys/devices/system/cpu/cpufreq/policy0: (corresponding to 4 A55: CPU0-3)
affected_cpus     cpuinfo_max_freq  cpuinfo_transition_latency  scaling_available_frequencies  scaling_cur_freq  scaling_governor  scaling_min_freq  stats
cpuinfo_cur_freq  cpuinfo_min_freq  related_cpus                scaling_available_governors    scaling_driver    scaling_max_freq  scaling_setspeed

/sys/devices/system/cpu/cpufreq/policy4: (corresponding to 2 A76: CPU4-5)
affected_cpus     cpuinfo_max_freq  cpuinfo_transition_latency  scaling_available_frequencies  scaling_cur_freq  scaling_governor  scaling_min_freq  stats
cpuinfo_cur_freq  cpuinfo_min_freq  related_cpus                scaling_available_governors    scaling_driver    scaling_max_freq  scaling_setspeed

/sys/devices/system/cpu/cpufreq/policy6: (corresponding to 2 A76: CPU6-7)
affected_cpus     cpuinfo_max_freq  cpuinfo_transition_latency  scaling_available_frequencies  scaling_cur_freq  scaling_governor  scaling_min_freq  stats
cpuinfo_cur_freq  cpuinfo_min_freq  related_cpus                scaling_available_governors    scaling_driver    scaling_max_freq  scaling_setspeed

root@armsom-sige7:/ # cat /sys/devices/system/cpu/cpufreq/policy6/scaling_available_frequencies // Get current supported CPU frequencies
408000 600000 816000 1008000 1200000 1416000 1608000 1800000 2016000 2208000 2400000 
root@armsom-sige7:/ # cat /sys/devices/system/cpu/cpufreq/policy6/scaling_available_governors // Get CPU operating modes
conservative ondemand userspace powersave performance schedutil 
```

The default is the automatic frequency scaling mode: schedutil (to restore, set to this mode).

###### Manual Fixed Frequency Settings {#sige-manual-manual-fixed-frequency-settings}
```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo userspace > /sys/devices/system/cpu/cpufreq/policy6/scaling_governor // Manual fixed frequency mode: userspace
root@armsom-sige7:/ # echo 2016000 > /sys/devices/system/cpu/cpufreq/policy6/scaling_setspeed // Set frequency to 2016000
root@armsom-sige7:/ # cat /sys/devices/system/cpu/cpufreq/policy6/cpuinfo_cur_freq // Verify if set successfully
2016000
```
The other two CPU groups can be set similarly by operating the corresponding nodes.

##### GPU Fixed Frequency {#sige-manual-gpu-fixed-frequency}
###### GPU Node Path {#sige-manual-gpu-node-path}
```
root@armsom-sige7:/ # ls /sys/class/devfreq/fb000000.gpu/    
available_frequencies  cur_freq  governor  max_freq  name              power      target_freq  trans_stat
available_governors    device    load      min_freq  polling_interval  subsystem  timer        uevent
root@armsom-sige7:/ # cat /sys/class/devfreq/fb000000.gpu/available_frequencies  // Get supported GPU frequencies
1000000000 900000000 800000000 700000000 600000000 500000000 400000000 300000000 200000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fb000000.gpu/available_governors // Get GPU operating modes
dmc_ondemand userspace powersave performance simple_ondemand
```
The default is the automatic frequency scaling mode: simple_ondemand (to restore, set to this mode).

###### Manual Fixed Frequency Settings {#sige-manual-manual-fixed-frequency-settings-1}
```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo userspace > /sys/class/devfreq/fb000000.gpu/governor // Manual fixed frequency mode: userspace
root@armsom-sige7:/ # echo 1000000000 > /sys/class/devfreq/fb000000.gpu/userspace/set_freq // Set frequency to 1000000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fb000000.gpu/cur_freq  // Verify if set successfully
1000000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fb000000.gpu/load   // Check GPU load
28@300000000Hz
```

##### DDR Fixed Frequency {#sige-manual-ddr-fixed-frequency}
###### DDR Node Path {#sige-manual-ddr-node-path}
```
root@armsom-sige7:/ # ls /sys/class/devfreq/dmc/  
available_frequencies  cur_freq  downdifferential  load      min_freq  polling_interval  subsystem      target_freq  trans_stat  upthreshold
available_governors    device    governor          max_freq  name      power             system_status  timer        uevent
root@armsom-sige7:/ # cat /sys/class/devfreq/dmc/available_frequencies // Get supported DDR frequencies
528000000 1068000000 1560000000 2112000000
root@armsom-sige7:/ # cat /sys/class/devfreq/dmc/available_governors // Get DDR operating modes
dmc_ondemand userspace powersave performance simple_ondemand
```
The default is the automatic frequency scaling mode: dmc_ondemand (to restore, set to this mode).

###### Manual Fixed Frequency Settings {#sige-manual-manual-fixed-frequency-settings-2}
```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo userspace > /sys/class/devfreq/dmc/governor // Manual fixed frequency mode: userspace
root@armsom-sige7:/ # echo 2112000000 > /sys/class/devfreq/dmc/userspace/set_freq  // Set frequency to 2112000000
root@armsom-sige7:/ # cat /sys/class/devfreq/dmc/cur_freq   // Verify if set successfully
2112000000
root@armsom-sige7:/ # cat /sys/class/devfreq/dmc/load  // Check DDR load
7@528000000Hz
```

##### NPU Fixed Frequency {#sige-manual-npu-fixed-frequency}
###### NPU Node Path {#sige-manual-npu-node-path}
```
root@armsom-sige7:/ # ls /sys/class/devfreq/fdab0000.npu/
available_frequencies  cur_freq  governor  max_freq  name              power      target_freq  trans_stat  userspace
available_governors    device    load      min_freq  polling_interval  subsystem  timer        uevent
root@armsom-sige7:/ # cat /sys/class/devfreq/fdab0000.npu/available_frequencies     // Get supported NPU frequencies       
200000000 300000000 400000000 500000000 600000000 700000000 800000000 900000000 1000000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fdab0000.npu/available_governors // Get NPU operating modes 
dmc_ondemand userspace powersave performance simple_ondemand
```
The default is the automatic frequency scaling mode: simple_ondemand (to restore, set to this mode).

###### Manual Fixed Frequency Settings {#sige-manual-manual-fixed-frequency-settings-3}
```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo userspace > /sys/class/devfreq/fdab0000.npu/governor // Manual fixed frequency mode: userspace
root@armsom-sige7:/ # echo 1000000000 > /sys/class/devfreq/fdab0000.npu/userspace/set_freq // Set frequency to 1000000000
root@armsom-sige7:/ # cat /sys/class/devfreq/fdab0000.npu/cur_freq  // Verify if set successfully
1000000000
root@armsom-sige7:/ # cat /sys/kernel/debug/rknpu/load // Check NPU load
NPU load:  Core0:  0%, Core1:  0%, Core2:  0%,
```

#### Performance Modes {#sige-manual-performance-modes}

```
root@armsom-sige7:/ $ su
root@armsom-sige7:/ # echo performance > /sys/devices/system/cpu/cpufreq/policy6/scaling_governor
root@armsom-sige7:/ # echo performance > /sys/class/devfreq/fb000000.gpu/governor
root@armsom-sige7:/ # echo performance > /sys/class/devfreq/dmc/governor
root@armsom-sige7:/ # echo performance > /sys/class/devfreq/fdab0000.npu/governor
```

<!-- SIGE_MANUAL_END -->



<span id="doc-section-2" className="armsom-section-anchor" />

## Hardware

### Hardware Interface

![ArmSoM-Sige5 front & back](/img/sige/sige5-layout-1.jpg)

<div className="armsom-image-caption">ArmSoM-Sige5 front &amp; back</div>

![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)

<div className="armsom-image-caption">ArmSoM-sige7-Metal-shell</div>


:::tip
There are two identical Type-C ports on Sige5,but only the Type-C (PD Only) port is for power input.
:::

### Hardware Spec

<details>
    <summary>
        Sige5 Hardware Spec
    </summary>
   
<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Functional Parameters</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3576</li></th>
        </tr>
       <tr>
             <th>CPU</th>
             <th><li>RK3576 Quad-core Cortex-A72@ 2.2GHz and Quad-core Cortex-A53@ 1.8GHz, 8nm process</li></th>
         </tr>
         <tr>
             <th>GPU</th>
             <th><li>ARM Mali G52 MC3 GPU</li><li>Fully compatible with OpenGL ES 1.1, 2.0 and 3.2, OpenCL up to 2.0 and Vulkan 1.1</li><li>Dedicated 2D hardware engine with MMU will maximize Improves display performance and provides very smooth operation. </li></th>
         </tr>
         <tr>
             <th>NPU</th>
             <th><li>6 TOPS@INT8</li><li>Supports INT4, INT8, INT16, FP16, BF16 and TF32 hybrid operations</li><li>Supports deep learning frameworks: TensorFlow, Caffe, Tflite, Pytorch , Onnx NNAndroid NN, etc. </li></th>
         </tr>
         <tr>
            <th>VPU/Codec</th>
            <th><li>video decoder supports H.264, H.265, VP9, AV1, and AVS2 up to 8K@30fps or 4K@120fps, and high-quality JPEG decoding up to 4K@60fps.</li><li>video encoder supports H.264 and H.265，JPEG up to 4K@60fps.</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>1 channel ISP, 16 million pixels</li></th>
        </tr>
       <tr >
            <th>RAM</th>
            <th><li>8GB/16GB（max 16GB ）64bit LPDDR4/LPDDR4x，default 8GB LPDDR4x</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB/128GB eMMC，default 64GB eMMC</li><li>Supports MicroSD card expansion</li><li>M.2 M-KEY Socket：PCIe2.1 NVMe SSD</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M interface (PCIe 2.1, 1-lane), expandable SSD: Type 2280/2260/2242/2230, currently defaulting to 2280</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th>
                <li>2x Gigabit Ethernet port</li>
                <li>Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3  <a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a></li>
            </th>
        </tr>
        <tr>
            <th>Video Output</th>
            <th><li>1x HDMI OUT2.1, supports 4K@120fps</li><li> 1x MIPI DSI, maximum resolution up to 2K@60fps</li><li>1x DP1.4, maximum resolution up to 4K@120fps </li></th>
        </tr>
        
        <tr>
            <th>Video In</th>
            <th><li>2x 4-lane MIPI CSI, up to 2.5Gbps per lane</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th>
                <li>1x HDMI audio output</li>
                <li>1x HP-OUT audio output</li>
            </th>
        </tr>
        <tr>
            <th>USB Ports</th>
            <th>
                <li>2x USB2.0, supports High-Speed (480Mbps), Full-Speed (12Mbps), and Low-Speed (1.5Mbps) modes</li>
                <li>1x USB Type-C 2.0, supports OTG, supports high-speed (480Mbps), full-speed (12Mbps) and low-speed (1.5Mbps) modes</li>
            </th>
        </tr>
        <tr>
            <th>40-PIN</th>
            <th>
                <li>Compatible with Raspberry Pi 40-PIN GPIO, supports various accessory peripherals</li>
                <li>Supports UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li>
            </th>
        </tr>
        <tr>
            <th>Other</th>
            <th><li>1x 5V fan interface</li><li>1x battery connector for low power RTC chip LK8563S </li><li>2x LEDs - green LED blinks on system start, red LED user controllable</li></th>
        </tr>
        <tr>
            <th>Power Input</th>
            <th><li>Wide input voltage range 5V-23V: Supports USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A, 20V/2A</li></th>
        </tr>
        <tr>
            <th>Buttons</th>
            <th><li>1x PWRON button for sleep/wake</li><li>1x Reset button for reboot</li><li>1x Maskrom button for maskrom burn-in mode</li></th>
        </tr>
        <tr>
            <th>OS Support</th>
            <th><li>Official：Android 14.0，Debian12，Buildroot</li><li>3rd Party：Armbian</li></th>
        </tr>
       <tr>
            <th>Dimensions</th>
            <th><li>92 mm x 62mm</li></th>
        </tr>
        <tr>
            <th>Operating temperature</th>
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>
</details>

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
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 2.1 1-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported |  - |
| Ethernet | 2x 2.5G Ethernet |   2x Gigabit Ethernet| Gigabit Ethernet & 2.5G Ethernet| Gigabit Ethernet & 2.5G Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 1x USB 3.0 & 1x USB 2.0  | 2x USB 2.0|
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG）| 1x USB-C Power jack & 1x USB3.0 OTG |  1x USB-C Power jack & 1x USB2.0 OTG|
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI  |   -|
| 40-PIN Header| yes | yes | yes | yes |
| LEDs | 2x LEDs | 2x LEDs |2x LEDs |  2x LEDs|
|Board Dimensions| 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm |

</details>

### RK3576 Block Diagram
<details>
    <summary>
        RK3576 Block Diagram
    </summary>
    <img
  src="/img/sige/rk3576.png"
  alt="rk3576 block diagram"
  className="session-details-live-video"/>
</details>

### Hardware Pin Definitions

<details>
    <summary>
        40-PIN header
    </summary>
   <div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
| :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |    |
|111|  I2C4_SDA_M3 /UART3_CTSN_M1/UART2_RX_M2/GPIO3_B7_d/| <div className='green'>3</div> | <div className='red'>4</div>   |  +5.0V  |   |  |
| 112 | I2C4_SCL_M3/UART3_RTSN_M1 /UART2_TX_M2/GPIO3_C0_d |  <div className='green'>5</div>  | <div className='black'>6</div>  |  GND    |  |     |
| 100  | PWM1_CH0_M3 / SPI2_CLK_M2 /  UART1_CTSN_M2 / GPIO3_A4_d  |  <div className='green'>7</div>  | <div className='green'>8</div>  |   GPIO0_D4_u / <div className='orange-txt'>UART0_TX_M0_PORT</div> / JTAG_TCK_M1|    28  |
| | GND| <div className='black'>9</div> | <div className='green'>10</div> | GPIO0_D5_u/<div className='orange-txt'>UART0_RX_M0</div>/JTAG_TMS_M1  |14 |
|  |   | <div className='green'>11</div>  | <div className='green'>12</div> |  SAI0_SCLK_M1  /  SPI0_CSN0_M0 / I2C3_SCL_M1  / GPIO0_C6_d |     22     |
||   | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
||   | <div className='green'>15</div>  | <div className='green'>16</div> |  I2C8_SDA_M2 / UART7_RX_M0  / SAI0_LRCK_M0 /  GPIO2_B7_d |     79     |
| |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> | I2C8_SCL_M2 / UART7_TX_M0 /  GPIO2_B6_d |    78     |
|149| SPI4_MOSI_M0 / PWM2_CH5_M1 /UART6_RX_M3 / I2C3_SDA_M3/GPIO4_C5_d | <div className='green'>19</div>  | <div className='black'>20</div> |    GND |  |
|150| PWM2_CH2_M1/CAN1_TX_M1 /SPI4_MISO_M0/I2C6_SCL_M3 / GPIO4_C6_d| <div className='green'>21</div>| <div className='green'>22</div> | SARADC_VIN4  |   |
|151| PWM2_CH3_M1/CAN1_RX_M1/SPI4_CLK_M0/I2C6_SDA_M3/ GPIO4_C7_d | <div className='green'>23</div>  | <div className='green'>24</div> |  PWM2_CH6_M1 /  UART6_TX_M3  /SPI4_CSN0_M0/ GPIO4_C4_d |     148      |
| |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |   |    |
| 104 | PWM0_CH0_M3 / SPI2_MOSI_M2 / UART10_RX_M0 / GPIO3_B0_d  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  GPIO2_D6_D/PWM2_CH6_M2 / UART9_RTSN_M0  | 94|
|119| GPIO3_C7_D / UART8_RTSN_M0 | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|128| GPIO3_D4_D/ I2C3_SCL_M2 / SPI3_CLK_M1 / UART5_RX_M0 | <div className='green'>31</div>  | <div className='green'>32</div> |  |    |
|95| PWM2_CH7_M2/SPI3_CSN1_M0/UART9_CTSN_M0/SPDIF_TX0_M2/GPIO2_D7_d  | <div className='green'>33</div>  | <div className='black'>34</div> | GND  | |
|20| PWM0_CH0_M0/UART10_TX_M2/PDM0_CLK0_M0/SAI0_MCLK_M1/GPIO0_C4_d| <div className='green'>35</div> | <div className='green'>36</div> |SPI0_CLK_M0/I2C3_SDA_M1/SAI0_LRCK_M1/GPIO0_C7_d|23|
|96|I2C7_SCL_M1/SPI3_CLK_M0/ UART3_TX_M0/ GPIO3_A0_d D | <div className='green'>37</div>  | <div className='green'>38</div> | SPI0_MOSI_M0/PDM0_SDI0_M0/SAI0_SDI0_M1/GPIO0_D0_d | 24|
| | GND | <div className='black'>39</div>  | <div className='green'>40</div> |  I3C0_SDA_PU_M0/UART10_RX_M2/ DP_HPDIN_M1/ SAI0_SDO0_M1 / GPIO0_C5_d | 21|

</div>
</details>

<details>
    <summary>
        MIPI CSI0
    </summary>
0.5mm FPC connector(J12)

| Pin | MIPI-CSI | Description |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_DPHY_CSI1_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_DPHY_CSI1_RX_D3P   |   MIPI RX Lane3 iuput P |
|5     | MIPI_DPHY_CSI1_RX_D2N |   MIPI RX Lane2 iuput N |
|6     | MIPI_DPHY_CSI1_RX_D2P|   MIPI RX Lane2 iuput P |
|8     | MIPI_DPHY_CSI2_RX_CLKN|   MIPI RX Clock iuput N |
|9     | MIPI_DPHY_CSI2_RX_CLKP |   MIPI RX Clock iuput P |
|11    |  MIPI_DPHY_CSI1_RX_D1N |   MIPI RX Lane1 iuput N |
|12    | MIPI_DPHY_CSI1_RX_D1P |   MIPI RX Lane1 iuput P |
|14    | MIPI_DPHY_CSI1_RX_D0N|    MIPI RX Lane0 iuput N |
|15    | MIPI_DPHY_CSI1_RX_D0P |    MIPI RX Lane0 iuput P |
|17    | MIPI_DPHY_CSI1_RX_CLKN|   MIPI RX Clock iuput N |
|18    | MIPI_DPHY_CSI1_RX_CLKP|  MIPI RX Clock iuput P |
|19    | MIPI_CSI1_RX_XVS        |    |
|20    | MIPI_DPHY_CSI2_CAM_CLKOUT_CON |    1.8V, CLock ouput for Sensor |
|21    | MIPI_CSI1_RX_XHS        |    |
|22    | MIPI_DPHY_CSI1_CAM_CLKOUT |   1.8V, CLock ouput for Sensor |
|23    | MIPI_DPHY_CSI1_PDN_H(GPIO3_D0) |    1.8V, GPIO |
|24    | I2C5_SCL_M3_MIPI_CSI1 |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|25    | I2C5_SDA_M3_MIPI_CSI1 |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|26    | MIPI_DPHY_CSI2_PDN_H(GPIO3_C7)|  1.8V, GPIO |
|27    | MIPI_DPHY_CSI1/2_RST(GPIO3_C6)|   3.3V, GPIO |
|28,29 | VCC_RX|   3.3V Power ouput |
|30,31 | VCC_5V0|   5V Power ouput |
</details>

<details>
    <summary>
        MIPI CSI1
    </summary>
0.5mm FPC connector(J25)

|Pin |   MIPI-CSI |   Description   |
|:--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_DPHY_CSI1_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_DPHY_CSI1_RX_D3P                  |   MIPI RX Lane3 iuput P |
|5          | MIPI_DPHY_CSI1_RX_D2N |   MIPI RX Lane2 iuput N |
|6          | MIPI_DPHY_CSI1_RX_D2P|   MIPI RX Lane2 iuput P |
|8          | MIPI_DPHY_CSI2_RX_CLKN|   MIPI RX Clock iuput N |
|9         | MIPI_DPHY_CSI2_RX_CLKP |   MIPI RX Clock iuput P |
|11         |  MIPI_DPHY_CSI1_RX_D1N |   MIPI RX Lane1 iuput N |
|12         | MIPI_DPHY_CSI1_RX_D1P |   MIPI RX Lane1 iuput P |
|14         | MIPI_DPHY_CSI1_RX_D0N|    MIPI RX Lane0 iuput N |
|15         | MIPI_DPHY_CSI1_RX_D0P |    MIPI RX Lane0 iuput P |
|17         | MIPI_DPHY_CSI1_RX_CLKN|   MIPI RX Clock iuput N |
|18         | MIPI_DPHY_CSI1_RX_CLKP|  MIPI RX Clock iuput P |
|19         | MIPI_CSI1_RX_XVS        |    |
|20         | MIPI_DPHY_CSI2_CAM_CLKOUT_CON |    1.8V, CLock ouput for Sensor |
|21         | MIPI_CSI1_RX_XHS        |    |
|22         | MIPI_DPHY_CSI1_CAM_CLKOUT |   1.8V, CLock ouput for Sensor |
|23         | MIPI_DPHY_CSI1_PDN_H(GPIO3_D0) |    1.8V, GPIO |
|24         | I2C5_SCL_M3_MIPI_CSI1 |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|25         | I2C5_SDA_M3_MIPI_CSI1 |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|26         | MIPI_DPHY_CSI2_PDN_H(GPIO3_C7)|  1.8V, GPIO |
|27         | MIPI_DPHY_CSI1/2_RST(GPIO3_C6)|   3.3V, GPIO |
|28,29      | VCC_RX|   3.3V Power ouput |
|30,31      | VCC_5V0|   5V Power ouput |
</details>

<details>
    <summary>
       MIPI DSI
    </summary>
0.5mm FPC connector(J23)

|Pin |   MIPI-DSI  |   Description     |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,27,33,34      | GND                |   Power and Signal Ground | 
|2                            | MIPI_DPHY_DSI_TX_D0N  |  MIPI1 TX Lane0 ouput N | 
|3                            | MIPI_DPHY_DSI_TX_D0P      |   MIPI1 TX Lane0 ouput P |
|5                            | MIPI_DPHY_DSI_TX_D1N        |    MIPI1 TX Lane1 ouput N |
|6                            | MIPI_DPHY_DSI_TX_D1P         |   MIPI1 TX Lane1 ouput P | 
|8                            | MIPI_DPHY_DSI_TX_CLKN   |   MIPI1 TX Clock ouput N | 
|9                            | MIPI_DPHY_DSI_TX_CLKP           |    MIPI1 TX Clock ouput P |
|11                           | MIPI_DPHY_DSI_TX_D2N                |   MIPI1 TX Lane2 ouput N |
|12                           | MIPI_DPHY_DSI_TX_D2P                |   MIPI1 TX Lane2 ouput P |
|14                           | MIPI_DPHY_DSI_TX_D3N |   MIPI1 TX Lane3 ouput N | 
|15                           | MIPI_DPHY_DSI_TX_D3P |   MIPI1 TX Lane3 ouput P | 
|17                           | LCD_BL_PWM1_CH1_M0  |   1.8V, GPIO/PWM |
|18,19                        | VCC3V3_LCD |   3.3V Power ouput | 
|20                           | LCD_RESET|   1.8V, GPIO |
|21                           | /NC |   No Connection | 
|22                           | LCD_BL_EN_H  |   3.3V, GPIO |
|23                           | I2C0_SCL_M1_TP |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|24                           | I2C0_SDA_M1_TP |  1.8V, I2C Data, pulled up to 1.8V with 2.2K on sige5 |
|25                           | TP_INT_L   |    1.8V, GPIO |
|26                           | TP_RST_L  |   1.8V, GPIO |
|28,29                        | VCC5V0_LCD |  5V Power ouput |
|31,32                        | VCC_1V8 |  1.8V Power ouput |

</details>

<details>
    <summary>
        FAN
    </summary>
0.8mm connector(CN32)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | GND |
|3    | PWM | PWM control |
</details>

<details>
    <summary>
        HPOUT
    </summary>
0.8mm connector(CN2)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | AOR         | right channel      |
|2          | AOL         | left channel      |
|3          | GND         | GND          |
</details>

<details>
    <summary>
        VRTC
    </summary>
0.8mm connector(J26)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | Positive pole      |
|2          | -         | Negative pole    |
</details>

<span id="doc-section-3" className="armsom-section-anchor" />

## Resourcess

<div class="cards">
<a href="https://github.com/ArmSoM/manifests" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>ArmSom-bsp </h2>
            <p>Building a Linux System</p>
        </div>
    </div>
</a>
    <a href="https://github.com/armbian/build" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📚</i>
            </div>
            <div class="content">
                <h2>Armbian </h2>
                <p>Armbian Linux build framework</p>
            </div>
        </div>
    </a>

<a href="https://github.com/ArmSoM/rockchip-kernel" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>kernel</h2>
            <p>Improved Rockchip Linux</p>
        </div>
    </div>
</a>

<a href="https://github.com/ArmSoM/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2> uboot</h2>
            <p>ArmSoM/u-boot</p>
        </div>
    </div>
</a>
</div>

 
### Official Image

ArmSoM provides the following official system images. Select the matching product folder and image version in the shared drive. [How to Flash Image](https://docs.armsom.org/getting-start/flash-img)📤

#### Download

The following systems have been tested and verified by ArmSoM official:

Network disk address: 
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
| ![Debian 12](/img/sige/debian12-1.png) | **Debian 12 for Sige5:** <br/>Debian 12 (Bookworm) system images. Open the matching product folder in the shared drive; available versions and desktop variants are listed there. | [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56) |
|![Android](/img/sige/android.png) | **Android14 for Sige5 :** <br/>Make your device more personal, protected and accessible with the newest OS upgrade. Improved photo quality, new themes and AI generated wallpapers. Privacy updates for your health, safety and data. And expanded accessibility features. | [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56)  |
| ![Ubuntu](/img/sige/ubuntu.png) | **Ubuntu 22.04 LTS for Sige5:** <br/>Ubuntu 22.04 LTS (Jammy Jellyfish) system images. Select the matching image in the product folder in the shared drive. | [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56) |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | **Armbian for Sige5 :** <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored. | [armbian image](https://armbian.com/boards/armsom-sige5)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | **ubuntu-rockchip for Sige5 :** <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment. | [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |
|[lede](https://github.com/coolsnowwolf/lede) | **lede for Sige5 :** <br/>lede is a highly modular and automated embedded Linux system with powerful network components and scalability. |[Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56)  |

### Hardware Resources 

<div class="cards">
    <a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige5 SCH</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige5 2D</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige5 SMD</h2>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
<a href="https://www.printables.com/model/1234582-armsom-sige7-case" class="card-link">
    <div class="card">
        <div class="icon">
            <i>💡</i>
        </div>
        <div class="content">
            <h2>Case 3D</h2>
        </div>
    </div>
</a>
</div>

<span id="doc-section-4" className="armsom-section-anchor" />

## Product Certificates

### CE / FCC / RoHS

![sige5-ce-fc-rohs](/img/sige/sige5-ce-fc-rohs.webp)

<div className="armsom-image-caption">sige5-ce-fc-rohs</div>


<span id="doc-section-5" className="armsom-section-anchor" />

## Supply Statement

The ArmSoM-Sige5 will be produced at least until July 2034.

### Version Change

- Starting from September 25, 2024, orders for ArmSoM-Sige5 will ship with version 1.2, featuring an updated WiFi module (SYN43752 replacing RTL8852BS).

<span id="doc-section-6" className="armsom-section-anchor" />

## Accessories

The official accessories designed for the ArmSoM-Sige are intended to help you achieve optimal performance from your computer.

<div class="cards">
<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="/img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Camera Module 1</h2>
        <p>The camera module 1, compatible with the OV13850 sensor, is a low-power camera module.</p>
    </div>
</div>
</a>
<a href="./armsom-display-10-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="/img/accessories/armsom-display-10hd.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Display-10-HD</h2>
        <p>A 10.1-inch touchscreen display, ideal for interactive projects like entertainment systems and information dashboards.</p>
    </div>
</div>
</a>
<a href="./sige-diy-case1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="/img/accessories/sige-diy-case.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Sige DIY Case 1</h2>
        <p>Combining high-quality construction with a clean, minimalist design, the metal casing adds a premium touch.</p>
    </div>
</div>
</a>
<a href="./sige-active-cooling-kit" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="/img/accessories/sige-active-cooling-fan-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Active Cooling Kit</h2>
        <p>The active cooling kit ensures Sige runs smoothly even during the most demanding tasks.</p>
    </div>
</div>
</a>
</div>

## Purchase Samples

ArmSoM Official Website: [https://www.armsom.org/product-page/sige5](https://www.armsom.org/product-page/sige5)

ArmSoM Official AliExpress Store: [https://aliexpress.com/item/3256806760032306.html](https://aliexpress.com/item/3256806760032306.html) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=790341533736](https://item.taobao.com/item.htm?id=790341533736)

For OEM & ODM, please contact: sales@armsom.org

## What do others say about the Sige5 ?

- [morrolinux](https://www.youtube.com/watch?v=VpLqDEx-7H8): It looks like a Raspberry Pi, but with an NPU for AI.
- [sbc compare](https://sbc.compare/4-armsom-sige5-8gb): Sige5 Benchmark Comparison on sbc.compare

## Notes

:::caution [Electrostatic Protection]
1. Before handling the device, please ensure you wear an anti-static wrist strap or take electrostatic discharge measures to prevent damage to the development board.
2. Assembly should be performed in an electrostatic-safe environment, avoiding operations in dry and low-humidity conditions.
3. When not in use, store the device in an anti-static bag and keep it in a suitably temperature-controlled, low-humidity environment to prevent static electricity buildup.
4. When handling the device, avoid friction or collisions to prevent the generation of static electricity that could cause damage.
5. When holding the device, try to avoid direct contact with the chips on the mainboard to prevent static damage.
6. Do not plug or unplug wires or other devices while the device is operating to avoid damage from electrical surges.
7. When connecting or disconnecting the GPIO/MIPI expansion interfaces, make sure to turn off the power and disconnect the power cable to prevent damage from electrical current.

:::

:::danger [Heat Management]

Without effective cooling measures, the surface temperature of the main chip may exceed 60 degrees. When handling the device, please avoid direct contact with the SoC and surrounding power inductors to prevent burns. Ensure that the environment is well-ventilated during operation to prevent localized heat buildup, which could lead to overheating. Additionally, do not place the device in direct sunlight. It is recommended to choose between the official [cooling fan](./sige-active-cooling-kit), [heat sink](./sige-diy-case1), or third-party cooling kits based on specific usage conditions to ensure optimal cooling performance.

:::
