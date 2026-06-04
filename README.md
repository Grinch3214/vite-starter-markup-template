# Vite Simple Starter Markup Template

![screenshot](/demo/main-page.png)

A simple, modern markup template built on Vite — designed as a comfortable replacement for Gulp when developing landing pages or small multi-page sites.

## Features

- **Build tool:** Vite v8
- **Templating:** Handlebars (partials + JSON data per page)
- **Styles:** SCSS with autoprefixer and media-query sorting
- **Images:** Auto WebP conversion, optimization for PNG/JPEG/SVG via Sharp & SVGO
- **Multi-page:** Auto-discovers all `.html` files in root and `pages/**`
- **Theme switcher:** Dark / Light mode with localStorage persistence

## Dependencies

| Package                                                                                | Purpose                                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [vite](https://vitejs.dev/)                                                            | Build tool & dev server                                      |
| [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars)      | Handlebars templating with partials and page-level JSON data |
| [sass](https://sass-lang.com/)                                                         | SCSS compilation                                             |
| [autoprefixer](https://www.npmjs.com/package/autoprefixer)                             | Vendor prefix injection                                      |
| [postcss-sort-media-queries](https://www.npmjs.com/package/postcss-sort-media-queries) | Sort & merge media queries (mobile-first)                    |
| [vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer)  | PNG / JPEG / SVG optimization on build                       |
| [sharp](https://sharp.pixelplumbing.com/)                                              | High-performance image processing backend                    |
| [svgo](https://github.com/svg/svgo)                                                    | SVG optimization                                             |
| [imagemin-webp](https://www.npmjs.com/package/imagemin-webp)                           | Converts PNG/JPG → WebP on dev server start                  |
| [fast-glob](https://github.com/mrmlnc/fast-glob)                                       | Multi-page HTML discovery                                    |

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Grinch3214/vite-builder.git
```

2. Rename the folder, then install dependencies:

```bash
cd your-project-name
npm install
```

## Scripts

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Folder Structure

```plaintext
/
├── pages/                      # Additional HTML pages
│   └── sub-page/               # Supports nested page folders
├── public/                     # Static assets (copied as-is to dist)
├── src/
│   ├── data/                   # Per-page JSON context files for Handlebars
│   │   └── index.json          # Data for index.html
│   ├── fonts/                  # Web fonts (.woff2, etc.)
│   ├── img/                    # Source images
│   │   └── webp/               # Auto-generated WebP versions (dev server)
│   ├── js/                     # JavaScript modules
│   │   ├── main.js             # Entry point
│   │   └── theme.js            # Dark/Light theme switcher
│   ├── partials/               # Handlebars partial templates (.hbs)
│   └── scss/                   # SCSS styles
│       ├── style.scss          # Main entry (imports all partials)
│       ├── _reset.scss         # CSS reset
│       ├── _vars.scss          # CSS custom properties / variables
│       ├── _mixins.scss        # SCSS mixins
│       ├── _fonts.scss         # @font-face declarations
│       ├── _global.scss        # Global styles
│       └── _main.scss          # Page-specific styles
├── .gitignore
├── index.html                  # Root page entry point
├── LICENSE
├── package.json
├── postcss.config.cjs          # PostCSS configuration
├── vite.config.js              # Vite configuration
└── README.md
```

## Handlebars Templating

The template uses [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars) for component-style HTML templating.

**Partials** live in `src/partials/` as `.hbs` files and are included via `{{> partialName}}`.

**Page data** lives in `src/data/` as JSON files. The file name must match the HTML page:

| HTML page          | Data file                   |
| ------------------ | --------------------------- |
| `index.html`       | `src/data/index.json`       |
| `pages/about.html` | `src/data/pages/about.json` |

Example usage in HTML:

```html
{{#each badges}} {{> badge}} {{/each}}
```

## Theme Switcher

A dark/light toggle is built in via `src/js/theme.js`. The selected theme is persisted in `localStorage` under the key `theme-color`. The `data-theme` attribute on `<html>` drives theming via CSS custom properties defined in `_vars.scss`.

## Image Optimization

- **Dev server:** On startup, all `src/img/**/*.{jpg,png,jpeg}` files are converted to WebP and placed in `src/img/webp/` automatically.
- **Production build:** PNG, JPEG, and SVG assets are optimized at quality 70 by `vite-plugin-image-optimizer`.

## Configuring the Base Path

If your project is hosted at a sub-path, update `rootPath` in `vite.config.js`:

```js
const rootPath = '/my-sub-path/';
```

## New Project Cleanup Checklist

After cloning, clean up the starter content:

- [ ] Remove `.git/` and run `git init`
- [ ] Update `README.md`
- [ ] Adapt `LICENSE`
- [ ] Delete `public/vite.svg`, `demo/`, `src/img/**/*`, `src/fonts/**/*`
- [ ] Remove extra `.html` files from `pages/`
- [ ] Clear `src/scss/style.scss` — keep only `@use` / `@forward` imports
- [ ] In `src/js/main.js` keep only `import '../scss/style.scss';`
- [ ] Clear `src/data/` and `src/partials/` — replace with your own

## License

Released under the [MIT License](LICENSE).

**Thank you and happy coding!** 💻
