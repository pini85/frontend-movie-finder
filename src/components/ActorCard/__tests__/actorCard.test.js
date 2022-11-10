import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { render, screen } from '@testing-library/react';
import ActorCard from '../ActorCard.component.jsx';

const queryClient = new QueryClient();

describe('ActorCard', () => {
  test('should render ActorCard', () => {
    // render(
    //   <QueryClientProvider client={queryClient}>
    //     <ActorCard />
    //   </QueryClientProvider>
    // );
  });
});
