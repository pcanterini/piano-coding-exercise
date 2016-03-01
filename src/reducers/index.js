let nextPianoId = 0;

const getKeys = () => {
  return [
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
  ];
};

// TODO: Add logger reducer

function pianos(state = [], action) {
  switch (action.type) {
    case 'ADD_PIANO':
      return [
        ...state,
        {
          id: nextPianoId += 1,
        },
      ];
    default:
      return state;
  }
}

export default function pianoApp(state = {}, action) {
  return {
    pianos: pianos(
      state.pianos,
      action
    ),
    keys: getKeys(),
  };
}
