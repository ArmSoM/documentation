---
description: ArmSoM-cm5-io
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "CM5-IO"
sidebar_position: 6
slug: /armsom-cm5-io
---

# CM5-IO Product Introduction

The CM5-IO is the IO board for the ArmSoM CM5, with dimensions of 100x80x29 mm. It is a miniature AI computer designed specifically for makers, learners, and developers, enabling the rapid application of AI technology to various smart devices.

## Hardware Information

### Hardware Specifications

The CM5-IO board is an expansion board specifically designed for the CM5 computing module, aimed at assisting in system and embedded board development.

- 1x HDMI output, 1x DP output
- 4x USB 3.0 Type-A
- Gigabit Ethernet RJ45 with PoE support
- Firmware flashing and device mode via USB Type-C
- GPIO: 40-PIN header
- Power connector: DC Barrel jack for 12V power input
- Expansion: M.2 (M-key, supports PCIe), microSD
- MIPI DSI: 1x 4-lane MIPI DSI, supports up to 4K@60fps (x4)
- MIPI CSI0: 1x 4-lane MIPI CSI, each lane up to 2.5Gbps
- MIPI CSI1: 1x 2-lane MIPI CSI, each lane up to 2.5Gbps
- Others: HPOUT, FAN, VRTC
- Dimensions: 100 x 80 x 29 mm (3.94 x 3.15 x 1.14 inches)
- Weight:

### Hardware Interfaces

![ArmSoM-cm5-io](/img/cm/cm5-io-layout.png)

:::tip
The CM5-IO board uses a 12V DC power supply.
:::

### Pin Definition

<details>
    <summary>
        40-PIN header
    </summary>
<div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
| |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |      |  
|140| CAN1_RX_M2 / I2C3_SDA_M0 / UART2_RX_M1 / GPIO4_B4_d   | <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |      |
|141| CAN1_TX_M2 / I2C3_SCL_M0 / UART2_TX_M1 / GPIO4_B5_d   |  <div className='green'>5</div>  | <div className='black'>6</div>  |GND | -           |
|20| PWM0_CH0_M0 / GPIO0_C4_d  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  <div className='orange-txt'>UART0_TX_M0</div> / GPIO0_D4_u |28|
|  - |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  <div className='orange-txt'>UART0_RX_M0</div> / GPIO0_D5_u |     29      |
| - |  -   | <div className='green'>11</div>  | <div className='green'>12</div> | -    |     -     |
|-|- | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
| - | - | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO2_D1_d /  UART4_RX_M0 / I2C6_SDA_M2 / PWM2_CH1_M2  | 89 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |   GPIO2_D0_d / UART4_TX_M0 / I2C6_SCL_M2 / PWM2_CH0_M2  |88|
| 97 |  I2C7_SDA_M1 / SPI3_MOSI_M0 / UART3_RX_M0 / GPIO3_A1_d | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |  - |
| 98 |  CAN1_TX_M3 / SPI3_MISO_M0 / SPDIF_RX1_M1 / UART3_CTSN_M0 / GPIO3_A2_d  | <div className='green'>21</div>  | <div className='green'>22</div> | SARADC_VIN4 |  - |
| 96 |  I2C7_SCL_M1 / SPI3_CLK_M0 / UART3_TX_M0 / GPIO3_A0_d  | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO3_A3_d / CAN1_RX_M3 / SPI3_CSN0_M0  / UART3_RTSN_M0 / SPDIF_TX1_M1 | 99|
|- |  GND | <div className='black'>25</div>  | <div className='green'>26</div> | - | - |
|  111 |  I2C4_SDA_M3 / UART2_RX_M2 / GPIO3_B7_d |  <div className='green'>27</div>  | <div className='green'>28</div> | GPIO2_D6_d / PWM2_CH6_M2 | 94 |
|112| I2C4_SCL_M3 / UART2_TX_M2 / GPIO3_C0_d  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |      -     |
|126|   SPI3_MOSI_M1 / PWM2_CH6_M3 / GPIO3_D6_d| <div className='green'>31</div>  | <div className='green'>32</div> | -  | -  |
| -  | - | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |  -    |
| -  | -   | <div className='green'>35</div>  | <div className='green'>36</div> |  - |   - |
| - | - | <div className='green'>37</div> | <div className='green'>38</div> |  -    |   -   |
| -|  GND | <div className='black'>39</div>  | <div className='green'>40</div> | -   |     -     |

</div>
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
0.8mm connector(CN3)

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

0.8mm connector(J27)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | Positive pole      |
|2          | -         | Negative pole    |
</details>

<details>
    <summary>
        PoE In(J5)
    </summary>

| Pin  | Assignment | Description |
| :--: | :--------: | :---------: |
|  1   |    VC1     |     TX1     |
|  2   |    VC2     |     RX1     |
|  3   |    VC3     |     TX2     |
|  4   |    VC4     |     RX2     |

</details>

## Resources

<div class="cards">
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
<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>CM5 kernel</h2>
            <p>Improved Rockchip Linux</p>
        </div>
    </div>
</a>

<a href="https://github.com/rockchip-linux/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>CM5 uboot</h2>
            <p>rockchip-linux/u-boot</p>
        </div>
    </div>
</a>

<a href="/general-tutorial/rknn-llm" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📕</i>
        </div>
        <div class="content">
            <h2>RKNN-LLM</h2>
            <p>AI models to Rockchip chips</p>
        </div>
    </div>
</a>
</div>

### Official Images

ArmSoM team uses Debian bullseye as the official operating system.

#### Download

The following systems have been tested and verified by ArmSoM official:

Network disk address: 
<a href="/getting-start/cloud-disk" class="btn">
  <span>Google Drive link</span>
</a>

| Logo | Description | Download |
|:----:|:-----------:|:--------:|
| ![debian-bullseye](/img/sige/debian12-1.png) | **Debian 12 for CM5:** <br/> Debian 12 introduces thousands of new and updated packages, supporting various desktop environments and processor architectures (including 32-bit and 64-bit PCs, ARM, MIPS, and PowerPC). One of the biggest changes is the upgrade of the Linux kernel from version 5.10 to 6.1 LTS. | [Google Drive link](https://drive.google.com/drive/folders/10OtqLU1c1MZ9IJR-aLSrevwY4NlzJNG0) |
| ![Android](/img/sige/android.png) | **Android 14 for CM5:** <br/> The latest OS upgrade makes your device more personalized, secure, and accessible. It offers improved photo quality, new themes, and AI-generated wallpapers. Privacy updates protect your health, safety, and data while expanding accessibility features. | [Google Drive link](https://drive.google.com/drive/folders/10OtqLU1c1MZ9IJR-aLSrevwY4NlzJNG0) |

### Third-Party Images

| Logo | Description | Download |
|:----:|:-----------:|:--------:|
| ![armbian-logo](/img/armbian-logo.png) | **Armbian for CM5:** <br/> Armbian is a build framework that allows users to create ready-to-use images with a working kernel based on various user-space configurations for single-board computers. It provides a variety of pre-built images for some supported SBCs, typically based on Debian or Ubuntu. | [Armbian Image](https://github.com/armbian/community/releases) |
| ![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4) | **Ubuntu-Rockchip for CM5:** <br/> This project aims to provide the default Ubuntu experience for Rockchip RK3588 devices. Get started right away by choosing the appropriate Ubuntu server or desktop image, and enjoy a familiar environment. | [Ubuntu-Rockchip Image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases) |

### Hardware Resources 

Get schematics, PCB, DXF, and other hardware documentation for the CM5-IO development kit to quickly start your development.


<a href="https://drive.google.com/drive/folders/1u1ayZzNv0wlE5TpJhuqHYWU6YCiGeC-G" class="btn">
  <span>CM5 Hardware Resources</span>
</a>
<br/>

[ArmSoM-CM5 pin table](https://docs.google.com/spreadsheets/d/1TFBTV2u73eYIFKA2MqlkeFjA-SvN_Uhu/edit?usp=drive_link&ouid=116290908759287485424&rtpof=true&sd=true) - pin table

<div class="cards">
    <a href="https://drive.google.com/drive/folders/1wbW_VyTEyQRrsDF8cvCp1zK1SsZ819un?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>CM5</h2>
                <p>SCH,2D</p>
            </div>
        </div>
    </a>
    <a href="https://drive.google.com/drive/folders/10bCEK2t1BuOJRAULnoEAem338c2W71xT?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📗</i>
            </div>
            <div class="content">
                <h2>CM5-IO</h2>
                <p>SCH,PCB,2D,SMD</p>
            </div>
        </div>
</a>
<a href="https://drive.google.com/drive/folders/1FXvNMlOzZeEF601KSCylwkihR7lqFTtw?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
            <p>ic,connector datasheet</p>
        </div>
    </div>
</a>
</div>


## Getting Started

Preparing for CM5-IO Usage

:::tip
In the following text, "CM5 Kit" refers to CM5 + CM5-IO.
:::

### Tools Preparation
* Power supply
* System Installation (Choose one)
  * **eMMC Boot**
    * USB Type-C cable: Use a Type-C cable to write the image to the CM5 Kit through the Type-C port. You will need a Type-C cable to connect the CM5 Kit to your PC.
  * **MicroSD/TF Card Boot**
    * MicroSD/TF card: Class 10 or above, at least 8GB SDHC, and a card reader.
    * Below are high-speed TF cards tested and verified by the ArmSoM team:
      * SanDisk 32GB TF (MicroSD) (Recommended for developers)
      * SanDisk 32GB TF (MicroSD) Dashcam & Surveillance-specific storage card (Recommended for long-term operation)
      * SanDisk TF 8G Class10 microSD
      * SanDisk TF 128G Class10 microSD XC TF 128G 48MB/S

You can set up the CM5 Kit as an interactive desktop computer or as a headless computer that can only be accessed over the network. To set up the CM5 Kit as a headless computer, configure the hostname, user account, network connection, and SSH during the initial OS installation. If you plan to use the CM5 Kit directly, you will need the following additional accessories:

**Optional Accessories**
* Keyboard & Mouse
* HDMI monitor and HDMI cable
* Ethernet cable
* Camera module
  * For a 4-lane camera, it's recommended to use the [camera-module1](./armsom-camera-module1).
  * For a 2-lane camera, use the Raspberry Pi [camera-module-v2](https://www.raspberrypi.com/products/camera-module-v2/).
* LCD display
  * It's recommended to use the [Display 10 HD](./armsom-display-10-hd).
* Audio cable, 0.8mm vertical socket.
* RTC battery, 0.8mm vertical socket.
* Fan, 0.8mm vertical socket.

### Power Supply

* Supports DC 12V adapter, 2.5mm

### Choosing a Flashing Method
<div class="cards">
    <a href="./getting-start/flash-img" class="card-link">
        <div class="card">
            <div class="icon">
                <i>🎇</i>
            </div>
            <div class="content">
                <h2>Flashing the System Image</h2>
            </div>
        </div>
    </a>
</div>

## Interface Usage

If you are using the CM5 Kit for the first time, please familiarize yourself with the [hardware interfaces](#hardware-interfaces) of each product, which will help you better understand the following content.

### Debugging Serial Port

Connect the USB to TTL serial cable as shown below:

![cm5io-debug](/img/cm/cm5io-debug.png)

| CM5-IO       | Connect  | Serial Module |
| -------------|----------|---------------|
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |

### Ethernet Port

1. First, insert one end of the Ethernet cable into the CM5 Kit's Ethernet port, and connect the other end to the router, ensuring that the network is functioning properly.
2. After the system starts, an IP address will be automatically assigned to the Ethernet card via DHCP, with no additional configuration needed.
3. To view the IP address in the Linux system on the CM5 Kit, use the following command:

```
root@armsom-cm5:/# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: end0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether c6:9c:b0:7e:2b:1f brd ff:ff:ff:ff:ff:ff permaddr aa:a6:84:1b:0d:21
    inet 192.168.10.78/24 brd 192.168.10.255 scope global dynamic noprefixroute enP4p65s0
       valid_lft 86221sec preferred_lft 86221sec
    inet6 fe80::5bb0:d96f:926d:b334/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
3: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether cc:64:1a:33:b5:40 brd ff:ff:ff:ff:ff:ff
4: wlan1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether ce:64:1a:33:b5:40 brd ff:ff:ff:ff:ff:ff
```

After the CM5 Kit starts up, there are three ways to check the IP address:

- Connect an HDMI monitor, log into the system, and use the terminal to enter the `ip a` command to check the IP address.
- Connect a [debug serial port](#Debugging Serial Port) and use the terminal to enter the `ip a` command to check the IP address.
- If you do not have a debug serial port or an HDMI monitor, you can also check the IP address of the CM5 Kit's Ethernet port through the router's management interface. However, sometimes the IP address may not be visible on the router. If the IP address is not visible, troubleshoot as follows:
    - First, check if the Linux system has started normally. If the green light on the CM5 Kit is steady, it has generally started correctly.
    - Check if the Ethernet cable is securely connected, or try a different cable.
    - Try using a different router, as issues have been encountered where routers cannot properly assign IP addresses or the assigned IP address does not show up on the router.
    - If no other router is available, you will need to connect an HDMI monitor or use a debug serial port to check the IP address.

:::tip
Note that DHCP automatic IP assignment on the CM5 Kit does not require any configuration.
:::

4. Use the `ping` tool to check network connectivity.

The command to test network connectivity is shown below. You can interrupt the `ping` command by pressing `Ctrl+C`.

```bash
root@armsom-cm5:~$ ping www.baidu.com
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

### WiFi

The CM5 Kit includes an onboard WiFi module, so no external network devices are required. It uses the [standard 4th generation antenna](https://www.armsom.org/product-page/sige7-metal-shell).

**Connect to WiFi using the server image via command line**

1. First, log in to the Linux system. You can do this in one of three ways:
   - If the CM5 Kit is connected to a network cable, you can remotely log in via SSH.
   - If the CM5 Kit is connected to a debug serial port, you can use a serial terminal to log in.
   - If the CM5 Kit is connected to an HDMI display, you can log in using the terminal displayed on the HDMI screen.

2. Use the `nmcli dev wifi` command to scan for nearby WiFi hotspots.

   ```bash
   # 1. Enable WiFi
   root@armsom-cm5:/# nmcli r wifi on
   # 2. Scan for WiFi
   root@armsom-cm5:/# nmcli dev wifi
   # 3. Connect to a WiFi network
   root@armsom-cm5:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
   ```

   ![WiFi nmcli scan](/img/general-tutorial/wifi-nmcli-scan.png)

3. Use the `nmcli` command to connect to the scanned WiFi network:

   - Replace `wifi_name` with the name of the WiFi hotspot you want to connect to.
   - Replace `wifi_password` with the password for that WiFi hotspot.

   ```bash
   root@armsom-cm5:~$ nmcli dev wifi connect "wifi_name" password "wifi_password"
   Device 'wlan0' successfully activated with "wlan0b6d10bba-e1d5-4b6d-a17f-7d5ab44bbb6f".
   ```

4. Use the `ip addr show wlan0` command to view the IP address of the WiFi connection.

   ```bash
   root@armsom-cm5:~$ ip addr show wlan0
   4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
       link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
       inet 192.168.10.9/24 brd 192.168.10.255 scope global dynamic noprefixroute wlan0
          valid_lft 86321sec preferred_lft 86321sec
       inet6 fe80::850d:3119:e0:afa3/64 scope link noprefixroute
          valid_lft forever preferred_lft forever
   ```

5. Use the `ping` command to test network connectivity over WiFi. You can interrupt the ping command using `Ctrl+C`.

   ```bash
   root@armsom-cm5:~$ ping www.baidu.com
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

**Connect to WiFi using the server image via graphical interface**

1. Log in to the Linux system. You can do this in one of three ways:
   - If the CM5 Kit is connected to a network cable, you can remotely log in via SSH.
   - If the CM5 Kit is connected to a debug serial port, you can use a serial terminal to log in (use MobaXterm, as Minicom cannot display the graphical interface).
   - If the CM5 Kit is connected to an HDMI display, you can log in using the terminal displayed on the HDMI screen.

2. In the command line, enter the `nmtui` command to open the WiFi connection interface.

   ![WiFi nmtui](/img/general-tutorial/wifi-nmcli.png)

   ```bash
   root@armsom-cm5:~$ nmtui
   ```

3. Select "Activate a connection" and press Enter.

   ![WiFi nmtui connect](/img/general-tutorial/wifi-nmcli-connect.png)

4. Select the WiFi hotspot you want to connect to and enter the password. Once connected, an asterisk (*) will appear next to the connected WiFi network.

   ![WiFi nmtui success](/img/general-tutorial/wifi-nmcli-success.png)

5. Use the `ip addr show wlan0` command to view the WiFi connection's IP address.

   ```bash
   root@armsom-cm5:~$ ip addr show wlan0
   4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
       link/ether b8:2d:28:5a:52:6a brd ff:ff:ff:ff:ff:ff
       inet 192.168.10.9/24 brd 192.168.10.255 scope global dynamic noprefixroute wlan0
          valid_lft 86316sec preferred_lft 86316sec
       inet6 fe80::a422:3494:3147:92d/64 scope link noprefixroute
          valid_lft forever preferred_lft forever
   ```

6. Use the `ping` command to test WiFi network connectivity. You can interrupt the ping command using `Ctrl+C`.

   ```bash
   root@armsom-cm5:~$ ping www.baidu.com
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

**Test method for desktop image**

1. Click the network configuration icon on the desktop (make sure the network cable is disconnected when testing WiFi).
2. After successfully connecting to WiFi, you can open a browser to check if you can access the internet.

   ![WiFi desktop set](/img/general-tutorial/wifi-desktop-set.png)

**Network Settings**
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

### Bluetooth

```bash
# 1. Activate Bluetooth
root@armsom-cm5:/# service bluetooth start
# 2. Enter bluetoothctl
root@armsom-cm5:/# bluetoothctl
# 3. Enter the following commands to connect
root@armsom-cm5:/# power on
root@armsom-cm5:/# agent on
root@armsom-cm5:/# default-agent
root@armsom-cm5:/# scan on
root@armsom-cm5:/# pair yourDeviceMAC
```

### HDMI

The CM5 Kit supports HDMI up to 4Kp120.

1. Use an HDMI cable to connect the CM5 Kit to an HDMI display.
2. After booting the Linux system, if the HDMI display has an image output, it indicates that the HDMI interface is working normally.

:::tip
Note: Many laptops have an HDMI port, but it usually only supports output, not HDMI input. This means it cannot display the HDMI output from other devices on the laptop screen. If you plan to connect the development board's HDMI to a laptop's HDMI port, please first confirm that your laptop supports HDMI input. If HDMI does not display anything, please check if the system you are using has a desktop version, as the server version will only display a terminal.
:::

#### HDMI to VGA Display Test

1. You will need the following accessories:
   - HDMI to VGA adapter
   - A VGA cable and a monitor that supports VGA input

2. The HDMI to VGA display test is shown below:

![sige-hdmi-vga](/img/general-tutorial/sige-hdmi-vga.jpg)

:::tip
When using HDMI to VGA display, there is no need to configure anything on the CM5 Kit or Linux system. As long as the HDMI interface on the development board displays correctly, it should work. If you encounter issues, please check the HDMI to VGA adapter, VGA cable, and monitor.
:::

### USB

#### USB Mouse or Keyboard Connection Test

1. Insert a USB keyboard into the CM5 Kit's USB port.
2. Connect the CM5 Kit to an HDMI display.
3. If the mouse or keyboard can operate the system normally, it indicates that the USB port is working correctly (the mouse can only be used in a desktop version of the system).

#### USB Storage Device Connection Test

1. Insert a USB flash drive or USB external hard drive into the CM5 Kit's USB port.
2. Run the following command. If you see an output for `sdX`, it indicates that the USB drive is recognized successfully:

```bash
root@armsom-cm5:/# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0  122880000 sda
```

3. Use the `mount` command to mount the USB drive to `/mnt/`, and then you can view the files on the USB drive:

```bash
root@armsom-cm5:/# sudo mount /dev/sda1 /test/
```

4. After mounting, use the `df -h` command to check the USB drive’s capacity and mount point:

```bash
root@armsom-cm5:/test# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /test
```

#### USB Camera

1. Prepare a USB camera that supports the UVC protocol, then insert the USB camera into the CM5 Kit's USB port.

2. Use the `v4l2-ctl` command to see the device node information for the USB camera, which will be `/dev/video0`:

```bash
root@armsom-cm5:/# v4l2-ctl --list-devices
Logitech HD Webcam C93 (usb-xhci-hcd.5.auto-1):
        /dev/video40
        /dev/video41
        /dev/media4
```

3. On a desktop system, you can use Cheese/V4L2 Test Bench to directly open the USB camera:

![sige-usb-cam](/img/general-tutorial/sige-usb-cam.jpg)

You can also use terminal commands to open the camera preview:

```bash
root@armsom-cm5:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;
```

Command to take a photo:

```bash
root@armsom-cm5:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=/home/armsom/test.jpg;
```

Command to record a video:

```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/armsom/test.mp4
```

![armsom-sige7-gst](/img/sige/armsom-sige7-gst.png)

### M.2 Key M

The CM5 Kit features an M.2 Key M connector:

- On the back of the product, there is an M.2 Key M connector. The board includes a standard M.2 2280 mounting hole for deploying an M.2 2280 NVMe SSD.  
  **<font color='red'>Note: This M.2 interface does not support M.2 SATA SSDs.</font>**

```
root@armsom-cm5:/# mkdir temp
root@armsom-cm5:/# mount /dev/nvme0n1 temp
```

### Audio

Check the sound cards in the system.

```bash
root@armsom-cm5:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipes8388c [rockchip,es8388-codec], device 0: 2a610000.sai-ES8323 HiFi ES8323 HiFi-0 [2a610000.sai-ES8323 HiFi ES8323 HiFi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: rockchipdp0 [rockchip-dp0], device 0: rockchip-dp0 spdif-hifi-0 [rockchip-dp0 spdif-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchiphdmi [rockchip-hdmi], device 0: rockchip-hdmi i2s-hifi-0 [rockchip-hdmi i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

Play audio

```bash
root@armsom-cm5:/# aplay -D plughw:1,0 ./usr/share/sounds/alsa/Front_Right.wav
```

### FAN

The CM5 Kit comes with a 5V fan using a 0.8mm connector.

The fan has five default states:

| Temperature | State | PWM Speed |
| ----------- | ----- | --------- |
| Below 50°C   | 0     | 0         |
| 50°C-55°C    | 1     | 50        |
| 55°C-60°C    | 2     | 100       |
| 60°C-65°C    | 3     | 150       |
| 65°C-70°C    | 4     | 200       |
| Above 70°C   | 5     | 250       |

```bash
// Check the current speed 
root@armsom-cm5:/# cat /sys/class/hwmon/hwmon9/pwm1
```

### 40 PIN

The CM5 Kit provides a 40-PIN GPIO header, compatible with most sensors on the market.

### RGB LED

The CM5 Kit has a green LED.

- **User Green LED:** By default, it remains on to indicate that the system is operating normally.

### RTC

- The CM5 Kit is equipped with an RTC IC **LK8563S**.
- First, insert the RTC battery into the 2-pin header to power the RTC IC.
- Note: The RTC battery should remain in the RTC connector, and confirm that the rtc LK8563S device has been created.

```bash
root@armsom-cm5:/# dmesg | grep rtc
[    3.476710] rtc-hym8563 2-0051: rtc information is valid
[    3.488534] rtc-hym8563 2-0051: registered as rtc0
[    3.490109] rtc-hym8563 2-0051: setting system clock to 2024-06-16T09:45:52 UTC (1718531152)
```

- Locate rtc0, then use the following commands to set the system time and synchronize it with rtc0.

```bash
root@armsom-cm5:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
root@armsom-cm5:/# date
2023年 11月 03日 星期五 10:33:12 UTC
root@armsom-cm5:/# hwclock -w
root@armsom-cm5:/# hwclock -r
root@armsom-cm5:/# poweroff
```

- Remove the RTC battery, wait for 10 minutes or longer, reinsert the RTC battery, and power on Sige7. Check if the RTC is synchronized with the system clock.

```bash
root@armsom-cm5:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
root@armsom-cm5:/# date
2023年 11月 03日 星期五 10:36:01 UTC
```

### MIPI-CSI

#### Basic Commands

```bash
// Check the video formats supported by the video node
root@armsom-cm5:/# v4l2-ctl -d /dev/video11 --get-fmt-video
Format Video Capture Multiplanar:
        Width/Height      : 1920/1080
        Pixel Format      : 'RG10' (10-bit Bayer RGRG/GBGB)
        Field             : None
        Number of planes  : 1
        Flags             : premultiplied-alpha, 0x000000fe
        Colorspace        : Default
        Transfer Function : Default
        YCbCr/HSV Encoding: Unknown (0x000000ff)
        Quantization      : Default
        Plane 0           :
           Bytes per Line : 2560
           Size Image     : 2764800

// Check the topology
root@armsom-cm5:/# media-ctl -d /dev/media0 -p
```

#### Using ArmSoM Camera Module 1

The camera uses the [camera-module1](./armsom-camera-module1) module. After connecting and powering the camera module, check the startup logs.

```bash
root@armsom-cm5:/# dmesg | grep ov13850
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

Capture an image using `v4l2-ctl`

```bash
// MIPI-CSI1
root@armsom-cm5:/# v4l2-ctl -d /dev/video31 --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=/nv12.bin --stream-count=1 --stream-poll
```

Record video using `gst-launch-1.0`

```bash
// MIPI-CSI1
root@armsom-cm5:/# gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=2112,height=1568, framerate=30/1 ! xvimagesink
```

![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg)

[ArmSoM camera-module1](./armsom-camera-module1)

#### Using Raspberry Pi Camera Module 2

The camera uses the [Raspberry Pi Camera Module 2](https://www.raspberrypi.com/products/camera-module-v2/) module. After connecting and powering the camera module, check the startup logs.

```bash
root@armsom-cm5:/# dmesg | grep imx219
[    4.049680] imx219 4-0010: driver version: 00.01.02
[    4.074430] imx219 4-0010: Model ID 0x0219, Lot ID 0x258b89, Chip ID 0x056c
[    4.074460] imx219 4-0010: Consider updating driver imx219 to match on endpoints
[    4.074477] rockchip-csi2-dphy csi2-dphy4: dphy4 matches m01_b_imx219 4-0010:bus type 5
```

Capture an image using `v4l2-ctl`

```bash
root@armsom-cm5:/# v4l2-ctl -d /dev/video11 --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=1920,height=1080,pixelformat=NV12 --stream-mmap=3 --stream-to=/nv12.bin --stream-count=1 --stream-poll
```

Record video using `gst-launch-1.0`

```bash
root@armsom-cm5:/# sudo apt-get update
root@armsom-cm5:/# sudo apt-get install gstreamer1.0*
root@armsom-cm5:/# gst-launch-1.0 v4l2src ! 'video/x-raw, format=NV12, width=1920, height=1080' ! autovideosink
```

### MIPI DSI

The CM5 Kit supports resolutions up to 2K@60Hz.

1. Connect the ribbon cable as shown in the image below:

![cm5-io-display-10-hd](/img/cm/cm5-io-display-10-hd.png)

2. Configuring a 10.1-inch MIPI LCD screen:

- The Linux image does not enable the MIPI LCD screen configuration by default. To use the MIPI LCD screen, you need to enable it manually.

- Use `nano` to open the `/boot/armbianEnv.txt` file:

```bash
sudo nano /boot/armbianEnv.txt
```

- Find or add the "overlays=" keyword in the file.

```bash
// Select according to your product
overlays=armsom-cm5-io-display-10hd // cm5-kit
```

Shortcut keys: Ctrl + S to save, Ctrl + X to exit

After editing, restart the device to apply the Overlays settings for Display 10 HD.

## Purchase Samples

ArmSoM Official Website: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM Official AliExpress Store: 

ArmSoM Official Taobao Store: 

For OEM & ODM, please contact: sales@armsom.org


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