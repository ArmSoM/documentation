---
description: ArmSoM-AIM-IO
keywords: [armsom, ArmSoM-AIM-IO, maker kit, rockchip]
sidebar_label: "AIM-IO"
sidebar_position: 4
slug: /armsom-aimio
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
|     139     | I2S1_SDO2_M0 / I2C7_SDA_M3 / UART8_CTSN_M0 / PWM15_IR_M1 / CAN1_TX_M1 / GPIO4_B3 /| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     138     | I2S1_SDO1_M0 / I2C7_SCL_M3 / UART8_RTSN_M0 /  PWM14_M1   / CAN1_RX_M1 / GPIO4_B2  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     115     | SPI1_CS1_M1 / I2C8_SDA_M4 / UART7_CTSN_M1 / PWM15_IR_M0 / GPIO3_C3  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  GPIO0_B5 / <div className='orange-txt'>UART2_TX_M0</div> / I2C1_SCL_M0 / I2S1_MCLK_M1 / JTAG_TCK_M2|     13      |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  GPIO0_B6  / <div className='orange-txt'>UART2_RX_M0</div> / I2C1_SDA_M0 / I2S1_SCLK_M1 /  JTAG_TMS_M2|     14      |
|     113     |  SPI1_CLK_M1 / UART7_RX_M1 / GPIO3_C1  | <div className='green'>11</div>  | <div className='green'>12</div> |  GPIO3_B5  / CAN1_RX_M0 / PWM12_M0  /UART3_TX_M1 / I2S2_SCLK_M1 |     109     |
|     111     |  SPI1_MOSI_M1 / I2C3_SCL_M1 / GPIO3_B7  | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|     112     |   SPI1_MISO_M1 / I2C3_SDA_M1 / UART7_TX_M1  / GPIO3_C0  | <div className='green'>15</div>  | <div className='green'>16</div> |  GPIO3_A4 / SPI4_CS1_M1 / I2S3_SDI / UART8_RTSN_M1   |     100     |
|             |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> |  GPIO4_C4 / PWM5_M2 / SPI3_MISO_M0 |    148     |
|     42      | SPI0_MOSI_M2 / UART4_RX_M2 / GPIO1_B2  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |             |
|     41      | SPI0_MISO_M2 / GPIO1_B1  | <div className='green'>21</div>  | <div className='green'>22</div> | SARADC_IN4          |             |
|     43      | SPI0_CLK_M2 / UART4_TX_M2 / GPIO1_B3  | <div className='green'>23</div>  | <div className='green'>24</div> |  GPIO1_B4 / UART7_RX_M2  / SPI0_CS0_M2 |     44      |
|             |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |  GPIO1_B5  / UART7_TX_M2 / SPI0_CS1_M2 |     45      |
|     150     | SPI3_CLK_M0 / I2C0_SDA_M1 / PWM7_IR_M3 / GPIO4_C6  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  GPIO4_C5 / PWM6_M2 / I2C0_SCL_M1 /
|     63      | UART1_CTSN_M1 / PWM15_IR_M3 / GPIO1_D7  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|     47      | SPDIF_TX_M0 / UART1_RX_M1 / PWM13_M2 / GPIO1_B7  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO3_C2 / PWM14_M0 / UART7_RTSN_M1 / I2C8_SCL_M4 / SPI1_CS0_M1  |    114     |
|     103     | PWM8_M0 / GPIO3_A7  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |             |
|     110     | I2S2_LRCK_M1 / UART3_RX_M1 / PWM13_M0 / CAN1_TX_M0 / GPIO3_B6  | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO3_B1 / PWM2_M1 / UART2_TX_M2 |     105     |
|      0      | REFCLK_OUT / GPIO0_A0	    | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO3_B2 /PWM3_IR_M1 / UART2_RX_M2 / I2S2_SDI_M1   |     106     |
|             |   GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO3_B3 /  UART2_RTSN / I2S2_SDO_M1   |     107     |

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

访问百度网盘资源介绍页面获取系统镜像: [百度网盘链接](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms)

:::tip
1. 官方镜像的默认账号/密码为armsom/armsom，linaro/linaro。
2. Ubuntu，Armbian，Openwrt是ArmSoM为开源爱好者提供的更多选择。
:::

### 烧录Ubuntu，Armbian，Openwrt系统

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

点击进入链接:[百度网盘链接](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms)

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
2. 将所有有可能给产品供电的接线都断开，如电源线，USB线等
3. 使用一根Type-C线一端连接到产品的OTG接口，另一端连接电脑的usb接口，然后打开软件RKDevTool
4. 短接12pin接口上的10和11（如下）进入loader模式，然后使用 DC 给产品供电
5. 等待软件提示 发现一个MASKROM/LOADER设备（如下图所示），即可松开按键
6. 如果不成功，重复2-5步骤。
```

短接 10和11进入loader模式
![aimio-recovery](/img/aim/aimio-recovery.png)

短接maskrom测试点进入maskrom模式

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

#### USB线烧录到eMMC

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

### 调试串口

如下所示连接 USB 转 TTL 串口线：

![armsom-aimio-debug](/img/aim/armsom-aimio-debug.png)

| AIM-IO       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 11) | ---> | GND |
| **RX** (pin 3)  | ---> | TX |
| **TX** (pin 4) | ---> | RX |

### 以太网口

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
- 接[调试串口](#调试串口)终端输入 ip a 命令来查看 IP 地址
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

### HDMI

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

### DP

| 型号 | AIM7 | AIM5  |
| ----- |  ----- | ------ |
| 分辨率  | 4Kp60 | 4Kp60 |

1. 使用 DP 线连接 ArmSoM-AIM 和 Dp 显示器
2. 启动 linux 系统后如果 Dp 显示器有图像输出说明 HDMI 接口使用正常

### USB

|  型号  | AIM7   | 
| ----- |  ----- |
| USB   | 1* Type-C 2.0, 4x USB3.0| 

:::info
USB 接口是可以接 USB hub 来扩展 USB 接口的数量的。
:::

#### 连接 USB 鼠标或键盘测试
1. 将 USB 接口的键盘插入ArmSoM-AIM产品的 USB 接口中
2. 连接ArmSoM-AIM产品到 HDMI 显示器
3. 如果鼠标或键盘能正常操作系统说明 USB 接口使用正常（鼠标只有在桌面版的系统中才能使用）

#### 连接 USB 存储设备测试
1. 首先将 U 盘或者 USB 移动硬盘插入 ArmSoM-AIM产品的 USB 接口中
2. 执行下面的命令如果能看到 sdX 的输出说明 U 盘识别成功
```
armsom@armsom-aim7:/# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0  122880000 sda
```
3. 使用 mount 命令可以将 U 盘挂载到/mnt 中，然后就能查看 U 盘中的文件了

```
armsom@armsom-aim7:/# sudo mount /dev/sda1 /test/
```

4. 挂载完后通过 df -h 命令就能查看 U 盘的容量使用情况和挂载点

```
armsom@armsom-aim7:/test# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /test
```

####  USB 摄像头

1. 准备一个支持 UVC 协议的 USB 摄像头，然后将USB 摄像头插入到 ArmSoM-AIM产品的 USB 接口中

2. 通过 v4l2-ctl 命令可以看到 USB 摄像头的设备节点信息为/dev/video0

```
armsom@armsom-aim7:/# v4l2-ctl --list-devices
罗技高清网络摄像机 C93 (usb-xhci-hcd.5.auto-1):
        /dev/video40
        /dev/video41
        /dev/media4
```

3. 在桌面系统中可以使用 Cheese/V4L2 test bench 直接打开 USB 摄像头

![sige-usb-cam](/img/general-tutorial/sige-usb-cam.jpg)


同时，您也可以使用终端命令打开相机预览:
```bash
armsom@armsom-aim7:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;
```

命令拍照:
```bash
armsom@armsom-aim7:/# gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=/home/armsom/test.jpg;
```

命令拍摄视频:
```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/armsom/test.mp4
```

![armsom-sige7-gst](/img/sige/armsom-sige7-gst.png)