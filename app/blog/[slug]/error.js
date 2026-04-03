'use client'; // 错误组件必须是客户端组件

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>出错了！</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>重试</button>
    </div>
  );
}