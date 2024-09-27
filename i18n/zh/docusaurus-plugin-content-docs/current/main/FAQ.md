---
sidebar_label: "FAQs"
slug: /armsom-faqs
sidebar_position: 19
---

#  FAQ

Q1：如果在使用文档的过程中有疑问怎么办？

> A1：可以在 [ArmSoM 社区](http://forum.armsom.org/) 分享你的疑问，技术支持工程师每天都会在论坛上解答。

Q2：如果发现文档有错误怎么办？

> A2：可以使用 Github 提交 issue

Q3：如果你想为文档提供建议或者希望文档添加新内容，该怎么办？

> A3：可以使用邮箱联系 jack@armsom.org 申请成为文档贡献者，您的热情将会是我们坚持不懈的动力

## Sige7-FAQ

Q1: 我的 ArmSoM-Sige7 无法启动/卡在无限启动循环中。

ArmSoM-Sige7 支持 USB PD 电源协商以满足更高电压需求，如 9V、12V、15V、20V，以满足整个系统的功率负载要求（约 30W，包含 WiFi、SSD、USB 外设等）。目前，PD 协商是在内核驱动中实现的，我们需要启动到内核才能开始协商。然而，有些电源在等待 ArmSoM-Sige7 协商时无法耐心等候，会在超时后切断电源，这导致无限启动循环。我们提供以下建议：

- 使用不带pd协议的 12V USB-C 电源。
- 使用armbian固件，已将PD协商移植到引导加载程序（u-boot）[patch](https://github.com/armbian/build/blob/31e88922ad2b7a387c30ca9fbda618306dbd638b/patch/u-boot/legacy/u-boot-radxa-rk35xx/board_armsom-sige7/add-u-boot-pd-negotiation-support.patch#L4)。
- 使用eMMC启动，或者采用更快的SD卡。

