import React, {useEffect, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function ContactDock() {
  const {i18n} = useDocusaurusContext();
  const zh = i18n.currentLocale === 'zh';
  const [open, setOpen] = useState(false);
  const dock = useRef(null);
  const trigger = useRef(null);
  const qr = useBaseUrl('/img/contact/wechat-qr.png');
  useEffect(() => {
    if (!open) return undefined;
    const outside = (event) => {
      if (dock.current && !dock.current.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  return (
    <aside ref={dock} className={styles.dock} aria-label={zh ? '联系 ArmSoM' : 'Contact ArmSoM'}>
      {open && <section id="armsom-wechat-card" className={styles.card} aria-labelledby="armsom-wechat-title">
        <button className={styles.close} onClick={() => {setOpen(false); trigger.current?.focus();}} aria-label={zh ? '关闭微信二维码' : 'Close WeChat QR code'}>×</button>
        <span className={styles.kicker}>LET’S CONNECT</span>
        <h2 id="armsom-wechat-title">{zh ? '微信联系 ArmSoM' : 'Connect on WeChat'}</h2>
        <p>{zh ? '扫码联系 ArmSoM 技术顾问' : 'Scan to connect with an ArmSoM technical advisor'}</p>
        <img className={styles.qr} src={qr} width="411" height="402" alt={zh ? 'ArmSoM 联系微信二维码' : 'ArmSoM WeChat contact QR code'} />
        <p>{zh ? '技术支持 · 产品报价 · 样品 · ODM' : 'Technical support · Quotes · Samples · ODM'}</p>
        <a className={styles.save} href={qr} download="ArmSoM-WeChat.png">{zh ? '保存二维码 ↓' : 'Save QR code ↓'}</a>
        <p className={styles.tip}>{zh ? '手机端可保存二维码，在微信扫一扫中从相册识别。' : 'On mobile, save the QR code and select it from your photos in WeChat Scan.'}</p>
      </section>}
      <button ref={trigger} className={styles.button} aria-expanded={open} aria-controls="armsom-wechat-card" onClick={() => setOpen(!open)}>
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M13 4C6.9 4 2 7.8 2 12.5c0 2.7 1.6 5.1 4.1 6.7L5 23l4.2-2.2c.8.2 1.7.3 2.5.3a8 8 0 0 1-.7-3.3c0-4.8 4.6-8.6 10.3-8.6h1.9C21.7 6.2 17.7 4 13 4Zm-4 7a1.3 1.3 0 1 1 0-2.6A1.3 1.3 0 0 1 9 11Zm8 0a1.3 1.3 0 1 1 0-2.6A1.3 1.3 0 0 1 17 11Z"/><path fill="currentColor" d="M22 11c-4.7 0-8.5 3-8.5 6.8s3.8 6.8 8.5 6.8c.8 0 1.6-.1 2.3-.3L28 26l-.8-3.1c2-1.2 3.3-3 3.3-5.1 0-3.8-3.8-6.8-8.5-6.8Zm-3 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
        <span>WeChat</span>
      </button>
      <a className={styles.button} href="https://wa.me/8613600462877" target="_blank" rel="noopener noreferrer" aria-label={zh ? '通过 WhatsApp 联系 ArmSoM（新窗口）' : 'Contact ArmSoM on WhatsApp (new window)'}>
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 2a14 14 0 0 0-12 21.2L2 30l7-1.8A14 14 0 1 0 16 2Zm0 25a11 11 0 0 1-5.6-1.5l-.5-.3-4.2 1.1 1.1-4-.3-.5A11 11 0 1 1 16 27Zm-5-18c-.4 0-.8.2-1.1.6-.4.5-1.3 1.4-1.3 3.3s1.4 3.7 1.6 4c.2.3 2.8 4.3 6.8 5.8 3.4 1.3 4.1.8 4.8.1.7-.7 1-2 1-2.4s-.2-.5-.6-.7l-2.7-1.3c-.4-.2-.7-.2-1 .2l-1.2 1.4c-.2.3-.5.3-.9.1a10.5 10.5 0 0 1-4.8-4.2c-.3-.4 0-.6.2-.9l.8-1c.2-.3.2-.6.1-.9l-1.2-3c-.3-.6-.6-.6-1-.6Z"/></svg>
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
