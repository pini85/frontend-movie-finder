import React from 'react';
import { render, screen, waitForLoadingToFinish, act } from 'test/utils/test-utils';
import userEvent from '@testing-library/user-event';
import SavedMovies from '../SavedMovies.component';
import { useSelector } from 'react-redux';

import * as moviesDb from 'test/data/savedMovies';
import { buildSavedMovie } from 'test/generate';
import Test from 'components/Skeletons/test';

test('renders correctly with spinner', async () => {
  render(<SavedMovies />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  await waitForLoadingToFinish();
  //! instead of doing this everytime for all these providers we have a render helper that takes all our providers
  // const queryClient = new QueryClient();
  // render(
  //   <MemoryRouter>
  //     <QueryClientProvider client={queryClient}>
  //       <Provider store={setUpStore()}>
  //         <SavedMovies />
  //       </Provider>
  //     </QueryClientProvider>
  //   </MemoryRouter>
  // );
});

test('should render saved movies', async () => {
  render(<SavedMovies />);
  const movies = await screen.findAllByRole('button', { name: /details/i });
  expect(movies).toHaveLength(2);
});

test('should remove movies from the list', async () => {
  const { user } = render(<SavedMovies />);

  const movies = await screen.findAllByRole('button', { name: /details/i });
  expect(movies).toHaveLength(2);

  const saveRemoveButtons = screen.getAllByRole('button', {
    name: /save/i,
  });

  await user.click(saveRemoveButtons[0]);
  const movies2 = await screen.findAllByRole('button', { name: /details/i });
  expect(movies2).toHaveLength(1);

  await user.click(saveRemoveButtons[0]);

  const movies3 = await screen.findAllByRole('button', { name: /details/i });
  screen.debug();
  expect(movies3).toHaveLength(0);
  expect(screen.queryByText(/no saved movies/i)).toBeInTheDocument();

  // const movies3 = await user.click(saveRemoveButtons[0]);
  // expect detail button not to be there
  // expect(movies3).toHaveLength(0);

  // screen.debug();
  // const removeButton = screen.getByRole('button', { name: /remove/i });
  // userEvent.click(removeButton);
  // const moviesAfterRemove = await screen.findAllByRole('button', { name: /details/i });
  // expect(moviesAfterRemove).toHaveLength(1);
});

// const userId = '629a1072c9af6d0016ddd222';
// screen.debug();

// const movies = await moviesDb.read(userId);

// expect(screen.queryByText(/hello/i)).toBeInTheDocument();

// const newMovie = await moviesDb.create(buildSavedMovie());

// await wait(async () => {
//   expect(screen.queryByText(/hello/i)).toBeNull();
// });
// expect(screen.queryByText(/no saved movies/i)).toBeInTheDocument();
// expect(await screen.findByText(/no saved movies/i)).toBeInTheDocument();
