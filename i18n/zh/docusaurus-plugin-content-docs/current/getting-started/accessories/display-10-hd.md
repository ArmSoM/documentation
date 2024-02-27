---
sidebar_label: "ArmSoM Display 10 HD"
sidebar_position: 1
---
#  ArmSoM  Display 10 HD



# 一. 启用Display的overlay

## 1.1 Ubuntu22.04镜像启用Display的overlay
- 使用nano 打开/boot/firmware/ubuntuEnv.txt文件：

```bash
sudo nano /boot/firmware/ubuntuEnv.txt
```

- 在该文件中找到 "overlays=" 这个关键词，并添加如下内容：
​	
```bash
overlays=armsom-sige7-display-10hd
```
快捷键：Ctrl + S保存    Ctrl + X退出

编辑好之后重启设备来更改Overlays设置以支持Display 10 HD。

## 1.2 Armbian镜像启用Display 的overlay

- 使用nano 打开/boot/armbianEnv.txt文件：

```bash
sudo nano /boot/armbianEnv.txt
```

- 在该文件中找到或者添加 "overlays=" 这个关键词。


```bash
overlays=armsom-sige7-display-10hd
```
快捷键：Ctrl + S保存    Ctrl + X退出

编辑好之后重启设备来更改Overlays设置以支持Display 10 HD。

![sige7-display-10-hd](/img/general-tutorial/display-10-hd.jpg)