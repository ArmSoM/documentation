---
slug: sige5-sbc-upstream
title: sige5-sbc-upstream
authors: [ArmSoM, keven]
tags: [sige5, Makes]
---

### ArmSoM-Sige5's RK3576 SoC Mainline Kernel Support Progress

We are excited to announce that the mainline kernel support for the ArmSoM-Sige5 development board, based on the RK3576 SoC, is steadily progressing with the efforts of Collabora. The RK3576 SoC is part of the Rockchip family and shares similarities with the widely popular RK3588, with many hardware blocks being reused, which facilitates the process of adding support in the mainline kernel.

![ArmSoM-Sige5](/img/sige/sige5.png)

### Overview of RK3576 Mainline Kernel Support

Significant progress has been made in advancing the mainline kernel support for the RK3576 SoC. Below is the current status of support for various hardware modules:

#### 1. Power Management and Clock Control

- **PMIC (rk806)**: Support has been merged into Linux 6.12-rc1.
- **Clock and Reset Control (CRU)**: Mainline support has been merged, including an updated device tree binding.
- **Power Domain (pmdomain)**: Several patches, including basic support, have been merged.

#### 2. Storage and Peripheral Interfaces

- **eMMC**: Supported in Linux 6.12-rc1.
- **SD Card and SDIO**: Both are now supported in the mainline kernel.
- **SATA and UFS**: UFS patches have been submitted, and SATA support was initially implemented in Linux 6.1-rc1.

#### 3. Networking and Communication

- **Ethernet**: Support was added in Linux 6.12-rc1.
- **WLAN and Bluetooth (rtl8852bs)**: Full mainline kernel support is not yet available, but existing drivers may be adapted.

#### 4. Display and Multimedia

- **Display Controller (VOP)**: Patches have been sent, with support for HDMI and DisplayPort implementation.
- **GPU (Mali G-52 MC3)**: Supported in Linux 6.12-rc1.
- **Media Encoding and Decoding**: Still under development, with no clear mainline support plan yet.

#### 5. Other Peripheral Support

- **UART and SPI**: These peripherals have their drivers merged into the mainline kernel.
- **I2C and GPIO**: Updated device tree bindings have been merged, and related patches for GPIO and Pinmux have been submitted.

### Summary

The RK3576 SoC is making good progress in terms of open-source community support, with many critical modules already receiving initial support. However, advanced features like HDMI audio, DSI, and NPU still require further development. The ArmSoM-Sige5 product, as an application of the RK3576 SoC, will benefit from these ongoing improvements, and over time, we can expect more comprehensive mainline kernel support.

#### Get Involved

If you are interested in contributing to the mainline kernel support for the RK3576 SoC, we encourage you to get involved in the community. Whether it's testing existing patches, developing new drivers, or contributing code for device tree bindings, your involvement will be a valuable contribution to the entire community.

#### Looking Ahead

As the mainline kernel support for the RK3576 SoC continues to improve, the development experience on the ArmSoM-Sige5 will become more seamless and reliable. We believe this will further drive the development of embedded applications based on the RK3576, enabling more developers to innovate on this powerful hardware platform.

For more details or to get involved, please visit the following links:
- [Collabora](https://gitlab.collabora.com/hardware-enablement/rockchip-3588/notes-for-rockchip-3576/-/blob/main/mainline-status.md?ref_type=heads) - Collabora has made significant contributions
- [ArmSoM-Sige5 Board Information](https://docs.armsom.org/armsom-sige5)
- [Mainline Kernel Code](https://github.com/armbian/linux-rockchip/tree/rk3576-6.1-dev-2024_04_19)
- [U-Boot Support](https://github.com/ArmSoM/u-boot/tree/rk3576)
- [rkbin Firmware](https://github.com/armbian/rkbin/commit/4f56cdc8310582bd737b54bdbd7e2d8ee160896f)