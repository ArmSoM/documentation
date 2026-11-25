---
title: 快速入门
description: "认识 ArmSoM OS：ArmSoM 团队基于 Debian 定制的 Linux 系统。从镜像烧录、首次启动到网络连接、系统配置和应用开发，快速开始使用开发板。"
image: /img/armsom-social-card.png
slug: /getting-start
toc_max_heading_level: 2
---

import CategoryDocCards from '@site/src/components/CategoryDocCards';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 快速入门

**ArmSoM OS** 是 ArmSoM 团队基于 Debian，为旗下开发板和核心板定制与维护的操作系统。系统集成板级驱动、多媒体组件，以及 [armsom-overlay 配置工具](./Getting%20Started/14.overlay.md)、[ArmSoM 相机应用](./Advanced%20Manual/2.armsom-camera.md)等，简化外设配置与应用开发。

根据产品提供的镜像，可选择 GNOME、XFCE 桌面或 Server 版本，通过 APT 安装软件，满足学习、嵌入式开发、多媒体应用和服务部署需求。开发者还可使用开源的 [armsom-sdk](https://github.com/ArmSoM/manifests) 定制内核、设备树与文件系统。

<figure style={{maxWidth: '860px', margin: '1.5rem auto'}}>
  <img src={useBaseUrl('/img/getting-started/armsom-os-desktop.webp')} alt="ArmSoM OS 在 CM5 上运行的 Debian 12 XFCE 桌面" width="1920" height="1080" style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
  <figcaption className="armsom-image-caption">ArmSoM OS 桌面：Debian 12 · XFCE</figcaption>
</figure>

首次使用，请先在对应产品文档中选择匹配的镜像，再按下方“准备与启动”完成烧录与登录；网络连接、系统维护和开发指南可按需查阅。

## 1. 准备与启动

<CategoryDocCards section="getting-start" group="setup" />

## 2. 连接与文件传输

<CategoryDocCards section="getting-start" group="connection" />

## 3. 系统配置与更新

<CategoryDocCards section="getting-start" group="system" />

## 4. 开发与系列指南

<CategoryDocCards section="getting-start" group="development" />
