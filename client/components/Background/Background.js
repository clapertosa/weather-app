import React from "react";
import styled from "styled-components";
import backgroundPic from "./background.jpg";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(20px);
    transform: scale(1.1);
  }
`;

const Background = () => {
  return (
    <Container>
      <img src={backgroundPic} alt="" />
    </Container>
  );
};

export default Background;
