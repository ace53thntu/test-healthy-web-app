import * as React from 'react';

import {
  Achievement,
  BodyGraph,
  MealHistory,
  TransitInput,
} from './components';

/**
 * TODO:
 * - Achievement percentage
 */

const TopPage: React.FC = () => {
  return (
    <div>
      <div className="mx-auto flex lg:max-w-[1280px]">
        <Achievement />
        <BodyGraph />
      </div>

      <div className="">
        <TransitInput />
        <MealHistory />
      </div>
    </div>
  );
};

TopPage.displayName = 'TopPage';

export default TopPage;
