import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('handles onClick', () => {

    //render the component
    render(<Counter/>);

    // get a reference to rendered elements
    const pElement = screen.getByRole("contentinfo");
    const buttonElement = screen.getByText("Add one");

    // fire the click event
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    // expectations / assersions
    expect(pElement).toHaveTextContent("Count is 3");
});