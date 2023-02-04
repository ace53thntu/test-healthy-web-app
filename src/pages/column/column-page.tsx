import * as React from 'react';

import { ColumnCategories, ColumnPosts } from './components';

const ColumnPage: React.FC = () => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col gap-[56px] pt-[56px] pb-[64px]">
      <ColumnCategories />

      <ColumnPosts />
    </div>
  );
};

ColumnPage.displayName = 'ColumnPage';

export default ColumnPage;
