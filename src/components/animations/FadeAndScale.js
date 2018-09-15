import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group'

export default class Benefits extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <CSSTransition
        classNames="fade"
        in={this.props.in}
        >
          {this.props.children}
        </CSSTransition>
      </div>
    );
  }
}