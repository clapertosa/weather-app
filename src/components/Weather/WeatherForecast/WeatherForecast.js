import React from "react";
import styles from "./WeatherForecast.scss";
import { Spring } from "react-spring";

const WeatherForecast = props => {
  function nextDays(index) {
    let day = new Array(3);
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const today = new Date().getDay();
    for (let i = 1; i <= 3; i++) {
      day[i - 1] = today + i >= 7 ? weekday[today + i - 7] : weekday[today + i];
    }
    return day[index - 1];
  }
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {animation => (
        <div style={animation} className={styles.forecasts}>
          <div>
            <h2>{nextDays(props.currentDay)}</h2>

            <img src={props.image} alt={props.forecast.weatherDescription} />
            <p className={styles["weather-description"]}>
              {props.forecast.weatherDescription}
            </p>
            <p>
              Temperature: {(props.forecast.temperature - 273.15).toFixed(1)} °C
            </p>
            <p>Winds: {props.forecast.wind} m/s</p>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default WeatherForecast;
