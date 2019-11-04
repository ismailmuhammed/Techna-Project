export const projectMarks = id => {
  return {
    type: 'PROJECT',
    payload: id
  };
};

export const homeworkMarks = id => {
  return {
    type: 'HOMEWORK',
    payload: id
  };
};

export const UserLogged =  id => {
  return {
    type: 'SIGN_IN',
    payload: id
  };
};
