import React, { Component } from 'react';
import { createStore } from 'redux';
import pianos from '../reducers';

const store = createStore(pianos);

class App extends Component {
  constructor(props) {
    super(props);
    // Add first Piano
    store.dispatch({ type: 'ADD_PIANO' });
    this.render();
    store.subscribe(this.render);
  }

  render() {
    return (
      <div>
        <h1 className="title-header">Piano Coding Exercise</h1>
        {store.getState()}
      </div>
    );
  }
}

export default App;
