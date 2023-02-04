import { faker } from '@faker-js/faker';

import {
  Meal01,
  Meal02,
  Meal03,
  Meal04,
  Meal05,
  Meal06,
  Meal07,
} from '@/assets/images';
import { randomItemInArray } from '@/utils/misc';

const MEAL_IMAGES = [Meal01, Meal02, Meal03, Meal04, Meal05, Meal06, Meal07];

export const MEAL_CATEGORIES = [
  {
    id: '37405faf-c5de-4618-ad21-f5a83de5c786',
    name: 'Morning',
    icon: 'knife',
  },
  {
    id: '9cabaab6-67ce-4ed4-908f-657a1b9c81f5',
    name: 'Lunch',
    icon: 'knife',
  },
  {
    id: 'cb2e54d0-3b0c-423e-b6b6-ee322e83b8de',
    name: 'Dinner',
    icon: 'knife',
  },
  {
    id: 'ed5a827d-2c50-476f-b961-b36f1745f6da',
    name: 'Snack',
    icon: 'cup',
  },
];

export const MEAL_HISTORIES = Array.from({ length: 30 }).map(() => ({
  id: faker.datatype.uuid(),
  image: randomItemInArray(MEAL_IMAGES),
  category: randomItemInArray(MEAL_CATEGORIES),
  createdAt: faker.date.recent().toISOString(),
}));
