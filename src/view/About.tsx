
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <p>This is a about page</p>
    <p>这是一个 about 页面</p>
    <p>
      <Link to="/">Back to Home page</Link>
    </p>
  </div>
);
export default Home;