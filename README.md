# which-browser-js

[![npm version](https://badge.fury.io/js/which-browser.svg)](https://www.npmjs.com/package/which-browser)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/which-browser/blob/main/LICENSE)

The "which-browser" TypeScript package is your go-to solution for identifying the browser environment in which your client-side code is running. Whether you're working with native JavaScript or TypeScript, building a React app, or developing for other popular web frameworks, this package provides a unified and versatile solution for browser detection.

## Key Features

- **Core Functionality:** Seamlessly integrate browser detection into your native JavaScript and TypeScript projects with ease.

- **React Hooks:** Simplify browser-specific logic in your React applications with a set of hooks that make it effortless to adapt your UI and functionality based on the user's browser. (soon)

- **Framework-Agnostic:** Designed to work harmoniously with a wide range of web frameworks and libraries, ensuring compatibility across your entire web development stack.

- **Browser Compatibility Data:** Stay up-to-date with comprehensive browser compatibility data, empowering you to make informed decisions about feature support and polyfill usage.

- **Customization:** Tailor your application's behavior to specific browsers or browser versions with fine-grained control and flexibility.

## Installation

You can install the "which-browser" package using npm or yarn or pnpm:

```bash
npm install which-browser-js
# or
yarn add which-browser-js
# or
pnpm add which-browser-js
```

## Usage

**For Native JavaScript and TypeScript:**

```javascript
import { whichBrowser, isChrome } from 'which-browser-js';

const browserName = whichBrowser();
console.log(`You are using ${browserName}`);

if (isChrome(browserName)) {
  console.log('we are in Chrome :D');
}
