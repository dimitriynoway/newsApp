import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Text, Button, Dimensions, StatusBar} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
import {Provider} from 'react-redux';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import store from './store/store';

import BottomTabs from './navigation/BottomTabs';

import fetchHotNews from './functions/fetchHotNews';
import Root from './navigation/Root';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotNews());
  }, []);
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default AppWrapper = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  );
};
//TODO: 1.Bottom tab Navigation DONE
//toDO: 2. top tab navigation DONE
//?try to fetch data from newsapi and store it in redux store
//todo 3. create home screen
//!lets go!
