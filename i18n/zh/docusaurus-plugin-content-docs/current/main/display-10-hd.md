---
sidebar_label: "Display 10 HD"
sidebar_position: 17
slug: /armsom-display-10-hd
---
#  ArmSoM  Display 10 HD

ArmSoM Display 10 HD1 是一款全时 TFT LCD（薄膜晶体管液晶显示器）模块。 该型号由 TFT LCD 面板、驱动电路和背光组成，并具有 10.1 英寸对角线测量的活动显示区域，分辨率为 FHD（水平 1200 x 垂直 1920 像素），分辨率为条纹排列。 通过8位R.G.B信号输入显示16.7M颜色。

![armsom-display-10hd](/img/accessories/armsom-display-10hd.png)

## 参数 

- 外形尺寸：143×228.70×2.25（典型值）mm
- 显示面积：135.36(H)×216.58(V) mm
- 像素数：1200RGB(H)×1920(V)像素
- 像素间距：0.1128(H)×0.1128(V) mm
- 像素排列：RGB竖条纹
- 显示模式：IPS
- 表面处理：AG
- 背光：白色LED
- 系统接口：4通道MIPI
- NTSC: 72（类型） %
- 观看方向：全部
- 功耗：待定 mW

## 样品购买
ArmSoM 独立站: [https://www.armsom.org/product-page/armsom-display-10-hd](https://www.armsom.org/product-page/armsom-display-10-hd)
 
ArmSoM 速卖通官方店: [https://www.aliexpress.com/item/3256806439494827.html](https://www.aliexpress.com/item/3256806439494827.html) 

ArmSoM 淘宝官方店: [https://item.taobao.com/item.htm?id=770587380434](https://item.taobao.com/item.htm?id=770587380434)

OEM&ODM,  请联系: sales@armsom.org

## 屏幕引脚
|PIN NO| SYMBOL| Description |
| -------- | ----------- | ----------- |
|1| NC| OPEN 
|2-3| VDDIN Power SUPPLY 3.3V 
|4| GND| Ground 
|5| RESET| Global reset signal,=VDDIN 
|6| NC| OPEN 
|7| GND |Ground 
|8| MIPI_TDN0| MIPI data input. 
|9| MIPI_TDP0| MIPI data input. 
|10| GND| Ground 
|11| MIPI_TDN1| MIPI data input. 
|12| MIPI_TDP1 |MIPI data input. 
|13| GND| Ground 
|14| MIPI_TCN |MIPI clock input. 
|15| MIPI_TCP| MIPI clock input. 
|16| GND| Ground 
|17| MIPI_TDN2| MIPI data input. 
|18| MIPI_TDP2 |MIPI data input. 
|19| GND| Ground 
|20| MIPI_TDN3 |MIPI data input. 
|21| MIPI_TDP3| MIPI data input. 
|22| GND Ground 
|23-24| NC| OPEN 
|25| GND| Ground 
|26| NC| OPEN 
|27| CABC |PWM control signal for LED driver 
|28-29| NC |OPEN 
|30| GND| Ground 
|31-32| LEDK |LED Cathode 
|33-38| NC |OPEN 
|39-40| LEDA |LED Anode



## 1. 启用Display的overlay

### 1.1 Ubuntu22.04镜像启用Display的overlay
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

### 1.2 Armbian镜像启用Display 的overlay

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