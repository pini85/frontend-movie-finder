import { tmdbHighestRatedApi, tmdbNewestTodayApi } from 'apis/tmdbApi';
export const latestMovies = { title: 'latest movies', api: tmdbNewestTodayApi };
export const highestRated = {
  title: 'highest rated',
  api: tmdbHighestRatedApi,
};
