import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header/Header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome"
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {

    return (
      <div className="App">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}

export default App;
