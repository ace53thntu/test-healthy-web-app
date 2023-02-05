import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { API_ENDPOINTS } from '@/configs/api-endpoints';
import {
  COLUMN_POSTS,
  MEAL_CATEGORIES,
  MEAL_HISTORIES,
  MY_DIARIES,
  MY_EXERCISE_DATA,
} from '@/data';

const mockRequest = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios, {
    delayResponse: 500,
  });

  mock.onGet(API_ENDPOINTS.MEAL_CATEGORIES).reply(200, MEAL_CATEGORIES);
  mock.onGet(API_ENDPOINTS.MEAL_HISTORIES).reply(200, MEAL_HISTORIES);
  mock.onGet(API_ENDPOINTS.MY_EXERCISES).reply(200, MY_EXERCISE_DATA);
  mock.onGet(API_ENDPOINTS.MY_DIARIES).reply(200, MY_DIARIES);
  mock.onGet(API_ENDPOINTS.COLUMN_POSTS).reply(200, COLUMN_POSTS);
};

export default mockRequest;
