import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  width: ${({ width }) => (width > 500 ? '35rem' : null)};
  padding: 1rem;
  font-size: 1.7rem;
  color: var(--text-white);
  border-bottom: 1px solid white;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--text-dark);
    background-color: var(--primary-color-light);
  }
`;

export const CardWrapper = styled.div``;
export const Title = styled.div``;
export const VoteContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const VoteWrapper = styled.div`
  margin-left: 1rem;
`;

export const Img = styled.img`
  height: 7rem;
  width: 5rem;
  margin-right: 1rem;
  align-self: center;
`;

export const DateWrapper = styled.div`
  margin-left: 1rem;
`;

export const IconAndYearContainer = styled.div`
  display: flex;
  align-items: center;
`;
