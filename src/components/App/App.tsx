import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, NotFoundPage } from 'pages';
import { AppBar } from 'components/AppBar';


export const App = ()  => {
  return (
       <>
      <AppBar></AppBar>
      <Suspense fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </Suspense>
    </>
  );
}

