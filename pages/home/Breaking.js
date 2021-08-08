import React from 'react';
import {Dimensions, ScrollView, StatusBar} from 'react-native';
import Swiper from '../../components/Swiper';
import HotNewsList from '../../components/HotNewsList';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('screen');

export default Home = props => {
  const theme = useSelector(state => state.theme.themeDark);
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
        backgroundColor: theme ? '#343A40' : '#e9ecef',
      }}>
      <Swiper {...props} />
      <HotNewsList {...props} title="Latest News" />
    </ScrollView>
  );
};
