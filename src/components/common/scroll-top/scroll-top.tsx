import * as React from 'react';

import { ScrollIcon } from '@/components/icons';

export const ScrollTop: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return showTopBtn ? (
    <button className="fixed bottom-[10rem] right-[6rem]" onClick={goToTop}>
      <ScrollIcon />
    </button>
  ) : null;
};

ScrollTop.displayName = 'ScrollTop';
