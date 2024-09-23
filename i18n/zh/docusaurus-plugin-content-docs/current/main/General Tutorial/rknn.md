---
sidebar_label: "RKNN SDK 快速上手指南"
sidebar_position: 7
---

# RKNN SDK 快速上手指南

此文档面向零基础用户详细介绍如何快速在计算机上使用 RKNN-Toolkit2 完成模型转换，并通过
RKNPU2 部署到 Rockchip 开发板上。本文所用示例已集成到 RKNN Model Zoo 中。
支持的平台：RK3562、RK3566系列、RK3568系列、RK3576系列、RK3588系列

- 开发板：ArmSoM-W3, ArmSoM-Sige7, ArmSoM-AIM7, ArmSoM-Sige5, ArmSoM-CM5, ArmSoM-Sige3

- OS：Debian11/12

- 目的：本文介绍如何使用rk的npu sdk。

作为瑞芯微8nm高性能AIOT平台，RK3576/RK3588 NPU性能可谓十分强大，6TOPS设计能够实现高效的神经网络推理计算。这使得RK3576/RK3588在图像识别、语音识别、自然语言处理等人工智能领域有着极高的性能表现。

此外，RK3576/RK3588 的NPU还支持多种学习框架，包括TensorFlow，Pytorch、Caffe、MXNet等在人工智能开发中流行的深度学习框架，能够为开发者提供丰富的工具和库，使他们能够方便地进行模型训练和推理，可轻松应对各种大数据运算场景。

## 1. RK3576/RK3588 NPU典型应用

计算机视觉（Computer Vision）：NPU可用于图像识别、目标检测、人脸识别等任务。在安防监控、自动驾驶、医疗影像分析等领域中有着广泛的应用。

自然语言处理（Natural Language Processing，NLP）：NPU可加速文本分类、情感分析、机器翻译等任务，使得处理大规模文本数据变得更高效。

语音识别与处理（Speech Recognition and Processing）：在语音识别、语音合成等方面，NPU可以提高处理速度和准确性，应用于智能语音助手、语音交互系统等场景。

智能家居与物联网（IoT）：NPU的低功耗特性使其适用于智能家居设备、智能监控摄像头、智能穿戴设备等物联网应用，从而实现设备的智能化和自动化。

医疗健康：在医学影像分析、疾病诊断、基因组学等领域，NPU可以加速大规模数据的处理和分析，帮助医疗工作者更准确地诊断疾病和制定治疗方案。

智能交通：在智能交通系统中，NPU可用于车辆识别、交通流量监控、智能交通信号灯控制等任务，提升交通系统的效率和安全性。

## 2. Rockchip NPU SDK简介

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

## 3. 准备开发环境

本章介绍如何在计算机中直接安装开发环境，后续的示例程序运行过程也将以直接安装为例说明。如果
需要在 Docker 环境中运行示例程序，可以参考第 5 章中的内容准备开发环境。
本章分为四个部分：
- 下载 RKNN 相关仓库
- 安装RKNN-Toolkit2 环境
- 安装编译工具
- 安装板端 RKNPU2 环境

### 3.1 下载 RKNN 相关仓库

建议新建一个目录用来存放 RKNN 仓库，例如新建一个名称为 Projects 的文件夹，并将 RKNN-Toolkit2
和 RKNN Model Zoo 仓库存放至该目录下，参考命令如下：

```
# 新建 Projects 文件夹
mkdir Projects
# 进入该目录
cd Projects
# 下载 RKNN-Toolkit2 仓库
git clone https://github.com/airockchip/rknn-toolkit2.git --depth 1
# 下载 RKNN Model Zoo 仓库
git clone https://github.com/airockchip/rknn_model_zoo.git --depth 1
# 注意：
# 1.参数 --depth 1 表示只克隆最近一次 commit
# 2.如果遇到 git clone 失败的情况，也可以直接在 github 中下载压缩包到本地，然后解压至该目录
```

### 3.2 安装 RKNN-Toolkit2 环境

#### 3.2.1 安装 Python

如果系统中没有安装 Python 3.8（建议版本），或者同时有多个版本的 Python 环境，建议使用Miniforge
Conda 创建新的 Python 3.8 环境。

##### 3.2.1.1 安装 Miniforge Conda

在计算机的终端窗口中执行以下命令，检查是否安装Miniforge Conda，若已安装则可省略此节步骤。

```
conda -V
# 参考输出信息：conda 23.3.1 ，表示 Miniforge conda 版本为 23.3.1
# 如果提示 conda: command not found，则表示未安装 Miniforge
```

如果没有安装 Miniforge Conda，可以通过下面的链接下载 Miniforge Conda 安装包：

```
wget -c https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
```

然后通过以下命令安装 Miniforge Conda：

```
// 安装过程全部输入yes
chmod 777 Miniforge3-Linux-x86_64.sh
bash Miniforge3-Linux-x86_64.sh
```

#### 3.2.1.2 使用 Miniforge Conda 创建 Python 环境

在计算机的终端窗口中，执行以下命令进入 Conda base 环境：

```
source ~/miniforge3/bin/activate # Miniforge 安装的目录
# 成功后，命令行提示符会变成以下形式：
# (base) xxx@xxx:~$
```

通过以下命令创建名称为 toolkit2 的 Python 3.8 环境：

```
conda create -n toolkit2 python=3.8
```

激活 toolkit2 环境，后续将在此环境中安装 RKNN-Toolkit2：

```
conda activate toolkit2
# 成功后，命令行提示符会变成以下形式：
# (toolkit2) xxx@xxx:~$
```

### 3.2.2 安装依赖库和 RKNN-Toolkit2

激活 conda toolkit2 环境后，进入 rknn-toolkit2 目录，根据 requirements_cpxx.txt 安装依赖库，并通过
wheel 包安装 RKNN-Toolkit2，参考命令如下：

```
# 进入 rknn-toolkit2 目录
cd Projects/rknn-toolkit2/rknn-toolkit2
# 请根据不同的 python 版本，选择不同的 requirements 文件
# 例如 python3.8 对应 requirements_cp38.txt
pip install -r packages/requirements_cpxx.txt
# 安装 RKNN-Toolkit2
# 请根据不同的 python 版本及处理器架构，选择不同的 wheel 安装包文件：
# 其中 x.x.x 是 RKNN-Toolkit2 版本号，cpxx 是 python 版本号，请根据实际数值进行替换
pip install packages/rknn_toolkit2--x.x.x-cpxx-cpxx-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
```

### 3.2.3 验证是否安装成功

执行以下命令，若没有报错，则代表 RKNN-Toolkit2 环境安装成功。

```
# 进入 Python 交互模式
python
# 导入 RKNN 类
from rknn.api import RKNN
```
## 3.3 安装编译工具

### 3.3.1 安装 CMake

在计算机的终端中，执行以下命令：

```
# 更新包列表
sudo apt update
# 安装 cmake
sudo apt install cmake
```

### 3.3.2 安装编译器

为了方便描述，后续文档使用板端来表示开发板端。
1. 确认板端系统类型是安卓还是linux

#### 3.3.2.2 Android 系统开发板安装 NDK

注：该章节适用于 Android 系统的开发板，如果板端是 Linux 系统，请忽略此章节

- NDK 下载地址（建议下载r19c 版本）：https://dl.google.com/android/repository/android-ndk-r19c-linux-x86_64.zip
- 解压软件包
- 建议将 NDK 软件包解压到 Projects 的文件夹中，位置如下：

```
Projects
├── rknn-toolkit2
├── rknn_model_zoo
└── android-ndk-r19c # 此路径在后面编译 RKNN C Demo 时会用到
```

此时，NDK 编译器的路径就是 Projects/android-ndk-r19c

#### 3.3.2.3 Linux 系统开发板安装 GCC 交叉编译器

注：该章节适用于 Linux 系统的开发板，如果板端是 Android 系统，请忽略此章节。

- GCC 下载地址
- 板端为 64 位系统：https://releases.linaro.org/components/toolchain/binaries/6.3-2017.05/aarch64-linux-gnu/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu.tar.xz
- 板端为 32 位系统：https://releases.linaro.org/components/toolchain/binaries/6.3-2017.05/arm-linuxgnueabihf/gcc-linaro-6.3.1-2017.05-x86_64_arm-linux-gnueabihf.tar.xz
- 解压软件包
建议将 GCC 软件包解压到 Projects 的文件夹中。以板端为 64 位系统的 GCC 软件包为例，存放位置
如下：
```
Projects
├── rknn-toolkit2
├── rknn_model_zoo
└── gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu # 此路径在后面编译RKNN C Demo时会用到
```

此时， GCC 编译器的路径是 Projects/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/aarch64-linux-gnu

## 3.4 安装板端 RKNPU2 环境

### 3.4.1 确认 RKNPU2 驱动版本
可以在板端执行以下命令查询 RKNPU2 驱动版本：

如下图所示，当前 RKNPU2 驱动版本为 0.9.6。
```
armsom@armsom-sige5:~$ dmesg | grep -i rknpu
[    3.805859] RKNPU 27700000.npu: Adding to iommu group 0
[    3.806273] RKNPU 27700000.npu: RKNPU: rknpu iommu is enabled, using iommu mode
[    3.806802] RKNPU 27700000.npu: can't request region for resource [mem 0x27700000-0x27707fff]
[    3.806868] RKNPU 27700000.npu: can't request region for resource [mem 0x27708000-0x2770ffff]
[    3.807834] [drm] Initialized rknpu 0.9.6 20240322 for 27700000.npu on minor 1
[    3.809765] RKNPU 27700000.npu: bin=0
[    3.810082] RKNPU 27700000.npu: leakage=4
[    3.810155] debugfs: Directory '27700000.npu-rknpu' with parent 'vdd_npu_s0' already present!
[    3.811976] RKNPU 27700000.npu: pvtm=821
[    3.812502] RKNPU 27700000.npu: pvtm-volt-sel=1
[    3.812605] debugfs: Directory '27700000.npu-rknpu' with parent 'vdd_npu_s0' already present!
[    3.813765] RKNPU 27700000.npu: avs=0
[    3.814021] RKNPU 27700000.npu: EM: OPP:600000 is inefficient
[    3.814034] RKNPU 27700000.npu: EM: OPP:500000 is inefficient
[    3.814277] RKNPU 27700000.npu: EM: created perf domain
[    3.814912] RKNPU 27700000.npu: l=10000 h=2147483647 hyst=5000 l_limit=0 h_limit=0 h_table=0
[    3.816379] RKNPU 27700000.npu: RKNPU: nbuf region: [0x000000003fe80000, 0x000000003ff80000), nbuf size: 0x100000
```

Rockchip 开发板的官方固件均自带 RKNPU2 驱动。若以上命令查询不到 NPU 驱动版本，则可能使用的是第三方固件，其中可能没有安装NPU驱动。如果有固件源码，可以在 kernel config 中将CONFIG_ROCKCHIP_RKNPU 选项的值改成 y 以集成 NPU 驱动，然后重新编译内核驱动并烧录。建议RKNPU2 驱动版本 >= 0.9.2。

3.4.2 检查 RKNPU2 环境是否安装

RKNN-Toolkit2 的连板调试功能要求板端已安装 RKNPU2 环境，并且启动 rknn_server 服务。以下是
RKNPU2 环境中的两个基本概念：
- RKNN Server：一个运行在开发板上的后台代理服务。该服务的主要功能是调用板端 Runtime 对应的接口处理计算机通过USB传输过来的数据，并将处理结果返回给计算机。
- RKNPU2 Runtime 库（librknnrt.so）：主要职责是负责在系统中加载 RKNN 模型，并通过调用专用的神经处理单元（NPU）执行 RKNN 模型的推理操作。

如果板端没有安装 RKNN Server 和 Runtime 库，或者 RKNN Server 和 Runtime 库的版本不一致，都需要重新安装 RKNPU2 环境。（注意：1. 若使用动态维度输入的 RKNN 模型，则要求 RKNN Server 和 Runtime 库版本 >= 1.5.0。2. 要保证 RKNN Server 、Runtime 库的版本、RKNN-Toolkit2 的版本是一致的，建议都安装最新的版本）通常情况下，开发板默认已经安装版本一致的 RKNPU2 环境，可以通过下面命令确认（如果没有安装 RKNPU2 环境或者版本不一致，请按照下一节中的步骤来安装/更新 RKNPU2 环境）：

1. 板端为 Android 系统
- 检查 RKNPU2 环境是否安装, 如果能够启动 rknn_server 服务，则代表板端已经安装 RKNPU2 环境。

```
# 进入板端
adb shell
# 启动 rknn_server
su
setenforce 0
/vendor/bin/rknn_server &
```

如果出现以下输出信息，则代表启动 rknn_server 服务成功，即已经安装 RKNPU2 环境。

```
start rknn server, version: x.x.x
```

检查版本是否一致

```
# 查询rknn_server版本
strings /vendor/bin/rknn_server | grep -i "rknn_server version"
# 查询librknnrt.so库版本
# 64位系统
strings /vendor/lib64/librknnrt.so | grep -i "librknnrt version"
# 32位系统
strings /vendor/lib/librknnrt.so | grep -i "librknnrt version"
```

如果出现以下输出信息，则代表rknn_server版本为 x.x.x，librknnrt.so的版本为 x.x.x。

```
rknn_server version: x.x.x
librknnrt version: x.x.x
```

2. 板端为 Linux 系统
检查 RKNPU2 环境是否安装, 如果能够启动 rknn_server 服务，则代表板端已经安装 RKNPU2 环境。

```
# 进入板端
adb shell
# 启动 rknn_server
restart_rknn.sh
```

如果出现以下输出信息，则代表启动rknn_server服务成功，即已经安装RKNPU2环境。

```
start rknn server, version: x.x.x
```

检查版本是否一致
```
# 查询rknn_server版本
strings /usr/bin/rknn_server | grep -i "rknn_server version"
# 查询librknnrt.so库版本
strings /usr/lib/librknnrt.so | grep -i "librknnrt version"
```

### 3.4.3 安装/更新 RKNPU2 环境

不同的板端系统需要安装不同的 RKNPU2 环境，下面分别介绍各自的安装方法。
注：如果已经安装版本一致 RKNPU2 环境，则此节内容可以跳过。
1. 板端为 Android 系统
进入 rknpu2 目录，使用 adb 工具将相应的 rknn_server 和 librknnrt.so 推送至板端，然后启动 rknn_server，
参考命令如下：

```
# 进入 rknpu2 目录
cd Projects/rknn-toolkit2/rknpu2
# 切换到 root 用户权限
adb root
# 挂载文件系统为可读写模式
adb remount
# 推送 rknn_server
# 注：在 64 位 Android 系统中，BOARD_ARCH 对应 arm64 目录；在 32 位系统中，对应 arm 目录。
adb push runtime/Android/rknn_server/${BOARD_ARCH}/rknn_server /vendor/bin/
# 推送 librknnrt.so
# 64位系统
adb push runtime/Android/librknn_api/arm64-v8a/librknnrt.so /vendor/lib64/
# 32位系统
adb push runtime/Android/librknn_api/armeabi-v7a/librknnrt.so /vendor/lib/
# 进入板端
adb shell
# 赋予可执行权限
chmod +x /vendor/bin/rknn_server
# 重启 rknn_server 服务
su
setenforce 0
/vendor/bin/rknn_server &
```

2. 板端为 Linux 系统

进入 rknpu2 目录，使用 adb 工具将相应的 rknn_server 和 librknnrt.so 推送至板端，然后启动 rknn_server，
参考命令如下：

```
# 进入 rknpu2 目录
cd Projects/rknn-toolkit2/rknpu2
# 推送 rknn_server 到板端
# 注：在64位Linux系统中，BOARD_ARCH对应aarch64目录，在32位系统，对应armhf目录。
adb push runtime/Linux/rknn_server/${BOARD_ARCH}/usr/bin/* /usr/bin
# 推送 librknnrt.so
adb push runtime/Linux/librknn_api/${BOARD_ARCH}/librknnrt.so /usr/lib
# 进入板端
adb shell
# 赋予可执行权限
chmod +x /usr/bin/rknn_server
chmod +x /usr/bin/start_rknn.sh
chmod +x /usr/bin/restart_rknn.sh
# 重启 rknn_server 服务
restart_rknn.sh
```

## 4.运行示例程序

本章将介绍如何快速在开发板上运行示例程序，内容分为三个部分：
- RKNN Model Zoo介绍
- RKNN Python Demo 使用方法
- RKNN C Demo 使用方法

### 4.1 RKNN Model Zoo 介绍

RKNN Model Zoo 提供了示例代码，旨在帮助用户快速在 Rockchip 的开发板上运行各种常用模型，整个
工程的目录结构如下：

```
rknn_model_zoo
├── 3rdparty # 第三方库
├── datasets # 数据集
├── examples # 示例代码
├── utils # 常用方法，如文件操作，画图等
├── build-android.sh # 用于目标为 Android 系统开发板的编译脚本
├── build-linux.sh # 用于目标为Linux 系统开发板的编译脚本
└── ...
```

其中，examples 目录包括了一些常用模型的示例，例如 MobileNet 和 YOLO 等。每个模型示例提供了Python 和 C/C++ 两个版本的示例代码（为了方便描述，后续用 RKNN Python Demo 和 RKNN C Demo 来表示）。以 yolov8 模型为例，其目录结构如下：

```
rknn_model_zoo
rknn_model_zoo
├── examples
│ └── yolov8
│ ├── cpp # C/C++ 版本的示例代码
│ ├── model # 模型、测试图片等文件
│ ├── python # 模型转换脚本和Python版本的示例代码
│ └── README.md
└── ...
```

### 4.2 RKNN Python Demo 使用方法

下面以 yolov8 模型为例，介绍 RKNN Python Demo 的使用方法。
注：不同的 RKNN Python Demo 用法存在差异，请按照各自目录下 README.md 中的步骤运行。

#### 4.2.1 准备模型

进入 rknn_model_zoo/examples/yolov8/model 目录，运行 download_model.sh 脚本，该脚本将下载一个可用的yolov8 ONNX 模型，并存放在当前 model 目录下，参考命令如下：

```
# 进入 rknn_model_zoo/examples/yolov8/model 目录
cd Projects/rknn_model_zoo/examples/yolov8/model
# 运行 download_model.sh 脚本，下载 yolov8 onnx 模型
# 例如，下载好的 onnx 模型存放路径为 model/yolov8s_relu.onnx
./download_model.sh
```

#### 4.2.2 模型转换

进入 rknn_model_zoo/examples/yolov8/python 目录，运行 convert.py 脚本，该脚本将原始的 ONNX 模型转成RKNN 模型，参考命令如下：

```
# 进入 rknn_model_zoo/examples/yolov8/python 目录
cd Projects/rknn_model_zoo/examples/yolov8/python
# 运行 convert.py 脚本，将原始的 ONNX 模型转成 RKNN 模型
# 用法: python convert.py model_path [rk3566|rk3576|rk3588|rk3562] [i8/fp] [output_path]
python convert.py ../model/yolov8n.onnx rk3576 i8 ../model/yolov8n_relu.rknn
```

#### 4.2.3 运行 RKNN Python Demo

进入 rknn_model_zoo/examples/yolov8/python 目录，运行 yolov8.py 脚本，便可通过连板调试的方式在板端运
行 yolov8 模型，参考命令如下：

```
# 进入 rknn_model_zoo/examples/yolov8/python 目录
cd Projects/rknn_model_zoo/examples/yolov8/python
# 运行 yolov8.py 脚本，在板端运行 yolov8 模型
# 用法: python yolov8.py --model_path {rknn_model} --target {target_platform} --img_show
# 其中，如果带上 --img_show 参数，则会显示结果图片
# 注：这里以 rk3588 平台为例，如果是其他开发板，则需要修改命令中的平台类型
python yolov8.py --model_path ../model/yolov8s_relu.rknn --target rk3588 --img_show
# 如果想先在计算机端运行原始的 onnx 模型，可以参考以下命令
# 用法: python yolov8.py --model_path {onnx_model} --img_show
python yolov8.py --model_path ../model/yolov8s_relu.onnx --img_show
```




## RK3576/RK3588 NPU使用案例分享

导出rknn模型步骤

请参考 https://github.com/airockchip/rknn_model_zoo/tree/main/models/CV/object_detection/yolo

### 注意事项

1. 使用rknn-toolkit2版本大于等于1.4.0。
2. 切换成自己训练的模型时，请注意对齐anchor等后处理参数，否则会导致后处理解析出错。
3. 官网和rk预训练模型都是检测80类的目标，如果自己训练的模型,需要更改include/postprocess.h中的OBJ_CLASS_NUM以及NMS_THRESH,BOX_THRESH后处理参数。
4. demo需要librga.so的支持,编译使用请参考 https://github.com/airockchip/librga
5. 由于硬件限制，该demo的模型默认把 yolov8 模型的后处理部分，移至cpu实现。本demo附带的模型均使用relu为激活函数，相比silu激活函数精度略微下降，性能大幅上升。

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
adb push install/rknn_yolov8_demo /data/
```

#### 运行

```sh
adb shell
cd /data/rknn_yolov8_demo/

export LD_LIBRARY_PATH=./lib
./rknn_yolov8_demo model/<TARGET_PLATFORM>/yolov8s-640-640.rknn model/bus.jpg
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


将 install/rknn_yolov8_demo_Linux 拷贝到板子的/userdata/目录.

- 如果使用rockchip的EVB板子，可以使用adb将文件推到板子上：

```
adb push install/rknn_yolov8_demo_Linux /userdata/
```

- 如果使用其他板子，可以使用scp等方式将install/rknn_yolov8_demo_Linux拷贝到板子的/userdata/目录



#### 运行

```sh
adb shell
cd /userdata/rknn_yolov8_demo_Linux/

export LD_LIBRARY_PATH=./lib
./rknn_yolov8_demo model/<TARGET_PLATFORM>/yolov8s-640-640.rknn model/bus.jpg
```

Note: Try searching the location of librga.so and add it to LD_LIBRARY_PATH if the librga.so is not found on the lib folder.
Using the following commands to add to LD_LIBRARY_PATH.

```sh
export LD_LIBRARY_PATH=./lib:<LOCATION_LIBRGA.SO>
```

### 视频流Demo运行命令参考如下：
- h264视频
```
./rknn_yolov8_video_demo model/<TARGET_PLATFORM>/yolov8s-640-640.rknn xxx.h264 264
```
注意需要使用h264码流视频，可以使用如下命令转换得到：
```
ffmpeg -i xxx.mp4 -vcodec h264 xxx.h264
```

- h265视频
```
./rknn_yolov8_video_demo model/<TARGET_PLATFORM>/yolov8s-640-640.rknn xxx.hevc 265
```
注意需要使用h265码流视频，可以使用如下命令转换得到：
```
ffmpeg -i xxx.mp4 -vcodec hevc xxx.hevc
```
- rtsp视频流
```
./rknn_yolov8_video_demo model/<TARGET_PLATFORM>/yolov8s-640-640.rknn <RTSP_URL> 265
```

![rknn-video](/img/general-tutorial/rknn-video.png)

#### 注意

- 需要根据系统的rga驱动选择正确的librga库，具体依赖请参考： https://github.com/airockchip/librga
- **rk3562 目前仅支持h264视频流**
- **rtsp 视频流Demo仅在Linux系统上支持，Android上目前还不支持**
- 视频流输入的h264名称不能为"out.h264"，会被覆盖


### 演示视频

https://www.bilibili.com/video/BV1jt421M7Pj/
