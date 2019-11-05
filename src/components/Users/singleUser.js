import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './user.css';

import Skills from '../skills/skills';

const SingleUser = props => {
  const users = useSelector(state => state.users);
  const userIndex = users.findIndex(
    user => user.id === parseInt(props.match.params.id)
  );
  const { id, name, html, css, totalHtml, totalCss } = users[userIndex];
  return (
    <div className='main'>
      <Link to='/' className='btn-b'>
        Back to all Users
      </Link>
      <div className='singleuser'>
        <h1>Name : {name}</h1>
        <h3>Total Marks: {totalHtml + totalCss} </h3>
        <h3>HTML: {totalHtml} </h3>
        <h3>CSS : {totalCss} </h3>
      </div>
      <div className='skills'>
        <h2>Skills</h2>
        <Skills
          Hproject={html.project}
          Hhomework={html.homework}
          Cproject={css.project}
          Chomework={css.homework}
          id={id}
        />
      </div>
    </div>
  );
};

export default SingleUser;
