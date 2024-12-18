---
sidebar_label: "12. Watchdog Usage"
slug: /interface-usage/watchdog
sidebar_position: 12
---

# 12. Watchdog 简介

**Watchdog（看门狗）** 是一种用于监控系统运行状态的硬件或软件机制。它的主要功能是确保系统在异常情况下能够自动恢复或重启，以保证系统的稳定性和可靠性。尤其在嵌入式系统、服务器、物联网设备等需要长时间持续运行的场景中，watchdog 是一种重要的容错机制。

## 12.1 工作原理
Watchdog 工作原理通常如下：
1. **定时器**：系统启动时，Watchdog 会启动一个定时器。如果在预定的时间内没有接收到系统的“喂狗”信号（即系统定期向 Watchdog 发送信号，表示系统正常运行），Watchdog 会认为系统出现故障，并执行预设的恢复动作，如重启系统。
   
2. **喂狗操作**：正常情况下，系统会定期（通常是每几秒或几分钟）向 Watchdog 发送信号，表示系统运行正常。如果系统出现故障或者卡死，无法及时向 Watchdog 发送信号，那么 Watchdog 会启动重启程序，恢复系统运行。

## 12.2 DTS & config 配置

watchdog 的 DTS 节点在 kernel/arch/arm64/boot/dts/rockchip/rk3576.dtsi 文件中定义，如下所示：
```
wdt: watchdog@2ace0000 {
    compatible = "snps,dw-wdt";
    reg = <0x0 0x2ace0000 0x0 0x100>;
    clocks = <&cru TCLK_WDT0>, <&cru PCLK_WDT0>;
    clock-names = "tclk", "pclk";
    interrupts = <GIC_SPI 40 IRQ_TYPE_LEVEL_HIGH>;
    status = "disabled";
};
```
用户首先需在 DTS 文件中打开 wdt 节点，系统默认已打开：
```
&wdt{
    status = "okay";
};
```
```
CONFIG_WATCHDOG = y
```

## 12.3. 使用

内部看门狗的设备名称为/dev/watchdog，用户可通过 echo 命令来控制该设备

```
# 写入除大写V以外的任意字符，用户喂狗
echo 12 > /dev/watchdog

# 写入大写V字符，系统自行喂狗
echo V > /dev/watchdog
```

### 12.3.1 默认喂狗时间
默认系统会自动喂狗，如果向/dev/watchdog写入除大写V以外的任意字符则需要用户自行喂狗， 如果在44秒内没有继续写入字符进行喂狗，系统将会重启。

**计算方式**
```
默认使用tclk 24M，wdt_torr 为0x3fffffff
0x3fffffff / 24000000(clk) = 44(sec)
wdt_torr 为0x00000fff到0x7fffffff 16级
```

### 12.3.2 使用shell脚本喂狗

以下示例使用shell脚本30s喂一次狗。
```
#!/bin/bash

# Watchdog 设备文件路径
WATCHDOG_DEVICE="/dev/watchdog"

# 每 30 秒喂一次狗
while true; do
  # 向 watchdog 设备写入喂狗信号
  echo "1" > $WATCHDOG_DEVICE
  
  # 等待 30 秒
  sleep 30
done
```

### 12.3.2 使用C程序喂狗

以下使用C程序30s喂一次狗。
```
#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/ioctl.h>
#include <linux/watchdog.h>

int main() {
    int wd;
    
    // 打开 watchdog 设备
    wd = open("/dev/watchdog", O_WRONLY);
    if (wd == -1) {
        perror("Unable to open watchdog device");
        return 1;
    }

    // 设置一个无限循环，每 30 秒喂一次狗
    while (1) {
        // 向 watchdog 设备写入喂狗信号
        if (write(wd, "1", 1) == -1) {
            perror("Unable to write to watchdog device");
            close(wd);
            return 1;
        }

        // 每 30 秒喂一次狗
        sleep(30);
    }

    // 关闭设备
    close(wd);

    return 0;
}
```

## 12.4 进阶设置

`DW_WDT_DEFAULT_SECONDS` 是用于设置 Watchdog 超时的默认值。默认情况下，如果系统未在这个时间内喂狗，Watchdog 会触发重启。修改这个值会改变触发 Watchdog 超时的时间。

### 代码修改示例
假设你想将 Watchdog 的默认超时时间设置为 1 秒，可以这样修改：

```c
#define DW_WDT_DEFAULT_SECONDS 1  // 默认超时 1 秒
```

## 12.5 外部看门狗

外部硬件看门狗通常通过生成设备文件来与主机系统进行交互。在 Linux 系统中，如果设备支持外部硬件看门狗，通常会在 /dev/ 目录下生成名为 wdt_XXX 的设备文件，XXX 代表特定硬件的名称或标识符。

你可以通过以下命令查看是否存在硬件看门狗设备文件：

```
ls /dev/wdt_*
```

如果设备存在，表示系统支持外部硬件看门狗。

