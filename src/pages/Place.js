import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {Card} from 'material-ui';
import Container from '../components/Container';
import {getPlace} from '../requests/places';

class Place extends Component {

  constructor(props) {
    super(props);

    const slug = props.match.params.slug;

    this.state = {
      place: {}
    }

    this.loadPlace(slug);
  }

  loadPlace(slug){
    getPlace(slug).then(data=>{
      this.setState({
        place: data
      });
    });
  } 

  render(){
    const {place} = this.state;
    return(
      <div className="Place-container">
        <header
        className="Place-cover"
        style={{backgroundImage: `url(${place.coverImage})`, marginBottom: '1em'}}
        >
        </header>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Card className="Place-card">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 col-lg-2">
                    <img src={place.avatarImage} alt="" style={{maxWidth: '100%'}}/>
                  </div>
                  <div className="col-xs">
                    <h1>{place.title}</h1>
                    <address>{place.address}</address>
                    <p>{place.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Place);