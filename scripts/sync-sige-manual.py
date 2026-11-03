from pathlib import Path
import re,unicodedata
ROOT=Path(__file__).resolve().parents[1]
def slug(s):
 s=re.sub(r'<[^>]*>','',s).lower();return ''.join(c for c in s if c in '-_ ' or unicodedata.category(c)[0] in 'LN').replace(' ','-')
for lang,base in [('en','docs'),('zh','i18n/zh/docusaurus-plugin-content-docs/current')]:
 root=ROOT/base
 source=(root/'main/Getting Started/sige-family-started.md').read_text(encoding='utf-8')
 body=source[source.index('\n# ')+1:];lines=body.splitlines(keepends=True);fence=False;counts={};mapping={};out=[]
 for line in lines:
  if line.startswith('```'):fence=not fence
  m=re.match(r'^(#{1,6})\s+(.+?)\s*$',line) if not fence else None
  if m:
   title=m[2];old=slug(title);n=counts.get(old,0);counts[old]=n+1;old=old+('-'+str(n) if n else '');new='sige-manual-'+old;mapping[old]=new
   line='#'*min(6,len(m[1])+1)+' '+title+' {#'+new+'}\n'
  out.append(line)
 body=''.join(out).replace('id="doc-section-','id="sige-manual-doc-section-').replace('href="#doc-section-','href="#sige-manual-doc-section-')
 for old,new in mapping.items():body=body.replace('](#'+old+')','](#'+new+')').replace('href="#'+old+'"','href="#'+new+'"')
 note=('以下为 Sige 系列完整使用手册。各型号接口配置不同，请结合本页硬件规格选择对应章节；原手册中的型号标注和示例保持不变。' if lang=='zh' else 'The complete Sige family manual is included below. Interfaces vary by model; use the hardware specifications on this page to select the applicable sections. Original model labels and examples are retained.')
 block='<!-- SIGE_MANUAL_START -->\n<span id="sige-manual" />\n\n:::note\n'+note+'\n:::\n\n'+body+'\n<!-- SIGE_MANUAL_END -->\n\n'
 for model in [1,3,5,7]:
  p=root/f'main/ArmSoM Product/sige{model}.md';s=p.read_text(encoding='utf-8');s=re.sub(r'<!-- SIGE_MANUAL_START -->.*?<!-- SIGE_MANUAL_END -->\s*','',s,flags=re.S)
  card=re.search(r'<a href="(?:\./sige-family-started|#sige-manual)".*?</a>',s,re.S)
  if not card:raise RuntimeError(str(p))
  model_block=block.replace('## Sige 使用手册 {', f'## Sige{model} 使用手册 {{').replace('## Sige Family User Manual {', f'## Sige{model} User Manual {{')
  s=(s[:card.start()]+card[0].replace('./sige-family-started','#sige-manual')+s[card.end():]).rstrip()+'\n\n'+model_block
  s=s.replace('<h2>Sige使用手册</h2>', f'<h2>Sige{model} 使用手册</h2>').replace('<h2>Sige User Manual</h2>', f'<h2>Sige{model} User Manual</h2>')
  p.write_text(s,encoding='utf-8');print(p.name,lang)
