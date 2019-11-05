import React from 'react';
import { Link } from 'react-router-dom';

import './user.css';

function User(props) {
  const { id, name, totalHtml, totalCss } = props;
  return (
    <div className='users'>
      <Link to={`/user/${id}`} className='link'>
        <h1>Name : {name}</h1>
        <h2>Total : {totalHtml + totalCss} </h2>
        <h2>HTML : {totalHtml} </h2>
        <h2>CSS : {totalCss}</h2>
      </Link>
    </div>
  );
}

export default User;
