import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import * as Keychain from 'react-native-keychain';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import BottomTabs from './BottomTabs';
import Login from '../screens/Login';

const Stack = createStackNavigator();

// const checkCredentials = async () => {
//   const credentials = await Keychain.getGenericPassword();
//   console.log(credentials);
//   return credentials;
// };
// const credentials = checkCredentials();

export default RootNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      //initialRouteName={credentials ? 'Main' : 'Login'}
      initialRouteName="Login"
      // mode="modal"

      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Register" component={Register} options={{}} />
      <Stack.Screen name="Main" component={BottomTabs} options={{}} />
    </Stack.Navigator>
  );
};
