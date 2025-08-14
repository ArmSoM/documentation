---
description: ArmSoM-forge1 is an industrial-grade product featuring the RK3506J tri-core Cortex-A7 application processor. It operates within a temperature range of -40°C to 85°C and is specifically designed for industrial gateways, HMIs, PLCs, handheld POS systems, and home appliance display control applications.
keywords: [armsom, armsom-CM1, RK3506J Development Boards, RK3506J Core board, rockchip]
sidebar_label: "CM1"
sidebar_position: 5
slug: /armsom-cm1
---

# ArmSoM-CM1 Product Specification

## 1.1 Product Introduction

ArmSoM-CM1 is a computer-on-module (COM) based on the Rockchip RK3506J (tri-core Cortex-A7 + single-core Cortex-M0). It features a rich set of peripheral interfaces such as SAI, USB2 OTG, RMII, and CAN. This module meets minimum system requirements and includes an onboard Type-C power & programming port, MIPI DSI display interface, and an SD card expansion slot.

The ArmSoM-CM1 Kit consists of the CM1 module paired with the CM1-IO carrier board, offering even richer peripheral resources: dual 10/100 Ethernet ports, dual USB2.0 Host ports, onboard WiFi, MIPI DSI display interface, headphone jack, microphone input, and 72 GPIOs routed from the core module.

The ArmSoM-CM1 Kit development suite provides **full-stack Linux system development documentation** and **open-source software resources**. Enterprise customers can directly purchase the core module for end-product development. ArmSoM delivers **complete system source code** (including kernel customization patches, peripheral drivers, and toolchains) as open-source hardware, significantly accelerating customer product development cycles.

To maximize enterprise development efficiency and shorten R&D cycles, we systematically integrate the following **full lifecycle development resources** for core module users:

​1. **Hardware Design Assets**
- Core Module / Carrier Board Reference Schematics (including high-speed signal integrity design guidelines)
- Mechanical Structure 3D Models (STEP format)
- Key Component Footprint Libraries
- Industrial Connector Specifications and Interface Definition Manuals

​2. **Software Delivery Suite**
- Pre-validated Factory System Images (Built with Buildroot)
- Cross-compilation Toolchain
- Board Support Package (BSP) & Device Tree Configuration Templates
- Modular Peripheral Driver Development Framework

## 1.2 Application Areas

The RK3506J finds wide application across various fields, including industrial control, smart appliance display control, HMI (Human-Machine Interface), and industrial information & data processing.

## CM1 Getting started

<a href="./armsom-cm1-io#getting-started" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>CM1 User Manual</h2>
            <p>How to start using your CM1 Module</p>
        </div>
    </div>
</a>

## Hardware Information

### CM1 Hardware Interfaces

![ArmSoM-CM1-front & back](/img/cm/armsom-cm1-front&back1.jpg)

### CM1 Hardware Specifications

<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Specification</th>
            <th>Category</th>
            <th>Specification</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3506j</li></th>
            <th>CPU</th>
            <th><li>RK3506 Tri-core Cortex-A7 Processor</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>2D Graphic Engine</li><li>Integrated High-Performance 2D Acceleration Hardware</li></th>
            <th>Memory</th>
            <th><li>256/512MB DDR3L</li></th>
        </tr>
        <tr >
            <th>Storage</th>
            <th><li>256/512MB NAND Flash</li><li>Supports MicroSD Card Expansion</li></th>
            <th>Video Output</th>
            <th><li>1 x MIPI DSI (2Lane, 1.5Gbps)</li></th>
        </tr>
        <tr>
            <th>40-PIN & 44-PIN</th>
            <th><li>Exposes all remaining functions of the RK3506J chip</li></th>
            <th>Buttons</th>
            <th><li>1x Maskrom Key (for entering maskrom programming mode)</li></th>
        </tr>
        <tr>
            <th>Power Supply</th>
            <th><li>Type-C 5V</li></th>
            <th>OS Support</th>
            <th><li>Officially supported by Rockchip: Buildroot</li></th>
        </tr>
        <tr>
            <th>Dimensions</th>
            <th><li>70 mm x 42mm</li></th>
            <th>Operating Temperature</th>
            <th><li>-40°C ~ 85°C</li></th>
        </tr>
    </tbody>
</table>

### CM1-IO Hardware Interface
![ArmSoM-CM1-io](/img/cm/armsom-cm1-io.jpg)

### CM1-IO Hardware Specifications

<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Specification</th>
            <th>Category</th>
            <th>Specification</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>40-PIN & 44-PIN Female Header</th>
            <th><li>Expands remaining core module functions</li></th>
            <th>40-PIN Header</th>
            <th><li>Partially pin-compatible with Raspberry Pi 40pin for connecting rich accessory peripherals</li><li>Supports UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>USB Interfaces</th>
            <th><li>1 × Type C (Power & Programming Only)</li>
            <li>2 × USB2.0 HOST</li></th>
            <th>Networking</th>
            <th><li>2 × 10/100 Ethernet Ports</li><li>1 × WiFi5/BT4.2</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th><li>1 × Audio Jack (Headphone/Mic)</li></th>
            <th>14-PIN Header</th>
            <th><li>Supports RS485/CAN/MICIN/SPK</li></th>
        </tr>
        <tr>
            <th>Power Supply</th>
            <th><li>Type-C 5V</li><li>DC 12V Jack</li></th>
            <th>OS Support</th>
            <th><li>Officially supported by Rockchip: Buildroot</li></th>
        </tr>
        <tr>
            <th>Dimensions</th>
            <th><li>100 mm x 70mm</li></th>
            <th>Operating Temperature</th>
            <th><li>-40°C ~ 85°C</li></th>
        </tr>
    </tbody>
</table>

### RK3506j Block Diagram
<details>
    <summary>
      RK3506j Block Diagram
    </summary>
        <img
  src="./img/forge/rk3506j.png"
  alt="rk3506j block diagram"
  className="session-details-live-video"/>
</details>

### Pin Definitions

<details>
    <summary>
     40-PIN Header
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
| 1    | RS485_A      | RS485 Differential Signal (+) | 2    | RS485_B      | RS485 Differential Signal (-) |
| 3    | CAN_L        | CAN Bus Differential Signal (Low) | 4    | CAN_H        | CAN Bus Differential Signal (High) |
| 5    | GND          | System Ground              | 6    | VBAT_RTC    | RTC Real-time Clock Battery Input |
| 7    | MICIN_P      | Microphone Input (+) (Differential) | 8    | MICIN_N      | Microphone Input (-) (Differential) |
| 9    | MICIN_P      | Microphone Input (+) (Alternate Channel) | 10   | MICIN_N      | Microphone Input (-) (Alternate Channel) |
| 11   | SPK_P        | Speaker Output (+) (Differential) | 12  | SPK_N        | Speaker Output (-) (Differential) |
</details>

## Development Resources

### SDK Source Code
<div class="cards">
    <a href="https://github.com/ArmSoM/rk3506-rkr4.2-sdk" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📚</i>
            </div>
            <div class="content">
                <h2>Source Code</h2>
                <p>Linux for ARM Development Boards</p>
            </div>
        </div>
    </a>
</div>

### Official Images

The ArmSoM team uses Buildroot as the foundation for the official Forge1 operating system. [How to flash the system image?](https://docs.armsom.org/en/getting-start/flash-img)📤

The following systems have been tested and validated by ArmSoM:

Cloud Drive Address:

<a href="/getting-start/cloud-disk" class="btn">
  <span>Google Drive link</span>
</a>

| logo | Description | Download|
|:--------: | :---------: | :--------: |
|buildroot | buildroot for Forge1: <br/> Linux Kernel 6.1, support RT-Thread 4.1, <br/> support bare metal programs, support multi-core heterogeneous AMP, <br/> Preempt-RT/Xenomai real-time patches, <br/> lightweight UI framework LVGL. |[Google Drive link](https://drive.google.com/drive/folders/1UJJPNZB4ghGXN7CzI96kZUMQpf6MEM7Y) |

### Hardware Resources

Get CM1 Schematics, DXF files, and other hardware resources.

<a href="https://drive.google.com/drive/folders/1DQ3_8hukDf-x2BGWeO49bJmyDZq1hT25" class="btn">
  <span>Google Drive link</span>
</a>
<br/>

<div class="cards">
<a href="https://drive.google.com/drive/folders/1DQ3_8hukDf-x2BGWeO49bJmyDZq1hT25" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>CM1 SCH</h2>
            </div>
        </div>
</a>
<a href="https://drive.google.com/drive/folders/1DQ3_8hukDf-x2BGWeO49bJmyDZq1hT25" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM1 2D Drawing</h2>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/1DQ3_8hukDf-x2BGWeO49bJmyDZq1hT25" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>CM1 Reference Designator Map</h2>
        </div>
    </div>
</a>
</div>

## User Manual

## Product Certifications

### CE / FCC / RoHS

## Product Longevity Statement

ArmSoM-CM1 will be produced until at least July 2035.

## Accessories

Our official accessories designed for the ArmSoM-CM1 Kit aim to help you achieve the best performance from your computer.

<div class="cards">
<a href="./armsom-display-7-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-display-7hd.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Display-7-hd</h2>
        <p>A 7-inch touchscreen display suitable for interactive projects like entertainment systems and information dashboards.</p>
    </div>
</div>
</a>
</div>

## Purchase Samples

ArmSoM Independent Site:

ArmSoM AliExpress Official Store:

ArmSoM Taobao Official Store: [https://item.taobao.com/item.htm?ft=t&id=965592864051](https://item.taobao.com/item.htm?ft=t&id=965592864051)

For OEM&ODM, please contact: sales@armsom.org

## Expert Perspective


## Important Notes

:::caution [Electrostatic Discharge (ESD) Protection]
1. Always wear an anti-static wrist strap or take ESD precautions before handling the device to prevent damage.
2. Assembly should be performed in an ESD-controlled environment. Avoid operation under dry and low-humidity conditions.
3. When not in use, store the device in an anti-static bag in a temperature-controlled, low-humidity environment.
4. Avoid friction or collision when handling the device to prevent generating static electricity.
5. Handle the device by its edges, avoiding direct contact with chips on the motherboard.
6. Do not plug or unplug cables or other devices while the system is powered on to avoid damage from current surges.
7. Before plugging/unplugging expansion GPIO/MIPI interfaces, power down the device and disconnect the power cable.
:::

:::danger [Thermal Management]

Without effective cooling measures, the surface temperature of the main SoC can exceed 60°C. Avoid direct contact with the SoC and surrounding power inductors to prevent burns. Ensure adequate ventilation around the device during operation. Do not place the SBC in direct sunlight. It is recommended to use the official [Cooling Fan & Heatsink Kit](./sige-active-cooling-kit) or [DIY Case](./sige-diy-case1), or suitable third-party cooling solutions to ensure optimal thermal performance.

:::