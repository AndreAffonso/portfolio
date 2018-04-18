import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  font-family: ${props => props.theme.font};
  margin-right: 1rem;
  list-style: none;
  font-weight: bold;
  transition: all 0.4s;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    border-bottom: 0.2rem solid ${props => props.theme.blush};
  }
`;

export default ListItem;
