---
sidebar_label: "1. 百度网盘资源介绍"
sidebar_position: 2
slug: /getting-start/cloud-disk
---

# 1. 百度网盘资源介绍

ArmSoM 发布的所有产品软件资源都会同步到百度网盘供用户下载，ArmSoM 系列产品的配套资源也保存在百度网盘中。

网盘中有丰富的软硬件资源，包括用户手册、配套镜像、各种开发文档和开发软件、镜像等资源。

## 1.1. 下载地址

点击进入链接: [百度网盘链接](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms )

![ArmSoM baidu-cloud-all](/img/general-tutorial/baidu-cloud-all.png)

百度网盘资源主要包括以下几部分：

## 1.2. 百度网盘资源

### 1.2.0. 硬件资料
分别存放了 ArmSoM 各个型号的原理图、尺寸图、开发套件的硬件设计源文件等，并提供了主要器件的芯片手册。

### 1.2.1. 软件资料
存放了 ArmSoM 产品配套的 Linux 系统镜像，分别提供了Ubuntu、Debian和Armbian，安卓系统镜像。

### 镜像命名规则
产品型号-根文件系统-桌面类型-更新时间

#### 产品型号
ArmSoM-W3 ：产品型号如 ArmSoM-W3 

#### 根文件系统
debian-bullseye ： 代表系统使用的根文件系统是debian 11

#### 桌面类型
xfce4 ：使用xfce4套件的桌面版镜像

CLI	：命令行版，无桌面

#### 更新日期
更新日期的格式为 yyyymmdd 即 年月日

#### 举例说明

我们以 ArmSoM-LM7(W3) 的通用镜像为例

armsom-w3-debian-bullseye-xfce4-arm64-20231115

* 产品的适用型号：适合ArmSoM-W3

* 根文件系统：debian11

* 系统类别：xfce4·桌面版

* 更新日期：2023年11月15日

### 1.2.3. 开发工具

存放产品使用或开发过程中可能使用到的工具和软件包，例如串口驱动、烧录工具等，具体查看文件夹中的说明文件。

**Linux_Upgrade_Tool**： Linux 下开发的⼯具，⽀持固件的升级

**FactoryTool**：量产升级⼯具，⽀持 USB ⼀拖多烧录

**RKDevTool 烧写工具**：瑞芯微开发⼯具，分⽴升级固件及整个 update 升级固件⼯具
 
**RK驱动助手**：瑞芯微驱动程序，Windows版本

**SD_Disk_Tool**：RK格式镜像SD卡烧录工具
 
**SDCardFormatter**：SD卡格式化工具
 
**串口驱动**：CH340驱动程序，Windows版本
 
**串口终端工具**：MobaXterm_Portable_v23.4

**写号工具**：Rockchip写号工具，SN，MAC地址等

**IP扫描工具**：查询ip地址


### 2.4. 板卡用前必读

主要包含产品使用前的一些注意事项

:::info
本文介绍的网盘资料会实时更新，具体内容以网盘中的实际内容为准。
:::