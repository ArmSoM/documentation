---
description: ArmSoM-AIM7 采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存，接口完全兼容 Jetson Nano。
keywords: [armsom, armsom-AIM7, 创客套件, rockchip, rk3588产品介绍]
sidebar_label: "产品简介"
sidebar_position: 1
---

# AIM7产品简介

ArmSoM-AIM7 采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。接口完全兼容 Jetson Nano的同时，升级了PCIe接口为PCIe3.0 4-lane和PCIe2.1 1-lan。

AIM7 可适用于ARM PC、边缘计算、云服务器、人工智能、云计算、虚拟/增强现实、区块链、智能NVR等领域

## 关键参数

- SOC：瑞芯微 RK3588
- CPU：RK3588 四核Cortex-A76@ 2.4GHz+四核Cortex-A55@ 1.8GHz，8纳米制程
- GPU：ARM Mali-G610 MP4
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算
- VPU/编解码：
  - 硬解码：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8
  - 硬编码：8K@30fps H.265 / H.264
- RAM：8GB/16GB/32GB（最高可配 32GB ）64bit LPDDR4x，默认LPDDR4x 8GB
- Flash：32GB/64GB/128GB eMMC，默认eMMC 32GB
- 接口类型：260pin SO-DIMM 连接器，兼容 Jetson TX2 NX
- 工作电压：5V DC
- 温度：工作温度：0°C 至 80°C，存储温度：-20°C 至 85°C
- 湿度：相对湿度: 运行：10% 至 90%，存储：5% 至 95%
- 操作系统：
  - Rockchip官方支持：Android 12.0，Debian11，Buildroot
  - 第三方支持：Armbian 23.07，Ubuntu 20.04，Ubuntu22.04，Kylin OS
- PCB：12 层 PCB 板设计
- 重量：
- 大小：69.6 mm x 45 mm

## 实物图

![ArmSoM-AIM7-front & back](/img/aim/aim7/armsom-aim7-front&back.png)

:::tip
AIM7所有引脚均与 NVIDIA Jetson TX2 &  NVIDIA Jetson Nano兼容，尺寸相同
:::

## 硬件规格

### 产品框图
![aim7-product](/img/aim/aim7/aim7-product.jpg)

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
            <th>显示</th>
            <th><li>1x DP interface</li><li>1x HDMI/eDP combo interface</li> <li>up to 7680 x 4320@60 Hz for HDMI and DP, and 3840 x 2160@60 Hz for eDP </li></th>
        </tr>
        <tr>
            <th>摄像头</th>
            <th><li>3x 4-lane or 5x 2-lane MIPI CSI 接口，每线最高 2.5Gbps</li></th>
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
            <th>
              <li>PCIe 3.0 x4: 每通道最高支持 8Gbps 数据速率, 支持 4 种组合方式：1路 x4、2路 x2、4路 x1、1路 x2+2路 x1，每通道最高支持 8Gbps 数据速率</li>
              <li>PCIe 2.1 x1: 每 PCIe2.1 接口支持 1lane，最高支持 5Gbps 数据速率</li></th>
        </tr>
         <tr>
            <th>USB</th>
            <th>
            <li>1x USB 3.0 (Gen1)</li>
            <li>3x USB 2.0</li>
            </th>
        </tr>
         <tr>
            <th rowspan="3">Others</th>
            <th ><li>UART DEBUG x1, UART+flow control x2</li>
            <li>SPI x2</li>
            <li>I2C x4</li>
            <li>can x1</li>
            <li>I2S x2</li>
            <li>SD 4.0, SDHOST 4.0, and SDIO 3.0</li>
            <li>PWM x3, 多个 GPIO</li>
            </th>
        </tr>
    </tbody>
</table>



### 规格参数对比

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