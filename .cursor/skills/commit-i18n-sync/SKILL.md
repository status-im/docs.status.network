---
name: commit-i18n-sync
description: >-
  Read the latest 5 commits in this repository and synchronize Docusaurus i18n
  translations across configured locales. Use when the user asks to sync
  translations after recent updates, audit i18n drift, or align locale files
  with newly changed docs/sidebar/navbar/footer content.
---

# Commit i18n Sync

## Purpose

Keep localized docs in sync with recent repository changes by inspecting the
latest 5 commits, then updating Docusaurus i18n translation surfaces for all
non-default locales.

This skill must translate updated English content into each locale. It is not
a "copy English into i18n files" workflow.

## When to Use

Use this skill when the user asks to:

- sync translations after recent commits
- update i18n for latest docs/config/sidebar changes
- audit translation drift after recent merges

## Workflow

Copy and track this checklist:

```text
- [ ] Read latest 5 commits
- [ ] Identify i18n-impacting file changes
- [ ] Discover locales from docusaurus.config
- [ ] Diff EN content changes from latest 5 commits
- [ ] Sync sidebar keys in current.json per locale
- [ ] Sync translated doc content (not only file presence)
- [ ] Translate updated EN sections into each locale
- [ ] Sync navbar/footer JSON translations
- [ ] Cross-check code.json keys across locales
- [ ] Run lint diagnostics on edited files
- [ ] Summarize what changed and what remains
```

### 1) Read the latest 5 commits

Use git to gather commit metadata and changed files:

- `git log -n 5 --oneline`
- `git show --name-only --pretty=format: <sha>` for each commit, or
- `git diff --name-only HEAD~5..HEAD`

Focus on changes under:

- `docs/`
- `sidebars.ts`
- `docusaurus.config.ts`
- `i18n/`

Build a changed file set from these commits and prioritize syncing only those
paths first.

### 2) Discover configured locales

Read `docusaurus.config.ts` and extract `i18n.locales`.
Ignore `defaultLocale` (usually `en`).

### 3) Diff EN content changes from latest 5 commits

Use `git diff` to inspect English source content changes:

- For each changed doc: `git diff HEAD~5..HEAD -- docs/<path>.md`
- For config/sidebar: `git diff HEAD~5..HEAD -- sidebars.ts docusaurus.config.ts`

Capture what changed in content, such as:

- heading/title rewrites
- added/removed sections
- updated lists, links, commands, addresses, chain IDs, or network names
- metadata/frontmatter updates

Do not stop at "file exists." You must compare meaning and update localized
content to match the latest English intent.

Do not keep updated sections in English inside locale docs unless the text is a
proper noun, code identifier, command, URL, or contract/address literal.

### 4) Sync sidebar labels (`current.json`)

From `sidebars.ts`, collect all labels from:

- `type: 'category'` -> key `sidebar.<sidebarName>.category.<label>`
- `type: 'doc'` -> key `sidebar.<sidebarName>.doc.<label>`
- `type: 'link'` -> key `sidebar.<sidebarName>.link.<label>`

For each locale file:

- `i18n/<locale>/docusaurus-plugin-content-docs/current.json`

Add missing keys and remove stale keys only when their source sidebar item was removed.

### 5) Sync translated doc pages and content

Compare source docs against localized docs:

- Source: `docs/**/*.md` and `docs/**/*.mdx`
- Locale target: `i18n/<locale>/docusaurus-plugin-content-docs/current/**`

For each changed English doc:

1. Ensure localized file exists at matching path.
2. Compare localized file content with updated English source.
3. Translate and sync changed sections so structure and meaning match:
   - keep frontmatter fields aligned
   - keep heading structure aligned
   - preserve code blocks/commands unless localization is needed
   - update values that should not drift (URLs, contract addresses, IDs)
   - translate prose, warnings, steps, and explanatory text into the locale

For missing localized files, scaffold with translated frontmatter/title and a
short placeholder body only if full translation is not possible immediately.
Prefer complete translation when feasible.

Never replace a localized doc with raw English content as a shortcut.

### 6) Sync navbar and footer content

Check navigation/footer labels defined in `docusaurus.config.ts`, then ensure
keys exist in:

- `i18n/<locale>/docusaurus-theme-classic/navbar.json`
- `i18n/<locale>/docusaurus-theme-classic/footer.json`

Add missing keys with localized messages and update existing messages when the
English source label text changed in recent commits.

### 7) Sync theme strings (`code.json`)

Cross-check key sets across locale files:

- `i18n/<locale>/code.json`

Ensure all locales contain the same keys unless an intentional locale-specific
override is documented.

If existing keys changed in English source strings, update locale messages for
those keys as well.

### 8) Validate and report

- Run lint diagnostics on edited files.
- Report:
  - files changed
  - missing items found and fixed
  - content sections translated/synced per locale
  - any untranslated placeholders left intentionally

If any locale section remains in English, call it out explicitly in the report
with a reason.

## Translation Conventions

- Keep emoji prefixes unchanged (for example `🤝`, `🌉`, `🧪`).
- Prefer natural, user-facing wording in each locale.
- Keep key names and `description` fields consistent with Docusaurus format.
- Translate user-facing prose; keep technical literals unchanged:
  - keep: code snippets, CLI commands, env vars, URLs, addresses, chain IDs
  - translate: headings, paragraphs, warnings, list explanations, UI guidance
