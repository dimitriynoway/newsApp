import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@apollo/client';
import {useDispatch, useSelector} from 'react-redux';
import {
  SET_EMAIL,
  SET_LOG_IN,
  SET_USER_ID,
  SET_USER_NAME,
} from '../store/actions/authActions';
import loginGQL from '../apollo/gql/loginGQL';
import * as Keychain from 'react-native-keychain';
import Loading from '../components/Loading';

const {width} = Dimensions.get('screen');

export default Register = ({navigation}) => {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.auth.logged);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [login_gql] = useMutation(loginGQL);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    checkUserStatus();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => setShowLoading(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const checkUserStatus = async () => {
    try {
      const keychain_res = await Keychain.getGenericPassword();
      if (keychain_res) {
        const {username} = keychain_res;
        const {keychain_username, keychain_email, keychain_user_id} =
          JSON.parse(username);
        dispatch(SET_LOG_IN());
        dispatch(SET_EMAIL(keychain_email));
        dispatch(SET_USER_NAME(keychain_username));
        dispatch(SET_USER_ID(keychain_user_id));
        navigation.navigate('Main');
      } else {
        setShowLoading(false);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const submitLogin = async () => {
    try {
      const {
        data: {login},
      } = await login_gql({
        variables: {
          loginEmail: email,
          loginPassword: password,
        },
      });
      console.log(login);

      if (login?.error) {
        setErrorTitle(login.error);
        setShowError(true);
      }
      if (!login?.error) {
        setShowError(false);
        setErrorTitle('');
        dispatch(SET_LOG_IN());
        dispatch(SET_EMAIL(login.email));
        dispatch(SET_USER_NAME(login.username));
        const info = JSON.stringify({
          keychain_username: login.username,
          keychain_email: login.email,
          keychain_user_id: login.id,
        });
        await Keychain.setGenericPassword(info, 'password');
        navigation.navigate('Main');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   logged ? navigation.navigate('Main') : navigation.navigate('Login');
  // }, [logged]);

  return showLoading ? (
    <Loading backgroundColor="white" spinerColor="orange" />
  ) : (
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
      <TouchableOpacity onPress={() => submitLogin()}>
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
