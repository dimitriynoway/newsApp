import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import BottomTabs from './BottomTabs';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      headerMode="none"
      // mode="modal"

      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen name="Register" component={Register} options={{}} />
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Main" component={BottomTabs} options={{}} />
    </Stack.Navigator>
  );
};
