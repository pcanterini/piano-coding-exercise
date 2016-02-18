import React, { Component } from 'react';
import Piano from '../components/Piano';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="title-header">Piano Coding Exercise</h1>
        <Piano />
      </div>
    );
  }

}

export default App;