import * as React from 'react';

import { Meal03 } from '@/assets/images';

import { AchievementCircle } from './achievement-circle';

export const Achievement: React.FC = () => {
  return (
    <div className="relative z-[1] h-[312px] w-[540px] before:absolute before:inset-0 before:bg-achievement-bg before:mix-blend-soft-light">
      <img
        alt="Achievement"
        src={Meal03}
        className="h-[312px] w-full object-cover"
      />

      <AchievementCircle percentage={75} date={'5/12'} />
    </div>
  );
};

Achievement.displayName = 'Achievement';
