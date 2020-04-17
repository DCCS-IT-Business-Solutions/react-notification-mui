import * as React from "react";
import {
  NotificationItem,
  NotificationType,
  INotificationItemProps,
  ICustomNotificationProps,
} from "./NotificationItem";
import * as moment from "moment";
import { SnackbarOrigin } from "@material-ui/core/Snackbar";
import { ThemeStyle } from "@material-ui/core/styles/createTypography";

export interface INotificationTypeProps {
  autoHideDuration?: number;
  enableClickAway: boolean;
  transitionDuration: number;
  snackBarStyle?: React.CSSProperties;
  snackBarMessageStyle?: React.CSSProperties;
  snackBarMessageVariant?: ThemeStyle;
  snackBarTitleStyle?: React.CSSProperties;
  snackBarTitleVariant?: ThemeStyle;
  action?: React.ReactNode;
}

export interface INotificationContextProps {
  displayOldestOnTop?: boolean;
  infoProps?: INotificationTypeProps;
  warningProps?: INotificationTypeProps;
  errorProps?: INotificationTypeProps;
  anchorOrigin?: SnackbarOrigin;
  children?: any;
}

const defaultProps = {
  anchorOrigin: { vertical: "top", horizontal: "right" } as SnackbarOrigin,
  infoProps: {
    transitionDuration: 750,
    enableClickAway: false,
    autoHideDuration: 2500,
    snackBarStyle: {
      backgroundColor: "green",
      color: "white",
      fontSize: 16,
    },
    snackBarMessageVariant: "body1",
    snackBarTitleVariant: "h6",
  } as INotificationTypeProps,
  warningProps: {
    transitionDuration: 750,
    enableClickAway: false,
    autoHideDuration: 2500,
    snackBarStyle: {
      backgroundColor: "orange",
      color: "white",
      fontSize: 16,
    },
    snackBarMessageVariant: "body1",
    snackBarTitleVariant: "h6",
  } as INotificationTypeProps,
  errorProps: {
    transitionDuration: 750,
    enableClickAway: false,
    snackBarStyle: {
      backgroundColor: "red",
      color: "white",
      fontSize: 16,
    },
    snackBarMessageVariant: "body1",
    snackBarTitleVariant: "h6",
  } as INotificationTypeProps,
};

export function NotificationContextProvider(tprops: INotificationContextProps) {
  const [notifications, setNotifications] = React.useState<
    INotificationItemProps[]
  >([]);

  const props = { ...defaultProps, ...tprops };

  function addInfo(message: string | React.ReactNode, title?: string) {
    const now = moment.now();
    const noti = {
      ...props.infoProps,
      id: now + Math.random(),
      timestamp: now,
      open: true,
      variant: NotificationType.info,
      remainingDuration: props.infoProps.autoHideDuration,
      message,
      title,
    };
    addNotification(noti);
  }

  function addWarning(message: string | React.ReactNode, title?: string) {
    const now = moment.now();
    const noti = {
      ...props.warningProps,
      id: now + Math.random(),
      timestamp: now,
      open: true,
      variant: NotificationType.warning,
      remainingDuration: props.infoProps.autoHideDuration,
      message,
      title,
    };
    addNotification(noti);
  }

  function addError(message: string | React.ReactNode, title?: string) {
    const now = moment.now();
    const noti = {
      ...props.errorProps,
      id: now + Math.random(),
      timestamp: now,
      open: true,
      variant: NotificationType.error,
      remainingDuration: props.infoProps.autoHideDuration,
      message,
      title,
    };
    addNotification(noti);
  }

  function addCustomNotification(notification: ICustomNotificationProps) {
    const now = moment.now();
    addNotification({
      transitionDuration: 750,
      enableClickAway: false,
      snackBarMessageVariant: "body1",
      snackBarTitleVariant: "h6",
      ...notification,
      id: now + Math.random(),
      remainingDuration: notification.autoHideDuration,
      timestamp: now,
      open: true,
      variant: NotificationType.custom,
    });
  }

  function addNotification(noti: INotificationItemProps) {
    if (props.displayOldestOnTop === true) {
      setNotifications([...notifications, { ...noti }]);
    } else {
      setNotifications([{ ...noti }, ...notifications]);
    }
  }

  function handleClose(id: number) {
    setNotifications(
      notifications.map((noti) => {
        return noti.id === id ? { ...noti, open: false } : { ...noti };
      })
    );
  }

  function handleExited(id: number) {
    setNotifications(
      notifications.filter((noti) => {
        if (noti.id === id) {
          return false;
        }
        return true;
      })
    );
  }

  function handleSetHeight(id: number, height: number) {
    setNotifications(
      notifications.map((noti) =>
        noti.id === id ? { ...noti, height } : { ...noti }
      )
    );
  }

  function handleCalcMarginTop(index: number) {
    let marginTop = 0;
    notifications
      .slice(0, index)
      .forEach((noti) => (marginTop += noti.height || 0));
    return marginTop + index * 8;
  }

  function calcRemainingDuration(noti: INotificationItemProps) {
    if (noti.autoHideDuration) {
      return noti.autoHideDuration - (moment.now() - noti.timestamp);
    }
    return undefined;
  }

  return (
    <NotificationContext.Provider
      value={
        {
          addInfo,
          addWarning,
          addError,
          addCustomNotification,
        } as INotificationContext
      }
    >
      {props.children}
      {notifications.map((noti: INotificationItemProps, index: number) => (
        <NotificationItem
          {...noti}
          key={noti.id}
          index={index}
          onClose={handleClose}
          onExited={handleExited}
          remainingDuration={calcRemainingDuration(noti)}
          onSetHeight={handleSetHeight}
          onCalcMarginTop={handleCalcMarginTop}
          anchorOrigin={props.anchorOrigin}
        />
      ))}
    </NotificationContext.Provider>
  );
}

export interface INotificationContext {
  addInfo: (
    message: string | React.ReactNode,
    title?: string | React.ReactNode
  ) => void;
  addWarning: (
    message: string | React.ReactNode,
    title?: string | React.ReactNode
  ) => void;
  addError: (
    message: string | React.ReactNode,
    title?: string | React.ReactNode
  ) => void;
  addCustomNotification: (notification: ICustomNotificationProps) => void;
}

export const NotificationContext = React.createContext<
  INotificationContext | any
>({});
