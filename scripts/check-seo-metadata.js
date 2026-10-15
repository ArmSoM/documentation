const fs = require('fs');
const path = require('path');

const contentRoots = ['docs', 'blog', 'i18n'];
const ignoredDirectories = new Set(['node_modules', 'build', '.docusaurus']);
const missing = [];

function visit(directory) {
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) visit(path.join(directory, entry.name));
      continue;
    }
    if (!entry.name.endsWith('.md') && !entry.name.endsWith('.mdx')) continue;

    const file = path.join(directory, entry.name);
    const source = fs.readFileSync(file, 'utf8');
    const frontMatter = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
    if (!frontMatter) {
      missing.push(`${file}: missing front matter`);
      continue;
    }
    if (!/^description:\s*\S+/m.test(frontMatter[1])) {
      missing.push(`${file}: missing description`);
    }
  }
}

for (const root of contentRoots) {
  const absoluteRoot = path.join(process.cwd(), root);
  if (fs.existsSync(absoluteRoot)) visit(absoluteRoot);
}

if (missing.length) {
  console.warn(`SEO metadata audit found ${missing.length} issue(s):`);
  console.warn(missing.join('\n'));
  process.exit(0);
}

console.log('SEO metadata check passed.');
