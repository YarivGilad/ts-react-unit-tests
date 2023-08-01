
import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

test('renders a name - get by text', () => {
    //dummy data
    const items = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    //render the component
    render(<SideBar items={items}/>);

    // get a reference to rendered elements
    const anchorElements = screen.getAllByRole("navigation");
    
    // expectations / assersions
    expect(anchorElements[0]).toHaveTextContent(items[0].name);
    expect(anchorElements[0]).toHaveAttribute("href", items[0].href);
});