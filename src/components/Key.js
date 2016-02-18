import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  pianoKey: PropTypes.object.isRequired,
  keyHandler: PropTypes.func.isRequired,
};

const Key = ({ pianoKey, keyHandler }) => {
  const keyClassNames = classNames({
    key: true,
    active: pianoKey.isActive,
    [`key-${pianoKey.type}`]: true,
  });

  const _onMouseDown = () => keyHandler(pianoKey.label);
  const _onMouseUp = () => keyHandler();

  return (
    <div
      className={keyClassNames}
      onMouseDown={_onMouseDown}
      onMouseUp={_onMouseUp}
      onMouseOut={_onMouseUp}
    >
      <span className="label">{pianoKey.label}</span>
    </div>
  );
};

Key.propTypes = propTypes;
export default Key;
