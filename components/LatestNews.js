import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import BreakingItem from './BreakingItem';

const {width, height} = Dimensions.get('screen');

const PADDING = width * 0.1;

export default LatestNews = props => {
  const newsArray5_15 = useSelector(state => {
    return state.news.filter((item, index) => index > 4 && index < 15);
  });
  // useEffect(() => {
  //   console.log('NEWSARRAY', newsArray);
  // }, [newsArray]);

  return (
    <View style={{width}}>
      <View style={{paddingLeft: PADDING, paddingTop: PADDING / 2}}>
        <Text
          style={{
            color: 'black',
            fontSize: 29,
            fontWeight: '500',
          }}>
          Latest News
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
