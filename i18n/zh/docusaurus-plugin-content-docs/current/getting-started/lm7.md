---
description: ArmSoM-LM7采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，采用了LGA封装，传输能力和稳定性更强。拥有丰富的接口，支持多硬盘、千兆网、WiFi6、5G/4G扩展和多种视频输入输出。支持多种操作系统；提供底板参考设计资料，用户可自主深度化定制。
keywords: [armsom, armsom-lm7, armsom-w3, maker kit, rockchip, rk3588]
sidebar_label: "LM7"
sidebar_position: 4
---

# 产品简介

让我们在 5 分钟内了解 LM7。

## 简介

ArmSoM-LM7采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，采用了LGA封装，传输能力和稳定性更强。拥有丰富的接口，支持多硬盘、千兆网、WiFi6、5G/4G扩展和多种视频输入输出。支持多种操作系统；提供底板参考设计资料，用户可自主深度化定制。可适用于ARM PC、边缘计算、云服务器、人工智能、云计算、虚拟/增强现实、区块链、智能NVR等领域

## 关键参数

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

## 实物图(LM7及LM7-M)

:::info

ArmSoM-LM7拥有极小尺寸，约为信用卡的一半大小。

:::
![ArmSoM-LM7 front & back](/img/lm/lm7/armsom-rk3588_lga_core_board_front_back.png)
![ArmSoM-LM7 & Credit-Card-Size.webp](/img/lm/lm7/Credit-Card-Size.webp)

## 硬件规格

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

## ArmSoM-LM7 开发套件(ArmSoM-W3)

### 实物图搭载 RK3588M

![ArmSoM-LM7-M development kit](/img/lm/lm7/armsom-lm7-m-development-kit.jpg)

### 实物图搭载 RK3588

![ArmSoM-LM7 development kit](/img/lm/lm7/armsom-lm7-development-kit.jpg)

### 硬件规格


<table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能参数</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3588/RK3588M/RK3588J</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3588 四核Cortex-A76@ 2.4GHz+四核Cortex-A55@ 1.8GHz，8纳米制程</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>GPU Mali-G610 MP4 (4x256KB L2 Cache)</li><li>支持 OpenGL ES3.2/OpenCL2.2/Vulkan1.1</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8(3 NPU core)</li><li>支持 INT4/INT8/INT16 混合运算</li><li>支持深度学习框架：TensorFlow/MXNet/PyTorch/Caffe/Tflite/Onnx NN/Android NN 等</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8</li><li>硬编码：8K@30fps H.265 / H.264</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>集成48MP ISP with HDR&3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>4GB/8GB/16GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>16GB/32GB/64GB/128GB/256GB eMMC，默认eMMC 32GB</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key E 接口(PCIe 2.1 1-lane)，支持PCIe/SATA/USB/SDIO/UART 并可外接Bluetooth/WIFI模块</li><li>1x M.2 Key M 接口(PCIe 3.0 4- lanes)，可拓展 SSD：Type 2280/2260/2242/2230，目前默认使用2280</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>1x 2.5G网口</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>2x HDMI OUT2.1，其中一个HDMI OUT 支持 8K@60fps 或者 4K@120fps另一个HDMI OUT 支持 4K@60fps</li><li>1x MIPI DSI分辨率可达 4K@60Hz</li><li>1x DP1.4分辨率可达 8192x4320@30Hz</li></th>
        </tr>
        <tr>
            <th>视频输入</th>
            <th><li>1x HDMI IN2.0，支持3.4Gbps~6Gbps</li><li>1x 4Lanes MIPI CSI / 2x 2Lanes MIPI CSI，每线最高 2.5Gbps</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>2x HDMI音频输出</li><li>1x Audio Jack 3.5mm（ES8316）音频输出</li><li>1x Type-C 3.1 (DP1.4)音频输出</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>2x USB3.0（USB3.1 Gen1），支持USB3.1 Gen1，相当于USB3.2 Gen1和USB3.0，高达5Gbps数据速率</li><li>2x USB2.0，支持高速（480Mbps）、全速（12Mbps）和低速（1.5Mbps）模式</li><li>1x USB Type-C 3.1（DP1.4/OTG/PD 快充）</li></th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th><li>和树莓派40pin可完全兼容，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/ADC/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>1x 5V风扇接口</li><li>1x 电池输入连接器用于低功耗RTC芯片HYM8563TS的供电</li><li>1x RGB灯，供电正常时绿灯亮，系统正常时蓝色灯开始闪烁，红色灯由用户控制</li><li>1x 调试串口uart, 3-Pin 2.54mm连接头, 3.3V level, 1500000bps</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>支持DC 12V/2.5A Aperture 2.5mm</li><li>支持USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A</li><li>支持12V PoE</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x PWRON键，支持休眠唤醒</li><li>1x Reset键，支持重启</li><li>1x Recovery键，支持进入loader烧录模式</li><li>1x Maskrom键，支持进入maskrom烧录模式</li></th>
        </tr>
        <tr>
            <th>系统</th>
            <th><li>Rockchip官方支持：Android 12.0，Debian11，Buildroot</li><li>第三方支持：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS</li></th>
        </tr>
        <tr>
            <th>尺寸</th>
            <th><li>148 mm x 100.5mm</li></th>
        </tr>
        <tr>
            <th>工作温度</th>
            <th><li>RK3588：0℃ ~ 70℃</li><li>RK3588M：-40℃ ~ 85℃</li></th>
        </tr>
    </tbody>
</table>



## 系统镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。

### 官方镜像


以下系统已由ArmSoM官方测试验证：

网盘地址：[百度网盘链接](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

**debain bullseye**

固件位置：3. Linux镜像/debian/ArmSoM-LM7(Development Kit ArmSoM-W3)

**安卓12**

固件位置：4. 安卓镜像/ArmSoM-LM7(Development Kit ArmSoM-W3)

#### 发布信息

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

固件位置：[ubuntu-rockchip](https://joshua-riek.github.io/ubuntu-rockchip-download/boards/armsom-w3.html)


## SDK源码

[ArmSoM-W3 BSP](https://github.com/ArmSoM/armsom-w3-bsp)

[ArmSoM-W3 kernel](https://github.com/ArmSoM/ubuntu-linux-rockchip)

[ArmSoM-W3 uboot](https://github.com/ArmSoM/u-boot)

## 硬件资料

获取开发套件原理图、PCB、DXF等硬件资料，快速投入开发

#### 引脚功能表格

[ArmSoM-LM7 引脚功能表格](https://pan.baidu.com/s/1E8Jb8mRqKdrFxWH5tXMYTg?pwd=arms) - 引脚功能表格下载

#### 封装

[ArmSoM-LM7 封装](https://pan.baidu.com/s/1wIp67X337sZ5VEN-HnN-wA?pwd=arms ) - 封装下载

### LM7 开发套件(ArmSoM-W3) 硬件资料

#### 原理图

[ArmSoM-W3_1V1 原理图pdf，orcad源文件](https://pan.baidu.com/s/1DV2GP11qEcxgJsmts5LtuA?pwd=arms ) - 原理图pdf，源文件（orcad）下载

#### PCB

[ArmSoM-W3_1V1 PCB PADS](https://pan.baidu.com/s/1H45A34d7bLm00fh1Oj0ynA?pwd=arms ) - PCB源文件（PADS）下载

#### 2D CAD 图

[ArmSoM-W3 Top, Bottom](https://pan.baidu.com/s/1KKVkZcszuTWFLTrPl4541g?pwd=arms) - 2D CAD 文件下载

#### 位号图

[ArmSoM-W3_1V1 位号图](https://pan.baidu.com/s/1zZ59b95ROjsHF3TlcG-cNA?pwd=arms) -  位号图下载

### 硬件引脚定义

#### 40-pin 座子

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

#### MIPI CSI
0.5mm FPC 连接器

|Pin |   MIPI-CSI |   描述   |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,19,21,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_CSI0_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_CSI0_RX_D3P                  |   MIPI RX Lane3 iuput P |
|5          | MIPI_CSI0_RX_D2N |   MIPI RX Lane2 iuput N |
|6          | MIPI_CSI0_RX_D2P|   MIPI RX Lane2 iuput P |
|8          | MIPI_CSI0_RX_CLK1N|   MIPI RX Clock iuput N |
|9         | MIPI_CSI0_RX_CLK1P |   MIPI RX Clock iuput P |
|11         |  MIPI_CSI0_RX_D1N |   MIPI RX Lane1 iuput N |
|12         | MIPI_CSI0_RX_D1P |   MIPI RX Lane1 iuput P |
|14         | MIPI_CSI0_RX_D0N|    MIPI RX Lane0 iuput N |
|15         | MIPI_CSI0_RX_D0P |    MIPI RX Lane0 iuput P |
|17         | MIPI_CSI0_RX_CLK0N|   MIPI RX Clock iuput N |
|18         | MIPI_CSI0_RX_CLK0P|  MIPI RX Clock iuput P |
|20         | MIPI_CAM3_CLKOUT |    1.8V, CLock ouput for Sensor |
|22         | MIPI_CAM1_CLKOUT |   1.8V, CLock ouput for Sensor |
|23         | MIPI_CSI0_PDN0_H(GPIO1_B0) |    1.8V, GPIO |
|24         | I2C3_SCL_M0_MIPI |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on w3 |
|25         | I2C3_SDA_M0_MIPI |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on w3 |
|26         | MIPI_CSI0_PDN1_H(GPIO1_A7)|  1.8V, GPIO |
|27         | CM_RST_L(GPIO4_A0)|   3.3V, GPIO |
|28,29      | VCC_RX|   3.3V Power ouput |
|30,31      | VCC_5V0|   5V Power ouput |

#### MIPI DSI
0.5mm FPC 连接器 (J23)

|Pin |   MIPI-DSI  |   描述     |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,27,33,34      | GND                |   Power and Signal Ground | 
|2                            | MIPI_DPHY1_TX_D0N  |  MIPI1 TX Lane0 ouput N | 
|3                            | MIPI_DPHY1_TX_D0P      |   MIPI1 TX Lane0 ouput P |
|5                            | MIPI_DPHY1_TX_D1N        |    MIPI1 TX Lane1 ouput N |
|6                            | MIPI_DPHY1_TX_D1P         |   MIPI1 TX Lane1 ouput P | 
|8                            | MIPI_DPHY1_TX_CLKN   |   MIPI1 TX Clock ouput N | 
|9                            | MIPI_DPHY1_TX_CLKP           |    MIPI1 TX Clock ouput P |
|11                           | MIPI_DPHY1_TX_D2N                |   MIPI1 TX Lane2 ouput N |
|12                           | MIPI_DPHY1_TX_D2P                |   MIPI1 TX Lane2 ouput P |
|14                           | MIPI_DPHY1_TX_D3N |   MIPI1 TX Lane3 ouput N | 
|15                           | MIPI_DPHY1_TX_D3P |   MIPI1 TX Lane3 ouput P | 
|17                           | LCD_PWM (PWM2_M2/GPIO4_C2) |   1.8V, GPIO/PWM |
|18,19                        | VCC3V3_LCD |   3.3V Power ouput | 
|20                           | LCD_RESET (GPIO2_C1) |   1.8V, GPIO |
|21                           | /NC |   No Connection | 
|22                           | LCD_BL_EN (GPIO3_A1) |   3.3V, GPIO |
|23                           | I2C6_SCL_M0 |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on w3 |
|24                           | I2C6_SDA_M0|   1.8V, I2C Data, pulled up to 1.8V with 2.2K on w3 |
|25                           | TP_INT (GPIO0_D3) |    1.8V, GPIO |
|26                           | TP_RST (GPIO0_C6)|   1.8V, GPIO |
|28,29                        | VCC5V0_LCD |  5V Power ouput |
|31,32                        | VCC_1V8 |  1.8V Power ouput |

#### Debug UART
3.3V level signals, 1500000bps

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | UART2_RX_M0 | intput |
|2    | UART2_TX_M0 | output |
|3    | GND      | 0V

#### PoE In
1.25mm 连接器

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VC1 | TX1 |
|2    | VC2 | RX1 |
|3    | VC3 | TX2 |
|4    | VC4 | RX2 |

#### PoE Out
2.0mm 连接器

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VDD_POE | 12V Power ouput |
|2    | VDD_POE | 12V Power ouput |
|3    | GND | 地 |
|4    | GND | 地 |

### 注意

:::tip
不建议使用LM7开发8K显示：
HDMI输出8K对layout走线要求很高，核心板+底板的设计方式基本是无解。

1. 只能采用一体板设计，需注意HDMI信号整个路径不能有换层。

2. 严格按照硬件参考设计说明控制阻抗、等长。

3. HDMI的连接器也要选支持2.1协议的，需要使用支持8K的连接器。

:::