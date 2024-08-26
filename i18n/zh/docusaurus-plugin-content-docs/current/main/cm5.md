---
description: ArmSoM-CM5
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "CM5"
sidebar_position: 5
slug: /armsom-cm5
---

# ArmSoM-CM5 产品简介

让我们在 5 分钟内了解 ArmSoM-CM5

## 简介

ArmSoM-CM5 是一款计算机模块，采用Rockchip RK3576第二代8nm高性能AIOT平台，集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器，6 TOPS算力NPU，最大可配16GB大内存。支持4K视频编解码，拥有丰富的接口，支持多种操作系统。

### 关键参数

- SOC：瑞芯微 RK3576
- CPU：集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器。
- GPU：ARM Mali G52 MC3 GPU。
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算。
- VPU/编解码：
  - 硬解码：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps,高质量JPEG解码器最高4K@60fps。
  - 硬编码：支持H.264和H.265，JPEG最高4K@60fps。
- RAM：8/16GB 32bit LPDDR5，默认8GB，RK3576 最大支持16GB。
- Flash：32/64/128GB eMMC，默认eMMC 64GB。
- 工作电压：具有宽范围的输入电压，从4.5V到23V（电压误差±5%）
- 工作温度：0℃ ~ 80℃
- 重量：12g
- 尺寸：
    - CM5: 55 x 40 毫米
    - CM5-IO: 100 x 80 x 29 毫米 (3.94 x 3.15 x 1.14 英寸)

## Getting started

<a href="./armsom-cm5#使用手册" class="card-link">
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

:::tip
- 设计为板对板连接器
- 由于 RK3576 芯片 PIN 限制，仅支持 1 HDMI 和 1 DSI，Raspberry Pi CM4 多支持 2 HDMI、2 DSI
- AmrSoM-CM5 比 Raspberry Pi CM4 多一组PCIE，USB3

您可以使用 Raspberry Pi CM4 底板。
:::


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
              <li>支持 10/100/1000Mbps 数据传输速率</li>
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
            <th ><li>UART DEBUG x1</li><li>FAN x1</li><li>RTC x1</li>s</th>
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

## 开发资料

<div class="cards">
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

### 官方镜像

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12.png) | debian12 for CM5-IO :  <br/>  Debian 12 带来了数千个新的和更新的软件包，支持多种桌面环境和处理器架构（包括 32 位和 64 位 PC、ARM、MIPS 和 PowerPC）。但是最大的变化之一是 Linux 内核从 5.10 版本升级到 6.1 LTS 版本。| [百度网盘](https://pan.baidu.com/s/1jMlQQxMsChx7wVuT5_koSQ?pwd=arms)  |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.webp) | Armbian for CM5 :    <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  | [armbian image](https://github.com/armbian/community/releases)     |
|![Joshua Riek](https://avatars.githubusercontent.com/u/10427125?v=4)          | ubuntu-rockchip for CM5 :    <br/> 该项目旨在为Rockchip RK3588设备提供默认的Ubuntu体验。立即开始，选择适合的Ubuntu服务器或桌面镜像，享受熟悉的环境。| [ubuntu-rockchip image](https://github.com/Joshua-Riek/ubuntu-rockchip/releases)      |

### 硬件资料

获取开发套件原理图、PCB、DXF等硬件资料，快速投入开发

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms" class="btn">
  <span>百度网盘链接</span>
</a>

<br/>

<div class="cards">
    <a href="https://pan.baidu.com/s/1jpJ8Euc7uwz3x871T77zFg?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>CM5 Schematics</h2>
            </div>
        </div>
    </a>
</div>

## 产品证书

### CE / FC / RoHS

## 供货声明

ArmSoM-CM5 将至少生产到 2034 年 8 月。

## 样品购买

ArmSoM 独立站: [https://www.armsom.org/product-page/cm5](https://www.armsom.org/product-page/cm5)

ArmSoM 速卖通官方店: 

ArmSoM 淘宝官方店: 

OEM&ODM,  请联系: sales@armsom.org
