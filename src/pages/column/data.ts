import { faker } from '@faker-js/faker';

import {
  ImgColumn1,
  ImgColumn2,
  ImgColumn3,
  ImgColumn4,
  ImgColumn5,
  ImgColumn6,
  ImgColumn7,
  ImgColumn8,
} from '@/assets/images';
import { randomItemInArray } from '@/utils';

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

export const COLUMN_POSTS = Array.from({ length: 30 }).map(() => ({
  id: faker.datatype.uuid(),
  createdAt: faker.date.recent().toISOString(),
  title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  tags: ['#魚料理', '#和食', '#DHA'],
  image: randomItemInArray(POST_IMAGES),
  category: randomItemInArray(CATEGORIES.map(cate => cate.id)),
}));
