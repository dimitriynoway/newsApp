import axios from 'axios';
import {
  START_FETCHING_NEWS,
  STOP_FETCHING_NEWS,
  SET_HOT_NEWS,
  IS_DATA_FETCHED,
  SET_HEALTH_NEWS,
} from '../store/actions/newsActions';
export default () => {
  return async dispatch => {
    // dispatch(START_FETCHING_NEWS());
    const news = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=health&apiKey=6d94eef8169646a9b751fa7b75a56ea9`,
    );
    console.log('YOUR ARE WELCOME', news.data.articles);
    dispatch(SET_HEALTH_NEWS(news.data.articles));
    // dispatch(STOP_FETCHING_NEWS());
    // dispatch(IS_DATA_FETCHED());
  };
};
