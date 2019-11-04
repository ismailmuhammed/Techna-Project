import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { projectMarks, homeworkMarks } from '../../actions/index';

import './user.css';

const SingleUser = props => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const userIndex = users.findIndex(
    user => user.id === parseInt(props.match.params.id)
  );
  const { id, name, project, homework } = users[userIndex];
  return (
    <div className='main'>
      <Link to="/" className="btn-b">Back to all Users</Link>
      <div className='singleuser'>
        <h1>Name : {name}</h1>
        <h3>Project Marks: {project} </h3>
        <h3>Homework : {homework} </h3>
      </div>
      <div className='buttons'>
        <button className='btn' onClick={() => dispatch(projectMarks(id))}>
          20 Marks For Project
        </button>
        <button className='btn' onClick={() => dispatch(homeworkMarks(id))}>
          10 Marks For Homework
        </button>
      </div>
    </div>
  );
};

export default SingleUser;
