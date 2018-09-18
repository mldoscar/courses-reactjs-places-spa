import React, { Component } from 'react';

import {AppBar} from 'material-ui';

import {indigo600} from 'material-ui/styles/colors';

export default class MyAppBar extends Component {
  render(){
    return (
      <AppBar
      title="Places"
      style={{backgroundColor: indigo600}}
      onTitleClick={this.props.goHome}
      showMenuIconButton={false}
      />
    )
  }
}