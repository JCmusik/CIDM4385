import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Map from './components/map/map';
import mapboxgl from 'mapbox-gl';

class App extends Component {
  state = {
    email: '',
    password: '',
    formErrors: { email: '', password: '' },
    emailValid: false,
    passwordValid: false,
    formValid: false,
    formresults: ''
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    return this.setState({ [name]: value },
      () => { this.validateField(name, value) });

  }
  validateField(fieldName, value) {

    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let emailRegex = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    let mediumRegex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    switch (fieldName) {
      case 'email':
        emailValid = value.match(emailRegex);
        fieldValidationErrors.email = emailValid ? '' : ' invalid email';
        break;
      case 'password':
        passwordValid = value.match(mediumRegex);
        fieldValidationErrors.password = passwordValid ? '' : ' needs 8 characters or more, at least 1 number, and one capitalized letter';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  handleClick = (e) => {
    e.preventDefault();
    const formresults = "Email: " + this.state.email;
    this.setState({ formresults: formresults });
  }

  showMap() {
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.50, 40],
      zoom: 9
    });

    return map;
  }

  render() {
    return (
      <div className="App">
        <div className="form-group">
          <h1><Form log={this.state.formErrors} onChange={this.handleUserInput} onClick={this.handleClick} /></h1>
        </div>
        <h3 className="container" id="results">{this.state.formresults}</h3>
        <div id="map"><Map /></div>
      </div>
    );
  }
}

export default App;
