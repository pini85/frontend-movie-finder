import React, { useEffect, useState } from 'react';
import useFetch from 'hooks/useFetch';
import Button from 'components/Button/Button';
const Login = () => {
  const { handleGoogle, loading, error } = useFetch(
    'http://localhost:5000/api/auth/google/login'
  );
  const user = localStorage.getItem('user');
  const handleLogOut = () => {
    localStorage.removeItem('user');
    window.location.reload();
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
        size: 'medium',
        text: 'signin_with',
        shape: 'pill',
        locale: 'en',
      });
      google.accounts.id.prompt();
    }
  }, [handleGoogle, user]);

  return (
    <>
      {!user && <div id="signUpDiv" data-text="signup_with"></div>}
      {user && <Button title="logout" handleClick={handleLogOut} />}
    </>
  );
};

export default Login;
