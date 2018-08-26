import React, { Component } from "react";
import { Spring } from "react-spring";
import styles from "./NoWeather.scss";
import { sunny, moon } from "../../../assets/weather-images";

class NoWeather extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  getTime() {
    return `${this.state.date.getHours()}:${
      this.state.date.getMinutes() < 10
        ? "0" + this.state.date.getMinutes()
        : this.state.date.getMinutes()
    }:${
      this.state.date.getSeconds() < 10
        ? "0" + this.state.date.getSeconds()
        : this.state.date.getSeconds()
    }`;
  }
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {animation => (
          <div style={animation} className={styles["panel-no-weather"]}>
            {this.props.error ? (
              <div className={styles.error}>{this.props.error}</div>
            ) : (
              <div className={styles.hours}>{this.getTime()}</div>
            )}
            <div className={styles["weather-image"]}>
              {this.state.date.getHours() >= 5 &&
              this.state.date.getHours() <= 17 ? (
                <img src={sunny} />
              ) : (
                <img src={moon} />
              )}
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default NoWeather;
