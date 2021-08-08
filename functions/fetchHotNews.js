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
    console.log(1);
    const news = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=6d94eef8169646a9b751fa7b75a56ea9',
    );
    console.log(2);
    console.log(news);
    dispatch(SET_HOT_NEWS(news.data.articles));
    dispatch(STOP_FETCHING_NEWS());
    dispatch(IS_DATA_FETCHED());
  };
};
