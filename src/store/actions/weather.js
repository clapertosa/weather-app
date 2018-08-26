import * as actionTypes from "./actionTypes";
import keys from "../../../config/keys";
import axios from "axios";

export const initForecasts = () => {
  return {
    type: actionTypes.INIT_FORECASTS
  };
};

export const getForecasts = city => {
  return dispatch => {
    dispatch(initForecasts());
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          keys.apiKey
        }`
      )
      .then(data => dispatch(setForecasts(data.data)))
      .catch(error => dispatch(forecastsFailed(error.response.data.message)));
  };
};

const setForecasts = data => {
  return {
    type: actionTypes.FORECASTS_SUCCESS,
    payload: data
  };
};

const forecastsFailed = error => {
  return {
    type: actionTypes.FORECASTS_FAILED,
    payload: error
  };
};
