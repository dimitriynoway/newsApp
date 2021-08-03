import React, {useRef, useCallback} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ADD_ACTION from '../../store/actions';
import data from '../../data';
import NavigationDots from '../../components/NavigationDots';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.8;
const PADDING = width * 0.05;
const SIDE_SPACER = (width - ITEM_WIDTH) / 2;

export default Home = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.value);
  const ref = useRef();

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollTo = useCallback(index => {
    ref?.current?.scrollToOffset({
      offset: index * ITEM_WIDTH,
    });
  });

  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
      }}>
      <Text>Hello</Text>
      <Text>Value: ${value}</Text>
      <Button title="AddOne" onPress={() => dispatch(ADD_ACTION())} />

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
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
        />
      </View>
      <NavigationDots scrollTo={scrollTo} data={data} scrollX={scrollX} />
    </View>
  );
};
