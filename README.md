# Vite simple starter markup template

![screenshot](/demo/main-page.png)

On the Internet, it was difficult for me to find a simple template assembly to replace Gulp, and I decided to implement my “Simple markup template for beginners VITE” so that you can start comfortably developing simple landing pages or simple multi-pages sites. The build leverages Vite's capabilities for a modern and reliable build process.

Key features of this template:

Build Tools: Vite.js
Plugins: Autoprefixer, Imagemin, Imagemin-Webp, PostCSS Sort Media Queries, Vite plugin Image Optimizer
Styles: SCSS
Reset: Reset.css

Get your project up and running quickly with this template and start creating amazing web applications!

## Dependencies

This template uses the following dependencies:

- **[Vite](https://vitejs.dev/):** A next-generation frontend build tool that offers a fast dev server and optimized builds.
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer):** Autoprefixer automatically adds vendor prefixes to CSS.
- **[vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer):** Image optimization (png, jpeg, gif, tiff, webp, avif). 
- **[imagemin-webp](https://www.npmjs.com/package/imagemin-webp):** Converts formats such as .png/.jpg etc to .webp format
- **[postcss-sort-media-queries](https://www.npmjs.com/package/postcss-sort-media-queries):** Plugin for sorting and combining CSS media queries with mobile first / desktop first methodologies.

## Starting

1. To start using this template, clone the repository with this command:

```bash
git clone https://github.com/Grinch3214/vite-builder.git
```

2. Then rename the folder "vite-builder" and install the dependencies:

```bash
cd your-project-name
npm install
```


## Further steps

After cloning the template, make sure to clean up and update the following:

1. Remove the .git directory and run `git init` to clean the commit history.
2. Clean up the README.md file.
3. Adapt the LICENSE file to your project.
4. Delete `public/vite.svg`, folder `demo/`, `src/img/**/*`, `src/fonts/**/*` and also `src/scss/**.*` except `style.scss` and `_reset.scss`.
5. Remove unnecessary `.html` files in the `pages` folder.
6. Delete the content from `src/scss/style.scss` except `@import "reset.scss";`.
7. In the `src/js/main.js` file, leave only these import statements: `import '../scss/style.scss';`.

## Scripts

Use the following scripts for your development workflow:

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the build
npm run preview
```

## Folder Structure

This is the structure of the project:

```plaintext
/
├── node_modules            # Node.js dependencies for the project.
├── pages                   # Folder for additional .html pages
├── public                  # Public assets and resources
├── src                     # Source code
│   ├── fonts	            # Folder for your fonts
│   ├── img                 # Folder for your images
│   ├── js                  # Javascript files of your project
│   ├── scss                # SCSS styles for your project
├── .gitignore              # Files and folders to be ignored by Git
├── index.html              # The HTML file for your project
├── LICENSE                 # The license for your project
├── package-lock.json       # Lockfile for your project's dependencies
├── package.json            # Defines your project and its dependencies
├── postcss.config.cjs      # Configuration for PostCSS
├── README.md               # This file
├── vite.config.js          # Configuration for Vite
```

## License

This template was created under the [MIT License](LICENSE).

**Thank you and happy coding!** 💻