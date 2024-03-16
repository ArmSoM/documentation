---
sidebar_label: "armsom-build简介"
sidebar_position: 6
---

# 一. armsom-build简介
armsom-build是armsom团队推出的一套开源bsp，可以构建出armsom系列产品的镜像。目前只支持构建Ubuntu22.04镜像，后续将增加对Debian镜像的构建与支持。
目录包含有 build、config、docker、overlay、packages、scripts、等目录
## 支持的开发板
- [Armsom Sige7](https://docs.armsom.org/docs/category/sige7-rk3588-1)
- [Armsom W3](https://docs.armsom.org/docs/category/lm7-1)
- [Armsom Aim7](https://docs.armsom.org/docs/category/aim7-1)

  **持续更新中...**
## 支持的kernel版本
- Linux version：5.10.160 arm64
- Linux version：6.1.43  arm64
## 目录结构

- LICENSE：GNU, GPL通用公共许可证
- README.md：项目说明文档
- build：从网上<font color="red" size="3">git clone</font>下载的uboot, kernel, rootfs的源码放在此目录
- build.sh：编译出整个镜像的脚本
- config：板级配置，kernel配置文件
- docker：docker相关
- images：存放编译生成的固件
- overlay：bsp定制化操作，覆盖层
- packages：uboot相关信息
- scripts：构建系统的脚本，主要是从网上下载源码然后编译打包成deb包，并将各个组件：uboot, kernel, rootfs打包成一个完整的固件

# 二. 开发环境搭建
- 请使用 Ubuntu 22.04及以上版本服务器，然后安装以下软件包：

```bash
sudo apt-get install -y build-essential gcc-aarch64-linux-gnu bison \
qemu-user-static qemu-system-arm qemu-efi u-boot-tools binfmt-support \
debootstrap flex libssl-dev bc rsync kmod cpio xz-utils fakeroot parted \
udev dosfstools uuid-runtime git-lfs device-tree-compiler python2 python3 \
python-is-python3 fdisk bc debhelper python3-pyelftools python3-setuptools \
python3-distutils python3-pkg-resources swig libfdt-dev libpython3-dev
```
# 三.  编译整个板级固件
- 拉取源代码并编译：

	```bash
	git clone https://github.com/ArmSoM/armsom-build.git
	cd armsom-build
	sudo ./build.sh --board=armsom-sige7
	```
- 编译出的固件存放在：armsom-build/images目录下：

	![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/4d8e0f87d2934d939729ceacd9583c83.png)
# 四. 在本地修改kernel后重新编译出完整固件
- 删除linux-headers和linux-image的deb包：
	```bash
	cd ./armsom-build/build
	sudo rm -rf linux-headers-5.10.160_5.10.160-1_arm64.deb
	sudo rm -rf linux-image-5.10.160_5.10.160-1_arm64.deb
	```
- 在本地kernel源码：armsom-build\build\linux-rockchip中修改kernel
- 重新编译完整固件

	```bash
	sudo ./build.sh --board=armsom-sige7
	```

# 五. 烧录固件
该方法适用于 Windows、MacOS、Linux x64 操作系统
从[balena官网](https://etcher.balena.io/)下载 balenaEtcher，选择指定主机系统下载。

- 将要烧录的MicroSD Card插入到MicroSD Card读卡器。 
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/0d9ec564438343eb88b79dc0ad55956f.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/e43d7c81107b4294a086b6c82b761e71.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/1de3891cc23f447f8e3aa4d2e1c036d0.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/ffc8cb41cd994af78159f05c7b0ff938.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/bf39923e3f6b4b979ac5a307e8c8afc4.png)


# 六. 桌面预览
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/2974834940474d3ab86ed94359c336f6.png)