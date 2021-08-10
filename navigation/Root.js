import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

export default RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  );
};
