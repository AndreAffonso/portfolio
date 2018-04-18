import styled from 'styled-components';

const Link = styled.a`
  color: ${props => props.theme.white};

  &:active {
    color: none;
  }
`;

export default Link;
