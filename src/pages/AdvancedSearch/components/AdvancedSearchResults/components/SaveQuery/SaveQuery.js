import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useAdvancedForm } from 'pages/AdvancedSearch/context/advancedSearchFormContext.js';
import Modal from 'components/Modal/Modal.component';
import Button from 'components/Button/Button.jsx';
import Input from 'components/Input/Input.component.jsx';
import { saveQuery } from 'apis/constants';
import * as S from './SaveQuery.styles.js';
const SaveQuery = ({ isSaved, setSaved }) => {
  const [savedName, setSavedName] = useState('');

  const queryClient = useQueryClient();
  const { inputData, selectorsData } = useAdvancedForm();

  const userId = useSelector((state) => state.user?._id);
  console.log(userId);

  const saveQueryMutation = useMutation((query) => saveQuery(userId, query), {
    onSuccess: () => queryClient.invalidateQueries('saved-queries', userId),
  });

  const handleSave = () => {
    saveQueryMutation.mutate({ name: savedName, query: { inputData, selectorsData } });
    setSaved(false);
  };
  return (
    <div>
      <Modal isToggled={isSaved} setToggled={setSaved} title="save query">
        <S.ModalContainer>
          <S.Wrapper>
            <S.ModalTitleContainer>What would be the name?</S.ModalTitleContainer>
            <Input
              handleOnChange={(e) => setSavedName(e.target.value)}
              value={savedName}
              placeholder="name"
            />
            <S.ButtonContainer>
              <Button handleClick={handleSave} title="save"></Button>
              <Button
                handleClick={() => {
                  setSaved(false);
                }}
                title="cancel"
              ></Button>
            </S.ButtonContainer>
          </S.Wrapper>
        </S.ModalContainer>
      </Modal>
    </div>
  );
};
export default SaveQuery;
