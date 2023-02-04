import * as React from 'react';

import { ErrorBoundary } from '@/components/common';

const ColumnPage = React.lazy(() => import('./column-page'));

const ColumnPageLazy: React.FC = () => {
  return (
    <ErrorBoundary>
      <ColumnPage />
    </ErrorBoundary>
  );
};

export { ColumnPageLazy };
