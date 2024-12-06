---
description: The ArmSoM-Sige7 is powered by Rockchip's latest flagship RK3588,octa-core 64-bit processor, with a max frequency of 2.4GHz, a 6 TOPS NPU, and up to 32GB of RAM. 
keywords: [armsom, armsom-sige7, SBC, maker kit, Rockchip]
sidebar_label: "Sige7"
sidebar_position: 2
slug: /armsom-sige7
---


# Product Introduction:Sige7 

Let's get to know Sige7 in 5 minutes.

## Overview

The ArmSoM-Sige7 is powered by Rockchip's latest flagship RK3588,octa-core 64-bit processor, with a max frequency of 2.4GHz, a 6 TOPS NPU, and up to 32GB of RAM. 

![ArmSoM-sige7](/img/sige/sige7-bananer.png)

:::tip Rockchip RK3588
- [ArmSoM-Sige7](./armsom-sige7) AI SBC;
- [ArmSoM-AIM7](./armsom-aim7) AIM7 core board， [ArmSoM-AIM-IO](./armsom-aimio)  AIM Companion IO Board;
- [ArmSoM-LM7](./armsom-lm7) LGA core board, [ArmSoM-W3](./armsom-w3) LGA core board maker kit;

With the powerful ecosystem and variety of extension modules, ArmSoM can help users easily go from ideas to prototype to mass production, making it an ideal creative platform for makers, dreamers and hobbyists.
:::

Sige 7 is applied for various applications,such as, ARM PCs, edge computing, cloud servers, AI, cloud computing, virtual/augmented reality, blockchain, smart NVRs and more.
 

### Key Parameter

- SoC: Rockchip RK3588
- CPU: 4x Cortex-A76 @ 2.4GHz + 4x Cortex-A55 @ 1.8GHz, 8nm
- GPU: ARM Mali-G610 MP4 
- NPU: Up to 6 TOPS (INT8), supports INT4/INT8/INT16 mixed computing
- VPU/Codec:
  - Hardware Decode: 8K@60fps H.265/VP9/AVS2, 8K@30fps H.264 AVC/MVC, 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8  
  - Hardware Encode: 8K@30fps H.265 / H.264
- RAM: 8GB/16GB/32GB (max 32GB) 64bit LPDDR4/LPDDR4x, default 8GB LPDDR4x
- Storage: 64GB/128GB eMMC, default 64GB eMMC
- Operating Voltage: Wide input voltage, 5V to 20V (±5% tolerance)
- Operating temperature: 0°C ~ 80°C  
- OS: 
  - Official: Android 12.0, Debian 11, Buildroot
  - 3rd party: Armbian, Ubuntu 20.04, Ubuntu 22.04, Kylin OS
- PCB: 12-layer
- Weight: 46.6g
- Size: 92mm × 62mm x 14.6mm

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

![ArmSoM-Sige7 front & back](/img/sige/armsom-sige7-layout.jpg)
![ArmSoM-sige7-Metal-shell](/img/sige/sige7-Metal-shell.jpeg)

:::tip
There are two identical Type-C ports on Sige7,but only the Type-C (PD Only) port is for power input.
:::
 
### Hardware Spec
<details>
    <summary>
        Sige7 Hardware Spec
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
            <th><li>RockChip RK3588</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3588 Quad-Core Cortex-A76@ 2.4GHz+Quad-CoreCortex-A55@ 1.8GHz，8nm process</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>GPU Mali-G610 MP4 (4x256KB L2 Cache)</li><li>Supports OpenGL ES3.2/OpenCL2.2/Vulkan1.1</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8(3 NPU core)</li><li>Supports INT4/INT8/INT16 mixed computing</li><li>Supports frameworks like TensorFlow, MXNet, PyTorch, Caffe, Tflite, Onnx NN, Android NN, etc</li></th>
        </tr>
         <tr>
            <th>VPU/Codec</th>
            <th><li>Hardware Decode: 8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8</li><li>Hardware Encode:8K@30fps H.265 / H.264</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>Integrated 48MP ISP with HDR&3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>8GB/16GB/32GB（max 32GB ）64bit LPDDR4/LPDDR4x，default 8GB LPDDR4x</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB/64GB/128GB eMMC，default 64GB eMMC</li><li>Supports MicroSD card expansion</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M (PCIe 3.0 4-lanes). Expandable SSD support for 2280/2260/2242/2230 M.2 SSD cards, default 2280 </li></th>
        </tr>
        <tr>
            <th>Networking</th>
            <th><li>2x 2.5G Ethernet</li><li>Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5 (AP6275P)</li></th>
        </tr>
        <tr>
            <th>Video Out</th>
            <th><li>1x HDMI 2.1, supports 8K@60fps</li><li>1x MIPI DSI up to 4K@60fps</li><li>1x DP 1.4 up to 8K@30fps</li></th>
        </tr>
        <tr>
            <th>Video In</th>
            <th><li>2x 4-lane MIPI CSI, up to 2.5Gbps per lane</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th><li>1x HDMI audio out</li><li>1x HP audio out</li><li>1x USB Type-C 3.0 (DP1.4) audio out</li></th>
        </tr>
        <tr>
            <th>USB</th>
            <th><li>1x USB 3.0 (USB 3.1 Gen 1), up to 5Gbps</li><li>1x USB Type-C 3.0（DP1.4/OTG）</li><li>1x USB 2.0 High（480Mbps）/Full（12Mbps）/Low-Speed（1.5Mbps） modes </li></th>
        </tr>
        <tr>
            <th>40-PIN</th>
            <th><li>Fully compatible with Raspberry Pi 40-PIN header for connecting abundant add-on modules </li><li>Supports UART/SPI/I2C/I2S/PWM/ADC/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>Other</th>
            <th><li>1x 5V fan interface</li><li>1x battery connector for low power RTC chip HYM8563TS </li><li>2x LEDs - green LED blinks on system start, red LED user controllable</li></th>
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
            <th><li>Official: ：Android 12.0，Debian11，Buildroot</li><li>3rd Party：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS</li></th>
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

<details>
    <summary>
       Comparison of Specifications for Sige7/5/3/1
    </summary>

|        | Sige7  | Sige5 | Sige3 |Sige1 |
| --------- | ----- | --- |--- | --- | 
| SoC Process | 8nm | 8nm | 22nm | 28nm |  
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3568B2 <br/> Cortex-A55 x4 @2GHz | Rockchip RK3528 <br/> Cortex-A53 x4 @2GHz | 
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

### RK3588 Block Diagram

<details>
    <summary>
        RK3588 Block Diagram
    </summary>
    <img
  src="/img/sige/rk3588.png"
  alt="rk3588 block diagram"
  className="session-details-live-video"/>
</details>

### Hardware Pin Definitions

<details>
    <summary>
        40-PIN header
    </summary>
   
<div className='gpio_style'>

| GPIO number |  Function |   Pin    |  Pin     |  Function  | GPIO number |
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
    
0.5mm FPC connector

|Pin |   MIPI-CSI |   Description   |
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
</details>

<details>
    <summary>
        MIPI CSI1
    </summary>
0.5mm FPC connector

|Pin |   MIPI-CSI |   Description   |
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

0.5mm FPC connector (J23)

|Pin |   MIPI-DSI  |   Description     |
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

0.8mm connector(J2)

|Pin        | Assignment  | Description|
 :--------: | :---------: | :--------: | 
|1          | +         | Positive pole      |
|2          | -         | Negative pole    |
</details>

## Resources

### arm-systemready

github : [SystemReady](https://github.com/ArmSoM/SystemReady) 

### Source Code

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
<a href="/general-tutorial/rknn-llm" class="card-link">
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

### Official Image

ArmSoM team uses Debian bullseye as the official operating system.

#### Download

The following systems have been tested and verified by ArmSoM official:

Network disk address: 
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56?usp=drive_link" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11-1.png) | debian11 for Sige7 :  <br/>   Debian 11, codenamed "Bullseye," is the latest stable release of the Debian project, released on August 14, 2021. Debian is an operating system based on free software known for its stability, security, and openness.| [Google Drive link](https://drive.google.com/drive/folders/1-dj3S95kHlRemunNpnltn2qtwk9sZtRB?usp=drive_link)    |
|![Android](/img/sige/android.png) | Android12 for Sige7 :    <br/>Android is an open-source operating system based on the Linux kernel, primarily used for mobile devices, tablets, and smartwatches, among other smart devices.|[Google Drive link](https://drive.google.com/drive/folders/19MuIZF_DpydbgKHNJpRjeOZ1jLd5wtKz?usp=drive_link)  |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for Sige7(bpi-m7) :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored. | [armbian](https://www.armbian.com/bananapi-m7/)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige7 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment. | [ubuntu-rockchip](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |
|lede | lede for Sige7 :    <br/>lede is a highly modular and automated embedded Linux system with powerful network components and scalability.|[Google Drive link](https://drive.google.com/drive/folders/18QOdyAiE4nyGD_CU57gSvQolHOXH2x5A?usp=drive_link)  |
|Arch Linux | Arch Linux Installer By kwankiu :    <br/>Arch Linux is an independently developed with the general-purpose of GNU/Linux distribution that strives to provide the latest stable versions of most software by following a rolling-release model. The default installation is a minimal base system, configured by the user to only add what is purposely required. |Simply flash the image and follow the instructions prompted by the installer.<br/>NOTE: This installer requires an internet connection. (The Ethernet drivers may take some time to load and the installer will retry several times, this is normal.) [download](https://github.com/kwankiu/archlinux-installer/releases) | 

### Hardware Resources 

<a href="/getting-start/cloud-disk" class="btn">
  <span>Google Drive link</span>
</a>
<br/>

<div class="cards">
    <a href="https://drive.google.com/drive/folders/1AGvCexVvBLNmA7CGPvxmofr4jsAUD7aw?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>Sige7 SCH</h2>
            </div>
        </div>
</a>

<a href="https://drive.google.com/drive/folders/1AGvCexVvBLNmA7CGPvxmofr4jsAUD7aw?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Sige7 2D</h2>
        </div>
    </div>
</a>

<a href="https://drive.google.com/drive/folders/1AGvCexVvBLNmA7CGPvxmofr4jsAUD7aw?usp=drive_link" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>Sige7 SMD</h2>
        </div>
    </div>
</a>
<a href="https://drive.google.com/drive/folders/1AGvCexVvBLNmA7CGPvxmofr4jsAUD7aw?usp=drive_link" class="card-link">
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
<br/>


:::tip Version change history
V1.1 
* VOL_IC: U27/U7/U6301change part pin;
* USB：U15 fr o m TypeC1 change t o TypeC0; CN31 fr o m USB3. 0 change t o USB2. 0;
* 40PIN：add UART Pr ot ect; J 2&CN2&CN32 change t o WF0. 8;
* CAM：DEL R6352, CSI _1 I2C3 change t o I2C4；
* WIFI Module: AP6275S change to AP6275P;
:::

## Product Certificate

### CE / FC / RoHS

![sige7-sige7-ce-fc-rohs](/img/sige/sige7-ce-fc-rohs.jpeg)

## Supply Statement

The ArmSoM-Sige7 will be produced at least until January 2034.

## Accessories

The official accessories designed for the ArmSoM-Sige are intended to help you achieve optimal performance from your computer.

<div class="cards">
<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Camera Module 1</h2>
        <p>The camera module 1, compatible with the OV13850 sensor, is a low-power camera module.</p>
    </div>
</div>
</a>
<a href="./armsom-display-10-hd" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-display-10hd.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Display-10-HD</h2>
        <p>A 10.1-inch touchscreen display, ideal for interactive projects like entertainment systems and information dashboards.</p>
    </div>
</div>
</a>
<a href="./sige-diy-case1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/sige-diy-case.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Sige DIY Case 1</h2>
        <p>Combining high-quality construction with a clean, minimalist design, the metal casing adds a premium touch.</p>
    </div>
</div>
</a>
<a href="./sige-active-cooling-kit" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/sige-active-cooling-fan-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Active Cooling Kit</h2>
        <p>The active cooling kit ensures Sige runs smoothly even during the most demanding tasks.</p>
    </div>
</div>
</a>
</div>

## Purchase Samples 
ArmSoM online shop: [https://www.armsom.org/product-page/sige7](https://www.armsom.org/product-page/sige7)
 
ArmSoM Aliexpress online shop: [https://aliexpress.com/item/3256806184323776.html](https://aliexpress.com/item/3256806184323776.html) 

ArmSoM Taobao shop: [https://item.taobao.com/item.htm?id=757023687970](https://item.taobao.com/item.htm?id=757023687970)

OEM&ODM, please contact: sales@armsom.org

## Notes

:::caution [Electrostatic Protection]
1. Before handling the device, please ensure you wear an anti-static wrist strap or take electrostatic discharge measures to prevent damage to the development board.
2. Assembly should be performed in an electrostatic-safe environment, avoiding operations in dry and low-humidity conditions.
3. When not in use, store the device in an anti-static bag and keep it in a suitably temperature-controlled, low-humidity environment to prevent static electricity buildup.
4. When handling the device, avoid friction or collisions to prevent the generation of static electricity that could cause damage.
5. When holding the device, try to avoid direct contact with the chips on the mainboard to prevent static damage.
6. Do not plug or unplug wires or other devices while the device is operating to avoid damage from electrical surges.
7. When connecting or disconnecting the GPIO/MIPI expansion interfaces, make sure to turn off the power and disconnect the power cable to prevent damage from electrical current.

:::

:::danger [Heat Management]

Without effective cooling measures, the surface temperature of the main chip may exceed 60 degrees. When handling the device, please avoid direct contact with the SoC and surrounding power inductors to prevent burns. Ensure that the environment is well-ventilated during operation to prevent localized heat buildup, which could lead to overheating. Additionally, do not place the device in direct sunlight. It is recommended to choose between the official [cooling fan](./sige-active-cooling-kit), [heat sink](./sige-diy-case1), or third-party cooling kits based on specific usage conditions to ensure optimal cooling performance.

:::