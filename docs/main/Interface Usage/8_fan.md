---
sidebar_label: "8. FAN Interface"
slug: /interface-usage/fan
sidebar_position: 8
---

# 8. FAN Interface

## 8.1 Interface Model and Connection

- The connector is a 0.8mm 1x3P straight insert type (0.8mm pitch), detailed specifications can be found in the connector datasheet.
- Supports 5V powered fans.
- Supports PWM control.

ArmSoM products are equipped with this fan interface by default.

![sige5-fan](/img/general-tutorial/interface-usage/fan.png)

| Fan    | Pin       | Function            | 
| -------| ----------| ------------------ |
| 5V     | 1         | 5V Power Supply     |
| GND    | 2         | Ground              |
| PWM    | 3         | PWM Control Signal  |

**Note:**
- **5V Power Supply (Pin 1)**: Provides 5V power to the fan.
- **Ground (Pin 2)**: Ground line for the fan, used for the circuit's return path.
- **PWM Control Signal (Pin 3)**: Controls the fan's speed via PWM signal. Changes in duty cycle directly affect the fan's operational speed.

## 8.2 Using the Fan

The fan currently supports five states based on temperature:

| Temperature   | State | PWM Speed |
| ------------- | ----- | --------- |
| Below 50°C    | 0     | 0         |
| 50°C - 55°C   | 1     | 50        |
| 55°C - 60°C   | 2     | 100       |
| 60°C - 65°C   | 3     | 150       |
| 65°C - 70°C   | 4     | 200       |
| Above 70°C    | 5     | 250       |

### 8.2.1 Verify PWM Fan Device is Recognized

After rebooting, you can check if the fan device has been recognized and configured correctly by running the following command:

```
root@armsom-sige5:/home/armsom# ls /sys/class/thermal/
```

If the pwm-fan configuration is successful in the device tree, you should see a directory like `thermal_zoneX`, which contains information related to fan control.

### 8.2.2 Adjusting Temperature and Fan Speed

The fan speed is controlled by the temperature. When the system temperature reaches a certain threshold, the system will automatically adjust the fan speed. You can manually simulate temperature changes to test if the fan is functioning correctly.

You can control the temperature policy through the thermal subsystem. For example, to check the current temperature status, you can use the following command:

```
root@armsom-sige5:/home/armsom# cat /sys/class/thermal/thermal_zone0/temp
```

If the temperature exceeds a certain threshold, the system will automatically adjust the fan speed. For example, you can use stress testing to rapidly increase the chip's temperature and verify the fan's operation:

```
root@armsom-sige5:/home/armsom# stress --cpu 4
```