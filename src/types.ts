import { ColorSchemeName, StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { ThemeValue } from "./providers";

export type LessThanBreakPoint<T extends string> = `<${T}`;
export type GreaterThanBreakPoint<T extends string> = `>${T}`;

export type BaseBreakPoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type BreakPoint =
  | LessThanBreakPoint<Exclude<BaseBreakPoint, "xs">>
  | GreaterThanBreakPoint<Exclude<BaseBreakPoint, "xs">>
  | BaseBreakPoint;

export type Style = Partial<StyleSheet.NamedStyles<any>[string]>;

export type StyleSheet = {
  [key: string]:
    | {
        [key in BreakPoint]?: Style;
      }
    | Style;
};

export interface IBreakPoint {
  eq<T extends BaseBreakPoint>(value: T): T;
  up<T extends BaseBreakPoint>(value: T): GreaterThanBreakPoint<T>;
  down<T extends BaseBreakPoint>(value: T): LessThanBreakPoint<T>;
}

export type Theme = {
  insets: EdgeInsets;
  breakpoints: IBreakPoint;
  colorScheme: Exclude<ColorSchemeName, undefined | null>;
} & ThemeValue;

export type ExtractStyle<T extends StyleSheet> = {
  [P in keyof T]:
    | {
        [K in Exclude<keyof T[P], BreakPoint>]: T[P][K];
      }
    | {
        [K in keyof T[P]]: K extends BreakPoint ? T[P][K] : never;
      }[keyof T[P]];
};
