import {combineReducers} from 'redux';
import newsReducer from './newsReducer';
import themeReducer from './themeReducer';
import authReducer from './authReducer';
export default rootReducer = combineReducers({
  news: newsReducer,
  theme: themeReducer,
  auth: authReducer,
});
