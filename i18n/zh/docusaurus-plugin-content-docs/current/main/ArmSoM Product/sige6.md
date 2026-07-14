---
description: ArmSoM-Sige6 采用了全志 A733 八核处理器，集成八核高性能 CPU，双核 Arm Cortex-A76 + 六核 Arm Cortex-A55 大小核架构，12nm 制程，最高主频 2.0GHz；并集成 3 TOPS NPU 及 Imagination BXM-4-64 MC1 GPU，可提供强大的 AI 和多媒体处理能力。
keywords: [armsom, armsom-sige6, maker kit, allwinner, A733产品介绍]
sidebar_label: "Sige6"
sidebar_position: 2
slug: /armsom-sige6
image: /img/sige/sige6-bananer.png
---

# Sige6 产品简介

让我们在 5 分钟内了解 Sige6。

## 简介

ArmSoM-Sige6 采用了全志 A733 八核处理器，集成八核高性能 CPU，双核 Arm Cortex-A76 + 六核 Arm Cortex-A55 大小核架构，12nm 制程，最高主频 2.0GHz；并集成 3 TOPS NPU 及 Imagination BXM-4-64 MC1 GPU，可提供强大的 AI 和多媒体处理能力。可适用于ARM PC、边缘计算、云服务器、人工智能、云计算、虚拟/增强现实、区块链、智能NVR等领域

![ArmSoM-sige6](/img/sige/sige6-bananer.jpg)

### 关键参数

- **SOC**：全志 A733-HN3
- **CPU**： 双核 Cortex-A76@2.0GHz + 六核 Cortex-A55@1.8GHz，12纳米制程
- **GPU**：Imagination BXM-4-64 MC1; 支持 OpenGL ES 3.2、Vulkan 1.3、OpenCL 3.0
- **NPU**：3 TOPS AI 加速引擎
- **VPU/编解码**：
  - **硬解码**：H265/VP9/AVS2 4K@60fps, H264 4K@30fps解码
  - **硬编码**：H264/H265 4K@30fps
- **RAM**：2GB/4GB/6GB/8GB/12GB/16GB LPDDR5（最高可配 16GB ）
- **Flash**：32GB/64GB/128GB eMMC
- **WIFI/BT**: 板载 Wi-Fi6 + BT 5.4 
- **工作电压**：5V（电压误差±5%）
- **工作温度**：-25℃ ~ 115℃
- **操作系统**：
  - **官方支持**：支持 Debian Linux、Android 13 系统
  - **第三方支持**：Armbian
- **PCB**：8 层通孔 PCB 板设计
- **重量**：47.2g
- **大小**：89mm × 56mm 

## Getting started

<a href="./armsom-sige6#使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>Sige6使用手册</h2>
            <p>如何开始使用你的Sige6</p>
        </div>
    </div>
</a>


## 硬件信息

### 硬件接口

![ArmSoM-Sige6 front & back](/img/sige/armsom-sige6-layout.jpg)

### 硬件规格
<details>
    <summary>
        Sige6 硬件规格
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
            <th><li>全志 A733</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>双核 Cortex-A76@2.0GHz + 六核 Cortex-A55@1.8GHz，12纳米制程</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>Imagination BXM-4-64 MC1; 支持 OpenGL ES 3.2、Vulkan 1.3、OpenCL 3.0</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li> 3 TOPS AI 加速引擎</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：H265/VP9/AVS2 4K@60fps, H264 4K@30fps</li><li>硬编码：H264/H265 4K@30fps</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>2GB/4GB/6GB/8GB/12GB/16GB LPDDR5（最高可配 16GB ）</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB/64GB/128GB eMMC</li>SPI Flash：64Mb（默认贴）、128Mb、256Mb 可选<li>支持MicroSD卡扩展</li><li>M.2 M-KEY Socket：PCIe3.0 NVMe SSD</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M 接口(PCIe 3.0 2- lanes)，可拓展 SSD：Type 2280/2260/2242/2230，目前默认使用2280</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>1x 千兆以太网口（支持 PoE，需外接 PoE HAT）</li><li> WIFI6,BT5,外接天线接口</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>1x HDMI OUT2.0，支持 4K@60fps</li><li>1x 4-lane MIPI DSI</li></th>
        </tr>
        <tr>
            <th>视频输入</th>
            <th><li>1x 4Lanes MIPI CSI，每线最高 2.0Gbps</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1x HP-OUT 音频输出</li><li>1 × Audio Jack</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>1x USB3.1，高达5Gbps数据速率</li><li>1x USB Type-C OTG / Power</li><li>1x USB2.0，支持高速（480Mbps）、全速（12Mbps）和低速（1.5Mbps）模式</li></th>
        </tr>
        <tr>
            <th>40-PIN</th>
            <th><li>支持 GPIO/UART/SPI/I2C/PWM/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>1x 3pin调试串口</li><li>1x 5V风扇接口</li><li>1x 电池输入连接器用于低功耗RTC芯片 LK8563S 的供电</li><li>2x LED灯，系统正常时绿色灯开始闪烁，红色灯由用户控制</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>支持 USB Type-C 5V 供电</li><li>支持 PoE 供电(需外接 PoE HAT)</li><li>支持 GPIO 引脚5V 供电（40PIN引脚 2 与 4）</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x PWRON键，支持休眠唤醒</li><li>1x Reset键，支持重启</li><li>1x boot键，支持进入boot烧录模式</li></th>
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
            <th><li>-25℃ ~ 115℃</li></th>
        </tr>
    </tbody>
</table>
</details>

<details>
    <summary>
       基于 A733 SoC 的主流单板计算机 (SBC) 参数对照表
    </summary>

| 类别 (Category) | ArmSoM-Sige6 | Orange Pi 4 Pro | Radxa Cubie A7A |
| :--- | :--- | :--- | :--- |
| **核心处理器 (SoC)** | 全志 A733 | 全志 A733 | 全志 A733 |
| **CPU 架构** | 双核 Cortex-A76@2.0GHz + 六核 Cortex-A55@1.8GHz|	双核 Cortex-A76@2.0GHz + 六核 Cortex-A55@1.8GHz |	双核 Cortex-A76@2.0GHz + 六核 Cortex-A55@1.8GHz |
| **GPU / NPU** | BXM-4-64 / 3 TOPS |BXM-4-64 / 3 TOPS |BXM-4-64 / 3 TOPS |
| **内存 (LPDDR5)** | 2GB/4GB/6GB/8GB/12GB/16GB(最高支持 16GB) | 最高支持 16GB | 2GB / 4GB / 6GB / 8GB / 12GB / 16GB |
| **系统存储(EMMc)** | 16GB/32GB/64GB/128GB 可选 | 16GB/32GB/64GB/128GB 可选 | 16GB/32GB/64GB/128GB 可选
| **板载闪存 (SPI)** | 64Mb（默认贴）、128Mb、256Mb 可选 | 128Mb (默认) / 256Mb 可选 | 8MB SPI NOR Flash |
| **高速接口 (M.2)** | **1x M.2 Key M 接口(PCIe 3.0 2- lanes)** | **1x M.2 Key M 接口(PCIe 3.0 2- lanes)** | 1x M.2 Key M 接口(PCIe 3.0 1- lanes) |
| **以太网** | 1x 千兆网口（支持 PoE，需外接 PoE HAT） | 1x 千兆网口（支持 PoE，需外接 PoE HAT）  | 1x 千兆网口（支持 PoE，需外接 PoE HAT） |
| **无线连接** | Wi-Fi 6, BT 5.0 (外接天线) | Wi-Fi 6 + BT 5.4  (外接天线)| Wi-Fi 6, BT 5.4 (外接天线) |
| **视频输出** | HDMI 2.0 (4K@60fps) | HDMI 2.0 (4K@60fps) | HDMI 2.0 (4K@60fps) |
| **MIPI DSI** | 1x 4-lane MIPI DSI | 1x 4-lane MIPI DSI | 1x 4-lane MIPI DSI |
| **摄像头 (CSI)** | **1x 2-lane + 1x 4-lane MIPI CSI**| **1x 2-lane + 1x 4-lane MIPI CSI** | 1x 4-lane 或 2x 2-lane MIPI CSI |
| **USB 接口** | 1x USB 3.1, 1x USB 2.0, 1x Type-C OTG | 1x USB 3.0, 3x USB 2.0 | 1x USB 3.1, 3x USB 2.0, 1x Type-C OTG |
| **音频接口** | Audio Jack + HP-OUT  | Audio Jack  | Audio Jack (立体声) |
| **扩展接口** | 40-Pin 标准排针 | 40-Pin 标准排针 | 40-Pin 标准排针 |
| **电源输入** | USB Type-C 5V / POE / GPIO 5V | USB Type-C 5V / POE / GPIO 5V |USB Type-C 5V / POE / GPIO 5V |
| **外形尺寸** | 89mm * 56mm | 89mm * 56mm | 89mm * 56mm |
| **操作系统** | Debian, Android 13 | Ubuntu, Debian, Android 13 | Debian, Android 13 |

</details>

### 全志 a733 框图
<details>
    <summary>
      全志 a733 框图
    </summary>
        <img
  src="./img/sige/a733-block-diagram.png"
  alt="a733 block diagram"
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
|     313     | PJ25/PWM1-7/UART4-RX/TWI4-SDA/SPI3-MOS| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     312     | PJ24/PWM1-6/UART4-TX/TWI4-SCK/SPI3-CLK  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|     356     | PL4/S-TWI2-SCK/S-PWM0-2 |  <div className='green'>7</div>  | <div className='green'>8</div>  | PL2/S-UART1-TX/S-UART0-TX/S-TWI1-SDA/S-PWM0-0 |     354      |
|             |   GND    |  <div className='black'>9</div>  | <div className='green'>10</div> | PL3/S-UART1-RX/S-UART0-RX/S-TWI1-SCK/S-IR-RX/S-PWM0-1  |     355      |
|     357     |  PL5/S-TWI2-SDA/S-SPI0-CLK/S-PWM0-3 | <div className='green'>11</div>  | <div className='green'>12</div> |  PK0//UART6-DCD/I2S4-BCLK |     320     |
|     358     |  PL6/S-UART0-TX/S-SPI0-MOSI/S-IR-RX/S-PWM0-4 | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
|     359     |  PL7/S-UART0-RX/S-SPI0-MISO/S-PWM0-5  | <div className='green'>15</div>  | <div className='green'>16</div> |  PB0/UART2-TX/UART0-TX/SPI2-CS0  |     32     |
|             |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> |  PB1/UART2-RX/UART0-RX/SPI2-CLK |    33     |
|     108      | PD12/SPI1-MOS  | <div className='green'>19</div>  | <div className='black'>20</div> |    GND     |             |
|     109      | PD13/SPI1-MISO  | <div className='green'>21</div>  | <div className='green'>22</div> | PK6/TWI2-SCK/UART4-TX/UART2-RTS/SPI3-MOSI        |        326     |
|     107      | PD11/SPI1-CLK  | <div className='green'>23</div>  | <div className='green'>24</div> |  PD10/SPI1-CS0/PWM1-0|     106      |
|             |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |  PD15/SPI1-CS1/UART3-CTS |     111      |
|     315     | PJ27/PWM1-9/UART4-CTS/UART2-RX/TWI5-SDA |  <div className='green'>27</div>  | <div className='green'>28</div>  | PJ26/PWM1-8/UART4-RTS/UART2-TX/TWI5-SCK/SPI3-MISO |     314     | 
|     362      | PL10/S-UART0-TX/S-TWI2-SCK/S-UART1-TX/S-PWM0-8/  | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |            |
|     321      | PK1/UART6-DSR/I2S4-MCLK/TWI1-SCK  | <div className='green'>31</div>  | <div className='green'>32</div> |  PL9/S-TWI1-SDA/S-UART1-RX/S-TWI0-SDA/S-TWI2-SDA/S-PWM0-7 |    361     |
|     360     | PL8/S-TWI1-SCK/S-UART1-TX/S-TWI0-SCK/S-TWI2-SCK/S-PWM0-6  | <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |             |
|     322     | PK2/UART6-DTR/I2S4-LRCK/HDMI-SDA/TWI5-SDA  | <div className='green'>35</div>  | <div className='green'>36</div> |  PD14/LCD0-D20/SPI1-HOLD/UART3-RTS|     110     |
|      325      | PK5/PWM1-8/PWM1-9/SPI3-CLK    | <div className='green'>37</div>  | <div className='green'>38</div> | PK4/I2S4-DOUT0/I2S4-DIN1  |     324     |
|             |   GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  PK3/UART6-RI/I2S4-DIN0/I2S4-DOUT1/TWI5-SCK   |     323     |

</div>
</details>

<details>
    <summary>
      MIPI CSI0
    </summary>
0.5mm FPC 连接器（J12）

| 引脚 (Pin) | 信号名称 (Signal) | 类型 (Type) | 描述 (Description) |
| :---: | :--- | :---: | :--- |
| **1** | GND | P | 电源地 |
| **3** | MCSIC-D0N | O | MIPI 数据通道 0 (负) |
| **5** | MCSIC-D0P | O | MIPI 数据通道 0 (正) |
| **7** | GND | P | 电源地 |
| **9** | MCSIC-D1N | O | MIPI 数据通道 1 (负) |
| **11** | MCSIC-D1P | O | MIPI 数据通道 1 (正) |
| **13** | GND | P | 电源地 |
| **15** | MCSIC-CKN | O | MIPI 时钟通道 (负) |
| **17** | MCSIC-CKP | O | MIPI 时钟通道 (正) |
| **19** | GND | P | 电源地 |
| **21** | MCSI-PDN-R2 | I | 摄像头掉电/复位控制 (Power Down) |
| **23** | MCSI-MCLK-2 | O | 摄像头主时钟 (Master Clock) |
| **25** | TWI4-SCK | I/O | I2C 配置时钟线 (SCL) |
| **27** | TWI4-SDA | I/O | I2C 配置数据线 (SDA) |
| **29** | VCC33-LCD | P | 3.3V 摄像头电源供电 |
</details>

<details>
    <summary>
      MIPI CSI1
    </summary>
0.5mm FPC 连接器(J13)

| 引脚 (Pin) | 信号名称 (Signal) | 类型 (Type) | 描述 (Description) |
| :---: | :--- | :---: | :--- |
| **1** | GND | P | 电源地 |
| **2** | MCSIB-D3N | O | MIPI 数据通道 3 (负) |
| **3** | MCSIB-D3P | O | MIPI 数据通道 3 (正) |
| **4** | GND | P | 电源地 |
| **5** | MCSIB-D2N | O | MIPI 数据通道 2 (负) |
| **6** | MCSIB-D2P | O | MIPI 数据通道 2 (正) |
| **7** | GND | P | 电源地 |
| **8** | NC | - | 空脚 (No Connection) |
| **9** | NC | - | 空脚 (No Connection) |
| **10** | GND | P | 电源地 |
| **11** | MCSIB-D1N | O | MIPI 数据通道 1 (负) |
| **12** | MCSIB-D1P | O | MIPI 数据通道 1 (正) |
| **13** | GND | P | 电源地 |
| **14** | MCSIB-D0N | O | MIPI 数据通道 0 (负) |
| **15** | MCSIB-D0P | O | MIPI 数据通道 0 (正) |
| **16** | GND | P | 电源地 |
| **17** | MCSIB-CKN | O | MIPI 时钟通道 (负) |
| **18** | MCSIB-CKP | O | MIPI 时钟通道 (正) |
| **19** | GND | P | 电源地 |
| **20** | MCSI-MCLK | O | 摄像头主时钟 (串联 22Ω R147) |
| **21** | NC | - | 空脚 (No Connection) |
| **22** | NC | - | 空脚 (No Connection) |
| **23** | MCSI-PDN-R | I | 摄像头掉电控制 (Power Down) |
| **24** | TWI3-SCK | I/O | I2C 配置时钟线 (串联 22Ω R151) |
| **25** | TWI3-SDA | I/O | I2C 配置数据线 (串联 22Ω R148) |
| **26** | NC | - | 空脚 (No Connection) |
| **27** | MCSI-RST-R | I | 摄像头硬件复位 (Reset) |
| **28** | NC | - | 空脚 (No Connection) |
| **29** | NC | - | 空脚 (No Connection) |
| **30** | GND | P | 电源地 |
| **31** | PS (Power) | P | 摄像头供电 (配备滤波电容) |
| **32** | GND | P | 电源地 |
| **33** | GND | P | 电源地 |

</details>

<details>
    <summary>
      MIPI DSI
    </summary>
0.5mm FPC 连接器 (J15)

| 引脚 (Pin) | 信号名称 (Signal) | 类型 | 描述 (Description) |
| :---: | :--- | :---: | :--- |
| **1** | GND | P | 电源地 |
| **2** | MIPI-DSI0-DN0 | O | DSI 数据通道 0 (负) |
| **3** | MIPI-DSI0-DP0 | O | DSI 数据通道 0 (正) |
| **4** | GND | P | 电源地 |
| **5** | MIPI-DSI0-DN1 | O | DSI 数据通道 1 (负) |
| **6** | MIPI-DSI0-DP1 | O | DSI 数据通道 1 (正) |
| **7** | GND | P | 电源地 |
| **8** | MIPI-DSI0-CKN | O | DSI 时钟通道 (负) |
| **9** | MIPI-DSI0-CKP | O | DSI 时钟通道 (正) |
| **10** | GND | P | 电源地 |
| **11** | MIPI-DSI0-DN2 | O | DSI 数据通道 2 (负) |
| **12** | MIPI-DSI0-DP2 | O | DSI 数据通道 2 (正) |
| **13** | GND | P | 电源地 |
| **14** | MIPI-DSI0-DN3 | O | DSI 数据通道 3 (负) |
| **15** | MIPI-DSI0-DP3 | O | DSI 数据通道 3 (正) |
| **16** | GND | P | 电源地 |
| **17** | LCD-PWM | O | 屏幕背光亮度调节 (PWM) |
| **18** | BL-PWR-EN | O | 背光电源使能控制 |
| **19** | LCD-3V3 | P | 3.3V 逻辑供电 (最大电流 300mA) |
| **20** | LCD-RST | O | 屏幕硬件复位信号 |
| **21** | GPADC5 | I | 模拟信号检测 (串联 22Ω R270) |
| **22** | LCD-PWR-EN | O | 屏幕主电源使能 |
| **23** | TWI2-SCK | I/O | I2C 时钟线 (用于触摸屏或屏参配置) |
| **24** | TWI2-SDA | I/O | I2C 数据线 (用于触摸屏或屏参配置) |
| **25** | TP-INT | I | 触摸屏中断触发信号 |
| **26** | TP-RST | O | 触摸屏硬件复位信号 |
| **27** | GND | P | 电源地 |
| **28** | LCD-5V | P | 5V 供电 (用于背光或显示驱动) |
| **29** | LCD-5V | P | 5V 供电 (用于背光或显示驱动) |
| **30** | GND | P | 电源地 |

</details>

<details>
    <summary>
        Debug
    </summary>
2.54 连接器(J17)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | GND  | GND          |
|2    | CPUX-RX | UART 接收端 |
|2    | CPUX-tx | UART 发送端 |
</details>

<details>
    <summary>
        FAN
    </summary>
0.8mm 连接器(J19)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | PWM | PWM控制 |
</details>

<details>
    <summary>
        HPOUT
    </summary>

0.8mm 连接器(J10)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | SPKR1+         | 扬声器输出 (正极)     |
|2          | SPKR1-         | 扬声器输出 (负极)      |
</details>

<details>
    <summary>
        VRTC
    </summary>
[0.8mm 连接器](https://item.taobao.com/item.htm?id=742624228081)(J16)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | 正极  |
|2          | -         | 负极  |
</details>

## 开发资料

### SDK源码
<div class="cards">
<a href="https://cnb.cool/armsom-2025/T527_AIOT_V1.4.8" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>Allwinner-sdk </h2>
            <p>Building a Linux System</p>
        </div>
    </div>
</a>
</div>

#### 获取SDK方法：
```bash
jackson@armsom:~$ git clone https://cnb.cool/armsom-2025/T527_AIOT_V1.4.8
```
#### SDK构建方法：
1.在进行模块编译之前，需要配置相关信息，如下
```bash
jackson@armsom:~/T527_AIOT_V1.4.8$ ./build.sh config
========ACTION List: mk_config ;========
options :
All available platform: //选择linux系统
   0. android
   1. linux
Choice [linux]: 1
All available linux_dev: //选择需要的OS
   0. bsp
   1. dragonboard
   2. buildroot
   3. debian
   4. yocto
Choice [debian]: 3
All available kern_name: //选择内核版本，目前只支持5.15
   0. linux-5.10
   1. linux-5.15
   2. linux-6.6
Choice [linux-5.15]: 1
All available ic: //选择需要的芯片平台
   0. a523
   1. a527
   2. a733
   3. t527
   4. t736
Choice [a733]: 2
All available board: //选择需要的板卡方案
   0. QA
   1. armsom_sige6
   2. cubie_a7a
   3. cubie_a7z
   4. evb1
   5. fpga
   6. perf1
   7. pro2
   8. pro3
Choice [armsom_sige6]: 1
All available flash: //选择需要的存储介质
   0. default
   1. nor
Choice [default]: 0
All available rootfs files: //选择需要的系统版本
   0. linaro-bullseye-gnome-arm64.tar.gz
   1. linaro-bullseye-xfce-arm64.tar.gz
   2. linaro-bullseye-xfce-ros2-humble-arm64.tar.gz
Choice [linaro-bullseye-gnome-arm64.tar.gz]: 0
Setup BSP files
```
2.配置完成相关信息后，开始编译SDK
```bash
jackson@armsom:~/T527_AIOT_V1.4.8$ ./build.sh
```
3.编译完SDK后，打包镜像
```bash
jackson@armsom:~/T527_AIOT_V1.4.8$ ./build.sh pack
```
固件生成路径：~/T527_AIOT_V1.4.8/out/a733_linux_armsom_sige6_uart0.img
#### 单独编译SDK方法：
1.编译 U‑boot
```bash
jackson@armsom:~/T527_AIOT_V1.4.8$ ./build.sh bootloader
```
2.编译 Kernel
```bash
jackson@armsom:~/T527_AIOT_V1.4.8$ ./build.sh kernel
```
3.编译 Debian
```bash
jackson@armsom:~/T527_AIOT_V1.4.8$ ./build.sh debian_rootfs
```
4.编译 Buildroot
```bash
jackson@armsom:~/T527_AIOT_V1.4.8$ ./build.sh buildroot_rootfs
```

### 网盘链接
`百度网盘总链接`，包括软件资料、硬件资料
<a href="https://pan.baidu.com/s/1T5EY9FvVSY2-ZWLTzTa7wg?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。[如何烧录系统镜像？](./armsom-sige6#2-烧录方式选择)📤

以下系统已由ArmSoM官方测试验证：

| logo  | Description  | Cloud drive path|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11-1.png) | debian11 for Sige6 :  <br/>   Debian 11（Bullseye）是稳定、免费的开源Linux发行版，搭载长期支持内核，拥有超5.9万个软件包。|  `ArmSoM->ArmSoM-Sige6->软件资料->debian固件`  |

### 硬件资料

获取 Sige6 原理图、DXF等硬件资料 `网盘路径：ArmSoM->ArmSoM-Sige6->硬件资料`

### 开发工具
获取ADB调试、烧录、串口、SD卡制作等工具 `网盘路径：ArmSoM->ArmSoM-Sige6->开发工具`

![armsom-sige6-Developtools](/img/general-tutorial/armsom-sige6-Developtools.png)

## 使用手册

### 1. 入门准备

在开始使用 ArmSoM-Sige 产品之前，请准备好以下物品

#### 工具准备
* 电源
* 系统安装（二选一）
  * 板载eMMC启动
    * USB Type-C数据线，从 typec 端口在Sige系列上写入镜像，您需要Type-C数据线连接 Sige系列和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD 
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：

您可以将 Sige 设置为带有桌面的交互式计算机，也可以将其设置为仅可通过网络访问的无头计算机。要将 Sige 设置为Headless计算机，您在初次安装操作系统时配置主机名、用户帐户、网络连接和 SSH 。如果您想直接使用 Sige，则需要以下附加配件：

**可选选项**
* 键盘 & 鼠标
* HDMI显示器和HDMI线
* Ethernet 线（网线）
* 摄像头模块
  * 推荐使用 [camera-module1](./armsom-camera-module1) 模组。
* LCD显示屏
  * 推荐使用 [Display 10 HD](./armsom-display-10-hd)。
* 音频线, 0.8mm立式插座。
* RTC 电池, 0.8mm立式插座。
* 风扇，0.8mm立式插座。

#### 电源

下表显示了为ArmSoM-Sige6供电所需的电源规格。您可以使用任何提供正确电源模式的高质量电源。

| 型号 | 推荐电源（电压/电流）  | 供电模式
| ---- | :---: | --- |
| Sige6 | 5V/3A |  USB Type-C |


将电源插入标有“PWR IN”的端口, 请确保使用正确端口！

#### 登录系统所需账号
| 用户名 | 密码
| :----: | :----: |
| root | root | 

### 2. 烧录方式选择
#### 2.1 烧录工具
| 工具 | 运行系统  | 描述
| :----: | :---: | --- |
| PhoenixSuit | windows |  分区升级及整个固件升级工具 |
| PhoenixCard | windows |  SD卡固件制作工具 |
| PhoenixUSBpro | windows |  量产升级工具，支持 USB 一拖8 烧录 |

#### 2.2 烧录方法
烧录方法有USB线烧录到eMMC和读卡器烧录到MiroSD，两者二选一
#### 2.2.1 USB线烧录到eMMC
烧录镜像到eMMC需要使用到 PhoenixSuit 烧录工具和 USB驱动(InstallUSBDrv.bat)
1. 首先安装USB驱动，双击运行InstallUSBDrv.bat即可
![armsom-sige6-USBDRV](/img/general-tutorial/armsom-sige6-USBDRV.png)

2. 安装完USB驱动后，可以在windows下打开设备管理器，可以看到USB Device(VID_1f3a_PID_efe8)标识
![armsom-sige6-DevManager](/img/general-tutorial/armsom-sige6-DevManager.png)

3. 接着打开烧录工具(运行PhoenixSuit.exe)
![armsom-sige6-Flashingtool](/img/general-tutorial/armsom-sige6-Flashingtool.png)

4. 点击一键刷机，点击浏览，选择要烧录的固件路径
![armsom-sige6-ChooseImage](/img/general-tutorial/armsom-sige6-ChooseImage.png)

5. 按住开发板的Recovery按键，然后给开发板上电，直至PhoenixSuit弹出“将擦除整个flash的数据，是否开始全盘擦除升级？”，然后点击是即可，等待固件烧录完成。
![armsom-sige6-Flashing](/img/general-tutorial/armsom-sige6-Flashing.png)

#### 2.2.2 读卡器烧录到MiroSD
1. 打开启动SD卡制作工具，双击运行PhoenixCard.exe
![armsom-sige6-SDFlashing](/img/general-tutorial/armsom-sige6-SDFlashing.png)
2. 点击固件，选择要烧录的固件路径;勾选“量产卡”，然后点击“烧卡”即可
![armsom-sige6-FlashSD](/img/general-tutorial/armsom-sige6-FlashSD.png)
3. 将制作好的SD卡插入开发板TF卡槽，给开发板上电即可从SD卡启动


### 3. 接口使用

如果您是首次使用 ArmSoM-Sige6 产品，请先熟悉下产品硬件接口，以便于您更好的理解后续的内容。

| 硬件接口  | [Sige6](./armsom-sige6#硬件接口) |
| --------------- | ----- | 

### 3.1 调试串口

如下所示连接 USB 转 TTL 串口线到底板上标有“Debug”标识的座子处：

![armsom-sige6-debug](/img/sige/armsom-sige6-debug.png)

| Sige6   | 连接  | 串口模块 |
| -------- | ----- | ------ |
| **GND** | ---> | GND |
| **TX**  | ---> | RX |
| **RX**  | ---> | TX |

:::tip
串口通讯参数
 - 波特率：115200
 - 数据位：8
 - 停止位：1
 - 校验位：无
 - 流控：无
:::

### 3.2 以太网口

1. 首先将网线的一端插入 ArmSoM-Sige6 的以太网接口，网线的另一端接入路由器，并确保
网络是畅通的
2. 系统启动后会通过 DHCP 自动给以太网卡分配 IP 地址，不需要其他任何配置
3. 在ArmSoM-Sige6 的 Linux 系统中查看 IP 地址的命令如下所示，其中eth0就是以太网卡设备名称

```bash
root@localhost:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN group default qlen 1000
    link/sit 0.0.0.0 brd 0.0.0.0
3: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 60:f1:6b:3a:2b:fc brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.181/24 brd 192.168.1.255 scope global dynamic noprefixroute eth0
       valid_lft 43198sec preferred_lft 43198sec
    inet6 fd85:d322:c276:0:a827:46f6:9747:d4b1/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
    inet6 fe80::7a4f:2a6b:3dcd:6d6a/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
4: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 66:03:a5:e0:d5:da brd ff:ff:ff:ff:ff:ff permaddr f0:bf:bc:f6:3a:8e
```
ArmSoM-Sige6 启动后查看 IP 地址有三种方法：

- 接 HDMI 显示器，然后登录系统使用终端输入 ip a 命令查看 IP 地址
- 接[调试串口](#调试串口)终端输入 ip a 命令来查看 IP 地址
- 如果没有调试串口，也没有 HDMI 显示器，还可以通过路由器的管理界面来查看ArmSoM-Sige6 网口的 IP 地址。不过这种方法经常有人会无法正常看到ArmSoM-Sige6 的 IP 地址。如果看不到，调试方法如下所示：
    - 首先检查 Linux 系统是否已经正常启动，如果ArmSoM-SigeX的绿灯常亮，一般是正常启动了，如果只亮红灯，说明系统都没正常启动。
    - 检查网线有没有插紧，或者换根网线试下。
    - 换个路由器试下，路由器的问题有遇到过很多，比如路由器无法正常分配IP 地址，或者已正常分配 IP 地址但在路由器中看不到。
    - 如果没有路由器可换就只能连接 HDMI 显示器或者使用调试串口来查看 IP地址。

:::tip
另外需要注意的是ArmSoM-Sige6  DHCP 自动分配 IP 地址是不需要任何设置的。
:::


4. 使用工具 ping 判断是否连通网络。

测试网络连通性的命令如下，ping 命令可以通过 Ctrl+C 快捷键来中断运行
```bash
root@localhost:~# ping -I eth0 www.baidu.com
PING www.a.shifen.com (103.235.46.115) from 192.168.1.181 eth0: 56(84) bytes of data.
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=3 ttl=47 time=160 ms
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=4 ttl=47 time=171 ms
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=5 ttl=47 time=159 ms
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=6 ttl=47 time=154 ms
^C
--- www.a.shifen.com ping statistics ---
6 packets transmitted, 4 received, 33.3333% packet loss, time 5055ms
rtt min/avg/max/mdev = 153.526/160.843/170.917/6.311 ms
```

### 3.3 WIFI

ArmSoM-Sige 系列产品都是onboard WIFI模块，不需要外接网口设备，使用[标准4代天线](https://www.armsom.org/product-page/sige7-metal-shell)

**服务器版镜像通过命令连接 WIFI**

1. 先登录 linux 系统，有下面三种方式
 - 如果ArmSoM-Sige6 连接了网线，可以通过 ssh 远程登录 linux 系统
 - 如果ArmSoM-Sige6 连接好了调试串口，可以使用串口终端登录 linux 系统
 - 如果连接了ArmSoM-Sige6 到HDMI显示器，可以通过HDMI显示的终端登录到linux
系统

2. 使用 nmcli dev wifi 命令扫描周围的 WIFI 热点

```bash
# 1. Open the WIFI
root@localhost: nmcli r wifi on
# 2. Scan WIFI
root@localhost: nmcli dev wifi
# 3. Connect to WIFI network
root@localhost: nmcli dev wifi connect "wifi_name" password "wifi_password"
```

![wifi-nmcli-scan](/img/general-tutorial/sige6-wifi.png)

3. 使用 nmcli 命令连接扫描到的 WIFI

 - wifi_name 换成需要连接的 WIFI 热点的名字
 - wifi_passwd 换成需要连接的 WIFI 热点的密码

```bash
root@localhost:~$ nmcli dev wifi connect "wifi_name" password "wifi_passwd"
Device 'wlan0' successfully activated with '6f6c5ce0-7fd3-4ff7-a72f-94a2424600f3'.
```

4. 通过 ip addr show wlan0 命令可以查看 wifi 的 IP 地址

```bash
root@localhost:~# ip addr show wlan0
4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether f0:bf:bc:f6:3a:8e brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.239/24 brd 192.168.1.255 scope global dynamic noprefixroute wlan0
       valid_lft 43081sec preferred_lft 43081sec
    inet6 fd85:d322:c276:0:50f8:7f68:84ea:2d9d/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
    inet6 fe80::ad1f:8848:5dda:9c06/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

5. 使用 ping 命令可以测试 wifi 网络的连通性，ping 命令可以通过 Ctrl+C 快捷键来中断运行

```bash
root@localhost:~# ping -I wlan0 www.baidu.com
PING www.wshifen.com (103.235.46.102) from 192.168.1.239 wlan0: 56(84) bytes of data.
64 bytes from 103.235.46.102 (103.235.46.102): icmp_seq=3 ttl=47 time=167 ms
64 bytes from 103.235.46.102 (103.235.46.102): icmp_seq=4 ttl=47 time=167 ms
64 bytes from 103.235.46.102 (103.235.46.102): icmp_seq=5 ttl=47 time=189 ms
64 bytes from 103.235.46.102 (103.235.46.102): icmp_seq=6 ttl=47 time=177 ms
^C
--- www.wshifen.com ping statistics ---
6 packets transmitted, 4 received, 33.3333% packet loss, time 9398ms
rtt min/avg/max/mdev = 166.592/175.017/189.455/9.216 ms
```

6.使用完wifi，若想要断开连接，可以执行下面命令，其中wifi_name是你连接的wifi名称
```bash
root@localhost:~# nmcli con down "wifi_name"
Connection 'wifi_name' successfully deactivated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/1)
```


**服务器版镜像通过图形化方式连接 WIFI**

1. 登录 linux 系统，有下面三种方式
- 如果开发板连接了网线，可以通过 ssh 远程登录 linux 系统
- 如果开发板连接好了调试串口，可以使用串口终端登录 linux 系统（串口软件请使用 MobaXterm，使用 minicom 无法显示图形界面）
- 如果连接了开发板到HDMI显示器，可以通过HDMI显示的终端登录到linux系统

2. 在命令行中输入 nmtui 命令打开 wifi 连接的界面

![wifi-nmcli](/img/general-tutorial/wifi-nmcli.png)

```bash
root@localhost:~# nmtui
```

3. 选择 Activate a connect 后回车

![wifi-nmcli-connect](/img/general-tutorial/wifi-nmcli-connect.png)

4. 选择想要连接的 WIFI 热点，输入密码。WIFI 连接成功后会在已连接的 WIFI 名称前显示一个“*”

![wifi-nmcli-success](/img/general-tutorial/wifi-nmcli-success.png)

5. 通过 ip addr show wlan0 命令可以查看 wifi 的 IP 地址

```bash
root@localhost:~# ip addr show wlan0
4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether f0:bf:bc:f6:3a:8e brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.239/24 brd 192.168.1.255 scope global dynamic noprefixroute wlan0
       valid_lft 43173sec preferred_lft 43173sec
    inet6 fd85:d322:c276:0:50f8:7f68:84ea:2d9d/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
    inet6 fe80::ad1f:8848:5dda:9c06/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

6. 使用 ping 命令可以测试 wifi 网络的连通性，ping 命令可以通过 Ctrl+C 快捷键来中断运行

```bash
root@localhost:~# ping -I wlan0 www.baidu.com
PING www.wshifen.com (103.235.46.115) from 192.168.1.239 wlan0: 56(84) bytes of data.
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=1 ttl=47 time=195 ms
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=2 ttl=47 time=164 ms
64 bytes from 103.235.46.115 (103.235.46.115): icmp_seq=3 ttl=47 time=188 ms
^C
--- www.wshifen.com ping statistics ---
4 packets transmitted, 3 received, 25% packet loss, time 3004ms
rtt min/avg/max/mdev = 164.471/182.364/194.691/12.950 ms

```

**桌面版镜像的测试方法**

1. 点击桌面上右上角的网络配置图标【Select Network】，测试 WIFI 时请不要连接网线。
2. 连接好 WIFI 后，可以打开浏览器查看是否能上网

![wifi-desktop-sig6](/img/general-tutorial/wifi-desktop-sig6.jpg)

**网络设置**
<div class="cards">
<a href="./getting-start/startup/#3-登录方式" class="card-link">
    <div class="card">
        <div class="icon">
            <i>🎾</i>
        </div>
        <div class="content">
            <h2>登录方式</h2>
            <p>串口访问，ssh访问</p>
        </div>
    </div>
</a>
<a href="./getting-start/startup-network#56-静态网络配置" class="card-link">
    <div class="card">
        <div class="icon">
            <i>🌐</i>
        </div>
        <div class="content">
            <h2>设置静态IP地址</h2>
        </div>
    </div>
</a>
<a href="./getting-start/startup-network#57-创建wifi热点" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>WIFI 热点</h2>
        </div>
    </div>
</a>
</div>


### 3.4 BT
1. 在使用蓝牙功能之前，我们先查看蓝牙的设备节点是否存在，以保证蓝牙初始化正常
```bash
root@localhost:/# hciconfig -a
hci0:   Type: Primary  Bus: UART
        BD Address: 67:B8:13:D7:E7:A4  ACL MTU: 1021:9  SCO MTU: 255:4
        UP RUNNING
        RX bytes:895 acl:0 sco:0 events:68 errors:0
        TX bytes:4499 acl:0 sco:0 commands:68 errors:0
        Features: 0xbf 0x2e 0x4d 0xfe 0xd8 0x3f 0x7b 0x87
        Packet type: DM1 DM3 DM5 DH1 DH3 DH5 HV1 HV3
        Link policy: RSWITCH SNIFF
        Link mode: SLAVE ACCEPT
        Name: 'localhost'
        Class: 0x3c0000
        Service Classes: Rendering, Capturing, Object Transfer, Audio
        Device Class: Miscellaneous,
        HCI Version:  (0xd)  Revision: 0xb
        LMP Version:  (0xd)  Subversion: 0xb
        Manufacturer: not assigned (2875)
```

2. 接下来可以使用bluetoothctl进行蓝牙连接
```bash
root@localhost:/# bluetoothctl
Agent registered
1. 使能蓝牙控制器
[bluetooth]# power on    
Changing power on succeeded
2. 设置控制器为可被发现的
[bluetooth]# discoverable on
Changing discoverable on succeeded
[CHG] Controller 67:B8:13:D7:E7:A4 Discoverable: yes
3. 设置控制器为可配对的
[bluetooth]# pairable on
Changing pairable on succeeded
4. 开启扫描蓝牙设备
[bluetooth]# scan on
Discovery started
[CHG] Controller 67:B8:13:D7:E7:A4 Discovering: yes
[NEW] Device 46:A8:19:66:89:E0 xxxx
[NEW] Device 7D:E3:17:23:A6:6E xxxx
[NEW] Device 24:2A:EA:61:0F:28 Donleon  #记录下你要连接的设备的MAC地址
5. 关闭扫描
[bluetooth]# scan off
Discovery stopped
[CHG] Device 24:2A:EA:61:0F:28 RSSI is nil
[CHG] Controller 67:B8:13:D7:E7:A4 Discovering: no
6. 将该设备设置为信任设备
[bluetooth]# trust 24:2A:EA:61:0F:28
[CHG] Device 24:2A:EA:61:0F:28 Trusted: yes  
Changing 24:2A:EA:61:0F:28 trust succeeded
7. 通过MAC地址与该设备配对
[bluetooth]# pair 24:2A:EA:61:0F:28
Attempting to pair with 24:2A:EA:61:0F:28
[CHG] Device 24:2A:EA:61:0F:28 Connected: yes
Request confirmation
[agent] Confirm passkey 227858 (yes/no): yes     #这里输入yes，同时在手机上也需要确认配对
[CHG] Device 24:2A:EA:61:0F:28 ServicesResolved: yes
[CHG] Device 24:2A:EA:61:0F:28 Paired: yes
Pairing successful    #当此处显示配对成功时，我们再退出（可能需要等待一会）
8. 退出
[Donleon]# exit
```
![sige-bt-pair](/img/general-tutorial/sige-bt-pair.png)

3. 如果我们需要连接的蓝牙设备是手机，需要下载启用音频服务，（如果你需要连接的蓝牙设备是耳机/蓝牙音响，可以不需要执行下面的操作）
```bash
root@localhost:/# apt update
root@localhost:/# apt -y install pulseaudio-module-bluetooth
root@localhost:/# pulseaudio --start --system=false --realtime=false --log-target=journal
```

4. 接下来我们可以开始进行蓝牙连接
```bash
root@localhost:~# bluetoothctl #重新进入bluetoothctl
Agent registered
1. 查看已配对的蓝牙设备
[bluetooth]# paired-devices
Device 24:2A:EA:61:0F:28 Donleon
2. 连接蓝牙设备
[bluetooth]# connect 24:2A:EA:61:0F:28
Attempting to connect to 24:2A:EA:61:0F:28
[CHG] Device 24:2A:EA:61:0F:28 Connected: yes
Connection successful
[CHG] Device 24:2A:EA:61:0F:28 ServicesResolved: yes  #此处显示连接成功即可
3. 移除蓝牙设备
[bluetooth]# remove 24:2A:EA:61:0F:28
[DEL] Device 24:2A:EA:61:0F:28 Donleon
Device has been removed

```
若连接时出现如下报错，尝试在手机上主动连接名为“localhost”的设备：
![sige-bt-error](/img/general-tutorial/sige-bt-error.png)

连接成功后在手机上显示已连接：          
![sige-bt-connect](/img/general-tutorial/sige-bt-connect.png)


### 3.5 HDMI

| 型号 |Sige7 | Sige6 | Sige5  | Sige3 | Sige1 |
| ----- |  ----- | ------ | ------ |----- | ----- |
| 分辨率  | 8Kp60 |4Kp60| 4Kp120 |4Kp60|4Kp60|

1. 使用 HDMI 线连接 ArmSoM-Sige 和 HDMI 显示器
2. 启动 linux 系统后如果 HDMI 显示器有图像输出说明 HDMI 接口使用正常

:::tip
注意，很多笔记本电脑虽然带有 HDMI 接口，但是笔记本的 HDMI 接口一般只有输出功能，并没有 HDMI in 的功能，也就是说并不能将其他设备的 HDMI 输出显示到笔记本的屏幕上。
当想把开发板的 HDMI 接到笔记本电脑 HDMI 接口时，请先确认清楚您的笔记本是支持 HDMI in 的功能。
当 HDMI 没有显示的时候，请先检查使用的系统是否是带桌面的版本，如果是服务器版本只能看到终端
:::

#### HDMI 转 VGA 显示测试
1. 需要准备下面的配件
- HDMI 转 VGA 转换器
- 一根 VGA 线，支持 VGA 接口的显示器

2. HDMI 转 VGA 显示测试如下所示

![sige-hdmi-vga](/img/general-tutorial/sige-hdmi-vga.jpg)

:::tip
使用 HDMI 转 VGA 显示时，ArmSoM-Sige产品和Linux系统是不需要做任何设置的，只需要开发板 HDMI 接口能正常显示就可以了。所以如果测试有问题，请检查 HDMI 转 VGA 转换器、VGA 线以及显示器是否有问题。
:::

### 3.6 USB

|  型号  |Sige6 |
| ----- |  ----- | 
| USB   | 1* Type-C 3.0, 1x USB3.0, 3x USB2.0 |

:::info
USB 接口是可以接 USB hub 来扩展 USB 接口的数量的。
:::

#### 连接 USB 鼠标或键盘测试
1. 将 USB 接口的键盘插入ArmSoM-Sige产品的 USB 接口中
2. 连接ArmSoM-Sige产品到 HDMI 显示器
3. 如果鼠标或键盘能正常操作系统说明 USB 接口使用正常（鼠标只有在桌面版的系统中才能使用）

:::tip
注意，接鼠标或键盘时，只能接USB2.0接口，不可接USB3.0接口
:::

#### 连接 USB 存储设备测试
1. 首先将 U 盘或者 USB 移动硬盘插入 ArmSoM-Sige产品的 USB 接口中
2. 执行下面的命令如果能看到 sdX 的输出说明 U 盘识别成功
```bash
root@localhost:~# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0   30720000 sda
   8        1   30718976 sda1
```
3. 使用 mount 命令可以将 U 盘挂载到/mnt 中，然后就能查看 U 盘中的文件了

```bash
root@localhost:~# mount /dev/sda1 /test/
mount: /test: /dev/sda1 already mounted on /test.
```

4. 挂载完后通过 df -h 命令就能查看 U 盘的容量使用情况和挂载点

```bash
root@localhost:/test# df -h | grep "sd"
/dev/sda1        30G   64K   30G   1% /mnt
```

### 3.7 M.2 Key M

ArmSoM-Sige6 提供 M.2 Key M 连接器：

- 产品的背面有一个带有M.2 Key M 连接器。 板上有一个标准的 M.2 2280 安装孔，可以部署 M.2 2280 NVMe SSD。  
  **<font color='red'>注意：该 M.2 接口不支持 M.2 SATA SSD。</font>**

可以使用lsblk查看我们的硬盘设备，下面列出的信息中，nvme0n1就是我们的 NVMe 磁盘
```bash
root@localhost:~# lsblk
NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
mtdblock0    31:0    0   16M  0 disk
mmcblk1     179:0    0 29.1G  0 disk
├─mmcblk1p1 179:1    0   32M  0 part
├─mmcblk1p2 179:2    0   16M  0 part
├─mmcblk1p3 179:3    0   96M  0 part
├─mmcblk1p4 179:4    0  7.3G  0 part /
├─mmcblk1p5 179:5    0   16M  0 part
└─mmcblk1p6 179:6    0 21.7G  0 part
nvme0n1     259:0    0 13.4G  0 disk
```
我们可以尝试将 NVMe 磁盘挂载到某个空白目录
```bash
root@localhost:~# mkdir temp
root@localhost:~# mount /dev/nvme0n1 temp
```
若挂载不成功，可能原因是你的 NVMe 磁盘目前是完全空白的（没有分区表），也没有任何文件系统，可以执行如下命令，
将磁盘格式化为 ext4 文件系统后重新挂载即可

```bash
root@localhost:~# mkfs.ext4 /dev/nvme0n1
```

### 3.8 音频

查看系统中的声卡。

```bash
root@localhost:~# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: allwinnerac101b [allwinner-ac101b], device 0: sunxi-snd-plat-i2s-ac101b-codec sunxi-ac101b.7-003e-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: allwinnerhdmi [allwinner-hdmi], device 0: sunxi-snd-plat-i2s-sunxi-snd-codec-hdmi soc@3000000:hdmi_codec- []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```
:::tip
系统默认开启板载麦克风录音，耳机麦克风关闭，且板载喇叭和耳机听筒均为开启状态。
:::


使用板载麦克风录音，执行以下命令

```bash
root@localhost:~# arecord -D hw:0,0 -f S16_LE -r 44100 -c 2 -d 10 /tmp/test_mic1.wav
```

若使用耳机麦克风录音，需先关闭板载麦克风，然后开启耳机麦克风，执行以下命令
```bash
root@localhost:~# amixer -c 0 cset name='MIC1 Switch' off  //板载麦克风为mic1
root@localhost:~# amixer -c 0 cset name='MIC4 Switch' on  //耳机麦克风为mic4
```
开启好耳机麦克风后，可以执行如下命令测试（同上录音命令）
```bash
root@localhost:~# arecord -D hw:0,0 -f S16_LE -r 44100 -c 2 -d 10 /tmp/test_mic2.wav
```

播放音频文件

```bash
root@localhost:~# aplay -D hw:0,0 /tmp/test_mic1.wav （播放耳机录制的音频则替换为test_mic2.wav）
```

### 3.9 FAN

Sige 产品 配备一个 5V 的风扇，使用 0.8mm 的连接器

使用 echo 命令设置风扇转速：PWM 控制范围一般为 0~255（0=停转，255=全速）。
- 由于系统设置了温控，当我们开启风扇时，若为达到特定温度时，风扇会自动停转，所以我们做下面测试时可以先把温控关闭，执行如下命令

```bash
root@localhost:~# cat /sys/class/thermal/thermal_zone0/mode
enabled
root@localhost:~# cat /sys/class/thermal/thermal_zone1/mode
enabled
root@localhost:~# echo disabled > /sys/class/thermal/thermal_zone0/mode
root@localhost:~# echo disabled > /sys/class/thermal/thermal_zone1/mode
```

- 关闭后，我们可以执行如下步骤操作风扇转速
```bash
// 查看当前转速 
root@localhost:~# cat /sys/class/hwmon/hwmon0/pwm1

//设置风扇全速
root@localhost:~# echo 255 > /sys/class/hwmon/hwmon0/pwm1

//关闭风扇
root@localhost:~# echo 0 > /sys/class/hwmon/hwmon0/pwm1

```

### 3.10 40 PIN

Sige 提供了一个40pin针脚的GPIO座子，兼容于市面上大部分传感器的应用。

#### wiring-armbian 的方法

下载 wiringOP 的代码到开发板 [wiring-armbian](https://github.com/ArmSoM/wiring-armbian)

- 下载好 wiringOP 代码后，先编译安装，执行如下命令：
```bash
root@localhost:/# cd wiring-armbian/
root@localhost:/wiring-armbian# ./build clean
root@localhost:/wiring-armbian# ./build 
```

- 编译完成后，测试 gpio readall 命令的输出如下
```bash
 root@localhost:/wiring-armbian# gpio readall
 +------+-----+--------+--------+---+   ARMSOM-SIGE6   +---+--------+--------+-----+------+
 | GPIO | wPi |   Name   |  Mode  | V | Physical | V |  Mode  | Name     | wPi | GPIO |
 +------+-----+----------+--------+---+----++----+---+--------+----------+-----+------+
 |      |     |     3.3V |        |   |  1 || 2  |   |        | 5V       |     |      |
 |  313 |   0 |    SDA.4 |    OFF | 0 |  3 || 4  |   |        | 5V       |     |      |
 |  312 |   1 |    SCL.4 |    OFF | 0 |  5 || 6  |   |        | GND      |     |      |
 |  356 |   2 |   PWM0-2 |    OFF | 0 |  7 || 8  | 0 | OFF    | TXD.1    | 3   | 354  |
 |      |     |      GND |        |   |  9 || 10 | 0 | OFF    | RXD.1    | 4   | 355  |
 |  357 |   5 |   PWM0-3 |    OFF | 0 | 11 || 12 | 0 | OFF    | PK0      | 6   | 320  |
 |  358 |   7 |   PWM0-4 |    OFF | 0 | 13 || 14 |   |        | GND      |     |      |
 |  359 |   8 |   PWM0-5 |    OFF | 0 | 15 || 16 | 0 | ALT7   | TXD.2    | 9   | 32   |
 |      |     |     3.3V |        |   | 17 || 18 | 0 | ALT7   | TXD.2    | 10  | 33   |
 |  108 |  11 |   MOSI.1 |    OFF | 0 | 19 || 20 |   |        | GND      |     |      |
 |  109 |  12 |   MISO.1 |    OFF | 0 | 21 || 22 | 0 | OFF    | PK6      | 13  | 326  |
 |  107 |  14 |   SCLK.1 |    OFF | 0 | 23 || 24 | 0 | OFF    | PD10     | 15  | 106  |
 |      |     |      GND |        |   | 25 || 26 | 0 | OFF    | PD15     | 16  | 111  |
 |  315 |  17 |    SDA.5 |    OFF | 0 | 27 || 28 | 0 | OFF    | SCL.5    | 18  | 314  |
 |  362 |  19 |   PWM0-8 |    OFF | 0 | 29 || 30 |   |        | GND      |     |      |
 |  321 |  20 |      PK1 |    OFF | 0 | 31 || 32 | 0 | OFF    | PWM0-7   | 21  | 361  |
 |  360 |  22 |   PWM0-6 |    OFF | 0 | 33 || 34 |   |        | GND      |     |      |
 |  322 |  23 |      PK2 |    OFF | 0 | 35 || 36 | 0 | OFF    | PD14     | 24  | 110  |
 |  325 |  25 |      PK5 |    OFF | 0 | 37 || 38 | 0 | OFF    | PK4      | 26  | 324  |
 |      |     |      GND |        |   | 39 || 40 | 0 | OFF    | Pk3      | 27  | 323  |
 +------+-----+----------+--------+---+----++----+---+--------+----------+-----+------+
 | GPIO | wPi |   Name   |  Mode  | V | Physical | V |  Mode  | Name     | wPi | GPIO |
 +------+-----+--------+--------+---+  ARMSOM-SIGE6  +---+-------+---------+-----+------+
```

- 设置 GPIO 口为输出模式，其中第三个参数需要输入引脚对应的 wPi 的序号

```bash
root@localhost:/wiring-armbian# gpio mode 1 out
```

- 设置 GPIO 口输出高电平，设置完后可以使用万用表测量引脚的电压的数值，如果为 3.3v，说明设置高电平成功

```bash
root@localhost:/wiring-armbian# gpio write 1 1
```

- 设置 GPIO 口输出低电平，设置完后可以使用万用表测量引脚的电压的数值，如果为 0v，说明设置低电平成功
```bash
root@localhost:/wiring-armbian# gpio write 1 0
```

- 也可以读取对应引脚当前的电平状态
```bash
root@localhost:/wiring-armbian# gpio read 1
0
```

- 其他引脚的设置方法类似，只需修改 wPi 的序号为引脚对应的序号即可

### 3.11 RGB LED

Sige6 具有一个用户灯（红灯） 和 一个电源指示灯（绿灯）。

- 用户红灯
  默认情况下为心跳灯，可由用户自行操控。

- 电源指示绿灯
  默认情况下，其常亮表示系统运行正常。

用户可通过命令控制

```bash
root@localhost:~# echo 0 > /sys/class/leds/armsom:red:user/brightness （关闭）
root@localhost:~# echo 1 > /sys/class/leds/armsom:red:user/brightness （点亮）
root@localhost:~# echo heartbeat > /sys/class/leds/armsom:red:user/trigger （心跳灯）
```

### 3.12 RTC

- Sige配备了一颗RTC IC **LK8563S**。
- 首先，使用2pin的排针接口，插入RTC电池给RTC IC供电。
- 请注意，我们应该将 RTC 电池保留在 RTC 连接器中，并确认 rtc LK8563S 设备已创建

```bash
root@localhost:~# dmesg | grep rtc
[    3.247864] axp8191-rtcldo: supplied by regulator-dummy
[    9.306125] [drm] sunxi_de_bind crtc init for de 0 ok
[    9.306154] [drm] sunxi_de_bind crtc init for de 1 ok
[    9.972865] [drm] [SUNXI-CRTC]sunxi_crtc_atomic_enable
[   15.562369] rtc-hym8563 14-0051: no valid clock/calendar values available
[   15.592873] rtc-hym8563 14-0051: registered as rtc0
[   15.623103] rtc-hym8563 14-0051: no valid clock/calendar values available
[   15.642351] rtc-hym8563 14-0051: hctosys: unable to read the hardware clock
[   27.269249] [drm] [SUNXI-CRTC]sunxi_crtc_atomic_disable
[   27.298550] [drm] [SUNXI-CRTC]sunxi_crtc_atomic_enable
[   27.778616] [drm] [SUNXI-CRTC]sunxi_crtc_atomic_enable
[   28.317457] [drm] [SUNXI-CRTC]sunxi_crtc_atomic_disable
[  266.074667] rtc-hym8563 14-0051: no valid clock/calendar values available
[  347.201648] [drm] [SUNXI-CRTC]sunxi_crtc_atomic_disable
```

- 找到rtc0，然后使用以下命令设置系统时间并同步到rtc0。

```bash
//读取RTC芯片当前时间，首次读取时没有时钟
root@localhost:~# hwclock -r -f /dev/rtc0
[  164.582991][ T2179] rtc-hym8563 14-0051: no valid clock/calendar values available
hwclock: ioctl(RTC_RD_TIME) to /dev/rtc0 to read the time failed: Invalid argument

//查看系统当前时间
root@localhost:~# date
Thu Jun 26 01:00:52 UTC 2025

//设置系统时间
root@localhost:~# date -s "2026-06-16 10:30:00"
Tue Jun 16 10:30:00 UTC 2026

//将系统当前时间写入 RTC
root@localhost:~# hwclock -w -f /dev/rtc0

//然后读取 RTC 芯片当前时间
root@localhost:~# hwclock -r -f /dev/rtc0
2026-06-16 10:31:02.465724+00:00
```

- 关闭RTC电池，10分钟或更长时间后，插入RTC电池并启动Sige6，查看rtc时间

```bash
//由于rtc掉电丢失数据，使用hwclock命令查看无法读取时钟
root@localhost:~# hwclock -r -f /dev/rtc0
[  164.582991][ T2179] rtc-hym8563 14-0051: no valid clock/calendar values available
hwclock: ioctl(RTC_RD_TIME) to /dev/rtc0 to read the time failed: Invalid argument

//重新将rtc与系统时间同步后，再重新查看rtc时钟
root@localhost:~# date  //查看当前系统时钟
Thu Jun 26 00:52:28 UTC 2025
root@localhost:~# hwclock -w -f /dev/rtc0  //写入
root@localhost:~# hwclock -r -f /dev/rtc0  //读取rtc时钟
2025-06-26 00:52:45.272526+00:00
```

### 3.13 MIPI-CSI
MIPI-CSI接口分别支持0v13850摄像头[camera-module1](./armsom-camera-module1)和imx219摄像头
- camera-module1摄像头接开发板背面的MIPI-CSI1接口，如图所示：

![armsom-sige6-mipi1](/img/lm/armsom-sige6-mipi1.jpg)

- imx219摄像头接开发板正面的MIPI-CSI0接口，如图所示：

![armsom-sige6-mipi0](/img/lm/armsom-sige6-mipi0.jpg)

#### 3.13.1 使用 ArmSoM camera-module1

可以下载测试文件csi_test_mplane `网盘路径：ArmSoM->ArmSoM-Sige6->软件资料->摄像头测试程序`，将其push到开发板执行。

```bash
root@localhost:/# chmod +x csi_test_mplane
root@localhost:/# ./csi_test_mplane 8 0 2112 1568 ./ 5 5
open /dev/video8 fd = 3
resolution got from sensor = 2112*1568 num_planes = 1
VIDIOC_STREAMON ok
file length = 6623232 0 0
file start = 0x7fb7f1f000 (nil) (nil)
file length = 6623232 0 0
file start = 0x7fb78ce000 (nil) (nil)
file length = 6623232 0 0
file start = 0x7fb727d000 (nil) (nil)
file length = 6623232 0 0
file start = 0x7fb6c2c000 (nil) (nil)
VIDIOC_STREAMOFF ok
mode 5 test done at the 0 time!!
time cost 0.339447(s)
```
执行完上述命令后，可以看到当前目录下生成了一些fb8_y5_2112_1568_*.bin文件，我们可以使用7yuv软件查看RAW原始图，按下图所示选择相应参数：

![armsom-w3-imx415-camera](/img/lm/armsom-sige6-ov13850-camera.png)

#### 3.13.2 使用 imx219摄像头
测试方法同上，使用如下命令
```bash
root@localhost:/# ./csi_test_mplane 0 0 1920 1080 ./ 5 5
```
完成上述测试后，可以查看摄像头节点
```bash
root@localhost:/# cat /sys/kernel/debug/mpp/vi
*****************************************************
VIN hardware feature list:
mcsi 3, ncsi 2, parser 3, isp 1, vipp 4, dma 6
CSI_VERSION: CSI300_500, ISP_VERSION: ISP602_100
CSI_CLK: 324000000, ISP_CLK: 324000000
*****************************************************
vi0:
imx219 => mipi2 => csi2 => isp0 => vipp0
input => hoff: 0, voff: 0, w: 1920, h: 1080, fmt: RGGB10
output => width: 1920, height: 1080, fmt: RAW10
interface: MIPI, isp_mode: NORMAL, hflip: 0, vflip: 0
prs_in => x: 1920, y: 1080, hb: 2738, hs: 3407
bkuf => cnt: 5 size: 4177920 rest: 5, work_mode: online
frame => cnt: 21, lost_cnt: 0, error_cnt: 0
internal => avg: 33(ms), max: 33(ms), min: 33(ms)
CSI Bandwidth: 0
*****************************************************
vi8:
ov13850_mipi => mipi1 => csi1 => isp0 => vipp8
input => hoff: 0, voff: 0, w: 2112, h: 1568, fmt: BGGR10
output => width: 2112, height: 1568, fmt: RAW10
interface: MIPI, isp_mode: NORMAL, hflip: 0, vflip: 0
prs_in => x: 2112, y: 1568, hb: 3811, hs: 2667
bkuf => cnt: 5 size: 6623232 rest: 4, work_mode: online
frame => cnt: 6, lost_cnt: 0, error_cnt: 0
internal => avg: 33(ms), max: 33(ms), min: 33(ms)
CSI Bandwidth: 0
*****************************************************
```

### 3.14 MIPI DSI

ArmSoM-Sige6 分辨率最高分辨率可达 4K@60Hz

1. 按照下图连接好排线

![sige7-display-10-hd](/img/general-tutorial/display-10-hd-sige6.png)

2. 系统默认关闭MIPI-DSI屏幕,若要打开，需到SDK打开设备树相应节点

### 3.15 CPU/GPU/NPU/DDR

以下为ArmSoM-Sige6 的CPU GPU NPU DDR定频和性能模式设置方法

#### 定频
##### CPU 定频
ArmSoM-Sige6 的cpu是6个A55+2个A76，分为2组单独管理，节点分别是：

```bash
root@localhost:~# ls /sys/devices/system/cpu/cpufreq/policy0:（对应6个A55：CPU0-5）
affected_cpus                  scaling_cur_freq
cpuinfo_cur_freq               scaling_driver
cpuinfo_max_freq               scaling_governor
cpuinfo_min_freq               scaling_max_freq
cpuinfo_transition_latency     scaling_min_freq
related_cpus                   scaling_setspeed
scaling_available_frequencies  stats
scaling_available_governors

root@localhost:~# ls /sys/devices/system/cpu/cpufreq/policy6:(对应2个A76：CPU6-7)
affected_cpus                  scaling_cur_freq
cpuinfo_cur_freq               scaling_driver
cpuinfo_max_freq               scaling_governor
cpuinfo_min_freq               scaling_max_freq
cpuinfo_transition_latency     scaling_min_freq
related_cpus                   scaling_setspeed
scaling_available_frequencies  stats
scaling_available_governors


root@localhost:~# cat /sys/devices/system/cpu/cpufreq/policy6/scaling_available_frequencies // 获取当前CPU支持的频点
416000 780000 1014000 1196000 1404000 1508000 1612000 1716000 1794000 1898000 1950000 2002000 
root@localhost:~# cat /sys/devices/system/cpu/cpufreq/policy6/scaling_available_governors // 获取cpu运行的模式
conservative ondemand userspace powersave performance schedutil 
```

默认是自动变频模式：schedutil（恢复的话设置为该模式即可）

###### 设置手动定频
```bash
root@localhost:~# cat /sys/devices/system/cpu/cpufreq/policy6/cpuinfo_cur_freq
416000   //查看当前频率
root@localhost:~# echo userspace > /sys/devices/system/cpu/cpufreq/policy6/scaling_governor  //手动定频模式：userspace
root@localhost:~# echo 1612000 > /sys/devices/system/cpu/cpufreq/policy6/scaling_setspeed  设置频率为1612000 
root@localhost:~# cat /sys/devices/system/cpu/cpufreq/policy6/cpuinfo_cur_freq  // 确认是否设置成功
1612000
```
其他两组CPU也是类似的方式进行设置，操作对应的节点即可。

##### GPU定频
###### GPU的节点路径
```bash
root@localhost:~# ls /sys/class/devfreq/1800000.gpu
available_frequencies  max_freq               subsystem
available_governors    min_freq               target_freq
cur_freq               name                   timer
device                 polling_interval       trans_stat
governor               power                  uevent
root@localhost:~# cat /sys/class/devfreq/1800000.gpu/available_frequencies // 获取GPU支持的频点
400000000 600000000 800000000 1008000000  
root@localhost:~# cat /sys/class/devfreq/1800000.gpu/available_governors // 获取GPU运行的模式
sunxi_actmon userspace performance simple_ondemand
```
默认是自动变频模式：simple_ondemand（恢复的话设置为该模式即可）

###### 设置手动定频
```bash
root@localhost:~# cat /sys/class/devfreq/1800000.gpu/cur_freq //查看当前频率
400000000
root@localhost:~# echo userspace > /sys/class/devfreq/1800000.gpu/governor // 手动定频模式：userspace
root@localhost:~# echo 600000000 > /sys/class/devfreq/1800000.gpu/userspace/set_freq // 设置频率为600000000
root@localhost:~# cat /sys/class/devfreq/1800000.gpu/cur_freq  // 确认是否设置成功
600000000
```
  **<font color='red'>注意：设置GPU频率时需不断点击或滑动触摸屏（刷新GPU）</font>**

##### DDR定频
###### DDR的节点路径
```bash
root@localhost:~# ls /sys/class/devfreq/a020000.dmcfreq/  
available_frequencies  max_freq               target_freq
available_governors    min_freq               trans_stat
cur_freq               name                   uevent
device                 power
governor               subsystem
root@localhost:~# cat /sys/class/devfreq/a020000.dmcfreq/available_frequencies // 获取DDR支持的频点
400000000 800000000 1200000000 2400000000
root@localhost:~# cat /sys/class/devfreq/a020000.dmcfreq/available_governors // 获取DDR运行的模式
sunxi_actmon userspace performance simple_ondemand
```
默认是自动变频模式：performance（恢复的话设置为该模式即可）

###### 设置手动定频 
```bash
root@localhost:~# cat /sys/class/devfreq/a020000.dmcfreq/cur_freq // 查看当前频率
2400000000
root@localhost:~# echo userspace > /sys/class/devfreq/a020000.dmcfreq/governor // 手动定频模式：userspace
root@localhost:~# echo 1200000000 > /sys/class/devfreq/a020000.dmcfreq/userspace/set_freq  // 设置频率为1200000000
root@localhost:~# cat /sys/class/devfreq/a020000.dmcfreq/cur_freq   // 确认是否设置成功
1200000000
```

##### NPU定频
###### NPU的节点路径
```bash
root@localhost:~# ls /sys/class/devfreq/3600000.npu/
available_frequencies  max_freq               target_freq
available_governors    min_freq               trans_stat
cur_freq               name                   uevent
device                 power
governor               subsystem
root@localhost:~# cat /sys/class/devfreq/3600000.npu/available_frequencies     // 获取NPU支持的频点       
492000000 852000000 1008000000
root@localhost:~# cat /sys/class/devfreq/3600000.npu/available_governors // 获取NPU运行的模式 
sunxi_actmon userspace performance simple_ondemand
```
默认是自动变频模式：performance（恢复的话设置为该模式即可）

###### 设置手动定频 
```bash
root@localhost:~# cat /sys/class/devfreq/3600000.npu/cur_freq //查看当前npu频率
1008000000
root@localhost:~# echo userspace > /sys/class/devfreq/3600000.npu/governor // 手动定频模式：userspace
root@localhost:~# mount -t debugfs none /sys/kernel/debug 
root@localhost:~# echo 852000000 > /sys/kernel/debug/viplite/clk_freq // 设置频率为852000000
root@localhost:~# cat /sys/class/devfreq/3600000.npu/cur_freq  // 确认是否设置成功
852000000
root@localhost:~# cat /sys/kernel/debug/rknpu/load // 查看NPU的负载
NPU load:  Core0:  0%, Core1:  0%, Core2:  0%,
```

#### 性能模式

```bash
root@localhost:~# echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor
root@localhost:~# echo performance > /sys/class/devfreq/1800000.gpu/governor
root@localhost:~# echo performance > /sys/class/devfreq/a020000.dmcfreq/governor
root@localhost:~# echo performance > /sys/class/devfreq/3600000.npu/governor
```

## 产品证书

### CE / FCC / RoHS

## 供货声明

ArmSoM-Sige6 将至少生产到 2034 年 5 月。

## 配件

## 样品购买
ArmSoM 独立站:
 
ArmSoM 速卖通官方店: 

ArmSoM 淘宝官方店: 

OEM&ODM,  请联系: sales@armsom.org

## 专家视角


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

在未采取有效散热措施的情况下，主芯片的表面温度可能超过 60 度。在处理设备时，请避免直接接触 SoC 及其周围的电源电感，以免造成烫伤。使用设备时，请确保环境通风良好，以防止局部热量聚集导致过热。同时，请勿将单板机放置在阳光直射的区域。
:::