---
slug: rk3506-SoM
title: "From Home Appliances to Industrial Applications: Six Typical Scenarios for RK3506"
authors: [ArmSoM]
tags: [rk3506, ArmSoM]
---

In modern intelligent hardware development, selecting a chip with stable performance and low power consumption is key to a product's success. Rockchip's latest RK3506 stands out with its high energy efficiency, versatile expandability, and excellent real-time performance, making it a popular choice in fields such as smart home appliances, industrial control, and handheld terminals.

![rk3506](/img/blog/rk3506.png)

### 1. Specifications and Performance of RK3506  

**CPU**: Triple-core Cortex-A7, clocked at 1.5GHz  
**Graphics Engine**: 2D hardware acceleration  
**Memory**: Supports DDR2/DDR3/DDR3L, up to 1024MB  
**Interfaces**: Includes USB OTG, dual 100M Ethernet ports, UART, SPI, and more  
**Audio-Visual Capabilities**: Supports 720P video software decoding and integrates audio algorithms such as AEC and ANR  

![rk3506-datasheet](/img/blog/rk3506-datasheet.png)

#### 1.1 RK3506 Interfaces  

![rk3506-interfaces](/img/blog/rk3506-interfaces.png)

### 2. Multi-Scenario Adaptability of RK3506  

The RK3506 integrates a triple-core Cortex-A7 with a dual-processor architecture, including Cortex-M0, supporting RTOS and Linux multi-system combinations. It offers rich peripheral interfaces and excellent audio-visual processing capabilities. For instance:  

- **In Smart Home Displays**: Its ultra-low power consumption and integrated voice algorithms provide a smoother user experience.  
- **In Industrial Gateways**: It supports dual 100M Ethernet and various industrial protocols, enabling device interconnectivity.  
- **In Handheld POS Devices**: With an operational power consumption of just 200mW and end-to-end security solutions, the RK3506 delivers outstanding portability and security.  

![rk3506-appliances](/img/blog/rk3506-appliances.png)


### 3. Display Product Advantages of RK3506

#### 3.1 RK3506 Linux SDK Overview  

**System Framework**  
- Linux Kernel 6.1  
- Supports RT-Thread 4.1  
- Bare-metal programming support  
- Multi-core heterogeneous AMP support  
- Preempt-RT/Xenomai real-time patch  

**Display**  
- Lightweight UI framework – LVGL  
- RGA hardware acceleration  
- MIPI/RGB/QSPI screen support  

**Turnkey Apps**  
- Video and audio player  
- Settings  
- Launcher  

**Video**  
- Rockit software decoding library  
- RTSP real-time video streaming  
- Supports DVP cameras  

**Audio Algorithms**  
- Built-in RK proprietary audio algorithms (offline)  
- Compatibility with third-party online audio algorithms  

**Other Features**  
- Seamless OTA updates  
- A/B partitions  
- Fast boot  

#### 3.2 RK3506 RT-Thread 4.1 SMP  

RT-Thread supports symmetric multiprocessing (SMP) for multi-core processor platforms, featuring an excellent multi-core scheduling mechanism that significantly improves thread concurrency. It also supports task core switching and binding.  

Advantages of the SMP solution include:  

- Simplicity and ease of use  
- Convenient configuration  
- Load balancing and migration capabilities  

**Key Features**:  
- Strong real-time performance  
- Quick startup  
- Lightweight system with low resource consumption (64MB memory can support audio-visual playback)  
- Well-developed ecosystem with high openness  
- Thread binding to specific cores, suitable for intensive computations and fast responses  

#### 3.3 RK3506 Superior UI Rendering Capabilities  

- **2D Hardware Acceleration Perfectly Compatible with LVGL**  
  - Lightweight framework: Runs on <50KB RAM  
  - Rich components: Over 30+ built-in widgets  
  - Supports FreeType fonts  
  - Compatible with version 8.3 and above  
  - Cross-platform support  

### 4. Control Product Advantages of RK3506  

#### 4.1 RK3506 AMP Multi-System Solution  

System Overview:
- **Linux (Preempt-RT/Xenomai)** on Cortex-A7:  
  - Network communication  
  - Display services  
  - Linux applications  
  - Connected to external resources such as USB, Ethernet, Flash, Audio, SDIO, Display, etc.

- **RTOS/Bare-metal** on Cortex-A7/Cortex-M0:  
  - Data acquisition  
  - Interface control  
  - Real-time applications  

**Communication:**  
- Utilizes RPMsg for inter-system communication between Linux and RTOS/Bare-metal.

Dedicated AMP Architecture:
- Supports a combination of Linux, RTOS, and Bare-metal AMP system structures:  
  - **Option 1:** 2x Cortex-A7 Linux + 1x Cortex-A7 RTOS + Cortex-M0 HAL  
  - **Option 2:** 3x Cortex-A7 RTOS + Cortex-M0 HAL  

Advantages:
- Enables microsecond-level interrupt response delay (<5μs).  
- Provides a standard RPMsg core communication solution.  

#### 4.2 RK3506 Superior Real-Time Performance  

| Chip Model | RK3506 (Binding Real - time Core not Participating in System Other Scheduling) | T1*3 (Binding Real - time Core not Participating in System Other Scheduling) | RK3506 (Closing an A7 Core, Binding Real - time Core not Participating in System Other Scheduling) | T1*3 (Not Binding Real - time Core not Participating in System Other Scheduling) |
| --- | --- | --- | --- | --- |
| CPU | 2*Cortex - A7 | 2*Cortex - A7 | 3*Cortex - A7 | 2*Cortex - A7 |
| CPU Frequency | 1200MHz | 1200MHz | 1300MHz | 1300MHz |
| DDR | 16bit DDR3 800MHz | 16bit DDR3 800MHz | 16bit DDR3 800MHz | 16bit DDR3 800MHz |
| L1 Cache | 32 KB I/D | 32 KB I/D | 16 KB I/D | 16 KB I/D |
| L2 Cache | 256 KB | 256 KB | 128 KB | 128 KB |
| Preempt - RT Latency | ≈70us | ≈102us | ≈62us | ≈62us |
| Xenomai Latency | ≈68us | ≈68us |  |  |

#### 4.3 RK3506 EtherCAT Bus Optimization  

- Supports EtherCAT IgH and CODESYS protocols  
- Enables precise control of multiple servo motor slaves via Ethernet  
- Provides a dedicated real-time network card driver, enhancing real-time performance  
- Achieves jitter performance within 10% under a 1ms control cycle  

**Technical Indicators**:  

### 5. ArmSoM RK3506 Solution Simplifies Development  

The RK3506-based core board by ArmSoM not only offers developers complete hardware resources (including schematics and PCB files) but also integrates the official Linux SDK. It supports the lightweight UI framework LVGL and fast boot. Whether for building intercom systems, handheld POS devices, or industrial gateways, developers can easily bring their ideas to life.  

Mass production is expected in early 2025.

![rk3506-som](/img/blog/rk3506-som.png)