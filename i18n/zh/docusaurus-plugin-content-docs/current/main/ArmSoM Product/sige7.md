---
description: ArmSoM-Sige7采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，拥有丰富的接口，支持双2.5G网口、WiFi6 & BT5和多种视频输出。
keywords: [armsom, armsom-sige7, maker kit, rockchip, rk3588产品介绍]
sidebar_label: "Sige7"
sidebar_position: 2
slug: /armsom-sige7
image: /img/sige/sige7-bananer.png
---

# Sige7 产品简介

让我们在 5 分钟内了解 Sige7。

## 简介

ArmSoM-Sige7采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，拥有丰富的接口，支持双2.5G网口、WiFi6 & BT5和多种视频输出。支持多种操作系统, 可适用于ARM PC、边缘计算、云服务器、人工智能、云计算、虚拟/增强现实、区块链、智能NVR等领域

![ArmSoM-sige7](/img/sige/sige7-bananer.png)

:::tip Rockchip RK3588
- [ArmSoM-Sige7](./armsom-sige7) 单板计算机;
- [ArmSoM-AIM7](./armsom-aim7) AI核心板, [ArmSoM-AIM-IO](./armsom-aimio) AIM7配套IO板;
- [ArmSoM-LM7](./armsom-lm7) LGA核心板, [ArmSoM-W3](./armsom-w3) LM7 核心板开发套件;

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
- **RAM**：8GB/16GB/32GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB
- **Flash**：64GB/128GB eMMC，默认eMMC 64GB
- **WIFI/BT**: 板载IEEE 802.11a/b/g/n/ac/ax WIFI6 和 BT5 [AP6275P](https://www.ampak.com.tw/tw/product/WiFi-Bluetooth/Stamp-Type-2T2R/AP6275P)
- **工作电压**：具有宽范围的输入电压，从5V到20V（电压误差±5%）
- **工作温度**：0℃ ~ 80℃
- **操作系统**：
  - **Rockchip官方支持**：Android 12.0，Debian11，Buildroot
  - **第三方支持**：Armbian, Ubuntu 22.04, Ubuntu 24.04, Arch Linux, openSUSE
- **PCB**：12 层 PCB 板设计
- **重量**：46.6g
- **大小**：92mm × 62mm x 14.6mm

## 使用手册

<a href="./sige-family-started" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>Sige使用手册</h2>
            <p>如何开始使用你的Sige</p>
        </div>
    </div>
</a>

## 硬件信息

### 硬件接口

![ArmSoM-Sige7 front & back](/img/sige/armsom-sige7-layout.jpg)
![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)

:::tip
Sige7上有两个长得一样的Type-C接口，其中Type-C(PD Only)才是电源接口。
:::

### 硬件规格
<details>
    <summary>
        Sige7 硬件规格
    </summary>
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
            <th>40-PIN</th>
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
</details>

<details>
    <summary>
        Sige7/5/3/1规格比较
    </summary>

|        | Sige7  | Sige5 | Sige3 |Sige1 |
| --------- | ----- | --- |--- | --- | 
| SoC Process | 8nm | 8nm | 22nm | 28nm |  
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3568B2 <br/> Cortex-A55 x4 up to 2.0GHz | Rockchip RK3528 <br/> Cortex-A53 x4 up to 2.0GHz | 
| GPU | ARM Mali-G610 MP4  | ARM Mali G52 MC3 GPU | Arm Mali‑G52‑2EE | ARM Mali-450 GPU |
| NPU | 6TOPS@INT8(3 NPU core)  | 6TOPS@INT8(2 NPU core) | 1TOP@INT8 | - |
| RAM | 4GB/8GB/16GB/32GB 64-bit LPDDR4x | 4/8/16GB 32-bit LPDDR4x | 2/4GB 32-bit LPDDR4x |  2/4GB 32-bit LPDDR4x|
| eMMC| 64GB/128GB eMMC | 32/128GB eMMC| 32GB eMMC | 8 eMMC |
| TF Card | Molex Slot, Spec Version 2.x/3.x/4.x(SDSC/SDHC/SDXC)| Yes| Yes |   Yes|
| Output | 1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 4K@60fps <br/> 1x DP 1.4 up to 8K@30fps | 1x HDMI 2.1, supports 4K@120fps <br/> 1x MIPI DSI, up to 2K@60fps <br/>  1x DP1.4, up to 4K@120fps | 1x MIPI DSI up to 2K@60fps <br/> 1x HDMI OUT2.0, supports 4K@60fps |  1x HDMI OUT2.0b, supports 4K@60fps|
| Decoder |  8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|  H.264, H.265, VP9, AV1 and AVS2 etc. up to 8K@30fps or4K@120fps| 4KP60 H.265/H.264/VP9  |  H.265, H.264, AVS2 4K@60fps|
| Encoder | 8K@30fps H.265 / H.264| H.264 and H.265 up to 4K@60fps| 1080P60 H.264/H.265 | H.264 and H.265 up to1080@60fps|
| Wi-Fi | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB |   SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs|
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 2.1 1-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported |  - |
| Ethernet | 2x 2.5G Ethernet |   2x Gigabit Ethernet| Gigabit Ethernet & 2.5G Ethernet| Gigabit Ethernet & 2.5G Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 1x USB 3.0 & 1x USB 2.0  | 2x USB 2.0|
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG）| 1x USB-C Power jack & 1x USB3.0 OTG |  1x USB-C Power jack & 1x USB2.0 OTG|
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI  |   -|
| 40-PIN Header| yes | yes | yes | yes |
| LEDs | 2x LEDs | 2x LEDs |2x LEDs |  2x LEDs|
|Board Dimensions| 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm |

</details>

### RK3588框图
<details>
    <summary>
      RK3588框图
    </summary>
        <img
  src="./img/sige/rk3588.png"
  alt="rk3588 block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

<details>
    <summary>
      40-PIN 座子
    </summary>
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
|     150     | SPI3_CLK_M0 / I2C0_SDA_M1 / PWM7_IR_M3 / GPIO4_C6  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  GPIO4_C5 / PWM6_M2 / I2C0_SCL_M1 |     149     | 
|     63      | UART1_CTSN_M1 / PWM15_IR_M3 / GPIO1_D7  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|     47      | SPDIF_TX_M0 / UART1_RX_M1 / PWM13_M2 / GPIO1_B7  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO3_C2 / PWM14_M0 / UART7_RTSN_M1 / I2C8_SCL_M4 / SPI1_CS0_M1  |    114     |
|     103     | PWM8_M0 / GPIO3_A7  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |             |
|     110     | I2S2_LRCK_M1 / UART3_RX_M1 / PWM13_M0 / CAN1_TX_M0 / GPIO3_B6  | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO3_B1 / PWM2_M1 / UART2_TX_M2 |     105     |
|      0      | REFCLK_OUT / GPIO0_A0	    | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO3_B2 /PWM3_IR_M1 / UART2_RX_M2 / I2S2_SDI_M1   |     106     |
|             |   GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO3_B3 /  UART2_RTSN / I2S2_SDO_M1   |     107     |

</div>
</details>

<details>
    <summary>
      MIPI CSI0
    </summary>
0.5mm FPC 连接器（J12）

| 引脚       | 信号名称                   | 描述说明                                      |
|-----------|---------------------------|---------------------------------------------|
| 1,4,7,10,13,16 | PGND/SGND          | **接地层**<br/> - PGND：电源地（大电流路径）<br/> - SGND：信号地（低噪声参考） |
| 2         | MIPI_CSI0_RX_D3N           | **MIPI CSI-2 接收通道3**<br/> - 差分负输入（100Ω ±10% 终端匹配） |
| 3         | MIPI_CSI0_RX_D3P           | **MIPI CSI-2 接收通道3**<br/> - 差分正输入               |
| 5         | MIPI_CSI0_RX_D2N           | **MIPI CSI-2 接收通道2**<br/> - 差分负输入               |
| 6         | MIPI_CSI0_RX_D2P           | **MIPI CSI-2 接收通道2**<br/> - 差分正输入               |
| 8         | MIPI_CSI0_RX_CLK1N         | **次级时钟通道**<br/> - 差分负（最高1.5GHz）             |
| 9         | MIPI_CSI0_RX_CLK1P         | **次级时钟通道**<br/> - 差分正                        |
| 11        | MIPI_CSI0_RX_D1N           | **MIPI CSI-2 接收通道1**<br/> - 差分负输入               |
| 12        | MIPI_CSI0_RX_D1P           | **MIPI CSI-2 接收通道1**<br/> - 差分正输入               |
| 14        | MIPI_CSI0_RX_D0N           | **MIPI CSI-2 接收通道0**<br/> - 差分负输入               |
| 15        | MIPI_CSI0_RX_D0P           | **MIPI CSI-2 接收通道0**<br/> - 差分正输入               |
| 17        | MIPI_CSI0_RX_CLK0N         | **主时钟通道**<br/> - 差分负                        |
| 18        | MIPI_CSI0_RX_CLK0P         | **主时钟通道**<br/> - 差分正                        |
| 19        | MIPI_VSYNC                 | **场同步信号**<br/> - 1.8V LVCMOS电平        |
| 20        | MIPI_CAM3_CLKOUT           | **传感器时钟输入**<br/> - 1.8V ±5%<br/> |
| 21        | MIPI_HSYNC                 | **行同步信号**<br/> - 1.8V LVCMOS电平        |
| 22        | MIPI_CAM1_CLKOUT           | **传感器时钟输入**<br/> - 1.8V ±5%<br/> |
| 23        | MIPI_CSI0_PDN0_H(GPIO1_B0) | **电源关闭控制**<br/> - 1.8V GPIO，高电平有效<br/>|
| 24        | I2C3_SCL_M0_MIPI           | **I²C时钟线**<br/> - 1.8V开漏输出<br/>|
| 25        | I2C3_SDA_M0_MIPI           | **I²C数据线**<br/> - 1.8V开漏输出<br/> |
| 26        | MIPI_CSI0_PDN1_H(GPIO1_A7) | **次级电源关闭控制**<br/> - 1.8V GPIO，高电平有效         |
| 27        | CM_RST_L(GPIO4_A0)         | **摄像头模组复位**<br/> - 3.3V LVCMOS电平<br/> - 低电平有效 |
| 28,29     | VCC_RX                     | **3.3V电源轨**<br/> - 输出，容差±5%<br/>  |
| 30,31     | VCC_5V0                    | **5.0V电源轨**<br/> - 输出，容差±5%<br/> |
</details>

<details>
    <summary>
      MIPI CSI1
    </summary>
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

</details>

<details>
    <summary>
      MIPI DSI
    </summary>
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

</details>

<details>
    <summary>
        FAN
    </summary>
0.8mm 连接器(CN32)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | 地 |
|3    | PWM | PWM控制 |
</details>

<details>
    <summary>
        HPOUT
    </summary>

0.8mm 连接器(CN2)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | AOR         | right channel      |
|2          | AOL         | left channel      |
|3          | GND         | GND          |
</details>

<details>
    <summary>
        VRTC
    </summary>
[0.8mm 连接器](https://item.taobao.com/item.htm?id=742624228081)(J2)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | 正极  |
|2          | -         | 负极  |
</details>

## 开发资料

### arm-systemready

github : [SystemReady](https://github.com/ArmSoM/SystemReady) 

### SDK源码

<div class="cards">
<a href="https://github.com/armbian/build" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>Armbian </h2>
            <p>Armbian Linux build framework</p>
        </div>
    </div>
</a>

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>Sige7 kernel</h2>
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
            <h2>Sige7 uboot</h2>
            <p>rockchip-linux/u-boot</p>
        </div>
    </div>
</a>

<a href="https://github.com/torvalds/linux/blob/master/arch/arm64/boot/dts/rockchip/rk3588-armsom-sige7.dts" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>Sige7 mainline linux</h2>
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
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11-1.png) | debian11 for Sige7 :  <br/>   Debian 11（代号为"Bullseye"）是Debian项目的最新稳定版本，它于2021年8月14日发布。Debian是一个以自由软件为基础的操作系统，以稳定性、安全性和开放性著称。| [百度网盘](https://pan.baidu.com/s/1ybboIDeGolq71ZCLWr7E9A?pwd=arms)   |
|![Android](/img/sige/android.png) | Android12 for Sige7 :    <br/>安卓（Android）是一个基于Linux内核的开放源代码操作系统，主要用于移动设备、平板电脑和智能手表等智能设备。| [百度网盘](https://pan.baidu.com/s/1btSeFT_-qs-0bz1wUcLZ6A?pwd=arms)  |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for Sige7(bpi-m7) :    <br/> Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  | [armbian固件下载](https://github.com/armbian/community/releases/)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige7 :    <br/>  该项目旨在为Rockchip RK3588设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。 | [ubuntu-rockchip固件下载](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |
|Arch Linux | Arch Linux Installer By kwankiu :    <br/>Arch Linux 是一个独立开发的通用 GNU/Linux 发行版，致力于通过滚动发布模式提供大多数软件的最新稳定版本。默认安装是一个最小的基础系统，由用户配置为仅添加所需的内容。| 只需刷新图像并按照安装程序提示的说明进行操作即可。<br/>注意：此安装程序需要互联网连接。（以太网驱动程序可能需要一些时间来加载，安装程序将重试多次，这是正常的。）  [download](https://github.com/kwankiu/archlinux-installer/releases) |
| ![openSUSE](https://static.opensuse.org/favicon.svg) | 桌面用户、开发者以及系统管理员的匠之所选。| [download](https://download.opensuse.org/ports/aarch64/tumbleweed/appliances/) |
| [lede](https://github.com/coolsnowwolf/lede) | lede for Sige7 :    <br/>lede是一个高度模块化、高度自动化的嵌入式Linux系统，拥有强大的网络组件和扩展性。| [coolsnowwolf](https://github.com/coolsnowwolf/lede)  |

### 硬件资料

获取 Sige7 原理图、DXF等硬件资料

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

<div class="cards">
    <a href="https://pan.baidu.com/s/18EjA6vzhfCRcO5CQ9oYhag?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige7 SCH</h2>
            </div>
        </div>
</a>

<a href="https://pan.baidu.com/s/1rqpumvtvASduXpq9Qi-B1Q?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige7 2D</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1isHPcVGh5fHimA-sJXJICQ?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige7 SMD</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1ueEtkxfKgDqIE7JhGRMuPw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
<a href="https://www.printables.com/model/1234582-armsom-sige7-case" class="card-link">
    <div class="card">
        <div class="icon">
            <i>💡</i>
        </div>
        <div class="content">
            <h2>Case 3D</h2>
        </div>
    </div>
</a>
</div>
<br/>

:::tip 版本更改记录
V1.1 
* VOL_IC: U27/U7/U6301change part pin;
* USB：U15 fr o m TypeC1 change t o TypeC0; CN31 fr o m USB3. 0 change t o USB2. 0;
* 40PIN：add UART Pr ot ect; J 2&CN2&CN32 change t o WF0. 8;
* CAM：DEL R6352, CSI _1 I2C3 change t o I2C4；
* WIFI Module: AP6275S change to AP6275P;
:::

## 产品证书

### CE / FCC / RoHS

![sige7-sige7-ce-fc-rohs](/img/sige/sige7-ce-fc-rohs.jpeg)

## 供货声明

ArmSoM-Sige7 将至少生产到 2034 年 1 月。

## 配件

我们为 ArmSoM-Sige 设计的官方配件旨在帮助您从计算机获得最佳性能。

<div class="cards">
<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Camera-module1</h2>
        <p>camera-module1使用OV13850，是低功耗相机模块</p>
    </div>
</div>
</a>
<a href="./armsom-display-10-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-display-10hd.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Display-10-hd</h2>
        <p>10.1 英寸触摸屏显示器，可用于娱乐系统和信息仪表板等交互式项目。</p>
    </div>
</div>
</a>
<a href="./sige-diy-case1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/sige-diy-case.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Sige Diy Case 1</h2>
        <p>将高品质结构与简洁、简约的设计相结合，金属外壳使其更高端。</p>
    </div>
</div>
</a>
<a href="./sige-active-cooling-kit" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/sige-active-cooling-fan-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Sige 主动散热套件</h2>
        <p>主动散热套件可确保Sige在最繁忙的工作中平稳运行。</p>
    </div>
</div>
</a>
</div>

## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/sige7](https://www.armsom.org/product-page/sige7)
 
ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256806184323776.html](https://aliexpress.com/item/3256806184323776.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=757023687970](https://item.taobao.com/item.htm?id=757023687970)

OEM&ODM,  请联系: sales@armsom.org

## 专家视角

- [arm](https://www.arm.com/zh-TW/architecture/system-architectures/systemready-certification-program/ir)：SystemReady IR 是为满足基于嵌入式 Arm SoC 的系统上的嵌入式 Linux/BSD 生态系统的需求而定制的。
- [cnx-software](https://www.cnx-software.com/2024/01/30/banana-pi-bpi-m7-thin-rockchip-rk3588-sbc-dual-2-5gbe-m-2-nvme-storage-hdmi-2-1)：ArmSoM-Sige7 — 一款纤薄的瑞芯微 RK3588 单板计算机，具有双 2.5GbE、M.2 NVMe 存储、HDMI 2.1 等更多功能。
- [notebookcheck](https://www.notebookcheck.net/Banana-Pi-BPI-M7-debuts-as-new-Pico-ITX-sized-single-board-computer-with-8K-video-outputs.768533.0.html)：ArmSoM-Sige7 作为一款新的 Pico-ITX 尺寸单板计算机首次亮相，具有 8K 视频输出。
- [liliputing](https://liliputing.com/banana-pi-bpi-m7-router-board-now-available-for-165-rk3588-processor-dual-2-5-gb-ethernet-wifi-6-and-bt-5-2)：ArmSoM-Sige7 路由器主板现已上市，售价 165 美元（瑞芯微 RK3588 处理器、双 2.5Gb 以太网、WiFi 6 和蓝牙 5.2）。
- [itsfoss](https://itsfoss.com/arosom-sige7-review/)：这款单板计算机让树莓派 5 相形见绌。
- [electronics-lab](https://www.electronics-lab.com/armsom-sige7-review-a-rockchip-rk3588-sbc-with-dual-2-5gbe-ethernet-nvme-storage-and-triple-display-output)：ArmSom Sige7 评测——一款具有双 2.5GbE 以太网、NVMe 存储和三显输出的瑞芯微 RK3588 单板计算机。
- [magazinmehatronika](https://magazinmehatronika.com/banana-pi-bpi-m7-a-k-a-armsom-sige7-recenzija)：ArmSoM Sige7 评测。
- [sk](https://www.sk.rs/arhiva/clanak/33374/armsom-sige7-lici-na-bananu-ali-nije)：ArmSoM Sige7 评测。
- [Technically Unsure](https://www.youtube.com/watch?v=Cw91DFgMFQQ)：ArmSoM Sige7 与树莓派 5：终极单板之战——谁是王者？
- [habr](https://habr.com/ru/companies/selectel/articles/774782/)：一款支持 32GB 内存的单板计算机, 是一款什么样的设备？

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