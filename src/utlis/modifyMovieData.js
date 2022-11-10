import LoginComponent from 'components/Login/Login.component';
import * as Vibrant from 'node-vibrant';

const modifyMovieData = async (tmdbData, omdbData, credits, reviews) => {
  const imageTarget = () => {
    return tmdbData.backdrop_path
      ? `https://image.tmdb.org/t/p/w185//${tmdbData.backdrop_path}`
      : 'https://upload.wikimedia.org/wikipedia/commons/c/c0/White_color_Page.jpg';
  };
  const ratings = () => {
    switch (omdbData.Ratings.length) {
      case 1:
        return [
          {
            imdb: omdbData.Ratings[0],
            img: 'https://i.ibb.co/dth8xgq/imdb.png',
            url: `https://www.imdb.com/title/${tmdbData.imdb_id}/`,
          },
        ];

      case 2:
        return [
          {
            rating: omdbData.Ratings[0],
            img: 'https://i.ibb.co/dth8xgq/imdb.png',
            url: `https://www.imdb.com/title/${tmdbData.imdb_id}/`,
          },
          {
            rating: omdbData.Ratings[1],
            img: 'https://i.ibb.co/BCy3STv/tomato.png',
          },
        ];
      case 3:
        return [
          {
            rating: omdbData.Ratings[0],
            img: 'https://i.ibb.co/dth8xgq/imdb.png',
            url: `https://www.imdb.com/title/${tmdbData.imdb_id}/`,
          },
          {
            rating: omdbData.Ratings[1],
            img: 'https://i.ibb.co/BCy3STv/tomato.png',
          },
          {
            rating: omdbData.Ratings[2],
            img: 'https://i.ibb.co/5jVT2rK/meta-critic.png',
          },
        ];
    }
  };

  const getColors = async () => {
    const result = Vibrant.from(imageTarget());
    const palette = await result.getPalette();

    const colors = {
      darkVibrant: palette.DarkVibrant.hex,
      lightVibrant: palette.LightVibrant.hex,
      muted: palette.Muted.hex,
      darkMuted: palette.DarkMuted.hex,
      lightMuted: palette.LightMuted.hex,
      vibrant: palette.Vibrant.hex,
    };
    return colors;
  };

  const movie = {
    title: omdbData.Title,
    year: omdbData.Year,
    tmdbRating: tmdbData.vote_average,
    ratings: ratings(),
    genre: omdbData.Genre,
    director: omdbData.Director,
    writer: omdbData.Writer,
    // actors: await actorsList(),
    cast: credits?.cast,
    runTime: tmdbData.runtime,
    reviews: reviews,
    // magnets: magnets,
    plot: tmdbData.overview,
    tagLine: tmdbData.tagline,
    language: omdbData.Language,
    poster: tmdbData.poster_path,
    backdrop: tmdbData.backdrop_path,
    colors: await getColors(),
  };
  return movie;
};

export default modifyMovieData;
