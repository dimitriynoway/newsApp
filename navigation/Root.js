import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import BottomTabs from './BottomTabs';
import Login from '../screens/Login';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export default RootNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Login"
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Register" component={Register} options={{}} />
      <Stack.Screen name="Main" component={BottomTabs} options={{}} />
    </Stack.Navigator>
  );
};
