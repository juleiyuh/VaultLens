// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VaultLens title', () => {
    render(<App />);
    const titleElement = screen.getByText(/VaultLens/i);
    expect(titleElement).toBeInTheDocument();
});
