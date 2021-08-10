const initialState = {logged: false};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOG_IN':
      return {
        ...state,
        logged: true,
      };
    case 'SET_LOG_OUT':
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
};
