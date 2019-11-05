import React from 'react';
import { useDispatch } from 'react-redux';

import {
  htmlprojectMarks,
  cssprojectMarks,
  htmlhomeworkMarks,
  csshomeworkMarks
} from '../../actions/index';

const Skills = props => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>HTML</h2>
        <p>Project : {props.Hproject} </p>
        <p>Homework {props.Hhomework} :</p>
        <div className='buttons'>
          <button
            className='btn'
            onClick={() => dispatch(htmlprojectMarks(props.id))}
          >
            20 Marks For Project
          </button>
          <button
            className='btn'
            onClick={() => dispatch(htmlhomeworkMarks(props.id))}
          >
            10 Marks For Homework
          </button>
        </div>
      </div>
      <h2>CSS</h2>
      <p>Project : {props.Cproject} </p>
      <p>Homework {props.Chomework} :</p>
      <div className='buttons'>
        <button
          className='btn'
          onClick={() => dispatch(cssprojectMarks(props.id))}
        >
          20 Marks For Project
        </button>
        <button
          className='btn'
          onClick={() => dispatch(csshomeworkMarks(props.id))}
        >
          10 Marks For Homework
        </button>
      </div>
    </div>
  );
};

export default Skills;
