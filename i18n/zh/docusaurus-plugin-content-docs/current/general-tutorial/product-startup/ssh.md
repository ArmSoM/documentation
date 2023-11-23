---
sidebar_label: "SSH访问"
sidebar_position: 5
---

# SSH访问
ArmSoM 官方linux镜像中预集成了SSH以便于远程访问终端，本指南以 ArmSoM-W3 为例，其他主板的操作相似。
## 1. 必要准备

* ArmSoM 可上网产品
* RJ45 网线
* 主机PC
* 路由器/交换机

通过网线将 ArmSoM-W3 连接到与主机同网段的路由器/交换机。

## 2. 查看SSH服务状态

在 ArmSoM-W3 启动后，可通过以下命令查看SSH服务状态：
```
sudo service ssh status
```
如果SSH服务异常或被卸载，可通过以下命令重启或重新安装:
重启服务：

```
service sshd restart
```

重新安装：
```
sudo apt-get update
sudo apt-get install ssh
```

## 3. 查询IP地址

通过命令行查看，可用串口/adb/直接连接hdmi，在终端输入以下命令查看IP地址
```
ip a
```

其中与主机同一个网段的IP地址即是SSH连接时所需要的ip地址，如以下输出中 192.168.10.59 即是我们需要的ip地址:

```
armsom@ArmSoM-W3:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: enP4p65s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 8a:e5:4e:f3:ea:5a brd ff:ff:ff:ff:ff:ff permaddr 2a:ab:ea:32:56:cc
    inet 192.168.10.59/24 brd 192.168.10.255 scope global dynamic noprefixroute enP4p65s0
       valid_lft 85861sec preferred_lft 85861sec

```

### 3.1. 使用 Angryip 找到产品的IP地址

在无屏或远程情况下无法直接操作主板来获取ip地址时，可使用此方法查询ip地址。

首先主机PC需要下载Angryip,然后确保主机PC 和 ArmSoM产品处于同一局域网。

打开Angryip，选择IP 范围，范围在192.168.10.0 - 192.168.10.255(选择主机与主板所在的网段)。 点击开始，如图所示。

![Angryip](/img/general-tutorial/Angryip.png)

Ctrl + F 查找 armsom 关键词，找到IP地址。


## 4. 连接

打开主机终端，通过ping命令查询是否在同一网段：
```
ping ArmSoM产品 的IP地址
```
在连通的情况下ping结果应该是正常的。

* SSH登录ArmSoM-W3

```
ssh name@armsom-w3 的IP地址
例如: ssh armsom@192.168.0.1
```

* 若支持本地域名(Local Domain),则可以使用以下命令，而不用扫描ArmSoM-W3的IP地址。

```
ping armsom-w3.local
ssh armsom@armsom-w3.local
```

正确连接后，终端会切换到 ArmSoM-W3 的远程终端，如下所示：
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

此时就可以操作终端。