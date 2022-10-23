import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyA9LXIkcdBT7IQPLTd57TJkPiz_5RrcTvs",
    authDomain: "metaprops-web.firebaseapp.com",
    projectId: "metaprops-web",
    storageBucket: "metaprops-web.appspot.com",
    messagingSenderId: "775777410031",
    appId: "1:775777410031:web:408bca7c0b393634cc741a",
    measurementId: "G-X1ZCN35EWF" // troque pelo seu sender id 
  });

 
}

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    const registrationToken = token;

    const message = {
      data: {
        score: '850',
        time: '2:45'
      },
      token: registrationToken
    };
    
    
    console.log('user token: ', token);
    await messaging.onMessage((payload)=>{
        console.log(payload.notification)
    })

    return token;
  } catch (error) {
    console.error(error);
  }
}
