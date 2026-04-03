// app/layout.js
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: '我的 Next.js 应用',
  description: '新手入门演示',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {/* 导航栏 */}
        <nav style={{ background: '#333', padding: '1rem', color: 'white' }}>
          <Link href="/" style={{ color: 'white', marginRight: '20px' }}>首页</Link>
          <Link href="/about" style={{ color: 'white' }}>关于</Link>
        </nav>
        {/* 页面内容 */}
        <main>{children}</main>
      </body>
    </html>
  );
}