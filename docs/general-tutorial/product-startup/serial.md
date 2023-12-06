---
sidebar_label: "Serial port access"
sidebar_position: 4
---

# Serial port access
### 1. Serial port connection

Our product defines the 6th (GND), 8th (TX), and 10th (RX)** pins on the **40PIN GPIO pin as a UART serial communication interface or has a **separate Debug** interface , to facilitate troubleshooting problems in the early startup phase of the system.

Connect the USB to TTL serial cable as follows:

| ArmSoM Products | Connectivity | Serial Port Modules |
| --------------- | ----- | ------ |
| **GND** (pin 6) | <---> | GND |
| **TX** (pin 8) | <---> | RX |
| **RX** (pin 10) | <---> | TX |


### 2. Instructions for use

Serial port parameter configuration

The default serial port configuration of ArmSoM products based on Rockchip chips is as follows:

```
baudrate: 1500000
data bit: 8
stop bit: 1
parity: none
flow control: none
```

### 3. Using serial port debugging on Windows

Generally use putty or SecureCRT on Windows. Among them we recommend using the free version of MobaXterm. This is a powerful terminal software. Let me introduce it here. The usage of MobaXterm is similar to it.

Go here to download [MobaXterm](https://mobaxterm.mobatek.net/):

Connect the serial port module to the computer, then open the device manager of the computer and check the name of the port.

```
1. Select session as Serial.
2. Change the Serial port to the COM port found in Device Manager.
3. Set Speed (bsp) to 1500000.
4. Click the OK button.
```

![MobaXterm](/img/general-tutorial/MobaXterm.png)


### 4. Using serial port debugging on Linux

There are several options available on Linux:

*minicom
*picocom
* kermit

The following will introduce the use of minicom. For other software, please refer to the online software usage.

#### 4.1 Install minicom

```
sudo apt-get install minicom
```

After connecting the serial port cable, take a look at what the serial port device file is. The following example is /dev/ttyUSB0

```
# ls /dev/ttyUSB*
/dev/ttyUSB0
```

:::caution

There is a situation where the serial port has no permission to read.
Temporary solution: via chmod command
```
sudo chmod 777 /dev/ttyUSB0
```
Permanent processing: By adding the current user to the dialout group
```
sudo usermod -aG dialout current username
```
:::

#### 4.2 Set up minicom

1. Edit ~/.bashrc, add the following parameters, and it will take effect after reopening a new terminal.
```
alias minicom='minicom -w -t xterm -l -R UTF-8'
```

2. Create and edit the file ~/.minirc.rockchip and add the following content. The purpose of this place is to set the configuration of rockchip.

```
pu port /dev/ttyUSB0
pu baudrate 1500000
pu bits 8
pu parity N
pu stop bits 1
pu rtscts No
```

3. Start minicom
Execute the following command to connect ArmSoM products based on Rockchip chips. The parameter rockchip is to use the above configuration.
```
minicom rockchip
```

:::tip FAQ
Q1: If device manager does not see the device
> A1: You need to install the driver corresponding to the serial port yourself

Q2: When using the debugging console, there is system startup information on the screen, but the keyboard cannot be used to enter text.
> A2: Hardware Flow Control may be enabled by default. Turning off Hardware Flow Control should return to normal.
:::
​