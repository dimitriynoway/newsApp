import {useLazyQuery, useMutation} from '@apollo/client';
import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import getSavedNews from '../../apollo/gql/getSavedNews';
import BreakingItem from '../../components/BreakingItem';
const PADDING = 30;
import * as Keychain from 'react-native-keychain';
import {useDispatch, useSelector} from 'react-redux';
import {SET_SAVED_NEWS} from '../../store/actions/newsActions';

export default Saved = props => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.user.id);
  const savedNews = useSelector(state => state.news.news.saved);
  // const [setId, {loading, data}] = useLazyQuery(getSavedNews, {
  //   fetchPolicy: 'network-only',
  // });
  // const [update, setUpdate] = React.useState(false);

  // React.useEffect(async () => {
  //   setId({variables: {getSavedNewsId: id}});
  // }, [update]);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{paddingLeft: PADDING, paddingTop: PADDING / 2}}>
        <Text
          style={{
            color: 'white',
            fontSize: 29,
            fontWeight: '500',
          }}>
          Saved
        </Text>
      </View>
      <View style={{marginTop: PADDING / 2}}>
        {savedNews.length > 0 &&
          savedNews.map((item, index) => {
            return <BreakingItem {...props} item={item} key={index} />;
          })}
      </View>
    </ScrollView>
  );
};
