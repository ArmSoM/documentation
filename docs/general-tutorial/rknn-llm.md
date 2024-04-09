---
sidebar_label: "RKLLM"
sidebar_position: 6
---
# RKLLM
## 1. Introduction to RKLLM
RKLLM software stack can help users to quickly deploy AI models to Rockchip chips. The overall framework is as follows:

![rknn-llm](/img/general-tutorial/rknn-llm.png)

### 1.1 Introduction to RKLLM Toolchain
#### Overview of RKLLM-Toolkit Features

RKLLM-Toolkit is a development suite provided to users for quantization and conversion of large language models (LLMs) on computers. Through the Python interface provided by this tool, users can easily accomplish the following tasks:

1. Model conversion: Supports converting Hugging Face format LLMs to RKLLM models. Currently supported models include LLaMA, Qwen/Qwen2, Phi2, etc. The converted RKLLM models can be loaded and used on the Rockchip NPU platform.
2. Quantization: Supports quantizing floating-point models to fixed-point models. Currently supported quantization types include w4a16 and w8a8.

#### Overview of RKLLM Runtime Features

RKLLM Runtime is mainly responsible for loading the RKLLM models converted by RKLLM-Toolkit and implementing LLM model inference on the Rockchip NPU platform RK3576/RK3588 through NPU driver calls. When inferring LLM models, users can define the inference parameter settings of RKLLM models, define different text generation methods, and continuously obtain inference results through pre-defined callback functions.

### 1.2 Introduction to RKLLM Development Process

The overall development process of RKLLM mainly consists of two parts: model conversion and board deployment and operation.

1. Model conversion:

During this stage, Hugging Face format LLMs provided by users will be converted to RKLLM format for efficient inference on the Rockchip NPU platform. 
   
This step includes:
- a. Obtain the original model: Obtain the Hugging Face format LLM or self-trained LLM, which requires the model's saved structure to be consistent with the model structure on the Hugging Face platform.
- b. Model loading: Load the original model using the rkllm.load_huggingface() function.
- c. Model quantization configuration: Build the RKLLM model through the rkllm.build() function. During the building process, users can choose whether to quantize the model to improve the performance of model deployment on hardware, as well as select different optimization levels and quantization types.
- d. Model export: Export the RKLLM model to a .rkllm format file using the rkllm.export_rkllm() function for subsequent deployment.

2. Board deployment and operation:
This stage covers the actual deployment and operation of the model. It usually includes the following steps:
- a. Model initialization: Load the RKLLM model to the Rockchip NPU platform, perform corresponding model parameter settings to define the desired text generation method, and pre-define callback functions to receive real-time inference results for inference preparation.
- b. Model inference: Perform inference operations by passing input data to the model and running model inference. Users can continuously obtain inference results through pre-defined callback functions.
- c. Model release: After completing the inference process, release the model resources to allow other tasks to continue using the NPU's computing resources.

These two steps constitute the complete development process of RKLLM, ensuring successful conversion, debugging, and efficient deployment of large language models on the Rockchip NPU.

### 1.3 Applicable Hardware Platforms

This document applies to hardware platforms mainly including: **RK3576**, **RK3588**

## 2. Development Environment Preparation

In the released RKLLM toolchain compressed file, it includes the RKLLM-Toolkit's whl installation package, related files of RKLLM Runtime library, and reference example code. The specific folder structure is as follows:
```
doc
└──Rockchip_RKLLM_SDK_EN.pdf # RKLLM SDK documentation
rkllm-runtime
├──example
│ └── src
│ └── main.cpp
│ └── build-android.sh
│ └── build-linux.sh
│ └── CMakeLists.txt
│ └── Readme.md
├──runtime
│ └── Android
│ └── librkllm_api
│ └──arm64-v8a
│ └── librkllmrt.so # RKLLM Runtime library
│ └──include
│ └── rkllm.h # Runtime header file
│ └── Linux
│ └── librkllm_api
│ └──aarch64
│ └── librkllmrt.so
│ └──include
│ └── rkllm.h
rkllm-toolkit
├──examples
│ └── huggingface
│ └── test.py
├──packages
│ └── md5sum.txt 
│ └── rkllm_toolkit-1.0.0-cp38-cp38-linux_x86_64.whl
rknpu-driver
└──rknpu_driver_0.9.6_20240322.tar.bz2
```
In this chapter, detailed instructions will be provided on the installation of RKLLM-Toolkit tools and RKLLM Runtime. For specific usage methods, please refer to the instructions in Chapter 3.

### 2.1 Installation of RKLLM-Toolkit

This section mainly explains how to install RKLLM-Toolkit through pip. Users can follow the specific process instructions below to complete the installation of the RKLLM-Toolkit toolchain.

#### Installation via pip
##### Install miniforge3 tool

To avoid the system's requirement for multiple different versions of Python environments, it is recommended to use miniforge3 to manage Python environments. Check whether miniforge3 and conda versions are installed. If installed, this step can be omitted.
```
conda -V
# If conda is not installed, it will prompt "conda: command not found"
# If conda is installed, it will show the version, for example, conda 23.9.0
```

Download the miniforge3 installation package
```
wget -c https://mirrors.bfsu.edu.cn/github-release/condaforge/miniforge/LatestRelease/Miniforge3-Linux-x86_64.sh
```

Install miniforge3
```
chmod 777 Miniforge3-Linux-x86_64.sh
bash Miniforge3-Linux-x86_64.sh
```

##### Create RKLLM-Toolkit Conda environment

Enter the Conda base environment
```
source ~/miniforge3/bin/activate # miniforge3 is the installation directory
# (base) xxx@xxx-pc:~$
```
Create a Conda environment named RKLLM-Toolkit with Python 3.8 version (recommended version)
```
conda create -n RKLLM-Toolkit python=3.8
```
Enter the RKLLM-Toolkit Conda environment
```
conda activate RKLLM-Toolkit
# (RKLLM-Toolkit) xxx@xxx-pc:~$
```

#### Installation of RKLLM-Toolkit

Install the RKLLM-Toolkit toolchain whl package directly using pip in the RKLLM-Toolkit Conda environment. During the installation process, the installation tool will automatically download the necessary dependencies for the RKLLM-Toolkit tools.

```bash
pip3 install rkllm_toolkit-1.0.0-cp38-cp38-linux_x86_64.whl
```

If the following commands execute without errors, the installation is successful.

```bash
python
from rkllm.api import RKLLM
```

### 2.2 Usage of RKLLM Runtime Library

The released RKLLM toolchain files include all files containing RKLLM Runtime:
- lib/librkllmrt.so: RKLLM Runtime library for RK3576/RK3588 board-side deployment and inference of RKLLM models.
- include/rkllm_api.h: Header file corresponding to librkllmrt.so function library, which includes explanations of related structures and function definitions.

When building deployment and inference code for RK3576/RK3588 boards through the RKLLM toolchain, attention should be paid to linking the above header files and function libraries to ensure correct compilation. When the code is actually running on RK3576/RK3588 boards, it is also necessary to ensure that the above function library files are successfully pushed to the board and declare the function library through the following environment variables:

```bash
ulimit -Sn 50000
export LD_LIBRARY_PATH=./lib
./llm_demo qwen.rkllm
```

### 2.3 Compilation Requirements of RKLLM Runtime

During the use of RKLLM Runtime, attention should be paid to the version issue of the gcc compiler. It is recommended to use the cross-compilation tool gcc-arm-10.2-2020.11-x86_64-aarch64-none-linux-gnu. The specific download path is: [GCC_10.2 Cross Compilation Tool Download Address](https://developer.arm.com/downloads/-/gnu-a/10-2-2020-11).

Please note that cross-compilation tools are often downward compatible but not upward compatible, so do not use versions below 10.2.

If you choose to use the Android platform, you need to compile Android executable files. It is recommended to use the Android NDK tool for cross-compilation. The download path is: Android NDK Cross Compilation Tool Download Address, and the recommended version is r18b.

Specific compilation methods can also refer to example/build_demo.sh in the RKLLM-Toolkit toolchain files.

### 2.4 Chip Kernel Update

Since the current publicly available firmware kernel driver version does not support the RKLLM tool, it is necessary to update the kernel. The rknpu driver package supports two main kernel versions: kernel-5.10 and kernel-6.1. For kernel-5.10, it is recommended to use a specific version number 5.10.198, repo: GitHub - rockchip-linux/kernel at develop-5.10; for kernel-6.1, it is recommended to use a specific version number 6.1.57. The specific version number can be confirmed in the Makefile under the kernel root directory.
The update steps are as follows:
a. Download the compressed package rknpu_driver_0.9.6_20240322.tar.bz2.
b. Unzip the package and overwrite the rknpu driver code in the current kernel code directory.
c. Recompile the kernel.
d. Burn the newly compiled kernel into the device.

## Usage Environment

Development board: ArmSoM-Sige7

Code repository: [rknn-llm](https://github.com/ArmSoM/rknn-llm)