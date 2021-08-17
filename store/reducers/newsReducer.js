const initialState = {
  news: {hotNews: [], health: [], tech: [], sport: [], search: [], saved: []},
  fetchingNews: false,
  isDataFetched: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCHING_NEWS':
      return {
        ...state,
        fetchingNews: true,
      };
    case 'STOP_FETCHING_NEWS':
      return {
        ...state,
        fetchingNews: false,
      };
    case 'SET_HOT_NEWS':
      return {
        ...state,
        news: {...state.news, hotNews: [...action.payload.data]},
      };
    case 'SET_HEALTH_NEWS':
      return {
        ...state,
        news: {...state.news, health: [...action.payload.data]},
      };
    case 'SET_TECH_NEWS':
      return {
        ...state,
        news: {...state.news, tech: [...action.payload.data]},
      };
    case 'SET_SPORT_NEWS':
      return {
        ...state,
        news: {...state.news, sport: [...action.payload.data]},
      };
    case 'SET_SEARCH_NEWS':
      return {
        ...state,
        news: {...state.news, search: [...action.payload.data]},
      };
    case 'SET_SAVED_NEWS':
      return {
        ...state,
        news: {...state.news, saved: [...action.payload.data]},
      };
    case 'ADD_SAVED_NEWS':
      return {
        ...state,
        news: {
          ...state.news,
          saved: [...state.news.saved, action.payload.data],
        },
      };
    case 'IS_DATA_FETCHED':
      return {
        ...state,
        isDataFetched: true,
      };
    default:
      return state;
  }
};
