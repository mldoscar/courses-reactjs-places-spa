import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import md5 from 'js-md5';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  CSSTransition, TransitionGroup
} from 'react-transition-group';

import MyAppBar from './components/navigation/MyAppBar';

import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MyAppBar/>
          <TransitionGroup>
            <CSSTransition
            classNames="left-out"
            timeout={300}
            key={md5(this.props.location.pathname)}
            >
              {this.props.children}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
