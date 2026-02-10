import type { TransformedToken, PlatformConfig } from "style-dictionary/types";

export const generateTokenName = (
  token: TransformedToken,
  options: PlatformConfig,
) => {
  if (token.path[0] === "spacing") {
    return `${options.prefix}-spacing-${token.path[1]}`;
  }

  if (token.path[0] === "breakpoint") {
    return `${options.prefix}-breakpoint-${token.path[1]}`;
  }

  if (token.path[0] === "font-size") {
    return `${options.prefix}-font-size-${token.path[1]}`;
  }

  if (token.path[0] === "line-height") {
    return `${options.prefix}-line-height-${token.path[1]}`;
  }

  if (token.path[0] === "font-family") {
    return `${options.prefix}-font-family-${token.path[1]}`;
  }

  if (token.path[0] === "measure") {
    return `${options.prefix}-measure-${token.path[1]}`;
  }

  if (token.path[0] === "column-gap") {
    return `${options.prefix}-column-gap-${token.path[1]}`;
  }

  if (token.path[0] === "input-width") {
    return `${options.prefix}-input-width-${token.path[1]}`;
  }

  if (token.path[0] === "grid") {
    return `${options.prefix}-grid-${token.path[1]}`;
  }

  const isFromColorDirectory =
    token.filePath && token.filePath.includes("tokens/color/");

  if (isFromColorDirectory) {
    if (
      token.path.length === 1 &&
      ["transparent", "black", "white"].includes(token.path[0])
    ) {
      return `${options.prefix}-color-${token.path[0]}`;
    } else {
      return `${options.prefix}-color-${token.path.join("-")}`;
    }
  }

  return `${options.prefix}-${token.path.join("-")}`;
};

export const getTokenValueWithUnit = (token: TransformedToken) => {
  if (token.$type === "dimension" && typeof token.$value === "object") {
    return token.$value.value + (token.$value.unit || "");
  }
  if (token.$type === "fontFamily") {
    return token.$value;
  }
  if (token.$type === "number") {
    return token.$value;
  }
  return token.$value;
};
