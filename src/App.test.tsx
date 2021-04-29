import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aplikacja React/i);
  
  userEvent.click(linkElement)
  
  const linkElement2 = screen.getByText(/Playlist 123/i);

  expect(linkElement).toBeInTheDocument();
});
