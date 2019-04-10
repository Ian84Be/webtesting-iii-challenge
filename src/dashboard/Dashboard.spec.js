
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each'; 

import Dashboard from './Dashboard';

describe('Dashboard', () => {
    describe('DEFAULT STATE', () => {
        it('matches snapshot', () => {
            const tree = renderer.create(<Dashboard />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('defaults to unlocked & open', () => {
            const {getByText} = render(<Dashboard/>);
            expect(getByText(/unlocked/i));
            expect(getByText(/open/i));
        });

        it('shows the controls and display', () => {
            const {getByText} = render(<Dashboard/>);
            expect(getByText(/unlocked/i));
            expect(getByText(/open/i));
            expect(getByText(/close gate/i));
            expect(getByText(/lock gate/i));
        });
    });

    describe('LOCKED STATE', () => {
        it('cannot be closed or opened if it is locked', () => {
            const {getByText} = render(<Dashboard/>);
            
            expect(getByText(/unlocked/i));
            expect(getByText(/open/i));
    
            fireEvent.click(getByText(/close gate/i));
            expect(getByText(/closed/i));
            expect(getByText(/unlocked/i));
    
            fireEvent.click(getByText(/lock gate/i));
            expect(getByText(/closed/i));
            expect(getByText(/locked/i));
    
            fireEvent.click(getByText(/open gate/i));
            expect(getByText(/closed/i));
            expect(getByText(/open gate/i));
        });
    });
});