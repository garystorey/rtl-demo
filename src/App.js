import React, {useState} from 'react';

import Greeting from './components/greeting';
import LogInOut from './components/login';
import Card from './components/card';

import getUsers from './userData';
const users = getUsers();

function App() {

  const [isLoggedIn,setLogin] = useState(false);
  const [user,setUser] = useState({});

  const logout = (e) => {
    e.preventDefault();
    setUser({});
    setLogin(false);
  };

  const login = (e) => {
    e.preventDefault();
    const val = e.target.elements.username.value;
    const currentUser = users.filter( u => u.username===val);
    setUser(currentUser[0]);
    setLogin(true);
  };

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} user={user}/>
      <LogInOut isLoggedIn={isLoggedIn} login={login} logout={logout}/>
      {isLoggedIn && (<Card user={user}/>)}
    </>
  );
}

export default App;
