import React from 'react';
import { render, waitForElementToBeRemoved, screen } from '@testing-library/react';
import { expect, jest, test } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setUpStore } from 'redux/configureStore';
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();

const AllTheProviders = ({ children }) => {
  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={setUpStore()}>{children}</Provider>
      </QueryClientProvider>
    </MemoryRouter>
  );
};
const renderWithProviders = (ui, options) => {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders, ...options }),
  };
};
export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByLabelText(/loading/i),
      ...screen.queryAllByText(/loading/i),
    ],
    { timeout: 4000 }
  );

export const mockfs = jest.mock('fs');

export { renderWithProviders as render };
export * from '@testing-library/react';
