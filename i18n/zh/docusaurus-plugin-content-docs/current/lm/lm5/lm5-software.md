---
sidebar_position: 3
---

# 使用手册

LM5开发套件(ArmSoM-W3)使用手册，帮助软件工程师掌握开发板使用 。


## 入门准备
在开始使用 ArmSoM-W3 之前，请准备好以下物品

### 工具准备
* ArmSoM-W3 主板
* 电源（三选一）
  * 支持 9V/2A、12V/2A、15V/2A 和 20V/2A 的 USB Type-C PD 2.0
  * 支持 DC 12V适配器，2.5mm
  * 支持 PoE 12V
* 系统安装（二选一）
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器，
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：
  * 板载eMMC启动
    * USB A型转 C型数据线，从 typec 端口在 ArmSoM-W3 上写入镜像或使用 fastboot/adb 命令，您需要 USB A转type C数据线连接 ArmSoM-W3 和 PC。

### 可选选项
* USB 键盘鼠标
* HDMI 显示器和 HDMI 线
  * ArmSoM-W3配备了全尺寸 HDMI 接口，最高支持 8K@60 显示。
  * HDMI EDID用于确定最佳显示分辨率。 在支持 1080p（或 4K/8K）的显示器和电视上，将选择此分辨率。 如果不支持 1080p，EDID会找到的下一个可用分辨率。
* Ethernet 线（网线）
  * ArmSoM-W3支持以太网上网，最高支持2.5G。
  * 网线用于将ArmSoM-W3连接到本地网络和互联网。
* 摄像头模块
  * ArmSoM-W3支持拍照功能
  * 推荐使用imx415模组，可找ArmSoM官方店淘宝客服购买。
* LCD显示屏
  * ArmSoM-W3支持LCD显示功能。
  * 推荐使用 ArmSoM Display 10.1 HD，可找ArmSoM官方店淘宝客服购买。
* 音频线
  * 可以使用标准 3.5 毫米插孔通过扬声器或耳机播放音频。
* WiFi/蓝牙卡
  * ArmSoM 支持市面上常见的无线模块，请查看支持列表的 Wireless 列表。
  * 推荐使用 RTL8852be，AP6256
* USB-A型转USB-C型数据线

## 烧录方式选择
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip

ArmSoM-W3 开发套件支持 Maskrom 模式和 Loader 模式，该特殊操作模式是 CPU 通过 USB OTG 端口接收命令。 

插电启动板子，LED绿灯亮，插入 USB A 转 Typec 数据线连接电脑
1. Maskrom模式：按住板子上的 maskrom 按键不松手，再短按 reset 键。
2. Loader模式：按住板子上的 Recovery 按键不松手，再短按 reset 键。或进入系统后在终端输入 ```reboot loader``` 命令

![armsom-w3-typec-install-file](/img/lm/lm-5/armsom-w3-typec-install-file.png)

:::

<Tabs>
<TabItem value="RKDevTool" label="RKDevTool" default>

该方式适合于烧录系统到eMMC, 在 Windows 下使用 RKDevTool。

1. 在 Windows 下安装工具以及 RK 驱动：

  [RKDevTool V3.18](/tools/RKDevTool.rar)

  [DriverAssitant V5.12](/tools/DriverAssitant_v5.12.zip)

2. 把ArmSoM-W3启动到 Maskrom 模式 / Loader 模式，两种方式都可以烧录固件

  2.1 打开 RKdevtool

  这是没检测到 Maskrom 设备的界面：
  ![rkdevtool-no-device-found](/img/tools/rkdevtool-no-device-found.png)
    
  这是检测到 Maskrom 设备的界面：
  ![rkdevtool-found-one-maskrom-device](/img/tools/rkdevtool-found-one-maskrom-device.png)
    
  这是检测到 Loader 设备的界面：
  ![rkdevtool-found-one-loader-device](/img/tools/rkdevtool-found-one-loader-device.png)

  2.2 刷写进度显示在右边，完成后它会提示你：
    ![rkdevtool-success](/img/tools/rkdevtool-success.png)

</TabItem>
	<TabItem value="Etcher" label="Etcher 方式" >
该方法适用于烧录系统到SD卡， Windows、MacOS、Linux x64 操作系统都可用。


1. 从 [balena 官网](https://etcher.balena.io/) 下载 balenaEtcher ，选择指定主机系统下载。该处Linux的程序格式是 AppImage，某些用户可能需要通过chmod命令修改成**_可执行_**运行即可。

2. 将要烧录的 MicroSD卡插入 MicroSD读卡器

3. 打开 etcher 窗口，首先选择 Flash from file，找到您镜像下载位置，双击选择。
![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-from-file.png)


4. 然后点击 Select target，选择自己要烧录的 MicroSD卡。
5. 点击 Flash, 烧录等待成功，这里需要一段时间。
6. 烧录成功，会显示如图所示
![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-success.png)

</TabItem>

</Tabs>

## 接口设置

如果你是首次使用 ArmSoM-LM5 开发套件(ArmSoM-W3)，请先熟悉下 [外设接口](./lm5-introduction##armsom-lm5-开发套件armsom-w3)，以便于你更好的理解后续的内容。

- **USB接口**

ArmSoM-W3 提供两个 USB 2.0 和两个 USB 3.0 端口。

- **2.5G 以太网口**

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-W3 上的 RJ45 端口插入，系统桌面就会弹出有线连接。

- **HDMI**

ArmSoM-W3 有两个 HDMI 输出端口，均支持 CEC 和 HDMI 2.1，分辨率最高支持分别为 8Kp60 和 4Kp60，并且其 Type-C 接口也可支持视频输出。  
另外，ArmSoM-W3 拥有 1 个 HDMI 输入接口，支持 HDMI 2.1 输入，分辨率为 4Kp60。

:::caution
注意: 在使用之前，请确认 HDMI 线的接口规格。
:::

- **M.2接口**

ArmSoM-W3 提供两个 M.2 连接器：

- 主板正面有一个带 2230 安装孔的 M.2 E Key 连接器，提供 PCIe 2.1 单通道、USB、SATA、SDIO、PCM 和 UART 信号，支持工业标准 M.2 WiFi 6 模块。  
  ArmSoM 推荐使用 RTL8852BE。安装在 ArmSoM-W3 的 M.2 E 口然后设置 wifi 网络就可以上网。

```
# 1. Switch to super user mode
root@linaro-alip:/# sudo su
# 2. Open the WIFI
root@linaro-alip:/# nmcli r wifi on
# 3. Scan WIFI
root@linaro-alip:/# nmcli dev wifi
# 4. Connect to WIFI network
root@linaro-alip:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

<!-- ![rock5b_01](/img/rock5b/rock5b-use-wireless.webp) -->

- 在板的背面有一个带有四通道 PCIe 3.0 接口的 M.2 M Key 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

<!-- ![rock5b_01](/img/rock5b/rock5b-use-ssd.webp) -->
