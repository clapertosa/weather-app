import React from "react";
import styled from "styled-components";
import { Transition, animated } from "react-spring/renderprops";

const Container = styled(animated.div)`
  position: fixed;
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

const Background = ({ picture }) => {
  return (
    <Transition
      native
      items={picture}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {picture =>
        picture &&
        (props => (
          <Container style={props}>
            <img src={picture} />
          </Container>
        ))
      }
    </Transition>
  );
};

export default Background;
