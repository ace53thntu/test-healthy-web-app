import * as React from 'react';

import { getTodayDate } from '@/utils';

import { MY_RECORD_PAGE_IDS } from '../../constants';
import { useFetchMyExercises } from '../../queries';
import { ExerciseItem } from './exercise-item';

export const MyExercise: React.FC = () => {
  const { data } = useFetchMyExercises();

  return (
    <div
      id={MY_RECORD_PAGE_IDS.myExercise}
      className="h-[264px] w-full bg-dark-500 py-[16px] pl-[24px] pr-[26px]"
    >
      <div className="flex text-white">
        <h2 className="w-[96px] font-inter text-[0.938rem] uppercase leading-[1.125rem] tracking-[0.15px]">
          My Exercise
        </h2>
        <div className="font-inter text-[1.375rem] leading-[1.688rem] tracking-[0.11px]">
          {getTodayDate()}
        </div>
      </div>

      <div className="scrollbar relative mt-[4px] flex grid h-[192px] grid-cols-2 gap-x-[40px] gap-y-[8px] overflow-auto pr-[30px] pb-[8px]">
        {data?.map(({ title, energy, time }, index) => (
          <ExerciseItem key={index} title={title} energy={energy} time={time} />
        ))}
      </div>
    </div>
  );
};

MyExercise.displayName = 'MyExercise';
