import {combineReducers} from 'redux';
import newsReducer from './newsReducer';
import themeReducer from './themeReducer';
export default rootReducer = combineReducers({
  news: newsReducer,
  theme: themeReducer,
});
