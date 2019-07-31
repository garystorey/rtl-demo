import React from 'react';

const Greeting = ({isLoggedIn, user}) => {
    const content = isLoggedIn
            ? `Hello ${user.firstName}`
            : `Login`;
    return <h1>{content}</h1>;
};


export default Greeting;