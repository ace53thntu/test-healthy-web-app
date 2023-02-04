import * as dayjs from 'dayjs';

export const formatMealHistoryDate = (date: string): string => {
  return dayjs(date).format('MM.DD');
};
