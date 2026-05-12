# ronitkapur.org

Source for my personal site. Built with [Astro](https://astro.build) and Tailwind, deployed to [ronitkapur.org](https://ronitkapur.org) via GitHub Pages.

## Local dev

```bash
npm install
npm run dev     # localhost:4321
npm run build   # static output to dist/
```

## Adding a blog post

Drop a markdown file in `src/content/blog/` with frontmatter:

```md
---
title: "Post Title"
publishDate: 2026-01-01
excerpt: "One-line summary shown on the index."
tags: ["tag1", "tag2"]
---
```

Math is supported via `remark-math` + KaTeX (inline `$...$`, display `$$...$$`).
