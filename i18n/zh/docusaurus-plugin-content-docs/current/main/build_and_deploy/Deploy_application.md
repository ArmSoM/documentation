---
sidebar_label: "部署应用"
slug: /build-system-image/Deploy application
sidebar_position: 3
---

# 1. Systemd服务
我们经常有这样的需求，自己写好一个应用，想要它实现开机自启动的功能， 那么我们可以通过创建一个Systemd服务来实现,下面我以创建一个简单的hello.service服务为例子，
教大家在ArmSoM板卡创建自己的Systemd服务。

## 1.1 编写脚本
在/opt目录下编写一个hello.sh脚本：
```
#!/bin/bash

for ((i=1; i<=3; i++))
do
    echo "hello,armsom!" >> /tmp/hello.log
    sleep 1
done
```
该脚本实现的功能是每隔1秒就打印“Hello,ArmSoM!”字符串打印三次到/tmp/hello.log文件中。

给脚本添加执行权限：
```
chmod +x hello.sh
```

## 1.2 创建配置文件
在/etc/systemd/system/目录下创建一个hello-armsom.service配置文件：
```
[Unit]
Description=Hello Armsom Service
After=network.target

[Service]
Type=simple
User=armsom
ExecStart=/opt/hello.sh
Restart=no
StandardOutput=journal

[Install]
WantedBy=multi-user.target
```
其中ExecStart字段定义了hello-armsom.service服务的自启动脚本为/opt/hello.sh， 当我们使能了hello.service开机自启功能，在开机后便会执行/opt/hello.sh

## 1.3 使能hello-armsom.service
输入命令“sudo systemctl list-unit-files –type=service | grep hello” 查看hello.service是否被添加到了服务列表
```
armsom@armsom:/etc/systemd/system$ sudo systemctl list-unit-files --type=service | grep hello
hello-armsom.service                         disabled        enabled
```
可以看到hello.service处于disable状态，如果你输入上面命令后没有任何显示， 那你创建的服务就有问题，需要仔细排查。
重新加载 systemd 并启用服务：
```
# 重新加载systemd配置
sudo systemctl daemon-reload

# 启用开机自启动
sudo systemctl enable hello-armsom.service

# 立即启动服务（测试用）
sudo systemctl start hello-armsom.service

# 查看服务状态
sudo systemctl status hello-armsom.service

# 查看服务日志
sudo journalctl -u hello-armsom.service -f
```

输入上面命令即可看到hello.service处于运行状态
```
armsom@armsom:~$ sudo systemctl status hello-armsom.service
○ hello-armsom.service - Hello Armsom Service
     Loaded: loaded (/etc/systemd/system/hello-armsom.service; enabled; preset: enabled)
     Active: inactive (dead) since Thu 2026-01-08 11:30:33 CST; 3s ago
   Duration: 3.059s
    Process: 3510 ExecStart=/opt/hello.sh (code=exited, status=0/SUCCESS)
   Main PID: 3510 (code=exited, status=0/SUCCESS)
        CPU: 15ms
armsom@armsom:~$
armsom@armsom:~$ cat /tmp/hello.log
hello,armsom!
hello,armsom!
hello,armsom!
```

# 2.安装deb包
deb包是在linux系统下的一种安装包，有时我们在网上下载的Linux软件安装包也会以deb包的形式出现， 由于它是基于tar包的，所以同样会记录着文件的权限信息（读、写、可执行）、所有者、用户组等。
使用命令：`dpkg -l` 来查看系统以及安装了哪些deb包。

## 2.1 deb包的组成结构
deb包一般分成两部分：

1. 安装的内容，这部分类似linux的根目录，表示需要将软件安装到linux系统上的文件目录。

2. 控制信息（放在DEBIAN目录下），通常DEBIAN目录下有如下几个文件。

- changelog: 文件记录了deb包的作者、版本以及最后一次更新日期等信息；

- control: 文件记录了包名、版本号、架构、维护者及描述等信息；

- copyright: 文件记录了一些版权信息；

- postinst: 软件在进行正常目录文件拷贝到系统后需要执行的脚本。

- postrm文件: 软件卸载后需要执行的脚本。

- 其中control、postinst、postrm为必要文件。

## 2.2 构建deb包
安装工具及依赖：
```
sudo apt-get install build-essential debhelper make autoconf automake dpkg-dev fakeroot pbuilder gnupg
```
创建如下目录及文件:
```
armsom@armsom:~$ tree armsom-service/
armsom-service/
├── DEBIAN
│   ├── control
│   ├── postinst
│   └── postrm
├── etc
│   └── systemd
│       └── system
│           └── hello-armsom.service
└── opt
    └── hello.sh

6 directories, 5 files
```
DEBIAN/control文件内容如下所示:
```
Package: armsom-service
Version: 1.0.0-1
Section: utils
Priority: optional
Architecture: arm64
Depends: bash, systemd
Maintainer: armsom <armsom@example.com>
Description: Armsom服务示例
 ```
 postinst 脚本:
 ```
 #!/bin/bash

if [ "$1" = "upgrade" ] || [ "$1" = "install" ];then
    echo "armsom-service installing"
    # 给脚本添加执行权限
    if [ -f "/opt/hello.sh" ]; then
        chmod +x /opt/hello.sh
        echo "✓ 已设置 /opt/hello.sh 执行权限"
    fi

    systemctl enable hello-armsom
    systemctl start hello-armsom
fi
```
postrm 脚本
```
#!/bin/bash
if [ "$1" = "upgrade" ] ; then
    echo "upgrade"
elif [ "$1" = "remove" ] || [ "$1" = "purge" ] ; then
    echo "remove armsom-service"
    systemctl stop hello-armsom.service
    systemctl disable hello-armsom.service
fi

```
将以上目录打包构建成deb文件并在板板卡上使用dpkg命令安装即可
```
dpkg-deb --build -Zgzip armsom-service armsom-service.deb
sudo dpkg -i armsom-service.deb
```

## 2.3 修改deb包
这里介绍个通用方法：
```
#解压出包的文件到extract/目录下
dpkg -X rkwifibt-broadcom-firmware_1.0.0-1_arm64.deb extract/
#解压出包的控制信息到extract/DEBIAN/目录下
dpkg -e rkwifibt-broadcom-firmware_1.0.0-1_arm64.deb extract/DEBIAN/

#修改文件xxx

#对修改后的内容重新进行打包
dpkg-deb --build -Zgzip extract/  *****.deb
```

