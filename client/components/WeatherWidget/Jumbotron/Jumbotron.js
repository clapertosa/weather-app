import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Transition } from "react-spring/renderprops";
import { sunTime } from "../../../utils/timestamp";
import moonPhase from "../../../utils/moonPhase";

const Container = styled.div`
  grid-area: jumbotron;
  display: grid;
  grid-template-areas: "city city-suffix" "sun moon";
  padding: 20px;
  min-height: 20rem;
  background: url("https://i.imgur.com/Zrv7OgJ.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  font-size: 1.5rem;
  text-shadow: 3px 3px 3px black;

  @media (min-width: ${({ theme: { mediaQueryMinWidth } }) =>
      mediaQueryMinWidth}) {
    min-height: 30rem;
  }
`;

const City = styled.div`
  grid-area: city;
  font-size: 2rem;
  font-weight: bold;

  @media (min-width: ${({ theme: { mediaQueryMinWidth } }) =>
      mediaQueryMinWidth}) {
    font-size: 3rem;
  }
`;

const CitySuffix = styled.div`
  grid-area: city-suffix;
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-flow: column;

  i {
    font-size: 2.5rem;
  }

  span {
    font-size: 1.2rem;
    margin: 5px 0;
    text-align: right;
  }
`;

const Sun = styled.div`
  grid-area: sun;
  margin-top: auto;

  span {
    font-size: 1.2rem;
  }
`;

const Moon = styled.div`
  grid-area: moon;
  margin-top: auto;
  margin-left: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: right;

  img {
    width: 30px;
    height: auto;

    @media (min-width: ${({ theme: { mediaQueryMinWidth } }) =>
        mediaQueryMinWidth}) {
      width: 50px;
    }
  }
`;

const Jumbotron = ({
  isForecastsLoading,
  city,
  citySuffix,
  sunrise,
  sunset,
  lunarCycle
}) => {
  return (
    <Container>
      <Transition
        items={isForecastsLoading}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {isForecastsLoading =>
          !isForecastsLoading &&
          (props => (
            <>
              <City style={props}>{city}</City>
              <CitySuffix style={props}>
                <i className="icon-map-marker" />
                <span>{citySuffix}</span>
              </CitySuffix>
              <Sun style={props}>
                <i className="icon-sunrise" /> <span>{sunTime(sunrise)}</span>
                <br />
                <i className="icon-sunset" /> <span>{sunTime(sunset)}</span>
              </Sun>
              <Moon style={props}>
                <img
                  src={moonPhase(lunarCycle).imagePath}
                  alt={moonPhase(lunarCycle).description}
                />
                <span>{moonPhase(lunarCycle).description}</span>
              </Moon>
            </>
          ))
        }
      </Transition>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isForecastsLoading: state.forecasts.loading
  };
};

export default connect(mapStateToProps)(Jumbotron);
