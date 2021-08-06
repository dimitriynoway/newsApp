import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import parseTime from '../../functions/parseTime';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('screen');
const PADDING = (width * 0.1) / 2;
const Title = ({title}) => {
  return (
    <View
      style={{
        width,
        paddingHorizontal: PADDING,
        paddingTop: PADDING / 2,
        paddingBottom: PADDING / 4,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}>
      <View
        style={{backgroundColor: 'orange', width: 5, marginHorizontal: 5}}
      />
      <Text
        style={{
          fontSize: 23,
          fontWeight: '800',
          width: '90%',
        }}>
        {title}
      </Text>
    </View>
  );
};

const DetailText = ({description, content}) => {
  return (
    <View>
      <Text
        style={{
          paddingHorizontal: PADDING,
          fontWeight: '400',
          fontSize: 19,
          color: 'grey',
          paddingVertical: 10,
        }}>
        {description}
      </Text>
      <Text
        style={{
          paddingHorizontal: PADDING,
          fontWeight: '400',
          fontSize: 19,
          color: 'grey',
        }}>
        {content}
      </Text>
    </View>
  );
};

const Details = props => {
  const {item} = props.route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar hidden />
      <SharedElement id={`item.${item.publishedAt}.photo`}>
        <View>
          <Image
            resizeMode="cover"
            source={{uri: item.urlToImage}}
            style={{
              width,
              height: height * 0.37,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{
              position: 'absolute',
              top: 2 * PADDING,
              left: PADDING,
            }}>
            <Icon name="arrow-back-ios" size={26} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              bottom: PADDING,
              left: PADDING,
              color: 'white',
            }}>
            {parseTime(item.publishedAt)}
          </Text>
        </View>
        <Title title={item.title} />
        <DetailText description={item.description} content={item.content} />
      </SharedElement>
    </View>
  );
};

// Details.sharedElements = (route, otherRoute, showing) => {
//   const {item} = route.params;
//   return [`item.${item.publishedAt}.photo`];
// };

export default Details;
