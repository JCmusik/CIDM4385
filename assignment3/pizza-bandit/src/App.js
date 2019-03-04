import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Header from './components/navbar';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
