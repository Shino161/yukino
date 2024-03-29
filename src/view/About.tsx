
import React, { useState, useEffect } from 'react';
import { Button } from 'antd'
import style from "./style.less";

function Example() {
  const [count, setCount] = useState(0); 
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p className={style.title}>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}

export default Example;