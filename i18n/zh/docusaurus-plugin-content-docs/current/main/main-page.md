---
sidebar_label: "🏠 首页"
title: "ArmSoM 开源硬件开发者中心"
sidebar_position: 1
slug: /
---

:::tip
[欢迎阅读 RK3588AI Module7 文档！RK3588AI Module7 目前处于众筹预热阶段。请关注我们的众筹活动，获取最新动态！](https://www.crowdsupply.com/armsom/rk3588-ai-module7)
:::

ArmSoM 是一个开源硬件品牌，我们承诺为开源社区提供一流的硬件、强大的固件和详尽的文档。在秉承开源价值观的同时，ArmSoM 还提供可定制且可靠的 ODM 解决方案，以满足全球业务的需求。

![ArmSoM Open source ](/img/banana.jpg)

- 提供基于ARM架构的 **[单板计算机](#sige系列单板计算机)**
- 提供 **[模块化核心板](#模块化核心板和载板)** 和载板，帮助客户快速开发高性能硬件
- 致力于开放生态，支持 **开源硬件与操作系统**

ArmSoM 提供了丰富而完善的开源资源，包括产品手册、系统源代码、硬件原理图、封装库，以及多种高质量的 Linux 开发教程。无论是初学者还是资深开发者，都能从中受益：  

- **初学者**：通过清晰易懂的教程，快速掌握嵌入式开发的基本知识，并独立完成项目开发。
- **资深开发者**：借助完善的文档和工具，高效开展产品二次开发，显著缩短研发周期。

## ArmSoM 平台路线图

![ArmSoM Platform Roadmap](/img/armsom-platform-roadmap.png)  

## ArmSoM 产品介绍

### Sige系列单板计算机 

**Sige (Small, Intelligent, Greatly Efficient)** 系列凭借高性能、丰富接口和开源支持，成为个人、家庭和企业开发与应用的理想选择。

1. **个人与家庭场景**：支持编程学习、教育平台搭建。

2. **服务器与网络应用**：私有云存储、软路由、NAS 文件管理、轻量级 Web 服务部署,支持低功耗、高性能的本地数据处理需求。  

3. **工业与商业项目**：电子广告牌、自动售货机、机器人、无人机的智能控制、工厂自动化系统、传感器数据采集和处理。  

4. **开发与教育**：帮助开发者快速完成项目验证，缩短研发周期，为编程学习者和高校科研项目提供实用开发板。  

5. **开源硬件创新** ：适用于电子爱好者和创客，实现 IoT 和 AI 相关的个人或实验性设计。  

|[ArmSoM-Sige1](./armsom-sige1)  <br/>[Rockchip RK3528]|[ArmSoM-Sige3](./armsom-sige3) <br/> [Rockchip RK3568B2]|[ArmSoM-Sige5](./armsom-sige5) <br/> [Rockchip RK3576]|[ArmSoM-Sige7](./armsom-sige7)  <br/>[Rockchip RK3588]|
| --------- | ----- | --- |--- |
|![armsom-sige1](/img/sige/armsom-sige1.png)|![arsmom-sige3](/img/sige/armsom-sige3.png)|![arsmom-sige5](/img/sige/armsom-sige5.png)|![arsmom-sige7](/img/sige/armsom-sige7.png)|

<details>
    <summary>
        Sige7/5/3/1规格比较
    </summary>

|        | Sige7  | Sige5 | Sige3 |Sige1 |
| --------- | ----- | --- |--- | --- | 
| SoC Process | 8nm | 8nm | 22nm | 28nm |  
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3568B2 <br/> Cortex-A55 x4 up to 2.0GHz | Rockchip RK3528 <br/> Cortex-A53 x4 up to 2.0GHz | 
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

### 模块化核心板和载板

ArmSoM 提供模块化核心板与灵活的载板设计，旨在帮助客户快速开发高性能硬件解决方案。核心板集成了处理器、存储等关键硬件，载板则提供丰富的接口与扩展功能，满足多种应用场景需求。

|[ArmSoM-CM5](./armsom-cm5) <br/>[Rockchip RK3576]|[ArmSoM-AIM5](./armsom-aim5) <br/> [Rockchip RK3576]|[ArmSoM-AIM7](./armsom-aim7) <br/> [Rockchip RK3588]|[ArmSoM-LM7](./armsom-lm7)  <br/>[Rockchip RK3588]|
| --------- | ----- | --- |--- |
|![armsom-cm5](/img/cm/armsom-cm5.png)|![arsmom-aim5](/img/aim/armsom-aim5.png)|![ArmSoM-AIM7](/img/aim/armsom-aim7.png)|![arsmom-lm7](/img/lm/armsom-lm7.png)|

|[ArmSoM-CM5-IO](./armsom-cm5-io)  [CM5 Maker kit]|[ArmSoM-AIM-IO](./armsom-aimio) [AIM Maker kit]|[ArmSoM-W3](./armsom-w3)  [LM7 Maker kit]||
| --------- | ----- | --- |
|![armsom-cm5-io](/img/cm/armsom-cm5-io.png)|![armsom-aim-io](/img/aim/armsom-aim-io.png)|![arsmom-w3](/img/lm/armsom-w3.png)|

#### 工业级模块化核心板和载板
| [ArmSoM-CM1](./armsom-cm1)| 
|---------|
|![armsom-cm1](/img/cm/armsom-cm1-io.png)|

通过这种模块化设计，客户可以:
- **加速开发**：专注于应用开发而无需从零设计硬件，缩短研发周期。  
- **降低成本**：模块化架构便于核心板与载板复用，有效减少开发和生产成本。  
- **灵活适配**：载板支持多种功能扩展，适配不同项目需求，易于迭代升级。  

这种组合方式特别适合嵌入式开发、物联网设备、工业控制等领域，让用户轻松打造高性能硬件产品。

### Forge系列工业开发板

**“Forge”一词源自“锻造”**，它象征着创造与改造，是经过时间和力量的积淀，锻造出坚固、耐用的工艺品。Forge系列的诞生，正是为了以工业级标准，**锻造出更加耐用且可持续的硬件解决方案**。

> ✅我们团队在长期与工业客户的互动中，了解了他们对产品的高要求，特别是在环境恶劣、长时间运行、极端条件下仍需保持稳定性的需求。因此，ArmSoM-Forge 系列专注于将 ArmSoM 的创新技术，注入更高标准的工业设计中，保证每一款产品都能在挑战性的应用环境中表现出色。

| [ArmSoM-Forge1](./armsom-forge1)| 
|---------|
|![armsom-forge1](/img/forge/armsom-forge1.png)|

### 配件

ArmSoM 提供了丰富的硬件扩展配件，包括显示模块、摄像头模块、定制外壳及主动散热解决方案，同时兼容树莓派 40Pin GPIO 接口的部分外设资源，为开发者构建多样化应用场景提供了强有力的支持。  

| [ArmSoM Display 10 HD](./armsom-display-10-hd)| [ArmSoM Display 7 HD](./armsom-display-7-hd)| [ArmSoM Camera module 1](./armsom-camera-module1)| [Active Cooling Kit](./sige-active-cooling-kit) | [Sige Diy Case 1](./sige-diy-case1)  |
|---------|---------|---------|---------|---------|
|![armsom-display-10hd](/img/accessories/armsom-display-10hd.png)|![armsom-display-10hd](/img/accessories/armsom-display-10hd.png)|![armsom-aim-io](/img/accessories/armsom-camera-module1-real.png)|![armsom-display-10hd](/img/accessories/sige-active-cooling-fan-real.png)|![arsmom-w3](/img/accessories/sige-diy-case.png)| 


通过这些配件，帮助用户：  
- **快速原型设计**：即插即用的配件简化了系统集成流程，提升开发效率。
- **生态兼容性**：兼容树莓派 40Pin 接口的部分配件，使开发者能够利用成熟的外设生态，降低设计与开发成本。  

这一系列专业配件和接口支持，为 ArmSoM 产品为客户提供了非常丰富的解决方案。

### 产品目录表

| Sige系列单板计算机 | 模块化核心板和载板 | IoT/Industrial Control | 配件 |
|---------|--------------|--------------|---------|
|[ArmSoM-Sige1](./armsom-sige1)  [Rockchip RK3528]|[ArmSoM-CM5](./armsom-cm5)  [Rockchip RK3576] <br/> [ArmSoM-CM5-IO](./armsom-cm5-io)  [CM5 Maker kit]|[ArmSoM-Forge1](./armsom-forge1)  [Rockchip RK3506J] | [display-10-hd](./armsom-display-10-hd)|
|[ArmSoM-Sige3](./armsom-sige3)  [Rockchip RK3568B2]|[ArmSoM-AIM5](./armsom-aim5)  [Rockchip RK3576] <br/> [ArmSoM-AIM-IO](./armsom-aimio)  [AIM Maker kit]|[ArmSoM-P2pro](./armsom-p2pro)  [Rockchip RK3308] | [Camera-Module-1](./armsom-camera-module1)	|
|[ArmSoM-Sige5](./armsom-sige5)  [Rockchip RK3576]|[ArmSoM-AIM7](./armsom-aim7)  [Rockchip RK3588] <br/> [ArmSoM-AIM-IO](./armsom-aimio)  [AIM Maker kit]| [ArmSoM-KVM](./armsom-kvm)  [Rockchip RK3568B2] | [Active Cooling Kit](./sige-active-cooling-kit) |
|[ArmSoM-Sige7](./armsom-sige7)  [Rockchip RK3588]|[ArmSoM-LM7](./armsom-lm7)  [Rockchip RK3588]<br/> [ArmSoM-W3](./armsom-w3)  [LM7 Maker kit]| |  [Sige Diy Case 1](./sige-diy-case1)  |

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
