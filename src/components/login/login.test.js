import React from 'react';
import {render,cleanup,fireEvent} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import LogInOut from './login';

afterEach(cleanup);

test('it should show login form', ()=>{
    const {getByText,getByLabelText}= render(<LogInOut isLoggedIn={false}/>);
    getByLabelText(/username/i);
    getByLabelText(/password/i);
    getByText(/submit/i);
});

test('it should say logout', () => {
    const {getByText}= render(<LogInOut isLoggedIn={true}/>);
    getByText('Logout');
});
