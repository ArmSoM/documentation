---
sidebar_label: "🏠 首页"
title: "ArmSoM 开源硬件开发者中心"
description: "ArmSoM 官方开发者文档，提供 Rockchip 单板计算机、核心板与载板的产品规格、Linux 镜像、硬件资料和嵌入式开发教程。"
keywords: [ArmSoM, Rockchip开发板, 单板计算机, 核心板, RK3588, RK3576, 嵌入式Linux, RKNN]
image: /img/armsom-social-card.png
sidebar_position: 1
slug: /
---

<section class="armsom-hero">
  <div class="armsom-hero__copy">
    <p class="armsom-eyebrow">开源硬件 · 嵌入式 AI · ROCKCHIP</p>
    <h1>更快构建下一代嵌入式产品</h1>
    <p class="armsom-hero__lead">探索 Rockchip 单板机、核心板、Linux 镜像与工程实践文档，从首次启动到量产硬件开发。</p>
    <div class="armsom-hero__actions"><a class="armsom-button armsom-button--primary" href="#选择适合的-armsom-平台">选择开发平台 <span>→</span></a><a class="armsom-button armsom-button--secondary" href="./getting-start/cloud-disk">开始上手</a></div>
    <div class="armsom-proof"><span><strong>6 TOPS</strong> 边缘 AI</span><span><strong>8K</strong> 多媒体</span><span><strong>开放</strong> 硬件资料</span></div>
  </div>
  <div class="armsom-hero__visual"><img src="./img/banana.jpg" alt="ArmSoM 开源硬件平台" /></div>
</section>


## 选择适合的 ArmSoM 平台

<p class="armsom-section-lead">从你的项目目标出发。每个产品页面均提供规格、接口资料、软件资源与上手指引。</p>

<div class="armsom-choice-grid">
  <a class="armsom-choice-card" href="./armsom-sige7"><span class="armsom-choice-card__icon">✦</span><small>高性能平台</small><h3>Sige7 · RK3588</h3><p>边缘 AI、8K 多媒体、NAS 与高性能 Linux。</p><strong>6 TOPS · 双 2.5GbE →</strong></a>
  <a class="armsom-choice-card" href="./armsom-sige5"><span class="armsom-choice-card__icon">◈</span><small>均衡 AI</small><h3>Sige5 · RK3576</h3><p>适合 AI、网络与快速原型开发的实用平台。</p><strong>6 TOPS · Wi-Fi 6 →</strong></a>
  <a class="armsom-choice-card" href="./armsom-cm5"><span class="armsom-choice-card__icon">▣</span><small>定制硬件</small><h3>CM5 · RK3576</h3><p>核心板与载板分离设计，适用于量产产品开发。</p><strong>核心板 · 载板设计 →</strong></a>
  <a class="armsom-choice-card" href="./armsom-forge1"><span class="armsom-choice-card__icon">⌁</span><small>工业控制</small><h3>Forge1 · RK3506J</h3><p>工业 HMI、网关与长期稳定运行的控制系统。</p><strong>工业级平台 →</strong></a>
</div>

<div class="armsom-paths"><a href="#product-series"><strong>不知道选哪个系列？</strong><span>了解系列区别与选型建议 →</span></a><a href="#产品目录表"><strong>需要完整对比？</strong><span>浏览产品目录 →</span></a></div>

## 产品系列区别与选型 {#product-series}

先确定开发方式，再选择算力和接口。下表帮助你快速区分单板机、核心板与工业控制平台。

| 系列 | 产品形态 | 主要特点 | 适合的需求 |
| --- | --- | --- | --- |
| **Sige** | 单板计算机（SBC） | 计算与常用外设接口集成在一块板上 | 学习、快速原型、网络、多媒体及边缘 AI |
| **CM** | 板对板连接式核心板 | 紧凑模块搭配底板，便于定制接口与外形 | 嵌入式终端、定制硬件、产品量产 |
| **AIM** | 插槽式核心板 | 通过模块插槽连接底板，面向 AI 与多媒体应用；具体能力依型号而定 | 模块化设备、智能终端、机器视觉 |
| **LM** | LGA 焊接式核心板 | 焊接集成到底板，适合固定式硬件设计 | 深度定制、嵌入式量产设备 |
| **Forge** | 工业控制开发板 | 重点面向工业通信、控制和人机交互 | 工业网关、HMI、设备数据采集 |

这些是选型侧重点，不代表其他系列不能用于相同场景。工业温度、接口数量和系统支持应以具体型号及硬件版本为准。


<details>
<summary>CM、AIM、LM 怎么选？</summary>

三者都承载主要计算功能，关键差异在于**如何与底板连接，以及如何生产和维护**。

| 比较项 | CM | AIM | LM |
| --- | --- | --- | --- |
| 连接方式 | 板对板连接器 | 插槽式连接；AIM7 为 260-pin SO-DIMM | LGA 焊接；LM7 为 506Pin |
| 集成侧重点 | 紧凑尺寸与底板定制 | 模块插拔与结构固定 | 焊接集成与固定式产品设计 |
| 更换方式 | 断电后拆装模块，需考虑固定结构 | 断电后拆装模块，需考虑插槽与固定结构 | 需要焊接返修工艺 |
| 代表产品 | [CM1](./armsom-cm1)、[CM3](./armsom-cm3)、[CM5](./armsom-cm5)、[CM7S](./armsom-cm7s) | [AIM3](./armsom-aim3)、[AIM5](./armsom-aim5)、[AIM7](./armsom-aim7) | [LM7](./armsom-lm7) |

:::note 兼容性需要逐项确认
连接器外形相同不代表可以直接替换。更换核心板或使用第三方底板前，需要确认引脚定义、供电、机械尺寸、接口复用及软件适配。不同型号的 AI 能力也不能仅凭系列名称判断。
:::

</details>

<details>
<summary>核心板、底板与开发套件是什么关系？</summary>

- **核心板**：集成处理器、内存及存储等主要计算功能，具体配置依型号而定。
- **底板**：提供供电、接口引出和外设连接。
- **开发平台或套件**：核心板与配套底板组合，用于功能评估、软件开发及原型验证。购买时请确认套件实际包含的部件。

| 核心板 | 配套开发平台 | 用途 |
| --- | --- | --- |
| [CM1](./armsom-cm1) | [CM1-IO](./armsom-cm1-io) | 工业控制与接口验证 |
| [CM5](./armsom-cm5) | [CM5-IO](./armsom-cm5-io) | 嵌入式应用开发与底板设计参考 |
| [AIM7](./armsom-aim7) | [AIM-IO](./armsom-aimio) | AI、多媒体及外设功能验证 |
| [LM7](./armsom-lm7) | [W3](./armsom-w3) | 基于 LM7 的开发平台 |

**W3 是基于 LM7 的开发平台；IO 底板不是另一个计算性能等级。** 完成验证后，可以按产品需要设计专用底板。

</details>

<details>
<summary>Sige 系列内部如何选择？</summary>

| 型号 | 处理器 | 选型侧重点 |
| --- | --- | --- |
| [Sige1](./armsom-sige1) | Rockchip RK3528 | 入门级 Linux、基础网络与轻量应用 |
| [Sige3](./armsom-sige3) | Rockchip RK3568B2 | 通用嵌入式开发、网络与外设扩展 |
| [Sige5](./armsom-sige5) | Rockchip RK3576 | 通用计算与边缘 AI，配备 6 TOPS NPU |
| [Sige6](./armsom-sige6) | Allwinner A733 | 全志平台方案，结合其软件生态选型 |
| [Sige7S](./armsom-sige7s) | Rockchip RK3588S | 紧凑尺寸下的高性能计算与 AI |
| [Sige7](./armsom-sige7) | Rockchip RK3588 | 高性能与高速扩展，例如双 2.5G 网口、PCIe 3.0 存储 |

**型号数字不是跨平台性能排名。** Sige6 使用全志平台，不能简单视为 Sige5 与 Sige7 之间的性能档位；Sige7S 和 Sige7 应重点比较尺寸、网络与扩展接口。TOPS 是特定精度下的理论算力，实际 AI 性能取决于模型、算子支持、内存和部署方式。

</details>

<details>
<summary>工业与专用应用如何选择？</summary>

- **[Forge1](./armsom-forge1)**：基于 RK3506J，面向 HMI、工业网关和控制终端。提供 RS485、CAN 等接口，文档标注工作温度为 −40℃～85℃。
- **[P2pro](./armsom-p2pro)**：基于 RK3308，侧重音频接口、语音与物联网应用。
- **[KVM](./armsom-kvm)**：面向通过网络进行键鼠、视频访问及设备远程管理的专用场景。

</details>

<details>
<summary>从需求出发选型</summary>

1. **希望尽快运行应用**：先看 Sige；如果需求明确属于工业控制或远程运维，再看 Forge 或 KVM。
2. **需要定制尺寸、接口和外壳**：先选 CM、AIM 或 LM，再评估配套底板。
3. **确定计算需求**：核对 CPU、内存、AI 模型支持及视频处理能力。
4. **确认实际连接需求**：核对网口速率、USB 数量、摄像头、显示、PCIe 和工业通信接口。
5. **完成产品化检查**：确认系统镜像、驱动、功耗、散热、工作温度、机械结构和供货配置。

</details>

## ArmSoM 平台路线图

![ArmSoM Platform Roadmap](/img/armsom-platform-roadmap.png)

## ArmSoM 产品介绍

### Sige 系列单板计算机

**从软件开发到应用验证，一块板开始。** Sige 将处理器、内存和常用外设接口集成在单板上，适合希望快速启动系统、连接外设并运行应用的开发者。

- **学习与原型**：开展 Linux 开发、编程教学、传感器接入和应用验证。
- **网络与多媒体**：根据网口、存储和显示接口，选择适合网关、家庭服务器或数字标牌的型号。
- **边缘 AI**：根据模型需求选择带 NPU 的型号，并核对算子支持和部署工具。

Sige1、Sige3 面向入门与通用嵌入式开发；Sige5 兼顾通用计算与 AI；Sige6 提供全志 A733 平台选择；Sige7S 强调紧凑尺寸，Sige7 提供更多高速网络与存储扩展。

| [ArmSoM-Sige1](./armsom-sige1)<br/>Rockchip RK3528 | [ArmSoM-Sige3](./armsom-sige3)<br/>Rockchip RK3568B2 | [ArmSoM-Sige5](./armsom-sige5)<br/>Rockchip RK3576 |
| --- | --- | --- |
| ![ArmSoM Sige1](/img/sige/armsom-sige1.png) | ![ArmSoM Sige3](/img/sige/armsom-sige3.png) | ![ArmSoM Sige5](/img/sige/armsom-sige5.png) |

| [ArmSoM-Sige6](./armsom-sige6)<br/>Allwinner A733 | [ArmSoM-Sige7](./armsom-sige7)<br/>Rockchip RK3588 | [ArmSoM-Sige7S](./armsom-sige7s)<br/>Rockchip RK3588S |
| --- | --- | --- |
| ![ArmSoM Sige6](/img/sige/armsom-sige6.png) | ![ArmSoM Sige7](/img/sige/armsom-sige7.png) | ![ArmSoM Sige7S](/img/sige/armsom-sige7s.png) |

<details>
    <summary>
        Sige7s/7/6/5/3/1规格比较
    </summary>

|        | Sige7s |Sige7  | Sige6 |  Sige5 | Sige3 |Sige1 |
| --------- | --- | --- |--- | --- |  --- | --- |
| SoC Process | 8nm | 8nm | 12nm | 8nm | 22nm | 28nm |  
| CPU | Rockchip RK3588s <br/> Cortex-A76 x4 @ 2.4GHz and Cortex-A55 x4 @ 1.8GHz |  Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz | Allwinner A733 <br/> Cortex-A76 x2 @ 2.0GHz and Cortex-A55 x6 @ 1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3568B2 <br/> Cortex-A55 x4 up to 2.0GHz | Rockchip RK3528 <br/> Cortex-A53 x4 up to 2.0GHz | 
| GPU | ARM Mali-G610 MP4 |  ARM Mali-G610 MP4  | Imagination BXM-4-64 MC1 |ARM Mali G52 MC3 GPU | Arm Mali‑G52‑2EE | ARM Mali-450 GPU |
| NPU | 6 TOPS@INT8(3 NPU core) | 6TOPS@INT8(3 NPU core)  | 3 TOPS |6TOPS@INT8(2 NPU core) | 1TOP@INT8 | - |
| RAM |  2GB/4GB/8GB/16GB/32GB 64-bit LPDDR4x | 4GB/8GB/16GB/32GB 64-bit LPDDR4x | 2GB/4GB/6GB/8GB/12GB/16GB LPDDR5 | 4/8/16GB 32-bit LPDDR4x | 2/4GB 32-bit LPDDR4x |  2/4GB 32-bit LPDDR4x|
| eMMC| 32GB/64GB/128GB eMMC | 64GB/128GB eMMC | 32GB/64GB/128GB eMMC | 32/128GB eMMC| 32GB eMMC | 8 eMMC |
| TF Card | Molex Slot, Spec Version 2.x/3.x/4.x(SDSC/SDHC/SDXC) |  yes| yes| Yes| Yes |   Yes|
| Output | 1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 1280×800 <br/> 1x DP 1.4 up to 4K@60fps |  1x HDMI 2.1, supports 8K@60fps <br/> 1x MIPI DSI up to 4K@60fps <br/> 1x DP 1.4 up to 8K@30fps | 1x HDMI 2.0，supports 4K@60fps <br/> 1x MIPI DSI, up to 4K@60fps <br/> | 1x HDMI 2.1, supports 4K@120fps <br/> 1x MIPI DSI, up to 2K@60fps <br/>  1x DP1.4, up to 4K@120fps | 1x MIPI DSI up to 2K@60fps <br/> 1x HDMI OUT2.0, supports 4K@60fps |  1x HDMI OUT2.0b, supports 4K@60fps|
| Decoder | 8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8|   8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8|  H265/VP9/AVS2 4K@60fps <br/> H264 4K@30fps | H.264, H.265, VP9, AV1 and AVS2 etc. up to 8K@30fps or4K@120fps| 4KP60 H.265/H.264/VP9  |  H.265, H.264, AVS2 4K@60fps|
| Encoder | 8K@30fps H.265 / H.264 |  8K@30fps H.265 / H.264| 4K@30fps H264/H265  |H.264 and H.265 up to 4K@60fps| 1080P60 H.264/H.265 | H.264 and H.265 up to1080@60fps|
| Wi-Fi | AIC8800 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB |  AIC8800 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax |SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB |   SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs|
| PCIE | --- | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 2.1 1-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported |  --- |
| Ethernet |  1x Gigabit Ethernet | 2x 2.5G Ethernet |  1x Gigabit Ethernet |  2x Gigabit Ethernet| Gigabit Ethernet & 2.5G Ethernet| Gigabit Ethernet & 2.5G Ethernet|
| USB Host |  2x USB 3.0 & 2x USB 2.0 | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 3x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 1x USB 3.0 & 1x USB 2.0  | 2x USB 2.0|
| USB-C |  1x USB-C Power jack | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C (Power/OTG) | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG）| 1x USB-C Power jack & 1x USB3.0 OTG |  1x USB-C Power jack & 1x USB2.0 OTG|
| MIPI CSI/DSI | 1x 2-lane MIPI CSI <br/> 1x 2-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x 4-lane and 1x 2-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI  |   -|
| 40-PIN Header|  yes | yes |  yes |yes | yes | yes |
| LEDs | 2x LEDs | 2x LEDs | 2x LEDs | 2x LEDs |2x LEDs |  2x LEDs|
|Board Dimensions|  85 mm × 56 mm × 17 mm | 92mm × 62mm x 14.6mm | 89mm x 56mm x 21.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm |

</details>

### 模块化核心板和载板

**保留成熟的计算核心，定制自己的产品接口。** 核心板承担处理器、内存和存储等主要功能，载板负责供电和外设连接。可以先使用配套开发平台验证应用，再围绕产品尺寸、接口和安装方式设计专用载板。

- **CM 系列 · 紧凑的板对板连接**：适合定制终端和嵌入式设备，可按计算需求选择 CM1、CM3、CM5 或 CM7S。
- **AIM 系列 · 插槽式模块设计**：面向模块化智能设备与 AI、多媒体应用，提供 AIM3、AIM5、AIM7 等平台选择。
- **LM 系列 · LGA 焊接集成**：以 LM7 为代表，适合采用固定式核心板的产品设计，需要配套考虑焊接、测试与返修工艺。

CM5-IO、AIM-IO 与基于 LM7 的 W3 提供相应的开发和接口验证平台。核心板与载板搭配时，请核对具体型号的引脚、供电及软件支持。

| [ArmSoM-CM5](./armsom-cm5)<br/>Rockchip RK3576 | [ArmSoM-CM7S](./armsom-cm7s)<br/>Rockchip RK3588S | [ArmSoM-AIM5](./armsom-aim5)<br/>Rockchip RK3576 |
| --- | --- | --- |
| ![ArmSoM-CM5](/img/cm/armsom-cm5.png) | ![ArmSoM-CM7S](/img/cm/armsom-cm7s.png) | ![ArmSoM-AIM5](/img/aim/armsom-aim5.png) |

| [ArmSoM-AIM7](./armsom-aim7)<br/>Rockchip RK3588 | [ArmSoM-LM7](./armsom-lm7)<br/>Rockchip RK3588 | [CM7S + CM7S-IO](./armsom-cm7s)<br/>Rockchip RK3588S |
| --- | --- | --- |
| ![ArmSoM-AIM7](/img/aim/armsom-aim7.png) | ![ArmSoM-LM7](/img/lm/armsom-lm7.png) | ![CM7S + CM7S-IO](/img/cm/cm7s-with-carrier.png) |

| [ArmSoM-CM5-IO](./armsom-cm5-io)<br/>CM5 Maker kit | [ArmSoM-AIM-IO](./armsom-aimio)<br/>AIM Maker kit | [ArmSoM-W3](./armsom-w3)<br/>LM7 Maker kit |
| --- | --- | --- |
| ![ArmSoM-CM5-IO](/img/cm/armsom-cm5-io.png) | ![ArmSoM-AIM-IO](/img/aim/armsom-aim-io.png) | ![ArmSoM-W3](/img/lm/armsom-w3.png) |

#### 工业控制核心板

[CM1](./armsom-cm1) 基于 RK3506J，面向 HMI、设备控制与工业通信。搭配 [CM1-IO](./armsom-cm1-io) 可进行接口验证；需要集成到自己的设备时，可进一步设计专用载板。

| [ArmSoM-CM1](./armsom-cm1)<br/>RK3506J 核心板 | [ArmSoM-CM1-IO](./armsom-cm1-io)<br/>载板与 CM1 组合展示 |
| --- | --- |
| ![ArmSoM CM1 front and back](/img/cm/armsom-cm1-front&back1.jpg) | ![ArmSoM CM1-IO with CM1](/img/cm/armsom-cm1-io.png) |

### Forge 系列工业开发板

**围绕设备连接、控制和人机交互开展开发。** Forge 面向工业网关、HMI 和数据采集等场景，选型重点是通信接口、工作温度以及目标系统的软件支持。

[Forge1](./armsom-forge1) 采用 RK3506J，提供 RS485、CAN 等工业通信接口，文档标注工作温度为 −40℃～85℃。适合进行设备协议对接、显示交互和控制应用验证；需要定制硬件形态时，也可以评估同平台的 CM1 核心板。

| [ArmSoM-Forge1](./armsom-forge1)| 
|---------|
|![armsom-forge1](/img/forge/armsom-forge1.png)|

### 配件

**为开发板补齐显示、视觉、散热与结构配套。** 根据应用选择显示屏和摄像头，根据板型与负载选择散热套件和外壳，方便搭建可演示、可测试的原型。

连接前请核对支持的板型、接口定义、排线、供电与驱动。40Pin 外形相同不代表所有外设都能直接使用。

| [ArmSoM Display 10 HD](./armsom-display-10-hd)| [ArmSoM Display 7 HD](./armsom-display-7-hd)| [ArmSoM Camera module 1](./armsom-camera-module1)| [Active Cooling Kit](./sige-active-cooling-kit) | [Sige Diy Case 1](./sige-diy-case1)  |
|---------|---------|---------|---------|---------|
|![armsom-display-10hd](/img/accessories/armsom-display-10hd.png)|![ArmSoM Display 7 HD](/img/accessories/armsom-display-7hd.png)|![ArmSoM Camera Module 1](/img/accessories/armsom-camera-module1-real.png)|![armsom-display-10hd](/img/accessories/sige-active-cooling-fan-real.png)|![arsmom-w3](/img/accessories/sige-diy-case.png)|


### 产品目录表

| Sige系列单板计算机 | 模块化核心板和载板 | IoT/Industrial Control | 配件 |
|---------|--------------|--------------|---------|
|[ArmSoM-Sige1](./armsom-sige1)  [Rockchip RK3528]|[ArmSoM-CM5](./armsom-cm5)  [Rockchip RK3576] <br/> [ArmSoM-CM5-IO](./armsom-cm5-io)  [CM5 Maker kit]|[ArmSoM-Forge1](./armsom-forge1)  [Rockchip RK3506J] | [display-10-hd](./armsom-display-10-hd)|
|[ArmSoM-Sige3](./armsom-sige3)  [Rockchip RK3568B2]|[ArmSoM-AIM5](./armsom-aim5)  [Rockchip RK3576] <br/> [ArmSoM-AIM-IO](./armsom-aimio)  [AIM Maker kit]|[ArmSoM-P2pro](./armsom-p2pro)  [Rockchip RK3308] | [Camera-Module-1](./armsom-camera-module1)	|
|[ArmSoM-Sige5](./armsom-sige5)  [Rockchip RK3576]|[ArmSoM-AIM7](./armsom-aim7)  [Rockchip RK3588] <br/> [ArmSoM-AIM-IO](./armsom-aimio)  [AIM Maker kit]| [ArmSoM-KVM](./armsom-kvm)  [Rockchip RK3568B2] | [Active Cooling Kit](./sige-active-cooling-kit) |
|[ArmSoM-Sige6](./armsom-sige6)  [Allwinner A733]|[ArmSoM-LM7](./armsom-lm7)  [Rockchip RK3588]<br/> [ArmSoM-W3](./armsom-w3)  [LM7 Maker kit]| ---- | [Camera-Module-1](./armsom-camera-module1) |
|[ArmSoM-Sige7](./armsom-sige7)  [Rockchip RK3588]|[ArmSoM-CM7s](./armsom-cm7s)  [Rockchip RK3588s]| ---- |  [Sige Diy Case 1](./sige-diy-case1)  |
|[ArmSoM-Sige7s](./armsom-sige7s)  [Rockchip RK3588s]| ---- | ---- | ---- |

## 文档中心

在使用本文档的过程中，如果遇到相关问题，请通过 [论坛](http://forum.armsom.org/) 或者 [Discord](https://discord.gg/THfTEatpfK)，我们会第一时间回复。

### 加入社区

官方论坛: [ArmSoM Forum](http://forum.armsom.org/) - 主要技术支持渠道，中英文都支持。

Discord社群: [ArmSoM Discord](https://discord.gg/THfTEatpfK) - 经验丰富的用户和 ArmSoM 团队一定会为您提供帮助。

官方github账号: [ArmSoM Github](https://github.com/armsom)

### 联系我们

官方邮箱: sales@armsom.org

### 贡献力量

我们诚挚邀请大家为ArmSoM文档提供反馈、提交修复、丰富内容，展示您的创作。

### 关于我们

ArmSoM 诞生于一群充满活力的年轻开发者团队对开源创新与自由的共同热情，由他们于 2021 年创立。

公司最初成立于深圳，并计划在未来三年内将总部迁至新加坡，以吸引全球志同道合的人才。

### 样品购买
[ArmSoM 独立站](https://www.armsom.org/category/all-products) + [ArmSoM 速卖通官方店](https://www.aliexpress.com/store/1102800175) +  [ArmSoM 淘宝官方店](https://armsom.taobao.com/)
