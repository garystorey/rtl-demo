import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

import Greeting from './Greeting';

const fakeUser = {
    firstName: 'World'
};

test('it should say Login', () => {
    const {getByText} = render(<Greeting isLoggedIn={false}/>);
    getByText('Login');
});

test('it should say Hello World', () => {
    const {getByText} = render(<Greeting isLoggedIn={true} user={fakeUser} />);
    getByText('Hello World');
});