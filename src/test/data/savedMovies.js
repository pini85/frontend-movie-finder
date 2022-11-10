import savedMoviesData from './savedMovies.data.json';
import initalUserMovies from './initalData';

let userMovies = [...savedMoviesData];

const fetchSavedMovies = async (userId) => {
  const userIndex = userMovies.findIndex((user) => user.userId === userId);

  return userMovies[userIndex];
};

const saveMovie = (userId, movie) => {
  const userIndex = userMovies.findIndex((user) => user.userId === userId);
  userMovies[userIndex].movies.push(movie);
  return userMovies;
};
const removeMovie = (userId, movieId) => {
  const id = parseInt(movieId);

  const userIndex = userMovies.findIndex((user) => user.userId === userId);

  const movieIndex = userMovies[userIndex].movies.findIndex((movie) => {
    return movie.id === id;
  });

  userMovies[userIndex].movies.splice(movieIndex, 1);

  return userMovies;
};

const reset = () => {
  const initalData = [
    {
      _id: '62c6ca391f8f970016bbec4c',
      movies: [
        {
          poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
          vote_average: 6.4,
          release_date: '2019',
          title: 'Star Wars: Episode IX - The Rise of Skywalker',
          id: 181812,
        },
        {
          poster_path: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
          vote_average: 7.5,
          release_date: '2022',
          title: 'Doctor Strange in the Multiverse of Madness',
          id: 453395,
        },
      ],
      userId: '629a1072c9af6d0016ddd222',
      __v: 0,
    },
  ];
};

// async function readManyNotInList(ids) {
//   return books.filter((book) => !ids.includes(book.id));
// }

// async function query(search) {
//   return matchSorter(books, search, {
//     keys: [
//       'title',
//       'author',
//       'publisher',
//       { threshold: matchSorter.rankings.CONTAINS, key: 'synopsis' },
//     ],
//   });
// }

// async function reset() {
//   books = [...booksData];
// }

export { fetchSavedMovies, saveMovie, removeMovie, reset };
