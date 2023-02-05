import { useInfiniteQuery } from 'react-query';

import { API_ENDPOINTS } from '@/configs/api-endpoints';
import { fakePagination } from '@/utils';
import { HttpService } from '@/utils/axios-instance';

export interface IPostResponse {
  id: string;
  createdAt: string;
  title: string;
  image: string;
  category: string;
  tags: string[];
}

const totalItems = 30;
const limit = 8;

const fetchPosts = async (page: number): Promise<IPostResponse[]> => {
  const { data } = await HttpService.find<IPostResponse[]>(
    API_ENDPOINTS.COLUMN_POSTS
  );

  return fakePagination(data, limit, page);
};

const useFetchPosts = () => {
  return useInfiniteQuery(
    [API_ENDPOINTS.COLUMN_POSTS],
    async ({ pageParam = 1 }) => {
      const data = await fetchPosts(pageParam);
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

export { fetchPosts, useFetchPosts };
