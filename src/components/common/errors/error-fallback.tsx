import * as React from 'react';

import { Button } from '@/components/base';

type ErrorFallbackProps = {
  resetErrorBoundary: () => void;
};

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return (
    <div>
      <p>
        Uh oh... There is a problem or we have a new update. Try refreshing the
        app.
      </p>

      <Button onClick={resetErrorBoundary}>Click to refresh</Button>
    </div>
  );
};

ErrorFallback.displayName = 'ErrorFallback';
