---
description: ArmSoM-Sige7采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，拥有丰富的接口，支持双2.5G网口、WiFi6 & BT5和多种视频输出。
keywords: [armsom, armsom-sige7, maker kit, rockchip, rk3588产品介绍]
sidebar_label: "Sige7"
sidebar_position: 2
slug: /armsom-sige7
---

# Sige7 产品简介

让我们在 5 分钟内了解 Sige7。

## 简介

ArmSoM-Sige7采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，拥有丰富的接口，支持双2.5G网口、WiFi6 & BT5和多种视频输出。支持多种操作系统, 可适用于ARM PC、边缘计算、云服务器、人工智能、云计算、虚拟/增强现实、区块链、智能NVR等领域

![ArmSoM-sige7](/img/sige/sige7.jpg)

:::tip Rockchip RK3588
[ArmSoM-Sige7](./armsom-sige7) 单板计算机;

[ArmSoM-AIM7](./armsom-aim7) AI核心板, [ArmSoM-AIM-IO](./armsom-aimio) AIM7配套IO板;

[ArmSoM-LM7](./armsom-lm7) LGA核心板, [ArmSoM-W3](./armsom-w3) LGA核心板开发套件;

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
- RAM：8GB/16GB/32GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB
- Flash：64GB/128GB eMMC，默认eMMC 64GB
- 工作电压：具有宽范围的输入电压，从5V到20V（电压误差±5%）
- 工作温度：0℃ ~ 80℃
- 操作系统：
  - Rockchip官方支持：Android 12.0，Debian11，Buildroot
  - 第三方支持：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS
- PCB：12 层 PCB 板设计
- 重量：46.6g
- 大小：92mm × 62mm x 14.6mm

## 使用手册

<a href="./sige-family-started" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>Sige使用手册</h2>
            <p>如何开始使用你的Sige</p>
        </div>
    </div>
</a>

## 硬件信息

### 硬件接口

![ArmSoM-Sige7 front & back](/img/sige/armsom-sige7-layout.webp)
![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)

:::tip
Sige7上有两个长得一样的Type-C接口，其中Type-C(PD Only)才是电源接口。
:::

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
            <th><li>RockChip RK3588</li></th>
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
            <th><li>8GB/16GB/32GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>16GB/32GB/64GB/128GB eMMC，默认eMMC 64GB</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M 接口(PCIe 3.0 4- lanes)，可拓展 SSD：Type 2280/2260/2242/2230，目前默认使用2280</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>2x 2.5G网口</li><li>板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 和 BT5 (AP6275P)</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>1x HDMI OUT2.1，支持 8K@60fps</li><li>1x MIPI DSI 分辨率最高可达 4K@60fps</li><li>1x DP1.4 分辨率最高可达 8K@30fps</li></th>
        </tr>
        <tr>
            <th>视频输入</th>
            <th><li>2x 4Lanes MIPI CSI，每线最高 2.5Gbps</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1x HDMI音频输出</li><li>1x HP-OUT 音频输出</li><li>1x USB Type-C 3.0 (DP1.4)音频输出</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>1x USB3.0（支持USB3.1 Gen1），高达5Gbps数据速率</li><li>1x USB Type-C 3.0（DP1.4/OTG）</li><li>1x USB2.0，支持高速（480Mbps）、全速（12Mbps）和低速（1.5Mbps）模式</li></th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th><li>和树莓派40pin可完全兼容，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/ADC/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>1x 5V风扇接口</li><li>1x 电池输入连接器用于低功耗RTC芯片 LK8563S 的供电</li><li>2x LED灯，系统正常时绿色灯开始闪烁，红色灯由用户控制</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>支持USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x PWRON键，支持休眠唤醒</li><li>1x Reset键，支持重启</li><li>1x Maskrom键，支持进入maskrom烧录模式</li></th>
        </tr>
        <tr>
            <th>系统</th>
            <th><li>Rockchip官方支持：Android 12.0，Debian11，Buildroot</li><li>第三方支持：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS</li></th>
        </tr>
        <tr>
            <th>尺寸</th>
            <th><li>92 mm x 62mm</li></th>
        </tr>
        <tr>
            <th>工作温度</th>
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>

### RK3588框图

![RK3588](/img/sige/rk3588.png)

### 引脚定义

#### 40-pin 座子

<div className='gpio_style'>

| GPIO number |  功能 |   Pin    |  Pin     |  功能  | GPIO number |
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |
|     139     | I2S1_SDO2_M0 / I2C7_SDA_M3 / UART8_CTSN_M0 / PWM15_IR_M1 / CAN1_TX_M1 / GPIO4_B3 /| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     138     | I2S1_SDO1_M0 / I2C7_SCL_M3 / UART8_RTSN_M0 /  PWM14_M1   / CAN1_RX_M1 / GPIO4_B2  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     115     | SPI1_CS1_M1 / I2C8_SDA_M4 / UART7_CTSN_M1 / PWM15_IR_M0 / GPIO3_C3  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  GPIO0_B5 / <div className='orange-txt'>UART2_TX_M0</div> / I2C1_SCL_M0 / I2S1_MCLK_M1  / JTAG_TCK_M2|     13      |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  GPIO0_B6  / <div className='orange-txt'>UART2_RX_M0</div> / I2C1_SDA_M0 / I2S1_SCLK_M1 /  JTAG_TMS_M2  |     14      |
|     113     |  SPI1_CLK_M1 / UART7_RX_M1 / GPIO3_C1  | <div className='green'>11</div>  | <div className='green'>12</div> |  GPIO3_B5  / CAN1_RX_M0 / PWM12_M0  /UART3_TX_M1 / I2S2_SCLK_M1 |     109     |
|     111     |  SPI1_MOSI_M1 / I2C3_SCL_M1 / GPIO3_B7  | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|     112     |   SPI1_MISO_M1 / I2C3_SDA_M1 / UART7_TX_M1  / GPIO3_C0  | <div className='green'>15</div>  | <div className='green'>16</div> |  GPIO3_A4 / SPI4_CS1_M1 / I2S3_SDI / UART8_RTSN_M1  |     100     |
|             |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> |  GPIO4_C4 / PWM5_M2 / SPI3_MISO_M0 |    148     |
|     42      | SPI0_MOSI_M2 / UART4_RX_M2 / GPIO1_B2  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |             |
|     41      | SPI0_MISO_M2 / GPIO1_B1  | <div className='green'>21</div>  | <div className='green'>22</div> | SARADC_IN4          |             |
|     43      | SPI0_CLK_M2 / UART4_TX_M2 / GPIO1_B3  | <div className='green'>23</div>  | <div className='green'>24</div> |  GPIO1_B4 / UART7_RX_M2  /SPI0_CS0_M2 |     44      |
|             |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |  GPIO1_B5  / UART7_TX_M2 / SPI0_CS1_M2 |     45      |
|     150     | SPI3_CLK_M0 / I2C0_SDA_M1 / PWM7_IR_M3 / GPIO4_C6  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  GPIO4_C5 / PWM6_M2 / I2C0_SCL_M1 /
|     63      | UART1_CTSN_M1 / PWM15_IR_M3 / GPIO1_D7  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|     47      | SPDIF_TX_M0 / UART1_RX_M1 / PWM13_M2 / GPIO1_B7  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO3_C2 / PWM14_M0 / UART7_RTSN_M1 / I2C8_SCL_M4 / SPI1_CS0_M1  |    114     |
|     103     | PWM8_M0 / GPIO3_A7  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |             |
|     110     | I2S2_LRCK_M1 / UART3_RX_M1 / PWM13_M0 / CAN1_TX_M0 / GPIO3_B6  | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO3_B1 / PWM2_M1 / UART2_TX_M2 |     105     |
|      0      | REFCLK_OUT / GPIO0_A0	    | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO3_B2 /PWM3_IR_M1 / UART2_RX_M2 / I2S2_SDI_M1   |     106     |
|             |   GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO3_B3 /  UART2_RTSN / I2S2_SDO_M1   |     107     |

</div>

#### MIPI CSI0
0.5mm FPC 连接器

|Pin |   MIPI-CSI |   描述   |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
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
|19         | MIPI_VSYNC        |    |
|20         | MIPI_CAM3_CLKOUT |    1.8V, CLock ouput for Sensor |
|21         | MIPI_HSYNC        |    |
|22         | MIPI_CAM1_CLKOUT |   1.8V, CLock ouput for Sensor |
|23         | MIPI_CSI0_PDN0_H(GPIO1_B0) |    1.8V, GPIO |
|24         | I2C3_SCL_M0_MIPI |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|25         | I2C3_SDA_M0_MIPI |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|26         | MIPI_CSI0_PDN1_H(GPIO1_A7)|  1.8V, GPIO |
|27         | CM_RST_L(GPIO4_A0)|   3.3V, GPIO |
|28,29      | VCC_RX|   3.3V Power ouput |
|30,31      | VCC_5V0|   5V Power ouput |

#### MIPI CSI1
0.5mm FPC 连接器

|Pin |   MIPI-CSI |   描述   |
|:--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_CSI1_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_CSI1_RX_D3P   |   MIPI RX Lane3 iuput P |
|5     | MIPI_CSI1_RX_D2N |   MIPI RX Lane2 iuput N |
|6     | MIPI_CSI1_RX_D2P|   MIPI RX Lane2 iuput P |
|8     | MIPI_CSI1_RX_CLK1N|   MIPI RX Clock iuput N |
|9     | MIPI_CSI1_RX_CLK1P |   MIPI RX Clock iuput P |
|11    | MIPI_CSI1_RX_D1N |   MIPI RX Lane1 iuput N |
|12    | MIPI_CSI1_RX_D1P |   MIPI RX Lane1 iuput P |
|14    | MIPI_CSI1_RX_D0N|    MIPI RX Lane0 iuput N |
|15    | MIPI_CSI1_RX_D0P |    MIPI RX Lane0 iuput P |
|17    | MIPI_CSI1_RX_CLK0N|   MIPI RX Clock iuput N |
|18    | MIPI_CSI1_RX_CLK0P|  MIPI RX Clock iuput P |
|19    | MIPI_VSYNC        |    |
|20    | MIPI_CAM3_CLKOUT / GPIO1_B7 |    1.8V, CLock ouput for Sensor / GPIO |
|21    | MIPI_HSYNC        |    |
|22    | MIPI_CAM0_CLKOUT |   1.8V, CLock ouput for Sensor |
|23    | MIPI_CSI1_PDN0_H(GPIO1_B0) |    1.8V, GPIO |
|24    | I2C3_SCL_M0_MIPI |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|25    | I2C3_SDA_M0_MIPI |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|26    | MIPI_CSI0_PDN1_H(GPIO1_A7)|  1.8V, GPIO |
|27    | CM2_RST_L(GPIO4_A0)|   3.3V, GPIO |
|28,29 | VCC_RX|   3.3V Power ouput |
|30,31 | VCC_5V0|   5V Power ouput |

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
|23                           | I2C6_SCL_M0 |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on Sige7 |
|24                           | I2C6_SDA_M0 |  1.8V, I2C Data, pulled up to 1.8V with 2.2K on Sige7 |
|25                           | TP_INT (GPIO0_D3) |    1.8V, GPIO |
|26                           | TP_RST (GPIO0_C6)|   1.8V, GPIO |
|28,29                        | VCC5V0_LCD |  5V Power ouput |
|31,32                        | VCC_1V8 |  1.8V Power ouput |

#### Fan
0.8mm 连接器(CN32)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | 地 |
|3    | PWM | PWM控制 |

## 开发资料

### arm-systemready

Download : [Google Drive link](https://drive.google.com/drive/folders/1zzB_xiWJ-70kmDPCx9QHmmN5k6V8J4jE) 

### SDK源码

ArmSoM github source code : [https://github.com/ArmSoM/armsom-build](https://github.com/ArmSoM/armsom-build)

ArmSoM-Sige7 kernel: [https://github.com/ArmSoM/ubuntu-linux-rockchip](https://github.com/ArmSoM/ubuntu-linux-rockchip)

ArmSoM-Sige7 uboot: [https://github.com/ArmSoM/u-boot](https://github.com/ArmSoM/u-boot)

openwrt(istoreos): [https://github.com/istoreos/istoreos](https://github.com/istoreos/istoreos)

RKNN-LLM: [RKNN-LLM](/general-tutorial/rknn-llm)

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。

以下系统已由ArmSoM官方测试验证：

网盘地址：[百度网盘链接](/general-tutorial/cloud-disk)

**debain bullseye**

固件位置：3. Linux镜像/debian/ArmSoM-Sige7 - [百度网盘](https://pan.baidu.com/s/1oRa1GMqjBwpGRnioOdrdSg?pwd=arms ) 

**安卓12**

固件位置：4. 安卓镜像/ArmSoM-Sige7 - [百度网盘](https://pan.baidu.com/s/16dO9cXSmq9w0nXFkckdAkw?pwd=arms)

**openwrt**

固件位置：3. Linux镜像/openwrt/ArmSoM-Sige7- [百度网盘](https://pan.baidu.com/s/1nvlyxaDbpAlKoZYknDSe4g?pwd=arms )

### 第三方镜像

**armbian**

![armbian-logo](/img/armbian-logo.webp)

固件位置：3. Linux镜像/armbian/ArmSoM-Sige7 - - [百度网盘](https://pan.baidu.com/s/1l9hcTq_tG-Q8MxkyOi2yDQ?pwd=arms) 

[armbian/community/releases](https://github.com/armbian/community/releases) 

**Ubuntu**  

固件位置: 3. Linux Images/ubuntu/ArmSoM-Sige7 - [百度网盘](https://pan.baidu.com/s/1KRlG_lHbbmv8oBcxNOveQQ?pwd=arms) 

[joshua-ubuntu-rockchip-download](https://joshua-riek.github.io/ubuntu-rockchip-download/boards/armsom-sige7.html)


### 硬件资料

获取 Sige7 原理图、DXF等硬件资料

点击进入链接: [百度网盘链接](/general-tutorial/cloud-disk)

* [ArmSoM-Sige7_1V1 原理图pdf](https://pan.baidu.com/s/1GUg1hSzNVVuuWlY-_vGloA?pwd=arms) - 原理图pdf

* [ArmSoM-Sige7_1V1 底部，顶部](https://pan.baidu.com/s/10UYqMjc3IjTlguOVMv7JXw?pwd=arms) - 2D CAD 文件下载

* [ArmSoM-Sige7_1V1 位号图](https://pan.baidu.com/s/1Nk5RWFABTPvNcvISxS2c7Q?pwd=arms) -  位号图下载

* [ArmSoM-Sige7 元件datasheet](https://pan.baidu.com/s/1SBVyAAxlQHdpzCAu6ZWJXQ?pwd=arms) -  datasheet下载

:::tip 版本更改记录
V1.1 
* VOL_IC: U27/U7/U6301change part pin;
* USB：U15 fr o m TypeC1 change t o TypeC0; CN31 fr o m USB3. 0 change t o USB2. 0;
* 40PIN：add UART Pr ot ect; J 2&CN2&CN32 change t o WF0. 8;
* CAM：DEL R6352, CSI _1 I2C3 change t o I2C4；
* WIFI Module: AP6275S change to AP6275P;
:::

## 使用手册

Sige7 使用手册，帮助用户了解Sige7的基本使用和需要的准备工作。 当您拿到产品的时候，您需要知道它的型号以及硬件版本，这些信息都可以在板子上的丝印找到。我们会尽可能详细地向您介绍产品的信息。

### 入门准备
在开始使用 ArmSoM-Sige7 之前，请准备好以下物品

#### 工具准备
* Sige7 主板
* 电源: USB Type-C PD
  * 支持 9V/2A, 12V/2A, 15V/2A
* 系统安装（二选一）
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在 Sige7 上写入镜像，您需要 Type-C 数据线连接 Sige7 和 PC。

#### 可选选项
* USB 键盘鼠标
* HDMI显示器和HDMI线
  * Sige7配备了全尺寸 HDMI 接口，最高支持 8K@60 显示。
  * HDMI EDID用于确定最佳显示分辨率。 在支持 1080p（或 4K/8K）的显示器和电视上，将选择此分辨率。 如果不支持 1080p，EDID会找到的下一个可用分辨率。
* Ethernet 线（网线）
  * Sige7 支持以太网上网，最高支持2.5Gb。
  * 网线用于将 Sige7 连接到本地网络和互联网。
* 摄像头模块
  * Sige7 支持拍照功能。
  * 推荐使用imx415模组，可找ArmSoM官方店淘宝客服购买。
* LCD显示屏
  * Sige7 支持LCD显示功能。
  * 推荐使用 ArmSoM Display 10.1 HD，可找ArmSoM官方店淘宝客服购买。
* 音频线
  * 可以使用0.8mm立式插座。
* USB-A型转USB-C型数据线

### 烧录方式选择

[系统镜像烧录](/general-tutorial/flash-img)
### 接口设置

如果您是首次使用 ArmSoM-Sige7，请先熟悉下 [外设接口](#硬件接口)，以便于您更好的理解后续的内容。

#### 调试串口

如下所示连接 USB 转 TTL 串口线：

![armsom-sige7-debug](/img/sige/armsom-sige7-debug.png)

| Sige7       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| GND (pin 6) | --->  | GND |
| TX (pin 8)  | --->  | RX |
| RX (pin 10) | ---> | TX |


#### 2.5G 以太网口

如果您使用的是以太网有线上网方式，请将网线对准 ArmSoM-Sige7 上的 RJ45 端口插入，系统桌面就会弹出有线连接。

- 通过命令 ifconfig 检查以太网是否正常，它会显示网卡 enP2p33s0 或 enP4p65s0 以及以太网 IP 地址。 此外，使用工具 ping 判断是否连通网络。

```bash
ifconfig
ping mi.com
```

- 如果无法ping通，尝试

```bash
$ sudo dhclient enP2p33s0
or
$ sudo dhclient enP4p65s0
```

#### WIFI
```
# 1. Open the WIFI
armsom@armsom-sige7:/# nmcli r wifi on
# 2. Scan WIFI
armsom@armsom-sige7:/# nmcli dev wifi
# 3. Connect to WIFI network
armsom@armsom-sige7:/# nmcli dev wifi connect "wifi_name" password "wifi_password"
```

#### BT

```
# 1. 激活蓝牙
armsom@armsom-sige7:/# service bluetooth start
# 2. 进入bluetoothctl
armsom@armsom-sige7:/# bluetoothctl
# 3. 输入以下命令即可连接
armsom@armsom-sige7:/# power on
armsom@armsom-sige7:/# agent on
armsom@armsom-sige7:/# default-agent
armsom@armsom-sige7:/# scan on
armsom@armsom-sige7:/# pair yourDeviceMAC
```

#### HDMI

ArmSoM-Sige7 有HDMI 输出端口，支持 CEC 和 HDMI 2.1，分辨率最高支持 8Kp60。

#### USB接口

ArmSoM-Sige7 提供一个 USB 2.0 和一个 USB 3.0 端口。

**USB3.0 Camera**

连接usb3.0摄像头后，您可以下载 cheese 然后使用以下命令使用摄像机:

```bash
armsom@armsom-sige7: sudo apt update
armsom@armsom-sige7: sudo apt install cheese
```

同时，您也可以使用终端命令打开相机预览:
```bash
gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;
```

命令拍照:
```bash
gst-launch-1.0 v4l2src device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=/home/armsom/test.jpg;
```

命令拍摄视频:
```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video0 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/armsom/test.mp4
```

![armsom-sige7-gst](/img/sige/armsom-sige7-gst.png)

#### 音频

查看系统中的声卡。

```bash
armsom@armsom-sige7:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchipdp0 [rockchip,dp0], device 0: rockchip,dp0 spdif-hifi-0 [rockchip,dp0 spdif-hifi-0]
 Subdevices: 1/1
 Subdevice #0: subdevice #0
card 1: rockchipes8316 [rockchip-es8316], device 0: fe470000.i2s-ES8316 HiFi es8316.7-0011-0 [fe470000.i2s-ES8316 HiFi es8316.7-0011-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: rockchiphdmi0 [rockchip-hdmi0], device 0: rockchip-hdmi0 i2s-hifi-0 [rockchip-hdmi0 i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

播放音乐

```bash
armsom@armsom-sige7:/# aplay -D plughw:1,0 ./usr/share/sounds/alsa/Front_Right.wav
```

#### 风扇

Sige7 配备一个 5V 的风扇，使用 0.8mm 的连接器

目前风扇默认五个状态

| 温度       | 状态  | PWM转速 |
| --------------- | ----- | ------ |
| 小于50° | 0 | 0 |
| 50°-55°  | 1 | 50 |
| 55°-60° | 2 | 100 |
| 60°-65° | 3 | 150 |
| 65°-70° | 4 | 200 |
| 70°以上 | 5 | 250 |

```
// 查看当前转速 
armsom@armsom-sige7:/# cat /sys/class/hwmon/hwmon9/pwm1
```

#### Type-C

Sige7 配备全功能 USB Type‑C™ 3.0 端口，支持高达 8K@30fps 的 DP 显示

#### 40Pin

Sige7 提供了一个40pin针脚的GPIO座子，兼容于市面上大部分传感器的应用。

#### RGB LED

Sige7 具有两个用户灯 LED 绿灯和红灯。

- 用户绿灯
  默认情况下，其常亮表示系统运行正常。

- 用户红灯
  默认情况下不亮，可由用户自行操控。

用户可通过命令控制

```
armsom@armsom-sige7:/# sudo su
armsom@armsom-sige7:/# echo timer > /sys/class/leds/red/trigger
armsom@armsom-sige7:/# echo activity > /sys/class/leds/red/trigger
```

#### RTC

- Sige7配备了一颗RTC IC **LK8563S**。
- 首先，使用2pin的排针接口，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc LK8563S 设备已创建

```bash
armsom@armsom-sige7:/#  dmesg | grep rtc
[    6.407133] rtc-hym8563 6-0051: rtc information is valid
[    6.412731] rtc-hym8563 6-0051: registered as rtc0
[    6.413779] rtc-hym8563 6-0051: setting system clock to 2022-06-22T01:22:26 UTC (1655860946)
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
armsom@armsom-sige7:/# hwclock -r
2023-11-03 10:32:40.461910+00:00
armsom@armsom-sige7:/# date
2023年 11月 03日 星期五 10:33:12 UTC
armsom@armsom-sige7:/# hwclock -w
armsom@armsom-sige7:/# hwclock -r
armsom@armsom-sige7:/# poweroff
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并启动Sige7，检查RTC是否与系统时钟同步

```bash
armsom@armsom-sige7:/# hwclock -r
2023-11-03 10:35:40.461910+00:00
armsom@armsom-sige7:/# date
2023年 11月 03日 星期五 10:36:01 UTC
```

#### M.2接口

ArmSoM-Sige7 提供 M.2 连接器：

- 产品的背面有一个带有四通道 PCIe 3.0 接口的 M.2 M Key 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

```
armsom@armsom-sige7:/# mkdir temp
armsom@armsom-sige7:/# mount /dev/nvme0n1 temp
```

#### 摄像头

##### MIPI-CSI

  摄像头采用IMX415模组，摄像头模组连接并上电后可以查看启动日志。

```bash
armsom@armsom-sige7:/# dmesg | grep imx415
[    2.547754] imx415 3-001a: driver version: 00.01.08
[    2.547767] imx415 3-001a:  Get hdr mode failed! no hdr default
[    2.547819] imx415 3-001a: Failed to get power-gpios
[    2.547826] imx415 3-001a: could not get default pinstate
[    2.547831] imx415 3-001a: could not get sleep pinstate
[    2.547850] imx415 3-001a: supply dvdd not found, using dummy regulator
[    2.547918] imx415 3-001a: supply dovdd not found, using dummy regulator
[    2.547945] imx415 3-001a: supply avdd not found, using dummy regulator
[    2.613843] imx415 3-001a: Detected imx415 id 0000e0
[    2.613890] rockchip-csi2-dphy csi2-dphy0: dphy0 matches m00_b_imx415 3-001a:bus type 5
[   18.386174] imx415 3-001a: set fmt: cur_mode: 3864x2192, hdr: 0
[   18.389067] imx415 3-001a: set exposure(shr0) 2047 = cur_vts(2250) - val(203)
```

  使用v4l2-ctl进行抓图
```
// MIPI-CSI1
armsom@armsom-sige7:/# v4l2-ctl -d /dev/video31 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll

// MIPI-CSI2
armsom@armsom-sige7:/# v4l2-ctl -d /dev/video22 --set-fmt-video=width=3840,height=2160,pixelformat=NV12 --stream-mmap=3 --stream-skip=60 --stream-to=/tmp/cif73.out --stream-count=3 --stream-poll
```

使用gst-launch-1.0可直接录像
```
// MIPI-CSI1
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video31 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink

// MIPI-CSI2
armsom@armsom-sige7:/# gst-launch-1.0 v4l2src device=/dev/video22 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
```
![armsom-w3-imx415-camera](/img/lm/armsom-w3-imx415-camera.jpeg)


#### MIPI DSI

ArmSoM-Sige7 分辨率最高分辨率可达 4K@60Hz


## 产品证书

### CE / FC / RoHS

![sige7-sige7-ce-fc-rohs](/img/sige/sige7-ce-fc-rohs.jpeg)


## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/sige7](https://www.armsom.org/product-page/sige7)
 
ArmSoM 速卖通官方店: [https://www.aliexpress.com/store/1102800175](https://www.aliexpress.com/store/1102800175) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=757023687970](https://item.taobao.com/item.htm?id=757023687970)

OEM&ODM,  请联系: sales@armsom.org