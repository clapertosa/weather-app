import React from "react";
import styles from "./WeatherMain.scss";
import { Spring } from "react-spring";

const WeatherMain = props => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {animation => (
        <div style={animation} className={styles.main}>
          <div className={styles["image-container"]}>
            <img src={props.image} alt={props.forecast.weatherDescription} />
          </div>
          <div className={styles["forecast-container"]}>
            <h2>
              {props.forecast.city}, {props.forecast.weatherDescription}
            </h2>
            <p>
              {(props.forecast.temperature - 273.15).toFixed(1)} °C from{" "}
              {(props.forecast.minTemp - 273.15).toFixed(1)} °C to{" "}
              {(props.forecast.maxTemp - 273.15).toFixed(1)} °С
            </p>
            <p>Wind: {props.forecast.wind} m/s</p>
            <p>Clouds: {props.forecast.clouds}%</p>
            <p>Pressure: {props.forecast.pressure} hpa</p>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default WeatherMain;
