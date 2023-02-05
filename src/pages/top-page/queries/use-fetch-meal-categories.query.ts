import { useQuery } from 'react-query';

import { API_ENDPOINTS } from '@/configs/api-endpoints';
import { HttpService } from '@/utils/axios-instance';

export interface IMealCategoryResponse {
  id: string;
  name: string;
  icon: string;
}

const fetchMealCategories = async (): Promise<IMealCategoryResponse[]> => {
  const { data } = await HttpService.find<IMealCategoryResponse[]>(
    API_ENDPOINTS.MEAL_CATEGORIES
  );

  return data;
};

const useFetchMealCategories = () => {
  return useQuery([API_ENDPOINTS.MEAL_CATEGORIES], fetchMealCategories);
};

export { fetchMealCategories, useFetchMealCategories };
