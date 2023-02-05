import {
  ImgColumn1,
  ImgColumn2,
  ImgColumn3,
  ImgColumn4,
  ImgColumn5,
  ImgColumn6,
  ImgColumn7,
  ImgColumn8,
  Meal01,
  Meal02,
  Meal03,
  Meal04,
  Meal05,
  Meal06,
  Meal07,
} from '@/assets/images';
import { randomItemInArray } from '@/utils/misc';

import { CREATED_AT, UUID } from './ids';

const MEAL_IMAGES = [Meal01, Meal02, Meal03, Meal04, Meal05, Meal06, Meal07];
const POST_IMAGES = [
  ImgColumn1,
  ImgColumn2,
  ImgColumn3,
  ImgColumn4,
  ImgColumn5,
  ImgColumn6,
  ImgColumn7,
  ImgColumn8,
];

const NUMBERS = [
  6965, 6540, 4872, 1847, 9000, 2811, 3831, 9124, 6652, 9440, 1407, 6827,
];

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

export const MEAL_HISTORIES = Array.from({ length: 30 }).map((_, idx) => ({
  id: UUID[idx],
  image: randomItemInArray(MEAL_IMAGES),
  category: randomItemInArray(MEAL_CATEGORIES),
  createdAt: CREATED_AT[idx],
}));

export const MY_EXERCISE_DATA = Array.from({ length: 30 }).map((_, idx) => ({
  id: UUID[idx],
  title: '家事全般（立位・軽い）',
  energy: '26kcal',
  time: '10 min',
}));

export const MY_DIARIES = Array.from({ length: 30 }).map((_, idx) => ({
  id: UUID[idx],
  createdAt: CREATED_AT[idx],
  title: '私の日記の記録が一部表示されます。',
  desc: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
}));

export const BODY_RECORDS_YEAR_DATA = Array.from({ length: 12 }).map(() => ({
  name: '月',
  firstLine: randomItemInArray(NUMBERS),
  secondLine: randomItemInArray(NUMBERS),
}));

export const CATEGORIES = [
  {
    id: 'c2134911-f493-41e1-9f89-8abc6125416a',
    name: 'Recommended Column',
    nameJp: 'オススメ',
  },
  {
    id: '4d5f5734-06e7-40a8-9c17-8a165b2cb423',
    name: 'Recommended Diet',
    nameJp: 'ダイエット',
  },
  {
    id: '639e3b82-81df-4633-ade0-d179727cf0f0',
    name: 'Recommended Beauty',
    nameJp: '美容',
  },
  {
    id: 'c33589ab-36fd-4284-a9a1-7057842aaccb',
    name: 'Recommended Health',
    nameJp: '健康',
  },
];

export const COLUMN_POSTS = Array.from({ length: 30 }).map((_, idx) => ({
  id: UUID[idx],
  createdAt: CREATED_AT[idx],
  title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  tags: ['#魚料理', '#和食', '#DHA'],
  image: randomItemInArray(POST_IMAGES),
  category: randomItemInArray(CATEGORIES.map(cate => cate.id)),
}));
