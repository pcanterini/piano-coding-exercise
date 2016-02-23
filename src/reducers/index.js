let nextPianoId = 0;

const initialState = {
  pianos: [],
};

export default function pianos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIANO':
      return Object.assign({}, state, {
        pianos: [
          ...state.pianos,
          {
            id: nextPianoId += 1,
          },
        ],
      });
    default:
      return state;
  }
}
