import { useQuery } from 'react-query';

import { QUERY_KEYS } from '@/configs/query-key';
import { delay } from '@/utils';

import { MY_EXERCISE_DATA } from '../data';

export interface IMyExerciseResponse {
  id: string;
  title: string;
  energy: string;
  time: string;
}

const fetchExercises = async (): Promise<IMyExerciseResponse[]> => {
  await delay(500);

  return MY_EXERCISE_DATA;
};

const useFetchMyExercises = () => {
  return useQuery([QUERY_KEYS.MY_EXERCISES], fetchExercises);
};

export { fetchExercises, useFetchMyExercises };
