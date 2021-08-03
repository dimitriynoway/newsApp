import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';

import store from './store/store';

import BottomTabs from './navigation/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
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
