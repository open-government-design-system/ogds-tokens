# Open Government Design Tokens

This project contains design tokens based on the United States Web Design System (USWDS). The two main goals of this work are to:

1. Ensure that critical design resources remain available at a time when USWDS faces an uncertain future; and
2. Modernize and extend USWDS's token system to align it with modern tooling while still preserving compatibility with older codebases.

## Getting started

This repo contains both CSS custom property and SCSS versions of the tokens already built, so if those meet your needs, you can either clone this repository or install the package via npm:

```sh
npm install @ogds/tokens
```

If you make changes to the JSON source, you can rebuild the tokens with:

```sh 
npm run build
```

Running the build command this way will give you tokens that use the default `ogds-` prefix. However, you can configure the prefix using the `TOKEN_PREFIX` environment variable:

```sh 
TOKEN_PREFIX=usa npm run build    # emits tokens like ---usa-theme-color-error
```

## Usage

Because this package inlcudes the compiled (S)CSS versions of the tokens, using them in your project can be as straightforward as dragging the built styles out of `/build/css` or `/build/scss` and dropping them into your project.

If you are using a build tool (like Vite or similar), you can import the styles straight from the `node_modules` folder into your component, as in this example taken from the [OGDS Elements banner component](https://github.com/open-government-design-system/ogds-elements/blob/3f8e373ac6695d7534becf3ecfbefe747f237ccc/src/components/usa-banner/index.ts#L5):

```js 
import colorTokens from "@ogds/tokens/styles/css/colors.css";
import spacingTokens from "@ogds/tokens/styles/css/spacing.css";
import breakpointTokens from "@ogds/tokens/styles/css/breakpoints.css";
```
