import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Details from './Details';
import TopTabNavigation from '../../navigation/TopTabNavigation';

const Stack = createSharedElementStackNavigator();
export default BreakinCompose = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={TopTabNavigation} />
      <Stack.Screen
        name="Details"
        component={Details}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const {item} = route.params;
          return [`item.${item.publishedAt}.photo`];
        }}
      />
    </Stack.Navigator>
  );
};
