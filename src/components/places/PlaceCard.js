import React, { Component } from 'react';

import { Card, CardText, CardTitle, CardMedia, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Benefits extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true
    }
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-4" key={this.props.index}>
        <Card>
          <CardMedia>
            <img src={process.env.PUBLIC_URL + this.props.place.imageUrl} alt=""/>
          </CardMedia>
          <CardTitle title={this.props.place.title}></CardTitle>
          <CardText>{this.props.place.description}</CardText>
          <CardActions style={{'textAlign': 'right'}}>
            <FlatButton secondary={true} label="Ver más"/>
            <FlatButton secondary={true} onClick={()=> this.props.onRemove(this.props.place)} label="Ocultar"/>
          </CardActions>
        </Card>
      </div>
    );
  }
}