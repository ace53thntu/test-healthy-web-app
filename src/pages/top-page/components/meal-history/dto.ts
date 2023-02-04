import { formatMealHistoryDate } from '@/utils';

import { IMealHistoryResponse } from '../../queries';

interface IMealHistoryDto {
  id: string;
  image: string;
  imageAlt: string;
  date: string;
}

export const mealHistoriesDto = (
  data: IMealHistoryResponse[][] | undefined
): IMealHistoryDto[] => {
  if (!data) {
    return [];
  }

  const mealHistories: IMealHistoryDto[] = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const { id, image, category, createdAt } = data[i][j];
      const date = `${formatMealHistoryDate(createdAt)}.${category.name}`;
      mealHistories.push({
        id,
        image,
        imageAlt: date,
        date,
      });
    }
  }

  return mealHistories;
};
