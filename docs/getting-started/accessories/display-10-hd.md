---
sidebar_label: "ArmSoM Display 10 HD"
sidebar_position: 1
---
# ArmSoM Display 10 HD


The display model  ArmSoM Display 10 HD1 is a ALL O‘ clock TFT LCD (Thin Film Transistor Liquid Crystal Display) module. This model is Composed of a TFT LCD panel, a driving circuit and a back light, and also has a 10.1 inch diagonally measured active display area with FHD(1200 horizontal by 1920 vertical pixel) resolution in a stripe arrangement. Display 16.7M colors by 8 bit R.G.B signal input.

![armsom-display-10hd](/img/accessories/armsom-display-10hd.png)

## General information 
- Outline Dimension:  143×228.70×2.25 (TYP.) mm 
- Display area:  135.36(H)×216.58(V) mm 
- Number of Pixel:  1200RGB(H)×1920(V) pixels 
- Pixel pitch:  0.1128 (H)×0.1128(V) mm 
- Pixel arrangement:  RGB Vertical stripe 
- Display mode:  IPS 
- Surface treatment:  AG 
- Back-light:  White LED 
- System interface:  4 lane MIPI 
- NTSC:  72（type） % 
- Viewing Direction:  ALL VIEW 
- Power Consumption:  TBD mW


## Pinout
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

## 1. Enable Display Overlay

### 1.1 Ubuntu22.04 image to enable display overlay

- Use nano to open the /boot/firmware/ubuntuEnv.txt file:

```bash  
sudo nano /boot/firmware/ubuntuEnv.txt
```

- Find the "overlays=" keyword in the file, and add the following:

```bash
overlays=armsom-sige7-display-10hd
```

Shortcut keys: Ctrl + S to save, Ctrl + X to exit  

After editing, restart the device to change the Overlays settings to support the Display 10 HD.

### 1.2 Armbian image to enable display overlay

- Use nano to open the /boot/armbianEnv.txt file:

```bash
sudo nano /boot/armbianEnv.txt
```

- Find or add the "overlays=" keyword in the file.


```bash 
overlays=armsom-sige7-display-10hd
```

Shortcut keys: Ctrl + S to save, Ctrl + X to exit  

After editing, restart the device to change the Overlays settings to support the Display 10 HD. 

![sige7-display-10-hd](/img/general-tutorial/display-10-hd.jpg)