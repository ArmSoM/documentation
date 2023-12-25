---
sidebar_label: "Flash Image"
sidebar_position: 2
---

# Flash Image

Starting the product requires two steps: burning the system and starting the system

The system images of the ArmSoM series products include a variety of root file systems. We can choose the corresponding image to download according to our needs.


:::info
The system image includes the linux kernel, basic programs, etc., and is necessary to run ArmSoM series products, so we need to install the image for the product before running the product.
:::

## 1. Obtain system image

Visit the Google Drive resource introduction page to obtain the system image: [Google Drive link](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

### 1.1. Image naming rules
Product model-root file system-desktop type-update time

#### 1.1.2. Product model
ArmSoM-W3: product model such as ArmSoM-W3

#### 1.1.3. Root file system
debian-bullseye: The root file system used by the system is debian 11

#### 1.1.4. Desktop type
xfce4: Desktop image using xfce4 suite

CLI: command line version, no desktop

#### 1.1.5. Update date
The format of the update date is yyyymmdd, which is year, month and day.

### 1.2. Examples

Let’s take the universal image of ArmSoM-LM7 (Development Kit ArmSoM-W3) as an example.

armsom-w3-debian-bullseye-xfce4-arm64-20231115

* Applicable models of the product: Suitable for ArmSoM-W3

* Root file system: debian11

* System category: xfce4·Desktop version

*Update date: November 15, 2023

## 2. Burning image on Windows platform

### 2.1. Burn image to eMMC

#### 2.1.1. Tool acquisition and installation

Burning the image to eMMC requires the use of RKDevTool burning tool and RK Driver Assistant (DriverAssitant)

Click to enter the link: [Google Drive link](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

![baidu-flash-tool](/img/general-tutorial/baidu-flash-tool.jpeg)

##### 2.1.2. Install DriverAssitant

Unzip the DriverAssitant software compressed package and double-click DriverInstall.exe to enter the driver installation interface.

Click **Driver Installation** to start installing the driver. If you are not sure whether an older version of the driver has been installed before, first click Driver Uninstall to remove the old version of the driver, and then click Driver Installation.

![install-driver-assitant](/img/general-tutorial/install-driver-assitant.png)

##### 2.1.3. Install RKDevTool

Rockchip's dedicated USB burning tool, Windows platform, can use the USB interface to download the system image to the product.

After decompressing the compressed package, you can use it without installation. Double-click RKDevTool.exe to enter the software interface.

The software mainly has three parts, namely downloading the image (the image can be burned according to the address), upgrading the firmware and advanced functions.

#### 2.1.4. Burning image in MASKROM mode

This mode is suitable for products that have not been burned into the system or the burned system is damaged and cannot run ** (adaptable to all conditions) **

We open the RKDevTool burning tool and set the product to enter burning mode.

![maskroom-flash-tool](/img/general-tutorial/maskroom-flash-tool.png)

```
1. Prepare Type-C cable for image burning
2. Disconnect all connections that may provide power to the product, such as power cords, USB cables, etc.
3. Use a Type-C cable to connect one end to the product's OTG interface and the other end to the computer's USB interface, then open the software RKDevTool
4. Press and hold the MASKROM button, and then use DC to power the product
5. Wait for the software prompt to find a MASKROM device (as shown in the picture below), then release the button
6. If unsuccessful, repeat steps 2-5.
```

You can click firmware to select the image to be burned, such as armsom-w3-debian-bullseye-xfce4-arm64-20231115e.img, and then click Upgrade to burn.

:::tip
The firmware downloaded from Google Drive needs to be decompressed before loading, and the Windows PC needs to run the tool with administrator rights before it can be executed.
:::

![maskroom-flash-tool](/img/general-tutorial/maskroot-flash-update.png)

The flashing progress is displayed on the right, and it will prompt you after completion:
![rkdevtool-success](/img/tools/rkdevtool-success.png)

#### 2.1.5. Burning image in Loader mode

This mode is suitable for products whose systems can run normally

We open the RKDevTool burning tool and set the product to enter burning mode.

```
1. Prepare Type-C cable for image burning
2. Disconnect all connections that may provide power to the product, such as power cords, USB cables, etc.
3. Use a Type-C cable to connect one end to the product's OTG interface and the other end to the computer's USB interface, then open the software RKDevTool
4. Press and hold the Recovery button, and then use DC to power the product
5. Wait for the software prompt to find a LOADER device (as shown in the figure below), then release the button
6. If unsuccessful, repeat steps 2-5.
```

![recovery-flash-tool](/img/general-tutorial/recovery-flash-update.png)

:::tip Analysis of programming failure
If Download Boot Fail occurs during the programming process, or an error occurs during the programming process, as shown in the figure below, it is usually caused by poor connection of the USB cable used, inferior wire material, or insufficient drive capability of the computer USB port. Please replace the USB cable or Troubleshooting computer USB ports.
:::

:::note What is the difference between Maskrom mode programming and Loader mode programming?
* Maskrom: When the Flash firmware is not burned, the chip will boot into the Maskrom mode, and the initial firmware can be burned;
If the Loader fails to start normally during development and debugging, you can also enter Maskrom mode to burn firmware.
* Loader: The principle is that the pin is detected to be pressed during uboot startup. In Loader mode, firmware can be programmed and upgraded.
You can use tools to burn a partition image file separately to facilitate debugging.
:::


### 2.2. Burn official image to SD card

Burning the image to the SD card requires special burning software and an SD card reader.

#### 2.2.1 Install SDDiskTool

Burning the image to eMMC requires the use of the burning tool SDDiskTool_version number.exe

Click to enter the link: [Google Drive link](https://pan.baidu.com/s/1f_YDt4S8Zu5URH1zv_UjIw?pwd=arms)

![baidu-SDDiskTool](/img/general-tutorial/baidu-sd-disk-tool.png)

After decompressing the compressed package, you can use it without installation. Double-click SD_Firmware_Tool.exe to enter the software interface.


#### 2.2.2 Burn image

Open the executable file SD_Firmware_Tool.exe that burned SDDiskTool and insert the SD card.

First select the correct SD card to be burned, then select the function mode to SD Boot, then select the image to be burned, and finally click to start creating the burned image to the SD card.

![SDDiskTool](/img/general-tutorial/sd-disk-tool.png)

Wait patiently for the SD card to be burned completely. When the image size is larger, the burning time will be longer accordingly.

:::tip Error when burning SD card image
When you click Create, there will be a certain probability that an error will be reported saying that it cannot be burned. You can close the error window and start creating again. If it still doesn't work, try formatting the SD card.
:::

### 2.3. Burn armbian system to SD card

This method is suitable for burning the system to the SD card, and is available for Windows, MacOS, and Linux x64 operating systems.


1. Download balenaEtcher from [balena official website](https://etcher.balena.io/) and select the specified host system to download. The program format of Linux here is AppImage. Some users may need to modify it to **_executable_** through the chmod command to run it.

2. Insert the MicroSD card to be burned into the MicroSD card reader

3. Open the etcher window, first select Flash from file, find your image download location, and double-click to select it.
![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-from-file.png)


4. Then click Select target and select the MicroSD card you want to burn.
5. Click Flash, wait for the burning to be successful, it will take some time.
6. If the burning is successful, it will be displayed as shown in the figure.
![balenaEtcher-flash-from-file](/img/tools/balenaEtcher-flash-success.png)