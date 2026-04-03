// app/about/page.js
import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>关于我们</h2>
      <p>这是一个简单的 Next.js 演示应用，使用 App Router。</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        返回首页
      </Link>
    </div>
  );
}