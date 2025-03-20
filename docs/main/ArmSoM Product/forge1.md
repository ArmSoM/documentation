---
description: ArmSom-Forge1 adopts the Rockchip RK3506 next-generation high-performance industrial-grade embedded chip, featuring a multi-core heterogeneous design with three Cortex-A7 cores and one Cortex-M0 core, with main frequencies of 1.5GHz and 200MHz respectively. This chip is widely used in industrial control, industrial communication, human-machine interaction, and other fields due to its high integration, low power consumption, high real-time performance, and rich interface resources.
keywords: [armsom, armsom-forge1, maker kit, rockchip, rk3506 product introduction]
sidebar_label: "Forge1"
sidebar_position: 10
slug: /armsom-forge1
image: /img/forge/forge1-bananer.png
---

# Forge1 Product Introduction  
Let's understand Forge1 in 5 minutes.  

## Overview  
The **Forge1** is a high-performance embedded development board powered by **Rockchip RK3506J**, a tri-core Cortex-A7 application processor designed for intelligent voice interaction, audio I/O processing, image output, and multimedia applications. Key features include:  
• **Embedded 2D hardware engine** and display output engine to minimize CPU overhead for graphics rendering.  
• **Rich peripheral interfaces** (SAI, PDM, SPDIF, Audio ADC, USB2 OTG, RMII, CAN, etc.) to reduce hardware complexity and development costs.  
• **Industrial-grade reliability** with an operating temperature range of **-40°C to 85°C**.  

## Hardware Specifications  

### Key Components  
| Category          | Details |  
|-------------------|---------|  
| **SOC**           | Rockchip RK3506J |  
| **CPU**           | Tri-core Cortex-A7 @ 1.5GHz + Cortex-M0 @ 200MHz |  
| **GPU**           | 2D Graphic Engine |  
| **Memory**        | 512MB DDR3L |  
| **Storage**       | 512MB NAND + MicroSD card expansion |  
| **Networking**    | Dual 100M Ethernet ports |  
| **Video Output**  | 1× MIPI DSI (2Lane, 1280×720@60fps) |  
| **Audio**         | 1× Speaker, 1× MIC |  
| **USB**           | 1× Type-C (PD & Programming), 1× USB2.0 HOST |  
| **40-PIN Header** | Raspberry Pi-compatible GPIO (UART/SPI/I2C/PWM/5V/3.3V) |  
| **Power**         | 12V/2A |  
| **Dimensions**    | 92mm × 62mm |  

### Block Diagram  
<details>  
    <summary>RK3506J Block Diagram</summary>  
    <img src="./img/forge1/rk3506j.png" alt="RK3506J Block Diagram"/>  
</details>  

## Development Resources  

### SDK & OS Support  
**GitHub Source Code**: [RK3506 Buildroot SDK](https://github.com/ArmSoM/rk3506-rkr4.2-sdk) (Supports Linux Kernel 6.1).  
**Official OS**: Buildroot Bullseye (validated for industrial use).  

### Hardware Documentation  
• Schematics, DXF files, and pinout details are available for download.  

## User Manual  

### Setup Guide  
1. **Tools Required**:  
   • 12V/2A power supply.  
   • USB Type-C cable (for eMMC flashing) or MicroSD card (≥8GB, Class 10).  
   • Optional: Debug serial port, Ethernet cable.  

2. **Flashing Methods**:  
   • **eMMC Boot**: Use USB Type-C for direct flashing.  
   • **MicroSD Boot**: Write OS image to SD card via reader.  

### Interface Usage  

If this is your first time using the ArmSoM-Forge1 product, please familiarize yourself with its hardware interfaces to better understand subsequent content.  

| Hardware Interface | [Forge1](./armsom-forge1#hardware-interfaces) |  
|--------------------|-----------------------------------------------|  

#### Debug Serial Port  
Connect the USB-to-TTL serial cable as shown below:  

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)  

| Forge1 Pin       | Connection | Serial Module |  
|------------------|------------|---------------|  
| **GND** (Pin 6)  | →          | GND           |  
| **TX** (Pin 8)   | →          | RX            |  
| **RX** (Pin 10)  | →          | TX            |  

#### Ethernet Port  
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

#### USB Interface  
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

---

#### Audio  
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

---

#### RTC  
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

---

#### MIPI DSI  
• **Maximum Resolution**: 1280x1280@60fps.  

---

#### CAN FD  
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

## Purchase Samples
ArmSoM Official Website: [https://www.armsom.org/product-page/forge1](https://www.armsom.org/product-page/forge1)

ArmSoM Official AliExpress Store: [https://aliexpress.com/item/3256807356692995.html](https://aliexpress.com/item/3256807356692995.html) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=895906881225](https://item.taobao.com/item.htm?id=895906881225)

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