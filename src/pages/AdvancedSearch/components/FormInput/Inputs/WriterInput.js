import { useRef, useState, useEffect } from 'react';
import { useAdvancedForm } from 'pages/AdvancedSearch/context/advancedSearchFormContext';
import CastInput from '../CastInput';
import Input from 'components/Input/Input.component';
const ActorInput = () => {
  const [showInput, setShowInput] = useState(false);
  const { handleOnChange, inputValues } = useAdvancedForm();
  const ref = useRef();

  const value = inputValues['writers'];

  useEffect(() => {
    if (!ref.current) return;
    ref.current.focus();
  }, [showInput]);

  return (
    <CastInput
      value={value}
      name="writers"
      type="Writing"
      inputRef={ref}
      setShowInput={setShowInput}
      showInput={showInput}
    >
      <Input
        value={value}
        ref={ref}
        name="writers"
        type="text"
        placeholder="writers"
        handleOnChange={handleOnChange}
      />
    </CastInput>
  );
};
export default ActorInput;
