---
sidebar_label: "ArmSoM Display 10 HD"
sidebar_position: 1
---
# ArmSoM Display 10 HD

# I. Enable Display Overlay

## 1.1 Ubuntu22.04 image to enable display overlay

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

## 1.2 Armbian image to enable display overlay

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