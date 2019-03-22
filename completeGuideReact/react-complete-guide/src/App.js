import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Austin', age: 26 },
      { name: 'Max', age: 28 },
      { name: 'Stephanie', age: 29 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('was clicked!');
    // DON'T DO THIS ---> this.state.persons[0].name = 'Tyler';
    this.setState({persons: })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'));
  }

}

export default App;