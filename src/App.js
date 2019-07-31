import React, {useState} from 'react';
import getUsers from './userData';
import Greeting from './components/greeting';
import LogInOut from './components/login';
import Card from './components/card';


function App() {

  const users = getUsers();

  const [isLoggedIn,setLogin] = useState(false);
  const [user,setUser] = useState(users[0]);

  const logOut = () => {
    setUser({});
    setLogin(false);
  };

  const logIn = (e) => {
    e.preventDefault();
    setUser(users[0]);
    setLogin(true);
  };

  const showCard = (isLoggedIn) ? <Card user={user}/> : null;

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} user={user}/>
      <LogInOut isLoggedIn={isLoggedIn} logIn={logIn} logOut={logOut}/>
      {showCard}
    </>
  );
}

export default App;
