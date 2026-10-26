---
description: "Get the ArmSoM RK3576 Android 14 SDK from GitHub Releases, extract the split archives, configure the board, and build firmware."
keywords: [ArmSoM, Rockchip, RK3576, Android 14, Android SDK, CM5IO, Sige5]
image: /img/armsom-social-card.png
sidebar_label: "2. android-sdk usage"
slug: /advanced-manual/sdk-build
sidebar_position: 2
---

# 2. android-sdk usage

ArmSoM provides SDKs for Linux and Android for all its products. These SDKs are usually hosted on GitHub. This guide takes ArmSoM-CM5-IO as an example to show how to obtain and compile the SDK firmware. Refer to the [SDK repository README](https://github.com/ArmSoM/rk3576-andriod-sdk/blob/main/README.md). The SDK is released as split compressed packages via GitHub Releases, and all the following commands are executed on a Linux development host.

## 2.1 Download the SDK

Open the [rk3576_Android14RKR6 release](https://github.com/ArmSoM/rk3576-andriod-sdk/releases/tag/rk3576_Android14RKR6) and expand **Assets**. Download all 56 SDK parts, from `rk3576_Android14RKR6.tar.bz2.aa` through `rk3576_Android14RKR6.tar.bz2.cd`, into the same directory. Keep the original filenames.

:::tip

Download the split archive assets. The automatically generated **Source code (zip)** and **Source code (tar.gz)** archives do not replace the SDK.

:::

## 2.2 Extract the SDK

In the directory containing all downloaded parts, concatenate and extract them:

```bash
cat rk3576_Android14RKR6.tar.bz2.* | tar xj
```

Use `.*` to include the `.a*`, `.b*`, and `.c*` parts. Using only `.a*` would omit later parts and cause extraction to fail.

Enter the extracted SDK root. The README uses the following directory name; replace it if the actual extracted directory has a different name:

```bash
cd rk3576_android14
```

## 2.3 Configure the target board

The SDK contains common RK3576 code. Select the matching board target during build configuration.

The README also describes applying CM5IO patches. If your SDK version requires a separate CM5IO patch set, obtain matching patches and apply them from the SDK root:

```bash
git am /path/to/your/patches/*.patch
```

Replace `/path/to/your/patches/` with the actual patch directory. The release linked above currently contains only SDK archive parts, with no separate patch attachments. If you need these patches, contact ArmSoM through the [SDK forum](https://forum.armsom.org/tag/sdk).

## 2.4 Build the SDK

From the SDK root, initialize the build environment and open the target selection menu:

```bash
source build/envsetup.sh
lunch
```

For CM5IO, select its **userdebug** target. For another board, select the corresponding target. Then run the build command provided in the README:

```bash
./build.sh -AUKup
```

## 2.5 Troubleshooting

- If extraction fails, check that all 56 parts from the same release have fully downloaded and that the command includes every part.
- If applying patches fails, check that the patches match the SDK version and board.
- If the build fails, keep the error output and selected `lunch` target, then search for known issues or ask for help on the [SDK forum](https://forum.armsom.org/tag/sdk).

For updated SDK releases and instructions, refer to the [repository README](https://github.com/ArmSoM/rk3576-andriod-sdk/blob/main/README.md) and [Releases page](https://github.com/ArmSoM/rk3576-andriod-sdk/releases).
