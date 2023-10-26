---
sidebar_position: 2
---

# 产品介绍

让我们在 5 分钟内了解 LM5。

## 简介

ArmSoM-LM5采用Rockchip RK3588新一代旗舰级八核64位处理器，主频高达2.4GHz，6 TOPS算力NPU，最大可配32GB大内存。支持8K视频编解码，采用了LGA封装，传输能力和稳定性更强。拥有丰富的接口，支持多硬盘、千兆网、WiFi6、5G/4G扩展和多种视频输入输出。支持多种操作系统；提供底板参考设计资料，用户可自主深度化定制。可适用于ARM PC、边缘计算、云服务器、人工智能、云计算、虚拟/增强现实、区块链、智能NVR等领域

## 关键参数

- SOC：瑞芯微 RK3588
- CPU：RK3588 四核Cortex-A76@ 2.4GHz+四核Cortex-A55@ 1.8GHz
- GPU：ARM Mali-G610 MP4
- NPU：算力高达6TOPs（INT8），支持INT4/INT8/INT16混合运算
- VPU/编解码: 
  - 硬解码：8K@60fps H.265/VP9/AVS2、 8K@30fps H.264 AVC/MVC、 4K@60fps AV1、1080P@60fps MPEG-2/-1/VC-1/VP8
  - 硬编码：8K@30fps H.265 / H.264
- RAM：4GB/8GB/16GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB
- Flash：16GB/32GB/64GB/128GB/256GB eMMC，默认eMMC 32GB
- 工作电压：电压 4V（电压误差±5%）
- 工作温度：0℃ ~ 70℃
- 接口类型：LGA封装（栅格阵列封装），总引脚数 506Pin
- 操作系统：Android 12.0，Debian11，Buildroot，Armbian，Kylin OS
- PCB 层数: 12 层 PCB 板设计
- 重量：约 13.4克
- 大小：45mm × 50mm × 4.5mm (top: 2.2mm+PCB: 1.2mm +bottom: 1.1mm)

## 实物图

### ArmSoM-LM5 

:::info

ArmSoM-LM5拥有极小尺寸，约为信用卡的一半。

:::
![ArmSoM-LM5 front & back](/img/lm/lm-5/armsom-rk3588_lga_core_board_front_back.png)
![ArmSoM-LM5 & Credit-Card-Size.webp](/img/lm/lm-5/Credit-Card-Size.webp)

### ArmSoM-LM5 开发套件
![ArmSoM-LM5 development kit](/img/lm/lm-5/armsom-lm5-development-kit.webp.png)



## 硬件规格

### ArmSoM-LM5 功能参数

<table>
    <thead>
        <tr>
            <th>类别</th>
            <th>功能</th>
            <th>数量</th>
            <th colspan="2">参数</th>
      </tr>
    </thead>
    <tbody align="left">
        <tr >
            <th rowspan="4">视频输入接口</th>
            <th>MIPI DC(DPHY/CPHY) combo PHY</th>
            <th>2</th>
            <th><li>支持 DPHY 或 CPHY</li><li>支持 4 通道 MIPI DPHY V2.0，每线最高 4.5Gbps </li><li>支持 3 通道 MIPI CPHY V1.1，每线最高 2.5Gbps</li></th>
            <th  rowspan="2">支持的 MIPI 摄像头组合：<li>2 MIPI DCPHY + 4 MIPI CSI DPHY(2 lanes)</li><li>2 MIPI DCPHY + 1 MIPI CSI DPHY(4 lanes) + 2 MIPI CSI DPHY(2 lanes)</li><li>2 MIPI DCPHY + 2 MIPI CSI DPHY(4 lanes)</li></th>
        </tr>
        <tr>
            <th>MIPI CSI DPHY</th>
            <th>4</th>
            <th><li>2 通道 MIPI DPHY V1.2 每线最高 2.5Gbps</li><li>2 个 2 lanes DPHY 可合并为一个 4lanes DPHY</li></th>
        </tr>
        <tr>
            <th>DVP</th>
            <th>≤1</th>
            <th colspan="2"><li>8/10/12/16-bit 标准 DVP 接口，最高 150MHz 数据输入</li><li>支持 BT.601/BT.656 和 BT.1120 VI 接口</li></th>
        </tr>
        <tr>
            <th>HDMI RX</th>
            <th>1</th>
            <th colspan="2"><li>支持 3.4Gbps~6Gbps HDMI 2.0</li><li>支持 250Mbps~3.4Gbps HDMI 1.4b</li><li>支持 HDCP2.3 及 HDCP1.4</li></th>
        </tr>
        <tr>
            <th rowspan="4">显示输出接口</th>
            <th>HDMI/eDP TX interface</th>
            <th>≤2</th>
            <th colspan="2"><li>支持 2 个 HDMI/eDP TX 复用接口（HDMI 和 eDP 不能同时工作）</li><li>HDMI 支持 7680×4320@60Hz 分辨率，支持 3,6,8,10,12Gbps 带宽，支持 HDCP2.3 </li><li>eDP 支持 4K@60Hz 分辨率，每个接口支持 x1,x2,x4 配置，支持 1.62Gbps,2.7Gbps 以及 5.4Gbps 带宽，支持 HDCP1.3</li></th>
        </tr>
        <tr>
            <th>DP TX</th>
            <th>2</th>
            <th colspan="2"><li>支持 2 路 DP TX 1.4a 接口，可连接 USB3.1 Gen1，支持 1/2/4lanes</li><li>分辨率可达 8192x4320@30Hz</li><li>支持 HDCP2.3, HDCP 1.3</li></th>
        </tr>
        <tr>
            <th>MIPI DSI</th>
            <th>2</th>
            <th colspan="2"><li>支持 2 个 MIPI DPHY 2.0 或 CPHY 1.1，分辨率可达 4K@60Hz</li><li>支持左右模式双 MIPI 显示，支持 RGB/YUV 格式(最高 10bit)</li></th>
        </tr>
        <tr>
            <th>BT.1120 video output</th>
            <th>≤1</th>
            <th colspan="2"><li>支持 RGB 格式 (最高 8bit)，数据速率可达 150MHz</li><li>分辨率高达 1920x1080@60Hz</li></th>
        </tr>
        <tr>
            <th rowspan="3">音频接口</th>
            <th>I2S</th>
            <th>≤4</th>
            <th colspan="2"><li>8 lanes I2S0/I2S1：支持 TX 和 RX，音频分辨率 16~32 位，采样率达 192KHz</li><li>2 lanes I2S2/I2S3：支持 TX 和 RX，音频分辨率 16~32 位，采样率达 192KHz </li></th>
        </tr>
        <tr>
            <th>SPDIF</th>
            <th>≤2</th>
            <th colspan="2"><li>支持 2x 16bit 音频数据存储</li><li>支持双相立体声输出</li></th>
        </tr>
        <tr>
            <th>PDM</th>
            <th>≤2</th>
            <th colspan="2"><li>最高 8 channels，音频分辨率 16~24 位，采样率达 192KHz</li><li>支持 PDM 主接收模式</li></th>
        </tr>
        <tr>
            <th>网络接口</th>
            <th>GMAC</th>
            <th>≤2</th>
            <th colspan="2"><li>2 路 GMAC，提供 RGMII / RMII 接口引出</li><li>支持 10/100/1000Mbps 数据传输速率</li></th>
        </tr>
        <tr>
            <th rowspan="10">通信接口</th>
            <th>SDIO</th>
            <th>≤1</th>
            <th colspan="2"><li>支持 SDIO3.0</li></th>
        </tr>
        <tr>
            <th>USB 2.0 Host</th>
            <th>2</th>
            <th colspan="2"><li>支持两路 USB2.0 Host</li></th>
        </tr>
        <tr>
            <th>SATA</th>
            <th>≤3</th>
            <th><li>拥有3个SATA3.0控制器，和PCIe2.0以及USB_HOST2控制器复用 PIPE PHY0/1/2</li><li>支持 eSATA, 最高支持 6Gbps 数据速率</li></th>
            <th rowspan="3"><li>Combo PIPE PHY0 support：SATA/PCIe2.1</li><li>Combo PIPE PHY1 support：SATA/PCIe2.1</li><li>Combo PIPE PHY2 support：SATA/PCIe2.1/USB3.1 Gen1</li></th>
        </tr>
        <tr>
            <th>USB3.1 Gen1</th>
            <th>≤3</th>
            <th><li>USB3.1 Gen1 数据速率高达 5Gbps</li><li>2路USB3.1 OTG， 与 DP TX (USB3OTG_0 和 USB3OTG_1)复用，USB3OTG_0 和 USB3OTG_1 支持USB Type-C 和 DP Alt</li><li>1 路 USB3.1 Host，与 PIPE PHY2 (USB3OTG_2)复用</li></th>
        </tr>
        <tr>
            <th>PCIe2.1</th>
            <th>≤3</th>
            <th><li>每 PCIe2.1 接口支持 1lane，最高支持 5Gbps 数据速率</li></th>
        </tr>
        <tr>
            <th>PCIe3.0</th>
            <th>≤4</th>
            <th colspan="2" ><li>支持 RC 和 EP</li><li>每通道最高支持 8Gbps 数据速率</li><li>支持 4 种组合方式：1 路 x4、2 路 x2、4 路 x1、1 路 x2+2 路 x1</li></th>
        </tr>
        <tr>
            <th>SPI</th>
            <th>≤5</th>
            <th colspan="2"><li>每个控制器支持两路片选输出</li><li>支持串行主、串行从模式，软件可配置</li></th>
        </tr>
        <tr>
            <th>I2C</th>
            <th>≤9</th>
            <th colspan="2"><li>支持 7 位和 10 位地址模式</li><li>标准模式数据传输速率可达100k bits/s，在快速模式下高达400k bits/s；</li></th>
        </tr>
        <tr>
            <th>UART</th>
            <th>≤10</th>
            <th colspan="2"><li>内置 2 路 64bit FIFO，可分别用于 TX 和 RX</li><li>支持 5 位、6 位、7 位、8 位串行数据收发，波特率高达 4Mbps</li><li>10 路 UART 均支持自动流控模式</li></th>
        </tr>
        <tr>
            <th>CAN</th>
            <th>≤3</th>
            <th colspan="2"><li>支持 3 路 CAN 2.0B</li><li>支持 CAN 标准帧和扩展帧收发</li></th>
        </tr>
        <tr>
            <th rowspan="3">其他接口</th>
            <th>GPIO</th>
            <th>GPIOs</th>
            <th colspan="2"><li>所有 GPIO 均可用于产生中断</li><li>支持电平触发和边沿触发中断</li><li>支持可配置的上拉方向（弱上拉和弱下拉）</li></th>
        </tr>
        <tr>
            <th>ADC</th>
            <th>≤7</th>
            <th colspan="2"><li>支持 7 路 12bit 单端输入 SAR-ADC，采样率高达 1MS/s</li></th>
        </tr>
        <tr>
            <th>PWM</th>
            <th>≤16</th>
            <th colspan="2"><li>最高支持 16 个片上 PWM，支持捕获模式</li><li>针对 PWM3、PWM7、PWM11、PWM15 的 IR 应用进行了优化</li></th>
        </tr>
    </tbody>
</table>

:::info

硬件参考设计专栏将提供完整的 **[《引脚功能表格》](/docs/lm/lm5/lm5-hardware#引脚功能表格)**

:::

### ArmSoM-LM5 开发套件规格参数

<table>
    <thead>
        <tr>
            <th>项目</th>
            <th>参数</th>
            <th>功能</th>
        </tr>
    </thead>
    <tbody align="left">
        <tr >
            <th>SOC</th>
            <th>RockChip RK3588</th>
            <th></th>
        </tr>
        <tr >
            <th>CPU</th>
            <th>Quad Core Cortex-A76@2.4GHz+Quad CoreCortex-A55@1.8GHz 8nm</th>
            <th></th>
        </tr>
        <tr >
            <th>GPU</th>
            <th>GPU Mali-G610 MP4(4x256KB L2 Cache)</th>
            <th><li>支持 OpenGL ES3.2/OpenCL2.2/Vulkan1.1</li></th>
        </tr>
        <tr >
            <th>NPU</th>
            <th></th>
            <th><li>支持多路并行编码,最大 16 路 1080P@30fps 编码</li><li>支持实时 H.265/H.264 视频解码</li><li>支持最大 32 路 1080P@30fps 解码</li></th>
        </tr>
         <tr >
            <th>VPU/编解码</th>
            <th>6 TOPS@INT8(3 NPU core)</th>
            <th><li>支持 INT4/INT8/INT16 混合运算</li><li>支持深度学习框架：TensorFlow/MXNet/PyTorch/Caffe/Tflite/Onnx NN/Android NN 等</li></th>
        </tr>
        <tr >
            <th>RAM</th>
            <th>4GB/8GB/16GB（最高可配 32GB ）64bit LPDDR4/LPDDR4x，默认LPDDR4x 8GB</th>
            <th><li>支持四通道,每个通道 16 位数据宽度最大支持 32GB</li></th>
        </tr>
        <tr >
            <th>Flash</th>
            <th>16GB/32GB/64GB/128GB/256GB eMMC，默认eMMC 32GB</th>
            <th><li>支持 HS400/HS200/DDR50</li> <li>支持从 eMMC/SD/MMC 启动系统</li> </th>
        </tr>
        <tr >
            <th>SD/MMC</th>
            <th>SD3.0/MMC4.51</th>
            <th><li>支持最高 150M 数据速率</li> </th>
        </tr>
    </tbody>
</table>