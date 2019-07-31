import React from 'react';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import getUsers from './userData';

import App from './App';

afterEach(cleanup);

test('it should render', () => {
    const {getByText} = render(<App />);
    getByText('Login');
    getByText(/submit/i);
});