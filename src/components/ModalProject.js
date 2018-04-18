import React, { Component } from 'react';
import styled from 'styled-components';
import 'react-tippy/dist/tippy.css';

//COMPONENTS
import {
  ModalBackground,
  ModalBox,
  ModalFooter,
  ModalContainer,
  CloseButton
} from './Modal';

//ICONS
import TiTimes from 'react-icons/lib/ti/times';
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up';

const Row = styled.div`
  display: block;
  padding-bottom: 1rem;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.fontColor};
`;

const P = styled.p`
  text-align: justify;
  color: ${props => props.theme.fontColor};
`;

class ModalMessage extends Component {
  state = {
    height: '36rem'
  };

  render() {
    let { height } = this.state;

    return (
      <ModalBackground>
        <ModalBox height={height}>
          <ModalContainer>
            <CloseButton onClick={this.props.close}>
              <TiTimes size={28} />
            </CloseButton>
            <ProjectTitle>Inovai</ProjectTitle>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, quia. Aspernatur dolores illum cupiditate vitae culpa
              deleniti maiores ex dolor autem voluptate tempora ab nemo nisi
              similique iure, exercitationem reiciendis!
            </P>
          </ModalContainer>
        </ModalBox>
      </ModalBackground>
    );
  }
}

export default ModalMessage;
