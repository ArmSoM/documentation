---
description: ArmSoM-CM7s 采用瑞芯微 RK3588S 8核64位处理器，4个Cortex-A76（主频2.4GHz）和4个Cortex-A55（主频1.8GHz）。6 TOPS算力NPU，最大可配32GB大内存。支持4K视频编解码，拥有丰富的接口，支持多种操作系统。
keywords: [armsom, armsom-CM7s, RK3588s  Development Boards, RK3588s Core borad, rockchip]
sidebar_label: "CM7s"
sidebar_position: 5
slug: /armsom-cm7s
image: /img/cm/armsom-cm7s.jpg
---

# ArmSoM-CM7s 产品简介

让我们在 5 分钟内了解 ArmSoM-CM7s

## 简介

**ArmSoM-CM7s 核心板：尺寸小巧，性能强悍，专为深度嵌入式场景打造。**
板载瑞芯微 RK3588S 8核 64位旗舰处理器（4×Cortex-A76 @ 2.4GHz + 4×Cortex-A55 @ 1.8GHz），采用 8nm 先进工艺，兼具出色算力与优秀功耗比。集成 ARM Mali-G610 高性能 GPU，全面兼容 OpenGL ES 3.2、OpenCL 2.2 及 Vulkan 1.2 图形 API；内置 6 TOPS 强劲 NPU，支持 INT4/INT8/INT16 混合精度运算，轻松胜任端侧 AI 推理。

模块提供丰富的总线与扩展接口，支持多种容量 eMMC 闪存，可广泛赋能工业物联网、边缘计算及智能终端领域。

![ArmSoM-CM7s](/img/cm/armsom-cm7s.jpg)

:::tip Rockchip RK3588s
依托强大的生态系统以及各式各样的扩展配件，ArmSoM 可以帮助用户轻松实现从创意到原型再到批量生产的交付，是创客、梦想家、业余爱好者的理想创意平台。
:::

:::tip
armsom-cm7sv1.1 CN2 第2pin和第4pin不工作，将在下个v1.2 版本修复
:::

### 关键参数

* **SOC**：Rockchip RK3588S（8nm LP制程）
* **CPU**：8核64位（4×Cortex-A76@2.4GHz + 4×Cortex-A55@1.8GHz）
* **GPU**：ARM Mali-G610 3D GPU，支持 OpenGL ES3.2 / OpenCL 2.2 / Vulkan 1.2
* **NPU**：6TOPS 算力，支持 INT4/INT8/INT16 混合运算
* **RAM**：2/4/8/16/32GB LPDDR4/4X
* **eMMC**：32/64/128/256GB eMMC
* **接口**：板载 3×100pin 连接器（DF40C-100DP-04V），支持 Type-C/DP1.4、HDMI 2.1/eDP1.3、MIPI DPHY/CSI、USB3.0/2.0、SATA III/PCIe2.0、SDIO3.0/RGMII、SDMMC 及 I2C/I2S/UART/SPI/CAN/PWM/GPIO 等复用总线与控制引脚
* **电源**：输入 DC 5V (MAX 2500mA)；输出 DC 3.3V/1.8V (MAX 600mA)
* **尺寸**：55 x 40 x 1.6 毫米
* **输入**：DC 5V MAX 2500mA
* **输出**：DC 3.3V MAX 600mA 和 DC 1.8V MAX 600mA
* **PCB尺寸**：55 x 40 x 1.6 毫米（长 x 宽 x 厚）

## 使用手册

<a href="./armsom-cm7s#使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>CM7s使用手册</h2>
            <p>如何开始使用你的CM7s</p>
        </div>
    </div>
</a>

## 硬件信息

### 硬件接口

![ArmSoM-CM5-front & back](/img/cm/cm7s-interface.jpg)

:::tip
- 设计为板对板连接器
:::

### ArmSoM CM7s vs 树莓派 CM5
以下是 ArmSoM CM7s 和 树莓派 CM5 的规格对比表格：

| 规格                   | ArmSoM CM7s                             | 树莓派 CM5                     |
|------------------------|-----------------------------------------|--------------------------------|
| **处理器**             | **RK3588S SoC**                         | Broadcom BCM2712               |
| **CPU架构**            | **四核 ARM Cortex-A76 & 四核Cortex-A55** | 四核 ARM Cortex-A76            |
| **GPU**                | **ARM Mali-G610 MP4**                   | VideoCore VII                |
| **NPU**                | **6TOPS 算力，支持 INT4/INT8/INT16 混合运算** | 无内置NPU                |
| **内存**               | **最高支持 32GB LPDDR5**                 | 2GB、4GB、8GB、16GB LPDDR4       |
| **存储**               | eMMC 存储（可选容量）                     | eMMC 存储（可选容量）        |
| **显示输出**           | 1x HDMI 2.1, 1x DP 1.4                   | 2x HDMI 2.0                    |
| **视频分辨率**         | **支持8K@60fps**                         | 支持4K@60fps                   |
| **网络接口**           | 1x 千兆以太网接口                         | 1x 千兆以太网接口               |
| **USB接口**            | **1x USB3.0，3x USB2.0**                 | 2xUSB3.0，1xUSB2.0       |
| **GPIO**               | 40针 GPIO                                | 40针 GPIO                      |
| **扩展性**             | **2x PCIE2.1/SATA3**                     | 1x PCIe 2.0         |
| **相机接口**           | 1x 4通道 MIPI CSI, 2x 2通道 MIPI CSI      | 2x 4通道 MIPI CSI     |
| **显示接口**           | 1x 4通道 MIPI DSI                        | 2x 4通道 MIPI DSI                    |
| **电源输入**           | 5V                                       | 5V                          |
| **尺寸**               | 55mm x 40mm                               | 55mm x 40mm                    |
| **操作系统支持**       | Debian, Android, Ubuntu, Armbian等         | Raspberry Pi OS, Ubuntu, 其他  |
| **主要用途**          | 高端平板、边缘计算、人工智能、云计算、AR/VR、智能安防、智能家居等  | 嵌入式系统、工业控制、AI/机器学习、数字标牌、物联网、边缘计算       |

### 产品框图

![ArmSoM-CM7s-product](/img/cm/cm7s-product.png)

### 硬件规格
<table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能</th>
      </tr>
    </thead>
    <tbody align="left">
    <tr>
            <th>SOC</th>
            <th><li>RockChip RK3588S</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3588S 四核 Cortex-A76@ 2.4GHz 和四核 Cortex-A55@ 1.8GHz，8纳米制程</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali-G610 MP4 GPU</li><li>ARM Mali-G610 MP4四核GPU，支持OpenGL ES 1.1/2.0/3.2、OpenCL 2.2、Vulkan 1.1/1.2，算力450 GFLOPS</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8</li><li>支持 INT4，INT8，INT16，FP16 混合运算</li><li>支持深度学习框架：TensorFlow、PyTorch、Caffe等。</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：支持8K@60fps (H.265/VP9/AVS2)、8K@30fps (H.264)、4K@60fps (AV1)。</li><li>硬编码：8K@30fps (H.265/H.264)，支持同编同解</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>集成4800万像素ISP，支持HDR和3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>4GB/8GB/16GB 32GB LPDDR4/LPDDR4x/LPDDR5，默认LPDDR5 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB/64GB/128GB eMMC，默认eMMC 64GB</li><li>支持MicroSD卡扩展</li><li>M.2 M-KEY Socket：PCIe2.1 NVMe SSD</li></th>
        </tr>
        <tr>
            <th>显示</th>
            <th><li>1x HDMI OUT2.1，支持 8K@60Hz或4K@120Hz</li><li>2x MIPI DSI 分辨率最高可达 4K@60Hz</li><li>1x DP1.4 分辨率最高可达 8K@30Hz</li></th>
        </tr>
        <tr>
            <th>摄像头</th>
            <th><li>2x 4Lanes MIPI CSI，每线最高 2.5Gbps</li><li>支持最多三个MIPI摄像头输入</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th>
              <li>1x GMAC，提供 RGMII / RMII 接口引出</li>
               <li>板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 <a href="https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo">syn43752</a></li>
            </th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>2x PCIe 2.0 1-lans</li></th>
        </tr>
         <tr>
            <th>USB</th>
            <th><li>3x USB 3.0</li><li>2x USB 2.0 Host</li><li>1x USB 2.0 OTG</li><li>1× Type-C (USB 3.1)</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>SPDIF_Tx x2</li><li>I2S x4</li><li>PDM x2</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1</li><li>FAN x1</li><li>RTC x1</li></th>
        </tr>
    </tbody>
</table>

### RK3588S框图
<details>
    <summary>
        RK3588S 框图
    </summary>
    <img
  src="./img/sige/rk3588s.png"
  alt="rk3588S block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

<a href="https://pan.baidu.com/s/1PowkJyvHJOHGgC-BnVT98g?pwd=arms" class="btn">
  <span>ArmSoM-CM7s_Pinout</span>
</a>
<br/>

## 开发资料

### SDK源码

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
<a href="https://github.com/ArmSoM/rockchip-kernel" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📗</i>
        </div>
        <div class="content">
            <h2>CM7s kernel</h2>
            <p>Improved Rockchip Linux</p>
        </div>
    </div>
</a>

<a href="https://github.com/ArmSoM/u-boot" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📘</i>
        </div>
        <div class="content">
            <h2>CM7s uboot</h2>
            <p>ArmSoM/u-boot</p>
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

### 网盘链接
百度网盘总链接，包括软件资料、硬件资料：
<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤📤

以下系统已由ArmSoM官方测试验证：

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for **CM7s-IO** :  <br/>  Debian 12 带来了数千个新的和更新的软件包，支持多种桌面环境和处理器架构（包括 32 位和 64 位 PC、ARM、MIPS 和 PowerPC）。但是最大的变化之一是 Linux 内核从 5.10 版本升级到 6.1 LTS 版本。| |
|![Android](/img/sige/android.png) | Android14 for **CM7s-IO** :    <br/>最新的操作系统升级，让您的设备更加个性化、更安全、更易访问。照片质量提升、新主题和 AI 生成的壁纸。隐私更新，保护您的健康、安全和数据。并扩展了无障碍功能。||
|![ubuntu](/img/sige/ubuntu.png) | ubuntu22.04 for Sige5 :    <br/>Ubuntu 22.04，代号“Jammy Jellyfish”，是Canonical于2022年4月21日正式发布的版本.|   |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for CM7s:    <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  |   |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for CM7s :    <br/> 该项目旨在为Rockchip RK3588s设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。|     |

### 硬件资料

获取 CM7s 原理图、DXF等硬件资料

<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>
<br/>

<div class="cards">
    <a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📄</i>
            </div>
            <div class="content">
                <h2>CM7s SCH</h2>
            </div>
        </div>
</a>

<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>CM7s 2D</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📜</i>
        </div>
        <div class="content">
            <h2>CM7s SMD</h2>
        </div>
    </div>
</a>

<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📑</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
        </div>
    </div>
</a>
<a href="https://pan.baidu.com/s/1oJ6ivhdbvpFiVOSb_HLBQA?pwd=arms" class="card-link">
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

## 产品证书

### CE / FCC / RoHS

## 供货声明

ArmSoM-CM7s 将至少生产到 2034 年 8 月。

## 配件

我们为 ArmSoM-CM7s-IO 设计的官方配件旨在帮助您从计算机获得最佳性能。

<div class="cards">
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

<a href="./armsom-camera-module1" class="card-link">
<div class="card">
    <div class="card-image">
        <img src="./img/accessories/armsom-camera-module1-real.png" alt="Card Image"/>
    </div>
    <div class="card-content">
        <h2>Camera-module1</h2>
        <p>camera-module1适用OV13850，是低功耗相机模块</p>
    </div>
</div>
</a>
</div>

## 样品购买

<!-- ArmSoM 独立站: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256807679122184.html](https://aliexpress.com/item/3256807679122184.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=842137173767](https://item.taobao.com/item.htm?id=842137173767)

OEM&ODM,  请联系: sales@armsom.org -->

## 专家视角

<!-- - [itsfoss ArmSoM-CM5](https://itsfoss.com/armsom-cm5)：ArmSoM CM7s Powerful Replacement for Raspberry Pi CM4
- [Technically Unsure](https://www.youtube.com/watch?v=pfsBDO3XehA&list=PLtGrcSFVfrfRbFqx8nbtYvVVwbHp_Nza4)：ArmSoM CM5 | 能否超越树莓派 CM5？
- [Platima Tinkers](https://www.youtube.com/watch?v=p55ehXBBLPE)：ArmSoM CM5 评测：RK3576 计算模块，真正兼容 CM4
- [sbc compare](https://sbc.compare/83-armsom-cm5-8gb): CM5  Benchmark Comparison on sbc.compare -->

## 用户案例

<!-- - [edge machine learning](https://www.armsom.org/post/accelerating-conservation-science-with-armsom-cm5-som): edge machine learning -->


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