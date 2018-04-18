import React, { Component } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  font-family: ${props => props.theme.font};
  font-size: 2rem;
  background: ${props => props.theme.blush};
  color: ${props => props.theme.white};
  border-radius: 5px;
  border: none;
  border-bottom: 0.2rem solid ${props => props.theme.darkBlush};
  padding: 1rem;
  font-weight: bold;
  box-shadow: none;
  transition: all 0.4s;
  box-shadow: 0px 1px 1px 1px rgba(0,0,0,.1);

  &:hover {
    cursor: pointer;
  }
  &:active {
    border: none;
    /* background: ${props => props.theme.darkBlush}; */
  }
  &:focus {
    outline: none;
    /* box-shadow: none; */
  }

  &:disabled{
    cursor: not-allowed;
  }
    &::selection {
    background: ${props => props.theme.blush};
  }



`;

class Button extends Component {
  render() {
    const { onClick, size, disable } = this.props;
    return (
      <Btn onClick={onClick} disabled={disable} width={size}>
        {this.props.children}
      </Btn>
    );
  }
}

export default Button;
