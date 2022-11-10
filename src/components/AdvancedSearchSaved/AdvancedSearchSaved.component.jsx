import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import {
  displayUserSearch,
  removeUserAdvancedSearch,
  defaultSearches,
} from '../../redux/actions';

import {
  Container,
  SearchContainer,
  Title,
  ButtonContainer,
  IconContainer,
} from './AdvancedSearchSaved.styles';
import Button from 'components/Button/Button';
import OptionButtonWrapper from 'components/OptionButtonWrapper/OptionButtonWrapper.component';
import OptionButton from 'components/OptionButton/OptionButton.component';
import Spinner from 'components/Spinners/Spin/Spin.component';

const AdvancedSearchSaved = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const handleClick = (search) => {
    props.displayUserSearch(search);
  };
  const handleDefaultSearch = async () => {
    setLoading(true);
    setDisabled(true);
    await props.defaultSearches();
    setLoading(false);
    setDisabled(false);
  };

  const handleRemoveClick = (search) => {
    props.removeUserAdvancedSearch(search);
  };
  return (
    <Container>
      <Title>Saved Search Results</Title>
      <SearchContainer>
        {props.displayUserSearches.length < 1 && (
          <div>
            <div style={{ marginBottom: '2rem' }}>No searches saved</div>
            {!isDisabled ? (
              <Button
                title=" Load Movie Finder's cool searches"
                handleClick={handleDefaultSearch}
              ></Button>
            ) : null}
            {isLoading ? (
              <div style={{ marginTop: '2rem' }}>
                <Spinner></Spinner>{' '}
              </div>
            ) : null}
          </div>
        )}

        {props.displayUserSearches &&
          props.displayUserSearches.map((search, i) => {
            return (
              <ButtonContainer key={i}>
                <OptionButtonWrapper
                  color1="var(--primary-color-light)"
                  color2="var(--primary-color)"
                >
                  <OptionButton
                    handleOptionClick={() => handleClick(search)}
                    title={search.search.name}
                    textColor="white"
                  />
                </OptionButtonWrapper>
                <IconContainer onClick={() => handleRemoveClick(search)}>
                  <FontAwesomeIcon icon={faTrash} />
                </IconContainer>
              </ButtonContainer>
            );
          })}
      </SearchContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  displayUserSearches: state.userAdvancedSearches,
});
const mapStateToDispatch = {
  displayUserSearch: (search) => displayUserSearch(search),
  removeUserAdvancedSearch: (obj) => removeUserAdvancedSearch(obj),
  defaultSearches: defaultSearches,
};
export default connect(mapStateToProps, mapStateToDispatch)(AdvancedSearchSaved);
