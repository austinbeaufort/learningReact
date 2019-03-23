import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ThirdImage from './ThirdImage/ThirdImage';

class App extends Component {

  state = {
    username: [
      {name: 'Moe', para: "I'm the smart one!"},
      {name: 'Larry', para: "I play violin and get a bright idea now and then!"},
      {name: 'Curly', para: `Type in "Shemp", "Joe", or "Curly" to change the third Stooge!`}
    ],
    image: <img src={"https://i.pinimg.com/originals/13/30/0a/13300a246bc040dce572eff94bb492c3.jpg"} alt="Curly" />
  }

  nameChangeHandler = event => {
    if (event.target.value === 'Shemp') {
      this.setState({
        image: <img src={"https://travsd.files.wordpress.com/2013/03/url9.jpg"} alt="Shemp" />
      })
    }
    if (event.target.value === 'Curly') {
      this.setState({
        image: <img src={"https://i.pinimg.com/originals/13/30/0a/13300a246bc040dce572eff94bb492c3.jpg"} alt="Curly" />
      })
    }
    if (event.target.value === 'Joe') {
      this.setState({
        image: <img src={"https://vignette.wikia.nocookie.net/stooges/images/5/56/116.jpg/revision/latest?cb=20110428124251"} alt="Joe" />
      })
    }

    this.setState({
        username: [
          {name: 'Moe', para: "I'm the smart one!"},
          {name: 'Larry', para: "I play violin and get a bright idea now and then!"},
          {name: event.target.value, para: `Type in "Shemp", "Joe", or "Curly" to change the third Stooge!`}
        ]
      })
  }

  render() {
    return (
      <div className="App">
        <h1>THE THREE STOOGES</h1>
        <div className="card">
          <img src={"https://www.neatorama.com/images/posts/619/62/62619/1371516183-0.jpg"} alt="Moe" />
          <UserOutput 
          name={this.state.username[0].name}
          para={this.state.username[0].para}/>
        </div>
        <div className="card">
          <img src={"https://i2.wp.com/c2.staticflickr.com/4/3187/2310821433_377ee3b2f9.jpg?zoom=2.625&w=895&ssl=1"} alt="Larry" />
          <UserOutput 
          name={this.state.username[1].name}
          para={this.state.username[1].para}/>
        </div>
        <div className="card">
          <ThirdImage image={this.state.image}/>
          <UserInput 
            name={this.state.username[2].name}
            change={this.nameChangeHandler}/>
          <UserOutput 
          name={this.state.username[2].name}
          para={this.state.username[2].para}/>
        </div>
      </div>
    );
  }
}

export default App;
