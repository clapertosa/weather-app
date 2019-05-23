import React from "react";
import styled from "styled-components";
import { Transition } from "react-spring/renderprops";

const Container = styled.div`
  grid-area: results;
  position: absolute;
  top: 5rem;
  border: 2px solid gray;
  border-radius: 10px;
  max-width: 800px;
  width: 95%;
  overflow: hidden;

  @media (min-width: ${({ theme: { mediaQueryMinWidth } }) =>
      mediaQueryMinWidth}) {
    width: 70%;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  background-color: #00000085;
`;

const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 5px 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: whitesmoke;
  background-color: ${({ index }) => (index % 2 === 0 ? "#0006" : "#0003")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.lightBlue};
  }
`;

const Results = ({ setLocation, show, results }) => {
  return (
    <Transition
      items={show}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {show =>
        show &&
        (props => (
          <Container style={props}>
            <List>
              {results.length > 0 &&
                results.slice(0, 5).map((result, index) => (
                  <ListItem
                    key={index}
                    onClick={() =>
                      setLocation(
                        result.lat,
                        result.lon,
                        result.name,
                        result.name_suffix
                      )
                    }
                    index={index}
                    tabIndex={index}
                    className="list-item"
                  >
                    {result.display_name}
                  </ListItem>
                ))}
            </List>
          </Container>
        ))
      }
    </Transition>
  );
};

export default Results;
