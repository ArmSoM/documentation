---
sidebar_label: "16. PCIe 使用"
sidebar_position: 17
---

# 16. PCIe 使用
## 16.1 PCIe 简介
PCIe（Peripheral Component Interconnect Express）是一种用于连接主板和外部设备的高速串行接口标准。它是 PCI 技术的后继者，旨在提供更高的带宽和更好的性能。

- 高速传输： PCIe接口提供了高速的数据传输通道，可用于连接各种硬件设备，如图形卡、存储设备、网络适配器等。它的速度通常以每秒传输的数据位数（例如PCIe x1、x4、x8、x16等）来表示，每个通道的带宽可以根据需要扩展。
- 点对点连接： PCIe采用点对点连接的架构，这意味着每个设备都直接连接到主板上的PCIe插槽，而不需要与其他设备共享带宽。这有助于减少延迟并提高性能。
- 热插拔支持： PCIe接口支持热插拔，允许用户在计算机运行时添加或移除PCIe设备，而不需要重新启动计算机。
- 广泛应用： PCIe接口广泛用于连接图形卡、固态硬盘（SSD）、扩展卡、网络适配器和其他高性能设备。这使得计算机用户可以根据需要扩展和升级系统的性能和功能。


综上所述，PCIe 是一种高速、灵活且广泛应用的串行接口标准，它在现代计算机系统中发挥着关键作用，为连接各种外部设备提供了可靠的解决方案。

## 16.2 RK3588的PCIe控制器
- RK3588共有5个PCIe的控制器，硬件IP是⼀样的，配置不⼀样，其中⼀个4Lane DM模式可以⽀持作为EP
使⽤，另外⼀个2Lane和3个1Lane控制器均只能作为RC使⽤。
- RK3588有两种PCIe PHY，其中⼀种为pcie3.0PHY，含2个Port共4个Lane，另⼀种是pcie2.0的PHY有3
个，每个都是2.0 1Lane，跟SATA和USB combo使⽤。
- pcie3.0 PHY的4Lane可以根据实际需求拆分使⽤，拆分后需要合理配置对应的控制器，所有配置在DTS中
完成，⽆需修改驱动。
![pcie-control](/img/general-tutorial/interface-usage/pcie-control.png)

RK3588 PCIe 的硬件资源及软件上 pcie 控制器节点、 PHY 节点对应关系如图：

![pcie-node](/img/general-tutorial/interface-usage/pcie-node.png)

## 16.3 RK3588 DTS配置
### 16.3.1 ArmSoM-W3上的PCIe接口
- 这里以ArmSoM-W3开发板为例，讲解RK3588的PCIe配置
- ArmSoM-W3开发板上有 1 个 PCIe3.0 x 4 接口和两个PCIe2.0接口，如图：

![pcie-armsom-w3](/img/general-tutorial/interface-usage/pcie-armsom-w3.png)

###  3.2 ArmSoM-W3开发板PCie相关的DTS配置：
一般根据原理图在 DTS 中配置PCie的供电引脚、复位引脚，选择正确的 pcie 控制器节点以及 PHY 节点使能。
- 在kernel/arch/arm64/boot/dts/rockchip/rk3588-armsom-w3.dts中配置如下：

```bash
/ {
	vcc12v_dcin: vcc12v-dcin {
		compatible = "regulator-fixed";
		regulator-name = "vcc12v_dcin";
		regulator-always-on;
		regulator-boot-on;
		regulator-min-microvolt = <12000000>;
		regulator-max-microvolt = <12000000>;
	};

	vcc5v0_sys: vcc5v0-sys {
		compatible = "regulator-fixed";
		regulator-name = "vcc5v0_sys";
		regulator-always-on;
		regulator-boot-on;
		regulator-min-microvolt = <5000000>;
		regulator-max-microvolt = <5000000>;
		vin-supply = <&vcc12v_dcin>;
	};

	vcc3v3_pcie2x1l0: vcc3v3-pcie2x1l0 {
		compatible = "regulator-fixed";
		regulator-name = "vcc3v3_pcie2x1l0";
		regulator-min-microvolt = <3300000>;
		regulator-max-microvolt = <3300000>;
		enable-active-high;
		regulator-boot-on;
		regulator-always-on;
		gpios = <&gpio1 RK_PD2 GPIO_ACTIVE_HIGH>;
		startup-delay-us = <50000>;
		vin-supply = <&vcc5v0_sys>;
	};

	vcc3v3_pcie2x1l2: vcc3v3-pcie2x1l2 {
		compatible = "regulator-fixed";
		regulator-name = "vcc3v3_pcie2x1l2";
		regulator-min-microvolt = <3300000>;
		regulator-max-microvolt = <3300000>;
		startup-delay-us = <5000>;
		vin-supply = <&vcc_3v3_s3>;
	};

	vcc3v3_pcie30: vcc3v3-pcie30 {
		compatible = "regulator-fixed";
		regulator-name = "vcc3v3_pcie30";
		regulator-min-microvolt = <3300000>;
		regulator-max-microvolt = <3300000>;
		enable-active-high;
		gpios = <&gpio1 RK_PA4 GPIO_ACTIVE_HIGH>;
		startup-delay-us = <5000>;
		vin-supply = <&vcc5v0_sys>;
	};
}

&pcie2x1l0 {
	reset-gpios = <&gpio4 RK_PA5 GPIO_ACTIVE_HIGH>;
	vpcie3v3-supply = <&vcc3v3_pcie2x1l0>;
	status = "okay";
};

&pcie2x1l2 {
	reset-gpios = <&gpio3 RK_PB0 GPIO_ACTIVE_HIGH>;
	vpcie3v3-supply = <&vcc3v3_pcie2x1l2>;
	status = "okay";
};

&combphy1_ps {
	status = "okay";
};

&pcie30phy {
	rockchip,pcie30-phymode = <PHY_MODE_PCIE_AGGREGATION>;
	status = "okay";
};

&pcie3x4 {
	reset-gpios = <&gpio4 RK_PB6 GPIO_ACTIVE_HIGH>;
	vpcie3v3-supply = <&vcc3v3_pcie30>;
	status = "okay";
};
```

- pcie30phy、combphy1_ps：PHY 节点
	
- pcie3x4、pcie2x1l0、 pcie2x1l2 ：pcie控制器节点
	
- reset-gpios：复位引脚属性
	
- vcc3v3_pcie2x1l0、vcc3v3_pcie2x1l2、vcc3v3_pcie30：供电引脚节点
  
## 16.4 PCIe设备使用方法
执行`lspci`命令会列出所有PCI设备的信息，包括设备的制造商、型号、PCI地址等。输出通常以文本形式提供，并按总线地址（BDF：Bus, Device, Function）的顺序排列。

```bash
armsom@armsom:~$ lspci
0000:00:00.0 PCI bridge: Rockchip Electronics Co., Ltd Device 3588 (rev 01)
0000:01:00.0 Non-Volatile memory controller: Intel Corporation NVMe Optane Memory Series
0002:20:00.0 PCI bridge: Rockchip Electronics Co., Ltd Device 3588 (rev 01)
0002:21:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8125 2.5GbE Controller (rev 05)
0003:30:00.0 PCI bridge: Rockchip Electronics Co., Ltd Device 3588 (rev 01)
0003:31:00.0 Network controller: Broadcom Inc. and subsidiaries Device 449d (rev 02)
0004:40:00.0 PCI bridge: Rockchip Electronics Co., Ltd Device 3588 (rev 01)
0004:41:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8125 2.5GbE Controller (rev 05)
```

pcie接口接高速固态硬盘（SSD）的情景较多，这里以Intel Corporation生产的非易失性内存（NVMe）控制器为例，详解NVMe控制器的使用方法。

### 16.4.1 NVMe控制器使用

1. 检查NVMe设备是否被识别：
  - 运行以下命令，查看系统是否正确识别了NVMe设备

```bash
armsom@armsom:/$  lspci | grep NVMe
0000:01:00.0 Non-Volatile memory controller: Intel Corporation NVMe Optane Memory Series
```

如果您看到与Intel Corporation相关的NVMe设备信息，则表示设备已经被识别。

2. 查找设备节点

```bash
ls /dev/nvme*
/dev/nvme0  /dev/nvme0n1
```

3. 查看设备的分区信息：

```bash
armsom@armsom:/$ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
mmcblk0      179:0    0 58.3G  0 disk
├─mmcblk0p1  179:1    0    4M  0 part
├─mmcblk0p2  179:2    0    4M  0 part
├─mmcblk0p3  179:3    0   64M  0 part
├─mmcblk0p4  179:4    0  128M  0 part
├─mmcblk0p5  179:5    0   32M  0 part
├─mmcblk0p6  179:6    0   14G  0 part
├─mmcblk0p7  179:7    0  128M  0 part
└─mmcblk0p8  179:8    0 43.9G  0 part
mmcblk0boot0 179:32   0    4M  1 disk
mmcblk0boot1 179:64   0    4M  1 disk
mmcblk1      179:96   0 29.7G  0 disk
├─mmcblk1p1  179:97   0  512M  0 part /boot/firmware
└─mmcblk1p2  179:98   0 29.2G  0 part /
nvme0n1      259:0    0 13.4G  0 disk /mnt
```
	

   NVMe设备通常以/dev/nvmeXnY的形式表示，其中X是NVMe设备的编号，Y是分区编号。此处的NVMe设备名称是nvme0n1。
   
4. 格式化为EXT4文件格式 ( 根据个人需求运行格式化操作 )

```bash
sudo mkfs.ext4 /dev/nvme0n1
```

5. 挂载设备

```bash
armsom@armsom:~$ sudo mount /dev/nvme0n1 /mnt
```

6. 查看挂载路径

```bash
df -h
/dev/nvme0n1     14G   24K   13G   1% /mnt
```
或者

```bash
cat /proc/mounts  | grep nvme
/dev/nvme0n1 /mnt ext4 rw,relatime 0 0
```


7. 卸载设备


```bash
umount /mnt
```

### 16.4.2 读写测速


 使用dd命令进行读写测试：

  - 写测试命令：

```
sudo dd if=/dev/zero of=/dev/nvme0n1 bs=1M count=1000
```

其中if参数是输入文件（通常是/dev/zero，用于写入测试），of参数是输出文件（通常是您的NVMe设备），bs参数是块大小，count参数是要执行的块数

 -  读测试命令：

```
sudo dd if=/dev/nvme0n1 of=/dev/null bs=1M count=1000
```

读写性能可能会受到多种因素的影响，包括设备型号、硬件配置和测试条件等