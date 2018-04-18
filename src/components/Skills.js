import React, { Component } from 'react';
import styled from 'styled-components';

//Components
import CenterBlock from './CenterBlock';
import Title from './Title';
import Header from './Header';
import FadeRight from './FadeRight';
import List from './List';
import ListItem from './ListItem';

const Li = styled.div`
  font-family: ${props => props.theme.font};
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: bold;
  &::before {
    color: blue;
  }
`;

const Ul = styled.ul`
  text-align: unset;
  list-style-type: circle;
`;

class Skills extends Component {
  render() {
    return (
      <CenterBlock>
        <Ul>
          <Li>HTML</Li>
          <Li>CSS</Li>
          <Li>CSS Frameworks(Bootstrap / Materialize)</Li>
          <Li>Javascript(Design Patterns, Tests, ES6/7)</Li>
          <Li>React Js</Li>
          <Li>Git</Li>
          <Li>Node</Li>
          <Li>MongoDB</Li>
        </Ul>
      </CenterBlock>
    );
  }
}

export default Skills;
