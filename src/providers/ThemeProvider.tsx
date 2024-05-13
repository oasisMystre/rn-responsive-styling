import { createContext, useMemo } from "react";
import { ColorSchemeName, ColorValue, useColorScheme } from "react-native";

export type ThemeValue = {
  color: TColor & Record<string, any>;
};

export type Theme = {
  [k in Exclude<ColorSchemeName, undefined | null>]: ThemeValue;
};

export type TColor = {
  primary: ColorValue;
  secondary: ColorValue;
  tetiary: ColorValue;
  hint: ColorValue;
  invert: ColorValue;
  select: ColorValue;
};

export const defaultTheme: Theme = {
  light: {
    color: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      tetiary: "#FFFFFF",
      invert: "#000000",
      select: "rgba(0,0,0,0.05)",
      hint: "rgba(0,0,0,0.5)",
    },
  },
  dark: {
    color: {
      primary: "#000000",
      secondary: "#000000",
      tetiary: "#000000",
      invert: "#FFFFFF",
      select: "rgba(255,255,255,0.05)",
      hint: "rgba(255,255,255,0.5)",
    },
  },
};

type ThemeContext<T> = {
  theme: ThemeValue;
};

export const ThemeContext = createContext<ThemeContext<string>>({
  theme: defaultTheme.light,
});

type ThemeProviderProps<T> = {
  theme?: Theme;
};

export function ThemeProvider<T>({
  children,
  theme = defaultTheme,
}: React.PropsWithChildren & ThemeProviderProps<string>) {
  const colorScheme = useColorScheme();
  const themeValue = useMemo(() => theme[colorScheme!], [theme, colorScheme]);

  return (
    /// @ts-ignore
    <ThemeContext.Provider value={{ theme: themeValue }}>
      {children}
    </ThemeContext.Provider>
  );
}
