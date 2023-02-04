import { useInfiniteQuery } from 'react-query';

import { QUERY_KEYS } from '@/configs/query-key';
import { delay, fakePagination } from '@/utils';

import { COLUMN_POSTS } from '../data';

export interface IPostResponse {
  id: string;
  createdAt: string;
  title: string;
  image: string;
  category: string;
  tags: string[];
}

const totalPage = COLUMN_POSTS.length;

const fetchPosts = async (page: number): IPostResponse[] => {
  await delay(500);

  return fakePagination(COLUMN_POSTS, 8, page);
};

const useFetchPosts = () => {
  return useInfiniteQuery(
    [QUERY_KEYS.COLUMN_POSTS],
    async ({ pageParam = 1 }) => {
      const data = await fetchPosts(pageParam);
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

export { fetchPosts, useFetchPosts };
