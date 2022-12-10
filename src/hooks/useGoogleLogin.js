import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { user } from '../redux/actions/index';

const useGoogleLogin = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleGoogle = async (response) => {
    setLoading(true);
    try {
      const credentialsResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: response.credential }),
      });
      const data = await credentialsResponse.json();
      if (data?.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch(user(data.user));
      } else {
        throw new Error(data?.message || data);
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return { loading, error, handleGoogle };
};

export default useGoogleLogin;
