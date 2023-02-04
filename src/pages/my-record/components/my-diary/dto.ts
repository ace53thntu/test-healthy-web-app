import { formatDiaryDate, formatDiaryTime } from '@/utils';

import { IMyDiaryResponse } from '../../queries';
import { IDiaryItemProps } from './diary-item';

type IMyDiaryDto = IDiaryItemProps;

export const myDiariesDto = (
  data: IMyDiaryResponse[][] | undefined
): IMyDiaryDto[] => {
  if (!data) {
    return [];
  }

  const myDiaries: IMyDiaryDto[] = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const { id, title, desc, createdAt } = data[i][j];
      const date = `${formatDiaryDate(createdAt)}`;
      const time = `${formatDiaryTime(createdAt)}`;
      myDiaries.push({
        id,
        desc,
        title,
        date,
        time,
      });
    }
  }

  return myDiaries;
};
