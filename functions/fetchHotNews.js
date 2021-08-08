import axios from 'axios';
import {
  START_FETCHING_NEWS,
  STOP_FETCHING_NEWS,
  SET_HOT_NEWS,
  IS_DATA_FETCHED,
} from '../store/actions/newsActions';
export default () => {
  return async dispatch => {
    dispatch(START_FETCHING_NEWS());
    const news = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=e35f3aa11989451ebfb5a790050fb4ab',
    );

    dispatch(SET_HOT_NEWS(news.data.articles));
    dispatch(STOP_FETCHING_NEWS());
    dispatch(IS_DATA_FETCHED());
  };
};
