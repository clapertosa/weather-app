import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  locationsReducer,
  currentLocationReducer,
  forecastsReducer,
  pictureReducer
} from "./store/reducers";

const rootReducer = combineReducers({
  locations: locationsReducer,
  currentLocation: currentLocationReducer,
  forecasts: forecastsReducer,
  picture: pictureReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
