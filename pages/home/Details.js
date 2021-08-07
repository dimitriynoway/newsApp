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
import Comment from 'react-native-vector-icons/FontAwesome';
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
      <View>
        <SharedElement id={`item.${item.publishedAt}.photo`}>
          <Image
            resizeMode="cover"
            source={{uri: item.urlToImage}}
            style={{
              width,
              height: height * 0.4,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          />
          {/* <View
            style={{
              flex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,.4)',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          /> */}
        </SharedElement>

        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            position: 'absolute',
            top: 2 * PADDING,
            left: PADDING,
          }}>
          <Icon name="arrow-back-ios" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('add to book marks')}
          style={{
            position: 'absolute',
            top: 2 * PADDING,
            right: 3 * PADDING,
          }}>
          <Icon name="share" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('add to book marks')}
          style={{
            position: 'absolute',
            top: 2 * PADDING,
            right: PADDING,
          }}>
          <Icon name="bookmark" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('add to book marks')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            bottom: PADDING,
            right: 4.5 * PADDING,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="remove-red-eye" size={26} color="white" />
          <Text
            style={{
              color: 'white',
              marginLeft: 5,
            }}>
            123
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('add to book marks')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: PADDING,
            right: PADDING,
          }}>
          <Comment name="comment" size={26} color="white" />
          <Text
            style={{
              color: 'white',
              marginLeft: 5,
            }}>
            123
          </Text>
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
    </View>
  );
};

// Details.sharedElements = (route, otherRoute, showing) => {
//   const {item} = route.params;
//   return [`item.${item.publishedAt}.photo`];
// };

export default Details;
