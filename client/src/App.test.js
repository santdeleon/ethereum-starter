import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

import { ThemeProvider } from './context/ThemeContext';

it('renders without crashing', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
  expect(
    screen.getByRole('heading', { name: 'Hello, Ethereum World!' }),
  ).toBeInTheDocument();
});
