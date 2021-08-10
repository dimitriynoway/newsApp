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
import {SET_LOG_IN} from '../store/actions/authActions';
import loginGQL from '../apollo/gql/loginGQL';
const {width, height} = Dimensions.get('screen');

export default Register = ({navigation}) => {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.auth.logged);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [login] = useMutation(loginGQL);

  const submitLogin = async () => {
    try {
      const res = await login({
        variables: {
          loginEmail: email,
          loginPassword: password,
        },
      });
      //console.log(res.data.register.error);
      if (res?.data?.login?.error) {
        setErrorTitle(res.data.login.error);
        setShowError(true);
      }
      if (!res?.data?.login?.error) {
        setShowError(false);
        setErrorTitle('');
        dispatch(SET_LOG_IN());
        navigation.navigate('Main');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   useEffect(() => {
  //     logged ? navigation.navigate('Main') : navigation.navigate('Register');
  //   }, [logged]);

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
