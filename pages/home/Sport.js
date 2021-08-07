import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import LatestNews from '../../components/LatestNews';

const {width, height} = Dimensions.get('screen');

export default Sport = props => {
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
      <LatestNews {...props} title={'Sport'} />
    </ScrollView>
  );
};
