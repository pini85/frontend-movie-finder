import React from 'react';
import { render, screen } from '@testing-library/react';

import Ttt from './ttt';

describe('App', () => {
  test('renders App component', async () => {
    render(<Ttt />);
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });
});
