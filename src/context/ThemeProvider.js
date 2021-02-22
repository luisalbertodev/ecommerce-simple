import React, { useState, createContext } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { getThemeByName } from "../themes/base";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Read current theme from localStorage or maybe from an api
  const curThemeName = localStorage.getItem("appTheme") || "lightTheme";

  // State to hold the selected theme name
  const [themeName, setThemeName] = useState(curThemeName);

  // Get the theme object by theme name
  const theme = getThemeByName(themeName);

  const handleSetThemeName = (currentTheme) => {
    localStorage.setItem("appTheme", currentTheme);
    setThemeName(currentTheme);
  };

  return (
    <ThemeContext.Provider value={handleSetThemeName}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// export const setThemeName = useContext(ThemeContext);
export default ThemeProvider;
