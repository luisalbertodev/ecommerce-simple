import React from "react";
import AppBarMaterial from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const AppBar = () => {
  return (
    <AppBarMaterial position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6">e-Commerce Gapse</Typography>
      </Toolbar>
    </AppBarMaterial>
  );
};
