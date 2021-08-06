import React from 'react';
import {Animated, Dimensions} from 'react-native';
import NavigationDot from './NavigationDot';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.8;

export default NavigationDots = ({
  scrollTo,
  data,
  scrollX,
  setActiveSliderIndex,
  activeSliderIndex,
}) => {
  return (
    <Animated.View
      style={{
        width,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
      }}>
      {data.map((item, index) => {
        if (!item.key) {
          return (
            <NavigationDot
              activeSliderIndex={activeSliderIndex == index ? true : false}
              key={index}
              scrollTo={() => scrollTo(index - 1)}
              setActiveSliderIndex={() => setActiveSliderIndex(index)}
            />
          );
        }
      })}
    </Animated.View>
  );
};
