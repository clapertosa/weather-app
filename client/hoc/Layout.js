import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  mediaQueryMinWidth: "40rem"
};

const Container = styled.div`
  display: grid;
  grid-template-areas: "searchbar" "weather";
  grid-template-rows: auto 1fr;
  margin: auto;
  height: 100%;
  width: 95%;

  @media (min-width: ${({ theme: { mediaQueryMinWidth } }) =>
      mediaQueryMinWidth}) {
    width: 80%;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
