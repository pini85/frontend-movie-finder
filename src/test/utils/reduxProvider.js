import { render as rtlRender } from '@testing-library/react';

import { Provider } from 'react-redux';
import { setUpStore } from 'redux/configureStore';

//source:https://redux.js.org/usage/writing-tests#:~:text=use%20the%20app.-,Setting%20Up%20a%20Reusable,set%20up%20and%20provided.,-Additionally%2C%20the%20test
//another source:https://testing-library.com/docs/react-testing-library/setup/#custom-render

export function renderWithReduxProviders(
  ui,
  {
    initialState = {}, //if we want to preload any initial state to the store
    // Automatically create a store instance if no store was passed in
    store = setUpStore(initialState),
    ...rtlOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }), store };
}
