## [Parcel](https://parceljs.org/) 📦

Parcel as a bundler does a lot of things for us, which eventually makes the project faster and ready for production, comprising of:

1. Dev Build
2. Error Handling
3. Hosting on HTTPS
4. Bundling the app
5. Code Splitting ✅
6. Content Hashing ✅
7. Image Optimizations ✅
8. Local Server for building
9. Caching (.parcel-cache) ✅
10. Tree Shaking: Removing unused codes ✅
11. Different bundles for Dev and Production
12. Hot Module Replacements (HMR) ✅
    12.1. File Watching Algorithm ( Written in C++)
13. Differential Bundling: Supporting older browser ✅
14. Compression: Compressing the bundle comes with tools like Gzip or Brotli, which is done by parcel on the fly.
15. Minification: Using various minifiers to remove whitespaces, renaming variables to shorter names, etc to reduce bundle size ✅

**A. Hot Module Replacements**

- It is a process by which a module (javascript file) in JavaScript gets updated without having to reload the whole application on the browser.
  Only happens in the development mode, and not in production mode.
- It does this by watching the files on the open server (websocket), and replacing the changed file only and delivering to the browser, leading
  to faster change loads, and also presevering the state.
- State preservation means, the whole application is not getting refreshed, and only the changes which is required to reflect the change, updates.
- The changes happens real-time, and very quick, making the Developer Experience (DX) very smooth.

**B. Content Hashing**

- Parcel does few things to improve browser and CDN caching, for performant applications, such as: **Content Hashing**, **Manifest Mapping**,
  and **Share bundles**.
- Content Hashing allows parcel to have hash name added to the name of the files, so that, it can remain there for longer time, if nothing
  changes, and only update the hash when the file/module changes. This allows better caching capabilities, and invalidations.
- To handle dependency changes for the modules which gets to change their hashes, even for a small change which happened to the leaf dependent
  module, parcle now uses manifest mapping, which maps the id to the stable build, and only invalidates the needed bundles, due to id-bundle mapping.
- Share bundles on the other hand, is an extension to code splitting part, where the modules being used repetitive like `react` or `lodash` etc, it
  keeps them stored in a separate common bundle, cached separately by the browser, and let other module fetch them from that, letting the bundler
  not to re-create those modules per files.

**C. Code Splitting**

- Code splitting is a method by which the bundler bundles module in separate bundles, and load it parallely, or on demand, leading to faster load time,
  and performance.

**D. Differential Bundling**

- Parcel automatically generates different bundles for browser based upon the compatibility it has with the ES Module.
- For example, if the browser doesn't supports ES module `<script type="module">`, then parcel generates a fallback script
  `<script nomodule>` supported by the legacy browsers to load what is needed. Eventually helping the load to be reduced
  on the single bundle.
- The dependency is on the [browserslist](https://github.com/browserslist/browserslist) object which you mention in the `package.json`.
  It looks into it, and generates the file accordingly.

**E.** [Image Optimisations](https://parceljs.org/recipes/image/) 🔗

- Image optimisation in parcel is done automatically to reduce the size, convert it and make it optimised for the web to perform better.
- Under the hood it is done by Sharp library, which is a Node.js built tool for image optimisations.
- Usage of `.webp` format is recommended, as it is supported by majority of the browsers and it is lossless. Which means it doesn't compromise
  on quality of the image when compressed. Other alternative is `.png`.
- If you would like to control your image optimisation, you can do so via `sharp.config.js` or provide query params in `src` or `srcset` of your
  <img> or <picture> in HTML. For query params, you can use the following: HEIGHT, WIDTH, AS, QUALITY

```HTML5
  <picture>
    <source srcset="image.jpeg?as=avif&width=800" type="image/avif" />
    <source srcset="image.jpeg?as=webp&width=800" type="image/webp" />
    <source srcset="image.jpeg?width=800" type="image/jpeg" />
    <img src="image.jpeg?width=200" alt="test image" />
  </picture>
```

## dist/ Folder 📂

- `dist/` folder is the folder which is the final generated output via `parcel build index.html` of your project, ready to be deployed to
  the web hosting platforms.
- It contains the minified, hashed, compressed, optimised version of the existing HTML, CSS, JS, and map files to be published to Production.
  - The HTML file contains the minified and rewritted hashed asset files. It means, it means while minification, files like JS, and other assets
    gets renamed with hashed via content hashing for longer caching capabilities.
  - The JS/TS files get traspiled, minfied, and tree shaken.
  - The images/fonts/css are minfied and compressed according to the need.

## ^ - caret and ~ - tilda

- `^` in versioning of the package in your `package.json` dependencies or devDependencies lets the system know that, we need to update the minor
  version automatically only, and not the major. By minor we mean: `1.2.3`, 3 here is the minor one, which doesn't usually contains breaking changes.
- `~` on the other hand, tells the system that auto update to the major changes, which is, `1.2.3` -> `2.2.3`. This is big, and it can contain breaking
  changes, so we have to be mindful of that, and usually consider **caret** as a safer option.
