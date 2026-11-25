import React from 'react';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import DocCardList from '@theme/DocCardList';
import CommunityCards from './CommunityCards';

// Keep titles, descriptions, links and order in the sidebar/document metadata.
// Unclassified entries appear in the last group so new documents stay visible.
const groups = {
  products: {
    sige: /^sige/,
    aim: /^aim/,
    modules: /^(cm|lm)/,
    other: /.*/,
  },
  'getting-start': {
    setup: /^(cloud-disk|flash-img|name|board-startup)$/,
    connection: /^(startup-network|vnc-connect|file-cross-trans)$/,
    system: /^(apt-update-sourcelist|apt-update-kernel-packet|armbian-config-tool|config-file_and_device-tree|check-board-information|overlay|ubuntu-rockchip)$/,
    development: /.*/,
  },
  'interface-usage': {
    buses: /^(1_40pin|gpio|I2c|can|uart|pwm|spi)$/,
    multimedia: /^(hp|camera|screen|hdmi-in)$/,
    storage: /^(ethernet|pcie|sdcard)$/,
    management: /.*/,
  },
  'advanced-manual': {
    system: /^(rockchip-boot|armsom-camera)$/,
    ai: /^(rknn-llm|rknn)$/,
    multimedia: /^(ffmpeg|opencv-mpp-preview|rockchip-video-codec)$/,
    applications: /.*/,
  },
  'build-system-image': {
    sdk: /^(armsom-sdk|android-sdk)$/,
    deployment: /.*/,
  },
  accessories: {
    imaging: /^(camera-module1|display-10-hd|display-7-hd)$/,
    cooling: /^(sige-active-cooling-kit|sige-diy-case1)$/,
    storage: /.*/,
  },
  community: {
    news: /^https:\/\/(www|blog)\.armsom\.org\//,
    support: /^https:\/\/(forum\.armsom\.org|discord\.com|github\.com)\//,
    social: /.*/,
  },
};

export default function CategoryDocCards({section, group}) {
  const {items} = useCurrentSidebarCategory();
  const rules = Object.entries(groups[section]);
  const selected = items.filter(item => {
    const key = item.docId?.split('/').pop() ?? item.href ?? '';
    return rules.find(([, pattern]) => pattern.test(key))?.[0] === group;
  });
  return (
    <div className="armsom-category-overview">
      {section === 'community' ? <CommunityCards items={selected} /> : <DocCardList items={selected} />}
    </div>
  );
}
