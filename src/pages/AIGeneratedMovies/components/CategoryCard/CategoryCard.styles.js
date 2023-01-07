import styled from 'styled-components/macro';
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 350px;
  width: 250px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 2s;
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
  }
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: black;
    opacity: 0.5;
    transition: all 0.3s;
    cursor: pointer;
  }
  //effect when hovering over before
  :hover::before {
    opacity: 0;
  }
`;
export const CategoryTitleContainer = styled.div`
  min-width: 50%;
  width: fit-content;
  font-size: 1.5rem;
  text-transform: capitalize;
  height: max-content;
  text-align: center;
  background-color: var(--primary-color);
  border-radius: 5px;
  padding: 2px 5px;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
export const KeyWordsContainer = styled.div`
  font-size: 1rem;
  text-transform: capitalize;
  height: max-content;
  text-align: center;
  background-color: var(--primary-color);
  border-radius: 5px;
  padding: 2px 5px;
`;
