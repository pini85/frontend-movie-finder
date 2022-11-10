const queryConfig = {
  defaultOptions: {
    queries: {
      retry: 2,
      cacheTime: 1000 * 30,
      staleTime: 1000 * 30,
    },
  },
};

export default queryConfig;
