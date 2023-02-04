import * as React from 'react';

import { MY_RECORD_PAGE_IDS } from '../../constants';

export const BodyFatGraph: React.FC = () => {
  return (
    <div
      id={MY_RECORD_PAGE_IDS.bodyFatGraph}
      className="h-[304px] w-full bg-dark-500"
    >
      BodyFatGraph
    </div>
  );
};

BodyFatGraph.displayName = 'BodyFatGraph';
