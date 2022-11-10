import { useRef, useState, useEffect } from 'react';
import { useAdvancedForm } from 'pages/AdvancedSearch/context/advancedSearchFormContext';
import CastInput from '../CastInput';
import Input from 'components/Input/Input.component';
const ActorInput = () => {
  const [showInput, setShowInput] = useState(false);
  const { handleOnChange, inputValues } = useAdvancedForm();
  const ref = useRef();

  const value = inputValues['directors'];

  useEffect(() => {
    if (!ref.current) return;
    ref.current.focus();
  }, [showInput]);

  return (
    <CastInput
      value={value}
      name="directors"
      type="Directing"
      inputRef={ref}
      setShowInput={setShowInput}
      showInput={showInput}
    >
      <Input
        value={value}
        ref={ref}
        name="directors"
        type="text"
        placeholder="directors"
        handleOnChange={handleOnChange}
      />
    </CastInput>
  );
};
export default ActorInput;
