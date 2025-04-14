---
slug: rk3576-ultralytics
title: ArmSoM Sige5 & CM5：The New Benchmark for Edge Computing with Ultralytics YOLOv11 on RK3576
authors: [ArmSoM, keven]
tags: [Sige5, CM5, SBC]
---

# ArmSoM Sige5 & CM5: The New Benchmark for Edge Computing with Ultralytics YOLOv11 on RK3576

As computer vision technology rapidly advances, ArmSoM officially announces that its flagship products—the **Sige5 Development Board** and **CM5 Core Board** based on **Rockchip RK3576**—now fully support RKNN deployment of Ultralytics YOLOv11 models. This breakthrough marks the arrival of a new generation of high-performance, low-power AI solutions in edge computing, providing "out-of-the-box" support for industrial inspection, smart security, robotic navigation, and other applications.

![rockchip-rknn](/img/blog/rockchip-rknn.avif)  

## 一、Rockchip RKNN Toolkit
The RKNN Toolkit is a suite of tools and libraries provided by Rockchip to facilitate the deployment of deep learning models on its hardware platforms. RKNN (Rockchip Neural Network) is the proprietary format used by these tools. RKNN models are designed to fully leverage hardware acceleration from Rockchip’s NPUs (Neural Processing Units), ensuring high performance for AI tasks on devices such as RK3588, RK3576, RK3566, RV1103, RV1106, and other Rockchip-supported systems.

### Key Features of RKNN Models
RKNN models offer multiple advantages for deployment on Rockchip platforms:

- **NPU Optimization**: RKNN models are specifically optimized for Rockchip’s NPUs, ensuring peak performance and efficiency.
- **Low Latency**: The RKNN format minimizes inference latency, crucial for real-time applications on edge devices.
- **Platform-Specific Customization**: RKNN models can be tailored to specific Rockchip platforms, maximizing hardware resource utilization.
- **Power Efficiency**: dedicated NPU hardware, RKNN models consume less power than CPU/GPU processing, extending battery life for portable devices.

## 二、Using CM5 with Ultralytics

### 1. Export to RKNN: Convert YOLOv11 Models
Export Ultralytics YOLOv11 models to RKNN format and run inference with the exported model.

**Ensure you use an x86-based Linux PC for exporting models to RKNN, as this is not supported on Rockchip-based devices (ARM64).**

```bash
# Install required packages for YOLOv11
pip install ultralytics

# Export a YOLOv11n PyTorch model to RKNN format
# 'name' can be one of rk3588, rk3576, rk3566, rk3568, rk3562, rv1103, rv1106, rv1103b, rv1106b, or rk2118
yolo export model=yolo11n.pt format=rknn name=rk3588  # Creates '/yolo11n_rknn_model'
```

### 2. Deploy the Exported YOLOv11 RKNN Model
After successfully exporting the Ultralytics YOLOv11 model to RKNN format, the next step is deployment on Rockchip-based devicesbash

```
# Install required packages for YOLOv11
pip install ultralytics

# Run inference with the exported model
yolo predict model='./yolo11n_rknn_model' source='https://ultralytics.com/images/bus.jpg'
```
![rknn-bus-yolo](/img/blog/rknn-bus-yolo.jpg)

## 三、Real-World Applications
Rockchip devices equipped with YOLOv11 RKNN models can be used in diverse scenarios:

• **Intelligent Surveillance**: Deploy efficient object detection systems for low-power security monitoring.
• **Industrial Automation**: Implement quality control and defect detection directly on embedded devices.
• **Retail Analytics**: Track customer behavior and manage inventory in real time without cloud dependency.
• **Smart Agriculture**: Monitor crop health and detect pests using computer vision in farming.
• **Autonomous Robotics**: Enable vision-based navigation and obstacle detection on resource-limited platforms.

## 四、Learn More
For detailed documentation, visit [Rockchip RKNN Export for Ultralytics YOLO11 Models](https://docs.ultralytics.com/integrations/rockchip-rknn).