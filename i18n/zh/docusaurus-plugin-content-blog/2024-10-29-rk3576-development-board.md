---
slug: rk3576-sbc
title: RK3576 单板计算机
authors: [ArmSoM]
tags: [Sige5, ArmSoM-CM5]
---

首先，让我们介绍瑞芯微 RK3576 的详细规格说明书。

## RK3576 简要数据手册

一款低功耗、高性能的人工智能物联网处理器。

<table>
    <thead>
        <tr>
            <th>特性</th>
            <th>RK3576</th>
      </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>CPU</th>
            <th><li>四核 Cortex-A72 和四核 Cortex-A53</li><li>Cortex-A72 有 1MB 的统一 L2 缓存</li><li>Cortex-A53 有 512KB 的统一 L2 缓存</li><li>用于用户应用的 ARM Cortex M0</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>ARM Mali G52 MC3</li><li>支持 OpenGL ES 1.1、2.0 和 3.2，OpenCL 2.1，Vulkan 1.2</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS*@INT8</li><li>支持 int4/int8/int16/FP16/BF16/TF32</li><li>支持深度学习框架：TensorFlow、Caffe、Tflite、Pytorch、Onnx NN、Android NN 等</li></th>
        </tr>
        <tr>
            <th>Memory</th>
            <th><li>32 位 LPDDR4/LPDDR4X/LPDDR5</li><li>eMMC 5.1、SDIO 3.0 和 SFC</li><li>UFS v2.0</li></th>
        </tr>
        <tr>
            <th>Multimedia</th>
            <th><li>H.265 HEVC Main10 L5.1 yuv444：4K 120fps</li><li>H.264 AVC High10 L5.1 yuv422：4K 60fps</li><li>H.264 MVC 最高达 1080P 60fps</li><li>VP9 Profile0/2 L5.1：4K 120fps</li><li>AVS2 Profile0/2 L10.2.6：4K 120fps</li><li>AV1 Main10 L5.3：4K 120fps</li><li>H.264/H.265 的 4K@60fps 视频编码器</li></th>
        </tr>
        <tr>
            <th>视频输入</th>
            <th><li>具有 HDR 和 3DNR 的 1600 万像素 ISP</li><li>三路四通道 MIPI CSI-2 接口</li><li>16 位 DVP 接口，最高达 150MHz</li></th>
        </tr>
        <tr>
            <th>Display</th>
            <th><li>多屏显示，最高可达（4K@120 + 2.5K@60 + 2K@60）</li><li>HDMI v2.1/eDP v1.3 组合接口</li><li>四通道 MIPI DSI</li><li>DP v1.4 和 USB 3.0 组合（Type-C）接口</li><li>并行输出接口</li><li>EBC 输出接口</li><li>图像质量后处理模块</li></th>
        </tr>
        <tr>
            <th>音频接口</th>
            <th><li>5 个 SAI 接口，支持 I2S/TDM/PCM 模式</li><li>SPDIF 发送和接收</li><li>PDMO/PDM1 具有 8 个通道</li><li>双 2 通道和双 4 通道 ASRC</li><li>具有 2 个通道的数字音频编解码器</li></th>
        </tr>
        <tr>
            <th>高速接口</th>
            <th><li>具有一个数据通道的 PCIe2.1/SATA3 组合接口</li><li>具有一个数据通道的 PCIe2.1/SATA3/USB3.0 组合接口</li><li>2 个 RGMII 接口</li></th>
        </tr>
        <tr>
            <th>Industry</th>
            <th><li>2 个 CAN FD</li><li>16 位 DSMC（双倍数据速率串行存储控制器）</li></th>
        </tr>
        <tr>
            <th>安全特性</th>
            <th><li>ARM TrustZone 安全扩展</li><li>安全启动和 JTAG</li><li>密钥阶梯</li><li>加密（RSA 4096、AES 256、SHA-512……）</li><li>HDMI 和 DP/eDP 的 HDCP 2.x</li></th>
        </tr>
        <tr>
            <th>软件开发工具包</th>
            <th><li>Linux 和 Android</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>封装信息：FCCSP698L（16.1x17.2mm，间距：0.6mm）</li></th>
        </tr>
    </tbody>
</table>

### RK3576 框图

![rk3576 框图](/img/sige/rk3576.png)

### RK3576 典型应用图 - 人工智能物联网

![rk3576 典型应用](/img/blog/rk3576-typical.png)

## RK3576 单板计算机介绍

### ArmSoM-Sige5 RK3576 单板计算机

ArmSoM-Sige5 采用第二代 8nm 高性能人工智能物联网平台瑞芯微 RK3576，具有 6 TOPS 计算能力的 NPU，并支持高达 16GB 的大内存。它支持 4K 视频编解码，提供丰富的接口，包括双千兆以太网端口、WiFi 6 和蓝牙 5，以及各种视频输出。兼容多种操作系统，适用于基于 ARM 的个人电脑、边缘计算设备、个人移动互联网设备和其他数字多媒体应用。

![rk3576 sige5](/img/sige/sige5.png)

更多详情：https://docs.armsom.org/armsom-sige5

### ArmSoM-CM5 RK3576 计算模块

ArmSoM-CM5 是一个由瑞芯微 RK3576 第二代 8nm 高性能人工智能物联网平台驱动的计算模块。它集成了四核 Cortex-A72 @ 2.2GHz 和四核 Cortex-A53 @ 1.8GHz，以及一个专用的 NEON 协处理器、一个 6 TOPS 的 NPU，并支持高达 16GB 的大内存。它支持 4K 视频编解码，具有丰富的接口，并支持多种操作系统。

![rk3576 CM5](/img/cm/cm5.png)

更多详情：https://docs.armsom.org/armsom-cm5

### RK3576 Linux 主线支持

- 添加 rk3576 armsom-sige5 开发板：https://patchwork.kernel.org/project/dri-devel/patch/20240903152308.13565-10-detlev.casanova@collabora.com/