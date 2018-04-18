import React, { Component } from 'react';
import styled from 'styled-components';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
//COMPONENTS
import Button from './Button';
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
const Input = styled.input`
  width: 60%;
  font-size: 1rem;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.fontColor};
  font-weight: bold;
  background: none;
  border: 0.1rem solid ${props => props.theme.blush};
  border-radius: 2px;
  padding: 0.5rem;
  transition: all 0.6s;

  &:focus {
    background: ${props => props.theme.blush};
    outline: none;
  }
`;
const Label = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.fontColor};
  font-weight: bold;
`;

const TextArea = styled.textarea`
  width: 60%;
  font-size: 1rem;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.fontColor};
  font-weight: bold;
  background: none;
  border: 0.1rem solid ${props => props.theme.blush};
  border-radius: 2px;
  padding: 0.5rem;
  transition: all 0.6s;

  &:focus {
    background: ${props => props.theme.blush};
    outline: none;
  }
`;

const Message = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.font};
  font-size: 1.5rem;
  color: ${props => props.theme.fontColor};
  font-weight: bold;
`;

class ModalMessage extends Component {
  state = {
    send: false,
    height: '36rem',
    name: '',
    email: '',
    subject: '',
    text: '',
    placeholder: ''
  };

  handleNameChange = e => this.setState({ name: e.target.value });
  handleEmailChange = e => this.setState({ email: e.target.value });
  handleSubjectChange = e => this.setState({ subject: e.target.value });
  handleTextChange = e => this.setState({ text: e.target.value });
  handleSendMessage = () => this.setState({ send: true, height: '10rem' });

  render() {
    let { send, height, name, email, subject, text } = this.state;
    let disableButton =
      name === '' || email === '' || subject === '' || text === '';
    return (
      <ModalBackground>
        <ModalBox height={height}>
          <ModalContainer>
            <CloseButton onClick={this.props.close}>
              <TiTimes size={28} />
            </CloseButton>
            {send ? (
              <Message>
                Message sended! Thanks for contacting me<TiThumbsUp size={32} />
              </Message>
            ) : (
              <div>
                <Row>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onChange={this.handleNameChange}
                    id="name"
                    type="text"
                    placeholder={this.state.placeholder}
                  />
                </Row>
                <Row>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={this.handleEmailChange}
                    id="email"
                    type="emails"
                    placeholder={this.state.placeholder}
                  />
                </Row>
                <Row>
                  <Row>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      onChange={this.handleSubjectChange}
                      id="subject"
                      type="text"
                      placeholder={this.state.placeholder}
                    />
                  </Row>
                  <Label htmlFor="text">Text</Label>
                  <TextArea
                    onChange={this.handleTextChange}
                    id="text"
                    rows="6"
                    cols="14"
                    placeholder={this.state.placeholder}
                  />
                </Row>
                <ModalFooter>
                  {disableButton ? (
                    <Tooltip
                      onShow={() =>
                        this.setState({ placeholder: 'Required field' })
                      }
                      title="Fill all the fields"
                      position="right"
                    >
                      <Button
                        className="tooltip"
                        disable={disableButton}
                        onClick={this.handleSendMessage}
                      >
                        Send
                      </Button>
                    </Tooltip>
                  ) : (
                    <Button
                      className="tooltip"
                      disable={disableButton}
                      onClick={this.handleSendMessage}
                    >
                      Send
                    </Button>
                  )}
                </ModalFooter>
              </div>
            )}
          </ModalContainer>
        </ModalBox>
      </ModalBackground>
    );
  }
}

export default ModalMessage;
