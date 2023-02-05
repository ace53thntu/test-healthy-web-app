import * as React from 'react';

import { getTodayDate } from '@/utils';

type RecordHeaderProps = {
  heading: string;
};

export const RecordHeader: React.FC<RecordHeaderProps> = ({
  heading,
}: RecordHeaderProps) => {
  return (
    <div className="flex text-white">
      <h2 className="w-[96px] font-inter text-[0.938rem] uppercase leading-[1.125rem] tracking-[0.15px]">
        {heading}
      </h2>
      <div className="font-inter text-[1.375rem] leading-[1.688rem] tracking-[0.11px]">
        {getTodayDate()}
      </div>
    </div>
  );
};

RecordHeader.displayName = 'RecordHeader';
