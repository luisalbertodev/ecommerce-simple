// import { Theme } from "@material-ui/core";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";

const themeMap = {
  lightTheme,
  darkTheme,
};

export function getThemeByName(theme) {
  return themeMap[theme];
}
