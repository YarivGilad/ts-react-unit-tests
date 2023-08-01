import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonWrapper } from './ButtonWrapper';

test('handles onClick', () => {

    // create a spy / mocked function 
    const onClick = jest.fn();

    //render the component
    render(<ButtonWrapper title='Purchase Item' onClick={onClick}/>);

    // get a reference to rendered elements
    const buttonElement = screen.getByText("Purchase Item");

    // fire the click event
    fireEvent.click(buttonElement);

    // expectations / assersions
    expect(onClick).toHaveBeenCalledTimes(1);
});