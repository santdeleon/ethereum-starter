import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

import { ThemeProvider } from './context/ThemeContext';

describe('the App component', () => {
  it('renders content a welcome message', async () => {
    const { container } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'Hello, Ethereum World!' }),
    ).toBeInTheDocument();

    await waitFor(() => expect(container).toMatchSnapshot());
  });
});
