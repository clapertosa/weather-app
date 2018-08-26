import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherMain from "./WeatherMain/WeatherMain";
import WeatherForecast from "./WeatherForecast/WeatherForecast";
import styles from "./Weather.scss";
import { getWeatherImage } from "../../shared/weatherImage";
import NoWeather from "./NoWeather/NoWeather";
import Spinner from "../Spinner/Spinner";

class Weather extends Component {
  renderWeather() {
    if (!this.props.city) {
      return <NoWeather />;
    } else if (this.props.loading) {
      return <Spinner />;
    } else if (this.props.city && !this.props.loading && this.props.error) {
      return <NoWeather error={this.props.error} />;
    }
    return (
      <div className={styles["weather-main-container"]}>
        <WeatherMain
          forecast={this.props.weather.main}
          image={getWeatherImage(this.props.weather.main.weatherID, false)}
        />
        <div className={styles["weather-forecasts-container"]}>
          <WeatherForecast
            currentDay={1}
            forecast={this.props.weather.day1}
            image={getWeatherImage(this.props.weather.day1.weatherID, true)}
          />
          <WeatherForecast
            currentDay={2}
            forecast={this.props.weather.day2}
            image={getWeatherImage(this.props.weather.day2.weatherID, true)}
          />
          <WeatherForecast
            currentDay={3}
            forecast={this.props.weather.day3}
            image={getWeatherImage(this.props.weather.day3.weatherID, true)}
          />
        </div>
      </div>
    );
  }

  render() {
    return this.renderWeather();
  }
}

const mapStateToProps = state => {
  return {
    error: state.weather.error,
    weather: state.weather.forecasts,
    loading: state.weather.loading,
    city: state.searchbar.searchedCity
  };
};

export default connect(
  mapStateToProps,
  null
)(Weather);
