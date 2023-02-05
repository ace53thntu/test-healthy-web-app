import { useInfiniteQuery } from 'react-query';

import { API_ENDPOINTS } from '@/configs/api-endpoints';
import { fakePagination } from '@/utils';
import { HttpService } from '@/utils/axios-instance';

import { IMealCategoryResponse } from './use-fetch-meal-categories.query';

export interface IMealHistoryResponse {
  id: string;
  image: string;
  category: IMealCategoryResponse;
  createdAt: string;
}

const totalItems = 30;
const limit = 8;

const fetchMealHistories = async (
  page: number
): Promise<IMealHistoryResponse[]> => {
  const { data } = await HttpService.find<IMealHistoryResponse[]>(
    API_ENDPOINTS.MEAL_HISTORIES
  );

  return fakePagination(data, limit, page);
};

const useFetchMealHistories = () => {
  return useInfiniteQuery(
    [API_ENDPOINTS.MEAL_HISTORIES],
    async ({ pageParam = 1 }) => {
      const data = await fetchMealHistories(pageParam);
      return data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = Math.ceil(totalItems / limit);
        return nextPage > allPages.length ? allPages.length + 1 : false;
      },
    }
  );
};

export { fetchMealHistories, useFetchMealHistories };
