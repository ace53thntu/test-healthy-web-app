import * as React from 'react';

import { Button } from '@/components/base';
import { MealStory, Time } from '@/components/common';

import { useFetchMealHistories } from '../../queries';
import { mealHistoriesDto } from './dto';

export const MealHistory: React.FC = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } =
    useFetchMealHistories();

  const mealHistorys = React.useMemo(() => {
    return mealHistoriesDto(data?.pages);
  }, [data]);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const isDisabled = isFetching || isFetchingNextPage;

  return (
    <div className="flex flex-col items-center pb-[4rem]">
      <div className="mx-auto grid w-[60rem] grid-cols-4 gap-1">
        {mealHistorys.map(({ id, image, imageAlt, date }) => (
          <MealStory
            key={id}
            image={{
              src: image,
              alt: imageAlt,
            }}
            date={<Time date={date} />}
          />
        ))}
      </div>

      {hasNextPage ? (
        <Button
          className="mt-[28px]"
          disabled={isDisabled}
          onClick={handleLoadMore}
        >
          {isFetchingNextPage ? '読み込み中...' : '記録をもっと見る'}
        </Button>
      ) : null}
    </div>
  );
};

MealHistory.displayName = 'MealHistory';
