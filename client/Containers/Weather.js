import React from "react";
import styled from "styled-components";
import Background from "../components/Background/Background";
import SearchBar from "../components/SearchBar/SearchBar";

const Container = styled.div`
  height: 100%;
`;

const Weather = () => {
  return (
    <Container>
      <Background />
      <SearchBar />
    </Container>
  );
};

export default Weather;
