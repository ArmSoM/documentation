---
sidebar_label: "12. Watchdog Usage"
slug: /interface-usage/watchdog
sidebar_position: 12
---

# 12. Watchdog Introduction

**Watchdog** is a hardware or software mechanism used to monitor the system's operational status. Its main function is to ensure that the system can automatically recover or restart in case of failure, ensuring the stability and reliability of the system. It is especially important in scenarios such as embedded systems, servers, and IoT devices that require continuous operation over a long period.

## 12.1 Working Principle

The working principle of a Watchdog typically involves the following:

1. **Timer**: When the system starts, the Watchdog activates a timer. If the system does not send a "kick" signal to the Watchdog within the preset time (i.e., the system regularly sends signals to indicate normal operation), the Watchdog assumes the system has failed and performs the predefined recovery action, such as restarting the system.

2. **Kick Operation**: Normally, the system will periodically (usually every few seconds or minutes) send a signal to the Watchdog to indicate that the system is functioning normally. If the system fails or freezes and is unable to send the signal in time, the Watchdog will trigger a reset to restore the system’s operation.

## 12.2 DTS & Config Configuration

The Watchdog's DTS node is defined in the file `kernel/arch/arm64/boot/dts/rockchip/rk3576.dtsi`, as shown below:

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

Users need to enable the `wdt` node in the DTS file, which is typically enabled by default:

```
&wdt{
    status = "okay";
};
```

Ensure that the following configuration is enabled:

```
CONFIG_WATCHDOG = y
```

## 12.3 Usage

The internal watchdog device is named `/dev/watchdog`, and users can control the device via the `echo` command.

```
# Write any character except uppercase 'V' to "kick" the watchdog
echo 12 > /dev/watchdog

# Write the uppercase 'V' character to allow the system to "kick" the watchdog automatically
echo V > /dev/watchdog
```

### 12.3.1 Default Watchdog Timeout

By default, the system will automatically "kick" the watchdog. If a character other than the uppercase 'V' is written to `/dev/watchdog`, the user must manually "kick" the watchdog. If no characters are written within 44 seconds, the system will restart.

**Calculation:**

```
The default uses tclk 24M, wdt_torr is 0x3fffffff
0x3fffffff / 24000000 (clk) = 44 (sec)
wdt_torr ranges from 0x00000fff to 0x7fffffff with 16 levels.
```

### 12.3.2 Using a Shell Script to Kick the Watchdog

The following shell script "kicks" the watchdog every 30 seconds.

```
#!/bin/bash

# Watchdog device file path
WATCHDOG_DEVICE="/dev/watchdog"

# "Kick" the watchdog every 30 seconds
while true; do
  # Write to the watchdog device
  echo "1" > $WATCHDOG_DEVICE
  
  # Wait for 30 seconds
  sleep 30
done
```

### 12.3.3 Using a C Program to Kick the Watchdog

The following C program "kicks" the watchdog every 30 seconds.

```
#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/ioctl.h>
#include <linux/watchdog.h>

int main() {
    int wd;
    
    // Open the watchdog device
    wd = open("/dev/watchdog", O_WRONLY);
    if (wd == -1) {
        perror("Unable to open watchdog device");
        return 1;
    }

    // Set an infinite loop to "kick" the watchdog every 30 seconds
    while (1) {
        // Write to the watchdog device
        if (write(wd, "1", 1) == -1) {
            perror("Unable to write to watchdog device");
            close(wd);
            return 1;
        }

        // Wait for 30 seconds before "kicking" the watchdog again
        sleep(30);
    }

    // Close the device
    close(wd);

    return 0;
}
```

## 12.4 Advanced Settings

`DW_WDT_DEFAULT_SECONDS` is used to set the default timeout value for the Watchdog. By default, if the system doesn't "kick" the watchdog within this time, the Watchdog will trigger a reset. Modifying this value changes the timeout period that triggers the Watchdog.

### Example Code Modification

If you want to set the default timeout to 1 second, you can modify it as follows:

```c
#define DW_WDT_DEFAULT_SECONDS 1  // Set default timeout to 1 second
```

## 12.5 External Watchdog

External hardware watchdogs usually interact with the host system through device files. In a Linux system, if the device supports an external hardware watchdog, it will typically generate a device file named `wdt_XXX` in the `/dev/` directory, where `XXX` represents the specific hardware's name or identifier.

You can check if the external hardware watchdog device files exist by using the following command:

```
ls /dev/wdt_*
```

If the device exists, it indicates that the system supports the external hardware watchdog.
