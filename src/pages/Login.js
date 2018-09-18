import React, {Component} from 'react';

import Container from '../components/Container';
import Title from '../components/Title';
import {TextField, RaisedButton} from 'material-ui';

import { login, signUp } from '../requests/auth';

import {
  Link,
  Route
} from 'react-router-dom';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.requestAuth = this.requestAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  requestAuth() {
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue()
    }

    login(credentials).then(console.log).catch(console.log);
  }

  createAccount() {
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue()
    }

    signUp(credentials).then(console.log).catch(console.log);
  }

  render() {
    return (
      <div className="row middle-xs">
        <div className="col-xs-12 col-sm-6">
          <Container>
            <div style={{textAlign: 'left'}}>
              <Title/>
              <TextField
              floatingLabelText="Correo electrónico"
              type="email"
              className="textfield"
              ref="emailField"
              />
              <TextField
              floatingLabelText="Clave"
              type="password"
              className="textfield"
              ref="passwordField"
              />
            </div>
            <div className="Login-actions">
              <Route path="/login" exact render={()=>
                <div>
                  <Link to="/register" style={{marginRight: '1em'}}>Crear nueva cuenta</Link>
                  <RaisedButton label="Ingresar" secondary={true} onClick={this.requestAuth}/>
                </div>
              }/>
              <Route path="/register" exact render={()=>
                <div>
                  <Link to="/login" style={{marginRight: '1em'}}>Iniciar sesión</Link>
                  <RaisedButton label="Registrarse" secondary={true} onClick={this.createAccount}/>
                </div>
              }/>
            </div>
          </Container>
        </div>
        <div className="col-xs-12 col-sm-6">
          <Route path="/login" exact render={()=>
            <div className="Login-background"
            style={{"backgroundImage": `url(${process.env.PUBLIC_URL}/images/login-bg.jpg)`}}
            />
          }/>
          <Route path="/register" exact render={()=>
          <div className="Login-background"
          style={{"backgroundImage": `url(${process.env.PUBLIC_URL}/images/signup-bg.jpg)`}}
          />
          }/>
        </div>
      </div>
    )
  }
}