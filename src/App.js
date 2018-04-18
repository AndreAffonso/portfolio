import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Theme
import theme from './style/theme';

//Components
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import FadeRight from './components/FadeRight';

//IMG's
import background from './img/back.jpeg';
import skills from './img/skills.jpg';
class App extends Component {
  state = {
    img: background
  };

  HandleImage = img => {
    this.setState({ img });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Container img={this.state.img}>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Intro setImage={this.HandleImage} />}
              />
              <Route
                path="/skills"
                component={() => <Skills setImage={this.HandleImage} />}
              />
              <Route
                path="/projects"
                component={() => <Projects setImage={this.HandleImage} />}
              />
              <Route
                path="/contact"
                component={() => <Contact setImage={this.HandleImage} />}
              />
            </Switch>
            <Footer />
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
