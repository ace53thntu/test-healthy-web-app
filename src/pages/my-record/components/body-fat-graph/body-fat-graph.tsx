import * as React from 'react';

import { BodyChart, RecordHeader } from '@/components/common';
import { getLast12Months } from '@/utils';

import { MY_RECORD_PAGE_IDS } from '../../constants';
import { BODY_RECORDS_YEAR_DATA } from '../../data';
import { FilterButton } from './filter-button';

export const BodyFatGraph: React.FC = () => {
  const [currentFilter, setCurrentFilter] = React.useState('year');

  const chartData = React.useMemo(() => {
    return BODY_RECORDS_YEAR_DATA.map((item, index) => ({
      ...item,
      name: `${getLast12Months()[11 - index]} ${item.name}`,
    }));
  }, []);

  const handleFilterClick = (filterBy: string) => {
    setCurrentFilter(filterBy);
  };

  return (
    <div
      id={MY_RECORD_PAGE_IDS.bodyFatGraph}
      className="relative h-[304px] w-full bg-dark-500 py-[16px] pl-[24px] pr-[24px]"
    >
      <RecordHeader heading="Body Record" />

      <div className="flex items-center justify-center">
        <BodyChart data={chartData} width={910} height={220} right={30} />
      </div>

      <div className="absolute bottom-[16px] left-[32px] flex gap-x-[16px]">
        {/* Day */}
        <FilterButton
          active={currentFilter === 'day'}
          filterBy="day"
          handleFilterClick={handleFilterClick}
        >
          日
        </FilterButton>
        {/* Week */}
        <FilterButton
          active={currentFilter === 'week'}
          filterBy="week"
          handleFilterClick={handleFilterClick}
        >
          週
        </FilterButton>
        {/* Month */}
        <FilterButton
          active={currentFilter === 'month'}
          filterBy="month"
          handleFilterClick={handleFilterClick}
        >
          月
        </FilterButton>
        {/* Year */}
        <FilterButton
          active={currentFilter === 'year'}
          filterBy="year"
          handleFilterClick={handleFilterClick}
        >
          年
        </FilterButton>
      </div>
    </div>
  );
};

BodyFatGraph.displayName = 'BodyFatGraph';
