---
sidebar_label: "Ethernet 使用"
sidebar_position: 9
---

# Ethernet 使用

## 1. Ethernet 简介
ArmSoM系列产品主要使用到了两款以太网芯片
- RTL8211F－CG
- RTL8125B

## 2. RTL8211F－CG芯片
在ArmSoM系列产品中，ArmSoM-Aim7使用的是RTL8211F－CG千兆以太网芯片

### 2.1 驱动

drivers/net/ethernet/stmicro/stmmac/*

### 2.2 DTS 节点配置

芯片级公共配置  kernel/arch/arm64/boot/dts/rockchip/rk3588.dtsi

```bash
gmac0: ethernet@fe1b0000 {
	compatible = "rockchip,rk3588-gmac", "snps,dwmac-4.20a";
	reg = <0x0 0xfe1b0000 0x0 0x10000>;
	interrupts = <GIC_SPI 227 IRQ_TYPE_LEVEL_HIGH>,
				<GIC_SPI 226 IRQ_TYPE_LEVEL_HIGH>;
	interrupt-names = "macirq", "eth_wake_irq";
	rockchip,grf = <&sys_grf>;
	rockchip,php_grf = <&php_grf>;
	clocks = <&cru CLK_GMAC_125M>, <&cru CLK_GMAC_50M>,
			<&cru PCLK_GMAC0>, <&cru ACLK_GMAC0>,
			<&cru CLK_GMAC0_PTP_REF>;
	clock-names = "stmmaceth", "clk_mac_ref",
				"pclk_mac", "aclk_mac",
				"ptp_ref";
	resets = <&cru SRST_A_GMAC0>;
	reset-names = "stmmaceth";
	power-domains = <&power RK3588_PD_GMAC>;

	snps,mixed-burst;
	snps,tso;

	snps,axi-config = <&gmac0_stmmac_axi_setup>;
	snps,mtl-rx-config = <&gmac0_mtl_rx_setup>;
	snps,mtl-tx-config = <&gmac0_mtl_tx_setup>;
	status = "disabled";

	mdio0: mdio {
		compatible = "snps,dwmac-mdio";
		#address-cells = <0x1>;
		#size-cells = <0x0>;
	};

	gmac0_stmmac_axi_setup: stmmac-axi-config {
		snps,wr_osr_lmt = <4>;
		snps,rd_osr_lmt = <8>;
		snps,blen = <0 0 0 0 16 8 4>;
	};

	gmac0_mtl_rx_setup: rx-queues-config {
		snps,rx-queues-to-use = <1>;
		queue0 {};
	};

	gmac0_mtl_tx_setup: tx-queues-config {
		snps,tx-queues-to-use = <1>;
		queue0 {};
	};
};
```

#### 板级配置 

kernel\arch\arm64\boot\dts\rockchip\rk3588-armsom-aim7.dts

```bash
&gmac0 {
	/* Use rgmii-rxid mode to disable rx delay inside Soc */
	phy-mode = "rgmii-rxid";
	clock_in_out = "output";

	snps,reset-gpio = <&gpio2 RK_PB4 GPIO_ACTIVE_LOW>;
	snps,reset-active-low;
	/* Reset time is 20ms, 100ms for rtl8211f */
	snps,reset-delays-us = <0 20000 100000>;

	pinctrl-names = "default";
	pinctrl-0 = <&gmac0_miim
		     &gmac0_tx_bus2
		     &gmac0_rx_bus2
		     &gmac0_rgmii_clk
		     &gmac0_rgmii_bus>;

	tx_delay = <0x43>;
	/* rx_delay = <0x3f>; */

	phy-handle = <&rgmii_phy>;
	status = "okay";
};

&mdio0 {
	rgmii_phy: phy@1 {
		compatible = "ethernet-phy-ieee802.3-c22";
		reg = <0x1>;
	};
};
```
## 3. RTL8125B芯片
- 在ArmSoM系列产品中，ArmSoM-Sige7和ArmSoM-W3使用的是RTL8125B网卡控制器芯片
- RTL8125B是一款PCIE转RJ45的网卡控制器芯片，在底层调试时只需配置PCIE即可
  
### 3.1 DTS 节点配置

- kernel\arch\arm64\boot\dts\rockchip\rk3588-armsom-sige7.dts
	
```bash
&pcie2x1l0 {
	reset-gpios = <&gpio4 RK_PA5 GPIO_ACTIVE_HIGH>;
	rockchip,init-delay-ms = <100>;
	status = "okay";
};

&pcie2x1l2 {
	reset-gpios = <&gpio3 RK_PB0 GPIO_ACTIVE_HIGH>;
	rockchip,init-delay-ms = <100>;
	status = "okay";
	
};
```

## 4. Ethernet测试
### 4.1 查看IP地址

```bash
1. ifconfig -a
```

```bash
2. ip addr
```

### 4.2 连通性测试

```bash
armsom@armsom-sige7:/$ sudo ping -c 10 www.baidu.com
PING www.a.shifen.com (183.2.172.42) 56(84) bytes of data.
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=1 ttl=52 time=8.40 ms
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=2 ttl=52 time=8.17 ms
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=3 ttl=52 time=7.81 ms
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=4 ttl=52 time=8.38 ms
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=5 ttl=52 time=10.1 ms
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=6 ttl=52 time=8.59 ms
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=7 ttl=52 time=8.62 ms
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=8 ttl=52 time=8.89 ms
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=9 ttl=52 time=8.70 ms
64 bytes from 183.2.172.42 (183.2.172.42): icmp_seq=10 ttl=52 time=8.81 ms

--- www.a.shifen.com ping statistics ---
10 packets transmitted, 10 received, 0% packet loss, time 9015ms
rtt min/avg/max/mdev = 7.806/8.644/10.086/0.568 ms
```
### 4.3 2.5G网口速率测试
iperf是一种网络性能测试工具，它通过在两个计算机之间传输数据来测量网络带宽。其中armsom-w3作为iperf服务器，armsom-sige7作为iperf客户端。服务器监听指定的端口，iperf客户端生成特定大小的数据流，并通过TCP或UDP协议将数据发送到服务器。以下是测试结果：

- 客户端：

```bash
armsom@armsom-sige7:/$ sudo iperf -c 192.168.100.11l -t l0 -i l
-------------------------------------------------------------
client connecting to 192.168.100.111，TCP port 5001
TCP window size: 45.0 KByte (default)
-------------------------------------------------------------
[ 3] local 192.168.100.110 port 60564 connected with 192.168.100.1ll port 5001
[ID] IntervalTransferBandwidth
[ 3] 0.0000-1.0000 sec 275 NBytes 2.31 Gbits/sec
[ 3] 1.0000-2.0000 sec 281 NBytes 2.35 Gbits/sec
[ 3] 2.0000-3.0000 sec 278 MBytes 2.34 Gbits/sec
[ 3] 3.0000-4.0000 sec 280 NBytes 2.35 Gbits/sec
[ 3] 4.0000-5.0000 sec 279 NBytes 2.34 Gbits/sec
[ 3] 5.0000-6.0000 sec 279 MBytes 2.34 Gbits/sec
[ 3] 6.0000- 7.0000 sec 276 NBytes 2.32 Gbits/sec
[ 3] 7.0000-8.0000 sec 282 NBytes 2.36 Gbits/sec
[ 3] 8.0000-9.0000 sec 279 MBytes 2.34 Gbits/sec
[ 3] 9.0000-10.0000 sec 278 MBytes 2.33 Gbits/sec
[ 3] 10.0000-10.0002 sec 256 KBytes 11.2 Gbits/sec
[ 3] 0.0000-10.0002 sec 2.72 GBytes 2.34 Gbits/sec
```
- 服务器端：

```bash
armsom@armsom-w3:/$ iperf -s
-------------------------------------------------------------
Server listening on TCp port 5001
Tcp window size: 128 KByte (default)
-------------------------------------------------------------
[ 4] local 192.168.100.111 port 5081 connected with 192.168.108.110 port 68564
[ID]  Interval         Transfer        Bandwidth 
[ 4] 0.0000-10.0045 sec 2.72 GBytes 2.34 Gbits/sec
```
测试结果中，每秒的带宽大致在2.31 Gbits/sec到2.36 Gbits/sec之间波动，最后的平均带宽为2.34 Gbits/sec。