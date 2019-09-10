# react-notification-mui &middot; ![travis build](https://img.shields.io/travis/DCCS-IT-Business-Solutions/react-notification-mui.svg) ![npm version](https://img.shields.io/npm/v/@dccs/react-notification-mui.svg)

Simple Notifications [https://dccs-it-business-solutions.github.io/react-notification-mui/](https://dccs-it-business-solutions.github.io/react-notification-mui/)

## Installation

You should install [react-notification-mui with npm or yarn](https://www.npmjs.com/package/@dccs/react-notification-mui):

    npm install @dccs/react-notification-mui
    or
    yarn add @dccs/react-notification-mui

This command will download and install react-notification-mui

## How it works

This packages makes it very easy to notify the user.

To do so you have to wrap the Components that want to display notifications with the "NotificationContextProvider" Component.

```javascript
<NotificationContextProvider>
  ...
  <DisplayNotifications />
  ...
</NotificationContextProvider>
```

Now all Components wraped by the Provider can show notifications like this:

```javascript
function DisplayNotifications(){
  const { addInfo, addWarning, addError, addCustomNotification } =
    React.useContext < INotificationContext > NotificationContext;

  function handleClick(){
    addInfo("my message", "my title");
    addWarning("my message", "my title");
    addError("my message", "my title");
    addCustomNotification({ message: "my message", title: "my title" });
  }

  return <Butonn onClick={handleClick}>Show Notifications</Button>
}
```

You are able to customize the look of the info, warning and error notifications threw properties given to to the **NotificationContextProvider**

## Contributing

### License

@dccs/react-notification-mui is [MIT licensed](https://github.com/facebook/react/blob/master/LICENSE)
