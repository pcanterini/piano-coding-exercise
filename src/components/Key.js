import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  pianoKey: PropTypes.object.isRequired,
  keyHandler: PropTypes.func.isRequired,
};

class Key extends Component {

  constructor(props) {
    super(props);

    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
  }

  _onMouseDown() {
    this.props.keyHandler(this.props.pianoKey.label);
  }

  _onMouseUp() {
    this.props.keyHandler();
  }

  render() {
    const pianoKey = this.props.pianoKey;
    const keyClassNames = classNames({
      key: true,
      active: pianoKey.isActive,
      [`key-${pianoKey.type}`]: true,
    });

    return (
      <div
        className={keyClassNames}
        onMouseDown={this._onMouseDown}
        onMouseUp={this._onMouseUp}
      >
        <span className="label">{pianoKey.label}</span>
      </div>
    );
  }

}

Key.propTypes = propTypes;
export default Key;
