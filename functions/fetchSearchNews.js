import axios from 'axios';
import {SET_SEARCH_NEWS} from '../store/actions/newsActions';
export default keyWord => {
  return async dispatch => {
    const news = await axios.get(
      `https://newsapi.org/v2/everything?q=${keyWord}&apiKey=6d94eef8169646a9b751fa7b75a56ea9`,
    );
    dispatch(SET_SEARCH_NEWS(news.data.articles));
  };
};
