---
title: "ArmSoM CM1｜RK3506J 工业核心板文档"
image: /img/armsom-social-card.png
description: ArmSoM-CM1 是一款工业级产品，采用RK3506J 三核Cortex-A7应用处理器，工作温度可达 -40℃~85℃，专为工业网关、HMI、PLC、手持POS和家电显控应用而设计。
keywords: [armsom, armsom-CM1, RK3506J  Development Boards, RK3506J Core borad, rockchip]
sidebar_label: "CM1"
sidebar_position: 5
slug: /armsom-cm1
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# ArmSoM-CM1 与 CM1-IO 开发套件

<nav className="armsom-doc-shortcuts" aria-label="页面快捷导航"><a href="#硬件信息">硬件规格</a><a href="#开发资料">下载资料</a><a href="#使用手册">开始使用</a><a href="#接口使用">接口说明</a></nav>

## 产品简介 {#11-产品简介}

ArmSoM-CM1 是一款计算机模块，采用RK3506J 三核Cortex-A7 + 1核Cortex-M0。拥有丰富的外围接口，如 SAI、USB2 OTG、RMII、CAN等，该模组满足最小系统要求，板载 Type-C 供电与烧录接口，MIPI DSI屏幕接口，SD扩展卡槽。

ArmSoM-CM1 Kit 是由CM1 和 CM1-IO 组成，外设资源更加丰富，2路百兆以太网，2路usb2.0 Host、板载wifi、MIPI DSI 屏幕接口、耳机、麦克风，核心板上引出72路GPIO。

<figure className="armsom-doc-figure"><a href="/img/cm/armsom-cm1.jpg" target="_blank" rel="noopener noreferrer"><img src="/img/cm/armsom-cm1.jpg" alt="CM1 核心板与开发套件" loading="lazy" /></a><figcaption>CM1 核心板与开发套件 · 点击查看图片</figcaption></figure>

ArmSoM-CM1 Kit 开发套件提供​**​全栈式Linux系统开发文档**​​与​​**开源软件资源**​​，企业客户可直接采购核心板进行终端产品研发。ArmSoM开源硬件交付​​完整版系统源码​​（含内核定制化补丁、外设驱动及工具链），显著加速客户产品开发进程。

为最大化企业开发效率并缩短研发周期，我们为核心板用户系统化整合以下​​**全生命周期开发资源**​​：

​1. **​硬件设计资产​​**
- 核心板/底板参考原理图（含高速信号完整性设计指南）
- 机械结构3D模型（STEP格式）
- 关键元器件封装库
- 工业级连接器规格书与接口定义手册

​2. **​软件交付套件​​**
- 预验证出厂系统镜像（Buildroot构建）
- 交叉编译工具链
- 板级支持包（BSP）与设备树配置模板
- 外设驱动模块化开发框架

## 应用领域 {#12-应用领域}

RK3506J 应用领域广泛，涵盖了工业控制领域、智能家电显控、显示 HMI（人机交互）、工业信息与数据处理等多个方面。

## 硬件信息

### CM1 硬件接口

<figure className="armsom-doc-figure"><a href="/img/cm/armsom-cm1-front&back1.jpg" target="_blank" rel="noopener noreferrer"><img src="/img/cm/armsom-cm1-front&back1.jpg" alt="CM1 核心板接口分布" loading="lazy" /></a><figcaption>CM1 核心板接口分布 · 点击查看图片</figcaption></figure>

### CM1硬件规格

<table className="armsom-spec-table">
    <thead>
        <tr>
            <th>类别</th>
            <th>功能参数</th>
            <th>类别</th>
            <th>功能参数</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th scope="row">SOC</th>
            <td><li>RockChip RK3506j</li></td>
            <th scope="row">CPU</th>
            <td><li>RK3506 三核Cortex-A7 处理器 + 1核Cortex-M0</li></td>
        </tr>
        <tr>
            <th scope="row">GPU</th>
            <td><li>2D Graphic Engine</li><li>内嵌高性能2D 加速硬件</li></td>
            <th scope="row">内存</th>
            <td><li>256/512MB DDR3L</li></td>
        </tr>
        <tr >
            <th scope="row">存储</th>
            <td><li>256/512MB NAND</li><li>支持MicroSD卡扩展</li></td>
            <th scope="row">视频输出</th>
            <td><li>1 x MIPI DSI (2Lane 1.5Gbps)</li></td>
        </tr>
        <tr>
            <th scope="row">40-PIN & 44-PIN</th>
            <td><li>引出RK3506J芯片全部剩余功能</li></td>
            <th scope="row">按键</th>
            <td><li>1x Maskrom键，支持进入maskrom烧录模式</li></td>
        </tr>
        <tr>
            <th scope="row">电源</th>
            <td><li>Typec 5V</li></td>
            <th scope="row">系统</th>
            <td><li>Rockchip官方支持：buildroot</li></td>
        </tr>
        <tr>
            <th scope="row">尺寸</th>
            <td><li>70 mm x 42mm</li></td>
            <th scope="row">工作温度</th>
            <td><li>-40℃ ~ 85℃</li></td>
        </tr>
    </tbody>
</table>

### CM1-IO 硬件接口

CM1-IO 是 CM1 的配套载板，提供 USB、Wi-Fi、蓝牙、音频和双百兆以太网接口。CM1 与 CM1-IO 组合称为 CM1 Kit，下方使用手册以此开发套件为例。
![ArmSoM CM1-IO](/img/cm/armsom-cm1-io.jpg)

<div className="armsom-image-caption">ArmSoM CM1-IO</div>


### CM1-IO 硬件规格

<table className="armsom-spec-table">
    <thead>
        <tr>
            <th>类别</th>
            <th>功能参数</th>
            <th>类别</th>
            <th>功能参数</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th scope="row">40-PIN & 44-PIN Female Header</th>
            <td><li>扩展核心板剩余功能</li></td>
            <th scope="row">40-PIN</th>
            <td><li>和树莓派40pin兼容部分引脚功能，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></td>
        </tr>
        <tr>
            <th scope="row">USB接口</th>
            <td><li>1 × Type C（only power & Programming）</li>
            <li>2 × USB2.0 HOST</li></td>
            <th scope="row">网络</th>
            <td><li>2 × 百兆以太网</li><li>1 × WiFi5/BT4.2</li></td>
        </tr>
        <tr>
            <th scope="row">音频</th>
            <td><li>1 × Audio Jack</li></td>
            <th scope="row">12-PIN</th>
            <td><li>支持 RS485/CAN/MICIN/SPK</li></td>
        </tr>
        <tr>
            <th scope="row">电源</th>
            <td><li>Typec 5V</li><li>DC 12V</li></td>
            <th scope="row">系统</th>
            <td><li>Rockchip官方支持：buildroot</li></td>
        </tr>
        <tr>
            <th scope="row">尺寸</th>
            <td><li>100 mm x 70mm</li></td>
            <th scope="row">工作温度</th>
            <td><li>-40℃ ~ 85℃</li></td>
        </tr>
    </tbody>
</table>

### RK3506j 框图
<details>
    <summary>
      RK3506j 框图
    </summary>
        <img
  src="/img/forge/rk3506j.png"
  alt="rk3506j block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

<details>
    <summary>
     40-PIN header
    </summary>
       
<div className='gpio_style'>  

| GPIO Number |  Function  |   Pin    |  Pin     |  Function  | GPIO Number |  
 :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: |   
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |             |  
|     4     |   RM_IO4/SAI0_SDI0/GPIO0_A4_d| <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V    |           |             |
|     5     | RM_IO5/SAI0_SDI1/GPIO0_A5_d  |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |           |             |
|59|DSMC_SLV_RDYN/RM_IO31/UART5_RX_M1<br/>FLEXBUS0_D0/DSMC_CSN3/VO_LCDC_D0<br/>GPIO1_D3_d |  <div className='green'>7</div>  | <div className='green'>8</div>  |<div className='orange-txt'>UART0_TX</div>RM_IO22/JTAG_TCK_M1/GPIO0_C6_u   |     22      |
||GND|  <div className='black'>9</div>  | <div className='green'>10</div> |<div className='orange-txt'>UART0_RX</div>RM_IO23/JTAG_TMS_M1/GPIO0_C7_u  |     23  |
|58|DSMC_SLV_CSN0/RM_IO30/UART5_TX_M1<br/>FLEXBUS0_D1/DSMC_CSN2/VO_LCDC_D1<br/>GPIO1_D2_d| <div className='green'>11</div>  |<div className='green'>12</div>|GPIO1_D1_d/DSMC_SLV_D7<br/>RM_IO29UART5_RTSN_M1/DSM_AUD_LP_M0<br/>FLEXBUS0_D2/DSMC_DQS1/VO_LCDC_D2|57|
| 52 |DSMC_SLV_D2/FLEXBUS0_D7<br/>DSMC_D11/VO_LCDC_D7<br/>GPIO1_C4_d | <div className='green'>13</div>  | <div className='green'>14</div> |GPIO1_C5_d<br/>DSMC_SLV_D3/FLEXBUS0_D6<br/>DSMC_D12/VO_LCDC_D6|53|
|51  |DSMC_SLV_D1/RM_IO28/SAI2_SDO_M1<br/>FLEXBUS1_CSN_M5/FLEXBUS0_D8<br/>DSMC_D10/VO_LCDC_D8<br/>GPIO1_C3_d | <div className='green'>15</div>  | <div className='green'>16</div> |GPIO1_C2_d<br/>DSMC_SLV_D0/RM_IO27SAI2_SDI_M1<br/>FLEXBUS0_CSN_M5/DSM_AUD_RP_M0<br/>FLEXBUS0_D9/DSMC_D9/VO_LCDC_D9| 50 |
|  |  +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |GPIO1_C1_d/DSMC_SLV_DQS0/SAI2_MCLK_M1<br/>FLEXBUS1_CSN_M4/DSM_AUD_RN_M0<br/>FLEXBUS0_CLK/DSMC_D8/VO_LCDC_D10    |  49 |
| 48 |DSMC_SLV_CLK/FLEXBUS0_CSN_M4<br/>DSMC_INT1/FLEXBUS1_CLK<br/>DSMC_RESETN/VO_LCDC_D11<br/>GPIO1_C0_d| <div className='green'>19</div>  | <div className='green'>20</div> |SARADC_IN2/GPIO4_B2_z| 138  |
| 46 |FLEXBUS0_CSN_M3/FLEXBUS0_D11<br/>FLEXBUS1_D14/DSMC_CSN0<br/>VO_LCDC_D13/GPIO1_B6_d| <div className='green'>21</div>  | <div className='green'>22</div> |GPIO1_B7_d<br/>FLEXBUS1_CSN_M3/FLEXBUS0_D10<br/>FLEXBUS1_D15/DSMC_RDYN/VO_LCDC_D1 | 47  |
| 44 |FLEXBUS0_CSN_M2/FLEXBUS0_D13<br/>FLEXBUS1_D12/DSMC_D6<br/>VO_LCDC_D15GPIO1_B4_d| <div className='green'>23</div>  | <div className='green'>24</div> |GPIO1_B5_d<br/>FLEXBUS1_CSN_M2/FLEXBUS0_D12<br/>FLEXBUS1_D13/DSMC_D7/VO_LCDC_D14 | 45 |
| |  GND | <div className='black'>25</div>  | <div className='green'>26</div> |GPIO1_B3_d<br/>RM_IO26/SAI2_LRCK_M1FLEXBUS1_CSN_M1<br/>FLEXBUS0_D14/FLEXBUS1_D11<br/>DSMC_INT3/VO_LCDC_D16|     43      |
|  41 |RM_IO24/UART5_CTSN_M1<br/>FLEXBUS1_CSN_M0/FLEXBUS1_D9<br/>DSMC_CSN1/VO_LCDC_D184<br/>GPIO1_B1_d|  <div className='green'>27</div>  | <div className='green'>28</div> |GPIO1_B2_d<br/>RM_IO25/SAI2_SCLK_M1FLEXBUS0_CSN_M1<br/>FLEXBUS0_D15/FLEXBUS1_D10<br/>DSMC_INT2/VO_LCDC_D17| 42 |
|40  |FLEXBUS0_CSN_M0/FLEXBUS1_D8<br/>DSMC_D5/VO_LCDC_D19<br/>GPIO1_B0_d| <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |           |
|38 |FLEXBUS1_D6/DSMC_D3<br/>VO_LCDC_D21/GPIO1_A6_d| <div className='green'>31</div>  | <div className='green'>32</div> |GPIO1_A7_d/FLEXBUS1_D7<br/>DSMC_D4/VO_LCDC_D20|    39     |
| 37  |FLEXBUS1_D5/DSMC_D2VO_LCDC_D22<br/>GPIO1_A5_d| <div className='green'>33</div>  | <div className='black'>34</div> |    GND     |      |
| 35  |FLEXBUS1_D3/DSMC_D0/VO_LCDC_CLK<br/>GPIO1_A3_d| <div className='green'>35</div>  | <div className='green'>36</div> |GPIO1_A4_d/FLEXBUS1_D4<br/>DSMC_D1/VO_LCDC_D23   |    36      |
|33 |DSMC_SLV_INT/DSMC_INT0<br/>FLEXBUS1_D1/DSMC_CLKN<br/>VO_LCDC_VSYNC/GPIO1_A1_d | <div className='green'>37</div>  | <div className='green'>38</div> |GPIO1_A2_d/FLEXBUS1_D2<br/>DSMC_DQS0/VO_LCDC_HSYNC|     34     |
| |  GND | <div className='black'>39</div>  | <div className='green'>40</div> |GPIO1_A0_d/FLEXBUS1_D0<br/>DSMC_CLKP/VO_LCDC_DEN|     32     |

</div>  
</details>

<details>
    <summary>
    12-PIN Header
    </summary>

| Pin  | Assignment   | Description                  | Pin  | Assignment   | Description                  |
    :--------: | :---------: | :--------: |  :--------: |  :--------: |  :--------: | 
| 1    | RS485_A      | RS485 差分信号正极           | 2    | RS485_B      | RS485 差分信号负极           |
| 3    | CAN_L        | CAN 总线差分信号低电平        | 4    | CAN_H        | CAN 总线差分信号高电平        |
| 5    | GND          | 系统接地                     | 6    | VBAT_RTC    | RTC 实时时钟电池供电输入   |
| 7    | MICIN_P      | 麦克风输入正极（差分信号）    | 8    | MICIN_N      | 麦克风输入负极（差分信号）    |
| 9    | MICIN_P      | 麦克风输入正极（备用通道）    | 10   | MICIN_N      | 麦克风输入负极（备用通道）    |
| 11   | SPK_P        | 扬声器输出正极（差分驱动）    | 12  | SPK_N        | 扬声器输出负极（差分驱动）    |
</details>

### FLEXBUS
<details>
    <summary>
    FLEXBUS Correspondence
    </summary>

| J8002 pin | Assignment  |    GPIO number     | FlexBUS0 |
 :--------: | :---------: | :--------: |  :--------: | 
| 1~8  | DSMC_* / FLEXBUS1_D0~D7  | GPIO1_A0~A7 | 仅输入           |
| 9    | DSMC_D5 / FLEXBUS1_D8    | GPIO1_B0    | FLEXBUS0_CSN_M0 |
|11    | CAN1_TX / FLEXBUS1_D10   | GPIO1_B2    | FLEXBUS0_D15
|12~16 | CAN1_RX … DSMC_RDYN      | GPIO1_B3~B7 | FLEXBUS0_D14~D10 |
|18    | DSM_AUD_RN               | GPIO1_C1    | FLEXBUS0_CLK     |
|19    | DSM_AUD_RP               | GPIO1_C2    | FLEXBUS0_D9      |
|20~24 | MIPI_DSI_TE ~ RMII1_RSTn | GPIO1_C3~C7 | FLEXBUS0_D8~D4   |
|25    | USB20_OTG1_DRV_H         | GPIO1_D0    | FLEXBUS0_D3      |
|26    | UART4_RTSN               | GPIO1_D1    | FLEXBUS0_D2      |
|27    | UART4_RX                 | GPIO1_D2    | FLEXBUS0_D1      |
|28    | UART4_TX                 | GPIO1_D3    | FLEXBUS0_D0      |
</details>

我们始终相信，最好的产品源于与用户的深度对话。感谢我们开源社区中的一位实践者,敏锐地捕捉到了我们在 ArmSoM-CM1 文档中的提升空间，并主动为我们构建了 [ArmSoM CM1 — Claude Code plugin](https://github.com/savaughn/armsom) 扩展,方便用户更清晰地了解 ArmSoM-CM1 中FLEXBUS的映射关系。

## 开发资料

### SDK源码
<div class="cards">
    <a href="https://github.com/ArmSoM/rk3506-rkr4.2-sdk" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📚</i>
            </div>
            <div class="content">
                <h2>源码</h2>
                <p>适用于 ARM 开发板的 Linux</p>
            </div>
        </div>
    </a>
</div>

### 官方镜像

ArmSoM团队以 buildroot 为基础作为CM1官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

以下系统已由ArmSoM官方测试验证：

网盘地址：

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

| 标识 | 系统镜像 | 下载入口 |
|:--------: | :---------: | :--------:  | 
|buildroot | **buildroot for CM1 :** <br/> Linux Kernel 6.1, 支持RT-Thread 4.1, <br/>支持裸机程, 序支持多核异构AMP,<br/> Preempt-RT/Xenomai实时补丁, <br/>轻量级UI框架 LVGL。 |[百度网盘总目录](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F)  |


### 硬件资料

获取 CM1 原理图、DXF等硬件资料

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

<div class="cards">
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>CM1 SCH</h2>
            </div>
        </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM1 2D</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms#list/path=%2F" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>CM1 位号图</h2>
        </div>
    </div>
</a>
</div>

## 使用手册

在开始使用 CM1-IO 之前，请准备好以下物品。

:::tip
下文用 CM1 Kit 表示 CM1 + CM1-IO
:::

### 工具准备
* 电源
* 系统安装（二选一）
  * 板载 NAND 启动
    * USB Type-C数据线，从 typec 端口在CM1 kit上写入镜像，您需要Type-C数据线连接 CM1 kit和 PC。
  * MicroSD卡/TF卡启动
    * MicroSD卡/TF卡，Class 10或以上至少8GB SDHC 和 读卡器
    * 以下是经过ArmSoM团队测试验证的高速TF卡
      * SanDisk 32GB TF（MicroSD）（开发者推荐）
      * SanDisk 32GB TF（MicroSD） 行车记录仪&安防监控专用存储卡（长期运行推荐）
      * 闪迪 TF 8G Class10 microSD
      * 闪迪 TF 128G Class10 microSD XC TF 128G 48MB/S：


**可选选项**
* USB 转串口
* Ethernet 线（网线）
* LCD显示屏
* 音频线, 0.8mm立式插座。
    3.5mm 耳机

### 电源

* 支持 DC 12V适配器，2.5mm

### 烧录方式选择
<div class="cards">
    <a href="./getting-start/flash-img" class="card-link">
        <div class="card">
            <div class="icon">
                <i>🎇</i>
            </div>
            <div class="content">
                <h2>系统镜像烧录</h2>
            </div>
        </div>
    </a>
</div>


## 接口使用

如果您是首次使用 CM1 Kit，请先熟悉下各产品[硬件接口](#cm1-io-硬件接口)，以便于您更好的理解后续的内容。

### 调试口

如下所示连接 USB 转 TTL 串口线：

<img src="/img/cm/armsom-cm1-debug.png" alt="CM1-IO USB to TTL serial connection" width="400" style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />

如下所示连接 USB 转 TTL 串口线：

| CM1-IO       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | ---> | GND |
| **TX** (pin 8)  | ---> | RX |
| **RX** (pin 10) | ---> | TX |

PC端也可以连接Type-C接口进行adb调试

### 以太网口

1. 首先将网线的一端插入 CM1 Kit 的以太网接口，网线的另一端接入路由器，并确保
网络是畅通的
2. 系统启动后会通过 DHCP 自动给以太网卡分配 IP 地址，不需要其他任何配置
3. 在CM1 Kit的 Linux 系统中查看 IP 地址的命令如下所示

```bash
root@armsom:/# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: can0: <NOARP,ECHO> mtu 16 qdisc noop state DOWN group default qlen 10
    link/can
3: eth0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 16:b1:42:f4:f6:69 brd ff:ff:ff:ff:ff:ff
4: eth1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether 32:81:2f:73:98:c8 brd ff:ff:ff:ff:ff:ff
5: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
    link/ether cc:64:1a:61:e9:b5 brd ff:ff:ff:ff:ff:ff
```

CM1 Kit 启动后查看 IP 地址有三种方法：

- 接[调试串口](#调试口)终端输入 ip a 命令来查看 IP 地址
- window下PC端接Type-C，终端输入adb shell连接板端，ip a 命令来查看 IP 地址
- 通过路由器的管理界面来查看 CM1 Kit 网口的 IP 地址。不过这种方法经常有人会无法正常看到CM1 Kit 的 IP 地址。如果看不到，调试方法如下所示：
    - 首先检查 Linux 系统是否已经正常启动，如果CM1 Kit的绿灯常亮，一般是正常启动了。
    - 检查网线有没有插紧，或者换根网线试下。
    - 换个路由器试下，路由器的问题有遇到过很多，比如路由器无法正常分配IP 地址，或者已正常分配 IP 地址但在路由器中看不到。
    - 如果没有路由器可换，可通过调试串口或 Type-C ADB 查看 IP 地址。

:::tip
另外需要注意的是CM1 Kit  DHCP 自动分配 IP 地址是不需要任何设置的。
:::

4. 使用工具 ping 判断是否连通网络。

测试网络连通性的命令如下，ping 命令可以通过 Ctrl+C 快捷键来中断运行
```bash
root@armsom:~$ ping www.baidu.com
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

### WIFI

#### WIFI Station

WiFi 的 Station 模式是一种工作模式，它使 WiFi 设备能够连接到一个 WiFi 网络并与其他设备进行通信。

<details className="armsom-terminal-details">
<summary>查看完整命令与终端输出</summary>

```bash
root@armsom:/# ifconfig wlan0 up #打开 wlan0
root@armsom:/# ifconfig -a
root@rk3506-buildroot:/# ifconfig -a
can0      Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00
          NOARP  MTU:16  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:10
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:45

eth0      Link encap:Ethernet  HWaddr 9E:3C:0C:CC:4D:1D
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:54 Base address:0x2000

eth1      Link encap:Ethernet  HWaddr A2:3C:0C:CC:4D:1D
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
          Interrupt:56 Base address:0x2000

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:578 errors:0 dropped:0 overruns:0 frame:0
          TX packets:578 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:28940 (28.2 KiB)  TX bytes:28940 (28.2 KiB)

wlan0     Link encap:Ethernet  HWaddr CC:64:1A:61:E8:19
          BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
root@armsom:/# connmanctl #进入 WIFI 操作终端
connmanctl> enable wifi #使能 WIFI，默认已经使能
connmanctl> agent on #开启代理
connmanctl> scan wifi #开启 WIFI 扫描，可以多次扫描
connmanctl> services #列出扫描到的 WIFI 列表
connmanctl> services
    TP-Link_210A         wifi_cc641a61e819_54502d4c696e6b5f32313041_managed_psk
    lulu                 wifi_cc641a61e819_6c756c75_managed_psk
    Triductor_5GAp       wifi_cc641a61e819_547269647563746f725f35474170_managed_none
    OrayBox-2.4G-FD5C    wifi_cc641a61e819_4f726179426f782d322e34472d46443543_managed_none
    R4R-2G               wifi_cc641a61e819_5234522d3247_managed_psk
                         wifi_cc641a61e819_hidden_managed_psk
    R3mini_Router2G      wifi_cc641a61e819_52336d696e695f526f757465723247_managed_psk
    R4R-5G               wifi_cc641a61e819_5234522d3547_managed_psk
    lulu_5G              wifi_cc641a61e819_6c756c755f3547_managed_psk
    OrayBox-5G-FD5C      wifi_cc641a61e819_4f726179426f782d35472d46443543_managed_none
    ydtx                 wifi_cc641a61e819_79647478_managed_psk
    Tri_Mesh_FH_         wifi_cc641a61e819_5472695f4d6573685f46485f_managed_psk
    Triductor_2GAp       wifi_cc641a61e819_547269647563746f725f32474170_managed_none
    R3mini_Router5G      wifi_cc641a61e819_52336d696e695f526f757465723547_managed_psk
    DIRECT-a4-HP M227f LaserJet wifi_cc641a61e819_4449524543542d61342d4850204d32323766204c617365724a6574_managed_psk
    CFG_2G               wifi_cc641a61e819_4346475f3247_managed_psk
                         wifi_cc641a61e819_hidden_managed_none
    Kingstar-Lo          wifi_cc641a61e819_4b696e67737461722d4c6f_managed_psk
    jachunfree_5         wifi_cc641a61e819_6a616368756e667265655f35_managed_psk
    ChinaNet-mbCu-5G     wifi_cc641a61e819_4368696e614e65742d6d6243752d3547_managed_psk
    HH-V-1               wifi_cc641a61e819_48482d562d31_managed_psk
    ChinaNet-2MNZ        wifi_cc641a61e819_4368696e614e65742d324d4e5a_managed_psk
    ChinaNet-AtTi        wifi_cc641a61e819_4368696e614e65742d41745469_managed_psk
    ChinaNet-mbCu        wifi_cc641a61e819_4368696e614e65742d6d624375_managed_psk
    recynova             wifi_cc641a61e819_726563796e6f7661_managed_psk
    DIRECT-sk-HUAWEI PixLab X1 wifi_cc641a61e819_4449524543542d736b2d485541574549205069784c6162205831_managed_psk
    ChinaNet-AtTi-5G     wifi_cc641a61e819_4368696e614e65742d417454692d3547_managed_psk
    recynova-5G          wifi_cc641a61e819_726563796e6f76612d3547_managed_psk
    Eureka-office        wifi_cc641a61e819_457572656b612d6f6666696365_managed_psk
    BTWIFI6-042426       wifi_cc641a61e819_425457494649362d303432343236_managed_psk
    Eureka-guest         wifi_cc641a61e819_457572656b612d6775657374_managed_psk
    ACCO-TEST            wifi_cc641a61e819_4143434f2d54455354_managed_psk
    Kingstar-Lo-5G       wifi_cc641a61e819_4b696e67737461722d4c6f2d3547_managed_psk
    jachun_link5g        wifi_cc641a61e819_6a616368756e5f6c696e6b3567_managed_psk
    ChinaNet-Ns24        wifi_cc641a61e819_4368696e614e65742d4e733234_managed_psk
    CMCC-YM6M            wifi_cc641a61e819_434d43432d594d364d_managed_none
```

</details>
从扫描到 WIFI 列表中，使用 connect XXXX 进行连接

```bash
connmanctl> connect wifi_cc641a61e819_79647478_managed_psk
connmanctl> exit #退出终端
```
连接成功后，可以使用 ifconfig 指令来查看 wlan0 所获取的 IP 地址。

```bash
root@armsom:/# ping www.baidu.com
```


### BT

**1. 查看蓝牙**

```bash
root@armsom:/# hciconfig -a
hci0:   Type: Primary  Bus: USB
        BD Address: CC:64:1A:61:E9:B6  ACL MTU: 1021:6  SCO MTU: 255:12
        UP RUNNING
        RX bytes:824 acl:0 sco:0 events:63 errors:0
        TX bytes:2289 acl:0 sco:0 commands:63 errors:0
        Features: 0xff 0xff 0xff 0xfa 0xdb 0xbf 0x7b 0x87
        Packet type: DM1 DM3 DM5 DH1 DH3 DH5 HV1 HV2 HV3
        Link policy: RSWITCH HOLD SNIFF PARK
        Link mode: PERIPHERAL ACCEPT
        Name: 'BlueZ 5.77'
        Class: 0x000414
        Service Classes: Unspecified
        Device Class: Audio/Video, Loudspeaker
        HCI Version: 5.2 (0xb)  Revision: 0xddc8
        LMP Version: 5.2 (0xb)  Subversion: 0x1141
        Manufacturer: Realtek Semiconductor Corporation (93)
```
**进入bluetoothctl**
```bash
root@armsom:/# bluetoothctl
```
**输入以下命令即可连接**
```bash
root@armsom:/# power on
root@armsom:/# agent on
root@armsom:/# default-agent
root@armsom:/# scan on
root@armsom:/# pair yourDeviceMAC
```

### USB

**连接 USB 存储设备测试**
1. 首先将 U 盘或者 USB 移动硬盘插入 CM1 Kit的 USB 接口中
2. 执行下面的命令如果能看到 sdX 的输出说明 U 盘识别成功
```
root@armsom:/# cat /proc/partitions | grep "sd*"
major minor  #blocks  name
   8        0  122880000 sda
```
3. 使用 mount 命令可以将 U 盘挂载到/mnt 中，然后就能查看 U 盘中的文件了

```
root@armsom:/# sudo mount /dev/sda1 /mnt
```

4. 挂载完后通过 df -h 命令就能查看 U 盘的容量使用情况和挂载点

```
root@armsom:/mnt# df -h | grep "sd"
/dev/sda        4.7G  4.7G     0  100% /mnt
```

### 音频

<figure className="armsom-doc-figure"><a href="/img/cm/armsom-cm1-sound.png" target="_blank" rel="noopener noreferrer"><img src="/img/cm/armsom-cm1-sound.png" alt="CM1-IO 音频接线示意" loading="lazy" /></a><figcaption>CM1-IO 音频接线示意 · 点击查看图片</figcaption></figure>
查看系统中的声卡。

```bash
root@armsom:/# aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiprk730 [rockchip-rk730], device 0: dailink-multicodecs HiFi-0 [dailink-multicodecs HiFi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

录音
```bash
arecord -D hw:0,0 -f S16_LE -t wav -c2 -r 16000 -d 5 /userdata/t.wav
```

## 供货声明

ArmSoM-CM1 将至少生产到 2035 年 7 月。

## 配件

我们为 ArmSoM-CM1 Kit 设计的官方配件旨在帮助您从计算机获得最佳性能。

<div class="cards">
<a href="./armsom-display-7-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="/img/accessories/armsom-display-7hd.png" alt="ArmSoM Display 7 HD"/>
    </div>
    <div class="card-content">
        <h2>Display-7-hd</h2>
        <p>7 英寸触摸屏显示器，可用于娱乐系统和信息仪表板等交互式项目。</p>
    </div>
</div>
</a>
</div>

## 样品购买

ArmSoM 独立站: [https://www.armsom.org/product-page/cm1](https://www.armsom.org/product-page/cm1)


ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?ft=t&id=965592864051](https://item.taobao.com/item.htm?ft=t&id=965592864051)

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
