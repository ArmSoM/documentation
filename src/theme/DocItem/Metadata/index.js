import React from 'react';
import Head from '@docusaurus/Head';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';

const SITE_URL = 'https://docs.armsom.org';
const DEFAULT_IMAGE = '/img/armsom-social-card.png';

function absoluteUrl(value) {
  if (!value) return undefined;
  return value.startsWith('http') ? value : `${SITE_URL}${value}`;
}

function createSchema(metadata, frontMatter, assets) {
  const url = absoluteUrl(metadata.permalink);
  const image = absoluteUrl(assets.image ?? frontMatter.image ?? DEFAULT_IMAGE);
  const common = {
    '@context': 'https://schema.org',
    name: metadata.title,
    description: metadata.description,
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
  const schema = createSchema(metadata, frontMatter, assets);

  return (
    <>
      <PageMetadata
        title={metadata.title}
        description={metadata.description}
        keywords={frontMatter.keywords}
        image={assets.image ?? frontMatter.image}
      />
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
    </>
  );
}
