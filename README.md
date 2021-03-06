# \<whatever-you-like-keypad>

Example keypad Web Component used in a blog post that can be found at [https://www.nexmo.com/blog/2020/08/13/creating-a-web-component-with-open-wc](https://www.nexmo.com/blog/2020/08/13/creating-a-web-component-with-open-wc)

This Web Component follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i @your-npm-username/whatever-you-like-keypad
```

## Usage
```html
<script type="module">
  import '@your-npm-username/whatever-you-like-keypad/whatever-you-like-keypad.js';
</script>

<whatever-you-like-keypad></whatever-you-like-keypad>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
