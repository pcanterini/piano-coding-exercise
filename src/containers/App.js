import React, { Component } from 'react';
import Piano from '../components/Piano';

class App extends Component {

  constructor(props) {
    super(props);
  }

  // TODO: Can probably be removed (check tests)
  handleOnMount() {}

  render() {
    return (
      <div>
        <h1 className="title-header">Piano Coding Exercise</h1>
        <Piano onMount={this.handleOnMount} />
      </div>
    );
  }

}

export default App;
