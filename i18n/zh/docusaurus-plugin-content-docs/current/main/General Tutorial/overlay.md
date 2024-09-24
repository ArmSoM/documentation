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
overlays=armsom-sige7-camera-imx415-4k armsom-sige7-display-10hd
```

​	编辑好之后重启设备来更改overlays设置。



### 3.2 Armbian镜像启用overlay

- Armbian镜像的overlay文件存放于板端的路径：/boot/dtb/rockchip/overlay/*.dtbo

- 在 /boot/armbianEnv.txt 文件中找到或者添加 "overlays=" 这个关键词。如下是为 ArmSoM-Sige7 使用两个覆盖层的示例。

```bash
overlays=armsom-sige7-camera-imx415-4k armsom-sige7-display-10hd
```

​	编辑好之后重启设备来更改overlays设置。

## 4. 40-PIN 功能测试

40PIN上的引脚有些一个引脚可以复用多种功能，可以按需配置功能，具体引脚功能可以查看板卡的`40-pin header`

以sige7上40PIN里面的11、15脚打开串口功能为例：
- 查看系统打开的串口
```bash
root@bananapim7:/boot# ls /dev/ttyS*
/dev/ttyS6
```

- 开启 Overlay

11、15脚对应的串口是uart7_m1,对应的overlay文件是/boot/dtb/rockchip/overlay/rk3588-uart7-m1.dtbo。

编辑/boot/armbianEnv.txt文件：
```bash
root@bananapim7:/boot# cat armbianEnv.txt
verbosity=1
bootlogo=false
console=both
overlay_prefix=rockchip-rk3588
overlays=rk3588-uart7-m1
fdtfile=rockchip/rk3588-bananapi-m7.dtb
rootdev=UUID=a61c17cd-2e49-4302-879c-6cb86ebf07d1
rootfstype=ext4
usbstoragequirks=0x2537:0x1066:u,0x2537:0x1068:u
```
这里只是添加了`overlays=`这一行。

重启之后配置生效：
```bash
root@bananapim7:/boot# ls /dev/ttyS*
/dev/ttyS6 /dev/ttyS7
```

:::tip 

40PIN中的功能默认都是关闭的，需要手动打开才能使用

在/boot/armbianEnv.txt 中加入配置，然后重启 Linux 系统生效

如果只需要打开一个功能，那么就填写一个即可，如果多个功能，在`overlays=`后面用空格隔开
overlays=uart2-m0 uart3-m1 uart4-m2 uart7-m1

类似uart7-m1和uart7-m2不能同时使用
:::