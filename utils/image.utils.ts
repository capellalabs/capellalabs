import { ThemeMode } from "./types";

export function imgUriWithTheme(img: string, theme: ThemeMode) {
  return `images/${img}${theme === "dark" ? "" : "_dark"}.svg`;
}
