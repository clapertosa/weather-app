import React from "react";
import styled from "styled-components";
import Jumbotron from "./Jumbotron/Jumbotron";
import Forecasts from "./Forecasts/Forecasts";

const Wrapper = styled.div`
  grid-area: weather;
  min-height: 650px;
  max-width: 70rem;
  width: 95%;
  margin: 20px auto;

  @media (min-width: ${({ theme: { mediaQueryMinWidth } }) =>
      mediaQueryMinWidth}) {
    width: 85%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-areas: "jumbotron" "forecasts";
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  border-radius: 5px;
  overflow: hidden;
`;

const WeatherWidget = ({ style, city, citySuffix, forecasts }) => {
  return (
    <Wrapper style={style}>
      <Container>
        <Jumbotron
          city={city}
          citySuffix={citySuffix}
          sunrise={forecasts.daily && forecasts.daily.data[0].sunriseTime}
          sunset={forecasts.daily && forecasts.daily.data[0].sunsetTime}
          lunarCycle={forecasts.daily && forecasts.daily.data[0].moonPhase}
        />
        <Forecasts forecasts={forecasts} />
      </Container>
    </Wrapper>
  );
};

export default WeatherWidget;
