import React, { Component } from 'react';

import { Card, CardText } from 'material-ui/Card';
import { black, lightBlueA400, amberA400} from 'material-ui/styles/colors';

export default class Benefits extends Component {
  render(){
    return (
      <div style={{'padding': '10px'}}>
        <ul>
          <Card className="Header-Benefit">
            <CardText>
              <div className="row benefit-row">
                <div className="Header-Benefit-image" style={{'backgroundColor': black}}>
                  <img src={process.env.PUBLIC_URL + '/images/heart.png'} alt=""/>
                </div>
                <div className="Header-Benefit-content">
                  <h3>Calificaciones con emociones</h3>
                  <p>Califica tus lugares con experiencias, no con números</p>
                </div>
              </div>
            </CardText>
          </Card>
          <Card className="Header-Benefit">
            <CardText>
              <div className="row benefit-row">
                <div className="Header-Benefit-image" style={{'backgroundColor': lightBlueA400}}>
                  <img src={process.env.PUBLIC_URL + '/images/no-internet.png'} alt=""/>
                </div>
                <div className="Header-Benefit-content">
                  <h3>¿Sin Internet? NO problemo</h3>
                  <p>Places funciona sin internet o con conexiones lentas</p>
                </div>
              </div>
            </CardText>
          </Card>
          <Card className="Header-Benefit">
            <CardText>
              <div className="row benefit-row">
                <div className="Header-Benefit-image" style={{'backgroundColor': amberA400}}>
                  <img src={process.env.PUBLIC_URL + '/images/star.png'} alt=""/>
                </div>
                <div className="Header-Benefit-content">
                  <h3>Tus lugares favoritos</h3>
                  <p>Define el lugar que te gusta</p>
                </div>
              </div>
            </CardText>
          </Card>
        </ul>  
      </div>
    )
  }
}