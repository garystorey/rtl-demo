import React from 'react';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import getUsers from '../../userData';

import Card from './Card';

afterEach(cleanup);

test('it should render', ()=> {
    const user = getUsers()[0];
    const {getByText} = render(<Card user={user}/>);
    getByText('Gary Storey');
    getByText('123 DigitalCrafts Dr');
});

test('it should render', ()=> {
    const user = getUsers()[1];
    const {getByText} = render(<Card user={user}/>);
    getByText('Herman Munster');
    getByText('1313 Mockingbird Lane');
});