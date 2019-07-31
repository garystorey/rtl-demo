import React from 'react';

const LogOut = ({onClick}) => <button onClick={onClick}>Logout</button>;

const LogIn = ({onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="username">Username</label>
                <input id="username" />
            </p>
            <p>
                <label htmlFor="pwd">Password</label>
                <input type="password" id="pwd" />
            </p>
            <p>
                <button>Submit</button>
            </p>
        </form>
    );
};

const LogInOut = ({isLoggedIn=false, logOut, logIn}) => {
    return (isLoggedIn) 
        ? <LogOut onClick={logOut}/>
        : <LogIn onSubmit={logIn}/>;
};

export default LogInOut;