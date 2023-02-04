import { IMealButtonProps } from '@/components/common/meal-button';

import { IMealCategoryResponse } from '../../queries';
import { MAP_ICONS } from './transit-input';

interface ITransitInputDto extends IMealCategoryResponse {
  icon: IMealButtonProps['icon'];
}

export function transitInputDto(
  data: IMealCategoryResponse[] | undefined
): ITransitInputDto[] {
  if (!data) {
    return [];
  }

  return data.map(item => ({
    ...item,
    icon: MAP_ICONS[item.icon],
  }));
}
