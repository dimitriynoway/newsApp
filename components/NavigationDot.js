import React from 'react';
import {TouchableOpacity, Animated} from 'react-native';

export default NavigationDot = ({
  scrollTo,
  activeSliderIndex,
  setActiveSliderIndex,
}) => {
  const onPress = () => {
    scrollTo();
    setActiveSliderIndex();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={{
          width: 14,
          height: 14,
          backgroundColor: activeSliderIndex ? 'white' : 'orange',
          borderRadius: 7,
          marginHorizontal: 4,
          borderWidth: 2,
          borderColor: activeSliderIndex ? 'orange' : 'lightgrey',
        }}
      />
    </TouchableOpacity>
  );
};
