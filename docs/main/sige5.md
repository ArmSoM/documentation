---
description: ArmSoM-Sige5 uses Rockchip RK3576 second-generation 8nm high-performance AIOT platform, 6 TOPS computing power NPU, and can be equipped with up to 16GB of large memory. Supports 8K video encoding and decoding, has rich interfaces, supports dual Gigabit network ports, WIFI6/BT5.
keywords: [armsom-sige5, RK3576 Development Boards, rk3576 SBC]
sidebar_label: "Sige5"
sidebar_position: 2
slug: /armsom-sige5
---

# Product Introduction:Sige5

Let's get to know Sige5 in 5 minutes.

<!-- ## Overview

ArmSoM-Sige5 adopts the second-generation 8nm high-performance AIOT platform Rockchip RK3576, with a 6 TOPS computing power NPU and support for up to 16GB of large memory. It supports 4K video encoding and decoding, offers rich interfaces including dual gigabit Ethernet ports, WiFi 6 & BT5, and various video outputs. Compatible with multiple operating systems, it is suitable for ARM-based PCs, edge computing devices, personal mobile internet devices, and other digital multimedia applications.

![ArmSoM-sige5](/img/sige/sige5.jpg)

### Key Parameter

- SoC: Rockchip RK3576
- CPU: Integrated with four Cortex-A72 cores @ 2.2GHz and four Cortex-A53 cores @ 1.8GHz, along with a separate NEON co-processor.
- GPU: ARM Mali G52 MC3 GPU
- NPU: Up to 6 TOPs computing power (INT8), supports INT4/INT8/INT16 mixed operations.
- VPU/Encoding & Decoding:
  - Hardware Decoding: Supports H.264, H.265, VP9, AV1, and AVS2 up to 8K@30fps or 4K@120fps.
  - Hardware Encoding: Supports H.264 and H.265 up to 4K@60fps, high-quality JPEG encoder/decoder supports up to 4K@60fps.
- RAM: 8/16GB 32-bit LPDDR4x, default is 8GB. RK3576 supports a maximum of 16GB.
- Flash: 32/64/128GB eMMC, default is 64GB eMMC.
- Operating Voltage: Wide input voltage range, from 4.5V to 23V (voltage error ±5%).
- Operating Temperature: 0°C to 80°C
- Operating Systems:
  - Official Rockchip Support: Android 14, Debian 12, Buildroot
  - Third-party Support: Armbian
- PCB: 8-layer PCB board design
- Weight: 43g
- Dimensions: 92mm × 62mm x 14.6mm

## Getting started

<a href="./sige-family-started" class="card-link">
    <div class="card">
        <div class="icon">
            <i>✈️</i>
        </div>
        <div class="content">
            <h2>Sige User Manual</h2>
            <p>How to start using your Sige</p>
        </div>
    </div>
</a>

## Hardware

### Hardware Interface

![ArmSoM-Sige5 front & back](/img/sige/sige5-layout.jpg)
![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)


:::tip
There are two identical Type-C ports on Sige5,but only the Type-C (PD Only) port is for power input.
:::

### Hardware Spec

<details>
    <summary>
        Sige5 Hardware Spec
    </summary>
   
<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Functional Parameters</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3576</li></th>
        </tr>
       <tr>
             <th>CPU</th>
             <th><li>RK3576 Quad-core Cortex-A72@ 2.2GHz and Quad-core Cortex-A53@ 1.8GHz, 8nm process</li></th>
         </tr>
         <tr>
             <th>GPU</th>
             <th><li>ARM Mali G52 MC3 GPU</li><li>Fully compatible with OpenGL ES 1.1, 2.0 and 3.2, OpenCL up to 2.0 and Vulkan 1.1</li><li>Dedicated 2D hardware engine with MMU will maximize Improves display performance and provides very smooth operation. </li></th>
         </tr>
         <tr>
             <th>NPU</th>
             <th><li>6 TOPS@INT8</li><li>Supports INT4, INT8, INT16, FP16, BF16 and TF32 hybrid operations</li><li>Supports deep learning frameworks: TensorFlow, Caffe, Tflite, Pytorch , Onnx NNAndroid NN, etc. </li></th>
         </tr>
         <tr>
            <th>VPU/Codec</th>
            <th><li>video decoder supports H.264, H.265, VP9, AV1 and AVS2 etc. up to 8K@30fps or4K@120fps</li><li>video encoder supports H.264 and H.265 up to 4K@60fps, high-qualityJPEG encoder/decoder supports up to 4K@60fps</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>1 channel ISP, 16 million pixels</li></th>
        </tr>
       <tr >
            <th>RAM</th>
            <th><li>8GB/16GB（max 16GB ）64bit LPDDR4/LPDDR4x，default 8GB LPDDR4x</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB/128GB eMMC，default 64GB eMMC</li><li>Supports MicroSD card expansion</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M interface (PCIe 2.0, 1-lane), expandable SSD: Type 2280/2260/2242/2230, currently defaulting to 2280</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th>
                <li>2x Gigabit Ethernet port</li>
                <li>Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5 (rtl8852bs)</li>
            </th>
        </tr>
        <tr>
            <th>Video Output</th>
            <th><li>1x HDMI OUT2.1, supports 4K@120fps</li><li> 1x MIPI DSI, maximum resolution up to 2K@60fps</li><li>1x DP1.4, maximum resolution up to 4K@120fps </li></th>
        </tr>
        
        <tr>
            <th>Video In</th>
            <th><li>2x 4-lane MIPI CSI, up to 2.5Gbps per lane</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th>
                <li>1x HDMI audio output</li>
                <li>1x HP-OUT audio output</li>
            </th>
        </tr>
        <tr>
            <th>USB Ports</th>
            <th>
                <li>2x USB2.0, supports High-Speed (480Mbps), Full-Speed (12Mbps), and Low-Speed (1.5Mbps) modes</li>
                <li>1x USB Type-C 2.0, supports OTG, supports high-speed (480Mbps), full-speed (12Mbps) and low-speed (1.5Mbps) modes</li>
            </th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th>
                <li>Compatible with Raspberry Pi 40-pin GPIO, supports various accessory peripherals</li>
                <li>Supports UART/SPI/I2C/I2S/PWM/5V Power/3.3V Power</li>
            </th>
        </tr>
        <tr>
            <th>Other</th>
            <th><li>1x 5V fan interface</li><li>1x battery connector for low power RTC chip LK8563S </li><li>2x LEDs - green LED blinks on system start, red LED user controllable</li></th>
        </tr>
        <tr>
            <th>Power Input</th>
            <th><li>USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A</li></th>
        </tr>
        <tr>
            <th>Buttons</th>
            <th><li>1x PWRON button for sleep/wake</li><li>1x Reset button for reboot</li><li>1x Maskrom button for maskrom burn-in mode</li></th>
        </tr>
        <tr>
            <th>OS Support</th>
            <th><li>Official：Android 14.0，Debian12，Buildroot</li><li>3rd Party：Armbian</li></th>
        </tr>
       <tr>
            <th>Dimensions</th>
            <th><li>92 mm x 62mm</li></th>
        </tr>
        <tr>
            <th>Operating temperature</th>
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>
</details>

### RK3576 Block Diagram
<details>
    <summary>
        RK3576 Block Diagram
    </summary>
    <img
  src="/img/sige/rk3576.png"
  alt="rk3576 block diagram"
  className="session-details-live-video"/>
</details>

### Hardware Pin Definitions

<details>
    <summary>
        40-pin header
    </summary>
   <div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
| :-----------: | :-------------: | :--------: | :--------: | :--------: | :------------: | 
|             |   +3.3V   | <div className='red'>1</div>  |  <div className='red'>2</div>   |   +5.0V  |    |
|111|  I2C4_SDA_M3 /UART3_CTSN_M1/UART2_RX_M2/GPIO3_B7_d/| <div className='green'>3</div> | <div className='red'>4</div>   |  +5.0V  |   |  |
| 112 | I2C4_SCL_M3/UART3_RTSN_M1 /UART2_TX_M2/GPIO3_C0_d |  <div className='green'>5</div>  | <div className='black'>6</div>  |  GND    |  |     |
| 100  | PWM1_CH0_M3 / SPI2_CLK_M2 /  UART1_CTSN_M2 / GPIO3_A4_d  |  <div className='green'>7</div>  | <div className='green'>8</div>  |   GPIO0_D4_u / <div className='orange-txt'>UART0_TX_M0_PORT</div> / JTAG_TCK_M1|    28  |
| | GND| <div className='black'>9</div> | <div className='green'>10</div> | GPIO0_B6/<div className='orange-txt'>UART0_RX_M0</div>/JTAG_TMS_M1  |14 |
|  |   | <div className='green'>11</div>  | <div className='green'>12</div> |  SAI0_SCLK_M1  /  SPI0_CSN0_M0 / I2C3_SCL_M1  / GPIO0_C6_d |     22     |
||   | <div className='green'>13</div>  | <div className='black'>14</div> |    GND     |             |
||   | <div className='green'>15</div>  | <div className='green'>16</div> |  I2C8_SDA_M2 / UART7_RX_M0  / SAI0_LRCK_M0 /  GPIO2_B7_d |     79     |
| |   +3.3V   | <div className='red'>17</div> | <div className='green'>18</div> | I2C8_SCL_M2 / UART7_TX_M0 /  GPIO2_B6_d |    78     |
|149| SPI4_MOSI_M0 / PWM2_CH5_M1 /UART6_RX_M3 / I2C3_SDA_M3/GPIO4_C5_d | <div className='green'>19</div>  | <div className='black'>20</div> |    GND |  |
|150| PWM2_CH2_M1/CAN1_TX_M1 /SPI4_MISO_M0/I2C6_SCL_M3 / GPIO4_C6_d| <div className='green'>21</div>| <div className='green'>22</div> | SARADC_VIN4  |   |
|151| PWM2_CH3_M1/CAN1_RX_M1/SPI4_CLK_M0/I2C6_SDA_M3/ GPIO4_C7_d | <div className='green'>23</div>  | <div className='green'>24</div> |  PWM2_CH6_M1 /  UART6_TX_M3  /SPI4_CSN0_M0/ GPIO4_C4_d |     148      |
| |   GND    | <div className='black'>25</div>  | <div className='green'>26</div> |   |    |
| 104 | PWM0_CH0_M3 / SPI2_MOSI_M2 / UART10_RX_M0 / GPIO3_B0_d  |  <div className='green'>27</div>  | <div className='green'>28</div>  |  GPIO2_D6_D/PWM2_CH6_M2 / UART9_RTSN_M0  |
|119| GPIO3_C7_D / UART8_RTSN_M0 | <div className='green'>29</div>  | <div className='black'>30</div> |    GND     |  |             |
|128| GPIO3_D4_D/ I2C3_SCL_M2 / SPI3_CLK_M1 / UART5_RX_M0 | <div className='green'>31</div>  | <div className='green'>32</div> |  |    |
|95| PWM2_CH7_M2/SPI3_CSN1_M0/UART9_CTSN_M0/SPDIF_TX0_M2/GPIO2_D7_d  | <div className='green'>33</div>  | <div className='black'>34</div> | GND  | |
|20| PWM0_CH0_M0/UART10_TX_M2/PDM0_CLK0_M0/SAI0_MCLK_M1/GPIO0_C4_d| <div className='green'>35</div> | <div className='green'>36</div> |SPI0_CLK_M0/I2C3_SDA_M1/SAI0_LRCK_M1/GPIO0_C7_d|23|
|96|I2C7_SCL_M1/SPI3_CLK_M0/ UART3_TX_M0/ GPIO3_A0_d D | <div className='green'>37</div>  | <div className='green'>38</div> | SPI0_MOSI_M0/PDM0_SDI0_M0/SAI0_SDI0_M1/GPIO0_D0_d | 24|
| | GND | <div className='black'>39</div>  | <div className='green'>40</div> |  I3C0_SDA_PU_M0/UART10_RX_M2/ DP_HPDIN_M1/ SAI0_SDO0_M1 / GPIO0_C5_d | 21|

</div>
</details>

<details>
    <summary>
        MIPI CSI0
    </summary>
0.5mm FPC connector(J12)

|Pin |   MIPI-CSI |   描述   |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_DPHY_CSI1_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_DPHY_CSI1_RX_D3P   |   MIPI RX Lane3 iuput P |
|5     | MIPI_DPHY_CSI1_RX_D2N |   MIPI RX Lane2 iuput N |
|6     | MIPI_DPHY_CSI1_RX_D2P|   MIPI RX Lane2 iuput P |
|8     | MIPI_DPHY_CSI2_RX_CLKN|   MIPI RX Clock iuput N |
|9     | MIPI_DPHY_CSI2_RX_CLKP |   MIPI RX Clock iuput P |
|11    |  MIPI_DPHY_CSI1_RX_D1N |   MIPI RX Lane1 iuput N |
|12    | MIPI_DPHY_CSI1_RX_D1P |   MIPI RX Lane1 iuput P |
|14    | MIPI_DPHY_CSI1_RX_D0N|    MIPI RX Lane0 iuput N |
|15    | MIPI_DPHY_CSI1_RX_D0P |    MIPI RX Lane0 iuput P |
|17    | MIPI_DPHY_CSI1_RX_CLKN|   MIPI RX Clock iuput N |
|18    | MIPI_DPHY_CSI1_RX_CLKP|  MIPI RX Clock iuput P |
|19    | MIPI_CSI1_RX_XVS        |    |
|20    | MIPI_DPHY_CSI2_CAM_CLKOUT_CON |    1.8V, CLock ouput for Sensor |
|21    | MIPI_CSI1_RX_XHS        |    |
|22    | MIPI_DPHY_CSI1_CAM_CLKOUT |   1.8V, CLock ouput for Sensor |
|23    | MIPI_DPHY_CSI1_PDN_H(GPIO3_D0) |    1.8V, GPIO |
|24    | I2C5_SCL_M3_MIPI_CSI1 |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|25    | I2C5_SDA_M3_MIPI_CSI1 |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|26    | MIPI_DPHY_CSI2_PDN_H(GPIO3_C7)|  1.8V, GPIO |
|27    | MIPI_DPHY_CSI1/2_RST(GPIO3_C6)|   3.3V, GPIO |
|28,29 | VCC_RX|   3.3V Power ouput |
|30,31 | VCC_5V0|   5V Power ouput |
</details>

<details>
    <summary>
        MIPI CSI1
    </summary>
0.5mm FPC connector(J25)

|Pin |   MIPI-CSI |   Description   |
|:--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,24,25,26,27,32,33        |  GND       |   Power Ground &  Signal Ground |
|2     | MIPI_DPHY_CSI1_RX_D3N   |     MIPI RX Lane3 iuput N |
|3     | MIPI_DPHY_CSI1_RX_D3P                  |   MIPI RX Lane3 iuput P |
|5          | MIPI_DPHY_CSI1_RX_D2N |   MIPI RX Lane2 iuput N |
|6          | MIPI_DPHY_CSI1_RX_D2P|   MIPI RX Lane2 iuput P |
|8          | MIPI_DPHY_CSI2_RX_CLKN|   MIPI RX Clock iuput N |
|9         | MIPI_DPHY_CSI2_RX_CLKP |   MIPI RX Clock iuput P |
|11         |  MIPI_DPHY_CSI1_RX_D1N |   MIPI RX Lane1 iuput N |
|12         | MIPI_DPHY_CSI1_RX_D1P |   MIPI RX Lane1 iuput P |
|14         | MIPI_DPHY_CSI1_RX_D0N|    MIPI RX Lane0 iuput N |
|15         | MIPI_DPHY_CSI1_RX_D0P |    MIPI RX Lane0 iuput P |
|17         | MIPI_DPHY_CSI1_RX_CLKN|   MIPI RX Clock iuput N |
|18         | MIPI_DPHY_CSI1_RX_CLKP|  MIPI RX Clock iuput P |
|19         | MIPI_CSI1_RX_XVS        |    |
|20         | MIPI_DPHY_CSI2_CAM_CLKOUT_CON |    1.8V, CLock ouput for Sensor |
|21         | MIPI_CSI1_RX_XHS        |    |
|22         | MIPI_DPHY_CSI1_CAM_CLKOUT |   1.8V, CLock ouput for Sensor |
|23         | MIPI_DPHY_CSI1_PDN_H(GPIO3_D0) |    1.8V, GPIO |
|24         | I2C5_SCL_M3_MIPI_CSI1 |   1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|25         | I2C5_SDA_M3_MIPI_CSI1 |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|26         | MIPI_DPHY_CSI2_PDN_H(GPIO3_C7)|  1.8V, GPIO |
|27         | MIPI_DPHY_CSI1/2_RST(GPIO3_C6)|   3.3V, GPIO |
|28,29      | VCC_RX|   3.3V Power ouput |
|30,31      | VCC_5V0|   5V Power ouput |
</details>

<details>
    <summary>
       MIPI DSI
    </summary>
0.5mm FPC connector(J23)

|Pin |   MIPI-DSI  |   Description     |
 :--------: | :---------------------: | :--------: | 
|1,4,7,10,13,16,27,33,34      | GND                |   Power and Signal Ground | 
|2                            | MIPI_DPHY_DSI_TX_D0N  |  MIPI1 TX Lane0 ouput N | 
|3                            | MIPI_DPHY_DSI_TX_D0P      |   MIPI1 TX Lane0 ouput P |
|5                            | MIPI_DPHY_DSI_TX_D1N        |    MIPI1 TX Lane1 ouput N |
|6                            | MIPI_DPHY_DSI_TX_D1P         |   MIPI1 TX Lane1 ouput P | 
|8                            | MIPI_DPHY_DSI_TX_CLKN   |   MIPI1 TX Clock ouput N | 
|9                            | MIPI_DPHY_DSI_TX_CLKP           |    MIPI1 TX Clock ouput P |
|11                           | MIPI_DPHY_DSI_TX_D2N                |   MIPI1 TX Lane2 ouput N |
|12                           | MIPI_DPHY_DSI_TX_D2P                |   MIPI1 TX Lane2 ouput P |
|14                           | MIPI_DPHY_DSI_TX_D3N |   MIPI1 TX Lane3 ouput N | 
|15                           | MIPI_DPHY_DSI_TX_D3P |   MIPI1 TX Lane3 ouput P | 
|17                           | LCD_BL_PWM1_CH1_M0  |   1.8V, GPIO/PWM |
|18,19                        | VCC3V3_LCD |   3.3V Power ouput | 
|20                           | LCD_RESET|   1.8V, GPIO |
|21                           | /NC |   No Connection | 
|22                           | LCD_BL_EN_H  |   3.3V, GPIO |
|23                           | I2C0_SCL_M1_TP |  1.8V, I2C Clock, pulled up to 1.8V with 2.2K on sige5 |
|24                           | I2C0_SDA_M1_TP |  1.8V, I2C Data, pulled up to 1.8V with 2.2K on sige5 |
|25                           | TP_INT_L   |    1.8V, GPIO |
|26                           | TP_RST_L  |   1.8V, GPIO |
|28,29                        | VCC5V0_LCD |  5V Power ouput |
|31,32                        | VCC_1V8 |  1.8V Power ouput |

</details>

<details>
    <summary>
        FAN
    </summary>
0.8mm connector(CN32)

|Pin |Assignment |   Description |
 :--------: | :---------: | :--------: | 
|1    | VCC_5V0 | 5V Power ouput |
|2    | GND | GND |
|3    | PWM | PWM control |
</details>

<details>
    <summary>
        HPOUT
    </summary>
0.8mm connector(CN2)

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
0.8mm connector(J26)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | Positive pole      |
|2          | -         | Negative pole    |
</details>


## Resources

### Source Code

<div class="cards">
    <a href="https://github.com/armbian/build" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📚</i>
            </div>
            <div class="content">
                <h2>Armbian Source Code</h2>
                <p>Linux for ARM development boards</p>
            </div>
        </div>
    </a>

<a href="https://github.com/armbian/linux-rockchip" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>Sige5 kernel</h2>
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
            <h2>Sige5 uboot</h2>
            <p>rockchip-linux/u-boot</p>
        </div>
    </div>
</a>
</div>

### Official Image

ArmSoM team uses Debian bullseye as the official operating system.

#### Download

The following systems have been tested and verified by ArmSoM official:

Network disk address: 
<a href="/general-tutorial/cloud-disk" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12.png) | debian12 for Sige5 :  <br/>  Debian 12 brings thousands of new and updated software packages, supports multiple desktop environments, and processor architectures including 32-bit and 64-bit PC, ARM, MIPS, and PowerPC. However, one of the biggest changes is the upgrade of the Linux kernel from version 5.10 to 6.1 LTS. | [Google Drive link](https://drive.google.com/drive/folders/164aAYUQe8yGcXjiZs9kjpnntF-eigywX?usp=drive_link)  |
|![Android](/img/sige/android.png) | Android14 for Sige5 :    <br/>Make your device more personal, protected and accessible with the newest OS upgrade. Improved photo quality, new themes and AI generated wallpapers. Privacy updates for your health, safety and data. And expanded accessibility features.| [Google Drive link](https://drive.google.com/drive/folders/1mzg_qaYFtXKfHLTMN5ILX9ZZBBGfT_xQ?usp=drive_link)  |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.webp) | Armbian for Sige5 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       | [armbian image](https://github.com/armbian/community/releases)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige5 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment.  | [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |


### Hardware Resources 

<div class="cards">
    <a href="https://drive.google.com/drive/folders/1DFfLAtIjYqWCKZrP6XGkbytzasOrc2jm?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige5 SCH</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/1DFfLAtIjYqWCKZrP6XGkbytzasOrc2jm?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige5 2D</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/1DFfLAtIjYqWCKZrP6XGkbytzasOrc2jm?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige5 SMD</h2>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/1DFfLAtIjYqWCKZrP6XGkbytzasOrc2jm?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
</div>

## Product Certificates

### CE / FCC / RoHS

## Purchase Samples
ArmSoM Official Website: [https://www.armsom.org/product-page/Sige5](https://www.armsom.org/product-page/Sige5)

ArmSoM Official AliExpress Store: [https://www.aliexpress.com/store/1102800175](https://www.aliexpress.com/store/1102800175) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=790341533736](https://item.taobao.com/item.htm?id=790341533736)

For OEM & ODM, please contact: sales@armsom.org -->
