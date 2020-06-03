import { BrowserRouter as Router } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spin } from 'antd';
import RouterCofig from './router/index'
import './global.less'
const App = () => (
  <Router>
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      }
    >
      <RouterCofig></RouterCofig>
    </Suspense>
  </Router>
)
export default App;