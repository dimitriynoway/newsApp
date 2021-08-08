import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import Swiper from '../../components/Swiper';
import HotNewsList from '../../components/HotNewsList';

const {width, height} = Dimensions.get('screen');

export default Home = props => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{
        height: height,
        width: width,
        backgroundColor: 'lightgrey',
      }}>
      <Swiper {...props} />
      <HotNewsList {...props} title="Latest News" />
    </ScrollView>
  );
};
