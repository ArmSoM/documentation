---
sidebar_label: "6. PWM 使用"
slug: /interface-usage/pwm
sidebar_position: 6
---

# 6. PWM 使用

脉宽调制（PWM，Pulse Width Modulation）是一种通过调节脉冲信号的宽度来控制电能传输的技术。它常用于电机速度控制、LED亮度调节等场景，特别适用于需要模拟控制但只能使用数字信号的情况。

**PWM的主要特点**

- 可调占空比：PWM的主要特点是能够调节占空比，占空比指的是信号“高”状态与“低”状态的时间比例。通过调节占空比，可以高效地控制负载的功率。

- 频率控制：PWM信号的频率决定了脉冲的重复速率，频率可以从几赫兹（Hz）到几千赫兹（kHz）不等，具体取决于应用需求。

- 高效能：PWM信号的效率很高，因为信号要么是完全“开”状态，要么是完全“关”状态，从而减少了功率损失。

- 数字信号模拟模拟控制：虽然PWM信号本身是数字信号，但由于其占空比的变化，可以有效模拟连续的模拟电压，因此非常适合用来控制电机、灯光等设备。

## 6.1 PWM 工作原理

PWM信号是一个方波信号，其中信号高电平（ON）维持的时间叫做脉宽，低电平（OFF）维持的时间则是周期的剩余部分。信号的占空比是高电平时间与整个周期的比例。

占空比通常以百分比表示：

**占空比=(高电平周期/时间)×100%**

举个例子：

50%的占空比意味着信号在一个周期内一半时间为高电平，另一半时间为低电平。
25%的占空比则意味着信号在周期内只有四分之一时间为高电平，剩余的三分之三时间为低电平。

## 6.2 PWM 使用实例

### 6.2.1 PWM引脚

ArmSoM系列板子40pin上都有PWM引脚，以下以 Sige5 为例子，[Sige5 40PIN定义](/interface-usage/40pin#16-armsom-sige5)

| PWM引脚        | 引脚名称 | PWM引脚        | 引脚名称 |
|---------------|----------|----------------|---------|
| PWM1_CH0_M3     | 7        | PWM2_CH5_M1     | 19       |
| PWM2_CH2_M1     | 21       | PWM2_CH3_M1     | 23       |
| PWM2_CH6_M1     | 24       | PWM0_CH0_M3     | 27       |
| PWM2_CH7_M2     | 33       | PWM0_CH0_M0     | 35       |


### 6.2.2 使能 PWM 通信接口

PWM接口在默认情况是关闭状态的，需要使能才能使用

在 Armbian 操作系统中，/boot/armbianEnv.txt 文件用于配置系统启动时的参数和设备树插件。你可以通过编辑该文件来启用或禁用 PWM 设备树插件

如果你希望检查或启用 PWM 相关设备树插件，可以按照以下步骤操作：

- **查看设备树插件配置**

打开文件： 通过终端打开 /boot/armbianEnv.txt 文件，使用文本编辑器如 nano 或 vim，例如：

```bash
root@armsom-sige5:/home/armsom# sudo nano /boot/armbianEnv.txt
```

这里以激活 pwm1_m3 为例，将rk3576-pwm1-ch0-m3 打开如下:

```
overlays=rk3576-pwm1-ch0-m3
```

编辑完成后，保存文件并退出编辑器 重启系统使配置生效：

```
// 先执行sync
root@armsom-sige5:/home/armsom# sync
root@armsom-sige5:/home/armsom# sudo reboot
```

:::tip
- Q: 如果直接拔掉电源进行重启，是否可能导致文件未修改或 overlay 系统启动失败？
- A: 当直接拔掉电源或强制关机时，可能会出现文件未能及时从内存（RAM）同步到存储设备（如硬盘、SSD）的情况。这是因为操作系统通常会将数据暂存于内存中，并定期将这些数据写入磁盘。为避免此问题，建议在关机前执行 “sync” 命令，确保所有数据已写入磁盘，再拔掉电源或关机。
:::

## 6.3 PWM 使⽤详解

对于 PWM 的 kernel 和 user space 使⽤说明在 Documentation/pwm.txt 有说明，下⾯重点提下 user space 部分。就像 pwm.txt ⽂档⾥⾯说的，PWM 提供了⽤⼾层的接口，在 /sys/class/pwm/ 节点下⾯，PWM 驱动加载成功后，会在 /sys/class/pwm/ ⽬录下产⽣ pwmchip0 ⽬录；向 export ⽂件写⼊ 0，就是打开 pwm 定时器 0，会产⽣⼀个 pwm0 ⽬录，相反的往 unexport 写⼊ 0 就会关闭 pwm 定时器了，同时 pwm0 ⽬录会被删除,该⽬录下有以下⼏个⽂件：

- enable：写⼊ 1 使能 pwm，写⼊ 0 关闭 pwm；
- polarity：有 normal 或 inversed 两个参数选择，表⽰输出引脚电平翻转；
- duty_cycle：在 normal 模式下，表⽰⼀个周期内⾼电平持续的时间（单位：纳秒），在 reversed 模式下，表⽰⼀个周期中低电平持续的时间（单位：纳秒)；
- period：表⽰ pwm 波的周期(单位：纳秒)；
- oneshot_count：表⽰ one-shot 模式的 pwm 波形个数，数值不能超过255；

### 6.3.1 Continuous mode

以下是 pwmchip1 的例⼦，设置 pwm1 输出频率 100K，占空⽐ 50%，极性为正极性，Continuous 模式输出：

```
root@armsom-sige5:/home/armsom# cd /sys/class/pwm/pwmchip1/
root@armsom-sige5:/home/armsom# echo 0 > export
root@armsom-sige5:/home/armsom# cd pwm1
root@armsom-sige5:/home/armsom# echo 10000 > period
root@armsom-sige5:/home/armsom# echo 5000 > duty_cycle
root@armsom-sige5:/home/armsom# echo normal > polarity
root@armsom-sige5:/home/armsom# echo 1 > enable
```

### 6.3.2 One-shot mode

以下是 pwmchip1 的例⼦，设置 pwm1 输出频率 100K，占空⽐ 50%，极性为正极性，One-shot 模式输出：

```
root@armsom-sige5:/home/armsom# cd /sys/class/pwm/pwmchip1/
root@armsom-sige5:/home/armsom# echo 0 > export
root@armsom-sige5:/home/armsom# cd pwm0
root@armsom-sige5:/home/armsom# echo 10000 > period
root@armsom-sige5:/home/armsom# echo 5000 > duty_cycle
root@armsom-sige5:/home/armsom# echo normal > polarity
root@armsom-sige5:/home/armsom# echo 100 > oneshot_count
root@armsom-sige5:/home/armsom# echo 1 > enable
```

one-shot 模式输出结束后会产⽣⼀个中断，驱动⾥会在这个中断将 pwm 状态设置为 disabled ，如果有重复多次 one-shot 输出的应⽤需求，需要⽤⼾⾃⼰在⽂件 pwm-rockchip.h 的rockchip_pwm_oneshot_callback 函数中实现这部分逻辑。

```
static void rockchip_pwm_oneshot_callback(struct pwm_device *pwm, struct
pwm_state *state)
{
/*
* If you want to enable oneshot mode again, config and call
* pwm_apply_state().
*
* struct pwm_state new_state;
*
* pwm_get_state(pwm, &new_state);
* new_state.enabled = true;
* ......
* pwm_apply_state(pwm, &new_state);
*
*/
}
```

## 6.4 PWM Backlight

PWM 的连续模式使⽤最多，且背光使⽤较为频繁。

### 6.4.1 Backlight DTS

以下是 DTS ⽂件中背光很常⻅的背光配置节点：

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

- "pwms = <&pwm0 0 25000 0>" 上⾯ PWM 节点配置小节中有描述；
- brightness-levels 数组，我们⼀般以值 255 为⼀个 scale，所以⼀般的 brightness-levels 为 256 个元素的数组。当 PWM 设置为正极性时，从 0~255 表⽰背光为正极，占空⽐从 0%~100% 变化，255~0 位负极性，占空⽐从 100%~0% 变化；当 PWM 设置为负极性时，反之。
- default-brightness-level 表⽰默认的背光，它存在于开机时候，如背光驱动初始化到安卓⽤⼾层设置下来新的背光这段时间，表⽰为第 200 个元素的背光亮度。
- enable-gpios 表⽰背光使能脚，这个根据电路原理图配置即可；有的硬件没有这个背光使能脚，那么将这个配置删除，背光驱动通过配置 brightness-levels 数组的第 0 个元素将背光关闭。

### 6.4.2 PWM Backlight 调试

如何确定背光灭的 brightness-level 值，通过命令⾏调试背光亮度， echo xxx > sys/class/backlight/backlight/brightness。当 PWM 设置为正极性时，可以通过 echo xxx > sys/class/backlight/backlight/brightness 到背光节点，xxx的范围为 0~255，这时观察亮度变化，如 x 为背光亮度为 0 的点，y 为客⼾接受的背光最亮的点。这时重新调整 brightness-level 表，就可以将数组第⼀个值改为 x，最⼤值改为 y，中间值需均匀变化，凑成 256 个 元素，且有⼀个元素值为 255。当 PWM 为负极性时，则反之。

## 6.5 常见问题

### 6.5.1 PWM Regulator 时 PWM pin 脚上下拉配置问题

由于在做 reboot 的时候，很多情况是不复位 GRF ⾥⾯的寄存器，而 PWM 控制器会发⽣复位，这就会在reboot 起来后改变 PWM Regulator 的默认电压，所以要在 kernel 中配置 PWM pin 脚上下拉与默认的上下拉⼀致，不能配置为 none。该问题只针对 PWM 作为调压时才需要修改，作为其他功能可以不需要关注。

- 通过硬件原理图确认该 PWM pin 的默认上下拉。例如 RK3399 挖掘机板⼦ PWM2 作为调压功能，在原理图上找到 PWM2 pin 脚: GPIO1_C3/PWM2_d，其中的"d"表⽰ down 为默认下拉；如果是"u"表⽰ up 默认上拉。

- dtsi 中定义 PWM pull down pinctrl:
```
pwm2_pin_pull_down: pwm2-pin-pull-down {
    rockchip,pins =
    <1 19 RK_FUNC_1 &pcfg_pull_down>;
};
```

- 在 dts 中重新 PWM 覆盖 pinctrl:
```
&pwm2 {
    status = "okay";
    pinctrl-names = "active";
    pinctrl-0 = <&pwm2_pin_pull_down>;
};
```

### 6.5.1 PWM 波形无法示波器测到

如果⽰波器测试不到波形，从两⽅⾯⼊⼿：

先检查 PWM Counter Register 寄存器的值是否在变化，如果有变化说明 PWM 在⼯作 (注意，如果⽤ io 命令来读取寄存器，在产品⽂档的表格中 RK3328 和它之后的芯⽚需要再关闭 pclk 的 gating，因为这些芯⽚ pclk 和⼯作时钟是分开的)；如果该寄存器的值没有发⽣变化，则说明 PWM ⼯作异常。⼀般，这些异常分为以下⼏个⽅⾯：

1. 时钟问题；
2. PWM 本⾝寄存器配置问题,PWM 未使能或者 duty 配置的值⼤于 period 等；
3. RK3368 芯⽚需要额外配置 GRF 中 GRF_SOC_CON15 寄存器的 bit12 为 1。

如果读出来的 Counter Register 寄存器的值在发⽣变化,则说明 PWM ⼯作正常，但是仍量不到信号，应该是 pin 脚的问题，⼀般也分为以下⼏个可能：
1. iomux 问题；
2. io-domain 配置不对；
3. 被外⾯硬件⼲扰。
