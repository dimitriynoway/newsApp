import {SET_SAVED_NEWS} from '../store/actions/newsActions';

export default set_saved_news = async (dispatch, _id, got_saved_gql) => {
  console.log('hello');
  const res = await got_saved_gql({
    variables: {
      getSavedNewsId: _id,
    },
  });
  if (res) {
    const array = res.data.getSavedNews; //array of news
    if (array.length > 0) {
      dispatch(SET_SAVED_NEWS(array));
    }
  }
};
