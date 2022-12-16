import { useRef, useEffect, useState } from 'react';

import { useAdvancedForm } from 'pages/AdvancedSearch/context/advancedSearchFormContext';
import CastInput from '../CastInput';
import Input from 'components/Input/Input.component';
const ActorInput = () => {
  const [showInput, setShowInput] = useState(false);
  const { handleOnChange, inputValues } = useAdvancedForm();

  const value = inputValues['actors'];

  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    ref.current.focus();
  }, [showInput]);

  return (
    <CastInput
      value={value}
      name="actors"
      type="Acting"
      inputRef={ref}
      showInput={showInput}
      setShowInput={setShowInput}
    >
      <Input
        value={value}
        ref={ref}
        name="actors"
        type="text"
        placeholder="actors"
        handleOnChange={handleOnChange}
        width="20rem"
      />
    </CastInput>
  );
};
export default ActorInput;

