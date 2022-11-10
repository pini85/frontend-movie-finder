import { useEffect, useState } from 'react';
const useCreateVotecounts = () => {
  const [createVoteCount, setCreateVoteCount] = useState(null);
  const voteCounts = [
    20000, 15000, 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 500, 100,
  ];
  useEffect(() => {
    let voteCount = [];
    for (let i = 0; i < voteCounts.length; i++) {
      voteCount.push(
        <option key={i} value={voteCounts[i]}>
          {voteCounts[i]}
        </option>
      );
    }
    setCreateVoteCount(voteCount);
  }, []);

  return { createVoteCount };
};
export default useCreateVotecounts;
