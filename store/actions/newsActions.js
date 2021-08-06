export const START_FETCHING_NEWS = () => {
  return {
    type: 'START_FETCHING_NEWS',
  };
};
export const STOP_FETCHING_NEWS = () => {
  return {
    type: 'STOP_FETCHING_NEWS',
  };
};
export const SET_NEWS = data => {
  return {
    type: 'SET_NEWS',
    payload: {
      data,
    },
  };
};
export const IS_DATA_FETCHED = () => {
  return {
    type: 'IS_DATA_FETCHED',
  };
};
