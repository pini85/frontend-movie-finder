import useGetSuggestions from 'hooks/reactQuery/useGetSuggestions.jsx';
const useActorsDataInput = ({ searchQuery, type }) => {
  const settings = {
    searchQuery,
    showMovies: false,
    showCast: true,
    moviesNumber: null,
    castNumber: 5,
    type: type,
  };

  const { suggestions } = useGetSuggestions(...Object.values(settings));

  return { suggestions };
};
export default useActorsDataInput;
