// @flow Copyright © 2019 Rently Softwares, All Rights Reserved

import firebase, { Notification, NotificationOpen, RemoteMessage } from "react-native-firebase";
// import { REFRESH_TOKEN } from "../../common/constants";

// Introduce global listners for notification
let notificationDisplayedListener;
let notificationListener;
let notificationOpenedListener;
let onTokenRefreshListener;

const init = async () => {
  const enabled = await firebase.messaging().hasPermission();
  if (enabled) {
    await fetchFirebaseToken();
  } else {
    await firebase.messaging().requestPermission().then(async () => {
      await fetchFirebaseToken();
    }).catch(() => {
      console.log("User has rejected permissions");
    });
  }

  notificationDisplayedListener = firebase
    .notifications()
    .onNotificationDisplayed((notification) => {
      console.log("Notification displayed");

      /*
       * Process your notification as required
       * ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
       */
    });

  notificationListener = firebase.notifications().onNotification((message) => {
    console.log("Notification construction");
    const notification = new firebase.notifications.Notification()
      .setNotificationId(message.notificationId)
      .setTitle(message.title)
      .setBody(message.body)
      .setData(message.data);
    notification.android.setChannelId("BeSafe Channel");
    notification.android.setAutoCancel(true);
    firebase.notifications().displayNotification(notification);
  });

  notificationOpenedListener = firebase
    .notifications()
    .onNotificationOpened((notificationOpen) => {
      console.log("Notification Opened");
      const { action } = notificationOpen;
      const { notification } = notificationOpen;
      checkSession(action, notification);
    });

  const notificationOpen = await firebase.notifications().getInitialNotification();
  if (notificationOpen) {
    console.log("Notification open when app was closed");
    const { action } = notificationOpen;
    const { notification } = notificationOpen;
    checkSession(action, notification);
  }
};

const checkSession = async function (action, notification) {
//   const userData = await getUserData();

//   const refreshToken = userData[REFRESH_TOKEN];
//   if (refreshToken) {
//     console.log(action, notification);
//     navigate(NOTIFICATION_NAVIGATOR);
//   }

};

const reset = () => {
  try {
    notificationDisplayedListener && notificationDisplayedListener();
    notificationListener && notificationListener();
    notificationOpenedListener && notificationOpenedListener();
    onTokenRefreshListener && onTokenRefreshListener();
  } catch (error) {
  }

};

const fetchFirebaseToken = async () => {
  try {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      console.log("Device token", fcmToken);
    }
  } catch (e) {
    console.log(e);
  }
  const channel = new firebase.notifications.Android.Channel(
    "BeSafe",
    "BeSafe Channel",
    firebase.notifications.Android.Importance.Max
  ).setDescription("BeSafe app channel");

  // Create the channel
  firebase.notifications().android.createChannel(channel);

  onTokenRefreshListener = firebase.messaging().onTokenRefresh(async (fcmToken) => {
    if (fcmToken) {
      console.log("Refresh device token", fcmToken);
    }
  });
};

export const notificationHandler = {
  init,
  reset
};
