import { useQuery } from 'react-query';

import { API_ENDPOINTS } from '@/configs/api-endpoints';
import { HttpService } from '@/utils/axios-instance';

export interface IMyExerciseResponse {
  id: string;
  title: string;
  energy: string;
  time: string;
}

const fetchExercises = async (): Promise<IMyExerciseResponse[]> => {
  const { data } = await HttpService.find<IMyExerciseResponse[]>(
    API_ENDPOINTS.MY_EXERCISES
  );

  return data;
};

const useFetchMyExercises = () => {
  return useQuery([API_ENDPOINTS.MY_EXERCISES], fetchExercises);
};

export { fetchExercises, useFetchMyExercises };
