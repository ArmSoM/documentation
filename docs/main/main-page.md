---
sidebar_label: "🏠 Main Page"
title: "ArmSoM Open Source Hardware Developer Center"
description: "Official ArmSoM developer documentation for Rockchip single-board computers and system-on-modules. Find product specifications, Linux images, hardware resources, and embedded development tutorials."
keywords: [ArmSoM, Rockchip SBC, system on module, RK3588, RK3576, embedded Linux, RKNN]
image: /img/armsom-social-card.png
sidebar_position: 1
slug: /
---

<section class="armsom-hero">
  <div class="armsom-hero__copy">
    <p class="armsom-eyebrow">OPEN HARDWARE · EMBEDDED AI · ROCKCHIP</p>
    <h1>Build the next embedded product, faster.</h1>
    <p class="armsom-hero__lead">Explore Rockchip single-board computers, system-on-modules, Linux images, and practical engineering documentation—from your first boot to production hardware.</p>
    <div class="armsom-hero__actions">
      <a class="armsom-button armsom-button--primary" href="#choose-your-platform">Choose a platform <span>→</span></a>
      <a class="armsom-button armsom-button--secondary" href="./getting-start/cloud-disk">Start building</a>
    </div>
    <div class="armsom-proof"><span><strong>6 TOPS</strong> edge AI</span><span><strong>8K</strong> multimedia</span><span><strong>Open</strong> hardware resources</span></div>
  </div>
  <div class="armsom-hero__visual"><img src="./img/banana.jpg" alt="ArmSoM open-source hardware platforms" /></div>
</section>


## Choose your platform

<p class="armsom-section-lead">Start from the outcome you want. Every platform includes specifications, interface references, software resources, and setup guidance.</p>

<div class="armsom-choice-grid">
  <a class="armsom-choice-card" href="./armsom-sige7"><span class="armsom-choice-card__icon">✦</span><small>HIGH PERFORMANCE</small><h3>Sige7 · RK3588</h3><p>Edge AI, 8K multimedia, NAS, and high-performance Linux.</p><strong>6 TOPS · dual 2.5GbE →</strong></a>
  <a class="armsom-choice-card" href="./armsom-sige5"><span class="armsom-choice-card__icon">◈</span><small>BALANCED AI</small><h3>Sige5 · RK3576</h3><p>A practical platform for AI, networking, and rapid prototypes.</p><strong>6 TOPS · Wi-Fi 6 →</strong></a>
  <a class="armsom-choice-card" href="./armsom-cm5"><span class="armsom-choice-card__icon">▣</span><small>CUSTOM HARDWARE</small><h3>CM5 · RK3576</h3><p>Compute module and carrier-board design for production products.</p><strong>SoM · carrier design →</strong></a>
  <a class="armsom-choice-card" href="./armsom-forge1"><span class="armsom-choice-card__icon">⌁</span><small>INDUSTRIAL CONTROL</small><h3>Forge1 · RK3506J</h3><p>Industrial HMI, gateways, and long-running control systems.</p><strong>Industrial-grade →</strong></a>
</div>

<div class="armsom-paths"><a href="#product-series"><strong>Which ArmSoM family fits your project?</strong><span>Compare series and integration options →</span></a><a href="#product-catalog-table"><strong>Need a full comparison?</strong><span>Browse the product catalog →</span></a></div>

## Product series comparison {#product-series}

Choose your development approach first, then compute and connectivity. Compare single-board computers, compute modules and industrial platforms below.

| Family | Form factor | Main characteristics | Typical needs |
| --- | --- | --- | --- |
| **Sige** | Single-board computer (SBC) | Computing and common peripheral interfaces on one board | Learning, rapid prototypes, networking, multimedia and edge AI |
| **CM** | Board-to-board compute module | Compact module with a carrier for custom interfaces and dimensions | Embedded terminals, custom hardware and production devices |
| **AIM** | Socket-based compute module | Module socket connects to a carrier; oriented toward AI and multimedia, with capabilities varying by model | Modular systems, smart terminals and machine vision |
| **LM** | Soldered LGA compute module | Soldered onto a carrier for a fixed hardware design | Deep integration and embedded production devices |
| **Forge** | Industrial control development board | Focus on industrial communication, control and HMI | Industrial gateways, HMI and data acquisition |

These are selection priorities, not exclusive use cases. Check the specific model and hardware revision for temperature ratings, interface counts and software support.


<details>
<summary>Choosing between CM, AIM and LM</summary>

All three provide the main computing functions. The key differences are **how they connect to a carrier and how the finished device is manufactured and serviced**.

| Consideration | CM | AIM | LM |
| --- | --- | --- | --- |
| Connection | Board-to-board connectors | Module socket; AIM7 uses 260-pin SO-DIMM | LGA soldering; LM7 uses 506 pins |
| Integration priority | Compact dimensions and custom carriers | Removable module with mechanical retention | Soldered integration into a fixed design |
| Replacement | Remove with power off; account for mounting hardware | Remove with power off; account for socket and retention | Requires solder rework |
| Examples | [CM1](./armsom-cm1), [CM3](./armsom-cm3), [CM5](./armsom-cm5), [CM7S](./armsom-cm7s) | [AIM3](./armsom-aim3), [AIM5](./armsom-aim5), [AIM7](./armsom-aim7) | [LM7](./armsom-lm7) |

:::note Verify compatibility
A matching connector shape does not guarantee interchangeability. Check pin assignments, power requirements, dimensions, interface multiplexing and software support before replacing a module or using a third-party carrier. AI capability also depends on the model, not just the family name.
:::

</details>

<details>
<summary>Modules, carriers and development kits</summary>

- **Compute module**: integrates the processor, memory and storage functions, depending on the model and configuration.
- **Carrier board**: provides power delivery, interface breakout and peripheral connections.
- **Development platform or kit**: combines a module and carrier for evaluation, software development and prototyping. Confirm which parts are included when ordering.

| Module | Matching development platform | Purpose |
| --- | --- | --- |
| [CM1](./armsom-cm1) | [CM1-IO](./armsom-cm1-io) | Industrial control and interface evaluation |
| [CM5](./armsom-cm5) | [CM5-IO](./armsom-cm5-io) | Embedded development and carrier design reference |
| [AIM7](./armsom-aim7) | [AIM-IO](./armsom-aimio) | AI, multimedia and peripheral evaluation |
| [LM7](./armsom-lm7) | [W3](./armsom-w3) | Development platform based on LM7 |

**W3 is an LM7-based development platform. An IO carrier is not another computing performance tier.** After evaluation, you can design a dedicated carrier for your product.

</details>

<details>
<summary>Choosing within the Sige family</summary>

| Model | Processor | Selection priority |
| --- | --- | --- |
| [Sige1](./armsom-sige1) | Rockchip RK3528 | Entry-level Linux, basic networking and lightweight applications |
| [Sige3](./armsom-sige3) | Rockchip RK3568B2 | General embedded development, networking and peripheral expansion |
| [Sige5](./armsom-sige5) | Rockchip RK3576 | General computing and edge AI with a 6 TOPS NPU |
| [Sige6](./armsom-sige6) | Allwinner A733 | An Allwinner platform, selected with its software ecosystem in mind |
| [Sige7S](./armsom-sige7s) | Rockchip RK3588S | High-performance computing and AI in a compact format |
| [Sige7](./armsom-sige7) | Rockchip RK3588 | Performance and high-speed expansion, including dual 2.5GbE and PCIe 3.0 storage |

**Model numbers are not a cross-platform performance ranking.** Sige6 uses Allwinner silicon and is not simply a performance tier between Sige5 and Sige7. Compare dimensions, networking and expansion when choosing between Sige7S and Sige7. TOPS describes theoretical compute at a specified precision; real AI performance depends on the model, supported operators, memory and deployment.

</details>

<details>
<summary>Industrial and specialized applications</summary>

- **[Forge1](./armsom-forge1)**: RK3506J-based platform for HMI, industrial gateways and control terminals. Includes RS485 and CAN interfaces; its documentation specifies a −40°C to 85°C operating range.
- **[P2pro](./armsom-p2pro)**: RK3308-based platform focused on audio interfaces, voice and IoT applications.
- **[KVM](./armsom-kvm)**: designed for network-based keyboard, mouse and video access and remote equipment management.

</details>

<details>
<summary>Start with your requirements</summary>

1. **Get an application running quickly**: start with Sige; consider Forge or KVM for industrial control or remote management.
2. **Customize dimensions, interfaces and enclosure**: choose CM, AIM or LM and evaluate a matching carrier.
3. **Define compute needs**: check CPU, memory, AI model support and video processing.
4. **Check physical connectivity**: verify Ethernet speeds, USB counts, cameras, displays, PCIe and industrial interfaces.
5. **Review production requirements**: confirm system images, drivers, power, cooling, temperature, mechanical design and available configurations.

</details>

## ArmSoM Platform Roadmap

![ArmSoM Platform Roadmap](/img/armsom-platform-roadmap.png)  

## ArmSoM Product Overview  

### Sige Series Single Board Computers

**Start software development and application evaluation on one board.** Sige integrates the processor, memory and common peripheral interfaces for developers who want to boot a system, connect hardware and run applications quickly.

- **Learning and prototyping**: Linux development, programming education, sensors and application evaluation.
- **Networking and multimedia**: choose Ethernet, storage and display interfaces for gateways, home servers or digital signage.
- **Edge AI**: select an NPU-equipped model for your workload, then check operator support and deployment tools.

Sige1 and Sige3 cover entry-level and general embedded development. Sige5 combines general computing with AI, while Sige6 offers the Allwinner A733 platform. Sige7S emphasizes compact dimensions; Sige7 offers more high-speed networking and storage expansion.

| [ArmSoM-Sige1](./armsom-sige1)<br/>Rockchip RK3528 | [ArmSoM-Sige3](./armsom-sige3)<br/>Rockchip RK3568B2 | [ArmSoM-Sige5](./armsom-sige5)<br/>Rockchip RK3576 |
| --- | --- | --- |
| ![ArmSoM Sige1](/img/sige/armsom-sige1.png) | ![ArmSoM Sige3](/img/sige/armsom-sige3.png) | ![ArmSoM Sige5](/img/sige/armsom-sige5.png) |

| [ArmSoM-Sige6](./armsom-sige6)<br/>Allwinner A733 | [ArmSoM-Sige7](./armsom-sige7)<br/>Rockchip RK3588 | [ArmSoM-Sige7S](./armsom-sige7s)<br/>Rockchip RK3588S |
| --- | --- | --- |
| ![ArmSoM Sige6](/img/sige/armsom-sige6.png) | ![ArmSoM Sige7](/img/sige/armsom-sige7.png) | ![ArmSoM Sige7S](/img/sige/armsom-sige7s.png) |

<details>
    <summary>
       Comparison of Specifications for Sige7s/7/6/5/3/1
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
| Decoder | 8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8| 8K@60fps H.265/VP9/AVS2 <br/> 8K@30fps H.264 AVC/MVC <br/> 4K@60fps AV1 <br/> 1080P@60fps MPEG-2/-1/VC-1/VP8| H.265/VP9/AVS2 4K@60fps <br/> H.264 4K@30fps | H.264, H.265, VP9, AV1 and AVS2 up to 8K@30fps or 4K@120fps | 4Kp60 H.265/H.264/VP9 | H.265, H.264, AVS2 4K@60fps |
| Encoder | 8K@30fps H.265 / H.264 |  8K@30fps H.265 / H.264| 4K@30fps H264/H265  |H.264 and H.265 up to 4K@60fps| 1080P60 H.264/H.265 | H.264 and H.265 up to1080@60fps|
| Wi-Fi | AIC8800 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax | AP6275P Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB |  AIC8800 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax |SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDB |   SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs | SYN43752 Wi-Fi 6 Module <br/> 802.11a/b/g/n/ac/ax, 2T2R MIMO with RSDBs|
| PCIE | - | PCIe 3.0 4-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 2.1 1-lanes <br/> M.2 Key M 2280 NVMe SSD Supported | PCIe 3.0 2-lanes <br/> M.2 Key M 2280 NVMe SSD Supported |  -  |
| Ethernet |  1x Gigabit Ethernet | 2x 2.5G Ethernet |  1x Gigabit Ethernet |  2x Gigabit Ethernet| Gigabit Ethernet & 2.5G Ethernet| Gigabit Ethernet & 2.5G Ethernet|
| USB Host |  2x USB 3.0 & 2x USB 2.0 | 1x USB 3.0 & 1x USB 2.0 | 1x USB 3.0 & 3x USB 2.0 | 1x USB 3.0 & 1x USB 2.0| 1x USB 3.0 & 1x USB 2.0  | 2x USB 2.0|
| USB-C |  1x USB-C Power jack | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG） | 1x USB-C (Power/OTG) | 1x USB-C Power jack & 1x USB Type-C 3.0（DP1.4/OTG）| 1x USB-C Power jack & 1x USB3.0 OTG |  1x USB-C Power jack & 1x USB2.0 OTG|
| MIPI CSI/DSI | 1x 2-lane MIPI CSI <br/> 1x 2-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x 4-lane and 1x 2-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 2x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI | 1x 4-lane MIPI CSI <br/> 1x 4-lane MIPI DSI  |  -  |
| 40-PIN Header|  yes | yes |  yes |yes | yes | yes |
| LEDs | 2x LEDs | 2x LEDs | 2x LEDs | 2x LEDs |2x LEDs |  2x LEDs|
|Board Dimensions|  85 mm × 56 mm × 17 mm | 92mm × 62mm x 14.6mm | 89mm x 56mm x 21.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm | 92mm × 62mm x 14.6mm |

</details>

### System on Module and Carrier Boards

**Build custom interfaces around an established compute module.** The module provides the main processor, memory and storage functions; the carrier provides power and peripheral connections. Evaluate applications on a matching development platform, then design a dedicated carrier for your dimensions, connectors and mounting requirements.

- **CM / Compact board-to-board connection**: for custom terminals and embedded devices, with CM1, CM3, CM5 and CM7S options for different computing needs.
- **AIM / Socket-based modules**: for modular smart devices, AI and multimedia applications, with platforms including AIM3, AIM5 and AIM7.
- **LM / Soldered LGA integration**: represented by LM7, for fixed-module designs with appropriate assembly, testing and rework processes.

CM5-IO, AIM-IO and the LM7-based W3 provide corresponding development and interface evaluation platforms. Check the specific module and carrier pin assignments, power requirements and software support before pairing them.

| [ArmSoM-CM5](./armsom-cm5)<br/>Rockchip RK3576 | [ArmSoM-CM7S](./armsom-cm7s)<br/>Rockchip RK3588S | [ArmSoM-AIM5](./armsom-aim5)<br/>Rockchip RK3576 |
| --- | --- | --- |
| ![ArmSoM-CM5](/img/cm/armsom-cm5.png) | ![ArmSoM-CM7S](/img/cm/armsom-cm7s.png) | ![ArmSoM-AIM5](/img/aim/armsom-aim5.png) |

| [ArmSoM-AIM7](./armsom-aim7)<br/>Rockchip RK3588 | [ArmSoM-LM7](./armsom-lm7)<br/>Rockchip RK3588 | [CM7S + CM7S-IO](./armsom-cm7s)<br/>Rockchip RK3588S |
| --- | --- | --- |
| ![ArmSoM-AIM7](/img/aim/armsom-aim7.png) | ![ArmSoM-LM7](/img/lm/armsom-lm7.png) | ![CM7S + CM7S-IO](/img/cm/cm7s-with-carrier.png) |

| [ArmSoM-CM5-IO](./armsom-cm5-io)<br/>CM5 Maker kit | [ArmSoM-AIM-IO](./armsom-aimio)<br/>AIM Maker kit | [ArmSoM-W3](./armsom-w3)<br/>LM7 Maker kit |
| --- | --- | --- |
| ![ArmSoM-CM5-IO](/img/cm/armsom-cm5-io.png) | ![ArmSoM-AIM-IO](/img/aim/armsom-aim-io.png) | ![ArmSoM-W3](/img/lm/armsom-w3.png) |

#### Industrial Control Modules

[CM1](./armsom-cm1) uses RK3506J for HMI, equipment control and industrial communication. Use [CM1-IO](./armsom-cm1-io) for interface evaluation, then develop a dedicated carrier when integrating the module into your own equipment.

| [ArmSoM-CM1](./armsom-cm1)<br/>RK3506J compute module | [ArmSoM-CM1-IO](./armsom-cm1-io)<br/>Carrier shown with CM1 |
| --- | --- |
| ![ArmSoM CM1 front and back](/img/cm/armsom-cm1-front&back1.jpg) | ![ArmSoM CM1-IO with CM1](/img/cm/armsom-cm1-io.png) |

### Forge Series Industrial Development Boards

**Develop around equipment connectivity, control and HMI.** Forge targets industrial gateways, operator interfaces and data acquisition. Choose based on communication interfaces, operating temperature and software support for your target system.

[Forge1](./armsom-forge1) uses RK3506J and provides industrial communication interfaces including RS485 and CAN. Its documentation specifies a −40°C to 85°C operating range. Use it to evaluate device protocols, display interaction and control applications; consider the CM1 module on the same processor platform when a custom hardware format is needed.

| [ArmSoM-Forge1](./armsom-forge1)|  
|---------|  
|![armsom-forge1](/img/forge/armsom-forge1.png)|  


### Accessories

**Complete your platform with displays, cameras, cooling and enclosures.** Select screens and cameras for the application, then choose cooling and mechanical accessories for the board and workload to build a practical prototype.

Check supported boards, pin assignments, cables, power and drivers before connecting accessories. A matching 40-pin header does not guarantee compatibility with every peripheral.

| [ArmSoM Display 10 HD](./armsom-display-10-hd) |[ArmSoM Display 7 HD](./armsom-display-7-hd) | [ArmSoM Camera Module 1](./armsom-camera-module1) | [Active Cooling Kit](./sige-active-cooling-kit) | [Sige DIY Case 1](./sige-diy-case1) |  
| --------- | --------- | --------- | --------- |  --------- | 
| ![ArmSoM Display 10 HD](/img/accessories/armsom-display-10hd.png) | ![ArmSoM Display 10 HD](/img/accessories/armsom-display-7hd.png) | ![ArmSoM Camera Module 1](/img/accessories/armsom-camera-module1-real.png) | ![Active Cooling Kit](/img/accessories/sige-active-cooling-fan-real.png) | ![Sige DIY Case 1](/img/accessories/sige-diy-case.png) |  

### Product Catalog Table  
| **Sige Series Single-Board Computers** | **System on Module and Carrier Boards** | **IoT/Industrial Control** | **Accessories** |  
|---------|--------------|--------------|---------|  
|[ArmSoM-Sige1](./armsom-sige1)  [Rockchip RK3528]|[ArmSoM-CM5](./armsom-cm5)  [Rockchip RK3576] <br/> [ArmSoM-CM5-IO](./armsom-cm5-io)  [CM5 Maker kit]|[ArmSoM-Forge1](./armsom-forge1)  [Rockchip RK3506J] | [display-10-hd](./armsom-display-10-hd)|
|[ArmSoM-Sige3](./armsom-sige3)  [Rockchip RK3568B2]|[ArmSoM-AIM5](./armsom-aim5)  [Rockchip RK3576] <br/> [ArmSoM-AIM-IO](./armsom-aimio)  [AIM Maker kit]|[ArmSoM-P2pro](./armsom-p2pro)  [Rockchip RK3308] | [Camera-Module-1](./armsom-camera-module1)	|
|[ArmSoM-Sige5](./armsom-sige5)  [Rockchip RK3576]|[ArmSoM-AIM7](./armsom-aim7)  [Rockchip RK3588] <br/> [ArmSoM-AIM-IO](./armsom-aimio)  [AIM Maker kit]| [ArmSoM-KVM](./armsom-kvm)  [Rockchip RK3568B2] | [Active Cooling Kit](./sige-active-cooling-kit) |
|[ArmSoM-Sige6](./armsom-sige6)  [Allwinner A733]|[ArmSoM-LM7](./armsom-lm7)  [Rockchip RK3588]<br/> [ArmSoM-W3](./armsom-w3)  [LM7 Maker kit]| ---- | [Camera-Module-1](./armsom-camera-module1) |
|[ArmSoM-Sige7](./armsom-sige7)  [Rockchip RK3588]|[ArmSoM-CM7s](./armsom-cm7s)  [Rockchip RK3588s]| ---- |  [Sige Diy Case 1](./sige-diy-case1)  |
|[ArmSoM-Sige7s](./armsom-sige7s)  [Rockchip RK3588s]| ---- | ---- | ---- |
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
