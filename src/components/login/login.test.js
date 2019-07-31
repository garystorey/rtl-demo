import React from 'react';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LogInOut from './Login';

afterEach(cleanup);

test( 'it renders Logout button', ()=> {
    const {getByText} = render(<LogInOut isLoggedIn={true}/>);
    getByText(/logout/i);
});


test( 'it renders Login Form', ()=> {
    const {getByText,getByLabelText} = render(<LogInOut isLoggedIn={false}/>);
    getByLabelText(/username/i);
    getByLabelText(/password/i);
    getByText(/submit/i);
});
