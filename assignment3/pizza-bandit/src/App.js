import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';


class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Home card={this.state.card} />
        <Footer />
      </div>
    );
  }
}

export default App;
