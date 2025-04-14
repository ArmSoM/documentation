---
slug: rk3576-ultralytics
title: ArmSoM Sige5 & CM5：The New Benchmark for Edge Computing with Ultralytics YOLOv11 on RK3576
authors: [ArmSoM, keven]
tags: [Sige5, CM5, SBC]
---

# ​一、​ArmSoM Sige5 & CM5：Ultralytics YOLOv11 的 RK3576 边缘计算新标杆​​

在计算机视觉技术加速落地的今天，ArmSoM 正式宣布其基于 ​​Rockchip RK3576​​ 的旗舰产品 ​​Sige5 开发板​​ 和 ​​CM5 核心板​​ 全面支持 Ultralytics YOLOv11 模型的 RKNN 部署。这一突破标志着边缘计算领域迎来新一代高性能、低功耗的 AI 解决方案，为工业检测、智能安防、机器人导航等场景提供“开箱即用”的硬核支持。

## ​二、RKNN 工具包
RKNN 工具包是由 Rockchip 提供的一套工具和库，用于促进在其硬件平台上部署深度学习模型。RKNN 或 Rockchip 神经网络是这些工具使用的专有格式。RKNN 模型旨在充分利用 Rockchip 的 NPU（神经处理单元）提供的硬件加速，确保在 RK3588、RK3576、RK3566、RV1103、RV1106 等设备和其他由 Rockchip 支持的系统上执行人工智能任务时的高性能。

### RKNN 模型的主要特点
RKNN 模型为在 Rockchip 平台上部署提供了多项优势：

- 针对 NPU 优化：RKNN 模型经过专门优化，可在 Rockchip 的 NPU 上运行，确保实现最高性能和效率。
- 低延迟：RKNN 格式最大限度地减少了推理延迟，这对边缘设备上的实时应用至关重要。
- 特定平台定制：RKNN 模型可根据特定的 Rockchip 平台进行定制，从而更好地利用硬件资源。
- 电源效率：通过利用专用 NPU 硬件，RKNN 模型的功耗低于GPU CPU 或GPU处理，从而延长了便携式设备的电池寿命。

## 三、使用 CM5：Ultralytics

### ​​1. 导出到 RKNN：转换YOLO11 模型

将Ultralytics YOLO11 模型导出为 RKNN 格式，并使用导出的模型运行推理。

**请确保使用基于 X86 的 Linux PC 将模型导出到 RKNN，因为不支持在基于 Rockchip 的设备（ARM64）上导出。**

```
# 安装 YOLO11 所需的软件包
pip install ultralytics

# 将 YOLO11n PyTorch 模型导出为 RKNN 格式
# 'name' 可以是 rk3588、rk3576、rk3566、rk3568、rk3562、rv1103、rv1106、rv1103b、rv1106b、rk2118 之一
yolo export model=yolo11n.pt format=rknn name=rk3588 # 创建 '/yolo11n_rknn_model'
```

### 2. 部署导出的YOLO11 RKNN 模型

成功将Ultralytics YOLO11 模型导出为 RKNN 格式后，下一步就是在基于 Rockchip 的设备上部署这些模型。

```
# 安装 YOLO11 所需的软件包
pip install ultralytics

# 使用导出的模型运行推理
yolo predict model='./yolo11n_rknn_model' source='https://ultralytics.com/images/bus.jpg'
```

![rknn-bus-yolo](/img/blog/rknn-bus-yolo.jpg)

## 实际应用

配备YOLO11 RKNN 模型的 Rockchip 设备可用于各种应用：

- 智能监控：部署高效的物体检测系统，以低功耗实现安全监控。
- 工业自动化：直接在嵌入式设备上实施质量控制和缺陷检测。
- 零售分析：实时跟踪客户行为和库存管理，无需依赖云。
- 智能农业：在农业领域利用计算机视觉监控作物健康并检测害虫。
- 自主机器人技术：在资源有限的平台上实现基于视觉的导航和障碍物探测。

## 更多

有关更多详细信息，请参阅[Rockchip RKNN Export for Ultralytics YOLO11 Models](https://docs.ultralytics.com/integrations/rockchip-rknn)。
