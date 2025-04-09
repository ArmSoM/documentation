---
description: ArmSoM-LM7采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，采用了LGA封装，传输能力和稳定性更强。拥有丰富的接口，支持多硬盘、千兆网、WiFi6、5G/4G扩展和多种视频输入输出。支持多种操作系统；提供底板参考设计资料，用户可自主深度化定制。
keywords: [armsom, armsom-lm7, armsom-w3, maker kit, rockchip, rk3588]
sidebar_label: "LM7"
sidebar_position: 4
slug: /armsom-lm7
---

# LM7 产品简介

让我们在 5 分钟内了解 LM7。

## 简介

ArmSoM-LM7采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，采用了LGA封装，传输能力和稳定性更强。拥有丰富的接口，支持多硬盘、千兆网、WiFi6、5G/4G扩展和多种视频输入输出。支持多种操作系统；提供底板参考设计资料，用户可自主深度化定制。可适用于ARM PC、边缘计算、云服务器、人工智能、云计算、虚拟/增强现实、区块链、智能NVR等领域

![ArmSoM-lm7](/img/lm/lm7.png)

:::tip Rockchip RK3588
- [ArmSoM-Sige7](./armsom-sige7) 单板计算机;
- [ArmSoM-AIM7](./armsom-aim7) AI核心板, [ArmSoM-AIM-IO](./armsom-aimio) AIM7配套IO板;
- [ArmSoM-LM7](./armsom-lm7) LGA核心板, [ArmSoM-W3](./armsom-w3) LM7 核心板开发套件 ;

依托强大的生态系统以及各式各样的扩展配件，ArmSoM 可以帮助用户轻松实现从创意到原型再到批量生产的交付，是创客、梦想家、业余爱好者的理想创意平台。
:::

### 关键参数

- **SOC**：瑞芯微 RK3588
- **CPU**：RK3588 四核Cortex-A76@ 2.4GHz+四核Cortex-A55@ 1.8GHz，8纳米制程
- **GPU**：ARM Mali-G610 MP4
- **NPU**：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算
- **VPU/编解码**：
  - **硬解码**：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8
  - **硬编码**：8K@30fps H.265 / H.264
- **RAM**：4GB/8GB/16GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB
- **Flash**：16GB/32GB/64GB/128GB eMMC，默认eMMC 32GB
- **工作电压**：电压 4V（电压误差±5%）
- **工作温度**：0℃ ~ 70℃
- **接口类型**：LGA封装（栅格阵列封装），总引脚数 506Pin
- **操作系统**：
  - **Rockchip官方支持**：Android 12.0，Debian11，Buildroot
  - **第三方支持**：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS
- **PCB**：12 层 PCB 板设计
- **重量**：约 13.4克
- **大小**：45mm × 50mm × 4.5mm (top: 2.2mm+PCB: 1.2mm +bottom: 1.1mm)

## 使用手册

<a href="./armsom-w3#使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>LM7开发套件使用手册</h2>
            <p>如何开始使用你的ArmSoM-W3</p>
        </div>
    </div>
</a>

## 硬件信息

### 硬件接口

:::info

ArmSoM-LM7拥有极小尺寸，约为信用卡的一半大小。

:::
![ArmSoM-LM7 front & back](/img/lm/armsom-rk3588_lga_core_board_front_back.png)
![ArmSoM-LM7 & Credit-Card-Size.webp](/img/lm/Credit-Card-Size.webp)

### 硬件规格

<details>
    <summary>
        LM7 硬件规格
    </summary>
<table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能</th>
            <th>数量</th>
            <th colspan="2">参数</th>
      </tr>
    </thead>
    <tbody align="left">
        <tr >
            <th rowspan="4">视频输入接口</th>
            <th>MIPI DC(DPHY/CPHY) combo PHY</th>
            <th>2</th>
            <th><li>支持 DPHY 或 CPHY</li><li>支持 4 通道 MIPI DPHY V2.0，每线最高 4.5Gbps </li><li>支持 3 通道 MIPI CPHY V1.1，每线最高 2.5Gbps</li></th>
            <th  rowspan="2">支持的 MIPI 摄像头组合：<li>2 MIPI DCPHY + 4 MIPI CSI DPHY(2 lanes)</li><li>2 MIPI DCPHY + 1 MIPI CSI DPHY(4 lanes) + 2 MIPI CSI DPHY(2 lanes)</li><li>2 MIPI DCPHY + 2 MIPI CSI DPHY(4 lanes)</li></th>
        </tr>
        <tr>
            <th>MIPI CSI DPHY</th>
            <th>4</th>
            <th><li>2 通道 MIPI DPHY V1.2 每线最高 2.5Gbps</li><li>2 个 2 lanes DPHY 可合并为一个 4lanes DPHY</li></th>
        </tr>
        <tr>
            <th>DVP</th>
            <th>≤1</th>
            <th colspan="2"><li>8/10/12/16-bit 标准 DVP 接口，最高 150MHz 数据输入</li><li>支持 BT.601/BT.656 和 BT.1120 VI 接口</li></th>
        </tr>
        <tr>
            <th>HDMI RX</th>
            <th>1</th>
            <th colspan="2"> <li>支持 3.4Gbps-6Gbps HDMI 2.0</li> <li>支持 250Mbps-3.4Gbps HDMI 1.4b</li> <li>支持 HDCP2.3 及 HDCP1.4</li></th>
        </tr>
        <tr>
            <th rowspan="4">显示输出接口</th>
            <th>HDMI/eDP TX interface</th>
            <th>≤2</th>
            <th colspan="2"><li>支持 2 个 HDMI/eDP TX 复用接口（HDMI 和 eDP 不能同时工作）</li><li>HDMI 支持 7680×4320@60Hz 分辨率，支持 3,6,8,10,12Gbps 带宽，支持 HDCP2.3 </li><li>eDP 支持 4K@60Hz 分辨率，每个接口支持 x1,x2,x4 配置，支持 1.62Gbps,2.7Gbps 以及 5.4Gbps 带宽，支持 HDCP1.3</li></th>
        </tr>
        <tr>
            <th>DP TX</th>
            <th>2</th>
            <th colspan="2"><li>支持 2 路 DP TX 1.4a 接口，可连接 USB3.1 Gen1，支持 1/2/4lanes</li><li>分辨率可达 8192x4320@30Hz</li><li>支持 HDCP2.3, HDCP 1.3</li></th>
        </tr>
        <tr>
            <th>MIPI DSI</th>
            <th>2</th>
            <th colspan="2"><li>支持 2 个 MIPI DPHY 2.0 或 CPHY 1.1，分辨率可达 4K@60Hz</li><li>支持左右模式双 MIPI 显示，支持 RGB/YUV 格式(最高 10bit)</li></th>
        </tr>
        <tr>
            <th>BT.1120 video output</th>
            <th>≤1</th>
            <th colspan="2"><li>支持 RGB 格式 (最高 8bit)，数据速率可达 150MHz</li><li>分辨率高达 1920x1080@60Hz</li></th>
        </tr>
        <tr>
            <th rowspan="3">音频接口</th>
            <th>I2S</th>
            <th>≤4</th>
            <th colspan="2"><li>8 lanes I2S0/I2S1：支持 TX 和 RX，音频分辨率 16-32 位，采样率达 192KHz</li><li>2 lanes I2S2/I2S3：支持 TX 和 RX，音频分辨率 16-32 位，采样率达 192KHz </li></th>
        </tr>
        <tr>
            <th>SPDIF</th>
            <th>≤2</th>
            <th colspan="2"><li>支持 2x 16bit 音频数据存储</li><li>支持双相立体声输出</li></th>
        </tr>
        <tr>
            <th>PDM</th>
            <th>≤2</th>
            <th colspan="2"><li>最高 8 channels，音频分辨率 16~24 位，采样率达 192KHz</li><li>支持 PDM 主接收模式</li></th>
        </tr>
        <tr>
            <th>网络接口</th>
            <th>GMAC</th>
            <th>≤2</th>
            <th colspan="2"><li>2 路 GMAC，提供 RGMII / RMII 接口引出</li><li>支持 10/100/1000Mbps 数据传输速率</li></th>
        </tr>
        <tr>
            <th rowspan="10">通信接口</th>
            <th>SDIO</th>
            <th>≤1</th>
            <th colspan="2"><li>支持 SDIO3.0</li></th>
        </tr>
        <tr>
            <th>USB 2.0 Host</th>
            <th>2</th>
            <th colspan="2"><li>支持两路 USB2.0 Host</li></th>
        </tr>
        <tr>
            <th>SATA</th>
            <th>≤3</th>
            <th><li>拥有3个SATA3.0控制器，和PCIe2.0以及USB_HOST2控制器复用 PIPE PHY0/1/2</li><li>支持 eSATA, 最高支持 6Gbps 数据速率</li></th>
            <th rowspan="3"><li>Combo PIPE PHY0 support：SATA/PCIe2.1</li><li>Combo PIPE PHY1 support：SATA/PCIe2.1</li><li>Combo PIPE PHY2 support：SATA/PCIe2.1/USB3.1 Gen1</li></th>
        </tr>
        <tr>
            <th>USB3.1 Gen1</th>
            <th>≤3</th>
            <th><li>USB3.1 Gen1 数据速率高达 5Gbps</li><li>2路USB3.1 OTG， 与 DP TX (USB3OTG_0 和 USB3OTG_1)复用，USB3OTG_0 和 USB3OTG_1 支持USB Type-C 和 DP Alt</li><li>1 路 USB3.1 Host，与 PIPE PHY2 (USB3OTG_2)复用</li></th>
        </tr>
        <tr>
            <th>PCIe2.1</th>
            <th>≤3</th>
            <th><li>每 PCIe2.1 接口支持 1lane，最高支持 5Gbps 数据速率</li></th>
        </tr>
        <tr>
            <th>PCIe3.0</th>
            <th>≤4</th>
            <th colspan="2" ><li>支持 RC 和 EP</li><li>每通道最高支持 8Gbps 数据速率</li><li>支持 4 种组合方式：1 路 x4、2 路 x2、4 路 x1、1 路 x2+2 路 x1</li></th>
        </tr>
        <tr>
            <th>SPI</th>
            <th>≤5</th>
            <th colspan="2"><li>每个控制器支持两路片选输出</li><li>支持串行主、串行从模式，软件可配置</li></th>
        </tr>
        <tr>
            <th>I2C</th>
            <th>≤9</th>
            <th colspan="2"><li>支持 7 位和 10 位地址模式</li><li>标准模式数据传输速率可达100k bits/s，在快速模式下高达400k bits/s；</li></th>
        </tr>
        <tr>
            <th>UART</th>
            <th>≤10</th>
            <th colspan="2"><li>内置 2 路 64bit FIFO，可分别用于 TX 和 RX</li><li>支持 5 位、6 位、7 位、8 位串行数据收发，波特率高达 4Mbps</li><li>10 路 UART 均支持自动流控模式</li></th>
        </tr>
        <tr>
            <th>CAN</th>
            <th>≤3</th>
            <th colspan="2"><li>支持 3 路 CAN 2.0B</li><li>支持 CAN 标准帧和扩展帧收发</li></th>
        </tr>
        <tr>
            <th rowspan="3">其他接口</th>
            <th>GPIO</th>
            <th>GPIOs</th>
            <th colspan="2"><li>所有 GPIO 均可用于产生中断</li><li>支持电平触发和边沿触发中断</li><li>支持可配置的上拉方向（弱上拉和弱下拉）</li></th>
        </tr>
        <tr>
            <th>ADC</th>
            <th>≤7</th>
            <th colspan="2"><li>支持 7 路 12bit 单端输入 SAR-ADC，采样率高达 1MS/s</li></th>
        </tr>
        <tr>
            <th>PWM</th>
            <th>≤16</th>
            <th colspan="2"><li>最高支持 16 个片上 PWM，支持捕获模式</li><li>针对 PWM3、PWM7、PWM11、PWM15 的 IR 应用进行了优化</li></th>
        </tr>
    </tbody>
</table>
</details>

:::info

表中接口数量为硬件设计或CPU理论最大值，其中多数功能引脚为复用关系，为方便配置请参考LM7的**[《引脚功能表格》](#硬件资料)**表格； 

:::

## 开发资料

### SDK源码
<div class="cards">
<a href="https://github.com/ArmSoM/armsom-w3-bsp" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>Source Code</h2>
            <p>ArmSoM bsp</p>
        </div>
    </div>
</a>

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>W3 kernel</h2>
            <p>Improved Rockchip Linux</p>
        </div>
    </div>
</a>

<a href="https://github.com/rockchip-linux/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>W3 uboot</h2>
            <p>rockchip-linux/u-boot</p>
        </div>
    </div>
</a>

<a href="https://github.com/torvalds/linux/blob/master/arch/arm64/boot/dts/rockchip/rk3588-armsom-lm7.dtsi" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>LM7 mainline linux</h2>
            <p>torvalds linux</p>
        </div>
    </div>
</a>

<a href="/advanced-manual/rknn-llm" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📕</i>
        </div>
        <div class="content">
            <h2>RKNN-LLM</h2>
            <p>AI models to Rockchip chips</p>
        </div>
    </div>
</a>
</div>

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11-1.png) | debian11 for W3 :  <br/>   Debian 11（代号为"Bullseye"）是Debian项目的最新稳定版本，它于2021年8月14日发布。Debian是一个以自由软件为基础的操作系统，以稳定性、安全性和开放性著称。| [百度网盘](https://pan.baidu.com/s/12-OpwqE97jDgtJQSdE7dhQ?pwd=arms)   |
|![Android](/img/sige/android.png) | Android12 for W3 :    <br/>安卓（Android）是一个基于Linux内核的开放源代码操作系统，主要用于移动设备、平板电脑和智能手表等智能设备。| [百度网盘](https://pan.baidu.com/s/1Vn1I-f5eJNRfcOgfoxsvmQ?pwd=arms)  |

**发布信息**

ArmSoM-W3 的首次官方发布通告请在以下链接查看：[ArmSoM-W3 系统发布通知](http://forum.armsom.org/t/231115-system-release-notice-for-armsom-w3/139)

### 第三方系统
| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for Sige7(bpi-m7) :    <br/> Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  | [armbian固件下载](https://github.com/armbian/community/releases)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)       | ubuntu-rockchip for Sige7 :    <br/>  该项目旨在为Rockchip RK3588设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。 | [ubuntu-rockchip固件下载](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### 硬件资料

<a href="https://pan.baidu.com/s/1yUDpAlh5cOLIkffZSTDUkw?pwd=2daw" class="btn">
  <span>LM7 硬件资料</span>
</a>

<br/>

获取开发套件原理图、PCB、DXF等硬件资料，快速投入开发

[ArmSoM-LM7 引脚功能表格](https://pan.baidu.com/s/1AQzunn1xkaZuGPDZ2xm8HA?pwd=arms) - 引脚功能表格下载

[ArmSoM-LM7 封装](https://pan.baidu.com/s/1Nc6Vn69qGHjM7OoVajX6lw?pwd=arms) - 封装下载

#### LM7开发套件（W3）硬件资料

<div class="cards">
    <a href="https://pan.baidu.com/s/14Q2V7cpsuSdQslvESCSbwg?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>W3 Schematics</h2>
                <p>source files (orcad)</p>
            </div>
        </div>
</a>

<a href="https://pan.baidu.com/s/1yDK_N6rX1hzJPMUGxGBDug?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>W3 PCB</h2>
            <p>PCB source files (PADS) </p>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1e0YIAYYj4hwJQxsiJEKkcw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>W3 2D</h2>
            <p>2D CAD files </p>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1voD9aF5iUpnYs4saAi6ITQ?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>W3 SMD</h2>
            <p>components Position Reference of W3</p>
        </div>
    </div>
</a>
</div>

### 注意

:::tip
不建议使用LM7开发8K显示：
HDMI输出8K对layout走线要求很高，核心板+底板的设计方式基本是无解。

1. 只能采用一体板设计，需注意HDMI信号整个路径不能有换层。

2. 严格按照硬件参考设计说明控制阻抗、等长。

3. HDMI的连接器也要选支持2.1协议的，需要使用支持8K的连接器。

:::

## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/lm7-development-kit](https://www.armsom.org/product-page/lm7-development-kit)
 
ArmSoM 速卖通官方店: [https://www.aliexpress.com/item/3256805435700769.html](https://www.aliexpress.com/item/3256805435700769.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=714003739668](https://item.taobao.com/item.htm?id=714003739668)

OEM&ODM,  请联系: sales@armsom.org

## 注意事项

:::caution [静电保护]
1. 在接触设备之前，请务必佩戴静电手环或采取静电释放措施，以避免静电对开发板造成损害。
2. 进行组装时，应在静电消除环境中进行，避免在干燥和低湿度的条件下操作。
3. 不使用时，请将设备放置在静电袋内，并存储于温度适宜、低湿度的环境中，以防止静电产生。
4. 在处理设备时，请避免摩擦或碰撞，以防产生静电并造成损坏。
5. 握持设备时，尽量避免直接接触主板上的芯片，以免静电损坏芯片。
6. 使用设备时，请勿在运行过程中插拔电线或其他设备，以避免电流冲击导致的损害。
7. 在插拔扩展GPIO/MIPI接口时，请先关闭电源并断开电源线，以避免电流对设备造成损害。
:::

:::danger [注意散热]

在未采取有效散热措施的情况下，主芯片的表面温度可能超过 60 度。在处理设备时，请避免直接接触 SoC 及其周围的电源电感，以免造成烫伤。使用设备时，请确保环境通风良好，以防止局部热量聚集导致过热。同时，请勿将单板机放置在阳光直射的区域。建议根据具体使用情况，选择官方 [散热器风扇](./sige-active-cooling-kit)或[散热外壳](./sige-diy-case1)，或者第三方散热套件，以确保设备的良好散热性能。

:::