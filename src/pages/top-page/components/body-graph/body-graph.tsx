import * as React from 'react';

import { BodyChart } from '@/components/common';
import { BODY_RECORDS_YEAR_DATA } from '@/data';
import { getLast12Months } from '@/utils';

export const BodyGraph: React.FC = () => {
  const chartData = React.useMemo(() => {
    return BODY_RECORDS_YEAR_DATA.map((item, index) => ({
      ...item,
      name: `${getLast12Months()[11 - index]} ${item.name}`,
    }));
  }, []);

  return (
    <div className="flex h-[312px] w-[740px] bg-dark-600 pt-[12px] pl-[23px]">
      <BodyChart data={chartData} width={634} height={294} right={15} />
    </div>
  );
};

BodyGraph.displayName = 'BodyGraph';
