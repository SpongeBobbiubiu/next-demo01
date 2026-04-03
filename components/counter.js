// components/Counter.js
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        增加
      </button>
      <button onClick={() => setCount(0)}>
        重置
      </button>
    </div>
  );
}