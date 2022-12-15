import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { IconContainer } from './Customize.styles';

const Customize = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/settings');
  };

  return (
    <IconContainer onClick={handleClick}>
      <FontAwesomeIcon icon={faCog} />
    </IconContainer>
  );
};

export default Customize;
