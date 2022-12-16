import useCreateYears from './useCreateYears';
import useCreateRating from './useCreateRating';
import useCreateVotecounts from './useCreateVotecounts';
import useCreateGenres from './useCreateGenres';
import useCreateRunTimes from './useCreateRunTimes';
const useCreateSelectorsData = () => {
  const { createYears } = useCreateYears(1902);
  const { createRating } = useCreateRating();
  const { createVoteCount } = useCreateVotecounts();
  const { createGenres } = useCreateGenres();
  const { createRunTimes } = useCreateRunTimes();
  return { createYears, createRating, createVoteCount, createGenres, createRunTimes };
};
export default useCreateSelectorsData;
