import React from 'react';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Greeting from './Greeting';

afterEach(cleanup);

test('it renders Login', ()=>{
    const {getByText} = render(<Greeting isLoggedIn={false}/>);
    getByText(/Login/i);
});

test('it renders Logout', ()=>{
    const {getByText} = render(<Greeting isLoggedIn={true} user={{firstName:'Gary'}}/>);
    getByText(/Hello Gary/i);
});