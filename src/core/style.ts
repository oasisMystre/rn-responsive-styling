import useDimensions from "../composables/useDimensions";
import type { ExtractStyle, StyleSheet, Theme } from "../types";

import { createTheme } from "./theme";
import { getBreakpoints } from "./breakpoints";
import { deepCopy, mergeStyle } from "../utils";

export const makeStyles = <T extends StyleSheet>(
  callbackFn: (theme: Theme) => T,
) => {
  const cache = new Map<string, ExtractStyle<ReturnType<typeof callbackFn>>>();

  return () => {
    const theme = createTheme();

    const styles = callbackFn(theme);

    const { window } = useDimensions();
    const breakpoints = getBreakpoints(window.width);
    /// differ color scheme styles
    let style = cache.get(breakpoints.join() + theme.colorScheme);

    if (style) return style;

    style = mergeStyle(deepCopy(styles), breakpoints);
    cache.set(breakpoints.join(), style);

    return style;
  };
};
