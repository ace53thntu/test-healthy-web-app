import cn from 'classnames';
import * as React from 'react';

import classes from './achievement-circle.module.scss';

export const AchievementCircle: React.FC = () => {
  // return (
  //   <div className="absolute top-2/4 left-1/2 h-[181px] w-[181px] translate-y-[-50%] translate-x-[-50%] rounded-[50%] text-light">
  //     <span className="absolute block w-[181px]">75%</span>
  //     <div className="slice">
  //       <div className="bar"></div>
  //       <div className="fill"></div>
  //     </div>
  //   </div>
  // );

  const classesName = cn(classes.c100);

  return (
    <div
      className={`c100 p50 absolute top-2/4 left-1/2 h-[181px] w-[181px] translate-y-[-50%] translate-x-[-50%] rounded-[50%] text-light ${classesName}`}
    >
      <span>50%</span>
      <div className="slice">
        <div className="bar"></div>
        <div className="fill"></div>
      </div>
    </div>
  );
};

AchievementCircle.displayName = 'AchievementCircle';
