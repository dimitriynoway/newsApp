import React, {useEffect} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SportNewsList from '../../components/SportNewsList';

import fetchSportNews from '../../functions/fetchSportNews';

const {width, height} = Dimensions.get('screen');
//!fetch Function call
export default Tech = props => {
  const theme = useSelector(state => state.theme.themeDark);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSportNews());
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
      <SportNewsList {...props} title={'Sport'} />
    </ScrollView>
  );
};
