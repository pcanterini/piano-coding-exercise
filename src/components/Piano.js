import React, { Component, PropTypes } from 'react';
import Logger from './Logger';
import Player from './Player';
import Key from './Key';

const propTypes = {
  onMount: PropTypes.func.isRequired,
};

class Piano extends Component {

  // TODO: Contructor can probably be romoved, use static for state intead
  constructor(props) {
    super(props);

    this.state = {
      keys: [
        { label: 'C', type: 'major', isActive: false },
        { label: 'c', type: 'minor', isActive: false },
        { label: 'D', type: 'major', isActive: false },
        { label: 'd', type: 'minor', isActive: false },
        { label: 'E', type: 'major', isActive: false },
        { label: 'F', type: 'major', isActive: false },
        { label: 'f', type: 'minor', isActive: false },
        { label: 'G', type: 'major', isActive: false },
        { label: 'g', type: 'minor', isActive: false },
        { label: 'A', type: 'major', isActive: false },
        { label: 'a', type: 'minor', isActive: false },
        { label: 'B', type: 'major', isActive: false },
      ],
      loggerData: [],
    };

    // TODO: Use arrow functions for autobinding
    this.updateKeyState = this.updateKeyState.bind(this);
    this.playPiano = this.playPiano.bind(this);
  }

  componentDidMount() {
    this.props.onMount();
  }

  updateKeyState(label) {
    this.setState({
      keys: this.state.keys.map(function toggleKeys(key) {
        return Object.assign({}, key, { isActive: key.label === label });
      }),
      // Append to logger if not empty
      loggerData: label ? this.state.loggerData.concat(label) : this.state.loggerData,
    });
  }

  playPiano(playList) {
    let count = 0;
    const component = this;
    const existingTimer = this.state.timer;

    if (existingTimer) {
      clearInterval(existingTimer);
    }

    // Play piano key every second based on playlist
    const timer = setInterval(function intervalHandler() {
      if (count >= playList.length) {
        clearInterval(timer);
        component.updateKeyState();
        return;
      }
      component.updateKeyState(playList[count]);
      count += 1;
    }, 1000);

    this.setState({
      isPlaying: true,
      timer,
    });
  }

  renderKeys() {
    // TODO: remove component and use arrow function
    const component = this;
    return this.state.keys.map(function mapKeys(key, i) {
      return (
        <Key
          key={i}
          pianoKey={key}
          keyHandler={component.updateKeyState}
        />
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="keyboard-container">
          {this.renderKeys()}
        </div>
        <Logger loggerData={this.state.loggerData} />
        <Player
          updateKeyState={this.updateKeyState}
          handlePlay={this.playPiano}
        />
      </div>
    );
  }

}

Piano.propTypes = propTypes;
export default Piano;
