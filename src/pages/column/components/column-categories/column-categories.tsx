import * as React from 'react';

import { CATEGORIES } from '../../data';
import { Category } from './category';

export const ColumnCategories: React.FC = () => {
  return (
    <div className="flex w-full w-full justify-between">
      {CATEGORIES.map(({ id, name, nameJp }) => (
        <Category key={id} name={name} nameJp={nameJp} id={id} />
      ))}
    </div>
  );
};

ColumnCategories.displayName = 'ColumnCategories';
