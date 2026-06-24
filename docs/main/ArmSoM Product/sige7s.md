---
description: The ArmSoM-Sige7s is powered by the Rockchip RK3588s, a new-generation flagship octa-core 64-bit processor. It features a rich array of hardware interfaces, covering communication buses commonly used in the embedded industry, such as I2C, SPI, UART, and CAN. For multimedia, the micro HDMI port supports video output up to 8K at 60fps. Its octa-core CPU, clocked at up to 2.4GHz, handles daily multitasking needs for applications such as servers and gateways. The integrated NPU delivers 6 TOPS of computing power, significantly enhancing the performance of various model algorithms.
keywords: [armsom, armsom-sige7s, rk3588s maker kit, rockchip, rk3588s product overview]
sidebar_label: "Sige7s"
sidebar_position: 3
slug: /armsom-sige7s
image: /img/sige/sige7s-bananer.png
---


# Product Introduction: Sige7s 

Let's get to know Sige7s in 5 minutes.

## Overview

The ArmSoM-Sige7 is powered by Rockchip's latest flagship RK3588,octa-core 64-bit processor, with a max frequency of 2.4GHz, a 6 TOPS NPU, and up to 32GB of RAM. 

![ArmSoM-sige7s](/img/sige/sige7s-bananer.png)

Sige 7 is applied for various applications,such as, ARM PCs, edge computing, cloud servers, AI, cloud computing, virtual/augmented reality, blockchain, smart NVRs and more.
 

### Key Parameter

- **SoC**: Rockchip RK3588
- **CPU**: 4x Cortex-A76 @ 2.4GHz + 4x Cortex-A55 @ 1.8GHz, 8nm
- **GPU**: ARM Mali-G610 MP4 
- **NPU**: Up to 6 TOPS (INT8), supports INT4/INT8/INT16 mixed computing
- **VPU/Codec**:
  - **Hardware Decode**: 8K@60fps H.265/VP9/AVS2, 8K@30fps H.264 AVC/MVC, 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8  
  - **Hardware Encode**: 8K@30fps H.265 / H.264
- **RAM**: 2GB/4GB/8GB/16GB/32GB (max 32GB) 64bit LPDDR4/LPDDR4x
- **Storage**: 32GB/64GB/128GB eMMC Module
- **WIFI/BT**: IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5 [AP6275P](https://www.ampak.com.tw/tw/product/WiFi-Bluetooth/Stamp-Type-2T2R/AP6275P)
- **Operating Voltage**: Wide input voltage, 5V to 23V (±5% tolerance)
- **Operating temperature**: 0°C ~ 80°C  
- **OS**: 
  - **Official**: Debian 11, Ubuntu 22.04, Ubuntu 24.04
  - **3rd party**: Armbian, Arch Linux, openSUSE
- **PCB**: 12-layer
- **Weight**: 46.6g
- **Size**: 92mm × 62mm x 14.6mm

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

![ArmSoM-Sige7s front & back](/img/sige/armsom-sige7s-layout.jpg)
 
### Hardware Spec
<details>
    <summary>
        Sige7s 硬件规格
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
            <th><li>16GB/32GB/64GB/128GB eMMC，默认eMMC 64GB</li><li>支持MicroSD卡扩展</li><li>M.2 M-KEY Socket：PCIe3.0 NVMe SSD</li></th>
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
            <th><li>1x 5V风扇接口</li><li>1x 电池输入连接器用于低功耗RTC芯片 LK8563S 的供电</li><li>1x LED灯，系统正常时红色灯亮</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>宽范围的输入电压 5V-23V : 支持USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A, 20V/2A</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x PWRON键，支持休眠唤醒</li><li>1x Reset键，支持重启</li><li>1x Maskrom键，支持进入maskrom烧录模式</li></th>
        </tr>
        <tr>
            <th>系统</th>
            <th><li>Rockchip官方支持：Android 12.0，Debian12，ubuntu22.04</li><li>第三方支持：Armbian</li></th>
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
        Sige7/7s规格比较
    </summary>

|        | Sige7  | Sige7s |
| --------- | ----- | --- |
| SoC Process | 8nm | 8nm |
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3588S 4xCortex-A76 @2.4GHz + 4xCortex-A55 @1.8GHz  | 
| GPU | ARM Mali-G610 MP4  | ARM Mali-G610 MP4 |
| NPU | 6TOPS@INT8(3 NPU core)  | 6TOPS@INT8 |
| RAM | 4GB/8GB/16GB/32GB 64-bit LPDDR4x | 2GB/4GB/8GB/16GB 32-bit/64-bit LPDDR4x |
| eMMC| 64GB/128GB eMMC | 32/64GB/128GB eMMC|
| TF Card | Molex Slot, Spec Version 2.x/3.x/4.x(SDSC/SDHC/SDXC)| Yes|
| Output | 1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 4K@60fps <br/> 1x DP 1.4 up to 8K@30fps | 1x Micro HDMI (8K@60fps) <br/> 1x MIPI DSI <br/> 1x Mini DP  |
| Decoder |  8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|  8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|
| Encoder | 8K@30fps H.265 / H.264| 8K@30fps H.265 / H.264|
| Wi-Fi | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB | AIC8800 Wi-Fi, BT5 |
| PCIE | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | - |
| Ethernet | 2x 2.5G Ethernet |   千兆 Ethernet|
| USB Host | 1x USB 3.0 & 1x USB 2.0 | 2x USB 3.0 + 2x USB 2.0|
| USB-C | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C Power jack & 1x USB Type-C 3.0 |
| MIPI CSI/DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x MIPI CSI <br/> 1x MIPI DSI | 
| 40-PIN Header| yes | yes |
| LEDs | 2x LEDs | 2x LEDs |
|Board Dimensions| 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm |

</details>
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
| :-----------: | :-------------: | :--------: | :--------: | :--------: |:--------: |
| | +3.3V | <div className='red'>1</div> | <div className='red'>2</div> | +5.0V | |
| /dev/i2c1 sda | I2C1_SDA \ GPIO0_D5 | <div className='green'>3</div> | <div className='red'>4</div> | +5.0V | |
| /dev/i2c1 scl | I2C1_SCL \ GPIO0_D4 | <div className='green'>5</div> | <div className='black'>6</div> | GND | |
| 47 | GPIO1_B7 \ PWM3_M3 | <div className='green'>7</div> | <div className='green'>8</div> | <div className='orange-txt'>UART2_TX_M0</div> | |
| | GND | <div className='black'>9</div> | <div className='green'>10</div> | <div className='orange-txt'>UART2_RX_M0</div>  | |
| 128 | GPIO4_A0 | <div className='green'>11</div> | <div className='green'>12</div> | GPIO1_A7 | 39 |
| 129 | GPIO4_A1 | <div className='green'>13</div> | <div className='black'>14</div> | GND | |
| 130 | GPIO4_A2 | <div className='green'>15</div> | <div className='green'>16</div> | UART6_TX_M1 \ GPIO1_A1 | /dev/ttyS2 uart txd |
| | +3.3V | <div className='red'>17</div> | <div className='green'>18</div> |UART6_RX_M1 \| GPIO1_A0 |  /dev/ttyS2 uart rxd |
| spi mosi | SPI0_MOSI_M2 | <div className='green'>19</div> | <div className='black'>20</div> | GND | |
| spi miso  | SPI0_MISO_M2 | <div className='green'>21</div> | <div className='green'>22</div> | GPIO1_B0|  40 |
| spi clk| SPI0_CLK_M2 | <div className='green'>23</div> | <div className='green'>24</div> | spi cs 0 | SPI0_CS0_M2 |
| | GND | <div className='black'>25</div> | <div className='green'>26</div> | spi cs 1 | SPI0_CS1_M2 |
| /dev/i2c6 sda| I2C6_SDA_M3 | <div className='green'>27</div> | <div className='green'>28</div> | I2C6_SCL_M3 |  /dev/i2c6 scl |
| 131 | GPIO4_A3 \ UART0_TXD_M2 | <div className='green'>29</div> | <div className='black'>30</div> | GND | |
| 132 | GPIO4_A4 \ UART0_RXD_M2 | <div className='green'>31</div> | <div className='green'>32</div> | PWM2 | 105 |
| 133 | GPIO4_A5 \ UART3_TXD_M2 | <div className='green'>33</div> | <div className='black'>34</div> | GND | |
| 134 | GPIO4_A6 \ UART3_RXD_M2 | <div className='green'>35</div> | <div className='green'>36</div> | GPIO4_B2 \ CAN1_RXD_M1 | 138 |
| 135 | GPIO4_A7 | <div className='green'>37</div> | <div className='green'>38</div> | GPIO4_B3 \ CAN1_TXD_M1 | 139 |
| | GND | <div className='black'>39</div> | <div className='green'>40</div> | GPIO3_C3 | 115 |

</div>
</details>

<details>
    <summary>
        MIPI CSI
    </summary>
    
0.5mm FPC connector(J10)

| PIN | Name |
| :---: | :--- |
| 1 | VCC_CAM(3.3v) |
| 2 | I2C8_SDA_M2 |
| 3 | I2C8_SCL_M2 |
| 4 | CIF_CLKOUT |
| 5 | PWDN_GPIO1_A6 |
| 6 | GND |
| 7 | MIPI_CSI_RX_CLK0P |
| 8 | MIPI_CSI_RX_CLK0N |
| 9 | GND |
| 10 | MIPI_CSI_RX_D1P |
| 11 | MIPI_CSI_RX_D1N |
| 12 | GND |
| 13 | MIPI_CSI_RX_D0P |
| 14 | MIPI_CSI_RX_D0N |
| 15 | GND |
</details>

<details>
    <summary>
        MIPI DSI
    </summary>

0.5mm FPC connector (J11)

| PIN | Name |
| :---: | :--- |
| 1 | VCC_MIPI |
| 2 | VCC_MIPI |
| 3 | GND |
| 4 | I2C4_SDA_M3 |
| 5 | I2C4_SCL_M3 |
| 6 | GND |
| 7 | MIPI_DSI_TX1_D0P |
| 8 | MIPI_DSI_TX1_D0N |
| 9 | GND |
| 10 | MIPI_DSI_TX1_CLKP |
| 11 | MIPI_DSI_TX1_CLKN |
| 12 | GND |
| 13 | MIPI_DSI_TX1_D1P |
| 14 | MIPI_DSI_TX1_D1N |
| 15 | GND |
</details>

<details>
    <summary>
        VRTC
    </summary>

0.8mm connector(J18)

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
<a href="https://github.com/ArmSoM/manifests" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📚</i>
        </div>
        <div class="content">
            <h2>ArmSom-bsp </h2>
            <p>Building a Linux System</p>
        </div>
    </div>
</a>
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

### Official Image

ArmSoM team uses Debian bullseye as the official operating system.[How to Flash Image](https://docs.armsom.org/getting-start/flash-img)📤

#### Download

The following systems have been tested and verified by ArmSoM official:

Network disk address: 
<a href="https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56?usp=drive_link" class="btn">
  <span>Google Drive link</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian11-1.png) | debian12 for Sige7 :  <br/>   Debian 12 brings thousands of new and updated software packages, supports multiple desktop environments, and processor architectures including 32-bit and 64-bit PC, ARM, MIPS, and PowerPC. However, one of the biggest changes is the upgrade of the Linux kernel from version 5.10 to 6.1 LTS.| [Google Drive link](https://drive.google.com/drive/folders/1joIeY5SXHmF7oe7rLaxHKUUXqvtZ2fGz?usp=drive_link)    |
|![Android](/img/sige/android.png) | Android12 for Sige7 :    <br/>Android is an open-source operating system based on the Linux kernel, primarily used for mobile devices, tablets, and smartwatches, among other smart devices.|[Google Drive link](https://drive.google.com/drive/folders/19MuIZF_DpydbgKHNJpRjeOZ1jLd5wtKz?usp=drive_link)  |
|![ubuntu](/img/sige/ubuntu.png) | ubuntu22.04 for Sige7 :    <br/>Ubuntu 22.04, codenamed "Jammy Jellyfish," was officially released by Canonical on April 21, 2022| [Google Drive link](https://drive.google.com/drive/folders/1RcdE-Vt_Eyzrb2f2SOi078m4Si50Xahb?usp=drive_link)  |

### Third Party System  

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for Sige7(bpi-m7) :    <br/>  Armbian is a computing build framework that allows users to create ready-to-use images with working kernels in variable user space configurations for various single board computers. It provides various pre-build images for some supported boards. These are usually Debian or Ubuntu flavored. | [armbian](https://github.com/armbian/community/releases/)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for Sige7 :    <br/> This project aims to provide a default Ubuntu experience for Rockchip RK3588 devices. Get started today with an Ubuntu Server or Desktop image for a familiar environment. | [ubuntu-rockchip](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |
|Arch Linux | Arch Linux Installer By kwankiu :    <br/>Arch Linux is an independently developed with the general-purpose of GNU/Linux distribution that strives to provide the latest stable versions of most software by following a rolling-release model. The default installation is a minimal base system, configured by the user to only add what is purposely required. |Simply flash the image and follow the instructions prompted by the installer.<br/>NOTE: This installer requires an internet connection. (The Ethernet drivers may take some time to load and the installer will retry several times, this is normal.) [download](https://github.com/kwankiu/archlinux-installer/releases) | 
| ![openSUSE](https://static.opensuse.org/favicon.svg) | 桌面用户、开发者以及系统管理员的匠之所选。| [download](https://download.opensuse.org/ports/aarch64/tumbleweed/appliances/) |
|[lede](https://github.com/coolsnowwolf/lede) | lede for Sige7 :    <br/>lede is a highly modular and automated embedded Linux system with powerful network components and scalability.|[Google Drive link](https://drive.google.com/drive/folders/18QOdyAiE4nyGD_CU57gSvQolHOXH2x5A)  |
| [LibreELEC](https://github.com/coolsnowwolf/lede) | LibreELEC.tv for Sige7 :    <br/>LibreELEC is a minimalist 'Just enough OS' Linux distribution for running Kodi.| [LibreELEC.tv](https://github.com/ShigeakiAsai/LibreELEC.tv/releases)  |

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
<a href="https://drive.google.com/drive/folders/1jMrzK29BGL-MvSF8JiTV1ekhT6T5UK_O" class="card-link">
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


:::tip Version change history
V1.1 
* VOL_IC: U27/U7/U6301change part pin;
* USB：U15 fr o m TypeC1 change t o TypeC0; CN31 fr o m USB3. 0 change t o USB2. 0;
* 40PIN：add UART Pr ot ect; J 2&CN2&CN32 change t o WF0. 8;
* CAM：DEL R6352, CSI _1 I2C3 change t o I2C4；
* WIFI Module: AP6275S change to AP6275P;
:::

## Product Certificate

### CE / FCC / RoHS

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

## What do others say about the Sige7?

- [arm](https://www.arm.com/zh-TW/architecture/system-architectures/systemready-certification-program/ir): SystemReady IR is tailored to meet the needs of embedded Linux/BSD ecosystem on systems based on embedded Arm SoCs.
- [cnx-software](https://www.cnx-software.com/2024/01/30/banana-pi-bpi-m7-thin-rockchip-rk3588-sbc-dual-2-5gbe-m-2-nvme-storage-hdmi-2-1): ArmSoM-Sige7 – A thin Rockchip RK3588 SBC with dual 2.5GbE, M.2 NVMe storage, HDMI 2.1, and more
- [notebookcheck](https://www.notebookcheck.net/Banana-Pi-BPI-M7-debuts-as-new-Pico-ITX-sized-single-board-computer-with-8K-video-outputs.768533.0.html): ArmSoM-Sige7 debuts as new Pico-ITX sized single-board computer with 8K video outputs
- [liliputing](https://liliputing.com/banana-pi-bpi-m7-router-board-now-available-for-165-rk3588-processor-dual-2-5-gb-ethernet-wifi-6-and-bt-5-2): ArmSoM-Sige7 router board now available for $165 (RK3588 processor, dual 2.5 Gb Ethernet, WiFi 6 and BT 5.2)
- [itsfoss](https://itsfoss.com/arosom-sige7-review/): This SBC Puts Raspberry Pi 5 to Shame
- [electronics-lab](https://www.electronics-lab.com/armsom-sige7-review-a-rockchip-rk3588-sbc-with-dual-2-5gbe-ethernet-nvme-storage-and-triple-display-output): ArmSom Sige7 Review- A Rockchip RK3588 SBC with Dual 2.5GbE Ethernet, NVMe Storage, and Triple Display Output
- [magazinmehatronika](https://magazinmehatronika.com/banana-pi-bpi-m7-a-k-a-armsom-sige7-recenzija): Armsom Sige7 recenzija
- [sk](https://www.sk.rs/arhiva/clanak/33374/armsom-sige7-lici-na-bananu-ali-nije): Armsom Sige7 
- [Technically Unsure](https://www.youtube.com/watch?v=Cw91DFgMFQQ): ArmSoM Sige7 vs Raspberry Pi 5: The Ultimate Single-Board Battle – Who Reigns Supreme?
- [habr](https://habr.com/ru/companies/selectel/articles/774782/): A single board that supports 32 GB of RAM. What kind of device is this?
- [Platima Tinkers](https://www.youtube.com/watch?v=dwth8_nQvG4): ArmSoM Forge1 and Sige7 - The best ARM SBC I have ever tested!
- [Platima Tinkers](https://www.youtube.com/watch?v=dwth8_nQvG4): ArmSoM Forge1 and Sige7 - The best ARM SBC I have ever tested!
- [sbc compare](https://sbc.compare/18-armsom-sige7-8gb): Sige7 Benchmark Comparison on sbc.compare

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