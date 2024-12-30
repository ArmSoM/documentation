---
sidebar_label: "sdk-build"
sidebar_position: 4
---

# ArmSom-SDK 发布
Products released by ArmSom come with Linux and Android SDK, which are stored in Baidu Cloud by default. Here, we will use armsom-cm5io as an example to introduce how to obtain the SDK and compile the firmware.

## Obtain SDK
Click the link to enter Google Drive link: [ Google Drive link](https://drive.google.com/drive/folders/1x2KOX1F4-DVyyV_9qfdH28PWIORcWH56 )
Download all the partitioned compressed packages to your PC.

## Extract SDK
Place all partitioned compressed packages in the same directory and execute the following command to extract:
```bash
cat rk3576_android14.tar.bz2.a* | tar xj
cd rk3576_android14
```

## 配Configure Product SDK
After extracting the SDK, you can see the git commit history:
![ArmSoM cm5io-git](/img/general-tutorial/cm5io-git.png)
This SDK contains generic code for RK3576 and can be used to build firmware for both sige5 and cm5io. Patches for cm5io are stored in the firmware link mentioned above. Execute the command to merge it
```bash
git am /path/to/your/patches/*.patch
```

## Compile SDK
After obtaining the SDK, follow the steps below to compile:

```
source build/envsetup.sh

lunch

./build.sh -AUKup
```

:::tip 

After executing lunch, select the userdebug version for cm5io
:::


## 编译问题
拿到SDK之后按照操作编译可能会遇到问题，可以在[论坛](https://forum.armsom.org/tag/sdk )提问或者查找已知问题
You may encounter issues when compiling the SDK following the instructions. You can ask questions on the [forum](https://forum.armsom.org/tag/sdk ) or search for known issues

:::tip 
For SDK operations on Linux systems, refer to the blog posts published by armsom:
https://blog.csdn.net/nb124667390/category_12589795.html
:::
