---
sidebar_label: "17. 存储设备 使用"
slug: /interface-usage/sdcard
sidebar_position: 17
---

# 17. 硬盘挂载

本文将从存储系统架构角度，对armsom板卡的硬盘分类及管理进行系统性梳理

## 17.1 存储系统概述
ArmSoM 板卡采用分级存储架构，包含四个层次：
* 主存储(eMMC) 系统盘
* 扩展存储(SD卡) 数据/备份盘
* 高速存储(SSD) 高性能存储
* 移动存储(U盘)  临时数据交换

在 Linux 系统中体现为不同类型的块设备：

| 存储类型    | 设备节点       | 接口    |
| -------- | ----------- | ----------- |
| eMMC | /dev/mmcblk0           | 板载 |
| SD卡 | /dev/mmcblk1          | SD卡槽 |
| NVMe SSD | /dev/nvme0n1         | M.2 PCIe |
| U盘 | /dev/sda        | USB接口 |


## 17.2 存储类型详解
这里以ArmSoM Sige7 板卡为例讲解。

### 17.2.1 eMMC 存储
eMMC 是 Sige7 默认的系统存储介质，焊接在板载。

下面是Sige7默认的配置项和规格

1. 容量选项	  32GB/64GB/128GB

2. 接口标准	  eMMC5.1

3. 典型速度	  读~300MB/s，写~150MB/s

4. 设备节点	  /dev/mmcblk0

eMMC 分区结构：
```
# 典型 eMMC 分区布局
/dev/mmcblk0       # eMMC 主设备
├─/dev/mmcblk0p1   # 启动分区 (uboot)
├─/dev/mmcblk0p2   # 系统分区 (rootfs)
├─/dev/mmcblk0p3   # 数据分区
├─/dev/mmcblk0boot0 # Bootloader 分区1 (4MB)
└─/dev/mmcblk0boot1 # Bootloader 分区2 (4MB)
```

### 17.2.2 MicroSD 卡存储
Sige7 板载 MicroSD 卡槽,理论上支持的最大容量是2TB，与emmc一样都是mmc子系统驱动系统上生成的默认节点是`/dev/mmcblk1`。

SD卡使用场景：
* 系统启动（优先级高于 eMMC）

* 数据备份和扩展

* 多系统切换测试


### 17.2.3 NVMe SSD 存储
Sige7 提供 M.2 Key M 接口，支持 NVMe 协议 SSD。
1. 接口类型：M.2 Key M
2. PCIe规格：PCIe 3.0 x4
3. 理论速度：~3.5 GB/s
4. 设备节点：/dev/nvme0n1

NVMe SSD 分区示例：
```
/dev/nvme0n1       # NVMe 主设备
├─/dev/nvme0n1p1   # 第一分区
└─/dev/nvme0n1p2   # 第二分区
```

### 17.2.4 U盘存储
Sige7提供USB接口（1 USB3.0+1 USB2.0+1 USB Type-C），支持各种U盘和移动硬盘。

U盘设备节点：
```
/dev/sda            # 第一个USB存储设备
├─/dev/sda1         # 第一分区
├─/dev/sda2         # 第二分区

/dev/sdb            # 第二个USB存储设备
└─/dev/sdb1
```

## 17.3 存储设备识别与查看

查看所有存储设备:
```
# 查看块设备树状结构
lsblk

# 输出示例（Sige7）：
# mmcblk0        179:0    0  58.3G  0 disk
# ├─mmcblk0p1    179:1    0    16M  0 part  /boot
# ├─mmcblk0p2    179:2    0   128M  0 part
# └─mmcblk0p3    179:3    0  58.1G  0 part  /
# mmcblk1        179:8    0  29.7G  0 disk
# └─mmcblk1p1    179:9    0  29.7G  0 part  /mnt/sd
# nvme0n1        259:0    0   512G  0 disk
# └─nvme0n1p1    259:1    0   512G  0 part  /mnt/ssd
# sda              8:0    0  57.6G  0 disk
# └─sda1           8:1    0  57.6G  0 part  /mnt/usb
```

查看磁盘详细信息:
```
# 查看所有磁盘分区详情
sudo fdisk -l

# 查看特定设备信息
sudo fdisk -l /dev/mmcblk0
sudo fdisk -l /dev/nvme0n1
sudo fdisk -l /dev/sda
```

## 17.4 存储设备分区与格式化

### 17.4.1 查看设备状态
查看设备是否已有分区:
执行`lsblk /dev/mmcblk1`，如果只显示 mmcblk1 而没有 mmcblk1p1，说明未分区

### 17.4.2 创建分区
以 SD卡 (/dev/mmcblk1) 为例:
```
sudo fdisk /dev/mmcblk1

# fdisk 交互命令：
# n - 新建分区
# p - 主分区
# 1 - 分区号
# 回车 - 默认起始扇区
# 回车 - 默认结束扇区（使用全部空间）
# w - 保存并退出
```

### 17.4.3 格式化分区
格式化为 ext4（Linux 推荐）:
```
sudo mkfs.ext4 /dev/mmcblk1p1
```

格式化为 FAT32（Windows 兼容）:
```
sudo mkfs.vfat -F 32 /dev/mmcblk1p1
```

格式化为 NTFS（Windows 大文件）:
```
sudo mkfs.ntfs -f /dev/mmcblk1p1
```

格式化为 exFAT（跨平台大文件）:
```
sudo mkfs.exfat /dev/mmcblk1p1
```

## 17.5 存储设备自动挂载配置

### 17.5.1 使用 udev 规则自动挂载
udev是Linux系统中用于动态管理设备文件的工具，通过规则文件实现设备的自动化管理和配置。

创建 udev 规则文件：
```
sudo vi /etc/udev/rules.d/99-storage-auto-mount.rules
```
添加以下内容：
```
# 1. SD 卡自动挂载到 /mnt/sd
ACTION=="add", KERNEL=="mmcblk1p1", RUN+="/usr/bin/systemd-mount --no-block --options=sync,noatime $env{DEVNAME} /mnt/sd"
ACTION=="remove", KERNEL=="mmcblk1p1", RUN+="/bin/sh -c 'sync && sleep 0.5 && /usr/bin/systemd-umount /mnt/sd 2>/dev/null || true'"

# 2. NVMe SSD 自动挂载到 /mnt/ssd
ACTION=="add", KERNEL=="nvme0n1p1", RUN+="/usr/bin/systemd-mount --no-block --options=noatime $env{DEVNAME} /mnt/ssd"
ACTION=="remove", KERNEL=="nvme0n1p1", RUN+="/usr/bin/systemd-umount /mnt/ssd"

# 3. U盘（FAT32/exFAT/NTFS）自动挂载到 /mnt/usb
ACTION=="add", KERNEL=="sd[a-z][0-9]", SUBSYSTEM=="block", RUN+="/usr/bin/systemd-mount --no-block --options=uid=1000,gid=1000,iocharset=utf8 $env{DEVNAME} /mnt/usb"
ACTION=="remove", KERNEL=="sd[a-z][0-9]", SUBSYSTEM=="block", RUN+="/usr/bin/systemd-umount /mnt/usb"
```

创建挂载点并设置权限:
```
# 创建挂载目录
sudo mkdir -p /mnt/sd /mnt/ssd /mnt/usb

# 设置普通用户读写权限
sudo chmod 777 /mnt/sd /mnt/ssd /mnt/usb
```

重新加载 udev 规则:
```
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### 17.5.2 使用 /etc/fstab 固定挂载
适合需要固定挂载点的场景（如系统盘、数据盘）：
1. 获取设备 UUID
```
sudo blkid
```

2. 编辑 fstab 文件
```
root@armsom:/# sudo cat /etc/fstab
# NVMe SSD（数据盘）- 使用 UUID
UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  /mnt/ssd  ext4  defaults,noatime  0  2

# SD卡（备份盘）- 使用设备路径
/dev/mmcblk1p1  /mnt/sd  ext4  defaults,noatime  0  2

# U盘 - 使用 UUID（FAT32 格式）
UUID=XXXX-XXXX  /mnt/usb  vfat  defaults,uid=1000,gid=1000,umask=000,utf8  0  2
```

3. 测试挂载配置
```
# 创建挂载点
sudo mkdir -p /mnt/ssd /mnt/sd /mnt/usb

# 测试所有挂载点
sudo mount -a

# 检查挂载状态
df -h
```

## 17.6 常用存储管理命令
下面总结了一些常用的磁盘管理命令参考：
```
# 查看所有存储设备
lsblk

# 查看磁盘分区详情
sudo fdisk -l

# 查看文件系统挂载情况
df -h

# 查看设备 UUID
sudo blkid

# 查看 eMMC 信息
mmc-utils mmc extcsd read /dev/mmcblk0 2>/dev/null

# 查看 NVMe SSD 信息
sudo nvme list

# 查看 USB 设备
lsusb

# 测试磁盘读取速度
sudo hdparm -t /dev/mmcblk0
sudo hdparm -t /dev/nvme0n1

# 测试磁盘写入速度
sudo dd if=/dev/zero of=/mnt/ssd/test bs=1M count=1000 conv=fdatasync

# 卸载指定设备
sudo umount /mnt/sd

# 检查并修复文件系统
sudo fsck.ext4 -f /dev/mmcblk1p1
```
