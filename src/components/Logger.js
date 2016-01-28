import React, { Component, PropTypes } from 'react';

const propTypes = {
  loggerData: PropTypes.array.isRequired,
};

// TODO: Make it a stateless component

class Logger extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="logger">
        {this.props.loggerData.map(function mapKeys(key, i) {
          return <span key={i}>{key}</span>;
        }, this)}
      </div>
    );
  }

}
Logger.propTypes = propTypes;
export default Logger;
