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
import fetchHotNews from '../functions/fetchHotNews';
import getSavedNews from '../apollo/gql/getSavedNews';
import {SET_SAVED_NEWS} from '../store/actions/newsActions';
import checkUserStatus from './Login.checkUserStatus';
import setSavedNews from './Login.setSavedNews';
const {width} = Dimensions.get('screen');

export default Register = ({navigation}) => {
  //---dispatch
  const dispatch = useDispatch();
  //---states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [showLoading, setShowLoading] = useState(true);
  //---gql
  const [login_gql] = useMutation(loginGQL);
  const [got_saved_gql] = useMutation(getSavedNews);
  //---effects
  useEffect(async () => {
    await checkUserStatus(dispatch, navigation, got_saved_gql);
    setShowLoading(false);
  }, []);

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

      if (login?.error) {
        setErrorTitle(login.error);
        setShowError(true);
      }
      if (!login?.error) {
        setShowError(false);
        setErrorTitle('');
        dispatch(SET_EMAIL(login.email));
        dispatch(SET_USER_NAME(login.username));
        dispatch(SET_LOG_IN());
        const info = JSON.stringify({
          keychain_username: login.username,
          keychain_email: login.email,
          keychain_user_id: login.id,
        });
        await Keychain.setGenericPassword(info, 'secret_key');
        dispatch(fetchHotNews());
        navigation.navigate('Main');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
