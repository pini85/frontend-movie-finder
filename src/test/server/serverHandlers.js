import { rest } from 'msw';
import { fetchSavedMovies, saveMovie, removeMovie, reset } from '../data/savedMovies';

const handlers = [
  rest.get('http://localhost:5000/api/:userId/movies', async (req, res, ctx) => {
    const { userId } = req.params;
    const savedMovies = await fetchSavedMovies(userId);

    return res(ctx.status(200), ctx.json(savedMovies));
  }),
  rest.post('http://localhost:5000/api/:userId/movies/add`', async (req, res, ctx) => {
    const { userId } = req.params;
    const { movie } = req.body;
    const savedMovie = await saveMovie(userId, movie);
    return res(ctx.json(savedMovie));
  }),
  rest.delete(
    `http://localhost:5000/api/:userId/movies/:movieId`,
    async (req, res, ctx) => {
      const { userId, movieId } = req.params;
      const result = await removeMovie(userId, movieId);

      return res(ctx.json(result));
    }
  ),
];

export { handlers };
