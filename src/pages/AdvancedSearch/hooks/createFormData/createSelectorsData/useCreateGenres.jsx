import { useEffect, useState } from 'react';

import useGetMovieGenres from 'hooks/reactQuery/useGetMovieGenres';
const useCreateGenres = () => {
  const [createGenres, setCreateGenres] = useState();
  const { data } = useGetMovieGenres();
  useEffect(() => {
    if (!data) return;
    let genres = [];

    for (let i = 0; i < data.length; i++) {
      genres.push(
        <option key={i} value={data[i].id}>
          {data[i].name}
        </option>
      );
      setCreateGenres(genres);
    }
  }, [data]);
  return { createGenres };
};
export default useCreateGenres;
