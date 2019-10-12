import React, { lazy } from 'react';
const Home = lazy(() => import('../view/Home'));
const About = lazy(() => import('../view/About'));
export default [
  {
    path: "/",
    component: Home,
    exact: true
    // routes: [
    //   {
    //     path: "/tacos/bus",
    //     component: Bus
    //   },
    //   {
    //     path: "/tacos/cart",
    //     component: Cart
    //   }
    // ]
  }, {
    path: "/about",
    component: About,
  }
];