import React from 'react';

const fakeUser = {
    firstName: 'World'
};

const Greeting = ({isLoggedIn=false, user=fakeUser}) => {
    return (isLoggedIn) ? <><h1>Hello {user.firstName}</h1></> : <><h1>Login</h1></>;
};

export default Greeting;