---
sidebar_label: "Deploy application"
slug: /build-system-image/Deploy application
sidebar_position: 1
---

# 1. Deploy application
We often have the need to create an application and make it start automatically upon boot. This can be achieved by setting up a Systemd service. Below, I'll use the creation of a simple hello.service as an example to guide you through setting up your own Systemd service on an ArmSoM board.

## 1.1 write scripts
Write a hello.sh script in the /opt directory:
```
#!/bin/bash

for ((i=1; i<=3; i++))
do
    echo "hello,armsom!" >> /tmp/hello.log
    sleep 1
done
```
The function implemented by this script is to print the "Hello, ArmSoM!" string three times every second to the/tmp/wello.log file.

Add execution permissions to the script:
```
chmod +x hello.sh
```

## 1.2 create profile
Create a hello armsom. service configuration file in the/etc/systemd/system/directory:
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
The ExecutStart field defines the self starting script for the hello armsom. service service as/opt/hello.sh. When we enable the hello. service startup function,/opt/hello.sh will be executed after startup

## 1.3 enable hello-armsom.service
Enter the command 'sudo systemctl list unit files - type=service | grep hello' to check if hello.service has been added to the service list
```
armsom@armsom:/etc/systemd/system$ sudo systemctl list-unit-files --type=service | grep hello
hello-armsom.service                         disabled        enabled
```
You can see that Hello. service is in a disabled state. If there is no display after entering the above command, then the service you created has a problem and needs to be carefully investigated.
Reload systemd and enable services:
```
# Reload systemd configuration
sudo systemctl daemon-reload

# Enable self startup upon startup
sudo systemctl enable hello-armsom.service

# Start the service immediately
sudo systemctl start hello-armsom.service

# View service status
sudo systemctl status hello-armsom.service

# View service logs
sudo journalctl -u hello-armsom.service -f
```

Enter the command above to see that Hello. service is running
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

# 2.Install deb package
Deb package is an installation package in Linux system. Sometimes, Linux software installation packages downloaded online also appear in the form of deb package. As it is based on tar package, it also records the file's permission information (read, write, executable), owner, user group, etc.
Use the command: ` dpkg - l ` to view the system and which deb packages are installed.

## 2.1 The composition structure of the deb package
Deb packages are generally divided into two parts:

1. The installation content is similar to the root directory of Linux, indicating that the software needs to be installed in the file directory on the Linux system.
2. Control information (placed in the DEBIAN directory), usually there are several files in the DEBIAN directory as follows.
- Changelog: The file records information such as the author, version, and last update date of the deb package;
- Control: The file records information such as package name, version number, architecture, maintainer, and description;
- Copyright: The file records some copyright information;
- Post script: The script that the software needs to execute after copying normal directory files to the system.
- Postrm file: Script that needs to be executed after software uninstallation.
- Among them, control, poster, and poster are necessary files.

## 2.2 Build deb package
Installation tools and dependencies:
```
sudo apt-get install build-essential debhelper make autoconf automake dpkg-dev fakeroot pbuilder gnupg
```
Create the following directory and files:
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
DEBIAN/control:
```
Package: armsom-service
Version: 1.0.0-1
Section: utils
Priority: optional
Architecture: arm64
Depends: bash, systemd
Maintainer: armsom <armsom@example.com>
Description: Armsom
 ```
 postinst:
 ```
 #!/bin/bash

if [ "$1" = "upgrade" ] || [ "$1" = "install" ];then
    echo "armsom-service installing"
    if [ -f "/opt/hello.sh" ]; then
        chmod +x /opt/hello.sh
        echo "✓ The execution permission of/opt/hello.sh has been set"
    fi

    systemctl enable hello-armsom
    systemctl start hello-armsom
fi
```
postrm
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
Package the above directory into a deb file and install it on the board using the dpkg command
```
dpkg-deb --build -Zgzip armsom-service armsom-service.deb
sudo dpkg -i armsom-service.deb
```

## 2.3 Modify deb package
Here is a general method:
```
#Extract the file from the package to the extract/ directory
dpkg -X rkwifibt-broadcom-firmware_1.0.0-1_arm64.deb extract/

#Extract the control information of the extracted package to the extract/DEBIAN/ directory
dpkg -e rkwifibt-broadcom-firmware_1.0.0-1_arm64.deb extract/DEBIAN/

#Modify file xxx

#Repackage the modified content
dpkg-deb --build -Zgzip extract/  *****.deb
```

