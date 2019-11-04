import data from '../data/user';

const adding = (state = data, action) => {
  switch (action.type) {
    case 'PROJECT':
      const userIndexP = state.findIndex(user => user.id === action.payload);
      const userP = state[userIndexP];
      userP.project += 20;
      return [...state];

    case 'HOMEWORK':
      const userIndexH = state.findIndex(user => user.id === action.payload);
      const userH = state[userIndexH];
      userH.homework += 10;
      return [...state];

    default:
      return state;
  }
};

export default adding;
