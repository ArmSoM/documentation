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
[ArmSoM-Sige7](./armsom-sige7) 单板计算机;

[ArmSoM-AIM7](./armsom-aim7) AI核心板, [ArmSoM-AIM-IO](./armsom-aimio) AIM7配套IO板;

[ArmSoM-LM7](./armsom-lm7) LGA核心板, [ArmSoM-W3](./armsom-w3) LGA核心板开发套件 ;

依托强大的生态系统以及各式各样的扩展配件，ArmSoM 可以帮助用户轻松实现从创意到原型再到批量生产的交付，是创客、梦想家、业余爱好者的理想创意平台。
:::

### 关键参数

- SOC：瑞芯微 RK3588
- CPU：RK3588 四核Cortex-A76@ 2.4GHz+四核Cortex-A55@ 1.8GHz，8纳米制程
- GPU：ARM Mali-G610 MP4
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算
- VPU/编解码：
  - 硬解码：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8
  - 硬编码：8K@30fps H.265 / H.264
- RAM：4GB/8GB/16GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB
- Flash：16GB/32GB/64GB/128GB eMMC，默认eMMC 32GB
- 工作电压：电压 4V（电压误差±5%）
- 工作温度：0℃ ~ 70℃
- 接口类型：LGA封装（栅格阵列封装），总引脚数 506Pin
- 操作系统：
  - Rockchip官方支持：Android 12.0，Debian11，Buildroot
  - 第三方支持：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS
- PCB：12 层 PCB 板设计
- 重量：约 13.4克
- 大小：45mm × 50mm × 4.5mm (top: 2.2mm+PCB: 1.2mm +bottom: 1.1mm)

## 硬件信息

### 硬件接口

:::info

ArmSoM-LM7拥有极小尺寸，约为信用卡的一半大小。

:::
![ArmSoM-LM7 front & back](/img/lm/armsom-rk3588_lga_core_board_front_back.png)
![ArmSoM-LM7 & Credit-Card-Size.webp](/img/lm/Credit-Card-Size.webp)

### 硬件规格

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
            <th colspan="2"><li>支持 3.4Gbps~6Gbps HDMI 2.0</li><li>支持 250Mbps~3.4Gbps HDMI 1.4b</li><li>支持 HDCP2.3 及 HDCP1.4</li></th>
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
            <th colspan="2"><li>8 lanes I2S0/I2S1：支持 TX 和 RX，音频分辨率 16~32 位，采样率达 192KHz</li><li>2 lanes I2S2/I2S3：支持 TX 和 RX，音频分辨率 16~32 位，采样率达 192KHz </li></th>
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

:::info

表中接口数量为硬件设计或CPU理论最大值，其中多数功能引脚为复用关系，为方便配置请参考LM7的**[《引脚功能表格》](#引脚功能表格)**表格； 

:::


## 开发资料

### SDK源码

[ArmSoM-W3 BSP](https://github.com/ArmSoM/armsom-w3-bsp)

[ArmSoM-W3 kernel](https://github.com/ArmSoM/ubuntu-linux-rockchip)

[ArmSoM-W3 uboot](https://github.com/ArmSoM/u-boot)

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。

以下系统已由ArmSoM官方测试验证：

网盘地址：[百度网盘链接](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

**debain bullseye**

固件位置：3. Linux镜像/debian/ArmSoM-LM7(Development Kit ArmSoM-W3) - [百度网盘链接](https://pan.baidu.com/s/1fbImGcfnfG4rCvNtgXDLsw?pwd=arms) 

**安卓12**

固件位置：4. 安卓镜像/ArmSoM-LM7(Development Kit ArmSoM-W3) - [百度网盘链接](https://pan.baidu.com/s/1UYyrFEhOhZ5qgwGND4-EVA?pwd=arms ) 

**发布信息**

ArmSoM-W3 的首次官方发布通告请在以下链接查看：
[ArmSoM-W3 系统发布通知](http://forum.armsom.org/t/231115-system-release-notice-for-armsom-w3/139)

### 第三方系统

#### armbian
![armbian-logo](/img/armbian-logo.webp)

[Armbian_23.11.0-trunk_Armsom-w3_bookworm_legacy_5.10.160.img](https://pan.baidu.com/s/1URvyxKoox207rWwsMJmCyQ?pwd=arms)

[Armbian_23.11.0-trunk_Armsom-w3_bookworm_legacy_5.10.160_cinnamon_desktop.img](https://pan.baidu.com/s/1w7v7b1BJ1ubJYrIlFchqUw?pwd=arms)

[Armbian_23.11.0-trunk_Armsom-w3_jammy_legacy_5.10.160.img](https://pan.baidu.com/s/1-6qgLxC7CbiNObRmJdFTDQ?pwd=arms)

[Armbian_23.11.0-trunk_Armsom-w3_jammy_legacy_5.10.160_xfce_desktop.img](https://pan.baidu.com/s/1Pr0IJNrffxx7aLJ-eZLUUA?pwd=arms )

#### Joshua-Riek/ubuntu-rockchip

固件位置: 3. Linux Images/ubuntu/ArmSoM-Sige7 - [百度网盘](https://pan.baidu.com/s/1KRlG_lHbbmv8oBcxNOveQQ?pwd=arms ) 

[joshua-ubuntu-rockchip-download](https://joshua-riek.github.io/ubuntu-rockchip-download/boards/armsom-sige7.html)


### 硬件资料

获取开发套件原理图、PCB、DXF等硬件资料，快速投入开发

[ArmSoM-LM7 引脚功能表格](https://pan.baidu.com/s/1E8Jb8mRqKdrFxWH5tXMYTg?pwd=arms) - 引脚功能表格下载

[ArmSoM-LM7 封装](https://pan.baidu.com/s/1wIp67X337sZ5VEN-HnN-wA?pwd=arms ) - 封装下载

[ArmSoM-W3_1V1 原理图pdf，orcad源文件](https://pan.baidu.com/s/1DV2GP11qEcxgJsmts5LtuA?pwd=arms ) - 原理图pdf，源文件（orcad）下载

[ArmSoM-W3_1V1 PCB PADS](https://pan.baidu.com/s/1H45A34d7bLm00fh1Oj0ynA?pwd=arms ) - PCB源文件（PADS）下载

[ArmSoM-W3 Top, Bottom](https://pan.baidu.com/s/1KKVkZcszuTWFLTrPl4541g?pwd=arms) - 2D CAD 文件下载

[ArmSoM-W3_1V1 位号图](https://pan.baidu.com/s/1zZ59b95ROjsHF3TlcG-cNA?pwd=arms) -  位号图下载

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