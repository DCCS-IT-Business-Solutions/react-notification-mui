import * as React from "react";
import { create } from "react-test-renderer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme();

export const withMaterial = (Component: any, props?: any) => {
  return create(
    <MuiThemeProvider theme={theme}>
      <Component {...props} />
    </MuiThemeProvider>
  );
};
