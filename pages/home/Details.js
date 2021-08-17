import React, {useState} from 'react';
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
import {useMutation} from '@apollo/client';
import addSavedNews from '../../apollo/gql/addSavedNews';
import * as Keychain from 'react-native-keychain';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_SAVED_NEWS} from '../../store/actions/newsActions';
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
  const dispatch = useDispatch();
  const {item} = props.route.params;
  const [setSavedNews] = useMutation(addSavedNews);
  const id = useSelector(state => state.auth.user.id);
  const savedNewsArray = useSelector(state => state.news.news.saved);
  const [saved, setSaved] = useState(
    savedNewsArray.length > 0 &&
      savedNewsArray.some(
        i => JSON.stringify(i.title) == JSON.stringify(item.title),
      ),
  );
  const savedNewsHandler = async () => {
    const res = await setSavedNews({
      variables: {
        id,
        addSavedNewsBody: item.content,
        addSavedNewsUrlToImage: item.urlToImage,
        addSavedNewsPublishedAt: item.publishedAt,
        addSavedNewsTitle: item.title,
      },
    });
    if (res) setSaved(true);
    const addedNews = res.data.addSavedNews;
    const existAlready = savedNewsArray.find(
      item => item.title == addedNews.title,
    );
    if (!existAlready) dispatch(ADD_SAVED_NEWS(addedNews));
    else {
      console.log('you have already saved this news');
    }
  };
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
          onPress={() => console.log('share')}
          style={{
            position: 'absolute',
            top: 2 * PADDING,
            right: 3 * PADDING,
          }}>
          <Icon name="share" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={savedNewsHandler}
          style={{
            position: 'absolute',
            top: 2 * PADDING,
            right: PADDING,
          }}>
          <Icon name="bookmark" size={26} color={saved ? 'orange' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('watched')}
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
          onPress={() => console.log('comments')}
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
