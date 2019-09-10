import * as React from "react";

import { storiesOf } from "@storybook/react";

import { Paper, Button } from "@material-ui/core";

import {
  NotificationContextProvider,
  NotificationContext,
  INotificationContext
} from "../src/NotificationContext";

function TestNotifications(props: any) {
  const {
    addInfo,
    addWarning,
    addError,
    addCustomNotification
  } = React.useContext<INotificationContext>(NotificationContext);
  return (
    <div>
      <Button
        onClick={() => {
          addInfo(
            "This is an Info Notification. This part is the text part!",
            "Info Notification"
          );
        }}
      >
        Show Info Notification
      </Button>
      <br />
      <Button
        onClick={() => {
          addWarning("Warning Notification");
        }}
      >
        Show Warning Notification
      </Button>
      <br />
      <Button
        onClick={() => {
          addError("Error Notification");
        }}
      >
        Show Error Notification
      </Button>
      <br />
      <Button
        onClick={() => {
          addCustomNotification({
            title: "CustomNotification",
            message: "This is a customNotification"
          });
        }}
      >
        Show Custom Notification
      </Button>
      <br />
    </div>
  );
}

storiesOf("Notification", module).add("Notification", () => (
  <NotificationContextProvider displayOldestOnTop={false}>
    <Paper style={{ minWidth: "600px", minHeight: "600px", padding: "10px" }}>
      <TestNotifications />
    </Paper>
  </NotificationContextProvider>
));
