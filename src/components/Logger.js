import React, { PropTypes } from 'react';

const propTypes = {
  loggerData: PropTypes.array.isRequired,
};

const Logger = (props) => (
  <div className="logger">
    {props.loggerData.map((key, i) => {
      return <span key={i}>{key}</span>;
    })}
  </div>
);

Logger.propTypes = propTypes;
export default Logger;
