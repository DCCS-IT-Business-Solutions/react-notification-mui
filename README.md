# react-notification-mui &middot; ![travis build](https://img.shields.io/travis/DCCS-IT-Business-Solutions/react-notification-mui.svg) ![npm version](https://img.shields.io/npm/v/@dccs/react-notification-mui.svg)

Simple Notifications [https://dccs-it-business-solutions.github.io/react-notification-mui/](https://dccs-it-business-solutions.github.io/react-notification-mui/)

## Installation

You should install [react-notification-mui with npm or yarn](https://www.npmjs.com/package/@dccs/react-notification-mui):

    npm install @dccs/react-notification-mui
    or
    yarn add @dccs/react-notification-mui

This command will download and install react-notification-mui

## How it works

To use display notifications wrap you application with the **NotificationContextProvider**

```javascript
<NotificationContextProvider>
  <YourApp />
</NotificationContextProvider>
```

### How to display notifications

The NotificationContextProvider provides the following functions:

<li><code>addInfo</code></li>
<li><code>addWarning</code></li>
<li><code>addError</code></li>
<li><code>addCustomNotification</code></li>

<br>

#### addInfo, addWarning, addError

##### Parameters:

<li><code>message: string | React.ReactNode</code></li>
<li><code>title?: string | React.ReactNode</code></li>

##### Usage:

```javascript
function DisplayNotifications() {
  const { addInfo, addWarning, addError } = React.useContext<INotificationContext>(NotificationContext);
  function handleClick() {
    addInfo("my message");
    addWarning("my message");
    addError("my message");

    addInfo(<span>my message</span>);
    addWarning(<span>my message</span>);
    addError(<span>my message</span>);

    addInfo("my message", "my title");
    addWarning("my message", "my title");
    addError("my message", "my title");

    addInfo(<span>my message</span>, <span>my mytitle</span>);
    addWarning(<span>my message</span>, <span>my mytitle</span>);
    addError(<span>my message</span>, <span>my mytitle</span>);
  }

  return <div onClick={handleClick}>Show Notifications</div>;
}
```

#### addCustomNotification

If you want to display a custom notification you can use the **addCustomNotification** method.

##### Parameters:

<code>notification: ICustomNotificationProps</code>

###### ICustomNotificationProps

| Name                   | Type                                                                                                                                 | Default                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| message                | `string\|React.ReactNode`                                                                                                             |                                                 |
| autoHideDuration       | `number\|undefined`                                                                                                                   | `undefined`                                     |
| enableClickAway        | `boolean\|undefined`                                                                                                                  | `false`                                         |
| transitionDuration     | `number\|undefined`                                                                                                                   | `750`                                           |
| snackBarStyle          | `React.CSSProperties\|undefined`                                                                                                      | `undefined`                                     |
| snackBarMessageStyle   | `React.CSSProptiers\|undefined`                                                                                                       | `undefined`                                     |
| snackBarMessageVariant | [`ThemeStyle`](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createTypography.d.ts)`\|undefined` | `body1`                                         |
| snackBarTitleStyle     | `React.CSSProptiers\|undefined`                                                                                                       | `undefined`                                     |
| snackBarTitleVariant   | [`ThemeStyle`](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createTypography.d.ts)`\|undefined` | `h6`                                            |
| title                  | `string\|React.ReactNode\|undefined`                                                                                                   | `undefined`                                     |
| action                 | `React.ReactNode\|undefined`                                                                                                          | a close button, that dissmises the notification |

[ThemeStyle](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createTypography.d.ts)

##### Usage:

```javascript
function DisplayMyCustomNotification(){
 const { addCustomNotification } = React.useContext<INotificationContext>(NotificationContext);

  function handleClick(){
    addCustomNotification({message:"my message"});
  }

  return <Butonn onClick={handleClick}>Show Custom Notifications</Button>
}
```

### How to customize notifications shown by addInfo, addWarning, addError

You are able to customize the look of the info, warning and error notifications threw properties given to to the **NotificationContextProvider**

## Contributing

### License

@dccs/react-notification-mui is [MIT licensed](https://github.com/facebook/react/blob/master/LICENSE)
