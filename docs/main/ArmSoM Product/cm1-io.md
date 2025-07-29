---
description: CM1-IO是 ArmSoM CM1的 IO 板，尺寸为 100x80x29 毫米
keywords: [armsom, armsom-CM1, RK3506  Development Boards, RK3506 Core borad, rockchip]
sidebar_label: "CM1-IO"
sidebar_position: 6
slug: /armsom-cm1-io
image: /img/cm/cm1-io-layout.png
---

# CM1-IO Product Introduction

CM1-IO is the IO board of ArmSoM CM1, with dimensions of 100x70x19mm. The motherboard carries USB interfaces/WIFI/Bluetooth/audio/100Mbps network x2, making it the smallest system board designed specifically for makers, learners, and developers.

## User Manual

Before starting to use CM1-IO, please prepare the following items.

:::tip
The following text uses CM1 Kit to represent CM1+CM1-IO
:::

### Tool preparation
* 5/12v power supply
* system installation
  * Onboard eMMC startup
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

If you are using CM1 Kit for the first time, please familiarize yourself with each product first [hardware interface](./armsom-cm1#硬件接口)

### Debug port


![cm1io-debug](/img/cm/armsom-cm1-debug.png)

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
Under the buildroot system, connect to WiFi using the wpa_cli command-line tool

**Find configuration file**
```bash
root@armsom:/# find / -name "wpa_supplicant.conf"
/etc/dbus-1/system.d/wpa_supplicant.conf
/etc/wpa_supplicant.conf
/run/wpa_supplicant/wpa_supplicant.conf
/userdata/cfg/wpa_supplicant.conf
```

**Change account password**
```bash
cat /userdata/cfg/wpa_supplicant.conf
ctrl_interface=/var/run/wpa_supplicant
ap_scan=1
update_config=1


network={
        ssid="SSID"
        psk="PASSWORD"
        key_mgmt=WPA-PSK
}
```

**Connect to the network**
```bash
wpa_supplicant -B -i wlan0 -c /userdata/cfg/wpa_suppli.conf
Successfully initialized wpa_supplicant
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
root@armsom:/# sudo mount /dev/sda1 /test/
```

4. After mounting, you can use the `df - h` command to view the capacity usage and mounting points of the USB flash drive

```
root@armsom:/test# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /test
```

### audio

![cm1io-sound](/img/cm/armsom-cm1-sound.png)
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


## Purchase Samples

ArmSoM Official Website: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM Official AliExpress Store: [https://aliexpress.com/item/3256807679122184.html](https://aliexpress.com/item/3256807679122184.html) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=842137173767](https://item.taobao.com/item.htm?id=842137173767)

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