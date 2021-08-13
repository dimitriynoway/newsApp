import React from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import Spiner from 'react-native-spinkit';
export default Loading = ({
  backgroundColor = 'white',
  spinerColor = 'orange',
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Spiner color={spinerColor} size={100} type="ThreeBounce" />
    </View>
  );
};
//Bounce, ThreeBounce, Circle
