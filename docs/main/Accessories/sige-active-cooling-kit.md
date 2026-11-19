---
description: "Official ArmSoM technical documentation for Sige Active Cooling Kit. Find product specifications, configuration steps, usage guidance, and embedded development references."
keywords: [ArmSoM, Rockchip, embedded Linux, development board, "Sige Active Cooling Kit"]
image: /img/armsom-social-card.png
sidebar_label: "Active Cooling Kit"
sidebar_position: 16
slug: /sige-active-cooling-kit
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sige Active Cooling Kit

<nav className="armsom-doc-shortcuts" aria-label="Section shortcuts"><a href="#product-introduction">Product Introduction</a><a href="#heatsink">Heatsink</a><a href="#compatibility">Compatibility</a><a href="#3505s-cooling-fan">3505S Cooling Fan</a><a href="#documents">Documents</a><a href="#assembly-instructions">Assembly Instructions</a><a href="#product-certificates">Product Certificates</a><a href="#purchase-samples">Purchase Samples</a></nav>

## 1. Product Introduction {#product-introduction}

The Sige Active Cooling Kit is a dedicated active cooling solution designed for the ArmSoM-Sige. It combines an aluminum heatsink with a temperature-controlled fan to keep your ArmSoM-Sige operating at a comfortable temperature even under heavy loads.

:::tip
Please note that the Sige DIY Case 1 and the Sige Active Cooling Kit cannot be used together.
:::


<span id="doc-section-1" className="armsom-section-anchor" />

## 2. Heatsink {#heatsink}

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-active-cooling-fan-real.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-active-cooling-fan-real.png')} alt="sige-active-cooling-fan-real" /></a>
  <figcaption>sige-active-cooling-fan-real</figcaption>
</figure>


<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-heatsink.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-heatsink.png')} alt="sige-heatsink" /></a>
  <figcaption>sige-heatsink</figcaption>
</figure>


- Material: AL6063-T5
- Finish: Sandblasting + Oxidized Glossy Black
- ​​Weight: 30g​

<span id="doc-section-2" className="armsom-section-anchor" />

## 3. Compatibility {#compatibility}

- Sige1 2mm Thermal Pad
- Sige3 2mm Thermal Pad
- Sige5 2mm Thermal Pad
- Sige7 1mm Thermal Pad

<span id="doc-section-3" className="armsom-section-anchor" />

## 4. 3505S Cooling Fan {#3505s-cooling-fan}

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-active-cooling-fan.png" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-active-cooling-fan.png')} alt="sige-active-cooling-fan" /></a>
  <figcaption>sige-active-cooling-fan</figcaption>
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
  <figcaption>cooling-kit-air-flow</figcaption>
</figure>


### 4.4 Other Parameters {#other-parameters}

- Operating Temperature: Normal operation between -10°C to 50°C
- Storage Temperature: After storage at -20°C to 40°C for 500 hours, and a 24-hour recovery period at room temperature, all functions operate normally
- Humidity: 95% RH. After 96 hours of humidity testing at 40±2°C per MiL-STD-202F Standard 103B, insulation resistance and strength measurements meet 8.0 requirements.
- Wire Model LEAD WIRE: UL10064 AWG#32, external wire length 105±5mm
    - PIN 1: Blue Wire (BLUE WIRED) --- (PWM)
    - PIN 2: Black Wire (BLACK WIRED) --- (-)
    - PIN 3: Red Wire (RED WIRED) --- (+)

<span id="doc-section-4" className="armsom-section-anchor" />

## 5. Documents {#documents}

<div class="cards">
    <a href="https://drive.google.com/file/d/1DQ92d9owV1JzpOhPE3L9g2yUZR8_7SDt/view?usp=drive_link" class="card-link">
        <div class="card">
            <div class="icon">
                <i>📚</i>
            </div>
            <div class="content">
                <h2>armsom-active-cooling-kit mechanical drawing</h2>
            </div>
        </div>
    </a>
</div>

<span id="doc-section-5" className="armsom-section-anchor" />

## 6. Assembly Instructions {#assembly-instructions}

[ArmSoM YouTube Channel](https://www.youtube.com/watch?v=azB0MyI7scE)

<span id="doc-section-6" className="armsom-section-anchor" />

## 7. Product Certificates {#product-certificates}

### 7.1 CE / FCC / RoHS {#ce--fcc--rohs}

<figure className="armsom-doc-figure">
  <a href="/img/accessories/sige-cooling-ce-fc-rohs.webp" target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('/img/accessories/sige-cooling-ce-fc-rohs.webp')} alt="sige-cooling-ce-fc-rohs" /></a>
  <figcaption>sige-cooling-ce-fc-rohs</figcaption>
</figure>


## 8. Purchase Samples {#purchase-samples}

ArmSoM online shop: [https://www.armsom.org/product-page/sige-active-cooling-kit](https://www.armsom.org/product-page/sige-active-cooling-kit)
 
ArmSoM Aliexpress online shop: [https://aliexpress.com/item/3256807357737339.html](https://aliexpress.com/item/3256807357737339.html) 

ArmSoM Taobao shop: [https://item.taobao.com/item.htm?id=824930133991](https://item.taobao.com/item.htm?id=824930133991)

OEM&ODM, please contact: sales@armsom.org
