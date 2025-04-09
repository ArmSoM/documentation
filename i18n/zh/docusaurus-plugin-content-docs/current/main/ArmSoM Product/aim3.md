---
description: ArmSoM-AIM3
keywords: [armsom, armsom-aim3, RK3576核心板, rockchip]
sidebar_label: "AIM3"
sidebar_position: 3
slug: /armsom-aim3
---

# AIM3 产品简介

## 简介
ArmSoM-AIM3是一款定位中高端的通用型S0C，是一款高性能低功耗四核应用处理器，采用22nm制程工艺，CPU 采用了先进的 ARM Cortex-A55 架构，集成了强大的图像处理单元（GPU），支持高清视频解码和编码，支持4K解码和1080P编码，可用于轻量级人工智能应用

### 关键参数

- SOC：瑞芯微 RK3568
- CPU：四核Cortex-A55 @ 2GHz
- GPU：ARM Mali G52
- NPU：NPU 支持 INT8/INT16/FP16/BFP16，计算能力高达 1TOPs@INT8
- VPU/编解码：
  - 硬解码：H.265/VP9 (HEVC) 硬件解码（最高 4Kp60）
  - 硬编码：H.264 硬件解码（最高 1080p60）
- RAM：2/4/8 GB 32bit LPDDR4x，默认4GB
- Flash：8/16/32/64 GB eMMC，默认eMMC 32GB
- 工作电压：具有宽范围的输入电压，从4.5V到18V（电压误差±5%）
- 工作温度：0℃ ~ 60℃
- 操作系统：
  - Rockchip官方支持：Android 12，Debian11，Buildroot
  - 第三方支持：Armbian
- 大小：92mm × 62mm x 14.6mm

## Getting started
<a href="./armsom-aimio#使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>AIM-IO使用手册</h2>
            <p>如何开始使用你的AIM-IO</p>
        </div>
    </div>
</a>

## 硬件信息

### 硬件接口

![ArmSoM-AIM3-a](/img/aim/aim3-a.png)
![ArmSoM-AIM3-b](/img/aim/aim3-b.png)


:::tip
AIM3所有引脚均与 NVIDIA Jetson TX2 &  NVIDIA Jetson Nano兼容，尺寸相同
:::

### 产品框图


### 硬件规格
<details>
    <summary>
        AIM3 硬件规格
    </summary>

<table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能</th>
      </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>显示</th>
            <th><li>1x DP interface</li><li>1x HDMI/eDP combo interface</li> <li>2-lane MIPI DSI 接口 </li></th>
        </tr>
        <tr>
            <th>摄像头</th>
            <th><li>2x 2-lane MIPI CSI 接口，每线最高 2.5Gbps</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th>
              <li>1路GMAC，提供 RGMII / RMII 接口引出</li>
              <li>支持 10/100/1000Mbps 数据传输速率</li>
            </th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>PCIe 2.0 x2: 每 PCIe2.1 接口支持 1lane，最高支持 5Gbps 数据速率</li>
            <li>支持 10/100/1000Mbps 数据传输速率</li>
            </th>
        </tr>
         <tr>
            <th>USB</th>
            <th><li>1x USB 3.0 (Gen1)</li><li>3x USB 2.0</li></th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1, UART+flow control x2</li><li>SPI x2</li><li>I2C 1.8V x1，I2C 3.3V x3</li><li>can x1</li><li>I2S x2</li><li>SD 4.0, SDHOST 4.0, and SDIO 3.0</li><li>PWM x4, 多个 GPIO</li></th>
        </tr>
    </tbody>
</table>

</details>

### 竞品规格参数对比

## 开发资料

### SDK源码

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
            <h2>AIM3 kernel</h2>
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
            <h2>AIM3 uboot</h2>
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

ArmSoM团队以 Debian bullseye 为基础作为官方操作系统。[如何烧录系统镜像？](https://docs.armsom.org/zh/getting-start/flash-img)📤

以下系统已由ArmSoM官方测试验证：

网盘地址：
<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![debian-bullseye](/img/sige/debian12-1.png) | debian12 for AIM3 :  <br/>   Debian 11（代号为"Bullseye"）是Debian项目的最新稳定版本，它于2021年8月14日发布。Debian是一个以自由软件为基础的操作系统，以稳定性、安全性和开放性著称。| [百度网盘](https://pan.baidu.com/s/1d91E_Xv0huhvdhWVhN0JFA?pwd=arms)  |
|![Android](/img/sige/android.png) | Android12 for AIM3 :    <br/>最新的操作系统升级，让您的设备更加个性化、更安全、更易访问。照片质量提升、新主题和 AI 生成的壁纸。隐私更新，保护您的健康、安全和数据。并扩展了无障碍功能。|   |

### 第三方镜像

| logo  | Description  | Download|
|:--------: | :---------: | :--------:  | 
|![armbian-logo](/img/armbian-logo.png) | Armbian for AIM3 :    <br/>  Armbian 是一个计算构建框架，允许用户根据各种单板计算机的可变用户空间配置创建带有工作内核的即用镜像。它为一些支持的单板计算机提供各种预构建镜像，通常基于 Debian 或 Ubuntu。  | [armbian image](https://github.com/armbian/community/releases)     |

### 硬件资料

获取开发套件原理图、PCB、DXF等硬件资料，快速投入开发

<a href="https://pan.baidu.com/s/14qfAZM3QqgJPuFVjKRSBUw?pwd=arms " class="btn">
  <span>百度网盘链接</span>
</a>

<br/>

<div class="cards">
    <a href="https://pan.baidu.com/s/1-DEu3MmXodcU8BqK9ksW8Q?pwd=arms" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📦</i>
            </div>
            <div class="content">
                <h2>AIM3 Schematics</h2>
            </div>
        </div>
    </a>

<a href="https://pan.baidu.com/s/1p-ajkk5ebjpczLOyTWnKKA?pwd=arms" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📃</i>
        </div>
        <div class="content">
            <h2>AIM3 2D</h2>
        </div>
    </div>
</a>

</div>

## 产品证书

### CE / FC / RoHS

## 供货声明

ArmSoM-AIM3 将至少生产到 2034 年 8 月。

## 样品购买

ArmSoM 独立站: 

ArmSoM 速卖通官方店: 

ArmSoM 淘宝官方店: 

OEM&ODM,  请联系: sales@armsom.org

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