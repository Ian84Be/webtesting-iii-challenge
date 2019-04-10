
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each'; 

import Dashboard from './Dashboard';

describe('Dashboard', () => {
    it('should default to unlocked & open', () => {
        const {getByText} = render(<Dashboard/>);
        expect(getByText(/unlocked/i));
        expect(getByText(/open/i));

    });
});