# Personal Website

A modern personal website built with Astro, featuring:

- A beautifully designed home page
- Blog section with markdown support
- Research section to showcase your work
- Outreach section for community and educational activities

## Quick Start

To run the website locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at [http://localhost:4321](http://localhost:4321)

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate static files in the `dist` directory that you can deploy to any static hosting service.

## Adding Blog Posts

Blog posts are written in Markdown and stored in the `src/content/blog` directory.

To add a new blog post:

1. Create a new `.md` file in the `src/content/blog` directory
2. Add the required frontmatter at the top of the file:

```md
---
title: "Your Post Title"
publishDate: 2023-12-25
excerpt: "A brief summary of your post that will appear in the blog list"
image: "https://example.com/your-image.jpg" # Optional
tags: ["tag1", "tag2"] # Optional
---

Your markdown content here...
```

3. Write your content in Markdown format below the frontmatter

## Customizing the Site

### Home Page

Edit `src/pages/index.astro` to customize the home page content.

### Research and Outreach Pages

Edit `src/pages/research.astro` and `src/pages/outreach.astro` to update your research projects and outreach activities.

### Layout and Styling

- Main layout: `src/layouts/Layout.astro`
- Blog post layout: `src/layouts/BlogPostLayout.astro`
- Styling is done with Tailwind CSS

## Technologies Used

- [Astro](https://astro.build) - Static site builder
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [MDX](https://mdxjs.com) - Markdown with JSX support

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
