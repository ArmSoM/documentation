---
description: "从 GitHub Releases 获取 ArmSoM RK3576 Android 14 SDK，完成分卷解压、开发板配置和固件编译。"
keywords: [ArmSoM, Rockchip, RK3576, Android 14, Android SDK, CM5IO, Sige5]
image: /img/armsom-social-card.png
sidebar_label: "2. android-sdk使用"
slug: /advanced-manual/sdk-build
sidebar_position: 2
---

# 2. android-sdk使用

ArmSoM为其所有产品提供Linux和Android的SDK。这些SDK通常托管在github上。本指南以ArmSoM-CM5-IO为例，演示如何获取和编译SDK固件，参考 [SDK 仓库 README](https://github.com/ArmSoM/rk3576-andriod-sdk/blob/main/README.md) 。SDK 通过 GitHub Releases 以分卷压缩包形式发布，以下命令均在 Linux 开发主机上执行。

## 2.1 获取 SDK

打开 [rk3576_Android14RKR6 发布页面](https://github.com/ArmSoM/rk3576-andriod-sdk/releases/tag/rk3576_Android14RKR6)，展开 **Assets**，将全部 56 个 SDK 分卷下载到同一个目录。分卷从 `rk3576_Android14RKR6.tar.bz2.aa` 到 `rk3576_Android14RKR6.tar.bz2.cd`，请保留原始文件名。

:::tip

请下载 SDK 分卷附件。GitHub 自动生成的 **Source code (zip)** 和 **Source code (tar.gz)** 源码归档不能代替 SDK。

:::

## 2.2 解压 SDK

在存放全部分卷文件的目录中，执行以下命令合并并解压：

```bash
cat rk3576_Android14RKR6.tar.bz2.* | tar xj
```

命令中的 `.*` 会包含 `.a*`、`.b*` 和 `.c*` 分卷。如果只使用 `.a*`，将遗漏后续分卷，导致解压失败。

解压后进入 SDK 根目录。README 中使用的目录名如下；如果实际解压目录名称不同，请替换为实际名称：

```bash
cd rk3576_android14
```

## 2.3 配置目标开发板

该 SDK 包含 RK3576 通用代码，编译配置时需要选择对应的目标开发板。

README 还介绍了应用 CM5IO 补丁的方法。如果使用的 SDK 版本需要额外的 CM5IO 补丁，请先获取匹配的补丁集，再在 SDK 根目录执行：

```bash
git am /path/to/your/patches/*.patch
```

请将 `/path/to/your/patches/` 替换为实际补丁目录。上述 Release 当前仅包含 SDK 分卷文件，没有单独的补丁附件。如需这些补丁，请通过 [SDK 论坛](https://forum.armsom.org/tag/sdk) 联系 ArmSoM 获取。

## 2.4 编译 SDK

在 SDK 根目录中初始化编译环境，并打开目标选择菜单：

```bash
source build/envsetup.sh
lunch
```

使用 CM5IO 时，在菜单中选择其 **userdebug** 目标；使用其他开发板时，选择对应的目标。然后执行 README 提供的编译命令：

```bash
./build.sh -AUKup
```

## 2.5 常见问题

- 解压失败时，检查同一版本的 56 个分卷是否全部下载完成，以及解压命令是否包含所有分卷。
- 应用补丁失败时，检查补丁是否与 SDK 版本及目标开发板匹配。
- 编译失败时，保留错误日志和 `lunch` 选择的目标信息，再到 [SDK 论坛](https://forum.armsom.org/tag/sdk) 查询已知问题或提问。

SDK 发布和使用方法如有更新，请参考 [仓库 README](https://github.com/ArmSoM/rk3576-andriod-sdk/blob/main/README.md) 和 [Releases 页面](https://github.com/ArmSoM/rk3576-andriod-sdk/releases)。
