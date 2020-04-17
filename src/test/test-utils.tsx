import * as React from "react";
import { render as rtlRender } from "@testing-library/react";
import {
  createMuiTheme,
  MuiThemeProvider,
  Theme as MuiTheme,
} from "@material-ui/core";
import { NotificationContextProvider } from "..";
import { INotificationContextProps } from "../NotificationContext";

const defaultTheme = createMuiTheme();

interface ICustomRenderOptions {
  theme?: MuiTheme;
  notificationContextProps?: INotificationContextProps;
  [key: string]: any;
}

function render(
  ui: any,
  { theme, notificationContextProps, ...options }: ICustomRenderOptions = {}
) {
  const Wrapper = ({ children }: { children: any }) => (
    <MuiThemeProvider theme={options.theme || defaultTheme}>
      <NotificationContextProvider {...notificationContextProps}>
        {children}
      </NotificationContextProvider>
    </MuiThemeProvider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";
// override React Testing Library's render with our own
export { render };
