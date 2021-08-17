import {useMutation} from '@apollo/client';
import React, {useEffect, useMemo, useCallback, memo} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import getSavedNews from '../apollo/gql/getSavedNews';
import BreakingItem from './BreakingItem';

const {width, height} = Dimensions.get('screen');

const PADDING = width * 0.1;

const HotNewsList = props => {
  const theme = useSelector(state => state.theme.themeDark);
  const id = useSelector(state => state.auth.user.id);
  const {title} = props;
  const filteredNews = useSelector(state =>
    state.news.news.hotNews.filter(item => item.urlToImage),
  );
  const newsArray5_15 = useMemo(() => {
    return filteredNews.filter((item, index) => index > 7 && index < 21);
  });

  return (
    <View style={{width}}>
      <View style={{paddingLeft: PADDING, paddingTop: PADDING / 2}}>
        <Text
          style={{
            color: theme ? 'white' : 'black',
            fontSize: 29,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </View>
      <View style={{marginTop: PADDING / 2}}>
        {newsArray5_15.length > 0 &&
          newsArray5_15.map((item, index) => {
            return <BreakingItem {...props} item={item} key={index} />;
          })}
      </View>
    </View>
  );
};
export default MemoizedHotNewsList = memo(HotNewsList);
