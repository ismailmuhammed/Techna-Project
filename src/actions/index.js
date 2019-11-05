export const htmlprojectMarks = id => {
  return {
    type: 'HTMLPROJECT',
    payload: id
  };
};

export const htmlhomeworkMarks = id => {
  return {
    type: 'HTMLHOMEWORK',
    payload: id
  };
};

export const cssprojectMarks = id => {
  return {
    type: 'CSSPROJECT',
    payload: id
  };
};

export const csshomeworkMarks = id => {
  return {
    type: 'CSSHOMEWORK',
    payload: id
  };
};

