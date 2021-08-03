import React from 'react';
import {View, Dimensions} from 'react-native';
import NavigationDot from './NavigationDot';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.8;

export default NavigationDots = ({scrollTo, data, scrollX}) => {
  return (
    <View
      style={{
        width,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {data.map((item, index) => {
        if (!item.key) {
          return (
            <NavigationDot key={index} scrollTo={() => scrollTo(index - 1)} />
          );
        }
      })}
    </View>
  );
};
