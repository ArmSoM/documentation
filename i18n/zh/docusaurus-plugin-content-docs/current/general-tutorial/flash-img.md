---
sidebar_label: "系统镜像烧录"
sidebar_position: 3
---

# 系统镜像烧录

启动产品需要两个步骤：烧录系统，启动系统

ArmSoM 系列产品的系统镜像包含了多种根文件系统，我们可以根据自己需求选择相应的镜像下载


:::info
系统镜像包括了linux内核，基本的程序等，是运行ArmSoM系列产品必须项， 所以我们需要在运行产品前为产品安装镜像
:::

## 1. 获取系统镜像

访问百度网盘资源介绍页面获取系统镜像: [百度网盘链接](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

### 1.1. 镜像命名规则
产品型号-根文件系统-桌面类型-更新时间

#### 1.1.2. 产品型号
ArmSoM-W3 ：产品型号如 ArmSoM-W3 

#### 1.1.3. 根文件系统
debian-bullseye ： 代表系统使用的根文件系统是debian 11

#### 1.1.4. 桌面类型
xfce4 ：使用xfce4套件的桌面版镜像

CLI	：命令行版，无桌面

#### 1.1.5. 更新日期
更新日期的格式为 yyyymmdd 即 年月日

### 1.2. 举例说明

我们以 ArmSoM-LM7(Development Kit ArmSoM-W3) 的通用镜像为例

armsom-w3-debian-bullseye-xfce4-arm64-20231115

* 产品的适用型号：适合ArmSoM-W3

* 根文件系统：debian11

* 系统类别：xfce4·桌面版

* 更新日期：2023年11月15日

:::tip
1. 官方镜像的默认账号/密码为armsom/armsom。
2. debian系统是使用RK官方提供SDK适配编译的系统，对于有 ISP、GPU、编解码、NPU需求的商业客户更加合适。使用RKDevTool烧录到EMMC，或者使用SDDiskTool烧录到SD卡。
3. Ubuntu，Armbian，Openwrt是ArmSoM 为开源爱好者提供的更多选择。
:::

## 2. Ubuntu，Armbian，Openwrt



## 2. Windows平台烧录镜像

### 2.1. 烧录镜像到eMMC

#### 2.1.1. 工具获取和安装

烧录镜像到eMMC需要使用到 RKDevTool 烧录工具和 RK驱动助手(DriverAssitant)

点击进入链接:[百度网盘链接](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

![baidu-flash-tool](/img/general-tutorial/baidu-flash-tool.jpeg)

##### 2.1.2. 安装DriverAssitant

解压DriverAssitant软件压缩包，双击 DriverInstall.exe 进入驱动安装界面。

点击 **驱动安装** 即可开始安装驱动。如果不确定以前是否安装过旧版驱动，先点击驱动卸载移除旧版本驱动程序，再点击驱动安装。

![install-driver-assitant](/img/general-tutorial/install-driver-assitant.png)

##### 2.1.3. 安装RKDevTool

瑞芯微专用USB烧录工具，Windows平台，可以使用USB接口将系统镜像下载到产品中。

解压压缩包后无需安装即可使用，双击 RKDevTool.exe 进入软件界面。

软件主要有三大部分，分别是下载镜像（可根据地址烧录镜像）、升级固件和高级功能

#### 2.1.4. MASKROM模式烧录镜像

该模式适合产品未烧录系统或烧录的系统损坏无法运行 **（适应一切状况）**

我们打开 RKDevTool 烧录工具，并设置产品进入烧录模式。

![maskroom-flash-tool](/img/general-tutorial/maskroom-flash-tool.png)

```
1. 准备Type-C线，用于镜像烧录
2. 将所有有可能给产品供电的接线都断开，如电源线，USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口，然后打开软件RKDevTool
4. 按住MASKROM按键，然后使用 DC 给产品供电
5. 等待软件提示 发现一个MASKROM设备（如下图所示），即可松开按键
6. 如果不成功，重复2-5步骤。
```

可以点击 firmware 选择要烧录的镜像，如armsom-w3-debian-bullseye-xfce4-arm64-20231115e.img，再点击Upgrade烧录。

:::tip
百度网盘下载的固件需要解压后才能加载，Windows PC需要在管理员权限运行工具才可执行。
:::

![maskroom-flash-tool](/img/general-tutorial/maskroot-flash-update.png)

刷写进度显示在右边，完成后它会提示你：
![rkdevtool-success](/img/tools/rkdevtool-success.png)

#### 2.1.5. Loader模式烧录镜像

该模式适合 系统能够正常运行的产品

我们打开 RKDevTool 烧录工具，并设置产品进入烧录模式。

```
1. 准备Type-C线，用于镜像烧录
2. 将所有有可能给产品供电的接线都断开，如电源线，USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口，然后打开软件RKDevTool
4. 按住Recovery按键，然后使用 DC 给产品供电
5. 等待软件提示 发现一个LOADER设备（如下图所示），即可松开按键
6. 如果不成功，重复2-5步骤。
```

![recovery-flash-tool](/img/general-tutorial/recovery-flash-update.png)

:::tip 烧写失败分析
如果烧写过程中出现Download Boot Fail, 或者烧写过程中出错，如下图所示，通常是由于使用的USB线连接不良、劣质线材，或者电脑USB口驱动能力不足导致的，请更换USB线或者电脑USB端口排查。
:::

:::note Maskrom模式烧录 和 Loader模式烧录有什么区别？
* Maskrom：Flash 在未烧录固件时，芯⽚会引导进⼊ Maskrom 模式，可以进⾏初次固件的烧写；
开发调试过程中若遇到 Loader ⽆法正常启动的情况，也可进⼊ Maskrom 模式烧写固件。
* Loader：原理是在uboot启动期间检测到引脚被按下，Loader 模式下，可以进⾏固件的烧写、升级。
可以通过⼯具单独烧写某⼀个分区镜像⽂件，⽅便调试。
:::


### 2.2. 烧录官方镜像到SD卡

镜像烧录到SD卡需要专用烧录软件和SD卡读卡器

#### 2.2.1 安装SDDiskTool

烧录镜像到eMMC需要使用到烧录工具 SDDiskTool_版本号.exe

点击进入链接:[百度网盘链接](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

![baidu-SDDiskTool](/img/general-tutorial/baidu-sd-disk-tool.png)

解压压缩包后无需安装即可使用，双击 SD_Firmware_Tool.exe 进入软件界面。


#### 2.2.2 烧录镜像

打开烧录SDDiskTool的可执行文件SD_Firmware_Tool.exe并插入SD卡。

首先选择正确的要烧录的SD卡，然后将功能模式选择位 SD Boot ， 再选择要烧录的镜像，最后点击开始创建烧录镜像到SD卡。

![SDDiskTool](/img/general-tutorial/sd-disk-tool.png)

耐心等待SD卡烧录完整，当镜像较大时，烧录的时间会相应变长。

:::tip 烧录SD卡镜像报错
点击 Create 会有一定概率报错说无法烧录，可以关闭错误窗口再进行开始创建，如果还不行尝试格式化SD卡。
:::

### 2.3. 烧录armbian系统到SD卡

该方法适用于烧录系统到SD卡， Windows、MacOS、Linux x64 操作系统都可用。


1. 从 [balena 官网](https://etcher.balena.io/) 下载 balenaEtcher ，选择指定主机系统下载。该处Linux的程序格式是 AppImage，某些用户可能需要通过chmod命令修改成**_可执行_**运行即可。

2. 将要烧录的 MicroSD卡插入 MicroSD读卡器

3. 打开 etcher 窗口，首先选择 Flash from file，找到您镜像下载位置，双击选择。
![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-from-file.png)


4. 然后点击 Select target，选择自己要烧录的 MicroSD卡。
5. 点击 Flash, 烧录等待成功，这里需要一段时间。
6. 烧录成功，会显示如图所示
![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-success.png)

