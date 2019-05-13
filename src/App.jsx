import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      name: "",
      type: "",
      description: "",
      picture: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
