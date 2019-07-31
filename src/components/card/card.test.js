import React from 'react';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import getUsers from '../../userData';
const testUser = getUsers()[0];

import Card from './Card';

afterEach(cleanup);

test(' it renders a card', () => {
    const {getByText} =  render(<Card user={testUser} />);
    getByText(/gary storey/i);
});