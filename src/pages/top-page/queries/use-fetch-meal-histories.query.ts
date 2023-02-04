import { useInfiniteQuery } from 'react-query';

import { delay, fakePagination } from '@/utils';

import { MEAL_HISTORIES } from '../data';
import { QUERY_KEYS } from './constants';
import { IMealCategoryResponse } from './use-fetch-meal-categories.query';

export interface IMealHistoryResponse {
  id: string;
  image: string;
  category: IMealCategoryResponse;
  createdAt: string;
}

const totalPage = MEAL_HISTORIES.length;

const fetchMealHistories = async (page: number): IMealHistoryResponse[] => {
  await delay(500);

  return fakePagination(MEAL_HISTORIES, 8, page);
};

const useFetchMealHistories = () => {
  return useInfiniteQuery(
    [QUERY_KEYS.MEAL_HISTORIES],
    async ({ pageParam = 1 }) => {
      const data = await fetchMealHistories(pageParam);
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

export { fetchMealHistories, useFetchMealHistories };
