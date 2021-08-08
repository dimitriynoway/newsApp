import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('screen');
const PADDING = width * 0.1;
export default Item = ({
  theme,
  textColorDark,
  textColorLight,
  viewColorDark,
  viewColorLight,
  leftBottom,
  leftTop,
  rightBottom,
  rightTop,
}) => {
  return (
    <View
      style={{
        backgroundColor: theme ? viewColorDark : 'white',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING / 2,
        borderBottomLeftRadius: leftBottom,
        borderBottomRightRadius: rightBottom,
        borderTopLeftRadius: leftTop,
        borderTopRightRadius: rightTop,
      }}>
      <Text
        style={{
          color: theme ? 'white' : 'black',
        }}>
        Privacy and Security Help
      </Text>
      <Icon
        name="arrow-forward-ios"
        size={14}
        color={theme ? 'white' : 'black'}
      />
    </View>
  );
};
