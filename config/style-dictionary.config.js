import StyleDictionary from "style-dictionary";
import {
  generateTokenName,
  getTokenValueWithUnit,
} from "../internals/token-helpers/index.ts";

const prefix = process.env.TOKEN_PREFIX ?? "ogds";

StyleDictionary.registerTransform({
  name: "name/odgs-theme",
  type: "name",
  transform: generateTokenName,
});

StyleDictionary.registerTransform({
  name: "value/odgs-units",
  type: "value",
  transform: getTokenValueWithUnit,
});

const outputs = [
  {
    name: "breakpoints",
    filter: (token) => token.path[0] === "breakpoint",
  },
  {
    name: "colors",
    filter: (token) =>
      token.filePath && token.filePath.includes("tokens/color/"),
  },
  {
    name: "spacing",
    filter: (token) =>
      token.path[0] === "spacing" ||
      token.path[0] === "site-margins" ||
      token.path[0] === "size" ||
      token.path[0] === "column-gap" ||
      token.path[0] === "input-width" ||
      token.path[0] === "grid",
  },
  {
    name: "typography",
    filter: (token) =>
      token.filePath && token.filePath.includes("tokens/typography/"),
  },
  {
    name: "theme-color",
    filter: (token) =>
      token.filePath && token.filePath.includes("tokens/theme/color"),
  },
  {
    name: "theme-spacing",
    filter: (token) =>
      token.filePath && token.filePath.includes("tokens/theme/spacing"),
  },
  {
    name: "theme-typography",
    filter: (token) =>
      token.filePath && token.filePath.includes("tokens/theme/typography"),
  },
];

export default {
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
      transforms: ["name/odgs-theme", "value/odgs-units"],
      prefix,
      buildPath: "build/scss/",
      files: outputs.map(({ name, filter }) => ({
        destination: `_${name}.scss`,
        format: "scss/variables",
        filter,
      })),
    },
    css: {
      transforms: ["name/odgs-theme", "value/odgs-units"],
      prefix,
      buildPath: "build/css/",
      files: outputs.map(({ name, filter }) => ({
        destination: `${name}.css`,
        format: "css/variables",
        options: {
          selector: ":root, :host",
        },
        filter,
      })),
    },
  },
};
