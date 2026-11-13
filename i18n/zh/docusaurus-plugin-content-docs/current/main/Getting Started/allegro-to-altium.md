---
description: "指导客户将 ArmSoM Allegro PCB 文件导入 Altium Designer，说明 BRD 导入前提、ALG 转换、操作步骤及核对事项。"
keywords: [ArmSoM, Allegro, Altium Designer, PCB导入, BRD, ALG]
image: /img/armsom-social-card.png
sidebar_label: "Allegro 导入 Altium"
sidebar_position: 19
slug: /getting-start/allegro-to-altium
---

# 将 Allegro PCB 文件导入 Altium Designer

ArmSoM 提供 Allegro 硬件设计资料。请从[硬件资料下载入口](./1.cloud-disk.md)获取对应产品及 PCB 版本，在副本上转换，并保留原文件供核对。

## 选择导入方式

| 已有文件与工具 | 处理方式 |
| --- | --- |
| `.brd` + 有有效许可的 Allegro/Extracta | 在本机或另一台 Allegro 工作站转换 |
| `.alg` + Altium | 直接导入 ASCII 文件 |
| 只有 `.brd` + Altium | 需要先取得转换后的 `.alg` 文件 |

PCB 导入不会从 PDF 重建原理图。

## 按需转换文件

在有有效许可的 Allegro 工作站上，将板文件与 Altium 安装目录 `System` 下的 `Allegro2Altium.bat` 放到工作文件夹。AD 26.1 之前的版本还需配套的 `AllegroExportViews.txt`、`AllegroPackageExportViews.txt`。在命令提示符中运行：

```bat
Allegro2Altium.bat "board.brd"
```

将生成的 `board.brd.alg` 复制到 Altium 工作站。失败时检查 `extract.log`。Extracta 版本需支持源文件版本；官方导入文档目前列出的支持范围截至 Allegro 17.4。详见[转换前提与故障排查](https://www.altium.com/documentation/knowledge-base/altium-designer/import-allegro-files-to-altium)。

## 导入与核对

1. 启用 Altium 的 Allegro 导入器。
2. 打开 **File → Import Wizard → Allegro Design Files**。
3. 添加 `.alg`；本机具备有有效许可的 Allegro 时，也可添加 `.brd`。
4. 如资料包提供 `.DCFX` 约束文件，一并添加；核对层映射和输出位置。
5. 完成后检查生成的 `.PcbDoc` 和转换日志。

对照原文件核对板框、孔位、层、焊盘编号及关键连接。用于生产前，应复核设计约束并执行设计规则检查；成功打开不等于已经通过生产验证。

详细操作见 [Altium 官方导入指南](https://www.altium.com/documentation/altium-designer/design-tools-interfacing/allegro-import)。本指南尚未逐个实测 ArmSoM 设计文件的转换结果，兼容性取决于文件与工具版本。
