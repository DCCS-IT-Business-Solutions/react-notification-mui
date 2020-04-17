import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Paper, Button } from "@material-ui/core";
import { NotificationContextProvider } from "../src/NotificationContext";
import { TestNotifications } from "../src/utils/TestNotifications";

storiesOf("Notification", module).add("Notification", () => (
  <NotificationContextProvider displayOldestOnTop={false}>
    <Paper style={{ minWidth: "600px", minHeight: "600px", padding: "10px" }}>
      <TestNotifications />
    </Paper>
  </NotificationContextProvider>
));
