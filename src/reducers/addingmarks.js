import data from '../data/user';

const adding = (state = data, action) => {
  switch (action.type) {
    case 'HTMLPROJECT':
      const HuserIndexP = state.findIndex(user => user.id === action.payload);
      const HuserP = state[HuserIndexP];
      HuserP.html.project += 20;
      return [...state];

    case 'HTMLHOMEWORK':
      const HuserIndexH = state.findIndex(user => user.id === action.payload);
      const HuserH = state[HuserIndexH];
      HuserH.html.homework += 10;
      return [...state];

    case 'CSSPROJECT':
      const CuserIndexP = state.findIndex(user => user.id === action.payload);
      const CuserP = state[CuserIndexP];
      CuserP.css.project += 20;
      return [...state];

    case 'CSSHOMEWORK':
      const CuserIndexH = state.findIndex(user => user.id === action.payload);
      const CuserH = state[CuserIndexH];
      CuserH.css.homework += 10;
      return [...state];

    default:
      return state;
  }
};

export default adding;
