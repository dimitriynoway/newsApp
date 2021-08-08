import axios from 'axios';
import {SET_SEARCH_NEWS} from '../store/actions/newsActions';
export default keyWord => {
  return async dispatch => {
    const news = await axios.get(
      `https://newsapi.org/v2/everything?q=${keyWord}&apiKey=e35f3aa11989451ebfb5a790050fb4ab`,
    );
    dispatch(SET_SEARCH_NEWS(news.data.articles));
  };
};
