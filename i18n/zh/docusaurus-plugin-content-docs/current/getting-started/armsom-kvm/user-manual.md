---
description: ArmSoM-KVM 采用 Rockchip RK3568 的 KVM over IP 工业控制网关设计。ArmSoM-KVM是一款专为工业设备远程监控和控制而设计的IP KVM设备。它可以将生产线机器的工控计算机的视频、鼠标、键盘通过网络连接到远程控制台，实现机器的远程管理。该设备还提供一个用于连接本地控制台的端口，支持机器本地管理。
keywords: [armsom, armsom-kvm, PIKVM, rockchip, RK3568]
sidebar_label: "使用手册"
sidebar_position: 3
---

# 使用手册

ArmSoM-KVM 使用手册，帮助用户了解ArmSoM-KVM的基本使用和需要的准备工作。 


## 入门准备
在开始使用 ArmSoM-KVM 之前，请准备好以下物品

### 工具准备
* ArmSoM-KVM 主板
* 电源: DC IN(12V)
* 系统安装
  * 板载eMMC启动
    * 双公头usb烧录数据线，KVM USB3.0端口连接电脑，写入镜像。

## 烧录方式选择

使用usb3.0 双公头usb烧录
[系统镜像烧录](../../../general-tutorial/flash-img)


## 接口设置

如果你是首次使用 ArmSoM-KVM，请先熟悉下 [外设接口](./introduction)，以便于你更好的理解后续的内容。

### 1000M 以太网口

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-KVM 上的 RJ45 端口插入，网口灯闪烁确认硬件正常连接。


### 调试串口
调试串口的位置在rtc电池旁边，debug口

| ArmSoM-KVM       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND**  | <---> | GND |
| **TX**   | <---> | RX |
| **RX**  | <---> | TX |
