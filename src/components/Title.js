import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
  font-family: ${props => props.theme.font};
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.2rem solid ${props => props.theme.blush}; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  margin-bottom: 1rem;
  letter-spacing: 0.2em; /* Adjust as needed */
  animation: typing ${props => props.time} steps(40, end),
    blink-caret 0.75s step-end infinite;
  animation-iteration-count: ${props => props.count};
  animation-fill-mode: forwards;
  &::selection {
    background: ${props => props.theme.blush};
  }

  @keyframes typing {
    0% {
      width: ${props => props.begin};
    }
    60% {
      width: 100%;
    }
    80% {
      width: 100%;
    }
    100% {
      width: ${props => props.end};
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    0% {
      border-color: transparent;
    }
    50% {
      border-color: ${props => props.theme.blush};
    }
  }
`;

export default Title;
