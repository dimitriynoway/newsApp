import React, {useState} from 'react';
import {View, Text, Button, TextInput, Dimensions} from 'react-native';
import {useMutation} from '@apollo/client';
import registerGQL from '../apollo/gql/registerGQL';
const {width, height} = Dimensions.get('screen');

export default Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [register, {data}] = useMutation(registerGQL);

  const submitRegister = () => {
    if (!email || !username || !password) return;
    register({
      variables: {
        registerEmail: email,
        registerUsername: username,
        registerPassword: password,
      },
    });
    navigation.navigate('Main');
  };

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
      <Button
        title="Go to main screen"
        color="white"
        onPress={() => submitRegister()}
      />
    </View>
  );
};
