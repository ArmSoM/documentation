---
slug: sige5-sbc-upstream
title: sige5-sbc-upstream
authors: [ArmSoM, keven]
tags: [sige5, Makes]
---

### ArmSoM-Sige5 的 RK3576 SoC 主线内核支持进展

我们很高兴地宣布，基于 RK3576 SoC 的 ArmSoM-Sige5 开发板的主线内核支持，collabora正在稳步推进中。RK3576 SoC 是 Rockchip 家族的一员，其设计和功能与广受欢迎的 RK3588 相似，许多硬件模块都得到了复用，这为我们在主线内核中添加支持提供了有利条件。

![ArmSoM-sige5](/img/sige/sige5.png)

### RK3576主线内核支持概况

在推动 RK3576 SoC 的主线内核支持方面，我们取得了一些显著进展。以下是各个硬件模块的支持情况：

#### 1. 电源管理和时钟控制

- **PMIC (rk806)**：支持已经合并至 Linux 6.12-rc1 版本。
- **时钟与复位控制 (CRU)**：主线支持已合并，且更新了设备树绑定。
- **电源域 (pmdomain)**：支持包括基础支持在内的多个补丁已被合并。

#### 2. 存储与外设接口

- **eMMC**：已经在 Linux 6.12-rc1 版本中获得支持。
- **SD 卡和 SDIO**：这两者也都获得了主线内核的支持。
- **SATA 和 UFS**：目前 UFS 补丁已发送，SATA 的支持在 Linux 6.1-rc1 中得到了初步实现。

#### 3. 网络与通信

- **以太网**：Linux 6.12-rc1 版本中已经加入了支持。
- **WLAN 和蓝牙 (rtl8852bs)**：目前尚未在主线内核中得到全面支持，但预计可通过适配现有驱动程序来实现。

#### 4. 显示与多媒体

- **显示控制器 (VOP)**：补丁已发送，支持 HDMI 和 DisplayPort 的实现。
- **GPU (Mali G-52 MC3)**：已经在 Linux 6.12-rc1 版本中获得了支持。
- **媒体编码与解码**：目前仍在开发中，尚未有明确的主线支持计划。

#### 5. 其他外设支持

- **UART 和 SPI**：这些外设的驱动支持已经合并至主线内核。
- **I2C 和 GPIO**：更新的设备树绑定已经合并，GPIO 和 Pinmux 的相关补丁已提交。

### 总结

RK3576 SoC 在开源社区的支持进展良好，许多关键模块已经得到了初步支持。然而，一些高级功能如 HDMI 音频、DSI、NPU 等仍需进一步开发。ArmSoM-Sige5 产品作为 RK3576 SoC 的应用实例，将受益于这些持续的改进，随着时间的推移，我们有望看到更全面的主线内核支持。

#### 参与开发

如果您对推动 RK3576 SoC 的主线内核支持感兴趣，我们鼓励您参与到社区中来。无论是测试现有补丁、开发新驱动，还是为设备树绑定贡献代码，您的参与都将是对整个社区的重要贡献。

#### 未来展望

随着 RK3576 SoC 的主线内核支持不断完善，ArmSoM-Sige5 的开发体验将更加流畅和可靠。我们相信，这将进一步推动基于 RK3576 的嵌入式应用的发展，使更多开发者能够利用这一强大的硬件平台进行创新。

了解更多详情或参与开发，请访问以下链接：
- [collabora](https://gitlab.collabora.com/hardware-enablement/rockchip-3588/notes-for-rockchip-3576/-/blob/main/mainline-status.md?ref_type=heads) - collabora做出了巨大的贡献
- [ArmSoM-Sige5 板卡信息](https://docs.armsom.org/armsom-sige5)
- [主线内核代码](https://github.com/armbian/linux-rockchip/tree/rk3576-6.1-dev-2024_04_19)
- [U-Boot 支持](https://github.com/ArmSoM/u-boot/tree/rk3576)
- [rkbin 固件](https://github.com/armbian/rkbin/commit/4f56cdc8310582bd737b54bdbd7e2d8ee160896f)

让我们共同努力，推动 ArmSoM-Sige5 的主线内核支持走得更远！