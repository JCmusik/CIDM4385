import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiamNtdXNpayIsImEiOiJjanNvNWFuaWswajkzNDVwOXQyejQwbGQzIn0.xxNLUG46Y-7QspUsLShJrA"
});
// lng: -101.831299,
//     lat: 35.191425,
class App extends Component {
  state = {
    email: '',
    password: '',
    formErrors: { email: '', password: '' },
    emailValid: false,
    passwordValid: false,
    formValid: false,
    formresults: '',
    lng: '',
    lat: '',
    mapstyle: 'light',
    geolocerror: ''
  }
  // if(navigator.geolocation){
  //   navigator.geolocation.getCurrentPosition(position => {
  //     //set state properties for lat and long
  //     this.setState( () => {
  //         return {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude
  //         }
  //       }
  //     );
  //   });
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(() => {
          return {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }
        );
      });
    } else {
      const geolocerror = '[blocked] Access to geolocation was blocked over insecure connection to http://localhost:3000';
      this.setState({ geolocerror });
    }
  }



  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    return this.setState({ [name]: value },
      () => { this.validateField(name, value) });

  };
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
  render() {
    const { lng, lat, mapstyle, geolocerror } = this.state;
    return (
      <div className="App">
        <div className="form-group">
          <Form log={this.state.formErrors} onChange={this.handleUserInput} onClick={this.handleClick} />
        </div>
        <h3 className="container" id="results">{this.state.formresults}</h3>
        <div className="container map">
          <p className="bg-danger">{geolocerror}</p>
          <Map
            style={`mapbox://styles/mapbox/${mapstyle}-v9`}
            center={[lng, lat]}
            containerStyle={{
              height: "400px",
              width: "100%"
            }}>
            <Layer type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
            >
              <Feature coordinates={[lng, lat]} />
            </Layer>
          </Map>
        </div>
      </div >
    );
  }
}

export default App;
