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
export const SET_HOT_NEWS = data => {
  return {
    type: 'SET_HOT_NEWS',
    payload: {
      data,
    },
  };
};
export const SET_HEALTH_NEWS = data => {
  return {
    type: 'SET_HEALTH_NEWS',
    payload: {
      data,
    },
  };
};
export const SET_TECH_NEWS = data => {
  return {
    type: 'SET_TECH_NEWS',
    payload: {
      data,
    },
  };
};
export const SET_SPORT_NEWS = data => {
  return {
    type: 'SET_SPORT_NEWS',
    payload: {
      data,
    },
  };
};
export const SET_SEARCH_NEWS = data => {
  return {
    type: 'SET_SEARCH_NEWS',
    payload: {
      data,
    },
  };
};
export const SET_SAVED_NEWS = data => {
  return {
    type: 'SET_SAVED_NEWS',
    payload: {
      data,
    },
  };
};
export const ADD_SAVED_NEWS = data => {
  return {
    type: 'ADD_SAVED_NEWS',
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
