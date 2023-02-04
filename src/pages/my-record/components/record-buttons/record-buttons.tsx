import * as React from 'react';

import { MyRecord01, MyRecord02, MyRecord03 } from '@/assets/images';
import { RecordCategory } from '@/components/common';
import { NAVBAR_HEIGHT } from '@/configs/menu.config';

import { MY_RECORD_PAGE_IDS } from '../../constants';

export const RecordButtons: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top:
          element.getBoundingClientRect().top +
          window.pageYOffset -
          NAVBAR_HEIGHT,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mx-auto flex w-full justify-between">
      <RecordCategory
        image={{
          src: MyRecord01,
          alt: 'Body Record',
        }}
        name="Body Record"
        caption="自分のカラダの記録"
        onClick={() => handleScrollTo(MY_RECORD_PAGE_IDS.bodyFatGraph)}
      />
      <RecordCategory
        image={{
          src: MyRecord02,
          alt: 'My Exercise',
        }}
        name="My Exercise"
        caption="自分の運動の記録"
        onClick={() => handleScrollTo(MY_RECORD_PAGE_IDS.myExercise)}
      />
      <RecordCategory
        image={{
          src: MyRecord03,
          alt: 'My Diary',
        }}
        name="My Diary"
        caption="自分の日記"
        onClick={() => handleScrollTo(MY_RECORD_PAGE_IDS.myDiary)}
      />
    </div>
  );
};

RecordButtons.displayName = 'RecordButtons';
