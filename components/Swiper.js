import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import {useSelector} from 'react-redux';
import parseTime from '../functions/parseTime';
const {width, height} = Dimensions.get('screen');

let ITEM_WIDTH = width * 0.8;
let ITEM_HEIGHT = height * 0.23;
const CONTENT_WIDTH = ITEM_WIDTH - 40;
const CONTENT_HEIGHT = ITEM_HEIGHT - 40;

export default Slider = ({navigation}) => {
  const filteredNews = useSelector(state =>
    state.news.news.hotNews.filter(item => item.urlToImage),
  );
  const itemArray = filteredNews.filter((item, index) => index < 5);
  const currentDate = new Date();

  //   const date = Date.parse('2021-08-04T16:11:00Z');
  //   const x = new Date();
  //   const dateNow = Date.parse(x);
  //   console.log('pastDate: ', date);
  //   console.log('nowDate:', dateNow);
  //   console.log('diffInTime:', dateNow - date);
  //   console.log('diffInTimeInSecconds: ', (dateNow - date) / 1000);
  //   console.log('diffInTimeInMinutes: ', (dateNow - date) / 1000 / 60);
  //   console.log('diffInTimeInHours: ', (dateNow - date) / 1000 / 60 / 60);
  //   console.log(parseTime('2021-08-04T16:11:00Z', new Date()));

  return (
    <View
      style={{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        marginTop: 25,
        borderRadius: 15,
        marginBottom: 40,
      }}>
      <Swiper
        autoplay={true}
        autoplayTimeout={1}
        dot={
          <View
            style={{
              backgroundColor: 'orange',
              width: 10,
              height: 10,
              borderRadius: 5,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: 'white',
              width: 12,
              height: 12,
              borderRadius: 6,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 3,
              marginBottom: 3,
              borderWidth: 2,
              borderColor: 'orange',
            }}
          />
        }
        paginationStyle={{
          position: 'absolute',
          bottom: -40,
        }}>
        {itemArray.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.block1}
              key={index}
              // onPress={() => props.navigation.navigate('Detatils', {item})}
              onPress={() => navigation.navigate('Details', {item})}>
              <View //?CONTENT VIEW
                style={{
                  width: CONTENT_WIDTH,
                  height: CONTENT_HEIGHT,
                  position: 'absolute',
                  zIndex: 3,
                }}>
                <Text
                  style={{
                    position: 'absolute',
                    zIndex: 4,
                    top: 0,
                    left: 0,
                    color: 'white',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  {parseTime(item.publishedAt, currentDate)}
                </Text>
                <Icon
                  name="bookmark"
                  size={27}
                  color="white"
                  style={{position: 'absolute', top: 0, right: 0}}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    position: 'absolute',
                    zIndex: 4,
                    bottom: 0,
                    left: 0,
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '400',
                  }}>
                  {item.title}
                </Text>
              </View>

              <SharedElement id={`item.${item.publishedAt}.photo`}>
                <Image
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    borderRadius: 15,
                  }}
                  source={{uri: item.urlToImage}}
                  resizeMode="cover"
                />
              </SharedElement>

              <View
                style={{
                  backgroundColor: 'black',
                  position: 'absolute',
                  borderRadius: 15,
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  zIndex: 2,
                  opacity: 0.5,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  block1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
