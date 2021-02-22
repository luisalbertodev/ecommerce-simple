/* eslint-disable dot-notation */
import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#008c6b",
      main: "#00c999",
      dark: "#33d3ad",
      contrastText: "#fff",
    },
    secondary: {
      light: "#2032a6",
      main: "#2F48EE",
      dark: "#586cf1",
      contrastText: "#fff",
    },
  },
});
