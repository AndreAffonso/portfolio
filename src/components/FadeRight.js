import styled, { keyframes } from 'styled-components';

const FadeBig = keyframes`
   from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

`;

const FadeRight = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: pink; */
  animation: ${FadeBig} 0.6s linear;
`;

export default FadeRight;
