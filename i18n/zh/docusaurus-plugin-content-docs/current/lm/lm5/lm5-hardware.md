---
sidebar_position: 4
---

# 硬件参考设计资料

获取底板原理图、PCB、DXF等硬件资料，快速投入开发

## ArmSoM-LM5 硬件资料

### 引脚功能表格
[ArmSoM-LM5 引脚功能表格](/hardware/lm/lm5/ArmSoM-LM5_Pin_and_Function_List20230603.xlsx) - ArmSoM-LM5 引脚功能表格下载

### 封装

[ArmSoM-LM5 封装](/hardware/lm/lm5/LGA506_45R0X50R0_2005.asc) - ArmSoM-LM5 封装下载

## ArmSoM-LM5 开发套件(ArmSoM-W3) 硬件资料

### 原理图
[ArmSoM-W3_1V1 原理图pdf](/hardware/lm/lm5/ArmSoM_W3_1V1_SCH.pdf) - ArmSoM-W3_1V1 原理图pdf下载

[ArmSoM-W3_1V1 原理图orcad](/hardware/lm/lm5/ArmSoM_W3_1V1_SCH.DSN) - ArmSoM-W3_1V1 原理图原始文件（orcad）下载

### PCB

[ArmSoM-W3_1V1 PCB PADS](/hardware/lm/lm5/ArmSoM_W3_1V1.pcb) - ArmSoM-W3_1V1 PCB原始文件（PADS）下载

### 2D CAD 图

[ArmSoM-W3 顶部](/hardware/lm/lm5/ARMSOM_W3_1V1_bot.dxf) - ArmSoM-W3_bot 2D CAD 文件下载

[ArmSoM-W3 底部](/hardware/lm/lm5/ARMSOM_W3_1V1_top.dxf) - ArmSoM-W3_top 2D CAD 文件下载

### 位号图

[ArmSoM-W3_1V1 位号图](/hardware/lm/lm5/ArmSoM_W3_1V1_SMD.pdf) - ArmSoM-W3_1V1 位号图下载


## 注意

:::tip
不建议使用LM5开发8K显示：
HDMI输出8K对layout走线要求很高，核心板+底板的设计方式基本是无解。

1. 只能采用一体板设计，需注意HDMI信号整个路径不能有换层。

2. 严格按照硬件参考设计说明控制阻抗、等长。

3. HDMI的连接器也要选支持2.1协议的，需要使用支持8K的连接器。

:::