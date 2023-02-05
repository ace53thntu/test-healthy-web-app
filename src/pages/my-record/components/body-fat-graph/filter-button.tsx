import * as React from 'react';

import { Button } from '@/components/base';

type FilterButton = React.PropsWithChildren<Record<string, unknown>> & {
  active?: boolean;
  filterBy: 'day' | 'week' | 'month' | 'year';
  handleFilterClick: () => void;
};

export const FilterButton: React.FC<FilterButton> = ({
  children,
  active = false,
  filterBy,
  handleFilterClick,
}: FilterButton) => {
  return (
    <Button
      className={
        active ? 'bg-primary-300 text-light' : 'bg-light text-primary-300'
      }
      variant="graph"
      onClick={() => handleFilterClick(filterBy)}
    >
      {children}
    </Button>
  );
};

FilterButton.displayName = 'FilterButton';
