import React from "react";
import tmdbLogo from "../../assets/images/tmdb.svg";
import * as S from "./footer.styles";
const Footer = () => {
  return (
    <S.Container>
      <S.paragraph>
        Powered by
        <S.span>
          <img width={200} src={tmdbLogo} alt="tmdb" />
        </S.span>
      </S.paragraph>
    </S.Container>
  );
};
export default Footer;
