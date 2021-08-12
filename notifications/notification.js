import PushNotificationIOS from '@react-native-community/push-notification-ios';

export default notification = (title, message) => {
  const date = new Date();
  date.setSeconds(date.getSeconds() + 2);
  PushNotificationIOS.requestPermissions(['alert']);

  PushNotificationIOS.setNotificationCategories([
    {
      id: 'submit',
      actions: [
        {
          id: 'kuku',
          title: 'submit',
          options: {
            foreground: false,
            destructive: false,
            authenticationRequired: true,
          },
          textInput: {
            buttonTitle: 'send',
            placeholder: 'wait...',
          },
        },
      ],
    },
  ]);
  PushNotificationIOS.addNotificationRequest({
    id: 'first',
    title,
    body: message,
    subtitle: 'kuku',
    isSilent: true,
    category: 'submit',
    //fireDate: date,
  });
};
