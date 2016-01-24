import React, { Component, PropTypes } from 'react';

const propTypes = {
  updateKeyState: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired,
};

class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isValidInput: false,
      inputStr: '',
    };

    this._onChange = this._onChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  _onBlur() {
    // Attempts to format invalid input so user doesn't have to.
    this.autoFormatInput();
  }

  _onChange(e) {
    const value = e.currentTarget.value;
    this.setState({
      isValidInput: this.isValidInput(value),
      inputStr: value,
    });
  }

  _onClick() {
    if (this.state.isValidInput) {
      const playList = this.createPlaylistFromCSV(this.state.inputStr);

      // Play the piano
      this.props.handlePlay(playList);
    }
  }

  createPlaylistFromCSV(str) {
    return str.split(',');
  }

  isValidInput(str) {
    // comma separated valid letters with no space or trailing comma.
    return /^,?([CDEFGAB]{1},)*[CDEFGAB]$/i.test(str);
  }

  autoFormatInput() {
    // no spaces or trailing comma
    const cleanStr = this.state.inputStr.replace(/,+$/, '').replace(' ', '');

    // update state and input
    this.setState({
      isValidInput: this.isValidInput(cleanStr),
      inputStr: cleanStr,
    }, function stateUpdatedCB() {
      // wait for cb before updating input
      this.refs.playerInput.value = cleanStr;
    });
  }

  render() {
    const isValid = this.state.isValidInput.toString();

    return (
      <div className="player clearfix">
        <p>Valid Input formatting:
          <span className="inputStatus"> {isValid}</span>
        </p>
        <textarea
          className="playListInput"
          rows="10"
          onBlur={this._onBlur}
          onChange={this._onChange}
          ref="playerInput"
        />
        <button
          className="btn play-btn"
          onClick={this._onClick}
        >Play</button>
      </div>
    );
  }
}

Player.propTypes = propTypes;
export default Player;
