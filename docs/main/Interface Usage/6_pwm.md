---
sidebar_label: "6. PWM Usage"
slug: /interface-usage/pwm
sidebar_position: 6
---

# 6. PWM Usage

Pulse Width Modulation (PWM) is a technique used to control the power transmission by adjusting the width of the pulse signal. It is commonly used in applications such as motor speed control, LED brightness adjustment, and other scenarios where digital signals are used to simulate analog control.

**Main Features of PWM**

- **Adjustable Duty Cycle**: The primary feature of PWM is the ability to adjust the duty cycle, which is the ratio of the "on" state to the "off" state of the signal. By adjusting the duty cycle, the power delivered to the load can be efficiently controlled.

- **Frequency Control**: The frequency of a PWM signal determines the rate at which the pulses are repeated. The frequency can range from a few Hertz (Hz) to several kilohertz (kHz), depending on the application needs.

- **High Efficiency**: PWM signals are highly efficient because the signal is either fully "on" or fully "off", thus minimizing power loss.

- **Simulating Analog Control Using Digital Signals**: Although PWM signals are digital, their varying duty cycles can effectively simulate a continuous analog voltage, making them ideal for controlling devices such as motors and lights.

## 6.1 PWM Working Principle

A PWM signal is a square wave, where the high-level (ON) duration is called the pulse width, and the low-level (OFF) duration is the remaining portion of the period. The duty cycle of the signal is the ratio of high-level time to the total period.

The duty cycle is usually expressed as a percentage:

**Duty Cycle = (High-level Time / Period) × 100%**

For example:

- A 50% duty cycle means the signal stays at a high level for half of the period and at a low level for the other half.
- A 25% duty cycle means the signal stays high for one-fourth of the period and low for the remaining three-fourths.

## 6.2 PWM Usage Examples

### 6.2.1 PWM Pins

The ArmSoM series board has PWM pins on all 40 pins, taking Sige7 as an example: [Sige7 40PIN Definition](https://docs.armsom.org/armsom-sige7#hardware-pin-definitions)

### 6.2.2 Enabling PWM Communication Interfaces

PWM interfaces are disabled by default and need to be enabled for use.

In the Ubuntu/debit operating system, the/boot/uEnv/uEnv. txt file is used to configure system startup parameters and device tree plugins. You can enable or disable the PWM device tree plugin by editing this file

To check or enable PWM-related overlays, follow these steps:

- **View Device Tree Overlay Configuration**

Open file: Open the/boot/uEnv/uEnv. txt file through the terminal, for example:

```bash
root@armsom:/home/armsom# sudo /boot/uEnv/uEnvarmsom-sige7.txt
```

Taking the activation of pwm2-m1 and pwm5-m2 as an example, modify as follows:
```
root@armsom:~# vi /boot/uEnv/uEnvarmsom-sige7.txt
...
dtoverlay=/dtb/overlay/rk3588-armsom-pwm2-m1.dtbo
#dtoverlay=/dtb/overlay/rk3588-armsom-pwm3-m1.dtbo
dtoverlay=/dtb/overlay/rk3588-armsom-pwm5-m2.dtbo
#dtoverlay=/dtb/overlay/rk3588-armsom-pwm6-m2.dtbo
.....
```

After editing, save the file and exit the editor. Reboot the system for the changes to take effect:

```bash
// First execute sync
root@armsom-sige5:/home/armsom# sync
root@armsom-sige5:/home/armsom# sudo reboot
```

:::tip
- Q: If the system is rebooted by directly pulling the power, is it possible that files are not updated or the overlay system fails to start?
- A: When you abruptly disconnect the power or force a shutdown, there is a risk that files may not be properly synchronized from memory (RAM) to the storage device (e.g., hard drive or SSD). This happens because the operating system typically caches data in memory and writes it to the disk periodically. To avoid this issue, it is recommended to run the "sync" command before shutting down, ensuring that all data is written to the disk before pulling the power or shutting down.
:::

## 6.3 Detailed PWM Usage

For kernel and user-space usage of PWM, refer to the `Documentation/pwm.txt` file. Below is a focus on the user-space section. As described in the `pwm.txt` document, PWM provides user-space interfaces under the `/sys/class/pwm/` directory. Once the PWM driver is loaded successfully, a `pwmchip0` directory is created under `/sys/class/pwm/`. To enable PWM timer 0, write `0` to the `export` file. This creates a `pwm0` directory. Conversely, writing `0` to the `unexport` file disables the PWM timer and deletes the `pwm0` directory. The directory contains the following files:

- `enable`: Write `1` to enable PWM, write `0` to disable PWM.
- `polarity`: Options are `normal` or `inversed`, indicating whether the output pin level is inverted.
- `duty_cycle`: In normal mode, this represents the duration of the high-level period within one cycle (in nanoseconds). In reversed mode, this represents the low-level duration.
- `period`: Represents the period of the PWM wave (in nanoseconds).
- `oneshot_count`: Represents the number of PWM waveforms in one-shot mode. The value cannot exceed 255.

### 6.3.1 Check PWM equipment

After enabling the PWM communication interface, you can use the following command to check if PWM is turned on

```
root@armsom:~# ls /sys/class/pwm/
pwmchip0  pwmchip1  pwmchip2
root@armsom:~# cat /sys/kernel/debug/pwm
platform/febd0010.pwm, 1 PWM device
 pwm-0   ((null)              ): period: 0 ns duty: 0 ns polarity: normal

platform/fd8b0020.pwm, 1 PWM device
 pwm-0   ((null)              ): period: 0 ns duty: 0 ns polarity: normal

platform/fd8b0010.pwm, 1 PWM device
 pwm-0   (pwm-fan             ): requested period: 50000 ns duty: 0 ns polarity: normal
```
The system defaults to enabling fan PWM. When multiple PWM device tree plugins are enabled, the smaller the PWM controller value, the smaller the allocated PWM chip by the system. For example, in the above example
Pwmchip1 corresponds to pwm2-m1, pwmchip2 corresponds to pwm5-m2, and the node corresponding to pwm-fan is pwm1 corresponding to pwmchip0.

### 6.3.2 PWM control mode

Below is an example for `pwmchip1` to set `pwm2` output frequency to 100KHz, with a duty cycle of 50%, normal polarity, in One-shot mode:

```

echo 0 > /sys/class/pwm/pwmchip1/export


echo 1000000 > /sys/class/pwm/pwmchip1/pwm0/period


echo 500000 > /sys/class/pwm/pwmchip1/pwm0/duty_cycle


echo "normal" > /sys/class/pwm/pwmchip1/pwm0/polarity


echo 1 > /sys/class/pwm/pwmchip1/pwm0/enable


echo 0 > /sys/class/pwm/pwmchip1/unexport
```

## 6.4 PWM Backlight

Continuous mode is the most frequently used for PWM, especially for backlighting.

### 6.4.1 Backlight DTS

Below is a typical backlight configuration node in the DTS file:

```
backlight: backlight {
    compatible = "pwm-backlight";
    pwms = <&pwm0 0 25000 0>;
    brightness-levels = <
        0 1 2 3 4 5 6 7
        8 9 10 11 12 13 14 15
        16 17 18 19 20 21 22 23
        24 25 26 27 28 29 30 31
        32 33 34 35 36 37 38 39
        40 41 42 43 44 45 46 47
        48 49 50 51 52 53 54 55
        56 57 58 59 60 61 62 63
        64 65 66 67 68 69 70 71
        72 73 74 75 76 77 78 79
        80 81 82 83 84 85 86 87
        88 89 90 91 92 93 94 95
        96 97 98 99 100 101 102 103
        104 105 106 107 108 109 110 111
        112 113 114 115 116 117 118 119
        120 121 122 123 124 125 126 127
        128 129 130 131 132 133 134 135
        136 137 138 139 140 141 142 143
        144 145 146 147 148 149 150 151
        152 153 154 155 156 157 158 159
        160 161 162 163 164 165 166 167
        168 169 170 171 172 173 174 175
        176 177 178 179 180 181 182 183
        184 185 186 187 188 189 190 191
        192 193 194 195 196 197 198 199
        200 201 202 203 204 205 206 207
        208 209 210 211 212 213 214 215
        216 217 218 219 220 221 222 223
        224 225 226 227 228 229 230 231
        232 233 234 235 236 237 238 239
        240 241 242 243 244 245 246 247
        248 249 250 251 252 253 254 255
    >;
    default-brightness-level = <200>;
    enable-gpios = <&gpio1 13 GPIO_ACTIVE_HIGH>;
};
```

- `pwms = <&pwm0 0 25000 0>` is described in the PWM node section above.
- The `brightness-levels` array typically contains 256 elements, with 255 representing full brightness in PWM.
- `default-brightness-level` specifies the default backlight level, which is set to 200 in this example.
- `enable-gpios` indicates the GPIO pin used for enabling the backlight, which can be deleted if not used.

### 6.4.2 PWM Backlight Debugging

To determine the backlight off value for the `brightness-level`, you can debug the backlight brightness via command line by writing values to `/sys/class/backlight/backlight/brightness`. If PWM is set to normal polarity, the values range from 0 to 255. You can adjust the `brightness-levels` array accordingly, changing the minimum and maximum values based on the observed backlight brightness.

## 6.5 Common Issues

### 6.5.1 PWM Pin Pull Configuration for PWM Regulator

During a reboot, the GRF registers might not reset, causing the PWM regulator's default voltage to change. To avoid this, configure the PWM pin's pull-up or pull-down to match its default state. This is only necessary when using PWM for voltage regulation.

- Use the hardware schematic to determine the default pull-up or pull-down state for the PWM pin. For example, for PWM2 as a voltage regulator, check the schematic for its pull configuration (e.g., "d" for pull-down, "u" for pull-up).

- In the DTS file, define the PWM pull-down pinctrl:

```
pwm2_pin_pull_down: pwm2-pin-pull-down {
    rockchip,pins =
    <1 19 RK_FUNC_1 &pcfg_pull_down>;
};
```

- Then apply the PWM pinctrl in the DTS:

```
&pwm2 {
    status = "okay";
    pinctrl-names = "active";
    pinctrl-0 = <&pwm2_pin_pull_down>;
};
```

### 6.5.2 Unable to Detect PWM Waveform on Oscilloscope

If the waveform is not visible on the oscilloscope, check the following:

1. Inspect the PWM counter register to verify whether the values change. If the register is not changing, it indicates a problem with the PWM operation.
2. Common issues include clock problems, incorrect PWM register configurations (e.g., enabling PWM, setting correct duty cycle), and additional configurations required for chips like the RK3368.

If the counter register is changing but the signal is still not visible, the issue may be with the pin configuration, such as:

1. IOMUX issues.
2. IO-domain misconfigurations.
