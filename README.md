# ArmSoM Documentation

Official documentation for ArmSoM Rockchip single-board computers (SBCs) and system-on-modules (SoMs): hardware specifications, Linux setup, interface guides, and edge AI tutorials.

ArmSoM 官方文档：涵盖 Rockchip 单板计算机与核心板的硬件规格、Linux 系统安装、接口使用及边缘 AI 开发。

[English documentation](https://docs.armsom.org/) · [中文文档](https://docs.armsom.org/zh/) · [ArmSoM website](https://www.armsom.org/) · [Community forum](https://forum.armsom.org/)

## Explore the documentation / 文档导航

| Topic / 主题 | English | 中文 |
| --- | --- | --- |
| Products and tutorials / 产品与教程 | [Documentation home](https://docs.armsom.org/) | [文档首页](https://docs.armsom.org/zh/) |
| Images and resources / 系统镜像与资料 | [Downloads](https://docs.armsom.org/getting-start/cloud-disk) | [资料下载](https://docs.armsom.org/zh/getting-start/cloud-disk) |
| RKNN development / RKNN 开发 | [RKNN SDK](https://docs.armsom.org/advanced-manual/rknn-sdk) | [RKNN SDK 教程](https://docs.armsom.org/zh/advanced-manual/rknn-sdk) |
| News and articles / 动态与文章 | [Blog](https://docs.armsom.org/blog) | [博客](https://docs.armsom.org/zh/blog) |

The documentation covers Sige, AIM, and CM products, image flashing and startup, peripheral interfaces, system builds, and Rockchip AI development. This repository contains the documentation website source; follow the download pages for firmware and hardware resources.

文档覆盖 Sige、AIM、CM 等产品，以及镜像烧录、首次启动、外设接口、系统构建和 Rockchip AI 开发。本仓库存放文档网站源码，固件和硬件资料请通过下载页面获取。

## Local development / 本地开发

Built with Docusaurus 2.4.3 and React 17. English is the default locale; Simplified Chinese uses `/zh/`.

网站基于 Docusaurus 2.4.3 和 React 17，默认语言为英文，简体中文路径为 `/zh/`。

### Install / 安装

Install Node.js and npm first. The current `package.json` declares Node.js `>=16.14`. Use a supported Node.js version compatible with the project, and keep it consistent with your deployment environment.

请先安装 Node.js 和 npm。当前 `package.json` 声明 Node.js `>=16.14`；请使用仍受维护且兼容本项目的版本，并与部署环境保持一致。

```bash
git clone https://github.com/ArmSoM/documentation.git
cd documentation
npm ci
```

### Preview / 预览

Run either command from the repository root. The development server reloads when content changes.

在仓库根目录运行以下任一命令，修改内容后预览会自动刷新。

English / 英文：

```bash
npm run start -- --locale en
```

简体中文 / Simplified Chinese：

```bash
npm run start -- --locale zh
```

To preview both languages at once, run these in separate terminals:

需要同时预览中英文时，在两个终端分别运行：

```bash
npm run start -- --locale en --port 3000
npm run start -- --locale zh --port 3001
```

Open `http://localhost:3000/` for English or `http://localhost:3001/zh/` for Chinese. Stop each server with `Ctrl+C`.

英文访问 `http://localhost:3000/`，中文访问 `http://localhost:3001/zh/`。使用 `Ctrl+C` 停止对应预览服务。

### Build and check / 构建与检查

```bash
npm run audit:seo
npm run build
npm run serve
```

`npm run build` builds both configured languages into `build/`. `npm run serve` previews the production build locally.

`npm run build` 构建中英文两个语言版本，产物输出到 `build/`；`npm run serve` 用于在本地预览构建结果。

The metadata audit currently reports missing front matter and descriptions, but exits successfully even when it finds issues. Read its output; it is not a complete SEO or translation check. Review build warnings as well as errors.

元数据检查目前会报告缺失的 front matter 和 description，但即使发现问题也会返回成功状态。请检查输出，不能将其视为完整的 SEO 或翻译检查；构建警告也需要人工确认。

## Repository structure / 目录结构

```text
docs/                                           English documentation
i18n/zh/docusaurus-plugin-content-docs/current/  Chinese documentation
blog/                                           English blog posts
i18n/zh/docusaurus-plugin-content-blog/          Chinese blog translations
static/                                         Images and public assets
src/                                            Components, theme overrides, and styles
scripts/                                        Maintenance scripts
docusaurus.config.js                            Site and locale configuration
sidebars.js                                     Documentation navigation
```

中文文档与 `docs/` 下的英文文档保持相同的相对文件路径。图片等公共资源放在 `static/`，页面样式与主题定制位于 `src/`。

## Contributing / 参与贡献

Corrections, clearer instructions, and translation updates are welcome. For documentation issues, [open an issue](https://github.com/ArmSoM/documentation/issues) with the page URL, language, and suggested correction. For board usage questions, visit the [community forum](https://forum.armsom.org/).

欢迎修正文档错误、完善操作说明和更新翻译。文档问题请[提交 Issue](https://github.com/ArmSoM/documentation/issues)，附上页面链接、语言和修改建议；开发板使用问题可前往[社区论坛](https://forum.armsom.org/)。

Before opening a pull request / 提交 Pull Request 前：

1. Use the Chinese documentation as the reference when synchronizing translations. Update the corresponding English page, and flag technical ambiguities for review rather than guessing.
   同步翻译时以中文文档为依据，更新对应英文页面；技术内容存在疑问时请注明并确认，避免猜测。
2. Keep specifications, commands, download links, and supported software versions consistent between languages. State the board, system image, and software version used to verify a tutorial.
   保持中英文的规格、命令、下载链接和软件支持版本一致，并注明教程验证使用的开发板、系统镜像和软件版本。
3. Put metadata inside the opening YAML front matter. Write a page-specific `description`, use relevant `keywords`, and add a suitable `image` for product pages and core tutorials.
   元数据应放在文件开头的 YAML front matter 内；为每页编写准确的 `description`，使用相关的 `keywords`，并为产品页和核心教程设置合适的 `image`。
4. Preserve existing public URLs where possible. If a `slug` must change, include a redirect plan and update inbound links. Check images, links, and heading anchors in both languages.
   尽量保持已有公开链接稳定；确需修改 `slug` 时，请同时提供跳转方案并更新引用链接。检查两个语言版本的图片、链接和标题锚点。
5. Review `npm run audit:seo`, run `npm run build`, and preview the affected pages. Describe the changes and verification results in the pull request.
   检查 `npm run audit:seo` 输出，执行 `npm run build`，预览受影响页面，并在 Pull Request 中说明修改内容和验证结果。
