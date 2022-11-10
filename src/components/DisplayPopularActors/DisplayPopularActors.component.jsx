// import React from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { useNavigate } from 'react-router-dom';
// import {
//   fetchPopularActors,
//   fetchActorMovies,
//   showSearchResults,
// } from '../../redux/actions/index';

// import ActorCard from 'components/ActorCard/ActorCard.component';
// import Pagination from 'components/Pagination/Pagination.component';
// import { Container } from './DisplayPopularActors.styles';
// const DisplayPopularActors = (props) => {
//   let navigate = useNavigate();
//   const handleClick = (query) => {
//     props.fetchActorMovies(query, 1);
//     props.showSearchResults('actor');
//     navigate(`/search/${query}/page/1`);
//   };
//   return (
//     <>
//       <Pagination
//         api={props.fetchPopularActors}
//         data={props.fetchPopularActorsData}
//       />
//       <Container>
//         {props.fetchPopularActorsData &&
//           props.fetchPopularActorsData.results.map((actor) => {
//             return (
//               <div key={actor.id}>
//                 <ActorCard handleClick={handleClick} actor={actor} />
//               </div>
//             );
//           })}
//       </Container>
//       <Pagination
//         api={props.fetchPopularActors}
//         data={props.fetchPopularActorsData}
//       />
//     </>
//   );
// };
// const mapStateToProps = (state) => ({
//   fetchPopularActorsData: state.fetchPopularActors,
// });
// export default compose(
//   connect(mapStateToProps, {
//     fetchPopularActors: (page) => fetchPopularActors(page),
//     fetchActorMovies: (name, page) => fetchActorMovies(name, page),
//     showSearchResults: (type) => showSearchResults(type),
//   })
// )(DisplayPopularActors);
