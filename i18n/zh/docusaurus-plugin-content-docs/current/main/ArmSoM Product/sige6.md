---
description: ArmSoM-Sige6 采用了全志 A733 八核处理器，集成八核高性能 CPU，双核 Arm Cortex-A76 + 六核 Arm Cortex-A55 大小核架构，12nm 制程，最高主频 2.0GHz；并集成 3 TOPS NPU 及 Imagination BXM-4-64 MC1 GPU，可提供强大的 AI 和多媒体处理能力。
keywords: [armsom, armsom-sige6, maker kit, allwinner, A733产品介绍]
sidebar_label: "Sige6"
sidebar_position: 2
slug: /armsom-sige6
image: /img/sige/sige7-bananer.png
---

# Sige6 产品简介

让我们在 5 分钟内了解 Sige6。

## 简介

ArmSoM-Sige6 采用了全志 A733 八核处理器，集成八核高性能 CPU，双核 Arm Cortex-A76 + 六核 Arm Cortex-A55 大小核架构，12nm 制程，最高主频 2.0GHz；并集成 3 TOPS NPU 及 Imagination BXM-4-64 MC1 GPU，可提供强大的 AI 和多媒体处理能力。可适用于ARM PC、边缘计算、云服务器、人工智能、云计算、虚拟/增强现实、区块链、智能NVR等领域

![ArmSoM-sige6](/img/sige/sige7-bananer.png)

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

## sige6 使用手册

<a href="./armsom-forge6#使用手册" class="card-link">
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

![ArmSoM-Sige6 front & back](/img/sige/armsom-sige7-layout.jpg)

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

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 


### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 


### 硬件资料

获取 Sige6 原理图、DXF等硬件资料

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