---
title: "ArmSoM CM1 | RK3506J Industrial Compute Module Documentation"
image: /img/armsom-social-card.png
description: ArmSoM-CM1 is an industrial-grade product featuring the RK3506J tri-core Cortex-A7 application processor. It operates within a temperature range of -40°C to 85°C and is specifically designed for industrial gateways, HMIs, PLCs, handheld POS systems, and home appliance display control applications.
keywords: [armsom, armsom-CM1, RK3506J Development Boards, RK3506J Core board, rockchip]
sidebar_label: "CM1"
sidebar_position: 5
slug: /armsom-cm1
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# ArmSoM-CM1 and CM1-IO Development Kit

<nav className="armsom-doc-shortcuts" aria-label="Page shortcuts"><a href="#hardware-information">Specifications</a><a href="#development-resources">Downloads</a><a href="#user-manual">Get started</a><a href="#interface-usage">Interfaces</a></nav>

## Product Introduction {#11-product-introduction}

ArmSoM-CM1 is a computer-on-module (COM) based on the Rockchip RK3506J (tri-core Cortex-A7 + single-core Cortex-M0). It features a rich set of peripheral interfaces such as SAI, USB2 OTG, RMII, and CAN. This module meets minimum system requirements and includes an onboard Type-C power & programming port, MIPI DSI display interface, and an SD card expansion slot.

The ArmSoM-CM1 Kit consists of the CM1 module paired with the CM1-IO carrier board, offering even richer peripheral resources: dual 10/100 Ethernet ports, dual USB2.0 Host ports, onboard WiFi, MIPI DSI display interface, headphone jack, microphone input, and 72 GPIOs routed from the core module.

<figure className="armsom-doc-figure"><a href="/img/cm/armsom-cm1.jpg" target="_blank" rel="noopener noreferrer"><img src="/img/cm/armsom-cm1.jpg" alt="CM1 module and development kit" loading="lazy" /></a><figcaption>CM1 module and development kit · Click to view image</figcaption></figure>

The ArmSoM-CM1 Kit development suite provides **full-stack Linux system development documentation** and **open-source software resources**. Enterprise customers can directly purchase the core module for end-product development. ArmSoM delivers **complete system source code** (including kernel customization patches, peripheral drivers, and toolchains) as open-source hardware, significantly accelerating customer product development cycles.

To maximize enterprise development efficiency and shorten R&D cycles, we systematically integrate the following **full lifecycle development resources** for core module users:

​1. **Hardware Design Assets**
- Core Module / Carrier Board Reference Schematics (including high-speed signal integrity design guidelines)
- Mechanical Structure 3D Models (STEP format)
- Key Component Footprint Libraries
- Industrial Connector Specifications and Interface Definition Manuals

​2. **Software Delivery Suite**
- Pre-validated Factory System Images (Built with Buildroot)
- Cross-compilation Toolchain
- Board Support Package (BSP) & Device Tree Configuration Templates
- Modular Peripheral Driver Development Framework

## Application Areas {#12-application-areas}

The RK3506J finds wide application across various fields, including industrial control, smart appliance display control, HMI (Human-Machine Interface), and industrial information & data processing.

## Hardware Information

### CM1 Hardware Interfaces

<figure className="armsom-doc-figure"><a href="/img/cm/armsom-cm1-front&back1.jpg" target="_blank" rel="noopener noreferrer"><img src="/img/cm/armsom-cm1-front&back1.jpg" alt="CM1 module interfaces" loading="lazy" /></a><figcaption>CM1 module interfaces · Click to view image</figcaption></figure>

### CM1 Hardware Specifications

<table className="armsom-spec-table">
    <thead>
        <tr>
            <th>Category</th>
            <th>Specification</th>
            <th>Category</th>
            <th>Specification</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th scope="row">SOC</th>
            <td><li>RockChip RK3506j</li></td>
            <th scope="row">CPU</th>
            <td><li>RK3506 Tri-core Cortex-A7 Processor & single-core Cortex-M0</li></td>
        </tr>
        <tr>
            <th scope="row">GPU</th>
            <td><li>2D Graphic Engine</li><li>Integrated High-Performance 2D Acceleration Hardware</li></td>
            <th scope="row">Memory</th>
            <td><li>256/512MB DDR3L</li></td>
        </tr>
        <tr >
            <th scope="row">Storage</th>
            <td><li>256/512MB NAND Flash</li><li>Supports MicroSD Card Expansion</li></td>
            <th scope="row">Video Output</th>
            <td><li>1 x MIPI DSI (2Lane, 1.5Gbps)</li></td>
        </tr>
        <tr>
            <th scope="row">40-PIN & 44-PIN</th>
            <td><li>Exposes all remaining functions of the RK3506J chip</li></td>
            <th scope="row">Buttons</th>
            <td><li>1x Maskrom Key (for entering maskrom programming mode)</li></td>
        </tr>
        <tr>
            <th scope="row">Power Supply</th>
            <td><li>Type-C 5V</li></td>
            <th scope="row">OS Support</th>
            <td><li>Officially supported by Rockchip: Buildroot</li></td>
        </tr>
        <tr>
            <th scope="row">Dimensions</th>
            <td><li>70 mm x 42mm</li></td>
            <th scope="row">Operating Temperature</th>
            <td><li>-40°C ~ 85°C</li></td>
        </tr>
    </tbody>
</table>

### CM1-IO Hardware Interface
![ArmSoM CM1-IO](/img/cm/armsom-cm1-io.jpg)

<div className="armsom-image-caption">ArmSoM CM1-IO</div>


### CM1-IO Hardware Specifications

<table className="armsom-spec-table">
    <thead>
        <tr>
            <th>Category</th>
            <th>Specification</th>
            <th>Category</th>
            <th>Specification</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th scope="row">40-PIN & 44-PIN Female Header</th>
            <td><li>Expands remaining core module functions</li></td>
            <th scope="row">40-PIN Header</th>
            <td><li>Partially pin-compatible with Raspberry Pi 40pin for connecting rich accessory peripherals</li><li>Supports UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></td>
        </tr>
        <tr>
            <th scope="row">USB Interfaces</th>
            <td><li>1 × Type C (Power & Programming Only)</li>
            <li>2 × USB2.0 HOST</li></td>
            <th scope="row">Networking</th>
            <td><li>2 × 10/100 Ethernet Ports</li><li>1 × WiFi5/BT4.2</li></td>
        </tr>
        <tr>
            <th scope="row">Audio</th>
            <td><li>1 × Audio Jack (Headphone/Mic)</li></td>
            <th scope="row">12-PIN Header</th>
            <td><li>Supports RS485/CAN/MICIN/SPK</li></td>
        </tr>
        <tr>
            <th scope="row">Power Supply</th>
            <td><li>Type-C 5V</li><li>DC 12V Jack</li></td>
            <th scope="row">OS Support</th>
            <td><li>Officially supported by Rockchip: Buildroot</li></td>
        </tr>
        <tr>
            <th scope="row">Dimensions</th>
            <td><li>100 mm x 70mm</li></td>
            <th scope="row">Operating Temperature</th>
            <td><li>-40°C ~ 85°C</li></td>
        </tr>
    </tbody>
</table>

### RK3506j Block Diagram
<details>
    <summary>
      RK3506j Block Diagram
    </summary>
        <img
  src="/img/forge/rk3506j.png"
  alt="rk3506j block diagram"
  className="session-details-live-video"/>
</details>

### Pin Definitions

<details>
    <summary>
     40-PIN Header
    </summary>
       
<div className='gpio_style'>  

| GPIO Number |  Function  |   Pin    |  Pin     |  Function  | GPIO Number |  
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: |   
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |  
|     4     |   RM_IO4/SAI0_SDI0/GPIO0_A4_d| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     5     | RM_IO5/SAI0_SDI1/GPIO0_A5_d  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|59|DSMC_SLV_RDYN/RM_IO31/UART5_RX_M1<br/>FLEXBUS0_D0/DSMC_CSN3/VO_LCDC_D0<br/>GPIO1_D3_d |  <div className='green'>7</div>  | <div className='green'>8</div>  |<div className='orange-txt'>UART0_TX</div>RM_IO22/JTAG_TCK_M1/GPIO0_C6_u   |     22      |
||GND|  <div className='black'>9</div>  | <div className='green'>10</div> |<div className='orange-txt'>UART0_RX</div>RM_IO23/JTAG_TMS_M1/GPIO0_C7_u  |     23  |
|58|DSMC_SLV_CSN0/RM_IO30/UART5_TX_M1<br/>FLEXBUS0_D1/DSMC_CSN2/VO_LCDC_D1<br/>GPIO1_D2_d| <div className='green'>11</div>  |<div className='green'>12</div>|GPIO1_D1_d/DSMC_SLV_D7<br/>RM_IO29UART5_RTSN_M1/DSM_AUD_LP_M0<br/>FLEXBUS0_D2/DSMC_DQS1/VO_LCDC_D2|57|
| 52 |DSMC_SLV_D2/FLEXBUS0_D7<br/>DSMC_D11/VO_LCDC_D7<br/>GPIO1_C4_d | <div className='green'>13</div>  | <div className='green'>14</div> |GPIO1_C5_d<br/>DSMC_SLV_D3/FLEXBUS0_D6<br/>DSMC_D12/VO_LCDC_D6|53|
|51  |DSMC_SLV_D1/RM_IO28/SAI2_SDO_M1<br/>FLEXBUS1_CSN_M5/FLEXBUS0_D8<br/>DSMC_D10/VO_LCDC_D8<br/>GPIO1_C3_d | <div className='green'>15</div>  | <div className='green'>16</div> |GPIO1_C2_d<br/>DSMC_SLV_D0/RM_IO27SAI2_SDI_M1<br/>FLEXBUS0_CSN_M5/DSM_AUD_RP_M0<br/>FLEXBUS0_D9/DSMC_D9/VO_LCDC_D9| 50 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |GPIO1_C1_d/DSMC_SLV_DQS0/SAI2_MCLK_M1<br/>FLEXBUS1_CSN_M4/DSM_AUD_RN_M0<br/>FLEXBUS0_CLK/DSMC_D8/VO_LCDC_D10    |  49 |
| 48 |DSMC_SLV_CLK/FLEXBUS0_CSN_M4<br/>DSMC_INT1/FLEXBUS1_CLK<br/>DSMC_RESETN/VO_LCDC_D11<br/>GPIO1_C0_d| <div className='green'>19</div>  | <div className='green'>20</div> |SARADC_IN2/GPIO4_B2_z| 138  |
| 46 |FLEXBUS0_CSN_M3/FLEXBUS0_D11<br/>FLEXBUS1_D14/DSMC_CSN0<br/>VO_LCDC_D13/GPIO1_B6_d| <div className='green'>21</div>  | <div className='green'>22</div> |GPIO1_B7_d<br/>FLEXBUS1_CSN_M3/FLEXBUS0_D10<br/>FLEXBUS1_D15/DSMC_RDYN/VO_LCDC_D1 | 47  |
| 44 |FLEXBUS0_CSN_M2/FLEXBUS0_D13<br/>FLEXBUS1_D12/DSMC_D6<br/>VO_LCDC_D15GPIO1_B4_d| <div className='green'>23</div>  | <div className='green'>24</div> |GPIO1_B5_d<br/>FLEXBUS1_CSN_M2/FLEXBUS0_D12<br/>FLEXBUS1_D13/DSMC_D7/VO_LCDC_D14 | 45 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |GPIO1_B3_d<br/>RM_IO26/SAI2_LRCK_M1FLEXBUS1_CSN_M1<br/>FLEXBUS0_D14/FLEXBUS1_D11<br/>DSMC_INT3/VO_LCDC_D16|     43      |
|  41 |RM_IO24/UART5_CTSN_M1<br/>FLEXBUS1_CSN_M0/FLEXBUS1_D9<br/>DSMC_CSN1/VO_LCDC_D184<br/>GPIO1_B1_d|  <div className='green'>27</div>  | <div className='green'>28</div> |GPIO1_B2_d<br/>RM_IO25/SAI2_SCLK_M1FLEXBUS0_CSN_M1<br/>FLEXBUS0_D15/FLEXBUS1_D10<br/>DSMC_INT2/VO_LCDC_D17| 42 |
|40  |FLEXBUS0_CSN_M0/FLEXBUS1_D8<br/>DSMC_D5/VO_LCDC_D19<br/>GPIO1_B0_d| <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |           |
|38 |FLEXBUS1_D6/DSMC_D3<br/>VO_LCDC_D21/GPIO1_A6_d| <div className='green'>31</div>  | <div className='green'>32</div> |GPIO1_A7_d/FLEXBUS1_D7<br/>DSMC_D4/VO_LCDC_D20|    39     |
| 37  |FLEXBUS1_D5/DSMC_D2VO_LCDC_D22<br/>GPIO1_A5_d| <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |      |
| 35  |FLEXBUS1_D3/DSMC_D0/VO_LCDC_CLK<br/>GPIO1_A3_d| <div className='green'>35</div>  | <div className='green'>36</div> |GPIO1_A4_d/FLEXBUS1_D4<br/>DSMC_D1/VO_LCDC_D23   |    36      |
|33 |DSMC_SLV_INT/DSMC_INT0<br/>FLEXBUS1_D1/DSMC_CLKN<br/>VO_LCDC_VSYNC/GPIO1_A1_d | <div className='green'>37</div>  | <div className='green'>38</div> |GPIO1_A2_d/FLEXBUS1_D2<br/>DSMC_DQS0/VO_LCDC_HSYNC|     34     |
| |  GND | <div className='black'>39</div>  | <div className='green'>40</div> |GPIO1_A0_d/FLEXBUS1_D0<br/>DSMC_CLKP/VO_LCDC_DEN|     32     |

</div>  
</details>

<details>
    <summary>
    12-PIN Header
    </summary>

| Pin  | Assignment   | Description                  | Pin  | Assignment   | Description                  |
    :--------: | :---------: | :--------: |  :--------: |  :--------: |  :--------: | 
| 1    | RS485_A      | RS485 Differential Signal (+) | 2    | RS485_B      | RS485 Differential Signal (-) |
| 3    | CAN_L        | CAN Bus Differential Signal (Low) | 4    | CAN_H        | CAN Bus Differential Signal (High) |
| 5    | GND          | System Ground              | 6    | VBAT_RTC    | RTC Real-time Clock Battery Input |
| 7    | MICIN_P      | Microphone Input (+) (Differential) | 8    | MICIN_N      | Microphone Input (-) (Differential) |
| 9    | MICIN_P      | Microphone Input (+) (Alternate Channel) | 10   | MICIN_N      | Microphone Input (-) (Alternate Channel) |
| 11   | SPK_P        | Speaker Output (+) (Differential) | 12  | SPK_N        | Speaker Output (-) (Differential) |
</details>

### FLEXBUS
<details>
    <summary>
    FLEXBUS Correspondence
    </summary>

| J8002 pin | Assignment  |    GPIO number     | FlexBUS0 |
 :--------: | :---------: | :--------: |  :--------: | 
| 1~8  | DSMC_* / FLEXBUS1_D0~D7  | GPIO1_A0~A7 | Input only       |
| 9    | DSMC_D5 / FLEXBUS1_D8    | GPIO1_B0    | FLEXBUS0_CSN_M0  |
|11    | CAN1_TX / FLEXBUS1_D10   | GPIO1_B2    | FLEXBUS0_D15
|12~16 | CAN1_RX … DSMC_RDYN      | GPIO1_B3~B7 | FLEXBUS0_D14~D10 |
|18    | DSM_AUD_RN               | GPIO1_C1    | FLEXBUS0_CLK     |
|19    | DSM_AUD_RP               | GPIO1_C2    | FLEXBUS0_D9      |
|20~24 | MIPI_DSI_TE ~ RMII1_RSTn | GPIO1_C3~C7 | FLEXBUS0_D8~D4   |
|25    | USB20_OTG1_DRV_H         | GPIO1_D0    | FLEXBUS0_D3      |
|26    | UART4_RTSN               | GPIO1_D1    | FLEXBUS0_D2      |
|27    | UART4_RX                 | GPIO1_D2    | FLEXBUS0_D1      |
|28    | UART4_TX                 | GPIO1_D3    | FLEXBUS0_D0      |
</details>

We’ve always believed that the best products come from deep conversations with users. Thanks to a practitioner in our open-source community who keenly spotted areas for improvement in our ArmSoM-CM1 documentation and proactively built the 
[ArmSoM CM1 — Claude Code plugin](https://github.com/savaughn/armsom) for us, making it easier for users to clearly understand the FLEXBUS mapping in ArmSoM-CM1.

## Development Resources

### SDK Source Code
<div class="cards">
    <a href="https://github.com/ArmSoM/rk3506-rkr4.2-sdk" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📚</i>
            </div>
            <div class="content">
                <h2>Source Code</h2>
                <p>Linux for ARM Development Boards</p>
            </div>
        </div>
    </a>
</div>

### Official Images

The ArmSoM team uses Buildroot as the foundation for the official CM1 operating system. [How to flash the system image?](https://docs.armsom.org/getting-start/flash-img)📤

The following systems have been tested and validated by ArmSoM:

Cloud Drive Address:

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="btn">
  <span>Google Drive link</span>
</a>

| logo | Description | Download|
|:--------: | :---------: | :--------: |
|buildroot | **buildroot for CM1:** <br/> Linux Kernel 6.1, support RT-Thread 4.1, <br/> support bare metal programs, support multi-core heterogeneous AMP, <br/> Preempt-RT/Xenomai real-time patches, <br/> lightweight UI framework LVGL. |[Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56) |

### Hardware Resources

Get CM1 Schematics, DXF files, and other hardware resources.

<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="btn">
  <span>Google Drive link</span>
</a>
<br/>

<div class="cards">
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>CM1 SCH</h2>
            </div>
        </div>
</a>
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM1 2D Drawing</h2>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>CM1 Reference Designator Map</h2>
        </div>
    </div>
</a>
</div>

## User Manual

Before starting to use CM1-IO, please prepare the following items.

:::tip
The following text uses CM1 Kit to represent CM1+CM1-IO
:::

### Tool preparation
* 5/12v power supply
* system installation
  * Onboard NAND startup
    * USB Type-C data cable, write the image from the Type-C port to the CM1 kit, you need a Type-C data cable to connect the CM1 kit and PC.
  * MicroSD card/TF card startup


**Optional Options**
* USB to serial port conversion
* Ethernet
* LCD display screen
* audio cable

### Selection of burning method
<div class="cards">
    <a href="./getting-start/flash-img" class="card-link">
        <div class="card">
            <div class="icon">
                <i>🎇</i>
            </div>
            <div class="content">
                <h2>System image</h2>
            </div>
        </div>
    </a>
</div>


## Interface usage

If you are using the CM1 Kit for the first time, please familiarize yourself with each product's [hardware interface](#cm1-io-hardware-interface).

### Debug port


<img src="/img/cm/armsom-cm1-debug.png" alt="CM1-IO USB to TTL serial connection" width="400" style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />

Connect the USB to TTL serial cable as shown below:

| CM1-IO       | connect  | port |
| --------------- | ----- | ------ |
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |

PC can also connect to Type-C interface for adb debugging

### gmac

1. Firstly, insert one end of the Ethernet cable into the Ethernet interface of the CM1 Kit, connect the other end of the cable to the router, and ensure that the network is unobstructed
2. After the system is started, it will automatically assign an IP address to the Ethernet card through DHCP, without any other configuration required
3. The command to view IP addresses in the Linux system of CM1 Kit is as follows
```bash
root@armsom:/# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: can0: <NOARP,ECHO> mtu 16 qdisc noop state DOWN group default qlen 10
    link/can
3: eth0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 16:b1:42:f4:f6:69 brd ff:ff:ff:ff:ff:ff
4: eth1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 32:81:2f:73:98:c8 brd ff:ff:ff:ff:ff:ff
5: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether cc:64:1a:61:e9:b5 brd ff:ff:ff:ff:ff:ff
```

4. Use the ping tool to determine if the network is connected.

The command to test network connectivity is as follows. The ping command can be interrupted by pressing Ctrl+C shortcut key
```bash
root@armsom:~$ ping www.baidu.com
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

#### WIFI Station

Wi-Fi Station mode is an operating mode that enables a Wi-Fi device to connect to a Wi-Fi network and communicate with other devices.

<details className="armsom-terminal-details">
<summary>View full commands and terminal output</summary>

```bash
root@armsom:/# ifconfig wlan0 up #Open wlan0
root@armsom:/# ifconfig -a
root@rk3506-buildroot:/# ifconfig -a
can0 Link encap:UNSPEC HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
NOARP MTU:16 Metric:1
RX packets:0 errors:0 dropped:0 overruns:0 frame:0
TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:10
RX bytes:0 (0.0 B) TX bytes:0 (0.0 B)
Interrupt:45

eth0 Link encap:Ethernet HWaddr 9E:3C:0C:CC:4D:1D
UP BROADCAST MULTICAST MTU:1500 Metric:1
RX packets:0 errors:0 dropped:0 overruns:0 frame:0
TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000
RX bytes:0 (0.0 B) TX bytes:0 (0.0 B)
Interrupt:54 Base address:0x2000

eth1 Link encap:Ethernet HWaddr A2:3C:0C:CC:4D:1D
UP BROADCAST MULTICAST MTU:1500 Metric:1
RX packets:0 errors:0 dropped:0 overruns:0 frame:0
TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000 RX bytes:0 (0.0 B) TX bytes:0 (0.0 B)
Interrupt:56 Base address:0x2000

lo Link encap:Local Loopback
inet addr:127.0.0.1 Mask:255.0.0.0
UP LOOPBACK RUNNING MTU:65536 Metric:1
RX packets:578 errors:0 dropped:0 overruns:0 frame:0
TX packets:578 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000
RX bytes:28940 (28.2 KiB) TX bytes:28940 (28.2 KiB)

wlan0 Link encap:Ethernet HWaddr CC:64:1A:61:E8:19
BROADCAST MULTICAST MTU:1500 Metric: 1
RX packets: 0 errors: 0 dropped: 0 overruns: 0 frame: 0
TX packets: 0 errors: 0 dropped: 0 overruns: 0 carrier: 0
collisions: 0 txqueuelen: 1000
RX bytes: 0 (0.0 B) TX bytes: 0 (0.0 B)
root@armsom:/# connmanctl #Enter the Wi-Fi console
connmanctl> enable wifi #Enable Wi-Fi, enabled by default
connmanctl> agent on #Turn on the agent
connmanctl> scan wifi #Turn on Wi-Fi scanning, supports multiple scans
connmanctl> services #List scanned Wi-Fi networks
connmanctl> services
 TP-Link_210A         wifi_cc641a61e819_54502d4c696e6b5f32313041_managed_psk
    lulu                 wifi_cc641a61e819_6c756c75_managed_psk
    Triductor_5GAp       wifi_cc641a61e819_547269647563746f725f35474170_managed_none
    OrayBox-2.4G-FD5C    wifi_cc641a61e819_4f726179426f782d322e34472d46443543_managed_none
    R4R-2G               wifi_cc641a61e819_5234522d3247_managed_psk
                         wifi_cc641a61e819_hidden_managed_psk
    R3mini_Router2G      wifi_cc641a61e819_52336d696e695f526f757465723247_managed_psk
    R4R-5G               wifi_cc641a61e819_5234522d3547_managed_psk
    lulu_5G              wifi_cc641a61e819_6c756c755f3547_managed_psk
    OrayBox-5G-FD5C      wifi_cc641a61e819_4f726179426f782d35472d46443543_managed_none
    ydtx                 wifi_cc641a61e819_79647478_managed_psk
    Tri_Mesh_FH_         wifi_cc641a61e819_5472695f4d6573685f46485f_managed_psk
    Triductor_2GAp       wifi_cc641a61e819_547269647563746f725f32474170_managed_none
    R3mini_Router5G      wifi_cc641a61e819_52336d696e695f526f757465723547_managed_psk
    DIRECT-a4-HP M227f LaserJet wifi_cc641a61e819_4449524543542d61342d4850204d32323766204c617365724a6574_managed_psk
    CFG_2G               wifi_cc641a61e819_4346475f3247_managed_psk
                         wifi_cc641a61e819_hidden_managed_none
    Kingstar-Lo          wifi_cc641a61e819_4b696e67737461722d4c6f_managed_psk
    jachunfree_5         wifi_cc641a61e819_6a616368756e667265655f35_managed_psk
    ChinaNet-mbCu-5G     wifi_cc641a61e819_4368696e614e65742d6d6243752d3547_managed_psk
    HH-V-1               wifi_cc641a61e819_48482d562d31_managed_psk
    ChinaNet-2MNZ        wifi_cc641a61e819_4368696e614e65742d324d4e5a_managed_psk
    ChinaNet-AtTi        wifi_cc641a61e819_4368696e614e65742d41745469_managed_psk
    ChinaNet-mbCu        wifi_cc641a61e819_4368696e614e65742d6d624375_managed_psk
    recynova             wifi_cc641a61e819_726563796e6f7661_managed_psk
    DIRECT-sk-HUAWEI PixLab X1 wifi_cc641a61e819_4449524543542d736b2d485541574549205069784c6162205831_managed_psk
    ChinaNet-AtTi-5G     wifi_cc641a61e819_4368696e614e65742d417454692d3547_managed_psk
    recynova-5G          wifi_cc641a61e819_726563796e6f76612d3547_managed_psk
    Eureka-office        wifi_cc641a61e819_457572656b612d6f6666696365_managed_psk
    BTWIFI6-042426       wifi_cc641a61e819_425457494649362d303432343236_managed_psk
    Eureka-guest         wifi_cc641a61e819_457572656b612d6775657374_managed_psk
    ACCO-TEST            wifi_cc641a61e819_4143434f2d54455354_managed_psk
    Kingstar-Lo-5G       wifi_cc641a61e819_4b696e67737461722d4c6f2d3547_managed_psk
    jachun_link5g        wifi_cc641a61e819_6a616368756e5f6c696e6b3567_managed_psk
    ChinaNet-Ns24        wifi_cc641a61e819_4368696e614e65742d4e733234_managed_psk
    CMCC-YM6M            wifi_cc641a61e819_434d43432d594d364d_managed_none
```

</details>
From the scanned Wi-Fi list, use connect XXXX to connect.

```bash
connmanctl> connect wifi_cc641a61e819_79647478_managed_psk
connmanctl> exit #Exit the terminal.
```
After successfully connecting, use the ifconfig command to view the IP address obtained by wlan0.

```bash
root@armsom:/# ping www.baidu.com
```

### BT

**1. View Bluetooth**

```bash
root@armsom:/# hciconfig -a
hci0:   Type: Primary  Bus: USB
        BD Address: CC:64:1A:61:E9:B6  ACL MTU: 1021:6  SCO MTU: 255:12
        UP RUNNING
        RX bytes:824 acl:0 sco:0 events:63 errors:0
        TX bytes:2289 acl:0 sco:0 commands:63 errors:0
        Features: 0xff 0xff 0xff 0xfa 0xdb 0xbf 0x7b 0x87
        Packet type: DM1 DM3 DM5 DH1 DH3 DH5 HV1 HV2 HV3
        Link policy: RSWITCH HOLD SNIFF PARK
        Link mode: PERIPHERAL ACCEPT
        Name: 'BlueZ 5.77'
        Class: 0x000414
        Service Classes: Unspecified
        Device Class: Audio/Video, Loudspeaker
        HCI Version: 5.2 (0xb)  Revision: 0xddc8
        LMP Version: 5.2 (0xb)  Subversion: 0x1141
        Manufacturer: Realtek Semiconductor Corporation (93)
```
**bluetoothctl**
```bash
root@armsom:/# bluetoothctl
```
**Enter the following command to connect**
```bash
root@armsom:/# power on
root@armsom:/# agent on
root@armsom:/# default-agent
root@armsom:/# scan on
root@armsom:/# pair yourDeviceMAC
```

### USB

**USB storage**
1. First, insert the USB flash drive or USB portable hard drive into the USB interface of the CM1 Kit
2. If you can see the output of sdX by executing the following command, it indicates that the USB drive recognition is successful
```
root@armsom:/# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0  122880000 sda
```
3. The mount command can be used to mount a USB drive to/mnt, and then the files on the USB drive can be viewed

```
root@armsom:/# sudo mount /dev/sda1 /mnt
```

4. After mounting, you can use the `df - h` command to view the capacity usage and mounting points of the USB flash drive

```
root@armsom:/mnt# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /mnt
```

### audio

<figure className="armsom-doc-figure"><a href="/img/cm/armsom-cm1-sound.png" target="_blank" rel="noopener noreferrer"><img src="/img/cm/armsom-cm1-sound.png" alt="CM1-IO audio wiring" loading="lazy" /></a><figcaption>CM1-IO audio wiring · Click to view image</figcaption></figure>
Check the sound card in the system.

```bash
root@armsom:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiprk730 [rockchip-rk730], device 0: dailink-multicodecs HiFi-0 [dailink-multicodecs HiFi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

sound record
```bash
arecord -D hw:0,0 -f S16_LE -t wav -c2 -r 16000 -d 5 /userdata/t.wav
```

playback
```bash
aplay /userdata/t.wav
```

## Product Longevity Statement

ArmSoM-CM1 will be produced until at least July 2035.

## Accessories

Our official accessories designed for the ArmSoM-CM1 Kit aim to help you achieve the best performance from your computer.

<div class="cards">
<a href="./armsom-display-7-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="/img/accessories/armsom-display-7hd.png" alt="ArmSoM Display 7 HD"/>
    </div>
    <div class="card-content">
        <h2>Display-7-hd</h2>
        <p>A 7-inch touchscreen display suitable for interactive projects like entertainment systems and information dashboards.</p>
    </div>
</div>
</a>
</div>

## Purchase Samples

ArmSoM Independent Site: [https://item.taobao.com/item.htm?ft=t&id=965592864051](https://item.taobao.com/item.htm?ft=t&id=965592864051)

ArmSoM AliExpress Official Store:

ArmSoM Taobao Official Store: [https://item.taobao.com/item.htm?ft=t&id=965592864051](https://item.taobao.com/item.htm?ft=t&id=965592864051)

For OEM&ODM, please contact: sales@armsom.org

## Important Notes

:::caution [Electrostatic Discharge (ESD) Protection]
1. Always wear an anti-static wrist strap or take ESD precautions before handling the device to prevent damage.
2. Assembly should be performed in an ESD-controlled environment. Avoid operation under dry and low-humidity conditions.
3. When not in use, store the device in an anti-static bag in a temperature-controlled, low-humidity environment.
4. Avoid friction or collision when handling the device to prevent generating static electricity.
5. Handle the device by its edges, avoiding direct contact with chips on the motherboard.
6. Do not plug or unplug cables or other devices while the system is powered on to avoid damage from current surges.
7. Before plugging/unplugging expansion GPIO/MIPI interfaces, power down the device and disconnect the power cable.
:::

:::danger [Thermal Management]

Without effective cooling measures, the surface temperature of the main SoC can exceed 60°C. Avoid direct contact with the SoC and surrounding power inductors to prevent burns. Ensure adequate ventilation around the device during operation. Do not place the SBC in direct sunlight. It is recommended to use the official [Cooling Fan & Heatsink Kit](./sige-active-cooling-kit) or [DIY Case](./sige-diy-case1), or suitable third-party cooling solutions to ensure optimal thermal performance.

:::
