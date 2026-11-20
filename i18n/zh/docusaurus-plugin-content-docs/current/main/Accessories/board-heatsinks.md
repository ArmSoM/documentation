---
title: ArmSoM 专用散热器
description: "适用于 AIM7、CM5、CM7S 和 Sige6 的三款风扇散热器，提供选型表、正反面图片、安装说明和 DXF 结构图下载。"
keywords: [ArmSoM, 散热器, 风扇, AIM7, CM5, CM7S, Sige6]
image: /img/accessories/heatsinks/aim7-front.webp
sidebar_label: "ArmSoM 专用散热器"
sidebar_position: 16.5
slug: /board-heatsinks
toc_max_heading_level: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ArmSoM 专用散热器

<nav className="armsom-doc-shortcuts" aria-label="章节快捷导航"><a href="#introduction">产品介绍</a><a href="#selection">选型与规格</a><a href="#photos">产品展示</a><a href="#installation">安装与使用</a><a href="#drawings">结构图下载</a><a href="#purchase">采购咨询</a></nav>

## 1. 产品介绍 {#introduction}

ArmSoM 专用散热器采用**鳍片散热器与轴流风扇组合**，通过散热底面传导芯片热量，再利用风扇气流加快散热，适合持续编译、AI 推理、多媒体处理等长时间运行场景。

三款产品分别匹配 **AIM7、CM5/CM7S、Sige6** 的结构。选型时应同时确认板型、安装孔位、导热接触位置与风扇供电接口。

## 2. 选型与规格 {#selection}

| 款式 | 适用产品 | 外形识别 | 结构资料 |
| --- | --- | --- | --- |
| [AIM7 款](#aim7) | [AIM7](/armsom-aim7) | 带异形安装耳，风扇位于鳍片一侧 | AIM7 V1.1 DXF |
| [CM5/CM7S 款](#cm5-cm7s) | [CM5](/armsom-cm5)、[CM7S](/armsom-cm7s) | 矩形主体，四角安装孔 | CM5/CM7S V1.1 DXF |
| [Sige6 款](#sige6) | [Sige6](/armsom-sige6) | 不对称外形，安装耳向外延伸 | 见下方外形与实物图 |

<figure className="armsom-doc-figure">
  <a href="/img/accessories/heatsinks/compatibility.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/compatibility.png')} alt="三款散热器外形对应关系：从左到右为 AIM7、CM5/CM7S、Sige6" /></a>
  <figcaption>外形对应关系：左为 AIM7，中为 CM5/CM7S，右为 Sige6。此图用于选型识别，尺寸请查看结构文件。</figcaption>
</figure>

| 项目 | 说明 |
| --- | --- |
| 散热结构 | 黑色鳍片散热器 + 轴流风扇 |
| 风扇型号 | FD03007S05H |
| 风扇标签参数 | DC 5V、0.2A |
| 连接方式 | 带线缆及连接器，需与所用开发板或载板的 FAN 接口匹配 |
| 安装方式 | 按对应孔位固定，并在散热底面与芯片之间配置合适的导热垫 |

风扇型号、电压与电流来自展示样品的标签。不同供货批次请以实物标签及配套规格为准。

:::tip 选型提示
AIM7、CM5 和 CM7S 为核心板，安装时还应确认载板及外壳的空间。孔位匹配不等于风扇接口的针脚定义相同，接线前请查阅对应产品文档。
:::

## 3. 产品展示 {#photos}

点击图片可查看大图。正面展示风扇、鳍片与线缆，背面用于观察安装孔位和导热底面。

### 3.1 AIM7 款 {#aim7}

适用于 [ArmSoM AIM7](/armsom-aim7)。

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/aim7-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/aim7-front-optimized.webp')} alt="AIM7 款 · 正面" loading="lazy" /></a>
    <figcaption>AIM7 款 · 正面</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/aim7-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/aim7-back-optimized.webp')} alt="AIM7 款 · 背面" loading="lazy" /></a>
    <figcaption>AIM7 款 · 背面</figcaption>
  </figure>
</div>


### 3.2 CM5/CM7S 款 {#cm5-cm7s}

适用于 [ArmSoM CM5](/armsom-cm5) 和 [ArmSoM CM7S](/armsom-cm7s)，两款核心板使用同款散热器。

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/cm5-cm7s-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/cm5-cm7s-front-optimized.webp')} alt="CM5/CM7S 款 · 正面" loading="lazy" /></a>
    <figcaption>CM5/CM7S 款 · 正面</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/cm5-cm7s-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/cm5-cm7s-back-optimized.webp')} alt="CM5/CM7S 款 · 背面" loading="lazy" /></a>
    <figcaption>CM5/CM7S 款 · 背面</figcaption>
  </figure>
</div>


### 3.3 Sige6 款 {#sige6}

适用于 [ArmSoM Sige6](/armsom-sige6)。

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/sige6-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/sige6-front-optimized.webp')} alt="Sige6 款 · 正面" loading="lazy" /></a>
    <figcaption>Sige6 款 · 正面</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/sige6-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/sige6-back-optimized.webp')} alt="Sige6 款 · 背面" loading="lazy" /></a>
    <figcaption>Sige6 款 · 背面</figcaption>
  </figure>
</div>


## 4. 安装与使用 {#installation}

1. 正常关机并断开开发板电源，将散热器与安装孔位对齐，确认不遮挡连接器，也不挤压周围器件。
2. 在芯片与散热底面之间放置适合接触间隙的导热垫，安装前去除导热垫的保护膜。
3. 使用与孔位、装配高度匹配的固定件，均匀拧紧。检查导热面贴合、板体没有弯曲，线缆不会碰到扇叶。
4. 核对开发板或载板 FAN 接口的电压和针脚定义后连接风扇，再恢复供电。
5. 运行实际应用，检查风扇运转、气流与芯片温度；使用带温控的镜像时，低温下风扇可能停转。

:::warning 接线与装配
请勿带电安装或插拔风扇。不要仅凭线色连接电源、GND 或 PWM，也不要强行插入不匹配的连接器。避免螺钉过长、导热垫过厚或过薄造成干涉、板体变形或接触不良。
:::

接口位置和控制方法请参阅 [AIM7](/armsom-aim7)、[CM5](/armsom-cm5)、[CM7S](/armsom-cm7s)、[Sige6](/armsom-sige6) 产品文档，以及[风扇接口使用指南](/interface-usage/fan)。

## 5. 结构图下载 {#drawings}

| 适用款式 | 文件 | 格式 / 版本 |
| --- | --- | --- |
| AIM7 款 | [下载 AIM7 散热片结构图](/downloads/heatsinks/aim7-heatsink-v1.1.dxf) | DXF / V1.1 |
| CM5/CM7S 款 | [下载 CM5/CM7S 散热片结构图](/downloads/heatsinks/cm5-cm7s-heatsink-v1.1.dxf) | DXF / V1.1 |

使用支持 DXF 的 CAD 软件打开文件，核对轮廓、孔位与图纸标注后再进行结构设计。Sige6 款目前提供外形示意和实物图片，结构文件可通过下方邮箱咨询。

## 6. 采购咨询 {#purchase}

样品、配套导热垫与固定件、批量采购及结构资料咨询：[sales@armsom.org](mailto:sales@armsom.org)。

咨询时请注明 **AIM7 款、CM5/CM7S 款或 Sige6 款**，以及所用载板、外壳和数量，便于确认配套规格。
