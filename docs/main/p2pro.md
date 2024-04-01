---
description: The ArmSoM-P2pro is powered by the Rockchip RK3308B-S, which comes with a 64-bit quad-core ARM Cortex-A35 processor, USB, Ethernet, Bluetooth, wireless connectivity and a voice detection engine.With rich audio interfaces (such as MIC/PDM/SPDIF/I2S),RK3308 is ideal product for IoT and voice applications. 
keywords: [armsom, armsom-p2pro, rockchip, open source router，open source hardware]
sidebar_label: "P2pro"
sidebar_position: 6
slug: /armsom-p2pro
---

# Product Introduction

Let's get to know the P2pro in 5 minutes.

## Overview

The ArmSoM-P2pro is powered by the Rockchip RK3308B-S, which comes with a 64-bit quad-core ARM Cortex-A35 processor, USB, Ethernet, Bluetooth, wireless connectivity and a voice detection engine.With rich audio interfaces (such as MIC/PDM/SPDIF/I2S),RK3308 is ideal product for IoT and voice applications. The ArmSoM-p2pro uses 512MB DDR3 RAM and uses eMMC (optional) or SD card as the storage of operating system.

![ArmSoM-P2pro](/img/link/p2pro.jpg)

### Key Parameters

- SoC: Rockchip RK3308
- CPU: Quad-core ARM Cortex-A35@ 1.2GHz, 28nm
- RAM: 512MB DDR3
- Flash: 8GB eMMC, optional
- WiFi&Bluetooth: 802.11 a/b/g/n/ac & BT5.0 (AP6256)
- Operating voltage: Wide range input voltage, 5V (voltage tolerance ±5%)  
- Operating temperature: 0°C ~ 70°C
- Operating system: 
  - Officially supported by Rockchip: Debian11, Buildroot
  - Third party support: istoreos (openwrt)
- Weight: 
- Size: 52.5mm × 65mm  

## Real-Pictures

![armsom-p2pro-layout](/img/link/armsom-p2pro-layout.png)  

:::tip
The PoE module and eMMC module of P2pro are not equipped by default. They are optional choices.
:::

### Hardware Specifications  

|         Model         |                        ArmSoM-p2 pro                         |
| :-------------------: | :----------------------------------------------------------: |
|          SoC          |                      RockChip RK3308B-S                      |
|          CPU          |               Quad-core ARM Cortex-A35@1.3GHz                |
|          RAM          |                      256MB/512MB, DDR3                       |
|         Flash         |      8GB, eMMC optional. Support MicroSD card expansion      |
|      Networking       | 1x 100Mbit/s Ethernet(PoE optional),802.11 a/b/g/n/ac & BT5.0 (AP6256) |
|          USB          |                   1x USB 2.0,1x USB Type-C                   |
|      Audio Input      |        8x MIC(40PIN Header),1x PDM/I2S(40PIN Header)         |
|     Audio Output      | 2x Line out(40PIN Header),1x SPDIF out(40PIN Header),1x Audio Jack |
|   Other Interfaces    | 1x SPI/UART(12PIN Header),1x I2S(40PIN Header;8channel,SDI=4CH,SDO=4CH),1x I2C(12PIN Header),1x UART(12PIN Header),2x PWM(12PIN Header),1x ADC(40PIN Header) |
|        Buttons        |              1x Reset Button,1x Recovery Button              |
|          LED          |                         1x LED(RGB)                          |
|     Power Supply      |                      USB Type-C(5V/2A)                       |
|          OS           |                 Debian11, Buildroot,istoreos                 |
|      Dimensions       |                        65mm x 52.5mm                         |
|        Weight         |                             30g                              |
| Operating Temperature |                          0°C ~ 70°C                          |

## Easy to buy sample
ArmSoM online shop: [https://www.armsom.org/product-page/p2pro](https://www.armsom.org/product-page/p2pro)
 
ArmSoM Aliexpress online shop: [https://www.aliexpress.com/item/3256805779421715.html](https://www.aliexpress.com/item/3256805779421715.html) 

ArmSoM Taobao shop: [https://item.taobao.com/item.htm?id=735000017740](https://item.taobao.com/item.htm?id=735000017740)

OEM&ODM, please contact: sales@armsom.org

## User Manual

The P2pro user manual helps users understand the basic usage and preparation work needed for  P2pro. 

Its model and hardware version can be found printed on the board when you got P2pro.

This article gives an overview of the product information to you in as much detail as possible.

### Getting Started

Before starting to use ArmSoM-P2pro, please prepare the following items

#### Tool Preparation

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

#### Optional Options

* Ethernet cable
  * P2pro supports Ethernet access, up to 100M.
  * The network cable is used to connect P2pro to the local network and the Internet.
* Wireless WIFI
  * P2pro supports wireless Internet access, and supports 802.11 a/b/g/n/ac & BT5.0 (AP6256)
* Audio cable
  * You can play audio through speakers or headphones using a standard 3.5 mm jack.
* USB-A to USB-C data cable

### Image Flashing 

[Flash System Image](../general-tutorial/flash-img)


### Interface Setup 

If this is your first time using the ArmSoM-P2pro, please familiarize yourself with the [Peripheral Interfaces](#Real-Pictures) first to better understand the following.

#### 100M Ethernet  

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

#### Debug Serial Port   

The debug serial port location is pin 9 and 11 of the 12-pin header

| P2pro           | Connection | Serial Module |
| --------------- | ---------- | ------------- |
| **GND** (pin 8) | <--->      | GND           |
| **TX** (pin 9)  | <--->      | RX            |
| **RX** (pin 11) | <--->      | TX            |

![armsom-p2pro-debug](/img/link/armsom-p2pro-debug.png)  

#### USB Interface  

ArmSoM-P2pro provides a USB 2.0 port.

## System Image

ArmSoM team uses Debian bullseye as the official operating system.

### Official Image

The following systems have been tested and verified by ArmSoM official:

Network disk address: [Google Drive link](https://drive.google.com/drive/folders/1aCoC6-5zoMaNBGwwgr_pYIs219aFijFM) 

**debain bullseye**  

Firmware location: 3. Linux image/debian/ArmSoM-P2pro  

**istoreos**  

Firmware location: 3. Linux image/openwrt/ArmSoM-P2pro  


### Third Party System  

#### armbian  

![armbian-logo](/img/armbian-logo.webp)

We are working on adapting armbian systems！Coming soon...

## Source Code

[ArmSoM-P2pro BSP](https://github.com/ArmSoM/armsom-p2pro-bsp)

## Hardware Resources

### Schematic

[ArmSoM-p2pro v1.1 Schematic pdf](https://drive.google.com/drive/folders/1-PiEzL9dguSznAxjfnkexjCKf08A07Sc)

### 2D CAD Drawing 

[ArmSoM-p2pro v1.1 Bottom&Top](https://drive.google.com/drive/folders/1rdJszKp6YXAMPEHMod3zUpfXJPYdX7yp)

### Component diagram

[ArmSoM-p2pro v1.1 Component diagram](https://drive.google.com/drive/folders/1dFL5A4Y_AIQvg8WBvP8Y9yPGmMEp9eRJ) 

### datasheet

[ArmSoM-p2pro v1.1 datasheet](https://drive.google.com/drive/folders/1tykssd5rnPnps8AoJ0eVFfM6lm8U7qCe)  

:::tip Version Change History
v1.0 is an internal version (fail to disclose now)  
:::

### Hardware Pin Definition   

#### 40-pin Socket   

<div className='gpio_style'>   


| GPIO number |               Function               |               Pin               |               Pin               |            Function             | GPIO number |
| :---------: | :----------------------------------: | :-----------------------------: | :-----------------------------: | :-----------------------------: | :---------: |
|             |                +3.3V                 |  <div className='red'>1</div>   |  <div className='red'>2</div>   |              +5.0V              |             |
|             |             ADC_KEY_IN1              | <div className='green'>3</div>  |  <div className='red'>4</div>   |              +5.0V              |             |
|     69      |       GPIO2_A5 / I2S0_SCLK_TX        | <div className='green'>5</div>  | <div className='black'>6</div>  |       SPDIF_TX / GPIO0_C1       |     17      |
|     70      |  I2S0_SCLK_RX / GPIO2_A6 / PDM_CLK   | <div className='green'>7</div>  | <div className='green'>8</div>  |     I2S0_LRCK_TX / GPIO2_A7     |     71      |
|     68      | I2S0_8CH_MCLK / GPIO2_A4 / I2S0_MCLK | <div className='black'>9</div>  | <div className='green'>10</div> |     I2S0_LRCK_RX / GPIO2_B0     |     72      |
|     73      |         GPIO2_B1 / I2S0_SDO0         | <div className='green'>11</div> | <div className='green'>12</div> | PDM_SDI0 / GPIO2_B5 / I2S0_SDI0 |     77      |
|     74      |         GPIO2_B2 / I2S0_SDO1         | <div className='green'>13</div> | <div className='black'>14</div> | PDM_SDI1 / GPIO2_B6 /I2S0_SDI1  |     78      |
|     75      |         GPIO2_B3 / I2S0_SDO2         | <div className='green'>15</div> | <div className='green'>16</div> | PDM_SDI2 / GPIO2_B7 / I2S0_SDI2 |     79      |
|     76      |         GPIO2_B4 / I2S0_SDO3         | <div className='green'>17</div> | <div className='green'>18</div> | GPIO2_C0 / PDM_SDI3 / I2S0_SDI3 |     80      |
|             |                 GND                  | <div className='green'>19</div> | <div className='black'>20</div> |               GND               |             |
|             |              LINEOUT_L               | <div className='green'>21</div> | <div className='green'>22</div> |            LINEOUT_R            |             |
|             |               MICBIAS1               | <div className='green'>23</div> | <div className='green'>24</div> |            MICBIAS2             |             |
|             |                MICP1                 | <div className='green'>25</div> | <div className='green'>26</div> |              MICN1              |             |
|             |                MICP2                 | <div className='green'>27</div> | <div className='green'>28</div> |              MICN2              |             |
|             |                MICP3                 | <div className='green'>29</div> | <div className='green'>30</div> |              MICN3              |             |
|             |                MICP4                 | <div className='green'>31</div> | <div className='green'>32</div> |              MICN4              |             |
|             |                MICP5                 | <div className='green'>33</div> | <div className='green'>34</div> |              MICN5              |             |
|             |                MICP6                 | <div className='green'>35</div> | <div className='green'>36</div> |              MICN6              |             |
|             |                MICP7                 | <div className='green'>37</div> | <div className='green'>38</div> |              MICN7              |             |
|             |                MICP8                 | <div className='green'>39</div> | <div className='green'>40</div> |              MICN8              |             |

</div>  

#### 12 PIN GPIO   

<div className='gpio_style'>   


| GPIO number |                           Function                           |               Pin               |               Pin               |          Function          | GPIO number |
| :---------: | :----------------------------------------------------------: | :-----------------------------: | :-----------------------------: | :------------------------: | :---------: |
|     65      |                UART0_TX / GPIO2_A1 / SPI0_TX                 | <div className='green'>1</div>  | <div className='green'>2</div>  |    I2C1_SDA / GPIO0_B3     |     11      |
|     64      |                UART0_RX / GPIO2_A0 / SPI0_RX                 | <div className='green'>3</div>  | <div className='green'>4</div>  |    I2C1_SCL / GPIO0_B4     |     12      |
|     56      |           SPI2_CS / I2C0_SCL / GPIO1_D1 / UART1_TX           | <div className='green'>5</div>  |  <div className='red'>6</div>   |        VCC_IO +3.3V        |     17      |
|     57      |          SPI2_CLK / I2C0_SDA / GPIO1_D0 / UART1_TX           | <div className='green'>7</div>  | <div className='black'>8</div>  |            GND             |             |
|     55      | JTAG_TMS / <div className='orange-txt'>UART2_TX_M0</div> / GPIO1_C7 / SPI2_TX | <div className='green'>9</div>  | <div className='green'>10</div> | PWM2 / GPIO0_B7 / I2C3_SDA |     15      |
|     54      | JTAG_TCK / <div className='orange-txt'>UART2_RX_M0</div> / GPIO1_C6 / SPI2_RX | <div className='green'>11</div> | <div className='green'>12</div> |  PWM3 / GPIO0_C0 / IR_RX   |     16      |
</div>   
