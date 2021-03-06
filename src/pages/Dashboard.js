import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {FlatButton, FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

import data from '../requests/places';

import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      places: data.places
    }
  }

  places() {
    return this.state.places.map((place, index)=>{
      return <PlaceHorizontal place={place}></PlaceHorizontal>
    });
  }

  render(){
    return(
      <div>
        <Link to="/new">
          <FloatingActionButton
          className="FAB"
          secondary={true}
          >
            <ContentAdd/>
          </FloatingActionButton>
        </Link>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-3" style={{textAlign: 'left'}}>
              <FlatButton label="Explorar"/>
              <FlatButton label="Favoritos"/>
              <FlatButton label="Vistas previas"/>
            </div>
            <div className="col-xs-12 col-md-9">
              {this.places()}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}