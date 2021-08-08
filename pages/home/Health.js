import React, {useEffect} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import HealthNewsList from '../../components/HealthNewsList';

import fetchHealthNews from '../../functions/fetchHealthNews';

const {width, height} = Dimensions.get('screen');
//!fetch Function call
export default Health = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHealthNews());
  }, []);
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
      <HealthNewsList {...props} title={'Health'} />
    </ScrollView>
  );
};
