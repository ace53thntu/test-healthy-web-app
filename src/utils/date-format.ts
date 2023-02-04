import dayjs from 'dayjs';

export const formatMealHistoryDate = (date: string): string => {
  return dayjs(date).format('MM.DD');
};

export const formatDiaryDate = (date: string): string => {
  return dayjs(date).format('YYYY.MM.DD');
};

export const formatDiaryTime = (date: string): string => {
  return dayjs(date).format('HH:mm');
};

export const getTodayDate = (): string => {
  return dayjs().format('YYYY.MM.DD');
};
