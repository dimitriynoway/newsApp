import React, {memo, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import parseTime from '../functions/parseTime';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('screen');
const PADDING = width * 0.1;
const ITEM_PHOTO = width * 0.32;

import {SharedElement} from 'react-navigation-shared-element';
import {useSelector} from 'react-redux';

const currentDate = new Date();
const BreakingItem = ({item, navigation}) => {
  const savedNewsArray = useSelector(state => state.news.news.saved);
  const [saved, setSaved] = useState(
    savedNewsArray.some(
      i => JSON.stringify(i.title) == JSON.stringify(item.title),
    ),
  );
  React.useEffect(() => {
    setSaved(
      savedNewsArray.some(
        i => JSON.stringify(i.title) == JSON.stringify(item.title),
      ),
    );
  }, [savedNewsArray]);
  return (
    <View
      style={{
        width: width,
        height: 150,
        // backgroundColor: 'red',
        marginVertical: 10,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          width: width - PADDING * 2,
          height: '90%',
          position: 'absolute',
          bottom: 0,
          right: 0,
          borderBottomLeftRadius: 10,
        }}>
        <View
          style={{
            // backgroundColor: 'orange',
            position: 'absolute',
            top: 10,
            left: ITEM_PHOTO - 30,
            right: 10,
            bottom: 10,
          }}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 17,
              fontWeight: '600',
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 10,
              left: 0,
              fontSize: 14,
              fontWeight: '400',
            }}>
            {parseTime(item.publishedAt, currentDate)}
          </Text>
          <Icon
            name="bookmark"
            size={16}
            color={saved ? 'orange' : 'grey'}
            style={{
              position: 'absolute',
              bottom: 10,
              right: 20,
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
        <SharedElement id={`item.${item.publishedAt}.photo`}>
          <View
            style={{
              backgroundColor: 'white',
              width: ITEM_PHOTO,
              height: ITEM_PHOTO,
              marginLeft: PADDING,
              borderRadius: 10,
            }}>
            <Image
              source={{uri: item.urlToImage}}
              resizeMode={'cover'}
              style={{flex: 1, borderRadius: 10}}
            />
          </View>
        </SharedElement>
      </TouchableOpacity>
    </View>
  );
};
export default memo(BreakingItem);
