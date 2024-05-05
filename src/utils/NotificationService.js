import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
  console.log(granted);
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    getFCMToken();
  } else {
    console.log('Permission Denied');
  }
};
const getFCMToken = async () => {
  try {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log('token->> ', token);
  } catch (error) {
    console.log('FCM error', error);
  }
};
