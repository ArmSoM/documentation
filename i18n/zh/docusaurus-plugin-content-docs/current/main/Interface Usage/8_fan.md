---
description: "ArmSoM 官方技术文档：FAN 接口。提供产品规格、配置步骤、使用说明和嵌入式开发参考。"
keywords: [ArmSoM, Rockchip, 嵌入式Linux, 开发板, "FAN 接口"]
image: /img/armsom-social-card.png
sidebar_label: "8. FAN 接口"
slug: /interface-usage/fan
sidebar_position: 8
---

# 8. FAN 接口

## 8.1 接口型号与连接

风扇插座和控制回路随板型而异。下列型号使用 5V 风扇，并通过 PWM 调制低侧开关调速；开关回路不能当作独立的逻辑 PWM 信号连接。

| 产品 / 硬件版本 | 插座 | 引脚定义 |
| --- | --- | --- |
| Sige5 V1.3、Sige7 V1.1 | CN32，0.8mm 1×3P | 1：5V；2：GND；3：受 PWM 控制的低侧回路 |
| Sige6 V1.0 | J19，0.8mm 1×2P | 1：5V；2：受 PWM 控制的低侧回路 |
| 其他型号 | 以产品页原理图/接口表为准 | 不要根据针数或线色推断接法 |

![sige5-fan](/img/general-tutorial/interface-usage/fan.png)

<div className="armsom-image-caption">sige5-fan</div>

**接线说明：**
- 5V 脚提供风扇电源，GND 为固定地。
- 低侧回路由板上晶体管开关控制。两线风扇负极接受控回路时才能受 PWM 调速；接固定地则绕过该回路。
- 三线/四线风扇的 PWM 输入、测速输出和电源回路不是同一种信号。请核对风扇料号、线序及产品接口定义；连接器尺寸详见对应规格书。

## 8.2 使用FAN

以下示例包含六档状态（0–5）；温度阈值与 PWM 值取决于镜像和设备树配置。

| 温度       | 状态  | PWM转速 |
| --------------- | ----- | ------ |
| 小于50° | 0 | 0 |
| 50°-55°  | 1 | 50 |
| 55°-60° | 2 | 100 |
| 60°-65° | 3 | 150 |
| 65°-70° | 4 | 200 |
| 70°以上 | 5 | 250 |

### 8.2.1 确认 PWM 风扇设备已被识别

重启后，你可以通过以下命令检查风扇设备是否已经识别并正确配置：

```
root@armsom-sige5:/home/armsom# ls /sys/class/thermal/
```

如果设备树中的 pwm-fan 配置成功，你应该能够看到一个类似 thermal_zoneX 的目录，其中包含风扇控制的相关信息。

### 8.2.1 调节温度和风扇速度

风扇的速度由温度控制，当系统温度达到某个阈值时，系统会自动调整风扇的转速。你可以手动模拟温度变化来测试风扇是否工作。

你可以通过 thermal 子系统控制温度策略。例如，你可以使用如下命令查看当前温度状态：

```
root@armsom-sige5:/home/armsom# cat /sys/class/thermal/thermal_zone0/temp
```

如果温度高于某个阈值，系统会自动调节风扇的速度。例如，你可以通过压力测试使芯片的温度迅速上升，以验证风扇的工作状态：

```
root@armsom-sige5:/home/armsom# stress --cpu 4 
```
