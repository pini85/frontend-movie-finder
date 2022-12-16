import { useState, useEffect } from 'react';
const useCreateRunTimes = () => {
  const [createRunTimes, setCreateRunTimes] = useState(null);
  const runTimes = ['Any run time', 1, 1.5, 2, 3];

  const modifyRunTimeText = (runTimes) => {
    switch (runTimes) {
      case 'Any run time':
        return runTimes;
      case 1:
        return `${runTimes} hour - 1.5 hours`;
      case 1.5:
        return `${runTimes} hours - ${runTimes + 0.5} hours`;
      case 2:
        return `${runTimes} hours - ${runTimes + 1} hours`;
      case 3:
        return `more than ${runTimes} hours`;
    }
  };

  useEffect(() => {
    let runTime = [];
    for (let i = 0; i < runTimes.length; i++) {
      runTime.push(
        <option key={i} value={runTimes[i]}>
          {modifyRunTimeText(runTimes[i])}
        </option>
      );
    }
    setCreateRunTimes(runTime);
  }, []);

  return { createRunTimes };
};
export default useCreateRunTimes;
