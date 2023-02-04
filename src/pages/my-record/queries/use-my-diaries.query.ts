import { useInfiniteQuery } from 'react-query';

import { QUERY_KEYS } from '@/configs/query-key';
import { delay, fakePagination } from '@/utils';

import { MY_DIARIES } from '../data';

export interface IMyDiaryResponse {
  id: string;
  createdAt: string;
  title: string;
  desc: string;
}

const totalPage = MY_DIARIES.length;

const fetchMyDiary = async (page: number): IMyDiaryResponse[] => {
  await delay(500);

  return fakePagination(MY_DIARIES, 8, page);
};

const useFetchMyDiaries = () => {
  return useInfiniteQuery(
    [QUERY_KEYS.MY_DIARIES],
    async ({ pageParam = 1 }) => {
      const data = await fetchMyDiary(pageParam);
      return data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = Math.ceil(totalPage / 8);
        return nextPage > allPages.length ? allPages.length + 1 : false;
      },
    }
  );
};

export { fetchMyDiary, useFetchMyDiaries };
