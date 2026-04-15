---
sidebar_label: "17. storage interface Usage"
slug: /interface-usage/sdcard
sidebar_position: 17
---
# 17. Storage Management

This document provides a systematic overview of storage classification and management on the ArmSoM board from a storage architecture perspective.

## 17.1 Storage System Overview
The ArmSoM board uses a tiered storage architecture consisting of four layers:
* Primary Storage (eMMC): System disk
* Expansion Storage (SD Card): Data/Backup disk
* High-Speed Storage (SSD): High-performance storage
* Removable Storage (USB Drive): Temporary data exchange

These appear as different types of block devices in Linux:

| Storage Type    | Device Node       | Interface    |
| -------- | ----------- | ----------- |
| eMMC | /dev/mmcblk0           | Onboard |
| SD卡 | /dev/mmcblk1          | SD Card Slot |
| NVMe SSD | /dev/nvme0n1         | M.2 PCIe |
| USB Drive | /dev/sda        | USB Port |


## 17.2 Storage Type Details
This section uses the ArmSoM Sige7 board as an example.

### 17.2.1 eMMC Storage
eMMC is the default system storage medium on the Sige7 and is soldered directly onto the board.

Default Configuration & Specifications:

1. Capacity Options: 32GB / 64GB / 128GB

2. Interface Standard: eMMC 5.1

3. Typical Speed: Read ~300MB/s, Write ~150MB/s

4. Device Node: /dev/mmcblk0

eMMC Partition Layout:
```
# Typical eMMC partition layout
/dev/mmcblk0       # eMMC main device
├─/dev/mmcblk0p1   # Boot partition (U-Boot)
├─/dev/mmcblk0p2   # System partition (rootfs)
├─/dev/mmcblk0p3   # Data partition
├─/dev/mmcblk0boot0 # Bootloader partition 1 (4MB)
└─/dev/mmcblk0boot1 # Bootloader partition 2 (4MB)
```

### 17.2.2 MicroSD Card Storage
The Sige7 features an onboard MicroSD card slot. Theoretically, it supports cards up to 2TB. Like eMMC, it is driven by the MMC subsystem and appears as `/dev/mmcblk1`.

Use Cases for SD Cards:
1. Booting the system (priority is higher than eMMC)

2. Data backup and expansion

3. Multi-system booting and testing


### 17.2.3 NVMe SSD Storage
The Sige7 provides an M.2 Key M interface that supports NVMe protocol SSDs.
1. Interface Type: M.2 Key M

2. PCIe Specification: PCIe 3.0 x4

3. Theoretical Speed: ~3.5 GB/s

4. Device Node: /dev/nvme0n1

NVMe SSD Partition Example:
```
/dev/nvme0n1       # NVMe main device
├─/dev/nvme0n1p1   # First partition
└─/dev/nvme0n1p2   # Second partition
```

### 17.2.4 USB Drive Storage
The Sige7 provides USB ports (1x USB 3.0, 1x USB 2.0, 1x USB Type-C) and supports various USB drives and external hard drives.

USB Drive Device Nodes:
```
/dev/sda            # First USB storage device
├─/dev/sda1         # First partition
├─/dev/sda2         # Second partition

/dev/sdb            # Second USB storage device
└─/dev/sdb1
```

## 17.3 Identifying and Viewing Storage Devices

List all storage devices in a tree structure:
```
lsblk

# Example output on Sige7:
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

View detailed disk information:
```
# View partition details for all disks
sudo fdisk -l

# View details for a specific device
sudo fdisk -l /dev/mmcblk0
sudo fdisk -l /dev/nvme0n1
sudo fdisk -l /dev/sda
```

## 17.4 Partitioning and Formatting Storage Devices

### 17.4.1 Check Device Status
Check if a device already has partitions:
```
lsblk /dev/mmcblk1
```
If the output shows only mmcblk1 without an mmcblk1p1 entry, the device is not partitioned.

### 17.4.2 Creating a Partition
Example using an SD card (/dev/mmcblk1):
```
sudo fdisk /dev/mmcblk1

# Interactive fdisk commands:
# n - Create new partition
# p - Select primary partition type
# 1 - Partition number
# Enter - Accept default first sector
# Enter - Accept default last sector (use all space)
# w - Write changes and exit
```

### 17.4.3 Formatting a Partition
Format as ext4 (recommended for Linux):
```
sudo mkfs.ext4 /dev/mmcblk1p1
```

Format as FAT32 (for Windows compatibility):
```
sudo mkfs.vfat -F 32 /dev/mmcblk1p1
```

Format as NTFS (for Windows, large files):
```
sudo mkfs.ntfs -f /dev/mmcblk1p1
```

Format as exFAT (cross-platform, large files):
```
sudo mkfs.exfat /dev/mmcblk1p1
```

## 17.5 Automatic Mounting Configuration

### 17.5.1 Automatic Mounting with udev Rules
udev is the Linux device manager that dynamically manages device files. Rules files allow for automatic device handling and configuration.

Create a udev rules file:
```
sudo vi /etc/udev/rules.d/99-storage-auto-mount.rules
```
Add the following content:
```
# 1. Automount SD card to /mnt/sd
ACTION=="add", KERNEL=="mmcblk1p1", RUN+="/usr/bin/systemd-mount --no-block --options=sync,noatime $env{DEVNAME} /mnt/sd"
ACTION=="remove", KERNEL=="mmcblk1p1", RUN+="/bin/sh -c 'sync && sleep 0.5 && /usr/bin/systemd-umount /mnt/sd 2>/dev/null || true'"

# 2. Automount NVMe SSD to /mnt/ssd
ACTION=="add", KERNEL=="nvme0n1p1", RUN+="/usr/bin/systemd-mount --no-block --options=noatime $env{DEVNAME} /mnt/ssd"
ACTION=="remove", KERNEL=="nvme0n1p1", RUN+="/usr/bin/systemd-umount /mnt/ssd"

# 3. Automount USB drives (FAT32/exFAT/NTFS) to /mnt/usb
ACTION=="add", KERNEL=="sd[a-z][0-9]", SUBSYSTEM=="block", RUN+="/usr/bin/systemd-mount --no-block --options=uid=1000,gid=1000,iocharset=utf8 $env{DEVNAME} /mnt/usb"
ACTION=="remove", KERNEL=="sd[a-z][0-9]", SUBSYSTEM=="block", RUN+="/usr/bin/systemd-umount /mnt/usb"
```

Create mount points and set permissions:
```
# Create mount directories
sudo mkdir -p /mnt/sd /mnt/ssd /mnt/usb

# Allow read/write for standard users
sudo chmod 777 /mnt/sd /mnt/ssd /mnt/usb
```

Reload udev rules:
```
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### 17.5.2 Fixed Mounting with /etc/fstab
This method is suitable for scenarios requiring fixed mount points (e.g., system disks, data disks).
1. Get the device UUID:
```
sudo blkid
```

2. Edit the fstab file:
```
root@armsom:/# sudo cat /etc/fstab
# NVMe SSD (Data Disk) - Using UUID
UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  /mnt/ssd  ext4  defaults,noatime  0  2

# SD Card (Backup Disk) - Using device path
/dev/mmcblk1p1  /mnt/sd  ext4  defaults,noatime  0  2

# USB Drive - Using UUID (FAT32 format)
UUID=XXXX-XXXX  /mnt/usb  vfat  defaults,uid=1000,gid=1000,umask=000,utf8  0  2
```

3. Test the mount configuration:
```
# Create mount points
sudo mkdir -p /mnt/ssd /mnt/sd /mnt/usb

# Test all mount points
sudo mount -a

# Check mount status
df -h
```

## 17.6 Common Storage Management Commands
Here is a summary of commonly used disk management commands:
```
# View all storage devices
lsblk

# View detailed disk partition information
sudo fdisk -l

# View filesystem mount status
df -h

# View device UUIDs
sudo blkid

# View eMMC information
mmc-utils mmc extcsd read /dev/mmcblk0 2>/dev/null

# View NVMe SSD information
sudo nvme list

# View USB devices
lsusb

# Test disk read speed
sudo hdparm -t /dev/mmcblk0
sudo hdparm -t /dev/nvme0n1

# Test disk write speed
sudo dd if=/dev/zero of=/mnt/ssd/test bs=1M count=1000 conv=fdatasync

# Unmount a specified device
sudo umount /mnt/sd

# Check and repair a filesystem
sudo fsck.ext4 -f /dev/mmcblk1p1
```

