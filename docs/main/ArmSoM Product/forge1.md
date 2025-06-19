---
description: ArmSom-Forge1 adopts the Rockchip RK3506 next-generation high-performance industrial-grade embedded chip, featuring a multi-core heterogeneous design with three Cortex-A7 cores and one Cortex-M0 core, with main frequencies of 1.5GHz and 200MHz respectively. This chip is widely used in industrial control, industrial communication, human-machine interaction, and other fields due to its high integration, low power consumption, high real-time performance, and rich interface resources.
keywords: [armsom, armsom-forge1, maker kit, rockchip, rk3506 product introduction]
sidebar_label: "Forge1"
sidebar_position: 10
slug: /armsom-forge1
image: /img/forge/forge1-bananer.png
---

# Forge1 Product Introduction

Let’s get to know Forge1 in 5 minutes.

## Overview  
Forge1​​ is an industrial-grade product powered by the ​​RK3506J triple-core Cortex-A7 application processor​​. Operating within a temperature range of ​​-40℃ to 85℃​​, it is specifically designed for industrial gateways, HMIs (Human-Machine Interfaces), PLCs (Programmable Logic Controllers), handheld POS (Point-of-Sale) devices, and home appliance display/control applications.

The embedded ​​2D hardware engine​​ and ​​display output engine​​ minimize CPU overhead to meet demanding graphics rendering requirements.

With a comprehensive set of peripheral interfaces—including ​​RS485​​, ​​USB2​​, ​​RMII​​ (Reduced Media Independent Interface), ​​CAN​​ (Controller Area Network), ​​DSMC​​ (Digital Signal Microcontroller), ​​Flexbus​​, and more—it accommodates diverse application development needs while reducing hardware complexity and development costs.

![ArmSoM-Forge1](/img/forge/forge1-banner-en.jpg)

## Hardware Information  

### Hardware Interfaces  
![armsom-forge1-front-back](/img/forge/armsom-forge1-layout.jpg)  

### Hardware Specifications  

<table>  
    <thead>  
        <tr>  
            <th>Category</th>  
            <th>Specifications</th>  
        </tr>  
    </thead>  
    <tbody align="left">  
        <tr>  
            <th>SOC</th>  
            <th><li>RockChip RK3506J</li></th>  
        </tr>  
        <tr>  
            <th>CPU</th>  
            <th><li>RK3506 Triple-core Cortex-A7 Processor</li></th>  
        </tr>  
        <tr>  
            <th>GPU</th>  
            <th><li>2D Graphic Engine</li><li>Embedded high-performance 2D acceleration hardware</li></th>  
        </tr>  
        <tr>  
            <th>Memory</th>  
            <th><li>512MB DDR3L</li></th>  
        </tr>  
        <tr>  
            <th>Storage</th>  
            <th><li>512MB NAND</li><li>Supports MicroSD card expansion</li></th>  
        </tr>  
        <tr>  
            <th>Networking</th>  
            <th><li>2 × 100M Ethernet</li></th>  
        </tr>  
        <tr>  
            <th>Video Output</th>  
            <th><li>1 x MIPI DSI (2Lane 1.5Gbps)</li></th>  
        </tr>  
        <tr>  
            <th>Audio</th>  
            <th><li>1 × Speaker</li><li>1 × MIC</li></th>  
        </tr>  
        <tr>  
            <th>USB Interfaces</th>  
            <th><li>1 × Type C (PD & Programming only)</li>  
            <li>1 × USB2.0 HOST</li></th>  
        </tr>  
        <tr>  
            <th>40-PIN</th>  
            <th><li>Partially compatible with Raspberry Pi 40-pin for peripheral connectivity</li><li>Supports UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></th>  
        </tr>  
        <tr>  
            <th>Power Supply</th>  
            <th><li>DC IN 12V/1A</li><li>Typec 5V/2A</li></th>  
        </tr>  
        <tr>  
            <th>Buttons</th>  
            <th><li>1x Maskrom Key (enters maskrom flashing mode)</li></th>  
        </tr>  
        <tr>  
            <th>OS</th>  
            <th><li>Officially supported by Rockchip: Buildroot</li></th>  
        </tr>  
        <tr>  
            <th>Dimensions</th>  
            <th><li>92 mm x 62mm</li></th>  
        </tr>  
        <tr>  
            <th>Operating Temperature</th>  
            <th><li>-40℃ ~ 85℃</li></th>  
        </tr>  
    </tbody>  
</table>  

### RK3506J Block Diagram  
<details>  
    <summary>  
      RK3506J Block Diagram  
    </summary>  
        <img  
  src="./img/forge/rk3506j.png"  
  alt="rk3506j block diagram"  
  className="session-details-live-video"/>  
</details>  

### Pin Definitions  

#### 40-PIN Header  
<div className='gpio_style'>  

| GPIO Number |  Function  |   Pin    |  Pin     |  Function  | GPIO Number |  
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: |   
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |  
|     4     |   RM_IO4/SAI0_SDI0/GPIO0_A4_d| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     5     | RM_IO5/SAI0_SDI1/GPIO0_A5_d  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|59|RM_IO31/GPIO1_D3_d |  <div className='green'>7</div>  | <div className='green'>8</div>  |<div className='orange-txt'>UART0_TX</div>RM_IO22/JTAG_TCK_M1/GPIO0_C6_u   |     22      |
||GND|  <div className='black'>9</div>  | <div className='green'>10</div> |<div className='orange-txt'>UART0_RX</div>RM_IO23/JTAG_TMS_M1/GPIO0_C7_u  |     23      |
|58|RM_IO30/GPIO1_D2_d| <div className='green'>11</div>  |<div className='green'>12</div>|RM_IO29/GPIO1_D1_d|57|
| 52 |DSMC_SLV_D2/FLEXBUS0_D7/DSMC_D11/VO_LCDC_D7/GPIO1_C4_d | <div className='green'>13</div>  | <div className='green'>14</div> |DSMC_SLV_D3/FLEXBUS0_D6/DSMC_D12/VO_LCDC_D6/GPIO1_C5_d|53|
|51  |RM_IO28/GPIO1_C3_d | <div className='green'>15</div>  | <div className='green'>16</div> |RM_IO27/GPIO1_C2_d| 50 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |GPIO1_C1_d    |  49 |
| 48 |GPIO1_C0_d| <div className='green'>19</div>  | <div className='green'>20</div> |SARADC_IN2/GPIO4_B2_z| 138  |
| 46 |GPIO1_B6_d| <div className='green'>21</div>  | <div className='green'>22</div> |GPIO1_B7_d | 47  |
| 44 |GPIO1_B4_d| <div className='green'>23</div>  | <div className='green'>24</div> |GPIO1_B5_d | 45 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |RM_IO26/GPIO1_B3_d|     43      |
|  41 |RM_IO24/GPIO1_B1_d|  <div className='green'>27</div>  | <div className='green'>28</div> |RM_IO25/GPIO1_B2_d| 42 |
|40  |GPIO1_B0_d| <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |           |
|38 |GPIO1_A6_d| <div className='green'>31</div>  | <div className='green'>32</div> |GPIO1_A7_d|    39     |
| 37  |GPIO1_A5_d| <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |      |
| 35  |GPIO1_A3_d| <div className='green'>35</div>  | <div className='green'>36</div> |GPIO1_A4_d   |    36      |
|33 |GPIO1_A1_d | <div className='green'>37</div>  | <div className='green'>38</div> |GPIO1_A2_d|     34     |
| |  GND | <div className='black'>39</div>  | <div className='green'>40</div> |GPIO1_A0_d|     32     |

</div>  

#### 14-PIN Header

| Pin  | Assignment   | Description                          | Pin  | Assignment   | Description                          |
|------|--------------|--------------------------------------|------|--------------|--------------------------------------|
| 1    | RS485_A      | RS485 Differential Signal (Positive) | 2    | RS485_B      | RS485 Differential Signal (Negative) |
| 3    | CAN_L        | CAN Bus Differential Low             | 4    | CAN_H        | CAN Bus Differential High            |
| 5    | GND          | System Ground                        | 6    | GND          | System Ground (Redundant Design)     |
| 7    | MICIN_P      | Microphone Input Positive (Differential) | 8    | MICIN_N      | Microphone Input Negative (Differential) |
| 9    | MICIN_P      | Microphone Input Positive (Alternate Channel) | 10   | MICIN_N      | Microphone Input Negative (Alternate Channel) |
| 11   | GND          | Audio Signal Ground                  | 12   | VBAT_RTC     | RTC Battery Power Input              |
| 13   | SPK_P        | Speaker Output Positive (Differential Drive) | 14   | SPK_N        | Speaker Output Negative (Differential Drive) |

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
                <p>For ARM development boards running Linux</p>  
            </div>  
        </div>  
    </a>  
</div>

### Official Image

The ArmSoM team uses buildroot as the official operating system for Forge1. [How to Flash Image](https://docs.armsom.org/getting-start/flash-img)📤

#### Download

The following systems have been tested and verified by ArmSoM official:

Network disk address: 
<a href="/getting-start/cloud-disk" class="btn">
  <span>Google Drive link</span>
</a>

| logo | Description | Download|
|:--------: | :---------: | :--------: |
|buildroot | buildroot for Forge1: <br/> Linux Kernel 6.1, support RT-Thread 4.1, <br/> support bare metal programs, support multi-core heterogeneous AMP, <br/> Preempt-RT/Xenomai real-time patches, <br/> lightweight UI framework LVGL. |[Google Drive link](https://drive.google.com/drive/folders/1ZDwKlNs1zZyEWghbcx9_7h73MmZJS8A1) |

### Hardware Resources 

<div class="cards">
    <a href="https://drive.google.com/drive/folders/1yWlzbQbuLUKCyIFuj4LIlvwslRpoZFig" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Forge1 SCH</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/1yWlzbQbuLUKCyIFuj4LIlvwslRpoZFig" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Forge1 2D</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/1yWlzbQbuLUKCyIFuj4LIlvwslRpoZFig" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Forge1 SMD</h2>
        </div>
    </div>
</a>
</div>

## User Manual  

### Tools Preparation
* ​​Power Supply (Choose either):​​
  * DC IN 12V/1A
  * Type-C 5V/2A
* ​System Installation (Choose either):​​
  * ​​Boot from onboard eMMC:​​
  * USB Type-C data cable (to connect the Forge series device and a PC via the Type-C port for image burning).
* ​Boot from MicroSD/TF card:​​
  * MicroSD/TF card (Class 10 or higher, at least 8GB SDHC) and a card reader.

## Image Flashing

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

## Interface Usage  

If this is your first time using the ArmSoM-Forge1 product, please familiarize yourself with its hardware interfaces to better understand subsequent content.  

| Hardware Interface | [Forge1](./armsom-forge1#hardware-interfaces) |  
|--------------------|-----------------------------------------------|  

### Debug Serial   
Connect the USB-to-TTL serial cable as shown below:  

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)  

| Forge1 Pin       | Connection | Serial Module |  
|------------------|------------|---------------|  
| **GND** (Pin 6)  | →          | GND           |  
| **TX** (Pin 8)   | →          | RX            |  
| **RX** (Pin 10)  | →          | TX            |  

### Ethernet  
1. Connect one end of an Ethernet cable to the Forge1's Ethernet port and the other end to a router. Ensure the network is available.  
2. The system will automatically assign an IP address to the Ethernet interface via DHCP on startup.  
3. To view the IP address in Forge1’s Linux system:  
```bash  
root@armsom:/# ip a  
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000  
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00  
    inet 127.0.0.1/8 scope host lo  
       valid_lft forever preferred_lft forever  
2: can0: <NOARP,ECHO> mtu 16 qdisc noop state DOWN group default qlen 10  
    link/can  
3: eth0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000  
    link/ether 9e:06:ad:d5:e3:91 brd ff:ff:ff:ff:ff:ff  
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000  
    link/ether 7e:09:de:1d:0c:46 brd ff:ff:ff:ff:ff:ff  
    inet 192.168.1.150/24 brd 192.168.1.255 scope global dynamic noprefixroute eth1  
       valid_lft 43173sec preferred_lft 37773sec  
```  

4. Use the `ping` command to verify network connectivity (press `Ctrl+C` to exit):  
```bash  
root@armsom:/# ping www.baidu.com  
PING www.baidu.com (183.2.172.17): 56 data bytes  
64 bytes from 183.2.172.17: seq=0 ttl=52 time=10.838 ms  
...  
^C  
--- www.baidu.com ping statistics ---  
6 packets transmitted, 6 received, 0% packet loss  
```  

### USB Interface  
| Model   | Forge1 |  
|---------|--------|  
| **USB** | 1× Type-C (PD & Programming), 1× USB 2.0 HOST |  

**Testing USB Storage Devices**  
1. Insert a USB flash drive or external HDD into the Forge1’s USB port.  
2. Verify detection with:  
```bash  
root@armsom:/# cat /proc/partitions | grep "sd*"  
major minor  #blocks  name  
   8        0  122880000 sda  
```  
3. Mount the USB drive:  
```bash  
root@armsom:/# sudo mount /dev/sda1 /test/  
```  
4. Check usage and mount point:  
```bash  
root@armsom:/test# df -h | grep "sd"  
/dev/sda        4.7G  4.7G     0  100% /test  
```  

### Audio  
**List Audio Devices**  
```bash  
root@armsom:/# aplay -l  
**** List of PLAYBACK Hardware Devices ****  
card 0: rockchiprk730 [rockchip-rk730], device 0: dailink-multicodecs HiFi-0  
```  

**Recording**  
```bash  
arecord -D hw:0,0 -f S16_LE -t wav -c2 -r 16000 -d 3 t.wav  
```  

**Playback**  
```bash  
aplay t.wav  
```  

### RTC  
• Forge1 includes an **LK8563S RTC IC**.  
• Insert a 2-pin RTC battery to power the RTC.  

**Verify RTC Device**  
```bash  
root@armsom:/# dmesg | grep rtc  
[    6.407133] rtc-hym8563 6-0051: registered as rtc0  
```  

**Sync System Time to RTC**  
```bash  
root@armsom:/# hwclock -r                # Read RTC time  
root@armsom:/# hwclock -w                # Write system time to RTC  
root@armsom:/# poweroff  
```  

**Post-Reconnection Check**  
After reconnecting the RTC battery:  
```bash  
root@armsom:/# hwclock -r  
2023-11-03 10:35:40.461910+00:00  
root@armsom:/# date  
Fri Nov 3 10:36:01 UTC 2023  
```  

### MIPI DSI  
**Maximum Resolution**: 1280x1280@60fps.  

![armsom-forge1-display](/img/forge/armsom-forge1-display.jpg)

### CAN FD  
**List Network Interfaces**  
```bash  
root@armsom:/# ifconfig -a  
can0: <NOARP,MTU=16> ...  
```  

**CAN Configuration**  
```bash  
ip link set can0 down  
ip link set can0 type can bitrate 1000000 dbitrate 3000000 fd on  
ip -details link show can0  
ip link set can0 up  
```  

**CAN FD Testing**  
• **Send Standard Frame**:  
  ```bash  
  cansend can0 123##1DEADBEEF  
  ```  
• **Send Extended Frame**:  
  ```bash  
  cansend can0 00000123##1DEADBEEF  
  ```  
• **Monitor CAN Messages**:  
  ```bash  
  candump can0 &  
  ```  

## Availability  
The **Forge1** will remain in production until at least **May 2035**.  

## Accessories
We designed the official accessory ​​ArmSoM-Sige​​ to help you achieve optimal performance from your computer.

<div class="cards">  
  <a href="./armsom-display-7-hd" class="card-link">  
    <div class="card">  
      <div class="card-image">  
        <img src="./img/accessories/armsom-display-7hd.png" alt="Card Image"/>  
      </div>  
      <div class="card-content">  
        <h2>Display-7-HD</h2>  
        <p>A 7-inch touchscreen display designed for interactive projects such as entertainment systems and information dashboards.</p>  
      </div>  
    </div>  
  </a>  
</div>  

## Purchase Samples
ArmSoM Official Website: [https://www.armsom.org/product-page/forge1](https://www.armsom.org/product-page/forge1)

ArmSoM Official AliExpress Store: [https://aliexpress.com/item/3256807356692995.html](https://aliexpress.com/item/3256807356692995.html) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=895906881225](https://item.taobao.com/item.htm?id=895906881225)

For OEM & ODM, please contact: sales@armsom.org

## What do others say about the Sige7?

- [CNX](https://www.cnx-software.com/2025/03/26/armsom-forge1-industrial-rockchip-rk3506j-sbc/): $23 ArmSoM Forge1 industrial SBC is powered by Rockchip RK3506J SoC
- [itsfoss](https://news.itsfoss.com/armsom-forge1/): ArmSoM's Forge1 Looks Like A Versatile Solution for Embedded and Multimedia Applications
- [electronics-lab](https://www.electronics-lab.com/armsom-forge1-sbc-features-rockchip-rk3506j-soc-with-cortex-a7-m0-cores-for-industrial-and-audio-applications/)

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