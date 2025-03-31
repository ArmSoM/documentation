---
sidebar_label: "🏠 Main Page"
title: "ArmSoM Open Source Hardware Developer Center"
sidebar_position: 1
slug: /
---

ArmSoM is an open-source hardware brand committed to providing the open-source community with top-tier hardware, robust firmware, and comprehensive documentation. While upholding open-source values, ArmSoM also offers customizable and reliable ODM solutions to meet the demands of global businesses. 

:::tip
[The RK3588AI Module7 is currently in the crowdfunding preheating stage. Stay tuned for the latest updates by subscribing to our campaign！](https://www.crowdsupply.com/armsom/rk3588-ai-module7)
:::

![ArmSoM Open Source](/img/banana.png)  

- **[Single Board Computers](#sige-series-single-board-computers)** based on [Arm](https://www.arm.com) architecture.  
- **[System on Module](#system-on-module-and-carrier-boards)** and carrier boards to help customers quickly develop high-performance hardware.  
- Dedicated to fostering an open ecosystem, supporting **open-source hardware and operating systems**.  

ArmSoM provides an extensive range of open-source resources, including product manuals, system source code, hardware schematics, component libraries, and high-quality Linux development tutorials. These resources are designed to benefit users of all levels:  

- **For Beginners**: Step-by-step tutorials make it easy to learn the fundamentals of embedded development and complete projects independently.  
- **For Experienced Developers**: Comprehensive documentation and tools enable efficient secondary development, significantly reducing time-to-market.  

## ArmSoM Product Overview  

### Sige Series Single Board Computers  

The **Sige (Small, Intelligent, Greatly Efficient)** series stands out with its high performance, extensive interfaces, and open-source support, making it an ideal choice for personal, household, and enterprise development and applications.  

#### Key Application Scenarios  

1. **Personal and Household Use**  
   - Programming education and learning  
   - Building educational platforms  
2. **Server and Network Applications**  
   - Private cloud storage, software routers, NAS file management  
   - Lightweight web service deployment and energy-efficient local data processing  
3. **Industrial and Commercial Projects**  
   - Intelligent control for digital signage, vending machines, robots, and drones  
   - Factory automation and sensor data acquisition and processing  
4. **Development and Education**  
   - Accelerates project prototyping and shortens development cycles  
   - Provides a practical platform for programming students and university research projects  
5. **Open-Source Hardware Innovation**  
   - Enables IoT and AI-related experimental designs for hobbyists and makers  

| [ArmSoM-Sige1](./armsom-sige1)  <br/> Rockchip RK3528 | [ArmSoM-Sige3](./armsom-sige3)  <br/> Rockchip RK3568B2 | [ArmSoM-Sige5](./armsom-sige5)  <br/> Rockchip RK3576 | [ArmSoM-Sige7](./armsom-sige7)  <br/> Rockchip RK3588 |  
| -------------------- | -------------------- | -------------------- | -------------------- |  
| ![ArmSoM-Sige1](/img/sige/armsom-sige1.png) | ![ArmSoM-Sige3](/img/sige/armsom-sige3.png) | ![ArmSoM-Sige5](/img/sige/armsom-sige5.png) | ![ArmSoM-Sige7](/img/sige/armsom-sige7.png) |  

<details>
    <summary>
       Comparison of Specifications for Sige7/5/3/1
    </summary>

|        | Sige7  | Sige5 | Sige3 |Sige1 |
| --------- | ----- | --- |--- | --- | 
| SoC Process | 8nm | 8nm | 22nm | 28nm |  
| CPU | Rockchip RK3588 <br/> Cortex-A76 x4 @2.4GHz and Cortex-A55 x4 @1.8GHz |  Rockchip RK3576 <br/> Cortex-A72 x4 @2.2GHz and Cortex-A53 x4 @1.8GHz  | Rockchip RK3568B2 <br/> Cortex-A55 x4 @2GHz | Rockchip RK3528 <br/> Cortex-A53 x4 @2GHz | 
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

### System on Module and Carrier Boards  

ArmSoM offers System on Module paired with flexible carrier board designs, enabling customers to quickly develop high-performance hardware solutions. The core boards integrate essential components such as processors and memory, while the carrier boards provide rich interfaces and expansion capabilities, catering to various application scenarios.  

| [ArmSoM-CM5](./armsom-cm5) <br/> Rockchip RK3576 | [ArmSoM-AIM5](./armsom-aim5) <br/> Rockchip RK3576 | [ArmSoM-AIM7](./armsom-aim7) <br/> Rockchip RK3588 | [ArmSoM-LM7](./armsom-lm7) <br/> Rockchip RK3588 |  
| -------------------- | -------------------- | -------------------- | -------------------- |  
| ![ArmSoM-CM5](/img/cm/armsom-cm5.png) | ![ArmSoM-AIM5](/img/aim/armsom-aim5.png) | ![ArmSoM-AIM7](/img/aim/armsom-aim7.png) | ![ArmSoM-LM7](/img/lm/armsom-lm7.png) |  

| [ArmSoM-CM5-IO](./armsom-cm5-io) <br/> CM5 Maker Kit | [ArmSoM-AIM-IO](./armsom-aimio) <br/> AIM Maker Kit | [ArmSoM-W3](./armsom-w3) <br/> LM7 Maker Kit |  
| -------------------- | -------------------- | -------------------- |  
| ![ArmSoM-CM5-IO](/img/cm/armsom-cm5-io.png) | ![ArmSoM-AIM-IO](/img/aim/armsom-aim-io.png) | ![ArmSoM-W3](/img/lm/armsom-w3.png) |  

#### Key Benefits of Modular Design  

- **Accelerated Development**: Focus on application design without starting from scratch, reducing development time significantly.  
- **Cost Efficiency**: Modular architecture allows core boards and carrier boards to be reused across projects, minimizing development and production costs.  
- **Flexible Adaptation**: Carrier boards support a variety of functional expansions, making it easy to adapt to diverse project requirements and scale with upgrades.  

This modular approach is especially suited for embedded development, IoT devices, and industrial control applications, empowering users to create high-performance hardware products with ease.  


### Forge Series Industrial Development Boards  

**The term "Forge" originates from "forging"**, symbolizing creation and transformation—crafting robust, durable artifacts through the accumulation of time and force. The birth of the Forge Series embodies this philosophy, aiming to **forge more resilient and sustainable hardware solutions under industrial-grade standards**.  

> ✅ Through long-term collaboration with industrial clients, we have deeply understood their stringent demands—particularly the need for unwavering stability in harsh environments, prolonged operation, and extreme conditions. Thus, the **ArmSoM-Forge Series** integrates ArmSoM's innovative technologies into higher-standard industrial designs, ensuring exceptional performance in the most challenging application scenarios.  

| [ArmSoM-Forge1](./armsom-forge1)|  
|---------|  
|![armsom-forge1](/img/forge/armsom-forge1.png)|  


### Accessories  

ArmSoM offers a wide range of hardware expansion accessories, including display modules, camera modules, custom enclosures, and active cooling solutions. Additionally, it supports compatibility with some Raspberry Pi 40-pin GPIO peripheral resources, providing strong support for developers to build diverse application scenarios. 

| [ArmSoM Display 10 HD](./armsom-display-10-hd) | [ArmSoM Camera Module 1](./armsom-camera-module1) | [Active Cooling Kit](./sige-active-cooling-kit) | [Sige DIY Case 1](./sige-diy-case1) |  
| --------- | --------- | --------- | --------- |  
| ![ArmSoM Display 10 HD](/img/accessories/armsom-display-10hd.png) | ![ArmSoM Camera Module 1](/img/accessories/armsom-camera-module1-real.png) | ![Active Cooling Kit](/img/accessories/sige-active-cooling-fan-real.png) | ![Sige DIY Case 1](/img/accessories/sige-diy-case.png) |  

#### Benefits of Accessories  

- **Rapid Prototyping**: Plug-and-play accessories simplify system integration and enhance development efficiency.  
- **Ecosystem Compatibility**: Partial compatibility with Raspberry Pi 40-pin GPIO peripherals enables developers to leverage the mature peripheral ecosystem, reducing design and development costs.  

This professional accessory lineup, combined with GPIO interface support, makes ArmSoM products a highly versatile solution for diverse applications.  

### Product Catalog Table  
| **Sige Series Single-Board Computers** | **System on Module and Carrier Boards** | **IoT/Industrial Control** | **Accessories** |  
|---------|--------------|--------------|---------|  
|[ArmSoM-Sige1](./armsom-sige1)  [Rockchip RK3528]|[ArmSoM-CM5](./armsom-cm5)  [Rockchip RK3576] <br/> [ArmSoM-CM5-IO](./armsom-cm5-io)  [CM5 Maker kit]|[ArmSoM-Forge1](./armsom-forge1)  [Rockchip RK3506J] | [display-10-hd](./armsom-display-10-hd)|
|[ArmSoM-Sige3](./armsom-sige3)  [Rockchip RK3568B2]|[ArmSoM-AIM5](./armsom-aim5)  [Rockchip RK3576] <br/> [ArmSoM-AIM-IO](./armsom-aimio)  [AIM Maker kit]|[ArmSoM-P2pro](./armsom-p2pro)  [Rockchip RK3308] | [Camera-Module-1](./armsom-camera-module1)	|
|[ArmSoM-Sige5](./armsom-sige5)  [Rockchip RK3576]|[ArmSoM-AIM7](./armsom-aim7)  [Rockchip RK3588] <br/> [ArmSoM-AIM-IO](./armsom-aimio)  [AIM Maker kit]| [ArmSoM-KVM](./armsom-kvm)  [Rockchip RK3568B2] | [Active Cooling Kit](./sige-active-cooling-kit) |
|[ArmSoM-Sige7](./armsom-sige7)  [Rockchip RK3588]|[ArmSoM-LM7](./armsom-lm7)  [Rockchip RK3588]<br/> [ArmSoM-W3](./armsom-w3)  [LM7 Maker kit]| |  [Sige Diy Case 1](./sige-diy-case1)  |

## Documentation Center  

If you encounter any issues while using this documentation, please reach out to us via the [forum](http://forum.armsom.org/) or [Discord](https://discord.gg/THfTEatpfK), and we will respond promptly.  

### Join the Community  

- **Official Forum**: [ArmSoM Forum](http://forum.armsom.org/) - The primary technical support channel, supporting both English and Chinese.  
- **Discord Community**: [ArmSoM Discord](https://discord.gg/THfTEatpfK) - A place where experienced users and the ArmSoM team are ready to assist you.  
- **Official GitHub**: [ArmSoM GitHub](https://github.com/armsom)  

### Contact Us  

**Official Email**: sales@armsom.org  

### Contribute  

We warmly invite you to contribute to the ArmSoM documentation by providing feedback, submitting fixes, enriching the content, and showcasing your work.  

### About Us  

ArmSoM was founded in 2021 by a team of passionate young developers driven by a shared enthusiasm for open-source innovation and freedom.  

Initially established in Shenzhen, the company plans to relocate its headquarters to Singapore within the next three years to attract global like-minded talents.  

### Sample Purchase  

- [ArmSoM Official Website](https://www.armsom.org/category/all-products)  
- [ArmSoM AliExpress Official Store](https://www.aliexpress.com/store/1102800175)  
- [ArmSoM Taobao Official Store](https://armsom.taobao.com/)  