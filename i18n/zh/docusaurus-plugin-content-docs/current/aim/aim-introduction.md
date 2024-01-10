---
sidebar_position: 1
---

# AIM 系列产品介绍
ArmSoM-AIM是我们推出的一系列嵌入式人工智能计算模块，主要用于开发和部署具有机器学习和深度学习功能的应用。

:::tip
**尺寸和引脚与Jetson nano兼容,**
:::

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