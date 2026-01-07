---
sidebar_label: "armsom-sdk"
slug: /build-system-image/armsom-sdk
sidebar_position: 1
---

# 1. ArmSom-SDK Release
armsom-sdk是基于瑞芯微通用Linux SDK工程的定制版本,为RK3588/RK3576主控开发板提供完整的嵌入式Linux BSP支持。

# 2. SDK开发环境搭建
开发环境说明如下：
armsom-sdk是基于Ubuntu系统开发测试的，在开发过程中，主要是用Ubuntu22.04版本， 推荐用户使用Ubuntu20.04或Ubuntu22.04。
PC系统默认使用Win11，在使用RockChip的烧录工具时需要使用到Windows系统。
硬件配置推荐：64位系统，硬盘空间⼤于80G。如果您进⾏多个构建，将需要更⼤的硬盘空间。

## 2.1 安装SDK依赖的软件包
安装SDK构建所需要的软件包，整体复制下面内容到终端中安装：
```
sudo apt-get update && sudo apt-get install git ssh make gcc libssl-dev \
liblz4-tool expect expect-dev g++ patchelf chrpath gawk texinfo chrpath \
diffstat binfmt-support qemu-user-static live-build bison flex fakeroot \
cmake gcc-multilib g++-multilib unzip device-tree-compiler ncurses-dev \
libgucharmap-2-90-dev bzip2 expat gpgv2 cpp-aarch64-linux-gnu libgmp-dev \
libmpc-dev bc python-is-python3 python3-pip python2 u-boot-tools curl \
python3-pyelftools dpkg-dev
```

## 2.2 安装repo
armsom-sdk是⽤repo来下载、管理项⽬的软件仓库
```
mkdir ~/bin
curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
chmod a+x ~/bin/repo
echo PATH=~/bin:$PATH >> ~/.bashrc
source ~/.bashrc
```
执行完上面的命令后来验证`repo -v`是否安装成功能正常运行

## 2.3 Git配置
设置自己的git信息，以确保后续拉取代码时正常进行，如果不需要提交代码的话可以随意设置用户名和邮箱地址
```
git config --global user.name "your name"
git config --global user.email "your mail"
```

## 2.4 切换Python 3
`#查看当前Python版本
python -V`
若返回的版本号为Python3版本，则无需再切换Python版本。若为Python2版本或未发现python，则可以用以下方式切换：
```
#查看当前系统安装的Python版本有哪些
ls /usr/bin/python*

#将python链接到python3
sudo ln -sf /usr/bin/python3 /usr/bin/python

#重新查看默认Python版本
python -V
```
![python](/img/advanced_manual/armsom-build/python.png)

# 3. SDK源码获取
armsom-sdk的代码被划分为了若干git仓库分别进行版本管理， 可以使用repo工具对这些git仓库进行统一的下载，提交，切换分支等操作。

运行以下命令，将在当前用户的家目录下创建一个名为armsom-sdk的目录，用来放入SDK源码。
```
mkdir ~/armsom-sdk
cd armsom-sdk
repo init -u https://github.com/ArmSoM/manifests.git -b linux -m armsom_linux_generic.xml
.repo/repo/repo sync -c -j4
```

# 4. SDK更新
我们会对armsom-sdk不断更新，将修改的内容实时同步到Github，欢迎广大开发爱好者共同来管理维护开源代码， 需要在本地同步更新内容，则可以借助repo或git来实现

## 4.1 使用repo更新整个SDK
首先要更新.repo/manifests，里面保存了repo的配置文件，记录了仓库的版本信息。
```
# 进入.repo/manifests目录
cd .repo/manifests

# 切换分支到Linux
git checkout linux

# 拉取最新的manifests
git pull

#进入SDK顶层文件夹
cd ~/armsom-sdk

# 同步远端仓库
.repo/repo/repo sync -c
```

## 4.2 使用Git更新单独的源码仓库
有时只想更新某个仓库，而不是去更新整个SDK。 或者已经对SDK的某些仓库做出了修改，使用repo同步的话就会失败。 此时就需要对单个仓库进行更新了
这里以debain12仓库为例：
```
# 进入debain12目录下
cd debain12

# 检出到对应仓库的默认分支
git checkout lbc-develop-5.10

# 拉取git仓库
git pull
```

# 5. 自动构建固件
在SDK顶层文件夹下，执行以下命令，以选择要构建的板卡主芯片型号和SDK的配置文件。
执行下面命令选择配置芯片以及配置文件
`./build.sh chip`
当选择完配置文件以后，会使用粉色提示字体提示当前配置文件所用的内核版本
![build](/img/advanced_manual/armsom-build/build.png)
一键编译u-Boot，kernel，Rootfs并打包为update.img镜像
`./build.sh`
构建好的镜像保存在rockdev/目录下。

# 6. 分步构建固件
在初次编译固件时需要运行一键构建固件，但是在在进行固件开发时，建议使用分区构建，使用SDK单个模块构建的功能。

## 6.1 选择SDK配置文件
首先，还是要选择SDK的配置文件,如果已经自动编译过则这一步可以跳过，这里以sige7板卡的debian系统xfce桌面镜像为例  
选择SDK配置文件  
`./build.sh armsom-sige7_rk3588_debian_xfce_linux6.1_defconfig`

## 6.2 U-Boot构建
`./build.sh uboot`  
构建生成的U-boot镜像为u-boot/uboot.img

## 6.3Kernel构建
boot分区内核镜像，先生成内核deb包，然后再编译内核并将生成的deb包打包进boot分区。
按顺序执行以下命令，将自动完成 kernel 的构建及打包。
`./build.sh kernel`  
构建生成的kernel镜像为kernel/extboot.img

## 6.4 rootfs构建
SDK主要支持Ubuntu、Debian，当然其他系统也支持但是不在此说明
Ubuntu、Debian支持不同的桌面版本，在前面选择SDK配置文件时已经指定了  
构建Debian  
`./build.sh debian`  
构建Ubuntu  
`./build.sh ubuntu`  
系统镜像的名称重命名为linaro-(SOC型号)-(桌面版本)-rootfs.img，如linaro-rk3576-gnome-rootfs.img

## 6.5 镜像打包
当u-boot，kernel，Rootfs都构建完成以后，需要再执行 ./build.sh firmware 进行固件打包， 主要是检查分区表文件是否存在，各个分区是否与分区表配置对应，并根据配置文件将所有的文件复制或链接到rockdev/内。  
固件打包  
`./build.sh firmware`  
生成update.img  
`./build.sh updateimg`

# 7. 定制内核
我们提供的内核已经支持绝大多数功能了，但是对于一些需要定制功能的话不一定直接能用，所以需要自己配置内核。
我们以sige7板子上的rtc芯片hym8563为例，讲解如何添加驱动以及配置设备树。

## 7.1 修改内核配置
Linux内核的配置系统由三个部分组成，分别是：
- Makefile：分布在 Linux内核源代码顶层目录及各层目录中，定义 Linux 内核的编译规则；

- 配置文件：给用户提供配置选择的功能，如Kconfig文件定义了配置项， 在编译时，使用 arch/arm64/configs/armsom_linux_rk3588_defconfig 文件对配置项进行赋值；

- 配置工具：包括配置命令解释器和配置用户界面（linux提供基于字符界面、基于Ncurses 图形界面以及 基于 Xwindows 图形界面的用户配置界面，各自对应于make config、make menuconfig 和 make xconfig）。

自定义配置文件可以修改在板卡对应的device/rockchip/rk3588/对应文件中修改RK_KERNEL_DEFCONFIG的定义。
```
#执行命令
make menuconfig KCONFIG_CONFIG=arch/arm64/configs/armsom_linux_rk3588_defconfig ARCH=arm64
```
![11](/img/advanced_manual/armsom-build/11.png)
我们选择配置板卡的hym8563驱动，在英文输入法状态下按下”/”则可以进行搜索，输入”8563”找到改配置选项的位置：
![12](/img/advanced_manual/armsom-build/12.png)
按下 "1" 直接可以定位到对应的选项， 然后按空格选中内容即可。

修改完成后，选择右下角Save进行保存， 注意不要保存到原路径，而是保存到.config ，然后使用以下命令来保存defconfig文件并覆盖原来的配置文件
![13](/img/advanced_manual/armsom-build/13.png)
```
#保存defconfig文件
make savedefconfig ARCH=arm64

#覆盖原来的配置文件
cp defconfig arch/arm64/configs/armsom_linux_rk3588_defconfig
```
如果知道驱动的名字的话也可以直接在armsom_linux_rk3588_defconfig下添加修改

## 7.2 设备树文件
在sige系列的板子中，每块板子都有自己的主设备树，位于 /boot/dtb 里
```
root@armsom:~# ls /boot/dtb/ -al
total 1708
drwxrwxr-x 3 root root   4096 Dec 23  2025 .
drwxr-xr-x 7 root root   4096 Aug 26 23:23 ..
drwxrwxr-x 2 root root   4096 Dec 23  2025 overlay
-rw-rw-r-- 1 root root 277578 Dec 23  2025 rk3576-armsom-cm5-io.dtb
-rw-rw-r-- 1 root root 280081 Dec 23  2025 rk3576-armsom-sige5.dtb
-rw-rw-r-- 1 root root 295991 Dec 23  2025 rk3576-evb1-v10-linux.dtb
-rw-rw-r-- 1 root root 278216 Dec 23  2025 rk3588-armsom-aim7-io.dtb
-rw-rw-r-- 1 root root 285123 Dec 23  2025 rk3588-armsom-sige7.dtb
-rw-rw-r-- 1 root root 286305 Dec 23  2025 rk3588-armsom-w3.dtb
```
而板子使用的主设备数由/boot/rk-kernel.dtb来指定，rk-kernel.dtb 是通过软链接的方式链接到 dtb/rk3588-armsom-sige7.dtb这个设备树上的， 所以在系统启动时会使用该设备树进行启动。
如果想要切换设备树：
```
#进入/boot目录下
cd /boot

#切换rk3588-***.dtb设备树启动
ln -sf dtb/rk3588-***.dtb rk-kernel.dtb
```

## 7.3 配置文件
/boot/uEnv下面的配置文件可以配置设备树插件的开启与关闭， 内核的启动参数，选择启动的内核。
```
root@armsom:/boot# ls /boot/uEnv/ -la
total 24
drwxrwxr-x 2 root root 4096 Aug 26  2025 .
drwxr-xr-x 7 root root 4096 Aug 26 23:23 ..
lrwxrwxrwx 1 root root   20 Aug 26  2025 uEnv.txt -> uEnvarmsom-sige7.txt
-rw-rw-r-- 1 root root  228 Dec 23  2025 uEnvArmsom.txt
-rw-rw-r-- 1 root root 1794 Dec 23  2025 uEnvarmsom-aim7-io.txt
-rw-rw-r-- 1 root root 2058 Dec 23  2025 uEnvarmsom-sige7.txt
-rw-rw-r-- 1 root root 1794 Dec 23  2025 uEnvarmsom-w3.txt
```
配置文件里的是内核版本、设备树插件以及启动参数，

## 7.4 设备树插件
设备树插件位于 /boot/dtb/overlay 里
```
root@armsom:/boot# ls /boot/dtb/overlay
rk3588-armsom-can1-m0.dtbo
rk3588-armsom-can1-m1.dtbo
......
```
目前只包含板卡上面的40pin、摄像头、屏幕的配置，可以参考SDK下arch/arm64/boot/dts/rockchip/overlay的其他设备树添加需要打开的功能。

配置设备树插件的方法是修改设备树插件的配置文件/boot/uEnv/uEnv.txt。
```
#修改你的板子的配置文件
sudo vi /boot/uEnv/uEnv.txt

#下面是sige7配置文件的内容
uname_r=6.1.118-rk3588
initrd=initrd-6.1
size=0x1000000
cmdline="earlyprintk console=ttyFIQ0 console=tty1 consoleblank=0 loglevel=7 rootwait rw rootfstype=ext4"

enable_uboot_overlays=1
#overlay_start

#40pin
#dtoverlay=/dtb/overlay/rk3588-armsom-can1-m0.dtbo
......
#dtoverlay=/dtb/overlay/rk3588-armsom-uart7-m2.dtbo


# Display
#dtoverlay=/dtb/overlay/rk3588-armsom-sige7-display-1200x1900-10.1hd-overlay.dtbo

# CAM0
#dtoverlay=/dtb/overlay/rk3588-armsom-sige7-camera-ov13850-csi0-overlay.dtbo
# CAM1
#dtoverlay=/dtb/overlay/rk3588-armsom-sige7-camera-ov13850-csi1-overlay.dtbo

#overlay_end

```
打开设备树插件的方法就是把相应的设备树插件的注释删除掉，即删除 ‘#’，关闭设备树插件的方法是把相应的设备树插件注释掉，即行首添加 ‘#’
可以看到上面sige7的40pin、摄像头、屏幕功能默认是去掉的，需要手动打开

## 7.5 更新内核
当对内核驱动或者设备树进行修改之后，可以通过在sdk上编译出来的deb包自行安装
在执行完`./build.sh kernel`之后，会在当前目录生成四个安装包
```
lhd@armsom:~/customized_project/armsom-sdk$ ls *.deb
linux-headers-6.1.118-rk3588_6.1.118-rk3588-203_arm64.deb  linux-image-6.1.118-rk3588-dbg_6.1.118-rk3588-203_arm64.deb
linux-image-6.1.118-rk3588_6.1.118-rk3588-203_arm64.deb    linux-libc-dev_6.1.118-rk3588-203_arm64.deb
```
- linux-headers-6.1.118-rk3588_6.1.118-rk3588-203_arm64.deb
该包为内核的源代码，安装后，会把内核的源代码复制到/usr/src/linux-headers-6.1.118-rk3588。
- linux-image-6.1.118-rk3588-dbg_6.1.118-rk3588-203_arm64.deb
该包为内核debug所要用到的内核以及驱动，主要用于系统出错和崩溃时，debug使用（可不安装）
- linux-image-6.1.118-rk3588_6.1.118-rk3588-203_arm64.deb
该包包含了内核，驱动，设备树相关，升级脚本
- linux-libc-dev_6.1.118-rk3588-203_arm64.deb
该包为libc的一些头文件（可不安装）

升级包一共有4个，但只需安装其中2个:  
1.linux-headers-6.1.118-rk3588_6.1.118-rk3588-203_arm64.deb  
2.linux-image-6.1.118-rk3588_6.1.118-rk3588-203_arm64.deb  
安装后重启即可
