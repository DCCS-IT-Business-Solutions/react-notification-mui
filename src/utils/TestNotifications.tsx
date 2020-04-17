import * as React from "react";
import { INotificationContext, NotificationContext } from "..";
import { Button } from "@material-ui/core";

export function TestNotifications() {
  const {
    addInfo,
    addWarning,
    addError,
    addCustomNotification,
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
          addWarning("This is an Warning Notification");
        }}
      >
        Show Warning Notification
      </Button>
      <br />
      <Button
        onClick={() => {
          addError("This is an Error Notification");
        }}
      >
        Show Error Notification
      </Button>
      <br />
      <Button
        onClick={() => {
          addCustomNotification({
            title: "CustomNotification",
            message: "This is a customNotification",
          });
        }}
      >
        Show Custom Notification
      </Button>
      <br />
    </div>
  );
}
