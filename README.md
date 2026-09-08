# ewpalmer0707.github.io

My personal landing page: a hub for my resume, LinkedIn, and project write-ups.
Live at https://ewpalmer0707.github.io.

## Why it's built this way

- **Plain HTML + one CSS file, no framework, no build step.** The page has one job (point people to my work), and a static page loads instantly, costs nothing to host, and stays readable to anyone who opens the repo. I'll add tooling only when the site needs it.
- **GitHub Pages hosting.** Free, tied to the GitHub profile employers will already be looking at, and deploys on every push to `main`.
- **Content mirrors my resume and LinkedIn.** Same titles, dates, and numbers everywhere so nothing has to be reconciled later.

## How I used AI

I scaffolded the first version of the page with Claude Code from my resume and LinkedIn content, then reviewed every section by hand for accuracy and tone. Design choices (navy palette matching my LinkedIn banner, system fonts, single page with anchored sections) were mine; the AI produced the initial markup and CSS from that direction. Anything that reads as a claim about me was checked against the resume before publishing.

## Editing

- `index.html` — all content.
- `style.css` — all styling. Colors are CSS variables at the top.
- `assets/` — headshot and resume PDF. Replace `Elijah-Palmer-Resume.pdf` whenever the resume changes.

Open `index.html` in a browser to preview locally. Push to `main` to deploy.
