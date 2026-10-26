# ewpalmer0707.github.io

My personal site: resume, project write-ups, and essays about what I'm learning.
Live at https://ewpalmer0707.github.io.

## How it's built

- **Astro, static output, GitHub Pages.** Started as one hand-written HTML file. It moved to Astro the day it needed a second kind of page (essays). Astro renders markdown into pages at build time, so the site is still plain HTML once deployed. `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
- **Two content collections** (`src/content.config.ts`):
  - `src/content/essays/*.md` — essays. Only `status: published` entries are built. `project:` links an essay to the project that proves it.
  - `src/content/projects/*.md` — project write-ups. `essay:` links back to the essay it came from. Cards on the home page come from here.
- **`src/content/` is an Obsidian vault.** Open it in Obsidian to edit essays; `.obsidian/` is git-ignored.
- **Essays start as handwriting.** I write on an iPad in Apple Notes, export to iCloud Drive/Learning/inbox, and [learning-pipeline](https://github.com/ewpalmer0707/career-booster) transcribes each scan into a draft here. I edit, flip `status: published`, push.

## Working on it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
```

Requires Node ≥ 22.23 (`nvm use 22`).

- `src/pages/index.astro` — home page content (about, experience, contact).
- `src/layouts/Base.astro` — nav, footer, `<head>`.
- `src/styles/global.css` — all styling; colors are CSS variables at the top.
- `public/assets/` — headshot and resume PDF. Replace `Elijah-Palmer-Resume.pdf` whenever the resume changes.

## How I used AI

I scaffolded the first version with Claude Code from my resume and LinkedIn content, and later the Astro port, then reviewed every section by hand for accuracy and tone. Design choices (navy palette matching my LinkedIn banner, system fonts, single page with anchored sections) were mine. Anything that reads as a claim about me was checked against the resume before publishing. Essays are transcribed by Claude from my handwriting but the words are mine; the transcriber is told to correct spelling only and never add ideas.
