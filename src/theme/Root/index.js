import React from 'react';
import {useLocation} from '@docusaurus/router';
import ContactDock from '@site/src/components/ContactDock';

export default function Root({children}) {
  const {pathname} = useLocation();
  const zh = pathname.startsWith('/zh');
  return <>{children}<details className="preview-contact"><summary>{zh ? '联系我们' : 'Contact us'} <span aria-hidden="true">↗</span></summary><ContactDock /></details></>;
}