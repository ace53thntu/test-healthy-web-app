import * as React from 'react';

import { BodyFatGraph, MyDiary, MyExercise, RecordButtons } from './components';

/**
 * TODO:
 * - Body fat percentages graph
 * - My exercise
 */

const MyRecordPage: React.FC = () => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col gap-[56px] pt-[56px] pb-[64px]">
      <RecordButtons />

      <BodyFatGraph />

      <MyExercise />

      <MyDiary />
    </div>
  );
};

MyRecordPage.displayName = 'MyRecordPage';

export default MyRecordPage;
