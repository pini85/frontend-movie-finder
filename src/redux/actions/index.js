export const displayTheme = (theme) => {
  return {
    type: 'DISPLAY_THEME',
    payload: theme,
  };
};

export const displaySpinner = (spinner) => {
  return {
    type: 'DISPLAY_SPINNER',
    payload: spinner,
  };
};

export const user = (user) => {
  return {
    type: 'CURRENT_USER',
    payload: user,
  };
};

export const toggleHamburger = () => {
  return {
    type: 'TOGGLE_HAMBURGER',
    payload: null,
  };
};

export const setHeaderHeight = (height) => {
  return {
    type: 'SET_HEADER_HEIGHT',
    payload: height,
  };
};
