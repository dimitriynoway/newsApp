const initialState = {news: [], fetchingNews: false, isDataFetched: false};

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
    case 'SET_NEWS':
      return {
        ...state,
        news: [...action.payload.data],
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
