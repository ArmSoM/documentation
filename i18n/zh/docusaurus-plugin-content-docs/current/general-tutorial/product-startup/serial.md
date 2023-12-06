---
sidebar_label: "串口访问"
sidebar_position: 4
---

# 串口访问
### 1. 串口连接

我们产品将在**40PIN GPIO 引脚上的第 6 (GND)、第 8 (TX)、第 10 (RX)** 引脚定义为 UART 串口通信接口 或者有**单独的Debug调试**接口，以方便排查系统早期启动阶段的问题。

如下所示连接 USB 转 TTL 串口线：

| ArmSoM 产品       | 连接  | 串口模块 |
| --------------- | ----- | ------ |
| **GND** (pin 6) | <---> | GND |
| **TX** (pin 8)  | <---> | RX |
| **RX** (pin 10) | <---> | TX |


### 2. 使用说明

串口参数配置

基于Rockchip芯片的ArmSoM产品的串口默认配置如下：

```
baudrate: 1500000
data bit: 8
stop bit: 1
parity  : none
flow control: none
```

### 3. Windows 上使用串口调试

Windows 上一般用 putty 或 SecureCRT。其中我们推荐使用 MobaXterm 免费版本。这是一款功能强大的终端软件，在这里介绍一下，MobaXterm 的使用方法与之类似。

到这里下载 [MobaXterm](https://mobaxterm.mobatek.net/)：

用电脑连接串口模块，然后打开电脑的设备管理器，然后查看端口的名字

```
1. 选择 session 为 Serial。
2. 将 Serial port 修改为在设备管理器中找到的 COM 端口。
3. 设置 Speed (bsp) 为 1500000。
4. 点击 OK 按钮。
```

![MobaXterm](/img/general-tutorial/MobaXterm.png)


### 4. Linux 上使用串口调试

在 Linux 上可以有多种选择：

* minicom
* picocom
* kermit

以下就介绍 minicom 的使用，其他软件参照网上软件用法

#### 4.1 安装 minicom

```
sudo apt-get install minicom
```

连接好串口线的，看一下串口设备文件是什么，下面示例是 /dev/ttyUSB0

```
# ls /dev/ttyUSB*
/dev/ttyUSB0
```

:::caution

串口存在无权限读取的情况。
临时处理: 通过 chmod 命令
```
sudo chmod 777 /dev/ttyUSB0
```
永久处理： 通过将当前用户加入 dialout 组
```
sudo usermod -aG dialout 当前用户名
```
:::

#### 4.2 设置 minicom

1. 编辑 ~/.bashrc，添加以下参数，重新打开新的终端后即可生效。
```
alias minicom='minicom -w -t xterm -l -R UTF-8'
```

2. 创建并且编辑文件 ~/.minirc.rockchip，添加下列内容，该处目的是设置 rockchip 的配置。

```
pu port             /dev/ttyUSB0
pu baudrate         1500000
pu bits             8
pu parity           N
pu stopbits         1
pu rtscts           No
```

3. 启动minicom
执行以下命令，即可连接基于Rockchip芯片的ArmSoM产品。 参数 rockchip 是为了使用上面的配置。
```
minicom rockchip
```

:::tip FAQ
Q1：如果设备管理器没有看到设备
> A1：需要自行安装对应串口的驱动

Q2：使用调试控制台时，屏幕上有系统启动信息，但无法使用键盘输入文字
> A2：可能是默认开启了 Hardware Flow Control 。关闭 Hardware Flow Control后应能恢复正常。
:::
