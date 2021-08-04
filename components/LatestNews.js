import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const PADDING = width * 0.1;

export default LatestNews = () => {
  return (
    <View style={{height, width}}>
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
      {/* {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <View
            key={index}
            style={{width: width, height: 100, backgroundColor: 'red'}}></View>
        );
      })} */}
    </View>
  );
};
