import * as React from 'react';

import { MY_RECORD_PAGE_IDS } from '../../constants';

export const MyExercise: React.FC = () => {
  return (
    <div
      id={MY_RECORD_PAGE_IDS.myExercise}
      className="h-[264px] w-full bg-dark-500"
    >
      MyExercise
    </div>
  );
};

MyExercise.displayName = 'MyExercise';
