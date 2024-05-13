import { breakpoints } from "../core/breakpoints";
import type { BreakPoint, Style, ExtractStyle, StyleSheet } from "../types";

export const deepCopy = <T extends object>(self: T) => {
  const copy: Record<any, any> = {};
  for (const [key, value] of Object.entries(self)) {
    if (value.constructor === Object) copy[key] = deepCopy(value);
    else copy[key] = value;
  }

  return copy as T;
};

export const mergeStyle = <T extends StyleSheet>(
  styles: T,
  screenBreakpoints: Readonly<BreakPoint[]>,
) => {
  const extractedStyles: Record<string, Style> = {};
  for (const [key, style] of Object.entries(styles)) {
    let extractedStyle: Partial<Style> = {};

    for (const [property] of Object.entries(style)) {
      // @ts-ignore
      if (breakpoints.includes(property)) {
        // @ts-ignore
        if (screenBreakpoints.includes(property)) {
          // @ts-ignore
          const properties = style[property];
          extractedStyle = { ...extractedStyle, ...properties };
        }
        // @ts-ignore
        delete style[property];
      }
    }

    extractedStyles[key] = {
      ...(style as Style),
      ...extractedStyle,
    };
  }

  return extractedStyles as unknown as ExtractStyle<T>;
};
