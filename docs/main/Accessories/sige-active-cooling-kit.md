---
title: ArmSoM Active Cooling Kit
description: "ArmSoM active cooling kits for AIM7, CM5/CM7S, Sige6/Sige7S and Sige1/3/5/7, with photos, fan specifications, installation instructions and mechanical drawings."
keywords: [ArmSoM, cooling, heatsink, fan, AIM7, CM5, CM7S, Sige6, Sige7S, Sige1, Sige3, Sige5, Sige7]
image: /img/accessories/sige-active-cooling-fan-real.png
sidebar_label: "ArmSoM Active Cooling Kit"
sidebar_position: 16
slug: /sige-active-cooling-kit
toc_max_heading_level: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ArmSoM Active Cooling Kit

<nav className="armsom-doc-shortcuts" aria-label="Section navigation"><a href="#product-introduction">Introduction</a><a href="#selection">Selection</a><a href="#photos">Product Views</a><a href="#3505s-cooling-fan">3505S Fan</a><a href="#installation">Installation</a><a href="#drawings">Drawings</a><a href="#product-certificates">Certificates</a><a href="#purchase">Purchasing</a></nav>

<span id="introduction" />

## 1. Introduction {#product-introduction}

ArmSoM active cooling kits combine a **finned heatsink with a fan**. The base transfers heat from the chip to the fins, while airflow carries heat away during sustained workloads such as compilation, AI inference and multimedia processing.

Four variants match **AIM7, CM5/CM7S, Sige6/Sige7S and Sige1/3/5/7**. **Sige6 and Sige7S use the same heatsink variant**. Check the board model, mounting holes, thermal contact area and fan power connector when selecting a kit.

<span id="doc-section-2" />

## 2. Selection and Specifications {#selection}

| Variant | Compatible products | Visual identification | Mechanical files |
| --- | --- | --- | --- |
| [AIM7](#aim7) | [AIM7](/armsom-aim7) | Shaped mounting tabs, with the fan on one side of the fins | [Google Drive](https://drive.google.com/drive/u/0/folders/1sO1_SrbboHyNxpYsITvem3Aa-vut6lm5) |
| [CM5/CM7S](#cm5-cm7s) | [CM5](/armsom-cm5), [CM7S](/armsom-cm7s) | Rectangular body with mounting holes at the four corners | [Google Drive](https://drive.google.com/drive/u/0/folders/1sO1_SrbboHyNxpYsITvem3Aa-vut6lm5) |
| [Sige6/Sige7S](#sige6) | [Sige6](/armsom-sige6), [Sige7S](/armsom-sige7s) | Asymmetric outline with extended mounting tabs | [Google Drive](https://drive.google.com/drive/u/0/folders/1sO1_SrbboHyNxpYsITvem3Aa-vut6lm5) |
| [Sige1/3/5/7](#sige-blower) | [Sige1](/armsom-sige1), [Sige3](/armsom-sige3), [Sige5](/armsom-sige5), [Sige7](/armsom-sige7) | Elongated heatsink with a 3505S blower | Mechanical drawing and assembly video |

<figure className="armsom-doc-figure">
  <a href="/img/accessories/heatsinks/compatibility.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/compatibility.png')} alt="Heatsink outlines, from left to right: AIM7, CM5/CM7S and Sige6/Sige7S" /></a>
  <figcaption>Left: AIM7. Center: CM5/CM7S. Right: the shared Sige6/Sige7S variant (labeled Sige6 in the drawing). Use these outlines to identify the variants; refer to the mechanical files for dimensions.</figcaption>
</figure>

The following fan ratings apply to the AIM7, CM5/CM7S and Sige6/Sige7S axial-fan variants. See section 4 for the 3505S blower specifications.

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

<span id="compatibility" />

Use the following thermal pad thicknesses for the Sige1/3/5/7 variant. For the other variants, select a pad to suit the actual contact gap.

| Board | Thermal pad thickness |
| --- | --- |
| Sige1, Sige3, Sige5 | 2 mm |
| Sige7 | 1 mm |

:::tip Enclosure compatibility
The Sige1/3/5/7 cooling kit and Sige DIY Case 1 cannot be installed together.
:::

## 3. Product Views {#photos}

Click a photo to open the larger image. The front shows the fan, fins and cable; the rear shows the mounting points and thermal contact base.

### 3.1 AIM7 Variant {#aim7}

For [ArmSoM AIM7](/armsom-aim7).

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/aim7-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/aim7-front-optimized.webp')} alt="AIM7 variant · Front" loading="lazy" /></a>
    <figcaption>AIM7 variant · Front</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/aim7-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/aim7-back-optimized.webp')} alt="AIM7 variant · Rear" loading="lazy" /></a>
    <figcaption>AIM7 variant · Rear</figcaption>
  </figure>
</div>

### 3.2 CM5/CM7S Variant {#cm5-cm7s}

For [ArmSoM CM5](/armsom-cm5) and [ArmSoM CM7S](/armsom-cm7s). Both modules use this heatsink variant.

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/cm5-cm7s-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/cm5-cm7s-front-optimized.webp')} alt="CM5/CM7S variant · Front" loading="lazy" /></a>
    <figcaption>CM5/CM7S variant · Front</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/cm5-cm7s-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/cm5-cm7s-back-optimized.webp')} alt="CM5/CM7S variant · Rear" loading="lazy" /></a>
    <figcaption>CM5/CM7S variant · Rear</figcaption>
  </figure>
</div>

### 3.3 Sige6/Sige7S Variant {#sige6}

For [ArmSoM Sige6](/armsom-sige6) and [ArmSoM Sige7S](/armsom-sige7s). Both boards use this heatsink variant.

<div className="armsom-heatsink-views">
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/sige6-front.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/sige6-front-optimized.webp')} alt="Sige6/Sige7S variant · Front" loading="lazy" /></a>
    <figcaption>Sige6/Sige7S variant · Front</figcaption>
  </figure>
  <figure className="armsom-doc-figure">
    <a href="/img/accessories/heatsinks/sige6-back.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/heatsinks/sige6-back-optimized.webp')} alt="Sige6/Sige7S variant · Rear" loading="lazy" /></a>
    <figcaption>Sige6/Sige7S variant · Rear</figcaption>
  </figure>
</div>

<span id="doc-section-1" />

### 3.4 Sige1/3/5/7 Variant {#sige-blower}

<span id="heatsink" />

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-active-cooling-fan-real.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-active-cooling-fan-real.png')} alt="Sige1/3/5/7 active cooling kit" /></a>
  <figcaption>Sige1/3/5/7 variant · Heatsink and blower</figcaption>
</figure>

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-heatsink.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-heatsink.png')} alt="Sige1/3/5/7 heatsink mechanical drawing" /></a>
  <figcaption>Sige1/3/5/7 variant · Outline and dimensions</figcaption>
</figure>

- Material: AL6063-T5
- Finish: Sandblasting + Oxidized Glossy Black
- ​​Weight: 30g​

<span id="doc-section-3" />

## 4. 3505S Blower Specifications {#3505s-cooling-fan}

The specifications, lifespan and curves in this section apply to the 3505S blower used in the Sige1/3/5/7 variant.

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-active-cooling-fan.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-active-cooling-fan.png')} alt="sige-active-cooling-fan" /></a>
  <figcaption>3505S blower drawing</figcaption>
</figure>

### 4.1 Detailed Specifications {#detailed-specifications}

| **ITEM**                            | **SPECIFICATION/CONDITION**                             |
|-------------------------------------|---------------------------------------------------------|
| **Bearing Type**                    | Hydraulic                                               |
| **Rating Voltage**                  | DC 5V                                                   |
| **Rated Voltage**                   | 2.5~5.5 VDC                                             |
| **Start-Up Voltage**                | 2.5 VDC (Temp 25°C)                                     |
| **Rated Current**                   | 310 mA (Max 340 mA)                                    |
| **Rated Speed**                     | 10000 RPM ±10%                                         |
| **Air Flow**                        | 2.0 CFM (Min 1.80 CFM)                                |
|                                     | 0.056 m³/MIN (Min 0.051 m³/MIN)                         |
| **Static Pressure**                 | 26.75 mm-H2O (Min 21.67 mm-H2O)                         |
|                                     | 1.05 inch-H2O (Min 0.85 inch-H2O)                       |
| **Noise Level**                     | 54 dB(A) (Max 56.5 dB(A))                               |
| **Protection Type**                 |                                                         |
| **Resistance Protected**            | YES                                                     |
| **Reverse Connect Protection**      | YES                                                     |
| **Auto Start**                      | NO                                                      |
| **Tachometer Output**               | NO                                                      |
| **Lock Rotor Alarm Output**         | NO                                                      |
| **Pulse Width Modulation**          | YES                                                     |
| **Signal Feedback**                 | YES                                                     |
| **Thermal Speed Controlled**        | NO                                                      |
| **Connection Lead Type**            | UL10064 AWG#32, 105±5mm outside the frame, Red (Positive), Black (Negative), Blue (PWM Speed Control) |
| **Housing**                         | JST 04SUR-32S OR EQUIVALENT (Blue, Black, Red)         |
| **Label**                           | DC5V-0.45A                                              |
| **Pin Terminal**                    | NO                                                      |

Source: 3505S blower approval specification V1.0 (2024-08-02). It separately lists rated current of 310mA (340mA maximum) and a DC5V-0.45A label. Rated current is measured after three minutes of continuous operation at rated voltage; these are distinct entries. The supplier calls the blue wire a PWM control lead, but compatibility with a board low-side switch must be verified for the fan part and carrier; do not wire it by color alone.

### 4.2 Average Lifespan {#average-lifespan}

After continuous operation at a specified constant temperature, the average lifespan can be estimated if 90% of the units are still operational after testing.

| **Sleeve Bearing** | **Test Temperature** | **Test Time (hours)** |
|--------------------|-----------------------|------------------------|
| Hydraumatic        | 25°C                  | 33,000                 |
| Hydraumatic        | 40°C                  | 25,000                 |
| Hydraumatic        | 60°C                  | 20,000                 |

### 4.3 Fan Static Pressure and Airflow Curves {#fan-static-pressure-and-airflow-curves}

| NO | Duty Cycle | Speed (RPM) | Current (mA) | Pressure (mm-H2O) | Air Flow (CFM) | SPL (dB(A)) @ 0.1m |
|----|------------|-------------|--------------|------------------|----------------|---------------------|
| 1  | 100%       | 10,000      | 310          | 26.75            | 2.0            | 54                  |

<figure className="armsom-doc-figure">
  <a href="/img/accessories/cooling-kit-air-flow.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/cooling-kit-air-flow.png')} alt="cooling-kit-air-flow" /></a>
  <figcaption>3505S static pressure and airflow curves</figcaption>
</figure>

### 4.4 Other Parameters {#other-parameters}

- Operating Temperature: Normal operation between -10°C to 50°C
- Storage Temperature: After storage at -20°C to 40°C for 500 hours, and a 24-hour recovery period at room temperature, all functions operate normally
- Humidity: 95% RH. After 96 hours of humidity testing at 40±2°C per MiL-STD-202F Standard 103B, insulation resistance and strength measurements meet 8.0 requirements.
- Wire Model LEAD WIRE: UL10064 AWG#32, external wire length 105±5mm
    - PIN 1: Blue Wire (BLUE WIRED) --- (PWM)
    - PIN 2: Black Wire (BLACK WIRED) --- (-)
    - PIN 3: Red Wire (RED WIRED) --- (+)

<span id="doc-section-5" />

## 5. Installation and Use {#installation}

1. Shut down and disconnect power. Align the heatsink with the mounting holes and check that it clears connectors and nearby components.
2. Place a thermal pad suited to the contact gap between the chip and heatsink base. Remove its protective film before assembly.
3. Use fasteners suited to the holes and assembly height, tightening evenly. Check thermal contact, ensure the board is not bent, and keep the cable clear of the fan blades.
4. Verify the voltage and pinout of the board or carrier's FAN interface, connect the fan, then restore power.
5. Run your application and check fan operation, airflow and chip temperature. With temperature-controlled images, the fan may stop at low temperatures.

:::warning Wiring and assembly
Disconnect power before installation or unplugging the fan. Do not identify power, GND or PWM by wire color alone, and do not force incompatible connectors. Overlong screws or an unsuitable thermal pad thickness can cause interference, board bending or poor contact.
:::

For connector locations and control methods, see the [AIM7](/armsom-aim7), [CM5](/armsom-cm5), [CM7S](/armsom-cm7s), [Sige6](/armsom-sige6) and [Sige7S](/armsom-sige7s) product guides, and the [fan interface guide](/interface-usage/fan).

<span id="assembly-instructions" />

For the Sige1/3/5/7 variant, see the [ArmSoM assembly video](https://www.youtube.com/watch?v=azB0MyI7scE).

<span id="documents" />

<span id="doc-section-4" />

## 6. Mechanical Drawings {#drawings}

| Variant | Document | Availability |
| --- | --- | --- |
| AIM7 | ArmSoM-AIM7 heatsink | [Google Drive](https://drive.google.com/drive/u/0/folders/1sO1_SrbboHyNxpYsITvem3Aa-vut6lm5) |
| CM5/CM7S | ArmSoM-CM5 / ArmSoM-CM7S heatsink | [Google Drive](https://drive.google.com/drive/u/0/folders/1sO1_SrbboHyNxpYsITvem3Aa-vut6lm5) |
| Sige6/Sige7S | ArmSoM-Sige6 / ArmSoM-Sige7S heatsink | [Google Drive](https://drive.google.com/drive/u/0/folders/1sO1_SrbboHyNxpYsITvem3Aa-vut6lm5) |
| Sige1/3/5/7 | [Download the mechanical drawing](https://drive.google.com/file/d/1DQ92d9owV1JzpOhPE3L9g2yUZR8_7SDt/view?usp=drive_link) | Google Drive |

The AIM7, CM5/CM7S and Sige6/Sige7S mechanical documents share one Google Drive folder. Select the drawing for your board model.

<span id="doc-section-6" />

## 7. Product Certificates {#product-certificates}

The certificate documentation below applies to the Sige1/3/5/7 variant.

### 7.1 CE / FCC / RoHS {#ce--fcc--rohs}

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-cooling-ce-fc-rohs.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-cooling-ce-fc-rohs.webp')} alt="sige-cooling-ce-fc-rohs" /></a>
  <figcaption>Sige1/3/5/7 · CE / FCC / RoHS</figcaption>
</figure>

## 8. Purchasing and Inquiries {#purchase}

<span id="purchase-samples" />

The **Sige1/3/5/7 variant** is available from the following stores. Confirm the board model and matching thermal pad when ordering.

| Store | Product link |
| --- | --- |
| ArmSoM online shop | [Sige Active Cooling Kit](https://www.armsom.org/product-page/sige-active-cooling-kit) |
| ArmSoM AliExpress store | [Purchase the cooling kit](https://aliexpress.com/item/3256807357737339.html) |
| ArmSoM Taobao store | [Purchase the cooling kit](https://item.taobao.com/item.htm?id=824930133991) |

For **AIM7, CM5/CM7S and Sige6/Sige7S variants**, samples, matching thermal pads and fasteners, volume orders, OEM/ODM or mechanical documentation, contact [sales@armsom.org](mailto:sales@armsom.org). Specify the board model, carrier board, enclosure and quantity so the matching configuration can be confirmed.
