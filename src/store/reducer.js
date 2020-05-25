const initialState = {
  darkMode: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return {
        ...state,
        darkMode: !state.darkMode
      };
    case 'SET_WEATHER':
      action.payload.daily.pop();
      action.payload.daily.pop();
      return {
        ...state,
        weather: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
