import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import { connect } from "react-redux";
import { getForecasts } from "../store/actions/forecasts";
import Background from "../components/Background/Background";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherWidget from "../components/WeatherWidget/WeatherWidget";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas: "searchbar" "weather";
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
`;

const Weather = ({ forecasts, getForecasts }) => {
  const [currentLocation, setCurrentLocation] = useState({
    name: "San Francisco",
    suffix: "San Francisco City and County, California"
  });

  useEffect(() => {
    // getForecasts(37.773972, -122.431297);
  }, []);

  const setLocation = async (latitude, longitude, name, suffix) => {
    await getForecasts(latitude, longitude);
    setCurrentLocation({ name, suffix });
  };

  return (
    <Container>
      <Background />
      <SearchBar setLocation={setLocation} />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <WeatherWidget
            style={props}
            city={currentLocation.name}
            citySuffix={currentLocation.suffix}
            forecasts={forecasts.data}
          />
        )}
      </Spring>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    forecasts: state.forecasts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getForecasts: (latitude, longitude) =>
      dispatch(getForecasts(latitude, longitude))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
