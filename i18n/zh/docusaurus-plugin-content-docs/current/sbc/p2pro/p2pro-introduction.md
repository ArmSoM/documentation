---
sidebar_position: 2
---

# 产品简介

让我们在 5 分钟内了解 p2pro。

## 简介

ArmSoM-p2pro 是 ArmSoM 社区基于 Rockchip RK3308B-S 的 SBC（单板计算机）。它配备了64位四核ARM Cortex-A35处理器，USB、以太网、蓝牙、无线连接和语音检测引擎，并具有丰富的音频接口（如MIC/PDM/SPDIF/I2S），使其非常适合物联网和语音应用程序。ArmSoM-p2pro 采用 1 个 RAM 大小 512MB/256MB DDR3，并使用 eMMC 或 SD 卡作为操作系统和存储。

## 关键参数

- SOC：瑞芯微RK3308B-S
- CPU：四核ARM Cortex-A35@ 1.3GHz，28纳米制程
- RAM：256MB/512MB DDR3，，默认DDR3 512MB
- Flash：8GB eMMC
- WiFi&Bluetooth：802.11 a/b/g/n/ac & BT5.0（AP6256）
- 音频：支持 various audio interfaces,such as MIC/PDM/SPDIF/I2S
- 工作电压：电压 5V（电压误差±5%）
- 工作温度：0℃ ~ 70℃
- 操作系统：
  - Rockchip官方支持：Debian11，Buildroot
  - 第三方支持：Armbian
- PCB：8 层 PCB 板设计
- 重量：约 30克
- 大小：65mm x 52.5mm

## ArmSoM-p2pro

### 实物图

:::info

ArmSoM-p2pro 小巧的尺寸，合理的接口布局，方便客户产品化

:::
![ArmSoM-p2pro front & back](/img/sbc/p2pro/armsom-p2pro-layout.png)

### 硬件规格

<table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能参数</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3588</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>四核ARM Cortex-A35@ 1.3GHz，28纳米制程</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>256MB/512MB DDR3，，默认DDR3 512MB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>8GB eMMC</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>1x 100兆网口 （支持 PoE）</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>1x USB 2.0，支持高速（480Mbps）、全速（12Mbps）和低速（1.5Mbps）模式</li><li>1x USB Type-C供电</li></th>
        </tr>
        <tr>
            <th>音频输入</th>
            <th><li>8x MIC（40PIN Header）</li><li>1x PDM/I2S（40PIN Header）</li></th>
        </tr>
        <tr>
            <th>WiFi&Bluetooth</th>
            <th><li>802.11 a/b/g/n/ac & BT5.0（AP6256）</li></th>
        </tr>
        <tr>
            <th>音频输出</th>
            <th><li>2x Line out（40PIN Header）</li><li>1x SPDIF out（40PIN Header）</li> <li>1x Audio Jack 3.5mm 音频输出</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>1x SPI/UART（12PIN Header）</li><li>1x I2S（40PIN Header;8channel,SDI=4CH,SDO=4CH）</li><li>1x I2C（12PIN Header）</li><li>1x UART（12PIN Header）</li><li>2x PWM（12PIN Header）</li><li>1x RGB灯，供电正常时灯亮，系统正常时蓝色灯常量，绿色灯由用户控制</li><li>1x 调试串口uart, 3-Pin 2.54mm连接头, 3.3V level, 1500000bps</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>支持USB Type-C 5V供电</li><li>支持5V PoE</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x Reset键，支持重启</li><li>1x Recovery键，支持进入loader烧录模式</li></th>
        </tr>
        <tr>
            <th>系统</th>
            <th><li>Rockchip官方支持：Debian11，Buildroot</li><li>第三方支持：Armbian</li></th>
        </tr>
        <tr>
            <th>尺寸</th>
            <th><li>65 mm x 52.5mm</li></th>
        </tr>
        <tr>
            <th>工作温度</th>
            <th><li>0℃ ~ 70℃</li></th>
        </tr>
        <tr>
            <th>存储温度</th>
            <th><li>-20℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>
