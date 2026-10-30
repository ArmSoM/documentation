---
description: ArmSoM-AIM-IO
keywords: [armsom, ArmSoM-AIM-IO, maker kit, rockchip]
sidebar_label: "AIM-IO"
sidebar_position: 4
slug: /armsom-aimio
image: /img/aim/aim-io.png
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# AIM-IO 产品简介

AIM-IO是 ArmSoM AIM 系列的一款 IO 板，尺寸为 100x80x29 毫米，同时兼容当前的 Jetson Nano 核心模块。它是一款专为创客、学习者和开发者设计的微型 AI 计算机，能够快速将 AI 技术应用于各种智能设备。

## 硬件信息

### 硬件接口

![AIM-IO](/img/aim/aim-io.png)

:::tip
AIM-IO Board 使用12V DC供电。
:::

### 硬件规格

AIM-IO板是专为AIM模块开发者设计的扩展板，旨在帮助完成系统和嵌入式板开发。与Jetson Nano开发者套件（B01）相比，AIM-IO板尺寸相同，但增加了2个MIPI CSI接口、1个M.2 Key-E接口和1个MIPI DSI接口。

- 1x DisplayPort
- 1x HDMI输出
- 4x USB 3.0 Type-A
- 千兆以太网
- GPIO：40针扩展头
- POE：5V Power Over Ethernet
- 电源连接器：DC Barrel插孔，用于12V电源输入
- 扩展：M.2（E键，支持PCIe/USB/SDIO/UART）、microSD
- MIPI DSI：1x 4通道MIPI DSI，支持最高4K@60fps（x4）
- MIPI CSI0/1：2x 2通道MIPI CSI，每条通道最高2.5Gbps
- MIPI CSI2/3：1x 4通道MIPI CSI，每条通道最高2.5Gbps
- 通过USB Type-C进行固件闪存和设备模式
- 尺寸：100 x 80 x 29 毫米 (3.94 x 3.15 x 1.14 英寸)
- 重量: 78.4g

### 引脚定义 

<details>
    <summary>
       AIM7 40-PIN 座子
    </summary>
<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     20     | UART0_RX_M0 / I2C4_SDA_M2 / PWM2_M0 /  GPIO0_C4 | <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     21     | UART0_TX_M0 / I2C4_SCL_M2 / PWM4_M0 /  I2S1_SDI0_M1   / GPIO0_C5  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     128     | SPI0_MISO_M1 / UART9_RTSN_M1 / I2S1_MCLK_M0 /  GPIO4_A0  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  SPDIF0_TX_M0 / I2C5_SCL_M3 / UART1_TX_M1 / GPIO1_B6 |     46     |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  PWM13_M2 / I2C5_SDA_M3 / UART1_RX_M1 / GPIO1_B7 |     47      |
|     62     |  PWM14_M2 / I2C8_SCL_M2 / UART1_RTSN_M1 / GPIO1_D6 | <div className='green'>11</div>  | <div className='green'>12</div> | SPI0_MOSI_M1/ UART9_CTSN_M1 / I2S1_SCLK_M0 / GPIO4_A1 |     129     |
|     58     |  SPI1_CLK_M2 / UART4_TX_M0 / PWM0_M1 / I2C1_SCL_M4 / I2S0_SDO3 / I2S0_SDI2 / GPIO1_D2  | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|     108     |   GPIO3_B4 / I2S2_MCLK_M1 / MIPI_CAM3_PDN  | <div className='green'>15</div>  | <div className='green'>16</div> |  GPIO1_D5 / SPI1_CS1_M2 / PDM0_SDI0_M0   |     61     |
|             |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> |  SPI1_CS0_M2 / UART4_RX_M0 /PWM1_M1 / I2C1_SDA_M4 /PDM0_SDI3_M0 / I2S0_SDI1 / GPIO1_D3 |    59     |
|     42      | SPI0_MOSI_M2 / PCIE30X4_PERSTN_M3 / UART4_RX_M2 / PDM1_SDI3_M1 / GPIO1_B2  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |             |
|     41      | SPI0_MISO_M2 / PCIE30X4_WAKEN_M3 / PDM1_SDI2_M1 / GPIO1_B1 | <div className='green'>21</div>  | <div className='green'>22</div> | SPI1_MISO_M2 / UART6_TX_M2 / I2C7_SCL_M0 / I2S0_SDO1 / GPIO1_D0 |      56      |
|     43      | SPI0_CLK_M2 / SATA0_ACT_LED_M1 / PCIE30X1_0_WAKEN_M2 / PDM1_CLK1_M1 / UART4_TX_M2  / GPIO1_B3 | <div className='green'>23</div>  | <div className='green'>24</div> |  SPI0_CS0_M2 / PCIE30X1_0_PERSTN_M2 / PDM1_CLK0_M1 / UART7_RX_M2  / GPIO1_B4 |     44      |
|             |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |  GPIO1_B5  / UART7_TX_M2 / SPI0_CS1_M2 |     45      |
|     16     | I2C2_SDA_M0 / CAN0_RX_M0 / SPI0_MOSI_M0 / PWM1_M0 / GPIO0_C0  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  GPIO0_B7 / CAN0_TX_M0 / SPI0_CS1_M0 / I2C2_SCL_M0 / PWM0_M0  |    15     |
|    103      | PWM8_M0 / GPIO3_A7  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|     104     | PWM9_M0 / GPIO3_B0  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO3_A0 / PWM10_M0 / SPI4_MISO_M1 / I2C6_SDA_M4 / I2S3_MCLK |    96     |
|     105     | UART2_TX_M2 / PWM2_M1 / GPIO3_B1  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |             |
|     130     | I2S1_LRCK_M0 / SPI0_CLK_M1 / I2S1_LRCK_M0 / GPIO4_A2  | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO1_D7 / I2C8_SDA_M2 / UART1_CTSN_M1 |     63     |
|     57      | UART6_RX_M2 / I2C7_SDA_M0 / GPIO1_D1	    | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO4_A5 / UART3_TX_M2 / I2C3_SDA_M2 / I2S1_SDI0_M0   |     133     |
|             |   GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO4_B1 /  SPI0_CS1_M1 / UART8_RX_M0 / I2C6_SCL_M3 / I2S1_SDO0_M0   |     137     |

</div>
</details>

## 使用手册

AIM-IO使用手册，帮助用户了解 AIM 产品的基本使用和需要的准备工作，开始使用你的ArmSoM-AIM🚀

## 入门准备

在开始使用 ArmSoM-AIM 产品之前，请准备好以下物品

### 工具准备
* 电源
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在ArmSoM-AIM系列上写入镜像，您需要Type-C数据线连接 ArmSoM-AIM 和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：

您可以将 ArmSoM-AIM 设置为带有桌面的交互式计算机，也可以将其设置为仅可通过网络访问的无头计算机。要将 ArmSoM-AIM 设置为Headless计算机，您在初次安装操作系统时配置主机名、用户帐户、网络连接和 SSH 。如果您想直接使用 ArmSoM-AIM，则需要以下附加配件：

**可选选项**
* 键盘 & 鼠标
* HDMI显示器和HDMI线
* Ethernet 线（网线）
* 摄像头模块
  * 推荐使用 [camera-module1](./armsom-camera-module1) 模组。
* LCD显示屏
  * 推荐使用 [Display 10 HD](./armsom-display-10-hd)。

### 电源

ArmSoM-AIM 系列型号供电所需的电源规格为12V/2-3A。您可以使用任何提供正确电源模式的高质量电源。

将电源插入DC Barrel插孔, 请确保使用正确端口！

## 烧录方式选择

ArmSoM 系列产品的系统镜像包含了多种根文件系统，我们可以根据自己需求选择相应的镜像下载

:::info
系统镜像包括了linux内核，基本的程序等，是运行ArmSoM系列产品必须项， 所以我们需要在运行产品前为产品安装镜像
:::

### 获取系统镜像

访问百度网盘资源介绍页面获取系统镜像: [百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)

:::tip
1. 官方镜像的默认账号/密码为armsom/armsom，root/root。
2. Armbian，Openwrt是ArmSoM为开源爱好者提供的更多选择。
:::

### 烧录Armbian，Openwrt系统

#### 读卡器烧录到microSD

**通过 Etcher 刷入操作系统镜像到 microSD**

该方法适用于烧录系统到SD卡， Windows、MacOS、Linux x64 操作系统都可用。

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

#### USB线烧录到eMMC

##### 工具获取和安装

烧录镜像到eMMC需要使用到 RKDevTool 烧录工具和 RK驱动助手(DriverAssitant)

点击进入链接:[百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)

![baidu-flash-tool](/img/general-tutorial/baidu-flash-tool.jpeg)

###### 安装DriverAssitant

解压DriverAssitant软件压缩包，双击 DriverInstall.exe 进入驱动安装界面。

点击 **驱动安装** 即可开始安装驱动。如果不确定以前是否安装过旧版驱动，先点击驱动卸载移除旧版本驱动程序，再点击驱动安装。

![install-driver-assitant](/img/general-tutorial/install-driver-assitant.png)

###### 安装RKDevTool

瑞芯微专用USB烧录工具，Windows平台，可以使用USB接口将系统镜像下载到产品中。

解压压缩包后无需安装即可使用，双击 RKDevTool.exe 进入软件界面。

软件主要有三大部分，分别是下载镜像（可根据地址烧录镜像）、升级固件和高级功能

##### MASKROM/Loader模式烧录镜像

该模式适合产品未烧录系统或烧录的系统损坏无法运行 **（适应一切状况）**

我们打开 RKDevTool 烧录工具，并设置产品进入烧录模式。

```
请参照产品相关说明进行操作，不同产品进入 Maskrom 模式的方式基本相同。

1. 准备Type-C线，用于镜像烧录
2. 将所有有可能给产品供电的接线都断开，如USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口（切勿连接电脑转接HUB），然后打开软件RKDevTool
4. 短接12pin接口上的10和11（如下）进入loader模式，然后使用 DC 给产品供电
5. 等待软件提示 发现一个MASKROM/LOADER设备（如下图所示），即可松开按键
6. 如果不成功，重复2-5步骤。
```

短接 10和11进入loader模式
![aimio-recovery](/img/aim/aimio-recovery.png)

按住aim7上maskrom按键进入maskrom模式

![aimio-maskrom](/img/aim/aimio-maskrom.png)


开始烧录系统

![rkdevtool-install-emmc](/img/general-tutorial/rkdevtool-install-emmc.png)

1. 选择Download Image项
2. 确认板子已经进入Maskrom模式
3. 点击空白单元格选择待使用的 MiniLoaderAll 和 Image 文件，对应的 MiniLoaderAll 和 Image 存放在百度网盘。
4. 在 Storage 选项中选择目标介质EMMC，并选择 强制按地址写 后点击 执行
5. 等待写入完成，随后设备将自动重启，如上图右侧 Download image OK

### 烧录Debian系统

#### 读卡器烧录到microSD
##### 安装SDDiskTool

烧录镜像到eMMC需要使用到烧录工具 SDDiskTool_版本号.exe

点击进入链接:[百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)

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

#### USB线烧录到eMMC

我们打开 RKDevTool 烧录工具，并设置产品进入烧录模式。

```
1. 准备Type-C线，用于镜像烧录
2. 将所有有可能给产品供电的接线都断开，如USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口（切勿连接电脑转接HUB），然后打开软件RKDevTool
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

## 接口使用

**AIM5（RK3576）和 AIM7（RK3588）共用 AIM-IO 底板，接口连接和基本使用均可参考本篇。** 下方日志以 AIM7 官方 Debian 12 / Linux 6.1 镜像为例；设备名称、GPIO 编号及 overlay 按所用核心板和镜像确认。

### 1. 调试串口

使用 USB 转 TTL 串口模块连接底板的调试接口，按下图交叉连接 RX/TX，并连接 GND。

![armsom-aimio-debug](/img/aim/armsom-aimio-debug.png)

| AIM-IO 调试接口 | 串口模块 |
| --- | --- |
| GND（pin 11） | GND |
| RX（pin 3） | TX |
| TX（pin 4） | RX |

以上编号为图中调试接口的引脚编号，不是 40PIN 排针编号。

:::tip 串口通信参数

- 波特率：**1500000**
- 数据位：8
- 停止位：1
- 校验位：无
- 流控：无

:::

配置串口终端后给开发板上电，即可查看启动日志并登录系统。

| 用户名 | 默认密码 |
| --- | --- |
| `root` | `root` |
| `armsom` | `armsom` |

### 2. 以太网口

1. 首先将网线的一端插入 ArmSoM-AIM 的以太网接口，网线的另一端接入路由器，并确保
网络是畅通的
2. 系统启动后会通过 DHCP 自动给以太网卡分配 IP 地址，不需要其他任何配置
3. 在ArmSoM-AIM 的 Linux 系统中查看 IP 地址的命令如下所示

```bash
root@armsom-aim7:/# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether c2:ed:bc:48:3b:7a brd ff:ff:ff:ff:ff:ff
    inet 192.168.10.106/24 brd 192.168.10.255 scope global dynamic noprefixroute eth0
       valid_lft 86396sec preferred_lft 86396sec
    inet6 fe80::7351:88a9:9b4c:11be/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

ArmSoM-AIM 启动后查看 IP 地址有三种方法：

- 接 HDMI 显示器，然后登录系统使用终端输入 ip a 命令查看 IP 地址
- 接[调试串口](#1-调试串口)终端输入 ip a 命令来查看 IP 地址
- 如果没有调试串口，也没有 HDMI 显示器，还可以通过路由器的管理界面来查看ArmSoM-AIM 网口的 IP 地址。不过这种方法经常有人会无法正常看到ArmSoM-AIM 的 IP 地址。如果看不到，调试方法如下所示：
    - 首先检查 Linux 系统是否已经正常启动，如果ArmSoM-AIM的绿灯常亮，一般是正常启动了，如果只亮红灯，说明系统都没正常启动。
    - 检查网线有没有插紧，或者换根网线试下。
    - 换个路由器试下，路由器的问题有遇到过很多，比如路由器无法正常分配IP 地址，或者已正常分配 IP 地址但在路由器中看不到。
    - 如果没有路由器可换就只能连接 HDMI 显示器或者使用调试串口来查看 IP地址。

:::tip
另外需要注意的是ArmSoM-AIM  DHCP 自动分配 IP 地址是不需要任何设置的。
:::


4. 使用工具 ping 判断是否连通网络。

测试网络连通性的命令如下，ping 命令可以通过 Ctrl+C 快捷键来中断运行
```bash
armsom@armsom-aim7:~$ ping www.baidu.com
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

### 3. M.2 Key E（Wi-Fi / 蓝牙）

AIM-IO 提供 M.2 Key E 接口，以下以已实测的 **Intel AX200** 为例：Wi-Fi 通过 PCIe 连接，蓝牙通过 USB 连接。安装网卡、连接天线后上电。

#### 识别 AX200

```bash
armsom@armsom:~$ lspci -nnk -s 01:00.0
```

实测输出：

```text
01:00.0 Network controller [0280]: Intel Corporation Wi-Fi 6 AX200 [8086:2723] (rev 1a)
        Subsystem: Intel Corporation Wi-Fi 6 AX200NGW [8086:0084]
        Kernel driver in use: iwlwifi
        Kernel modules: iwlwifi
```

PCIe 地址可先用 `lspci -nn` 查询。出现 `Kernel driver in use: iwlwifi` 表示驱动已绑定；如日志提示 `no suitable firmware found`，检查镜像是否包含 `/lib/firmware/iwlwifi-cc-a0-72.ucode`。

#### 使用 Wi-Fi

1. 启用 NetworkManager 和 Wi-Fi，并确认无线接口名称（以下以 `wlp1s0` 为例）：

```bash
armsom@armsom:~$ sudo systemctl start NetworkManager
armsom@armsom:~$ sudo nmcli radio wifi on
armsom@armsom:~$ nmcli device status
```

2. 扫描并列出附近的 Wi-Fi：

```bash
armsom@armsom:~$ sudo nmcli device wifi list ifname wlp1s0 --rescan yes
```

3. 连接指定 Wi-Fi，按提示输入密码：

```bash
armsom@armsom:~$ sudo nmcli --ask device wifi connect '你的WiFi名称' ifname wlp1s0
```

连接成功后，NetworkManager 会保存连接，后续开机自动连接。查看连接状态：

```bash
armsom@armsom:~$ nmcli -f DEVICE,TYPE,STATE device
```

实测输出节选：

```text
DEVICE          TYPE      STATE
wlp1s0          wifi      connected
```

4. 断开当前 Wi-Fi：

```bash
armsom@armsom:~$ sudo nmcli device disconnect wlp1s0
```

#### 使用蓝牙

```bash
armsom@armsom:~$ lsusb -d 8087:0029
armsom@armsom:~$ bluetoothctl show
```

实测输出节选：

```text
Bus 004 Device 002: ID 8087:0029 Intel Corp. AX200 Bluetooth
Controller 38:7A:0E:75:1A:15 (public)
        Name: armsom
        Alias: armsom
        Class: 0x007c0000
        Powered: yes
```

将目标设备设为可发现/配对模式，然后在 `bluetoothctl` 中操作；将示例地址替换为扫描到的设备地址：

```text
armsom@armsom:~$ bluetoothctl
[bluetooth]# power on
[bluetooth]# agent on
[bluetooth]# default-agent
[bluetooth]# scan on
[bluetooth]# pair AA:BB:CC:DD:EE:FF
[bluetooth]# trust AA:BB:CC:DD:EE:FF
[bluetooth]# connect AA:BB:CC:DD:EE:FF
[bluetooth]# scan off
[bluetooth]# quit
```

### 4. HDMI

| 型号 | AIM7 | AIM5  |
| ----- |  ----- | ------ |
| 分辨率  | 8Kp60 | 4Kp120 |

1. 使用 HDMI 线连接 ArmSoM-AIM 和 HDMI 显示器
2. 启动 linux 系统后如果 HDMI 显示器有图像输出说明 HDMI 接口使用正常

:::tip
注意，很多笔记本电脑虽然带有 HDMI 接口，但是笔记本的 HDMI 接口一般只有输出功能，并没有 HDMI in 的功能，也就是说并不能将其他设备的 HDMI 输出显示到笔记本的屏幕上。
当想把开发板的 HDMI 接到笔记本电脑 HDMI 接口时，请先确认清楚您的笔记本是支持 HDMI in 的功能。
当 HDMI 没有显示的时候，请先检查使用的系统是否是带桌面的版本，如果是服务器版本只能看到终端
:::

### 5. DP

| 型号 | AIM7 | AIM5  |
| ----- |  ----- | ------ |
| 分辨率  | 4Kp60 | 4Kp60 |

1. 使用 DP 线连接 ArmSoM-AIM 和 Dp 显示器
2. 启动 linux 系统后如果 Dp 显示器有图像输出说明 HDMI 接口使用正常

### 6. USB

AIM-IO 提供 4 个 USB 3.0 Type-A 接口，可连接键鼠、U 盘及 UVC 摄像头。

#### 键鼠和 USB 速率

连接键鼠后可直接在桌面中操作，也可查看 USB 拓扑：

```bash
armsom@armsom:~$ lsusb -t
```

实测输出节选：

```text
/:  Bus 03.Port 1: Dev 1, Class=root_hub, Driver=xhci-hcd/1p, 5000M
    |__ Port 1: Dev 2, If 0, Class=Hub, Driver=hub/4p, 5000M
        |__ Port 4: Dev 3, If 0, Class=Mass Storage, Driver=usb-storage, 5000M
```

应查看具体设备行的速率：上例 U 盘的 `5000M` 表示协商到 USB 3.0；`480M` 为 USB 2.0。键鼠使用较低速率是正常现象，不能仅根据 root hub 的速率判断外设速率。

#### USB 存储设备

```bash
armsom@armsom:~$ lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS /dev/sda
```

实测输出：

```text
NAME    SIZE TYPE FSTYPE MOUNTPOINTS
sda    29.3G disk
└─sda1 29.3G part vfat
```

确认实际设备及分区后挂载；以下以 `/dev/sda1` 为例：

```bash
armsom@armsom:~$ sudo mkdir -p /mnt/usb
armsom@armsom:~$ sudo mount /dev/sda1 /mnt/usb
armsom@armsom:~$ ls /mnt/usb
# 使用完成后再拔出
armsom@armsom:~$ sudo umount /mnt/usb
```

#### USB 摄像头

连接支持 UVC 协议的 USB 摄像头，通过下列命令查找对应节点和支持的格式。不要直接使用 MIPI 摄像头的节点。

```bash
armsom@armsom:~$ v4l2-ctl --list-devices
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --list-formats-ext
```

将 `/dev/videoX` 替换为实际的 UVC 节点。桌面镜像可使用 Cheese 预览，或在本机图形会话中运行：

```bash
armsom@armsom:~$ gst-launch-1.0 v4l2src device=/dev/videoX ! videoconvert ! autovideosink
```

#### USB Type-C 烧录

底板 Type-C 接口可在 Loader/Maskrom 模式下连接电脑烧录系统，操作见本页[烧录方式选择](#烧录方式选择)。板卡仍按前文使用 12V DC 供电。

### 7. TF 卡

从 eMMC 启动系统后插入 TF 卡，查看设备和分区。实测 TF 卡为 `/dev/mmcblk1`，eMMC 为 `/dev/mmcblk0`，请勿混淆。

```bash
armsom@armsom:~$ lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS /dev/mmcblk1
armsom@armsom:~$ cat /sys/class/block/mmcblk1/device/type
```

实测输出：

```text
NAME         SIZE TYPE FSTYPE MOUNTPOINTS
mmcblk1     29.1G disk
├─mmcblk1p1    8M part
├─mmcblk1p2  128M part ext2
└─mmcblk1p3   29G part ext4
SD
```

上例使用的是含系统镜像的 TF 卡；普通数据卡的分区可能不同。根据 `lsblk` 结果选择有文件系统的分区挂载，下面只读挂载示例中的第三分区：

```bash
armsom@armsom:~$ sudo mkdir -p /mnt/tfcard
armsom@armsom:~$ sudo mount -o ro /dev/mmcblk1p3 /mnt/tfcard
armsom@armsom:~$ ls /mnt/tfcard
armsom@armsom:~$ sudo umount /mnt/tfcard
```

:::tip
如需从 eMMC 启动，重启前拔掉含可启动系统的 TF 卡，以免板卡从 TF 卡启动。正在使用的分区应先卸载再拔卡。
:::

### 8. RTC

AIM7 实测使用 `i2c4` 上的 HYM8563 兼容 RTC。连接 RTC 备用电池后，确认设备注册：

```bash
armsom@armsom:~$ cat /sys/class/rtc/rtc0/name
armsom@armsom:~$ dmesg | grep rtc-hym8563
```

实测输出节选：

```text
rtc-hym8563 4-0051
[    2.149494] rtc-hym8563 4-0051: rtc information is valid
[    2.156470] rtc-hym8563 4-0051: registered as rtc0
```

先确认系统时间正确，再将其写入 RTC：

```bash
armsom@armsom:~$ date
armsom@armsom:~$ sudo hwclock -w -f /dev/rtc0
armsom@armsom:~$ sudo hwclock -r -f /dev/rtc0
armsom@armsom:~$ sudo poweroff
```

保持 RTC 电池连接，只断开主电源。等待几分钟后重新上电，用 `hwclock -r -f /dev/rtc0` 检查时间是否继续前进；不要断开 RTC 电池后再验证断电保持功能。

### 9. MIPI-CSI

#### 摄像头接口与 overlay

AIM5、AIM7 的接口位置和摄像头模组相同。下面的 I2C 地址和完整文件名以 AIM7 为例；AIM5 使用对应前缀和启动配置：

| 核心板 | 启动配置文件 | 摄像头 overlay 前缀 |
| --- | --- | --- |
| AIM5 | `/boot/uEnv/uEnvarmsom-aim5-io.txt` | `rk3576-armsom-aim5-camera-` |
| AIM7 | `/boot/uEnv/uEnvarmsom-aim7-io.txt` | `rk3588-armsom-aim7-camera-` |

连接排线前先断电，并确认方向。

| 接口 | 底板位号 | 摄像头 | I2C 地址 | overlay 文件名 |
| --- | --- | --- | --- | --- |
| CAM0 | J13 | IMX219 | `2-0010` | `rk3588-armsom-aim7-camera-imx219-cs0-overlay.dtbo` |
| CAM1 | J49 | IMX219 | `4-0010` | `rk3588-armsom-aim7-camera-imx219-cs1-overlay.dtbo` |
| CAM2 | J12 | OV13850 | `3-0010` | `rk3588-armsom-aim7-camera-ov13850-cs2-overlay.dtbo` |
| CAM3 | J24 | OV13850 | `6-0010` | `rk3588-armsom-aim7-camera-ov13850-cs3-overlay.dtbo` |

编辑对应核心板的启动配置，以下以 AIM7 为例：

```bash
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim7-io.txt
```

按实际连接的摄像头启用对应行，以下为四路全部启用时的配置：

```ini
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-imx219-cs0-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-imx219-cs1-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-ov13850-cs2-overlay.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-camera-ov13850-cs3-overlay.dtbo
```

AIM5 将上述文件名的 `rk3588-armsom-aim7-camera-` 替换为 `rk3576-armsom-aim5-camera-`，并编辑 AIM5 对应的 uEnv 文件。取消行首 `#` 即为启用。建议首次接线时每次只启用一路，确认后再按需组合；旧镜像若缺少上述文件，应先更新对应核心板的内核包。

保存后重启；若要继续从 eMMC 启动，先拔出可启动的 TF 卡。

```bash
armsom@armsom:~$ sync
armsom@armsom:~$ sudo reboot
```

#### 确认 sensor ID

```bash
armsom@armsom:~$ dmesg | grep imx219
armsom@armsom:~$ dmesg | grep ov13850
```

此前在本板四路同时启用时保存的实测日志节选：

```text
[    3.019918] ov13850 3-0010: Detected OV00d850 sensor, REVISION 0xb2
[    3.025395] ov13850 6-0010: Detected OV00d850 sensor, REVISION 0xb2
[    3.086742] imx219 2-0010: Detected IMX000219 sensor
[    3.119883] imx219 4-0010: Detected IMX000219 sensor
```

上述 `Detected` 行表示驱动读到了对应传感器 ID。

#### 基础命令与工具

AIM5、AIM7 使用同一套 ArmSoM SDK，以下采集方法通用。先查找目标摄像头对应的 **ISP 输出节点**，将命令中的 `/dev/videoX` 替换为实际节点；不要直接照搬 CM5-IO 的 video 编号。

```bash
armsom@armsom:~$ v4l2-ctl --list-devices
armsom@armsom:~$ media-ctl -d /dev/mediaX -p
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --list-formats-ext
```

部分版本镜像需要手动安装 GStreamer。若 `gst-launch-1.0 --version` 提示命令不存在，执行：

```bash
armsom@armsom:~$ sudo apt-get update
armsom@armsom:~$ sudo apt-get install -y gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-x
```

录像使用 SDK 自带的 Rockchip 硬件编码插件，可用 `gst-inspect-1.0 mpph264enc` 检查；若缺少该插件，需要使用匹配的 SDK 镜像或补装对应插件。

采集前重启镜像自带的 3A 服务：

```bash
armsom@armsom:~$ sudo systemctl restart rkaiq_3A.service
```

以下命令每次只运行一条。预览需在连接显示器的桌面会话运行，按 `Ctrl+C` 退出；录像带 `-e`，便于结束时写完整 MP4 文件。

#### OV13850 摄像头

以下以 `2112×1568 @ 30fps` 为例，分辨率和帧率以实际节点支持的模式为准。

**抓图（NV12 原始帧，不是 JPEG）：**

```bash
armsom@armsom:~$ v4l2-ctl -d /dev/videoX --set-selection=target=crop,top=0,left=0,width=2112,height=1568 --set-fmt-video=width=2112,height=1568,pixelformat=NV12 --stream-mmap=3 --stream-to=ov13850.nv12 --stream-count=1 --stream-poll
```

**录像：**

```bash
armsom@armsom:~$ gst-launch-1.0 -e v4l2src device=/dev/videoX num-buffers=300 ! video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! mpph264enc ! h264parse ! mp4mux ! filesink location=ov13850.mp4
```

**预览：**

```bash
armsom@armsom:~$ gst-launch-1.0 v4l2src device=/dev/videoX ! video/x-raw,format=NV12,width=2112,height=1568,framerate=30/1 ! videoconvert ! autovideosink
```

#### IMX219 摄像头

抓图、录像和预览统一使用 `3280×2464`，全分辨率模式支持 15 FPS。

**抓图（JPEG）：**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/videoX num-buffers=1 io-mode=4 ! video/x-raw,format=NV12,width=3280,height=2464 ! videoconvert ! jpegenc ! filesink location=imx219.jpg
```

**录像：**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 -e v4l2src device=/dev/videoX num-buffers=300 io-mode=4 ! video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! mpph264enc ! h264parse ! mp4mux ! filesink location=imx219.mp4
```

**预览：**

```bash
armsom@armsom:~$ GST_V4L2SRC_MAX_RESOLUTION=3280x2464 gst-launch-1.0 v4l2src device=/dev/videoX ! video/x-raw,format=NV12,width=3280,height=2464,framerate=15/1 ! videoconvert ! autovideosink
```

`GST_V4L2SRC_MAX_RESOLUTION` 用于部分 SDK 镜像的模式选择；若镜像不支持该扩展，可去掉此前缀，按实际支持的分辨率和帧率运行。

#### 四路摄像头同时预览

AIM7 已实测两路 IMX219 和两路 OV13850 同时预览。先在 `/boot/uEnv/uEnvarmsom-aim7-io.txt` 中启用上述四个摄像头 overlay 并重启；确认 IMX219 模组名称匹配 `imx219_rpi-camera-v2_default.json`，且 3A 服务正常运行。

下载 [四窗口预览脚本](/files/aim7-four-camera-preview.py) 到开发板，在板端桌面终端进入脚本所在目录执行：

```bash
armsom@armsom:~$ sudo apt-get install -y python3-gi gir1.2-gtk-3.0 gir1.2-gstreamer-1.0 gir1.2-gst-plugins-base-1.0
armsom@armsom:~$ sudo systemctl restart rkaiq_3A.service
armsom@armsom:~$ python3 aim7-four-camera-preview.py
```

脚本按 1920×1080 屏幕排列四个等大窗口，上排为 IMX219，下排为 OV13850，保持画面比例。ISP 输出缩放至 640×480，实测 IMX219 约 15 FPS、OV13850 约 25 FPS。按 `Ctrl+C` 退出。

脚本中的 `/dev/video53`、`/dev/video62`、`/dev/video44`、`/dev/video71` 是本次 AIM7 四路启用后的节点；其它镜像请先用 `v4l2-ctl --list-devices` 和 `media-ctl -p` 确认对应 ISP 输出节点，再修改脚本开头的摄像头列表。此示例尚未在 AIM5 上验证。

实测截图如下（仅将每路画面旋转 180° 调正，标题保持原方向；1920×1080，无损压缩）：

![AIM7 四路摄像头同时预览](/img/aim/aim7-four-camera-preview.webp)

### 10. MIPI DSI

AIM5、AIM7 均通过底板 MIPI DSI 接口连接屏幕，使用各自的面板 overlay。AIM5 对应文件为 `rk3576-armsom-aim5-display-800x1280-8hd-overlay.dtbo`，在 `/boot/uEnv/uEnvarmsom-aim5-io.txt` 中启用。下方为 AIM7 的 `rk3588-armsom-aim7-display-800x1280-8hd-overlay.dtbo` 配置，需与实际面板匹配。

```bash
armsom@armsom:~$ ls /boot/dtb/overlay/rk3588-armsom-aim7-display-*.dtbo
armsom@armsom:~$ sudo nano /boot/uEnv/uEnvarmsom-aim7-io.txt
```

启用对应行：

```ini
dtoverlay=/dtb/overlay/rk3588-armsom-aim7-display-800x1280-8hd-overlay.dtbo
```

保存并重启后检查显示连接状态及触摸输入设备：

```bash
armsom@armsom:~$ ls /sys/class/drm/
armsom@armsom:~$ cat /sys/class/drm/card*-DSI-*/status
armsom@armsom:~$ cat /proc/bus/input/devices
```

触摸功能需要匹配的面板、触摸控制器和 overlay。

### 11. FAN

连接底板风扇接口后，官方设备树中的 `pwm-fan` 驱动可按温度调节风扇。hwmon 编号可能变化，可先查找 `pwmfan`：

```bash
armsom@armsom:~$ grep -H '^pwmfan$' /sys/class/hwmon/hwmon*/name
```

实测节点为 `hwmon7`：

```bash
armsom@armsom:~$ cat /sys/class/hwmon/hwmon7/name
armsom@armsom:~$ cat /sys/class/hwmon/hwmon7/pwm1
```

```text
pwmfan
0
```

`pwm1` 为 PWM 控制值，范围为 0～255，不是风扇的 RPM；低温时为 0 属于正常调速状态。

### 12. 40 PIN

AIM-IO 的 40PIN 提供 GPIO、I2C、SPI、UART、PWM 等复用信号。**本页[引脚表](#引脚定义)及下表占用关系以 AIM7 为例**；AIM5 应按其核心板资料确认 GPIO 映射。实际可用功能取决于设备树及其它外设的占用情况。

| 已启用功能 | 需要避开的 40PIN 物理引脚 |
| --- | --- |
| I2C4（RTC、CAM1、部分屏幕触摸） | 3、5 |
| CAM0 的 I2C2 | 27、28 |
| OV13850 复位、PWDN 和时钟 | 11、15、31、33、36 |
| 上述 MIPI DSI 屏幕配置 | 7、32 |

不要将摄像头或 RTC 正在使用的引脚切换为 GPIO 输出。使用前可检查当前占用：

```bash
armsom@armsom:~$ sudo cat /sys/kernel/debug/gpio
armsom@armsom:~$ sudo cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins
```

GPIO、UART、SPI 等操作方法可参考[GPIO 使用](<../Interface Usage/2_gpio.md>)、[UART 使用](<../Interface Usage/5_uart.md>)、[SPI 使用](<../Interface Usage/7_spi.md>)和[PWM 使用](<../Interface Usage/6_pwm.md>)，按所用核心板的引脚定义选择对应信号。连接外设前先断电，信号电压按底板引脚定义和原理图确认。
