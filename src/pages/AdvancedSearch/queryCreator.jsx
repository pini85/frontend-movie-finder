import {
  advancedSearchRunTime,
  advancedSearchRating,
  advancedSearchSortBy,
  advancedSearchVotes,
  advancedSearchCast,
  displayGenre,
  displayFromYear,
  displayToYear,
} from 'utlis/advancedSearchConfiguration';
const queryCreator = (inputData, selectorsData) => {
  const { fromYear, toYear, genre, rating, runTime, voteCount } = selectorsData;

  const castQueries = advancedSearchCast(inputData);

  const ratingQueries = advancedSearchRating(Number(rating));
  const runTimeQueries = advancedSearchRunTime(Number(runTime));
  const voteCountQueries = advancedSearchVotes(Number(voteCount));
  const sortByQueries = advancedSearchSortBy();
  const genreQueries = displayGenre(genre);
  const yearQueries = displayFromYear(fromYear).concat(displayToYear(toYear));

  const query =
    castQueries +
    ratingQueries +
    runTimeQueries +
    voteCountQueries +
    sortByQueries +
    genreQueries +
    yearQueries;

  return query.slice(1);
};
export default queryCreator;
