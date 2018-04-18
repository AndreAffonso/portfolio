import React, { Component } from 'react';
import styled from 'styled-components';

//Components
import CenterBlock from './CenterBlock';
import Title from './Title';
import Header from './Header';
import Button from './Button';
import ModalMessage from './ModalMessage';

const text = [
  <Title time="5s" count="1" begin="0%" end="0%">
    Hi, my name is André Affonso{' '}
  </Title>,
  <Title time="5s" count="2" begin="0%" end="0%">
    I am a Computer Engineer
  </Title>,
  <Title time="5s" count="3" begin="0%" end="0%">
    Currently, I am 22 years old
  </Title>,
  <Title time="5s" count="4" begin="0%" end="0%">
    I am living in Itajubá-MG, Brasil
  </Title>,
  <Title time="5s" count="5" begin="0%" end="0%">
    And I really like to develop web applications
  </Title>,
  <Title time="5s" count="6" begin="0%" end="0%">
    Check my skills, projects and social networks
  </Title>,
  <Title time="5s" count="7" begin="0%" end="100%">
    Any doubt just send me a message {'  :)  '}
  </Title>
];

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      index: 0
    };

    setInterval(this.handleIndex, 5000);
  }

  handleIndex = () => {
    if (this.state.index < 6) {
      this.setState({ index: this.state.index + 1 });
      return;
    }
    clearInterval();
    return;
  };

  onToggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const { showModal } = this.state;
    return (
      <div>
        {showModal && <ModalMessage close={this.onToggleModal} />}
        <CenterBlock>
          {text[this.state.index]}
          <Button onClick={this.onToggleModal}>Message</Button>
        </CenterBlock>
      </div>
    );
  }
}

export default Intro;
