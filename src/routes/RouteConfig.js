import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home.component';
import ScrollIntoView from 'components/ScrollIntoView.component';
import Header from 'layouts/Header/Header.component';
import MainNavigation from 'layouts/Header/components/MainNavigation.components';

const RouteConfig = () => {
  const ShowMovie = lazy(() => import('components/ShowMovie/ShowMovie.component'));
  const Movies = lazy(() => import('pages/Movies/Movies.component'));
  const TvShows = lazy(() => import('components/TvShows/TvShows.component'));
  const MovieListSearch = lazy(() =>
    import('components/MovieListSearch/MovieListSearch')
  );
  const AdvancedSearchNew = lazy(() => import('pages/AdvancedSearch/AdvancedSearchNew'));
  const PopularActors = lazy(() =>
    import('components/PopularActors/PopularActors.component')
  );
  const ActorMovies = lazy(() => import('components/ActorMovies/ActorMovies.component'));
  const Settings = lazy(() => import('pages/Settings/Settings'));
  const SavedMovies = lazy(() => import('components/SavedMovies/SavedMovies.component'));
  const Watch = lazy(() => import('pages/Watch/Watch'));

  return (
    <>
      {/* <AddToHome /> */}
      <ScrollIntoView>
        <Header>
          <MainNavigation />
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:id" element={<ShowMovie />} />
            <Route path="/movies/:category/page/:page" element={<Movies />} />
            <Route path="/tv/:category/page/:page" element={<TvShows />} />

            <Route exact path="/advanced-search" element={<AdvancedSearchNew />} />
            <Route path="/search/:type/:query/page/:page" element={<MovieListSearch />} />
            <Route path="/popular-actors/page/:page" element={<PopularActors />} />
            <Route path="movies/actors/:name/page/:page" element={<ActorMovies />} />
            <Route exact path="/settings" element={<Settings />} />
            {/* <Route exact path="/spinner/" element={<Film />} /> */}
            <Route exact path="/savedmovies" element={<SavedMovies />} />
            <Route exact path="/watch/:id" element={<Watch />} />
            {/* <Route exact path="/watch" element={<Watch />} /> */}
          </Routes>
        </Suspense>
      </ScrollIntoView>
      {/* <Footer /> */}
    </>
  );
};

export default RouteConfig;
