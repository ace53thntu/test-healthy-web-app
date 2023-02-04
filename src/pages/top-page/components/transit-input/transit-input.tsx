import * as React from 'react';

import { MealButton } from '@/components/common';
import { CupIcon, KnifeIcon } from '@/components/icons';

import { useFetchMealCategories } from '../../queries';
import { transitInputDto } from './dto';

export const MAP_ICONS = {
  knife: <KnifeIcon />,
  cup: <CupIcon />,
};

export const TransitInput: React.FC = () => {
  const { data } = useFetchMealCategories();

  const mealCates = React.useMemo(() => {
    return transitInputDto(data);
  }, [data]);

  return (
    <div className="mx-auto mt-[25px] mb-[25px] flex w-[44.75rem] justify-between">
      {mealCates.map(({ name, icon }, index) => (
        <MealButton key={index} icon={icon}>
          {name}
        </MealButton>
      ))}
    </div>
  );
};

TransitInput.displayName = 'TransitInput';
