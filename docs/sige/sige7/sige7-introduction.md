---
sidebar_position: 2
---

# Product Introduction 
Let’s learn about Sige7 in 5 minutes.

## Introduction

ArmSoM-Sige7 uses Rockchip RK3588, a new generation flagship eight-core 64-bit processor with a main frequency of up to 2.4GHz, a 6 TOPS computing power NPU, and can be equipped with a maximum of 32GB of large memory. It supports 8K video codec and has rich interfaces, supporting dual 2.5G network ports, WiFi6, BT5 and various video outputs. Supports multiple operating systems and can be applied to ARM PC, edge computing, cloud servers, artificial intelligence, cloud computing, virtual/augmented reality, blockchain, smart NVR and other fields

:::tip Application
Relying on a powerful ecosystem and a variety of expansion accessories, ArmSoM can help users easily achieve delivery from ideas to prototypes to mass production. It is an ideal creative platform for makers, dreamers, and amateurs.
:::

## key parameter

- SOC: Rockchip RK3588
- CPU: RK3588 Quad-core Cortex-A76@ 2.4GHz + Quad-core Cortex-A55@ 1.8GHz, 8nm process
- GPU: ARM Mali-G610 MP4
- NPU: computing power up to 6TOPs (INT8), supports INT4/INT8/INT16 mixed operations
- VPU/codec:
   - Hard decoding: 8K@60fps H.265/VP9/AVS2, 8K@30fps H.264 AVC/MVC, 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8
   - Hardcoded: 8K@30fps H.265/H.264
- RAM: 8GB/16GB/32GB (up to 32GB available) 64bit LPDDR4/LPDDR4x, default LPDDR4x 8GB
- Flash: 64GB/128GB eMMC, default eMMC 64GB
- Operating voltage: With wide range of input voltage, from 5V to 20V (voltage error ±5%)
- Working temperature: 0℃ ~ 70℃
- operating system:
   - Rockchip official support: Android 12.0, Debian11, Buildroot
   - Third-party support: Armbian, Ubuntu 20.04, Ubuntu22.04, Kylin OS
- PCB: 12-layer PCB board design
- weight:
- Size: 92mm × 62mm



## ArmSoM-Sige7

### Real Pictures  

:::info
ArmSoM-Sige7 has an extremely small size. It is your pocket computer. There are two Type-C interfaces on the Sige7 that look the same. The one near the edge of the board is the power interface.
:::

![ArmSoM-Sige7 front & back](/img/sige/sige7/armsom-sige7-layout.jpg)

:::tip
There are two identical Type-C interfaces on the Sige7, and the one near the edge of the board is the power interface.
:::

### Hardware Specification


<table>
    <thead>
        <tr>
             <th>Type</th>
            <th>Function</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3588</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3588 Quad core Cortex-A76@ 2.4GHz+Quad core Cortex-A55@ 1.8GHz，8nm process</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>GPU Mali-G610 MP4 (4x256KB L2 Cache)</li><li>Support OpenGL ES3.2/OpenCL2.2/Vulkan1.1</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8(3 NPU core)</li><li>Support INT4/INT8/INT16 hybrid operation
</li><li>Support deep learning frameworks：TensorFlow/MXNet/PyTorch/Caffe/Tflite/Onnx NN/Android NN etc</li></th>
        </tr>
         <tr>
            <th>VPU/codec</th>
            <th><li>Hardware decoding：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8</li><li>Hardware decoding：8K@30fps H.265 / H.264</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>Integrated 48MP ISP with HDR&3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>8GB/16GB/32GB（max 32GB ）64bit LPDDR4/LPDDR4x，defaultLPDDR4x 8GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>16GB/32GB/64GB/128GB eMMC，default eMMC 32GB</li><li>Support MicroSD card expansion</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M interface (PCIe 3.0 4-lanes), can expand SSD:Type 2280/2260/2242/2230，currently defaults to 2280</li></th>
        </tr>
        <tr>
            <th>Network</th>
            <th><li>2x 2.5G Ethernet port </li><li>onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 和 BT5 (AP6275s)</li></th>
        </tr>
        <tr>
            <th>Video output</th>
            <th><li>1x HDMI OUT2.1，support 8K@60fps or 4K@120fps</li><li>1x MIPI DSI  resolution up to 4K@60Hz</li><li>1x DP1.4  resolution up to 8192x4320@30Hz</li></th>
        </tr>
        <tr>
            <th>Video input</th>
            <th><li>2x 2Lanes MIPI CSI，Maximum 2.5Gbps per lane</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th><li>1x HDMI audio output</li><li>1x HP-OUT audio output</li><li>1x Type-C 3.1 (DP1.4)audio output</li></th>
        </tr>
        <tr>
            <th>USB接口</th>
            <th><li>2x USB3.0（USB3.1 Gen1），support USB3.1 Gen1, equivalent to USB3.2 Gen1 and USB3.0, up to 5Gbps data rate  </li><li>1x USB Type-C 3.1（DP1.4/OTG/PD Fast charger）</li></th>
        </tr>
        <tr>
            <th>40-pin</th>
             <th><li>Fully compatible with Raspberry Pi 40pin, connect to a variety of accessory peripherals</li><li>Support UART/SPI/I2C/I2S/PWM/ADC/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>Others</th>
            <th><li>1x 5V fan interface </li><li>1x battery input connector for powering the low power RTC chip HYM8563TS </li><li>2x LED，When the system is normal, the blue light starts to flash, and the red light is controlled by the user.</li></th>
        </tr>
        <tr>
            <th>Power supply</th>
            <th><li>Support USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A</li></th>
        </tr>
        <tr>
            <th>Keys</th>
             <th><li>1x PWRON key, support sleep wake</li><li>1x Reset key, support reboot</li><li>1x Maskrom key, support entering maskrom burn mode </li></th>
        </tr>
        <tr>
           <th>Operation system</th>
            <th><li>Officially supported by Rockchip：Android 12.0，Debian11，Buildroot</li><li>Supported by the third party：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS</li></th>
        </tr>
        <tr>
            <th>Size</th>
            <th><li>92 mm x 62mm</li></th>
        </tr>
        <tr>
            <th>Operating temperature</th>
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>