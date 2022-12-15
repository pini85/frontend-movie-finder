import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { user as setUser } from 'redux/actions/index';
import useGoogleLogin from 'hooks/useGoogleLogin';
import Button from 'components/Button/Button';
const Login = () => {
  let url =
    process.env.NODE_ENV === 'production'
      ? 'https://www.my-cheap-ass-server.link/api/auth/google/login'
      : 'http://localhost:5000/api/auth/google/login';

  console.log(process.env.NODE_ENV);
  const { handleGoogle, error } = useGoogleLogin(url);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const user = localStorage.getItem('user');
  const handleLogOut = () => {
    localStorage.removeItem('token');
    dispatch(setUser(null));
  };

  useEffect(() => {
    if (user) return;

    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById('signUpDiv'), {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        shape: 'pill',
        locale: 'en',
      });
      google.accounts.id.prompt();
    }
  }, [user]);

  return (
    <>
      <h1>{error}</h1>
      {!user && <div id="signUpDiv" data-text="signup_with"></div>}
      {user && <Button title="logout" handleClick={handleLogOut} />}
    </>
  );
};

export default Login;
