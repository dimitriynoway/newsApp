let initialState = {value: 0};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      console.log(action);
      return {
        ...state,
        value: state.value + 1,
      };

    default:
      return state;
  }
};
