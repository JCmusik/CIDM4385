import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import firebase from './Services/Firebase';
import SignInForm from './components/signin/signinForm';
import Mapbox from './components/map/map';
import { CompleteOrder } from './Services/DB'

/**
 * array to store selected items in a cart
 */
let selection = [];
/**
 * array to store the prices of the selected items from the cart
 */
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
    },
    pizza_place: ''
  }

  componentDidMount() {
    this.authListener();
  }

  /**
   * Contacts firebase to determine if a user is logged in or not.
   * @True Sets the state of userAuthenticated to true and email to the returned email
   * @False Sets the state of user to an empty string  
   */
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      (user) ? this.setState({ user: { userAuthenticated: true, email: user.email } }) : this.setState({
        user: ''
      });
    })
  }

  /**
   * When user types in an input field, store the name and value of the target element.
   * Then set the state of the key value pair.
   * Call `validateField()` and pass in the name/value of the target element
   * @param {*} e - represents the `onChange` event
   */
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    return this.setState({ [name]: value },
      () => { this.validateField(name, value) });

  };

  /**
   * Validate user input using `RegExp()` (regular expression)
   * @param {*} fieldName - name attribute of the target element
   * @param {*} value - value attribute of the target element
   */
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

  /**
   * Sets the state of formValid for email and password
   */
  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  /**
   * When user submits the signIn form, the email and passowrd are sent to firebase for authentication.
   * @param {*} e - represents the event of clicking the signin button on the sign in form
   * Resets the state of error messages from state.
   * If there is an error, `setErrorMessage(error)` is called.
   */
  handleLoginFormSubmission = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          formErrors: { errors: '' }
        });
      })
      .catch((error) => { this.setErrorMessage(error) }
      );
  }

  /**
   * Set the error message returned from firebase to the formErrors: errors state
   * @param {*} error 
   */
  setErrorMessage(error) {
    const errMessage = error.message;
    this.setState({
      formErrors: { errors: errMessage }
    });
  }

  /**
   * Signs the authenticated user out.
   */
  handleLogout = () => {
    firebase.auth().signOut();
  }

  /**
      * Appends new elements to an array.
      * @param choice New elements of the selection Array.
      * @param selected bool of the button clicked status.
      * @param amt New elements of the price Array.
      */
  handleSelection = (choice, selected, amt) => {
    this.setState({
      cards: {
        selected
      },
    });
    (selected) ? selection.push(choice) && price.push(amt) : selection.pop(choice) && price.pop(amt);
  }

  /**
    * Determines if the cart is empty.
    * If true, set an error message to the state that is passed down as a prop.
    * If false, the `placeOrder()` method is called
    */
  handleOrder = () => {
    (selection.length === 0) ? this.setState({ formErrors: { errors: 'Your Cart is empty' } }) : this.placeOrder()
  }

  /**
   * Resets the error in state to an empty string.
   * Calls the `addItemsToOrder()` method to construct an orders object
   * TODO: redirect to order detail page
   */
  placeOrder() {
    this.setState({
      formErrors: { errors: '' }
    });

    function addNums(total, num) {
      return total + num;
    }

    let total = price.reduce(addNums);
    const orders = this.addItemsToOrder(total);
    console.log('Placed order', orders);

    CompleteOrder(orders);

    //<Redirect to='/Details' />
  }

  /**
   * Adds Items to an order and constructs an order object
   * @returns the orders object
   */
  addItemsToOrder(total) {
    const date = new Date();
    const email = this.state.user.email;
    const item = selection;
    // change later
    const vendor = "Pizza place";
    const orders = { date, email, item, total, vendor };
    return orders;
  }

  /**
   * sets state from lat/lng passed from child
   * @param {*} lat lattitiude set by mapbox
   * @param {*} lng longitude set by mapbox
   */
  setCoords = (lat, lng) => {
    this.setState({
      lat,
      lng
    });
  }

  /**
     * Handle a randomly-selected place from the places API
     * @param {*} place - randonly selected pizza place
     */
  handleSentRandomPlace(place) {
    console.log("Random place:", place);
    // this.setState({
    //   pizza_place: place,
    // });
  }

  render() {
    const { formErrors, user, cards, lat, lng } = this.state;
    return (
      <Router>
        <div className="App">
          <Header user={user}
            logout={this.handleLogout} />
          <Route exact path="/"
            render={() =>
              (!user) ?
                <SignInForm
                  onChange={this.handleUserInput}
                  onClick={this.handleLoginFormSubmission}
                  log={formErrors}
                  lat={lat}
                  lng={lng} /> :
                <Mapbox setCoords={this.setCoords}
                  lat={lat}
                  lng={lng}
                  sendRandomPlace={this.handleSentRandomPlace}
                />

            }
          />
          <Route path="/home" render={() =>
            <Home onChange={this.handleUserInput}
              log={formErrors}
              cards={cards}
              onCardClick={this.handleSelection}
              order={this.handleOrder}
              selection={selection}
              price={price}
            />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;