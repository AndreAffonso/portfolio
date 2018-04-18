import styled from 'styled-components';
import background from '../img/back.jpeg';

const Container = styled.div`
  color: ${props => props.theme.white};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export default Container;
