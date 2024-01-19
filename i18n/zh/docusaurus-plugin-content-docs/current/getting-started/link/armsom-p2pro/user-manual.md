---
description: ArmSoM-P2pro 采用Rockchip RK3308B-S，它配备了64位四核ARM Cortex-A35处理器，USB、以太网、蓝牙、无线连接和语音检测引擎，并具有丰富的音频接口（如MIC/PDM/SPDIF/I2S），使其非常适合物联网和语音应用程序
keywords: [armsom, armsom-p2pro, maker kit, rockchip, rk3308使用手册]
sidebar_label: "使用手册"
sidebar_position: 3
---

# 使用手册

P2pro 使用手册，帮助用户了解P2pro的基本使用和需要的准备工作。 

当您拿到产品的时候，您需要知道它的型号以及硬件版本，这些信息都可以在板子上的丝印找到，我们会尽可能详细地向您介绍产品的信息。

## 入门准备
在开始使用 ArmSoM-P2pro 之前，请准备好以下物品

### 工具准备
* P2pro 主板
* 电源: USB Type-C
  * 支持 5V/2A
* 系统安装（二选一）
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：
  * 板载eMMC启动
    * USB Type-C数据线，P2pro typec端口连接电脑，写入镜像。

### 可选选项
* Ethernet 线（网线）
  * P2pro 支持以太网上网，最高支持100M。
  * 网线用于将 P2pro 连接到本地网络和互联网。
* 无线WIFI
  * P2pro 支持无线上网功能，支持802.11 a/b/g/n/ac & BT5.0 (AP6256)
* 音频线
   * 可以使用标准 3.5 毫米插孔通过扬声器或耳机播放音频。
* USB-A型转USB-C型数据线

## 烧录方式选择

[系统镜像烧录](../../../general-tutorial/flash-img)


## 接口设置

如果你是首次使用 ArmSoM-P2pro，请先熟悉下 [外设接口](./introduction)，以便于你更好的理解后续的内容。

### 100M 以太网口

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-P2pro 上的 RJ45 端口插入，网口灯闪烁确认硬件正常连接。

手动配置以太网
- 切换root用户

```bash
sudo su
```

- 通过命令 ifconfig 检查以太网是否正常，它会显示网卡 eth0 以及以太网 IP 地址。 此外，使用工具 ping 判断是否连通网络。

```bash
ifconfig
ping www.baidu.com
```

- 如果无法ping通，尝试

```bash
$ sudo dhclient eth0
```

### 调试串口
调试串口的位置在12pin-head的 9，11脚

| P2pro       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 8) | <---> | GND |
| **TX** (pin 9)  | <---> | RX |
| **RX** (pin 11) | <---> | TX |

![armsom-p2pro-debug](/img/link/p2pro/armsom-p2pro-debug.png)

### USB接口
ArmSoM-P2pro 提供一个 USB 2.0 端口。