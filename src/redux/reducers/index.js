import { combineReducers } from 'redux';

const displayThemeReducer = (theme = 'default-theme', action) => {
  if (action.type === 'DISPLAY_THEME') {
    return action.payload;
  }
  return theme;
};
const displaySpinnerReducer = (spinner = 'bouncing dvd', action) => {
  if (action.type === 'DISPLAY_SPINNER') {
    return action.payload;
  }
  return spinner;
};

const userReducer = (user = localStorage.getItem('user'), action) => {
  if (action.type === 'CURRENT_USER') {
    return action.payload;
  }
  return user;
};

const toggleHamburgerReducer = (hidden = false, action) => {
  if (action.type === 'TOGGLE_HAMBURGER') {
    return !hidden;
  }
  return hidden;
};
const setHeaderHeight = (height = 0, action) => {
  if (action.type === 'SET_HEADER_HEIGHT') {
    return action.payload;
  }
  return height;
};

export default combineReducers({
  setHeaderHeight: setHeaderHeight,
  displayTheme: displayThemeReducer,
  displaySpinner: displaySpinnerReducer,
  user: userReducer,
  toggleHamburger: toggleHamburgerReducer,
});
