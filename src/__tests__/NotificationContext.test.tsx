import * as React from "react";
import { shallow, mount, render } from "enzyme";
import { NotificationContextProvider } from "../NotificationContext";
import { Typography, Button } from "@material-ui/core";

it("should render", () => {
  const sut = render(
    <NotificationContextProvider>
      <div>
        <Typography>Test</Typography>
      </div>
    </NotificationContextProvider>
  );
  expect(sut).toMatchSnapshot();
});

it("should render with options", () => {
  const sut = render(
    <NotificationContextProvider
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      displayOldestOnTop={false}
      errorProps={{
        action: <Button>Test</Button>,
        autoHideDuration: 70000,
        enableClickAway: false,
        snackBarMessageStyle: { fontSize: 18 },
        snackBarMessageVariant: "body1",
        snackBarTitleStyle: { fontSize: "20px", color: "black" },
        transitionDuration: 500,
        snackBarTitleVariant: "h5"
      }}
      infoProps={{
        action: <Button>Test</Button>,
        autoHideDuration: 70000,
        enableClickAway: false,
        snackBarMessageStyle: { fontSize: 18 },
        snackBarMessageVariant: "body1",
        snackBarTitleStyle: { fontSize: "20px", color: "black" },
        transitionDuration: 500,
        snackBarTitleVariant: "h5"
      }}
      warningProps={{
        action: <Button>Test</Button>,
        autoHideDuration: 70000,
        enableClickAway: false,
        snackBarMessageStyle: { fontSize: 18 },
        snackBarMessageVariant: "body1",
        snackBarTitleStyle: { fontSize: "20px", color: "black" },
        transitionDuration: 500,
        snackBarTitleVariant: "h5"
      }}
    >
      <div>
        <Typography>Test</Typography>
      </div>
    </NotificationContextProvider>
  );
  expect(sut).toMatchSnapshot();
});
