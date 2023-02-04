import { faker } from '@faker-js/faker';

export const MY_DIARIES = Array.from({ length: 30 }).map(() => ({
  id: faker.datatype.uuid(),
  createdAt: faker.date.recent().toISOString(),
  title: '私の日記の記録が一部表示されます。',
  desc: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
}));
