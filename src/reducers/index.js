import React from 'react';
import Piano from '../components/Piano';

export default function pianos(state = [], action) {
  switch (action.type) {
    case 'ADD_PIANO':
      return [
        <Piano key={state.length}/>,
        ...state,
      ];
    default:
      return state;
  }
}
