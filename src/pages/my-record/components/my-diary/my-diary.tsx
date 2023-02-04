import * as React from 'react';

import { Button } from '@/components/base';

import { MY_RECORD_PAGE_IDS } from '../../constants';
import { useFetchMyDiaries } from '../../queries';
import { DiaryItem } from './diary-item';
import { myDiariesDto } from './dto';

export const MyDiary: React.FC = () => {
  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useFetchMyDiaries();

  const diaries = React.useMemo(() => {
    return myDiariesDto(data?.pages);
  }, [data]);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const isDisabled = isFetching || isFetchingNextPage;

  return (
    <div className="flex w-full flex-col" id={MY_RECORD_PAGE_IDS.myDiary}>
      <h3 className="font-inter text-[1.375rem] uppercase leading-[1.688rem] tracking-[0.11px] text-dark-500">
        My Diary
      </h3>

      <div className="flex grid grid-cols-4 gap-[12px]">
        {diaries.map(diary => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </div>

      {hasNextPage ? (
        <Button
          className="mt-[30px] self-center"
          disabled={isDisabled}
          onClick={handleLoadMore}
        >
          {isFetchingNextPage ? '読み込み中...' : '自分の日記をもっと見る'}
        </Button>
      ) : null}
    </div>
  );
};

MyDiary.displayName = 'MyDiary';
