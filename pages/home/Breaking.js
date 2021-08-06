import React, {useRef, useCallback} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ADD_ACTION from '../../store/actions/newsActions';
import data from '../../data';
import NavigationDots from '../../components/NavigationDots';
import Swiper from '../../components/Swiper';
import LatestNews from '../../components/LatestNews';

const {width, height} = Dimensions.get('screen');

export default Home = props => {
  const dispatch = useDispatch();

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      bounces={false}
      style={{
        height: height,
        width: width,
        backgroundColor: 'lightgrey',
      }}>
      {/* <Button title="AddOne" onPress={() => dispatch(ADD_ACTION())} /> */}
      <Swiper {...props} />
      <LatestNews {...props} />
    </ScrollView>
  );
};
