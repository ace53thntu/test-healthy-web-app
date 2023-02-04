import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import { ROUTERS } from './configs/router.config';

const AppWithRoutes: React.FC = () => {
  const routes = useRoutes(ROUTERS);

  return routes;
};

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="app">
        <AppWithRoutes />
      </div>
    </React.Suspense>
  );
}

export default App;
