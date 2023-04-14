import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/The T-Shirt Company/i);
    expect(linkElement).toBeInTheDocument();
});
