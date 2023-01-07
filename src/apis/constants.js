import api from 'apis/api';
export const saveMovie = (userId, movie) => {
  return api.post(`/api/${userId}/movies/add`, { movie });
};

export const getSavedMovies = async (userId) => {
  const data = await api.get(`/api/${userId}/movies`);
  return data.data;
};

export const removeSavedMovie = (userId, movieId) => {
  return api.delete(`/api/${userId}/movies/${movieId}`);
};

export const saveQuery = async (userId, query) => {
  return await api.post(`/api/${userId}/movieQueries/add`, { query });
};

export const getSaveQuery = async (userId) => {
  return await api.get(`/api/${userId}/movieQueries`);
};

export const removeSaveQuery = async (userId, queryId) => {
  return await api.delete(`/api/${userId}/movieQueries/${queryId}`);
};

export const getTorrents = async (name) => {
  return await api.get(`/api/torrents/${name}`);
};
export const watchTorrent = async (magnet) => {
  const link = encodeURIComponent(magnet.trim());

  return await api.get(`/api/watch?torrent=${link}`);
};

export const getMovieCategories = async () => {
  return await api.get(`/api/ai/movieCategories`);
};
export const getNewCategory = async () => {
  return await api.post(`/api/ai/generateCategory`);
};
export const getMoviesByCategory = async (categoryName) => {
  return await api.get(`/api/ai/moviesByCategory/${categoryName}`);
};

export const getNewMoviesByCategory = async (categoryName, numberOfMovies = 14) => {
  return await api.post('/api/ai/generateMoviesByCategory', {
    categoryName,
    numberOfMovies,
  });
};
