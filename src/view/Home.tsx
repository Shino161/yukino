import React, { Component, lazy, Suspense } from "react";
import { Skeleton } from 'antd';
const ContentView = lazy(() => import('./ContentView'));

const Home = () => (
  <Suspense fallback={<Skeleton active />}>
    <ContentView />
  </Suspense>
);
export default Home;