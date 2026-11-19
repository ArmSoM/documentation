---
description: "ArmSoM 64GB eMMC 模块，适用于 Sige7S。介绍产品特性、安装方法、系统烧录、存储检查和官方购买入口。"
keywords: [ArmSoM, Sige7S, RK3588S, eMMC, 64GB, 存储模块]
image: /img/accessories/armsom-emmc-module.png
sidebar_label: "eMMC 模块"
sidebar_position: 20
slug: /armsom-emmc-module
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ArmSoM eMMC 模块

<nav className="armsom-doc-shortcuts" aria-label="章节快捷导航"><a href="#product-introduction">产品介绍</a><a href="#技术规格">技术规格</a><a href="#兼容性">兼容性</a><a href="#安装与使用">安装与使用</a><a href="#样品购买">样品购买</a></nav>

## 1. 产品介绍 {#product-introduction}

ArmSoM eMMC 模块为 [Sige7S](./armsom-sige7s) 提供可拆卸的系统存储。安装并烧录对应镜像后，可用于保存操作系统、应用程序和用户数据；需要更换存储或准备另一套系统环境时，可以单独更换模块。

eMMC 将闪存与存储控制器集成在同一封装中。操作系统将其作为块设备访问，应用程序通过挂载后的文件系统读写数据，无需直接管理底层闪存。

<figure className="armsom-doc-figure">
  <a href="/img/accessories/armsom-emmc-module.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/armsom-emmc-module.png')} alt="ArmSoM eMMC 模块，左侧为芯片面，右侧为连接器面" /></a>
  <figcaption>左：芯片面；右：板对板连接器面。</figcaption>
</figure>

<span id="doc-section-1" className="armsom-section-anchor" />

## 2. 技术规格 {#技术规格}

| 项目 | 说明 |
| --- | --- |
| 品牌 | ArmSoM |
| 产品规格 | 64GB eMMC 模块 |
| 连接方式 | 插接到 Sige7S 的 eMMC 接口，模块背面带有两组板对板连接器 |
| 主要用途 | 系统启动、应用安装和数据存储 |

:::tip 容量说明
64GB 为购买链接中该规格的标称容量。Linux 工具可能按 GiB 显示容量，分区和文件系统也会占用部分空间，因此可用空间会小于标称容量。
:::

<span id="doc-section-2" className="armsom-section-anchor" />

## 3. 兼容性 {#兼容性}

- ArmSoM Sige7S（Rockchip RK3588S）
- 使用 Sige7S 对应系统镜像，包括[产品文档](./armsom-sige7s)提供的 Debian 12、Ubuntu 22.04 镜像。

<span id="doc-section-3" className="armsom-section-anchor" />

## 4. 安装与使用 {#安装与使用}

### 4.1 安装模块 {#安装模块}

1. 将 Sige7S 正常关机，断开电源及外接线缆后再安装模块。
2. 参考 [Sige7S 硬件接口图](./armsom-sige7s#硬件接口)，找到 eMMC 接口，将模块背面的两组连接器与主板对应连接器对齐。
3. 在连接器位置均匀按压，使模块平稳就位。确认两侧均已连接、模块没有翘起后，再恢复供电。

:::warning 安装注意
请勿带电插拔。连接器无法对齐时，应先检查方向，不要强行按压；模块应搭配指定兼容板型使用。
:::

### 4.2 写入系统镜像 {#写入系统镜像}

准备 Sige7S 系统镜像、USB-A 双公头数据线、开发板电源，并在 Windows 电脑上准备 Rockchip 烧录工具。按照 [Sige7S eMMC 烧录指南](./armsom-sige7s#emmc-flashing) 的图示进入 Maskrom 或 Loader 模式，使用 RKDevTool 写入镜像。

USB-A 数据线用于连接主板指定的 USB 3.0 烧录接口与电脑，USB Type-C 接口用于供电。接口位置及进入烧录模式所需的引脚位置，以产品指南中的图示为准。

:::warning 烧录前备份
写入系统镜像会覆盖目标存储中的数据。请先备份已有文件，并选择适用于 Sige7S 的镜像；工具提示烧录完成前，不要断电或拔出数据线。
:::

烧录完成后关机断电，取下可能用于启动的 microSD 卡，再上电检查 eMMC 启动。

### 4.3 在 Linux 中检查存储 {#在-linux-中检查存储}

在开发板终端执行：

```bash
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS
findmnt -no SOURCE /
df -h /
```

`lsblk` 列出存储设备及分区，`findmnt` 显示根文件系统来源，`df` 查看其可用空间。将根分区与 `lsblk` 中的所属设备对应，即可检查当前系统使用的存储。设备编号会随镜像和连接的存储设备变化，不要固定认为 eMMC 一定是 `mmcblk0`。

若未识别模块，先断电检查两组连接器是否安装到位，再确认镜像是否对应 Sige7S。若无法启动，可通过[调试串口](./armsom-sige7s#debug-uart)查看启动日志。

<span id="doc-section-4" className="armsom-section-anchor" />

## 5. 样品购买 {#样品购买}

ArmSoM 淘宝官方店：[https://item.taobao.com/item.htm?id=1102453604774&skuId=6323671086868](https://item.taobao.com/item.htm?id=1102453604774&skuId=6323671086868)

进入商品页后选择 **EMMC模块（64GB）**。购买开发板套装时，请先核对套餐是否已包含该模块，避免重复购买。

OEM/ODM 与批量采购：[sales@armsom.org](mailto:sales@armsom.org)
