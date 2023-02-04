import cn from 'classnames';
import * as React from 'react';

type TimeProps = {
  date: string;
  time?: string;
  className?: string;
};

const classes = {
  root: 'font-inter font-normal text-[15px] leading-[18px] text-white absolute left-0 bottom-0 px-[10px] py-[7px] tracking-[0.15px] bg-primary-300',
};

export const Time: React.FC<TimeProps> = ({
  className,
  date,
  time,
}: TimeProps) => {
  const classesName = cn(classes.root, className);

  return (
    <figcaption className={classesName}>
      {date} {time ? <time className="ml-[6px]">{time}</time> : null}
    </figcaption>
  );
};

Time.displayName = 'Time';
