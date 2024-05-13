import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { Theme } from "../types";
import useTheme from "../composables/useTheme";

import { breakpointFn } from "./breakpoints";
import { useColorScheme } from "react-native";

export function createTheme(): Theme {
  const { theme } = useTheme();
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return {
    ...theme,
    insets,
    breakpoints: breakpointFn,
    colorScheme: colorScheme ?? "light",
  };
}
