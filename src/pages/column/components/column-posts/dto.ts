import { formatDiaryDate, formatDiaryTime } from '@/utils';

import { IPostResponse } from '../../queries';

type IPostDto = Omit<IPostResponse, 'createdAt'> & {
  date: string;
  time: string;
  imageAlt: string;
};

export const columnPostsDto = (
  data: IPostResponse[][] | undefined
): IPostDto[] => {
  if (!data) {
    return [];
  }

  const posts: IPostDto[] = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const { id, title, createdAt, image, tags, category } = data[i][j];
      const date = `${formatDiaryDate(createdAt)}`;
      const time = `${formatDiaryTime(createdAt)}`;
      posts.push({
        id,
        title,
        date,
        time,
        tags,
        image,
        imageAlt: title,
        category,
      });
    }
  }

  return posts;
};
