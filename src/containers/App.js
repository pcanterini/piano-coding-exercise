import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import Piano from '../components/Piano';
import pianoApp from '../reducers';
import { addPiano } from '../actions';

const store = createStore(pianoApp);

const propTypes = {
  onAppRender: PropTypes.func.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);
    // Add first Piano
    store.dispatch(addPiano());
    store.subscribe(this.props.onAppRender);
  }

  onAddPiano = () => {
    store.dispatch(addPiano());
  };

  render() {
    const generatePianos = () => {
      return store.getState().pianos.map(piano => {
        return <Piano store={store} key={piano.id} />;
      });
    };

    return (
      <div>
        <h1 className="title-header">Piano Coding Exercise</h1>
        <button onClick={this.onAddPiano}>Add Another Piano</button>
        {generatePianos()}
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
