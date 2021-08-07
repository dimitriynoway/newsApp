import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Details from './Details';
import TopTabNavigation from '../../navigation/TopTabNavigation';

const Stack = createSharedElementStackNavigator();
export default BreakinCompose = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none" mode="modal">
      <Stack.Screen name="Home" component={TopTabNavigation} />
      <Stack.Screen
        options={() => ({
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {duration: 300},
            },
            close: {
              animation: 'spring',
              config: {duration: 300},
            },
          },
          cardStyle: {
            backgroundColor: 'transparent',
          },
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
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
