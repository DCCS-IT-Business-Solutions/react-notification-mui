import * as React from "react";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
  Typography
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { INotificationTypeProps } from "./NotificationContext";
import { SnackbarOrigin } from "@material-ui/core/Snackbar";
import { ThemeStyle } from "@material-ui/core/styles/createTypography";

export enum NotificationType {
  info,
  warning,
  error,
  custom
}

export interface ICustomNotificationProps {
  autoHideDuration?: number;
  enableClickAway?: boolean;
  transitionDuration?: number;
  snackBarStyle?: React.CSSProperties;
  snackBarMessageStyle?: React.CSSProperties;
  snackBarMessageVariant?: ThemeStyle;
  snackBarTitleStyle?: React.CSSProperties;
  snackBarTitleVariant?: ThemeStyle;
  message: string | React.ReactNode;
  title?: string | React.ReactNode;
  action?: React.ReactNode;
}

export interface INotificationItemProps extends INotificationTypeProps {
  title?: string | React.ReactNode;
  message: string | React.ReactNode;
  open: boolean;
  id: number;
  variant: NotificationType;
  timestamp: number;
  height?: number;
  remainingDuration?: number;
}

export interface ISnackbarItemProps extends INotificationItemProps {
  index: number;
  onClose: (id: number) => void;
  onExited: (id: number) => void;
  children?: any;
  onSetHeight?: (id: number, height: number) => void;
  onCalcMarginTop: (index: number) => number;
  anchorOrigin: SnackbarOrigin;
}

export function NotificationItem(props: ISnackbarItemProps) {
  const ref = React.createRef<HTMLElement>();

  function handleClose(event: any, reason: string) {
    if (reason === "clickaway") {
      return;
    }
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    props.onClose(props.id);
  }

  function handleExited() {
    props.onExited(props.id);
  }

  React.useEffect(() => {
    if (ref.current && props.onSetHeight) {
      const clientHeight = ref.current.clientHeight || 0;
      props.onSetHeight(props.id, clientHeight);
    }
  }, []);

  return (
    <Snackbar
      ref={ref}
      anchorOrigin={props.anchorOrigin}
      transitionDuration={props.transitionDuration}
      open={props.open}
      onClose={handleClose}
      onExited={handleExited}
      autoHideDuration={props.remainingDuration}
      style={{
        marginTop: props.onCalcMarginTop(props.index),
        zIndex: 10003
      }}
    >
      {props.title ? (
        <SnackbarContent
          style={props.snackBarStyle}
          message={
            <TitleMessageComponent
              message={props.message}
              messageStyle={props.snackBarMessageStyle}
              messageVariant={props.snackBarMessageVariant}
              title={props.title}
              titleStyle={props.snackBarTitleStyle}
              titleVariant={props.snackBarTitleVariant}
            />
          }
          action={
            props.action || (
              <IconButton
                onClick={(e: any) =>
                  handleClose(e, "SnackbarContentActionClose")
                }
              >
                <Close style={{ color: "#ffffff" }} />
              </IconButton>
            )
          }
        />
      ) : (
        <SnackbarContent
          style={props.snackBarStyle}
          message={
            <ReactNodeOrString
              text={props.message}
              variant={props.snackBarMessageVariant}
              style={props.snackBarMessageStyle || props.snackBarStyle}
            />
          }
          action={
            props.action || (
              <IconButton
                onClick={(e: any) =>
                  handleClose(e, "SnackbarContentActionClose")
                }
              >
                <Close style={{ color: "#ffffff" }} />
              </IconButton>
            )
          }
        />
      )}
    </Snackbar>
  );
}

interface ITitleMessageComponentProps {
  message: string | React.ReactNode;
  title: string | React.ReactNode;
  titleVariant?: ThemeStyle;
  titleStyle?: React.CSSProperties;
  messageVariant?: ThemeStyle;
  messageStyle?: React.CSSProperties;
}

function TitleMessageComponent(props: ITitleMessageComponentProps) {
  return (
    <div>
      <ReactNodeOrString
        text={props.title}
        variant={props.titleVariant}
        style={props.titleStyle}
      />

      <ReactNodeOrString
        text={props.message}
        variant={props.messageVariant}
        style={props.messageStyle}
      />
    </div>
  );
}

interface IMessageComponentProps {
  text: string | React.ReactNode;
  variant?: ThemeStyle;
  style?: React.CSSProperties;
}

function ReactNodeOrString(props: IMessageComponentProps) {
  return (
    <div>
      {typeof props.text === "string" ? (
        <Typography variant={props.variant} style={props.style}>
          {props.text}
        </Typography>
      ) : (
        props.text
      )}
    </div>
  );
}
