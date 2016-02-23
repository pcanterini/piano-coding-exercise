import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// import Piano from './components/Piano';

// Sass styles
import './styles/main.scss';

const render = () => {
  ReactDOM.render(
    <App onAppRender={render} />,
    document.getElementById('app')
  );
};

render();
