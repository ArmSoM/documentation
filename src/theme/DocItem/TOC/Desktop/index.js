import React from 'react';
import OriginalDesktopTOC from '@theme-original/DocItem/TOC/Desktop';
import {useDoc} from '@docusaurus/theme-common/internal';
import CollapsibleDocTOC from '@site/src/components/CollapsibleDocTOC';

export default function DesktopTOC(props) {
  const {frontMatter, toc, metadata} = useDoc();
  if (!frontMatter.toc_collapsible) {
    return <OriginalDesktopTOC {...props} />;
  }
  return (
    <CollapsibleDocTOC
      key={metadata.id}
      toc={toc}
      minHeadingLevel={frontMatter.toc_min_heading_level ?? 2}
      maxHeadingLevel={frontMatter.toc_max_heading_level ?? 4}
    />
  );
}
