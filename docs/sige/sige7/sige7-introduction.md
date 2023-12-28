---
sidebar_label: "Product Introduction"
sidebar_position: 1
---

# Product Introduction:Sige7 

Let's get to know Sige7 in 5 minutes.

## Overview

The ArmSoM-Sige7 is powered by Rockchip's latest flagship RK3588,octa-core 64-bit processor, with a max frequency of 2.4GHz, a 6 TOPS NPU, and up to 32GB of RAM. 

RK3588 Features:

- 8K video encoding/decoding support
- Abundant interfaces support
- Dual 2.5G Ethernet support
- WiFi 6 support
- BT 5 support
- Multiple video outputs support
- Multiple operating systems support

Generally, Sige 7 is applied for various applications,such as, ARM PCs, edge computing, cloud servers, AI, cloud computing, virtual/augmented reality, blockchain, smart NVRs and more.

:::tip Applications
With the powerful ecosystem and variety of extension modules, ArmSoM can help users easily go from ideas to prototype to mass production, making it an ideal creative platform for makers, dreamers and hobbyists.  
:::

## Key Parameter

- SoC: Rockchip RK3588
- CPU: 4x Cortex-A76 @ 2.4GHz + 4x Cortex-A55 @ 1.8GHz, 8nm
- GPU: ARM Mali-G610 MP4 
- NPU: Up to 6 TOPS (INT8), supports INT4/INT8/INT16 mixed computing
- VPU/Codec:
  - Hardware Decode: 8K@60fps H.265/VP9/AVS2, 8K@30fps H.264 AVC/MVC, 4K@60fps AV1, 1080P@60fps MPEG-2/-1/VC-1/VP8  
  - Hardware Encode: 8K@30fps H.265 / H.264
- RAM: 8GB/16GB/32GB (max 32GB) 64bit LPDDR4/LPDDR4x, default 8GB LPDDR4x
- Storage: 64GB/128GB eMMC, default 64GB eMMC
- Operating Voltage: Wide input voltage, 5V to 20V (±5% tolerance)
- Operating temperature: 0°C ~ 70°C  
- OS: 
  - Official: Android 12.0, Debian 11, Buildroot
  - 3rd party: Armbian, Ubuntu 20.04, Ubuntu 22.04, Kylin OS
- PCB: 12-layer
- Weight: 
- Size: 92mm × 62mm

## ArmSoM-Sige7 

### Images

![ArmSoM-Sige7 front & back](/img/sige/sige7/armsom-sige7-layout.jpg)

:::tip
There are two identical Type-C ports on Sige7,but only the Type-C (PD Only) port is for power input.
:::

### Hardware Specifications 

<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Functional Parameters</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr>
            <th>SOC</th>
            <th><li>RockChip RK3588</li></th>
        </tr>
        <tr>
            <th>CPU</th>
            <th><li>RK3588 Quad-Core Cortex-A76@ 2.4GHz+Quad-CoreCortex-A55@ 1.8GHz，8nm process</li></th>
        </tr>
        <tr>
            <th>GPU</th>
            <th><li>GPU Mali-G610 MP4 (4x256KB L2 Cache)</li><li>Supports OpenGL ES3.2/OpenCL2.2/Vulkan1.1</li></th>
        </tr>
        <tr>
            <th>NPU</th>
            <th><li>6 TOPS@INT8(3 NPU core)</li><li>Supports INT4/INT8/INT16 mixed computing</li><li>Supports frameworks like TensorFlow, MXNet, PyTorch, Caffe, Tflite, Onnx NN, Android NN, etc</li></th>
        </tr>
         <tr>
            <th>VPU/Codec</th>
            <th><li>Hardware Decode: 8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8</li><li>Hardware Encode:8K@30fps H.265 / H.264</li></th>
        </tr>
         <tr>
            <th>ISP</th>
            <th><li>Integrated 48MP ISP with HDR&3DNR</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th><li>8GB/16GB/32GB（max 32GB ）64bit LPDDR4/LPDDR4x，default 8GB LPDDR4x</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th><li>32GB/64GB/128GB eMMC，default 64GB eMMC</li><li>Supports MicroSD card expansion</li></th>
        </tr>
        <tr>
            <th>PCIe</th>
            <th><li>1x M.2 Key M (PCIe 3.0 4-lanes). Expandable SSD support for 2280/2260/2242/2230 M.2 SSD cards, default 2280 </li></th>
        </tr>
        <tr>
            <th>Networking</th>
            <th><li>2x 2.5G Ethernet</li><li>Onboard IEEE 802.11a/b/g/n/ac/ax WIFI6 and BT5 (AP6275P)</li></th>
        </tr>
        <tr>
            <th>Video Out</th>
            <th><li>1x HDMI 2.1, supports 8K@60fps</li><li>1x MIPI DSI up to 4K@60fps</li><li>1x DP 1.4 up to 8192×4320@30fps</li></th>
        </tr>
        <tr>
            <th>Video In</th>
            <th><li>2x 2-lane MIPI CSI, up to 2.5Gbps per lane</li></th>
        </tr>
        <tr>
            <th>Audio</th>
            <th><li>1x HDMI audio out</li><li>1x HP audio out</li><li>1x Type-C 3.1 (DP1.4) audio out</li></th>
        </tr>
        <tr>
            <th>USB</th>
            <th><li>1x USB 3.0 (USB 3.1 Gen 1), equivalent to USB 3.2 Gen 1/USB 3.0, up to 5Gbps</li><li>1x USB Type-C 3.1（DP1.4/OTG）</li><li>1x USB 2.0 High（480Mbps）/Full（12Mbps）/Low-Speed（1.5Mbps） modes </li></th>
        </tr>
        <tr>
            <th>40-pin</th>
            <th><li>Fully compatible with Raspberry Pi 40-pin header for connecting abundant add-on modules </li><li>Supports UART/SPI/I2C/I2S/PWM/ADC/5V Power/3.3V Power</li></th>
        </tr>
        <tr>
            <th>Other</th>
            <th><li>1x 5V fan interface</li><li>1x battery connector for low power RTC chip HYM8563TS </li><li>2x LEDs - blue LED blinks on system start, red LED user controllable</li></th>
        </tr>
        <tr>
            <th>Power Input</th>
            <th><li>USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A</li></th>
        </tr>
        <tr>
            <th>Buttons</th>
            <th><li>1x PWRON button for sleep/wake</li><li>1x Reset button for reboot</li><li>1x Maskrom button for maskrom burn-in mode</li></th>
        </tr>
        <tr>
            <th>OS Support</th>
            <th><li>Official: ：Android 12.0，Debian11，Buildroot</li><li>3rd Party：Armbian，Ubuntu 20.04，Ubuntu22.04，Kylin OS</li></th>
        </tr>
        <tr>
            <th>Dimensions</th>
            <th><li>92 mm x 62mm</li></th>
        </tr>
        <tr>
            <th>Operating temperature</th>
            <th><li>0℃ ~ 80℃</li></th>
        </tr>
    </tbody>
</table>

