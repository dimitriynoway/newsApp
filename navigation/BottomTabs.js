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
import * as Keychain from 'react-native-keychain';
import {
  SET_EMAIL,
  SET_LOG_IN,
  SET_USER_ID,
  SET_USER_NAME,
} from '../store/actions/authActions';
import fetchHotNews from '../functions/fetchHotNews';
import SavedMain from '../pages/saved/SavedMain';

const Tab = createBottomTabNavigator();

export default BottomTabs = ({navigation}) => {
  const checkUserStatus = async () => {
    try {
      const keychain_res = await Keychain.getGenericPassword();
      if (keychain_res) {
        const {username} = keychain_res;
        const {keychain_username, keychain_email, keychain_user_id} =
          JSON.parse(username);
        dispatch(SET_LOG_IN());
        dispatch(SET_EMAIL(keychain_email));
        dispatch(SET_USER_NAME(keychain_username));
        dispatch(SET_USER_ID(keychain_user_id));
        dispatch(fetchHotNews());
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  React.useEffect(async () => {
    await checkUserStatus();
  }, []);
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
        component={SavedMain}
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
