import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import firebase from './Services/Firebase';
import SignInForm from './components/signin/signinForm';

class App extends Component {
  state = {
    email: '',
    password: '',
    userAuthenticated: true,
    formErrors: { email: '', password: '' },
    emailValid: false,
    passwordValid: false,
    formValid: false,
    formresults: '',
    mapstyle: 'light',
    lat: '',
    lng: '',
    geolocerror: '',
    user: {
      uid: '',
      userEmail: firebase.auth().currentUser ? firebase.auth().currentUser : '',
      userAuthenticated: false
    },
    pizza_place: '',
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      (user) ? this.setState({ user }) : this.setState({ user: null });
    })
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
    const formresults = "Email: " + this.state.email.toLowerCase();
    this.setState({ formresults: formresults });
  }
  render() {
    const { formErrors, userAuthenticated } = this.state;
    return (
      <div className="App">
        <Header />
        {(!userAuthenticated) ?
          <SignInForm
            onChange={this.handleUserInput}
            onClick={this.onClick}
            log={formErrors} /> :
          <Home onChange={this.handleUserInput}
            onClick={this.handleClick}
            log={formErrors}
          />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
