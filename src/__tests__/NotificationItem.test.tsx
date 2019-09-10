import * as React from "react";
import { shallow, mount, render } from "enzyme";
import { NotificationContextProvider } from "../NotificationContext";
import { Typography, Button } from "@material-ui/core";
import { NotificationItem, NotificationType } from "../NotificationItem";

it("should render", () => {
  const sut = render(
    <NotificationItem
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      id={1}
      index={0}
      message="Test"
      onCalcMarginTop={() => 10}
      onClose={() => {
        return;
      }}
      onExited={() => {
        return;
      }}
      open={true}
      enableClickAway={false}
      timestamp={150}
      variant={NotificationType.custom}
      transitionDuration={750}
    />
  );
  expect(sut).toMatchSnapshot();
});

it("should render with all options", () => {
  const sut = render(
    <NotificationItem
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      id={1}
      index={0}
      message="Test"
      title="Test"
      onCalcMarginTop={() => 10}
      onClose={() => {
        return;
      }}
      onExited={() => {
        return;
      }}
      open={true}
      enableClickAway={false}
      timestamp={150}
      variant={NotificationType.custom}
      transitionDuration={750}
      action={<Button>Test</Button>}
      autoHideDuration={700000}
      remainingDuration={700000}
      snackBarMessageStyle={{ fontSize: "100px", color: "pink" }}
      snackBarTitleStyle={{ fontSize: "100px", color: "red" }}
      snackBarMessageVariant="h1"
      snackBarTitleVariant="h5"
      children={<div>Test</div>}
    />
  );
  expect(sut).toMatchSnapshot();
});
