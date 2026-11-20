import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const channels = {
  'www.armsom.org': {
    icon: 'globe',
    zh: '了解开发板与核心板产品，查看硬件方案、规格和购买渠道。',
    en: 'Explore boards, compute modules, hardware specifications and purchasing options.',
  },
  'blog.armsom.org': {
    icon: 'book',
    zh: '阅读开发教程、项目实践与产品更新，寻找下一步的开发灵感。',
    en: 'Read development tutorials, project stories and product updates.',
  },
  'forum.armsom.org': {
    icon: 'chat',
    zh: '搜索已有讨论，分享使用经验，发布问题与调试日志。',
    en: 'Search discussions, share your experience and post questions with debugging logs.',
  },
  'discord.com': {
    icon: 'chat',
    zh: '加入开发者交流群，交流项目想法、使用心得与开发进展。',
    en: 'Join the developer chat to exchange project ideas, tips and progress.',
  },
  'github.com': {
    icon: 'code',
    zh: '获取开源代码，查看项目更新，通过 Issue 和 Pull Request 参与协作。',
    en: 'Browse source code and updates, report issues and contribute pull requests.',
  },
  'twitter.com': {
    icon: 'news',
    zh: '关注产品发布、活动消息和社区项目的简短动态。',
    en: 'Follow product launches, event announcements and community highlights.',
  },
  'mastodon.social': {
    icon: 'news',
    zh: '在开放社交平台关注 ArmSoM，交流开源硬件与开发动态。',
    en: 'Connect with ArmSoM on the open social web for hardware and development news.',
  },
  'space.bilibili.com': {
    icon: 'video',
    zh: '观看中文演示视频与操作教程，直观了解产品和项目效果。',
    en: 'Watch Chinese-language demos and tutorials showing products and projects in action.',
  },
};

const paths = {
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20 M2 12h20 M12 2c-5 5-5 15 0 20 M12 2c5 5 5 15 0 20',
  book: 'M12 5v15 M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1',
  chat: 'M4 3h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-6 4V4a1 1 0 0 1 1-1 M7 8h10 M7 12h6',
  code: 'm8 6-6 6 6 6 M16 6l6 6-6 6 M14 3l-4 18',
  news: 'M4 3h16v18H4z M8 7h8 M8 11h8 M8 15h3 M8 18h8',
  video: 'M3 6h18v15H3z M8 2l4 4 4-4 M10 10l5 3-5 3z',
};

export default function CommunityCards({items}) {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const language = currentLocale === 'zh' ? 'zh' : 'en';
  return (
    <div className="armsom-community-links">
      {items.map(item => {
        const host = new URL(item.href).hostname;
        const channel = channels[host];
        return (
          <a key={item.href} className="card armsom-community-card" href={item.href} target="_blank" rel="noopener noreferrer">
            <div className="armsom-community-card__heading">
              <span className="armsom-community-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={paths[channel?.icon ?? 'globe']} />
                </svg>
              </span>
              <h3>{item.label}</h3>
            </div>
            <p>{channel?.[language] ?? (language === 'zh' ? '访问此平台，了解 ArmSoM 的更多资讯。' : 'Visit this channel for more from ArmSoM.')}</p>
            <span className="armsom-community-card__destination">
              <span>{host}</span><span aria-hidden="true">↗</span>
              <span className="sr-only">{language === 'zh' ? '（在新标签页打开）' : ' (opens in a new tab)'}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
