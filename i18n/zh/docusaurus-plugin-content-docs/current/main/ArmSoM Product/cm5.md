---
description: ArmSoM-CM5 是一款计算机模块，采用Rockchip RK3576第二代8nm高性能AIOT平台，集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器，6 TOPS算力NPU，最大可配16GB大内存。支持4K视频编解码，拥有丰富的接口，支持多种操作系统。
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "CM5"
sidebar_position: 5
slug: /armsom-cm5
image: /img/cm/cm5.png
---

# ArmSoM-CM5 产品简介

让我们在 5 分钟内了解 ArmSoM-CM5

## 简介

ArmSoM-CM5 是一款计算机模块，采用Rockchip RK3576第二代8nm高性能AIOT平台，集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器，6 TOPS算力NPU，最大可配16GB大内存。支持4K视频编解码，拥有丰富的接口，支持多种操作系统。

![ArmSoM-CM5](/img/cm/cm5.png)

:::tip Rockchip RK3576
- [ArmSoM-Sige5](./armsom-sige5) 单板计算机;
- [ArmSoM-CM5](./armsom-cm5) RK3576 CM5计算模组, [ArmSoM-CM5-IO](./armsom-cm5-io) CM5配套IO板;

依托强大的生态系统以及各式各样的扩展配件，ArmSoM 可以帮助用户轻松实现从创意到原型再到批量生产的交付，是创客、梦想家、业余爱好者的理想创意平台。
:::

:::tip
armsom-cm5v1.1 第21pin 不工作，将在下个v1.2 版本修复
:::

### 关键参数

- **SOC**：瑞芯微 RK3576
- **CPU**：集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器。
- **GPU**：ARM Mali G52 MC3 GPU。
- **NPU**：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算。
- **VPU/编解码**：
  - **硬解码**：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps,高质量JPEG解码器最高4K@60fps。
  - **硬编码**：支持H.264和H.265，JPEG最高4K@60fps。
- **RAM**：8/16GB 32bit LPDDR5，默认8GB，RK3576 最大支持16GB。
- **Flash**：32/64/128GB eMMC，默认eMMC 64GB。
- **WIFI/BT**:  板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5.3 [syn43752](https://www.synaptics.com/products/wireless/syn43752-wi-fi-bluetooth-combo)
- **工作电压**：具有宽范围的输入电压，从 5V到23V（电压误差±5%）
- **工作温度**：0℃ ~ 80℃
- **重量**：12g
- **pcb**: 10层2阶
- **尺寸**：
    - CM5: 55 x 40 x 4.9 毫米
    - CM5-IO: 100 x 80 x 29 毫米 (3.94 x 3.15 x 1.14 英寸)

## 使用手册

<a href="./armsom-cm5-io#使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>CM5使用手册</h2>
            <p>如何开始使用你的CM5</p>
        </div>
    </div>
</a>

## 硬件信息

### 硬件接口

![ArmSoM-CM5-front & back](/img/cm/armsom-cm5-front&back1.jpg)
![ArmSoM-CM5-rpi-cm4-io](/img/cm/cm5-rpi-cm4-io.png)

:::tip
- 设计为板对板连接器
- 由于 RK3576 芯片 PIN 限制，仅支持 1 HDMI 和 1 DSI，Raspberry Pi CM4 多支持 2 HDMI、2 DSI
- AmrSoM-CM5 比 Raspberry Pi CM4 多一组PCIE，USB3

您可以使用 Raspberry Pi CM4 底板。
:::

### ArmSoM CM5 vs 树莓派 CM4
以下是 ArmSoM CM5 和 树莓派 CM4 的规格对比表格：

| 规格                   | ArmSoM CM5                        | 树莓派 CM4                     |
|------------------------|----------------------------------|--------------------------------|
| **处理器**             | **RK3576 SoC**                      | Broadcom BCM2711               |
| **CPU架构**            | **四核 ARM Cortex-A72 & 四核Cortex-A53** | 四核 ARM Cortex-A72            |
| **GPU**                | **ARM Mali G52 MC3 GPU**                        | VideoCore VI                   |
| **内存**               | **最高支持 16GB LPDDR5**             | 1GB、2GB、4GB、8GB LPDDR4       |
| **存储**               | eMMC 存储（可选容量）            | 无内置存储，支持microSD卡       |
| **显示输出**           | 1x HDMI 2.1, 1x DP               | 2x HDMI 2.0                    |
| **视频分辨率**         | **支持4K@120fps**                     | 支持4K@30fps                   |
| **网络接口**           | 1x 千兆以太网接口                 | 1x 千兆以太网接口               |
| **USB接口**            | **1x USB3.0，1x USB2.0**          | 1xUSB2.0       |
| **GPIO**               | 40针 GPIO                        | 40针 GPIO                      |
| **扩展性**             | **2x PCIE/SATA/USB30_SS**           | 1x PCIe 2.0         |
| **相机接口**           | 1x 4通道 MIPI CSI, 1x 2通道 MIPI CSI | 1x 4通道 MIPI CSI, 1x 2通道 MIPI CSI                   |
| **显示接口**           | 1x 4通道 MIPI DSI                | 2x 4通道 MIPI DSI                    |
| **电源输入**           | 5V                | 5V                          |
| **尺寸**               | 55mm x 40mm                      | 55mm x 40mm                    |
| **操作系统支持**       | Debian, Android, Ubuntu, Armbian等         | Raspberry Pi OS, Ubuntu, 其他  |
| **主要用途**           | AI 开发、嵌入式系统、工业控制、DIY 项目、教育、物联网    | DIY 项目、教育、物联网等       |

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
            <th><li>32/64/128GB eMMC，默认eMMC 64GB</li><li>支持MicroSD卡扩展</li></th>
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

![ArmSoM-cm5-pinlist-1](/img/cm/cm5-pinlist-1.png)
![ArmSoM-cm5-pinlist-2](/img/cm/cm5-pinlist-2.png)

<a href="https://pan.baidu.com/s/1Cl3m1eBwcBnNsEkdmXg7GA?pwd=hv4b" class="btn">
  <span>ArmSoM-CM5&raspberrypi-CM4&BPI-CM4 Pinlist对比表</span>
</a>
<br/>

## 开发资料

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
            <h2>CM5 kernel</h2>
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
            <h2>CM5 uboot</h2>
            <p>rockchip-linux/u-boot</p>
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
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for **CM5-IO** :  <br/>  Debian 12 带来了数千个新的和更新的软件包，支持多种桌面环境和处理器架构（包括 32 位和 64 位 PC、ARM、MIPS 和 PowerPC）。但是最大的变化之一是 Linux 内核从 5.10 版本升级到 6.1 LTS 版本。| **CM5-IO**:[百度网盘](https://pan.baidu.com/s/1MOrCsh5ef4wPTUN4a_WQMQ?pwd=iukg)    <br/>  **CM5-RPI-CM4-IO**:[百度网盘](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms) |
|![Android](/img/sige/android.png) | Android14 for **CM5-IO** :    <br/>最新的操作系统升级，让您的设备更加个性化、更安全、更易访问。照片质量提升、新主题和 AI 生成的壁纸。隐私更新，保护您的健康、安全和数据。并扩展了无障碍功能。| [百度网盘](https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms)  |

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

[ArmSoM-CM5 引脚功能表格](https://pan.baidu.com/s/1ZGnyvCLyr8PhN7--xndwqw?pwd=8a1a) - 引脚功能表格下载

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