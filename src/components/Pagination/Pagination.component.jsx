import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import * as S from './pagination.styles';
import useWidth from '../../hooks/useWidth.hooks';

const Pagination = ({ pages }) => {
  const params = useParams();
  const headerHeight = useSelector((state) => state.ui.headerHeight);
  const page = Number(params.page);
  const location = useLocation();
  const navigate = useNavigate();

  const updateUrl = (page) => {
    const splitUrl = location.pathname.split('/');
    splitUrl[splitUrl.length - 1] = page;
    navigate(splitUrl.join('/'));
  };

  const [buttons, setButtons] = useState(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [amountOfBtns, setAmountOfBtns] = useState(20);

  const totalPages = pages ?? null;

  const width = useWidth().width;

  useEffect(() => {
    if (!buttons) return;

    handleNavigationJump(page);
  }, [buttons]);

  useEffect(() => {
    if (width <= 500) {
      setAmountOfBtns(5);
      setEnd(7);
    } else {
      setAmountOfBtns(10);
      setEnd(10);
    }
  }, []);

  useEffect(() => {
    if (!totalPages) return;
    let amountOfButtons = [];

    for (let i = start; i <= totalPages - 1; i++) {
      amountOfButtons.push(i + 1);
    }

    setButtons(amountOfButtons);
  }, [totalPages]);

  const handleNavigationJump = (numberPage) => {
    updateUrl(numberPage);

    if (pages <= amountOfBtns) return;

    const isOverHalfOfAmount = Math.ceil(amountOfBtns / 2);
    const isInTheEnd = numberPage - 1 > totalPages - isOverHalfOfAmount;

    const amount = numberPage - isOverHalfOfAmount;
    if (isInTheEnd) {
      setStart(buttons.length - amountOfBtns);
      return setEnd(buttons.length);
    }

    if (numberPage < isOverHalfOfAmount) {
      setStart(0);
      return setEnd(amountOfBtns);
    }

    setStart(amount);
    setEnd(amount + amountOfBtns);
  };

  const handleNavigation = (numberPage) => {
    let counter = numberPage > page ? 1 : -1;
    updateUrl(numberPage);

    if (pages <= amountOfBtns) return;

    const isOverHalfOfAmount = Math.ceil(amountOfBtns / 2);

    const isInTheEnd = numberPage - 1 > totalPages - isOverHalfOfAmount;
    if (isInTheEnd) {
    }
    if (isInTheEnd) return;
    if (counter === 1 && numberPage > isOverHalfOfAmount) {
      setStart((prev) => prev + 1);
      setEnd((prev) => prev + 1);
    }
    if (counter === -1 && numberPage >= isOverHalfOfAmount) {
      setStart((prev) => prev - 1);
      setEnd((prev) => prev - 1);
    }
  };
  const handleFirstNavigation = () => {
    updateUrl(1);
    setStart(0);
    setEnd(amountOfBtns);
  };

  const handleLastNavigation = () => {
    updateUrl(totalPages);
    setStart(totalPages - amountOfBtns);
    setEnd(totalPages);
  };

  const renderButtons = () => {
    return (
      buttons &&
      buttons.slice(start, end).map((p) => {
        return (
          <div key={p}>
            <S.ButtonContainer
              isActive={p === page}
              onClick={() => handleNavigationJump(p)}
            >
              {p}
            </S.ButtonContainer>
          </div>
        );
      })
    );
  };

  return (
    <S.Container headerHeight={headerHeight}>
      <S.ButtonContainer disabled={page === 1} onClick={() => handleNavigation(page - 1)}>
        <S.Arrow direction="right">&#8592;</S.Arrow> Prev
      </S.ButtonContainer>
      <S.ButtonContainer onClick={handleFirstNavigation}>First</S.ButtonContainer>
      {renderButtons()}
      <S.ButtonContainer onClick={handleLastNavigation}>Last</S.ButtonContainer>
      <S.ButtonContainer
        disabled={page === totalPages}
        onClick={() => handleNavigation(page + 1)}
      >
        Next <S.Arrow direction="left">&#8594;</S.Arrow>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Pagination;
