import fetchHotNews from '../functions/fetchHotNews';
import {
  SET_EMAIL,
  SET_LOG_IN,
  SET_USER_ID,
  SET_USER_NAME,
} from '../store/actions/authActions';
import * as Keychain from 'react-native-keychain';
import setSavedNews from './Login.setSavedNews';
export default checkUserStatus = async (dispatch, navigation, gql) => {
  try {
    const keychain_res = await Keychain.getGenericPassword();
    if (keychain_res) {
      const {username} = keychain_res;
      const {keychain_username, keychain_email, keychain_user_id} =
        JSON.parse(username);
      dispatch(SET_LOG_IN());
      dispatch(SET_EMAIL(keychain_email));
      dispatch(SET_USER_NAME(keychain_username));
      dispatch(SET_USER_ID(keychain_user_id));
      await setSavedNews(dispatch, keychain_user_id, gql);
      dispatch(fetchHotNews());
      navigation.navigate('Main');
    }
  } catch (error) {
    throw new Error(error);
  }
};
