import React, { Component } from 'react';

//Components
import CenterBlock from './CenterBlock';
import Title from './Title';
import Header from './Header';
import FadeRight from './FadeRight';
import ListItem from './ListItem';
import ModalProject from './ModalProject';

class Projects extends Component {
  state = {
    showModal: false
  };

  onToggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const { showModal } = this.state;
    return (
      <div>
        {showModal && <ModalProject close={this.onToggleModal} />}
        <CenterBlock>
          <ul>
            <ListItem onClick={this.onToggleModal}>Inovai.org</ListItem>
          </ul>
        </CenterBlock>
      </div>
    );
  }
}

export default Projects;
