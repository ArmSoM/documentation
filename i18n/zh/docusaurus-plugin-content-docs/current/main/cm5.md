---
description: ArmSoM-CM5
keywords: [armsom, armsom-CM5, RK3576  Development Boards, RK3576 Core borad, rockchip]
sidebar_label: "CM5"
sidebar_position: 5
slug: /armsom-cm5
---

# Product Introduction:ArmSoM-CM5

## Overview

ArmSoM-CM5 是一款计算机模块，采用Rockchip RK3576第二代8nm高性能AIOT平台，集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器，6 TOPS算力NPU，最大可配16GB大内存。支持4K视频编解码，拥有丰富的接口，支持多种操作系统。

:::tip
设计为板对板连接器，对于 RK3576 芯片 PIN 限制，仅支持 1 HDMI 和 1 DSI，ArmSoM-CM5比Raspberry Pi CM4 多支持 2 HDMI、2 CSI 和 2 DSI，其他是 Pin2Pin。您可以使用 Raspberry Pi CM4 底板。
:::

### 关键参数

- SOC：瑞芯微 RK3576
- CPU：集成了四核Cortex-A72@ 2.2GHz和四核Cortex-A53@ 1.8GHz以及单独的NEON协处理器。
- GPU：ARM Mali G52 MC3 GPU。
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算。
- VPU/编解码：
  - 硬解码：支持H.264、H.265、VP9、AV1和AVS2等最高8K@30fps或4K@120fps。
  - 硬编码：支持H.264和H.265最高4K@60fps，高质量JPEG编码器
- RAM：8/16GB 32bit LPDDR4x，默认8GB，RK3576 最大支持16GB。
- Flash：32/64/128GB eMMC，默认eMMC 64GB。
- 工作电压：具有宽范围的输入电压，从4.5V到23V（电压误差±5%）
- 工作温度：0℃ ~ 80℃
- 重量：
- 尺寸：100 x 80 x 29 毫米 (3.94 x 3.15 x 1.14 英寸)

## Getting started

<a href="./armsom-cm5#使用手册" class="card-link">
    <div class="card">
        <div class="icon">
            <i>📝</i>
        </div>
        <div class="content">
            <h2>CM5使用手册</h2>
            <p>如何开始使用你的CM5</p>
        </div>
    </div>
</a>

## 硬件信息

### 硬件接口