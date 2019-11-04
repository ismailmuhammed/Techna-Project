import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';

import User from './components/Users/user';

function App() {
  const users = useSelector(state => state.users);

  return (
    <div className='App'>
      <header className='header'>
        <h1>Students</h1>
      </header>
      {users.map(user => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default App;
