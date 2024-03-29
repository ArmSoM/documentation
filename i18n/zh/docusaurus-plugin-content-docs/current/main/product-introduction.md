---
sidebar_position: 1
---

# 产品列表

## Sige 系列

### 应用场景

ArmSoM 推出的Sige系列产品（SBC），凭借它优越的性能以及稳定的硬件品质，覆盖创客DIY的落地、商业应用、工业控制等领域，具备广泛的应用场景：

* 单板计算机：办公、编程开发、家庭娱乐、编程教育等

* 嵌入式开发套件：激发你创客灵感，加速创意项目的验证及开发

* Linux服务器：私有云、软路由、NAS、个人WEB服务器等

* 智能家居控制中心：智能家居控制、传感器数据分析、安防监控等

### 开源资料

ArmSoM Sige系列产品开源资料的逐步完善中，涉及到多个方面，包括硬件资料，使用文档、示例代码、社区参与等：

* 硬件：提供原理图pdf文件、2D CAD 图、芯片datasheet，方便查看和理解产品的工作原理。

* 使用文档：提供一个简要的入门指南，介绍如何准备开发板、连接必要的电缆和外设，并启动开发环境。

* 示例代码：提供丰富的示例代码和用例，帮助创客更好地理解和使用。

* [ArmSoM 社区](http://forum.armsom.org/)参与：开源硬件促进了一个强大的社区，其中的成员可以共同合作，共享经验，解决问题。

提供完善的开源资料，包括但不限于产品简介、使用手册、硬件资料、通用教程等。帮助学生、爱好者和初学者能够深入了解产品，加速伟大灵感的实现。

### Sige 系列硬件对比

|型号名称 |   [ ArmSoM-Sige7 ](./sige7)|
| :--------: | :----------: | 
|缩略图   |  ![armsom-Sige7](/img/sige/sige7/armsom-sige7.png) |
| 主控 | RK3588 |
| RAM | LPDDR4x  |
| Flash |  eMMC  | 
| 以太网 | 2x 2.5GbE  | 
| WIFI/蓝牙 | ✅板载  | 
| USB接口 | ✅ USB3.0, USB2.0, 全功能Type-c |
| 显示接口 | ✅HDMI, DP, MIPI DSI |
| 摄像头接口 |  ✅MIPI CSI  |
| M.2 Key M PCIe  |  ✅可外接SSD卡  |
| M.2 Key E PCIe  |  ✅可外接WIFI模块, 4G模块  |
| MicroSD卡扩展  | ✅ | 
| 40-PIN | ✅兼容树莓派40PIN  |
| Fan | ✅  |
| RTC | ✅ |
| PoE供电 | ❌ |
| 尺寸 | 92mm × 62mm |


## AIM 系列
ArmSoM-AIM是我们推出的一系列嵌入式人工智能计算模块，主要用于开发和部署具有机器学习和深度学习功能的应用。

:::tip
**尺寸和引脚与Jetson nano兼容**
:::

### 竞品规格参数对比

下面是Jetson Nano模块（以NVIDIA Jetson Nano为代表）与armsom开发的AIM7（Rockchip RK3588）的主要技术规格的对比：

| 规格                                 |  ArmSoM-AIM7              | Jetson Nano (NVIDIA)                |
|--------------------------------------|-----------------------------------|--------------------------------|
| CPU核数    |**四核ARM® Cortex®A76+四核 ARM® Cortex®A55** | 四核 ARM® Cortex®A57 MPCore 处理器    | 
| GPU核数    | ARM Mali-G610 MP4                 |128核Maxwell架构GPU   | 
| 内存容量   |8GB/32GB 64位 LPDDR4x, 2112Mhz  | 4GB 64位 LPDDR4, 1600MHz   | 
| 存储支持  |  microSD卡、32GB/64GB eMMC 5.1 闪存   | microSD卡、16GB eMMC 5.1闪存  |
| 视频编码  |  **8K@30fps H.265 / H.264**  | 250 MP/sec，1x 4K@30 (HEVC)，2x 1080p@60 (HEVC)，4x 1080p@30 (HEVC)  |
| 视频解码  |  **8K@60fps H.265/VP9/AVS2，8K@30fps H.264 AVC/MVC，4K@60fps AV1，1080P@60fps MPEG-2/-1/VC-1/VP8** | 500 MP/s，1x 4K@60 (HEVC)，2x 4K@30 (HEVC)，4x 1080p@60 (HEVC)，8x 1080p@30 (HEVC)   |
| USB端口  | 1 个 USB 3.0、3 个 USB 2.0  | 1 个 USB 3.0、3 个 USB 2.0  |
| 以太网接口    | 1 个 10/100/1000 BASE-T 以太网   |1 个 10/100/1000 BASE-T 以太网 | 
| CSI接口 | 12通道 3x 4-lane or 5x 2-lane MIPI CSI 每线最高 2.5Gbps      |12 通道（3x4 或 4x2）MIPI CSI-2 D-PHY 1.1 (18 Gbps)     | 
| I/O        | 3 个 UART、2 个 SPI、2 个 I2S、4 个 I2C、多个 GPIO   | 3 个 UART、2 个 SPI、2 个 I2S、4 个 I2C、多个 GPIO        |
| PCIE    |**1 个 1/2/4lan PCIE3.0 & 1 个 1lan PCIE2.0**   | 1 个 1/2/4lan PCIE2.0  | 
| HDMI输出      |  **1 个 HDMI OUT2.1  / 1 个 eDP 1.4**   |1 个 HDMI 2.0  |
| DP接口    | 1 个 DP1.4a | 1 个 DP1.2  |
| eDP/DP接口    | **1 个 eDP 1.4/ 1 个 HDMI OUT2.1**  | 1 个 eDP 1.4/1 个 DP接口  | 
|  DSI接口    | 1 个 DSI (1 x2)  | 1 个 DSI (1 x2)   | 
| 操作系统支持    |支持debian，ubuntu，armbian，Openwrt     | NVIDIA JetPack软件套件 | 
| 大小   |  69.6 mm x 45 mm |69.6 mm x 45 mm  |
|规格尺寸|260 引脚边缘连接器| 260 引脚边缘连接器| 

## LM 系列

本指南专为LM系列设计，该系列全部采用LGA封装技术传输能力和稳定性更强，极小尺寸方便客户嵌入到产品。

## Link 系列

ArmSoM软路由系列产品适用于各种场景，包括家庭网络、企业办公、数据中心等。无论是小型网络环境还是复杂的企业网络，我们的软路由产品都能够提供卓越的性能和可靠的连接。
