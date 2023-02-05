import * as React from 'react';

import classes from './achievement-circle.module.css';

type AchievementCircleProps = {
  percentage: number;
  date: string;
};

const SHADOW_COLOR = '#FC7400';

export const AchievementCircle: React.FC<AchievementCircleProps> = ({
  percentage,
  date,
}: AchievementCircleProps) => {
  const circleSizeClasses = 'h-[205px] w-[205px]';
  const textClasses = 'font-inter text-white drop-shadow-[0_0px_6px_#FC7400]';

  return (
    <div
      className={`absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] ${circleSizeClasses} flex items-center justify-center`}
    >
      <div className="inline-block">
        <span className={`${textClasses} text-[1.125rem] leading-[1.375rem]`}>
          {date}
        </span>
        <span
          className={`${textClasses} ml-[4px] text-[1.563rem] leading-[1.875rem]`}
        >
          {percentage}%
        </span>
      </div>
      <svg
        viewBox="0 0 36 36"
        className={`absolute inset-0 block ${circleSizeClasses}`}
      >
        <path
          className={classes.circle}
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          filter="url(#shadow)"
        />

        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="0.6"
              floodColor={SHADOW_COLOR}
              floodOpacity="1"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

AchievementCircle.displayName = 'AchievementCircle';
