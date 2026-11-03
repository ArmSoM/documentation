import React from 'react';
import Footer from '@theme-original/Footer';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BrandedFooter(props) {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const zh = currentLocale === 'zh';
  return <div className="armsom-footer">
    <section className="armsom-footer__brand" aria-label="ArmSoM">
      <div>
        <a href="https://www.armsom.org/" aria-label={zh ? 'ArmSoM 官网' : 'ArmSoM website'}>
          <img src={useBaseUrl('/img/armsom-wordmark.png')} alt="ArmSoM" width="180" height="60" />
        </a>
        <p className="armsom-footer__tagline">Build the next embedded product, faster.</p>
        <p className="armsom-footer__description">{zh ? '开源硬件 · 核心板 · 单板计算机 · 嵌入式 Linux' : 'Open hardware · System on modules · Single-board computers · Embedded Linux'}</p>
      </div>
      <a className="armsom-footer__contact" href="mailto:sales@armsom.org">{zh ? '联系 ArmSoM' : 'Contact ArmSoM'} <span aria-hidden="true">↗</span><small>sales@armsom.org</small></a>
    </section>
    <Footer {...props} />
  </div>;
}
