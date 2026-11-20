---
title: ArmSoM Dedicated Heatsinks
description: "Three fan heatsink variants for AIM7, CM5, CM7S and Sige6, with a selection guide, front and rear photos, installation instructions and DXF drawings."
keywords: [ArmSoM, heatsink, cooling, fan, AIM7, CM5, CM7S, Sige6]
image: /img/accessories/heatsinks/aim7-front.webp
sidebar_label: "ArmSoM Dedicated Heatsinks"
sidebar_position: 16.5
slug: /board-heatsinks
toc_max_heading_level: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ArmSoM Dedicated Heatsinks

<nav className="armsom-doc-shortcuts" aria-label="Section navigation"><a href="#introduction">Introduction</a><a href="#selection">Selection and Specifications</a><a href="#photos">Product Views</a><a href="#installation">Installation</a><a href="#drawings">Drawings</a><a href="#purchase">Purchasing</a></nav>

## 1. Introduction {#introduction}

ArmSoM board-specific heatsinks combine a **finned heatsink with an axial fan**. The base transfers heat from the chip to the fins, while airflow carries heat away during sustained workloads such as compilation, AI inference and multimedia processing.

Three variants match the mechanical layouts of **AIM7, CM5/CM7S and Sige6**. Select a variant by checking the board model, mounting holes, thermal contact area and fan power connector.

## 2. Selection and Specifications {#selection}

| Variant | Compatible products | Visual identification | Mechanical files |
| --- | --- | --- | --- |
| [AIM7](#aim7) | [AIM7](/armsom-aim7) | Shaped mounting tabs, with the fan on one side of the fins | AIM7 V1.1 DXF |
| [CM5/CM7S](#cm5-cm7s) | [CM5](/armsom-cm5), [CM7S](/armsom-cm7s) | Rectangular body with mounting holes at the four corners | CM5/CM7S V1.1 DXF |
| [Sige6](#sige6) | [Sige6](/armsom-sige6) | Asymmetric outline with extended mounting tabs | Outline and product photos below |

<figure className="armsom-doc-figure">
  <a href="/img/accessories/heatsinks/compatibility.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/compatibility.png')} alt="Heatsink outlines, from left to right: AIM7, CM5/CM7S and Sige6" /></a>
  <figcaption>Left: AIM7. Center: CM5/CM7S. Right: Sige6. Use these outlines to identify the variants; refer to the mechanical files for dimensions.</figcaption>
</figure>

| Item | Details |
| --- | --- |
| Cooling assembly | Black finned heatsink with an axial fan |
| Fan model | FD03007S05H |
| Fan label ratings | DC 5V, 0.2A |
| Connection | Cable and connector; must match the FAN interface on the board or carrier |
| Mounting | Fasten at the matching holes and fit a suitable thermal pad between the chip and heatsink base |

The fan model, voltage and current are taken from the photographed samples. Check the label and supplied specifications for your production batch.

:::tip Selecting a variant
AIM7, CM5 and CM7S are compute modules. Also check clearance on the carrier board and inside the enclosure. Matching mounting holes do not imply matching fan connector pinouts; consult the relevant product documentation before wiring.
:::

## 3. Product Views {#photos}

Click a photo to open the larger image. The front shows the fan, fins and cable; the rear shows the mounting points and thermal contact base.

### 3.1 AIM7 Variant {#aim7}

For [ArmSoM AIM7](/armsom-aim7).

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/aim7-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/aim7-front.webp')} alt="AIM7 variant · Front" loading="lazy" /></a>
    <figcaption>AIM7 variant · Front</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/aim7-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/aim7-back.webp')} alt="AIM7 variant · Rear" loading="lazy" /></a>
    <figcaption>AIM7 variant · Rear</figcaption>
  </figure>
</div>


### 3.2 CM5/CM7S Variant {#cm5-cm7s}

For [ArmSoM CM5](/armsom-cm5) and [ArmSoM CM7S](/armsom-cm7s). Both modules use this heatsink variant.

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/cm5-cm7s-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/cm5-cm7s-front.webp')} alt="CM5/CM7S variant · Front" loading="lazy" /></a>
    <figcaption>CM5/CM7S variant · Front</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/cm5-cm7s-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/cm5-cm7s-back.webp')} alt="CM5/CM7S variant · Rear" loading="lazy" /></a>
    <figcaption>CM5/CM7S variant · Rear</figcaption>
  </figure>
</div>


### 3.3 Sige6 Variant {#sige6}

For [ArmSoM Sige6](/armsom-sige6).

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/sige6-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/sige6-front.webp')} alt="Sige6 variant · Front" loading="lazy" /></a>
    <figcaption>Sige6 variant · Front</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/sige6-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/sige6-back.webp')} alt="Sige6 variant · Rear" loading="lazy" /></a>
    <figcaption>Sige6 variant · Rear</figcaption>
  </figure>
</div>


## 4. Installation and Use {#installation}

1. Shut down and disconnect power. Align the heatsink with the mounting holes and check that it clears connectors and nearby components.
2. Place a thermal pad suited to the contact gap between the chip and heatsink base. Remove its protective film before assembly.
3. Use fasteners suited to the holes and assembly height, tightening evenly. Check thermal contact, ensure the board is not bent, and keep the cable clear of the fan blades.
4. Verify the voltage and pinout of the board or carrier's FAN interface, connect the fan, then restore power.
5. Run your application and check fan operation, airflow and chip temperature. With temperature-controlled images, the fan may stop at low temperatures.

:::warning Wiring and assembly
Disconnect power before installation or unplugging the fan. Do not identify power, GND or PWM by wire color alone, and do not force incompatible connectors. Overlong screws or an unsuitable thermal pad thickness can cause interference, board bending or poor contact.
:::

For connector locations and control methods, see the [AIM7](/armsom-aim7), [CM5](/armsom-cm5), [CM7S](/armsom-cm7s) and [Sige6](/armsom-sige6) product guides, and the [fan interface guide](/interface-usage/fan).

## 5. Mechanical Drawings {#drawings}

| Variant | File | Format / version |
| --- | --- | --- |
| AIM7 | [Download the AIM7 heatsink drawing](/downloads/heatsinks/aim7-heatsink-v1.1.dxf) | DXF / V1.1 |
| CM5/CM7S | [Download the CM5/CM7S heatsink drawing](/downloads/heatsinks/cm5-cm7s-heatsink-v1.1.dxf) | DXF / V1.1 |

Open the files in CAD software that supports DXF. Check the outlines, mounting holes and drawing annotations before designing an assembly. Outline and product photos are currently provided for Sige6; contact the address below to inquire about its mechanical file.

## 6. Purchasing and Inquiries {#purchase}

For samples, matching thermal pads and fasteners, volume orders or mechanical documentation, contact [sales@armsom.org](mailto:sales@armsom.org).

Specify the **AIM7, CM5/CM7S or Sige6 variant**, together with your carrier board, enclosure and required quantity, so the matching configuration can be confirmed.
