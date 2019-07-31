import React from 'react';

const LogOut = ({logout}) => <button onClick={logout}>Logout</button>;
 
const LogIn = ({login}) => {
    return (
        <form onSubmit={login}>
        <p>
            <label htmlFor="username">Username</label>
            <input id="username" />
        </p>
        <p>
            <label htmlFor="pwd">Password</label>
            <input id="pwd" type="password" />
        </p>
        <button>Submit</button>
        </form>
    );
};

const LogInOut = ({isLoggedIn, login, logout}) => {
    const content = isLoggedIn
        ? <LogOut logout={logout}/>
        : <LogIn login={login}/>
    return <>{content}</>;
};


export default LogInOut;