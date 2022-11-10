import * as S from './navigation.styles';
import NavigationLink from 'components/NavigationLink/NavigationLink.component';
import { navLinks } from 'utlis/applicationData';

const NavigationLinks = () => {
  const generateLinks = () => {
    const removeFirstLink = [...navLinks].splice(1);
    return removeFirstLink.map((list) => {
      return (
        <NavigationLink key={list.link} link={list.link}>
          {list.title}
        </NavigationLink>
      );
    });
  };
  return <S.ListContainer>{generateLinks()}</S.ListContainer>;
};
export default NavigationLinks;
