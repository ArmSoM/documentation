---
sidebar_label: "14. Ethernet Usage"
slug: /interface-usage/ethernet
sidebar_position: 14
---

# 14. Ethernet Usage

## 14.1 Ethernet Introduction

The ArmSoM series of products mainly use two Ethernet chips:

- RTL8211F-CG
- RTL8125B

## 14.2 RTL8211F-CG Chip

The ArmSoM-AIM7 in the ArmSoM series uses the RTL8211F-CG Gigabit Ethernet chip.

### 14.2.1 Driver

drivers/net/ethernet/stmicro/stmmac/*

### 14.2.2 DTS Node Configuration 

Chip-level common configuration kernel/arch/arm64/boot/dts/rockchip/rk3588.dtsi

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

## 14.3 RTL8125B Chip

- In the ArmSoM series, the ArmSoM-Sige7 and ArmSoM-W3 use the RTL8125B network controller chip.
- RTL8125B is a PCIE-to-RJ45 network controller chip. During low-level debugging, only the PCIE needs to be configured.

### 14.3.1 DTS Node Configuration

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

## 14.4 Ethernet Test

### 14.4.1 View IP Address

```bash
1. ifconfig -a
```

```bash 
2. ip addr
```

### 14.4.2 Connectivity Test

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

### 14.4.3 2.5G Network Speed Test

iperf is a network performance testing tool that measures network bandwidth by transmitting data between two computers. In this case, armsom-w3 acts as the iperf server, and armsom-sige7 acts as the iperf client. The server listens on a specified port, and the iperf client generates a data stream of a specific size and sends the data to the server through the TCP or UDP protocol. The following are the test results:

- Client:

```bash
armsom@armsom-sige7:/$ sudo iperf -c 192.168.100.111 -t 10 -i 1
-------------------------------------------------------------
Client connecting to 192.168.100.111, TCP port 5001
TCP window size: 45.0 KByte (default)
-------------------------------------------------------------
[ 3] local 192.168.100.110 port 60564 connected with 192.168.100.111 port 5001
[ID] Interval       Transfer     Bandwidth
[ 3] 0.0000-1.0000 sec 275 MBytes  2.31 Gbits/sec
[ 3] 1.0000-2.0000 sec 281 MBytes  2.35 Gbits/sec
[ 3] 2.0000-3.0000 sec 278 MBytes  2.34 Gbits/sec
[ 3] 3.0000-4.0000 sec 280 MBytes  2.35 Gbits/sec
[ 3] 4.0000-5.0000 sec 279 MBytes  2.34 Gbits/sec
[ 3] 5.0000-6.0000 sec 279 MBytes  2.34 Gbits/sec
[ 3] 6.0000-7.0000 sec 276 MBytes  2.32 Gbits/sec
[ 3] 7.0000-8.0000 sec 282 MBytes  2.36 Gbits/sec
[ 3] 8.0000-9.0000 sec 279 MBytes  2.34 Gbits/sec
[ 3] 9.0000-10.0000 sec 278 MBytes  2.33 Gbits/sec
[ 3] 10.0000-10.0002 sec 256 KBytes  11.2 Gbits/sec
[ 3] 0.0000-10.0002 sec 2.72 GBytes  2.34 Gbits/sec
```

- Server:

```bash
armsom@armsom-w3:/$ iperf -s
-------------------------------------------------------------
Server listening on TCP port 5001
TCP window size: 128 KByte (default)
-------------------------------------------------------------
[ 4] local 192.168.100.111 port 5001 connected with 192.168.100.110 port 60564
[ID] Interval         Transfer     Bandwidth
[ 4] 0.0000-10.0045 sec 2.72 GBytes  2.34 Gbits/sec
```

In the test results, the bandwidth per second fluctuates roughly between 2.31 Gbits/sec and 2.36 Gbits/sec, with the final average bandwidth being 2.34 Gbits/sec.