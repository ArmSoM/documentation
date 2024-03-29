---
description: ArmSoM-KVM 采用 Rockchip RK3568 的 KVM over IP 工业控制网关设计。ArmSoM-KVM是一款专为工业设备远程监控和控制而设计的IP KVM设备。它可以将生产线机器的工控计算机的视频、鼠标、键盘通过网络连接到远程控制台，实现机器的远程管理。该设备还提供一个用于连接本地控制台的端口，支持机器本地管理。
keywords: [armsom, armsom-kvm, PIKVM, rockchip, RK3568]
sidebar_label: "KVM"
sidebar_position: 6
---

# 产品简介
让我们在 5 分钟内了解 ArmSoM-KVM。

## 简介
ArmSoM-KVM 采用 Rockchip RK3568 的 KVM over IP 工业控制网关设计，是一款专为工业设备远程监控和控制而设计的IP KVM设备。它可以将生产线机器的工控计算机的视频、鼠标、键盘通过网络连接到远程控制台，实现机器的远程管理。该设备还提供一个用于连接本地控制台的端口，支持机器本地管理。

为了提高连接可用性，ArmSoM-KVM使用双网络端口来确保系统的有效使用。ArmSoM-KVM还提供可选的无线接入，并支持最新的Wi-Fi 6通信协议。

ArmSoM-KVM支持多种视频接口规格，包括VGA、HDMI、DVI、DP和USB以及传统的PS/2鼠标和键盘接口，可以轻松连接各类工作站和工控机，减少对各种外设的需求协议转换附件和连接电缆，降低安装和维护的复杂性。使站点更加干净，有助于提高系统的整体稳定性。

ArmSoM-KVM 提供两个RS-232 和两个RS-485 串行通信接口。在接口通信协议的支持下，您可以通过连接RS485/RS232串口的设备灵活地控制更多的外部设备。另外，iKVM还提供4个数字输入和1个数字输出接口，可用于访问产品机器的三色灯电路，同时获取机器的状态信息；还提供访问权限控制（互锁）按钮界面，支持启用或禁用时的近端和远程控制权限。

:::tip 应用方向
- 智能制造：智能装备、智能制造、智能良率
- 智慧能源：数据资产管理（DAM）、设备健康管理（EHM）、运行安全管理
:::

## 关键参数

- 紧凑轻巧的设计，节省空间；
- 支持多种视频接口规格，包括VGA、HDMI、DVI、DP、USB以及传统PS/2键鼠接口，兼容机器的各种接口；
- 强大的视频编解码能力，支持动态码率调整，增强fps（每秒帧数），提供高质量的视频显示，视频传输更流畅；
- 内置独立计算模块，可以在边缘承载一些轻量级计算，如边缘检测、故障识别等，拓展AI智能算法的应用；
- 通用应用处理器，可灵活配备其他应用；
- 高可靠性设计，支持DDR和CPU Cache全链路ECC；
- 提供高速RS-232接口和RS-485接口；
- 本地控制端支持USB键盘、鼠标操作；
- 两个内置 10/100/1000 Mbps 网络适配器提供 LAN 冗余或双 IP 操作
- 支持多平台服务器环境：Windows、Mac、Sun、Linux、VT100串口设备

## 实物图
![armsom-kvm-interface](/img/link/armsom-kvm-interface.jpg)

:::tip
视频支持HDMI、VGA、DP和DVI，支持4个扩展板
![armsom-kvm-video-interface](/img/link/armsom-kvm-video-interface.png)
:::

### 硬件规格

|Model|ArmSoM-KVM|
| :--------: | :----------:|
|SOC	|Rockchip RK3568 Quad-core ARM Cortex-A55 CPU 2GHz |
|CPU	|Mali-G52 1-Core-2EE OpenGL ES3.2 Vu1kn 1.1 OpenCL 2.0 |
|RAM	|2G DDR4|
|FLash|16G eMMC flash|
|KVM Port	|1*VIDEO (HDMI/VGA/DVI/DP) 1*USB3.0 TypeA|
|Local controller Port|1*VIDEO (HDMI/VGA/DVI/DP) 2*USB2.0 Type A 2*PS/2 |
|network|2*giga RJ45 port|
|serial port|2 * RS232, RS485|
|Virtual Media|1*USB3.0 Type A|
|Digital IO port |Digital IO input*4 digital IO output*1|
|control	|1*PS/2|
|电源 |1*DC slot|
|Mouse/keyboard|USB,PS/2|
|操作系统 |Debian10|
|大小 |16.00 x 12.50 x 3.15 cm|
|重量 |600g|
|工作温度	| 0℃ ~ 70℃|

### 接口拓扑
![armsom-kvm_5](/img/link/armsom-kvm_5.png)

### ArmSoM-KVM产品

ArmSoM 与![ikasinfo](https://www.ikasinfo.com/)紧密合作，为客户提供整体解决方案。IKASinfo是一家总部位于重庆的国家高新技术企业，致力于推动制造业迈向工业4.0。IKAS在国内外各大城市设有分支机构，研发出的前沿技术，包括基于“ROPN+AI”技术的智能决策算法，已赋能半导体行业，并逐步应用于其他领域。

![armsom-kvm_1](/img/link/armsom-kvm_1.jpg)

### ArmSoM-KVM整体解决方案

![armsom-kvm_5](/img/link/armsom-kvm_2.png)



## 系统镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。

### 官方镜像


以下系统已由ArmSoM官方测试验证：

网盘地址：[百度网盘链接](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

**debain bullseye**

固件位置：3. Linux镜像/debian/ArmSoM-KVM