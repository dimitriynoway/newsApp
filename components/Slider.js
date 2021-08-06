import React, {useRef, useCallback, useState, useEffect} from 'react';
import {View, Animated, FlatList, Dimensions} from 'react-native';
import NavigationDots from './NavigationDots';
import data from '../data';
import {useDispatch} from 'react-redux';
import fetchNews from '../functions/fetchNews';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.8;
const PADDING = width * 0.05;
const SIDE_SPACER = (width - ITEM_WIDTH) / 2;

export default Slider = () => {
  const [activeSliderIndex, setActiveSliderIndex] = useState(1);
  const ref = useRef();
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollTo = useCallback(index => {
    ref?.current?.scrollToOffset({
      offset: index * ITEM_WIDTH,
    });
    //!
  });

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 300,
      }}>
      <Animated.FlatList
        ref={ref}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 2) * ITEM_WIDTH,
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
          });
          if (item.key) {
            return <View style={{width: SIDE_SPACER}} />;
          }

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH - PADDING * 2,
                height: 160,

                backgroundColor: item.color, //*optional
                transform: [{translateY}],
                borderRadius: 15,
                marginHorizontal: PADDING,
                opacity,
              }}></Animated.View>
          );
        }}
        horizontal
        snapToInterval={ITEM_WIDTH}
        decelerationRate={0}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        scrollEnabled={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
      />
      <NavigationDots
        scrollTo={scrollTo}
        data={data}
        scrollX={scrollX}
        activeSliderIndex={activeSliderIndex}
        setActiveSliderIndex={setActiveSliderIndex}
      />
    </View>
  );
};
