import * as React from 'react';

import { Button } from '@/components/base';
import { Post, PostTags, Time } from '@/components/common';

import { useFetchPosts } from '../../queries';
import { columnPostsDto } from './dto';

export const ColumnPosts: React.FC = () => {
  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useFetchPosts();

  const posts = React.useMemo(() => {
    return columnPostsDto(data?.pages);
  }, [data?.pages]);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const isDisabled = isFetching || isFetchingNextPage;

  return (
    <div className="flex w-full flex-col">
      <div className="flex grid grid-cols-4 gap-[8px]">
        {posts.map(({ id, title, image, imageAlt, date, time, tags }) => (
          <Post
            key={id}
            title={title}
            image={{
              src: image,
              alt: imageAlt,
            }}
            time={<Time date={date} time={time} />}
            tags={<PostTags tags={tags} />}
          />
        ))}
      </div>

      {hasNextPage ? (
        <Button
          className="mt-[26px] self-center"
          disabled={isDisabled}
          onClick={handleLoadMore}
        >
          {isFetchingNextPage ? '読み込み中...' : 'コラムをもっと見る'}
        </Button>
      ) : null}
    </div>
  );
};

ColumnPosts.displayName = 'ColumnPosts';
