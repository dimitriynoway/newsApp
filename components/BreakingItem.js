import React from 'react';
import {View, Text, SafeAreaView, Dimensions, Image} from 'react-native';
import parseTime from '../functions/parseTime';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('screen');
const PADDING = width * 0.1;
const ITEM_PHOTO = width * 0.32;

const currentDate = new Date();

export default BreakingItem = ({img, title, date}) => {
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
            {title}
          </Text>
          <Text
            style={{
              position: 'absolute',
              bottom: 10,
              left: 0,
              fontSize: 14,
              fontWeight: '400',
            }}>
            {parseTime(date, currentDate)}
          </Text>
          <Icon
            name="bookmark"
            size={16}
            color="orange"
            style={{
              position: 'absolute',
              bottom: 10,
              right: 20,
            }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: ITEM_PHOTO,
          height: ITEM_PHOTO,
          marginLeft: PADDING,
          borderRadius: 10,
        }}>
        <Image
          source={{uri: img}}
          resizeMode={'cover'}
          style={{flex: 1, borderRadius: 10}}
        />
      </View>
    </View>
  );
};
