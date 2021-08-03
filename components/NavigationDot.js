import React from 'react';
import {TouchableOpacity, Animated} from 'react-native';

export default NavigationDot = ({scrollTo}) => {
  return (
    <TouchableOpacity onPress={scrollTo}>
      <Animated.View
        style={{
          width: 12,
          height: 12,
          backgroundColor: 'orange',
          borderRadius: 6,
          marginHorizontal: 5,
        }}
      />
    </TouchableOpacity>
  );
};
