--- 
keywords: [armsom, armsom-aim, som, maker kit, Rockchip]
sidebar_label: "AIM系列使用手册"
sidebar_position: 15
slug: /aim-family-started
---

# AIM 使用手册

AIM 使用手册，帮助用户了解AIM开发套件的基本使用和需要的准备工作，开始使用你的AI Module🚀

## 入门准备

在开始使用AIM开发套件之前，请准备好以下物品

### 工具准备
* 电源
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在AIM开发套件上写入镜像，您需要Type-C数据线连接AIM开发套件和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：

您可以将AIM开发套件设置为带有桌面的交互式计算机，也可以将其设置为仅可通过网络访问的无头计算机。要将AIM开发套件设置为Headless计算机，您在初次安装操作系统时配置主机名、用户帐户、网络连接和 SSH 。如果您想直接使用 AIM开发套件，则需要以下附加配件：

**可选选项**
* 键盘 & 鼠标
* HDMI显示器和HDMI线
* DP显示器和DP线
* Ethernet 线（网线）
* 摄像头模块
  * 推荐使用 [camera-module1](./armsom-camera-module1) 模组。
* LCD显示屏
  * 推荐使用 [Display 10 HD](./armsom-display-10-hd)。

### 电源

下表显示了为AIM开发套件供电所需的电源规格。您可以使用任何提供正确电源模式的高质量电源。

| 型号       | 推荐电源（电压/电流）  | 供电模式
| --------- | ----- | --- |
| AIM7 + AIM-IO | 5V/3A, 9V/2A, 12V/2A, 15V/2A |  DC适配器，2.5mm|
| AIM5 + AIM-IO | 5V/3A, 9V/2A, 12V/2A, 15V/2A |  DC适配器，2.5mm|

## 系统镜像烧录

AIM开发套件支持多种系统镜像，我们可以根据自己需求选择相应的镜像下载

:::info
系统镜像包括了linux内核，基本的程序等，是运行AIM开发套件必须项，所以我们需要在运行产品前为产品安装镜像
:::

### 1. 获取系统镜像

访问百度网盘资源介绍页面获取系统镜像: [百度网盘链接](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms)

:::tip
1. 官方镜像的默认账号/密码为armsom/armsom，linaro/linaro，root/1234。
2. Debian系统是使用RK官方提供SDK适配编译的系统，对于有 ISP、GPU、编解码、NPU需求的用户更加合适。使用RKDevTool烧录到eMMC，或者使用SDDiskTool烧录到SD卡。
3. Ubuntu，Armbian，Openwrt是ArmSoM为开源爱好者提供的更多选择。
:::

### 2. 烧录Ubuntu，Armbian，Openwrt系统

#### 2.1. 读卡器烧录到microSD

**通过 Etcher 刷入操作系统镜像到 microSD**

该方法适用于烧录系统到SD卡，Windows、MacOS、Linux x64 操作系统都可用。

:::tip 准备
    1. 一个 microSD 卡
    2. 一个 SD 卡读卡器
    3. 下载对应产品的 Ubuntu / Armbian / Openwrt系统镜像
    4. 把 SD 卡插入 SD 读卡器, 然后把 SD 读卡器插入电脑的 USB 接口
:::

**通过 Etcher 刷入操作系统镜像到 microSD**

1. 从 [balena 官网](https://etcher.balena.io/) 下载 balenaEtcher ，选择指定主机系统下载，该处Linux的程序格式是 AppImage。

2. 将要烧录的 MicroSD卡插入 MicroSD读卡器

3. 打开 etcher 窗口，首先选择 Flash from file，找到您镜像下载位置，双击选择。

![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-from-file.png)

4. 然后点击 Select target，选择自己要烧录的 MicroSD卡。
5. 点击 Flash, 烧录等待成功，这里需要一段时间。
6. 烧录成功，会显示如图所示

![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-success.png)

:::tip 烧录失败
    1. windows烧录镜像需要"以管理员身份运行"，linux某些用户可能需要通过chmod命令修改成_可执行_运行。
    2. 如果刷写操作系统镜像错误, 请再试一次。
:::

**通过 Win32DiskImager 刷入操作系统镜像到 microSD**

1. [下载](https://win32diskimager.org/)刷写工具 Win32DiskImager
2. 打开 Win32DiskImager
3. 点击文件夹图标按钮然后选择要刷写的镜像
4. 完成上述操作后，单击 Write 按钮开始刷写镜像，然后等待写入镜像完成。

#### 2.2. USB线烧录到eMMC (windows)

##### 2.2.1. 工具获取和安装

烧录镜像到eMMC需要使用到 RKDevTool 烧录工具和 RK驱动助手(DriverAssitant)

点击进入链接:[百度网盘链接](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms)

![baidu-flash-tool](/img/general-tutorial/baidu-flash-tool.jpeg)

###### 2.2.2. 安装DriverAssitant

解压DriverAssitant软件压缩包，双击 DriverInstall.exe 进入驱动安装界面。

点击 **驱动安装** 即可开始安装驱动。如果不确定以前是否安装过旧版驱动，先点击驱动卸载移除旧版本驱动程序，再点击驱动安装。

![install-driver-assitant](/img/general-tutorial/install-driver-assitant.png)

###### 2.2.3. 安装RKDevTool

瑞芯微专用USB烧录工具，Windows平台，可以使用USB接口将系统镜像下载到产品中。

解压压缩包后无需安装即可使用，双击 RKDevTool.exe 进入软件界面。

软件主要有三大部分，分别是下载镜像（可根据地址烧录镜像）、升级固件和高级功能

##### 2.1.4. MASKROM/Loader模式烧录镜像

该模式适合产品未烧录系统或烧录的系统损坏无法运行 **（适应一切状况）**

我们打开 RKDevTool 烧录工具，并设置产品进入烧录模式。

**进入Loader模式**
```
1. 准备Type-C线，用于镜像烧录
2. 将所有有可能给产品供电的接线都断开，如USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口，然后打开软件RKDevTool
4. 短接12pin 上的10（FC REC），9(GND)然后使用 DC 给产品供电
5. 等待软件提示 发现一个LOADER设备（如下图所示），即可松开按键
6. 如果不成功，重复2-5步骤。
```

**进入MASKROM模式**
```
1. 准备Type-C线，用于镜像烧录
2. 将所有有可能给产品供电的接线都断开，如USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口，然后打开软件RKDevTool
4. 短接核心板上的焊点，然后使用 DC 给产品供电
5. 等待软件提示 发现一个LOADER设备（如下图所示），即可松开按键
6. 如果不成功，重复2-5步骤。
```

![aim7-maskrom](/img/aim/aim7-maskrom.png)

开始烧录系统

![rkdevtool-install-emmc](/img/general-tutorial/rkdevtool-install-emmc.png)

1. 选择Download Image项
2. 确认板子已经进入Maskrom/Loader模式
3. 点击空白单元格选择待使用的 MiniLoaderAll 和 Image 文件，对应的 MiniLoaderAll 和 Image 存放在百度网盘。
4. 在 Storage 选项中选择目标介质EMMC，并选择 强制按地址写 后点击 执行
5. 等待写入完成，随后设备将自动重启，如上图右侧 Download image OK

### 3. 烧录Debian系统

#### 3.1. 读卡器烧录到microSD
##### 安装SDDiskTool

烧录镜像到eMMC需要使用到烧录工具 SDDiskTool_版本号.exe

点击进入链接:[百度网盘链接](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms)

![baidu-SDDiskTool](/img/general-tutorial/baidu-sd-disk-tool.png)

解压压缩包后无需安装即可使用，双击 SD_Firmware_Tool.exe 进入软件界面。


##### 烧录镜像

打开烧录SDDiskTool的可执行文件SD_Firmware_Tool.exe并插入SD卡。

首先选择正确的要烧录的SD卡，然后将功能模式选择位 SD Boot ， 再选择要烧录的镜像，最后点击开始创建烧录镜像到SD卡。

![SDDiskTool](/img/general-tutorial/sd-disk-tool.png)

耐心等待SD卡烧录完整，当镜像较大时，烧录的时间会相应变长。

:::tip 提示
1. 点击 Create 会有一定概率报错说无法烧录，可以关闭错误窗口再进行开始创建，如果还不行尝试格式化SD卡。
2. 百度网盘下载的固件需要解压后才能加载，Windows PC需要在管理员权限运行工具才可执行。
:::


#### 3.2. USB线烧录到eMMC

我们打开 RKDevTool 烧录工具，并设置产品进入烧录模式。

```
1. 准备Type-C线，用于镜像烧录
2. 将所有有可能给产品供电的接线都断开，如USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口，然后打开软件RKDevTool
4. 按住Recovery或者Maskrom按键，然后使用 DC 给产品供电
5. 等待软件提示 发现一个LOADER设备（如下图所示），即可松开按键
6. 如果不成功，重复2-5步骤。
```

![recovery-flash-tool](/img/general-tutorial/recovery-flash-update.png)

![maskroom-flash-tool](/img/general-tutorial/maskroot-flash-update.jpg)

刷写进度显示在右边，完成后它会提示你：
![rkdevtool-success](/img/tools/rkdevtool-success.png)

:::tip 烧写失败分析
如果烧写过程中出现Download Boot Fail, 或者烧写过程中出错，如下图所示，通常是由于使用的USB线连接不良、劣质线材，或者电脑USB口驱动能力不足导致的，请更换USB线或者电脑USB端口排查。
:::

:::note Maskrom模式烧录 和 Loader模式烧录有什么区别？
* Maskrom：Flash 在未烧录固件时，芯⽚会引导进⼊ Maskrom 模式，可以进⾏初次固件的烧写；
开发调试过程中若遇到 Loader ⽆法正常启动的情况，也可进⼊ Maskrom 模式烧写固件。
* Loader：原理是在uboot启动期间检测到引脚被按下，Loader 模式下，可以进⾏固件的烧写、升级。
可以通过⼯具单独烧写某⼀个分区镜像⽂件，⽅便调试。
:::
