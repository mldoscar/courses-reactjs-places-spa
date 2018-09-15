import React, { Component } from 'react';

import {TransitionGroup} from 'react-transition-group';

import RaisedButton from 'material-ui/RaisedButton';
import { indigo400 } from 'material-ui/styles/colors';

import Container from '../components/Container';
import Title from '../components/Title';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';

import data from '../requests/places';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      places: []
    }

    setTimeout(()=>{ this.setState({places: data.places})}, 100);

    this.hidePlace = this.hidePlace.bind(this);
  }

  places(){
    return this.state.places.map((place, index)=>{
      return (
        <PlaceCard onRemove={this.hidePlace} place={place} index={index}/>
      )
    });
  }

  hidePlace(place){
    this.setState({
      places: this.state.places.filter(el => el !== place)
    });
  }

  render() {
    return (
      <section>

        <div className="Header-background">
          <Container>
            <div className="Header-main">
              <Title></Title>

              <RaisedButton label="Crear cuenta gratuita" secondary={true} />

              <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/places.png'} alt="" />
            </div>
            <div>
              <Benefits/>
            </div>
          </Container>
        </div>

        <div style={{'backgroundColor': indigo400, 'padding': '50px'}}>
          <h3 style={{'color': 'white'}}>Sitios Populares</h3>
          <TransitionGroup className="row">
            {this.places()}
          </TransitionGroup>
        </div>

      </section>
    )
  }

}