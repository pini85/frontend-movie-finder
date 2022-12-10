import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { user } from '../redux/actions/index';

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleGoogle = async (response) => {
    setLoading(true);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ credential: response.credential }),
    })
      .then((res) => {
        setLoading(false);
        console.log({ res });

        return res.json();
      })
      .then((data) => {
        if (data?.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          dispatch(user(data.user));
        }

        throw new Error(data?.message || data);
      })
      .catch((error) => {
        console.log({ error });
        setError(error?.message);
      });
  };
  return { loading, error, handleGoogle };
};

export default useFetch;
