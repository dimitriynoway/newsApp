import React, {useEffect} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HealthNewsList from '../../components/HealthNewsList';

import fetchHealthNews from '../../functions/fetchHealthNews';

const {width, height} = Dimensions.get('screen');
//!fetch Function call
export default Health = props => {
  const theme = useSelector(state => state.theme.themeDark);
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
        backgroundColor: theme ? '#343A40' : '#e9ecef',
      }}>
      <HealthNewsList {...props} title={'Health'} />
    </ScrollView>
  );
};
