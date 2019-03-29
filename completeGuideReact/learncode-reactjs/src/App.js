import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header/Header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Austin"
    }
  }

  render() {
    setTimeout(() => {
      this.setState({
        name: 'Tyler'
      });
    }, 1000);
    
    return (
      <div className="App">
        {this.state.name}
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
