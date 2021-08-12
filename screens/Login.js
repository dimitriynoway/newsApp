import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@apollo/client';
import registerGQL from '../apollo/gql/registerGQL';
import {useDispatch, useSelector} from 'react-redux';
import {
  SET_EMAIL,
  SET_LOG_IN,
  SET_USER_NAME,
} from '../store/actions/authActions';
import loginGQL from '../apollo/gql/loginGQL';
import not from '../notifications/notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
const {width, height} = Dimensions.get('screen');

export default Register = ({navigation}) => {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.auth.logged);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [login] = useMutation(loginGQL);

  //test section
  useEffect(() => {
    PushNotificationIOS.addEventListener(
      'localNotification',
      onRemoteNotification,
    );
    console.log('useeffect');
    return () => {
      PushNotificationIOS.removeEventListener('localNotification');
    };
  });

  const onRemoteNotification = notification => {
    console.log('we are here');
    const isClicked = notification.getData().userInteraction === 1;
    console.log('sound', notification.getSound());
    if (isClicked) {
      console.log('notification is clicked');
    } else {
      // Do something else with push notification
    }
  };
  //test section

  const submitLogin = async () => {
    try {
      const res = await login({
        variables: {
          loginEmail: email,
          loginPassword: password,
        },
      });
      console.log(res);

      if (res?.data?.login?.error) {
        setErrorTitle(res.data.login.error);
        setShowError(true);
      }
      if (!res?.data?.login?.error) {
        setShowError(false);
        setErrorTitle('');
        dispatch(SET_LOG_IN());
        dispatch(SET_EMAIL(res.data.login.email));
        dispatch(SET_USER_NAME(res.data.login.username));
        navigation.navigate('Main');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    logged ? navigation.navigate('Main') : navigation.navigate('Login');
  }, [logged]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(250,120,0,1)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        placeholder="Email"
        style={{
          width: width * 0.8,
          height: 50,
          borderColor: 'rgba(255,255,255,0.6)',
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          marginVertical: 10,
        }}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        textContentType="password"
        placeholder="Password"
        style={{
          width: width * 0.8,
          height: 50,
          borderColor: 'rgba(255,255,255,0.6)',
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          marginVertical: 10,
        }}
        onChangeText={setPassword}
        value={password}
      />
      {showError ? <Text>{errorTitle}</Text> : null}
      <TouchableOpacity onPress={() => not('Сорри', 'Ты обосрался')}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '600',
          }}>
          Contunie
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '400',
          }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};
