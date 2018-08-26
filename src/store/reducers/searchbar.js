import * as actionTypes from "../actions/actionTypes";

const initialState = {
  searchedCity: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUERY:
      return { ...state, searchedCity: action.payload };
    default:
      return state;
  }
};

export default reducer;
