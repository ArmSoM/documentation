---
sidebar_label: "rockchip-boot"
sidebar_position: 5
---

# rockchip-boot

First, let us clarify a concept. When we start a Linux system, there are many startup stages;

Then we need to know how the firmware is packaged and where it is stored;

Finally, we will explain how to write to different media and boot from there
Here is the pre-released rkbian from Rockchip, which may be mentioned later

https://github.com/rockchip-linux/rkbin

## Boot process

This chapter introduces the general startup process of Rockchip processor, including detailed information on which images can be used as the startup path on the Rockchip platform.

- Use U-Boot TPL/SPL from upream or rockhip U-Boot, complete source code.
- Use Rockchip idbLoader, which is composed of the Rockchip ddr init bin file and the miniloader bin file in the Rockchip rkbin project

```
+--------+----------------+----------+---------------- -+---------+
|Boot phase | Terminology | Program name | RK image name | Image location |
+--------+----------------+----------+---------------- -+---------+
| 1 | Primary | ROM code | BootRom | |
| | Program | | | |
| | Loader | | | |
| | | | | |
| 2 | Secondary | U-Boot |idbloader.img| 0x40 | pre-loader
| | Program | TPL/SPL | | |
| | Loader (SPL) | | | |
| | | | | |
| 3 | - | U-Boot | u-boot.itb | 0x4000 | including u-boot and atf
| | | | uboot.img | | only used with miniloader
| | | | | |
| | | ATF/TEE | trust.img | 0x6000 | only used with miniloader
| | | | | |
| 4 | - | kernel | boot.img | 0x8000 |
| | | | | |
| 5 | - | rootfs | rootfs.img | 0x40000 |
+--------+----------------+----------+---------------- -+---------+
```

They are different concepts when we talk about booting from eMMC/SD/U-Disk/net
* Stage 1 is always located in the boot ROM, which loads stage 2, and may load stage 3 (when the SPL_BACK_TO_BROM option is enabled).
* Booting from SPI flash means stage 2 and 3 (SPL and U-Boot only) firmware in SPI flash and stage 4/5 firmware elsewhere;
* Booting from eMMC refers to all firmware in eMMC (including stages 2, 3, 4, and 5);
* Booting from the SD card refers to all firmware in the SD card (including stages 2, 3, 4, and 5);
* Booting from a USB drive refers to stage 4 and stage 5 (excluding SPL and U-Boot) firmware on the disk, optionally including stage 5 only;
* Boot from net/tftp means stage 4 and stage 5 firmware on the network (excluding SPL and U-Boot);

![rockchip-boot](/img/general-tutorial/rockchip-boot.jpg)

Boot process 1 is a typical Rockchip boot process using Rockchip miniloader;
Boot Flow 2 works on most SoCs where U-Boot TPL is used for ddr initialization and SPL is used for trust (ATF/OP-TEE) loading and running to the next stage;

Note 1. If loader1 has more than 1 stage, the program will return to the bootrom and load the bootrom and run to the next stage. For example. If loader1 is tpl and spl, then bootrom will run to tpl first, tpl init ddr and return to bootrom, bootrom loads and runs to spl.
Note 2. If trust is enabled, loader1 needs to load trust and u-boot at the same time, then run trust in safe mode (EL3 in armv8), trust is initialized and run U-Boot (EL2) in non-safe mode in armv8 ).
Note 3: For trust (in trust.img or u-boot.itb), armv7 has only one tee.bin, and armv8 has options for bl31.elf and bl32.
Note 4. The content in boot.img can be zImage and its dtb under Linux, grub.efi, or AOSP boot.img, ramdisk is optional;

## Packaging options

After we understand the launch,

Here is the packaging list before stages 2 ~ 4:

There is source code:
     * From U-Boot: u-boot-spl.bin, u-boot.bin (may use u-boot-nodtb.bin and u-boot.dtb instead)
     * From kernel: kernel Image/zImage file, kernel dtb,
     * From ATF (ARM Trusted firmware): bl31.elf
Binaries provided by Rockchip:
     * ddr, usbplug, miniloader, bl31/op-tee, (all chips with 'rkxx_' and '_x.xx.bin' suffix)
    
We provide two different bootloader methods for different solutions, with completely different steps and request files. But not all platforms support both bootloader methods. The following are the types of images packaged from these files:

// todo