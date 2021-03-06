const initialState = {logged: false, user: {username: '', email: '', id: ''}};

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
    case 'SET_USER_NAME':
      return {
        ...state,
        user: {...state.user, username: action.payload.username},
      };
    case 'SET_EMAIL':
      return {
        ...state,
        user: {...state.user, email: action.payload.email},
      };
    case 'SET_USER_ID':
      return {
        ...state,
        user: {...state.user, id: action.payload.id},
      };

    default:
      return state;
  }
};
