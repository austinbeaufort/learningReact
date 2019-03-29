import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.name = "Austin";
  }

  // getVal(lastName) {
  //   return `Austin ${lastName}`;
  // }

  render() {
    // const name = "Austin";
    return (
      <div className="App">
        {/* <h1>It works!!</h1>
        <h3>Hi, I am {name}</h3> */}
        {/* <h1>Hi, I am {this.getVal("Beaufort")}</h1> */}
        <h1>Hi, I am {this.name}</h1>
      </div>
    );
  }
}

export default App;
