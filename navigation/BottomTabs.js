import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../pages/home/Home';

const Tab = createBottomTabNavigator();

const DetailsTemporary = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Details</Text>
      </View>
    </SafeAreaView>
  );
};

export default BottomTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        showLabel: false,
        style: {
          paddingBottom: 0,
          height: 80,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" size={27} color={focused ? 'orange' : 'black'} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="search"
              size={27}
              color={focused ? 'orange' : 'black'}
            />
          ),
        }}
        name="Search"
        component={DetailsTemporary}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="bookmark"
              size={27}
              color={focused ? 'orange' : 'black'}
            />
          ),
        }}
        name="Saved"
        component={DetailsTemporary}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="settings"
              size={27}
              color={focused ? 'orange' : 'black'}
            />
          ),
        }}
        name="Setting"
        component={DetailsTemporary}
      />
    </Tab.Navigator>
  );
};
