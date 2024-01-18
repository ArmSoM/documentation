---
description: ArmSoM-AIM7 uses Rockchip RK3588, a new generation flagship eight-core 64-bit processor with a main frequency of up to 2.4GHz, 6 TOPS computing power NPU, and can be equipped with up to 32GB of large memory. While the interface is fully compatible with Jetson Nano
keywords: [armsom, armsom-aim7, jetson nano, nvidia, rockchip]
sidebar_label: "Product Introduction"
sidebar_position: 1
---

# Product Introduction:AIM7

ArmSoM-AIM7 uses Rockchip RK3588, a new generation flagship eight-core 64-bit processor with a main frequency of up to 2.4GHz, 6 TOPS computing power NPU, and can be equipped with up to 32GB of large memory. While the interface is fully compatible with Jetson Nano, the PCIe interface has been upgraded to PCIe3.0 4-lane and PCIe2.1 1-lan.

AIM7 can be applied to ARM PC, edge computing, cloud server, artificial intelligence, cloud computing, virtual/augmented reality, blockchain, smart NVR and other fields

## Key Parameters 

- SOC: Rockchip RK3588
- CPU: RK3588 quad-core Cortex-A76 @ 2.4GHz + quad-core Cortex-A55 @ 1.8GHz, 8nm process  
- GPU: ARM Mali-G610 MP4
- NPU: Computing power up to 6 TOPS (INT8), supports INT4/INT8/INT16 mixed computing
- VPU/Codec:  
  - Hardware decoding: 8K@60fps H.265/VP9/AVS2, 8K@30fps H.264 AVC/MVC, 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8  
  - Hardware encoding: 8K@30fps H.265 / H.264
- RAM: 8GB/16GB/32GB (max 32GB) 64bit LPDDR4x, default LPDDR4x 8GB
- Flash: 32GB/64GB/128GB eMMC, default eMMC 32GB
- Interface type: 260pin SO-DIMM connector, compatible with Jetson TX2 NX
- Working voltage: 5V DC
- Temperature: Operating temperature: 0°C to 80°C, Storage temperature: -20°C to 85°C
- Humidity: Relative humidity: Operation: 10% to 90%, Storage: 5% to 95%
- operating system:
   - Rockchip official support: Android 12.0, Debian11, Buildroot
   - Third-party support: Armbian 23.07, Ubuntu 20.04, Ubuntu22.04, Kylin OS
- PCB: 12-layer PCB board design
- weight: 
- Size: 69.6 mm x 45 mm

### Real Pictures 

![ArmSoM-AIM7-front & back](/img/aim/aim7/armsom-aim7-front&back.png)

:::tip
All pins of AIM7 are compatible with NVIDIA Jetson TX2 & NVIDIA Jetson Nano, with the same dimensions
:::

| Specifications   |ArmSoM-AIM7(Rockchip)                                       | Jetson Nano (NVIDIA)                                         | 
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CPU Cores        |Quad-core ARM® Cortex®-A76 + Quad-core ARM®Cortex®-A55      | Quad-core ARM® Cortex®-A57 MPCore processor                  | 
| GPU Cores        |  ARM Mali-G610 MP4  |128-core Maxwell GPU                                         |
| Memory           |8GB/32GB 64-bit LPDDR4x, 2112MHz   | 4GB 64-bit LPDDR4, 1600MHz                                   | 
| Storage          |  microSD card, 32GB eMMC 5.1 flash storage | microSD card, 16GB eMMC 5.1 flash storage                    |
| Video Encoding   | 8K@30fps H.265 / H.264| 250 MP/sec, 1x 4K@30 (HEVC), 2x 1080p@60 (HEVC), 4x 1080p@30 (HEVC) | 
| Video Decoding   | 8K@60fps H.265/VP9/AVS2, 8K@30fps H.264 AVC/MVC, 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8 | 500 MP/s, 1x 4K@60 (HEVC), 2x 4K@30 (HEVC), 4x 1080p@60 (HEVC), 8x 1080p@30 (HEVC) |
| USB Ports        | 1 USB 3.0,  3 USB 2.0       | 1 USB 3.0, 3 USB 2.0                                         | 
| Ethernet         | 1 10/100/1000 BASE-T   | 1 10/100/1000 BASE-T                                         | 
| CSI Interfaces   |  12 channels (4x2) MIPI CSI-2 D-PHY1.1 (18 Gbps)  | 12 channels (3x4 or 4x2) MIPI CSI-2 D-PHY 1.1 (18 Gbps)      |
| I/O               |3 UARTs, 2 SPIs, 2 I2S, 4 I2Cs, multiple GPIOs               | 3 UARTs, 2SPIs, 2 I2S, 4 I2Cs, multiple GPIOs  | 
| PCIE             |1 1/2/4lane PCIE3.0 & 1 1lane PCIE2.0  | 1 1/2/4lane PCIE2.0                                          | 
| HDMI Output      |1 HDMI OUT2.1 / 1 eDP 1.4 | 1 HDMI 2.0                                                   | 
| DP Interface     |  1 DP1.4a | 1 DP1.2                                                      |
| eDP/DP Interface | 1 eDP 1.4 / 1 HDMI OUT2.1| 1 eDP 1.4 / 1 DP                                             | 
| DSI Interface    | 1 DSI (1 x2) 2 sync|1 DSI (1 x2) 2 sync                                          | 
| OS Support       | Support debian, ubuntu, armbian, kernel 5.10  | NVIDIA JetPack software suite                                | 
| Size             | 69.6 mm x 45 mm  | 69.6 mm x 45 mm                                              | 
| Form Factor      | 260-pin edge connector                                       | 260-pin edge connector     |