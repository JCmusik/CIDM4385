import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import firebase from './Services/Firebase';
import SignInForm from './components/signin/signinForm';

let selection = [];
let price = [];

class App extends Component {
  state = {
    email: '',
    password: '',
    userAuthenticated: false,
    formErrors: { email: '', password: '', errors: '' },
    emailValid: false,
    passwordValid: false,
    formValid: false,
    formresults: '',
    mapstyle: 'light',
    lat: '',
    lng: '',
    geolocerror: '',
    user: {},
    orders: {
      date: '',
      email: '',
      item: [],
      price: [],
      vendor: ''
    },
    cards: {
      item: '',
      selection: []
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      (user) ? this.setState({ user: { userAuthenticated: true, email: user.email } }) : this.setState({
        user: ''
      });
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

  handleLoginFormSubmission = (e) => {
    this.handleClick(e);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          formErrors: { errors: '' }
        });
      })
      .catch((error) => { this.setErrorMessage(error) }

      );
  }

  setErrorMessage(error) {
    const errMessage = error.message;
    this.setState({
      formErrors: { errors: errMessage }
    });
  }

  handleLogout = () => {
    firebase.auth().signOut();
  }

  handleSelection = (choice, selected, amt) => {
    this.setState({
      cards: {
        selected
      },
    });
    (selected) ? selection.push(choice) && price.push(amt) : selection.pop(choice) && price.pop(amt);
  }

  handleOrder = () => {
    (selection.length === 0) ? this.setState({ formErrors: { errors: 'Your Cart is empty' } }) : this.placeOrder()
  }

  placeOrder() {
    this.setState({
      formErrors: { errors: '' }
    });
    const orders = this.addItemsToOrder();
    this.setState({ orders });
    console.log('Placed order', orders);
  }

  addItemsToOrder() {
    const date = new Date();
    const email = this.state.user.email;
    const item = selection;
    // change later
    const vendor = "Pizza place";

    const orders = { date, email, item, price, vendor };

    return orders
  }

  render() {
    const { formErrors, user, cards } = this.state;
    return (
      <div className="App">
        <Header user={user}
          logout={this.handleLogout} />
        {(!user) ?
          <SignInForm
            onChange={this.handleUserInput}
            onClick={this.handleLoginFormSubmission}
            log={formErrors} /> :
          <Home onChange={this.handleUserInput}
            log={formErrors}
            cards={cards}
            onCardClick={this.handleSelection}
            order={this.handleOrder}
          />
        }
        <Footer />
      </div>
    );
  }
}

export default App;