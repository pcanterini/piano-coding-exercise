import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import pianos from '../reducers';
import { addPiano } from '../actions';
import Piano from '../components/Piano';

const store = createStore(pianos);

const propTypes = {
  onAppRender: PropTypes.func.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);
    // store.dispatch(addPiano());
    store.subscribe(this.props.onAppRender);
    // Add first Piano
  }

  onAddPiano = () => {
    store.dispatch(addPiano());
  };

  render() {
    const generatePianos = () => {
      return store.getState().pianos.map(piano => {
        return <Piano key={piano.id} />;
      });
    };

    return (
      <div>
        <h1 className="title-header">Piano Coding Exercise</h1>
        <button onClick={this.onAddPiano}>Add Piano</button>
        {generatePianos()}
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
