import { render, screen } from '@testing-library/react';
import { Person } from './Person';

test('renders a name - get by text', () => {
    render(<Person name="John"/>);
    const divElement = screen.getByText(/Name is John/i);
    expect(divElement).toBeInTheDocument();
});

test('renders a name - get by role', () => {
    render(<Person name="John"/>);
    const divElement = screen.getByRole("contentinfo");
    expect(divElement).toHaveTextContent("Name is John");
});

test('has a correct title attribute', () => {
    render(<Person name="John"/>);
    const divElement = screen.getByRole("contentinfo");
    expect(divElement).toHaveAttribute("title","The name");
});
