import { IMealButtonProps } from '@/components/common/meal-button';

import { IMealCategoryResponse } from '../../queries';
import { MAP_ICONS } from './transit-input';

interface ITransitInputDto {
  icon: IMealButtonProps['icon'];
  id: string;
  name: string;
}

export function transitInputDto(
  data: IMealCategoryResponse[] | undefined
): ITransitInputDto[] {
  if (!data) {
    return [];
  }

  return data.map(item => ({
    ...item,
    icon: item.icon === 'knife' ? MAP_ICONS.knife : MAP_ICONS.cup,
  }));
}
