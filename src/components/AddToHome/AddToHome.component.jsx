import React, { useEffect, useState } from 'react';
import Modal from 'components/Modal/Modal.component';
import Button from 'components/Button/Button';
import * as S from './addToHome.styles';

const AddToHome = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isToggled, setToggled] = useState(true);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      setToggled(true);

      e.preventDefault();
      setDeferredPrompt(e);

      //   showInstallPromotion();
    });
  }, []);

  const handleInstallationClick = async () => {
    setToggled(false);

    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        deferredPrompt = null;
      }
    }
  };

  return (
    <div>
      {isToggled ? (
        <Modal isToggled={true} setToggled={setToggled} title="Download the app!">
          <S.ButtonContainer>
            <Button
              title="Yes! Sounds amazing!"
              handleClick={handleInstallationClick}
            ></Button>
            <Button
              title="No thank you"
              handleClick={() => setToggled(false)}
            ></Button>
          </S.ButtonContainer>
        </Modal>
      ) : null}
    </div>
  );
};
export default AddToHome;
