# Pontora Marketing Website

A premium, modern, and highly optimized marketing and landing website built on **Astro v6**, **React**, **Tailwind CSS v4**, and **MDX**. 

This repository leverages a fully modular, section-based frontmatter schema structure that enables you to add, configure, and reorder sections dynamically from your markdown content folders.

---

## 🚀 Key Features

* **Modular MDX Architecture**: Re-order, toggle, or customize sections (Home, About, Contact, Pricing, and Blog pages) directly from the frontmatter arrays under `src/content/`.
* **Technical SEO & AI-Ready**:
  * Automatically forwards `alt` properties to `title` attributes on all `<ImageMod />` calls for WCAG and search engine crawlability.
  * Injected **JSON-LD Structured Data** (`WebSite`, `Organization` on Home, and dynamic absolute-path `BlogPosting` on posts).
  * Served AI visibility vector (`/llms.txt`) at the root for LLM crawlers (Gemini, ChatGPT Search, Perplexity).
  * Sitemap indexation, robots.txt, and permanent `vercel.json` redirects configured.
* **Modern Style System**: Configured with Tailwind CSS v4 and dynamic theme bindings mapping to custom font assets and CSS color tokens.
* **High Performance**: 100/100 Lighthouse compatibility via Astro's asset pipeline, responsive image compression, and deferred font loading.

---

## 🛠️ Getting Started

First, make sure you have [Node.js](https://nodejs.org/) installed (v20+ recommended).

### 1. Install Dependencies
```bash
yarn install
# or
npm install
```

### 2. Start the Development Server
```bash
yarn dev
# or
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to preview the site.

### 3. Build for Production
Compiles optimized static HTML files under the `/dist` directory.
```bash
yarn build
# or
npm run build
```

### 4. Preview the Production Build Locally
```bash
yarn preview
# or
npm run preview
```

---

## 📁 Project Structure

```text
├── src/
│   ├── config/            # Core configuration files (site data, menus, styles)
│   │   ├── config.json    # Branding, metadata, URLs, navigation buttons
│   │   ├── menu.json      # Main menu and footer links setup
│   │   └── theme.json     # Custom color palettes and typography scales
│   ├── content/           # Declarative page and section content (MDX/MD)
│   │   ├── homepage/      # Sections, content mapping, CTA setups
│   │   ├── blog/          # Blog indexing schema and single posts
│   │   └── pages/         # Static policy layouts (Privacy Policy, Terms)
│   ├── layouts/           # Page templates, base frames, and section partials
│   │   ├── Base.astro     # Core template wrapper (with HTML scope metadata)
│   │   ├── components/    # Reusable widgets (ImageMod, Logo, Pagination, JsonLd)
│   │   └── partials/      # Modular section layouts (HomeBanner, CallToAction, Clients)
│   ├── pages/             # Dynamic page routes matching Astro schemas
│   └── styles/            # Custom CSS styles
├── public/                # Static assets served at the root (logos, robots.txt, llms.txt)
├── vercel.json            # Clean URLs configurations and permanent 301 redirects
├── astro.config.mjs       # Astro configurations (MDX and Sitemap setup)
└── package.json           # Scripts and package dependencies
```

---

## ⚙️ Customization Guide

### Site Branding & URLs
To update the logo text, site title, contact configurations, or base URLs, edit [src/config/config.json](file:///d:/Office/pontora-marketing-website-/src/config/config.json).

### Navigations & Menus
Add, remove, or modify links in the header navigation or footer section links inside [src/config/menu.json](file:///d:/Office/pontora-marketing-website-/src/config/menu.json).

### Colors & Typography
Update the primary, secondary, and tertiary theme colors or choose custom font stacks inside [src/config/theme.json](file:///d:/Office/pontora-marketing-website-/src/config/theme.json).

---

## 🚢 Deployment

The project is fully pre-configured for static site deployments:

### Deploying to Vercel
Standard routing redirection for sitemaps and Clean URLs are enabled via the root [vercel.json](file:///d:/Office/pontora-marketing-website-/vercel.json) file. Connect your GitHub repository to Vercel and it will build and deploy automatically on push.
