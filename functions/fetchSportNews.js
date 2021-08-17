import axios from 'axios';
import {SET_SPORT_NEWS} from '../store/actions/newsActions';
export default () => {
  return async dispatch => {
    // dispatch(START_FETCHING_NEWS());
    const news = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=sports&apiKey=6d94eef8169646a9b751fa7b75a56ea9`,
    );
    dispatch(SET_SPORT_NEWS(news.data.articles));
  };
};
