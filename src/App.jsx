import React, { memo, Suspense } from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';

const App = () => (
  <Root>
    <Suspense>
      <Router>
        <Routes path="*" />
      </Router>
    </Suspense>
  </Root>
);

export default memo(App);
