import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ModalBackground = styled.div`
  animation: ${fadeIn} 0.3s 0.3s both;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.black80};
  /* border: 3px solid pink; */
  z-index: 999;
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: ${props => props.height};
  max-height: ${props => props.height};
  transform: translate(-50%, -50%);
  background: ${props => props.theme.white};
  border-radius: 5px;
  padding: 1rem;
  transition: all ease-in 0.2s;
  overflow: auto;
`;

export const ModalFooter = styled.div`
  position: absolute;
  /* padding: 1rem; */
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  /* margin: auto; */
  /* margin-top: 4rem; */
  text-align: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 1rem;
  padding-top: 2rem;
  padding-bottom: 8rem;
  text-align: center;
`;

export const CloseButton = styled.div`
  background: none;
  color: ${props => props.theme.blush};
  position: absolute;
  font-weight: bold;
  top: 0;
  right: 0;

  &:hover {
    color: ${props => props.theme.darkBlush};
    cursor: pointer;
  }
`;
