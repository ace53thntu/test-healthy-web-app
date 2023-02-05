/* eslint-disable @typescript-eslint/no-explicit-any */

export function randomItemInArray(items: any[]): any {
  return items[Math.floor(Math.random() * items.length)];
}

export function fakePagination(
  items: any[],
  pageSize: number,
  page: number
): any[] {
  return items.slice((page - 1) * pageSize, page * pageSize);
}
