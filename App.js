import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
import {Provider} from 'react-redux';

import store from './store/store';

import BottomTabs from './navigation/BottomTabs';

import fetchHotNews from './functions/fetchHotNews';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotNews());
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          width,
          height,
          backgroundColor: 'grey',
        }}>
        <StatusBar backgroundColor="grey" />
        <BottomTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
//TODO: 1.Bottom tab Navigation DONE
//toDO: 2. top tab navigation DONE
//?try to fetch data from newsapi and store it in redux store
//todo 3. create home screen
//!lets go!
