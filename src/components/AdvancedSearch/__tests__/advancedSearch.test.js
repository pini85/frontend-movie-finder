import React from 'react';
import { render, fireEvent } from 'test/utils/test-utils';

import 'jest-axe/extend-expect';
//! to do . get jest to import this automatically jest-axe/extend-expect

import { axe } from 'jest-axe';

import AdvancedSearch from '../AdvancedSearch.component';

test('renders correctly', async () => {
  const { container } = render(<AdvancedSearch />);

  // const { container } = render(
  //   //if you would have many routes in this component, you would need to wrap it in a memory router and set the initialEntries to that specific route
  //   <MemoryRouter initialEntries={['/advanced-search']}>
  //     <Provider store={store}>
  //       <AdvancedSearch />
  //     </Provider>
  //   </MemoryRouter>
  // );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  //   expect(screen.queryByText(/no saved movies/i)).toBeNull();
  //   expect(await screen.findByText(/no saved movies/i)).toBeInTheDocument();
});
