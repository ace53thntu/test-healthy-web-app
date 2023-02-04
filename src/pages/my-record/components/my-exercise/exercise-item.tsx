import * as React from 'react';

type ExerciseItemProps = {
  title: string;
  energy: string;
  time: string;
};

export const ExerciseItem: React.FC<ExerciseItemProps> = ({
  title,
  time,
  energy,
}: ExerciseItemProps) => {
  return (
    <div className="flex flex-col border-b border-gray-400 pb-[2px] pr-[13px]">
      <div className="flex justify-between">
        <div className="flex font-light text-white">
          <div className="pt-[5px] text-[5px] leading-[7px] tracking-[0.015px]">
            ●
          </div>
          <div className="ml-[11px] text-[0.938rem] leading-[1.125rem] tracking-[0.075px]">
            {title}
          </div>
        </div>
        <div className="text-right font-inter text-[1.125rem] leading-[1.375rem] tracking-[0.09px] text-primary-300">
          {time}
        </div>
      </div>

      <div className="ml-[16px] font-inter text-[0.938rem] leading-[1.125rem] tracking-[0.075px] text-primary-300">
        {energy}
      </div>
    </div>
  );
};

ExerciseItem.displayName = 'ExerciseItem';
