import React, { Component } from 'react';
import Logger from './Logger';
import Player from './Player';
import Key from './Key';

class Piano extends Component {

  state = {
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

  updateKeyState = (label, forceKeyUp) => {
    this.setState({
      keys: this.state.keys.map(function toggleKeys(key) {
        return Object.assign({}, key, { isActive: key.label === label });
      }),
      // Append to logger if not empty
      loggerData: label ? this.state.loggerData.concat(label) : this.state.loggerData,
    });

    if (forceKeyUp) {
      setTimeout(() => {
        this.updateKeyState();
      }, 500);
    }
  };

  playPiano = playList => {
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
      component.updateKeyState(playList[count], true);
      count += 1;
    }, 1000);

    this.setState({
      isPlaying: true,
      timer,
    });
  };

  renderKeys() {
    return this.state.keys.map((key, i) => {
      return (
        <Key
          key={i}
          pianoKey={key}
          keyHandler={this.updateKeyState}
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

export default Piano;
