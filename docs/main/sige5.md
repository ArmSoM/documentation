---
description: ArmSoM-Sige5 uses Rockchip RK3576 second-generation 8nm high-performance AIOT platform, 6 TOPS computing power NPU, and can be equipped with up to 16GB of large memory. Supports 8K video encoding and decoding, has rich interfaces, supports dual Gigabit network ports, WIFI6/BT5.
keywords: [armsom-sige5, RK3576 Development Boards, rk3576 SBC]
sidebar_label: "Sige5"
sidebar_position: 2
slug: /armsom-sige5
image: /img/sige/sige5.png
---

# Product Introduction: Sige5

Let's get to know Sige5 in 5 minutes.

 ## Overview

ArmSoM-Sige5 adopts the second-generation 8nm high-performance AIOT platform Rockchip RK3576, with a 6 TOPS computing power NPU and support for up to 16GB of large memory. It supports 4K video encoding and decoding, offers rich interfaces including dual gigabit Ethernet ports, WiFi 6 & BT5, and various video outputs. Compatible with multiple operating systems, it is suitable for ARM-based PCs, edge computing devices, personal mobile internet devices, and other digital multimedia applications.

![ArmSoM-sige5](/img/sige/sige5.png)

:::tip Rockchip RK3576
- [ArmSoM-Sige5](./armsom-sige5) Single Board Computer;
- [ArmSoM-CM5](./armsom-cm5) RK3576 CM5 Compute Module, [ArmSoM-CM5-IO](./armsom-cm5-io) CM5 companion IO board;

Leveraging a robust ecosystem and a variety of expansion accessories, ArmSoM helps users easily transition from concept to prototype to mass production, making it an ideal creative platform for makers, dreamers, and hobbyists.
:::

### Key Parameter

- **SoC**: Rockchip RK3576
- **CPU**: Integrated with four Cortex-A72 cores @ 2.2GHz and four Cortex-A53 cores @ 1.8GHz, along with a separate NEON co-processor.
- **GPU**: ARM Mali G52 MC3 GPU
- **NPU**: Up to 6 TOPs computing power (INT8), supports INT4/INT8/INT16 mixed operations.
- **VPU/Codec**:
  - **Hardware Decoding**: Supports H.264, H.265, VP9, AV1, and AVS2 up to 8K@30fps or 4K@120fps, and high-quality JPEG decoding up to 4K@60fps.
  - **Hardware Encoding**: Supports H.264 and H.265，JPEG up to 4K@60fps.
- **RAM**: 8/16GB 32-bit LPDDR4x, default is 8GB. RK3576 supports a maximum of 16GB.
- **Flash**: 32/64/128GB eMMC, default is 64GB eMMC.
- **WIFI/BT**:  Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 [syn43752](https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo)
- **Operating Voltage**: Wide input voltage range, from 4.5V to 23V (voltage error ±5%).
- **Operating Temperature**: 0°C to 80°C
- **Operating Systems**:
  - **Official Rockchip Support**: Android 14, Debian 12, Buildroot
  - **Third-party Support**: Armbian
- **PCB**: 8-layer PCB board design
- **Weight**: 43g
- **Dimensions**: 92mm × 62mm x 14.6mm


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

![ArmSoM-Sige5 front & back](/img/sige/sige5-layout-1.jpg)
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
            <th><li>video decoder supports H.264, H.265, VP9, AV1, and AVS2 up to 8K@30fps or 4K@120fps, and high-quality JPEG decoding up to 4K@60fps.</li><li>video encoder supports H.264 and H.265，JPEG up to 4K@60fps.</li></th>
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
            <th><li>1x M.2 Key M interface (PCIe 2.1, 1-lane), expandable SSD: Type 2280/2260/2242/2230, currently defaulting to 2280</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th>
                <li>2x Gigabit Ethernet port</li>
                <li>Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3  <a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a></li>
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
            <th>40-PIN</th>
            <th>
                <li>Compatible with Raspberry Pi 40-PIN GPIO, supports various accessory peripherals</li>
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
        40-PIN header
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

## Resourcess

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
            <h2>kernel</h2>
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
            <h2> uboot</h2>
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
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for Sige5 :  <br/>  Debian 12 brings thousands of new and updated software packages, supports multiple desktop environments, and processor architectures including 32-bit and 64-bit PC, ARM, MIPS, and PowerPC. However, one of the biggest changes is the upgrade of the Linux kernel from version 5.10 to 6.1 LTS. | [Google Drive link](https://drive.google.com/drive/folders/164aAYUQe8yGcXjiZs9kjpnntF-eigywX?usp=drive_link)  |
|![Android](/img/sige/android.png) | Android14 for Sige5 :    <br/>Make your device more personal, protected and accessible with the newest OS upgrade. Improved photo quality, new themes and AI generated wallpapers. Privacy updates for your health, safety and data. And expanded accessibility features.| [Google Drive link](https://drive.google.com/drive/folders/1mzg_qaYFtXKfHLTMN5ILX9ZZBBGfT_xQ?usp=drive_link)  |
|[lede](https://github.com/coolsnowwolf/lede) | lede for Sige5 :    <br/>lede is a highly modular and automated embedded Linux system with powerful network components and scalability.|[Google Drive link](https://drive.google.com/drive/folders/15IWOhBfEQH9xb_tsJ2HYSRv51VorbbOF)  |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for Sige5 :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored.       | [armbian image](https://www.armbian.com/armsom-sige5/)     |
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

## Supply Statement

The ArmSoM-Sige5 will be produced at least until July 2034.

### Version Change

- Starting from September 25, 2024, orders for ArmSoM-Sige5 will ship with version 1.2, featuring an updated WiFi module (SYN43752 replacing RTL8852BS).

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

ArmSoM Official Website: [https://www.armsom.org/product-page/Sige5](https://www.armsom.org/product-page/Sige5)

ArmSoM Official AliExpress Store: [https://aliexpress.com/item/3256806760032306.html](https://aliexpress.com/item/3256806760032306.html) 

ArmSoM Official Taobao Store: [https://item.taobao.com/item.htm?id=790341533736](https://item.taobao.com/item.htm?id=790341533736)

For OEM & ODM, please contact: sales@armsom.org

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