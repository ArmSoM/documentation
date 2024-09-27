---
sidebar_label: "FAQs"
slug: /armsom-faqs
sidebar_position: 19
---

# FAQ

Q1: What should I do if I have questions while using the document?

> A1: You can share your questions in [ArmSoM Community](http://forum.armsom.org/), and technical support engineers will answer them on the forum every day.

Q2: What should I do if I find an error in the document?

> A2: You can use Github to submit issues

Q3: What if you want to provide suggestions for the document or want to add new content to the document?

> A3: You can use the email address to contact jack@armsom.org to apply to become a document contributor. Your enthusiasm will be our unremitting motivation


## Sige7-FAQ

Q1: My ArmSoM-Sige7 cannot boot / is stuck in an infinite boot loop.

The ArmSoM-Sige7 supports USB PD power negotiation for higher voltage requirements, such as 9V, 12V, 15V, and 20V, to meet the total system power load requirements (around 30W, including WiFi, SSD, USB peripherals, etc.). Currently, PD negotiation is implemented in the kernel driver, and we need to boot to the kernel to start the negotiation. However, some power supplies may not be patient while waiting for the ArmSoM-Sige7 to negotiate and will cut off power when a timeout occurs, leading to an infinite boot loop. We offer the following suggestions:

- Use a 12V USB-C power supply without PD protocol.
- Use Armbian firmware, which has ported PD negotiation to the bootloader (u-boot) [patch](https://github.com/armbian/build/blob/31e88922ad2b7a387c30ca9fbda618306dbd638b/patch/u-boot/legacy/u-boot-radxa-rk35xx/board_armsom-sige7/add-u-boot-pd-negotiation-support.patch#L4).
- Boot from eMMC or use a faster SD card.
