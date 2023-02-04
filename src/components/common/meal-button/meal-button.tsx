import cn from 'classnames';
import * as React from 'react';

import { Button } from '@/components/base';

import cssClasses from './meal-button.module.css';

export interface IMealButtonProps {
  icon: React.ReactNode;
}

const classes = {
  root: 'flex-col font-inter font-normal text-xl leading-6 before:absolute relative',
} as const;

export const MealButton: React.FC<
  React.PropsWithChildren<IMealButtonProps>
> = ({ icon, children }: React.PropsWithChildren<IMealButtonProps>) => {
  const classesName = cn(cssClasses['meal-button'], classes.root);

  return (
    <Button className={classesName} variant="custom">
      {icon}
      {children}
    </Button>
  );
};

MealButton.displayName = 'MealButton';
