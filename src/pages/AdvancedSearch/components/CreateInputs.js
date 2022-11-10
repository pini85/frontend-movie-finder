import ActorInput from './FormInput/Inputs/ActorInput';
import DirectorInput from './FormInput/Inputs/DirectorInput';
import WriterInput from './FormInput/Inputs/WriterInput';
import * as S from './CreateInputs.styles';

const CreateInputs = () => {
  return (
    <S.CreateInputContainer>
      <ActorInput />
      <DirectorInput />
      <WriterInput />
    </S.CreateInputContainer>
  );
};
export default CreateInputs;
