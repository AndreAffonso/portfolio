import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as TiIconPack from 'react-icons/lib/ti';
//Components
import Link from './Link';
import List from './List';
import ListItem from './ListItem';

const HeaderContainer = styled.div`
  z-index: 999;
  width: '100%;';
`;

const RigthBlock = styled.div`
  display: inline;
  float: right;
  padding: 1rem;
`;

const LeftBlock = styled.div`
  display: inline;
  float: left;
  /* padding: 1rem; */
`;

const P = styled.span`
  &::selection {
    background: ${props => props.theme.blush};
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LeftBlock>
          <List>
            <ListItem>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/andr%C3%A9-lu%C3%ADs-affonso-de-melo-542418a1/"
              >
                <TiIconPack.TiSocialLinkedinCircular size={45} />
              </Link>
            </ListItem>
            <ListItem>
              <Link target="_blank" href="https://github.com/andreaffonso">
                <TiIconPack.TiSocialGithubCircular size={45} />
              </Link>
            </ListItem>
            <ListItem>
              <Link target="_blank" href="https://bit.ly/andreaffonso">
                <TiIconPack.TiBusinessCard size={45} />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:demelo-10@hotmail.com">
                <TiIconPack.TiMail size={45} />
              </Link>
            </ListItem>
          </List>
        </LeftBlock>
        <RigthBlock>
          <List>
            <ListItem>
              <NavLink exact style={style} activeStyle={activeStyle} to="/">
                <P>About</P>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink style={style} activeStyle={activeStyle} to="/skills">
                <P>Skills</P>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink style={style} activeStyle={activeStyle} to="/projects">
                <P>Projects</P>
              </NavLink>
            </ListItem>
            {/* <ListItem>
              <NavLink style={style} activeStyle={activeStyle} to="/contact">
                <P>Contact</P>
              </NavLink>
            </ListItem> */}
          </List>
        </RigthBlock>
      </HeaderContainer>
    );
  }
}

export default Header;

const style = { color: '#fdfdfd', textDecoration: 'none' };
const activeStyle = {
  borderBottom: '0.2rem solid pink'
};
