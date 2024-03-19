---
slug: ArmSoM-Sige7震撼发布!
title: ArmSoM-Sige7震撼发布!
authors: [ArmSoM, keven]
tags: [Sige7, Makes]
---


# RK3588芯片助力，全新单板计算机ArmSoM-Sige7震撼发布！

近日，我们欣喜地宣布推出一款全新的单板计算机，搭载着强大的RK3588芯片，为用户提供更卓越的计算性能和多样化的应用场景。这一新产品的发布标志着我们在技术创新和产品研发方面取得了重要突破，为用户提供了更为出色的计算体验。

Sige7 - 连接创新，无限可能

![sige7](/img/blog/sige7/sige7.png)

## 1. RK3588芯片的强大性能

作为这一单板计算机的核心，RK3588芯片不仅使用了先进的8nm制程技术，更搭载了强大的多核处理器，为用户提供了卓越的计算性能。无论是高性能计算任务还是多线程应用，RK3588芯片都能够轻松胜任，为用户提供流畅、高效的使用体验。

如下 RK3588 CPU Benchmark 实测数据

![RK3588 CPU Benchmark](/img/blog/sige7/RK3588-CPU-Benchmark.png)

超强计算性能, 多核算力超过Core I3

![RK3588 CPU Benchmark2](/img/blog/sige7/RK3588-CPU-Benchmark2.png)

## 关键参数

- SOC：瑞芯微 RK3588
- CPU：RK3588 四核Cortex-A76@ 2.4GHz+四核Cortex-A55@ 1.8GHz，8纳米制程
- GPU：ARM Mali-G610 MP4
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算
- VPU/编解码：
  - 硬解码：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8
  - 硬编码：8K@30fps H.265 / H.264
- RAM：8GB/16GB/32GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB
- Flash：64GB/128GB eMMC，默认eMMC 64GB
- 工作电压：具有宽范围的输入电压，从5V到20V（电压误差±5%）
- 工作温度：0℃ ~ 70℃
- 操作系统：
  - Rockchip官方支持：Android 12.0，Debian11，Buildroot
  - 第三方支持：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS
- PCB：12 层 PCB 板设计
- 重量：
- 大小：92mm × 62mm

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
            <th><li>RK3588 四核Cortex-A76@ 2.4GHz+四核Cortex-A55@ 1.8GHz，8纳米制程</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>GPU Mali-G610 MP4 (4x256KB L2 Cache)</li><li>支持 OpenGL ES3.2/OpenCL2.2/Vulkan1.1</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8(3 NPU core)</li><li>支持 INT4/INT8/INT16 混合运算</li><li>支持深度学习框架：TensorFlow/MXNet/PyTorch/Caffe/Tflite/Onnx NN/Android NN 等</li></th>
        </tr>
         <tr>
            <th>VPU/编解码</th>
            <th><li>硬解码：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8</li><li>硬编码：8K@30fps H.265 / H.264</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>集成48MP ISP with HDR&3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>8GB/16GB/32GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>16GB/32GB/64GB/128GB eMMC，默认eMMC 32GB</li><li>支持MicroSD卡扩展</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M 接口(PCIe 3.0 4- lanes)，可拓展 SSD：Type 2280/2260/2242/2230，目前默认使用2280</li></th>
        </tr>
        <tr>
            <th>网络</th>
            <th><li>2x 2.5G网口</li><li>板载 IEEE 802.11a/b/g/n/ac/ax WIFI6 和 BT5 (AP6275s)</li></th>
        </tr>
        <tr>
            <th>视频输出</th>
            <th><li>1x HDMI OUT2.1，支持 8K@60fps</li><li>1x MIPI DSI分辨率可达 4K@60Hz</li><li>1x DP1.4分辨率可达 8192x4320@30Hz</li></th>
        </tr>
        <tr>
            <th>视频输入</th>
            <th><li>2x 2Lanes MIPI CSI，每线最高 2.5Gbps</li></th>
        </tr>
        <tr>
            <th>音频</th>
            <th><li>1x HDMI音频输出</li><li>1x HP-OUT 音频输出</li><li>1x Type-C 3.1 (DP1.4)音频输出</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>2x USB3.0（USB3.1 Gen1），支持USB3.1 Gen1，相当于USB3.2 Gen1和USB3.0，高达5Gbps数据速率</li><li>1x USB Type-C 3.1（DP1.4/OTG）</li></th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th><li>和树莓派40pin可完全兼容，可接丰富的配件外设</li><li>支持 UART/SPI/I2C/I2S/PWM/ADC/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>其他</th>
            <th><li>1x 5V风扇接口</li><li>1x 电池输入连接器用于低功耗RTC芯片HYM8563TS的供电</li><li>2x LED灯，系统正常时蓝色灯开始闪烁，红色灯由用户控制</li></th>
        </tr>
        <tr>
            <th>电源</th>
            <th><li>支持USB Type-C 5/4A</li></th>
        </tr>
        <tr>
            <th>按键</th>
            <th><li>1x PWRON键，支持休眠唤醒</li><li>1x Reset键，支持重启</li><li>1x Maskrom键，支持进入maskrom烧录模式</li></th>
        </tr>
        <tr>
            <th>系统</th>
            <th><li>Rockchip官方支持：Android 12.0，Debian11，Buildroot</li><li>第三方支持：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS</li></th>
        </tr>
        <tr>
            <th>尺寸</th>
            <th><li>92 mm x 62mm</li></th>
        </tr>
        <tr>
            <th>工作温度</th>
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>

## 2. 多样化的应用场景

这款单板计算机不仅仅是一台性能卓越的计算设备，更是一台极具想象力适合极客爱好者DIY的产品。

ArmSoM-Sige7: AI+8K+感知+连接+显示，打造下一代旗舰AIOT平台

![Sige7-AIOT](/img/blog/sige7/Sige7-AIOT.png)

### 2.1. Sige7（RK3588）6TOPS 算力

Sige7 有6TOPS算力， 可支持 INT4/INT8/INT16/FP16 混合运算，其强大的兼容性，可以轻松转换基于TensorFlow / MXNet/PyTorch/Caffe 等一系列框架的网络模型。

![Sige7-RK3588-NPU](/img/blog/sige7/Sige7-RK3588-NPU.png)

算力足够支持嵌入式系统，如智能相机、智能家居设备和自动驾驶汽车中的实时图像处理和分析。应对一些轻量级的AI任务，例如语音识别、图像识别和物体检测。

### 2.2. Sige7 (RK3588) 8K Visual Feast  

Sige7支持
* 硬解码：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8
* 硬编码：8K@30fps H.265 / H.264
8K 编码 +  8K解码:  更多内容， 更多细节，带来极致的视觉享受。

Thanks to 8K video encode and decode technology,it brings the ultimate visual enjoyment with more content and finer details.  
![Sige7 （RK3588）8K](/img/blog/sige7/Sige7-8K.png)

### 2.3.  Sige7 多样丰富的接口

Sige7同时可作为RK3588极客开发套件

![Sige7-layout](/img/sige/sige7/armsom-sige7-layout.webp)
* **多样且通用**： 考虑到不同类型的外设和传感器的连接需求，提供丰富的接口类型，包括数字输入输出、模拟输入输出、通信接口（如UART、SPI、I2C）、USB等，满足各种应用场景的需求。

* **易用**： 清晰的标识、颜色区分、物理形状等方面的设计可以降低用户的误操作，提高开发效率。

* **扩展**： 完全兼容树莓派40pin，可作为树莓派5代替品。

* **调试和诊断支持**： 在设计中我们考虑到调试和诊断的需求，包括提供调试adb接口、LED指示灯、串口调试等，有助于开发者更容易定位和解决问题。

Sige7作为一款嵌入式开发套件，合理设计的接口平衡了多个方面的需求，提供便利、灵活、可靠的接口，使开发者能够更加高效地进行硬件开发和调试工作。

### 2.4. Sige7 各类OS完成基础适配

Sige7 适配了多种不同的系统，使得开发者能够在不同的开发环境中工作，这种灵活性有助于满足不同项目和应用的需求。
![Sige7-OS](/img/blog/sige7/Sige7-OS.png)


## 精心设计的硬件和外观

除了强大的芯片性能和多样化的应用场景，我们的设计团队还注重了单板计算机的整体外观和硬件设计。精致的外壳和紧凑的结构使其在各种环境中都能够脱颖而出，同时保证了良好的散热性能，确保设备的稳定运行。

## 开放源代码支持

为了更好地满足开发者和技术爱好者的需求，我们致力于提供开放源代码的支持。用户可以轻松访问并修改系统，定制适合自己需求的应用环境。这种开放性的设计理念旨在激发创新，推动技术的进步。

## 结语

这款搭载RK3588芯片的全新单板计算机的发布，不仅是我们技术实力的展示，更是我们对用户需求的回应。我们相信，通过不断的技术创新和产品优化，我们将能够为用户提供更多更好的产品，助力他们在不同领域中取得更大的成功。感谢大家的支持和关注，让我们一同迎接技术的新篇章！
[Sige7文档链接](https://docs.armsom.org/zh/docs/getting-started/sige7)