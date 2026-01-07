---
sidebar_label: "系统备份"
sidebar_position: 2
slug: /build-system-image/backup
---

# 1. 系统备份

## 1.1 Debian系统备份

### 1.1.1 安装ssh、rsync

```
sudo apt-get install ssh
sudo apt-get install rsync
```

### 1.1.2 设置root用户密码

```
sudo passwd root

#如果当前用户已经是root用户，可以直接运行
passwd
```

### 1.1.3 设定root登录

**PermitRootLogin是sshd服务的配置项之一，它决定了是否允许root用户通过SSH登录到系统。PermitRootLogin有以下几种取值:**

1. **yes:允许root用户通过SSH登录。**
2. **no:禁止root用户通过SSH登录。**
3. **without-password:只允许使用公钥进行身份验证的root用户通过SSH登录。**
4. **forced-commands-only:只允许通过强制命令（比如scp）进行身份验证的root用户通过SSH登录。**

**编辑SSH配置文件检查 **`PermitRootLogin` 选项的设置。确保允许 `root` 用户登录：

```
vi /etc/ssh/sshd_config

默认是
#PermitRootLogin prohibit-password
改为
PermitRootLogin yes
```

**保存文件后，重启SSH服务：**

```
sudo systemctl restart sshd
```

### 1.1.4 清除系统多余文件

**配置开发板环境的时候会出现很多残余的缓存或者临时文件，可以先把板子上的空间清理一下。**

**首先，使用命令查看磁盘空间的使用情况**

```
du -sh /*
```

**清理系统生成的临时文件和缓存**

```
sudo rm -rf /tmp/*
sudo rm -rf /var/tmp/*
sudo rm -rf /var/cache/
```

**这一步对固件大小没有要求的话也可以忽略**

## 1.2 Ubuntu主机上的操作

### 1.2.1 安装ssh、rsync

```
sudo apt-get install ssh
sudo apt-get install rsync
```

### 1.2.2 同步开发板文件

**ping一下开发板，确保ubuntu主机和开发板能够ping通。** **接着在Ubuntu主机上创建一个目录,用于存放导出的开发板文件系统。**

```
lhd@lhd:~/3576_rootfs_test$ mkdir rootfs
```

**使用以下命令同步RK3576开发板上的文件系统**

```
sudo rsync -avx root@192.168.100.123:/ rootfs
```

**其中：**

* **root为开发板的用户名**
* **192.168.100.123为开发板的ip地址，这个按照自己板子的实际情况定**
* **/：根目录是开发板的根目录**
* **rootfs：这里是ubuntu主机上创建的rootfs文件夹的路径**

**执行这一步一定需要root用户才行，前面也有讲到怎么配置root用户用于ssh登录。**

**同步的过程需要点时间，执行完命令后可以将开发板的文件系统同步到ubuntu主机上。**

### 1.2.3 创建镜像文件

**先使用dd命令创建一个空镜像文件。**

```
lhd@armsom:~/3576_rootfs_test$ dd if=/dev/zero of=rk3576_rootfs.img  bs=1M count=7168
```

**其中：**

* **/dev/zero：特殊的设备文件,用来生成一个指定大小且内容为零的文件**
* **rk3576\_rootfs.img：要创建的镜像文件**
* **bs=1M ：表示每块读写1M数据**
* **count=4096：拷贝块的数量**

**这里count的实际大小可以根据开发板的系统大小调整，在开发板下执行**`df -h`	**计算得到系统的大小。**

### 1.2.4 格式化镜像文件

**使用以下命令格式化镜像文件，并加入linuxroot卷标**

```
sudo mkfs.ext4 -F -L linuxroot rk3576_rootfs.img
```

**这条命令将会在 **`rk3576_rootfs.img` 文件上创建一个 ext4 文件系统，这个文件系统可以用于存储数据或者作为一个磁盘镜像文件。

### 1.2.5 填充镜像文件

**挂载根文件镜像、并往里面拷入修改后的文件系统，使用以下命令完成操作：**

```
mkdir rk3576_rootfs_mount
sudo mount rk3576_rootfs.img rk3576_rootfs_mount
sudo cp -rfp rootfs/* rk3576_rootfs_mount
```

**这里如果报错**`cp:写入出错；设备上没有空间`，那就是前面执行`dd`命令的时候count的大小设置小了

**执行完前面的命令之后需要卸载镜像**

```
sudo umount rk3576_rootfs_mount
```

### 1.2.6 精简镜像文件

**经过前面的流程rk3576\_rootfs.img镜像文件里就有开发板的文件系统了，但rk3576\_rootfs.img文件大小不是文件系统的实际大小，还要经过处理才能使用。**

**检查镜像文件完整性以及精简文件大小**

```
lhd@armsom:~/3576_rootfs_test$ sudo e2fsck -p -f rk3576_rootfs.img
linuxroot: 97295/655360 文件（0.1% 不连续），1442978/2621440 块
lhd@armsom:~/3576_rootfs_test$ sudo resize2fs -M rk3576_rootfs.img
resize2fs 1.46.5 (30-Dec-2021)
将 rk3576_rootfs.img 上的文件系统调整为 1556652 个块（每块 4k）。
rk3576_rootfs.img 上的文件系统大小已经调整为 1556652 个块（每块 4k）。
```

**至此，得到了一个包含完整原开发板的系统镜像。**

## 1.3 部署固件

**得到固件之后需要测试一下以及部署固件 重新烧录根文件系统镜像到开发板进行测试** 
![rkdevtool](/img/rkdevtool.png)

**1.烧录没有部署应用的开发板固件**

**2.给开发板上电，让开发板进入LOADER模式，使用瑞芯微RKDevToolv3.28烧录工具，勾选rootfs 分区，点击设备分区表确定一下分区位置，最后选择固件如上图所示。**

**3.进系统确定之前部署的文件是否存在**

## 2. Armbian系统备份

建议使用armbian-config 工具备份到SD [armbian-config 备份](/getting-start/armbian-config#103-使用示例)

按下面脚本操作可以生成备份的镜像：

```
#!/bin/bash

# 以下操作均在U盘分区上进行，以免影响本地存储，U盘分区挂载到/mnt

# GPT分区表的root分区类型
PARTITION_TYPE_UUID_ROOT="B921B045-1DF0-41C3-AF44-4C6F280D3FAE"

# 创建空镜像
truncate --size=6500M sdcard.img

# 创建root分区，起始位置为16MiB
echo "1 : name=\"rootfs\", start=16MiB, type=${PARTITION_TYPE_UUID_ROOT}"|sfdisk --label gpt sdcard.img

# 创建loop设备
losetup -fP ./sdcard.img

# 创建root分区挂载目录
mkdir -p rootfs_mount

# 创建ext4分区
sudo mkfs.ext4 /dev/loop0p1

# 获取root分区uuid
rootfs_uuid=$(blkid -s UUID -o value /dev/loop0p1)

# 挂载root分区
sudo mount /dev/loop0p1 ./rootfs_mount/

# 将本机磁盘文件rsync到挂载的root分区（把u盘挂载到/mnt目录，所以需要排除/mnt目录的同步）
sudo rsync -aHWh -X --exclude="/dev/*" --exclude="/proc/*" --exclude="/run/*" --exclude="/tmp/*" --exclude="/sys/*" --exclude="/mnt/*" --info=progress0,stats1 / ./rootfs_mount/

# 修改内核启动参数中的root分区uuid
sudo sed -i "s|^rootdev=UUID.*$|rootdev=UUID=${rootfs_uuid}|g" ./rootfs_mount/boot/armbianEnv.txt
sudo sed -i "s|^UUID.*$|UUID=${rootfs_uuid}|g"  ./rootfs_mount/etc/fstab

# 开机自动resize分区大小
sudo chroot ./rootfs_mount/ systemctl --no-reload enable armbian-resize-filesystem.service

# 同步磁盘写操作
sudo sync

# 卸载root分区
sudo umount ./rootfs_mount

# 将uboot安装到loop镜像
source /usr/lib/u-boot/platform_install.sh
write_uboot_platform $DIR /dev/loop0

# 卸载loop设备
losetup -D

# 生成的 sdcard.img 和正常的armbian镜像一样，可以写到emmc和sd卡，进入系统后需要运行命令 sudo systemctl start armbian-resize-filesystem.service，将分区扩展到正常大小
```

烧录到sd卡分区：

`sudo dd if=./sdcard.img of=/dev/mmcblk1 bs=4M status=progress conv=sync`
