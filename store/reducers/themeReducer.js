const initialState = {themeDark: false};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        themeDark: !state.themeDark,
      };

    default:
      return state;
  }
};
