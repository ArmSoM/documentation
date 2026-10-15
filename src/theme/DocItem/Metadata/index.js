import React from 'react';
import Head from '@docusaurus/Head';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';

const SITE_URL = 'https://docs.armsom.org';
const DEFAULT_IMAGE = '/img/armsom-social-card.png';

function isChineseDocument(metadata) {
  return metadata.permalink?.startsWith('/zh/');
}

function createFallbackDescription(metadata) {
  const title = metadata.title?.replace(/^\d+\.\s*/, '') || 'documentation';

  if (isChineseDocument(metadata)) {
    return `ArmSoM 官方技术文档：${title}。提供产品规格、配置步骤、使用说明和嵌入式开发参考。`;
  }

  return `Official ArmSoM technical documentation for ${title}. Find product specifications, configuration steps, usage guidance, and embedded development references.`;
}

function createFallbackKeywords(metadata) {
  const title = metadata.title?.replace(/^\d+\.\s*/, '') || 'documentation';

  return isChineseDocument(metadata)
    ? ['ArmSoM', title, 'Rockchip', '嵌入式 Linux', '开发板']
    : ['ArmSoM', title, 'Rockchip', 'embedded Linux', 'development board'];
}

function absoluteUrl(value) {
  if (!value) return undefined;
  return value.startsWith('http') ? value : `${SITE_URL}${value}`;
}

function createSchema(metadata, frontMatter, assets, description) {
  const url = absoluteUrl(metadata.permalink);
  const image = absoluteUrl(assets.image ?? frontMatter.image ?? DEFAULT_IMAGE);
  const common = {
    '@context': 'https://schema.org',
    name: metadata.title,
    description,
    url,
    image,
    inLanguage: metadata.permalink?.startsWith('/zh/') ? 'zh-CN' : 'en',
  };

  if (metadata.source?.includes('ArmSoM Product')) {
    return {
      ...common,
      '@type': 'Product',
      brand: {
        '@type': 'Brand',
        name: 'ArmSoM',
      },
    };
  }

  return {
    ...common,
    '@type': 'TechArticle',
    headline: metadata.title,
    author: {
      '@type': 'Organization',
      name: 'ArmSoM',
      url: 'https://www.armsom.org/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ArmSoM',
      logo: absoluteUrl('/img/logo.png'),
    },
  };
}

export default function DocItemMetadata() {
  const {metadata, frontMatter, assets} = useDoc();
  const description = frontMatter.description || createFallbackDescription(metadata);
  const keywords = frontMatter.keywords ?? createFallbackKeywords(metadata);
  const schema = createSchema(metadata, frontMatter, assets, description);

  return (
    <>
      <PageMetadata
        title={metadata.title}
        description={description}
        keywords={keywords}
        image={assets.image ?? frontMatter.image ?? DEFAULT_IMAGE}
      />
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
    </>
  );
}
