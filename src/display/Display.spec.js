
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each'; 

import Display from './Display';

describe('Display', () => {

    describe('OPEN STATE', () => {
        it('displays Open if the closed prop is false', () => {
            const {getByText} = render(<Display closed={false}/>);
            expect(getByText(/open/i));
        });

        it('uses green-led class when open', () => {
            const {getByText} = render(<Display closed={false}/>);
            expect(getByText(/open/i)).toHaveClass('green-led');
        });
    });

    describe('UNLOCKED STATE', () => {
        it('displays Unlocked if the locked prop is false', () => {
            const {getByText} = render(<Display locked={false}/>);
            expect(getByText(/unlocked/i));
        });

        it('uses green-led class when unlocked', () => {
            const {getByText} = render(<Display locked={false}/>);
            expect(getByText(/open/i)).toHaveClass('green-led');
        });
    });

    describe('CLOSED STATE', () => {
        it('displays Closed if the closed prop is true', () => {
            const {getByText} = render(<Display closed={true}/>);
            expect(getByText(/closed/i));
        });

        it('uses red-led class when closed', () => {
            const {getByText} = render(<Display closed={true}/>);
            expect(getByText(/closed/i)).toHaveClass('red-led');
        });
    });

    describe('LOCKED STATE', () => {
        it('displays Locked if the locked prop is true', () => {
            const {getByText} = render(<Display locked={true}/>);
            expect(getByText(/locked/i));
        });

        it('uses red-led class when locked', () => {
            const {getByText} = render(<Display locked={true}/>);
            expect(getByText(/locked/i)).toHaveClass('red-led');
        });
    });

});
