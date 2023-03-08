import { Button } from './button';
import renderer from 'react-test-renderer';
import {fireEvent, render, screen} from "@testing-library/react";


describe('Testing button component', () => {

    it('button with text', () => {
        const button = renderer.create(<Button text={'test text'} />).toJSON();
        expect(button).toMatchSnapshot();
    });

    it('button without text', () => {
        const button = renderer.create(<Button />).toJSON();
        expect(button).toMatchSnapshot();
    });

    it('button disabled', () => {
        const button = renderer.create(<Button disabled />).toJSON();
        expect(button).toMatchSnapshot();
    });

    it('button has loading', () => {
        const button = renderer.create(<Button isLoader />).toJSON();
        expect(button).toMatchSnapshot();
    });

    it('callback should work correctly after click', () => {
        const cb = jest.fn();
        render(<Button onClick={cb} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(cb).toHaveBeenCalled();
    });
});