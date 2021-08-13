import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {useMutation} from '@apollo/client';
import registerGQL from '../apollo/gql/registerGQL';
import {useDispatch, useSelector} from 'react-redux';
import {SET_LOG_IN} from '../store/actions/authActions';
const {width, height} = Dimensions.get('screen');

export default Register = ({navigation}) => {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.auth.logged);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [register] = useMutation(registerGQL);

  const submitRegister = async () => {
    try {
      const res = await register({
        variables: {
          registerEmail: email,
          registerUsername: username,
          registerPassword: password,
        },
      });
      //console.log(res.data.register.error);
      if (res?.data?.register?.error) {
        setErrorTitle(res.data.register.error);
        setShowError(true);
      }
      if (!res?.data?.register?.error) {
        setShowError(false);
        setErrorTitle('');
        navigation.navigate('Login');
        setEmail('');
        setPassword('');
        setUsername('');
      }
    } catch (error) {
      console.log(error);
    }
    // navigation.navigate('Main');
  };
  // useEffect(() => {
  //   logged ? navigation.navigate('Main') : navigation.navigate('Login');
  // }, [logged]);

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
        placeholder="Username"
        style={{
          width: width * 0.8,
          height: 50,
          borderColor: 'rgba(255,255,255,0.6)',
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          marginVertical: 10,
        }}
        onChangeText={setUsername}
        value={username}
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

      <TouchableOpacity onPress={() => submitRegister()}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '600',
          }}>
          Contunie
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '400',
          }}>
          Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
};
