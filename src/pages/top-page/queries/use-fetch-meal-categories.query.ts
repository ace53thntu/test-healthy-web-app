import { useQuery } from 'react-query';

import { delay } from '@/utils';

import { MEAL_CATEGORIES } from '../data';
import { QUERY_KEYS } from './constants';

export interface IMealCategoryResponse {
  id: string;
  name: string;
  icon: string;
}

const fetchMealCategories = async (): IMealCategoryResponse[] => {
  await delay(500);

  return MEAL_CATEGORIES;
};

const useFetchMealCategories = () => {
  return useQuery([QUERY_KEYS.MEAL_CATEGORIES], fetchMealCategories);
};

export { fetchMealCategories, useFetchMealCategories };
