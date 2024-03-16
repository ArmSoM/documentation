---
description: The ArmSoM-P2pro is powered by the Rockchip RK3308B-S, which comes with a 64-bit quad-core ARM Cortex-A35 processor, USB, Ethernet, Bluetooth, wireless connectivity and a voice detection engine.With rich audio interfaces (such as MIC/PDM/SPDIF/I2S),RK3308 is ideal product for IoT and voice applications. 
keywords: [armsom, armsom-p2pro, rockchip, rk3308 User Manual]
sidebar_label: "User Manual"
sidebar_position: 3
---

# User Manual

The P2pro user manual helps users understand the basic usage and preparation work needed for  P2pro. 

Its model and hardware version can be found printed on the board when you got P2pro.

This article gives an overview of the product information to you in as much detail as possible.

## Getting Started

Before starting to use ArmSoM-P2pro, please prepare the following items

### Tool Preparation

* P2pro main board
* Power supply: USB Type-C
  * Support 5V/2A
* System Installation (choose one) 
  * MicroSD card/TF card boot
    * MicroSD card/TF card, Class 10 or above, at least 8GB SDHC and card reader
    * The following are high-speed TF cards tested and verified by the ArmSoM team
      * SanDisk 32GB TF (MicroSD) (Developer Recommended)
      * SanDisk 32GB TF (MicroSD) Driving Recorder & Security Surveillance Dedicated Storage Card (Long Term Running Recommended)
      * Sandisk TF 8G Class10 microSD
      * Sandisk TF 128G Class10 microSD XC TF 128G 48MB/S:
  * Onboard eMMC boot  
    * USB Type-C data cable, P2pro typec port connected to computer, write image.

### Optional Options

* Ethernet cable
  * P2pro supports Ethernet access, up to 100M.
  * The network cable is used to connect P2pro to the local network and the Internet.
* Wireless WIFI
  * P2pro supports wireless Internet access, and supports 802.11 a/b/g/n/ac & BT5.0 (AP6256)
* Audio cable
  * You can play audio through speakers or headphones using a standard 3.5 mm jack.
* USB-A to USB-C data cable

## Image Flashing 

[Flash System Image](../../../general-tutorial/flash-img)


## Interface Setup 

If this is your first time using the ArmSoM-P2pro, please familiarize yourself with the [Peripheral Interfaces](./introduction) first to better understand the following.

### 100M Ethernet  

If you are using wired Ethernet access, please insert the network cable into the RJ45 port on ArmSoM-P2pro, and the network port light flashes,indicating hardware connected properly.  

Manually configure Ethernet

- Switch to root user  

```bash 
sudo su
```

- Check if Ethernet is working properly with the ifconfig command, and it will display the network card eth0 and Ethernet IP address. In addition, use the ping tool to determine if the network is connected.

```bash
ifconfig
ping www.baidu.com  
```

- If unable to ping, please try

```bash 
$ sudo dhclient eth0
```

### Debug Serial Port   

The debug serial port location is pin 9 and 11 of the 12-pin header

| P2pro           | Connection | Serial Module |
| --------------- | ---------- | ------------- |
| **GND** (pin 8) | <--->      | GND           |
| **TX** (pin 9)  | <--->      | RX            |
| **RX** (pin 11) | <--->      | TX            |

![armsom-p2pro-debug](/img/link/p2pro/armsom-p2pro-debug.png)  

### USB Interface  

ArmSoM-P2pro provides a USB 2.0 port.
