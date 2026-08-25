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

### ArmSoM CM5 vs 树莓派 CM5

### 产品框图

![ArmSoM-CM5-product](/img/cm/cm5-product.png)

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
            <th><li>RockChip RK3576</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3576 四核 Cortex-A72@ 2.2GHz 和四核 Cortex-A53@ 1.8GHz，8纳米制程</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali G52 MC3 GPU</li><li>完全兼容 OpenGL ES 1.1、2.0 和 3.2、OpenCL 高达 2.0 和 Vulkan 1.1。带有 MMU 的专用 2D 硬件引擎将最大限度地提高显示性能并提供非常流畅的操作。</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8</li><li>支持 INT4,INT8, INT16, FP16, BF16 and TF32 混合运算</li><li>支持深度学习框架：TensorFlow、Caffe、Tflite、Pytorch、Onnx NNAndroid NN等。</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps，高质量JPEG解码器最高4K@60fps。</li><li>硬编码：支持H.264和H.265，JPEG最高4K@60fps</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>ISP，1600万像素</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>8GB/16GB（最高可配 16GB ）32bit LPDDR5，默认LPDDR5 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32/64/128GB eMMC，默认eMMC 64GB</li><li>支持MicroSD卡扩展</li><li>M.2 M-KEY Socket：PCIe2.1 NVMe SSD</li></th>
        </tr>
        <tr>
            <th>显示</th>
            <th><li>1x HDMI OUT2.1，支持 4K@120fps</li><li>1x MIPI DSI 分辨率最高可达 2K@60fps</li><li>1x DP1.4 分辨率最高可达 4K@120fps</li></th>
        </tr>
        <tr>
            <th>摄像头</th>
            <th><li>1x 4Lanes MIPI CSI，每线最高 2.5Gbps</li><li>1x 2Lanes MIPI CSI，每线最高 2.5Gbps</li></th>
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
            <th><li>1x USB 3.0</li><li>1x USB 2.0</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>SPDIF_Tx x1</li><li>AUDIO_R/L x1</li><li>i2s x1</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1</li><li>FAN x1</li><li>RTC x1</li></th>
        </tr>
    </tbody>
</table>

### RK3576框图
<details>
    <summary>
        RK3576 框图
    </summary>
    <img
  src="./img/sige/rk3576.png"
  alt="rk3576 block diagram"
  className="session-details-live-video"/>
</details>

### 引脚定义

![ArmSoM-cm5-pinlist](/img/cm/cm5-pinlist.png)

<a href="https://pan.baidu.com/s/1Cl3m1eBwcBnNsEkdmXg7GA?pwd=hv4b" class="btn">
  <span>ArmSoM-CM5&raspberrypi-CM4&BPI-CM4 Pinlist对比表</span>
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
            <h2>CM5 kernel</h2>
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
            <h2>CM5 uboot</h2>
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

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤📤

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for **CM5-IO** :  <br/>  Debian 12 带来了数千个新的和更新的软件包，支持多种桌面环境和处理器架构（包括 32 位和 64 位 PC、ARM、MIPS 和 PowerPC）。但是最大的变化之一是 Linux 内核从 5.10 版本升级到 6.1 LTS 版本。| **CM5-IO**:[百度网盘](https://pan.baidu.com/s/1MOrCsh5ef4wPTUN4a_WQMQ?pwd=iukg)    <br/>  **CM5-RPI-CM4-IO**:[百度网盘](https://pan.baidu.com/s/1reSm5fJcRUF2dfGDX3XQLw?pwd=arms) |
|![Android](/img/sige/android.png) | Android14 for **CM5-IO** :    <br/>最新的操作系统升级，让您的设备更加个性化、更安全、更易访问。照片质量提升、新主题和 AI 生成的壁纸。隐私更新，保护您的健康、安全和数据。并扩展了无障碍功能。| [百度网盘](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms)  |
|![ubuntu](/img/sige/ubuntu.png) | ubuntu22.04 for Sige5 :    <br/>Ubuntu 22.04，代号“Jammy Jellyfish”，是Canonical于2022年4月21日正式发布的版本.| [百度网盘](https://pan.baidu.com/s/1H4_mkVE4jwSK6ufP5MRpbQ?pwd=arms)  |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for CM5:    <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  | **CM5-IO**:[armbian image](https://github.com/armbian/community/releases)   <br/>  **CM5-RPI-CM4-IO**:[armbian image](https://github.com/armbian/community/releases) |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for CM5 :    <br/> 该项目旨在为Rockchip RK3588设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。| [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### 硬件资料

<a href="https://pan.baidu.com/s/17kzaNI43PizM5xRj95umLQ?pwd=a61j" class="btn">
  <span>CM5 硬件资料</span>
</a>
<br/>

[ArmSoM-CM5 引脚功能表格](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms) - 引脚功能表格下载

<div class="cards">
    <a href="https://pan.baidu.com/s/1Ks4Fmj5Vc8iW1p88cYt0ug?pwd=7k8h" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>CM5</h2>
                <p>SCH,2D</p>
            </div>
        </div>
    </a>
    <a href="https://pan.baidu.com/s/1GEicsdw1GANgWJBXLiyTdg?pwd=wfxn" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📗</i>
            </div>
            <div class="content">
                <h2>CM5-IO</h2>
                <p>SCH,PCB,2D,SMD</p>
            </div>
        </div>
</a>
<a href="https://pan.baidu.com/s/1HJdf25HnlB-lZjcKeHs7rQ?pwd=643d" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>Datasheet</h2>
            <p>ic,connector datasheet</p>
        </div>
    </div>
</a>
</div>

## 产品证书

### CE / FCC / RoHS

## 供货声明

ArmSoM-CM5 将至少生产到 2034 年 8 月。

## 配件

我们为 ArmSoM-CM5-IO 设计的官方配件旨在帮助您从计算机获得最佳性能。

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

ArmSoM 独立站: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM 速卖通官方店: [https://aliexpress.com/item/3256807679122184.html](https://aliexpress.com/item/3256807679122184.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=842137173767](https://item.taobao.com/item.htm?id=842137173767)

OEM&ODM,  请联系: sales@armsom.org

## 专家视角

- [itsfoss ArmSoM-CM5](https://itsfoss.com/armsom-cm5)：ArmSoM CM5 Powerful Replacement for Raspberry Pi CM4
- [Technically Unsure](https://www.youtube.com/watch?v=pfsBDO3XehA&list=PLtGrcSFVfrfRbFqx8nbtYvVVwbHp_Nza4)：ArmSoM CM5 | 能否超越树莓派 CM5？
- [Platima Tinkers](https://www.youtube.com/watch?v=p55ehXBBLPE)：ArmSoM CM5 评测：RK3576 计算模块，真正兼容 CM4
- [sbc compare](https://sbc.compare/83-armsom-cm5-8gb): CM5  Benchmark Comparison on sbc.compare

## 用户案例

- [edge machine learning](https://www.armsom.org/post/accelerating-conservation-science-with-armsom-cm5-som): edge machine learning


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