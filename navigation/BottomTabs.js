import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../pages/home/Home';
import Settings from '../pages/Settings';
import Search from '../pages/search/Search';
import SearchMain from '../pages/search/SearchMain';
import {useSelector} from 'react-redux';
import Saved from '../pages/saved/Saved';

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
  const theme = useSelector(state => state.theme.themeDark);
  return (
    <Tab.Navigator
      // sceneContainerStyle={{backgroundColor: 'green'}}
      tabBarOptions={{
        showLabel: false,
        style: {
          paddingBottom: 0,
          height: 80,
          backgroundColor: theme ? '#343A40' : 'white',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              size={27}
              color={
                focused
                  ? theme
                    ? 'white'
                    : 'orange'
                  : theme
                  ? '#6C757D'
                  : 'black'
              }
            />
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
              color={
                focused
                  ? theme
                    ? 'white'
                    : 'orange'
                  : theme
                  ? '#6C757D'
                  : 'black'
              }
            />
          ),
        }}
        name="Search"
        component={SearchMain}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="bookmark"
              size={27}
              color={
                focused
                  ? theme
                    ? 'white'
                    : 'orange'
                  : theme
                  ? '#6C757D'
                  : 'black'
              }
            />
          ),
        }}
        name="Saved"
        component={Saved}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="settings"
              size={27}
              color={
                focused
                  ? theme
                    ? 'white'
                    : 'orange'
                  : theme
                  ? '#6C757D'
                  : 'black'
              }
            />
          ),
        }}
        name="Setting"
        component={Settings}
      />
    </Tab.Navigator>
  );
};
