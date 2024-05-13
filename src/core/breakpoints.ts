import type { BreakPoint, IBreakPoint } from "../types";

export const breakpoints: BreakPoint[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "2xl",
  "<sm",
  "<md",
  "<lg",
  "<2xl",
  ">sm",
  ">md",
  ">lg",
  ">2xl",
];

export const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const getBreakpoints = (size: number): BreakPoint[] => {
  if (size < screens.sm) return ["xs", "<sm"];
  if (size < screens.md) return ["sm", "<md"];
  if (size < screens.lg) return ["md", ">sm", "<md", "<lg", "<2xl"];
  if (size < screens.xl) return ["lg", "<xl", "<2xl", ">sm", ">md"];
  if (size < screens["2xl"]) return ["xl", "<2xl", ">sm", ">md", ">lg"];
  return ["2xl", ">sm", ">md", ">lg", ">xl"];
};

export const breakpointFn: IBreakPoint = {
  eq: (value) => value,
  up: (value) => `>${value}`,
  down: (value) => `<${value}`,
};
