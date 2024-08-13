---
sidebar_label: "RKNN SDK 快速上手指南"
sidebar_position: 7
---

# RKNN SDK 快速上手指南

- 开发板：ArmSoM-W3，ArmSoM-Sige7，ArmSoM-Sige5，ArmSoM-AIM7

- OS：Debian11/12

- 目的：本文介绍如何使用rk的npu sdk。

作为瑞芯微8nm高性能AIOT平台，RK3576/RK3588 NPU性能可谓十分强大，6TOPS设计能够实现高效的神经网络推理计算。这使得RK3576/RK3588在图像识别、语音识别、自然语言处理等人工智能领域有着极高的性能表现。

此外，RK3576/RK3588 的NPU还支持多种学习框架，包括TensorFlow，Pytorch、Caffe、MXNet等在人工智能开发中流行的深度学习框架，能够为开发者提供丰富的工具和库，使他们能够方便地进行模型训练和推理，可轻松应对各种大数据运算场景。

## RK3576/RK3588 NPU典型应用

计算机视觉（Computer Vision）：NPU可用于图像识别、目标检测、人脸识别等任务。在安防监控、自动驾驶、医疗影像分析等领域中有着广泛的应用。

自然语言处理（Natural Language Processing，NLP）：NPU可加速文本分类、情感分析、机器翻译等任务，使得处理大规模文本数据变得更高效。

语音识别与处理（Speech Recognition and Processing）：在语音识别、语音合成等方面，NPU可以提高处理速度和准确性，应用于智能语音助手、语音交互系统等场景。

智能家居与物联网（IoT）：NPU的低功耗特性使其适用于智能家居设备、智能监控摄像头、智能穿戴设备等物联网应用，从而实现设备的智能化和自动化。

医疗健康：在医学影像分析、疾病诊断、基因组学等领域，NPU可以加速大规模数据的处理和分析，帮助医疗工作者更准确地诊断疾病和制定治疗方案。

智能交通：在智能交通系统中，NPU可用于车辆识别、交通流量监控、智能交通信号灯控制等任务，提升交通系统的效率和安全性。

## Rockchip NPU SDK

rockchip的npu sdk分为两个部分，PC端使用的是rknn-toolkit2，可以在PC端进行模型转换，推理以及性能评估。具体来说是把主流的模型如Caffe、TensorFlow、TensorFlow Lite、ONNX、DarkNet、PyTorch 等转换为RKNN模型，并可以在PC端使用这个RKNN模型进行推理仿真，计算时间和内存开销。板端还有一部分，就是rknn runtime环境，包含一组C API库以及与NPU进行通信的驱动模块，可执行程序等。

RKNN软件栈可以帮助用户快速将AI模型部署到瑞芯微芯片上。整体框架如下：

![rknn-llm](/img/general-tutorial/rknn-llm.png)

为了使用 RKNPU，用户需要首先在计算机上运行 RKNN-Toolkit2 工具，将训练好的模型转换为 RKNN 格式的模型，然后使用 RKNN C API 或 Python API 在开发板上进行推理。

- RKNN-Toolkit2是一款软件开发套件，供用户在PC和瑞芯微NPU平台上进行模型转换、推理和性能评估。

- RKNN-Toolkit-Lite2为瑞芯微NPU平台提供Python编程接口，帮助用户部署RKNN模型，加速AI应用落地。

- RKNN Runtime为Rockchip NPU平台提供C/C++编程接口，帮助用户部署RKNN模型，加速AI应用的落地。

- RKNPU内核驱动负责与NPU硬件交互。它已经开源，可以在Rockchip内核代码中找到。

:::tip 

RKNPU2 SDK v2.0.0-beta (for RK3576/RK3562/RK3566/RK3568/RK3588/RV1103/RV1106)
https://github.com/airockchip/rknn-toolkit2

Model zoo:
https://github.com/airockchip/rknn_model_zoo

docs:
https://github.com/airockchip/rknn-toolkit2/tree/master/doc
:::

## RK3576/RK3588 NPU使用案例分享

导出rknn模型步骤

请参考 https://github.com/airockchip/rknn_model_zoo/tree/main/models/CV/object_detection/yolo

### 注意事项

1. 使用rknn-toolkit2版本大于等于1.4.0。
2. 切换成自己训练的模型时，请注意对齐anchor等后处理参数，否则会导致后处理解析出错。
3. 官网和rk预训练模型都是检测80类的目标，如果自己训练的模型,需要更改include/postprocess.h中的OBJ_CLASS_NUM以及NMS_THRESH,BOX_THRESH后处理参数。
4. demo需要librga.so的支持,编译使用请参考 https://github.com/airockchip/librga
5. 由于硬件限制，该demo的模型默认把 yolov5 模型的后处理部分，移至cpu实现。本demo附带的模型均使用relu为激活函数，相比silu激活函数精度略微下降，性能大幅上升。

### Android Demo

#### 编译

首先导入ANDROID_NDK_PATH，例如`export ANDROID_NDK_PATH=~/opts/ndk/android-ndk-r18b`，然后执行如下命令：

```
./build-android.sh -t <target> -a <arch> [-b <build_type>]

# 例如: 
./build-android.sh -t rk3568 -a arm64-v8a -b Release
```

#### 推送执行文件到板子

连接板子的usb口到PC,将整个demo目录到 `/data`:

```sh
adb root
adb remount
adb push install/rknn_yolov5_demo /data/
```

#### 运行

```sh
adb shell
cd /data/rknn_yolov5_demo/

export LD_LIBRARY_PATH=./lib
./rknn_yolov5_demo model/<TARGET_PLATFORM>/yolov5s-640-640.rknn model/bus.jpg
```

### Aarch64 Linux Demo

#### 编译

首先导入GCC_COMPILER，例如`export GCC_COMPILER=~/opt/gcc-linaro-7.5.0-2019.12-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu 
`，然后执行如下命令：

```
./build-linux.sh -t <target> -a <arch> -b <build_type>]

# 例如: 
./build-linux.sh -t rk3588 -a aarch64 -b Release
```

#### 推送执行文件到板子


将 install/rknn_yolov5_demo_Linux 拷贝到板子的/userdata/目录.

- 如果使用rockchip的EVB板子，可以使用adb将文件推到板子上：

```
adb push install/rknn_yolov5_demo_Linux /userdata/
```

- 如果使用其他板子，可以使用scp等方式将install/rknn_yolov5_demo_Linux拷贝到板子的/userdata/目录



#### 运行

```sh
adb shell
cd /userdata/rknn_yolov5_demo_Linux/

export LD_LIBRARY_PATH=./lib
./rknn_yolov5_demo model/<TARGET_PLATFORM>/yolov5s-640-640.rknn model/bus.jpg
```

Note: Try searching the location of librga.so and add it to LD_LIBRARY_PATH if the librga.so is not found on the lib folder.
Using the following commands to add to LD_LIBRARY_PATH.

```sh
export LD_LIBRARY_PATH=./lib:<LOCATION_LIBRGA.SO>
```

### 视频流Demo运行命令参考如下：
- h264视频
```
./rknn_yolov5_video_demo model/<TARGET_PLATFORM>/yolov5s-640-640.rknn xxx.h264 264
```
注意需要使用h264码流视频，可以使用如下命令转换得到：
```
ffmpeg -i xxx.mp4 -vcodec h264 xxx.h264
```

- h265视频
```
./rknn_yolov5_video_demo model/<TARGET_PLATFORM>/yolov5s-640-640.rknn xxx.hevc 265
```
注意需要使用h265码流视频，可以使用如下命令转换得到：
```
ffmpeg -i xxx.mp4 -vcodec hevc xxx.hevc
```
- rtsp视频流
```
./rknn_yolov5_video_demo model/<TARGET_PLATFORM>/yolov5s-640-640.rknn <RTSP_URL> 265
```

![rknn-video](/img/general-tutorial/rknn-video.png)

#### 注意

- 需要根据系统的rga驱动选择正确的librga库，具体依赖请参考： https://github.com/airockchip/librga
- **rk3562 目前仅支持h264视频流**
- **rtsp 视频流Demo仅在Linux系统上支持，Android上目前还不支持**
- 视频流输入的h264名称不能为"out.h264"，会被覆盖


### 演示视频

https://www.bilibili.com/video/BV1jt421M7Pj/
