import { useEffect, useState } from 'react';
const useCreateRating = () => {
  const [createRating, setCreateRating] = useState(null);
  useEffect(() => {
    let rating = [];
    for (let i = 9; i >= 1; i--) {
      rating.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    setCreateRating(rating);
  }, []);

  return { createRating };
};
export default useCreateRating;
