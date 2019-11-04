import data from '../data/user';

const loggedIn = (state = data, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      const userIndex = state.findIndex(user => user.id === action.payload);
      const user = state[userIndex];
      user.isLogged = true;
      return [...state];
    default:
      return state;
  }
};

export default loggedIn;
