import { useEffect, useState } from 'react';
const useCreateYears = (fromYear) => {
  const [createYears, setCreateYears] = useState(null);
  useEffect(() => {
    let years = [];
    for (let i = new Date().getFullYear(); i > fromYear; i--) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    setCreateYears(years);
  }, []);

  return { createYears };
};
export default useCreateYears;
