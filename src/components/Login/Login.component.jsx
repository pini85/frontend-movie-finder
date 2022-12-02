import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userData } from '../../redux/actions/index';

import Button from '../Button/Button';
const Login = ({ currentUser, userData }) => {
  useEffect(() => {
    const fetchUserData = async () => {
      await userData();
    };
    fetchUserData();
  }, [currentUser, userData]);

  let url;
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    url = 'http://localhost:5000';
  }

  if (process.env.NODE_ENV === 'production') {
    url = 'https://www.my-cheap-ass-server.link';
  }
  let logout = `${url}/api/logout`;
  let login = `${url}/auth/google/`;
  console.log({ logout });
  console.log({ login });

  return (
    <>
      {currentUser ? (
        <a href={logout}>
          <Button title="logout" icon={false}></Button>
        </a>
      ) : (
        <a href={login}>
          <Button title="sign in with google" icon="google"></Button>
        </a>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.fetchCurrentUser,
});
export default connect(mapStateToProps, {
  userData: userData,
})(Login);
