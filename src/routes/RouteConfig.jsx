import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/Home/Home.component.jsx';
import ScrollIntoView from '../components/ScrollIntoView.component.jsx';
import Header from '../layouts/Header/Header.component.jsx';
import MainNavigation from '../layouts/Header/components/MainNavigation.components.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Film from 'components/Spinners/Film/Film.component.jsx';
import SpinnerContainer from 'components/Spinners/SpinnerContainer/SpinnerContainer.jsx';

const RouteConfig = () => {
  const user = useSelector((state) => state?.user?.user);
  const ShowMovie = lazy(() => import('../components/ShowMovie/ShowMovie.component.jsx'));
  const Movies = lazy(() => import('../pages/Movies/Movies.component.jsx'));
  const TvShows = lazy(() => import('../components/TvShows/TvShows.component.jsx'));
  const MovieListSearch = lazy(() =>
    import('../components/MovieListSearch/MovieListSearch.jsx')
  );
  const AdvancedSearchNew = lazy(() =>
    import('../pages/AdvancedSearch/AdvancedSearchNew.jsx')
  );
  const PopularActors = lazy(() =>
    import('../components/PopularActors/PopularActors.component.jsx')
  );
  const ActorMovies = lazy(() =>
    import('../components/ActorMovies/ActorMovies.component.jsx')
  );
  const AIGeneratedMovies = lazy(() =>
    import('pages/AIGeneratedMovies/AIGeneratedMovies.jsx')
  );
  const AIGeneratedMoviesByCategory = lazy(() =>
    import('pages/AIGeneratedMovies/components/AiMoviesByCategory/AiMoviesByCategory.jsx')
  );
  const Settings = lazy(() => import('../pages/Settings/Settings.jsx'));
  const SavedMovies = lazy(() =>
    import('../components/SavedMovies/SavedMovies.component.jsx')
  );
  const Watch = lazy(() => import('../pages/Watch/Watch.jsx'));

  return (
    <>
      {/* <AddToHome /> */}
      <ScrollIntoView>
        <Header>
          <MainNavigation />
        </Header>
        <Suspense
          fallback={
            <SpinnerContainer>
              <Film />
            </SpinnerContainer>
          }
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:id" element={<ShowMovie />} />
            <Route path="/movies/:category/page/:page" element={<Movies />} />
            <Route path="/tv/:category/page/:page" element={<TvShows />} />

            <Route exact path="/advanced-search" element={<AdvancedSearchNew />} />
            <Route path="/search/:type/:query/page/:page" element={<MovieListSearch />} />
            <Route path="/popular-actors/page/:page" element={<PopularActors />} />
            <Route path="movies/actors/:name/page/:page" element={<ActorMovies />} />
            <Route path="/ai-generated-movies" element={<AIGeneratedMovies />} />
            <Route
              path="/ai-generated-movies/:categoryName"
              element={<AIGeneratedMoviesByCategory />}
            />
            <Route exact path="/settings" element={<Settings />} />
            {/* <Route exact path="/spinner/" element={<Film />} /> */}

            <Route exact path="/watch/:id" element={<Watch />} />
            {/* <Route exact path="/watch" element={<Watch />} /> */}
            <Route
              path="/savedmovies"
              element={
                <PrivateRoute user={user}>
                  <SavedMovies />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </ScrollIntoView>
      {/* <Footer /> */}
    </>
  );
};

export default RouteConfig;
