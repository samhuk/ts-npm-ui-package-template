# ts-npm-ui-package-template

This is a template repository for a Typescript NPM package for one or more UI components. It contains Typescript, ESLint, Jest and VSCode integrations with an ultra-fast hot-reloading demo site to showcase your delightful creations.

If you instead desire a full web application template, see [web-app-template](https://github.com/samhuk/web-app-template). If you instead desire a non-UI Typescript NPM package template, see [ts-npm-package-template](https://github.com/samhuk/ts-npm-package-template).

## Usage

1. Click the "**Use Template**" button on Github to create your own repository from this template
2. Locally clone your new remote Github repository
3. From the root directory of your new local clone, run `node setup.js`, entering in some details.
4. After it completes, you can remove `setup.js`.
5. Run `npm start` and navigate to http://localhost:8080
6. For information on how to develop on your new codebase, see [./contributing/development.md](./contributing/development.md)
7. Have fun!

This template is approximately based off of a mixture of [ts-npm-package-template](https://github.com/samhuk/ts-npm-package-template) and [web-app-template](https://github.com/samhuk/web-app-template). Therefore, feel free to take a look at those to see how this template can be expanded upon.

If you found this delightful, feel free to [buy me a coffee](https://www.buymeacoffee.com/samhuk) ✨

---

<h1 align="center">{{package-name}}</h1>
<p align="center">
  <em>{{package-slogan}}</em>
</p>

> Badges like license type, current build status, and npm package version info can go here. Uncomment the HTML below within this README to show them.

<!-- <p align="center">
  <a href="https://github.com/{{github-user-name}}/{{package-name}}/actions/workflows/ci.yaml/badge.svg" target="_blank">
    <img src="https://github.com/{{github-user-name}}/{{package-name}}/actions/workflows/ci.yaml/badge.svg" alt="ci status" />
  </a>
  <a href="https://img.shields.io/badge/License-MIT-green.svg" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="license" />
  </a>
  <a href="https://badge.fury.io/js/{{npm-package-name}}.svg" target="_blank">
    <img src="https://badge.fury.io/js/{{npm-package-name}}.svg" alt="npm version" />
  </a>
</p> -->

## Overview

> Provide a quick overview of what your package does.

> An image of what the UI component looks like goes a long way. An image of the example component has been included:

![example-component-image](img/example-component.png)

> If it is a large package, put a "Getting Started" wiki page link here.

## Usage Overview

> Briefly show what using your package looks like. Try to omit as much configuration as possible as your package wiki can detail that.

## Importing Styles

There are two main ways the styles of the component can be imported into your package. One can either:

1. `import` the css bundle file in your Typescript or Javascript (this is supported by all main bundlers like webpack and esbuild):
    ```typescript
    // Import the css bundle file
    import 'node_modules/{{npm-package-name}}/dist/styles.css'
    ```
2. `@import` the css bundle file in your SCSS:
    ```scss
    // Import the css bundle file
    @import 'node_modules/{{npm-package-name}}/dist/styles.css';
    ```

## Examples

> Mention where any usage examples are, either within the repository or externally hosted.

## Development

See [./contributing/development.md](./contributing/development.md)

---

> If desired, briefly mention any donation links here. Here's Buy Me a Coffee as an example:

If you found this package delightful, feel free to buy me a coffee ✨

<a href="https://www.buymeacoffee.com/{{buy-me-a-coffee-user-name}}" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
