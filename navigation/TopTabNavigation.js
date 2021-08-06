import React from 'react';
import {SafeAreaView, Text, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Health from '../pages/home/Health';
import Tech from '../pages/home/Tech';
import Sport from '../pages/home/Sport';
import Breaking from '../pages/home/Breaking';

const Tab = createMaterialTopTabNavigator();

const {width, heigth} = Dimensions.get('screen');

export default TopTabNavigation = props => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      sceneContainerStyle={{backgroundColor: 'lightgrey'}}
      style={{paddingTop: 120, width}}
      tabBarOptions={{
        // style: {
        //   backgroundColor: 'white',
        // },

        indicatorStyle: {
          backgroundColor: 'orange',
        },
        activeTintColor: 'rgba(0,0,0,1)',
        inactiveTintColor: 'rgba(0,0,0,.4)',
        labelStyle: {
          fontWeight: '500',
        },
        //allowFontScaling: true,
      }}>
      <Tab.Screen name="Breaking" component={Breaking} {...props} />
      <Tab.Screen name="Health" component={Health} />
      <Tab.Screen name="Tech" component={Tech} />
      <Tab.Screen name="Sport" component={Sport} />
    </Tab.Navigator>
  );
};
