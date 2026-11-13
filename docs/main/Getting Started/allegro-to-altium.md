---
description: "Import ArmSoM Allegro PCB files into Altium Designer: BRD prerequisites, ALG conversion, import steps and checks."
keywords: [ArmSoM, Allegro, Altium Designer, PCB, BRD, ALG]
image: /img/armsom-social-card.png
sidebar_label: "Allegro to Altium"
sidebar_position: 19
slug: /getting-start/allegro-to-altium
---

# Import Allegro PCB files into Altium Designer

ArmSoM provides Allegro hardware designs. Download the matching product and PCB revision from [Hardware resources](./1.cloud-disk.md). Work on a copy; retain the original as your reference.

## Choose a workflow

| Files / tools available | Workflow |
| --- | --- |
| `.brd` + licensed Allegro/Extracta | Convert locally or on another Allegro workstation |
| `.alg` + Altium | Import the ASCII file directly |
| `.brd` + Altium only | Obtain an `.alg` conversion first |

PCB import does not recreate the schematic from a PDF.

## Convert when necessary

On the licensed Allegro workstation, put the board and Altium's `System/Allegro2Altium.bat` in a working folder. Before AD 26.1, also include matching `AllegroExportViews.txt` and `AllegroPackageExportViews.txt`. In Command Prompt run:

```bat
Allegro2Altium.bat "board.brd"
```

Copy the resulting `board.brd.alg` to the Altium workstation. Check `extract.log` on failure. Extracta must support the source file version; the official importer documentation currently lists support through Allegro 17.4. See [conversion prerequisites and troubleshooting](https://www.altium.com/documentation/knowledge-base/altium-designer/import-allegro-files-to-altium).

## Import and review

1. Enable Altium's Allegro importer.
2. Select **File → Import Wizard → Allegro Design Files**.
3. Add `.alg`, or `.brd` when licensed Allegro is available locally.
4. Include `.DCFX` constraints if supplied; review layer mapping and output location.
5. Finish and inspect the generated `.PcbDoc` and translation log.

Compare board outline, holes, layers, pad numbers and critical connections against the original. Before manufacturing, review constraints and run design-rule checks; opening successfully is not manufacturing validation.

See [Altium's import guide](https://www.altium.com/documentation/altium-designer/design-tools-interfacing/allegro-import). This workflow has not been conversion-tested on every ArmSoM design; compatibility depends on file and tool versions.
