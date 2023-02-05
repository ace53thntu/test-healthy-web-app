import * as React from 'react';

import { ChervonUpIcon } from '@/components/icons';

export const ScrollTop: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
        setIsHover(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleMouseOver = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsHover(true);
  };

  const handleMouseOut = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsHover(false);
  };

  const handleOnFocus = (evt: React.FocusEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsHover(true);
  };

  const handleOnBlur = (evt: React.FocusEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsHover(false);
  };

  return showTopBtn ? (
    <button
      className="fixed bottom-[160px] right-[96px] flex h-[48px] w-[48px] items-center justify-center rounded-[50%] border border-gray-400 hover:border-none hover:bg-primary-400"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onClick={goToTop}
    >
      <ChervonUpIcon fill={isHover ? '#FFFFFF' : '#777777'} />
    </button>
  ) : null;
};

ScrollTop.displayName = 'ScrollTop';
