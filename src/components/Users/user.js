import React from 'react';
import { Link } from 'react-router-dom';

import './user.css'

function User(props) {
  return (
    <div   className="users">
      <Link 
    
        to={`/user/${props.id}`}
        className="link"
      >
        <h1>Name : {props.name}</h1>
        <h3>Project Marks: {props.project} </h3>
        <h3>Homework : {props.homework} </h3>
      </Link>
    </div>
  );
}

export default User;
