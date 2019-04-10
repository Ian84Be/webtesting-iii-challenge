
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each'; 

import Display from './Display';

describe('Display', () => {

    describe('CLOSED STATE', () => {
        it('displays Closed if the closed prop is true', () => {
            const {getByText} = render(<Display closed={true}/>);
            expect(getByText(/closed/i));
        });
    });

    describe('OPEN STATE', () => {
        it('displays Open if the closed prop is false', () => {
            const {getByText} = render(<Display closed={false}/>);
            expect(getByText(/open/i));
        });
    });

    describe('LOCKED STATE', () => {
        it('displays Locked if the locked prop is true', () => {
            const {getByText} = render(<Display locked={true}/>);
            expect(getByText(/locked/i));
        });
    });

    describe('UNLOCKED STATE', () => {
        it('displays Unlocked if the locked prop is false', () => {
            const {getByText} = render(<Display locked={false}/>);
            expect(getByText(/unlocked/i));
        });
    });
});
