import {useLazyQuery} from '@apollo/client';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import getSavedNews from '../../apollo/gql/getSavedNews';
import BreakingItem from '../../components/BreakingItem';
const PADDING = 30;
import * as Keychain from 'react-native-keychain';

export default Saved = props => {
  const [setId, {loading, data}] = useLazyQuery(getSavedNews, {
    fetchPolicy: 'network-only',
  });

  React.useEffect(async () => {
    try {
      const keychain_res = await Keychain.getGenericPassword();
      if (keychain_res) {
        const {username} = keychain_res;
        const {keychain_user_id} = JSON.parse(username);
        console.log(keychain_user_id);
        setId({variables: {getSavedNewsId: keychain_user_id}});
      }
    } catch (error) {}
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <View style={{flex: 1}}>
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
        {data &&
          data.getSavedNews.map((item, index) => {
            console.log(item);
            return <BreakingItem {...props} item={item} key={index} />;
          })}
      </View>
    </View>
  );
};
