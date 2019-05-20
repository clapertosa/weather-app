import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: searchbar;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Input = styled.input`
  font-size: 2rem;
  width: 100%;
  border: 0;
  border-radius: 50px;
  background-color: #1e202c;
  text-indent: 50px;

  @media (min-width: ${({ theme: { mediaQueryMinWidth } }) =>
      mediaQueryMinWidth}) {
    width: 50%;
  }
`;

const SearchBar = () => {
  return (
    <Container>
      <Input />
    </Container>
  );
};

export default SearchBar;
