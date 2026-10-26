import React, {useEffect, useMemo, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  useFilteredAndTreeifiedTOC,
  useTOCHighlight,
} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

const linkClass = 'armsom-collapsible-toc-link';
const activeClass = 'table-of-contents__link--active';

export default function CollapsibleDocTOC({toc, minHeadingLevel, maxHeadingLevel}) {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const zh = currentLocale === 'zh';
  const tree = useFilteredAndTreeifiedTOC({toc, minHeadingLevel, maxHeadingLevel});
  const navRef = useRef(null);
  const lastActive = useRef(null);
  const {ancestors, branches} = useMemo(() => {
    const ancestors = new Map();
    const branches = [];
    function visit(nodes, parents = []) {
      nodes.forEach(node => {
        ancestors.set(node.id, parents);
        if (node.children.length) branches.push(node.id);
        visit(node.children, [...parents, node.id]);
      });
    }
    visit(tree);
    return {ancestors, branches};
  }, [tree]);
  const [expanded, setExpanded] = useState(() => new Set(branches));

  // Keep hidden links mounted so Docusaurus can identify the active heading.
  // Open its ancestors only when the active heading changes, allowing manual collapse.
  useEffect(() => {
    function revealActive() {
      const active = navRef.current?.querySelector(`.${activeClass}`);
      const id = active?.dataset.headingId;
      if (!id || id === lastActive.current) return;
      lastActive.current = id;
      setExpanded(previous => {
        const next = new Set(previous);
        (ancestors.get(id) || []).forEach(parent => next.add(parent));
        return next.size === previous.size ? previous : next;
      });
    }
    const observer = new MutationObserver(revealActive);
    observer.observe(navRef.current, {attributes: true, attributeFilter: ['class'], subtree: true});
    revealActive();
    return () => observer.disconnect();
  }, [ancestors]);

  const highlightConfig = useMemo(() => ({
    linkClassName: linkClass,
    linkActiveClassName: activeClass,
    minHeadingLevel,
    maxHeadingLevel,
  }), [minHeadingLevel, maxHeadingLevel]);
  useTOCHighlight(highlightConfig);

  function toggle(id) {
    setExpanded(previous => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function renderTree(nodes, nested = false, parentId) {
    return (
      <ul
        id={parentId ? `doc-toc-${parentId}` : undefined}
        className={nested ? styles.branch : styles.tree}
        hidden={nested && !expanded.has(parentId)}>
        {nodes.map(node => (
          <li key={node.id}>
            <div className={styles.row}>
              {node.children.length ? (
                <button
                  type="button"
                  className={styles.toggle}
                  aria-expanded={expanded.has(node.id)}
                  aria-controls={`doc-toc-${node.id}`}
                  aria-label={`${zh ? (expanded.has(node.id) ? '收起' : '展开') : (expanded.has(node.id) ? 'Collapse' : 'Expand')} ${node.value.replace(/<[^>]*>/g, '')}`}
                  onClick={() => toggle(node.id)}>
                  <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                    <path d="m6 3 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </button>
              ) : <span className={styles.spacer} />}
              <a
                href={`#${node.id}`}
                data-heading-id={node.id}
                className={`table-of-contents__link ${linkClass} ${styles.link}`}
                onClick={() => {
                  if (node.children.length) setExpanded(previous => new Set([...previous, node.id]));
                }}
                dangerouslySetInnerHTML={{__html: node.value}}
              />
            </div>
            {node.children.length > 0 && renderTree(node.children, true, node.id)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav ref={navRef} className={`${styles.toc} theme-doc-toc-desktop thin-scrollbar`} aria-label={zh ? '本页目录' : 'On this page'}>
      <div className={styles.header}>
        <strong>{zh ? '本页目录' : 'On this page'}</strong>
        <div className={styles.actions}>
          <button type="button" onClick={() => setExpanded(new Set(branches))}>{zh ? '全部展开' : 'Expand all'}</button>
          <button type="button" onClick={() => setExpanded(new Set())}>{zh ? '全部收起' : 'Collapse all'}</button>
        </div>
      </div>
      {renderTree(tree)}
    </nav>
  );
}
