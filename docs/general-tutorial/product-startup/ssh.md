---
sidebar_label: "SSH access"
sidebar_position: 5
---

# SSH access
SSH is pre-integrated in the official ArmSoM Linux image to facilitate remote access to the terminal. This guide uses ArmSoM-W3 as an example. The operations for other motherboards are similar.
## 1. Necessary preparations

* ArmSoM Internet-enabled products
* RJ45 network cable
* Host PC
* Router/Switch

Connect ArmSoM-W3 to a router/switch on the same network segment as the host through a network cable.

## 2. Check SSH service status

After ArmSoM-W3 starts, you can view the SSH service status through the following command:
```
sudo service ssh status
```
If the SSH service is abnormal or uninstalled, you can restart or reinstall it with the following command:
Restart the service:

```
service sshd restart
```

re-install:
```
sudo apt-get update
sudo apt-get install ssh
```

## 3. Query IP address

To view through the command line, you can use the serial port/adb/ to directly connect to hdmi. Enter the following command in the terminal to view the IP address.
```
ip a
```

The IP address in the same network segment as the host is the IP address required for SSH connection. For example, in the following output, 192.168.10.59 is the IP address we need:

```
armsom@armsom-w3:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
     inet 127.0.0.1/8 scope host lo
        valid_lft forever preferred_lft forever
2: enP4p65s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
     link/ether 8a:e5:4e:f3:ea:5a brd ff:ff:ff:ff:ff:ff permaddr 2a:ab:ea:32:56:cc
     inet 192.168.10.59/24 brd 192.168.10.255 scope global dynamic noprefixroute enP4p65s0
        valid_lft 85861sec preferred_lft 85861sec

```

### 3.1. Use Angryip to find the IP address of the product

When you cannot directly operate the motherboard to obtain the IP address without a screen or remotely, you can use this method to query the IP address.

First, the host PC needs to download Angryip, and then ensure that the host PC and the ArmSoM product are in the same LAN.

Open Angryip and select the IP range, which ranges from 192.168.10.0 - 192.168.10.255 (select the network segment where the host and motherboard are located). Click Start as shown in the picture.

![Angryip](/img/general-tutorial/Angryip.png)

Ctrl + F Search for the armsom keyword and find the IP address.


## 4. Connection

Open the host terminal and check whether they are on the same network segment through the ping command:
```
Ping the IP address of the ArmSoM product
```
When connected, the ping results should be normal.

*SSH login to ArmSoM-W3

```
IP address of ssh name@armsom-w3
For example: ssh armsom@192.168.0.1
```

* If local domain is supported, you can use the following command instead of scanning the IP address of ArmSoM-W3.

```
ping armsom-w3.local
ssh armsom@armsom-w3.local
```

Once properly connected, the terminal switches to the remote terminal of ArmSoM-W3 as shown below:
```
Linux armsom-w3 5.10.160 #1 SMP Wed Nov 8 15:45:13 CST 2023 aarch64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
armsom@armsom-w3:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
     link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
     inet 127.0.0.1/8 scope host lo
        valid_lft forever preferred_lft forever
2: enP4p65s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
     link/ether 8a:e5:4e:f3:ea:5a brd ff:ff:ff:ff:ff:ff permaddr 2a:ab:ea:32:56:cc
     inet 192.168.10.59/24 brd 192.168.10.255 scope global dynamic noprefixroute enP4p65s0
        valid_lft 85861sec preferred_lft 85861sec
```

You can now operate the terminal.