import * as actionTypes from "./actionTypes";

export const setQuery = query => {
  return {
    type: actionTypes.SET_QUERY,
    payload: query
  };
};
