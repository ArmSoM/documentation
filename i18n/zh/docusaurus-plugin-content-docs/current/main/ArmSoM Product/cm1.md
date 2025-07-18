---
description: ArmSoM-forge1 是一款工业级产品，采用RK3506J 三核Cortex-A7应用处理器，工作温度可达 -40℃~85℃，专为工业网关、HMI、PLC、手持POS和家电显控应用而设计。
keywords: [armsom, armsom-CM1, RK3506J  Development Boards, RK3506J Core borad, rockchip]
sidebar_label: "CM1"
sidebar_position: 5
slug: /armsom-cm1
---

#  ArmSoM-CM1 产品规格书

## 1.1 产品简介

ArmSoM-CM1 是一款计算机模块，采用RK3506J 三核Cortex-A7 + 1核Cortex-M0。拥有丰富的外围接口，如 SAI、USB2 OTG、RMII、CAN等，该模组满足最小系统要求，板载typec供电&sh烧录口，MIPI DSI屏幕接口，SD扩展卡槽。

ArmSoM-CM1 Kit 是由CM1 和 CM1-IO 组成，外设资源更加丰富，2路百兆以太网，2路usb2.0 Host、板载wifi、MIPI DSI 屏幕接口、耳机、麦克风，核心板上引出72路GPIO。

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

## 1.2 应用领域

RK3506J 应用领域广泛，涵盖了工业控制领域、智能家电显控、显示 HMI（人机交互）、工业信息与数据处理等多个方面。

## CM1 使用手册

<a href="./armsom-cm1#使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>CM1使用手册</h2>
            <p>如何开始使用你的CM1</p>
        </div>
    </div>
</a>

## 硬件信息

### CM1 硬件接口

![ArmSoM-CM1-front & back](/img/cm/armsom-cm1-front&back1.jpg)

### CM1硬件规格

<table>
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
            <th>SOC</th>
            <th><li>RockChip RK3506j</li></th>
            <th>CPU</th>
            <th><li>RK3506 三核Cortex-A7 处理器</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>2D Graphic Engine</li><li>内嵌高性能2D 加速硬件</li></th>
            <th>内存</th>
            <th><li>256/512MB DDR3L</li></th>
        </tr>
        <tr >
            <th>存储</th>
            <th><li>256/512MB NAND</li><li>支持MicroSD卡扩展</li></th>
            <th>视频输出</th>
            <th><li>1 x MIPI DSI (2Lane 1.5Gbps)</li></th>
        </tr>
        <tr>
            <th>40-PIN & 44-PIN</th>
            <th><li>引出RK3506J芯片全部剩余功能</li></th>
            <th>按键</th>
            <th><li>1x Maskrom键，支持进入maskrom烧录模式</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>Typec 5V</li></th>
            <th>系统</th>
            <th><li>Rockchip官方支持：buildroot</li></th>
        </tr>
        <tr>
            <th>尺寸</th>
            <th><li>70 mm x 42mm</li></th>
            <th>工作温度</th>
            <th><li>-40℃ ~ 85℃</li></th>
        </tr>
    </tbody>
</table>

### CM1-IO 硬件接口
![ArmSoM-CM1-io](/img/cm/armsom-cm1-io.jpg)

### CM1-IO 硬件规格

<table>
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
            <th>40-PIN & 44-PIN Female Header</th>
            <th><li>扩展核心板剩余功能</li></th>
            <th>40-PIN</th>
            <th><li>和树莓派40pin兼容部分引脚功能，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>1 × Type C（only power & Programming）</li>
            <li>2 × USB2.0 HOST</li></th>
            <th>网络</th>
            <th><li>2 × 百兆以太网</li><li>1 × WiFi5/BT4.2</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1 × Audio Jack</li></th>
            <th>14-PIN</th>
            <th><li>支持 RS485/CAN/MICIN/SPK</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>Typec 5V</li><li>DC 12V</li></th>
            <th>系统</th>
            <th><li>Rockchip官方支持：buildroot</li></th>
        </tr>
        <tr>
            <th>尺寸</th>
            <th><li>100 mm x 70mm</li></th>
            <th>工作温度</th>
            <th><li>-40℃ ~ 85℃</li></th>
        </tr>
    </tbody>
</table>

### RK3506j 框图
<details>
    <summary>
      RK3506j 框图
    </summary>
        <img
  src="./img/forge/rk3506j.png"
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

ArmSoM团队以 buildroot 为基础作为Forge1官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

以下系统已由ArmSoM官方测试验证：

网盘地址：

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|buildroot | buildroot for Forge1 :  <br/> Linux Kernel 6.1, 支持RT-Thread 4.1, <br/>支持裸机程, 序支持多核异构AMP,<br/> Preempt-RT/Xenomai实时补丁, <br/>轻量级UI框架 LVGL。|[百度网盘](https://pan.baidu.com/s/1YRHG5Ki8d6ECrQiyWbzIvw?pwd=arms)  |


### 硬件资料

获取 CM1 原理图、DXF等硬件资料

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

<div class="cards">
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>CM1 SCH</h2>
            </div>
        </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM1 2D</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="card-link">
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

## 产品证书

### CE / FCC / RoHS

## 供货声明

ArmSoM-CM1 将至少生产到 2035 年 7 月。

## 配件

我们为 ArmSoM-CM1 Kit 设计的官方配件旨在帮助您从计算机获得最佳性能。

<div class="cards">
<a href="./armsom-display-7-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-display-7hd.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Display-7-hd</h2>
        <p>7 英寸触摸屏显示器，可用于娱乐系统和信息仪表板等交互式项目。</p>
    </div>
</div>
</a>
</div>

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

在未采取有效散热措施的情况下，主芯片的表面温度可能超过 60 度。在处理设备时，请避免直接接触 SoC 及其周围的电源电感，以免造成烫伤。使用设备时，请确保环境通风良好，以防止局部热量聚集导致过热。同时，请勿将单板机放置在阳光直射的区域。建议根据具体使用情况，选择官方 [散热器风扇](./sige-active-cooling-kit)或[散热外壳](./sige-diy-case1)，或者第三方散热套件，以确保设备的良好散热性能。

:::