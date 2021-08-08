import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import BreakingItem from './BreakingItem';

const {width, height} = Dimensions.get('screen');

const PADDING = width * 0.1;

export default HealthNewsList = props => {
  const {title} = props;
  const filteredNews = useSelector(state =>
    state.news.news.tech.filter(item => item.urlToImage),
  );
  const techTopTenNews = filteredNews.filter(
    (item, index) => index >= 0 && index < 10,
  );

  return (
    <View style={{width}}>
      <View style={{paddingLeft: PADDING, paddingTop: PADDING / 2}}>
        <Text
          style={{
            color: 'black',
            fontSize: 29,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </View>
      <View style={{marginTop: PADDING / 2}}>
        {techTopTenNews.length > 0 &&
          techTopTenNews.map((item, index) => {
            return <BreakingItem {...props} item={item} key={index} />;
          })}
      </View>
    </View>
  );
};
