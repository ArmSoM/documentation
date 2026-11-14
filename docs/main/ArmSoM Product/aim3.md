---
title: "ArmSoM AIM3 | RK3568B2 Compute Module Documentation"
image: /img/armsom-social-card.png
description: ArmSoM-AIM3
keywords: [armsom, armsom-aim3, RK3568  Development Boards, RK3568 Core borad, rockchip]
sidebar_label: "AIM3"
sidebar_position: 3
slug: /armsom-aim3
toc_collapsible: true
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# AIM3 Product Overview

<nav className="armsom-doc-shortcuts" aria-label="Section shortcuts"><a href="#doc-section-1">Overview</a><a href="#doc-section-2">Getting Started</a><a href="#doc-section-3">Hardware Specifications</a><a href="#doc-section-4">Development Resources</a><a href="#doc-section-5">Certifications</a><a href="#doc-section-6">Availability</a></nav>

<span id="doc-section-1" className="armsom-section-anchor" />

## Overview
ArmSoM-AIM3 is a mid-to-high-end general-purpose System-on-Chip (SoC) featuring high performance and low power consumption. Built on 22nm process technology, it integrates:
- Quad-core ARM Cortex-A55 CPU @ 2GHz
- ARM Mali G52 GPU
- NPU supporting INT8/INT16/FP16/BFP16 with 1 TOPS@INT8 computing power
- Advanced video processing unit supporting:
  - 4Kp60 H.265/VP9 decoding
  - 1080p60 H.264 encoding

### Key Specifications
- **SOC**: Rockchip RK3568
- **Memory**: 2/4/8GB LPDDR4x
- **Storage**: 8/16/32/64GB eMMC
- **Power Input**: 4.5V-18V (±5% tolerance)
- **Operating Temp**: 0℃ ~ 60℃
- **Dimensions**: 92×62×14.6mm
- **OS Support**:
  - Official: Android 12, Debian 11, Buildroot
  - Community: Armbian

<span id="doc-section-2" className="armsom-section-anchor" />

## Getting Started
<a href="./armsom-aim7#aim-io-user-manual" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>AIM-IO User Manual</h2>
            <p>Quick Start Guide for AIM-IO</p>
        </div>
    </div>
</a>

<span id="doc-section-3" className="armsom-section-anchor" />

## Hardware Specifications

### Interface Layout
![ArmSoM-AIM3-a](/img/aim/aim3-a.png)

<div className="armsom-image-caption">ArmSoM-AIM3-a</div>

![ArmSoM-AIM3-b](/img/aim/aim3-b.png)

<div className="armsom-image-caption">ArmSoM-AIM3-b</div>


:::tip
All GPIO pins maintain compatibility with NVIDIA Jetson TX2 & Nano development boards, with identical form factor.
:::

### Block Diagram
(Retain original diagram path)

### Detailed Specifications
<details>
    <summary>Full Hardware Specifications</summary>

<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Features</th>
      </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>Display</th>
            <td><li>1× HDMI interface</li><li>1× eDP interface, exposed separately from HDMI</li><li>1× 4-lane MIPI DSI interface; the carrier must route the required lanes</li></td>
        </tr>
        <tr>
            <th>Camera</th>
            <td><li>2x 2-lane MIPI CSI (2.5Gbps per lane)</li></td>
        </tr>
        <tr>
            <th>Networking</th>
            <td>
              <li>1x GMAC with RGMII/RMII interface</li>
              <li>10/100/1000Mbps support</li>
            </td>
        </tr>
        <tr>
            <th>high-speed</th>
            <th><li>1x PCIe 2.0</li>
            <li>1x PCIe 3.0x2</li>
            <li>1x SATA</li>
            </th>
        </tr>
        <tr>
            <th>USB</th>
            <td><li>1x USB 3.0 (Gen1)</li><li>3x USB 2.0</li></td>
        </tr>
        <tr>
            <th>I/O</th>
            <td><li>Debug UART x1, UART+FC x2</li>
                <li>SPI x2, I2C x4 (1.8V/3.3V)</li>
                <li>CAN x1, I2S x2</li>
                <li>SD 4.0/SDIO 3.0</li>
                <li>PWM x4, GPIOs</li></td>
        </tr>
    </tbody>
</table>
</details>

<span id="doc-section-4" className="armsom-section-anchor" />

## Development Resources

### SDK Sources
(Same card structure with English titles)

### Official Images
ArmSoM provides the following official system images. Select the matching product folder and image version in the shared drive.

| OS | Description | Download |
|:---:|:---|:---:|
| ![Debian 12](/img/sige/debian12-1.png) | **Debian 12 for AIM3:** <br/>Debian 12 (Bookworm) system images. Open the matching product folder in the shared drive; available versions and desktop variants are listed there. | [Google Drive root folder](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56) |
| ![android](/img/sige/android.png) | **Android 12 for AIM3:**  Enhanced privacy controls & AI-powered features | Coming Soon |

### Community Images
| OS | Description | Download |
|:---:|:---|:---:|
| ![armbian](/img/armbian-logo.png) | **Armbian for AIM3:**  Customizable Linux builds for SBCs | [Armbian Image](https://armbian.com/boards?vendor=armsom) |

<span id="doc-section-5" className="armsom-section-anchor" />

## Certifications
- CE/FCC/RoHS compliant

<span id="doc-section-6" className="armsom-section-anchor" />

## Availability
ArmSoM-AIM3 will remain in production until at least August 2034.

## Purchasing
- Official Store: 
- OEM inquiries: sales@armsom.org

## Important Notes
:::caution [ESD Protection]
1. Always wear anti-static wrist straps when handling
2. Store in anti-static bags when not in use
3. Avoid direct contact with IC components
:::

:::danger [Thermal Management]
- Chip surface temperature may exceed 60°C without cooling
- Use official [cooling kits](./sige-active-cooling-kit) or third-party solutions
- Ensure proper ventilation during operation
:::
