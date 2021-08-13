import React from 'react';
import {SafeAreaView, Text, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Health from '../pages/home/Health';
import Tech from '../pages/home/Tech';
import Sport from '../pages/home/Sport';
import Breaking from '../pages/home/Breaking';
import {useSelector} from 'react-redux';
import Loading from '../components/Loading';

const Tab = createMaterialTopTabNavigator();

const {width, heigth} = Dimensions.get('screen');

export default TopTabNavigation = props => {
  const theme = useSelector(state => state.theme.themeDark);
  const isBreakingDataFetched = useSelector(state => state.news.isDataFetched);
  return isBreakingDataFetched ? (
    <SafeAreaView
      style={{
        backgroundColor: theme ? '#343A40' : '#e9ecef',
        flex: 1,
      }}>
      <Tab.Navigator
        swipeEnabled={false}
        //sceneContainerStyle={{backgroundColor: 'red'}}
        tabBarOptions={{
          style: {
            backgroundColor: theme ? '#343A40' : '#e9ecef',
            // marginTop: 42,
          },

          indicatorStyle: {
            backgroundColor: 'orange',
          },
          activeTintColor: 'rgba(0,0,0,1)',
          inactiveTintColor: 'rgba(0,0,0,.4)',
          labelStyle: {
            fontWeight: '500',
            color: theme ? 'white' : 'black',
          },
          //allowFontScaling: true,
        }}>
        <Tab.Screen name="Breaking" component={Breaking} {...props} />
        <Tab.Screen name="Health" component={Health} {...props} />
        <Tab.Screen name="Tech" component={Tech} {...props} />
        <Tab.Screen name="Sport" component={Sport} {...props} />
      </Tab.Navigator>
    </SafeAreaView>
  ) : (
    <Loading />
  );
};
