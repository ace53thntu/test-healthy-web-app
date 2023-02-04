import * as React from 'react';

import { Meal03 } from '@/assets/images';

export const Achievement: React.FC = () => {
  return (
    <div className="relative z-[1] h-[316px] w-[540px] before:absolute before:inset-0 before:bg-achievement-bg before:mix-blend-soft-light">
      <img
        alt="Achievement"
        src={Meal03}
        className="h-[316px] w-full object-cover"
      />

      {/* <AchievementCircle /> */}
    </div>
  );
};

Achievement.displayName = 'Achievement';
