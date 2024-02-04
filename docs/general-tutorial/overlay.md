---
sidebar_label: "overlay"
sidebar_position: 5
---

# 设备树设置

## 1. 简介

设备树Overlays使得用一个内核支持多个硬件配置成为可能，而且不需要明确地加载或屏蔽内核模块。

## 2. 支持overlay的镜像

目前支持overlay的镜像有：Ubuntu22.04，Armbian

## 3. 如何启用一个overlay

### 3.1 Ubuntu22.04镜像启用overlay

- Ubuntu22.04镜像的overlay文件存放于板端的路径：/boot/firmware/dtbs/rockchip/overlay/*.dtbo

- 在 /boot/firmware/ubuntuEnv.txt文件中找到 "overlays=" 这个关键词。如下是为 ArmSoM-Sige7 使用两个覆盖层的示例。

```bash
overlays=armsom-sige7-camera-imx415-4k armsom-sige7-display-mipi-dsi
```

​	编辑好之后重启设备来更改overlays设置。



### 3.2 Armbian镜像启用overlay

- Armbian镜像的overlay文件存放于板端的路径：/boot/dtb/rockchip/overlay/*.dtbo

- 在 /boot/armbianEnv.txt 文件中找到或者添加 "overlays=" 这个关键词。如下是为 ArmSoM-Sige7 使用两个覆盖层的示例。

```bash
overlays=armsom-sige7-camera-imx415-4k armsom-sige7-display-10hd
```

​	编辑好之后重启设备来更改overlays设置。