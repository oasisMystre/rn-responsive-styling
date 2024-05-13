import { useContext } from "react";
import { ThemeContext } from "../providers";

export default function useTheme() {
  return useContext(ThemeContext);
}
