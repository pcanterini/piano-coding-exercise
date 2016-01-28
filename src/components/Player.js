import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  updateKeyState: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired,
};

class Player extends Component {

  // TODO: Use static state
  constructor(props) {
    super(props);

    this.state = {
      isValidInput: false,
      inputStr: '',
    };

    // TODO: Use arrow functions instead
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
    const isValid = this.state.isValidInput;
    const statusClassNames = classNames({
      valid: isValid,
      inputStatus: true,
    });
    const playBtnClassNames = classNames({
      disabled: !isValid,
      btn: true,
      'play-btn': true,
    });

    return (
      <div className="player clearfix">
        <p>Valid Input formatting:
          <span className={statusClassNames}> {isValid.toString()}</span>
        </p>
        <textarea
          className="playListInput"
          rows="5"
          onBlur={this._onBlur}
          onChange={this._onChange}
          ref="playerInput"
        />
        <button
          className={playBtnClassNames}
          onClick={this._onClick}
        >Play</button>
      </div>
    );
  }
}

Player.propTypes = propTypes;
export default Player;
