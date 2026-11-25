---
title: Getting Started
description: "Meet ArmSoM OS, a Debian-based Linux system customized by the ArmSoM team. Get started with image flashing, first boot, networking, system configuration and application development."
image: /img/armsom-social-card.png
slug: /getting-start
toc_max_heading_level: 2
---

import CategoryDocCards from '@site/src/components/CategoryDocCards';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Getting Started

**ArmSoM OS** is a Debian-based operating system customized and maintained by the ArmSoM team for its single-board computers and system-on-modules. It integrates board-specific drivers, multimedia components and tools such as [armsom-overlay](./Getting%20Started/14.overlay.md) and [ArmSoM Camera Applications](./Advanced%20Manual/2.armsom-camera.md) to simplify peripheral configuration and application development.

Depending on your product's available images, choose a GNOME or XFCE desktop, or a Server edition, and install software with APT for learning, embedded development, multimedia applications and service deployment. Developers can also customize the kernel, device tree and root filesystem using the open-source [armsom-sdk](https://github.com/ArmSoM/manifests).

<figure style={{maxWidth: '860px', margin: '1.5rem auto'}}>
  <img src={useBaseUrl('/img/getting-started/armsom-os-desktop.webp')} alt="ArmSoM OS Debian 12 XFCE desktop running on CM5" width="1920" height="1080" style={{width: '100%', height: 'auto', borderRadius: '12px'}} />
  <figcaption className="armsom-image-caption">ArmSoM OS desktop: Debian 12 · XFCE</figcaption>
</figure>

For your first setup, choose a matching image from your product documentation, then follow “Preparation and First Boot” below to flash it and log in. Refer to the connection, maintenance and development guides as needed.

## 1. Preparation and First Boot

<CategoryDocCards section="getting-start" group="setup" />

## 2. Connection and File Transfer

<CategoryDocCards section="getting-start" group="connection" />

## 3. System Configuration and Updates

<CategoryDocCards section="getting-start" group="system" />

## 4. Development and Series Guides

<CategoryDocCards section="getting-start" group="development" />
