/**
 * Merges English docs front matter into i18n copies so every locale has the
 * same keys as docs/*.md (id, slug, sidebar_position, etc.).
 *
 * Preserves existing locale title, description, and keywords when present.
 * If a locale file has no front matter, title is taken from the first # heading
 * after any leading import lines; description/keywords stay aligned with English
 * until translators update them.
 *
 * Usage: node scripts/sync-i18n-docs-from-en.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

function walkMd(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(base, e.name).replace(/\\/g, '/');
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkMd(p, rel));
    else if (e.name.endsWith('.md')) out.push(rel);
  }
  return out;
}

function splitDoc(content) {
  if (!content.startsWith('---\n')) return { meta: null, body: content };
  const end = content.indexOf('\n---\n', 4);
  if (end === -1) return { meta: null, body: content };
  const raw = content.slice(4, end);
  let meta;
  try {
    meta = YAML.parse(raw);
  } catch {
    return { meta: null, body: content };
  }
  const body = content.slice(end + 5);
  return { meta, body };
}

function orderMeta(meta) {
  const order = ['id', 'title', 'description', 'keywords', 'slug', 'sidebar_position'];
  const out = {};
  for (const k of order) {
    if (meta[k] !== undefined && meta[k] !== null) out[k] = meta[k];
  }
  for (const k of Object.keys(meta)) {
    if (!(k in out)) out[k] = meta[k];
  }
  return out;
}

function serializeDoc(meta, body) {
  const yamlStr = YAML.stringify(orderMeta(meta), {
    lineWidth: 0,
    defaultStringType: 'QUOTE_SINGLE',
    defaultKeyType: 'PLAIN',
  }).trim();
  return `---\n${yamlStr}\n---\n${body}`;
}

function firstMarkdownH1(body) {
  for (const line of body.split(/\r?\n/)) {
    const t = line.trim();
    if (!t) continue;
    if (t.startsWith('import ')) continue;
    const m = t.match(/^#\s+(.+)$/);
    return m ? m[1].trim() : null;
  }
  return null;
}

const docs = walkMd(path.join(ROOT, 'docs'));
const locales = ['zh', 'ko', 'ja'];
let updated = 0;

for (const rel of docs) {
  const enPath = path.join(ROOT, 'docs', rel);
  const enText = fs.readFileSync(enPath, 'utf8');
  const en = splitDoc(enText);
  if (!en.meta) continue;

  for (const locale of locales) {
    const locPath = path.join(
      ROOT,
      'i18n',
      locale,
      'docusaurus-plugin-content-docs',
      'current',
      rel,
    );
    if (!fs.existsSync(locPath)) continue;

    const locText = fs.readFileSync(locPath, 'utf8');
    const parsed = splitDoc(locText);

    const merged = { ...en.meta };
    if (parsed.meta) {
      for (const k of ['title', 'description', 'keywords']) {
        if (parsed.meta[k] !== undefined && parsed.meta[k] !== null) {
          merged[k] = parsed.meta[k];
        }
      }
    } else {
      const h1 = firstMarkdownH1(parsed.body);
      if (h1) merged.title = h1;
    }

    const next = serializeDoc(merged, parsed.body);
    if (next !== locText) {
      fs.writeFileSync(locPath, next, 'utf8');
      updated++;
    }
  }
}

console.log(`Updated ${updated} locale file(s).`);
