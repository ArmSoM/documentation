---
title: ArmSoM 主动散热套件
description: "ArmSoM 主动散热套件选型指南，涵盖 AIM7、CM5/CM7S、Sige6/Sige7S 和 Sige1/3/5/7，提供产品图片、风扇规格、安装说明与结构图。"
keywords: [ArmSoM, cooling, heatsink, fan, AIM7, CM5, CM7S, Sige6, Sige7S, Sige1, Sige3, Sige5, Sige7]
image: /img/accessories/sige-active-cooling-fan-real.png
sidebar_label: "ArmSoM 主动散热套件"
sidebar_position: 16
slug: /sige-active-cooling-kit
toc_max_heading_level: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ArmSoM 主动散热套件

<nav className="armsom-doc-shortcuts" aria-label="章节快捷导航"><a href="#product-introduction">产品介绍</a><a href="#selection">选型与规格</a><a href="#photos">产品展示</a><a href="#3505s-cooling-fan">3505S 风扇</a><a href="#installation">安装与使用</a><a href="#drawings">结构资料</a><a href="#product-certificates">产品证书</a><a href="#purchase">购买与咨询</a></nav>

<span id="introduction" />

## 1. 产品介绍 {#product-introduction}

ArmSoM 主动散热套件由**鳍片散热器与风扇**组成，通过散热底面传导芯片热量，再利用气流加快散热，适合持续编译、AI 推理和多媒体处理等长时间运行场景。

根据板卡结构提供四款套件，分别适用于 **AIM7、CM5/CM7S、Sige6/Sige7S 和 Sige1/3/5/7**。其中 **Sige6 与 Sige7S 使用同款散热器**。选型时请核对板型、安装孔位、导热接触位置和风扇供电接口。

<span id="doc-section-2" />

## 2. 选型与规格 {#selection}

| 款式 | 适用产品 | 外形识别 | 结构资料 |
| --- | --- | --- | --- |
| [AIM7 款](#aim7) | [AIM7](/armsom-aim7) | 带异形安装耳，风扇位于鳍片一侧 | 资料待上传 |
| [CM5/CM7S 款](#cm5-cm7s) | [CM5](/armsom-cm5)、[CM7S](/armsom-cm7s) | 矩形主体，四角安装孔 | 资料待上传 |
| [Sige6/Sige7S 款](#sige6) | [Sige6](/armsom-sige6)、[Sige7S](/armsom-sige7s) | 不对称外形，安装耳向外延伸 | 资料待上传 |
| [Sige1/3/5/7 款](#sige-blower) | [Sige1](/armsom-sige1)、[Sige3](/armsom-sige3)、[Sige5](/armsom-sige5)、[Sige7](/armsom-sige7) | 长条散热器 + 3505S 鼓风机 | 结构图与安装视频 |

<figure className="armsom-doc-figure">
  <a href="/img/accessories/heatsinks/compatibility.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/compatibility.png')} alt="三款散热器外形对应关系：从左到右为 AIM7、CM5/CM7S、Sige6/Sige7S" /></a>
  <figcaption>外形对应关系：左为 AIM7，中为 CM5/CM7S，右为 Sige6/Sige7S 共用款（图中标注 Sige6）。此图用于选型识别，尺寸请查看结构文件。</figcaption>
</figure>

以下风扇参数适用于 AIM7、CM5/CM7S 和 Sige6/Sige7S 三款轴流风扇套件，3505S 鼓风机参数见第 4 节。

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

<span id="compatibility" /><span id="兼容性" />

Sige1/3/5/7 款的导热垫厚度如下，其他款式应按实际接触间隙选配。

| 板型 | 导热垫厚度 |
| --- | --- |
| Sige1、Sige3、Sige5 | 2 mm |
| Sige7 | 1 mm |

:::tip 外壳兼容性
Sige1/3/5/7 款主动散热套件与 Sige DIY Case 1 无法同时安装。
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

### 3.3 Sige6/Sige7S 款 {#sige6}

适用于 [ArmSoM Sige6](/armsom-sige6) 和 [ArmSoM Sige7S](/armsom-sige7s)，两款板卡使用同款散热器。

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/sige6-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/sige6-front-optimized.webp')} alt="Sige6/Sige7S 款 · 正面" loading="lazy" /></a>
    <figcaption>Sige6/Sige7S 款 · 正面</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/sige6-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/sige6-back-optimized.webp')} alt="Sige6/Sige7S 款 · 背面" loading="lazy" /></a>
    <figcaption>Sige6/Sige7S 款 · 背面</figcaption>
  </figure>
</div>

<span id="doc-section-1" />

### 3.4 Sige1/3/5/7 款 {#sige-blower}

<span id="heatsink" /><span id="散热器" />

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-active-cooling-fan-real.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-active-cooling-fan-real.png')} alt="Sige1/3/5/7 款主动散热套件" /></a>
  <figcaption>Sige1/3/5/7 款 · 散热器与鼓风机</figcaption>
</figure>

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-heatsink.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-heatsink.png')} alt="Sige1/3/5/7 款散热器结构图" /></a>
  <figcaption>Sige1/3/5/7 款 · 结构与尺寸</figcaption>
</figure>

- 材质：AL6063-T5
- 工艺：喷砂 + 氧化亮黑
- 重量：30g

<span id="doc-section-3" />

## 4. 3505S 鼓风机规格 {#3505s-cooling-fan}

<span id="3505s冷却风扇" />

本节规格、寿命与曲线对应 Sige1/3/5/7 款使用的 3505S 鼓风机。

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-active-cooling-fan.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-active-cooling-fan.png')} alt="sige-active-cooling-fan" /></a>
  <figcaption>3505S 鼓风机结构图</figcaption>
</figure>

### 4.1 详细规格 {#详细规格}

| 项目                         | 技术参数               |
|----------------------------------|-------------------------------------------------------|
| **轴承类型**       | 液压                                    |
| **额定电压**      | DC 5V                                                |
| **工作电压**       | 2.5~5.5 VDC                                          |
| **启动电压**    | 2.5 VDC (Temp 25°C)                                  |
| **额定电流**        | 310 mA (Max 340 mA)                                 |
| **转速**             | 10000 RPM ±10%                                      |
| **风量**                | 2.0 CFM (Min 1.80 CFM)                              |
|                                    | 0.056 m³/MIN (Min 0.051 m³/MIN)                      |
| **静压**         | 26.75 mm-H2O (Min 21.67 mm-H2O)                      |
|                                    | 1.05 inch-H2O (Min 0.85 inch-H2O)                    |
| **噪音**             | 54 dB(A) (Max 56.5 dB(A))                            |
| **风扇保护类型** |                                                       |
| **阻抗保护**| YES                                                   |
| **反接保护** | YES                                               |
| **自动启动**          | NO                                                    |
| **方波输出**   | NO                                                    |
| **锁机高电频输出** | NO                                              |
| **脉宽调速** | YES                                                |
| **信号反馈**     | YES                                                   |
| **温控转速** | NO                                                |
| **线材类别** | UL10064 AWG#32, 105±5mm outside the frame, Red (Positive), Black (Negative), Blue (PWM Speed Control) |
| **端子类别**              | JST 04SUR-32S OR EQUIVALENT (Blue, Black, Red)       |
| **标签**                   | DC5V-0.45A                                           |
| **插针公端**         | NO                                                    |

规格来源：3505S 鼓风机承认书 V1.0（2024-08-02）分别列出额定电流 310mA（最大 340mA）和标签 DC5V-0.45A；额定电流测试条件为额定电压下连续运行 3 分钟后测量，两项应分别读取。供应商将蓝线定义为 PWM 调速线，但该线与主板低侧开关回路的兼容接法仍需按风扇料号和载板验证，不能仅凭线色直接连接。

### 4.2 平均寿命 {#平均寿命}

在指定恒温下持续工作后，经检验，90%能正常运转即可估算其平均使用寿命

| **Sleeve Bearing** | **Test Temperature** | **Test Time (hours)** |
|--------------------|-----------------------|------------------------|
| Hydraumatic        | 25°C                  | 33,000                 |
| Hydraumatic        | 40°C                  | 25,000                 |
| Hydraumatic        | 60°C                  | 20,000                 |

### 4.3 风扇静压和气流曲线 {#风扇静压和气流曲线}

| NO | Duty Cycle | Speed (RPM) | Current (mA) | Pressure (mm-H2O) | Air Flow (CFM) | SPL (dB(A)) @ 0.1m |
|----|------------|-------------|--------------|------------------|----------------|---------------------|
| 1  | 100%       | 10,000      | 310          | 26.75            | 2.0            | 54                  |

<figure className="armsom-doc-figure">
  <a href="/img/accessories/cooling-kit-air-flow.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/cooling-kit-air-flow.png')} alt="cooling-kit-air-flow" /></a>
  <figcaption>3505S 静压与气流曲线</figcaption>
</figure>

### 4.4 其他参数 {#其他参数}

- 运行温度：-10℃ ~50℃为正常温
- 贮存温度： 在-20℃ ~40℃温度下贮存500小时后，经过在室内温度下24小时恢复期后，所有功能正常运作
- 湿度：95%RH .  40＋/-2℃per MiL-STD-202F 标准103B湿度检测96小时,绝缘电阻和绝缘强度测量数据符合8.0说明。
- 导线型号 LEAD WIRE: UL10064 AWG#32，框外线长105±5mm 
    - PIN 1: 蓝色导线(BLUE WIRED)---(PWM) 
    - PIN 2: 黑色导线(BLACK WIRED)---(-) 
    - PIN 3: 红色导线(RED WIRED)---(+)  

<span id="doc-section-5" />

## 5. 安装与使用 {#installation}

1. 正常关机并断开开发板电源，将散热器与安装孔位对齐，确认不遮挡连接器，也不挤压周围器件。
2. 在芯片与散热底面之间放置适合接触间隙的导热垫，安装前去除导热垫的保护膜。
3. 使用与孔位、装配高度匹配的固定件，均匀拧紧。检查导热面贴合、板体没有弯曲，线缆不会碰到扇叶。
4. 核对开发板或载板 FAN 接口的电压和针脚定义后连接风扇，再恢复供电。
5. 运行实际应用，检查风扇运转、气流与芯片温度；使用带温控的镜像时，低温下风扇可能停转。

:::warning 接线与装配
请勿带电安装或插拔风扇。不要仅凭线色连接电源、GND 或 PWM，也不要强行插入不匹配的连接器。避免螺钉过长、导热垫过厚或过薄造成干涉、板体变形或接触不良。
:::

接口位置和控制方法请参阅 [AIM7](/armsom-aim7)、[CM5](/armsom-cm5)、[CM7S](/armsom-cm7s)、[Sige6](/armsom-sige6)、[Sige7S](/armsom-sige7s) 产品文档，以及[风扇接口使用指南](/interface-usage/fan)。

<span id="assembly-instructions" /><span id="安装介绍" />

Sige1/3/5/7 款可参考 [ArmSoM 安装视频](https://www.youtube.com/watch?v=azB0MyI7scE)。

<span id="documents" /><span id="文件" />

<span id="doc-section-4" />

## 6. 结构资料 {#drawings}

| 适用款式 | 资料 | 获取方式 |
| --- | --- | --- |
| AIM7 款 | ArmSoM-AIM7 散热片 | 资料待上传 |
| CM5/CM7S 款 | ArmSoM-CM5 / ArmSoM-CM7S 散热片 | 资料待上传 |
| Sige6/Sige7S 款 | ArmSoM-Sige6 / ArmSoM-Sige7S 散热片 | 资料待上传 |
| Sige1/3/5/7 款 | [下载机械图纸](https://pan.baidu.com/s/1CvUflC1Vf7lX9fmMoArXLA?pwd=arms)（提取码 `arms`） | 百度网盘 |

AIM7、CM5/CM7S 和 Sige6/Sige7S 的结构资料将在上传百度网盘后补充链接。

<span id="doc-section-6" />

## 7. 产品证书 {#product-certificates}

<span id="产品证书" />

以下证书资料对应 Sige1/3/5/7 款。

### 7.1 CE / FCC / RoHS {#ce--fcc--rohs}

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-cooling-ce-fc-rohs.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-cooling-ce-fc-rohs.webp')} alt="sige-cooling-ce-fc-rohs" /></a>
  <figcaption>Sige1/3/5/7 · CE / FCC / RoHS</figcaption>
</figure>

## 8. 购买与咨询 {#purchase}

<span id="样品购买" />

**Sige1/3/5/7 款**可通过以下店铺购买，选购时请确认适用板型与配套导热垫。

| 渠道 | 商品链接 |
| --- | --- |
| ArmSoM 独立站 | [Sige 主动散热套件](https://www.armsom.org/product-page/sige-active-cooling-kit) |
| ArmSoM 速卖通官方店 | [购买散热套件](https://www.aliexpress.com/item/3256807357737339.html) |
| ArmSoM 淘宝官方店 | [购买散热套件](https://item.taobao.com/item.htm?id=770587380434) |

**AIM7、CM5/CM7S、Sige6/Sige7S 款**的样品、配套导热垫与固定件，以及批量采购、OEM/ODM 和结构资料，请联系 [sales@armsom.org](mailto:sales@armsom.org)。咨询时请注明板型、载板、外壳和数量，便于确认配套规格。
